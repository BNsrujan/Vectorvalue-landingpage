import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { expertise } from "@/lib/siteData";
import { ExpertiseDisciplineView } from "./ExpertiseDisciplineView";

export async function generateStaticParams() {
  return expertise.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = expertise.find((entry) => entry.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} | VectorValue`,
    description: item.summary,
  };
}

export default async function ExpertiseDisciplinePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = expertise.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return <ExpertiseDisciplineView item={item} />;
}
