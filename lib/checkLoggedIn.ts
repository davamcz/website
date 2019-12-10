import gql from 'graphql-tag'

export default (apolloClient: any) =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          user {
            fullName
          }
        }
      `,
    })
    .then(({ data }: any) => {
      return { loggedInUser: data }
    })
    .catch((e: any) => {
      // Fail gracefully
      console.log(e)
      return { loggedInUser: {} }
    })
