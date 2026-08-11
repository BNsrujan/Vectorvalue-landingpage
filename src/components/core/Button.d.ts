/**
 * Primary action control.
 * @startingPoint section="Core" subtitle="Buttons, icon buttons, eyebrows and tags" viewport="700x220"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = orange CTA (one per view). dark = ink. outline = hairline on light. outline-inverse = on dark. ghost/link = low emphasis. */
  variant?: "primary" | "dark" | "outline" | "outline-inverse" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  /** Trailing arrow that slides 4px right on hover — the house microinteraction. */
  withArrow?: boolean;
  /** Lucide icon name rendered before the label. */
  iconLeft?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
