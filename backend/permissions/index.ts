import { shield, allow } from 'graphql-shield'
// import { getUserId, isAdmin } from '../utils'

// const rules = {
//   isAuthenticatedUser: rule()((parent, args, context) => {
//     const userId = getUserId(context)
//     return Boolean(userId)
//   }),
//   isOwned: rule()((parent, args, context) => {
//     // const userId = getUserId(context)
//     return true
//   }),
//   isAdmin: rule()((parent, args, context) => {
//     return isAdmin(context)
//   }),
// }

// export const permissions = shield({
//   Query: {
//     organizations: rules.isAdmin,
//   },
//   Mutation: {
//     createOrganization: rules.isAdmin
//   }
// })

export const permissions = shield(
  {
    Query: {
      '*': allow,
    },
    Mutation: {
      '*': allow,
    },
  },
  {
    fallbackRule: allow,
  }
)
