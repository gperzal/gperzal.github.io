"use client";
import AboutSection from "../components/homepage/About";
import ContactSection from "../components/homepage/Contact";
import Education from "../components/homepage/Education";
import Experience from "../components/homepage/Experience";
import HeroSection from "../components/homepage/Hero";
import Projects from "../components/homepage/Projects";
import Skills from "../components/homepage/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
