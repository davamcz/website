import { Formik } from 'formik'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { Container } from '../components/Container'
import { Form } from '../components/Form'
import { Error, Input } from '../components/Input'
import { Link } from '../components/Link'
import { Section } from '../components/Section'
import Spacer from '../components/Spacer'
import Text from '../components/Text'
import { useLoginMutation } from '../generated/graphql'
import { withApollo } from '../lib/apollo'
import { saveToken } from '../lib/auth'

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export default withApollo(() => {
  const [loginUser] = useLoginMutation()
  const router = useRouter()

  return (
    <Section>
      <Container hcenter>
        <Container hcenter style={{ width: '100%', maxWidth: '540px' }}>
          <Text h1 color="salmon">
            Přihlásit se
          </Text>
          <Spacer y={3} />
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async (values, { setStatus }) => {
              try {
                const { data } = await loginUser({ variables: values })
                if (data && data.login && data.login.token) {
                  saveToken(data.login.token)
                  router.push('/profil')
                }
              } catch {
                setStatus({
                  type: 'error',
                  message: 'Vaše přihlašovací údaje nesouhlasí',
                })
              }
            }}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              isSubmitting,
              status,
            }) => (
              <Form
                onSubmit={handleSubmit}
                center
                buttonText="Přihlásit se"
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
                />
                <Spacer />
                <Text>
                  Pokud ještě nemáte účet, můžete se registrovat{' '}
                  <Link color href="/signup">
                    zde
                  </Link>
                  .
                </Text>
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
