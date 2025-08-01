import HeroSection from "@/components/heroSection";
import Name from "@/components/name";
import NavBar from "@/components/navBar";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Name />
      <HeroSection />
      <Projects/>
      <OpenSource/>
    </div>
  );
}
