export interface Crumb { label: string; href?: string }
export interface BreadcrumbsProps {
  items?: Crumb[];
  tone?: "light" | "dark";
  onNavigate?: (href: string) => void;
  style?: React.CSSProperties;
}
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
