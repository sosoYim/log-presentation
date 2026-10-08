import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Personas from "@/components/sections/Personas";
import Team from "@/components/sections/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Personas />
        <Team />
      </main>
      <Footer />
    </>
  );
}
