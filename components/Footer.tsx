import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Maquette", href: "/maquette" },
  { label: "Charte graphique", href: "/charte" },
  { label: "Parcours utilisateurs", href: "/parcours" },
  { label: "PO", href: "/po" },
  { label: "DEV", href: "/dev" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2D1B8E] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/">
            <Image src="/images/logo.svg" alt="BailLyon" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-white/40 text-xs text-center">
            Projet étudiant — Lyon 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
