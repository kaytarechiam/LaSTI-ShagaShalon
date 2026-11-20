import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as ee,
  j as i,
  l as a,
  o,
  p as s,
  s as c,
  w as l,
} from "./react.BF5K0J5z.mjs";
import { i as te, o as ne, t as re, w as u } from "./motion.CyGOoZcc.mjs";
import {
  A as d,
  Ct as f,
  D as ie,
  Et as p,
  K as m,
  Tt as h,
  _t as g,
  d as _,
  dt as ae,
  gt as oe,
  lt as se,
  mt as v,
  pt as ce,
  w as y,
  z as b,
} from "./framer.BMzpwY9X.mjs";
import {
  J as x,
  X as S,
  Y as le,
  dt as C,
  ft as w,
  g as T,
  h as E,
  lt as ue,
  m as de,
  p as fe,
  q as pe,
  ut as me,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./yxzhfN2Rg.W01ar6hl.mjs";
import { i as ye, n as be, r as xe, t as D } from "./Y9102JqgO.BXaERxvH.mjs";
import { n as O, r as k } from "./WFhSQsHF4.ChpOgwF1.mjs";
var A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (c(),
      m(),
      re(),
      r(),
      S(),
      w(),
      T(),
      ye(),
      he(),
      O(),
      (A = p(y)),
      (j = p(u.div)),
      (M = h(u.div)),
      (N = {
        eywYPdGrK: `(min-width: 810px) and (max-width: 1199.98px)`,
        GQMNyQYg6: `(max-width: 809.98px)`,
        vb2ONt0yo: `(min-width: 1200px)`,
      }),
      (P = []),
      (F = `framer-wgJFD`),
      (I = {
        eywYPdGrK: `framer-v-masb52`,
        GQMNyQYg6: `framer-v-1pn5pc7`,
        vb2ONt0yo: `framer-v-1u7g4rh`,
      }),
      (L = (e, t, n) => (e && t ? `position` : n)),
      (R = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.2, duration: 1.2, ease: [0.2, 0.7, 0.2, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (z = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 28,
      }),
      (B = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.3, duration: 1.2, ease: [0.2, 0.7, 0.2, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (V = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (H = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.5, duration: 1.2, ease: [0.2, 0.7, 0.2, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (U = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (W = { delay: 0, duration: 1, ease: [0.2, 0.7, 0.2, 1], type: `tween` }),
      (G = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: W,
        x: 0,
        y: 20,
      }),
      (K = { Desktop: `vb2ONt0yo`, Phone: `GQMNyQYg6`, Tablet: `eywYPdGrK` }),
      (q = ({ value: e }) =>
        v()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: K[r.variant] ?? r.variant ?? `vb2ONt0yo`,
      })),
      (Y = /*#__PURE__*/ s(function (e, r) {
        let s = ee(null),
          c = r ?? s;
        l();
        let { activeLocale: re, contentLocale: f, setLocale: ie } = oe();
        se();
        let { style: p, className: m, layoutId: h, variant: v, ...b } = J(e),
          x = n(() => k({}, f), [f]);
        g(x);
        let [S, le] = ce(v, N, !1),
          C = d(F, D, ve, ue, fe, pe),
          w = i(_)?.isLayoutTemplate,
          T = !!i(ne)?.transition?.layout,
          E = L(w, T);
        return (
          ae({}),
          /*#__PURE__*/ o(_.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: K,
              primaryVariantId: `vb2ONt0yo`,
              variantClassNames: I,
            },
            children: /*#__PURE__*/ a(te, {
              id: h ?? `WFhSQsHF4`,
              children: [
                /*#__PURE__*/ o(q, { value: `html body { background: none; }` }),
                /*#__PURE__*/ o(u.div, {
                  ...b,
                  className: d(C, `framer-1u7g4rh`, m),
                  ref: c,
                  style: { ...p },
                  children: /*#__PURE__*/ a(u.main, {
                    className: `framer-lq57bq`,
                    "data-framer-name": `Main`,
                    layout: E,
                    children: [
                      /*#__PURE__*/ o(`div`, {
                        className: `framer-ljeqq7`,
                        "data-framer-name": `Header`,
                        children: /*#__PURE__*/ a(j, {
                          animate: R,
                          className: `framer-1oorog4`,
                          "data-framer-appear-id": `1oorog4`,
                          "data-framer-name": `Container`,
                          initial: z,
                          optimized: !0,
                          children: [
                            /*#__PURE__*/ o(A, {
                              __fromCanvasComponent: !0,
                              animate: B,
                              children: /*#__PURE__*/ o(t, {
                                children: /*#__PURE__*/ o(`h1`, {
                                  className: `framer-styles-preset-i1c9y9`,
                                  "data-styles-preset": `Y9102JqgO`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                  },
                                  children: `Terms of use`,
                                }),
                              }),
                              className: `framer-r75cl5`,
                              "data-framer-appear-id": `r75cl5`,
                              fonts: [`Inter`],
                              initial: V,
                              optimized: !0,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ o(A, {
                              __fromCanvasComponent: !0,
                              animate: H,
                              children: /*#__PURE__*/ o(t, {
                                children: /*#__PURE__*/ o(`p`, {
                                  className: `framer-styles-preset-19oisb3`,
                                  "data-styles-preset": `yxzhfN2Rg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
                                  },
                                  children: `What to expect when you use this site and visit us.`,
                                }),
                              }),
                              className: `framer-1dvdtfp`,
                              "data-framer-appear-id": `1dvdtfp`,
                              fonts: [`Inter`],
                              initial: z,
                              optimized: !0,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                      /*#__PURE__*/ o(`div`, {
                        className: `framer-15eypmc`,
                        "data-framer-name": `Body`,
                        children: /*#__PURE__*/ a(`div`, {
                          className: `framer-18j8ip2`,
                          "data-framer-name": `Container`,
                          children: [
                            /*#__PURE__*/ a(M, {
                              __framer__animate: { transition: W },
                              __framer__animateOnce: !0,
                              __framer__enter: U,
                              __framer__exit: G,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.15,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-ddxnhk`,
                              "data-framer-name": `Facts`,
                              children: [
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-oyzijj`,
                                  "data-framer-name": `Last updated`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-gyt55z`,
                                          "data-styles-preset": `u9_0JRzz7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Last updated`,
                                        }),
                                      }),
                                      className: `framer-1srammp`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `November 2026`,
                                        }),
                                      }),
                                      className: `framer-1x2glzx`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1qyijkd`,
                                  "data-framer-name": `Applies to`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-gyt55z`,
                                          "data-styles-preset": `u9_0JRzz7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Applies to`,
                                        }),
                                      }),
                                      className: `framer-15ylgdw`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `This website and your visits`,
                                        }),
                                      }),
                                      className: `framer-85ut44`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-a0f4kl`,
                                  "data-framer-name": `Questions`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-gyt55z`,
                                          "data-styles-preset": `u9_0JRzz7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Questions`,
                                        }),
                                      }),
                                      className: `framer-1ngx657`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `hello@satinskin.clinic`,
                                        }),
                                      }),
                                      className: `framer-14l3tx1`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-10gvxfv`,
                                  "data-framer-name": `Note`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-gyt55z`,
                                          "data-styles-preset": `u9_0JRzz7`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Note`,
                                        }),
                                      }),
                                      className: `framer-qwel72`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `Sample text. Have it reviewed before you publish.`,
                                        }),
                                      }),
                                      className: `framer-w0vxn1`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1sz47tk`,
                              "data-framer-name": `Text`,
                              children: [
                                /*#__PURE__*/ a(M, {
                                  __framer__animate: { transition: W },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.15,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-pzewbz`,
                                  "data-framer-name": `About this site`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `About this site`,
                                        }),
                                      }),
                                      className: `framer-8my4ky`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `This site gives general information about the clinic and its treatments.`,
                                        }),
                                      }),
                                      className: `framer-cp3l7i`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(M, {
                                  __framer__animate: { transition: W },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.15,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-129z1rw`,
                                  "data-framer-name": `Medical information`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `Medical information`,
                                        }),
                                      }),
                                      className: `framer-13u161q`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Nothing here replaces a consultation. Your clinician decides what is right for your skin.`,
                                        }),
                                      }),
                                      className: `framer-wdxwau`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(M, {
                                  __framer__animate: { transition: W },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.15,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-fp78he`,
                                  "data-framer-name": `Results`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `Results`,
                                        }),
                                      }),
                                      className: `framer-1xy469d`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Photographs on this site are examples. Individual results vary.`,
                                        }),
                                      }),
                                      className: `framer-ht39j`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(M, {
                                  __framer__animate: { transition: W },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.15,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1b7fiid`,
                                  "data-framer-name": `Prices`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `Prices`,
                                        }),
                                      }),
                                      className: `framer-l8px8s`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Prices are starting prices and can change. Your written plan confirms your total before any treatment.`,
                                        }),
                                      }),
                                      className: `framer-poo1mm`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(M, {
                                  __framer__animate: { transition: W },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.15,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1ooeqtd`,
                                  "data-framer-name": `Appointments`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `Appointments`,
                                        }),
                                      }),
                                      className: `framer-1elak2f`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `Please give us 48 hours’ notice to change an appointment. The $75 consultation fee is credited to any treatment within 60 days.`,
                                        }),
                                      }),
                                      className: `framer-cwbra3`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(M, {
                                  __framer__animate: { transition: W },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.15,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-355ij9`,
                                  "data-framer-name": `Membership`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `Membership`,
                                        }),
                                      }),
                                      className: `framer-n1qw51`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `$189 a month. Cancel with 30 days’ notice. Full details are on the membership page.`,
                                        }),
                                      }),
                                      className: `framer-125xlb1`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(M, {
                                  __framer__animate: { transition: W },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__exit: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.15,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1r6iyn2`,
                                  "data-framer-name": `Changes to these terms`,
                                  children: [
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`h2`, {
                                          className: `framer-styles-preset-94eeon`,
                                          "data-styles-preset": `SFS3lU2AV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                          },
                                          children: `Changes to these terms`,
                                        }),
                                      }),
                                      className: `framer-1lpdxd0`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ o(y, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ o(t, {
                                        children: /*#__PURE__*/ o(`p`, {
                                          className: `framer-styles-preset-o6ajd0`,
                                          "data-styles-preset": `wOh4XL4ux`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                          },
                                          children: `If we change these terms, we update the date on this page.`,
                                        }),
                                      }),
                                      className: `framer-1ufifka`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                /*#__PURE__*/ o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `.framer-wgJFD.framer-raag7x, .framer-wgJFD .framer-raag7x { display: block; }`,
        `.framer-wgJFD.framer-1u7g4rh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-wgJFD .framer-lq57bq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wgJFD .framer-ljeqq7 { align-content: center; align-items: center; background-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; padding: 180px 0px 64px 0px; position: relative; width: 100%; }`,
        `.framer-wgJFD .framer-1oorog4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-wgJFD .framer-r75cl5, .framer-wgJFD .framer-1dvdtfp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-wgJFD .framer-15eypmc { align-content: center; align-items: center; background-color: var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 140px 0px 140px 0px; position: relative; width: 100%; }`,
        `.framer-wgJFD .framer-18j8ip2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-wgJFD .framer-ddxnhk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 110px; width: 1px; }`,
        `.framer-wgJFD .framer-oyzijj, .framer-wgJFD .framer-1qyijkd, .framer-wgJFD .framer-a0f4kl, .framer-wgJFD .framer-10gvxfv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wgJFD .framer-1srammp, .framer-wgJFD .framer-1x2glzx, .framer-wgJFD .framer-15ylgdw, .framer-wgJFD .framer-85ut44, .framer-wgJFD .framer-1ngx657, .framer-wgJFD .framer-14l3tx1, .framer-wgJFD .framer-qwel72, .framer-wgJFD .framer-w0vxn1, .framer-wgJFD .framer-8my4ky, .framer-wgJFD .framer-cp3l7i, .framer-wgJFD .framer-13u161q, .framer-wgJFD .framer-wdxwau, .framer-wgJFD .framer-1xy469d, .framer-wgJFD .framer-ht39j, .framer-wgJFD .framer-l8px8s, .framer-wgJFD .framer-poo1mm, .framer-wgJFD .framer-1elak2f, .framer-wgJFD .framer-cwbra3, .framer-wgJFD .framer-n1qw51, .framer-wgJFD .framer-125xlb1, .framer-wgJFD .framer-1lpdxd0, .framer-wgJFD .framer-1ufifka { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wgJFD .framer-1sz47tk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; max-width: 720px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-wgJFD .framer-pzewbz, .framer-wgJFD .framer-129z1rw, .framer-wgJFD .framer-fp78he, .framer-wgJFD .framer-1b7fiid, .framer-wgJFD .framer-1ooeqtd, .framer-wgJFD .framer-355ij9, .framer-wgJFD .framer-1r6iyn2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        ...be,
        ...ge,
        ...me,
        ...de,
        ...x,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-wgJFD.framer-1u7g4rh { width: 810px; } .framer-wgJFD .framer-ljeqq7 { padding: 100px 0px 64px 0px; } .framer-wgJFD .framer-15eypmc { padding: 100px 0px 100px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-wgJFD.framer-1u7g4rh { width: 390px; } .framer-wgJFD .framer-ljeqq7 { padding: 80px 0px 64px 0px; } .framer-wgJFD .framer-1oorog4 { padding: 0px 20px 0px 20px; } .framer-wgJFD .framer-15eypmc { padding: 80px 0px 80px 0px; } .framer-wgJFD .framer-18j8ip2 { flex-direction: column; gap: 24px; padding: 0px 20px 0px 20px; } .framer-wgJFD .framer-ddxnhk { flex: none; position: relative; top: unset; width: 100%; } .framer-wgJFD .framer-1sz47tk { flex: none; width: 100%; }}`,
      ]),
      (Z = f(Y, X, `framer-wgJFD`)),
      (Z.displayName = `Terms of use`),
      (Z.defaultProps = { height: 2987, width: 1200 }),
      ie(
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
          ...b(xe),
          ...b(_e),
          ...b(C),
          ...b(E),
          ...b(le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerWFhSQsHF4`,
            slots: [],
            annotations: {
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"eywYPdGrK":{"layout":["fixed","auto"]},"GQMNyQYg6":{"layout":["fixed","auto"]}}}`,
              framerAutoSizeImages: `true`,
              framerScrollSections: `false`,
              framerIntrinsicHeight: `2987`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerLayoutTemplateFlowEffect: `true`,
              framerResponsiveScreen: `true`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1200`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default, P as queryParamNames };
//# sourceMappingURL=Wfs5-fKBe-v04pDdokTKFAisOZiaeR3u4uA_D7q6CUQ.DH2oIqoe.mjs.map
