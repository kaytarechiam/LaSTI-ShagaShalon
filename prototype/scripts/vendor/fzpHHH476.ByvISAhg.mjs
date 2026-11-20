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
import { i as u, o as d, t as f, w as p } from "./motion.CyGOoZcc.mjs";
import {
  A as m,
  B as h,
  Ct as g,
  D as _,
  K as v,
  O as y,
  St as b,
  g as x,
  gt as S,
  lt as C,
  m as w,
  o as T,
  p as E,
  w as D,
  z as O,
} from "./framer.BMzpwY9X.mjs";
import { dt as k, ft as A, lt as j, ut as M } from "./toplevel-deps.TwMXxJp8.mjs";
import { i as N, n as P, r as F, t as I } from "./yxzhfN2Rg.W01ar6hl.mjs";
import { r as L, t as R } from "./bpn3X3frq.BQ_RR3Vp.mjs";
function te(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z, B, V, H, U, W, G, K, q, J, Y, X;
function Z() {
  return (Z = e(() => {
    (l(),
      v(),
      f(),
      r(),
      L(),
      A(),
      N(),
      (z = { hP5q2_i5F: { hover: !0 } }),
      (B = `framer-FH2bZ`),
      (V = { hP5q2_i5F: `framer-v-1ctv1r` }),
      (H = { delay: 0, duration: 0.6, ease: [0.45, 0, 0.55, 1], type: `tween` }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (G = p.create(t)),
      (K = ({
        height: e,
        icon: t,
        id: n,
        link: r,
        name1: i,
        photo: a,
        treatment: o,
        width: s,
        ...c
      }) => ({
        ...c,
        AncJC6AVS: t ?? c.AncJC6AVS ?? R,
        cnGRoVFss: o ?? c.cnGRoVFss ?? `Neuromodulators`,
        ghOhfXgUv: r ?? c.ghOhfXgUv,
        jPQf8ZtlX: a ??
          c.jPQf8ZtlX ?? {
            pixelHeight: 2e3,
            pixelWidth: 1493,
            src: `../../assets/illustrations/shaga-haircut-women.jpg`,
            srcSet: `../../assets/illustrations/shaga-haircut-women.jpg 764w,../../assets/illustrations/shaga-haircut-women.jpg 1493w`,
          },
        QDUx22GPS: i ?? c.QDUx22GPS ?? `Expression lines`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = ee(),
          { activeLocale: l, contentLocale: d, setLocale: f } = S(),
          g = C(),
          {
            style: _,
            className: v,
            layoutId: y,
            variant: T,
            jPQf8ZtlX: O,
            QDUx22GPS: k,
            cnGRoVFss: A,
            AncJC6AVS: M,
            ghOhfXgUv: N,
            ...P
          } = K(e),
          {
            baseVariant: F,
            classNames: L,
            clearLoadingGesture: R,
            gestureHandlers: J,
            gestureVariant: Y,
            isLoading: X,
            setGestureState: Z,
            setVariant: ne,
            variants: Q,
          } = b({
            defaultVariant: `hP5q2_i5F`,
            enabledGestures: z,
            ref: a,
            variant: T,
            variantClassNames: V,
          }),
          $ = q(e, Q),
          re = m(B, I, j);
        return /*#__PURE__*/ s(u, {
          id: y ?? c,
          children: /*#__PURE__*/ s(G, {
            animate: Q,
            initial: !1,
            children: /*#__PURE__*/ s(W, {
              value: H,
              children: /*#__PURE__*/ s(x, {
                href: N,
                motionChild: !0,
                nodeId: `hP5q2_i5F`,
                scopeId: `fzpHHH476`,
                children: /*#__PURE__*/ o(p.a, {
                  ...P,
                  ...J,
                  className: `${m(re, `framer-1ctv1r`, v, L)} framer-7ntaia`,
                  "data-framer-name": `Default`,
                  layoutDependency: $,
                  layoutId: `hP5q2_i5F`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ..._,
                  },
                  ...te({ "hP5q2_i5F-hover": { "data-framer-name": void 0 } }, F, Y),
                  children: [
                    /*#__PURE__*/ s(E, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: h(g?.y || 0),
                        pixelHeight: 2e3,
                        pixelWidth: 1493,
                        sizes: g?.width || `100vw`,
                        ...U(O),
                      },
                      className: `framer-1maj5fk`,
                      "data-framer-name": `Photo`,
                      layoutDependency: $,
                      layoutId: `g2paredBY`,
                      style: { scale: 1 },
                      variants: { "hP5q2_i5F-hover": { scale: 1.05 } },
                    }),
                    /*#__PURE__*/ s(p.div, {
                      className: `framer-a4e44t`,
                      "data-framer-name": `Shade`,
                      layoutDependency: $,
                      layoutId: `ZKcYkZEMt`,
                      style: {
                        background: `linear-gradient(180deg, var(--token-bcbab49e-e80e-4cfb-9500-211126fde345) 0%, rgba(0, 0, 0, 0) 26%, rgba(0, 0, 0, 0) 48%, var(--token-bcbab49e-e80e-4cfb-9500-211126fde345) 100%)`,
                      },
                    }),
                    /*#__PURE__*/ s(p.div, {
                      className: `framer-12g03vg`,
                      "data-framer-name": `Top`,
                      layoutDependency: $,
                      layoutId: `HPLvyDaEQ`,
                      children: /*#__PURE__*/ s(p.div, {
                        className: `framer-wsd4z6`,
                        "data-framer-name": `Number`,
                        layoutDependency: $,
                        layoutId: `KrU3pnPWl`,
                        style: {
                          backgroundColor: `var(--token-664c932f-0824-490a-ad68-61125df693ee)`,
                          borderBottomLeftRadius: 999,
                          borderBottomRightRadius: 999,
                          borderTopLeftRadius: 999,
                          borderTopRightRadius: 999,
                        },
                        children: /*#__PURE__*/ s(w, {
                          animated: !0,
                          className: `framer-wziju3`,
                          Component: M,
                          layoutDependency: $,
                          layoutId: `qHSUqXFK7`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                            "--pgex8v": 1.5,
                          },
                        }),
                      }),
                    }),
                    /*#__PURE__*/ o(p.div, {
                      className: `framer-mck554`,
                      "data-border": !0,
                      "data-framer-name": `Readout`,
                      layoutDependency: $,
                      layoutId: `aAh3j1qXk`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-1317da14-6e0e-422c-99dd-15e78f5337dd)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backdropFilter: `blur(14px)`,
                        backgroundColor: `var(--token-39d21343-8826-465e-8d5b-6fa6b1d7d216)`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        WebkitBackdropFilter: `blur(14px)`,
                      },
                      children: [
                        /*#__PURE__*/ s(p.div, {
                          className: `framer-sapvo7`,
                          "data-framer-name": `Concern`,
                          layoutDependency: $,
                          layoutId: `c7uqM6FB8`,
                          children: /*#__PURE__*/ s(D, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(p.p, {
                                className: `framer-styles-preset-19oisb3`,
                                "data-styles-preset": `yxzhfN2Rg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                                },
                                children: `Neuromodulators`,
                              }),
                            }),
                            className: `framer-13j4eax`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `w_LYza9y3`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                            },
                            text: A,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        /*#__PURE__*/ s(D, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(p.p, {
                              className: `framer-styles-preset-gyt55z`,
                              "data-styles-preset": `u9_0JRzz7`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `end`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2))`,
                              },
                              children: `Expression lines`,
                            }),
                          }),
                          className: `framer-tpx96z`,
                          "data-framer-name": `Concern`,
                          fonts: [`Inter`],
                          layoutDependency: $,
                          layoutId: `eDJ4SZyE3`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
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
            }),
          }),
        });
      })),
      (Y = [
        `.framer-FH2bZ.framer-7ntaia, .framer-FH2bZ .framer-7ntaia { display: block; }`,
        `.framer-FH2bZ.framer-1ctv1r { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; height: 540px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 400px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-FH2bZ .framer-1maj5fk { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-FH2bZ .framer-a4e44t { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        `.framer-FH2bZ .framer-12g03vg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: flex-end; padding: 24px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-FH2bZ .framer-wsd4z6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: center; padding: 0px; position: relative; width: 44px; }`,
        `.framer-FH2bZ .framer-wziju3 { flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-FH2bZ .framer-mck554 { align-content: center; align-items: center; bottom: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: 16px; padding: 18px 22px 18px 22px; position: absolute; right: 16px; }`,
        `.framer-FH2bZ .framer-sapvo7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-FH2bZ .framer-13j4eax { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-FH2bZ .framer-tpx96z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...P,
        ...M,
        `.framer-FH2bZ[data-border="true"]::after, .framer-FH2bZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (X = g(J, Y, `framer-FH2bZ`)),
      (X.displayName = `Concern Card`),
      (X.defaultProps = { height: 200, width: 200 }),
      y(X, {
        jPQf8ZtlX: {
          __defaultAssetReference: `data:framer/asset-reference,hf6VVJcFkkyxODxH43i4PoKraJI.jpg?originalFilename=imported.jpg&width=1493&height=2000`,
          title: `Photo`,
          type: T.ResponsiveImage,
        },
        QDUx22GPS: { defaultValue: `Expression lines`, title: `Name`, type: T.String },
        onQDUx22GPSChange: { changes: `QDUx22GPS`, type: T.ChangeHandler },
        cnGRoVFss: { defaultValue: `Neuromodulators`, title: `Treatment`, type: T.String },
        oncnGRoVFssChange: { changes: `cnGRoVFss`, type: T.ChangeHandler },
        AncJC6AVS: {
          defaultValue: {
            identifier: `module:q4Np134GCRBYMXpaoYO2/uJ2SNxwkjRN8F5IKNJDE/bpn3X3frq.js:default`,
            moduleId: `q4Np134GCRBYMXpaoYO2`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: T.VectorSetItem,
        },
        ghOhfXgUv: { title: `Link`, type: T.Link },
      }),
      _(
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
          ...O(F),
          ...O(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { Z as n, X as t };
//# sourceMappingURL=fzpHHH476.ByvISAhg.mjs.map
