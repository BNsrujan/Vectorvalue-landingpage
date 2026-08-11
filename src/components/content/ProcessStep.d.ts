export interface ProcessStepProps {
  /** Two-digit index, e.g. "03". */
  index: string;
  title: string;
  body: string;
  tone?: "light" | "dark";
  /** Shortens the top rule on the final step. */
  last?: boolean;
  style?: React.CSSProperties;
}
export declare function ProcessStep(props: ProcessStepProps): JSX.Element;
