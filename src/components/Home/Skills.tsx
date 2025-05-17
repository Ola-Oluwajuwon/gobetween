import React from "react";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  percentage: number;
};

const Skills = () => {
  const skillsList: Skill[] = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "TypeScript", percentage: 70 },
    { name: "Next.js", percentage: 65 },
    { name: "GraphQL", percentage: 60 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-blue-500">
            Skills
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My technical skills and proficiency levels
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {skillsList.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-600 font-medium">
                    {skill.percentage}%
                  </span>
                </div>
                <Progress value={skill.percentage} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
