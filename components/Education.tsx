"use client";

import { GraduationCap, Award, Calendar } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential?: string;
}

const education: Education[] = [
  {
    degree: "Professional Certification — Software Engineering",
    institution: "ALX Africa",
    location: "Remote",
    period: "Jan 2024 – Feb 2025",
    description:
      "Full-stack development, algorithms, Django/React, Java/Spring Boot.",
  },
  {
    degree: "Professional Certification — Data Science",
    institution: "Moringa School",
   location: "Remote",
    period: "Jan 2023 – Nov 2023",
    description:
      "Machine Learning, ETL pipelines, Python, SQL, TensorFlow, Tableau.",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Kenyatta University",
    location: "Nairobi, Kenya",
    period: "2018 – 2022",
    description:
      "Strong foundation in algorithms, data structures, software engineering, and systems design.",
  },
];

const certifications: Certification[] = [
  {
    name: "ETL and Data Pipelines with Shell, Airflow & Kafka",
    issuer: "IBM",
    date: "2024",
  },
  {
    name: "Data Warehousing and BI Analytics",
    issuer: "IBM",
    date: "2024",
  },
  {
    name: "Linux Commands and Shell Scripting",
    issuer: "IBM",
    date: "2024",
  },
];

export default function Education() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Education &{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My academic background and professional certifications
        </p>
      </div>

      {/* Education */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
          Education
        </h3>
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                  {edu.institution}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-500 dark:text-slate-400">{edu.location}</span>
                <span className="text-slate-500">•</span>
                <div className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
          <Award className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 hover:border-cyan-500 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500">{cert.date}</span>
                  {cert.credential && (
                    <span className="text-xs text-cyan-400 font-mono">
                      ID: {cert.credential}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
