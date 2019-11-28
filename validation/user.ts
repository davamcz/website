import { object, string } from 'yup'

export const UserSchemaValidation = object().shape({
  firstName: string()
    .min(3, 'Vaše jméno je příliš krátké')
    .max(48, 'Vaše jméno je příliš dlouhé')
    .required('Jméno je povinný ůdaj'),
  lastName: string()
    .min(2, 'Vaše příjmení je příliš krátké')
    .max(48, 'Vaše příjmení je příliš dlouhé')
    .required('Příjmení je povinný ůdaj'),
  email: string()
    .email('Špatný formát e-mailu')
    .required('E-mail je povinný údaj'),
  password: string()
    .min(6, 'Heslo je příliš krátké')
    .required('Heslo je povinný údaj'),
})
