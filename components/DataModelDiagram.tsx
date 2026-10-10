type Store = "firestore" | "rtdb";

type Field = { name: string; type: string; key?: "PK" | "FK" };

type Entity = {
  name: string;
  path: string;
  store: Store;
  x: number;
  y: number;
  fields: Field[];
};

const BOX_W = 230;
const HEAD_H = 44;
const ROW_H = 20;
const PAD_B = 6;

const STORE_COLOR: Record<Store, string> = {
  firestore: "#16229C",
  rtdb: "#7034F4",
};

const entities: Entity[] = [
  {
    name: "USERS",
    path: "users/{uid}",
    store: "firestore",
    x: 20,
    y: 50,
    fields: [
      { name: "uid", type: "string", key: "PK" },
      { name: "firstName", type: "string" },
      { name: "lastName", type: "string" },
      { name: "email", type: "string" },
      { name: "role", type: "enum" },
      { name: "updatedAt", type: "timestamp" },
    ],
  },
  {
    name: "LISTINGS",
    path: "listings/{id}",
    store: "firestore",
    x: 435,
    y: 50,
    fields: [
      { name: "id", type: "string", key: "PK" },
      { name: "ownerId", type: "string", key: "FK" },
      { name: "ownerName", type: "string" },
      { name: "title", type: "string" },
      { name: "location", type: "string" },
      { name: "latitude", type: "number" },
      { name: "longitude", type: "number" },
      { name: "details", type: "string" },
      { name: "price", type: "number" },
      { name: "rating", type: "number" },
      { name: "image", type: "string" },
      { name: "verified", type: "boolean" },
      { name: "highlighted", type: "boolean" },
      { name: "availableFrom", type: "string" },
      { name: "availableTo", type: "string" },
      { name: "status", type: "enum" },
    ],
  },
  {
    name: "BOOKING_REQUESTS",
    path: "bookingRequests/{id}",
    store: "firestore",
    x: 435,
    y: 510,
    fields: [
      { name: "id", type: "string", key: "PK" },
      { name: "listingId", type: "string", key: "FK" },
      { name: "requesterId", type: "string", key: "FK" },
      { name: "ownerId", type: "string", key: "FK" },
      { name: "ownerName", type: "string" },
      { name: "arrivalDate", type: "string" },
      { name: "departureDate", type: "string" },
      { name: "message", type: "string" },
      { name: "status", type: "enum" },
      { name: "createdAt", type: "timestamp" },
      { name: "updatedAt", type: "timestamp" },
    ],
  },
  {
    name: "FAVORITES",
    path: "users/{uid}/favorites/{id}",
    store: "firestore",
    x: 850,
    y: 50,
    fields: [
      { name: "listingId", type: "string", key: "PK" },
      { name: "title", type: "string" },
      { name: "location", type: "string" },
      { name: "details", type: "string" },
      { name: "price", type: "number" },
      { name: "rating", type: "number" },
      { name: "image", type: "string" },
      { name: "createdAt", type: "timestamp" },
    ],
  },
  {
    name: "MESSAGES",
    path: "…/messages/{pushId}",
    store: "rtdb",
    x: 850,
    y: 330,
    fields: [
      { name: "id", type: "string", key: "PK" },
      { name: "senderId", type: "string", key: "FK" },
      { name: "text", type: "string" },
      { name: "createdAt", type: "number" },
    ],
  },
  {
    name: "CONVERSATIONS",
    path: "conversations/{id}",
    store: "rtdb",
    x: 850,
    y: 530,
    fields: [
      { name: "id", type: "string", key: "PK" },
      { name: "bookingRequestId", type: "string", key: "FK" },
      { name: "requesterId", type: "string", key: "FK" },
      { name: "ownerId", type: "string", key: "FK" },
      { name: "listingId", type: "string", key: "FK" },
      { name: "listingTitle", type: "string" },
      { name: "ownerName", type: "string" },
      { name: "lastMessage", type: "string" },
      { name: "lastMessageAt", type: "number" },
      { name: "updatedAt", type: "number" },
    ],
  },
];

type Mark = { x: number; y: number; text: string; anchor?: "start" | "middle" | "end" };

type Relation = { d: string; label: Mark; ends: [Mark, Mark] };

