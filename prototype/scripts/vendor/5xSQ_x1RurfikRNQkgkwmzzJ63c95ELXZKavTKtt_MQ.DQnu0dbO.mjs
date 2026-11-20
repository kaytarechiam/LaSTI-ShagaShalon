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
import { n as O, r as k } from "./aRl9Y_GiK.DES0gl8B.mjs";
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
        ca4r4f6uS: `(min-width: 810px) and (max-width: 1199.98px)`,
        htQjWPPmw: `(min-width: 1200px)`,
        qB7Z6mRO7: `(max-width: 809.98px)`,
      }),
      (P = []),
      (F = `framer-BKEUX`),
      (I = {
        ca4r4f6uS: `framer-v-lqqxw2`,
        htQjWPPmw: `framer-v-yuby6z`,
        qB7Z6mRO7: `framer-v-zq1z4`,
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
      (K = { Desktop: `htQjWPPmw`, Phone: `qB7Z6mRO7`, Tablet: `ca4r4f6uS` }),
      (q = ({ value: e }) =>
        v()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: K[r.variant] ?? r.variant ?? `htQjWPPmw`,
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
              primaryVariantId: `htQjWPPmw`,
              variantClassNames: I,
            },
            children: /*#__PURE__*/ a(te, {
              id: h ?? `aRl9Y_GiK`,
              children: [
                /*#__PURE__*/ o(q, { value: `html body { background: none; }` }),
                /*#__PURE__*/ o(u.div, {
                  ...b,
                  className: d(C, `framer-yuby6z`, m),
                  ref: c,
                  style: { ...p },
                  children: /*#__PURE__*/ a(u.main, {
                    className: `framer-2qp5kx`,
                    "data-framer-name": `Main`,
                    layout: E,
                    children: [
                      /*#__PURE__*/ o(`div`, {
                        className: `framer-fhl2`,
                        "data-framer-name": `Header`,
                        children: /*#__PURE__*/ a(j, {
                          animate: R,
                          className: `framer-1rzjvyu`,
                          "data-framer-appear-id": `1rzjvyu`,
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
                                  children: `Privacy policy`,
                                }),
                              }),
                              className: `framer-t2zwwc`,
                              "data-framer-appear-id": `t2zwwc`,
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
                                  children: `How Satin handles what you share with us.`,
                                }),
                              }),
                              className: `framer-1jb3j4e`,
                              "data-framer-appear-id": `1jb3j4e`,
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
                        className: `framer-187gaou`,
                        "data-framer-name": `Body`,
                        children: /*#__PURE__*/ a(`div`, {
                          className: `framer-sptxbz`,
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
                              className: `framer-jx7moa`,
                              "data-framer-name": `Facts`,
                              children: [
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-kbm051`,
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
                                      className: `framer-d1y0g6`,
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
                                      className: `framer-zk0zsf`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-17efsvf`,
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
                                      className: `framer-ftc0o8`,
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
                                      className: `framer-139s6np`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-12zgrfo`,
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
                                      className: `framer-1ahpu08`,
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
                                      className: `framer-1jrdr1g`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1sq2bd6`,
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
                                      className: `framer-15llzp1`,
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
                                      className: `framer-5s6lld`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-jl321n`,
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
                                  className: `framer-qc114i`,
                                  "data-framer-name": `What we collect`,
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
                                          children: `What we collect`,
                                        }),
                                      }),
                                      className: `framer-sedld1`,
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
                                          children: `When you send a request, we receive your name, contact details and what you tell us about your skin. If you become a patient, we also keep your chart and photographs.`,
                                        }),
                                      }),
                                      className: `framer-jhv9tc`,
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
                                  className: `framer-ewm7nx`,
                                  "data-framer-name": `How we use it`,
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
                                          children: `How we use it`,
                                        }),
                                      }),
                                      className: `framer-w1hyu1`,
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
                                          children: `We use your details to reply to you, arrange visits and provide care. We never sell them.`,
                                        }),
                                      }),
                                      className: `framer-1gnz634`,
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
                                  className: `framer-9yoy9h`,
                                  "data-framer-name": `Who we share it with`,
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
                                          children: `Who we share it with`,
                                        }),
                                      }),
                                      className: `framer-u10t59`,
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
                                          children: `Only the people and services that help us care for you, such as our booking and records systems, and only as far as they need to.`,
                                        }),
                                      }),
                                      className: `framer-fjeys0`,
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
                                  className: `framer-fvmoe1`,
                                  "data-framer-name": `Photographs`,
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
                                          children: `Photographs`,
                                        }),
                                      }),
                                      className: `framer-50mtpf`,
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
                                          children: `Clinical photographs stay in your chart. We only use them elsewhere with your written consent, which you can withdraw at any time.`,
                                        }),
                                      }),
                                      className: `framer-13ss92q`,
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
                                  className: `framer-16aaqb`,
                                  "data-framer-name": `How long we keep it`,
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
                                          children: `How long we keep it`,
                                        }),
                                      }),
                                      className: `framer-k96vur`,
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
                                          children: `We keep your chart for as long as the law requires. Requests that never become a visit are deleted after 12 months.`,
                                        }),
                                      }),
                                      className: `framer-1ldky8w`,
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
                                  className: `framer-dvc8qz`,
                                  "data-framer-name": `Cookies`,
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
                                          children: `Cookies`,
                                        }),
                                      }),
                                      className: `framer-1qu0yc2`,
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
                                          children: `We use only the cookies this site needs to work and to count visits.`,
                                        }),
                                      }),
                                      className: `framer-xl910w`,
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
                                  className: `framer-iq3tgc`,
                                  "data-framer-name": `Your choices`,
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
                                          children: `Your choices`,
                                        }),
                                      }),
                                      className: `framer-1rvzm9l`,
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
                                          children: `You can ask to see, correct or delete your information by writing to hello@satinskin.clinic.`,
                                        }),
                                      }),
                                      className: `framer-1n71g94`,
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
                                  className: `framer-101mh0n`,
                                  "data-framer-name": `Changes to this policy`,
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
                                          children: `Changes to this policy`,
                                        }),
                                      }),
                                      className: `framer-vkfhdx`,
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
                                          children: `If we change this policy, we update the date on this page.`,
                                        }),
                                      }),
                                      className: `framer-1hcsw6f`,
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
        `.framer-BKEUX.framer-1swbu5p, .framer-BKEUX .framer-1swbu5p { display: block; }`,
        `.framer-BKEUX.framer-yuby6z { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-BKEUX .framer-2qp5kx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BKEUX .framer-fhl2 { align-content: center; align-items: center; background-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; padding: 180px 0px 64px 0px; position: relative; width: 100%; }`,
        `.framer-BKEUX .framer-1rzjvyu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-BKEUX .framer-t2zwwc, .framer-BKEUX .framer-1jb3j4e { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-BKEUX .framer-187gaou { align-content: center; align-items: center; background-color: var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 140px 0px 140px 0px; position: relative; width: 100%; }`,
        `.framer-BKEUX .framer-sptxbz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-BKEUX .framer-jx7moa { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 110px; width: 1px; }`,
        `.framer-BKEUX .framer-kbm051, .framer-BKEUX .framer-17efsvf, .framer-BKEUX .framer-12zgrfo, .framer-BKEUX .framer-1sq2bd6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-BKEUX .framer-d1y0g6, .framer-BKEUX .framer-zk0zsf, .framer-BKEUX .framer-ftc0o8, .framer-BKEUX .framer-139s6np, .framer-BKEUX .framer-1ahpu08, .framer-BKEUX .framer-1jrdr1g, .framer-BKEUX .framer-15llzp1, .framer-BKEUX .framer-5s6lld, .framer-BKEUX .framer-sedld1, .framer-BKEUX .framer-jhv9tc, .framer-BKEUX .framer-w1hyu1, .framer-BKEUX .framer-1gnz634, .framer-BKEUX .framer-u10t59, .framer-BKEUX .framer-fjeys0, .framer-BKEUX .framer-50mtpf, .framer-BKEUX .framer-13ss92q, .framer-BKEUX .framer-k96vur, .framer-BKEUX .framer-1ldky8w, .framer-BKEUX .framer-1qu0yc2, .framer-BKEUX .framer-xl910w, .framer-BKEUX .framer-1rvzm9l, .framer-BKEUX .framer-1n71g94, .framer-BKEUX .framer-vkfhdx, .framer-BKEUX .framer-1hcsw6f { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-BKEUX .framer-jl321n { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; max-width: 720px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-BKEUX .framer-qc114i, .framer-BKEUX .framer-ewm7nx, .framer-BKEUX .framer-9yoy9h, .framer-BKEUX .framer-fvmoe1, .framer-BKEUX .framer-16aaqb, .framer-BKEUX .framer-dvc8qz, .framer-BKEUX .framer-iq3tgc, .framer-BKEUX .framer-101mh0n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        ...be,
        ...ge,
        ...me,
        ...de,
        ...x,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-BKEUX.framer-yuby6z { width: 810px; } .framer-BKEUX .framer-fhl2 { padding: 100px 0px 64px 0px; } .framer-BKEUX .framer-187gaou { padding: 100px 0px 100px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-BKEUX.framer-yuby6z { width: 390px; } .framer-BKEUX .framer-fhl2 { padding: 80px 0px 64px 0px; } .framer-BKEUX .framer-1rzjvyu { padding: 0px 20px 0px 20px; } .framer-BKEUX .framer-187gaou { padding: 80px 0px 80px 0px; } .framer-BKEUX .framer-sptxbz { flex-direction: column; gap: 24px; padding: 0px 20px 0px 20px; } .framer-BKEUX .framer-jx7moa { flex: none; position: relative; top: unset; width: 100%; } .framer-BKEUX .framer-jl321n { flex: none; width: 100%; }}`,
      ]),
      (Z = f(Y, X, `framer-BKEUX`)),
      (Z.displayName = `Privacy policy`),
      (Z.defaultProps = { height: 3164, width: 1200 }),
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
          default: {
            type: `reactComponent`,
            name: `FrameraRl9Y_GiK`,
            slots: [],
            annotations: {
              framerColorSyntax: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerScrollSections: `false`,
              framerContractVersion: `1`,
              framerResponsiveScreen: `true`,
              framerIntrinsicWidth: `1200`,
              framerIntrinsicHeight: `3164`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ca4r4f6uS":{"layout":["fixed","auto"]},"qB7Z6mRO7":{"layout":["fixed","auto"]}}}`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default, P as queryParamNames };
//# sourceMappingURL=5xSQ_x1RurfikRNQkgkwmzzJ63c95ELXZKavTKtt_MQ.DQnu0dbO.mjs.map
