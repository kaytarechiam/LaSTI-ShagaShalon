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
  B as g,
  Ct as _,
  D as v,
  K as y,
  O as b,
  St as x,
  gt as S,
  j as C,
  lt as w,
  o as T,
  p as E,
  w as D,
  z as O,
} from "./framer.BMzpwY9X.mjs";
import {
  dt as k,
  ft as A,
  g as j,
  h as M,
  it as N,
  lt as P,
  m as F,
  nt as I,
  p as L,
  rt as ee,
  tt as te,
  ut as ne,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { i as re, n as ie, r as ae, t as oe } from "./yxzhfN2Rg.W01ar6hl.mjs";
import { i as se, n as ce, r as R, t as z } from "./fDFW1yf2_.DpxVG90C.mjs";
var B, V, H, U, W, G, K, q, J;
function le() {
  return (le = e(() => {
    (l(),
      y(),
      p(),
      r(),
      (B = `framer-5n8di`),
      (V = { kiaQJrTOm: `framer-v-1a50moz` }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: t });
      }),
      (G = m.create(t)),
      (K = ({ height: e, id: t, photo: n, width: r, ...i }) => ({
        ...i,
        EyG0LUreN: n ??
          i.EyG0LUreN ?? {
            pixelHeight: 2e3,
            pixelWidth: 1493,
            src: `../../assets/illustrations/shaga-haircut-women.jpg`,
            srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 764w,../../assets/illustrations/shaga-haircut-women.jpg 1493w`,
          },
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = _(
        /* @__PURE__ */ c(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = u(),
            { activeLocale: c, setLocale: l } = S(),
            f = w(),
            { style: p, className: _, layoutId: v, variant: y, EyG0LUreN: b, ...C } = K(e),
            {
              baseVariant: T,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = x({ defaultVariant: `kiaQJrTOm`, ref: r, variant: y, variantClassNames: V }),
            F = q(e, P),
            I = h(B);
          return /*#__PURE__*/ s(d, {
            id: v ?? a,
            children: /*#__PURE__*/ s(G, {
              animate: P,
              initial: !1,
              children: /*#__PURE__*/ s(W, {
                value: H,
                children: /*#__PURE__*/ o(m.div, {
                  ...C,
                  ...k,
                  className: h(I, `framer-1a50moz`, _, D),
                  "data-framer-name": `Default`,
                  layoutDependency: F,
                  layoutId: `kiaQJrTOm`,
                  ref: r,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...p },
                  children: [
                    /*#__PURE__*/ s(m.div, {
                      className: `framer-8b3nk8`,
                      "data-framer-name": `Line`,
                      layoutDependency: F,
                      layoutId: `mUImjTECP`,
                      style: {
                        backgroundColor: `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                      },
                    }),
                    /*#__PURE__*/ s(E, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: g((f?.y || 0) + ((f?.height || 92) - 92) / 2),
                        pixelHeight: 2e3,
                        pixelWidth: 1493,
                        sizes: `132px`,
                        ...U(b),
                      },
                      className: `framer-6y7sxh`,
                      "data-framer-name": `Photo`,
                      layoutDependency: F,
                      layoutId: `UCnma1DEI`,
                      style: {
                        borderBottomLeftRadius: 999,
                        borderBottomRightRadius: 999,
                        borderTopLeftRadius: 999,
                        borderTopRightRadius: 999,
                      },
                    }),
                    /*#__PURE__*/ s(m.div, {
                      className: `framer-1w38pxk`,
                      "data-framer-name": `Line`,
                      layoutDependency: F,
                      layoutId: `ymEXX1__3`,
                      style: {
                        backgroundColor: `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-5n8di.framer-iiymbj, .framer-5n8di .framer-iiymbj { display: block; }`,
          `.framer-5n8di.framer-1a50moz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px 0px 28px 0px; position: relative; width: 200px; }`,
          `.framer-5n8di .framer-8b3nk8, .framer-5n8di .framer-1w38pxk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
          `.framer-5n8di .framer-6y7sxh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 64px; justify-content: flex-start; padding: 0px; position: relative; width: 132px; }`,
        ],
        `framer-5n8di`
      )),
      (J.displayName = `Fact Divider`),
      (J.defaultProps = { height: 92, width: 200 }),
      b(J, {
        EyG0LUreN: {
          __defaultAssetReference: `data:framer/asset-reference,wV63W7hymSRkMCmNGFMQYnbLTc.jpg?originalFilename=imported.jpg&width=1493&height=2000`,
          title: `Photo`,
          type: T.ResponsiveImage,
        },
      }),
      v(J, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
var ue, de, fe, pe;
function me() {
  return (me = e(() => {
    (y(),
      C.loadFonts([`GF;Fraunces-variable-regular`]),
      (ue = [
        { defaultValue: 9, maxValue: 144, minValue: 9, name: `Optical Size`, tag: `opsz` },
        { defaultValue: 900, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
        { defaultValue: 0, maxValue: 100, minValue: 0, name: `Softness`, tag: `SOFT` },
        { defaultValue: 1, maxValue: 1, minValue: 0, name: `Wonky`, tag: `WONK` },
      ]),
      (de = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Fraunces Variable`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fraunces`,
              url: `../../assets/fonts/6NUV8FyLNQOQZAnv9awKnugMyM1A.woff2`,
              variationAxes: ue,
              weight: `400`,
            },
          ],
        },
      ]),
      (fe = [
        `.framer-TuYwJ .framer-styles-preset-d5dqav:not(.rich-text-wrapper), .framer-TuYwJ .framer-styles-preset-d5dqav.rich-text-wrapper p { --framer-font-family: "Fraunces Variable", "Fraunces Variable Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 340, "opsz" 72; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-TuYwJ .framer-styles-preset-d5dqav:not(.rich-text-wrapper), .framer-TuYwJ .framer-styles-preset-d5dqav.rich-text-wrapper p { --framer-font-family: "Fraunces Variable", "Fraunces Variable Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 340, "opsz" 72; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-TuYwJ .framer-styles-preset-d5dqav:not(.rich-text-wrapper), .framer-TuYwJ .framer-styles-preset-d5dqav.rich-text-wrapper p { --framer-font-family: "Fraunces Variable", "Fraunces Variable Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 340, "opsz" 72; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
      ]),
      (pe = `framer-TuYwJ`));
  }))();
}
var he, ge, _e, Y, ve, ye, be, xe, Se, Ce, X;
function we() {
  return (we = e(() => {
    (l(),
      y(),
      p(),
      r(),
      N(),
      A(),
      j(),
      re(),
      (he = `framer-c8Zhs`),
      (ge = { ylbHR8GOp: `framer-v-17sqehz` }),
      (_e = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ve = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: t });
      }),
      (ye = m.create(t)),
      (be = ({
        avatar: e,
        height: t,
        id: n,
        initials: r,
        name1: i,
        photo: a,
        quote: o,
        showPhoto: s,
        treatment: c,
        width: l,
        ...u
      }) => ({
        ...u,
        a22ntmVgr: r ?? u.a22ntmVgr ?? `MR`,
        HQ_mjR75S:
          o ??
          u.HQ_mjR75S ??
          `“I came in with a list of worries and left with a one-page plan and a price. Nothing was pushed.”`,
        JnclfRJJN: e ?? u.JnclfRJJN,
        k7cAmlFWF: c ?? u.k7cAmlFWF ?? `Neuromodulators`,
        kHRtfvmgp: s ?? u.kHRtfvmgp ?? !1,
        OrNru1UPQ: a ??
          u.OrNru1UPQ ?? {
            pixelHeight: 1493,
            pixelWidth: 2e3,
            src: `../../assets/illustrations/shaga-haircut-men.jpg`,
            srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
          },
        RzbJKBKq4: i ?? u.RzbJKBKq4 ?? `Maya R.`,
      })),
      (xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Se = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, contentLocale: f, setLocale: p } = S(),
          _ = w(),
          {
            style: v,
            className: y,
            layoutId: b,
            variant: C,
            HQ_mjR75S: T,
            a22ntmVgr: O,
            RzbJKBKq4: k,
            k7cAmlFWF: A,
            OrNru1UPQ: j,
            kHRtfvmgp: M,
            JnclfRJJN: N,
            ...F
          } = be(e),
          {
            baseVariant: I,
            classNames: ee,
            clearLoadingGesture: ne,
            gestureHandlers: re,
            gestureVariant: ie,
            isLoading: ae,
            setGestureState: se,
            setVariant: ce,
            variants: R,
          } = x({ defaultVariant: `ylbHR8GOp`, ref: a, variant: C, variantClassNames: ge }),
          z = xe(e, R),
          B = h(he, te, oe, P, L);
        return /*#__PURE__*/ s(d, {
          id: b ?? c,
          children: /*#__PURE__*/ s(ye, {
            animate: R,
            initial: !1,
            children: /*#__PURE__*/ s(ve, {
              value: _e,
              children: /*#__PURE__*/ o(m.div, {
                ...F,
                ...re,
                className: h(B, `framer-17sqehz`, y, ee),
                "data-border": !0,
                "data-framer-name": `Default`,
                layoutDependency: z,
                layoutId: `ylbHR8GOp`,
                ref: a,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-551456fa-52ba-4745-84c4-84b4174abab4)`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  borderBottomLeftRadius: 22,
                  borderBottomRightRadius: 22,
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
                  ...v,
                },
                children: [
                  M !== !1 &&
                    /*#__PURE__*/ s(E, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: g((_?.y || 0) + 30),
                        pixelHeight: 1493,
                        pixelWidth: 2e3,
                        sizes: `calc(${_?.width || `100vw`} - 60px)`,
                        ...Y(j),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-5z8x7a`,
                      "data-framer-name": `Photo`,
                      layoutDependency: z,
                      layoutId: `RS9XEvC6W`,
                      style: {
                        borderBottomLeftRadius: 14,
                        borderBottomRightRadius: 14,
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                      },
                    }),
                  /*#__PURE__*/ s(m.div, {
                    className: `framer-19p9dwz`,
                    "data-framer-name": `Top`,
                    layoutDependency: z,
                    layoutId: `qtliJZEn5`,
                    children: /*#__PURE__*/ s(D, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ s(t, {
                        children: /*#__PURE__*/ s(m.p, {
                          className: `framer-styles-preset-j520p6`,
                          "data-styles-preset": `KO8C83HIN`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc))`,
                          },
                          children: `★★★★★`,
                        }),
                      }),
                      className: `framer-104iwok`,
                      fonts: [`Inter`],
                      layoutDependency: z,
                      layoutId: `HoN3flb6L`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                  /*#__PURE__*/ s(D, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ s(t, {
                      children: /*#__PURE__*/ s(m.p, {
                        className: `framer-styles-preset-19oisb3`,
                        "data-styles-preset": `yxzhfN2Rg`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `start`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                        },
                        children: `“I came in with a list of worries and left with a one-page plan and a price. Nothing was pushed.”`,
                      }),
                    }),
                    className: `framer-x1l4zq`,
                    "data-framer-name": `Quote`,
                    fonts: [`Inter`],
                    layoutDependency: z,
                    layoutId: `Wn_FACtxQ`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                    },
                    text: T,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  /*#__PURE__*/ o(m.div, {
                    className: `framer-7u2mko`,
                    "data-border": !0,
                    "data-framer-name": `Person`,
                    layoutDependency: z,
                    layoutId: `opmcvn7Oj`,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `var(--token-551456fa-52ba-4745-84c4-84b4174abab4)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                    },
                    children: [
                      /*#__PURE__*/ o(m.div, {
                        className: `framer-1lrlfh2`,
                        "data-framer-name": `Avatar`,
                        layoutDependency: z,
                        layoutId: `nwE6DOIDL`,
                        style: {
                          backgroundColor: `var(--token-50b752a5-d450-43b1-93de-239a71db7f37)`,
                          borderBottomLeftRadius: `50%`,
                          borderBottomRightRadius: `50%`,
                          borderTopLeftRadius: `50%`,
                          borderTopRightRadius: `50%`,
                        },
                        children: [
                          /*#__PURE__*/ s(D, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(m.p, {
                                className: `framer-styles-preset-gyt55z`,
                                "data-styles-preset": `u9_0JRzz7`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                },
                                children: `Initials`,
                              }),
                            }),
                            className: `framer-o1nyup`,
                            fonts: [`Inter`],
                            layoutDependency: z,
                            layoutId: `ilrmV1VmY`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                            },
                            text: O,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ s(E, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: g((_?.y || 0) + 288.3),
                              sizes: `48px`,
                              ...Y(N),
                            },
                            className: `framer-w9aczx`,
                            "data-framer-name": `Photo`,
                            layoutDependency: z,
                            layoutId: `mORiZmBQ7`,
                          }),
                        ],
                      }),
                      /*#__PURE__*/ o(m.div, {
                        className: `framer-1amicbl`,
                        "data-framer-name": `Name`,
                        layoutDependency: z,
                        layoutId: `B6EJOqcRQ`,
                        children: [
                          /*#__PURE__*/ s(D, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(m.p, {
                                className: `framer-styles-preset-o6ajd0`,
                                "data-styles-preset": `wOh4XL4ux`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                },
                                children: `Name`,
                              }),
                            }),
                            className: `framer-1uxyk72`,
                            fonts: [`Inter`],
                            layoutDependency: z,
                            layoutId: `cnJZa8q6r`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                            },
                            text: k,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ s(D, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(m.p, {
                                className: `framer-styles-preset-gyt55z`,
                                "data-styles-preset": `u9_0JRzz7`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d))`,
                                },
                                children: `Treatment`,
                              }),
                            }),
                            className: `framer-19l22u6`,
                            fonts: [`Inter`],
                            layoutDependency: z,
                            layoutId: `fr5EcBu8I`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-b8b88974-e8c8-420a-ab0e-fe094e74c68d)`,
                            },
                            text: A,
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
          }),
        });
      })),
      (Ce = [
        `.framer-c8Zhs.framer-4ae9v9, .framer-c8Zhs .framer-4ae9v9 { display: block; }`,
        `.framer-c8Zhs.framer-17sqehz { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 420px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-c8Zhs .framer-5z8x7a { align-content: flex-start; align-items: flex-start; aspect-ratio: 1.23 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-c8Zhs .framer-19p9dwz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-c8Zhs .framer-104iwok, .framer-c8Zhs .framer-o1nyup, .framer-c8Zhs .framer-1uxyk72 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-c8Zhs .framer-x1l4zq, .framer-c8Zhs .framer-19l22u6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-c8Zhs .framer-7u2mko { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-c8Zhs .framer-1lrlfh2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-c8Zhs .framer-w9aczx { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-c8Zhs .framer-1amicbl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        ...I,
        ...ie,
        ...ne,
        ...F,
        `.framer-c8Zhs[data-border="true"]::after, .framer-c8Zhs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (X = _(Se, Ce, `framer-c8Zhs`)),
      (X.displayName = `Review Card`),
      (X.defaultProps = { height: 272, width: 420 }),
      b(X, {
        HQ_mjR75S: {
          defaultValue: `“I came in with a list of worries and left with a one-page plan and a price. Nothing was pushed.”`,
          title: `Quote`,
          type: T.String,
        },
        onHQ_mjR75SChange: { changes: `HQ_mjR75S`, type: T.ChangeHandler },
        a22ntmVgr: { defaultValue: `MR`, title: `Initials`, type: T.String },
        ona22ntmVgrChange: { changes: `a22ntmVgr`, type: T.ChangeHandler },
        RzbJKBKq4: { defaultValue: `Maya R.`, title: `Name`, type: T.String },
        onRzbJKBKq4Change: { changes: `RzbJKBKq4`, type: T.ChangeHandler },
        k7cAmlFWF: { defaultValue: `Neuromodulators`, title: `Treatment`, type: T.String },
        onk7cAmlFWFChange: { changes: `k7cAmlFWF`, type: T.ChangeHandler },
        OrNru1UPQ: {
          __defaultAssetReference: `data:framer/asset-reference,AMOBr83CVD9VHTucOvG5myWtlgs.jpg?originalFilename=imported.jpg&width=2000&height=1493`,
          title: `Photo`,
          type: T.ResponsiveImage,
        },
        kHRtfvmgp: { defaultValue: !1, title: `Show Photo`, type: T.Boolean },
        onkHRtfvmgpChange: { changes: `kHRtfvmgp`, type: T.ChangeHandler },
        JnclfRJJN: { title: `Avatar`, type: T.ResponsiveImage },
      }),
      v(
        X,
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
          ...O(ee),
          ...O(ae),
          ...O(k),
          ...O(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Te, Ee, De, Oe, ke, Z, Ae, je, Me, Q;
function Ne() {
  return (Ne = e(() => {
    (l(),
      y(),
      p(),
      r(),
      se(),
      A(),
      (Te = `framer-rMzof`),
      (Ee = { dHWWRdz20: `framer-v-1azez5i` }),
      (De = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Oe = ({ value: e, children: t }) => {
        let r = a(f),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(f.Provider, { value: o, children: t });
      }),
      (ke = m.create(t)),
      (Z = ({ height: e, id: t, label: n, value: r, width: i, ...a }) => ({
        ...a,
        AeFtYKYLL: r ?? a.AeFtYKYLL ?? `12`,
        GVIEQSJvp: n ?? a.GVIEQSJvp ?? `Years board-certified`,
      })),
      (Ae = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (je = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, setLocale: f } = S();
        w();
        let {
            style: p,
            className: g,
            layoutId: _,
            variant: v,
            AeFtYKYLL: y,
            GVIEQSJvp: b,
            ...C
          } = Z(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: O,
            gestureHandlers: k,
            gestureVariant: A,
            isLoading: j,
            setGestureState: M,
            setVariant: N,
            variants: F,
          } = x({ defaultVariant: `dHWWRdz20`, ref: a, variant: v, variantClassNames: Ee }),
          I = Ae(e, F),
          L = h(Te, z, P);
        return /*#__PURE__*/ s(d, {
          id: _ ?? c,
          children: /*#__PURE__*/ s(ke, {
            animate: F,
            initial: !1,
            children: /*#__PURE__*/ s(Oe, {
              value: De,
              children: /*#__PURE__*/ o(m.div, {
                ...C,
                ...k,
                className: h(L, `framer-1azez5i`, g, E),
                "data-framer-name": `Default`,
                layoutDependency: I,
                layoutId: `dHWWRdz20`,
                ref: a,
                style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...p },
                children: [
                  /*#__PURE__*/ s(D, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ s(t, {
                      children: /*#__PURE__*/ s(m.p, {
                        className: `framer-styles-preset-1g5ryjr`,
                        "data-styles-preset": `fDFW1yf2_`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                        },
                        children: `Value`,
                      }),
                    }),
                    className: `framer-mo55kt`,
                    fonts: [`Inter`],
                    layoutDependency: I,
                    layoutId: `xi8KFRASY`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                    },
                    text: y,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  /*#__PURE__*/ s(D, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ s(t, {
                      children: /*#__PURE__*/ s(m.p, {
                        className: `framer-styles-preset-gyt55z`,
                        "data-styles-preset": `u9_0JRzz7`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `start`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                        },
                        children: `Label`,
                      }),
                    }),
                    className: `framer-17w6ywx`,
                    fonts: [`Inter`],
                    layoutDependency: I,
                    layoutId: `C_uZ7tPnl`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                    },
                    text: b,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Me = [
        `.framer-rMzof.framer-wc6yai, .framer-rMzof .framer-wc6yai { display: block; }`,
        `.framer-rMzof.framer-1azez5i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-rMzof .framer-mo55kt, .framer-rMzof .framer-17w6ywx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...ce,
        ...ne,
      ]),
      (Q = _(je, Me, `framer-rMzof`)),
      (Q.displayName = `Fact`),
      (Q.defaultProps = { height: 200, width: 200 }),
      b(Q, {
        AeFtYKYLL: { defaultValue: `12`, title: `Value`, type: T.String },
        onAeFtYKYLLChange: { changes: `AeFtYKYLL`, type: T.ChangeHandler },
        GVIEQSJvp: { defaultValue: `Years board-certified`, title: `Label`, type: T.String },
        onGVIEQSJvpChange: { changes: `GVIEQSJvp`, type: T.ChangeHandler },
      }),
      v(
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
          ...O(R),
          ...O(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Pe, Fe, Ie, Le;
function $() {
  return ($ = e(() => {
    (y(),
      C.loadFonts([
        `GF;Fraunces-variable-italic`,
        `GF;Fraunces-700italic`,
        `GF;Fraunces-700italic`,
        `GF;Fraunces-italic`,
      ]),
      (Pe = [
        { defaultValue: 9, maxValue: 144, minValue: 9, name: `Optical Size`, tag: `opsz` },
        { defaultValue: 900, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
        { defaultValue: 0, maxValue: 100, minValue: 0, name: `Softness`, tag: `SOFT` },
        { defaultValue: 1, maxValue: 1, minValue: 0, name: `Wonky`, tag: `WONK` },
      ]),
      (Fe = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Fraunces Variable`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Fraunces`,
              url: `../../assets/fonts/6NUT8FyLNQOQZAnv9ZwNlOkuzd1AZtw.woff2`,
              variationAxes: Pe,
              weight: `400`,
            },
            {
              cssFamilyName: `Fraunces`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Fraunces`,
              url: `../../assets/fonts/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9sPEKsxx664UJf1i-423c1a.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Fraunces`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Fraunces`,
              url: `../../assets/fonts/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9sPEKsxx664UJf1h-af62ff.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ie = [
        `.framer-JusFd .framer-styles-preset-qf2w4c:not(.rich-text-wrapper), .framer-JusFd .framer-styles-preset-qf2w4c.rich-text-wrapper h2 { --framer-font-family: "Fraunces Variable", "Fraunces Variable Placeholder", serif; --framer-font-family-bold: "Fraunces", "Fraunces Placeholder", serif; --framer-font-family-bold-italic: "Fraunces", "Fraunces Placeholder", serif; --framer-font-family-italic: "Fraunces", "Fraunces Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 68px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.022em; --framer-line-height: 1.04em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-50b752a5-d450-43b1-93de-239a71db7f37); --framer-text-decoration: underline; --framer-text-decoration-color: var(--token-50b752a5-d450-43b1-93de-239a71db7f37); --framer-text-decoration-offset: 0.2em; --framer-text-decoration-thickness: 2px; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-JusFd .framer-styles-preset-qf2w4c:not(.rich-text-wrapper), .framer-JusFd .framer-styles-preset-qf2w4c.rich-text-wrapper h2 { --framer-font-family: "Fraunces Variable", "Fraunces Variable Placeholder", serif; --framer-font-family-bold: "Fraunces", "Fraunces Placeholder", serif; --framer-font-family-bold-italic: "Fraunces", "Fraunces Placeholder", serif; --framer-font-family-italic: "Fraunces", "Fraunces Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 52px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.022em; --framer-line-height: 1.04em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-50b752a5-d450-43b1-93de-239a71db7f37); --framer-text-decoration: underline; --framer-text-decoration-color: var(--token-50b752a5-d450-43b1-93de-239a71db7f37); --framer-text-decoration-offset: 0.2em; --framer-text-decoration-thickness: 2px; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-JusFd .framer-styles-preset-qf2w4c:not(.rich-text-wrapper), .framer-JusFd .framer-styles-preset-qf2w4c.rich-text-wrapper h2 { --framer-font-family: "Fraunces Variable", "Fraunces Variable Placeholder", serif; --framer-font-family-bold: "Fraunces", "Fraunces Placeholder", serif; --framer-font-family-bold-italic: "Fraunces", "Fraunces Placeholder", serif; --framer-font-family-italic: "Fraunces", "Fraunces Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 38px; --framer-font-style: italic; --framer-font-style-bold: italic; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.022em; --framer-line-height: 1.05em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-50b752a5-d450-43b1-93de-239a71db7f37); --framer-text-decoration: underline; --framer-text-decoration-color: var(--token-50b752a5-d450-43b1-93de-239a71db7f37); --framer-text-decoration-offset: 0.2em; --framer-text-decoration-thickness: 2px; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Le = `framer-JusFd`));
  }))();
}
export {
  Q as a,
  we as c,
  de as d,
  me as f,
  $ as i,
  pe as l,
  le as m,
  Ie as n,
  Ne as o,
  J as p,
  Fe as r,
  X as s,
  Le as t,
  fe as u,
};
//# sourceMappingURL=X3fgrz8an.CBCMsicO.mjs.map
