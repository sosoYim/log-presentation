import Image from "next/image";

/* ─────────────────────────────────────────
   Parcours utilisateurs — full page
───────────────────────────────────────── */

/* ── 1. LES PERSONAS ── */
const personas = [
  {
    name: "Alice",
    age: "22 ans",
    role: "Étudiante demandeuse",
    tag: "Je cherche un logement",
    emoji: "👩‍🎓",
    faceOrigin: "76% 12%",
    tagStyle: "bg-[#E7E8FD] text-[#7034F4]",
    borderColor: "border-t-[#7034F4]",
    quote: "L'hôtel, c'est trop cher. Un bail d'un an, c'est trop long. Comment trouver une chambre juste pour mon stage de 2 mois à Lyon ?",
    tags: ["Stage · 2 mois", "Nouveau à Lyon", "Budget étudiant", "Pressée par le temps"],
    painGains: [
      { pain: "Peur des arnaques en ligne", gain: "Profils étudiants vérifiés" },
      { pain: "Chercher sur 10 plateformes", gain: "Tout centralisé en un seul endroit" },
      { pain: "Aucune réponse des propriétaires", gain: "Messagerie directe entre étudiants" },
    ],
  },
  {
    name: "Lucas",
    age: "24 ans",
    role: "Étudiant annonceur",
    tag: "Je propose mon logement",
    emoji: "👨‍💻",
    faceOrigin: "30% 2%",
    tagStyle: "bg-[#16229C] text-white",
    borderColor: "border-t-[#16229C]",
    quote: "Je pars en échange à l'étranger pendant 3 mois. Mon loyer continue de tourner... et ma chambre va rester vide tout ce temps ?",
    tags: ["Échange universitaire", "Absent 3 mois", "Loyer à couvrir", "Besoin de confiance"],
    painGains: [
      { pain: "Peur des dégradations", gain: "Sous-locataires étudiants vérifiés" },
      { pain: "Demandes peu sérieuses", gain: "Profils complets et transparents" },
      { pain: "Démarches compliquées", gain: "Processus encadré pas à pas" },
    ],
  },
];

