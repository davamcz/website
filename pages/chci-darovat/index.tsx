import { Formik } from 'formik'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { CheckBox } from '../../components/CheckBox'
import { Container } from '../../components/Container'
import { Form } from '../../components/Form'
import { Error, Input } from '../../components/Input'
import { Link } from '../../components/Link'
import { Section } from '../../components/Section'
import { Select } from '../../components/Select'
import { SelectButton } from '../../components/SelectButton'
import Spacer from '../../components/Spacer'
import Text from '../../components/Text'
import { TextArea } from '../../components/TextArea'
import { useCreateOfferMutation, useOrganizationsQuery, useUserQuery } from '../../generated/graphql'
import { withApollo } from '../../lib/apollo'
import { useUpload } from '../../lib/use-upload'
import { OfferValidationSchema } from '../../validation/offer'

export const createOffer = gql`
  mutation createOffer(
    $offerName: String!
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
      offerName: $offerName
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
      <Container direction={['column', 'column', 'row']}>
        <Container>
          <Text h1 color="salmon" style={{ maxWidth: '420px' }}>
            Rozhodli jste se darovat
          </Text>
          <Spacer y={0.5} />
          <Text>
            Vytvořte si pomocí našeho formuláře platební odkaz, díky kterému
            druzí snadno zakoupí vaši věc/službu a přímo tak přispějí vámi
            vybrané neziskové organizaci. Platba půjde v plné výši dobročinné
            organizaci.
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
              conditions: false,
            }}
            validationSchema={OfferValidationSchema}
            onSubmit={async (values, { setStatus }) => {
              if (!values.conditions) {
                setStatus({
                  type: 'error',
                  message: 'Neobejdeme se bez vašeho souhlasu',
                })
              } else if (Array.isArray(files) && files.length > 0) {
                try {
                  const fileIds = files.map(file => file.id)
                  const { data } = await createOfferMutation({
                    variables: {
                      ...values,
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
                  tooltip="Vyberte dobročinnou organizaci, které se má za tuto nabídkou přispět."
                >
                  <option disabled value="no-organization">
                    Vyberte organizaci
                  </option>
                  {data &&
                    data.organizations.map(organization => (
                      <option key={organization.id} value={organization.id}>
                        {organization.name}
                      </option>
                    ))}
                </Select>
                <Spacer />
                <Input
                  label="Cena v Kč"
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
                  tooltip="Napište způsob dopravy. Pošlete poštou, online nebo osobně předáte?"
                />
                <Spacer />
                <Container row>
                  <SelectButton
                    active={values.publicOffer}
                    onClick={() => setFieldValue('publicOffer', true)}
                  >
                    Veřejná nabídka
                  </SelectButton>
                  <Spacer />
                  <SelectButton
                    active={!values.publicOffer}
                    onClick={() => setFieldValue('publicOffer', false)}
                  >
                    Neveřejná nabídka
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
                <>
                  <Spacer />
                  <Container row vcenter>
                    <CheckBox
                      checked={values.conditions}
                      onChange={val => setFieldValue('conditions', val)}
                    />
                    <Spacer x={0.5} />
                    <Text>
                      Souhlasím s{' '}
                      <Link
                        color
                        bold
                        external
                        href="https://docs.google.com/document/d/1mF2rgj4ljL3pFGjfluArTfTptObI1Bbfn8tJJjHqv3s/edit"
                      >
                        Provozními podmínkami
                      </Link>{' '}
                      platformy Davam.cz
                    </Text>
                  </Container>
                </>
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
