import HeroSection from "@/components/heroSection";
import Name from "@/components/name";
import NavBar from "@/components/navBar";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Name />
      <HeroSection />
      <Skills/>
      <Projects/>
      <OpenSource/>
    </div>
  );
}
