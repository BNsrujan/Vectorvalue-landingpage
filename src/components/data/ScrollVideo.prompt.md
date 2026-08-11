Hero video scrubbed by scroll instead of autoplaying. The frame pins while the clip advances.

<ScrollVideo src="assets/video/hero-aerial-drone.mp4" track={280}>
  {(p) => <HeroCopy progress={p} />}
</ScrollVideo>

Falls back to a muted looping autoplay on touch devices and under prefers-reduced-motion. Serve an H.264 MP4 with a moov-atom at the front so seeking is instant.
