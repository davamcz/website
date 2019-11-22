import { Link } from './Link'
import gql from 'graphql-tag'
import { apolloClient } from '../lib/apollo'
import { useRouter } from 'next/router'
import { logout } from '../lib/auth'
import { useUserLazyQuery } from '../generated/graphql'
import { useEffect } from 'react'
import ApolloClient from 'apollo-client'

export const user = gql`
  query user {
    user {
      email
      fullName
    }
  }
`

export const AuthButton = () => {
  const { pathname } = useRouter()
  const [getUser, { data, called }] = useUserLazyQuery({
    client: apolloClient as ApolloClient<any>,
  })

  useEffect(() => {
    if (apolloClient) {
      getUser()
    }
  }, [data])

  const isAdminPage =
    pathname === '/profil' ||
    pathname === '/nabidky' ||
    pathname === '/nabidky/[id]'

  if (!data && !called) {
    return <></>
  }

  if (isAdminPage) {
    return <span onClick={() => logout()}>Odhlásit se</span>
  }

  if (data && data.user) {
    return <Link href="/profil">Můj profil</Link>
  }

  return <Link href="/login">Přihlásit se</Link>
}
