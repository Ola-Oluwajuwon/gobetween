"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  onClick,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="border border-brand-tertiary rounded-2xl p-4">
        {/* Project Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Card Content */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-brand-primary">{title}</h3>

          <p className="text-brand-black text-sm leading-relaxed">
            {description}
          </p>

          <Button
            onClick={onClick}
            variant="outline"
            size="sm"
            className="w-full mt-4"
          >
            View Project
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
