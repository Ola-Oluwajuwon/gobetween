"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Smartphone,
  Database,
  Cloud,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: Code,
    description:
      "Full-stack web applications built with modern technologies and best practices.",
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Performance optimization",
      "Security best practices",
      "Modern frameworks (React, Next.js, Vue)",
      "Database design and integration",
    ],
    price: "From $2,500",
    duration: "2-8 weeks",
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: Palette,
    description:
      "User-centered design solutions that enhance user experience and drive engagement.",
    features: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Visual design and branding",
      "User testing and iteration",
      "Design systems and guidelines",
      "Accessibility compliance",
    ],
    price: "From $1,500",
    duration: "1-4 weeks",
  },
  {
    id: 3,
    title: "Mobile Development",
    icon: Smartphone,
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Cross-platform development",
      "Native app development",
      "Progressive Web Apps (PWA)",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    price: "From $3,000",
    duration: "3-10 weeks",
  },
  {
    id: 4,
    title: "Automation Solutions",
    icon: Zap,
    description:
      "Custom automation tools and workflows to streamline business processes.",
    features: [
      "API development and integration",
      "Workflow automation",
      "Data processing scripts",
      "CI/CD pipeline setup",
      "Monitoring and alerting",
      "Custom tool development",
    ],
    price: "From $1,800",
    duration: "2-6 weeks",
  },
  {
    id: 5,
    title: "Database Design",
    icon: Database,
    description:
      "Efficient database architecture and optimization for scalable applications.",
    features: [
      "Database schema design",
      "Performance optimization",
      "Data migration",
      "Backup and recovery",
      "Security implementation",
      "Monitoring and maintenance",
    ],
    price: "From $1,200",
    duration: "1-3 weeks",
  },
  {
    id: 6,
    title: "DevOps & Cloud",
    icon: Cloud,
    description:
      "Infrastructure setup, deployment automation, and cloud migration services.",
    features: [
      "Cloud infrastructure setup",
      "Docker containerization",
      "CI/CD pipeline implementation",
      "Monitoring and logging",
      "Security and compliance",
      "Cost optimization",
    ],
    price: "From $2,000",
    duration: "2-5 weeks",
  },
];

export default function ServiceOfferings() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service <span className="gradient-text">Offerings</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital services designed to meet your specific
              needs. Each service is tailored to deliver maximum value and
              results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and Duration */}
                    <div className="pt-4 border-t border-muted">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-lg font-bold text-primary">
                            {service.price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {service.duration}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-card border rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Don&apos;t see exactly what you need? I specialize in creating
              custom solutions tailored to your specific requirements.
              Let&apos;s discuss your project and find the perfect approach.
            </p>
            <Button size="lg" className="group">
              <Mail className="mr-2 h-4 w-4" />
              Let&apos;s Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
