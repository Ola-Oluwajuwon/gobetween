import Hero from "@/components/Home/Hero";
import SkillsSection from "@/components/Home/SkillsSection";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import ServicesOverview from "@/components/Home/ServicesOverview";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import ContactCTA from "@/components/Home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <FeaturedProjects />
      <ServicesOverview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
