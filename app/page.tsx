import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
        >
          <div className="max-w-7xl mx-auto">
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
        >
          <div className="max-w-7xl mx-auto">
            <Experience />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Education />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
        >
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
