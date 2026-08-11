export interface MegaMenuProps {
  groups?: import("./Navbar").MegaGroup[];
  /** Copy for the dark conversion rail. */
  note?: string;
  ctaLabel?: string;
  ctaHref?: string;
  style?: React.CSSProperties;
}
export declare function MegaMenu(props: MegaMenuProps): JSX.Element;
