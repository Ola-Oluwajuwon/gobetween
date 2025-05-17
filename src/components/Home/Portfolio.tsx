import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "App 1",
      category: "Web",
      imageUrl: "/front-end.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Web 3",
      category: "App",
      imageUrl: "/back-end.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "App 2",
      category: "Web",
      imageUrl: "/mobile-app.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Card 2",
      category: "Design",
      imageUrl: "/data-analytics.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Web 2",
      category: "App",
      imageUrl: "/cloud.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Card 1",
      category: "Design",
      imageUrl: "/ui-ux.jpg",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-blue-500">
            Portfolio
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-blue-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2">{project.category}</p>
                      <Link
                        href={project.link}
                        className="mt-4 inline-block bg-white text-blue-600 py-2 px-4 rounded-full"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
