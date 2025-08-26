"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and learn how to build scalable, performant web applications with the new App Router and server components.",
    category: "Web Development",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "The Future of UI/UX Design: AI-Powered Interfaces",
    excerpt:
      "Discover how artificial intelligence is revolutionizing user interface design and creating more intuitive, personalized user experiences.",
    category: "UI/UX Design",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    tags: ["UI/UX", "AI", "Design Trends"],
  },
  {
    id: 3,
    title: "Optimizing React Performance: Best Practices for 2024",
    excerpt:
      "Learn the most effective techniques for optimizing React applications, from code splitting to memoization and beyond.",
    category: "Web Development",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    id: 4,
    title: "Automating Your Development Workflow with GitHub Actions",
    excerpt:
      "Set up comprehensive CI/CD pipelines and automate your development workflow using GitHub Actions and modern DevOps practices.",
    category: "DevOps",
    readTime: "12 min read",
    publishDate: "2023-12-28",
    tags: ["DevOps", "CI/CD", "GitHub Actions"],
  },
  {
    id: 5,
    title: "Creating Accessible Web Applications: A Complete Guide",
    excerpt:
      "Learn how to build web applications that are accessible to all users, following WCAG guidelines and best practices.",
    category: "Web Development",
    readTime: "15 min read",
    publishDate: "2023-12-20",
    tags: ["Accessibility", "WCAG", "Inclusive Design"],
  },
  {
    id: 6,
    title: "The Rise of TypeScript: Why It's Becoming Essential",
    excerpt:
      "Explore the benefits of TypeScript and why it's becoming a must-have skill for modern web developers.",
    category: "Programming",
    readTime: "7 min read",
    publishDate: "2023-12-15",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
];

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "DevOps",
  "Programming",
];

export default function BlogList() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-background border hover:bg-primary hover:text-primary-foreground transition-colors hover:cursor-pointer"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Post Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                          <Tag className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Blog Post
                        </p>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 space-y-4">
                      {/* Category and Meta */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>

                      {/* Title and Excerpt */}
                      <div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors hover:cursor-pointer">
              Load More Posts
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
