export interface EyebrowProps {
  children: React.ReactNode;
  /** Optional section index, e.g. "03" — rendered before the rule in tabular numerals. */
  index?: string;
  tone?: "accent" | "muted" | "inverse";
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
