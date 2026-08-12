import type { Metadata } from "next";
import { ResourcesView } from "./ResourcesView";

export const metadata: Metadata = {
  title: "Resources | VectorValue",
  description: "Short, practical engineering notes on estimation method, foundation selection and documentation — written by the engineers doing the work.",
};

export default function Page() {
  return <ResourcesView />;
}
