import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ship30 from "@/components/Ship30";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.14em] focus:text-ground"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Ship30 />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
