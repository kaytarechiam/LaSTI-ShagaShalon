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
      (v = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16.5 2.25 L 13.5 2.25 L 12 0 L 6 0 L 4.5 2.25 L 1.5 2.25 C 0.672 2.25 0 2.922 0 3.75 L 0 14.25 C 0 15.078 0.672 15.75 1.5 15.75 L 16.5 15.75 C 17.328 15.75 18 15.078 18 14.25 L 18 3.75 C 18 2.922 17.328 2.25 16.5 2.25 Z M 9 12 C 7.136 12 5.625 10.489 5.625 8.625 C 5.625 6.761 7.136 5.25 9 5.25 C 10.864 5.25 12.375 6.761 12.375 8.625 C 12.375 10.489 10.864 12 9 12 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15.75px" id="YFiBnU3Au" transform="translate(3 3.75)" width="18px"/><path d="M 16.5 15.75 L 1.5 15.75 C 0.672 15.75 0 15.078 0 14.25 L 0 3.75 C 0 2.922 0.672 2.25 1.5 2.25 L 4.5 2.25 L 6 0 L 12 0 L 13.5 2.25 L 16.5 2.25 C 17.328 2.25 18 2.922 18 3.75 L 18 14.25 C 18 15.078 17.328 15.75 16.5 15.75 Z" fill="transparent" height="15.75px" id="saK4INAQX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 3.75)" width="18px"/><path d="M 0 3.375 C 0 1.511 1.511 0 3.375 0 C 5.239 0 6.75 1.511 6.75 3.375 C 6.75 5.239 5.239 6.75 3.375 6.75 C 1.511 6.75 0 5.239 0 3.375 Z" fill="transparent" height="6.75px" id="bgdBkcZs5" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.625 9)" width="6.75px"/></svg>`),
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
            p = f(`2533431807`, v);
          return /*#__PURE__*/ r(_, {
            ...d,
            className: s(`framer-8yz70`, i),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": u, "--21h8s6": c, "--pgex8v": l, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ r(`use`, { href: p }),
          });
        }),
        [
          `.framer-8yz70 { -webkit-mask: ${m}; aspect-ratio: 1; display: block; mask: ${m}; width: 24px; }`,
        ],
        `framer-8yz70`
      )),
      (b.displayName = `Camera`),
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
              framerSupportedLayoutWidth: `any-prefer-fixed`,
              framerIntrinsicWidth: `24`,
              framerSupportedLayoutHeight: `any-prefer-fixed`,
              framerIntrinsicHeight: `24`,
              framerVector: `{"name":"Camera","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}`,
              framerDisableUnlink: `true`,
              framerVariables: `{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { S as n, p as r, b as t };
//# sourceMappingURL=tvIvV1TTl.BkzkgS0R.mjs.map
