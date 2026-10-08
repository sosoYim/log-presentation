import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DEV from "@/components/sections/DEV";

export const metadata = {
  title: "DEV — BailLyon",
};

export default function DEVPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <DEV />
      </main>
      <Footer />
    </>
  );
}
