import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  C as t,
  D as n,
  E as r,
  F as i,
  I as a,
  L as o,
  M as s,
  P as ee,
  T as c,
  _ as te,
  b as l,
  j as u,
  k as ne,
  l as d,
  o as f,
  p,
  s as m,
  w as re,
  y as ie,
  z as h,
} from "./react.BF5K0J5z.mjs";
import {
  Q as ae,
  U as oe,
  i as se,
  o as g,
  q as ce,
  t as _,
  v,
  w as y,
  z as b,
} from "./motion.CyGOoZcc.mjs";
import {
  A as x,
  B as S,
  Ct as C,
  D as le,
  K as w,
  M as ue,
  O as de,
  R as T,
  St as fe,
  T as E,
  Tt as D,
  gt as pe,
  i as O,
  jt as me,
  lt as k,
  nt as A,
  o as j,
  p as M,
  w as N,
  z as P,
} from "./framer.BMzpwY9X.mjs";
import {
  G as F,
  K as I,
  _ as L,
  b as R,
  dt as z,
  ft as B,
  g as he,
  h as ge,
  it as _e,
  lt as V,
  m as ve,
  nt as ye,
  p as be,
  rt as H,
  tt as U,
  ut as xe,
  v as Se,
  y as Ce,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { n as W, t as we } from "./XT2HPNEkm.Bbn4Mve7.mjs";
import { c as Te, d as Ee, f as De, l as Oe, s as G, u as ke } from "./X3fgrz8an.CBCMsicO.mjs";
import { r as Ae, t as je } from "./dZkd7bSHY.DQez72BA.mjs";
var Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  K;
function rt() {
  return (rt = e(() => {
    (m(),
      w(),
      _(),
      c(),
      Ae(),
      De(),
      _e(),
      R(),
      B(),
      he(),
      I(),
      W(),
      (Me = T(we)),
      (Ne = D(E)),
      (Pe = D(y.div)),
      (Fe = T(F)),
      (Ie = `framer-bCW9p`),
      (Le = { u4z3egnEs: `framer-v-1rv57ef` }),
      (Re = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ze = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 12,
      }),
      (Be = { delay: 0, duration: 0.8, ease: [0.6, 0, 0.4, 1], type: `tween` }),
      (Ve = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Be,
        x: 0,
        y: 12,
      }),
      (He = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ue = {
        effect: {
          filter: `blur(10px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        },
        repeat: !1,
        startDelay: 0.06,
        threshold: 0.2,
        tokenization: `word`,
        transition: { delay: 0.05, duration: 1.3, ease: [0.22, 1, 0.36, 1], type: `tween` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (We = {
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
      (Ge = { delay: 0.2, duration: 0.8, ease: [0.6, 0, 0.4, 1], type: `tween` }),
      (Ke = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ge,
        x: 0,
        y: 20,
      }),
      (qe = { delay: 0.3, duration: 0.8, ease: [0.6, 0, 0.4, 1], type: `tween` }),
      (Je = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: qe,
        x: 0,
        y: 20,
      }),
      (Ye = { delay: 0.35, duration: 0.8, ease: [0.6, 0, 0.4, 1], type: `tween` }),
      (Xe = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ye,
        x: 0,
        y: 20,
      }),
      (Ze = ({ value: e, children: t }) => {
        let n = u(g),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ f(g.Provider, { value: i, children: t });
      }),
      (Qe = y.create(i)),
      ($e = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (et = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (tt = /*#__PURE__*/ p(function (e, t) {
        let n = l(null),
          r = t ?? n,
          a = re(),
          { activeLocale: o, contentLocale: s, setLocale: ee } = pe(),
          c = k(),
          { style: te, className: u, layoutId: ne, variant: p, ...m } = $e(e),
          {
            baseVariant: ie,
            classNames: h,
            clearLoadingGesture: ae,
            gestureHandlers: oe,
            gestureVariant: g,
            isLoading: ce,
            setGestureState: _,
            setVariant: v,
            variants: b,
          } = fe({ defaultVariant: `u4z3egnEs`, ref: r, variant: p, variantClassNames: Le }),
          C = et(e, b),
          le = x(Ie, L, Oe, be, U, V);
        return /*#__PURE__*/ f(se, {
          id: ne ?? a,
          children: /*#__PURE__*/ f(Qe, {
            animate: b,
            initial: !1,
            children: /*#__PURE__*/ f(Ze, {
              value: Re,
              children: /*#__PURE__*/ f(y.div, {
                ...m,
                ...oe,
                className: x(le, `framer-1rv57ef`, u, h),
                "data-framer-name": `Default`,
                layoutDependency: C,
                layoutId: `u4z3egnEs`,
                ref: r,
                style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...te },
                children: /*#__PURE__*/ d(y.div, {
                  className: `framer-hbpz9d`,
                  "data-framer-name": `Intro`,
                  layoutDependency: C,
                  layoutId: `VpEm8aDWw`,
                  children: [
                    /*#__PURE__*/ d(y.div, {
                      className: `framer-7qtgp`,
                      "data-framer-name": `Heading`,
                      layoutDependency: C,
                      layoutId: `Ef1GQMkiM`,
                      children: [
                        /*#__PURE__*/ f(O, {
                          height: 200,
                          y: c?.y || 0,
                          children: /*#__PURE__*/ f(Ne, {
                            __framer__animate: { transition: Be },
                            __framer__animateOnce: !0,
                            __framer__enter: ze,
                            __framer__exit: Ve,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.2,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-1c71k0a-container`,
                            "data-framer-name": `Section Tag`,
                            layoutDependency: C,
                            layoutId: `UyNVv8cFU-container`,
                            name: `Section Tag`,
                            nodeId: `UyNVv8cFU`,
                            rendersWithMotion: !0,
                            scopeId: `g1zZxPwqp`,
                            children: /*#__PURE__*/ f(we, {
                              a3s5gDorS: `Patient reviews`,
                              height: `100%`,
                              id: `UyNVv8cFU`,
                              layoutId: `UyNVv8cFU`,
                              name: `Section Tag`,
                              PEYR80g6u: je,
                              variant: He(`A8h2Yr3rT`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        /*#__PURE__*/ f(N, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ f(i, {
                            children: /*#__PURE__*/ d(y.h2, {
                              className: `framer-styles-preset-6v63kf`,
                              "data-styles-preset": `LxN6valwV`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-1of0zx5, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                              },
                              children: [
                                `In their `,
                                /*#__PURE__*/ f(y.span, {
                                  style: {
                                    "--framer-text-color": `var(--extracted-1qn201a, var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc))`,
                                  },
                                  children: /*#__PURE__*/ f(y.em, { children: `own` }),
                                }),
                                ` words.`,
                              ],
                            }),
                          }),
                          className: `framer-1p6t7ev`,
                          "data-framer-name": `Title`,
                          effect: Ue,
                          fonts: [`Inter`, `Inter-Italic`],
                          layoutDependency: C,
                          layoutId: `Cvd3jYlZK`,
                          style: {
                            "--extracted-1of0zx5": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                            "--extracted-1qn201a": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ d(Pe, {
                      __framer__animate: { transition: Ge },
                      __framer__animateOnce: !0,
                      __framer__enter: We,
                      __framer__exit: Ke,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.2,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-107dmno`,
                      "data-border": !0,
                      "data-framer-name": `Rating`,
                      layoutDependency: C,
                      layoutId: `Seo9YngED`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-551456fa-52ba-4745-84c4-84b4174abab4)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      children: [
                        /*#__PURE__*/ f(N, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ f(i, {
                            children: /*#__PURE__*/ f(y.p, {
                              className: `framer-styles-preset-d5dqav`,
                              "data-styles-preset": `IqazrMJyA`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                              },
                              children: `4.9`,
                            }),
                          }),
                          className: `framer-mm9gma`,
                          fonts: [`Inter`],
                          layoutDependency: C,
                          layoutId: `rsNSF2f5b`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        /*#__PURE__*/ d(y.div, {
                          className: `framer-4ju6hk`,
                          "data-framer-name": `Stars`,
                          layoutDependency: C,
                          layoutId: `y3vrFrIfo`,
                          children: [
                            /*#__PURE__*/ f(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(i, {
                                children: /*#__PURE__*/ f(y.p, {
                                  className: `framer-styles-preset-o6ajd0`,
                                  "data-styles-preset": `wOh4XL4ux`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc))`,
                                  },
                                  children: `★★★★★`,
                                }),
                              }),
                              className: `framer-1v496hm`,
                              fonts: [`Inter`],
                              layoutDependency: C,
                              layoutId: `uvHF6hBDf`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ f(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ f(i, {
                                children: /*#__PURE__*/ f(y.p, {
                                  className: `framer-styles-preset-o6ajd0`,
                                  "data-styles-preset": `wOh4XL4ux`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d))`,
                                  },
                                  children: `From 312 Google reviews`,
                                }),
                              }),
                              className: `framer-aghlzu`,
                              fonts: [`Inter`],
                              layoutDependency: C,
                              layoutId: `IgbULwLIm`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d)`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ d(Pe, {
                      __framer__animate: { transition: qe },
                      __framer__animateOnce: !0,
                      __framer__enter: We,
                      __framer__exit: Je,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.2,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1j364tm`,
                      "data-framer-name": `Patients`,
                      layoutDependency: C,
                      layoutId: `tBnLa498x`,
                      children: [
                        /*#__PURE__*/ d(y.div, {
                          className: `framer-1sknunv`,
                          "data-framer-name": `Avatars`,
                          layoutDependency: C,
                          layoutId: `nN4qfUHbU`,
                          children: [
                            /*#__PURE__*/ f(M, {
                              background: {
                                alt: `Patient portrait`,
                                fit: `fill`,
                                loading: S((c?.y || 0) + 476.8),
                                pixelHeight: 800,
                                pixelWidth: 800,
                                sizes: `40px`,
                                src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                              },
                              className: `framer-8ierb1`,
                              "data-border": !0,
                              "data-framer-name": `Avatar`,
                              layoutDependency: C,
                              layoutId: `jo0juY84n`,
                              style: {
                                "--border-bottom-width": `2px`,
                                "--border-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                "--border-left-width": `2px`,
                                "--border-right-width": `2px`,
                                "--border-style": `solid`,
                                "--border-top-width": `2px`,
                                borderBottomLeftRadius: `50%`,
                                borderBottomRightRadius: `50%`,
                                borderTopLeftRadius: `50%`,
                                borderTopRightRadius: `50%`,
                              },
                            }),
                            /*#__PURE__*/ f(M, {
                              background: {
                                alt: `Patient portrait`,
                                fit: `fill`,
                                loading: S((c?.y || 0) + 476.8),
                                pixelHeight: 800,
                                pixelWidth: 800,
                                sizes: `40px`,
                                src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 800w`,
                              },
                              className: `framer-1hi44w0`,
                              "data-border": !0,
                              "data-framer-name": `Avatar`,
                              layoutDependency: C,
                              layoutId: `n1qN9OcPB`,
                              style: {
                                "--border-bottom-width": `2px`,
                                "--border-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                "--border-left-width": `2px`,
                                "--border-right-width": `2px`,
                                "--border-style": `solid`,
                                "--border-top-width": `2px`,
                                borderBottomLeftRadius: `50%`,
                                borderBottomRightRadius: `50%`,
                                borderTopLeftRadius: `50%`,
                                borderTopRightRadius: `50%`,
                              },
                            }),
                            /*#__PURE__*/ f(M, {
                              background: {
                                alt: `Patient portrait`,
                                fit: `fill`,
                                loading: S((c?.y || 0) + 476.8),
                                pixelHeight: 800,
                                pixelWidth: 800,
                                sizes: `40px`,
                                src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                              },
                              className: `framer-1edp8td`,
                              "data-border": !0,
                              "data-framer-name": `Avatar`,
                              layoutDependency: C,
                              layoutId: `GnnZN0fA0`,
                              style: {
                                "--border-bottom-width": `2px`,
                                "--border-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                "--border-left-width": `2px`,
                                "--border-right-width": `2px`,
                                "--border-style": `solid`,
                                "--border-top-width": `2px`,
                                borderBottomLeftRadius: `50%`,
                                borderBottomRightRadius: `50%`,
                                borderTopLeftRadius: `50%`,
                                borderTopRightRadius: `50%`,
                              },
                            }),
                            /*#__PURE__*/ f(M, {
                              background: {
                                alt: `Patient portrait`,
                                fit: `fill`,
                                loading: S((c?.y || 0) + 476.8),
                                pixelHeight: 800,
                                pixelWidth: 800,
                                sizes: `40px`,
                                src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                              },
                              className: `framer-drmu8m`,
                              "data-border": !0,
                              "data-framer-name": `Avatar`,
                              layoutDependency: C,
                              layoutId: `dTf_nXJbt`,
                              style: {
                                "--border-bottom-width": `2px`,
                                "--border-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                "--border-left-width": `2px`,
                                "--border-right-width": `2px`,
                                "--border-style": `solid`,
                                "--border-top-width": `2px`,
                                borderBottomLeftRadius: `50%`,
                                borderBottomRightRadius: `50%`,
                                borderTopLeftRadius: `50%`,
                                borderTopRightRadius: `50%`,
                              },
                            }),
                            /*#__PURE__*/ f(M, {
                              background: {
                                alt: `Patient portrait`,
                                fit: `fill`,
                                loading: S((c?.y || 0) + 476.8),
                                pixelHeight: 800,
                                pixelWidth: 800,
                                sizes: `40px`,
                                src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                              },
                              className: `framer-2p85ki`,
                              "data-border": !0,
                              "data-framer-name": `Avatar`,
                              layoutDependency: C,
                              layoutId: `hWO4STHa7`,
                              style: {
                                "--border-bottom-width": `2px`,
                                "--border-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                "--border-left-width": `2px`,
                                "--border-right-width": `2px`,
                                "--border-style": `solid`,
                                "--border-top-width": `2px`,
                                borderBottomLeftRadius: `50%`,
                                borderBottomRightRadius: `50%`,
                                borderTopLeftRadius: `50%`,
                                borderTopRightRadius: `50%`,
                              },
                            }),
                          ],
                        }),
                        /*#__PURE__*/ f(N, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ f(i, {
                            children: /*#__PURE__*/ f(y.p, {
                              className: `framer-styles-preset-j520p6`,
                              "data-styles-preset": `KO8C83HIN`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d))`,
                              },
                              children: `312 patients this year`,
                            }),
                          }),
                          className: `framer-7r8ap2`,
                          fonts: [`Inter`],
                          layoutDependency: C,
                          layoutId: `rOL7ifVF6`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ f(O, {
                      height: 46,
                      y: (c?.y || 0) + 556.8,
                      children: /*#__PURE__*/ f(Ne, {
                        __framer__animate: { transition: Ye },
                        __framer__animateOnce: !0,
                        __framer__enter: We,
                        __framer__exit: Xe,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.2,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-16xsohu-container`,
                        "data-framer-name": `CTA Button`,
                        layoutDependency: C,
                        layoutId: `SlopKZo09-container`,
                        name: `CTA Button`,
                        nodeId: `SlopKZo09`,
                        rendersWithMotion: !0,
                        scopeId: `g1zZxPwqp`,
                        children: /*#__PURE__*/ f(F, {
                          cMEc6Dyax: `https://www.google.com/maps/search/?api=1&query=64+Perry+Street+New+York`,
                          height: `100%`,
                          id: `SlopKZo09`,
                          layoutId: `SlopKZo09`,
                          name: `CTA Button`,
                          O1Pum8WD2: `Read all reviews`,
                          variant: He(`aVZPXP7H2`),
                          width: `100%`,
                        }),
                      }),
                    }),
                    /*#__PURE__*/ f(N, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ f(i, {
                        children: /*#__PURE__*/ f(y.p, {
                          className: `framer-styles-preset-gyt55z`,
                          "data-styles-preset": `u9_0JRzz7`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d, rgb(207, 192, 181)))`,
                          },
                          children: `Sample reviews. Replace with your own.`,
                        }),
                      }),
                      className: `framer-cszvf3`,
                      fonts: [`Inter`],
                      layoutDependency: C,
                      layoutId: `NwVMMlR33`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d, rgb(207, 192, 181))`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (nt = [
        `.framer-bCW9p.framer-qpc16s, .framer-bCW9p .framer-qpc16s { display: block; }`,
        `.framer-bCW9p.framer-1rv57ef { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 480px; }`,
        `.framer-bCW9p .framer-hbpz9d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bCW9p .framer-7qtgp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bCW9p .framer-1c71k0a-container, .framer-bCW9p .framer-16xsohu-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-bCW9p .framer-1p6t7ev { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bCW9p .framer-107dmno { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 28px 0px 28px 0px; position: relative; width: 100%; }`,
        `.framer-bCW9p .framer-mm9gma, .framer-bCW9p .framer-1v496hm, .framer-bCW9p .framer-aghlzu, .framer-bCW9p .framer-7r8ap2, .framer-bCW9p .framer-cszvf3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-bCW9p .framer-4ju6hk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-bCW9p .framer-1j364tm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bCW9p .framer-1sknunv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: flex-start; padding: 0px; position: relative; width: 148px; }`,
        `.framer-bCW9p .framer-8ierb1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bCW9p .framer-1hi44w0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; left: 27px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bCW9p .framer-1edp8td { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; left: 54px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bCW9p .framer-drmu8m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; left: 81px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bCW9p .framer-2p85ki { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; left: 108px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        ...Se,
        ...ke,
        ...ve,
        ...ye,
        ...xe,
        `.framer-bCW9p[data-border="true"]::after, .framer-bCW9p [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (K = C(tt, nt, `framer-bCW9p`)),
      (K.displayName = `Reviews Intro`),
      (K.defaultProps = { height: 1560, width: 1200 }),
      le(
        K,
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
            ],
          },
          ...Me,
          ...Fe,
          ...P(Ce),
          ...P(Ee),
          ...P(ge),
          ...P(H),
          ...P(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (K.loader = { load: (e, t) => A([() => ue(we, {}, t), () => ue(F, {}, t)], t) }));
  }))();
}
var it, at;
function q() {
  return (q = e(() => {
    ((it = (e) => e), (at = (e) => typeof e == `function`));
  }))();
}
function ot() {
  return (ot = e(() => {
    q();
  }))();
}
function st() {
  return (st = e(() => {
    (q(), ot());
  }))();
}
var J;
function ct() {
  return (ct = e(() => {
    ((J = {}),
      Object.defineProperty(J, "__esModule", { value: !0 }),
      (J.warning = function () {}),
      (J.invariant = function () {}),
      J.__esModule,
      J.warning,
      J.invariant);
  }))();
}
function lt() {
  return (lt = e(() => {}))();
}
function ut(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
function dt() {
  return (dt = e(() => {}))();
}
function ft() {
  return (ft = e(() => {
    q();
  }))();
}
function pt(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function mt(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = pt(e),
    o = /* @__PURE__ */ new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n) {
            if (e.isIntersecting) {
              let n = t(e);
              at(n) ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
          }
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : It[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function ht(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function gt({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Y.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return ht(e, n);
        },
      });
    });
}
function _t(e) {
  e.forEach(gt);
}
function vt() {
  typeof ResizeObserver < `u` && (X = new ResizeObserver(_t));
}
function yt(e, t) {
  X || vt();
  let n = pt(e);
  return (
    n.forEach((e) => {
      let n = Y.get(e);
      (n || ((n = /* @__PURE__ */ new Set()), Y.set(e, n)), n.add(t), X?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Y.get(e);
        (n?.delete(t), (n != null && n.size) || X == null || X.unobserve(e));
      });
    }
  );
}
function bt() {
  ((Lt = () => {
    let e = { width: h.innerWidth, height: h.innerHeight },
      t = { target: h, size: e, contentSize: e };
    Z.forEach((e) => e(t));
  }),
    h.addEventListener(`resize`, Lt));
}
function xt(e) {
  return (
    Z.add(e),
    Lt || bt(),
    () => {
      (Z.delete(e), !Z.size && Lt && (Lt = void 0));
    }
  );
}
function St(e, t) {
  return at(e) ? xt(e) : yt(e, t);
}
function Ct(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function wt(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Y, X, Z, Lt, Rt, zt, Bt;
function Vt() {
  return (Vt = e(() => {
    (o(),
      st(),
      ct(),
      lt(),
      q(),
      dt(),
      ft(),
      (Tt = [``, `X`, `Y`, `Z`]),
      (Et = [`translate`, `scale`, `rotate`, `skew`]),
      (Dt = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (Ot = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: Dt,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: it },
        skew: Dt,
      }),
      (kt = /* @__PURE__ */ new Map()),
      (At = (e) => `--motion-${e}`),
      (jt = [`x`, `y`, `z`]),
      Et.forEach((e) => {
        Tt.forEach((t) => {
          (jt.push(e + t), kt.set(At(e + t), Ot[e]));
        });
      }),
      new Set(jt),
      (Mt = (e, t) => document.createElement(`div`).animate(e, t)),
      (Nt = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            Mt({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!Mt({ opacity: [0, 1] }, { duration: 0.001 }).finished,
        linearEasing: () => {
          try {
            Mt({ opacity: 0 }, { easing: `linear(0, 1)` });
          } catch {
            return !1;
          }
          return !0;
        },
      }),
      (Pt = {}),
      (Ft = {}));
    for (let e in Nt) Ft[e] = () => (Pt[e] === void 0 && (Pt[e] = Nt[e]()), Pt[e]);
    ((It = { any: 0, all: 1 }),
      (Y = /* @__PURE__ */ new WeakMap()),
      (Z = /* @__PURE__ */ new Set()),
      (Rt = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return mt(
            e,
            (r) => {
              if ((t(), wt(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), wt(e, `viewleave`, t));
                };
            },
            ut(r, [`once`])
          );
        },
      }),
      (zt = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), Ct(e, t, r));
      }),
      (Bt = {
        inView: Rt,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = zt(e, `hoverstart`, t),
              i = zt(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), Ct(e, `pressend`, t), h.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), Ct(e, `pressstart`, n), h.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), h.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Bt)]);
  }))();
}
function Ht(e) {
  let {
      slots: t = [],
      gap: i,
      padding: o,
      paddingPerSide: c,
      paddingTop: u,
      paddingRight: p,
      paddingBottom: m,
      paddingLeft: re,
      speed: h,
      hoverFactor: g,
      direction: _,
      alignment: x,
      sizingOptions: S,
      fadeOptions: C,
      style: le,
    } = e,
    { fadeContent: w, overflow: ue, fadeWidth: de, fadeInset: T, fadeAlpha: fe } = C,
    { widthType: E, heightType: D } = S,
    pe = c ? `${u}px ${p}px ${m}px ${re}px` : `${o}px`,
    O = me.current(),
    k = O === me.canvas || O === me.export,
    A = Ut(),
    j = t.filter(Boolean),
    M = r.count(j),
    N = M > 0,
    P = oe(0),
    F = Wt(_ === !0 ? `left` : _, A),
    I = F === `left` || F === `right`,
    L = Kt[F];
  ae(P, L);
  let R = l(null),
    z = s(() => [{ current: null }, { current: null }], []),
    [B, he] = te({ parent: null, children: null }),
    ge = null,
    _e = [],
    V = 0,
    ve = 0;
  (k && ((V = M ? Math.floor(10 / M) : 0), (ve = 1)),
    !k &&
      N &&
      B.parent &&
      ((V = Math.round((B.parent / B.children) * 2) + 1), (V = Math.min(V, Gt)), (ve = 1)));
  let ye = ne(() => {
      if (N && R.current) {
        let e = I ? R.current.offsetWidth : R.current.offsetHeight,
          t = z[0].current ? (I ? z[0].current.offsetLeft : z[0].current.offsetTop) : 0,
          n =
            (z[1].current
              ? I
                ? z[1].current.offsetLeft + z[1].current.offsetWidth
                : z[1].current.offsetTop + z[1].current.offsetHeight
              : 0) -
            t +
            i;
        ee(() => {
          he({ parent: e, children: n });
        });
      }
    }, []),
    be = k ? { contentVisibility: `auto` } : {};
  if (N) {
    if (!k) {
      let e = l(!0);
      n(
        () => (
          v.read(ye, !1, !0),
          St(R.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && v.read(ye, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    ge = r.map(j, (e, t) => {
      let n;
      (t === 0 && (n = z[A === `rtl` && I ? 1 : 0]),
        t === j.length - 1 && (n = z[A === `rtl` && I ? 0 : 1]));
      let r = { width: E ? e.props?.width : `100%`, height: D ? e.props?.height : `100%` };
      return /*#__PURE__*/ f(se, {
        inherit: `id`,
        children: /*#__PURE__*/ f(qt, {
          ref: n,
          style: r,
          children: /*#__PURE__*/ a(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...be },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let H = k ? !0 : b(R);
  if (!k)
    for (let e = 0; e < V; e++)
      _e = _e.concat(
        r.map(j, (t, n) => {
          let r = {
            width: E ? t.props?.width : `100%`,
            height: D ? t.props?.height : `100%`,
            willChange: H ? `transform` : void 0,
          };
          return /*#__PURE__*/ f(
            se,
            {
              inherit: `id`,
              children: /*#__PURE__*/ f(
                qt,
                {
                  style: r,
                  children: /*#__PURE__*/ a(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: E ? t.props?.width : `100%`,
                        height: D ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...be,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          );
        })
      );
  let U = B.children + B.children * Math.round(B.parent / B.children);
  (l(null), l(null), l(0));
  let xe = l(!1),
    Se = ce(),
    Ce = l(null),
    W = l(null);
  if (!k) {
    ie(() => {
      if (!Se && U && h)
        return (
          (W.current = Ce.current.animate(
            { transform: [L(0), L(U)] },
            {
              duration: (Math.abs(U) / h) * 1e3,
              iterations: 1 / 0,
              iterationStart: +(A === `rtl`),
              easing: `linear`,
            }
          )),
          () => W.current.cancel()
        );
    }, [g, U, h, A]);
    let e = ne(() => {
      if (!W.current) return;
      let e = document.hidden;
      H && !e && W.current.playState === `paused`
        ? W.current.play()
        : (!H || e) && W.current.playState === `running` && W.current.pause();
    }, [H]);
    (ie(() => {
      e();
    }, [H, g, U, h]),
      ie(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let we = I ? `to right` : `to bottom`,
    Te = de / 2,
    Ee = 100 - de / 2,
    De = `linear-gradient(${we}, rgba(0, 0, 0, ${fe}) ${$t(T, 0, Te)}%, rgba(0, 0, 0, 1) ${Te}%, rgba(0, 0, 0, 1) ${Ee}%, rgba(0, 0, 0, ${fe}) ${100 - T}%)`;
  return N
    ? /*#__PURE__*/ f(`section`, {
        style: {
          ...Jt,
          opacity: ve,
          WebkitMaskImage: w ? De : void 0,
          maskImage: w ? De : void 0,
          overflow: ue ? `visible` : `hidden`,
          padding: pe,
        },
        ref: R,
        children: /*#__PURE__*/ d(y.ul, {
          ref: Ce,
          style: {
            ...Jt,
            gap: i,
            top: _ === `bottom` && en(U) ? -U : void 0,
            left: _ === `right` && en(U) ? U * (A === `rtl` ? 1 : -1) : void 0,
            placeItems: x,
            position: `relative`,
            flexDirection: I ? `row` : `column`,
            ...le,
            willChange: k || !H ? `auto` : `transform`,
            transform: L(0),
          },
          onMouseEnter: () => {
            ((xe.current = !0), W.current && (W.current.playbackRate = g));
          },
          onMouseLeave: () => {
            ((xe.current = !1), W.current && (W.current.playbackRate = 1));
          },
          children: [ge, _e],
        }),
      })
    : /*#__PURE__*/ d(`section`, {
        style: Yt,
        children: [
          /*#__PURE__*/ f(`div`, { style: Xt, children: `✨` }),
          /*#__PURE__*/ f(`p`, { style: Zt, children: `Connect to Content` }),
          /*#__PURE__*/ f(`p`, {
            style: Qt,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
function Ut() {
  return !h || !h.document || !h.document.documentElement
    ? `ltr`
    : h.document.documentElement.dir === `rtl`
      ? `rtl`
      : `ltr`;
}
function Wt(e, t) {
  return t === `rtl` ? (e === `left` ? `right` : e === `right` ? `left` : e) : e;
}
var Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en;
function tn() {
  return (tn = e(() => {
    (o(),
      m(),
      c(),
      w(),
      _(),
      Vt(),
      (Gt = 100),
      (Kt = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (qt = /*#__PURE__*/ p(({ children: e, ...n }, r) => {
        let i = l(),
          a = b(i);
        return (
          t(r, () => i.current),
          ie(() => {
            let e = i.current;
            e &&
              (a
                ? e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  })
                : e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }));
          }, [a]),
          /*#__PURE__*/ f(`li`, { ...n, "aria-hidden": !a, ref: i, children: e })
        );
      })),
      (Ht.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      de(Ht, {
        slots: { type: j.Array, title: `Children`, control: { type: j.ComponentInstance } },
        speed: {
          type: j.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: j.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: j.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: j.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: j.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: j.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: j.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: j.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: j.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: j.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: j.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: j.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: j.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: j.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: j.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Jt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Yt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Xt = { fontSize: 32, marginBottom: 10 }),
      (Zt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Qt = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      ($t = (e, t, n) => Math.min(Math.max(e, t), n)),
      (en = (e) => typeof e == `number` && !isNaN(e)));
  }))();
}
function nn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rn, an, on, sn, cn, ln, Q, un, dn, fn, pn, mn, $;
function hn() {
  return (hn = e(() => {
    (m(),
      w(),
      _(),
      c(),
      tn(),
      Te(),
      (rn = T(G)),
      (an = T(Ht)),
      (on = [`bArZbYC3O`, `OQhYiX07q`]),
      (sn = `framer-mlMBB`),
      (cn = { bArZbYC3O: `framer-v-w6zbcp`, OQhYiX07q: `framer-v-j4vwgy` }),
      (ln = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (un = ({ value: e, children: t }) => {
        let n = u(g),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return /*#__PURE__*/ f(g.Provider, { value: i, children: t });
      }),
      (dn = { Default: `bArZbYC3O`, Phone: `OQhYiX07q` }),
      (fn = y.create(i)),
      (pn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: dn[r.variant] ?? r.variant ?? `bArZbYC3O`,
      })),
      (mn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = C(
        /* @__PURE__ */ p(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = re(),
            { activeLocale: a, contentLocale: o, setLocale: s } = pe();
          k();
          let { style: ee, className: c, layoutId: te, variant: u, ...ne } = pn(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: ie,
              gestureHandlers: h,
              gestureVariant: ae,
              isLoading: oe,
              setGestureState: g,
              setVariant: ce,
              variants: _,
            } = fe({
              cycleOrder: on,
              defaultVariant: `bArZbYC3O`,
              ref: r,
              variant: u,
              variantClassNames: cn,
            }),
            v = mn(e, _),
            b = x(sn),
            S = () => p !== `OQhYiX07q`;
          return /*#__PURE__*/ f(se, {
            id: te ?? i,
            children: /*#__PURE__*/ f(fn, {
              animate: _,
              initial: !1,
              children: /*#__PURE__*/ f(un, {
                value: ln,
                children: /*#__PURE__*/ d(y.div, {
                  ...ne,
                  ...h,
                  className: x(b, `framer-w6zbcp`, c, m),
                  "data-framer-name": `Default`,
                  layoutDependency: v,
                  layoutId: `bArZbYC3O`,
                  ref: r,
                  style: { ...ee },
                  ...nn({ OQhYiX07q: { "data-framer-name": `Phone` } }, p, ae),
                  children: [
                    /*#__PURE__*/ f(O, {
                      children: /*#__PURE__*/ f(E, {
                        className: `framer-10v5tyk-container`,
                        "data-framer-name": `Ticker down`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: v,
                        layoutId: `HThT2t3p9-container`,
                        name: `Ticker down`,
                        nodeId: `HThT2t3p9`,
                        rendersWithMotion: !0,
                        scopeId: `g5c5DlO2J`,
                        children: /*#__PURE__*/ f(Ht, {
                          alignment: `center`,
                          direction: `bottom`,
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 20,
                          height: `100%`,
                          hoverFactor: 0,
                          id: `HThT2t3p9`,
                          layoutId: `HThT2t3p9`,
                          name: `Ticker down`,
                          padding: 0,
                          paddingBottom: 0,
                          paddingLeft: 0,
                          paddingPerSide: !1,
                          paddingRight: 0,
                          paddingTop: 0,
                          sizingOptions: { heightType: !1, widthType: !1 },
                          slots: [
                            /*#__PURE__*/ f(O, {
                              height: 272,
                              width: `380px`,
                              children: /*#__PURE__*/ f(E, {
                                className: `framer-69eqmg-container`,
                                "data-framer-name": `Left · Maya R.`,
                                inComponentSlot: !0,
                                layoutDependency: v,
                                layoutId: `xobj5GAIe-container`,
                                name: `Left · Maya R.`,
                                nodeId: `xobj5GAIe`,
                                rendersWithMotion: !0,
                                scopeId: `g5c5DlO2J`,
                                children: /*#__PURE__*/ f(G, {
                                  a22ntmVgr: `MR`,
                                  height: `100%`,
                                  HQ_mjR75S: `“I came in with a list of worries and left with a one-page plan and a price. Nothing was pushed.”`,
                                  id: `xobj5GAIe`,
                                  JnclfRJJN: Q(
                                    {
                                      pixelHeight: 800,
                                      pixelWidth: 800,
                                      src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                                    },
                                    `Maya R.`
                                  ),
                                  k7cAmlFWF: `Neuromodulators`,
                                  kHRtfvmgp: !1,
                                  layoutId: `xobj5GAIe`,
                                  name: `Left · Maya R.`,
                                  OrNru1UPQ: Q(
                                    {
                                      pixelHeight: 1493,
                                      pixelWidth: 2e3,
                                      src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                    },
                                    `Photo of Maya R.`
                                  ),
                                  RzbJKBKq4: `Maya R.`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ f(O, {
                              height: 272,
                              width: `380px`,
                              children: /*#__PURE__*/ f(E, {
                                className: `framer-1rwf7x6-container`,
                                "data-framer-name": `Left · Daniel K.`,
                                inComponentSlot: !0,
                                layoutDependency: v,
                                layoutId: `GyTRsF9vt-container`,
                                name: `Left · Daniel K.`,
                                nodeId: `GyTRsF9vt`,
                                rendersWithMotion: !0,
                                scopeId: `g5c5DlO2J`,
                                children: /*#__PURE__*/ f(G, {
                                  a22ntmVgr: `DK`,
                                  height: `100%`,
                                  HQ_mjR75S: `“The price on the website was the price I paid. That alone made me a patient.”`,
                                  id: `GyTRsF9vt`,
                                  JnclfRJJN: Q(
                                    {
                                      pixelHeight: 800,
                                      pixelWidth: 800,
                                      src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 800w`,
                                    },
                                    `Daniel K.`
                                  ),
                                  k7cAmlFWF: `Halo laser`,
                                  kHRtfvmgp: !0,
                                  layoutId: `GyTRsF9vt`,
                                  name: `Left · Daniel K.`,
                                  OrNru1UPQ: Q(
                                    {
                                      pixelHeight: 1493,
                                      pixelWidth: 2e3,
                                      src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                    },
                                    `Photo of Daniel K.`
                                  ),
                                  RzbJKBKq4: `Daniel K.`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ f(O, {
                              height: 272,
                              width: `380px`,
                              children: /*#__PURE__*/ f(E, {
                                className: `framer-1kszsns-container`,
                                "data-framer-name": `Left · Grace T.`,
                                inComponentSlot: !0,
                                layoutDependency: v,
                                layoutId: `TaJDZXqqR-container`,
                                name: `Left · Grace T.`,
                                nodeId: `TaJDZXqqR`,
                                rendersWithMotion: !0,
                                scopeId: `g5c5DlO2J`,
                                children: /*#__PURE__*/ f(G, {
                                  a22ntmVgr: `GT`,
                                  height: `100%`,
                                  HQ_mjR75S: `“Calm room, honest advice, and a follow-up call two weeks later. It felt like real medicine.”`,
                                  id: `TaJDZXqqR`,
                                  JnclfRJJN: Q(
                                    {
                                      pixelHeight: 800,
                                      pixelWidth: 800,
                                      src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                                    },
                                    `Grace T.`
                                  ),
                                  k7cAmlFWF: `Consultation`,
                                  kHRtfvmgp: !1,
                                  layoutId: `TaJDZXqqR`,
                                  name: `Left · Grace T.`,
                                  OrNru1UPQ: Q(
                                    {
                                      pixelHeight: 1493,
                                      pixelWidth: 2e3,
                                      src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                    },
                                    `Photo of Grace T.`
                                  ),
                                  RzbJKBKq4: `Grace T.`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ f(O, {
                              height: 272,
                              width: `380px`,
                              children: /*#__PURE__*/ f(E, {
                                className: `framer-57llmd-container`,
                                "data-framer-name": `Left · Hannah L.`,
                                inComponentSlot: !0,
                                layoutDependency: v,
                                layoutId: `Qj1P46Smy-container`,
                                name: `Left · Hannah L.`,
                                nodeId: `Qj1P46Smy`,
                                rendersWithMotion: !0,
                                scopeId: `g5c5DlO2J`,
                                children: /*#__PURE__*/ f(G, {
                                  a22ntmVgr: `HL`,
                                  height: `100%`,
                                  HQ_mjR75S: `“My first visit was forty-five minutes of questions before anyone touched my face.”`,
                                  id: `Qj1P46Smy`,
                                  JnclfRJJN: Q(
                                    {
                                      pixelHeight: 600,
                                      pixelWidth: 600,
                                      src: `../../assets/illustrations/shaga-hero.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 600w`,
                                    },
                                    `Hannah L.`
                                  ),
                                  k7cAmlFWF: `Consultation`,
                                  kHRtfvmgp: !1,
                                  layoutId: `Qj1P46Smy`,
                                  name: `Left · Hannah L.`,
                                  OrNru1UPQ: Q(
                                    {
                                      pixelHeight: 1493,
                                      pixelWidth: 2e3,
                                      src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                    },
                                    `Photo of Hannah L.`
                                  ),
                                  RzbJKBKq4: `Hannah L.`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ f(O, {
                              height: 272,
                              width: `380px`,
                              children: /*#__PURE__*/ f(E, {
                                className: `framer-dn8u1o-container`,
                                "data-framer-name": `Left · Carmen V.`,
                                inComponentSlot: !0,
                                layoutDependency: v,
                                layoutId: `c3RPdl15D-container`,
                                name: `Left · Carmen V.`,
                                nodeId: `c3RPdl15D`,
                                rendersWithMotion: !0,
                                scopeId: `g5c5DlO2J`,
                                children: /*#__PURE__*/ f(G, {
                                  a22ntmVgr: `CV`,
                                  height: `100%`,
                                  HQ_mjR75S: `“Two IPL sessions and the redness I hid for ten years is gone.”`,
                                  id: `c3RPdl15D`,
                                  JnclfRJJN: Q(
                                    {
                                      pixelHeight: 600,
                                      pixelWidth: 600,
                                      src: `../../assets/illustrations/shaga-hero.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 600w`,
                                    },
                                    `Carmen V.`
                                  ),
                                  k7cAmlFWF: `IPL photofacial`,
                                  kHRtfvmgp: !1,
                                  layoutId: `c3RPdl15D`,
                                  name: `Left · Carmen V.`,
                                  OrNru1UPQ: Q(
                                    {
                                      pixelHeight: 1493,
                                      pixelWidth: 2e3,
                                      src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                    },
                                    `Photo of Carmen V.`
                                  ),
                                  RzbJKBKq4: `Carmen V.`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ f(O, {
                              height: 272,
                              width: `380px`,
                              children: /*#__PURE__*/ f(E, {
                                className: `framer-17xu7vf-container`,
                                "data-framer-name": `Left · Rachel B.`,
                                inComponentSlot: !0,
                                layoutDependency: v,
                                layoutId: `SJwj_x9_g-container`,
                                name: `Left · Rachel B.`,
                                nodeId: `SJwj_x9_g`,
                                rendersWithMotion: !0,
                                scopeId: `g5c5DlO2J`,
                                children: /*#__PURE__*/ f(G, {
                                  a22ntmVgr: `RB`,
                                  height: `100%`,
                                  HQ_mjR75S: `“Same clinician every visit. She remembers my skin better than I do.”`,
                                  id: `SJwj_x9_g`,
                                  JnclfRJJN: Q(
                                    {
                                      pixelHeight: 600,
                                      pixelWidth: 600,
                                      src: `../../assets/illustrations/shaga-hero.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 600w`,
                                    },
                                    `Rachel B.`
                                  ),
                                  k7cAmlFWF: `Clinical facial`,
                                  kHRtfvmgp: !1,
                                  layoutId: `SJwj_x9_g`,
                                  name: `Left · Rachel B.`,
                                  OrNru1UPQ: Q(
                                    {
                                      pixelHeight: 1493,
                                      pixelWidth: 2e3,
                                      src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                    },
                                    `Photo of Rachel B.`
                                  ),
                                  RzbJKBKq4: `Rachel B.`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          speed: 30,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    S() &&
                      /*#__PURE__*/ f(O, {
                        children: /*#__PURE__*/ f(E, {
                          className: `framer-di52nk-container`,
                          "data-framer-name": `Ticker up`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: v,
                          layoutId: `Bk_QYOKVZ-container`,
                          name: `Ticker up`,
                          nodeId: `Bk_QYOKVZ`,
                          rendersWithMotion: !0,
                          scopeId: `g5c5DlO2J`,
                          children: /*#__PURE__*/ f(Ht, {
                            alignment: `center`,
                            direction: `top`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 20,
                            height: `100%`,
                            hoverFactor: 0,
                            id: `Bk_QYOKVZ`,
                            layoutId: `Bk_QYOKVZ`,
                            name: `Ticker up`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !1, widthType: !1 },
                            slots: [
                              /*#__PURE__*/ f(O, {
                                height: 272,
                                width: `380px`,
                                children: /*#__PURE__*/ f(E, {
                                  className: `framer-1nj04sf-container`,
                                  "data-framer-name": `Right · Priya S.`,
                                  inComponentSlot: !0,
                                  layoutDependency: v,
                                  layoutId: `GTDnZTYgy-container`,
                                  name: `Right · Priya S.`,
                                  nodeId: `GTDnZTYgy`,
                                  rendersWithMotion: !0,
                                  scopeId: `g5c5DlO2J`,
                                  children: /*#__PURE__*/ f(G, {
                                    a22ntmVgr: `PS`,
                                    height: `100%`,
                                    HQ_mjR75S: `“Dr. Calloway talked me out of filler. Six months later my skin has never looked better.”`,
                                    id: `GTDnZTYgy`,
                                    JnclfRJJN: Q(
                                      {
                                        pixelHeight: 800,
                                        pixelWidth: 800,
                                        src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                                      },
                                      `Priya S.`
                                    ),
                                    k7cAmlFWF: `Skin boosters`,
                                    kHRtfvmgp: !1,
                                    layoutId: `GTDnZTYgy`,
                                    name: `Right · Priya S.`,
                                    OrNru1UPQ: Q(
                                      {
                                        pixelHeight: 1493,
                                        pixelWidth: 2e3,
                                        src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                      },
                                      `Photo of Priya S.`
                                    ),
                                    RzbJKBKq4: `Priya S.`,
                                    style: { width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(O, {
                                height: 272,
                                width: `380px`,
                                children: /*#__PURE__*/ f(E, {
                                  className: `framer-ap2q1w-container`,
                                  "data-framer-name": `Right · Lena M.`,
                                  inComponentSlot: !0,
                                  layoutDependency: v,
                                  layoutId: `UPS_tct2H-container`,
                                  name: `Right · Lena M.`,
                                  nodeId: `UPS_tct2H`,
                                  rendersWithMotion: !0,
                                  scopeId: `g5c5DlO2J`,
                                  children: /*#__PURE__*/ f(G, {
                                    a22ntmVgr: `LM`,
                                    height: `100%`,
                                    HQ_mjR75S: `“Three Morpheus8 sessions and my acne scars are finally soft. Nobody asks what I had done.”`,
                                    id: `UPS_tct2H`,
                                    JnclfRJJN: Q(
                                      {
                                        pixelHeight: 800,
                                        pixelWidth: 800,
                                        src: `../../assets/illustrations/shaga-haircut-women.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 512w,../../assets/illustrations/shaga-haircut-women.jpg 800w`,
                                      },
                                      `Lena M.`
                                    ),
                                    k7cAmlFWF: `Morpheus8`,
                                    kHRtfvmgp: !0,
                                    layoutId: `UPS_tct2H`,
                                    name: `Right · Lena M.`,
                                    OrNru1UPQ: Q(
                                      {
                                        pixelHeight: 1493,
                                        pixelWidth: 2e3,
                                        src: `../../assets/illustrations/shaga-hero.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2000w`,
                                      },
                                      `Photo of Lena M.`
                                    ),
                                    RzbJKBKq4: `Lena M.`,
                                    style: { width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(O, {
                                height: 272,
                                width: `380px`,
                                children: /*#__PURE__*/ f(E, {
                                  className: `framer-jjqlk5-container`,
                                  "data-framer-name": `Right · Sofia R.`,
                                  inComponentSlot: !0,
                                  layoutDependency: v,
                                  layoutId: `zWsP2KWPK-container`,
                                  name: `Right · Sofia R.`,
                                  nodeId: `zWsP2KWPK`,
                                  rendersWithMotion: !0,
                                  scopeId: `g5c5DlO2J`,
                                  children: /*#__PURE__*/ f(G, {
                                    a22ntmVgr: `SR`,
                                    height: `100%`,
                                    HQ_mjR75S: `“I wanted to look rested, not different. That is exactly what happened.”`,
                                    id: `zWsP2KWPK`,
                                    JnclfRJJN: Q(
                                      {
                                        pixelHeight: 800,
                                        pixelWidth: 800,
                                        src: `../../assets/illustrations/shaga-hero.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 800w`,
                                      },
                                      `Sofia R.`
                                    ),
                                    k7cAmlFWF: `Neuromodulators`,
                                    kHRtfvmgp: !1,
                                    layoutId: `zWsP2KWPK`,
                                    name: `Right · Sofia R.`,
                                    OrNru1UPQ: Q(
                                      {
                                        pixelHeight: 1493,
                                        pixelWidth: 2e3,
                                        src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                      },
                                      `Photo of Sofia R.`
                                    ),
                                    RzbJKBKq4: `Sofia R.`,
                                    style: { width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(O, {
                                height: 272,
                                width: `380px`,
                                children: /*#__PURE__*/ f(E, {
                                  className: `framer-wn3z42-container`,
                                  "data-framer-name": `Right · Jess M.`,
                                  inComponentSlot: !0,
                                  layoutDependency: v,
                                  layoutId: `K0JVFL2iR-container`,
                                  name: `Right · Jess M.`,
                                  nodeId: `K0JVFL2iR`,
                                  rendersWithMotion: !0,
                                  scopeId: `g5c5DlO2J`,
                                  children: /*#__PURE__*/ f(G, {
                                    a22ntmVgr: `JM`,
                                    height: `100%`,
                                    HQ_mjR75S: `“I asked for a celebrity’s lips. She showed me what would suit my face instead. She was right.”`,
                                    id: `K0JVFL2iR`,
                                    JnclfRJJN: Q(
                                      {
                                        pixelHeight: 600,
                                        pixelWidth: 600,
                                        src: `../../assets/illustrations/shaga-hero.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 600w`,
                                      },
                                      `Jess M.`
                                    ),
                                    k7cAmlFWF: `Dermal filler`,
                                    kHRtfvmgp: !1,
                                    layoutId: `K0JVFL2iR`,
                                    name: `Right · Jess M.`,
                                    OrNru1UPQ: Q(
                                      {
                                        pixelHeight: 1493,
                                        pixelWidth: 2e3,
                                        src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                      },
                                      `Photo of Jess M.`
                                    ),
                                    RzbJKBKq4: `Jess M.`,
                                    style: { width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(O, {
                                height: 272,
                                width: `380px`,
                                children: /*#__PURE__*/ f(E, {
                                  className: `framer-1qiqfzj-container`,
                                  "data-framer-name": `Right · Marcus O.`,
                                  inComponentSlot: !0,
                                  layoutDependency: v,
                                  layoutId: `G4Wl2C8L6-container`,
                                  name: `Right · Marcus O.`,
                                  nodeId: `G4Wl2C8L6`,
                                  rendersWithMotion: !0,
                                  scopeId: `g5c5DlO2J`,
                                  children: /*#__PURE__*/ f(G, {
                                    a22ntmVgr: `MO`,
                                    height: `100%`,
                                    HQ_mjR75S: `“The written quote matched the bill to the dollar.”`,
                                    id: `G4Wl2C8L6`,
                                    JnclfRJJN: Q(
                                      {
                                        pixelHeight: 600,
                                        pixelWidth: 600,
                                        src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 600w`,
                                      },
                                      `Marcus O.`
                                    ),
                                    k7cAmlFWF: `Laser hair removal`,
                                    kHRtfvmgp: !1,
                                    layoutId: `G4Wl2C8L6`,
                                    name: `Right · Marcus O.`,
                                    OrNru1UPQ: Q(
                                      {
                                        pixelHeight: 1493,
                                        pixelWidth: 2e3,
                                        src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                      },
                                      `Photo of Marcus O.`
                                    ),
                                    RzbJKBKq4: `Marcus O.`,
                                    style: { width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ f(O, {
                                height: 272,
                                width: `380px`,
                                children: /*#__PURE__*/ f(E, {
                                  className: `framer-1pkgen8-container`,
                                  "data-framer-name": `Right · Elena P.`,
                                  inComponentSlot: !0,
                                  layoutDependency: v,
                                  layoutId: `hqMkDv4IF-container`,
                                  name: `Right · Elena P.`,
                                  nodeId: `hqMkDv4IF`,
                                  rendersWithMotion: !0,
                                  scopeId: `g5c5DlO2J`,
                                  children: /*#__PURE__*/ f(G, {
                                    a22ntmVgr: `EP`,
                                    height: `100%`,
                                    HQ_mjR75S: `“They told me to wait a month before the next peel. Nobody has ever told me to buy less.”`,
                                    id: `hqMkDv4IF`,
                                    JnclfRJJN: Q(
                                      {
                                        pixelHeight: 600,
                                        pixelWidth: 600,
                                        src: `../../assets/illustrations/shaga-hero.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 600w`,
                                      },
                                      `Elena P.`
                                    ),
                                    k7cAmlFWF: `Chemical peel`,
                                    kHRtfvmgp: !1,
                                    layoutId: `hqMkDv4IF`,
                                    name: `Right · Elena P.`,
                                    OrNru1UPQ: Q(
                                      {
                                        pixelHeight: 1493,
                                        pixelWidth: 2e3,
                                        src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                      },
                                      `Photo of Elena P.`
                                    ),
                                    RzbJKBKq4: `Elena P.`,
                                    style: { width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            speed: 30,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    /*#__PURE__*/ f(y.div, {
                      className: `framer-zpdl03`,
                      "data-framer-name": `Fade`,
                      layoutDependency: v,
                      layoutId: `BrU1PmRg8`,
                      style: {
                        background: `linear-gradient(180deg, rgb(42, 28, 22) 0%, rgb(42, 28, 22) 6%, rgba(42, 28, 22, 0) 32%, rgba(42, 28, 22, 0) 68%, rgb(42, 28, 22) 94%, rgb(42, 28, 22) 100%)`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-mlMBB.framer-1dpcs7y, .framer-mlMBB .framer-1dpcs7y { display: block; }`,
          `.framer-mlMBB.framer-w6zbcp { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 900px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 780px; }`,
          `.framer-mlMBB .framer-10v5tyk-container, .framer-mlMBB .framer-di52nk-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-mlMBB .framer-69eqmg-container, .framer-mlMBB .framer-1rwf7x6-container, .framer-mlMBB .framer-1kszsns-container, .framer-mlMBB .framer-57llmd-container, .framer-mlMBB .framer-dn8u1o-container, .framer-mlMBB .framer-17xu7vf-container, .framer-mlMBB .framer-1nj04sf-container, .framer-mlMBB .framer-ap2q1w-container, .framer-mlMBB .framer-jjqlk5-container, .framer-mlMBB .framer-wn3z42-container, .framer-mlMBB .framer-1qiqfzj-container, .framer-mlMBB .framer-1pkgen8-container { height: auto; position: relative; width: 380px; }`,
          `.framer-mlMBB .framer-zpdl03 { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
          `.framer-mlMBB.framer-v-j4vwgy.framer-w6zbcp { width: 390px; }`,
          `.framer-mlMBB.framer-v-j4vwgy .framer-10v5tyk-container { flex: none; width: 100%; }`,
        ],
        `framer-mlMBB`
      )),
      ($.displayName = `Reviews Marquee`),
      ($.defaultProps = { height: 900, width: 780 }),
      de($, {
        variant: {
          options: [`bArZbYC3O`, `OQhYiX07q`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: j.Enum,
        },
      }),
      le($, [{ explicitInter: !0, fonts: [] }, ...rn, ...an], { supportsExplicitInterCodegen: !0 }),
      ($.loader = { load: (e, t) => A([() => ue(G, {}, t)], t) }));
  }))();
}
export { rt as i, hn as n, K as r, $ as t };
//# sourceMappingURL=g5c5DlO2J.InBSVsj4.mjs.map
