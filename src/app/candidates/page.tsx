import React from 'react'
import CandidatesHomeSection from './components/CandidatesHomeSection'
import CandidatesPartnerSection from './components/CandidatesPartnerSection'
import ScrollInCardsCenter from './components/ScrollInCardsCenter'
import CandidatesContactSection from './components/CandidatesContactSection'
import CandidatesFooterSection from './components/CandidatesFooterSection'

function page() {
  return (
    <>
      <CandidatesHomeSection />
      <CandidatesPartnerSection />
      <ScrollInCardsCenter />
      <CandidatesContactSection />
      <CandidatesFooterSection />
    </>
  )
}

export default page
