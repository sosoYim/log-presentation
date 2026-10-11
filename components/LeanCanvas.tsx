import type { ReactNode } from "react";

function Cell({ title, className = "", children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={`bg-white rounded-2xl p-5 border border-purple-50 ${className}`}>
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#7034F4] mb-3">{title}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function Point({ children, detail }: { children: ReactNode; detail?: ReactNode }) {
  return (
    <div className="border-l-2 border-[#BFB0FC] pl-3">
      <p className="text-sm font-bold text-[#16229C] leading-snug">{children}</p>
      {detail && <p className="text-xs text-gray-500 mt-0.5 leading-snug">{detail}</p>}
    </div>
  );
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5">{label}</p>
      {children}
    </div>
  );
}

function Lines({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-4 flex flex-col gap-1.5 text-xs text-gray-600 leading-snug marker:text-gray-300">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const B = ({ children }: { children: ReactNode }) => <strong className="font-bold text-[#16229C]">{children}</strong>;

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#7034F4] border border-[#BFB0FC] rounded px-1.5 py-0.5 whitespace-nowrap">
      {children}
    </span>
  );
}

const costs = [
  {
    name: "Infrastructure informatique",
    details: ["Serveurs, cloud", "Base de données, stockage, sauvegardes", "Nom de domaine, hébergement du site"],
    tags: ["récurrent"],
  },
  {
    name: "Outils numériques",
    details: ["Compte développeur", "AI tokens, API", "Abonnements aux logiciels"],
    tags: ["récurrent", "ponctuel"],
  },
  {
    name: "Sécurité",
    details: ["Certificat web", "Vérification d'identité (KYC)", "Signature électronique (Yousign)"],
    tags: ["récurrent"],
  },
  {
    name: "Marketing / Communication",
    details: ["Impression de flyers et d'affiches", "Espace publicitaire"],
    tags: ["ponctuel"],
  },
];

const revenues = [
  { name: "Métropole de Lyon", detail: "Subventions ou aides financières éventuelles" },
  { name: "Aides financières de l'État", detail: "Subventions et dispositifs de soutien" },
  { name: "Dons", detail: "Contributions financières sans contrepartie commerciale directe" },
  { name: "Sponsors", detail: "Soutien financier ou matériel apporté par des entreprises ou organismes" },
  {
    name: "Partenariats universités, écoles, associations",
    detail: "Les établissements paient pour proposer le service à leurs étudiants",
  },
  {
    name: "Meilleure diffusion",
    detail: "Service payant proposé aux locataires pour augmenter la visibilité de leurs annonces",
  },
];

export default function LeanCanvas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-3">
      {/* Proposition de valeur unique */}
      <div className="md:col-span-2 lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-2 bg-[#16229C] rounded-2xl p-6 flex flex-col justify-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#BFB0FC] mb-4">
          Proposition de valeur unique
        </p>
        <p className="text-white/70 font-semibold text-sm">BailLyon</p>
        <p className="text-white font-extrabold text-3xl leading-tight mt-1">
          Pars serein,
          <br />
          loue malin
        </p>
        <p className="text-white/80 text-sm leading-relaxed mt-5">
          L&apos;application connecte les <span className="text-white font-bold">étudiants lyonnais</span> pour
          faciliter la <span className="text-white font-bold">sous-location</span> de leur appartement et permettre
          aux nouveaux arrivants de trouver un <span className="text-white font-bold">logement abordable</span> en{" "}
          <span className="text-[#BFB0FC] font-bold">toute confiance</span>.
        </p>
      </div>

      {/* Problème */}
      <Cell title="Problème" className="lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2">
        <Point>Fiabilité des informations des offres</Point>
        <Point>Plateformes de location inadaptées au rythme étudiant</Point>
        <Point>Risque juridique et arnaque</Point>

        <div className="border-t border-[#E7E8FD] pt-3 flex flex-col gap-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Alternatives existantes</p>
          <Lines
            items={[
              <>
                <B>Groupes Facebook</B> : annonces listées sur la plateforme, risque élevé d&apos;arnaque
              </>,
              <>
                <B>Gens de Confiance</B> : tous types de logements, parrainage obligatoire pour accéder au site (effet
                de réseau)
              </>,
            ]}
          />
          <Group label="Sites web">
            <Lines
              items={[
                <B key="souslouer">Souslouer.com</B>,
                <B key="lacarte">Lacartedescolocs</B>,
                <B key="shareflat">Shareflat</B>,
                <>
                  <B>Leazly</B> : agence immobilière spécialisée dans la sous-location
                </>,
                <>
                  <B>Swwitch</B> : le Airbnb des sous-locations dans quelques villes françaises
                </>,
              ]}
            />
          </Group>
          <Group label="App + Web">
            <Lines
              items={[
                <>
                  <B>Agence Butler</B> : conciergerie immobilière, gestion des annonces et des contrats
                </>,
                <>
                  <B>Meetciao</B> : plateforme communautaire de logements et sous-locations dans les grandes villes
                  européennes
                </>,
              ]}
            />
          </Group>
        </div>
      </Cell>

      {/* Segments de clientèle */}
      <Cell title="Segments de clientèle" className="lg:col-start-9 lg:col-span-2 lg:row-start-1 lg:row-span-2">
        <div className="bg-[#E7E8FD] rounded-xl p-3">
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
            <p className="text-sm font-extrabold text-[#16229C]">Offreurs</p>
            <Tag>18-30 ans</Tag>
          </div>
          <p className="text-xs text-gray-600 mt-1.5 mb-1.5 leading-snug">
            Étudiants locataires lyonnais s&apos;absentant <B>1 à 6 mois</B>
          </p>
          <Lines items={["Stages", "Semestres internationaux", "Césure"]} />
        </div>
        <div className="bg-[#E7E8FD] rounded-xl p-3">
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
            <p className="text-sm font-extrabold text-[#16229C]">Demandeurs</p>
            <Tag>18-30 ans</Tag>
          </div>
          <p className="text-xs text-gray-600 mt-1.5 mb-1.5 leading-snug">
            Sous-locataires : étudiants arrivant à Lyon pour une <B>courte durée</B>
          </p>
          <Lines items={["Stages", "Concours", "Alternants avec rythme mensuel"]} />
        </div>
        <div className="border-t border-[#E7E8FD] pt-3">
          <Group label="Pionniers (early adopters)">
            <Lines items={[<B key="insa">INSA</B>, <B key="em">EM Lyon</B>, <B key="udl">Université de Lyon 1/2/3</B>]} />
          </Group>
        </div>
      </Cell>

      {/* Solution */}
      <Cell title="Solution" className="lg:col-start-3 lg:col-span-2 lg:row-start-1">
        <Point detail="Adresse email universitaire, carte étudiante">Vérification de l&apos;identité étudiante</Point>
        <Point>Générateur de bail de sous-location pré-rempli</Point>
        <Point>Mise en relation d&apos;étudiants sans intermédiaire</Point>
        <Point>Demande envoyée directement aux locataires</Point>
      </Cell>

      {/* Avantage compétitif */}
      <Cell title="Avantage compétitif" className="lg:col-start-7 lg:col-span-2 lg:row-start-1">
        <Point detail="Cercle restreint">Plateforme exclusivement adressée aux étudiants</Point>
        <Point detail="Difficile à pénétrer pour une plateforme généraliste">
          Réseau localisé lyonnais ultra-dense
        </Point>
        <Point detail="Zéro frais supplémentaire">Prix compétitifs des logements proposés</Point>
      </Cell>

      {/* Indicateurs clés */}
      <Cell title="Indicateurs clés" className="lg:col-start-3 lg:col-span-2 lg:row-start-2">
        <Group label="Engagement">
          <Lines
            items={[
              "Nombre de téléchargements et de comptes créés",
              "Taux d'utilisateurs actifs par semaine et par mois",
              "Nombre de nouvelles annonces publiées par semaine ou par mois",
            ]}
          />
        </Group>
        <Group label="Efficacité">
          <Lines
            items={[
              <>
                <B>Taux de concrétisation</B> : part des utilisateurs ayant trouvé leur sous-locataire grâce à
                l&apos;application
              </>,
              "Durée de vie de l'annonce avant qu'elle soit pourvue",
              "Délai moyen de réponse après l'envoi du 1er message",
            ]}
          />
        </Group>
        <Group label="Rétention">
          <Lines
            items={[
              "Nombre de vues par annonce",
              "Temps passé sur l'application",
              "Score de satisfaction des utilisateurs après l'échange",
            ]}
          />
        </Group>
      </Cell>

      {/* Canaux */}
      <Cell title="Canaux" className="lg:col-start-7 lg:col-span-2 lg:row-start-2">
        <Group label="Distribution">
          <Lines items={[<B key="app">Application web et mobile</B>]} />
        </Group>
        <Group label="Diffusion numérique">
          <Lines
            items={[
              <>
                <B>Réseaux sociaux</B> : Facebook, Instagram, Discord, TikTok, WhatsApp de promo, Reddit
              </>,
              <>
                <B>Publicités numériques</B> : Google Ads, Meta Ads
              </>,
            ]}
          />
        </Group>
        <Group label="Médias de masse (effet de proximité)">
          <Lines items={["Presse locale", "Radio locale", "Télévision locale", "Affichage dans la ville"]} />
        </Group>
        <Group label="Partenariats institutionnels">
          <Lines
            items={[
              <>
                <B>BDE</B> des grandes écoles et universités lyonnaises
              </>,
              "Lien avec les universités lyonnaises",
            ]}
          />
        </Group>
      </Cell>

      {/* Structure de coûts */}
      <Cell title="Structure de coûts" className="lg:col-start-1 lg:col-span-5 lg:row-start-3">
        <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3">
          {costs.map((c) => (
            <div key={c.name}>
              <div className="flex flex-wrap items-center gap-1.5">
                <p className="text-sm font-bold text-[#16229C]">{c.name}</p>
                {c.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-1.5">
                <Lines items={c.details} />
              </div>
            </div>
          ))}
        </div>
      </Cell>

      {/* Sources de revenus */}
      <Cell title="Sources de revenus" className="lg:col-start-6 lg:col-span-5 lg:row-start-3">
        <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3">
          {revenues.map((r) => (
            <div key={r.name}>
              <p className="text-sm font-bold text-[#16229C]">{r.name}</p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">{r.detail}</p>
            </div>
          ))}
        </div>
      </Cell>
    </div>
  );
}
