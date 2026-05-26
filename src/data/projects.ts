import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "events-demo",
    title: "Event Management System",
    description:
      "Create events, manage RSVPs, and track attendance with live capacity limits and filtering.",
    longDescription:
      "Browse upcoming and past events, RSVP, create new ones, and watch attendee counts update with capacity guards. State persists to localStorage so your changes stick across refreshes.",
    image: "/images/projects/events.svg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    liveUrl: "/demos/events",
    featured: true,
  },
  {
    id: "survey-demo",
    title: "Survey Form System",
    description:
      "Multi-step survey with progress tracking, mixed input types, and an aggregated results view.",
    longDescription:
      "Radio, checkbox, rating, and free-text inputs across a guided multi-step flow with progress bar, per-step validation, back/forward navigation, and a summary screen.",
    image: "/images/projects/survey.svg",
    tags: ["Next.js", "Forms", "Validation", "Multi-step"],
    liveUrl: "/demos/survey",
    featured: true,
  },
  {
    id: "booking-demo",
    title: "Booking Dashboard",
    description:
      "Weekly calendar dashboard with services, time slots, KPI cards, and a booking modal.",
    longDescription:
      "Switch between weeks, click any booking to cycle its status (confirmed → pending → cancelled), and create new appointments. Revenue and weekly stats are computed live.",
    image: "/images/projects/booking.svg",
    tags: ["Dashboard", "Calendar", "TypeScript", "Tailwind"],
    liveUrl: "/demos/booking",
    featured: true,
  },
  {
    id: "business-demo",
    title: "Business Landing Page",
    description:
      "Marketing landing for a fictional consulting firm — hero, features, testimonials, pricing.",
    longDescription:
      "Production-style marketing site for 'Northwind Consulting' covering everything from hero positioning through to a three-tier pricing block, all polished, responsive, and dark-mode aware.",
    image: "/images/projects/business.svg",
    tags: ["Landing page", "Marketing", "Tailwind", "Responsive"],
    liveUrl: "/demos/business",
    featured: true,
  },
  {
    id: "admin-demo",
    title: "Admin Panel",
    description:
      "Internal admin UI with KPI cards, a custom SVG revenue chart, activity feed, and users table.",
    longDescription:
      "Sidebar-driven admin shell with KPI tiles, a hand-rolled SVG line chart with gradient fill, a live activity feed, and a filterable/searchable users table with avatar generation and role badges.",
    image: "/images/projects/admin.svg",
    tags: ["Admin UI", "Charts", "Tables", "Dashboard"],
    liveUrl: "/demos/admin",
    featured: true,
  },
];
