"use client"

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'hello@gobetween.dev',
    action: 'Send me an email'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Available during business hours',
    action: 'Start a conversation'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '+1 (555) 123-4567',
    action: 'Call me directly'
  }
]

export default function ContactHero() {
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
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to start your next project? Have a question about my services? 
                I'd love to hear from you and discuss how we can work together.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to explore new opportunities and help bring your ideas to life.
              </p>
            </div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    {method.action}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
