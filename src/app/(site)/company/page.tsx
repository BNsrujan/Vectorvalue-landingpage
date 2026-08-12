import type { Metadata } from "next";
import { CompanyView } from "./CompanyView";

export const metadata: Metadata = {
  title: "About | VectorValue",
  description: "VectorValue exists for the stage where a project is still a set of decisions — quantities, options, calculations and documentation that determine what the build will actually cost.",
};

export default function Page() {
  return <CompanyView />;
}
