
import { AboutMe } from "@/components/about/AboutMe";
import { Contact } from "@/components/contact/Contact";
import { HeroBanner } from "@/components/HeroBanner";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/project/Projects";
import { Divider } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>Sam Aquino</title>
        <meta name="description" content="Welcome to my portfolio site." />
      </Head>
    <Navbar/>
   <main>
      <HeroBanner/>
      <AboutMe />
      <Projects />
      <Divider/>
      <Contact/>
   </main>
   </>
  );
}
