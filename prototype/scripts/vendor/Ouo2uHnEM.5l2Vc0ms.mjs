import { n as e, t } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { T as n, o as r, p as i, s as a } from "./react.BF5K0J5z.mjs";
import { w as o } from "./motion.CyGOoZcc.mjs";
import { A as s, Ct as c, K as l, O as u, o as d, xt as f } from "./framer.BMzpwY9X.mjs";
var p = /* @__PURE__ */ e({ __FramerMetadata__: () => x, default: () => b }),
  m,
  h,
  g,
  _,
  v,
  y,
  b,
  x;
function S() {
  return (S = t(() => {
    (a(),
      l(),
      n(),
      (m = `var(--framer-icon-mask)`),
      (h = /*#__PURE__*/ i(function (e, t) {
        return /*#__PURE__*/ r(`svg`, { ...e, ref: t, children: e.children });
      })),
      (g = o.create(h)),
      (_ = /*#__PURE__*/ i((e, t) => {
        let { animated: n, layoutId: i, children: a, ...o } = e;
        return n
          ? /*#__PURE__*/ r(g, { ...o, layoutId: i, ref: t, children: a })
          : /*#__PURE__*/ r(`svg`, { ...o, ref: t, children: a });
      })),
      (v = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 9.75 0 C 11.407 0 12.75 1.343 12.75 3 L 12.75 8.25 L 12.75 8.25 L 0 8.25 L 0 8.25 L 0 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.25px" id="SsdJj1I5b" transform="translate(10.5 7.5)" width="12.75px"/><path d="M 0 8.25 L 0 0 L 9.75 0 C 11.407 0 12.75 1.343 12.75 3 L 12.75 8.25" fill="transparent" height="8.25px" id="eXEaFBr4k" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.5 7.5)" width="12.75px"/><path d="M 0 15 L 0 0" fill="transparent" height="15px" id="mnxP2iRJ1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 4.5)" width="1px"/><path d="M 0 0 L 21 0 L 21 3.75" fill="transparent" height="3.75px" id="Th2Z1UOop" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 15.75)" width="21px"/><path d="M 8.25 0 L 0 0" fill="transparent" height="1px" id="EceZp3CX1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 7.5)" width="8.25px"/></svg>`),
      (y = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (b = c(
        /* @__PURE__ */ i(function (e, t) {
          let {
              style: n,
              className: i,
              layoutId: a,
              variant: o,
              ezTt3ayMo: c,
              lschgej4H: l,
              qxTvv_EBh: u,
              ...d
            } = y(e),
            p = f(`390898790`, v);
          return /*#__PURE__*/ r(_, {
            ...d,
            className: s(`framer-QUVI0`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ r(`use`, { href: p }),
          });
        }),
        [
          `.framer-QUVI0 { -webkit-mask: ${m}; aspect-ratio: 1; display: block; mask: ${m}; width: 24px; }`,
        ],
        `framer-QUVI0`
      )),
      (b.displayName = `Bed`),
      u(b, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: d.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: d.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: d.Number,
        },
      }),
      (x = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Icon`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `24`,
              framerDisableUnlink: `true`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerIntrinsicHeight: `24`,
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerVector: `{"name":"Bed","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { p as n, S as r, b as t };
//# sourceMappingURL=Ouo2uHnEM.5l2Vc0ms.mjs.map