const relations: Relation[] = [
  {
    d: "M250,110 H435",
    label: { x: 342, y: 104, text: "publie" },
    ends: [{ x: 258, y: 104, text: "1" }, { x: 427, y: 104, text: "N" }],
  },
  {
    d: "M135,50 V22 H965 V50",
    label: { x: 550, y: 16, text: "enregistre" },
    ends: [{ x: 145, y: 42, text: "1" }, { x: 975, y: 42, text: "N" }],
  },
  {
    d: "M665,150 H850",
    label: { x: 757, y: 144, text: "copié dans" },
    ends: [{ x: 673, y: 144, text: "1" }, { x: 842, y: 144, text: "N" }],
  },
  {
    d: "M550,420 V510",
    label: { x: 560, y: 469, text: "concerne", anchor: "start" },
    ends: [{ x: 540, y: 436, text: "1" }, { x: 540, y: 504, text: "N" }],
  },
  {
    d: "M135,220 V640 H435",
    label: { x: 285, y: 634, text: "demande (requesterId) · reçoit (ownerId)" },
    ends: [{ x: 145, y: 238, text: "1" }, { x: 427, y: 656, text: "N" }],
  },
  {
    d: "M665,640 H850",
    label: { x: 757, y: 634, text: "ouvre" },
    ends: [{ x: 673, y: 634, text: "1" }, { x: 836, y: 634, text: "0..1" }],
  },
  {
    d: "M965,460 V530",
    label: { x: 975, y: 499, text: "contient", anchor: "start" },
    ends: [{ x: 955, y: 476, text: "N" }, { x: 955, y: 524, text: "1" }],
  },
  {
    d: "M90,220 V800 H1100 V395 H1080",
    label: { x: 595, y: 794, text: "envoie (senderId)" },
    ends: [{ x: 80, y: 238, text: "1" }, { x: 1092, y: 387, text: "N" }],
  },
];

const boxHeight = (e: Entity) => HEAD_H + e.fields.length * ROW_H + PAD_B;

export default function DataModelDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 1120 816"
        role="img"
        aria-label="Diagramme entité-relation : USERS, LISTINGS, BOOKING_REQUESTS et FAVORITES dans Firestore ; CONVERSATIONS et MESSAGES dans Realtime Database"
        className="w-full min-w-[900px] h-auto"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        <g fill="none" stroke="#9A8CD9" strokeWidth={1.5}>
          {relations.map((r) => (
            <path key={r.d} d={r.d} />
          ))}
        </g>

        {relations.map((r) => (
          <g key={r.d} stroke="#ffffff" strokeWidth={4} paintOrder="stroke" strokeLinejoin="round">
            <text
              x={r.label.x}
              y={r.label.y}
              textAnchor={r.label.anchor ?? "middle"}
              fontSize={11}
              fill="#4B5563"
            >
              {r.label.text}
            </text>
            {r.ends.map((m) => (
              <text
                key={`${m.x}-${m.y}`}
                x={m.x}
                y={m.y}
                textAnchor="middle"
                fontSize={11}
                fontWeight={700}
                fill="#7034F4"
              >
                {m.text}
              </text>
            ))}
          </g>
        ))}

        {entities.map((e) => (
          <g key={e.name}>
            <rect
              x={e.x}
              y={e.y}
              width={BOX_W}
              height={boxHeight(e)}
              rx={8}
              fill="#ffffff"
              stroke={STORE_COLOR[e.store]}
              strokeWidth={1.5}
            />
            <path
              d={`M${e.x},${e.y + HEAD_H} V${e.y + 8} a8,8 0 0 1 8,-8 H${e.x + BOX_W - 8} a8,8 0 0 1 8,8 V${e.y + HEAD_H} Z`}
              fill={STORE_COLOR[e.store]}
            />
            <text x={e.x + 10} y={e.y + 18} fontSize={12} fontWeight={700} fill="#ffffff">
              {e.name}
            </text>
            <text x={e.x + 10} y={e.y + 34} fontSize={10} fill="#ffffff" fillOpacity={0.7}>
              {e.path}
            </text>
            {e.fields.map((f, i) => {
              const y = e.y + HEAD_H + i * ROW_H + 15;
              return (
                <g key={f.name}>
                  {f.key && (
                    <text x={e.x + 10} y={y} fontSize={9} fontWeight={700} fill="#7034F4">
                      {f.key}
                    </text>
                  )}
                  <text x={e.x + 34} y={y} fontSize={11} fill="#1A202C">
                    {f.name}
                  </text>
                  <text x={e.x + BOX_W - 10} y={y} textAnchor="end" fontSize={10} fill="#9CA3AF">
                    {f.type}
                  </text>
                </g>
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}
