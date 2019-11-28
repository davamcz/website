import { Formik } from 'formik'
// import styled from 'styled-components'
import { Form } from '../Form'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import Spacer from '../Spacer'
import { Container } from '../Container'
import Text from '../Text'
import { ContactFormValidationSchema } from '../../validation/contact'

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
        }}
        validationSchema={ContactFormValidationSchema}
        onSubmit={async (values, { setStatus }) => {
          try {
            const res = await await fetch('/api/contact', {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: JSON.stringify(values),
            })
            if (res.status === 200) {
              setStatus({ status: 'success' })
            } else {
              setStatus({ status: 'error' })
            }
          } catch (e) {
            setStatus({ status: 'error' })
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
        }) => {
          return status ? (
            status.status === 'success' ? (
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
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}
