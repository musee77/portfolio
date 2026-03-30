"use client";

import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  live?: string;
  featured: boolean;
  period?: string;
}

const projects: Project[] = [
  {
    title: "Prepzi — Smart Meal Planning App",
    description:
      "AI-powered meal planning that reduces food waste by 90%. Generates personalized weekly/monthly plans from your inventory, with smart shopping lists, 10+ cuisines, dietary preferences, and offline-first sync.",
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
    live: "https://play.google.com/store/apps/details?id=com.prepzi.app",
    featured: true,
    period: "2025 – Present",
  },
  {
    title: "Agents47 — AI Agent Platform",
    description:
      "Built scalable AI agent platform with RAG knowledge bases (PostgreSQL/pgvector), async pipelines (Celery/Redis), and real-time chat at <3s latency.",
    technologies: [
      "Django 5.x / DRF",
      "PostgreSQL / pgvector",
      "LangChain",
      "OpenAI / Claude",
      "Docker",
      "GitHub Actions",
      "Celery / Redis",
    ],
    github: "https://github.com/musee77/agents47",
    live: "https://agents47.online",
    featured: true,
    period: "2024 – Present",
  },
  {
    title: "LezMarket — AI Website Conversion Optimizer",
    description:
      "SaaS tool that scores homepages against persuasion principles, generates AI recommendations, and stores structured analysis history per user.",
    technologies: [
      "Next.js",
      "Supabase (PostgreSQL)",
      "OpenAI GPT-4o",
      "TypeScript",
      "Tailwind CSS",
    ],
    live: "https://lezmarket.io",
    featured: true,
    period: "2024",
  },
  {
    title: "Synovae — AI Job Matching Platform",
    description:
      "Semantic CV-to-job matching engine across 2,400+ live roles using LLM embeddings, with automated application tracking in Supabase.",
    technologies: [
      "Next.js",
      "Supabase (PostgreSQL)",
      "OpenAI / LLMs",
      "TypeScript",
      "Tailwind CSS",
    ],
    live: "https://synovae.io",
    featured: true,
    period: "2024",
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Key{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A showcase of my recent work in AI integration, data engineering, and
          full-stack development
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
              {/* Title & Period */}
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {project.period && (
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {project.period}
                  </span>
                )}
              </div>

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
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Site</span>
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
