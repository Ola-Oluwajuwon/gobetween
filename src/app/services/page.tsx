import { Metadata } from 'next'
import ServicesHero from '@/components/Services/ServicesHero'
import ServiceOfferings from '@/components/Services/ServiceOfferings'
import ProcessSection from '@/components/Services/ProcessSection'

export const metadata: Metadata = {
  title: 'Services - Go Between',
  description: 'Explore the comprehensive range of services I offer including web development, UI/UX design, and automation solutions.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceOfferings />
      <ProcessSection />
    </>
  )
}
