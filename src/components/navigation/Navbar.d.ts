export interface NavItem { label: string; href: string; /** Opens the expertise mega menu on hover. */ mega?: boolean }
export interface MegaGroupItem { label: string; href?: string }
export interface MegaGroup { title: string; href: string; icon?: string; items: MegaGroupItem[] }
/**
 * Sticky primary navigation with mega menu and mobile drawer.
 * @startingPoint section="Navigation" subtitle="Sticky navbar, expertise mega menu, breadcrumbs" viewport="1200x360"
 */
export interface NavbarProps {
  logoSrc?: string;
  brand?: string;
  items?: NavItem[];
  /** Current route — drives the orange active underline. */
  activeHref?: string;
  cta?: { label: string; href: string };
  /** "overlay" starts transparent over a hero and turns solid past 24px of scroll. */
  variant?: "overlay" | "solid";
  megaGroups?: MegaGroup[];
  style?: React.CSSProperties;
}
export declare function Navbar(props: NavbarProps): JSX.Element;
