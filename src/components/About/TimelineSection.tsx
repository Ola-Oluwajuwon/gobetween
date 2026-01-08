"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Award, Users, Rocket, Star } from "lucide-react";

const milestones = [
  {
    id: 1,
    year: "2023",
    title: "Senior Developer Promotion",
    description:
      "Promoted to Senior Full-Stack Developer, leading team projects and mentoring junior developers.",
    icon: Award,
    category: "Career Growth",
  },
  {
    id: 2,
    year: "2022",
    title: "First Open Source Contribution",
    description:
      "Started contributing to open source projects and became an active member of the developer community.",
    icon: Code,
    category: "Community",
  },
  {
    id: 3,
    year: "2021",
    title: "UI/UX Certification",
    description:
      "Completed advanced UI/UX design certification, expanding skills in user experience design.",
    icon: Star,
    category: "Skills",
  },
  {
    id: 4,
    year: "2020",
    title: "First Tech Conference",
    description:
      "Attended and presented at my first tech conference, sharing knowledge about modern web development.",
    icon: Users,
    category: "Learning",
  },
  {
    id: 5,
    year: "2019",
    title: "Freelance Success",
    description:
      "Successfully completed 20+ freelance projects, building a strong portfolio and client base.",
    icon: Rocket,
    category: "Business",
  },
  {
    id: 6,
    year: "2018",
    title: "Computer Science Degree",
    description:
      "Graduated with a Bachelor's degree in Computer Science, laying the foundation for my tech career.",
    icon: GraduationCap,
    category: "Education",
  },
];

export default function TimelineSection() {
  return (
    <section className="section-padding bg-muted/30">
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
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of key milestones and achievements that have shaped my
              career and personal growth in the technology industry.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-muted" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-3">
                        <milestone.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {milestone.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                    <div className="text-primary-foreground font-bold text-sm">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>

                  {/* Year label */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pl-8" : "pr-8 text-right"
                    }`}
                  >
                    <div className="text-3xl font-bold text-muted-foreground/50">
                      {milestone.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20 p-8 bg-card border rounded-xl"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              As I continue my journey in tech, I&apos;m excited about the
              opportunities ahead. I&apos;m passionate about emerging
              technologies like AI, machine learning, and sustainable
              development practices. My goal is to not only build great products
              but also contribute to making technology more accessible and
              beneficial for everyone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
