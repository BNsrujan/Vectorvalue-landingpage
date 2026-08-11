export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Accessible label — required, the control has no visible text. */
  label: string;
  tone?: "default" | "accent" | "inverse";
  /** Square edge length in px. Default 44 (minimum touch target). */
  size?: number;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
