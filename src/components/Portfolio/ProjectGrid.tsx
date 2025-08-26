"use client"

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ExternalLink, Github, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution built with Next.js, featuring real-time inventory, secure payments, and admin dashboard.',
    image: '/api/placeholder/400/250',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind', 'PostgreSQL'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Design System',
    description: 'Comprehensive design system and component library built with Storybook and Tailwind CSS.',
    image: '/api/placeholder/400/250',
    tech: ['Storybook', 'Tailwind CSS', 'Figma', 'TypeScript', 'React'],
    category: 'UI/UX',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'API Automation Tool',
    description: 'Automated API testing and monitoring tool with custom workflows and detailed reporting.',
    image: '/api/placeholder/400/250',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
    category: 'Automation',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with modern web technologies and responsive design.',
    image: '/api/placeholder/400/250',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile App Design',
    description: 'Complete mobile app design including wireframes, prototypes, and design system.',
    image: '/api/placeholder/400/250',
    tech: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'Mobile UI'],
    category: 'UI/UX',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'Data Dashboard',
    description: 'Real-time data visualization dashboard with interactive charts and analytics.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 8,
    title: 'CI/CD Pipeline',
    description: 'Automated deployment pipeline with testing, building, and deployment stages.',
    image: '/api/placeholder/400/250',
    tech: ['GitHub Actions', 'Docker', 'AWS', 'Terraform', 'Kubernetes'],
    category: 'Automation',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

const categories = ['All', 'Web App', 'UI/UX', 'Automation']

export default function ProjectGrid() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFeatured, setShowFeatured] = useState(false)

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesFeatured = !showFeatured || project.featured
      
      return matchesSearch && matchesCategory && matchesFeatured
    })
  }, [searchTerm, selectedCategory, showFeatured])

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Toggle */}
            <div className="flex justify-center">
              <Button
                variant={showFeatured ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowFeatured(!showFeatured)}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                {showFeatured ? 'Show All' : 'Show Featured Only'}
              </Button>
            </div>
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${showFeatured}-${searchTerm}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      {/* Project Image */}
                      <div className="relative h-48 bg-muted overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                              <ExternalLink className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground">Project Preview</p>
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            {project.category}
                          </span>
                        </div>
                        {project.featured && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-600 rounded-full">
                              ⭐ Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex gap-3 pt-2">
                          <a
                            href={project.liveUrl}
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
