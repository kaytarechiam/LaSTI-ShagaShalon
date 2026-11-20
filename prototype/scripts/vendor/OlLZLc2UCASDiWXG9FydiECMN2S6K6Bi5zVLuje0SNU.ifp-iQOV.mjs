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
  s as u,
  w as ee,
} from "./react.BF5K0J5z.mjs";
import { i as d, o as f, t as p, w as m } from "./motion.CyGOoZcc.mjs";
import {
  $ as h,
  A as g,
  B as te,
  C as _,
  Ct as v,
  D as y,
  Et as b,
  K as x,
  M as S,
  O as ne,
  R as C,
  St as re,
  Tt as w,
  _t as ie,
  a as T,
  b as ae,
  bt as E,
  ct as D,
  d as O,
  dt as oe,
  ft as se,
  gt as ce,
  i as k,
  lt as le,
  m as ue,
  mt as A,
  n as de,
  nt as fe,
  o as j,
  p as pe,
  pt as me,
  rt as he,
  vt as ge,
  w as M,
  x as N,
  z as P,
} from "./framer.BMzpwY9X.mjs";
import {
  G as F,
  K as _e,
  R as ve,
  _ as ye,
  b as I,
  gt as be,
  ht as xe,
  j as Se,
  k as Ce,
  mt as we,
  pt as Te,
  v as Ee,
  y as De,
  z as Oe,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { r as ke, t as Ae } from "./fhHgguzMk.DsM8gqaZ.mjs";
import { i as je, n as Me, r as Ne, t as L } from "./XT2HPNEkm.Bbn4Mve7.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./yxzhfN2Rg.W01ar6hl.mjs";
import { n as Re, t as ze } from "./dl5lUlNWw.CTf4aSRh.mjs";
import { r as Be, t as Ve } from "./V0WriU4Bq.CH1woGvK.mjs";
import { n as He, t as Ue } from "./G5Q9Vf0Ur.BbRbamhw.mjs";
import { a as We, i as Ge, n as R } from "./HatdYK9df.BIQePg1a.mjs";
import { n as Ke, t as z } from "./mI8pdTx4v.CrET3OES.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./Y9102JqgO.BXaERxvH.mjs";
import { r as Ze, t as Qe } from "./aIfmSu0Qn.gJ-QMKy5.mjs";
import { r as $e, t as et } from "./TlnJxmeVy.BLMgsj2b.mjs";
import { n as tt, r as nt } from "./l2tkxitt1.BuCED4Ww.mjs";
function rt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, B;
function gt() {
  return (gt = e(() => {
    (u(),
      x(),
      p(),
      r(),
      ke(),
      be(),
      (it = { yYjXcxLbB: { hover: !0 } }),
      (at = [`yYjXcxLbB`, `AFr1VEf2X`]),
      (ot = `framer-MYLp6`),
      (st = { AFr1VEf2X: `framer-v-3dye7a`, yYjXcxLbB: `framer-v-14e4dan` }),
      (ct = { delay: 0, duration: 0.3, ease: [0.2, 0.7, 0.2, 1], type: `tween` }),
      (lt = ({ value: e, children: t }) => {
        let r = o(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(f.Provider, { value: a, children: t });
      }),
      (ut = { Active: `AFr1VEf2X`, Default: `yYjXcxLbB` }),
      (dt = m.create(t)),
      (ft = ({ height: e, icon: t, id: n, label: r, width: i, ...a }) => ({
        ...a,
        jtOvIEyLa: t ?? a.jtOvIEyLa ?? Ae,
        variant: ut[a.variant] ?? a.variant ?? `yYjXcxLbB`,
        VjABMg1av: r ?? a.VjABMg1av ?? `All`,
      })),
      (pt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (mt = /*#__PURE__*/ l(function (e, n) {
        let r = i(null),
          a = n ?? r,
          o = ee(),
          { activeLocale: l, contentLocale: u, setLocale: f } = ce();
        le();
        let {
            style: p,
            className: h,
            layoutId: te,
            variant: _,
            VjABMg1av: v,
            jtOvIEyLa: y,
            ...b
          } = ft(e),
          {
            baseVariant: x,
            classNames: S,
            clearLoadingGesture: ne,
            gestureHandlers: C,
            gestureVariant: w,
            isLoading: ie,
            setGestureState: T,
            setVariant: ae,
            variants: E,
          } = re({
            cycleOrder: at,
            defaultVariant: `yYjXcxLbB`,
            enabledGestures: it,
            ref: a,
            variant: _,
            variantClassNames: st,
          }),
          D = pt(e, E),
          O = g(ot, Te);
        return /*#__PURE__*/ c(d, {
          id: te ?? o,
          children: /*#__PURE__*/ c(dt, {
            animate: E,
            initial: !1,
            children: /*#__PURE__*/ c(lt, {
              value: ct,
              children: /*#__PURE__*/ s(m.div, {
                ...b,
                ...C,
                className: g(O, `framer-14e4dan`, h, S),
                "data-framer-name": `Default`,
                layoutDependency: D,
                layoutId: `yYjXcxLbB`,
                ref: a,
                style: {
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  borderBottomLeftRadius: 999,
                  borderBottomRightRadius: 999,
                  borderTopLeftRadius: 999,
                  borderTopRightRadius: 999,
                  ...p,
                },
                ...rt(
                  {
                    "yYjXcxLbB-hover": { "data-framer-name": void 0 },
                    AFr1VEf2X: { "data-framer-name": `Active` },
                  },
                  x,
                  w
                ),
                children: [
                  /*#__PURE__*/ c(ue, {
                    animated: !0,
                    className: `framer-79g1d0`,
                    Component: y,
                    layoutDependency: D,
                    layoutId: `rHE_yhNea`,
                    style: {
                      "--1m6trwb": 0,
                      "--21h8s6": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                      "--pgex8v": 1.5,
                    },
                    variants: {
                      "yYjXcxLbB-hover": {
                        "--21h8s6": `var(--token-f0b3604a-2dab-4f5e-9790-adcb2b968a7a)`,
                      },
                      AFr1VEf2X: {
                        "--21h8s6": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                      },
                    },
                  }),
                  /*#__PURE__*/ c(M, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ c(t, {
                      children: /*#__PURE__*/ c(m.p, {
                        className: `framer-styles-preset-1k57bfd`,
                        "data-styles-preset": `Jb0rHf3IC`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                        },
                        children: `Label`,
                      }),
                    }),
                    className: `framer-1eaudn6`,
                    fonts: [`Inter`],
                    layoutDependency: D,
                    layoutId: `kP5Ataj0g`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                    },
                    text: v,
                    variants: {
                      "yYjXcxLbB-hover": {
                        "--extracted-r6o4lv": `var(--token-f0b3604a-2dab-4f5e-9790-adcb2b968a7a)`,
                      },
                      AFr1VEf2X: {
                        "--extracted-r6o4lv": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...rt(
                      {
                        "yYjXcxLbB-hover": {
                          children: /*#__PURE__*/ c(t, {
                            children: /*#__PURE__*/ c(m.p, {
                              className: `framer-styles-preset-1k57bfd`,
                              "data-styles-preset": `Jb0rHf3IC`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f0b3604a-2dab-4f5e-9790-adcb2b968a7a))`,
                              },
                              children: `All`,
                            }),
                          }),
                        },
                        AFr1VEf2X: {
                          children: /*#__PURE__*/ c(t, {
                            children: /*#__PURE__*/ c(m.p, {
                              className: `framer-styles-preset-1k57bfd`,
                              "data-styles-preset": `Jb0rHf3IC`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109))`,
                              },
                              children: `All`,
                            }),
                          }),
                        },
                      },
                      x,
                      w
                    ),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (ht = [
        `.framer-MYLp6.framer-vglz7h, .framer-MYLp6 .framer-vglz7h { display: block; }`,
        `.framer-MYLp6.framer-14e4dan { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: center; padding: 0px 14px 0px 14px; position: relative; width: 164px; }`,
        `.framer-MYLp6 .framer-79g1d0 { flex: none; height: auto; position: relative; width: 16px; }`,
        `.framer-MYLp6 .framer-1eaudn6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...we,
      ]),
      (B = v(mt, ht, `framer-MYLp6`)),
      (B.displayName = `Filter Tab Solid`),
      (B.defaultProps = { height: 44, width: 164 }),
      ne(B, {
        variant: {
          options: [`yYjXcxLbB`, `AFr1VEf2X`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: j.Enum,
        },
        VjABMg1av: { defaultValue: `All`, title: `Label`, type: j.String },
        onVjABMg1avChange: { changes: `VjABMg1av`, type: j.ChangeHandler },
        jtOvIEyLa: {
          defaultValue: {
            identifier: `module:6E2CGo0e7Cc8gA9Pxqck/o74a7BK1ERiMNm6HcbIs/fhHgguzMk.js:default`,
            moduleId: `6E2CGo0e7Cc8gA9Pxqck`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Icon`,
          type: j.VectorSetItem,
        },
      }),
      y(
        B,
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
          ...P(xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var _t,
  V,
  vt,
  H,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  U,
  Ot,
  kt,
  W,
  At,
  jt,
  G,
  K,
  Mt,
  q,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  J,
  Y,
  Rt,
  zt,
  Bt,
  X,
  Vt,
  Z,
  Ht,
  Ut,
  Q,
  Wt;
function $() {
  return ($ = e(() => {
    (u(),
      x(),
      p(),
      r(),
      Ze(),
      Oe(),
      Be(),
      Se(),
      $e(),
      je(),
      He(),
      gt(),
      Re(),
      Ke(),
      _e(),
      Me(),
      We(),
      I(),
      qe(),
      Pe(),
      tt(),
      (_t = C(L)),
      (V = b(m.div)),
      (vt = C(F)),
      (H = w(m.div)),
      (yt = C(z)),
      (bt = C(B)),
      (xt = C(ze)),
      (St = {
        egian1tIY: `(min-width: 1200px)`,
        Ry9e2LNEx: `(max-width: 809.98px)`,
        wexfZtfM7: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Ct = () => typeof document < `u`),
      (wt = [`category`]),
      (Tt = `framer-yBFsE`),
      (Et = {
        egian1tIY: `framer-v-6sy5y4`,
        Ry9e2LNEx: `framer-v-1fxhl1o`,
        wexfZtfM7: `framer-v-u24nwh`,
      }),
      (Dt = (e, t, n) => (e && t ? `position` : n)),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ot = {
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
      (kt = {
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
      (W = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (At = {
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
      (jt = {
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
      (G = () => ({
        from: { alias: `HVgWFp7_v`, data: R, type: `Collection` },
        limit: { type: `LiteralValue`, value: 1 },
        select: [
          { collection: `HVgWFp7_v`, name: `D2Q95MhRo`, type: `Identifier` },
          { collection: `HVgWFp7_v`, name: `gIi6ku_om`, type: `Identifier` },
          { collection: `HVgWFp7_v`, name: `FKXzUr7TC`, type: `Identifier` },
          { collection: `HVgWFp7_v`, name: `QOdnj0RIR`, type: `Identifier` },
          { collection: `HVgWFp7_v`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `HVgWFp7_v`, name: `PsleXgERb`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
      })),
      (K = ({ query: e, pageSize: t, children: n }) => n(ge(e))),
      (Mt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 28,
      }),
      (q = { delay: 0, duration: 1, ease: [0.2, 0.7, 0.2, 1], type: `tween` }),
      (Nt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: q,
        x: 0,
        y: 28,
      }),
      (Pt = {
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
      (Ft = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: q,
        x: 0,
        y: 20,
      }),
      (It = (e, t) => {
        switch (e) {
          case `m7OAlALbB`:
            return `T2hSvzpDr`;
          case `SiT9WqERN`:
            return `A3gIYChmw`;
          case `UObTQ4QI6`:
            return `eJ19ow8ns`;
          case `UUUfRWhax`:
            return `piZN5QOdA`;
          case `H9RzVYAiW`:
            return `AQsdk8i4i`;
          default:
            return `ntbM0__qf`;
        }
      }),
      (Lt = (e, t) => {
        switch (e) {
          case `m7OAlALbB`:
            return `yYjXcxLbB`;
          case `SiT9WqERN`:
            return `yYjXcxLbB`;
          case `UObTQ4QI6`:
            return `yYjXcxLbB`;
          case `UUUfRWhax`:
            return `yYjXcxLbB`;
          case `H9RzVYAiW`:
            return `yYjXcxLbB`;
          default:
            return `AFr1VEf2X`;
        }
      }),
      (J = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (Y = (e, t) => (e ? `AFr1VEf2X` : `yYjXcxLbB`)),
      (Rt = (e, t) => {
        switch (e) {
          case `SiT9WqERN`:
            return `Skin care`;
          case `m7OAlALbB`:
            return `Injectables`;
          case `UObTQ4QI6`:
            return `Our method`;
          case `UUUfRWhax`:
            return `Aftercare`;
          case `H9RzVYAiW`:
            return `Comparison`;
          default:
            return `Skin care`;
        }
      }),
      (zt = (e) => (typeof e == `string` ? e : String(e))),
      (Bt = (e) => ({
        from: { alias: `djlS8qe97`, data: R, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [
          { collection: `djlS8qe97`, direction: `desc`, name: `ol0iIe2AG`, type: `Identifier` },
        ],
        select: [
          { collection: `djlS8qe97`, name: `D2Q95MhRo`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `SaAKj5wWJ`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `gIi6ku_om`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `FKXzUr7TC`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `CLT246ezt`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `CzJvzb6YY`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `Qa51MTbTL`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `rwwqMsYxM`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `QOdnj0RIR`, type: `Identifier` },
          { collection: `djlS8qe97`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: {
            operator: `not`,
            type: `UnaryOperation`,
            value: {
              left: { collection: `djlS8qe97`, name: `PsleXgERb`, type: `Identifier` },
              operator: `==`,
              right: { type: `LiteralValue`, value: !0 },
              type: `BinaryOperation`,
            },
          },
          operator: `and`,
          right: {
            left: {
              left: { type: `LiteralValue`, value: e },
              operator: `==`,
              right: { type: `LiteralValue`, value: null },
              type: `BinaryOperation`,
            },
            operator: `or`,
            right: {
              left: { collection: `djlS8qe97`, name: `CLT246ezt`, type: `Identifier` },
              operator: `==`,
              right: { type: `LiteralValue`, value: e },
              type: `BinaryOperation`,
            },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
      })),
      (X = { Desktop: `egian1tIY`, Phone: `Ry9e2LNEx`, Tablet: `wexfZtfM7` }),
      (Vt = ({ value: e }) =>
        A()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Z = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: X[r.variant] ?? r.variant ?? `egian1tIY`,
      })),
      (Ht = /*#__PURE__*/ l(function (e, r) {
        let l = i(null),
          u = r ?? l;
        ee();
        let { activeLocale: p, contentLocale: h, setLocale: v } = ce(),
          y = le(),
          [b, x] = se({
            getOptionTitle: Ge?.CLT246ezt,
            optional: !0,
            options:
              R.propertyControls?.CLT246ezt?.definition?.options ??
              R.propertyControls?.CLT246ezt?.options,
            parameterName: `category`,
          }),
          { style: S, className: ne, layoutId: C, variant: re, ...w } = Z(e),
          ue = n(() => nt({}, h), [h]);
        ie(ue);
        let [A, fe] = me(re, St, !1),
          j = g(Tt, Xe, Le, ye),
          he = o(O)?.isLayoutTemplate,
          ge = !!o(f)?.transition?.layout,
          P = Dt(he, ge);
        E();
        let _e = () => !(Ct() && ![`wexfZtfM7`, `Ry9e2LNEx`].includes(A)),
          { activeVariantCallback: I, delay: be } = D(void 0),
          xe = I(async (...e) => {
            x?.(void 0);
          }),
          Se = I(async (...e) => {
            x?.(`m7OAlALbB`);
          }),
          we = I(async (...e) => {
            x?.(`SiT9WqERN`);
          }),
          Te = I(async (...e) => {
            x?.(`UObTQ4QI6`);
          }),
          Ee = I(async (...e) => {
            x?.(`UUUfRWhax`);
          }),
          De = I(async (...e) => {
            x?.(`H9RzVYAiW`);
          });
        return (
          oe({}),
          /*#__PURE__*/ c(O.Provider, {
            value: {
              activeVariantId: A,
              humanReadableVariantMap: X,
              primaryVariantId: `egian1tIY`,
              variantClassNames: Et,
            },
            children: /*#__PURE__*/ s(d, {
              id: C ?? `l2tkxitt1`,
              children: [
                /*#__PURE__*/ c(Vt, { value: `html body { background: none; }` }),
                /*#__PURE__*/ c(m.div, {
                  ...w,
                  className: g(j, `framer-6sy5y4`, ne),
                  ref: u,
                  style: { ...S },
                  children: /*#__PURE__*/ s(m.main, {
                    className: `framer-ogehc2`,
                    "data-framer-name": `Main`,
                    layout: P,
                    children: [
                      /*#__PURE__*/ c(`div`, {
                        className: `framer-15suhcb`,
                        "data-framer-name": `Featured`,
                        children: /*#__PURE__*/ c(de, {
                          children: /*#__PURE__*/ c(K, {
                            query: G(),
                            children: (e, n, r) =>
                              /*#__PURE__*/ c(a, {
                                children: e?.map(
                                  (
                                    {
                                      D2Q95MhRo: e,
                                      FKXzUr7TC: n,
                                      gIi6ku_om: r,
                                      id: i,
                                      QOdnj0RIR: a,
                                    },
                                    o
                                  ) => (
                                    (r ??= ``),
                                    (n ??= ``),
                                    (a ??= ``),
                                    /*#__PURE__*/ c(
                                      d,
                                      {
                                        id: `HVgWFp7_v-${i}`,
                                        children: /*#__PURE__*/ c(ae.Provider, {
                                          value: { QOdnj0RIR: a },
                                          children: /*#__PURE__*/ s(`div`, {
                                            className: `framer-1sky4hi`,
                                            "data-framer-name": `Featured article`,
                                            children: [
                                              /*#__PURE__*/ c(pe, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  loading: te(y?.y || 0),
                                                  sizes: y?.width || `100vw`,
                                                  ...U(e),
                                                },
                                                className: `framer-1xk6sj3`,
                                                "data-framer-name": `Photo`,
                                              }),
                                              /*#__PURE__*/ c(`div`, {
                                                className: `framer-5oo3wn`,
                                                "data-framer-name": `Shade`,
                                              }),
                                              /*#__PURE__*/ s(`div`, {
                                                className: `framer-bd751n`,
                                                "data-framer-name": `Content`,
                                                children: [
                                                  /*#__PURE__*/ s(V, {
                                                    animate: Ot,
                                                    className: `framer-11tinb0`,
                                                    "data-framer-appear-id": `11tinb0-${o}`,
                                                    "data-framer-name": `Title`,
                                                    initial: kt,
                                                    optimized: !0,
                                                    children: [
                                                      /*#__PURE__*/ c(N, {
                                                        breakpoint: A,
                                                        overrides: {
                                                          Ry9e2LNEx: { y: (y?.y || 0) + 210 },
                                                        },
                                                        children: /*#__PURE__*/ c(k, {
                                                          height: 200,
                                                          y: (y?.y || 0) + 442,
                                                          children: /*#__PURE__*/ c(T, {
                                                            className: `framer-1fbg9s8-container`,
                                                            nodeId: `ELdeW6NTv`,
                                                            scopeId: `l2tkxitt1`,
                                                            children: /*#__PURE__*/ c(L, {
                                                              a3s5gDorS: `Journal`,
                                                              height: `100%`,
                                                              id: `ELdeW6NTv`,
                                                              layoutId: `ELdeW6NTv`,
                                                              PEYR80g6u: Ne,
                                                              variant: W(`A8h2Yr3rT`),
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      /*#__PURE__*/ c(M, {
                                                        __fromCanvasComponent: !0,
                                                        children: /*#__PURE__*/ c(t, {
                                                          children: /*#__PURE__*/ c(`h1`, {
                                                            className: `framer-styles-preset-i1c9y9`,
                                                            "data-styles-preset": `Y9102JqgO`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                                            },
                                                            children: `Title`,
                                                          }),
                                                        }),
                                                        className: `framer-30rufu`,
                                                        fonts: [`Inter`],
                                                        text: r,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                  /*#__PURE__*/ s(V, {
                                                    animate: At,
                                                    className: `framer-zk8dqh`,
                                                    "data-framer-appear-id": `zk8dqh-${o}`,
                                                    "data-framer-name": `Text`,
                                                    initial: jt,
                                                    optimized: !0,
                                                    children: [
                                                      /*#__PURE__*/ c(M, {
                                                        __fromCanvasComponent: !0,
                                                        children: /*#__PURE__*/ c(t, {
                                                          children: /*#__PURE__*/ c(`p`, {
                                                            className: `framer-styles-preset-19oisb3`,
                                                            "data-styles-preset": `yxzhfN2Rg`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-664c932f-0824-490a-ad68-61125df693ee)`,
                                                            },
                                                            children: `Excerpt`,
                                                          }),
                                                        }),
                                                        className: `framer-11xb5oi`,
                                                        fonts: [`Inter`],
                                                        text: n,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      /*#__PURE__*/ c(_, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { QOdnj0RIR: a },
                                                              webPageId: `Wwg3VNwUY`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { QOdnj0RIR: a },
                                                              webPageId: `Wwg3VNwUY`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { QOdnj0RIR: a },
                                                              webPageId: `Wwg3VNwUY`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          /*#__PURE__*/ c(k, {
                                                            height: 46,
                                                            y: (y?.y || 0) + 690,
                                                            children: /*#__PURE__*/ c(T, {
                                                              className: `framer-x06jpc-container`,
                                                              nodeId: `UDdKLYYdw`,
                                                              scopeId: `l2tkxitt1`,
                                                              children: /*#__PURE__*/ c(N, {
                                                                breakpoint: A,
                                                                overrides: {
                                                                  Ry9e2LNEx: { cMEc6Dyax: e[2] },
                                                                  wexfZtfM7: { cMEc6Dyax: e[1] },
                                                                },
                                                                children: /*#__PURE__*/ c(F, {
                                                                  cMEc6Dyax: e[0],
                                                                  height: `100%`,
                                                                  id: `UDdKLYYdw`,
                                                                  layoutId: `UDdKLYYdw`,
                                                                  O1Pum8WD2: `Read the article`,
                                                                  variant: W(`Djv49PUi5`),
                                                                  width: `100%`,
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
                                        }),
                                      },
                                      i
                                    )
                                  )
                                ),
                              }),
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(`div`, {
                        className: `framer-azb0nx`,
                        "data-framer-name": `Index`,
                        children: /*#__PURE__*/ s(`div`, {
                          className: `framer-1x8w4uk`,
                          "data-framer-name": `Container`,
                          children: [
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-1cde3ph`,
                              "data-framer-name": `Head`,
                              children: /*#__PURE__*/ s(H, {
                                __framer__animate: { transition: q },
                                __framer__animateOnce: !0,
                                __framer__enter: Mt,
                                __framer__exit: Nt,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.15,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1hkyflr`,
                                "data-framer-name": `Title`,
                                children: [
                                  /*#__PURE__*/ c(N, {
                                    breakpoint: A,
                                    overrides: {
                                      Ry9e2LNEx: { y: (y?.y || 0) + 880 },
                                      wexfZtfM7: { y: (y?.y || 0) + 900 },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 200,
                                      y: (y?.y || 0) + 940,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-17ukx0q-container`,
                                        nodeId: `LKxZCQABR`,
                                        scopeId: `l2tkxitt1`,
                                        children: /*#__PURE__*/ c(L, {
                                          a3s5gDorS: `All articles`,
                                          height: `100%`,
                                          id: `LKxZCQABR`,
                                          layoutId: `LKxZCQABR`,
                                          PEYR80g6u: Ne,
                                          variant: W(`cMc9E2xro`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ c(M, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(t, {
                                      children: /*#__PURE__*/ s(`h2`, {
                                        className: `framer-styles-preset-6v63kf`,
                                        "data-styles-preset": `LxN6valwV`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                        },
                                        children: [
                                          `Notes from the `,
                                          /*#__PURE__*/ c(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-50b752a5-d450-43b1-93de-239a71db7f37)`,
                                            },
                                            children: /*#__PURE__*/ c(`em`, {
                                              children: `treatment room.`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-1h8wm1r`,
                                    fonts: [`Inter`, `Inter-Italic`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            /*#__PURE__*/ s(H, {
                              __framer__animate: { transition: q },
                              __framer__animateOnce: !0,
                              __framer__enter: Pt,
                              __framer__exit: Ft,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.15,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-y8f3zz`,
                              "data-border": !0,
                              "data-framer-name": `Filter`,
                              children: [
                                _e() &&
                                  /*#__PURE__*/ s(`div`, {
                                    className: `framer-igy5sh hidden-6sy5y4`,
                                    "data-framer-name": `Chips`,
                                    children: [
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-x4jyn`,
                                        "data-border": !0,
                                        "data-framer-name": `Chip All`,
                                      }),
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-1jm0jkv`,
                                        "data-border": !0,
                                        "data-framer-name": `Chip Injectables`,
                                      }),
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-1tpkb4b`,
                                        "data-border": !0,
                                        "data-framer-name": `Chip Skin care`,
                                      }),
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-1xgsm4b`,
                                        "data-border": !0,
                                        "data-framer-name": `Chip Our method`,
                                      }),
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-mb17gg`,
                                        "data-border": !0,
                                        "data-framer-name": `Chip Aftercare`,
                                      }),
                                      /*#__PURE__*/ c(`div`, {
                                        className: `framer-t943l9`,
                                        "data-border": !0,
                                        "data-framer-name": `Chip Comparison`,
                                      }),
                                    ],
                                  }),
                                /*#__PURE__*/ c(N, {
                                  breakpoint: A,
                                  overrides: {
                                    Ry9e2LNEx: { y: (y?.y || 0) + 1214.8 },
                                    wexfZtfM7: { y: (y?.y || 0) + 1234.8 },
                                  },
                                  children: /*#__PURE__*/ c(k, {
                                    height: 44,
                                    width: `984px`,
                                    y: (y?.y || 0) + 1280.8,
                                    children: /*#__PURE__*/ c(T, {
                                      className: `framer-18p4wkg-container`,
                                      "data-framer-name": `Pill`,
                                      name: `Pill`,
                                      nodeId: `ifGT77xeY`,
                                      scopeId: `l2tkxitt1`,
                                      children: /*#__PURE__*/ c(z, {
                                        height: `100%`,
                                        id: `ifGT77xeY`,
                                        layoutId: `ifGT77xeY`,
                                        name: `Pill`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: W(It(b, h)),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(m.div, {
                                  className: `framer-11y7vuv`,
                                  "data-framer-name": `All`,
                                  onTap: xe,
                                  children: /*#__PURE__*/ c(N, {
                                    breakpoint: A,
                                    overrides: {
                                      Ry9e2LNEx: { y: (y?.y || 0) + 1214.8 },
                                      wexfZtfM7: { y: (y?.y || 0) + 1234.8 },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 44,
                                      width: `164px`,
                                      y: (y?.y || 0) + 1280.8,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-qs90di-container`,
                                        nodeId: `RREgUNRjo`,
                                        scopeId: `l2tkxitt1`,
                                        children: /*#__PURE__*/ c(B, {
                                          height: `100%`,
                                          id: `RREgUNRjo`,
                                          jtOvIEyLa: Ue,
                                          layoutId: `RREgUNRjo`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: W(Lt(b, h)),
                                          VjABMg1av: `All`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(m.div, {
                                  className: `framer-vgnlc2`,
                                  "data-framer-name": `Injectables`,
                                  onTap: Se,
                                  children: /*#__PURE__*/ c(N, {
                                    breakpoint: A,
                                    overrides: {
                                      Ry9e2LNEx: { y: (y?.y || 0) + 1214.8 },
                                      wexfZtfM7: { y: (y?.y || 0) + 1234.8 },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 44,
                                      width: `164px`,
                                      y: (y?.y || 0) + 1280.8,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-5ysx9i-container`,
                                        nodeId: `px8dOIq1k`,
                                        scopeId: `l2tkxitt1`,
                                        children: /*#__PURE__*/ c(B, {
                                          height: `100%`,
                                          id: `px8dOIq1k`,
                                          jtOvIEyLa: Ce,
                                          layoutId: `px8dOIq1k`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: W(Y(J(b, `m7OAlALbB`), h)),
                                          VjABMg1av: `Injectables`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(m.div, {
                                  className: `framer-1pecrl9`,
                                  "data-framer-name": `Skin care`,
                                  onTap: we,
                                  children: /*#__PURE__*/ c(N, {
                                    breakpoint: A,
                                    overrides: {
                                      Ry9e2LNEx: { y: (y?.y || 0) + 1214.8 },
                                      wexfZtfM7: { y: (y?.y || 0) + 1234.8 },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 44,
                                      width: `164px`,
                                      y: (y?.y || 0) + 1280.8,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-159xymc-container`,
                                        nodeId: `JM8nHZ3Db`,
                                        scopeId: `l2tkxitt1`,
                                        children: /*#__PURE__*/ c(B, {
                                          height: `100%`,
                                          id: `JM8nHZ3Db`,
                                          jtOvIEyLa: ve,
                                          layoutId: `JM8nHZ3Db`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: W(Y(J(b, `SiT9WqERN`), h)),
                                          VjABMg1av: `Skin care`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(m.div, {
                                  className: `framer-1pav4n6`,
                                  "data-framer-name": `Our method`,
                                  onTap: Te,
                                  children: /*#__PURE__*/ c(N, {
                                    breakpoint: A,
                                    overrides: {
                                      Ry9e2LNEx: { y: (y?.y || 0) + 1214.8 },
                                      wexfZtfM7: { y: (y?.y || 0) + 1234.8 },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 44,
                                      width: `164px`,
                                      y: (y?.y || 0) + 1280.8,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-lkglh4-container`,
                                        nodeId: `ERyOsjTyp`,
                                        scopeId: `l2tkxitt1`,
                                        children: /*#__PURE__*/ c(B, {
                                          height: `100%`,
                                          id: `ERyOsjTyp`,
                                          jtOvIEyLa: Ve,
                                          layoutId: `ERyOsjTyp`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: W(Y(J(b, `UObTQ4QI6`), h)),
                                          VjABMg1av: `Our method`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(m.div, {
                                  className: `framer-d55at7`,
                                  "data-framer-name": `Aftercare`,
                                  onTap: Ee,
                                  children: /*#__PURE__*/ c(N, {
                                    breakpoint: A,
                                    overrides: {
                                      Ry9e2LNEx: { y: (y?.y || 0) + 1214.8 },
                                      wexfZtfM7: { y: (y?.y || 0) + 1234.8 },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 44,
                                      width: `164px`,
                                      y: (y?.y || 0) + 1280.8,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-f59yat-container`,
                                        nodeId: `MGTFQwoag`,
                                        scopeId: `l2tkxitt1`,
                                        children: /*#__PURE__*/ c(B, {
                                          height: `100%`,
                                          id: `MGTFQwoag`,
                                          jtOvIEyLa: et,
                                          layoutId: `MGTFQwoag`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: W(Y(J(b, `UUUfRWhax`), h)),
                                          VjABMg1av: `Aftercare`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(m.div, {
                                  className: `framer-ib0gd8`,
                                  "data-framer-name": `Comparison`,
                                  onTap: De,
                                  children: /*#__PURE__*/ c(N, {
                                    breakpoint: A,
                                    overrides: {
                                      Ry9e2LNEx: { y: (y?.y || 0) + 1214.8 },
                                      wexfZtfM7: { y: (y?.y || 0) + 1234.8 },
                                    },
                                    children: /*#__PURE__*/ c(k, {
                                      height: 44,
                                      width: `164px`,
                                      y: (y?.y || 0) + 1280.8,
                                      children: /*#__PURE__*/ c(T, {
                                        className: `framer-ig45au-container`,
                                        nodeId: `kT5WAsMuh`,
                                        scopeId: `l2tkxitt1`,
                                        children: /*#__PURE__*/ c(B, {
                                          height: `100%`,
                                          id: `kT5WAsMuh`,
                                          jtOvIEyLa: Qe,
                                          layoutId: `kT5WAsMuh`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: W(Y(J(b, `H9RzVYAiW`), h)),
                                          VjABMg1av: `Comparison`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-17dh41t`,
                              "data-framer-name": `Grid`,
                              children: /*#__PURE__*/ c(de, {
                                children: /*#__PURE__*/ c(K, {
                                  query: Bt(b),
                                  children: (e, t, n) =>
                                    /*#__PURE__*/ c(a, {
                                      children: e?.map(
                                        (
                                          {
                                            CLT246ezt: e,
                                            CzJvzb6YY: t,
                                            D2Q95MhRo: n,
                                            FKXzUr7TC: r,
                                            gIi6ku_om: i,
                                            id: a,
                                            Qa51MTbTL: o,
                                            QOdnj0RIR: s,
                                            rwwqMsYxM: l,
                                            SaAKj5wWJ: u,
                                          },
                                          ee
                                        ) => (
                                          (u ??= ``),
                                          (i ??= ``),
                                          (r ??= ``),
                                          (t ??= ``),
                                          (o ??= ``),
                                          (s ??= ``),
                                          /*#__PURE__*/ c(
                                            d,
                                            {
                                              id: `djlS8qe97-${a}`,
                                              children: /*#__PURE__*/ c(ae.Provider, {
                                                value: { QOdnj0RIR: s },
                                                children: /*#__PURE__*/ c(`div`, {
                                                  className: `framer-mglqgi`,
                                                  "data-framer-name": `Item`,
                                                  children: /*#__PURE__*/ c(_, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { QOdnj0RIR: s },
                                                          webPageId: `Wwg3VNwUY`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { QOdnj0RIR: s },
                                                          webPageId: `Wwg3VNwUY`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { QOdnj0RIR: s },
                                                          webPageId: `Wwg3VNwUY`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (a) =>
                                                      /*#__PURE__*/ c(N, {
                                                        breakpoint: A,
                                                        overrides: {
                                                          Ry9e2LNEx: {
                                                            width: `max(min(${y?.width || `100vw`}, 1400px) - 40px, 50px)`,
                                                            y: (y?.y || 0) + 1314.8,
                                                          },
                                                          wexfZtfM7: {
                                                            width: `max((min(${y?.width || `100vw`}, 1400px) - 88px) / 2, 50px)`,
                                                            y: (y?.y || 0) + 1334.8,
                                                          },
                                                        },
                                                        children: /*#__PURE__*/ c(k, {
                                                          height: 519,
                                                          width: `max((min(${y?.width || `100vw`}, 1400px) - 116px) / 3, 50px)`,
                                                          y: (y?.y || 0) + 1386.8,
                                                          children: /*#__PURE__*/ c(T, {
                                                            className: `framer-tva6ea-container`,
                                                            "data-framer-name": `Journal Card`,
                                                            name: `Journal Card`,
                                                            nodeId: `hCZDeSjCC`,
                                                            scopeId: `l2tkxitt1`,
                                                            children: /*#__PURE__*/ c(N, {
                                                              breakpoint: A,
                                                              overrides: {
                                                                Ry9e2LNEx: { o8VEkkgkr: a[2] },
                                                                wexfZtfM7: { o8VEkkgkr: a[1] },
                                                              },
                                                              children: /*#__PURE__*/ c(ze, {
                                                                A1gbFSbT_: u,
                                                                B4iOH3JRS: i,
                                                                height: `100%`,
                                                                id: `hCZDeSjCC`,
                                                                jznP6SThg: t,
                                                                KvJWACCub: zt(Rt(e, h)),
                                                                layoutId: `hCZDeSjCC`,
                                                                name: `Journal Card`,
                                                                o8VEkkgkr: a[0],
                                                                style: { width: `100%` },
                                                                Tn2sn6R7I: r,
                                                                variant: W(`lfRqphgBn`),
                                                                vC84bcKBY: U(n),
                                                                wb3mkMnzT: o,
                                                                width: `100%`,
                                                                wNjhOV4f1: U(l),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            a
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
      (Ut = [
        `.framer-yBFsE.framer-1n0d1xv, .framer-yBFsE .framer-1n0d1xv { display: block; }`,
        `.framer-yBFsE.framer-6sy5y4 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-yBFsE .framer-ogehc2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-15suhcb { align-content: flex-start; align-items: flex-start; background-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-1sky4hi { align-content: center; align-items: center; background-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 80vh; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 64px 0px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-1xk6sj3 { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-yBFsE .framer-5oo3wn { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(20, 14, 10, 0.25) 0%, rgba(20, 14, 10, 0) 32%, rgba(20, 14, 10, 0.55) 62%, rgba(20, 14, 10, 0.9) 100%); bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-yBFsE .framer-bd751n { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-11tinb0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 700px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-yBFsE .framer-1fbg9s8-container, .framer-yBFsE .framer-x06jpc-container, .framer-yBFsE .framer-17ukx0q-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-yBFsE .framer-30rufu, .framer-yBFsE .framer-11xb5oi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-yBFsE .framer-zk8dqh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 360px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-yBFsE .framer-azb0nx { align-content: center; align-items: center; background-color: var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 140px 0px 140px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-yBFsE .framer-1x8w4uk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-1cde3ph { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-1hkyflr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 800px; }`,
        `.framer-yBFsE .framer-1h8wm1r { flex: none; height: auto; max-width: 900px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-yBFsE .framer-y8f3zz { --border-bottom-width: 1px; --border-color: var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-664c932f-0824-490a-ad68-61125df693ee); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 6px; position: relative; width: min-content; }`,
        `.framer-yBFsE .framer-igy5sh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 44px; justify-content: flex-start; left: 6px; padding: 0px 4px 0px 4px; pointer-events: none; position: absolute; top: 6px; width: 984px; }`,
        `.framer-yBFsE .framer-x4jyn, .framer-yBFsE .framer-1jm0jkv, .framer-yBFsE .framer-1tpkb4b, .framer-yBFsE .framer-1xgsm4b, .framer-yBFsE .framer-mb17gg, .framer-yBFsE .framer-t943l9 { --border-bottom-width: 1px; --border-color: var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-yBFsE .framer-18p4wkg-container { flex: none; height: 44px; left: 6px; position: absolute; top: 6px; width: 984px; z-index: 0; }`,
        `.framer-yBFsE .framer-11y7vuv, .framer-yBFsE .framer-vgnlc2, .framer-yBFsE .framer-1pecrl9, .framer-yBFsE .framer-1pav4n6, .framer-yBFsE .framer-d55at7, .framer-yBFsE .framer-ib0gd8 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 44px; justify-content: flex-start; padding: 0px; position: relative; width: 164px; z-index: 1; }`,
        `.framer-yBFsE .framer-qs90di-container, .framer-yBFsE .framer-5ysx9i-container, .framer-yBFsE .framer-159xymc-container, .framer-yBFsE .framer-lkglh4-container, .framer-yBFsE .framer-f59yat-container, .framer-yBFsE .framer-ig45au-container { flex: none; height: 44px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-17dh41t { display: grid; flex: none; gap: 48px 28px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-mglqgi { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yBFsE .framer-tva6ea-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Je,
        ...Fe,
        ...Ee,
        `.framer-yBFsE[data-border="true"]::after, .framer-yBFsE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-yBFsE.framer-6sy5y4 { width: 810px; } .framer-yBFsE .framer-11tinb0 { flex: 1 0 0px; width: 1px; } .framer-yBFsE .framer-zk8dqh { width: 300px; } .framer-yBFsE .framer-azb0nx { padding: 100px 0px 100px 0px; } .framer-yBFsE .framer-1hkyflr { width: 100%; } .framer-yBFsE .framer-y8f3zz { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; background-color: rgba(0, 0, 0, 0); border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; overflow: auto; padding: 0px; width: 100%; } .framer-yBFsE .framer-igy5sh, .framer-yBFsE .framer-18p4wkg-container { left: 0px; top: 0px; } .framer-yBFsE .framer-17dh41t { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-yBFsE.framer-6sy5y4 { width: 390px; } .framer-yBFsE .framer-bd751n { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; padding: 0px 20px 0px 20px; } .framer-yBFsE .framer-11tinb0, .framer-yBFsE .framer-zk8dqh, .framer-yBFsE .framer-1hkyflr { width: 100%; } .framer-yBFsE .framer-azb0nx { padding: 80px 0px 80px 0px; } .framer-yBFsE .framer-1x8w4uk { padding: 0px 20px 0px 20px; } .framer-yBFsE .framer-y8f3zz { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; background-color: rgba(0, 0, 0, 0); border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; overflow: auto; padding: 0px; width: 100%; } .framer-yBFsE .framer-igy5sh, .framer-yBFsE .framer-18p4wkg-container { left: 0px; top: 0px; } .framer-yBFsE .framer-17dh41t { gap: 16px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ]),
      (Q = v(Ht, Ut, `framer-yBFsE`)),
      (Q.displayName = `Journal`),
      (Q.defaultProps = { height: 4216, width: 1200 }),
      y(
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
          ..._t,
          ...vt,
          ...yt,
          ...bt,
          ...xt,
          ...P(Ye),
          ...P(Ie),
          ...P(De),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = h.get(G(), n, r);
          return fe(
            [
              () => i.preload(),
              () => S(L, {}, t),
              () => S(z, {}, t),
              () => S(B, {}, t),
              async () => {
                let e = (await he(() => i.readMaybeAsync(), t)) ?? [];
                return fe(
                  e.flatMap((e) => [() => S(L, {}, t), () => S(F, {}, t)]),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (Wt = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framerl2tkxitt1`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `4216`,
              framerScrollSections: `false`,
              framerComponentViewportWidth: `true`,
              framerAutoSizeImages: `true`,
              framerResponsiveScreen: `true`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"wexfZtfM7":{"layout":["fixed","auto"]},"Ry9e2LNEx":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `1200`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
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
export { Wt as __FramerMetadata__, Q as default, wt as queryParamNames };
//# sourceMappingURL=OlLZLc2UCASDiWXG9FydiECMN2S6K6Bi5zVLuje0SNU.ifp-iQOV.mjs.map
