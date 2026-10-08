import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const values = [
  { icon: "/images/landing/features/shield-check.svg", label: "Confiance" },
  { icon: "/images/landing/features/users-group-02.svg", label: "Communauté" },
  { icon: "/images/landing/features/michelin-star.svg", label: "Simplicité" },
  { icon: "/images/landing/features/nav-pointer-02.svg", label: "Mobilité" },
  { icon: "/images/landing/features/lock-pincode.svg", label: "Sécurité" },
];

export default function Hero() {
  return (
    <section className="flex flex-col bg-[#E7E8FD] pt-16">
      {/* Main hero area */}
      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
        {/* Left: text */}
        <div>
          <p className="text-[#6B4EFF] font-semibold tracking-widest text-xs md:text-sm uppercase mb-5">
            Votre prochain chez-vous à Lyon
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2D1B8E] leading-tight mb-5">
            Pars serein,<br />
            <span className="text-[#6B4EFF]">loue malin</span>
          </h1>
          <p className="text-base md:text-lg text-[#2D1B8E]/70 font-medium mb-10 max-w-md leading-relaxed">
            Un logement étudiant pour un stage, un échange ou quelques mois
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/maquette"
              className="inline-flex items-center justify-center gap-2 bg-[#6B4EFF] hover:bg-[#5B3FE4] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-md"
            >
              Voir la maquette
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://m2gdp-g3-log-3963b.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#6B4EFF] text-[#6B4EFF] hover:bg-[#6B4EFF] hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-md"
            >
              Voir le site
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Right: image in rounded card with shadow */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-full">
            <Image
              src="/images/landing/hero.png"
              alt="BailLyon — étudiants à Lyon"
              width={700}
              height={520}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Values strip */}
      <div className="w-full border-t border-[#C0AFFF]/50">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {values.map((v, i) => (
              <div key={v.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-2 text-center flex-1">
                  <Image src={v.icon} alt={v.label} width={26} height={26} className="opacity-60" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2D1B8E]">{v.label}</span>
                </div>
                {i < values.length - 1 && (
                  <div className="w-px h-10 bg-[#C0AFFF] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
