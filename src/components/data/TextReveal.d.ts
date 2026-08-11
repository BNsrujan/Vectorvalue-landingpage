export interface TextRevealProps {
  /** A single statement — one or two sentences maximum. Plain text; nested elements are flattened to their text content. */
  children: React.ReactNode;
  /** Scroll track length in vh. Default 220. */
  track?: number;
  tone?: "light" | "dark";
  /** Words rendered in orange, matched case-insensitively. */
  accentWords?: string[];
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export declare function TextReveal(props: TextRevealProps): JSX.Element;
