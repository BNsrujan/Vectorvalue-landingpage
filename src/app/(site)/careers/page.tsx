import type { Metadata } from "next";
import { CareersView } from "./CareersView";

export const metadata: Metadata = {
  title: "Careers | VectorValue",
  description: "VectorValue stays deliberately small. Current openings, if any, are posted here first.",
};

export default function Page() {
  return <CareersView />;
}
