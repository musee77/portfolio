"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
            <span>� {currentYear} Julius Matheka Charles.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
