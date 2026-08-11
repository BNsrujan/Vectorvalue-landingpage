export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "arrow-right", "ruler", "layers"). */
  name: string;
  /** Pixel box. Default 20. */
  size?: number;
  /** Stroke weight. VectorValue default is 1.5; use 2 for small arrows inside buttons. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
