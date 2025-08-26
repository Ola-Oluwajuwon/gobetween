import { Metadata } from 'next'
import ContactHero from '@/components/Contact/ContactHero'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact - Go Between',
  description: 'Get in touch with me to discuss your project, ask questions, or start a collaboration.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 section-padding">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  )
}
