export interface DeliverableTileProps {
  icon?: string;
  title: string;
  /** Output formats, rendered in mono and dot-separated. */
  formats?: string[];
  tone?: "light" | "dark";
  style?: React.CSSProperties;
}
export declare function DeliverableTile(props: DeliverableTileProps): JSX.Element;
