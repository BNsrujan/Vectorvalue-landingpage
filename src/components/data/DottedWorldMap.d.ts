export interface GlobalMarker {
  lat: number;
  lng: number;
  /** Dot scale multiplier. Default 1. */
  size?: number;
  /** Set false to disable the pulse on this marker. */
  pulse?: boolean;
  /** Short uppercase label rendered beside the dot. */
  label?: string;
}
/**
 * Dotted world map for the global-reach section.
 * @startingPoint section="Data" subtitle="Dotted world map, scroll video, scroll text reveal" viewport="1200x420"
 */
export interface DottedWorldMapProps {
  /** Approved target markets only — markers are configuration, never a claim of offices or projects. */
  markers?: GlobalMarker[];
  /** Pairs of marker indices to link with a dashed arc. */
  connections?: [number, number][];
  tone?: "dark" | "light";
  /** Dot grid pitch in viewBox units. Lower = denser. Default 5.6. */
  step?: number;
  dotRadius?: number;
  pulse?: boolean;
  height?: number | string;
  style?: React.CSSProperties;
}
export declare function DottedWorldMap(props: DottedWorldMapProps): JSX.Element;
