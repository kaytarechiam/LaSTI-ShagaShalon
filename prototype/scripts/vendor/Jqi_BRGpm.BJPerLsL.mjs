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
      (g = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 11.1 0.771 L 19.299 15.008 C 19.874 16.012 19.131 17.25 17.948 17.25 L 1.549 17.25 C 0.366 17.25 -0.376 16.012 0.198 15.008 L 8.398 0.771 C 8.988 -0.257 10.509 -0.257 11.1 0.771 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.25px" id="V04GsKvZp" transform="translate(2.251 3)" width="19.497257932538446px"/><path d="M 11.1 0.771 L 19.299 15.008 C 19.874 16.012 19.131 17.25 17.948 17.25 L 1.549 17.25 C 0.366 17.25 -0.376 16.012 0.198 15.008 L 8.398 0.771 C 8.988 -0.257 10.509 -0.257 11.1 0.771 Z" fill="transparent" height="17.25px" id="QlpK6N333" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 3)" width="19.497257932538446px"/><path d="M 0 3.75 L 0 0" fill="transparent" height="3.75px" id="np_aEMIem" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 9.75)" width="1px"/><path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="var(--21h8s6, rgb(0, 0, 0))" height="2.25px" id="ftQxIoyKo" transform="translate(10.875 15.75)" width="2.25px"/></svg>`),
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
            p = d(`4131563542`, g);
          return /*#__PURE__*/ n(h, {
            ...f,
            className: o(`framer-7MgYe`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...r },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ n(`use`, { href: p }),
          });
        }),
        [
          `.framer-7MgYe { -webkit-mask: ${f}; aspect-ratio: 1; display: block; mask: ${f}; width: 24px; }`,
        ],
        `framer-7MgYe`
      )),
      (v.displayName = `Warning`),
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
              framerDisableUnlink: `true`,
              framerIntrinsicWidth: `24`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `24`,
              framerVector: `{"name":"Warning","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
b();
export { y as __FramerMetadata__, v as default };
//# sourceMappingURL=Jqi_BRGpm.BJPerLsL.mjs.map
