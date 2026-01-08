"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Database, Smartphone, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Design & UX",
    icon: Palette,
    skills: [
      "UI/UX Design",
      "Figma",
      "Adobe Creative Suite",
      "Responsive Design",
      "Design Systems",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Backend & APIs",
    icon: Database,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Automation",
    icon: Zap,
    skills: [
      "Python",
      "Selenium",
      "API Integration",
      "Workflow Automation",
      "CI/CD",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native",
      "Progressive Web Apps",
      "Mobile-First Design",
      "App Store Deployment",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    category: "DevOps & Tools",
    icon: Globe,
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
    color: "from-red-500 to-pink-500",
  },
];

export default function SkillsSection() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            I&apos;ve worked with a wide range of technologies and tools to
            create exceptional digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skillGroup.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {skillGroup.category}
                </h3>

                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Always learning and expanding my skill set with the latest
            technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-purple-600/10 text-purple-600 rounded-full text-sm font-medium">
              Currently Learning: AI/ML Integration
            </span>
            <span className="px-3 py-1 bg-purple-600/10 text-purple-600 rounded-full text-sm font-medium">
              Next: Web3 Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
