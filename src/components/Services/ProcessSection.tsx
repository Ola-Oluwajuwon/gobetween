"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "Understanding your requirements, goals, and project scope through detailed consultation.",
    icon: MessageSquare,
    details: [
      "Initial consultation and requirements gathering",
      "Project scope definition",
      "Timeline and budget planning",
      "Technology stack selection",
    ],
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Creating wireframes, mockups, and interactive prototypes to visualize the solution.",
    icon: Lightbulb,
    details: [
      "User research and analysis",
      "Wireframing and user flows",
      "Visual design and branding",
      "Interactive prototyping",
    ],
  },
  {
    id: 3,
    title: "Development & Testing",
    description:
      "Building your solution with clean, efficient code and comprehensive testing.",
    icon: Code,
    details: [
      "Frontend and backend development",
      "Database design and integration",
      "API development",
      "Quality assurance and testing",
    ],
  },
  {
    id: 4,
    title: "Deployment & Launch",
    description:
      "Deploying your solution to production and ensuring everything runs smoothly.",
    icon: Rocket,
    details: [
      "Production deployment",
      "Performance optimization",
      "Security implementation",
      "Launch and monitoring",
    ],
  },
  {
    id: 5,
    title: "Support & Maintenance",
    description:
      "Ongoing support, updates, and maintenance to keep your solution running optimally.",
    icon: CheckCircle,
    details: [
      "Post-launch support",
      "Bug fixes and updates",
      "Performance monitoring",
      "Feature enhancements",
    ],
  },
];

export default function ProcessSection() {
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
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery.
              From initial concept to final deployment, I follow a structured
              approach that keeps you informed and involved every step of the
              way.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step connector */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-muted" />
                )}

                <div className="flex gap-6">
                  {/* Step icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-muted/30 rounded-xl border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Clear Communication
              </h3>
              <p className="text-sm text-muted-foreground">
                Regular updates and transparent communication throughout the
                project lifecycle.
              </p>
            </div>

            <div className="text-center p-6 bg-muted/30 rounded-xl border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous testing and quality checks to ensure your solution
                meets the highest standards.
              </p>
            </div>

            <div className="text-center p-6 bg-muted/30 rounded-xl border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Structured approach ensures projects are delivered on time and
                within budget.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
