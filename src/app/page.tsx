import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/projects";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
      <Header />
      <main style={{ maxWidth: "768px", margin: "0 auto", padding: "0 24px 96px" }}>
        <Hero />
        <Skills />
        <Projects />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
