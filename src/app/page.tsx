import About from "@/components/about";
import BackgroundBubble from "@/components/backgroundBubble";
import ContactForm from "@/components/contactForm";
import ExperienceSection from "@/components/experience";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import StartSection from "@/components/startSection";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* <BackgroundBubble /> */}
      <Navbar />
      <div className=" flex justify-center">
        <div className="w-10/12">
          <StartSection />
          <About />
          <ExperienceSection />
          {/* <Projects /> */}
          <Skills />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
