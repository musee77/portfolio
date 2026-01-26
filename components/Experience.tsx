"use client";

import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "AI Engineer & Full-Stack Developer",
    company: "Agents47 - AI Agent Platform (Personal Project)",
    location: "Remote",
    period: "January 2024 – Present",
    description: [
      "Built AI Agent Platform for creating customizable intelligent agents across 6 business use cases",
      "Developed full-stack application with Django, PostgreSQL with pgvector, and Django Channels for real-time chat",
      "Implemented LangChain agents with OpenAI GPT-4 and Anthropic Claude integration",
      "Built RAG system with semantic search, document embeddings, and vector storage",
      "Created REST API, webhook system with Celery, and embeddable chat widget",
      "Achieved 85%+ test coverage with comprehensive unit, integration, and E2E testing",
    ],
    technologies: [
      "Python",
      "Django",
      "LangChain",
      "OpenAI GPT-4",
      "Anthropic Claude",
      "PostgreSQL",
      "pgvector",
      "Django Channels",
      "WebSockets",
      "Redis",
      "Celery",
      "Django REST Framework",
      "Docker",
      "HTMX",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    title: "AI/ML Engineer & Full-Stack Developer",
    company: "VisionAI (Personal Project)",
    location: "Remote",
    period: "March 2024 – November 2024",
    description: [
      "Built AI-powered job application automation platform processing 100+ applications per user",
      "Engineered ML-based browser automation using Puppeteer for intelligent form filling",
      "Developed OpenAI GPT integration generating custom CVs and cover letters with 95% relevance score",
      "Implemented intelligent job matching algorithm analyzing user profiles against job requirements",
      "Built FastAPI backend and responsive frontend with Tailwind CSS for seamless user experience",
      "Integrated Stripe payment processing for freemium subscription model and MongoDB for scalable data storage",
      "Deployed comprehensive application tracking system with analytics dashboard",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI GPT",
      "Machine Learning",
      "Puppeteer",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Git & GitHub",
      "nginx",
    ],
  },
  {
    title: "Junior Full-Stack Developer Intern",
    company: "FinTech & Innovations Ltd",
    location: "Remote (Nairobi, Kenya)",
    period: "June 2024 – December 2024",
    description: [
      "Built backend APIs with Java/Spring Boot and Python/Django in 5-person remote team",
      "Developed secure RESTful APIs for high-concurrency payment processing",
      "Optimized PostgreSQL queries, reduced load times 20%",
      "Implemented authentication and data endpoints",
      "Wrote tested code with pytest following best practices",
      "Containerized environments with Docker, supported QA testing",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "Django REST Framework",
      "NextJS",
      "PostgreSQL",
      "Docker",
      "nginx",
      "Git & GitHub",
      "pytest",
    ],
  },
];

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Work{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My professional journey in software development and AI engineering
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-background"></div>

              {/* Content */}
              <div
                className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 ml-8 md:ml-0 shadow-sm hover:shadow-md">
                  {/* Header */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-400 dark:text-slate-500">•</span>
                      <span className="text-slate-600 dark:text-slate-400">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Final version – colored bullets + tight + justified + centered feel */}
                  <div className="space-y-1 mb-1">
                    {exp.description.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-1 
        hover:bg-slate-100 dark:hover:bg-slate-800/30 rounded-lg p-1 md:p-2 ml-1
        transition-all duration-200 group"
                      >
                        {/* Chevron Arrow Bullet */}
                        <div
                          className="flex-shrink-0 mt-1 text-cyan-500 group-hover:text-cyan-400 
        transition-all duration-300 group-hover:translate-x-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>

                        <p
                          className="flex-1 text-slate-600 dark:text-slate-300 
          leading-relaxed text-sm sm:text-xs
          text-justify hyphens-auto mb-1"
                          style={{ textAlignLast: "right" }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Technologies */}
                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-full text-xs text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
