import gql from 'graphql-tag'
import Text from '../../components/Text'
import { Section } from '../../components/Section'
import { Container } from '../../components/Container'
import Spacer from '../../components/Spacer'
import { Form } from '../../components/Form'
import { Input, Error } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { useUpload } from '../../lib/use-upload'
import { withApollo } from '../../lib/apollo'
import {
  useOrganizationsQuery,
  useUserQuery,
  useCreateOfferMutation,
} from '../../generated/graphql'
import { Formik } from 'formik'
import { Select } from '../../components/Select'
import { OfferValidationSchema } from '../../validation/offer'
import { SelectButton } from '../../components/SelectButton'
import { useRouter } from 'next/router'

export const createOffer = gql`
  mutation createOffer(
    $name: String!
    $description: String!
    $organizationId: ID!
    $price: Int!
    $amount: Int!
    $transport: String!
    $publicOffer: Boolean!
    $firstName: String!
    $lastName: String!
    $email: String!
    $images: [ID!]!
  ) {
    createOffer(
      name: $name
      description: $description
      organizationId: $organizationId
      price: $price
      amount: $amount
      transport: $transport
      publicOffer: $publicOffer
      firstName: $firstName
      lastName: $lastName
      email: $email
      images: $images
    ) {
      id
    }
  }
`

export default withApollo(() => {
  const [UI, files] = useUpload(true)
  const { data } = useOrganizationsQuery()
  const { data: userData } = useUserQuery()
  const [createOfferMutation] = useCreateOfferMutation()
  const router = useRouter()

  const user = userData?.user

  return (
    <Section>
      <Container row>
        <Container>
          <Text h1 color="salmon" style={{ maxWidth: '420px' }}>
            Rozhodli jste se darovat
          </Text>
          <Spacer y={0.5} />
          <Text>
            Vytvořte si pomocí našeho formuláře platební odkaz, díky kterému
            druzí snadno zakoupí vaši věc/službu a přímo tak přispějí vámi
            vybrané neziskové organizaci. Platba (ani žádná její část) nepřijde
            ani vám, ani nám, ale v plné výši poputuje na účet neziskové
            organizace.
          </Text>
          <Spacer y={1.5} />

          <Formik
            initialValues={{
              offerName: '',
              description: '',
              organizationId: 'no-organization',
              price: 1,
              amount: 1,
              transport: '',
              firstName: user?.firstName || '',
              lastName: user?.lastName || '',
              email: user?.email || '',
              publicOffer: true,
            }}
            validationSchema={OfferValidationSchema}
            onSubmit={async (
              {
                offerName,
                organizationId,
                description,
                transport,
                amount,
                price,
                publicOffer,
                firstName,
                lastName,
                email,
              },
              { setStatus }
            ) => {
              if (Array.isArray(files) && files.length > 0) {
                try {
                  const fileIds = files.map(file => file.id)
                  const { data } = await createOfferMutation({
                    variables: {
                      name: offerName,
                      description,
                      organizationId,
                      transport,
                      amount,
                      price,
                      publicOffer,
                      firstName,
                      lastName,
                      email,
                      images: fileIds,
                    },
                  })
                  if (data?.createOffer) {
                    router.push(`/chci-darovat/${data.createOffer.id}`)
                  }
                } catch {
                  setStatus({
                    type: 'error',
                    message:
                      'Při vytváření nabídky nastala chyba, zkuste to prosím později',
                  })
                }
              } else {
                setStatus({
                  type: 'error',
                  message: 'Prosím nahrejte alespoň jeden obrázek',
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
              status,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Input
                  label="Název nabídky"
                  name="offerName"
                  value={values.offerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.offerName}
                />
                <Spacer />
                <TextArea
                  name="description"
                  label="Popis nabídky"
                  value={values.description}
                  onChange={handleChange}
                  error={errors.description}
                />
                <Spacer />

                <Select
                  name="organizationId"
                  value={values.organizationId}
                  label="Organizace"
                  onChange={handleChange}
                  error={errors.organizationId}
                >
                  <option disabled selected value="no-organization">
                    Vyberte organizaci
                  </option>
                  {data &&
                    data.organizations.map(organization => (
                      <option value={organization.id}>
                        {organization.name}
                      </option>
                    ))}
                </Select>
                <Spacer />
                <Input
                  label="Cena"
                  name="price"
                  type="number"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.price}
                />
                <Spacer />
                <Input
                  label="Množství"
                  name="amount"
                  type="number"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.amount}
                />
                <Spacer />
                <Input
                  label="Způsob dopravy"
                  name="transport"
                  value={values.transport}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Spacer />
                <Container row>
                  <SelectButton
                    active={values.publicOffer}
                    onClick={() => setFieldValue('publicOffer', true)}
                  >
                    Veřejné
                  </SelectButton>
                  <Spacer />
                  <SelectButton
                    active={!values.publicOffer}
                    onClick={() => setFieldValue('publicOffer', false)}
                  >
                    Neveřejné
                  </SelectButton>
                </Container>
                <Spacer />
                {!user && (
                  <>
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
                  </>
                )}
                {console.log(status)}
                {status && status.type === 'error' && (
                  <>
                    <Spacer />
                    <Error>{status.message}</Error>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </Container>
        <Spacer x={3} />
        <Container>{UI}</Container>
      </Container>
      <Spacer y={3} />
    </Section>
  )
})
