import { Metadata } from 'next'
import PortfolioHero from '@/components/Portfolio/PortfolioHero'
import ProjectGrid from '@/components/Portfolio/ProjectGrid'

export const metadata: Metadata = {
  title: 'Portfolio - Go Between',
  description: 'Explore my portfolio of web development projects, UI/UX designs, and automation solutions.',
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <ProjectGrid />
    </>
  )
}
