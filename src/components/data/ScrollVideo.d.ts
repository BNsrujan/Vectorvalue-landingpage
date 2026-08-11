export interface ScrollVideoProps {
  src: string;
  poster?: string;
  /** Height of the pinned frame. Default "100vh". */
  height?: string;
  /** Length of the scroll track in vh — how far you scroll to play the whole clip. Default 260. */
  track?: number;
  /** Static node, or a function receiving scroll progress 0–1. */
  children?: React.ReactNode | ((progress: number) => React.ReactNode);
  /** Gradient overlay above the video. */
  scrim?: string;
  /** Lerp factor for currentTime easing. Lower = smoother/heavier. Default 0.12. */
  smoothing?: number;
  style?: React.CSSProperties;
}
export declare function ScrollVideo(props: ScrollVideoProps): JSX.Element;
