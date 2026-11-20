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
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7.242 10.758 C 5.585 12.414 2.899 12.414 1.242 10.758 L 1.242 10.758 C -0.414 9.101 -0.414 6.415 1.242 4.758 L 6 0 L 12 6 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12.000252617239894px" id="JWv7ZzlnE" transform="translate(3 9)" width="12.000252617239905px"/><path d="M 7.243 16.758 C 5.586 18.415 2.9 18.415 1.243 16.758 L 1.243 16.757 C -0.414 15.101 -0.414 12.415 1.243 10.758 L 10.758 1.243 C 12.415 -0.414 15.101 -0.414 16.757 1.243 L 16.758 1.243 C 18.415 2.9 18.415 5.586 16.758 7.243 Z" fill="transparent" height="18.000485478687082px" id="rPhL74Vh8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3)" width="18.000485478687082px"/><path d="M 0 0 L 6 6" fill="transparent" height="6px" id="nszgH2YO1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 9)" width="6px"/><path d="M 0 2.25 L 2.25 0" fill="transparent" height="2.25px" id="jsikvuFmp" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15 8.25)" width="2.25px"/></svg>`),
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
            p = d(`3725409940`, g);
          return /*#__PURE__*/ n(h, {
            ...f,
            className: o(`framer-vv1OS`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ n(`use`, { href: p }),
          });
        }),
        [
          `.framer-vv1OS { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-vv1OS`
      )),
      (v.displayName = `Pill`),
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
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerVector: `{"name":"Pill","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerDisableUnlink: `true`,
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `24`,
              framerIntrinsicHeight: `24`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
b();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=FjXnPUkmp.DVVKkwA1.mjs.map
