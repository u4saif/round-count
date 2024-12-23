import { jsxs as f, jsx as c } from "react/jsx-runtime";
import { useState as d, useRef as T, useEffect as g } from "react";
const k = (t) => {
  const r = Math.floor(t / 1e3) % 60, e = Math.floor(t / 6e4) % 60, s = Math.floor(t / 36e5) % 24;
  return { d: Math.floor(t / 864e5), h: s, m: e, s: r };
}, o = (t) => (t < 10 ? "0" : "") + t, $ = ({ d: t, h: r, m: e, s }) => t > 0 ? `${o(t)}D ${o(r)}H` : r > 0 ? `${o(r)}H ${o(e)}M` : `${o(e)}M ${o(s)}S`, I = ({ time: t, width: r }) => {
  const e = t || 10, s = r || 200, [n, a] = d(e * 1e3), [l, h] = d(!0), i = T(null);
  g(() => {
    if (!l) return;
    const p = Date.now() + n, v = () => {
      const M = Date.now(), u = p - M;
      if (u <= 0) {
        a(0), h(!1), i.current !== null && clearInterval(i.current);
        return;
      }
      a(u);
    };
    return i.current = setInterval(v, 16), () => {
      i.current !== null && clearInterval(i.current);
    };
  }, [l, n]);
  const m = (e * 1e3 - n) / (e * 1e3) * 301.44;
  return /* @__PURE__ */ f("div", { className: "c-container", children: [
    /* @__PURE__ */ c("div", { className: "c-text", children: n > 0 ? $(k(n)) : "Time's up!!!" }),
    /* @__PURE__ */ f("svg", { id: "yeah", viewBox: "0 0 100 100", width: s, children: [
      /* @__PURE__ */ c(
        "path",
        {
          id: "bg",
          strokeLinecap: "round",
          strokeWidth: "4",
          stroke: "#fff",
          fill: "none",
          d: "M50 2 a 48 48 0 0 1 0 96 a 48 48 0 0 1 0 -96"
        }
      ),
      /* @__PURE__ */ c(
        "path",
        {
          id: "progress",
          strokeLinecap: "round",
          strokeWidth: "4",
          stroke: "#0b57d0",
          fill: "none",
          d: "M50 2 a 48 48 0 0 1 0 96 a 48 48 0 0 1 0 -96",
          strokeDasharray: `${m}, 301.44`
        }
      )
    ] })
  ] });
};
export {
  I as Count
};
