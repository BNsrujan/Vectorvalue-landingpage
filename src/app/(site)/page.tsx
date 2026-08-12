import type { Metadata } from "next";
import { HomeView } from "./HomeView";

export const metadata: Metadata = {
  title: "VectorValue | Engineering Estimation, Design & Documentation",
  description: "VectorValue provides engineering estimation, design, technical analysis and documentation support for international project teams — helping teams make informed decisions before construction begins.",
};

export default function Page() {
  return <HomeView />;
}
