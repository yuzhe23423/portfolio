import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Monitor",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    name: "Database",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Prisma", "Redis"],
  },
  {
    name: "Tools & DevOps",
    icon: "Wrench",
    skills: ["Git", "Docker", "Vercel", "GitHub Actions", "Linux"],
  },
];
