import type { Metadata } from "next";
import { CoreExpertiseView } from "./CoreExpertiseView";

export const metadata: Metadata = {
  title: "Core Expertise | VectorValue",
  description: "Estimation, design, analysis and documentation produced before construction begins — engineering intelligence behind better project decisions, across Civil, Structural and Ground Engineering.",
};

export default function Page() {
  return <CoreExpertiseView />;
}
