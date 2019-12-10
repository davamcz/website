import { Formik } from 'formik'
import { ContactFormValidationSchema } from '../../validation/contact'
import { CheckBox } from '../CheckBox'
import { Container } from '../Container'
// import styled from 'styled-components'
import { Form } from '../Form'
import { Error, Input } from '../Input'
import { Link } from '../Link'
import Spacer from '../Spacer'
import Text from '../Text'
import { TextArea } from '../TextArea'

interface Props {
  maxWidth?: string
}

export const ContactForm = ({ maxWidth = '730px' }: Props) => {
  return (
    <Container
      style={{
        width: '100%',
        maxWidth,
        paddingTop: '36px',
        paddingRight: '62px',
      }}
    >
      <Formik
        initialValues={{
          name: '',
          email: '',
          question: '',
          conditions: false,
        }}
        validationSchema={ContactFormValidationSchema}
        onSubmit={async (values, { setStatus }) => {
          if (!values.conditions) {
            setStatus({
              type: 'gdpr',
              message:
                'Neobejdeme se bez vašeho souhlasu se zpracování osobních údajů',
            })
          } else {
            try {
              const res = await await fetch(
                `${process.env.WEBSITE_URL}/api/contact`,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify(values),
                }
              )
              if (res.status === 200) {
                setStatus({ type: 'success' })
              } else {
                setStatus({ type: 'error' })
              }
            } catch (e) {
              setStatus({ type: 'error' })
              console.log(e)
            }
          }
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          status,
          setFieldValue,
        }) => {
          return status?.type === 'success' || status?.type === 'error' ? (
            status.type === 'success' ? (
              <Container>
                <Spacer />
                <Text h1 as="p">
                  Vaše zpráva byla odeslána.
                </Text>
                <Text color="salmon" h1 as="p">
                  Brzy se vám ozveme.
                </Text>
              </Container>
            ) : (
              <Container>
                <Spacer />
                <Text h1 as="p">
                  Zpráva nebyla odeslána.
                </Text>
                <Text color="salmon" h1 as="p">
                  Zkuste to prosím později.
                </Text>
              </Container>
            )
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input
                label="Jméno"
                name="name"
                type="text"
                placeholder="Jaromír"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.name}
              />
              <Spacer />
              <Input
                label="E-mail"
                name="email"
                type="email"
                placeholder="př. dobrman@seznam.cz"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.email}
              />
              <Spacer />
              <TextArea
                name="question"
                label="Váš dotaz"
                value={values.question}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.question}
              />
              <Spacer x={0.5} />
              <Container row vcenter>
                <CheckBox
                  checked={values.conditions}
                  onChange={val => setFieldValue('conditions', val)}
                />
                <Spacer x={0.5} />
                <Text>
                  Souhlasím se{' '}
                  <Link
                    color
                    bold
                    external
                    href="https://docs.google.com/document/d/13WrT-kFjyq0WZcQX2UB7i6yWUQ80V58DLXll-CvHEFw/edit"
                  >
                    Zpracováním údajů
                  </Link>
                </Text>
              </Container>
              {status && status.type === 'gdpr' && (
                <>
                  <Spacer />
                  <Error>{status.message}</Error>
                </>
              )}
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}
