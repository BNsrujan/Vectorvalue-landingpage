"use client";

import { useRef } from "react";

const guidelines = [
  { file: "brand-imagery.card.html", title: "Brand imagery" },
  { file: "brand-logo.card.html", title: "Brand logo" },
  { file: "brand-patterns.card.html", title: "Brand patterns" },
  { file: "colors-accent.card.html", title: "Colors accent" },
  { file: "colors-balance.card.html", title: "Colors balance" },
  { file: "colors-brand.card.html", title: "Colors brand" },
  { file: "colors-ink.card.html", title: "Colors ink" },
  { file: "colors-neutral.card.html", title: "Colors neutral" },
  { file: "colors-semantic.card.html", title: "Colors semantic" },
  { file: "motion.card.html", title: "Motion" },
  { file: "spacing-layout.card.html", title: "Spacing layout" },
  { file: "spacing-scale.card.html", title: "Spacing scale" },
  { file: "surfaces-elevation.card.html", title: "Surfaces elevation" },
  { file: "surfaces-radii.card.html", title: "Surfaces radii" },
  { file: "type-body.card.html", title: "Type body" },
  { file: "type-display.card.html", title: "Type display" },
  { file: "type-headings.card.html", title: "Type headings" },
  { file: "type-mono.card.html", title: "Type mono" },
];

function GuidelineCard({ file, title }: { file: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      const body = doc?.body;
      if (body) {
        iframe.style.height = `${Math.max(body.scrollHeight, body.offsetHeight, 360)}px`;
      }
    } catch {
      iframe.style.height = "420px";
    }
  };

  return (
    <article className="overflow-hidden rounded-[18px] border border-[var(--border-default)] bg-[var(--surface-card)] shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-center justify-between gap-[18px] bg-[var(--surface-page)] px-6 py-5">
        <div>
          <h2 className="m-0 text-[1.1rem] font-semibold">{title}</h2>
          <div className="text-[0.95rem] text-[var(--text-muted)]">{file}</div>
        </div>
        <a
          href={`/guidelines/${file}`}
          target="_blank"
          rel="noreferrer"
          className="text-[0.96rem] text-[var(--text-link)] no-underline"
        >
          Open source
        </a>
      </div>
      <iframe
        ref={iframeRef}
        src={`/guidelines/${file}`}
        title={title}
        loading="lazy"
        onLoad={handleLoad}
        className="min-h-[320px] w-full border-0 bg-white"
      />
    </article>
  );
}

export default function GuidelinesPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <main
        className="min-h-screen p-8"
        style={{ background: "var(--surface-page)", fontFamily: "var(--font-core)", color: "var(--text-default)" }}
      >
        <div className="mx-auto mb-8 max-w-[1080px]">
          <h1 className="m-0 text-[clamp(2rem,3vw,3rem)] leading-[1.05]">Guidelines overview</h1>
          <p className="mt-4 max-w-[760px] text-base text-[var(--text-muted)]">
            All guideline cards live together on one page. Each section loads the card preview from its own HTML
            file so the original markup remains unchanged.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1080px] gap-7">
          {guidelines.map((item) => (
            <GuidelineCard key={item.file} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}
