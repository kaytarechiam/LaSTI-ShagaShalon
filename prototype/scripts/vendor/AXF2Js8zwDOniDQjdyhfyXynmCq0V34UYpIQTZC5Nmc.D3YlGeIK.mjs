import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as ee,
  T as n,
  b as r,
  j as i,
  l as a,
  o,
  p as s,
  s as c,
  w as te,
} from "./react.BF5K0J5z.mjs";
import { i as ne, o as re, t as ie, w as l } from "./motion.CyGOoZcc.mjs";
import {
  A as u,
  B as ae,
  C as oe,
  Ct as d,
  D as se,
  Et as f,
  K as p,
  M as m,
  R as h,
  Tt as g,
  _t as ce,
  a as _,
  bt as le,
  d as v,
  dt as ue,
  gt as de,
  i as y,
  lt as fe,
  mt as b,
  nt as x,
  p as S,
  pt as pe,
  w as C,
  x as w,
  yt as me,
  z as T,
} from "./framer.BMzpwY9X.mjs";
import { G as E, K as D, it as O, nt as k, rt as A, tt as he } from "./toplevel-deps.TwMXxJp8.mjs";
import { i as j, n as M, r as ge, t as _e } from "./yxzhfN2Rg.W01ar6hl.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./hAFZAFG_T.ClbRb6mR.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./Y9102JqgO.BXaERxvH.mjs";
import { n as Ee, r as De } from "./Nk7ATPIe1.C1h3bsZZ.mjs";
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Oe, ke, Q, Ae;
function $() {
  return ($ = e(() => {
    (c(),
      p(),
      ie(),
      n(),
      D(),
      ve(),
      O(),
      Se(),
      j(),
      Ee(),
      (N = g(S)),
      (P = f(C)),
      (F = h(E)),
      (I = f(l.div)),
      (L = {
        fnnl3vwxM: `(min-width: 1200px)`,
        KmDnkNuKo: `(min-width: 810px) and (max-width: 1199.98px)`,
        pnOxLM9S6: `(max-width: 809.98px)`,
      }),
      (R = []),
      (z = `framer-MqFw8`),
      (B = {
        fnnl3vwxM: `framer-v-1b4pgvj`,
        KmDnkNuKo: `framer-v-max0f`,
        pnOxLM9S6: `framer-v-1x2jw76`,
      }),
      (V = (e, t, ee) => (e && t ? `position` : ee)),
      (H = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.4, duration: 1.2, ease: [0.2, 0.7, 0.2, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (U = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 56,
      }),
      (W = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.55, duration: 1.2, ease: [0.2, 0.7, 0.2, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (G = {
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
      (K = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.75, duration: 1.2, ease: [0.2, 0.7, 0.2, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (q = {
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
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Y = { Desktop: `fnnl3vwxM`, Phone: `pnOxLM9S6`, Tablet: `KmDnkNuKo` }),
      (X = ({ value: e }) =>
        b()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Z = ({ height: e, id: t, width: ee, ...n }) => ({
        ...n,
        variant: Y[n.variant] ?? n.variant ?? `fnnl3vwxM`,
      })),
      (Oe = /*#__PURE__*/ s(function (e, n) {
        let s = r(null),
          c = n ?? s;
        te();
        let { activeLocale: ie, contentLocale: d, setLocale: se } = de(),
          f = fe(),
          { style: p, className: m, layoutId: h, variant: g, ...b } = Z(e),
          x = ee(() => De({}, d), [d]);
        ce(x);
        let [S, T] = pe(g, L, !1),
          D = u(z, Te, xe, _e, he),
          O = i(v)?.isLayoutTemplate,
          k = !!i(re)?.transition?.layout,
          A = V(O, k),
          j = me(`cQginEAzB`),
          M = r(null);
        return (
          le(),
          ue({}),
          /*#__PURE__*/ o(v.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Y,
              primaryVariantId: `fnnl3vwxM`,
              variantClassNames: B,
            },
            children: /*#__PURE__*/ a(ne, {
              id: h ?? `Nk7ATPIe1`,
              children: [
                /*#__PURE__*/ o(X, { value: `html body { background: none; }` }),
                /*#__PURE__*/ o(l.div, {
                  ...b,
                  className: u(D, `framer-1b4pgvj`, m),
                  ref: c,
                  style: { ...p },
                  children: /*#__PURE__*/ o(l.main, {
                    className: `framer-8bt6jd`,
                    "data-framer-name": `Main`,
                    layout: A,
                    children: /*#__PURE__*/ a(`div`, {
                      className: `framer-16rzoj7`,
                      "data-framer-name": `Hero`,
                      id: j,
                      ref: M,
                      children: [
                        /*#__PURE__*/ o(N, {
                          __framer__spring: {
                            damping: 60,
                            delay: 0,
                            duration: 0.1,
                            ease: [0, 0, 1, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `tween`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 0.999,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 0.999,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1.25,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScroll`,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: `Laughing patient with curly hair talking with a clinician in a treatment room`,
                            fit: `fill`,
                            loading: ae(f?.y || 0),
                            pixelHeight: 1440,
                            pixelWidth: 2560,
                            sizes: f?.width || `100vw`,
                            src: `../../assets/illustrations/shaga-hero.jpg`,
                            srcSet: `../../assets/illustrations/shaga-hero.jpg 512w,../../assets/illustrations/shaga-hero.jpg 1024w,../../assets/illustrations/shaga-hero.jpg 2048w,../../assets/illustrations/shaga-hero.jpg 2560w`,
                          },
                          className: `framer-17fmpoy`,
                          "data-framer-name": `Photo`,
                        }),
                        /*#__PURE__*/ o(`div`, {
                          className: `framer-1128zta`,
                          "data-framer-name": `Shade`,
                        }),
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-11t3t2g`,
                          "data-framer-name": `Content`,
                          children: [
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1jhwngd`,
                              "data-framer-name": `Title`,
                              children: [
                                /*#__PURE__*/ o(P, {
                                  __fromCanvasComponent: !0,
                                  animate: H,
                                  children: /*#__PURE__*/ o(t, {
                                    children: /*#__PURE__*/ o(`h1`, {
                                      className: `framer-styles-preset-i1c9y9`,
                                      "data-styles-preset": `Y9102JqgO`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                      },
                                      children: `Thank you.`,
                                    }),
                                  }),
                                  className: `framer-uej349`,
                                  "data-framer-appear-id": `uej349`,
                                  fonts: [`Inter`],
                                  initial: U,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ o(P, {
                                  __fromCanvasComponent: !0,
                                  animate: W,
                                  children: /*#__PURE__*/ o(t, {
                                    children: /*#__PURE__*/ o(`h2`, {
                                      className: `framer-styles-preset-dtv0vy`,
                                      "data-styles-preset": `hAFZAFG_T`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                                      },
                                      children: `We’ll be in touch.`,
                                    }),
                                  }),
                                  className: `framer-19vvy24`,
                                  "data-framer-appear-id": `19vvy24`,
                                  fonts: [`Inter`],
                                  initial: G,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ a(I, {
                              animate: K,
                              className: `framer-1tctubd`,
                              "data-framer-appear-id": `1tctubd`,
                              "data-framer-name": `Intro`,
                              initial: q,
                              optimized: !0,
                              children: [
                                /*#__PURE__*/ o(C, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ o(t, {
                                    children: /*#__PURE__*/ o(`p`, {
                                      className: `framer-styles-preset-19oisb3`,
                                      "data-styles-preset": `yxzhfN2Rg`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-664c932f-0824-490a-ad68-61125df693ee)`,
                                      },
                                      children: `Your request is with our clinicians. Expect a reply within one business day, usually sooner.`,
                                    }),
                                  }),
                                  className: `framer-13euzk9`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ o(`div`, {
                                  className: `framer-9rs6fn`,
                                  "data-border": !0,
                                  "data-framer-name": `Sooner`,
                                  children: /*#__PURE__*/ o(C, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ o(t, {
                                      children: /*#__PURE__*/ o(`p`, {
                                        className: `framer-styles-preset-j520p6`,
                                        "data-styles-preset": `KO8C83HIN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
                                        },
                                        children: `Rather talk today? Call (212) 555-0193, Tue–Sat.`,
                                      }),
                                    }),
                                    className: `framer-ztdrtd`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ a(`div`, {
                                  className: `framer-1rb0sem`,
                                  "data-framer-name": `Buttons`,
                                  children: [
                                    /*#__PURE__*/ o(oe, {
                                      links: [
                                        {
                                          href: { webPageId: `Ld4UAG9tx` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Ld4UAG9tx` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Ld4UAG9tx` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ o(w, {
                                          breakpoint: S,
                                          overrides: {
                                            KmDnkNuKo: { y: void 0 },
                                            pnOxLM9S6: { y: void 0 },
                                          },
                                          children: /*#__PURE__*/ o(y, {
                                            height: 46,
                                            y: (f?.y || 0) + 898,
                                            children: /*#__PURE__*/ o(_, {
                                              className: `framer-lv0of8-container`,
                                              nodeId: `BiVZ7uEl3`,
                                              scopeId: `Nk7ATPIe1`,
                                              children: /*#__PURE__*/ o(w, {
                                                breakpoint: S,
                                                overrides: {
                                                  KmDnkNuKo: { cMEc6Dyax: e[1] },
                                                  pnOxLM9S6: { cMEc6Dyax: e[2] },
                                                },
                                                children: /*#__PURE__*/ o(E, {
                                                  cMEc6Dyax: e[0],
                                                  height: `100%`,
                                                  id: `BiVZ7uEl3`,
                                                  layoutId: `BiVZ7uEl3`,
                                                  O1Pum8WD2: `All treatments`,
                                                  style: { height: `100%` },
                                                  variant: J(`Djv49PUi5`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ o(oe, {
                                      links: [
                                        {
                                          href: { webPageId: `l2tkxitt1` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `l2tkxitt1` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `l2tkxitt1` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ o(w, {
                                          breakpoint: S,
                                          overrides: {
                                            KmDnkNuKo: { y: void 0 },
                                            pnOxLM9S6: { y: void 0 },
                                          },
                                          children: /*#__PURE__*/ o(y, {
                                            height: 46,
                                            y: (f?.y || 0) + 898,
                                            children: /*#__PURE__*/ o(_, {
                                              className: `framer-188pzkf-container`,
                                              nodeId: `bpHAp4udo`,
                                              scopeId: `Nk7ATPIe1`,
                                              children: /*#__PURE__*/ o(w, {
                                                breakpoint: S,
                                                overrides: {
                                                  KmDnkNuKo: { cMEc6Dyax: e[1] },
                                                  pnOxLM9S6: { cMEc6Dyax: e[2] },
                                                },
                                                children: /*#__PURE__*/ o(E, {
                                                  cMEc6Dyax: e[0],
                                                  height: `100%`,
                                                  id: `bpHAp4udo`,
                                                  layoutId: `bpHAp4udo`,
                                                  O1Pum8WD2: `Read the journal`,
                                                  variant: J(`Djv49PUi5`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
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
                }),
                /*#__PURE__*/ o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ke = [
        `.framer-MqFw8.framer-rtunoa, .framer-MqFw8 .framer-rtunoa { display: block; }`,
        `.framer-MqFw8.framer-1b4pgvj { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-MqFw8 .framer-8bt6jd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MqFw8 .framer-16rzoj7 { align-content: center; align-items: center; background-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-end; min-height: 620px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 56px 0px; position: sticky; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-MqFw8 .framer-17fmpoy { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-MqFw8 .framer-1128zta { background: linear-gradient(180deg, rgba(20, 14, 10, 0.25) 0%, rgba(20, 14, 10, 0) 35%, rgba(20, 14, 10, 0.78) 100%); bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-MqFw8 .framer-11t3t2g { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-MqFw8 .framer-1jhwngd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-MqFw8 .framer-uej349, .framer-MqFw8 .framer-19vvy24 { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MqFw8 .framer-1tctubd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 400px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MqFw8 .framer-13euzk9, .framer-MqFw8 .framer-ztdrtd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-MqFw8 .framer-9rs6fn { --border-bottom-width: 0px; --border-color: var(--token-1317da14-6e0e-422c-99dd-15e78f5337dd); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-MqFw8 .framer-1rb0sem { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-MqFw8 .framer-lv0of8-container { flex: none; height: 46px; position: relative; width: auto; }`,
        `.framer-MqFw8 .framer-188pzkf-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...Ce,
        ...ye,
        ...M,
        ...k,
        `.framer-MqFw8[data-border="true"]::after, .framer-MqFw8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-MqFw8.framer-1b4pgvj { width: 810px; } .framer-MqFw8 .framer-1tctubd { width: 320px; } .framer-MqFw8 .framer-1rb0sem { flex-wrap: wrap; gap: 12px; }}`,
        `@media (max-width: 809.98px) { .framer-MqFw8.framer-1b4pgvj { width: 390px; } .framer-MqFw8 .framer-11t3t2g { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; padding: 0px 20px 0px 20px; } .framer-MqFw8 .framer-1jhwngd, .framer-MqFw8 .framer-1tctubd { width: 100%; } .framer-MqFw8 .framer-uej349, .framer-MqFw8 .framer-19vvy24 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-MqFw8 .framer-1rb0sem { flex-wrap: wrap; gap: 12px; }}`,
      ]),
      (Q = d(Oe, ke, `framer-MqFw8`)),
      (Q.displayName = `Thank you`),
      (Q.defaultProps = { height: 800, width: 1200 }),
      se(
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
            ],
          },
          ...F,
          ...T(we),
          ...T(be),
          ...T(ge),
          ...T(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => x([() => m(E, {}, t)], t) }),
      (Ae = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerNk7ATPIe1`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1200`,
              framerAcceptsLayoutTemplate: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"KmDnkNuKo":{"layout":["fixed","auto"]},"pnOxLM9S6":{"layout":["fixed","auto"]}}}`,
              framerScrollSections: `{"cQginEAzB":{"pattern":":cQginEAzB","name":"thank-you-hero"}}`,
              framerIntrinsicHeight: `800`,
              framerResponsiveScreen: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerLayoutTemplateFlowEffect: `true`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Ae as __FramerMetadata__, Q as default, R as queryParamNames };
//# sourceMappingURL=AXF2Js8zwDOniDQjdyhfyXynmCq0V34UYpIQTZC5Nmc.D3YlGeIK.mjs.map
