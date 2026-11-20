import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as ee,
  s as c,
  w as te,
} from "./react.BF5K0J5z.mjs";
import { i as ne, o as l, t as re, w as u } from "./motion.CyGOoZcc.mjs";
import {
  A as d,
  B as f,
  Ct as p,
  D as m,
  K as h,
  M as g,
  O as _,
  R as v,
  St as ie,
  T as y,
  ct as ae,
  gt as oe,
  i as se,
  lt as ce,
  nt as b,
  o as x,
  p as le,
  w as S,
  z as C,
} from "./framer.BMzpwY9X.mjs";
import {
  J as w,
  X as T,
  Y as E,
  _ as ue,
  b as D,
  dt as O,
  ft as de,
  g as k,
  h as A,
  j as fe,
  k as j,
  lt as pe,
  m as me,
  p as he,
  q as ge,
  ut as M,
  v as N,
  y as P,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { r as F, t as I } from "./fhHgguzMk.DsM8gqaZ.mjs";
import { n as L, t as R } from "./XT2HPNEkm.Bbn4Mve7.mjs";
import { n as _e, t as z } from "./kL1rHJbfO.BckFkdSG.mjs";
import { i as B, n as V, r as ve, t as H } from "./BeforeAfter.BEeFUlkq.mjs";
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var W, G, K, q, J, Y, ye, be, xe, Se, X, Z, Ce, we, Te, Ee, De, Oe, Q;
function $() {
  return ($ = e(() => {
    (c(),
      h(),
      re(),
      r(),
      F(),
      _e(),
      fe(),
      B(),
      V(),
      D(),
      T(),
      de(),
      k(),
      L(),
      (W = v(R)),
      (G = v(j)),
      (K = v(I)),
      (q = v(z)),
      (J = v(H)),
      (Y = [`nBcqFbjbf`, `akS4Qowem`, `rDoCHO01X`]),
      (ye = `framer-aX4d7`),
      (be = {
        akS4Qowem: `framer-v-166y7y2`,
        nBcqFbjbf: `framer-v-8i7xfg`,
        rDoCHO01X: `framer-v-11vie4s`,
      }),
      (xe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Se = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (Z = ({ value: e, children: t }) => {
        let r = a(l),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(l.Provider, { value: o, children: t });
      }),
      (Ce = { "Case 1": `nBcqFbjbf`, "Case 2": `akS4Qowem`, "Case 3": `rDoCHO01X` }),
      (we = u.create(t)),
      (Te = ({
        accentColour: e,
        activeColour: t,
        glow: n,
        header: r,
        height: i,
        id: a,
        mutedColour: o,
        textColour: s,
        width: ee,
        ...c
      }) => ({
        ...c,
        gI9fePCc0: s ?? c.gI9fePCc0 ?? `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
        Kyx5B2GoS: r ?? c.Kyx5B2GoS ?? !0,
        lF7SWsrgH: t ?? c.lF7SWsrgH ?? `var(--token-aa27c467-2c68-4379-9c68-35a277bee920)`,
        m3GWySrb9: n ?? c.m3GWySrb9 ?? !0,
        qxCkZwVfC: o ?? c.qxCkZwVfC ?? `var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d)`,
        uUXbHrsS3: e ?? c.uUXbHrsS3 ?? `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
        variant: Ce[c.variant] ?? c.variant ?? `nBcqFbjbf`,
      })),
      (Ee = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (De = /*#__PURE__*/ ee(function (e, n) {
        let r = i(null),
          a = n ?? r,
          ee = te(),
          { activeLocale: c, contentLocale: l, setLocale: re } = oe(),
          p = ce(),
          {
            style: m,
            className: h,
            layoutId: g,
            variant: _,
            Kyx5B2GoS: v,
            gI9fePCc0: b,
            qxCkZwVfC: x,
            lF7SWsrgH: C,
            uUXbHrsS3: w,
            m3GWySrb9: T,
            ...E
          } = Te(e),
          {
            baseVariant: D,
            classNames: O,
            clearLoadingGesture: de,
            gestureHandlers: k,
            gestureVariant: A,
            isLoading: fe,
            setGestureState: me,
            setVariant: M,
            variants: N,
          } = ie({
            cycleOrder: Y,
            defaultVariant: `nBcqFbjbf`,
            ref: a,
            variant: _,
            variantClassNames: be,
          }),
          P = Ee(e, N),
          F = d(ye, ue, he, ge, pe),
          { activeVariantCallback: L, delay: _e } = ae(D),
          B = L(async (...e) => {
            M(`nBcqFbjbf`);
          }),
          V = L(async (...e) => {
            M(`akS4Qowem`);
          }),
          W = L(async (...e) => {
            M(`rDoCHO01X`);
          });
        return /*#__PURE__*/ s(ne, {
          id: g ?? ee,
          children: /*#__PURE__*/ s(we, {
            animate: N,
            initial: !1,
            children: /*#__PURE__*/ s(Z, {
              value: xe,
              children: /*#__PURE__*/ o(u.div, {
                ...E,
                ...k,
                className: d(F, `framer-8i7xfg`, h, O),
                "data-framer-name": `Case 1`,
                layoutDependency: P,
                layoutId: `nBcqFbjbf`,
                ref: a,
                style: { ...m },
                ...U(
                  {
                    akS4Qowem: { "data-framer-name": `Case 2` },
                    rDoCHO01X: { "data-framer-name": `Case 3` },
                  },
                  D,
                  A
                ),
                children: [
                  T !== !1 &&
                    /*#__PURE__*/ s(le, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: f((p?.y || 0) + (p?.height || 200) - 550),
                        pixelHeight: 1643,
                        pixelWidth: 2200,
                        sizes: `1288px`,
                        src: `../../assets/illustrations/shaga-hero.jpg`,
                        srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2200w`,
                      },
                      className: `framer-ln3wgg`,
                      "data-framer-name": `Glow`,
                      layoutDependency: P,
                      layoutId: `Kq7OuMF0s`,
                      style: { filter: `blur(110px)`, opacity: 0.7, WebkitFilter: `blur(110px)` },
                      ...U(
                        {
                          akS4Qowem: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((p?.y || 0) + (p?.height || 200) - 550),
                              pixelHeight: 1643,
                              pixelWidth: 2200,
                              sizes: `1288px`,
                              src: `../../assets/illustrations/shaga-hero.jpg`,
                              srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2200w`,
                            },
                          },
                          rDoCHO01X: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: f((p?.y || 0) + (p?.height || 200) - 550),
                              pixelHeight: 1643,
                              pixelWidth: 2200,
                              sizes: `1288px`,
                              src: `../../assets/illustrations/shaga-hero.jpg`,
                              srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2200w`,
                            },
                          },
                        },
                        D,
                        A
                      ),
                    }),
                  /*#__PURE__*/ s(u.div, {
                    className: `framer-lb5knt`,
                    "data-framer-name": `Copy`,
                    layoutDependency: P,
                    layoutId: `aB_fgnHIA`,
                    style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    children: /*#__PURE__*/ o(u.div, {
                      className: `framer-1t5wwwr`,
                      "data-framer-name": `Inner`,
                      layoutDependency: P,
                      layoutId: `PwT9kH_MV`,
                      children: [
                        v !== !1 &&
                          /*#__PURE__*/ s(se, {
                            height: 200,
                            children: /*#__PURE__*/ s(y, {
                              className: `framer-6ld97z-container`,
                              "data-framer-name": `Section Tag`,
                              layoutDependency: P,
                              layoutId: `Tl2DBJCfd-container`,
                              name: `Section Tag`,
                              nodeId: `Tl2DBJCfd`,
                              rendersWithMotion: !0,
                              scopeId: `op1589Zp_`,
                              children: /*#__PURE__*/ s(R, {
                                a3s5gDorS: `Results`,
                                height: `100%`,
                                id: `Tl2DBJCfd`,
                                layoutId: `Tl2DBJCfd`,
                                name: `Section Tag`,
                                PEYR80g6u: ve,
                                variant: Se(`A8h2Yr3rT`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        v !== !1 &&
                          /*#__PURE__*/ s(S, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ o(u.h2, {
                                className: `framer-styles-preset-6v63kf`,
                                "data-styles-preset": `LxN6valwV`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc))`,
                                },
                                children: [
                                  /*#__PURE__*/ s(u.span, {
                                    style: {
                                      "--framer-text-color": `var(--extracted-1qn201a, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                    },
                                    children: `Results, `,
                                  }),
                                  /*#__PURE__*/ s(u.em, { children: `case by case` }),
                                  /*#__PURE__*/ s(u.span, {
                                    style: {
                                      "--framer-text-color": `var(--extracted-g1tnir, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                    },
                                    children: `.`,
                                  }),
                                ],
                              }),
                            }),
                            className: `framer-1f7lbqn`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`, `Inter-Italic`],
                            layoutDependency: P,
                            layoutId: `JyK1G8YKM`,
                            style: {
                              "--extracted-1of0zx5": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                              "--extracted-1qn201a": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                              "--extracted-g1tnir": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        v !== !1 &&
                          /*#__PURE__*/ s(S, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(u.p, {
                                className: `framer-styles-preset-o6ajd0`,
                                "data-styles-preset": `wOh4XL4ux`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d))`,
                                },
                                children: `Sample cases for this template. Show your own patients here, photographed with written consent in the same light and angle.`,
                              }),
                            }),
                            className: `framer-1oyf9mb`,
                            fonts: [`Inter`],
                            layoutDependency: P,
                            layoutId: `PM0nEbfNr`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d)`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        /*#__PURE__*/ o(u.div, {
                          className: `framer-t2fm33`,
                          "data-framer-name": `Cases`,
                          layoutDependency: P,
                          layoutId: `L8lRjg1k4`,
                          children: [
                            /*#__PURE__*/ o(u.div, {
                              className: `framer-c9ha2b`,
                              "data-border": !0,
                              "data-framer-name": `Case 1`,
                              "data-highlight": !0,
                              layoutDependency: P,
                              layoutId: `m9lu7IPZh`,
                              onTap: B,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-551456fa-52ba-4745-84c4-84b4174abab4)`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: C,
                                borderBottomLeftRadius: 18,
                                borderBottomRightRadius: 18,
                                borderTopLeftRadius: 18,
                                borderTopRightRadius: 18,
                                opacity: 1,
                              },
                              variants: {
                                akS4Qowem: {
                                  "--border-color": `rgba(0, 0, 0, 0)`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  opacity: 0.75,
                                },
                                rDoCHO01X: {
                                  "--border-color": `rgba(0, 0, 0, 0)`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  opacity: 0.75,
                                },
                              },
                              children: [
                                /*#__PURE__*/ s(u.div, {
                                  className: `framer-ys66dq`,
                                  "data-framer-name": `Badge`,
                                  layoutDependency: P,
                                  layoutId: `JWBcfSCGQ`,
                                  style: {
                                    "--border-bottom-width": `0px`,
                                    "--border-color": `rgba(0, 0, 0, 0)`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `0px`,
                                    backgroundColor: `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                                    borderBottomLeftRadius: `50%`,
                                    borderBottomRightRadius: `50%`,
                                    borderTopLeftRadius: `50%`,
                                    borderTopRightRadius: `50%`,
                                  },
                                  variants: {
                                    akS4Qowem: {
                                      "--border-bottom-width": `1px`,
                                      "--border-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                      "--border-left-width": `1px`,
                                      "--border-right-width": `1px`,
                                      "--border-style": `solid`,
                                      "--border-top-width": `1px`,
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                    },
                                    rDoCHO01X: {
                                      "--border-bottom-width": `1px`,
                                      "--border-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                      "--border-left-width": `1px`,
                                      "--border-right-width": `1px`,
                                      "--border-style": `solid`,
                                      "--border-top-width": `1px`,
                                      backgroundColor: `rgba(0, 0, 0, 0)`,
                                    },
                                  },
                                  ...U(
                                    {
                                      akS4Qowem: { "data-border": !0 },
                                      rDoCHO01X: { "data-border": !0 },
                                    },
                                    D,
                                    A
                                  ),
                                  children: /*#__PURE__*/ s(j, {
                                    animated: !0,
                                    className: `framer-hzkrql`,
                                    layoutDependency: P,
                                    layoutId: `NNM6YGh3p`,
                                    style: {
                                      "--1m6trwb": 0,
                                      "--21h8s6": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                      "--pgex8v": 1.5,
                                    },
                                    variants: {
                                      akS4Qowem: { "--21h8s6": w },
                                      rDoCHO01X: { "--21h8s6": w },
                                    },
                                  }),
                                }),
                                /*#__PURE__*/ o(u.div, {
                                  className: `framer-19xprl4`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: P,
                                  layoutId: `ockMbUvwp`,
                                  children: [
                                    /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(u.h3, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--variable-reference-gI9fePCc0-op1589Zp_))`,
                                          },
                                          children: `Neuromodulators + peel`,
                                        }),
                                      }),
                                      className: `framer-15fpbuk`,
                                      fonts: [`Inter`],
                                      layoutDependency: P,
                                      layoutId: `S0aPpeDqm`,
                                      style: {
                                        "--extracted-a0htzi": `var(--variable-reference-gI9fePCc0-op1589Zp_)`,
                                        "--variable-reference-gI9fePCc0-op1589Zp_": b,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(u.p, {
                                          className: `framer-styles-preset-gyt55z`,
                                          "data-styles-preset": `u9_0JRzz7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qxCkZwVfC-op1589Zp_))`,
                                          },
                                          children: `Forehead · 3 sessions`,
                                        }),
                                      }),
                                      className: `framer-h4i5ra`,
                                      fonts: [`Inter`],
                                      layoutDependency: P,
                                      layoutId: `XrY2rSjJE`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--variable-reference-qxCkZwVfC-op1589Zp_)`,
                                        "--variable-reference-qxCkZwVfC-op1589Zp_": x,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ o(u.div, {
                              className: `framer-1s5qnei`,
                              "data-border": !0,
                              "data-framer-name": `Case 2`,
                              "data-highlight": !0,
                              layoutDependency: P,
                              layoutId: `wVPWofBtB`,
                              onTap: V,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `rgba(0, 0, 0, 0)`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 18,
                                borderBottomRightRadius: 18,
                                borderTopLeftRadius: 18,
                                borderTopRightRadius: 18,
                                opacity: 0.75,
                              },
                              variants: {
                                akS4Qowem: {
                                  "--border-color": `var(--token-551456fa-52ba-4745-84c4-84b4174abab4)`,
                                  backgroundColor: C,
                                  opacity: 0.999,
                                },
                              },
                              children: [
                                /*#__PURE__*/ s(u.div, {
                                  className: `framer-1e6lqqp`,
                                  "data-border": !0,
                                  "data-framer-name": `Badge`,
                                  layoutDependency: P,
                                  layoutId: `UCWC_xa90`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderBottomLeftRadius: `50%`,
                                    borderBottomRightRadius: `50%`,
                                    borderTopLeftRadius: `50%`,
                                    borderTopRightRadius: `50%`,
                                  },
                                  variants: {
                                    akS4Qowem: {
                                      "--border-bottom-width": `0px`,
                                      "--border-left-width": `0px`,
                                      "--border-right-width": `0px`,
                                      "--border-top-width": `0px`,
                                      backgroundColor: `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                                    },
                                    rDoCHO01X: { backgroundColor: `rgba(0, 0, 0, 0)` },
                                  },
                                  children: /*#__PURE__*/ s(I, {
                                    animated: !0,
                                    className: `framer-hmo3d4`,
                                    layoutDependency: P,
                                    layoutId: `IAZg2zR7E`,
                                    style: { "--1m6trwb": 0, "--21h8s6": w, "--pgex8v": 1.5 },
                                    variants: {
                                      akS4Qowem: {
                                        "--21h8s6": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                      },
                                    },
                                  }),
                                }),
                                /*#__PURE__*/ o(u.div, {
                                  className: `framer-1unnro5`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: P,
                                  layoutId: `kiJ_7NDZ4`,
                                  children: [
                                    /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(u.h3, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--variable-reference-gI9fePCc0-op1589Zp_))`,
                                          },
                                          children: `Fractional laser`,
                                        }),
                                      }),
                                      className: `framer-dzgxfi`,
                                      fonts: [`Inter`],
                                      layoutDependency: P,
                                      layoutId: `Wxf9Jh84g`,
                                      style: {
                                        "--extracted-a0htzi": `var(--variable-reference-gI9fePCc0-op1589Zp_)`,
                                        "--variable-reference-gI9fePCc0-op1589Zp_": b,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(u.p, {
                                          className: `framer-styles-preset-gyt55z`,
                                          "data-styles-preset": `u9_0JRzz7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qxCkZwVfC-op1589Zp_))`,
                                          },
                                          children: `Cheek texture · 3 sessions`,
                                        }),
                                      }),
                                      className: `framer-abrnjs`,
                                      fonts: [`Inter`],
                                      layoutDependency: P,
                                      layoutId: `tOFY74rFa`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--variable-reference-qxCkZwVfC-op1589Zp_)`,
                                        "--variable-reference-qxCkZwVfC-op1589Zp_": x,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ o(u.div, {
                              className: `framer-73q3sn`,
                              "data-border": !0,
                              "data-framer-name": `Case 3`,
                              "data-highlight": !0,
                              layoutDependency: P,
                              layoutId: `d0k_unIlD`,
                              onTap: W,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `rgba(0, 0, 0, 0)`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 18,
                                borderBottomRightRadius: 18,
                                borderTopLeftRadius: 18,
                                borderTopRightRadius: 18,
                                opacity: 0.75,
                              },
                              variants: {
                                rDoCHO01X: {
                                  "--border-color": `var(--token-551456fa-52ba-4745-84c4-84b4174abab4)`,
                                  backgroundColor: C,
                                  opacity: 0.999,
                                },
                              },
                              children: [
                                /*#__PURE__*/ s(u.div, {
                                  className: `framer-p1jgka`,
                                  "data-border": !0,
                                  "data-framer-name": `Badge`,
                                  layoutDependency: P,
                                  layoutId: `xjR17tAKF`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderBottomLeftRadius: `50%`,
                                    borderBottomRightRadius: `50%`,
                                    borderTopLeftRadius: `50%`,
                                    borderTopRightRadius: `50%`,
                                  },
                                  variants: {
                                    rDoCHO01X: {
                                      "--border-bottom-width": `0px`,
                                      "--border-left-width": `0px`,
                                      "--border-right-width": `0px`,
                                      "--border-top-width": `0px`,
                                      backgroundColor: `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                                    },
                                  },
                                  children: /*#__PURE__*/ s(z, {
                                    animated: !0,
                                    className: `framer-om052d`,
                                    layoutDependency: P,
                                    layoutId: `IbI927yR4`,
                                    style: { "--1m6trwb": 0, "--21h8s6": w, "--pgex8v": 1.5 },
                                    variants: {
                                      rDoCHO01X: {
                                        "--21h8s6": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                      },
                                    },
                                  }),
                                }),
                                /*#__PURE__*/ o(u.div, {
                                  className: `framer-16x5mce`,
                                  "data-framer-name": `Text`,
                                  layoutDependency: P,
                                  layoutId: `xb4gHi5qy`,
                                  children: [
                                    /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(u.h3, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-a0htzi, var(--variable-reference-gI9fePCc0-op1589Zp_))`,
                                          },
                                          children: `IPL photofacial`,
                                        }),
                                      }),
                                      className: `framer-7n7ofk`,
                                      fonts: [`Inter`],
                                      layoutDependency: P,
                                      layoutId: `hcVVdTUE7`,
                                      style: {
                                        "--extracted-a0htzi": `var(--variable-reference-gI9fePCc0-op1589Zp_)`,
                                        "--variable-reference-gI9fePCc0-op1589Zp_": b,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ s(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ s(t, {
                                        children: /*#__PURE__*/ s(u.p, {
                                          className: `framer-styles-preset-gyt55z`,
                                          "data-styles-preset": `u9_0JRzz7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-qxCkZwVfC-op1589Zp_))`,
                                          },
                                          children: `Pigmentation · 2 sessions`,
                                        }),
                                      }),
                                      className: `framer-x226hk`,
                                      fonts: [`Inter`],
                                      layoutDependency: P,
                                      layoutId: `eJMX6bbtA`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--variable-reference-qxCkZwVfC-op1589Zp_)`,
                                        "--variable-reference-qxCkZwVfC-op1589Zp_": x,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  /*#__PURE__*/ s(u.div, {
                    className: `framer-3fa0uq`,
                    "data-framer-name": `Compare`,
                    layoutDependency: P,
                    layoutId: `zTt8Ovns_`,
                    style: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                    children: /*#__PURE__*/ s(se, {
                      children: /*#__PURE__*/ s(y, {
                        className: `framer-fmbo6k-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `Before After`,
                        isAuthoredByUser: !0,
                        layoutDependency: P,
                        layoutId: `cvJSla9js-container`,
                        name: `Before After`,
                        nodeId: `cvJSla9js`,
                        rendersWithMotion: !0,
                        scopeId: `op1589Zp_`,
                        children: /*#__PURE__*/ s(H, {
                          afterImage: X(
                            {
                              pixelHeight: 1643,
                              pixelWidth: 2200,
                              src: `../../assets/illustrations/shaga-hero.jpg`,
                              srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2200w`,
                            },
                            `After treatment, close-up of the skin`
                          ),
                          afterLabel: `After · 3 months`,
                          autoSweep: !0,
                          beforeImage: X(
                            {
                              pixelHeight: 1728,
                              pixelWidth: 2304,
                              src: `../../assets/illustrations/shaga-hero.jpg`,
                              srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2304w`,
                            },
                            ``
                          ),
                          beforeLabel: `Before`,
                          beforeMono: !1,
                          beforeTone: 0,
                          height: `100%`,
                          id: `cvJSla9js`,
                          initialPosition: 50,
                          labelColor: `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                          labelFont: {
                            fontFamily: `"Hanken Grotesk", "Hanken Grotesk Placeholder", sans-serif`,
                            fontSize: `11px`,
                            fontStyle: `normal`,
                            fontWeight: 500,
                            letterSpacing: `0.16em`,
                            lineHeight: `1em`,
                          },
                          layoutId: `cvJSla9js`,
                          lineColor: `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                          name: `Before After`,
                          placeholderText: `Your consented photo`,
                          radius: 0,
                          showSlider: !1,
                          sliderLabel: `Compare`,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                          ...U(
                            {
                              akS4Qowem: {
                                afterImage: X(
                                  {
                                    pixelHeight: 1643,
                                    pixelWidth: 2200,
                                    src: `../../assets/illustrations/shaga-hero.jpg`,
                                    srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2200w`,
                                  },
                                  ``
                                ),
                                afterLabel: `After · 4 months`,
                                beforeImage: X(
                                  {
                                    pixelHeight: 1728,
                                    pixelWidth: 2304,
                                    src: `../../assets/illustrations/shaga-hero.jpg`,
                                    srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2304w`,
                                  },
                                  ``
                                ),
                              },
                              rDoCHO01X: {
                                afterImage: X(
                                  {
                                    pixelHeight: 1643,
                                    pixelWidth: 2200,
                                    src: `../../assets/illustrations/shaga-hero.jpg`,
                                    srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2200w`,
                                  },
                                  ``
                                ),
                                afterLabel: `After · 6 weeks`,
                                beforeImage: X(
                                  {
                                    pixelHeight: 1728,
                                    pixelWidth: 2304,
                                    src: `../../assets/illustrations/shaga-hero.jpg`,
                                    srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2304w`,
                                  },
                                  ``
                                ),
                              },
                            },
                            D,
                            A
                          ),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Oe = [
        `.framer-aX4d7.framer-70r8uc, .framer-aX4d7 .framer-70r8uc { display: block; }`,
        `.framer-aX4d7.framer-8i7xfg { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-aX4d7 .framer-ln3wgg { align-content: flex-start; align-items: flex-start; bottom: -50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 600px; justify-content: flex-start; left: 60px; padding: 0px; pointer-events: none; position: absolute; width: 1288px; z-index: 0; }`,
        `.framer-aX4d7 .framer-lb5knt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1400px; }`,
        `.framer-aX4d7 .framer-1t5wwwr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; max-width: 100%; padding: 0px; position: relative; width: 100%; }`,
        `.framer-aX4d7 .framer-6ld97z-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-aX4d7 .framer-1f7lbqn, .framer-aX4d7 .framer-15fpbuk, .framer-aX4d7 .framer-h4i5ra, .framer-aX4d7 .framer-dzgxfi, .framer-aX4d7 .framer-abrnjs, .framer-aX4d7 .framer-7n7ofk, .framer-aX4d7 .framer-x226hk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-aX4d7 .framer-1oyf9mb { flex: none; height: auto; max-width: 560px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-aX4d7 .framer-t2fm33 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-aX4d7 .framer-c9ha2b, .framer-aX4d7 .framer-1s5qnei, .framer-aX4d7 .framer-73q3sn { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; min-width: 280px; padding: 18px 20px 18px 20px; position: relative; width: 1px; }`,
        `.framer-aX4d7 .framer-ys66dq, .framer-aX4d7 .framer-1e6lqqp, .framer-aX4d7 .framer-p1jgka { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: center; padding: 0px; position: relative; width: 44px; }`,
        `.framer-aX4d7 .framer-hzkrql, .framer-aX4d7 .framer-hmo3d4, .framer-aX4d7 .framer-om052d { flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-aX4d7 .framer-19xprl4, .framer-aX4d7 .framer-1unnro5, .framer-aX4d7 .framer-16x5mce { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-aX4d7 .framer-3fa0uq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: 620px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1400px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-aX4d7 .framer-fmbo6k-container { flex: none; height: 100%; position: relative; width: 100%; }`,
        ...N,
        ...me,
        ...w,
        ...M,
        `.framer-aX4d7[data-border="true"]::after, .framer-aX4d7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Q = p(De, Oe, `framer-aX4d7`)),
      (Q.displayName = `Results Viewer`),
      (Q.defaultProps = { height: 951, width: 1400 }),
      _(Q, {
        variant: {
          options: [`nBcqFbjbf`, `akS4Qowem`, `rDoCHO01X`],
          optionTitles: [`Case 1`, `Case 2`, `Case 3`],
          title: `Variant`,
          type: x.Enum,
        },
        Kyx5B2GoS: { defaultValue: !0, title: `Header`, type: x.Boolean },
        onKyx5B2GoSChange: { changes: `Kyx5B2GoS`, type: x.ChangeHandler },
        gI9fePCc0: {
          defaultValue: `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
          title: `Text Colour`,
          type: x.Color,
        },
        qxCkZwVfC: {
          defaultValue: `var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d)`,
          title: `Muted Colour`,
          type: x.Color,
        },
        lF7SWsrgH: {
          defaultValue: `var(--token-aa27c467-2c68-4379-9c68-35a277bee920)`,
          title: `Active Colour`,
          type: x.Color,
        },
        uUXbHrsS3: {
          defaultValue: `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
          title: `Accent Colour`,
          type: x.Color,
        },
        m3GWySrb9: { defaultValue: !0, title: `Glow`, type: x.Boolean },
        onm3GWySrb9Change: { changes: `m3GWySrb9`, type: x.ChangeHandler },
      }),
      m(
        Q,
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
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `italic`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Hanken Grotesk`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Hanken Grotesk`,
                url: `../../assets/fonts/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcgWZa5PpNzXhRKA.woff2`,
                weight: `500`,
              },
            ],
          },
          ...W,
          ...G,
          ...K,
          ...q,
          ...J,
          ...C(P),
          ...C(A),
          ...C(E),
          ...C(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => b([() => g(R, {}, t)], t) }));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=op1589Zp_.DAoklb4M.mjs.map
