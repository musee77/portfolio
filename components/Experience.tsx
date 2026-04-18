"use client";

import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Junior Python Data Engineer",
    company: "Maesk Group, Kenya",
    location: "On-site",
    period: "Sep 2025– Feb 2026",
    description: [
      "Designed and implemented end-to-end data pipelines in Python and SQL — covering raw ingestion, staging, transformation, and analytics layers across PostgreSQL databases.",
      "Built and scheduled Apache Airflow DAGs to automate recurring ETL jobs, replacing manual processes and improving data freshness for downstream consumers.",
      "Engineered a semantic job-matching pipeline using Python, LangChain, and pgvector — parsing CVs and vectorising content for similarity search across 2,400+ live listings.",
      "Implemented incremental loading patterns (upsert / ON CONFLICT DO UPDATE) and run logging to support efficient, restartable pipeline execution at scale.",
      "Delivered a RAG-powered knowledge base using PostgreSQL/pgvector and LangChain, achieving sub-3-second query latency under load in production testing.",
    ],
    technologies: [
      "Python",
      "PostgreSQL",
      "Apache Airflow",
      "LangChain",
      "pgvector",
      "SQL",
      "ETL Pipelines",
      "RAG",
    ],
  },
  {
    title: 'Junior Python Developer',
    company: "Paystack        ",
    location: "Remote",
    period: "Aug 2024 – June 2025",
    type: "Internship — SQL & Data Analysis",
    description: [
      "Wrote complex SQL queries across PostgreSQL databases to extract, clean, and analyse business datasets for weekly management reporting.",
      "Built and maintained ETL pipelines that pulled data from multiple source systems into a central data warehouse, reducing manual data preparation time by 35%.",
      "Created data quality checks using SQL (NULL validation, duplicate detection, row count reconciliation) to ensure pipeline integrity across all reporting tables.",
      "Collaborated with senior analysts to design dashboard-ready summary views and aggregation tables consumed by Power BI reports.",
      "Documented SQL query logic and pipeline steps, improving team knowledge sharing and onboarding efficiency.",
    ],
    technologies: [
      "PostgreSQL",
      "SQL",
      "ETL Pipelines",
      "Power BI",
      "Data Warehousing",
    ],
  },
  {
    title: "Data Analyst Intern (SQL)",
    company: "Windle International, Kenya",
    location: "On-site",
    period: "January 2023 – March 2024",
    type: "Internship — SQL & Data Analysis",
    description: [
      "Wrote complex SQL queries across PostgreSQL databases to extract, clean, and analyse business datasets for weekly management reporting.",
      "Built and maintained ETL pipelines that pulled data from multiple source systems into a central data warehouse, reducing manual data preparation time by 35%.",
      "Created data quality checks using SQL (NULL validation, duplicate detection, row count reconciliation) to ensure pipeline integrity across all reporting tables.",
      "Collaborated with senior analysts to design dashboard-ready summary views and aggregation tables consumed by Power BI reports.",
      "Documented SQL query logic and pipeline steps, improving team knowledge sharing and onboarding efficiency.",
    ],
    technologies: [
      "PostgreSQL",
      "SQL",
      "ETL Pipelines",
      "Power BI",
      "Data Warehousing",
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
          My professional journey in software development, data engineering, and
          BI analytics
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
                className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
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
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      {exp.type && (
                        <>
                          <span>•</span>
                          <span className="text-xs italic">{exp.type}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Description bullets */}
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
                          className="flex-1 text-muted-foreground leading-relaxed text-sm"
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Technologies */}
                  <div
                    className="flex flex-wrap gap-2"
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground border border-border rounded-full text-xs hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
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
