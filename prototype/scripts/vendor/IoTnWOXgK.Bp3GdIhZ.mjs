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
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 14.619 3 C 13.584 3 12.744 3.839 12.744 4.875 L 12.744 1.875 C 12.744 0.839 11.905 0 10.869 0 C 9.834 0 8.994 0.839 8.994 1.875 L 8.994 3.375 C 8.994 2.339 8.155 1.5 7.119 1.5 C 6.084 1.5 5.244 2.339 5.244 3.375 L 5.244 12 L 3.493 9.188 C 2.972 8.298 1.83 7.997 0.938 8.512 C 0.045 9.027 -0.264 10.167 0.245 11.063 C 3.299 17.505 4.852 19.5 8.994 19.5 C 13.136 19.5 16.494 16.142 16.494 12 L 16.494 4.875 C 16.494 3.839 15.655 3 14.619 3 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="19.5px" id="yMMzCcJgm" transform="translate(3.006 2.25)" width="16.494093855186858px"/><path d="M 12.744 3.375 C 12.744 2.339 13.584 1.5 14.619 1.5 C 15.655 1.5 16.494 2.339 16.494 3.375 L 16.494 10.5 C 16.494 14.642 13.136 18 8.994 18 C 4.852 18 3.299 16.005 0.245 9.563 C -0.264 8.667 0.045 7.527 0.938 7.012 C 1.83 6.497 2.972 6.798 3.493 7.688 L 5.244 10.5 L 5.244 1.875 C 5.244 0.839 6.084 0 7.119 0 C 8.155 0 8.994 0.839 8.994 1.875" fill="transparent" height="18px" id="F93CTlaDZ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.006 3.75)" width="16.494093855186858px"/><path d="M 0 9 L 0 1.875 C 0 0.839 0.839 0 1.875 0 C 2.911 0 3.75 0.839 3.75 1.875 L 3.75 9" fill="transparent" height="9px" id="YllazAkgP" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 2.25)" width="3.75px"/></svg>`),
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
            p = d(`3004488711`, g);
          return /*#__PURE__*/ n(h, {
            ...f,
            className: o(`framer-pCRE2`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ n(`use`, { href: p }),
          });
        }),
        [
          `.framer-pCRE2 { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-pCRE2`
      )),
      (v.displayName = `Hand`),
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
              framerIntrinsicHeight: `24`,
              framerVector: `{"name":"Hand","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerImmutableVariables: `true`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerDisableUnlink: `true`,
              framerContractVersion: `1`,
              framerIntrinsicWidth: `24`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
b();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=IoTnWOXgK.Bp3GdIhZ.mjs.map
