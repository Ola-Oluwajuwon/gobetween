import { Metadata } from 'next'
import BlogHero from '@/components/Blog/BlogHero'
import BlogList from '@/components/Blog/BlogList'

export const metadata: Metadata = {
  title: 'Blog - Go Between',
  description: 'Read my latest thoughts on web development, design, and technology.',
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  )
}
