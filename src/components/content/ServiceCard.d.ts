export interface ServiceCardProps {
  /** Lucide icon name. */
  icon?: string;
  title: string;
  description?: string;
  /** Up to four sub-services are rendered; the rest are truncated. */
  services?: string[];
  href?: string;
  /** Small mono label top-right, e.g. "01 / 06". */
  meta?: string;
  style?: React.CSSProperties;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
