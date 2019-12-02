import { object, string, number } from 'yup'
import { UserSchemaValidation } from './user'

export const OfferValidationSchema = object()
  .shape({
    offerName: string()
      .min(4, 'Název nabídky je příliš krátký')
      .max(64, 'Název nabídky je příliš dlouhý')
      .required('Název nabídky je povinný'),
    description: string()
      .min(24, 'Popis nabídky je příliš krátký')
      .max(2048, 'Popis nabídky je příliš dlouhý')
      .required('Popis nabídky je povinný'),
    organizationId: string()
      .notOneOf(['no-organization'], 'Prosím vyberte organizaci')
      .required('Organizace je povinná'),
    price: number().min(1, 'Cena nabídky je příliš malá'),
    amount: number().min(1, 'Množství je příliš malé')
  })
  .concat(UserSchemaValidation)
