"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, SquareLibrary } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-between py-12 md:py-18">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div> */}

      <div className="relative z-10 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-600/10 text-purple-600 border border-purple-600/20">
                  🚀 Available for new opportunities
                </span>
              </motion.div> */}

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
              >
                Bridging Ideas,
                <span className="text-brand-primary md:text-5xl">
                  {" "}
                  People & Technology
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                GoBetween is a brand built to empower people, businesses, and
                communities with impactful software, accessible insights, and
                genuine collaboration.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/portfolio">
                  <Button size="lg" className="group w-full sm:w-auto">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group w-full sm:w-auto"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Work With Me
                  </Button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-4 pt-4"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Sharing insights on:
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/oluwajuwon-kayode/"
                    className="p-2 rounded-lg bg-brand-secondary hover:bg-brand-tertiary transition-colors text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://medium.com/@kayodeoluwajuwon9"
                    className="p-2 rounded-lg bg-brand-secondary hover:bg-brand-tertiary transition-colors text-white"
                  >
                    <SquareLibrary className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-end"
            >
              <div className="relative aspect-square w-full max-w-md">
                <Image
                  src="/hero-right.png"
                  alt="GoBetween geometric illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
