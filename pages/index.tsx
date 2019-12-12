import React from 'react'
import { HelpContainer } from '../components/HelpContainer'
import { Home } from '../components/Home'
import { OrganizationsContainer } from '../components/OrganizationsContainer'
import { Section } from '../components/Section'
import { AboutSection } from '../components/sections/AboutSection'
import Spacer from '../components/Spacer'
import Stats from '../components/Stats'
import { Steps } from '../components/Steps'
import { withApollo } from '../lib/apollo'

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
