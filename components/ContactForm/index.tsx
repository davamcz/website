import { Formik } from 'formik'
// import styled from 'styled-components'
import { Form } from '../Form'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import Spacer from '../Spacer'
import { Container } from '../Container'
import * as Yup from 'yup'

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Váše jméno je příliš krátké')
    .required('Jméno je povinný údaj'),
  email: Yup.string()
    .email('Špatný formát e-mailu')
    .required('E-mail je povinný údaj'),
  message: Yup.string()
    .min(10, 'Váš dotaz je příliš krátký')
    .required('Dotaz je povinný údaj'),
})

interface Props {
  maxWidth?: string
}

export const ContactForm = ({ maxWidth = '730px' }: Props) => {
  return (
    <Container style={{ width: '100%', maxWidth, paddingTop: '36px', paddingRight: '62.5px' }}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={ContactFormSchema}
        onSubmit={async values => {
          console.log(values)
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
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
            <TextArea label="Váš dotaz" error={errors.message} />
          </Form>
        )}
      </Formik>
    </Container>
  )
}

// const ContactContainer = styled.div`
//   display: flex;
//   min-height: calc(100vh - 102px - 92px);
//   object-fit: contain;
//   background: 100% no-repeat url('/background.svg');
//   background-position: bottom center;
// `
