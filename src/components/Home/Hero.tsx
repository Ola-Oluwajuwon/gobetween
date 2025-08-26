"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-600/10 text-purple-600 border border-purple-600/20">
                  🚀 Available for new opportunities
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
              >
                Hi, I&apos;m <span className="gradient-text">Go Between</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                A passionate developer and designer crafting exceptional digital
                experiences. I specialize in web development, UI/UX design, and
                automation solutions.
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
                    View Portfolio
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
                    Contact Me
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
                  Follow me:
                </span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Visual Card */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    {/* Code Preview */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="text-purple-600">const</div>
                        <div className="text-gray-600 dark:text-gray-400">
                          developer = {`{`}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 ml-4">
                          name:{" "}
                          <span className="text-green-600">
                            &apos;Go Between&apos;
                          </span>
                          ,
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 ml-4">
                          passion:{" "}
                          <span className="text-green-600">
                            &apos;Creating amazing experiences&apos;
                          </span>
                          ,
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 ml-4">
                          available:{" "}
                          <span className="text-green-600">true</span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">{`}`}</div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                        <div className="text-2xl font-bold gradient-text">
                          50+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Projects
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                        <div className="text-2xl font-bold gradient-text">
                          5+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-8 h-8 bg-purple-600 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-purple-600/60 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
