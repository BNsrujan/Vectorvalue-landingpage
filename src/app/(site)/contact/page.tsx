import type { Metadata } from "next";
import { ContactView } from "./ContactView";

export const metadata: Metadata = {
  title: "Contact | VectorValue",
  description: "Send a project enquiry to VectorValue for estimation, quantity take-offs, structural and ground engineering design, or technical documentation support.",
};

export default function Page() {
  return <ContactView />;
}
