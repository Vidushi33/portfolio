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
<<<<<<< HEAD
      <div className="mx-auto w-10/12">
=======
      <div className="mx-auto w-10/12 ">
>>>>>>> 5270672 (adding data to repo)
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
