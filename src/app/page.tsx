import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <HeroSection />
      <Projects/>
    </div>
  );
}
