"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import {
//   Code2,
//   Palette,
//   Zap,
//   Smartphone,
//   BarChart3,
//   Users,
// } from "lucide-react";
import { Button } from "@/components/ui/Button";

// const services = [
//   {
//     icon: Code2,
//     title: "Web Development",
//     description:
//       "Full-stack web applications built with modern technologies like React, Next.js, and Node.js. From simple landing pages to complex enterprise solutions.",
//     features: [
//       "Responsive Design",
//       "Performance Optimization",
//       "SEO Best Practices",
//       "Cross-browser Compatibility",
//     ],
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: Palette,
//     title: "UI/UX Design",
//     description:
//       "User-centered design solutions that create intuitive, engaging, and accessible digital experiences. From wireframes to high-fidelity prototypes.",
//     features: [
//       "User Research",
//       "Wireframing & Prototyping",
//       "Design Systems",
//       "Usability Testing",
//     ],
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: Zap,
//     title: "Automation Solutions",
//     description:
//       "Custom automation tools and workflows that streamline business processes, reduce manual work, and increase efficiency.",
//     features: [
//       "Process Automation",
//       "API Integration",
//       "Data Processing",
//       "Workflow Optimization",
//     ],
//     color: "from-yellow-500 to-orange-500",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile Development",
//     description:
//       "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and platforms.",
//     features: [
//       "React Native",
//       "Progressive Web Apps",
//       "App Store Deployment",
//       "Performance Optimization",
//     ],
//     color: "from-indigo-500 to-purple-500",
//   },
//   {
//     icon: BarChart3,
//     title: "Analytics & Insights",
//     description:
//       "Data-driven solutions that help businesses understand user behavior, track performance, and make informed decisions.",
//     features: [
//       "Data Visualization",
//       "Performance Tracking",
//       "User Analytics",
//       "Custom Dashboards",
//     ],
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: Users,
//     title: "Consulting & Strategy",
//     description:
//       "Strategic guidance and technical consulting to help businesses choose the right technologies and approaches for their goals.",
//     features: [
//       "Technology Audits",
//       "Architecture Planning",
//       "Team Training",
//       "Project Management",
//     ],
//     color: "from-red-500 to-pink-500",
//   },
// ];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary"
          >
            Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business needs.
            From concept to deployment, I handle every aspect of your project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))} */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to start your project? Let&apos;s discuss how I can help bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg">Start a Project</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
