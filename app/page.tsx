import Header from "@/components/iwan-tour/header"
import Hero from "@/components/iwan-tour/hero"
import PackagesGrid from "@/components/iwan-tour/packages-grid"
import Features from "@/components/iwan-tour/features"
import GalleryTestimonials from "@/components/iwan-tour/gallery-testimonials"
import ContactCTA from "@/components/iwan-tour/contact-cta"
import Footer from "@/components/iwan-tour/footer"
import MobileTabs from "@/components/iwan-tour/mobile-tabs"
import PromoVideo from "@/components/iwan-tour/promo-video"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Anchor Sections */}
      <Header />
      <section id="home">
        <Hero />
      </section>

      {/* Promo video placeholder section */}
      <section id="video" className="py-8 md:py-12">
        <PromoVideo title="Video Promo Iwan Tour" />
      </section>

      <section id="packages" className="py-12 md:py-20">
        <PackagesGrid />
      </section>
      <section id="why" className="py-12 md:py-20">
        <Features />
      </section>
      <section id="gallery" className="py-12 md:py-20">
        <GalleryTestimonials />
      </section>
      <section id="contact" className="py-12 md:py-20">
        <ContactCTA />
      </section>
      <Footer />
      <MobileTabs />
    </main>
  )
}
