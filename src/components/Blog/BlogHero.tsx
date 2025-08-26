"use client"

import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, User } from 'lucide-react'

export default function BlogHero() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                My <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Sharing insights, tutorials, and thoughts on web development, design, 
                and the ever-evolving world of technology.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From practical coding tips to industry trends, I write about what I learn 
                and what excites me in the tech world.
              </p>
            </div>

            {/* Blog Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold gradient-text">25+</div>
                <div className="text-sm text-muted-foreground">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold gradient-text">Weekly</div>
                <div className="text-sm text-muted-foreground">New Content</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold gradient-text">5 min</div>
                <div className="text-sm text-muted-foreground">Average Read</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold gradient-text">1000+</div>
                <div className="text-sm text-muted-foreground">Monthly Readers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
