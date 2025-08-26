import { Metadata } from "next";
import AboutHero from "@/components/About/AboutHero";
import SkillsSection from "@/components/About/SkillsSection";
import ExperienceSection from "@/components/About/ExperienceSection";
import TimelineSection from "@/components/About/TimelineSection";

export const metadata: Metadata = {
  title: "About - Go Between",
  description:
    "Learn more about my background, skills, and experience in web development, UI/UX design, and automation.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsSection />
      <ExperienceSection />
      <TimelineSection />
    </>
  );
}
