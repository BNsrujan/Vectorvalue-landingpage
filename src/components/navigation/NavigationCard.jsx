import React from "react";
import { Navbar } from "./Navbar.jsx";
import { MegaMenu } from "./MegaMenu.jsx";
import { Breadcrumbs } from "./Breadcrumbs.jsx";

const nav = [
  { label: "Home", href: "/" },
  { label: "Core Expertise", href: "/core-expertise", mega: true },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const groups = [
  {
    title: "Civil Engineering",
    href: "#",
    icon: "ruler",
    items: [
      { label: "Quantity Estimation" },
      { label: "BOQ Preparation" },
      { label: "Earthwork Estimation" },
      { label: "Take-Off Services" },
    ],
  },
  {
    title: "Structural Engineering",
    href: "#",
    icon: "frame",
    items: [
      { label: "Structural Design" },
      { label: "Load Analysis" },
      { label: "Steel Structure Design" },
      { label: "Design Review" },
    ],
  },
  {
    title: "Foundation Engineering",
    href: "#",
    icon: "layers",
    items: [
      { label: "Pile Foundation Design" },
      { label: "Shallow Foundation Design" },
      { label: "Foundation Analysis" },
      { label: "Foundation Drawings" },
    ],
  },
];

const noop = () => undefined;

export function NavigationCard() {
  return (
    <div style={{ background: "var(--surface-page)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 0" }}>
        <Navbar
          variant="solid"
          activeHref="/core-expertise"
          items={nav}
          megaGroups={groups}
          logoSrc="/assets/logo/vectorvalue-mark.png"
          onNavigate={noop}
        />
        <MegaMenu groups={groups} onNavigate={noop} />
        <div style={{ padding: "20px 64px" }}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "#" },
              { label: "Core Expertise", href: "#" },
              { label: "Foundation Engineering" },
            ]}
            onNavigate={noop}
          />
        </div>
      </div>
    </div>
  );
}
