import React from 'react'
import { withApollo } from '../lib/apollo'
import { Home } from '../components/Home'
import { Steps } from '../components/Steps'
import { HelpContainer } from '../components/HelpContainer'
import { OrganizationsContainer } from '../components/OrganizationsContainer'
import { AboutSection } from '../components/AboutSection'
import Spacer from '../components/Spacer'

const IndexPage = () => {
  return (
    <div> 
      <Home />
      <Spacer />
      <Steps />
      <Spacer />
      <HelpContainer />
      <Spacer />
      <OrganizationsContainer />
      <Spacer />
      <AboutSection />
    </div>
  )
}

export default withApollo(IndexPage)
