"use client";

import { useRef } from "react";

type Group = "Brand" | "Colors" | "Type" | "Spacing";

type GuidelineCardData = {
  file: string;
  group: Group;
  name: string;
  subtitle: string;
  width: number;
  height: number;
};

const groupOrder: Group[] = ["Brand", "Colors", "Type", "Spacing"];

const guidelines: GuidelineCardData[] = [
  { file: "brand-logo.card.html", group: "Brand", name: "Logo lockups", subtitle: "Supplied mark, wordmark set in Manrope ExtraBold at -0.03em", width: 700, height: 180 },
  { file: "brand-imagery.card.html", group: "Brand", name: "Imagery treatment", subtitle: "Architecture and infrastructure, desaturated and behind ink — never site-worker stock at full colour", width: 700, height: 200 },
  { file: "brand-patterns.card.html", group: "Brand", name: "Technical motifs", subtitle: "Blueprint grid, hatch and dot patterns — always faint, never foreground", width: 700, height: 180 },
  { file: "motion.card.html", group: "Brand", name: "Motion", subtitle: "Quick in, long tail. Nothing bounces, nothing loops without reason", width: 700, height: 190 },
  { file: "colors-brand.card.html", group: "Colors", name: "Brand core", subtitle: "The five supplied brand values — nothing outside this set is a brand colour", width: 700, height: 170 },
  { file: "colors-balance.card.html", group: "Colors", name: "60 / 30 / 10 balance", subtitle: "How much of each family a page is allowed to use", width: 700, height: 180 },
  { file: "colors-neutral.card.html", group: "Colors", name: "Neutral ramp", subtitle: "Surfaces and hairline rules — the 60% of the palette", width: 700, height: 150 },
  { file: "colors-ink.card.html", group: "Colors", name: "Ink & slate ramp", subtitle: "Structural darks and secondary text — the 30% of the palette", width: 700, height: 150 },
  { file: "colors-accent.card.html", group: "Colors", name: "Orange accent ramp", subtitle: "The 10%: CTA, active state, data emphasis — never a background wash", width: 700, height: 150 },
  { file: "colors-semantic.card.html", group: "Colors", name: "Semantic pairs", subtitle: "Text, surface and border tokens — reach for these, not raw ramp values", width: 700, height: 200 },
  { file: "type-display.card.html", group: "Type", name: "Display", subtitle: "Manrope Bold, -0.035em tracking, 1.02 leading — hero and statement type only", width: 700, height: 220 },
  { file: "type-headings.card.html", group: "Type", name: "Headings", subtitle: "H1 bold, H2–H4 semibold, tracking tightens as size grows", width: 700, height: 230 },
  { file: "type-body.card.html", group: "Type", name: "Body", subtitle: "Regular weight, 1.6–1.72 leading, 62ch measure", width: 700, height: 210 },
  { file: "type-mono.card.html", group: "Type", name: "Labels & mono", subtitle: "IBM Plex Mono, uppercase, 0.14em tracking — eyebrows, annotations, data", width: 700, height: 180 },
  { file: "spacing-scale.card.html", group: "Spacing", name: "Spacing scale", subtitle: "4px base grid — --space-1 through --space-32", width: 700, height: 160 },
  { file: "spacing-layout.card.html", group: "Spacing", name: "Layout rhythm", subtitle: "1320px container, fluid gutters, 12-column grid, fluid section padding", width: 700, height: 190 },
  { file: "surfaces-radii.card.html", group: "Spacing", name: "Radii & borders", subtitle: "Sharp by default — 0 and 2px carry the system; 8px is the maximum", width: 700, height: 170 },
  { file: "surfaces-elevation.card.html", group: "Spacing", name: "Elevation", subtitle: "Shadows are barely there — hairlines do most of the separation work", width: 700, height: 170 },
];