function PersonaCard({ p }: { p: typeof personas[0] }) {
  return (
    <div className={`bg-white rounded-3xl border-t-4 ${p.borderColor} shadow-sm overflow-hidden`}>
      <div className="p-8 pb-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl flex-shrink-0 overflow-hidden relative ring-2 ring-[#BFB0FC] shadow-md">
            <Image
              src="/images/auth/bin2.png"
              alt={p.name}
              fill
              className="object-cover scale-[3]"
              style={{ transformOrigin: p.faceOrigin }}
            />
          </div>
          <div>
            <h3 className="font-extrabold text-[#16229C] text-2xl">{p.name}</h3>
            <p className="text-gray-400 text-sm">{p.age} · {p.role}</p>
            <span className={`inline-block mt-1.5 text-xs font-semibold px-3 py-1 rounded-full ${p.tagStyle}`}>
              {p.tag}
            </span>
          </div>
        </div>

        <blockquote className="bg-[#E7E8FD] rounded-2xl px-6 py-5 mb-4 shadow-sm">
          <p className="text-[#16229C] font-semibold text-base leading-relaxed italic">
            « {p.quote} »
          </p>
        </blockquote>

        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium bg-[#E7E8FD] text-[#7034F4] px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-purple-50">
        <div className="grid grid-cols-2 text-xs font-bold text-gray-400 uppercase tracking-wider px-8 py-3 bg-gray-50/50">
          <span>Problème</span>
          <span className="text-[#7034F4]">Solution BailLyon</span>
        </div>
        {p.painGains.map((pg, k) => (
          <div key={k} className={`grid grid-cols-2 px-8 py-4 gap-4 text-sm ${k % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}>
            <div className="flex items-start gap-2 text-gray-500">
              <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>{pg.pain}
            </div>
            <div className="flex items-start gap-2 text-gray-700 font-medium">
              <span className="text-[#7034F4] mt-0.5 flex-shrink-0">✓</span>{pg.gain}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 2. STORYBOARD ── */
const aliceFrames = [
  { img: "/images/storyboard/demandeur_1.png", caption: "Stage de 4 mois à Lyon — l'hôtel trop cher, le bail trop long." },
  { img: "/images/storyboard/demandeur_2.png", caption: "Elle découvre BailLyon, la plateforme de sous-location étudiante." },
  { img: "/images/storyboard/demandeur_3.png", caption: "Inscription rapide avec son statut étudiant vérifié." },
  { img: "/images/storyboard/demandeur_4.png", caption: "Elle filtre par dates et trouve la chambre parfaite." },
  { img: "/images/storyboard/demandeur_5.png", caption: "Un message direct via la messagerie intégrée, sans intermédiaire." },
  { img: "/images/storyboard/demandeur_6.png", caption: "Réservation confirmée — elle prépare son arrivée à Lyon, sereine !" },
];

const lucasFrames = [
  { img: "/images/storyboard/annonceur_1.png", caption: "Échange universitaire à Berlin — 3 mois de loyer lyonnais à couvrir." },
  { img: "/images/storyboard/annonceur_2.png", caption: "Sous-louer sans résilier son bail ? BailLyon rend ça possible." },
  { img: "/images/storyboard/annonceur_3.png", caption: "Il veut un étudiant vérifié et sérieux, pas n'importe qui." },
  { img: "/images/storyboard/annonceur_4.png", caption: "Annonce publiée en quelques clics : photos, dates, équipements." },
  { img: "/images/storyboard/annonceur_5.png", caption: "Il consulte le profil et échange directement avec le candidat." },
  { img: "/images/storyboard/annonceur_6.png", caption: "Demande acceptée — il part serein, son logement est entre de bonnes mains." },
];

function StoryboardGrid({ frames, name, emoji }: { frames: typeof aliceFrames; name: string; emoji: string }) {
  return (
    <div className="bg-[#E7E8FD] rounded-3xl p-6">
      <h4 className="font-bold text-[#16229C] text-lg mb-5">{emoji} {name}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {frames.map((f, i) => (
          <div key={i} className="flex flex-col">
            <div className="rounded-2xl overflow-hidden aspect-square relative shadow-sm">
              <Image src={f.img} alt={f.caption} fill className="object-cover scale-[1.03]" />
              <div className="absolute top-2 left-2 w-6 h-6 bg-[#7034F4] text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                {i + 1}
              </div>
            </div>
            <p className="text-xs font-semibold text-[#16229C] mt-2 leading-relaxed">{f.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Storyboard() {
  return (
    <div className="space-y-14">
      <StoryboardGrid frames={aliceFrames} name="Alice" emoji="👩‍🎓" />
      <StoryboardGrid frames={lucasFrames} name="Lucas" emoji="👨‍💻" />
    </div>
  );
}

function CroppedPlanche({ src, alt, visibleHeight }: { src: string; alt: string; visibleHeight: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-purple-100 shadow-sm"
      style={{ aspectRatio: `1536 / ${visibleHeight}` }}
    >
      <Image src={src} alt={alt} fill unoptimized className="object-cover object-bottom" />
    </div>
  );
}

/* ── SECTION TITLE ── */
function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-white bg-[#7034F4] w-12 h-12 rounded-xl flex items-center justify-center text-base font-extrabold flex-shrink-0">
        {number}
      </span>
      <h2 className="text-2xl font-extrabold text-[#16229C]">{title}</h2>
    </div>
  );
}

/* ── MAIN EXPORT ── */
export default function ParcoursUtilisateurs() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Parcours utilisateurs
          </p>
          <h1 className="text-4xl font-extrabold text-[#16229C]">
            Comprendre nos utilisateurs
          </h1>
        </div>

        <section className="mb-20">
          <SectionTitle number="01" title="Les personas" />
          <div className="grid md:grid-cols-2 gap-8">
            {personas.map((p) => <PersonaCard key={p.name} p={p} />)}
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle number="02" title="Storyboard" />
          <Storyboard />
        </section>

        <section className="mb-20">
          <SectionTitle number="03" title="User Journey Map" />
          <CroppedPlanche
            src="/images/parcours_utilisateurs/user_journey.png"
            alt="Parcours utilisateur d'Alice (recherche, découverte, inscription, mise en relation, confirmation) et de Lucas (besoin, publication, demandes, sélection, confirmation) : actions, émotions, pain points et opportunités UX à chaque étape"
            visibleHeight={932}
          />
        </section>
      </div>
    </div>
  );
}
