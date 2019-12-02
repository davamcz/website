import React from 'react'
import { withApollo } from '../lib/apollo'
import { Home } from '../components/Home'
import { Steps } from '../components/Steps'
import { HelpContainer } from '../components/HelpContainer'
import { OrganizationsContainer } from '../components/OrganizationsContainer'
import { AboutSection } from '../components/AboutSection'
import Spacer from '../components/Spacer'
import Stats from '../components/Stats'
import { Section } from '../components/Section'

const IndexPage = () => {
  return (
    <>
      <Section>
        <Home />
        <Spacer />
        <Steps />
        <Spacer />
        <Stats />
      </Section>
      <HelpContainer />
      <Spacer />
      <OrganizationsContainer />
      <Spacer y={2} />
      <AboutSection />
      <Spacer y={4} />
    </>
  )
}

export default withApollo(IndexPage)
