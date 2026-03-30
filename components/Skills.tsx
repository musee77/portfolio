"use client";

import { Code, Database, Brain, BarChart3, Globe, Server, LucideIcon } from "lucide-react";

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
    title: "Data & SQL",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MySQL", level: 80 },
      { name: "SQL (Advanced)", level: 95 },
      { name: "ETL / ELT Pipelines", level: 88 },
      { name: "Apache Airflow", level: 82 },
      { name: "Apache Kafka", level: 75 },
      { name: "Data Warehousing", level: 85 },
      { name: "pgvector", level: 78 },
    ],
  },
  {
    title: "BI & Analytics",
    icon: BarChart3,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 82 },
      { name: "Data Modeling", level: 85 },
      { name: "Reporting Dashboards", level: 90 },
      { name: "DAX", level: 78 },
    ],
  },
  {
    title: "Python",
    icon: Code,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Django / DRF", level: 95 },
      { name: "FastAPI", level: 85 },
      { name: "Pandas / NumPy", level: 82 },
      { name: "Celery", level: 80 },
      { name: "pytest", level: 85 },
      { name: "Shell Scripting", level: 72 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "LangChain", level: 88 },
      { name: "OpenAI (GPT-4o)", level: 90 },
      { name: "TensorFlow", level: 75 },
      { name: "RAG Systems", level: 88 },
      { name: "Vector Embeddings", level: 82 },
      { name: "Semantic Search", level: 85 },
      { name: "Claude API", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTMX", level: 72 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
  {
    title: "DevOps",
    icon: Server,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: 88 },
      { name: "GitHub Actions / CI-CD", level: 85 },
      { name: "Linux", level: 80 },
      { name: "Git / GitHub", level: 92 },
      { name: "Agile / Scrum", level: 85 },
      { name: "Redis", level: 78 },
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
    </div>
  );
}
