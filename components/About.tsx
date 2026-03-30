"use client";

import { Database, Brain, BarChart3, Code2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-700 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Turning complex data into actionable insights and building reliable,
            scalable systems
          </p>
        </div>

        {/* Main Content – Mobile: Stacked | Desktop: Side-by-side */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Left: Bio Text */}
          <div className="space-y-5 text-gray-900 dark:text-slate-300">
            <p className="text-base sm:text-lg leading-relaxed">
              I&apos;m a Software & Data Engineer with hands-on experience
              across the full data lifecycle — from pipeline design and SQL
              analytics to Python backend development and BI reporting. I
              specialise in turning complex data into actionable business
              insights and building reliable, scalable systems.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              With a Computer Science foundation and professional certifications
              in Software Engineering and Data Science, I&apos;ve built a
              career across data engineering, backend development, and AI/ML
              integration — always focused on writing clean, maintainable code
              and delivering impactful solutions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I bring a strong foundation in Agile delivery, cloud-native
              tools, and AI/ML integration. I&apos;m always eager to take on
              new challenges and collaborate on projects that push the
              boundaries of what&apos;s possible.
            </p>
          </div>

          {/* Right: Highlight Cards – Mobile: 1-col → Tablet: 2-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Database,
                title: "Data Engineering",
                desc: "PostgreSQL · ETL/ELT · Airflow · Kafka · pgvector",
                color: "blue",
              },
              {
                icon: Brain,
                title: "AI / ML Integration",
                desc: "LangChain · OpenAI · RAG · Semantic Search · Claude",
                color: "cyan",
              },
              {
                icon: BarChart3,
                title: "BI & Analytics",
                desc: "Power BI · Tableau · Dashboards · DAX · Data Modeling",
                color: "purple",
              },
              {
                icon: Code2,
                title: "Python Backend",
                desc: "Django · DRF · FastAPI · Celery · pytest",
                color: "green",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-5 sm:p-6 
                         hover:border-cyan-500 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center
                    bg-${item.color}-500/10 group-hover:bg-${item.color}-500/20 transition-colors`}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section – Always 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "5+", label: "Professional Roles" },
            { number: "20+", label: "Technologies Mastered" },
            { number: "100%", label: "Commitment" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-bold 
                bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
              >
                {stat.number}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
