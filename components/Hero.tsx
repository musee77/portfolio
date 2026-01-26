"use client";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-emerald-500/5 dark:from-blue-600/10 dark:via-cyan-600/10 dark:to-emerald-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-card border border-border rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium shadow-sm">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-foreground">Julius Matheka</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Charles
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-6 animate-fade-in-up delay-200">
          Software Engineer
        </p>

        {/* Description */}
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-300">
          Crafting innovative web applications and intelligent systems that
          solve real-world problems. Focused on building scalable solutions with
          modern technologies and machine learning capabilities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-400">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/50"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/resume/Jcharles.pdf"
            download
            className="px-8 py-4 bg-card text-foreground rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 border border-border"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-500">
          <a
            href="https://github.com/musee77"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/julius-charles-24b91b89/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card border border-border rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:cjmatheka@gmail.com"
            className="p-3 bg-card border border-border rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500 transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
