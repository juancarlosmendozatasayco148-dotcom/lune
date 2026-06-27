import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Collection from "@/components/Collection"
import SectionDivider from "@/components/SectionDivider"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Collection />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Newsletter />
      <Footer />
    </>
  )
}
