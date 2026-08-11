import React from "react";

/* Coarse land outlines (lng,lat) — enough resolution for a dotted engineering map, not a survey. */
const LAND = [
  [[-168,65],[-164,60],[-155,58],[-148,60],[-140,60],[-130,55],[-124,49],[-124,40],[-117,32],[-110,23],[-105,20],[-97,16],[-92,15],[-88,21],[-90,29],[-84,30],[-81,25],[-80,32],[-76,37],[-70,42],[-66,45],[-60,47],[-55,52],[-64,60],[-78,62],[-95,60],[-95,68],[-85,70],[-70,73],[-85,78],[-105,78],[-125,72],[-141,70],[-168,65]],
  [[-81,8],[-77,8],[-72,12],[-62,11],[-52,5],[-50,0],[-44,-2],[-35,-5],[-38,-13],[-48,-25],[-53,-34],[-58,-38],[-62,-41],[-65,-45],[-68,-52],[-75,-52],[-73,-45],[-73,-37],[-71,-30],[-70,-20],[-76,-14],[-81,-6],[-81,8]],
  [[-17,15],[-16,21],[-10,27],[-5,35],[10,37],[20,32],[30,31],[34,28],[43,12],[51,12],[42,-1],[40,-10],[35,-20],[32,-26],[27,-33],[18,-34],[12,-17],[9,-1],[9,4],[3,6],[-8,4],[-14,10],[-17,15]],
  [[-9,43],[-9,37],[-2,36],[3,42],[8,44],[12,45],[16,42],[19,40],[24,40],[27,41],[29,41],[35,36],[36,36],[35,33],[34,31],[43,29],[48,29],[57,25],[61,25],[68,24],[72,20],[73,15],[77,8],[80,13],[87,21],[92,21],[95,16],[98,8],[103,1],[105,10],[109,11],[108,18],[110,21],[117,23],[122,30],[122,37],[126,40],[130,43],[135,48],[141,53],[143,59],[152,59],[160,61],[170,66],[180,66],[180,71],[160,71],[140,73],[120,74],[100,76],[80,73],[70,73],[60,70],[50,69],[40,68],[32,70],[28,71],[24,66],[21,63],[12,60],[5,58],[8,54],[4,52],[-1,49],[-4,48],[-9,43]],
  [[-5,50],[-6,55],[-3,58],[0,54],[1,51],[-5,50]],
  [[-10,52],[-10,55],[-6,55],[-6,52],[-10,52]],
  [[-45,60],[-30,68],[-22,70],[-20,76],[-30,83],[-50,82],[-60,76],[-55,68],[-45,60]],
  [[-24,65],[-14,66],[-14,64],[-22,63],[-24,65]],
  [[130,31],[134,34],[139,35],[141,39],[145,43],[142,45],[139,38],[135,33],[130,31]],
  [[95,5],[100,0],[106,-6],[102,-6],[97,2],[95,5]],
  [[109,2],[117,4],[119,-1],[114,-4],[109,-2],[109,2]],
  [[105,-6],[114,-7],[114,-8],[105,-8],[105,-6]],
  [[131,-1],[141,-3],[150,-9],[141,-9],[133,-4],[131,-1]],
  [[120,6],[126,7],[126,18],[121,18],[120,12],[120,6]],
  [[114,-22],[113,-26],[115,-34],[118,-35],[129,-32],[137,-35],[141,-38],[147,-38],[150,-37],[153,-28],[145,-15],[142,-11],[136,-12],[130,-11],[125,-14],[121,-20],[114,-22]],
  [[145,-41],[148,-41],[147,-43],[145,-43],[145,-41]],
  [[172,-41],[174,-37],[178,-38],[175,-41],[170,-45],[167,-46],[172,-43],[172,-41]],
  [[43,-12],[50,-15],[47,-25],[45,-22],[43,-16],[43,-12]],
  [[80,6],[82,7],[81,9],[80,9],[80,6]],
];

