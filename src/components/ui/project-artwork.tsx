const INK = "var(--ink-soft)";
const MUTE = "var(--ink-fade)";
const ACC = "var(--accent)";

interface ProjectArtworkProps {
  kind: string;
  className?: string;
}

/* Shared app-window frame, then per-kind contents */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="32" y="34" width="336" height="182" rx="12" stroke={INK} strokeWidth="2" />
      <line x1="32" y1="64" x2="368" y2="64" stroke={INK} strokeWidth="2" />
      <circle cx="50" cy="49" r="3.5" stroke={MUTE} strokeWidth="1.5" />
      <circle cx="64" cy="49" r="3.5" stroke={MUTE} strokeWidth="1.5" />
      <circle cx="78" cy="49" r="3.5" stroke={MUTE} strokeWidth="1.5" />
      {children}
    </>
  );
}

const art: Record<string, React.ReactNode> = {
  // Calendar grid + a highlighted day + floating add button
  events: (
    <Frame>
      <rect x="56" y="84" width="180" height="108" rx="6" stroke={INK} strokeWidth="2" />
      <line x1="56" y1="106" x2="236" y2="106" stroke={MUTE} strokeWidth="1.5" />
      {[0, 1, 2, 3].map((c) =>
        [0, 1, 2].map((r) => (
          <circle
            key={`${c}-${r}`}
            cx={78 + c * 46}
            cy={126 + r * 24}
            r="4"
            stroke={MUTE}
            strokeWidth="1.5"
          />
        ))
      )}
      <circle cx="124" cy="150" r="9" fill={ACC} />
      <rect x="262" y="92" width="84" height="48" rx="6" stroke={ACC} strokeWidth="2" />
      <line x1="276" y1="110" x2="332" y2="110" stroke={ACC} strokeWidth="2" />
      <line x1="276" y1="124" x2="312" y2="124" stroke={MUTE} strokeWidth="1.5" />
      <circle cx="328" cy="172" r="16" fill={ACC} />
      <line x1="328" y1="165" x2="328" y2="179" stroke="var(--paper)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="321" y1="172" x2="335" y2="172" stroke="var(--paper)" strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  ),

  // Stacked questions, radio options (one chosen), progress bar
  survey: (
    <Frame>
      <line x1="56" y1="86" x2="150" y2="86" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="62" cy={112 + i * 26} r="7" stroke={i === 1 ? ACC : MUTE} strokeWidth="2" />
          {i === 1 && <circle cx="62" cy={112 + i * 26} r="3" fill={ACC} />}
          <line
            x1="80"
            y1={112 + i * 26}
            x2={i === 1 ? 250 : 210}
            y2={112 + i * 26}
            stroke={i === 1 ? INK : MUTE}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
      <rect x="56" y="180" width="288" height="8" rx="4" stroke={MUTE} strokeWidth="1.5" />
      <rect x="56" y="180" width="172" height="8" rx="4" fill={ACC} />
      <path d="M300 96 l8 8 l16 -18" stroke={ACC} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),

  // Week columns with booking blocks
  booking: (
    <Frame>
      {[0, 1, 2, 3, 4].map((c) => (
        <line key={c} x1={56 + c * 64} y1="80" x2={56 + c * 64} y2="196" stroke={MUTE} strokeWidth="1.5" />
      ))}
      <line x1="56" y1="80" x2="344" y2="80" stroke={INK} strokeWidth="2" />
      <rect x="60" y="92" width="56" height="30" rx="4" fill={ACC} />
      <rect x="124" y="132" width="56" height="40" rx="4" stroke={INK} strokeWidth="2" />
      <rect x="188" y="100" width="56" height="26" rx="4" stroke={ACC} strokeWidth="2" />
      <rect x="252" y="150" width="56" height="34" rx="4" stroke={INK} strokeWidth="2" />
      <rect x="60" y="150" width="40" height="20" rx="4" stroke={MUTE} strokeWidth="1.5" />
    </Frame>
  ),

  // Marketing page: big headline, CTA button, bar chart
  business: (
    <Frame>
      <line x1="56" y1="90" x2="240" y2="90" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <line x1="56" y1="108" x2="180" y2="108" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <line x1="56" y1="130" x2="210" y2="130" stroke={MUTE} strokeWidth="2" />
      <rect x="56" y="148" width="84" height="28" rx="14" fill={ACC} />
      <rect x="270" y="120" width="20" height="56" rx="3" stroke={MUTE} strokeWidth="1.5" />
      <rect x="298" y="96" width="20" height="80" rx="3" stroke={INK} strokeWidth="2" />
      <rect x="326" y="138" width="20" height="38" rx="3" fill={ACC} />
    </Frame>
  ),

  // Admin: sidebar, stat cards, line chart
  admin: (
    <Frame>
      <rect x="56" y="80" width="48" height="116" rx="6" stroke={MUTE} strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1="66" y1={98 + i * 18} x2="94" y2={98 + i * 18} stroke={MUTE} strokeWidth="2" strokeLinecap="round" />
      ))}
      <rect x="118" y="80" width="68" height="44" rx="6" stroke={INK} strokeWidth="2" />
      <rect x="196" y="80" width="68" height="44" rx="6" stroke={INK} strokeWidth="2" />
      <rect x="274" y="80" width="68" height="44" rx="6" stroke={ACC} strokeWidth="2" />
      <rect x="118" y="134" width="224" height="62" rx="6" stroke={INK} strokeWidth="2" />
      <polyline
        points="132,180 168,164 196,170 230,148 262,156 300,132 330,140"
        fill="none"
        stroke={ACC}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  ),
};

export function ProjectArtwork({ kind, className = "" }: ProjectArtworkProps) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-card border border-border ${className}`}>
      {/* faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(var(--rule) 1px, transparent 1.2px)",
          backgroundSize: "16px 16px",
        }}
      />
      <svg
        viewBox="0 0 400 250"
        fill="none"
        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
      >
        {art[kind] ?? art.business}
      </svg>
    </div>
  );
}
