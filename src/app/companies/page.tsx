import React from 'react'
import CompaniesHomeSection from './components/CompaniesHomeSection'
import CompaniesServicesSection from './components/CompaniesServicesSection'
import ApproachSection from './components/ApproachSection'
import ApproachCardsSection from './components/ApproachCardsSection'
import { CompaniesPartnersSection } from './components/CompaniesPartnersSection'
import CompaniesFooterSection from './components/CompaniesFooterSection'
import CompaniesContactSection from './components/CompaniesContactSection'

function page() {
  return (
    <>
      <CompaniesHomeSection />
      <ApproachSection />
      <CompaniesServicesSection />
      <ApproachCardsSection />
      <CompaniesPartnersSection />
      <CompaniesContactSection />
      <CompaniesFooterSection />
    </>
  )
}

export default page
