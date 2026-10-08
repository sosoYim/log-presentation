import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CharteGraphique from "@/components/sections/CharteGraphique";

export const metadata = {
  title: "Charte graphique — BailLyon",
};

export default function ChartePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CharteGraphique />
      </main>
      <Footer />
    </>
  );
}
