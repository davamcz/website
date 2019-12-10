import { Formik } from 'formik'
import gql from 'graphql-tag'
import { AdminLayout } from '../components/admin/AdminLayout'
import Text from '../components/Text'
import { withAuth } from '../lib/with-auth'
import { Form } from '../components/Form'
import { Input } from '../components/Input'
import Spacer from '../components/Spacer'
import { Container } from '../components/Container'
import { userQuery } from '../components/AuthButton'
import { useUserQuery, useUpdateUserMutation } from '../generated/graphql'

export const updateUser = gql`
  mutation updateUser(
    $firstName: String!
    $lastName: String!
    $city: String!
    $street: String!
    $postalCode: String!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      city: $city
      street: $street
      postalCode: $postalCode
    ) {
      email
      firstName
      lastName
      fullName
      adress {
        city
        street
        postalCode
      }
    }
  }
`

const Profile = () => {
  const { data: userData } = useUserQuery()
  const [updateUserMutation] = useUpdateUserMutation({
    update: (cache, result) => {
      cache.writeQuery({
        query: userQuery,
        data: { user: result.data.updateUser },
      })
    },
  })

  const user = userData?.user
  const adress = userData?.user?.adress
  const values = user
    ? {
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        street: adress?.street || '',
        city: adress?.city || '',
        postalCode: adress?.postalCode || '',
      }
    : { firstName: '', lastName: '', street: '', city: '', postalCode: '' }

  return (
    <AdminLayout>
      <Container style={{ maxWidth: '540px' }}>
        <Text>Přihlašovací e-mail</Text>
        <Spacer y={0.5}></Spacer>
        <Text bold>{user?.email}</Text>
        <Spacer y={2} />
        <Formik
          initialValues={values}
          enableReinitialize
          onSubmit={async values => {
            await updateUserMutation({ variables: values })
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
              buttonText="Uložit změny"
              loading={isSubmitting}
            >
              <Input
                placeholder="Jméno"
                label="Jméno"
                name="firstName"
                onBlur={handleBlur}
                value={values.firstName}
                onChange={handleChange}
              />
              <Spacer />
              <Input
                placeholder="Příjmení"
                label="Příjmení"
                name="lastName"
                onBlur={handleBlur}
                value={values.lastName}
                onChange={handleChange}
              />
              <Spacer />
              <Input
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
              />
            </Form>
          )}
        </Formik>
      </Container>
    </AdminLayout>
  )
}

export default withAuth(Profile)
