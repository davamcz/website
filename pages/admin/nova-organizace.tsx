import gql from 'graphql-tag'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Formik } from 'formik'
import { withApollo } from '../../lib/apollo'
import { useUpload } from '../../lib/use-upload'
import Spacer from '../../components/Spacer'
import Text from '../../components/Text'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { useCreateOrganizationMutation } from '../../generated/graphql'

export const createOrganization = gql`
  mutation createOrganization(
    $name: String!
    $description: String!
    $url: String!
    $logoId: ID!
    $apiId: Int!
    $apiSecret: String!
    $organizationId: Int!
  ) {
    createOrganization(
      name: $name
      description: $description
      url: $url
      logoId: $logoId
      active: true
      apiId: $apiId
      apiSecret: $apiSecret
      organizationId: $organizationId
    ) {
      name
    }
  }
`

export default withApollo(() => {
  const [UI, logo] = useUpload(false, 'organizace') as any
  const [createOrganization] = useCreateOrganizationMutation()

  return (
    <Section>
      <Container hcenter>
        <Container hcenter style={{ width: '100%', maxWidth: '540px' }}>
          <Text h1 color="salmon">
            Vytvořit organizaci
          </Text>
          <Spacer y={3} />
          <Formik
            initialValues={{
              name: '',
              description: '',
              url: '',
              apiId: 1,
              apiSecret: '',
              organizationId: 1,
            }}
            onSubmit={async (values, {resetForm}) => {
              try {
                if (logo) {
                  console.log(logo)
                  const { data } = await createOrganization({
                    variables: { ...values, logoId: logo.id },
                  })
                  console.log(data)
                  resetForm()
                }
              } catch (e) {
                console.log(e)
              }
            }}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <Form
                onSubmit={handleSubmit}
                center
                buttonText="Vytvořit organizaci"
                loading={isSubmitting}
              >
                {UI}
                <Input
                  placeholder="Název organizace"
                  label="Název organizace"
                  type="name"
                  name="name"
                  onBlur={handleBlur}
                  value={values.name}
                  onChange={handleChange}
                />
                <Spacer />
                <TextArea
                  label="Popis organizace"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
                <Spacer />
                <Input
                  placeholder="https://www.zdravotniklaun.cz"
                  label="Odkaz"
                  name="url"
                  onBlur={handleBlur}
                  value={values.url}
                  onChange={handleChange}
                />
                <Input
                  label="ApiId"
                  name="apiId"
                  type="number"
                  onBlur={handleBlur}
                  value={values.apiId}
                  onChange={handleChange}
                />
                <Input
                  label="ApiSecret"
                  name="apiSecret"
                  onBlur={handleBlur}
                  value={values.apiSecret}
                  onChange={handleChange}
                />
                <Input
                  label="OrganizationId"
                  name="organizationId"
                  type="number"

                  onBlur={handleBlur}
                  value={values.organizationId}
                  onChange={handleChange}
                />
              </Form>
            )}
          </Formik>
        </Container>
      </Container>
    </Section>
  )
})
