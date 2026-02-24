import { TimelineEntry } from "@/types";

export const experience: TimelineEntry[] = [
  {
    id: "job-1",
    type: "work",
    title: "Junior Full-Stack Developer",
    organization: "Tech Company Pte Ltd",
    location: "Singapore",
    startDate: "Jan 2024",
    endDate: "Present",
    description: [
      "Developed and maintained full-stack web applications using React, Next.js, and Node.js",
      "Collaborated with designers and product managers to ship features on tight deadlines",
      "Improved page load times by 40% through code splitting and image optimization",
    ],
  },
  {
    id: "job-2",
    type: "work",
    title: "Software Engineering Intern",
    organization: "Startup Inc",
    location: "Singapore",
    startDate: "May 2023",
    endDate: "Dec 2023",
    description: [
      "Built RESTful APIs using Express.js and PostgreSQL",
      "Created responsive UI components with React and Tailwind CSS",
      "Wrote unit and integration tests, achieving 85% code coverage",
    ],
  },
  {
    id: "edu-1",
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "National University of Singapore",
    location: "Singapore",
    startDate: "Aug 2020",
    endDate: "May 2024",
    description: [
      "Specialized in Software Engineering",
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development",
      "Dean's List — AY2022/2023",
    ],
  },
];
