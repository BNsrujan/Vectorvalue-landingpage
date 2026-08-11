export interface ScrollRevealProps {
  children: React.ReactNode;
  /** Delay in ms, or use index * 70 for staggered grids. */
  delay?: number;
  /** Travel direction of the reveal. */
  from?: "up" | "left" | "right" | "none";
  /** Wrapper element. Default "div". */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function ScrollReveal(props: ScrollRevealProps): JSX.Element;
