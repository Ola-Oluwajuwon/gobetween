"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

const skills = [
  {
    name: "Web Development",
    icon: Code,
    description: "React, Next.js, TypeScript",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description: "Figma, Tailwind, Framer Motion",
  },
  { name: "Automation", icon: Zap, description: "Node.js, APIs, DevOps" },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Crafting Digital Experiences with{" "}
                  <span className="gradient-text">Passion & Precision</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a full-stack developer and designer with over 5 years
                  of experience creating innovative digital solutions. My
                  approach combines technical expertise with creative
                  problem-solving to deliver exceptional user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From concept to deployment, I work closely with clients to
                  understand their vision and transform it into reality. Every
                  project is an opportunity to push boundaries and create
                  something remarkable.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-background border hover:shadow-md transition-shadow"
                  >
                    <skill.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" size="lg" className="group">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <Code className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-primary/20 rounded w-32 mx-auto" />
                      <div className="h-3 bg-primary/20 rounded w-24 mx-auto" />
                      <div className="h-3 bg-primary/20 rounded w-28 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
