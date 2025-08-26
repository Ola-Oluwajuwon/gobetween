"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
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
                My <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to your needs. From
                concept to deployment, I provide end-to-end services that help
                businesses and individuals achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you need a stunning website, a powerful application, or
                automated workflows, I'm here to turn your vision into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </Link>
            </div>

            {/* Service Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center p-4">
                <div className="text-3xl font-bold gradient-text mb-2">
                  100%
                </div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold gradient-text mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold gradient-text mb-2">
                  Fast
                </div>
                <div className="text-muted-foreground">Turnaround Time</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
