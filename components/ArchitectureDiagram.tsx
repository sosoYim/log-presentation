type Link = {
  y: number;
  label: string;
  toApp?: boolean;
  planned?: boolean;
};

type Service = { y: number; name: string; detail: string };

const NAVY = "#16229C";
const PURPLE = "#7034F4";
const LINE = "#9A8CD9";

const APP_RIGHT = 270;
const SERVICE_X = 800;
const SERVICE_W = 280;
const SERVICE_H = 40;

const firebaseServices: Service[] = [
  { y: 50, name: "Firebase Hosting", detail: "fichiers statiques" },
  { y: 105, name: "Firebase Authentication", detail: "lien magique" },
  { y: 160, name: "Cloud Firestore", detail: "documents" },
  { y: 215, name: "Realtime Database", detail: "temps réel" },
];

const links: Link[] = [
  { y: 70, label: "sert l'application", toApp: true },
  { y: 125, label: "connexion par lien magique (email)" },
  { y: 180, label: "profils · annonces · favoris · demandes" },
  { y: 235, label: "conversations · messages" },
  { y: 345, label: "GET /api/health" },
];

const appLines = ["Angular 22 · TypeScript", "Tailwind CSS · Spartan UI", "Carte Leaflet", "Service worker (hors ligne)"];

export default function ArchitectureDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 1120 446"
        role="img"
        aria-label="Schéma d'architecture : l'application Angular parle directement à Firebase (Hosting, Authentication, Firestore, Realtime Database) et au Worker Cloudflare, auquel D1 et R2 sont liés sans être encore utilisés"
        className="w-full min-w-[900px] h-auto"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        <defs>
          <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill={LINE} />
          </marker>
        </defs>

        {/* Groupes */}
        <rect x={780} y={18} width={320} height={254} rx={12} fill="#F5F3FF" stroke="#D9D2FB" />
        <text x={792} y={38} fontSize={11} fontWeight={700} fill={NAVY}>
          FIREBASE
        </text>
        <rect x={780} y={296} width={320} height={134} rx={12} fill="#F5F3FF" stroke="#D9D2FB" />
        <text x={792} y={314} fontSize={11} fontWeight={700} fill={PURPLE}>
          CLOUDFLARE
        </text>

        {/* Liens */}
        {links.map((l) => (
          <g key={l.y}>
            <line
              x1={APP_RIGHT}
              y1={l.y}
              x2={SERVICE_X}
              y2={l.y}
              stroke={LINE}
              strokeWidth={1.5}
              markerEnd={l.toApp ? undefined : "url(#arch-arrow)"}
              markerStart={l.toApp ? "url(#arch-arrow)" : undefined}
            />
            <text x={535} y={l.y - 7} textAnchor="middle" fontSize={11} fill="#4B5563">
              {l.label}
            </text>
          </g>
        ))}
        <g fill="none" stroke={LINE} strokeWidth={1.5} strokeDasharray="5 4">
          <path d="M920,345 H940 V339 H960" />
          <path d="M940,345 V383 H960" />
        </g>
        <text x={1020} y={420} textAnchor="middle" fontSize={10} fill="#6B7280">
          liés, pas encore utilisés
        </text>

        {/* Application */}
        <rect x={20} y={40} width={250} height={350} rx={12} fill="#ffffff" stroke={NAVY} strokeWidth={1.5} />
        <path d="M20,84 V52 a12,12 0 0 1 12,-12 H258 a12,12 0 0 1 12,12 V84 Z" fill={NAVY} />
        <text x={36} y={59} fontSize={13} fontWeight={700} fill="#ffffff">
          Application web
        </text>
        <text x={36} y={75} fontSize={10} fill="#ffffff" fillOpacity={0.7}>
          PWA mobile-first · navigateur
        </text>
        {appLines.map((line, i) => (
          <text key={line} x={36} y={190 + i * 24} fontSize={11} fill="#1A202C">
            {line}
          </text>
        ))}

        {/* Services Firebase */}
        {firebaseServices.map((s) => (
          <g key={s.name}>
            <rect x={SERVICE_X} y={s.y} width={SERVICE_W} height={SERVICE_H} rx={8} fill="#ffffff" stroke={NAVY} strokeWidth={1.5} />
            <text x={SERVICE_X + 12} y={s.y + 25} fontSize={12} fontWeight={700} fill={NAVY}>
              {s.name}
            </text>
            <text x={SERVICE_X + SERVICE_W - 12} y={s.y + 25} textAnchor="end" fontSize={10} fill="#9CA3AF">
              {s.detail}
            </text>
          </g>
        ))}

        {/* Cloudflare */}
        <rect x={SERVICE_X} y={325} width={120} height={SERVICE_H} rx={8} fill="#ffffff" stroke={PURPLE} strokeWidth={1.5} />
        <text x={SERVICE_X + 60} y={350} textAnchor="middle" fontSize={12} fontWeight={700} fill={PURPLE}>
          Worker API
        </text>
        {[
          { y: 322, name: "D1 · sessions" },
          { y: 366, name: "R2 · media" },
        ].map((b) => (
          <g key={b.name}>
            <rect x={960} y={b.y} width={120} height={34} rx={8} fill="#ffffff" stroke={PURPLE} strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={1020} y={b.y + 21} textAnchor="middle" fontSize={11} fill={PURPLE}>
              {b.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
