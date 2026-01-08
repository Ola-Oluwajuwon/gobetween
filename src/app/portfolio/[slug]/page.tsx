import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto container-padding py-8">
        <Link href="/portfolio">
          <Button variant="outline" size="sm" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-tertiary/10 to-brand-secondary/10">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brand-primary font-semibold mb-4">
              {project.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Live Project
                  </Button>
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="group">
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Source Code
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">Role</h3>
              <p className="text-gray-600">{project.role}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Duration
              </h3>
              <p className="text-gray-600">{project.duration}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                Category
              </h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Challenge */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                The Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                The Solution
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                Project Screenshots
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden border border-gray-200"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-brand-tertiary/20 text-brand-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* The Outcome */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                The Outcome
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-secondary to-brand-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s discuss how I can help bring your project to life with
            the same dedication and expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-brand-primary hover:bg-gray-100"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
