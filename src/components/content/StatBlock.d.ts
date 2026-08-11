export interface StatBlockProps {
  /** Numbers count up on scroll; strings render as-is. */
  value: number | string;
  prefix?: string;
  /** Rendered in orange — e.g. "+", "%", "h". */
  suffix?: string;
  label: string;
  tone?: "light" | "dark";
  animate?: boolean;
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
