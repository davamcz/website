import { Link } from './Link'
import gql from 'graphql-tag'
import { apolloClient } from '../lib/apollo'
import { useRouter } from 'next/router'
import { logout } from '../lib/auth'
import { useUserLazyQuery } from '../generated/graphql'
import { useEffect } from 'react'
import ApolloClient from 'apollo-client'
import styled from 'styled-components'

export const userQuery = gql`
  query user {
    user {
      email
      firstName
      lastName
      fullName
      adress {
        city
        street
        postalCode
      }
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
    return <Logout onClick={() => logout()}>Odhlásit se</Logout>
  }

  if (data && data.user) {
    return <Link href="/profil">Můj profil</Link>
  }

  return <Link href="/login">Přihlásit se</Link>
}

const Logout = styled.span`
  cursor: pointer;
`
