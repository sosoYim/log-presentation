import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PO from "@/components/sections/PO";

export const metadata = {
  title: "PO — BailLyon",
};

export default function POPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PO />
      </main>
      <Footer />
    </>
  );
}
