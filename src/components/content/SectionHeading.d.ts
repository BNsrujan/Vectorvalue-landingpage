/**
 * Section opener — eyebrow, headline, lead and optional trailing action.
 * @startingPoint section="Content" subtitle="Section openers, service cards, stats, process and FAQ" viewport="700x420"
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  /** Two-digit section index shown before the eyebrow rule, e.g. "04". */
  index?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Usually a <Button variant="outline" withArrow>. */
  action?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  maxWidth?: string;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
