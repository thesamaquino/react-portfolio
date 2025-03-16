import { AboutMe } from "@/components/about/AboutMe";
import { Contact } from "@/components/contact/Contact";
import { HeroBanner } from "@/components/HeroBanner";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/project/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroBanner/>
    <AboutMe />
    <Projects />
    <Contact/>
    </>
  );
}
