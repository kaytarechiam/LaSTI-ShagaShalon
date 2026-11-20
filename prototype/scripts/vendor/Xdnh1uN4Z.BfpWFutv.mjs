import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as ee,
  w as l,
} from "./react.BF5K0J5z.mjs";
import { i as te, o as u, t as ne, w as d } from "./motion.CyGOoZcc.mjs";
import {
  A as f,
  B as p,
  Ct as m,
  D as h,
  K as g,
  O as _,
  R as v,
  St as re,
  g as ie,
  gt as ae,
  lt as y,
  o as b,
  p as x,
  w as S,
  z as C,
} from "./framer.BMzpwY9X.mjs";
import {
  I as w,
  J as T,
  L as E,
  X as D,
  Y as O,
  dt as k,
  ft as A,
  lt as j,
  q as oe,
  ut as M,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { i as N, n as se, r as P, t as ce } from "./yxzhfN2Rg.W01ar6hl.mjs";
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z;
function Q() {
  return (Q = e(() => {
    (ee(),
      g(),
      ne(),
      r(),
      E(),
      D(),
      A(),
      N(),
      (I = v(w)),
      (L = { iXDrgXNEm: { hover: !0 }, yxOVIfKJX: { hover: !0 } }),
      (R = [`yxOVIfKJX`, `iXDrgXNEm`]),
      (z = `framer-0U5bO`),
      (B = { iXDrgXNEm: `framer-v-r2j0xr`, yxOVIfKJX: `framer-v-8sqrre` }),
      (V = { delay: 0, duration: 0.6, ease: [0.45, 0, 0.55, 1], type: `tween` }),
      (H = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (U = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (W = ({ value: e, children: t }) => {
        let r = a(u),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(u.Provider, { value: o, children: t });
      }),
      (G = { Default: `yxOVIfKJX`, List: `iXDrgXNEm` }),
      (K = d.create(t)),
      (q = ({
        details: e,
        height: t,
        id: n,
        link: r,
        photo: i,
        price: a,
        session: o,
        tag: s,
        title: c,
        width: ee,
        ...l
      }) => ({
        ...l,
        dFYpqaDHc: r ?? l.dFYpqaDHc,
        IkWY6VVyk: a ?? l.IkWY6VVyk ?? `From $14`,
        JjK4mEaro: e ?? l.JjK4mEaro ?? `Per unit · 30 min`,
        nml1HXJ0z: s ?? l.nml1HXJ0z ?? `With Botox®`,
        NZSA_OF1s: o ?? l.NZSA_OF1s ?? ``,
        oMuCFQFwN: i ??
          l.oMuCFQFwN ?? {
            pixelHeight: 2e3,
            pixelWidth: 2e3,
            src: `../../assets/illustrations/shaga-haircut-men.jpg`,
            srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
          },
        txBUGJ_DJ: c ?? l.txBUGJ_DJ ?? `Neuromodulators`,
        variant: G[l.variant] ?? l.variant ?? `yxOVIfKJX`,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = l(),
          { activeLocale: ee, contentLocale: u, setLocale: ne } = ae(),
          m = y(),
          {
            style: h,
            className: g,
            layoutId: _,
            variant: v,
            oMuCFQFwN: b,
            nml1HXJ0z: C,
            IkWY6VVyk: T,
            JjK4mEaro: E,
            txBUGJ_DJ: D,
            NZSA_OF1s: O,
            dFYpqaDHc: k,
            ...A
          } = q(e),
          {
            baseVariant: M,
            classNames: N,
            clearLoadingGesture: se,
            gestureHandlers: P,
            gestureVariant: I,
            isLoading: G,
            setGestureState: Y,
            setVariant: X,
            variants: Z,
          } = re({
            cycleOrder: R,
            defaultVariant: `yxOVIfKJX`,
            enabledGestures: L,
            ref: a,
            variant: v,
            variantClassNames: B,
          }),
          Q = J(e, Z),
          le = f(z, j, oe, ce),
          ue = U(C),
          de = () => I === `iXDrgXNEm-hover` || M === `iXDrgXNEm`,
          $ = U(O);
        return /*#__PURE__*/ s(te, {
          id: _ ?? c,
          children: /*#__PURE__*/ s(K, {
            animate: Z,
            initial: !1,
            children: /*#__PURE__*/ s(W, {
              value: V,
              children: /*#__PURE__*/ s(ie, {
                href: k,
                motionChild: !0,
                nodeId: `yxOVIfKJX`,
                scopeId: `Xdnh1uN4Z`,
                children: /*#__PURE__*/ s(d.a, {
                  ...A,
                  ...P,
                  className: `${f(le, `framer-8sqrre`, g, N)} framer-3hh8np`,
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  layoutDependency: Q,
                  layoutId: `yxOVIfKJX`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-1317da14-6e0e-422c-99dd-15e78f5337dd)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                    borderBottomLeftRadius: 22,
                    borderBottomRightRadius: 22,
                    borderTopLeftRadius: 22,
                    borderTopRightRadius: 22,
                    ...h,
                  },
                  ...F(
                    {
                      "iXDrgXNEm-hover": { "data-framer-name": void 0 },
                      "yxOVIfKJX-hover": { "data-framer-name": void 0 },
                      iXDrgXNEm: { "data-framer-name": `List` },
                    },
                    M,
                    I
                  ),
                  children: /*#__PURE__*/ o(d.div, {
                    className: `framer-w4fihg`,
                    "data-framer-name": `Photo`,
                    layoutDependency: Q,
                    layoutId: `dEpNeSqHM`,
                    style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    children: [
                      /*#__PURE__*/ s(x, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: p(m?.y || 0),
                          pixelHeight: 2e3,
                          pixelWidth: 2e3,
                          sizes: m?.width || `100vw`,
                          ...H(b),
                        },
                        className: `framer-752jke`,
                        "data-framer-name": `Zoom`,
                        layoutDependency: Q,
                        layoutId: `djH9mJ4Jv`,
                        style: { scale: 1 },
                        variants: {
                          "iXDrgXNEm-hover": { scale: 1.05 },
                          "yxOVIfKJX-hover": { scale: 1.05 },
                        },
                      }),
                      ue !== !1 &&
                        /*#__PURE__*/ s(d.div, {
                          className: `framer-1we850f`,
                          "data-framer-name": `Device chip`,
                          layoutDependency: Q,
                          layoutId: `b39efMW2J`,
                          style: {
                            backgroundColor: `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                            borderBottomLeftRadius: 999,
                            borderBottomRightRadius: 999,
                            borderTopLeftRadius: 999,
                            borderTopRightRadius: 999,
                          },
                          children: /*#__PURE__*/ s(S, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(d.p, {
                                className: `framer-styles-preset-gyt55z`,
                                "data-styles-preset": `u9_0JRzz7`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                                },
                                children: `Tag`,
                              }),
                            }),
                            className: `framer-1rpj7wb`,
                            fonts: [`Inter`],
                            layoutDependency: Q,
                            layoutId: `t6dV1BHRe`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                            },
                            text: C,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      /*#__PURE__*/ o(d.div, {
                        className: `framer-1yo4fxa`,
                        "data-framer-name": `Footer`,
                        layoutDependency: Q,
                        layoutId: `ylJeg22KC`,
                        style: {
                          background: `linear-gradient(0deg, rgba(30, 20, 16, 0.9) 0%, rgba(30, 20, 16, 0.62) 55.00000000000001%, rgba(30, 20, 16, 0) 100%)`,
                        },
                        children: [
                          /*#__PURE__*/ o(d.div, {
                            className: `framer-7273bl`,
                            "data-framer-name": `Price`,
                            layoutDependency: Q,
                            layoutId: `ySixsMFKf`,
                            children: [
                              /*#__PURE__*/ s(S, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(d.h3, {
                                    className: `framer-styles-preset-94eeon`,
                                    "data-styles-preset": `SFS3lU2AV`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                    },
                                    children: `Price`,
                                  }),
                                }),
                                className: `framer-asbygy`,
                                fonts: [`Inter`],
                                layoutDependency: Q,
                                layoutId: `ctJUmuo87`,
                                style: {
                                  "--extracted-a0htzi": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                },
                                text: T,
                                variants: {
                                  iXDrgXNEm: {
                                    "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...F(
                                  {
                                    iXDrgXNEm: {
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(d.p, {
                                          className: `framer-styles-preset-19oisb3`,
                                          "data-styles-preset": `yxzhfN2Rg`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                          },
                                          children: `From $14`,
                                        }),
                                      }),
                                    },
                                  },
                                  M,
                                  I
                                ),
                              }),
                              /*#__PURE__*/ o(d.div, {
                                className: `framer-zdpa0n`,
                                "data-framer-name": `Info`,
                                layoutDependency: Q,
                                layoutId: `lFdCxu7dE`,
                                children: [
                                  de() &&
                                    /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(d.h3, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                          },
                                          children: `Content`,
                                        }),
                                      }),
                                      className: `framer-1jbxtqv`,
                                      fonts: [`Inter`],
                                      layoutDependency: Q,
                                      layoutId: `eZi2LFV3y`,
                                      style: {
                                        "--extracted-a0htzi": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                      },
                                      text: D,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  /*#__PURE__*/ o(d.div, {
                                    className: `framer-1t24y48`,
                                    "data-framer-name": `Meta`,
                                    layoutDependency: Q,
                                    layoutId: `qnNg1dCjj`,
                                    children: [
                                      /*#__PURE__*/ s(w, {
                                        animated: !0,
                                        className: `framer-hk7u06`,
                                        layoutDependency: Q,
                                        layoutId: `W_LKWmrtb`,
                                        style: {
                                          "--1m6trwb": 0,
                                          "--21h8s6": `rgba(247, 243, 238, 0.78)`,
                                          "--pgex8v": 1.5,
                                        },
                                      }),
                                      /*#__PURE__*/ s(S, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ s(t, {
                                          children: /*#__PURE__*/ s(d.p, {
                                            className: `framer-styles-preset-gyt55z`,
                                            "data-styles-preset": `u9_0JRzz7`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `start`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2))`,
                                            },
                                            children: `Per unit · 30 min`,
                                          }),
                                        }),
                                        className: `framer-9roiqc`,
                                        fonts: [`Inter`],
                                        layoutDependency: Q,
                                        layoutId: `k5sUnTnbx`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
                                        },
                                        text: E,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      $ !== !1 &&
                                        /*#__PURE__*/ s(S, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ s(t, {
                                            children: /*#__PURE__*/ s(d.p, {
                                              className: `framer-styles-preset-gyt55z`,
                                              "data-styles-preset": `u9_0JRzz7`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2))`,
                                              },
                                              children: `·`,
                                            }),
                                          }),
                                          className: `framer-v912x1`,
                                          fonts: [`Inter`],
                                          layoutDependency: Q,
                                          layoutId: `X78MRTB_m`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      $ !== !1 &&
                                        /*#__PURE__*/ s(S, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ s(t, {
                                            children: /*#__PURE__*/ s(d.p, {
                                              className: `framer-styles-preset-gyt55z`,
                                              "data-styles-preset": `u9_0JRzz7`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `start`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2))`,
                                              },
                                              children: `Content`,
                                            }),
                                          }),
                                          className: `framer-1d5hepk`,
                                          fonts: [`Inter`],
                                          layoutDependency: Q,
                                          layoutId: `vqAHKSTQa`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
                                          },
                                          text: O,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ s(d.div, {
                            className: `framer-7tphc2`,
                            "data-border": !0,
                            "data-framer-name": `Arrow`,
                            layoutDependency: Q,
                            layoutId: `SvFKv903W`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                              borderBottomLeftRadius: `50%`,
                              borderBottomRightRadius: `50%`,
                              borderTopLeftRadius: `50%`,
                              borderTopRightRadius: `50%`,
                            },
                            children: /*#__PURE__*/ s(x, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: p((m?.y || 0) + Math.max(m?.height || 432, 0) - 48.1),
                                pixelHeight: 16,
                                pixelWidth: 16,
                                sizes: `12px`,
                                src: `../../assets/images/ZxFNRd4qSeOYwgpSwNp2hpkgK2k.svg`,
                              },
                              className: `framer-pky87u`,
                              "data-framer-name": `Arrow`,
                              layoutDependency: Q,
                              layoutId: `YDcwyyK6N`,
                              ...F(
                                {
                                  iXDrgXNEm: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: p((m?.y || 0) + Math.max(m?.height || 432, 0) - 48),
                                      pixelHeight: 16,
                                      pixelWidth: 16,
                                      sizes: `12px`,
                                      src: `../../assets/images/ZxFNRd4qSeOYwgpSwNp2hpkgK2k.svg`,
                                    },
                                  },
                                },
                                M,
                                I
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (X = [
        `.framer-0U5bO.framer-3hh8np, .framer-0U5bO .framer-3hh8np { display: block; }`,
        `.framer-0U5bO.framer-8sqrre { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 432px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 300px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-0U5bO .framer-w4fihg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-0U5bO .framer-752jke { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: 0px; }`,
        `.framer-0U5bO .framer-1we850f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 16px; padding: 7px 11px 7px 11px; position: absolute; top: 16px; width: min-content; z-index: 0; }`,
        `.framer-0U5bO .framer-1rpj7wb, .framer-0U5bO .framer-9roiqc, .framer-0U5bO .framer-v912x1, .framer-0U5bO .framer-1d5hepk { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-0U5bO .framer-1yo4fxa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 80px 16px 18px 20px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-0U5bO .framer-7273bl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-0U5bO .framer-asbygy, .framer-0U5bO .framer-1jbxtqv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-0U5bO .framer-zdpa0n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-0U5bO .framer-1t24y48 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-0U5bO .framer-hk7u06 { flex: none; height: auto; position: relative; width: 14px; }`,
        `.framer-0U5bO .framer-7tphc2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: center; padding: 0px; position: relative; width: 36px; }`,
        `.framer-0U5bO .framer-pky87u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 12px; justify-content: flex-start; padding: 0px; position: relative; width: 12px; }`,
        `.framer-0U5bO.framer-v-r2j0xr .framer-1yo4fxa { align-content: flex-end; align-items: flex-end; padding: 110px 20px 24px 24px; }`,
        `.framer-0U5bO.framer-v-r2j0xr .framer-7273bl { gap: 14px; }`,
        `.framer-0U5bO.framer-v-r2j0xr .framer-zdpa0n { gap: 6px; }`,
        ...M,
        ...T,
        ...se,
        `.framer-0U5bO[data-border="true"]::after, .framer-0U5bO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Z = m(Y, X, `framer-0U5bO`)),
      (Z.displayName = `Treatment Card`),
      (Z.defaultProps = { height: 430, width: 300 }),
      _(Z, {
        variant: {
          options: [`yxOVIfKJX`, `iXDrgXNEm`],
          optionTitles: [`Default`, `List`],
          title: `Variant`,
          type: b.Enum,
        },
        oMuCFQFwN: {
          __defaultAssetReference: `data:framer/asset-reference,ddo9EkEFSMwLImeIUcAgDCPBM.jpg?originalFilename=imported.jpg&width=2000&height=2000`,
          title: `Photo`,
          type: b.ResponsiveImage,
        },
        nml1HXJ0z: { defaultValue: `With Botox®`, title: `Tag`, type: b.String },
        onnml1HXJ0zChange: { changes: `nml1HXJ0z`, type: b.ChangeHandler },
        IkWY6VVyk: { defaultValue: `From $14`, title: `Price`, type: b.String },
        onIkWY6VVykChange: { changes: `IkWY6VVyk`, type: b.ChangeHandler },
        JjK4mEaro: { defaultValue: `Per unit · 30 min`, title: `Details`, type: b.String },
        onJjK4mEaroChange: { changes: `JjK4mEaro`, type: b.ChangeHandler },
        txBUGJ_DJ: { defaultValue: `Neuromodulators`, title: `Title`, type: b.String },
        ontxBUGJ_DJChange: { changes: `txBUGJ_DJ`, type: b.ChangeHandler },
        NZSA_OF1s: { defaultValue: ``, title: `Session`, type: b.String },
        onNZSA_OF1sChange: { changes: `NZSA_OF1s`, type: b.ChangeHandler },
        dFYpqaDHc: { title: `Link`, type: b.Link },
      }),
      h(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...I,
          ...C(k),
          ...C(O),
          ...C(P),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { Q as n, Z as t };
//# sourceMappingURL=Xdnh1uN4Z.BfpWFutv.mjs.map
