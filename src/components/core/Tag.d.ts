export interface TagProps {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "dark" | "outline" | "inverse";
  /** Monospace + uppercase treatment — use for technical metadata (formats, disciplines). */
  mono?: boolean;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
