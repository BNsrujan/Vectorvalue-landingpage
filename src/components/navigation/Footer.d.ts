export interface FooterColumn { title: string; links: { label: string; href: string }[] }
export interface FooterProps {
  logoSrc?: string;
  brand?: string;
  blurb?: string;
  columns?: FooterColumn[];
  /** Placeholders until real details are supplied. */
  contact?: { email?: string; phone?: string; linkedin?: string; linkedinUrl?: string };
  legal?: { label: string; href: string }[];
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element;
