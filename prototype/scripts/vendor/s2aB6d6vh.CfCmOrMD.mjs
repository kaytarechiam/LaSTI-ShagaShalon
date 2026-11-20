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
  z as E,
} from "./framer.BMzpwY9X.mjs";
import {
  I as D,
  J as O,
  L as k,
  X as A,
  Y as j,
  dt as M,
  ft as N,
  lt as P,
  q as F,
  ut as I,
} from "./toplevel-deps.TwMXxJp8.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R, z, B, V, H, U, W, G, K, q, J, Y;
function X() {
  return (X = e(() => {
    (l(),
      v(),
      p(),
      r(),
      k(),
      A(),
      N(),
      (R = [`bwQMbePQA`, `OeAaer0UQ`]),
      (z = `framer-U4mkh`),
      (B = { bwQMbePQA: `framer-v-2tcu4h`, OeAaer0UQ: `framer-v-14sncyn` }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: t });
      }),
      (U = { Dark: `OeAaer0UQ`, Light: `bwQMbePQA` }),
      (W = m.create(t)),
      (G = ({ height: e, icon: t, id: n, label: r, value: i, width: a, ...o }) => ({
        ...o,
        Akb4ncp_G: r ?? o.Akb4ncp_G ?? `Session`,
        hMFXnJHX0: i ?? o.hMFXnJHX0 ?? `60 min`,
        variant: U[o.variant] ?? o.variant ?? `bwQMbePQA`,
        z30uMy74T: t ?? o.z30uMy74T ?? D,
      })),
      (K = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, contentLocale: f, setLocale: p } = x();
        S();
        let {
            style: g,
            className: _,
            layoutId: v,
            variant: y,
            z30uMy74T: w,
            Akb4ncp_G: E,
            hMFXnJHX0: D,
            ...O
          } = G(e),
          {
            baseVariant: k,
            classNames: A,
            clearLoadingGesture: j,
            gestureHandlers: M,
            gestureVariant: N,
            isLoading: I,
            setGestureState: U,
            setVariant: q,
            variants: J,
          } = b({
            cycleOrder: R,
            defaultVariant: `bwQMbePQA`,
            ref: a,
            variant: y,
            variantClassNames: B,
          }),
          Y = K(e, J),
          X = h(z, P, F);
        return /*#__PURE__*/ s(d, {
          id: v ?? c,
          children: /*#__PURE__*/ s(W, {
            animate: J,
            initial: !1,
            children: /*#__PURE__*/ s(H, {
              value: V,
              children: /*#__PURE__*/ o(m.div, {
                ...O,
                ...M,
                className: h(X, `framer-2tcu4h`, _, A),
                "data-border": !0,
                "data-framer-name": `Light`,
                layoutDependency: Y,
                layoutId: `bwQMbePQA`,
                ref: a,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  background: `linear-gradient(135deg, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109) 0%, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109) 100%)`,
                  backgroundColor: `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  ...g,
                },
                variants: {
                  OeAaer0UQ: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-top-width": `0px`,
                    background: `linear-gradient(135deg, rgb(90, 66, 55) 0%, rgb(42, 28, 22) 72%)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                  },
                },
                ...L({ OeAaer0UQ: { "data-framer-name": `Dark` } }, k, N),
                children: [
                  /*#__PURE__*/ s(m.div, {
                    className: `framer-vmnarf`,
                    "data-framer-name": `Icon`,
                    layoutDependency: Y,
                    layoutId: `REsycaozV`,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-48ec8add-2964-415f-b6f4-23e765ef0b4e)`,
                      borderBottomLeftRadius: `50%`,
                      borderBottomRightRadius: `50%`,
                      borderTopLeftRadius: `50%`,
                      borderTopRightRadius: `50%`,
                    },
                    variants: {
                      OeAaer0UQ: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-1317da14-6e0e-422c-99dd-15e78f5337dd)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-aa27c467-2c68-4379-9c68-35a277bee920)`,
                      },
                    },
                    ...L({ OeAaer0UQ: { "data-border": !0 } }, k, N),
                    children: /*#__PURE__*/ s(C, {
                      animated: !0,
                      className: `framer-4usvok`,
                      Component: w,
                      layoutDependency: Y,
                      layoutId: `uQNN53wZ7`,
                      style: {
                        "--1m6trwb": 0,
                        "--21h8s6": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                        "--pgex8v": 1.5,
                      },
                      variants: {
                        OeAaer0UQ: {
                          "--21h8s6": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                        },
                      },
                    }),
                  }),
                  /*#__PURE__*/ o(m.div, {
                    className: `framer-1thwyx0`,
                    "data-framer-name": `Text`,
                    layoutDependency: Y,
                    layoutId: `XckmI5dmG`,
                    children: [
                      /*#__PURE__*/ s(T, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(t, {
                          children: /*#__PURE__*/ s(m.p, {
                            className: `framer-styles-preset-gyt55z`,
                            "data-styles-preset": `u9_0JRzz7`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                            },
                            children: `Label`,
                          }),
                        }),
                        className: `framer-8d57pt`,
                        fonts: [`Inter`],
                        layoutDependency: Y,
                        layoutId: `iGd9u8MaC`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                        },
                        text: E,
                        variants: {
                          OeAaer0UQ: {
                            "--extracted-r6o4lv": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...L(
                          {
                            OeAaer0UQ: {
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(m.p, {
                                  className: `framer-styles-preset-gyt55z`,
                                  "data-styles-preset": `u9_0JRzz7`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2))`,
                                  },
                                  children: `Session`,
                                }),
                              }),
                            },
                          },
                          k,
                          N
                        ),
                      }),
                      /*#__PURE__*/ s(T, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(t, {
                          children: /*#__PURE__*/ s(m.h3, {
                            className: `framer-styles-preset-94eeon`,
                            "data-styles-preset": `SFS3lU2AV`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                            },
                            children: `Value`,
                          }),
                        }),
                        className: `framer-af9ve4`,
                        fonts: [`Inter`],
                        layoutDependency: Y,
                        layoutId: `w9r_eH94q`,
                        style: {
                          "--extracted-a0htzi": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                        },
                        text: D,
                        variants: {
                          OeAaer0UQ: {
                            "--extracted-a0htzi": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...L(
                          {
                            OeAaer0UQ: {
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(m.h3, {
                                  className: `framer-styles-preset-94eeon`,
                                  "data-styles-preset": `SFS3lU2AV`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `start`,
                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                  },
                                  children: `60 min`,
                                }),
                              }),
                            },
                          },
                          k,
                          N
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (J = [
        `.framer-U4mkh.framer-8v2uhv, .framer-U4mkh .framer-8v2uhv { display: block; }`,
        `.framer-U4mkh.framer-2tcu4h { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 200px; justify-content: space-between; padding: 22px 24px 22px 24px; position: relative; width: 240px; }`,
        `.framer-U4mkh .framer-vmnarf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: center; padding: 0px; position: relative; width: 44px; }`,
        `.framer-U4mkh .framer-4usvok { flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-U4mkh .framer-1thwyx0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-U4mkh .framer-8d57pt, .framer-U4mkh .framer-af9ve4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...I,
        ...O,
        `.framer-U4mkh[data-border="true"]::after, .framer-U4mkh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Y = g(q, J, `framer-U4mkh`)),
      (Y.displayName = `Fact Card`),
      (Y.defaultProps = { height: 200, width: 240 }),
      y(Y, {
        variant: {
          options: [`bwQMbePQA`, `OeAaer0UQ`],
          optionTitles: [`Light`, `Dark`],
          title: `Variant`,
          type: w.Enum,
        },
        z30uMy74T: {
          defaultValue: {
            identifier: `module:bNORwvR02wGMbARQ266w/8cSPQQ8U1lGNf08znwmV/P57b8hxa6.js:default`,
            moduleId: `bNORwvR02wGMbARQ266w`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: w.VectorSetItem,
        },
        Akb4ncp_G: { defaultValue: `Session`, title: `Label`, type: w.String },
        onAkb4ncp_GChange: { changes: `Akb4ncp_G`, type: w.ChangeHandler },
        hMFXnJHX0: { defaultValue: `60 min`, title: `Value`, type: w.String },
        onhMFXnJHX0Change: { changes: `hMFXnJHX0`, type: w.ChangeHandler },
      }),
      _(
        Y,
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
          ...E(M),
          ...E(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { X as n, Y as t };
//# sourceMappingURL=s2aB6d6vh.CfCmOrMD.mjs.map
