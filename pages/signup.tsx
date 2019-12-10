import { Form } from '../components/Form'
import { Input, Error } from '../components/Input'
import { Formik } from 'formik'
import { withApollo } from '../lib/apollo'
import { saveToken } from '../lib/auth'
import gql from 'graphql-tag'
import { useSignupMutation } from '../generated/graphql'
import Spacer from '../components/Spacer'
import Text from '../components/Text'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { UserWithPassowordSchemaValidation } from '../validation/user'
import { object, string, ref } from 'yup'
import { useRouter } from 'next/router'

const PasswordAgain = object().shape({
  passwordAgain: string()
    .oneOf([ref('password'), null], 'Hesla nejsou stejná')
    .required('Heslo znovu je povinný údaj'),
})

export const signup = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
    }
  }
`

export default withApollo(() => {
  const [signupUser] = useSignupMutation()
  const router = useRouter()

  return (
    <Section>
      <Container hcenter>
        <Container hcenter style={{ width: '100%', maxWidth: '540px' }}>
          <Text h1 color="salmon">
            Registrovat se
          </Text>
          <Spacer y={3} />
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              passwordAgain: '',
            }}
            validationSchema={UserWithPassowordSchemaValidation.concat(
              PasswordAgain
            )}
            onSubmit={async (
              { password, email, firstName, lastName },
              { setStatus }
            ) => {
              try {
                const { data } = await signupUser({
                  variables: { email, password, firstName, lastName },
                })
                if (data && data.signup && data.signup.token) {
                  saveToken(data.signup.token)
                  router.push('/profil')
                }
              } catch (e) {
                setStatus({
                  type: 'error',
                  message: 'Uživatel s tímto e-mailem už existuje',
                })
              }
            }}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              errors,
              isSubmitting,
              status,
            }) => (
              <Form
                onSubmit={handleSubmit}
                center
                buttonText="Registrovat se"
                loading={isSubmitting}
              >
                <Input
                  placeholder="E-mail"
                  label="E-mail"
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Spacer />
                <Input
                  placeholder="Jméno"
                  label="Jméno"
                  type="firstName"
                  name="firstName"
                  onBlur={handleBlur}
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <Spacer />
                <Input
                  placeholder="Příjmení"
                  label="Příjmení"
                  type="lastName"
                  name="lastName"
                  onBlur={handleBlur}
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <Spacer />
                <Input
                  placeholder="Heslo"
                  label="Heslo"
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <Spacer />
                <Input
                  placeholder="Heslo"
                  label="Zopakujte heslo"
                  type="password"
                  name="passwordAgain"
                  onBlur={handleBlur}
                  value={values.passwordAgain}
                  onChange={handleChange}
                  error={errors.passwordAgain}
                />
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
      </Container>
    </Section>
  )
})
