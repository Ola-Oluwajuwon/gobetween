"use client"

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    achievements: [
      'Led a team of 5 developers on a major e-commerce platform',
      'Improved application performance by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Innovations Inc.',
    period: '2020 - 2022',
    location: 'San Francisco, CA',
    description: 'Developed responsive web applications and collaborated with design teams to create intuitive user experiences.',
    achievements: [
      'Built 10+ client websites with 99.9% uptime',
      'Reduced bundle size by 30% through code optimization',
      'Implemented accessibility features improving WCAG compliance'
    ],
    tech: ['React', 'Vue.js', 'Sass', 'Webpack', 'Jest']
  },
  {
    id: 3,
    title: 'UI/UX Designer & Developer',
    company: 'Creative Studio',
    period: '2018 - 2020',
    location: 'New York, NY',
    description: 'Combined design and development skills to create comprehensive digital solutions for clients across various industries.',
    achievements: [
      'Designed and developed 15+ brand websites',
      'Created design systems for 3 major brands',
      'Increased client conversion rates by 25%'
    ],
    tech: ['Figma', 'Adobe Creative Suite', 'HTML/CSS', 'JavaScript', 'WordPress']
  }
]

export default function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in the tech industry, showcasing growth, 
              achievements, and the diverse projects I've contributed to.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-muted" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground text-sm mt-1">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {experience.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-muted/30 rounded-xl border"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I'm always excited to take on new projects and opportunities. 
              Whether it's building something from scratch or improving existing systems, 
              I'm ready to contribute my skills and experience.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Let's discuss your project
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
