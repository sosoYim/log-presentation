import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Maquette from "@/components/sections/Maquette";

export const metadata = {
  title: "Maquette — BailLyon",
};

export default function MaquettePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Maquette />
      </main>
      <Footer />
    </>
  );
}
