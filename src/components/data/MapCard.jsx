import React from "react";
import { DottedWorldMap } from "./DottedWorldMap.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";

const markers = [
  { lat: 51.51, lng: -0.13, label: "UK" },
  { lat: 40.71, lng: -74.01, label: "US" },
  { lat: 25.2, lng: 55.27, label: "UAE" },
  { lat: 1.35, lng: 103.82, label: "SG" },
  { lat: -33.87, lng: 151.21, label: "AU" },
  { lat: 52.37, lng: 4.9, label: "NL" },
  { lat: 24.71, lng: 46.68, label: "KSA" },
  { lat: 43.65, lng: -79.38, label: "CA" },
];

export function MapCard() {
  return (
    <div style={{ padding: "24px 40px" }}>
      <Eyebrow tone="inverse">Global engineering support</Eyebrow>
      <DottedWorldMap markers={markers} connections={[[0, 1], [0, 2], [2, 3], [3, 4], [1, 7], [0, 5]]} tone="dark" height={330} />
    </div>
  );
}
