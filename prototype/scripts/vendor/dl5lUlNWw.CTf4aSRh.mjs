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
  w as ee,
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
  lt as oe,
  o as y,
  p as b,
  w as x,
  z as S,
} from "./framer.BMzpwY9X.mjs";
import {
  F as C,
  I as w,
  J as T,
  L as E,
  P as D,
  X as O,
  Y as k,
  _ as se,
  b as A,
  dt as j,
  ft as M,
  g as N,
  h as P,
  it as ce,
  lt as le,
  m as F,
  nt as I,
  p as ue,
  q as de,
  rt as fe,
  tt as pe,
  ut as me,
  v as he,
  y as L,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { i as R, n as z, r as B, t as ge } from "./yxzhfN2Rg.W01ar6hl.mjs";
function V(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var H, U, W, G, K, q, J, Y, X, Z, Q, _e, ve, ye, be, $;
function xe() {
  return (xe = e(() => {
    (l(),
      g(),
      ne(),
      r(),
      E(),
      C(),
      ce(),
      A(),
      O(),
      M(),
      N(),
      R(),
      (H = v(D)),
      (U = v(w)),
      (W = { lfRqphgBn: { hover: !0 }, TrcM604Ev: { hover: !0 }, YACx1dhiG: { hover: !0 } }),
      (G = [`lfRqphgBn`, `TrcM604Ev`, `YACx1dhiG`]),
      (K = `framer-AyYaT`),
      (q = {
        lfRqphgBn: `framer-v-11vi0o0`,
        TrcM604Ev: `framer-v-72xvvu`,
        YACx1dhiG: `framer-v-1x0g3h5`,
      }),
      (J = { delay: 0, duration: 0.6, ease: [0.45, 0, 0.55, 1], type: `tween` }),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (X = ({ value: e, children: t }) => {
        let r = a(u),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(u.Provider, { value: o, children: t });
      }),
      (Z = { Default: `lfRqphgBn`, Featured: `YACx1dhiG`, Tall: `TrcM604Ev` }),
      (Q = d.create(t)),
      (_e = ({
        author: e,
        authorPhoto: t,
        category: n,
        date: r,
        excerpt: i,
        height: a,
        id: o,
        link: s,
        photo: c,
        readTime: l,
        title: ee,
        width: te,
        ...u
      }) => ({
        ...u,
        A1gbFSbT_: r ?? u.A1gbFSbT_ ?? `Oct 21, 2026`,
        B4iOH3JRS: ee ?? u.B4iOH3JRS ?? `What actually happens in your first consultation`,
        jznP6SThg: l ?? u.jznP6SThg ?? `6 min read`,
        KvJWACCub: n ?? u.KvJWACCub ?? `Treatments`,
        o8VEkkgkr: s ?? u.o8VEkkgkr,
        Tn2sn6R7I:
          i ??
          u.Tn2sn6R7I ??
          `Forty-five minutes, a skin map and a written plan. Here is the visit, minute by minute.`,
        variant: Z[u.variant] ?? u.variant ?? `lfRqphgBn`,
        vC84bcKBY: c ??
          u.vC84bcKBY ?? {
            pixelHeight: 2e3,
            pixelWidth: 1493,
            src: `../../assets/illustrations/shaga-consultation.jpg`,
            srcSet: `../../assets/illustrations/shaga-consultation.jpg 764w,../../assets/illustrations/shaga-consultation.jpg 1493w`,
          },
        wb3mkMnzT: e ?? u.wb3mkMnzT ?? `Dr. Iris Calloway`,
        wNjhOV4f1: t ??
          u.wNjhOV4f1 ?? {
            pixelHeight: 2e3,
            pixelWidth: 1493,
            src: `../../assets/illustrations/shaga-capster-woman.jpg`,
            srcSet: `../../assets/illustrations/shaga-capster-woman.jpg 764w,../../assets/illustrations/shaga-capster-woman.jpg 1493w`,
          },
      })),
      (ve = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ye = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = ee(),
          { activeLocale: l, contentLocale: u, setLocale: ne } = ae(),
          m = oe(),
          {
            style: h,
            className: g,
            layoutId: _,
            variant: v,
            vC84bcKBY: y,
            A1gbFSbT_: S,
            B4iOH3JRS: C,
            Tn2sn6R7I: T,
            KvJWACCub: E,
            jznP6SThg: O,
            wb3mkMnzT: k,
            wNjhOV4f1: A,
            o8VEkkgkr: j,
            ...M
          } = _e(e),
          {
            baseVariant: N,
            classNames: P,
            clearLoadingGesture: ce,
            gestureHandlers: F,
            gestureVariant: I,
            isLoading: fe,
            setGestureState: me,
            setVariant: he,
            variants: L,
          } = re({
            cycleOrder: G,
            defaultVariant: `lfRqphgBn`,
            enabledGestures: W,
            ref: a,
            variant: v,
            variantClassNames: q,
          }),
          R = ve(e, L),
          z = f(K, le, de, se, ue, ge, pe),
          B = () => I === `YACx1dhiG-hover` || N === `YACx1dhiG`;
        return /*#__PURE__*/ s(te, {
          id: _ ?? c,
          children: /*#__PURE__*/ s(Q, {
            animate: L,
            initial: !1,
            children: /*#__PURE__*/ s(X, {
              value: J,
              children: /*#__PURE__*/ s(ie, {
                href: j,
                motionChild: !0,
                nodeId: `lfRqphgBn`,
                scopeId: `dl5lUlNWw`,
                children: /*#__PURE__*/ o(d.a, {
                  ...M,
                  ...F,
                  className: `${f(z, `framer-11vi0o0`, g, P)} framer-6sn3ft`,
                  "data-framer-name": `Default`,
                  layoutDependency: R,
                  layoutId: `lfRqphgBn`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    ...h,
                  },
                  variants: {
                    "lfRqphgBn-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    "TrcM604Ev-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    YACx1dhiG: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                      borderBottomLeftRadius: 28,
                      borderBottomRightRadius: 28,
                      borderTopLeftRadius: 28,
                      borderTopRightRadius: 28,
                    },
                  },
                  ...V(
                    {
                      "lfRqphgBn-hover": { "data-framer-name": void 0 },
                      "TrcM604Ev-hover": { "data-framer-name": void 0 },
                      "YACx1dhiG-hover": { "data-framer-name": void 0 },
                      TrcM604Ev: { "data-framer-name": `Tall` },
                      YACx1dhiG: { "data-border": !0, "data-framer-name": `Featured` },
                    },
                    N,
                    I
                  ),
                  children: [
                    /*#__PURE__*/ o(d.div, {
                      className: `framer-1a1a619`,
                      "data-framer-name": `Photo`,
                      layoutDependency: R,
                      layoutId: `PhtT0Bkqx`,
                      style: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 18,
                        borderBottomRightRadius: 18,
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                      },
                      variants: {
                        YACx1dhiG: {
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                      },
                      children: [
                        /*#__PURE__*/ s(b, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: p(m?.y || 0),
                            pixelHeight: 2e3,
                            pixelWidth: 1493,
                            sizes: m?.width || `100vw`,
                            ...Y(y),
                          },
                          className: `framer-19r8syi`,
                          "data-framer-name": `Zoom`,
                          layoutDependency: R,
                          layoutId: `uiTZUSk6N`,
                          style: { scale: 1 },
                          variants: {
                            "lfRqphgBn-hover": { scale: 1.05 },
                            "TrcM604Ev-hover": { scale: 1.05 },
                            "YACx1dhiG-hover": { scale: 1.05 },
                          },
                          ...V(
                            {
                              YACx1dhiG: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: p((m?.y || 0) + 16),
                                  pixelHeight: 2e3,
                                  pixelWidth: 1493,
                                  sizes: `max(${m?.width || `100vw`} - 32px, 300px)`,
                                  ...Y(y),
                                },
                              },
                            },
                            N,
                            I
                          ),
                        }),
                        /*#__PURE__*/ s(d.div, {
                          className: `framer-1ttd8tn`,
                          "data-framer-name": `Category chip`,
                          layoutDependency: R,
                          layoutId: `TCOv_CppL`,
                          style: {
                            backgroundColor: `var(--token-664c932f-0824-490a-ad68-61125df693ee)`,
                            borderBottomLeftRadius: 999,
                            borderBottomRightRadius: 999,
                            borderTopLeftRadius: 999,
                            borderTopRightRadius: 999,
                          },
                          children: /*#__PURE__*/ s(x, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(d.p, {
                                className: `framer-styles-preset-gyt55z`,
                                "data-styles-preset": `u9_0JRzz7`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                                },
                                children: `Treatments`,
                              }),
                            }),
                            className: `framer-74b2fq`,
                            fonts: [`Inter`],
                            layoutDependency: R,
                            layoutId: `PswOVNgVn`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                            },
                            text: E,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ s(d.div, {
                      className: `framer-3j15tr`,
                      "data-framer-name": `Text`,
                      layoutDependency: R,
                      layoutId: `EUsu1KbFq`,
                      children: /*#__PURE__*/ o(d.div, {
                        className: `framer-nkm83y`,
                        "data-framer-name": `Top`,
                        layoutDependency: R,
                        layoutId: `Y1kjzDXvu`,
                        children: [
                          /*#__PURE__*/ o(d.div, {
                            className: `framer-1azsopb`,
                            "data-framer-name": `Meta`,
                            layoutDependency: R,
                            layoutId: `iy158sgsn`,
                            children: [
                              /*#__PURE__*/ o(d.div, {
                                className: `framer-a4rku9`,
                                "data-framer-name": `Calendar Blank`,
                                layoutDependency: R,
                                layoutId: `JWwCfLTgP`,
                                children: [
                                  /*#__PURE__*/ s(D, {
                                    animated: !0,
                                    className: `framer-1r6tzyg`,
                                    layoutDependency: R,
                                    layoutId: `OWZsxQJYU`,
                                    style: {
                                      "--1m6trwb": 0,
                                      "--21h8s6": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                      "--pgex8v": 1.5,
                                    },
                                  }),
                                  /*#__PURE__*/ s(x, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ s(t, {
                                      children: /*#__PURE__*/ s(d.p, {
                                        className: `framer-styles-preset-gyt55z`,
                                        "data-styles-preset": `u9_0JRzz7`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                                        },
                                        children: `Oct 21, 2026`,
                                      }),
                                    }),
                                    className: `framer-1w2jlg8`,
                                    fonts: [`Inter`],
                                    layoutDependency: R,
                                    layoutId: `IwaN7DxgI`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                    },
                                    text: S,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ o(d.div, {
                                className: `framer-15b7g9q`,
                                "data-framer-name": `Clock`,
                                layoutDependency: R,
                                layoutId: `MFTiMex3a`,
                                children: [
                                  /*#__PURE__*/ s(w, {
                                    animated: !0,
                                    className: `framer-1u2j1o8`,
                                    layoutDependency: R,
                                    layoutId: `ycFYVFtkZ`,
                                    style: {
                                      "--1m6trwb": 0,
                                      "--21h8s6": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                      "--pgex8v": 1.5,
                                    },
                                  }),
                                  /*#__PURE__*/ s(x, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ s(t, {
                                      children: /*#__PURE__*/ s(d.p, {
                                        className: `framer-styles-preset-gyt55z`,
                                        "data-styles-preset": `u9_0JRzz7`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                                        },
                                        children: `6 min read`,
                                      }),
                                    }),
                                    className: `framer-1l5q61q`,
                                    fonts: [`Inter`],
                                    layoutDependency: R,
                                    layoutId: `eHcOUhAl4`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                    },
                                    text: O,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ s(x, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(d.h3, {
                                className: `framer-styles-preset-94eeon`,
                                "data-styles-preset": `SFS3lU2AV`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                                },
                                children: `Title`,
                              }),
                            }),
                            className: `framer-1tyzd8g`,
                            fonts: [`Inter`],
                            layoutDependency: R,
                            layoutId: `Su4wdDiww`,
                            style: {
                              "--extracted-a0htzi": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                            },
                            text: C,
                            variants: {
                              YACx1dhiG: {
                                "--extracted-1of0zx5": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...V(
                              {
                                YACx1dhiG: {
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(d.h2, {
                                      className: `framer-styles-preset-6v63kf`,
                                      "data-styles-preset": `LxN6valwV`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                                      },
                                      children: `What actually happens in your first consultation`,
                                    }),
                                  }),
                                },
                              },
                              N,
                              I
                            ),
                          }),
                          /*#__PURE__*/ s(x, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(d.p, {
                                className: `framer-styles-preset-o6ajd0`,
                                "data-styles-preset": `wOh4XL4ux`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                                },
                                children: `Forty-five minutes, a skin map and a written plan. Here is the visit, minute by minute.`,
                              }),
                            }),
                            className: `framer-18t92an`,
                            fonts: [`Inter`],
                            layoutDependency: R,
                            layoutId: `ZIwEBT2qy`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                            },
                            text: T,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...V(
                              {
                                YACx1dhiG: {
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(d.p, {
                                      className: `framer-styles-preset-19oisb3`,
                                      "data-styles-preset": `yxzhfN2Rg`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                                      },
                                      children: `Forty-five minutes, a skin map and a written plan. Here is the visit, minute by minute.`,
                                    }),
                                  }),
                                },
                              },
                              N,
                              I
                            ),
                          }),
                          B() &&
                            /*#__PURE__*/ o(d.div, {
                              className: `framer-1g3bhk5`,
                              "data-framer-name": `Byline`,
                              layoutDependency: R,
                              layoutId: `dVKjw_Uzg`,
                              children: [
                                /*#__PURE__*/ s(b, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    pixelHeight: 2e3,
                                    pixelWidth: 1493,
                                    sizes: `32px`,
                                    ...Y(A),
                                  },
                                  className: `framer-3l0vwn`,
                                  "data-framer-name": `Avatar`,
                                  layoutDependency: R,
                                  layoutId: `EPwuWK02l`,
                                  style: {
                                    borderBottomLeftRadius: 999,
                                    borderBottomRightRadius: 999,
                                    borderTopLeftRadius: 999,
                                    borderTopRightRadius: 999,
                                  },
                                  ...V(
                                    {
                                      YACx1dhiG: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: p((m?.y || 0) + 296.2),
                                          pixelHeight: 2e3,
                                          pixelWidth: 1493,
                                          sizes: `32px`,
                                          ...Y(A),
                                        },
                                      },
                                    },
                                    N,
                                    I
                                  ),
                                }),
                                /*#__PURE__*/ s(x, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(d.p, {
                                      className: `framer-styles-preset-j520p6`,
                                      "data-styles-preset": `KO8C83HIN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                                      },
                                      children: `Dr. Iris Calloway`,
                                    }),
                                  }),
                                  className: `framer-1h711zp`,
                                  fonts: [`Inter`],
                                  layoutDependency: R,
                                  layoutId: `iBnCzZDUH`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                  },
                                  text: k,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (be = [
        `.framer-AyYaT.framer-6sn3ft, .framer-AyYaT .framer-6sn3ft { display: block; }`,
        `.framer-AyYaT.framer-11vi0o0 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 320px; }`,
        `.framer-AyYaT .framer-1a1a619 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 260px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-AyYaT .framer-19r8syi { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; pointer-events: auto; position: absolute; right: 0px; top: 0px; }`,
        `.framer-AyYaT .framer-1ttd8tn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 14px; padding: 6px 12px 6px 12px; position: absolute; top: 14px; width: min-content; }`,
        `.framer-AyYaT .framer-74b2fq, .framer-AyYaT .framer-1w2jlg8, .framer-AyYaT .framer-1l5q61q, .framer-AyYaT .framer-1h711zp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-AyYaT .framer-3j15tr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AyYaT .framer-nkm83y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AyYaT .framer-1azsopb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-AyYaT .framer-a4rku9, .framer-AyYaT .framer-15b7g9q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-AyYaT .framer-1r6tzyg, .framer-AyYaT .framer-1u2j1o8 { flex: none; height: auto; position: relative; width: 14px; }`,
        `.framer-AyYaT .framer-1tyzd8g { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AyYaT .framer-18t92an { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AyYaT .framer-1g3bhk5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 8px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-AyYaT .framer-3l0vwn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 32px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-AyYaT.framer-v-72xvvu .framer-1a1a619 { height: 440px; }`,
        `.framer-AyYaT.framer-v-1x0g3h5.framer-11vi0o0 { align-content: center; align-items: center; flex-direction: row; flex-wrap: wrap; gap: 28px 56px; padding: 16px; width: 1200px; }`,
        `.framer-AyYaT.framer-v-1x0g3h5 .framer-1a1a619 { aspect-ratio: 1.35 / 1; flex: 1 0 0px; height: auto; min-width: 300px; width: 1px; }`,
        `.framer-AyYaT.framer-v-1x0g3h5 .framer-3j15tr { flex: 1 0 0px; min-width: 280px; padding: 0px 40px 0px 0px; width: 1px; }`,
        `.framer-AyYaT.framer-v-1x0g3h5 .framer-nkm83y { gap: 18px; }`,
        ...me,
        ...T,
        ...he,
        ...F,
        ...z,
        ...I,
        `.framer-AyYaT[data-border="true"]::after, .framer-AyYaT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      ($ = m(ye, be, `framer-AyYaT`)),
      ($.displayName = `Journal Card`),
      ($.defaultProps = { height: 519, width: 320 }),
      _($, {
        variant: {
          options: [`lfRqphgBn`, `TrcM604Ev`, `YACx1dhiG`],
          optionTitles: [`Default`, `Tall`, `Featured`],
          title: `Variant`,
          type: y.Enum,
        },
        vC84bcKBY: {
          __defaultAssetReference: `data:framer/asset-reference,etkyzUGjpmXYhfpbqvQvJSOJWrM.jpg?originalFilename=imported.jpg&width=1493&height=2000`,
          title: `Photo`,
          type: y.ResponsiveImage,
        },
        A1gbFSbT_: { defaultValue: `Oct 21, 2026`, title: `Date`, type: y.String },
        onA1gbFSbT_Change: { changes: `A1gbFSbT_`, type: y.ChangeHandler },
        B4iOH3JRS: {
          defaultValue: `What actually happens in your first consultation`,
          title: `Title`,
          type: y.String,
        },
        onB4iOH3JRSChange: { changes: `B4iOH3JRS`, type: y.ChangeHandler },
        Tn2sn6R7I: {
          defaultValue: `Forty-five minutes, a skin map and a written plan. Here is the visit, minute by minute.`,
          title: `Excerpt`,
          type: y.String,
        },
        onTn2sn6R7IChange: { changes: `Tn2sn6R7I`, type: y.ChangeHandler },
        KvJWACCub: { defaultValue: `Treatments`, title: `Category`, type: y.String },
        onKvJWACCubChange: { changes: `KvJWACCub`, type: y.ChangeHandler },
        jznP6SThg: { defaultValue: `6 min read`, title: `Read Time`, type: y.String },
        onjznP6SThgChange: { changes: `jznP6SThg`, type: y.ChangeHandler },
        wb3mkMnzT: { defaultValue: `Dr. Iris Calloway`, title: `Author`, type: y.String },
        onwb3mkMnzTChange: { changes: `wb3mkMnzT`, type: y.ChangeHandler },
        wNjhOV4f1: {
          __defaultAssetReference: `data:framer/asset-reference,7UesCufdgk7ttTbeqMyOSH1isJQ.jpg?originalFilename=imported.jpg&width=1493&height=2000`,
          title: `Author Photo`,
          type: y.ResponsiveImage,
        },
        o8VEkkgkr: { title: `Link`, type: y.Link },
      }),
      h(
        $,
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
          ...H,
          ...U,
          ...S(j),
          ...S(k),
          ...S(L),
          ...S(P),
          ...S(B),
          ...S(fe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { xe as n, $ as t };
//# sourceMappingURL=dl5lUlNWw.CTf4aSRh.mjs.map
