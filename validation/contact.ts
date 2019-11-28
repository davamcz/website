import * as Yup from 'yup'

export const ContactFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Váše jméno je příliš krátké')
    .required('Jméno je povinný údaj'),
  email: Yup.string()
    .email('Špatný formát e-mailu')
    .required('E-mail je povinný údaj'),
  question: Yup.string()
    .min(10, 'Váš dotaz je příliš krátký')
    .required('Dotaz je povinný údaj'),
})
