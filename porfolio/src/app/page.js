
'use client';

import { AboutMe } from "@/components/about/AboutMe";
import { Contact } from "@/components/contact/Contact";
import { HeroBanner } from "@/components/HeroBanner";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/project/Projects";
import { Volunteer } from "@/components/volunteer/Volunteer";
import { Divider } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner/>
      <AboutMe />
      <Projects />
      <Volunteer />
      <Contact/>
   </>
  );
}
