import React from 'react'
import { withApollo } from './apollo'
import { NextPage } from 'next'
import checkLoggedIn from './checkLoggedIn'
import redirect from './redirect'

export function withAuth<T>(Page: NextPage<T>) {
  const AuthPage = (props: T) => <Page {...props} />
  AuthPage.getInitialProps = async (context: any) => {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)

    if (!loggedInUser.user) {
      // If not signed in, send them somewhere more useful
      redirect(context, '/signin')
    }

    return { loggedInUser }
  }

  return withApollo(AuthPage as any)
}
