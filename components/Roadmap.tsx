type Bar = { label: string; start: number; end: number };

type Tone = "indigo" | "amber" | "emerald" | "sky" | "violet" | "slate";

type Theme = { name: string; tone: Tone; lanes: Bar[][] };

const sprints = [
  { name: "Sprint 1", dates: "09/09 - 22/09" },
  { name: "Sprint 2", dates: "23/09 - 06/10" },
  { name: "Sprint 3", dates: "07/10 - 20/10" },
  { name: "Sprint 4", dates: "21/10 - 04/11" },
  { name: "Sprint 5", dates: "05/11 - 11/11" },
];

// start / end sont exprimés en sprints : 0 = début du sprint 1, 5 = fin du sprint 5.
const themes: Theme[] = [
  {
    name: "Accès compte",
    tone: "indigo",
    lanes: [
      [{ label: "Epic 01 · Authentification", start: 0, end: 1 }],
      [{ label: "Epic 02 · Inscription", start: 0, end: 1 }],
      [
        { label: "Epic 03 · Profil", start: 0, end: 1 },
        { label: "Epic 12 · Compte - Information", start: 1.4, end: 2.85 },
        { label: "Epic 13 · Compte - Avis", start: 3.6, end: 5 },
      ],
    ],
  },
  {
    name: "Annonce logement",
    tone: "amber",
    lanes: [
      [{ label: "Epic 05 · Annonce - Création", start: 0.7, end: 2.9 }],
      [{ label: "Epic 08 · Annonce - Information", start: 1, end: 3 }],
    ],
  },
  {
    name: "Recherche carte",
    tone: "emerald",
    lanes: [
      [{ label: "Epic 06 · Géolocalisation - Carte", start: 1.8, end: 3.4 }],
      [{ label: "Epic 07 · Recherche - Filtres & Choix", start: 2.05, end: 3.7 }],
      [{ label: "Epic 09 · Annonce - Favoris", start: 2.25, end: 3.5 }],
    ],
  },
  {
    name: "Messagerie réservation",
    tone: "sky",
    lanes: [
      [{ label: "Epic 10 · Messagerie & Conversation", start: 2.65, end: 4.2 }],
      [{ label: "Epic 11 · Disponibilité & Réservation", start: 2.9, end: 4.5 }],
    ],
  },
  {
    name: "Navigation",
    tone: "violet",
    lanes: [[{ label: "Epic 04 · Navigation", start: 0, end: 0.9 }]],
  },
  {
    name: "Tech",
    tone: "slate",
    lanes: [[{ label: "Finalisation - Tests", start: 3.9, end: 5 }]],
  },
];

// Une teinte par thème, en version pâle : la couleur classe les lignes sans dominer la page.
const TONE: Record<Tone, { dot: string; bar: string }> = {
  indigo: { dot: "bg-indigo-500", bar: "bg-indigo-50 border-indigo-200 text-indigo-950" },
  amber: { dot: "bg-amber-500", bar: "bg-amber-50 border-amber-200 text-amber-950" },
  emerald: { dot: "bg-emerald-500", bar: "bg-emerald-50 border-emerald-200 text-emerald-950" },
  sky: { dot: "bg-sky-500", bar: "bg-sky-50 border-sky-200 text-sky-950" },
  violet: { dot: "bg-violet-500", bar: "bg-violet-50 border-violet-200 text-violet-950" },
  slate: { dot: "bg-slate-400", bar: "bg-slate-50 border-slate-200 text-slate-800" },
};

const percent = (value: number) => `${(value / sprints.length) * 100}%`;

export default function Roadmap() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px] grid grid-cols-[170px_1fr] gap-x-4">
        <div />
        <div className="grid grid-cols-5 pb-3">
          {sprints.map((sprint) => (
            <div key={sprint.name} className="text-center">
              <p className="text-sm font-bold text-[#16229C]">{sprint.name}</p>
              <p className="text-xs text-gray-400 tabular-nums">{sprint.dates}</p>
            </div>
          ))}
        </div>

        {themes.map((theme) => (
          <div key={theme.name} className="contents">
            <div className="flex items-center gap-2.5 border-t border-gray-100 py-3">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${TONE[theme.tone].dot}`} />
              <span className="text-sm font-bold text-gray-800 leading-tight">{theme.name}</span>
            </div>
            <div className="relative flex flex-col gap-1.5 border-t border-gray-100 py-3">
              <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
                {sprints.map((sprint, i) => (
                  <div key={sprint.name} className={i > 0 ? "border-l border-dashed border-gray-200" : ""} />
                ))}
              </div>
              {theme.lanes.map((lane, i) => (
                <div key={i} className="relative h-7">
                  {lane.map((bar) => (
                    <div
                      key={bar.label}
                      title={bar.label}
                      className={`absolute inset-y-0 rounded-md border px-2.5 flex items-center gap-2 text-xs font-semibold ${TONE[theme.tone].bar}`}
                      style={{ left: percent(bar.start), width: percent(bar.end - bar.start) }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${TONE[theme.tone].dot}`} />
                      <span className="truncate">{bar.label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
