import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'
import ForSection from '../components/ForSection'
import HomeSection from '../components/HomeSection'
import { PartnersVariant } from '../components/PartnersVariant'
import QuoteSection from '../components/QuoteSection'
import ServicesSection from '../components/ServiceSection'

function page() {
  return (
    <>
      <HomeSection />
      <QuoteSection />
      <AboutSection />
      <ForSection />
      <ServicesSection />
      <PartnersVariant />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default page
