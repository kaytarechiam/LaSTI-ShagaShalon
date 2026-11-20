import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  o,
  p as s,
  s as c,
  w as l,
} from "./react.BF5K0J5z.mjs";
import { i as u, o as d, t as f, w as p } from "./motion.CyGOoZcc.mjs";
import {
  A as m,
  Ct as h,
  D as g,
  K as _,
  O as v,
  St as y,
  gt as b,
  lt as x,
  o as S,
} from "./framer.BMzpwY9X.mjs";
function C(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var w, T, E, D, O, k, A, j, M, N;
function P() {
  return (P = e(() => {
    (c(),
      _(),
      f(),
      r(),
      (w = [`ntbM0__qf`, `T2hSvzpDr`, `A3gIYChmw`, `eJ19ow8ns`, `piZN5QOdA`, `AQsdk8i4i`]),
      (T = `framer-RFvTF`),
      (E = {
        A3gIYChmw: `framer-v-dx5x0a`,
        AQsdk8i4i: `framer-v-17tfuij`,
        eJ19ow8ns: `framer-v-cmv6yt`,
        ntbM0__qf: `framer-v-11ixnnb`,
        piZN5QOdA: `framer-v-1l7ju9k`,
        T2hSvzpDr: `framer-v-1cswzs6`,
      }),
      (D = { delay: 0, duration: 0.45, ease: [0.2, 0.7, 0.2, 1], type: `tween` }),
      (O = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          s = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ o(d.Provider, { value: s, children: t });
      }),
      (k = {
        Body: `piZN5QOdA`,
        Default: `ntbM0__qf`,
        Injectables: `T2hSvzpDr`,
        Laser: `eJ19ow8ns`,
        Sixth: `AQsdk8i4i`,
        Skin: `A3gIYChmw`,
      }),
      (A = p.create(t)),
      (j = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: k[r.variant] ?? r.variant ?? `ntbM0__qf`,
      })),
      (M = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (N = h(
        /* @__PURE__ */ s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = l(),
            { activeLocale: s, contentLocale: c, setLocale: d } = b();
          x();
          let { style: f, className: h, layoutId: g, variant: _, ...v } = j(e),
            {
              baseVariant: S,
              classNames: k,
              clearLoadingGesture: N,
              gestureHandlers: P,
              gestureVariant: F,
              isLoading: I,
              setGestureState: L,
              setVariant: R,
              variants: z,
            } = y({
              cycleOrder: w,
              defaultVariant: `ntbM0__qf`,
              ref: r,
              variant: _,
              variantClassNames: E,
            }),
            B = M(e, z),
            V = m(T);
          return /*#__PURE__*/ o(u, {
            id: g ?? a,
            children: /*#__PURE__*/ o(A, {
              animate: z,
              initial: !1,
              children: /*#__PURE__*/ o(O, {
                value: D,
                children: /*#__PURE__*/ o(p.div, {
                  ...v,
                  ...P,
                  className: m(V, `framer-11ixnnb`, h, k),
                  "data-framer-name": `Default`,
                  layoutDependency: B,
                  layoutId: `ntbM0__qf`,
                  ref: r,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...f },
                  ...C(
                    {
                      A3gIYChmw: { "data-framer-name": `Skin` },
                      AQsdk8i4i: { "data-framer-name": `Sixth` },
                      eJ19ow8ns: { "data-framer-name": `Laser` },
                      piZN5QOdA: { "data-framer-name": `Body` },
                      T2hSvzpDr: { "data-framer-name": `Injectables` },
                    },
                    S,
                    F
                  ),
                  children: /*#__PURE__*/ o(O, {
                    value: D,
                    children: /*#__PURE__*/ o(p.div, {
                      className: `framer-1hcarqr`,
                      "data-framer-name": `Pill`,
                      layoutDependency: B,
                      layoutId: `fNg20uO8t`,
                      style: {
                        backgroundColor: `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                        borderBottomLeftRadius: 999,
                        borderBottomRightRadius: 999,
                        borderTopLeftRadius: 999,
                        borderTopRightRadius: 999,
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-RFvTF.framer-llh6au, .framer-RFvTF .framer-llh6au { display: block; }`,
          `.framer-RFvTF.framer-11ixnnb { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: flex-start; padding: 0px; position: relative; width: 820px; }`,
          `.framer-RFvTF .framer-1hcarqr { flex: none; height: 44px; left: 0px; position: absolute; top: 0px; width: 164px; }`,
          `.framer-RFvTF.framer-v-1cswzs6 .framer-1hcarqr { left: 164px; }`,
          `.framer-RFvTF.framer-v-dx5x0a .framer-1hcarqr { left: 328px; }`,
          `.framer-RFvTF.framer-v-cmv6yt .framer-1hcarqr { left: 492px; }`,
          `.framer-RFvTF.framer-v-1l7ju9k .framer-1hcarqr { left: 656px; }`,
          `.framer-RFvTF.framer-v-17tfuij .framer-1hcarqr { left: 820px; }`,
        ],
        `framer-RFvTF`
      )),
      (N.displayName = `Filter Tab Pill`),
      (N.defaultProps = { height: 44, width: 820 }),
      v(N, {
        variant: {
          options: [`ntbM0__qf`, `T2hSvzpDr`, `A3gIYChmw`, `eJ19ow8ns`, `piZN5QOdA`, `AQsdk8i4i`],
          optionTitles: [`Default`, `Injectables`, `Skin`, `Laser`, `Body`, `Sixth`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      g(N, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
export { P as n, N as t };
//# sourceMappingURL=mI8pdTx4v.CrET3OES.mjs.map
