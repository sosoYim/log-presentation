import Image from "next/image";

// Servies telles quelles (3200 px, WebP) : pas de recompression, pour rester nettes sur un vidéoprojecteur.
const planches = [
  {
    src: "/images/chart_graphique/1.webp",
    width: 3200,
    height: 2234,
    alt: "Logo BailLyon : logo principal, déclinaisons, zone de protection, tailles minimales, couleurs et règles d'usage",
  },
  {
    src: "/images/chart_graphique/2.webp",
    width: 3200,
    height: 1800,
    alt: "Palette de couleurs, typographie Montserrat, style illustratif, éléments UI et icônes",
  },
  {
    src: "/images/chart_graphique/3.webp",
    width: 3200,
    height: 2133,
    alt: "Personnages Lucas et Alice : Lucas propose son logement, Alice cherche un logement, avec trois scènes illustrées",
  },
  {
    src: "/images/chart_graphique/4.webp",
    width: 3200,
    height: 1800,
    alt: "Style photographique, slogan « Pars serein, loue malin » et valeurs de la marque",
  },
];

export default function CharteGraphique() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Charte graphique
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Identité visuelle
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {planches.map((planche) => (
            <div key={planche.src} className="rounded-3xl overflow-hidden shadow-sm border border-purple-50">
              <Image
                src={planche.src}
                alt={planche.alt}
                width={planche.width}
                height={planche.height}
                unoptimized
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
