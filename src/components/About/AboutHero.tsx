"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download, Mail, MapPin, Calendar, Briefcase } from "lucide-react";

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Remote / Worldwide" },
  { icon: Calendar, label: "Experience", value: "5+ Years" },
  { icon: Briefcase, label: "Availability", value: "Open to Opportunities" },
];

export default function AboutHero() {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">
                  About <span className="gradient-text">Me</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer and designer with a love
                  for creating exceptional digital experiences. My journey in
                  tech started over 5 years ago, and I've been fortunate to work
                  on diverse projects that have shaped my expertise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of clean code, intuitive design, and
                  user-centered solutions. Every project I work on is an
                  opportunity to learn, grow, and create something meaningful
                  that makes a difference.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source, or sharing
                  knowledge with the developer community.
                </p>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-muted/50 border"
                  >
                    <info.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-semibold">{info.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="text-4xl">👨‍💻</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-primary/20 rounded w-40 mx-auto" />
                      <div className="h-3 bg-primary/20 rounded w-32 mx-auto" />
                      <div className="h-3 bg-primary/20 rounded w-36 mx-auto" />
                      <div className="h-3 bg-primary/20 rounded w-28 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
