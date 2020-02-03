import { objectType } from 'nexus'

export const Adress = objectType({
  name: 'Adress',
  definition: t => {
    t.model.city()
    t.model.street()
    t.model.postalCode()
  },
})
