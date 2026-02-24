import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, cart functionality, and payment integration.",
    longDescription:
      "Built with Next.js and Node.js, this platform features user authentication, product search and filtering, shopping cart, and Stripe payment integration. Includes an admin dashboard for inventory management.",
    image: "/images/projects/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ongyuzhe/ecommerce",
    featured: true,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team workspace features.",
    longDescription:
      "Real-time task board application with drag-and-drop functionality, team workspaces, and activity tracking. Built using React and Firebase for real-time synchronization.",
    image: "/images/projects/taskapp.svg",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ongyuzhe/taskapp",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location search, forecasts, and interactive charts.",
    image: "/images/projects/weather.svg",
    tags: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ongyuzhe/weather",
    featured: true,
  },
  {
    id: "personal-blog",
    title: "Personal Blog",
    description:
      "A markdown-powered blog with syntax highlighting, tag filtering, and RSS feed support.",
    image: "/images/projects/blog.svg",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    githubUrl: "https://github.com/ongyuzhe/blog",
  },
];
