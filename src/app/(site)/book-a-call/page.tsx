import type { Metadata } from "next";
import { BookACallView } from "./BookACallView";

export const metadata: Metadata = {
  title: "Book a Call | VectorValue",
  description: "Book a technical call with a VectorValue engineer to discuss project scope, method and deliverables before you commit.",
};

export default function Page() {
  return <BookACallView />;
}
