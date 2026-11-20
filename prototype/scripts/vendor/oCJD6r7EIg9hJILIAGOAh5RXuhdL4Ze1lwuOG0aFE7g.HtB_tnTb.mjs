import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as ee,
  w as te,
} from "./react.BF5K0J5z.mjs";
import { i as u, o as ne, t as re, w as d } from "./motion.CyGOoZcc.mjs";
import {
  $ as f,
  A as p,
  B as ie,
  C as ae,
  Ct as oe,
  D as m,
  K as h,
  M as g,
  R as _,
  Tt as v,
  _t as se,
  a as y,
  b as ce,
  bt as le,
  d as b,
  dt as ue,
  gt as de,
  i as x,
  lt as fe,
  mt as S,
  n as pe,
  nt as C,
  p as w,
  pt as me,
  rt as he,
  vt as T,
  w as E,
  x as D,
  yt as ge,
  z as O,
} from "./framer.BMzpwY9X.mjs";
import { _ as _e, b as k, v as A, y as j } from "./toplevel-deps.TwMXxJp8.mjs";
import { i as M, n as ve, r as ye, t as N } from "./XT2HPNEkm.Bbn4Mve7.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./yxzhfN2Rg.W01ar6hl.mjs";
import { n as we, t as P } from "./jA8svmMFq.D6Eaunnr.mjs";
import { i as Te, t as Ee } from "./EPFZL52vH.BhnkeW8G.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./hAFZAFG_T.ClbRb6mR.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./Y9102JqgO.BXaERxvH.mjs";
import { n as Fe, r as Ie } from "./dz2H5y2mp.CdB_T_n_.mjs";
var F, I, Le, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Re, ze, Z, Be, Q, Ve;
function $() {
  return ($ = e(() => {
    (ee(),
      h(),
      re(),
      r(),
      M(),
      we(),
      ve(),
      Te(),
      De(),
      k(),
      je(),
      be(),
      Fe(),
      (F = v(w)),
      (I = _(N)),
      (Le = _(P)),
      (L = v(d.div)),
      (R = {
        cixgZZWnN: `(max-width: 809.98px)`,
        stNa67AqV: `(min-width: 1200px)`,
        xWEKKWU3L: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (z = []),
      (B = `framer-LC6Zv`),
      (V = {
        cixgZZWnN: `framer-v-dwif87`,
        stNa67AqV: `framer-v-18myh8p`,
        xWEKKWU3L: `framer-v-1j7eadp`,
      }),
      (H = (e, t, n) => (e && t ? `position` : n)),
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (W = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 32,
      }),
      (G = { delay: 0.1, duration: 0.9, ease: [0.6, 0, 0.4, 1], type: `tween` }),
      (K = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 32,
      }),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (J = () => ({
        from: { alias: `GLJlXWdl8`, data: Ee, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [{ collection: `GLJlXWdl8`, name: `r3W58LNYm`, type: `Identifier` }],
        select: [
          { collection: `GLJlXWdl8`, name: `VJYrOQxim`, type: `Identifier` },
          { collection: `GLJlXWdl8`, name: `iVrRO9rRZ`, type: `Identifier` },
          { collection: `GLJlXWdl8`, name: `S8Sn8hvny`, type: `Identifier` },
          { collection: `GLJlXWdl8`, name: `F3_qMwrya`, type: `Identifier` },
          { collection: `GLJlXWdl8`, name: `FddT6kH0f`, type: `Identifier` },
          { collection: `GLJlXWdl8`, name: `id`, type: `Identifier` },
        ],
      })),
      (Y = ({ query: e, pageSize: t, children: n }) => n(T(e))),
      (X = { Desktop: `stNa67AqV`, Phone: `cixgZZWnN`, Tablet: `xWEKKWU3L` }),
      (Re = ({ value: e }) =>
        S()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (ze = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: X[r.variant] ?? r.variant ?? `stNa67AqV`,
      })),
      (Z = /*#__PURE__*/ l(function (e, r) {
        let l = i(null),
          ee = r ?? l;
        te();
        let { activeLocale: re, contentLocale: f, setLocale: oe } = de(),
          m = fe(),
          { style: h, className: g, layoutId: _, variant: v, ...S } = ze(e),
          C = n(() => Ie({}, f), [f]);
        se(C);
        let [w, he] = me(v, R, !1),
          T = p(B, Pe, Ae, Ce, _e),
          O = o(b)?.isLayoutTemplate,
          k = !!o(ne)?.transition?.layout,
          A = H(O, k),
          j = ge(`SE17nOiur`),
          M = i(null);
        return (
          le(),
          ue({}),
          /*#__PURE__*/ c(b.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: X,
              primaryVariantId: `stNa67AqV`,
              variantClassNames: V,
            },
            children: /*#__PURE__*/ s(u, {
              id: _ ?? `dz2H5y2mp`,
              children: [
                /*#__PURE__*/ c(Re, { value: `html body { background: none; }` }),
                /*#__PURE__*/ c(d.div, {
                  ...S,
                  className: p(T, `framer-18myh8p`, g),
                  ref: ee,
                  style: { ...h },
                  children: /*#__PURE__*/ s(d.main, {
                    className: `framer-1b8clmp`,
                    "data-framer-name": `Main`,
                    layout: A,
                    children: [
                      /*#__PURE__*/ s(`div`, {
                        className: `framer-1w35bip`,
                        "data-framer-name": `Hero`,
                        id: j,
                        ref: M,
                        children: [
                          /*#__PURE__*/ c(F, {
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
                                  opacity: 1,
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
                                  opacity: 1,
                                  rotate: 0,
                                  rotateX: 0,
                                  rotateY: 0,
                                  scale: 1.93,
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
                              alt: `Eight clinic team members standing together in a treatment room`,
                              fit: `fill`,
                              loading: ie(m?.y || 0),
                              pixelHeight: 1440,
                              pixelWidth: 2560,
                              positionX: `center`,
                              positionY: `18%`,
                              sizes: m?.width || `100vw`,
                              src: `../../assets/illustrations/shaga-salon-interior.jpg`,
                              srcSet: `../../assets/illustrations/shaga-salon-interior.jpg 512w,../../assets/illustrations/shaga-salon-interior.jpg 1024w,../../assets/illustrations/shaga-salon-interior.jpg 2048w,../../assets/illustrations/shaga-salon-interior.jpg 2560w`,
                            },
                            className: `framer-15aw13r`,
                            "data-framer-name": `Photo`,
                          }),
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-wcz0zi`,
                            "data-framer-name": `Shade`,
                          }),
                          /*#__PURE__*/ s(`div`, {
                            className: `framer-j9rfme`,
                            "data-framer-name": `Content`,
                            children: [
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-1cm559s`,
                                "data-framer-name": `Title`,
                                children: [
                                  /*#__PURE__*/ c(E, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(t, {
                                      children: /*#__PURE__*/ c(`h1`, {
                                        className: `framer-styles-preset-i1c9y9`,
                                        "data-styles-preset": `Y9102JqgO`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                        },
                                        children: `Your team,`,
                                      }),
                                    }),
                                    className: `framer-1oggnrn`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(E, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(t, {
                                      children: /*#__PURE__*/ c(`h2`, {
                                        className: `framer-styles-preset-dtv0vy`,
                                        "data-styles-preset": `hAFZAFG_T`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                                        },
                                        children: `one written plan.`,
                                      }),
                                    }),
                                    className: `framer-1xtea4f`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-kthvn4`,
                                "data-framer-name": `Intro`,
                                children: /*#__PURE__*/ c(E, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-19oisb3`,
                                      "data-styles-preset": `yxzhfN2Rg`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-664c932f-0824-490a-ad68-61125df693ee)`,
                                      },
                                      children: `You meet the person who will treat you before anything is decided. Each clinician’s training and licence are listed here.`,
                                    }),
                                  }),
                                  className: `framer-1952xqs`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      /*#__PURE__*/ c(`div`, {
                        className: `framer-y7ut4z`,
                        "data-framer-name": `Care team`,
                        children: /*#__PURE__*/ s(`div`, {
                          className: `framer-1hr7wfh`,
                          "data-framer-name": `Container`,
                          children: [
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1odx2vz`,
                              "data-framer-name": `Title`,
                              children: [
                                /*#__PURE__*/ c(D, {
                                  breakpoint: w,
                                  overrides: {
                                    cixgZZWnN: { y: (m?.y || 0) + 730 },
                                    xWEKKWU3L: { y: (m?.y || 0) + 700 },
                                  },
                                  children: /*#__PURE__*/ c(x, {
                                    height: 200,
                                    y: (m?.y || 0) + 940,
                                    children: /*#__PURE__*/ c(y, {
                                      className: `framer-jng3p1-container`,
                                      nodeId: `hMbcisITt`,
                                      scopeId: `dz2H5y2mp`,
                                      children: /*#__PURE__*/ c(N, {
                                        a3s5gDorS: `Care team`,
                                        height: `100%`,
                                        id: `hMbcisITt`,
                                        layoutId: `hMbcisITt`,
                                        PEYR80g6u: ye,
                                        variant: U(`cMc9E2xro`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(E, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`h2`, {
                                      className: `framer-styles-preset-6v63kf`,
                                      "data-styles-preset": `LxN6valwV`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                      },
                                      children: `Who you will see.`,
                                    }),
                                  }),
                                  className: `framer-ssb5w8`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-1c2bw4u`,
                              "data-framer-name": `Team`,
                              children: /*#__PURE__*/ c(pe, {
                                children: /*#__PURE__*/ c(Y, {
                                  query: J(),
                                  children: (e, t, n) =>
                                    /*#__PURE__*/ c(a, {
                                      children: e?.map(
                                        (
                                          {
                                            F3_qMwrya: e,
                                            FddT6kH0f: t,
                                            id: n,
                                            iVrRO9rRZ: r,
                                            S8Sn8hvny: i,
                                            VJYrOQxim: a,
                                          },
                                          o
                                        ) => (
                                          (r ??= ``),
                                          (i ??= ``),
                                          (e ??= ``),
                                          (t ??= ``),
                                          /*#__PURE__*/ c(
                                            u,
                                            {
                                              id: `GLJlXWdl8-${n}`,
                                              children: /*#__PURE__*/ c(ce.Provider, {
                                                value: { FddT6kH0f: t },
                                                children: /*#__PURE__*/ c(L, {
                                                  __framer__animate: { transition: G },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: W,
                                                  __framer__exit: K,
                                                  __framer__styleAppearEffectEnabled: !0,
                                                  __framer__threshold: 0.2,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-1xvc5o6`,
                                                  "data-framer-name": `Card link`,
                                                  children: /*#__PURE__*/ c(ae, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { FddT6kH0f: t },
                                                          webPageId: `LGKNYxrCR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { FddT6kH0f: t },
                                                          webPageId: `LGKNYxrCR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { FddT6kH0f: t },
                                                          webPageId: `LGKNYxrCR`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      /*#__PURE__*/ c(D, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          cixgZZWnN: {
                                                            width: `max(min(${m?.width || `100vw`}, 1400px) - 40px, 50px)`,
                                                            y: (m?.y || 0) + 1064.8,
                                                          },
                                                          xWEKKWU3L: {
                                                            width: `max((min(${m?.width || `100vw`}, 1400px) - 88px) / 2, 50px)`,
                                                            y: (m?.y || 0) + 1034.8,
                                                          },
                                                        },
                                                        children: /*#__PURE__*/ c(x, {
                                                          height: 516,
                                                          width: `max((min(${m?.width || `100vw`}, 1400px) - 144px) / 4, 50px)`,
                                                          y: (m?.y || 0) + 1274.8,
                                                          children: /*#__PURE__*/ c(y, {
                                                            className: `framer-10xjcis-container`,
                                                            "data-framer-name": `Practitioner Card`,
                                                            name: `Practitioner Card`,
                                                            nodeId: `xW3V6DXih`,
                                                            scopeId: `dz2H5y2mp`,
                                                            children: /*#__PURE__*/ c(D, {
                                                              breakpoint: w,
                                                              overrides: {
                                                                cixgZZWnN: { mGQFBVDhX: t[2] },
                                                                xWEKKWU3L: { mGQFBVDhX: t[1] },
                                                              },
                                                              children: /*#__PURE__*/ c(P, {
                                                                aBqwEXJRM: e,
                                                                height: `100%`,
                                                                id: `xW3V6DXih`,
                                                                JIsa1bhQt: i,
                                                                layoutId: `xW3V6DXih`,
                                                                mGQFBVDhX: t[0],
                                                                name: `Practitioner Card`,
                                                                style: { width: `100%` },
                                                                uiLRgbX0n: q(a),
                                                                WAXDxFqKt: r,
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            n
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Be = [
        `.framer-LC6Zv.framer-as1qwa, .framer-LC6Zv .framer-as1qwa { display: block; }`,
        `.framer-LC6Zv.framer-18myh8p { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-LC6Zv .framer-1b8clmp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LC6Zv .framer-1w35bip { align-content: center; align-items: center; background-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 80vh; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 56px 0px; position: sticky; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-LC6Zv .framer-15aw13r { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-LC6Zv .framer-wcz0zi { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(20, 14, 10, 0.25) 0%, rgba(20, 14, 10, 0) 32%, rgba(20, 14, 10, 0.55) 62%, rgba(20, 14, 10, 0.88) 100%); bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-LC6Zv .framer-j9rfme { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-LC6Zv .framer-1cm559s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-LC6Zv .framer-1oggnrn, .framer-LC6Zv .framer-1xtea4f, .framer-LC6Zv .framer-ssb5w8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-LC6Zv .framer-kthvn4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 400px; }`,
        `.framer-LC6Zv .framer-1952xqs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-LC6Zv .framer-y7ut4z { align-content: center; align-items: center; background-color: var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 140px 0px 140px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-LC6Zv .framer-1hr7wfh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-LC6Zv .framer-1odx2vz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LC6Zv .framer-jng3p1-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-LC6Zv .framer-1c2bw4u { display: grid; flex: none; gap: 48px 28px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); height: min-content; justify-content: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LC6Zv .framer-1xvc5o6 { align-content: flex-start; align-items: flex-start; align-self: start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-LC6Zv .framer-10xjcis-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Me,
        ...Oe,
        ...xe,
        ...A,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-LC6Zv.framer-18myh8p { width: 810px; } .framer-LC6Zv .framer-1w35bip { height: 60vh; min-height: 560px; } .framer-LC6Zv .framer-kthvn4 { width: 320px; } .framer-LC6Zv .framer-y7ut4z { padding: 100px 0px 100px 0px; } .framer-LC6Zv .framer-1c2bw4u { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-LC6Zv.framer-18myh8p { width: 390px; } .framer-LC6Zv .framer-1w35bip { height: 65vh; min-height: 520px; } .framer-LC6Zv .framer-j9rfme { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; padding: 0px 20px 0px 20px; } .framer-LC6Zv .framer-1cm559s, .framer-LC6Zv .framer-kthvn4 { width: 100%; } .framer-LC6Zv .framer-1oggnrn, .framer-LC6Zv .framer-1xtea4f { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-LC6Zv .framer-y7ut4z { padding: 80px 0px 80px 0px; } .framer-LC6Zv .framer-1hr7wfh { padding: 0px 20px 0px 20px; } .framer-LC6Zv .framer-1c2bw4u { gap: 16px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ]),
      (Q = oe(Z, Be, `framer-LC6Zv`)),
      (Q.displayName = `/practitioners`),
      (Q.defaultProps = { height: 3581, width: 1200 }),
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
            ],
          },
          ...I,
          ...Le,
          ...O(Ne),
          ...O(ke),
          ...O(Se),
          ...O(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = f.get(J(), n, r);
          return C(
            [
              () => i.preload(),
              () => g(N, {}, t),
              async () => {
                let e = (await he(() => i.readMaybeAsync(), t)) ?? [];
                return C(
                  e.flatMap((e) => () => g(P, {}, t)),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (Ve = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framerdz2H5y2mp`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"xWEKKWU3L":{"layout":["fixed","auto"]},"cixgZZWnN":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1200`,
              framerScrollSections: `{"SE17nOiur":{"pattern":":SE17nOiur","name":"practitioners-hero"}}`,
              framerContractVersion: `1`,
              framerLayoutTemplateFlowEffect: `true`,
              framerResponsiveScreen: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerAutoSizeImages: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `3581`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Ve as __FramerMetadata__, Q as default, z as queryParamNames };
//# sourceMappingURL=oCJD6r7EIg9hJILIAGOAh5RXuhdL4Ze1lwuOG0aFE7g.HtB_tnTb.mjs.map