const groupDescriptions: Record<Group, string> = {
  Brand: "Mark, imagery direction and the motion feel that carries across every surface.",
  Colors: "One ramp, used in a fixed 60 / 30 / 10 balance — always reached through semantic tokens.",
  Type: "Manrope for display and body, IBM Plex Mono for labels and data.",
  Spacing: "The 4px rhythm, container widths and how much elevation a surface is allowed.",
};

function GuidelineCard({ file, name, subtitle, height }: GuidelineCardData) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      const body = doc?.body;
      if (body) {
        iframe.style.height = `${Math.max(body.scrollHeight, body.offsetHeight, 120)}px`;
      }
    } catch {
      iframe.style.height = `${height}px`;
    }
  };

  return (
    <article className="overflow-hidden rounded-[18px] border border-[var(--border-default)] bg-[var(--surface-card)] shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover,var(--shadow-card))]">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--border-hairline)] px-6 py-5">
        <div className="min-w-0">
          <h3 className="m-0 [font:var(--type-h4)] text-[var(--text-primary)]">{name}</h3>
          <p className="mt-1.5 max-w-[46ch] text-[0.9rem] leading-snug text-[var(--text-muted)]">{subtitle}</p>
        </div>
        <a
          href={`/guidelines/${file}`}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 whitespace-nowrap text-[0.85rem] font-medium text-[var(--text-link)] no-underline hover:text-[var(--text-link-hover)]"
        >
          Source ↗
        </a>
      </div>
      <iframe
        ref={iframeRef}
        src={`/guidelines/${file}`}
        title={name}
        loading="lazy"
        onLoad={handleLoad}
        style={{ height }}
        className="w-full border-0 bg-white"
      />
    </article>
  );
}

function GroupSection({ group }: { group: Group }) {
  const cards = guidelines.filter((item) => item.group === group);
  return (
    <section id={group.toLowerCase()} className="scroll-mt-24">
      <div className="mb-6 border-b border-[var(--border-hairline)] pb-4">
        <h2 className="m-0 [font:var(--type-h2)] text-[var(--text-primary)]">{group}</h2>
        <p className="mt-2 max-w-[60ch] text-[0.95rem] text-[var(--text-muted)]">{groupDescriptions[group]}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {cards.map((item) => (
          <GuidelineCard key={item.file} {...item} />
        ))}
      </div>
    </section>
  );
}

export default function GuidelinesPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <main
        className="min-h-screen pb-24"
        style={{ background: "var(--surface-page)", fontFamily: "var(--font-core)", color: "var(--text-default)" }}
      >
        <header
          className="border-b border-[var(--border-hairline)] px-6 py-14 [background:var(--ink-950)] [background-image:var(--pattern-blueprint-dark)] [background-size:var(--grid-size-lg,48px)_var(--grid-size-lg,48px)]"
        >
          <div className="mx-auto max-w-[1180px]">
            <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[var(--orange-400,#f07c4a)]">
              Design system
            </span>
            <h1 className="mt-3 [font:var(--type-display-2)] text-white">Guidelines</h1>
            <p className="mt-4 max-w-[640px] text-[1.05rem] leading-relaxed text-white/70">
              The reference for every token and pattern VectorValue is built from — {guidelines.length} components
              across {groupOrder.length} categories. Each card renders its own source file unchanged; use{" "}
              <span className="whitespace-nowrap">&ldquo;Source ↗&rdquo;</span> to open it directly.
            </p>
            <nav aria-label="Categories" className="mt-8 flex flex-wrap gap-2">
              {groupOrder.map((group) => (
                <a
                  key={group}
                  href={`#${group.toLowerCase()}`}
                  className="rounded-full border border-white/20 px-4 py-2 text-[0.85rem] font-medium text-white/85 no-underline transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  {group}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="mx-auto mt-14 flex max-w-[1180px] flex-col gap-16 px-6">
          {groupOrder.map((group) => (
            <GroupSection key={group} group={group} />
          ))}
        </div>
      </main>
    </>
  );
}
