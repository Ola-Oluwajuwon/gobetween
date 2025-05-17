import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-blue-500">
            About
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn more about me and what I do
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <Image
              src="/juwon.png"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-auto"
              width={400}
              height={400}
            />
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Web Developer & Designer
            </h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel felis sed elit pharetra ultricies. Praesent eget magna non
              risus semper condimentum eget vel odio. Aliquam vitae ligula id
              erat vulputate imperdiet.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">Birthday:</strong>
                    <span>1 May 1995</span>
                  </li>
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">Website:</strong>
                    <span>go-between.me</span>
                  </li>
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">Phone:</strong>
                    <span>+123 456 7890</span>
                  </li>
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">City:</strong>
                    <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">Age:</strong>
                    <span>30</span>
                  </li>
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">Degree:</strong>
                    <span>Master</span>
                  </li>
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">Email:</strong>
                    <span>info@example.com</span>
                  </li>
                  <li className="flex">
                    <strong className="text-blue-800 mr-2">Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-gray-700">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
