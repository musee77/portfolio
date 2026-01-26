"use client";

import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Prepzi - AI-Powered Meal Planning App",
    description:
      "A smart meal planning app that generates personalized weekly and monthly plans based on your inventory and dietary preferences. Features waste-reducing inventory-first planning, international cuisine support, nutrition tracking, and meal timers with offline-first architecture.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase Firestore",
      "Firebase Auth",
      "Redux Toolkit",
      "TanStack Query",
      "Spoonacular API",
      "NativeWind",
    ],
    github: "https://github.com/musee77/global-eats",
    // demo: "https://www.prepzi.app/",
    featured: true,
  },
  {
    title: "Agents47 - Multi-Agent AI Platform",
    description:
      "A sophisticated multi-agent AI system built with LangChain and LangGraph. Features autonomous agents for research, content creation, and data analysis with real-time collaboration capabilities.",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "FastAPI",
      "NextJS",
    ],
    github: "https://github.com/musee77/agents47",
    // demo: "https://agents47.online",
    featured: true,
  },
  {
    title: "Employee Management System",
    description:
      "A full-stack enterprise application for managing employee records. Features comprehensive CRUD operations, RESTful API architecture, secure authentication, real-time data validation, and responsive UI. Built with modern Spring Boot backend and React frontend for efficient HR operations and employee data management.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "REST API",
      "Hibernate",
      "Maven",
      "HTML/CSS",
      "JavaScript",
    ],
    github: "https://github.com/musee77/employee-management-system",
    // demo: "https://your-demo-url.com/",
    featured: false,
  },
  {
    title: "Synovae - AI-Powered Job Application Platform",
    description:
      "An AI-powered platform that automates job applications. Features intelligent job matching, AI-generated custom CVs and cover letters, ML-powered browser autofill, and comprehensive application tracking with a freemium subscription model.",
    technologies: [
      "Python",
      "JavaScript",
      "NodeJS",
      "FastAPI",
      "MongoDB",
      "OpenAI GPT",
      "html/CSS",
      "Tailwind CSS",
      "Machine Learning",
      "Puppeteer",
      "Stripe",
    ],
    github: "https://github.com/musee77/vision.ai",
    demo: "https://synovae.io/",
    featured: true,
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A showcase of my recent work in full-stack development and AI
          integration
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative bg-card border border-border rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
          >
            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Title */}
              <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-full text-xs text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
