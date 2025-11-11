import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { AcademicWing } from "@/components/academic-wing"
import { Collaborators } from "@/components/collaborators"
import { PhotoGallery } from "@/components/photo-gallery"
import { AdmissionForm } from "@/components/admission-form"
import Script from "next/script"
import TestimonialCarousel from "@/components/testmonials"

export const dynamic = "force-static"

export default function Page() {
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://crescentlearning.com/",
    name: "Crescent Learning | Quality Education & Coaching",
    description:
      "Crescent Learning - 38+ years of excellence in education. NMMS coaching, online courses, hybrid tuition, and student development programs.",
    url: "https://crescentlearning.org/",
    mainEntity: {
      "@type": "Organization",
      name: "Crescent Learning",
      url: "https://crescentlearning.org/",
      description: "Educational institution providing quality coaching and academic support",
      foundingDate: "1987",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kadungathukundu, near Famous Bakery",
        addressLocality: "Kadungathukundu, Malappuram",
        addressRegion: "Kerala",
        postalCode: "676551",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+91-123-456-7890",
        email: "info@crescentlearning.com",
      },
      sameAs: [
        "https://maps.app.goo.gl/vr3zG6P8gdggNiX18",
        "https://www.youtube.com/@crescentcentreinfo",
        "https://www.instagram.com/crescent_centre/",
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://crescentlearning.org",
        },
      ],
    },
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What divisions does Crescent Learning offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer Primary Wing (Grades 1-5), Secondary Wing (Grades 6-8), Senior Secondary (Grades 9-12), and Competitive Coaching for NMMS, JEE, and NEET.",
        },
      },
      {
        "@type": "Question",
        name: "How can I apply for admission?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can fill out our online admission form on the website or contact us directly at +91-123-456-7890 or info@crescentlearning.com.",
        },
      },
    ],
  }

  return (
    <>
      <main id="main-content" className="min-h-[100dvh] text-foreground">
        <SiteHeader />
        <Hero />
        <About />
        <AcademicWing />
        <TestimonialCarousel/>
        <Collaborators />
        <PhotoGallery />
        <AdmissionForm />
        <Footer />
      </main>

      {/* Structured Data for SEO */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />

      <Script
        id="faq-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
    </>
  )
}
