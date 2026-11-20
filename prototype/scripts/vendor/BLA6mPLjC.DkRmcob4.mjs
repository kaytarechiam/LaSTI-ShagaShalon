import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { T as t, o as n, p as r, s as i } from "./react.BF5K0J5z.mjs";
import { w as a } from "./motion.CyGOoZcc.mjs";
import { A as o, Ct as s, K as c, O as l, o as u, xt as d } from "./framer.BMzpwY9X.mjs";
var f, p, m, h, g, _, v, y;
function b() {
  return (b = e(() => {
    (i(),
      c(),
      t(),
      (f = `var(--framer-icon-mask)`),
      (p = /*#__PURE__*/ r(function (e, t) {
        return /*#__PURE__*/ n(`svg`, { ...e, ref: t, children: e.children });
      })),
      (m = a.create(p)),
      (h = /*#__PURE__*/ r((e, t) => {
        let { animated: r, layoutId: i, children: a, ...o } = e;
        return r
          ? /*#__PURE__*/ n(m, { ...o, layoutId: i, ref: t, children: a })
          : /*#__PURE__*/ n(`svg`, { ...o, ref: t, children: a });
      })),
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 4.5 C 0 2.015 2.015 0 4.5 0 C 6.985 0 9 2.015 9 4.5 C 9 6.985 6.985 9 4.5 9 C 2.015 9 0 6.985 0 4.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="9px" id="H1R4C0x9Q" transform="translate(7.5 7.5)" width="9px"/><path d="M 0 9 L 9 0" fill="transparent" height="9px" id="bUAtlYSSu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3)" width="9px"/><path d="M 15.338 2.625 C 12.033 -0.672 6.754 -0.89 3.188 2.123 C -0.378 5.135 -1.044 10.377 1.655 14.186 C 4.354 17.995 9.519 19.104 13.544 16.738 C 17.569 14.372 19.112 9.32 17.097 5.109" fill="transparent" height="17.97837613750978px" id="j5LOquzhO" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.026 3.011)" width="17.979200387801164px"/><path d="M 7.68 1.316 C 6.144 -0.218 3.732 -0.437 1.945 0.796 C 0.158 2.029 -0.494 4.362 0.395 6.342 C 1.284 8.323 3.46 9.387 5.569 8.871 C 7.678 8.356 9.118 6.409 8.993 4.241" fill="transparent" height="9.000613277709206px" id="KXYJT1ORo" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.501 7.502)" width="9.000523854961273px"/></svg>`),
      (_ = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (v = s(
        /* @__PURE__ */ r(function (e, t) {
          let {
              style: r,
              className: i,
              layoutId: a,
              variant: s,
              ezTt3ayMo: c,
              lschgej4H: l,
              qxTvv_EBh: u,
              ...f
            } = _(e),
            p = d(`3571911165`, g);
          return /*#__PURE__*/ n(h, {
            ...f,
            className: o(`framer-adTrB`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ n(`use`, { href: p }),
          });
        }),
        [
          `.framer-adTrB { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-adTrB`
      )),
      (v.displayName = `Target`),
      l(v, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: u.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: u.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: u.Number,
        },
      }),
      (y = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Icon`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicWidth: `24`,
              framerIntrinsicHeight: `24`,
              framerDisableUnlink: `true`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerImmutableVariables: `true`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerVector: `{"name":"Target","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
b();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=BLA6mPLjC.DkRmcob4.mjs.map
