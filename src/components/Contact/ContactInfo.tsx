"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@gobetween.dev",
    description: "I typically respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote / Worldwide",
    description: "Available for remote work globally",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri, 9 AM - 6 PM EST",
    description: "Available for urgent matters outside hours",
  },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Website", href: "https://gobetween.dev", icon: Globe },
];

const faqs = [
  {
    question: "What is your typical response time?",
    answer:
      "I aim to respond to all inquiries within 24 hours during business days. For urgent matters, I'm often available outside regular hours.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! I work with clients from around the world and am experienced in handling different time zones and cultural considerations.",
  },
  {
    question: "What information should I provide for a project quote?",
    answer:
      "Please include your project goals, timeline, budget range, and any specific requirements. The more details you can provide, the more accurate my estimate will be.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, I offer various support and maintenance packages to ensure your project continues to run smoothly after launch.",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div className="bg-card border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{info.title}</h3>
                <p className="text-primary font-medium">{info.value}</p>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-card border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <social.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium group-hover:text-primary transition-colors">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-card border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-muted pb-4 last:border-b-0 last:pb-0"
            >
              <h3 className="font-semibold text-foreground mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
        <p className="text-muted-foreground mb-4">
          Let&apos;s discuss your project and explore how we can work together
          to bring your vision to life.
        </p>
        <div className="text-sm text-muted-foreground">
          <p>💡 Free consultation available</p>
          <p>🚀 Quick turnaround times</p>
          <p>💬 Ongoing support included</p>
        </div>
      </div>
    </motion.div>
  );
}
