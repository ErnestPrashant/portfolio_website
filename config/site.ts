import { title } from "process";

export const siteConfig = {
  name: "prashant-dubey.com",
  url: "https://prashant-dubey.com",
  description: "Portfolio of Prashant Dubey",
  links: {
    shadcn: "https://ui.shadcn.com/",
    twitter: "https://x.com/ernestprashant",
    github: "https://github.com/ErnestPrashant/Portfolio_Website",
    githubProfile: "https://github.com/ErnestPrashant",
    resume: "https://drive.google.com/file/d/10JFCJ0Us2xtyH3_nGjikPWMQ4s6uqGyk/view?usp=sharing",
    email: "mailto:erne57874@gmail.com",
    githubUsername: "ErnestPrashant",
  },
  projects: {
    EMI_Management_System: {
      title:
        "EMI Management System · A web application for managing EMI payments",
      description:
        "The EMI Management System is a full-stack web application that simplifies loan tracking and EMI calculations. It allows users to apply for loans, view amortization schedules, and record payment history. The system provides a dynamic dashboard for real-time loan and payment insights. Built using the MERN stack with seamless MongoDB integration for data persistence.",
      tags: [
        "Node.js",
        "React",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "React Router",
      ],
      github: "https://github.com/ErnestPrashant/emi-management-system",
      live: "https://emi-management-system.netlify.app/",
    },
    Portfolio_Website: {
      title: "Portfolio Website · A personal portfolio website",
      description:
        "This portfolio website showcases my skills, projects, and experiences. It is built using Next.js, TypeScript, and Tailwind CSS, ensuring a responsive and modern design. The website includes sections for my resume, projects, and contact information.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/ErnestPrashant/Portfolio_Website"
    }
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};


