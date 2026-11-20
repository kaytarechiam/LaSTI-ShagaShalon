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
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 8.25 C 0 3.694 3.694 0 8.25 0 C 12.806 0 16.5 3.694 16.5 8.25 C 16.5 12.806 12.806 16.5 8.25 16.5 C 3.694 16.5 0 12.806 0 8.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="tSPN959ex" transform="translate(3.75 4.5)" width="16.5px"/><path d="M 0 8.25 C 0 3.694 3.694 0 8.25 0 C 12.806 0 16.5 3.694 16.5 8.25 C 16.5 12.806 12.806 16.5 8.25 16.5 C 3.694 16.5 0 12.806 0 8.25 Z" fill="transparent" height="16.5px" id="aCEiVTfCF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 4.5)" width="16.5px"/><path d="M 0 3.75 L 3.75 0" fill="transparent" height="3.75px" id="Sxl0u5XHV" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 9)" width="3.75px"/><path d="M 0 0 L 4.5 0" fill="transparent" height="1px" id="y01ZIaEDA" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9.75 1.5)" width="4.5px"/></svg>`),
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
            p = d(`450316432`, g);
          return /*#__PURE__*/ n(h, {
            ...f,
            className: o(`framer-nRS3r`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ n(`use`, { href: p }),
          });
        }),
        [
          `.framer-nRS3r { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-nRS3r`
      )),
      (v.displayName = `Timer`),
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
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `24`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerContractVersion: `1`,
              framerVector: `{"name":"Timer","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerDisableUnlink: `true`,
              framerIntrinsicWidth: `24`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
b();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=eSPEYyaDj.DL_W3S6y.mjs.map
