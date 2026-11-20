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
  s as l,
  w as u,
} from "./react.BF5K0J5z.mjs";
import { i as d, o as f, t as p, w as m } from "./motion.CyGOoZcc.mjs";
import {
  A as h,
  Ct as g,
  D as _,
  K as v,
  O as y,
  St as b,
  gt as x,
  lt as S,
  m as C,
  o as w,
  w as T,
  xt as E,
  z as D,
} from "./framer.BMzpwY9X.mjs";
import { d as O, f as k, l as A, u as j } from "./toplevel-deps.TwMXxJp8.mjs";
var M, N, P, F, I, L, R;
function z() {
  return (z = e(() => {
    (l(),
      v(),
      r(),
      (M = `var(--framer-icon-mask)`),
      (N = /*#__PURE__*/ c(function (e, t) {
        return /*#__PURE__*/ s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (P = m.create(N)),
      (F = /*#__PURE__*/ c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ s(P, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ s(`svg`, { ...a, ref: t, children: i });
      })),
      (I = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.75 0 C 11.093 0 9.75 1.343 9.75 3 C 9.75 1.343 8.407 0 6.75 0 L 0 0 L 0 13.5 L 6.75 13.5 C 8.407 13.5 9.75 14.843 9.75 16.5 C 9.75 14.843 11.093 13.5 12.75 13.5 L 19.5 13.5 L 19.5 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="VaJ0SXoYw" transform="translate(2.25 5.25)" width="19.5px"/><path d="M 0 3 C 0 1.343 1.343 0 3 0 L 9.75 0 L 9.75 13.5 L 3 13.5 C 1.343 13.5 0 14.843 0 16.5" fill="transparent" height="16.5px" id="oAakIlfTx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 5.25)" width="9.75px"/><path d="M 0 13.5 L 6.75 13.5 C 8.407 13.5 9.75 14.843 9.75 16.5 L 9.75 3 C 9.75 1.343 8.407 0 6.75 0 L 0 0 Z" fill="transparent" height="16.5px" id="imv5_mFb8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 5.25)" width="9.75px"/></svg>`),
      (L = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (R = g(
        /* @__PURE__ */ c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: c,
              qxTvv_EBh: l,
              ...u
            } = L(e),
            d = E(`1523066278`, I);
          return /*#__PURE__*/ s(F, {
            ...u,
            className: h(`framer-0nw0H`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": o, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ s(`use`, { href: d }),
          });
        }),
        [
          `.framer-0nw0H { -webkit-mask: ${M}; aspect-ratio: 1; display: block; mask: ${M}; width: 24px; }`,
        ],
        `framer-0nw0H`
      )),
      (R.displayName = `Book Open`),
      y(R, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: w.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: w.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: w.Number,
        },
      }));
  }))();
}
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      v(),
      p(),
      r(),
      z(),
      k(),
      (V = [`cMc9E2xro`, `A8h2Yr3rT`]),
      (H = `framer-afeim`),
      (U = { A8h2Yr3rT: `framer-v-1x38jv5`, cMc9E2xro: `framer-v-q4hxqo` }),
      (W = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: t });
      }),
      (K = { Dark: `A8h2Yr3rT`, Light: `cMc9E2xro` }),
      (q = m.create(t)),
      (J = ({ height: e, icon: t, id: n, label: r, width: i, ...a }) => ({
        ...a,
        a3s5gDorS: r ?? a.a3s5gDorS ?? `Journal`,
        PEYR80g6u: t ?? a.PEYR80g6u ?? R,
        variant: K[a.variant] ?? a.variant ?? `cMc9E2xro`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, setLocale: f } = x();
        S();
        let {
            style: p,
            className: g,
            layoutId: _,
            variant: v,
            a3s5gDorS: y,
            PEYR80g6u: w,
            ...E
          } = J(e),
          {
            baseVariant: D,
            classNames: O,
            clearLoadingGesture: k,
            gestureHandlers: j,
            gestureVariant: M,
            isLoading: N,
            setGestureState: P,
            setVariant: F,
            variants: I,
          } = b({
            cycleOrder: V,
            defaultVariant: `cMc9E2xro`,
            ref: a,
            variant: v,
            variantClassNames: U,
          }),
          L = Y(e, I),
          R = h(H, A);
        return /*#__PURE__*/ s(d, {
          id: _ ?? c,
          children: /*#__PURE__*/ s(q, {
            animate: I,
            initial: !1,
            children: /*#__PURE__*/ s(G, {
              value: W,
              children: /*#__PURE__*/ o(m.div, {
                ...E,
                ...j,
                className: h(R, `framer-q4hxqo`, g, O),
                "data-border": !0,
                "data-framer-name": `Light`,
                layoutDependency: L,
                layoutId: `cMc9E2xro`,
                ref: a,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  borderBottomLeftRadius: 999,
                  borderBottomRightRadius: 999,
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  ...p,
                },
                variants: {
                  A8h2Yr3rT: {
                    "--border-color": `var(--token-1317da14-6e0e-422c-99dd-15e78f5337dd)`,
                  },
                },
                ...B({ A8h2Yr3rT: { "data-framer-name": `Dark` } }, D, M),
                children: [
                  /*#__PURE__*/ s(C, {
                    animated: !0,
                    className: `framer-5iv0cx`,
                    Component: w,
                    layoutDependency: L,
                    layoutId: `iL_Voe1sO`,
                    style: {
                      "--1m6trwb": 0,
                      "--21h8s6": `var(--token-50b752a5-d450-43b1-93de-239a71db7f37)`,
                      "--pgex8v": 1.5,
                    },
                    variants: {
                      A8h2Yr3rT: {
                        "--21h8s6": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                      },
                    },
                  }),
                  /*#__PURE__*/ s(T, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ s(t, {
                      children: /*#__PURE__*/ s(m.p, {
                        className: `framer-styles-preset-1ciny6v`,
                        "data-styles-preset": `yCBTX755L`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                        },
                        children: `Label`,
                      }),
                    }),
                    className: `framer-1um75j4`,
                    fonts: [`Inter`],
                    layoutDependency: L,
                    layoutId: `hAOVkVq89`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                    },
                    text: y,
                    variants: {
                      A8h2Yr3rT: {
                        "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...B(
                      {
                        A8h2Yr3rT: {
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(m.p, {
                              className: `framer-styles-preset-1ciny6v`,
                              "data-styles-preset": `yCBTX755L`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                              },
                              children: `Journal`,
                            }),
                          }),
                        },
                      },
                      D,
                      M
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Z = [
        `.framer-afeim.framer-1dec12b, .framer-afeim .framer-1dec12b { display: block; }`,
        `.framer-afeim.framer-q4hxqo { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 7px 14px 7px 12px; position: relative; width: min-content; }`,
        `.framer-afeim .framer-5iv0cx { flex: none; height: auto; position: relative; width: 15px; }`,
        `.framer-afeim .framer-1um75j4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...j,
        `.framer-afeim[data-border="true"]::after, .framer-afeim [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Q = g(X, Z, `framer-afeim`)),
      (Q.displayName = `Section Tag`),
      (Q.defaultProps = { height: 200, width: 200 }),
      y(Q, {
        variant: {
          options: [`cMc9E2xro`, `A8h2Yr3rT`],
          optionTitles: [`Light`, `Dark`],
          title: `Variant`,
          type: w.Enum,
        },
        a3s5gDorS: { defaultValue: `Journal`, title: `Label`, type: w.String },
        ona3s5gDorSChange: { changes: `a3s5gDorS`, type: w.ChangeHandler },
        PEYR80g6u: {
          defaultValue: {
            identifier: `module:qhWZAwyugx39NcwtdcVx/YN8Vy3gl7tlg56RJstIm/TZmLlAtWc.js:default`,
            moduleId: `qhWZAwyugx39NcwtdcVx`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: w.VectorSetItem,
        },
      }),
      _(
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
          ...D(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { z as i, $ as n, R as r, Q as t };
//# sourceMappingURL=XT2HPNEkm.Bbn4Mve7.mjs.map
