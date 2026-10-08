import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParcoursUtilisateurs from "@/components/sections/ParcoursUtilisateurs";

export const metadata = {
  title: "Parcours utilisateurs — BailLyon",
};

export default function ParcoursPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ParcoursUtilisateurs />
      </main>
      <Footer />
    </>
  );
}
