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
      (v = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 9 L 0.3 4.725 C 0.111 4.583 0 4.361 0 4.125 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 11.25 0 C 11.664 0 12 0.336 12 0.75 L 12 4.091 C 11.999 4.326 11.889 4.546 11.702 4.688 L 6 9 L 6 9" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="9px" id="zoy4cByn5" transform="translate(6 3)" width="12px"/><path d="M 6 0 L 0.3 4.275 C 0.111 4.417 0 4.639 0 4.875 L 0 8.25 C 0 8.664 0.336 9 0.75 9 L 11.25 9 C 11.664 9 12 8.664 12 8.25 L 12 4.909 C 12 4.674 11.889 4.452 11.702 4.311 L 6 0 L 6 0" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="9px" id="Qs4_4UKGs" transform="translate(6 12)" width="12px"/><path d="M 6 9 L 0.3 4.725 C 0.111 4.583 0 4.361 0 4.125 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 11.25 0 C 11.664 0 12 0.336 12 0.75 L 12 4.091 C 11.999 4.326 11.889 4.546 11.702 4.688 L 6 9 L 6 9" fill="transparent" height="9px" id="c6pDYL_kj" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 3)" width="12px"/><path d="M 6 0 L 0.3 4.275 C 0.111 4.417 0 4.639 0 4.875 L 0 8.25 C 0 8.664 0.336 9 0.75 9 L 11.25 9 C 11.664 9 12 8.664 12 8.25 L 12 4.909 C 12 4.674 11.889 4.452 11.702 4.311 L 6 0 L 6 0" fill="transparent" height="9px" id="QzfwLCESV" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 12)" width="12px"/></svg>`),
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
            p = f(`2278880980`, v);
          return /*#__PURE__*/ r(_, {
            ...d,
            className: s(`framer-TtwVe`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ r(`use`, { href: p }),
          });
        }),
        [
          `.framer-TtwVe { -webkit-mask: ${m}; aspect-ratio: 1; display: block; mask: ${m}; width: 24px; }`,
        ],
        `framer-TtwVe`
      )),
      (b.displayName = `Hourglass`),
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
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicHeight: `24`,
              framerContractVersion: `1`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerDisableUnlink: `true`,
              framerIntrinsicWidth: `24`,
              framerVector: `{"name":"Hourglass","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { p as n, S as r, b as t };
//# sourceMappingURL=cnD21AQTM.B_VaQiFm.mjs.map
