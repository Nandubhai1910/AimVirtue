import AboutSection from "../sections/AboutSection"
import ContactSection from "../sections/ContactSection"
import FooterSection from "../sections/FooterSection"
import ForSection from "../sections/ForSection"
import HomeSection from "../sections/HomeSection"
import { PartnersVariant } from "../sections/PartnersVariant"
import QuoteSection from "../sections/QuoteSection"
import ServicesSection from "../sections/ServiceSection"


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
