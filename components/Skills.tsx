"use client";

import { Code, Database, Brain, Globe, LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Full Stack Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "TypeScript", level: 72 },
      { name: "Python / Django", level: 95 },
      { name: "Java / Spring Boot", level: 68 },
      { name: "FastAPI", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "RESTful APIs", level: 88 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "LangChain / RAG", level: 88 },
      { name: "OpenAI / Claude APIs", level: 90 },
      { name: "Vector DBs (pgvector)", level: 72 },
      { name: "Prompt Engineering", level: 75 },
      { name: "TensorFlow / PyTorch", level: 85 },
      { name: "Scikit-learn", level: 80 },
    ],
  },
  {
    title: "Databases & DevOps",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "Docker", level: 92 },
      { name: "Redis + Celery", level: 80 },
      { name: "GitHub Actions", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Skills &{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-cyan-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Skills Section */}
      <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-foreground mb-6">
          Other Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Agile/Scrum",
            "Microservices",
            "WebSockets",
            "Stripe Integration",
            "M-Pesa API",
            "OAuth",
            "JWT",
            "Nginx",
            "RabbitMQ",
            "Celery",
            "Pandas",
            "NumPy",
            "Selenium",
            "Beautiful Soup",
            "Figma",
            "Jira",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