const LAT_MAX = 80, LAT_MIN = -56, VB_W = 1000, VB_H = 380;
const project = (lng, lat) => [((lng + 180) / 360) * VB_W, ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * VB_H];

function inside(lng, lat, poly) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
    if ((yi > lat) !== (yj > lat) && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

/* Dotted world map rendered as an engineering data visualisation.
   Markers are configuration, not claims — pass only approved target markets. */
export function DottedWorldMap({
  markers = [], connections = [], tone = "dark", step = 5.6, dotRadius = 1.25,
  pulse = true, height = 520, style, ...rest
}) {
  const dots = React.useMemo(() => {
    const out = [];
    for (let y = step / 2; y < VB_H; y += step) {
      for (let x = step / 2; x < VB_W; x += step) {
        const lng = (x / VB_W) * 360 - 180;
        const lat = LAT_MAX - (y / VB_H) * (LAT_MAX - LAT_MIN);
        for (let p = 0; p < LAND.length; p++) {
          if (inside(lng, lat, LAND[p])) { out.push([x, y]); break; }
        }
      }
    }
    return out;
  }, [step]);

  const inverse = tone === "dark";
  const dotFill = inverse ? "rgba(255,255,255,0.16)" : "rgba(79,94,117,0.26)";
  const pts = markers.map((m) => project(m.lng, m.lat));
  const uid = React.useId ? React.useId().replace(/:/g, "") : "vvmap";

  return (
    <div style={{ position: "relative", width: "100%", height, ...style }} {...rest}>
      <style dangerouslySetInnerHTML={{ __html:
        "@keyframes vvpulse-" + uid + "{0%{r:3;opacity:.55}70%{r:14;opacity:0}100%{r:14;opacity:0}}" +
        "@keyframes vvdash-" + uid + "{to{stroke-dashoffset:-24}}" +
        "@media (prefers-reduced-motion:reduce){." + uid + "-p{animation:none!important;opacity:0!important}." + uid + "-l{animation:none!important}}"
      }} />
      <svg viewBox={"0 0 " + VB_W + " " + VB_H} preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", overflow: "visible" }} role="img" aria-label="World map showing VectorValue target engineering markets">
        <g>{dots.map((d, i) => <circle key={i} cx={d[0]} cy={d[1]} r={dotRadius} fill={dotFill} />)}</g>
        {connections.map(([a, b], i) => {
          const p1 = pts[a], p2 = pts[b];
          if (!p1 || !p2) return null;
          const mx = (p1[0] + p2[0]) / 2, my = (p1[1] + p2[1]) / 2 - Math.abs(p2[0] - p1[0]) * 0.18 - 12;
          return (
            <path key={"c" + i} className={uid + "-l"} d={"M" + p1[0] + "," + p1[1] + " Q" + mx + "," + my + " " + p2[0] + "," + p2[1]}
              fill="none" stroke="var(--orange-600)" strokeWidth="0.7" strokeOpacity="0.45" strokeDasharray="4 4"
              style={{ animation: "vvdash-" + uid + " 1.6s linear infinite" }} />
          );
        })}
        {markers.map((m, i) => {
          const [x, y] = pts[i];
          const r = 2.4 * (m.size || 1);
          return (
            <g key={"m" + i}>
              {pulse && m.pulse !== false ? (
                <circle className={uid + "-p"} cx={x} cy={y} r={3} fill="var(--orange-600)" opacity="0.5"
                  style={{ animation: "vvpulse-" + uid + " 2.6s " + (i * 0.35) + "s cubic-bezier(.16,1,.3,1) infinite" }} />
              ) : null}
              <circle cx={x} cy={y} r={r} fill="var(--orange-600)" />
              {m.label ? (
                <text x={x + r + 5} y={y + 3} fill={inverse ? "rgba(255,255,255,.72)" : "var(--slate-600)"}
                  style={{ font: "600 7px var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.label}</text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
