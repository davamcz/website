import {
  booleanArg,
  extendType,
  idArg,
  objectType,
  stringArg,
  intArg,
} from 'nexus'
import { vokativ } from 'vokativ'
import {
  capitalize,
  constants,
  isTransactionReserved,
  offerRemainingAmount,
  getConfirmationHash,
  getUserInfo,
} from '../utils/helpers'
import { sendEmail } from '../../emails'
const { PAID } = constants.paymentStatus

export const Offer = objectType({
  name: 'Offer',
  definition: t => {
    t.model.id()
    t.model.active()
    t.model.amount()
    t.model.name()
    t.model.beneficator()
    t.model.price()
    t.model.gallery()
    t.model.transport()
    t.model.description()
    t.model.user()
    t.field('remainingAmount', {
      type: 'Int',
      resolve: async ({ id, amount }, _, { photon }) => {
        const transactions = await photon.transactions({
          where: { offer: { id } },
        })

        const remainingAmount = amount - offerRemainingAmount(transactions)

        return remainingAmount > 0 ? remainingAmount : 0
      },
    })
  },
})

export const OfferQuery = extendType({
  type: 'Query',
  definition: t => {
    t.field('offers', {
      type: 'Offer',
      args: {
        active: booleanArg({ required: false }),
      },
      list: true,
      resolve: async (_, { active }, { photon }) => {
        if (!active) {
          return photon.offers.findMany({ orderBy: { createdAt: 'desc' } })
        } else {
          const allOffers = await photon.offers.findMany({
            where: { active: true },
            orderBy: { createdAt: 'desc' },
            include: {
              beneficator: true,
              gallery: true,
              transactions: true,
            },
          })

          const filteredOffers = allOffers.filter(offer => {
            return (
              offer.transactions.length === 0 ||
              offer.transactions
                .filter(
                  transaction =>
                    transaction.status === PAID ||
                    isTransactionReserved(transaction)
                )
                .reduce((total, transaction) => {
                  return total + transaction.amount
                }, 0) < offer.amount
            )
          })
          return filteredOffers
        }
      },
    })

    t.field('offer', {
      type: 'Offer',
      args: {
        id: idArg({ required: true }),
      },
      nullable: true,
      resolve: async (_, { id }, { photon }) => {
        return photon.offers.findOne({
          where: { id },
          include: {
            beneficator: true,
            gallery: {
              include: {
                images: true,
              },
            },
          },
        })
      },
    })
  },
})

export const OfferMutations = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('changeActiveStateOffer', {
      description: 'Deactivate or activate offer',
      type: 'Offer',
      args: {
        offerId: idArg({ required: true }),
        confirmationHash: stringArg({ required: true }),
        active: booleanArg({ required: true }),
      },
      resolve: async (_, { offerId, confirmationHash, active }, { photon }) => {
        const offer = await photon.offers.findOne({ where: { id: offerId } })
        if (
          offer &&
          confirmationHash === getConfirmationHash(offerId, offer.createdAt)
        ) {
          const updatedOffer = await photon.offers.update({
            data: {
              active,
            },
            where: { id: offerId },
          })

          return updatedOffer
        } else {
          throw new Error('Offer not found or hash does not match.')
        }
      },
    })

    t.field('createOffer', {
      description: 'Create new offer',
      type: 'Offer',
      args: {
        offerName: stringArg({ required: true }),
        description: stringArg({ required: true }),
        organizationId: idArg({ required: true }),
        price: intArg({ required: true }),
        amount: intArg({ required: true }),
        transport: stringArg({ required: true }),
        publicOffer: booleanArg({ required: true }),
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        email: stringArg({ required: true }),
        images: idArg({ list: true, required: true }),
      },
      resolve: async (
        _,
        {
          offerName,
          description,
          organizationId,
          price,
          amount,
          transport,
          publicOffer,
          firstName,
          lastName,
          email,
          images,
        },
        { req, photon }
      ) => {
        let { userId } = getUserInfo(req)
        if (!userId) {
          const { id } = await photon.users.upsert({
            where: {
              email,
            },
            create: {
              firstName,
              lastName,
              email,
            },
            update: {
              firstName,
              lastName,
            },
          })
          userId = id
        } else {
          const user = await photon.users.findOne({ where: { id: userId } })
          if (user) {
            firstName = user.firstName || ''
            lastName = user.lastName || ''
            email = user.email
          }
        }

        const createdOffer = await photon.offers.create({
          data: {
            name: offerName,
            description,
            beneficator: {
              connect: { id: organizationId },
            },
            price,
            amount,
            transport,
            publicOffer,
            firstName,
            lastName,
            email,
            user: { connect: { id: userId } },
            gallery: {
              create: {
                images: {
                  connect: images.map(image => ({ id: image })),
                },
              },
            },
          },
          include: { beneficator: true },
        })

        if (createdOffer) {
          const {
            id,
            email,
            name,
            firstName,
            createdAt,
            beneficator,
            price,
            amount,
          } = createdOffer
          const salutation = capitalize(vokativ(firstName.trim()))
          const offerLink = `https://davam.cz/nabidka/${id}`
          const imgUrl =
            'https://davamcz-images.s3.eu-central-1.amazonaws.com/mailing/darek.png'
          const confirmationHash = getConfirmationHash(id, createdAt)
          const deactivationLink = `https://davam.cz/nabidka/${id}/deaktivovat?ch=${confirmationHash}`
          sendEmail(email, {
            template: 'linkCreated',
            subject: `Vytvoření platebního odkazu na ${name}`,
            data: {
              firstName,
              salutation,
              product: name,
              ngo: beneficator.name,
              price,
              amount,
              offerLink,
              imgUrl,
              deactivationLink,
            },
          })
        }

        return createdOffer
      },
    })
  },
})
