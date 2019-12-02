import { withApollo } from '../../../lib/apollo'
import { Section } from '../../../components/Section'
import { Container } from '../../../components/Container'
import Text from '../../../components/Text'
import Spacer from '../../../components/Spacer'
import { Step } from '../../chci-darovat/[id]'
import { useRouter } from 'next/router'
import {
  useOfferQuery,
  useUserQuery,
  useCreateTransactionMutation,
} from '../../../generated/graphql'
import { Form } from '../../../components/Form'
import { Formik } from 'formik'
import { Input } from '../../../components/Input'
import { TransactionValidationSchema } from '../../../validation/transaction'
import { TextArea } from '../../../components/TextArea'
import { paymentLink } from '../../../lib/paymentLink'
import { Image } from '../../../components/Image'

export default withApollo(() => {
  const router = useRouter()
  const { data } = useOfferQuery({
    variables: { id: router.query.id as string },
  })
  const { data: userData } = useUserQuery()
  const [createTransaction] = useCreateTransactionMutation()

  const offer = data?.offer
  const user = userData?.user
  const amount = parseInt(router.query.mnozstvi as string) || 1
  const price = amount  * (offer?.price as number)

  return (
    <Section>
      <Container row>
        <Container style={{ maxWidth: '540px' }}>
          <Text h1 color="salmon">
            Rozhodli jste se přispět na dobrou věc - děkujeme!
          </Text>
          <Spacer y={0.5} />
          <Text>
            Vyplňte, prosíme, vaše údaje. Poté budete přesměrováni k platbě.
            Celá částka bude připsána na účet neziskové organizace.
          </Text>
          <Spacer y={1.5} />
          <Formik
            initialValues={{
              offerId: offer?.id as string,
              firstName: user?.firstName || '',
              lastName: user?.lastName || '',
              email: user?.email || '',
              amount,
              comment: '',
              // street: user?.adress?.street || '',
              // city: user?.adress?.city || '',
              // postalCode: user?.adress?.postalCode || '',
            }}
            validationSchema={TransactionValidationSchema}
            onSubmit={async (values, { setStatus }) => {
              try {
                const { data } = await createTransaction({ variables: values })
                if (data?.createTransaction) {
                  const link = paymentLink({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    amount: price,
                    projectId: data.createTransaction.offer.beneficator.projectId as number,
                    transactionId: data.createTransaction.id
                  })
                  window.location.href = link
                }
              } catch (e) {
                setStatus({
                  type: 'error',
                  message: 'Nastala chyba zkuste to prosím později.',
                })
              }
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              // status,
              // setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  label="Jméno"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.firstName}
                />
                <Spacer />
                <Input
                  label="Příjmení"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.lastName}
                />
                <Spacer />
                <Input
                  label="E-mail"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                />
                <Spacer />
                <TextArea
                  label="Váš dotaz"
                  name="comment"
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.comment}
                />
                <Spacer />
                {/* <Input
                  placeholder="Ulice a č.p."
                  label="Ulice a č.p."
                  name="street"
                  onBlur={handleBlur}
                  value={values.street}
                  onChange={handleChange}
                />
                <Spacer />
                <Input
                  placeholder="Město"
                  label="Město"
                  name="city"
                  onBlur={handleBlur}
                  value={values.city}
                  onChange={handleChange}
                />
                <Spacer />
                <Input
                  placeholder="PSČ"
                  label="PSČ"
                  name="postalCode"
                  onBlur={handleBlur}
                  value={values.postalCode}
                  onChange={handleChange}
                /> */}

                {/* {status && status.type === 'error' && (
                  <>
                    <Spacer />
                    <Error>{status.message}</Error>
                  </>
                )} */}
              </Form>
            )}
          </Formik>
        </Container>
        <Spacer x={5} />
        <Container flex="0 0 auto">
        {offer && (
            <Image
              src={`https://davamcz.imgix.net/${offer.gallery.images &&
                offer.gallery.images[0].key}?w=324`}
            />
          )}
          <Spacer />
          <Container flex="0">
            <Container row>
              Vybrali jste si:&nbsp;<Text bold>{offer?.name}</Text>
            </Container>
            <Container row>
              Příspěvek poputuje na:&nbsp;
              <Text bold>{offer?.beneficator.name}</Text>
            </Container>
            <Container row>
              Kolik přispějete:&nbsp;
              <Text bold>{price}</Text>
            </Container>
            <Container row>
              Tento produkt daruje:&nbsp;
              <Text bold>{offer?.user.shortName}</Text>
            </Container>
          </Container>
          <Spacer y={2} />
          <Text h3>Jak to bude probíhat:</Text>
          <Spacer y={1.5} />
          <Step number={1}>
            Poté, co vyplníte své údaje, budete přesměrováni k platbě. Zadejte,
            prosíme, požadovanou částku. Pokud byste rádi přispěli více
            (nabízený produkt stojí např. 400 Kč a vy byste rádi podpořili
            neziskovou organizaci vyšším darem), je to možné.
          </Step>
          <Step number={2}>
            Na váš e-mail vám bude zasláno potvrzení o platbě a shrnutí
            důležitých informací.
          </Step>
          <Step number={3}>
            Obdržíte e-mail s potvrzením o platbě a shrnutím důležitých
            informací. S dobromanem (poskytovatelem produktu) se poté
            zkontaktujete a domluvíte na předání věci/služby.
          </Step>
        </Container>
      </Container>
    </Section>
  )
})
