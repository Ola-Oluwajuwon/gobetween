"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero.jpg"
          alt="Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100/10 to-neutral-100/10 opacity-0"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">
          Ola-Oluwajuwon Kayode
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 animate-fade-in">
          I&apos;m a{" "}
          <span className="text-blue-400 font-semibold">Web Developer</span>
        </p>
        <Button
          onClick={() => router.push("/#portfolio")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
