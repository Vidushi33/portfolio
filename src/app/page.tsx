import About from "@/components/about";
import BackgroundBubble from "@/components/backgroundBubble";
import ContactForm from "@/components/contactForm";
import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import StartSection from "@/components/startSection";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* <BackgroundBubble /> */}
      <Navbar />
      <div className="mx-auto px-3 lg:px-0 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-2 xl:mt-0">
        <StartSection />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
