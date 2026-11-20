import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  L as n,
  M as r,
  T as i,
  _ as a,
  b as o,
  c as s,
  j as c,
  l,
  o as u,
  p as d,
  s as f,
  w as ee,
  y as te,
  z as p,
} from "./react.BF5K0J5z.mjs";
import { i as m, o as h, t as g, w as _ } from "./motion.CyGOoZcc.mjs";
import {
  $ as v,
  A as y,
  B as b,
  C as x,
  Ct as S,
  D as ne,
  Et as C,
  K as w,
  M as T,
  O as re,
  R as E,
  St as ie,
  T as ae,
  Tt as D,
  _t as O,
  a as k,
  b as A,
  bt as oe,
  d as se,
  dt as ce,
  g as j,
  gt as le,
  i as M,
  kt as ue,
  lt as de,
  mt as fe,
  n as N,
  nt as P,
  o as F,
  p as pe,
  pt as me,
  rt as I,
  vt as L,
  w as R,
  x as z,
  yt as B,
  z as V,
} from "./framer.BMzpwY9X.mjs";
import {
  G as he,
  J as ge,
  K as H,
  X as _e,
  Y as ve,
  _ as ye,
  b as be,
  dt as xe,
  ft as Se,
  g as Ce,
  h as we,
  it as Te,
  lt as Ee,
  m as De,
  nt as Oe,
  p as ke,
  q as Ae,
  rt as je,
  tt as Me,
  ut as Ne,
  v as Pe,
  y as Fe,
} from "./toplevel-deps.TwMXxJp8.mjs";
import { n as Ie, t as Le } from "./JwXniSI7U.D8P5K7cq.mjs";
import { n as Re, t as ze } from "./XT2HPNEkm.Bbn4Mve7.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./yxzhfN2Rg.W01ar6hl.mjs";
import { a as We, r as U } from "./UtNF5Yexj.CnX57ltF.mjs";
import { i as Ge, n as Ke, r as qe, t as Je } from "./hAFZAFG_T.ClbRb6mR.mjs";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./Y9102JqgO.BXaERxvH.mjs";
import { i as $e, n as et, r as tt, t as nt } from "./Q8e0BPOzo.eqpcVF_o.mjs";
import { n as rt, r as it } from "./Z3GcHz7lc.BmAV7omM.mjs";
function at() {
  let e = p;
  return (
    (e.__satinPriceHover ||= { active: null, subs: /* @__PURE__ */ new Set() }),
    e.__satinPriceHover
  );
}
function ot(e) {
  let { title: t, style: n } = e,
    r = () => {
      let e = at();
      e.active !== t && ((e.active = t), e.subs.forEach((e) => e()));
    };
  return /*#__PURE__*/ u(`div`, {
    onPointerEnter: r,
    onPointerMove: r,
    style: { ...n, position: `relative`, width: `100%`, height: `100%` },
  });
}
function st() {
  return (st = e(() => {
    (n(), f(), w(), re(ot, { title: { type: F.String, title: `Title`, defaultValue: `` } }));
  }))();
}
function ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var lt, ut, dt, ft, pt, mt, ht, gt, _t, W;
function vt() {
  return (vt = e(() => {
    (f(),
      w(),
      g(),
      i(),
      st(),
      (lt = E(ot)),
      (ut = { DB8uMVJNW: { hover: !0 } }),
      (dt = `framer-P9ynu`),
      (ft = { DB8uMVJNW: `framer-v-wln07j` }),
      (pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mt = ({ value: e, children: t }) => {
        let n = c(h),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(h.Provider, { value: a, children: t });
      }),
      (ht = _.create(t)),
      (gt = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        UgReCFny1: n ?? i.UgReCFny1 ?? ``,
      })),
      (_t = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = S(
        /* @__PURE__ */ d(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, contentLocale: s, setLocale: c } = le(),
            d = de(),
            { style: f, className: te, layoutId: p, variant: h, UgReCFny1: g, ...v } = gt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ne,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: re,
              setVariant: E,
              variants: D,
            } = ie({
              defaultVariant: `DB8uMVJNW`,
              enabledGestures: ut,
              ref: r,
              variant: h,
              variantClassNames: ft,
            }),
            O = _t(e, D),
            k = y(dt);
          return /*#__PURE__*/ u(m, {
            id: p ?? i,
            children: /*#__PURE__*/ u(ht, {
              animate: D,
              initial: !1,
              children: /*#__PURE__*/ u(mt, {
                value: pt,
                children: /*#__PURE__*/ l(_.div, {
                  ...v,
                  ...C,
                  className: y(k, `framer-wln07j`, te, S),
                  "data-framer-name": `Default`,
                  layoutDependency: O,
                  layoutId: `DB8uMVJNW`,
                  ref: r,
                  style: { backgroundColor: `rgba(0, 0, 0, 0)`, ...f },
                  ...ct({ "DB8uMVJNW-hover": { "data-framer-name": void 0 } }, x, w),
                  children: [
                    /*#__PURE__*/ u(_.div, {
                      className: `framer-n3z4xf`,
                      "data-border": !0,
                      "data-framer-name": `Arrow ring`,
                      layoutDependency: O,
                      layoutId: `CDE49QmfL`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                        borderBottomLeftRadius: `50%`,
                        borderBottomRightRadius: `50%`,
                        borderTopLeftRadius: `50%`,
                        borderTopRightRadius: `50%`,
                      },
                      variants: {
                        "DB8uMVJNW-hover": {
                          "--border-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                          backgroundColor: `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                        },
                      },
                      children: /*#__PURE__*/ u(pe, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: b((d?.y || 0) + ((d?.height || 110) - 33) / 2 + 10.5),
                          pixelHeight: 16,
                          pixelWidth: 16,
                          sizes: `12px`,
                          src: `../../assets/images/ZxFNRd4qSeOYwgpSwNp2hpkgK2k.svg`,
                        },
                        className: `framer-kp6cqp`,
                        "data-framer-name": `Arrow`,
                        layoutDependency: O,
                        layoutId: `JTMGj6EEj`,
                        ...ct(
                          {
                            "DB8uMVJNW-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: b((d?.y || 0) + ((d?.height || 110) - 33) / 2 + 10.5),
                                pixelHeight: 16,
                                pixelWidth: 16,
                                sizes: `12px`,
                                src: `../../assets/images/sNEoT8KKiQ4rPKYnXK0JBPwvZc.svg`,
                              },
                            },
                          },
                          x,
                          w
                        ),
                      }),
                    }),
                    /*#__PURE__*/ u(M, {
                      children: /*#__PURE__*/ u(ae, {
                        className: `framer-1tt5lmi-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `Hover Trigger`,
                        isAuthoredByUser: !0,
                        layoutDependency: O,
                        layoutId: `wqoCpHeht-container`,
                        name: `Hover Trigger`,
                        nodeId: `wqoCpHeht`,
                        rendersWithMotion: !0,
                        scopeId: `k_orJ7jNq`,
                        children: /*#__PURE__*/ u(ot, {
                          height: `100%`,
                          id: `wqoCpHeht`,
                          layoutId: `wqoCpHeht`,
                          name: `Hover Trigger`,
                          style: { height: `100%`, width: `100%` },
                          title: g,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-P9ynu.framer-pmij3u, .framer-P9ynu .framer-pmij3u { display: block; }`,
          `.framer-P9ynu.framer-wln07j { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 110px; justify-content: flex-end; padding: 0px; position: relative; width: 600px; }`,
          `.framer-P9ynu .framer-n3z4xf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 33px; justify-content: center; padding: 0px; position: relative; width: 34px; }`,
          `.framer-P9ynu .framer-kp6cqp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 12px; justify-content: flex-start; padding: 0px; position: relative; width: 12px; }`,
          `.framer-P9ynu .framer-1tt5lmi-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-P9ynu[data-border="true"]::after, .framer-P9ynu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-P9ynu`
      )),
      (W.displayName = `Row Hover`),
      (W.defaultProps = { height: 110, width: 600 }),
      re(W, {
        UgReCFny1: { defaultValue: ``, title: `Title`, type: F.String },
        onUgReCFny1Change: { changes: `UgReCFny1`, type: F.ChangeHandler },
      }),
      ne(W, [{ explicitInter: !0, fonts: [] }, ...lt], { supportsExplicitInterCodegen: !0 }));
  }))();
}
function yt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, G;
function Mt() {
  return (Mt = e(() => {
    (f(),
      w(),
      g(),
      i(),
      Be(),
      (bt = { aun_Gs9z1: { hover: !0 } }),
      (xt = [`aun_Gs9z1`, `kgWCYyGAo`]),
      (St = `framer-dwqD8`),
      (Ct = { aun_Gs9z1: `framer-v-1rgdi5z`, kgWCYyGAo: `framer-v-1jc8vxd` }),
      (wt = { delay: 0, duration: 0.45, ease: [0.2, 0.7, 0.2, 1], type: `tween` }),
      (Tt = ({ value: e, children: t }) => {
        let n = c(h),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(h.Provider, { value: a, children: t });
      }),
      (Et = { Active: `kgWCYyGAo`, Default: `aun_Gs9z1` }),
      (Dt = _.create(t)),
      (Ot = ({ height: e, id: t, label: n, link: r, width: i, ...a }) => ({
        ...a,
        JpqybaiNM: r ?? a.JpqybaiNM,
        variant: Et[a.variant] ?? a.variant ?? `aun_Gs9z1`,
        XjIQ4pgAP: n ?? a.XjIQ4pgAP ?? `Injectables`,
      })),
      (kt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (At = /*#__PURE__*/ d(function (e, n) {
        let r = o(null),
          i = n ?? r,
          a = ee(),
          { activeLocale: s, contentLocale: c, setLocale: d } = le();
        de();
        let {
            style: f,
            className: te,
            layoutId: p,
            variant: h,
            XjIQ4pgAP: g,
            JpqybaiNM: v,
            ...b
          } = Ot(e),
          {
            baseVariant: x,
            classNames: S,
            clearLoadingGesture: ne,
            gestureHandlers: C,
            gestureVariant: w,
            isLoading: T,
            setGestureState: re,
            setVariant: E,
            variants: ae,
          } = ie({
            cycleOrder: xt,
            defaultVariant: `aun_Gs9z1`,
            enabledGestures: bt,
            ref: i,
            variant: h,
            variantClassNames: Ct,
          }),
          D = kt(e, ae),
          O = y(St, Ue);
        return /*#__PURE__*/ u(m, {
          id: p ?? a,
          children: /*#__PURE__*/ u(Dt, {
            animate: ae,
            initial: !1,
            children: /*#__PURE__*/ u(Tt, {
              value: wt,
              children: /*#__PURE__*/ u(j, {
                href: v,
                motionChild: !0,
                nodeId: `aun_Gs9z1`,
                scopeId: `w9FbyjpHP`,
                children: /*#__PURE__*/ l(_.a, {
                  ...b,
                  ...C,
                  className: `${y(O, `framer-1rgdi5z`, te, S)} framer-1yxaplo`,
                  "data-framer-name": `Default`,
                  layoutDependency: D,
                  layoutId: `aun_Gs9z1`,
                  ref: i,
                  style: { ...f },
                  ...yt(
                    {
                      "aun_Gs9z1-hover": { "data-framer-name": void 0 },
                      kgWCYyGAo: { "data-framer-name": `Active` },
                    },
                    x,
                    w
                  ),
                  children: [
                    /*#__PURE__*/ u(_.div, {
                      className: `framer-1rv2n9f`,
                      "data-framer-name": `Dot`,
                      layoutDependency: D,
                      layoutId: `kxY3npxTq`,
                      style: {
                        backgroundColor: `var(--token-f0b3604a-2dab-4f5e-9790-adcb2b968a7a)`,
                        borderBottomLeftRadius: `50%`,
                        borderBottomRightRadius: `50%`,
                        borderTopLeftRadius: `50%`,
                        borderTopRightRadius: `50%`,
                        opacity: 0,
                      },
                      variants: { kgWCYyGAo: { opacity: 1 } },
                    }),
                    /*#__PURE__*/ u(R, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ u(t, {
                        children: /*#__PURE__*/ u(_.p, {
                          className: `framer-styles-preset-19oisb3`,
                          "data-styles-preset": `yxzhfN2Rg`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                          },
                          children: `Label`,
                        }),
                      }),
                      className: `framer-kb956`,
                      fonts: [`Inter`],
                      layoutDependency: D,
                      layoutId: `m9aoOKJPd`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                      },
                      text: g,
                      variants: {
                        "aun_Gs9z1-hover": {
                          "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                        },
                        kgWCYyGAo: {
                          "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...yt(
                        {
                          "aun_Gs9z1-hover": {
                            children: /*#__PURE__*/ u(t, {
                              children: /*#__PURE__*/ u(_.p, {
                                className: `framer-styles-preset-19oisb3`,
                                "data-styles-preset": `yxzhfN2Rg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                                },
                                children: `Injectables`,
                              }),
                            }),
                          },
                          kgWCYyGAo: {
                            children: /*#__PURE__*/ u(t, {
                              children: /*#__PURE__*/ u(_.p, {
                                className: `framer-styles-preset-19oisb3`,
                                "data-styles-preset": `yxzhfN2Rg`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `start`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                                },
                                children: `Injectables`,
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
          }),
        });
      })),
      (jt = [
        `.framer-dwqD8.framer-1yxaplo, .framer-dwqD8 .framer-1yxaplo { display: block; }`,
        `.framer-dwqD8.framer-1rgdi5z { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 8px 0px 8px 0px; position: relative; text-decoration: none; width: 240px; }`,
        `.framer-dwqD8 .framer-1rv2n9f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 6px; justify-content: center; padding: 0px; position: relative; width: 6px; }`,
        `.framer-dwqD8 .framer-kb956 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        ...Ve,
      ]),
      (G = S(At, jt, `framer-dwqD8`)),
      (G.displayName = `Price Menu Item`),
      (G.defaultProps = { height: 200, width: 200 }),
      re(G, {
        variant: {
          options: [`aun_Gs9z1`, `kgWCYyGAo`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: F.Enum,
        },
        XjIQ4pgAP: { defaultValue: `Injectables`, title: `Label`, type: F.String },
        onXjIQ4pgAPChange: { changes: `XjIQ4pgAP`, type: F.ChangeHandler },
        JpqybaiNM: { title: `Link`, type: F.Link },
      }),
      ne(
        G,
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
          ...V(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Nt() {
  let e = p;
  return (
    (e.__satinPriceHover ||= { active: null, subs: /* @__PURE__ */ new Set() }),
    e.__satinPriceHover
  );
}
function Pt(e) {
  let { image: t, title: n, style: r } = e,
    [i, o] = a(!1);
  return (
    te(() => {
      let e = Nt(),
        t = () => o(e.active === n);
      return (
        t(),
        e.subs.add(t),
        () => {
          e.subs.delete(t);
        }
      );
    }, [n]),
    t?.src
      ? /*#__PURE__*/ u(`img`, {
          src: t.src,
          srcSet: t.srcSet,
          sizes: `(min-width: 1200px) 300px, 100vw`,
          alt: t.alt || ``,
          loading: `eager`,
          decoding: `async`,
          style: {
            ...r,
            position: `relative`,
            display: `block`,
            width: `100%`,
            height: `100%`,
            objectFit: `cover`,
            opacity: +!!i,
            transition: `opacity 0.35s ease`,
            pointerEvents: `none`,
          },
        })
      : /*#__PURE__*/ u(`div`, { style: { ...r, position: `relative` } })
  );
}
function Ft() {
  return (Ft = e(() => {
    (n(),
      f(),
      i(),
      w(),
      re(Pt, {
        image: { type: F.ResponsiveImage, title: `Image` },
        title: { type: F.String, title: `Title`, defaultValue: `` },
      }));
  }))();
}
var It,
  Lt,
  Rt,
  zt,
  Bt,
  K,
  Vt,
  Ht,
  q,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  J,
  nn,
  rn,
  Y,
  X,
  Z,
  Q,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  $,
  mn;
function hn() {
  return (hn = e(() => {
    (f(),
      w(),
      g(),
      i(),
      Ie(),
      vt(),
      H(),
      Mt(),
      Re(),
      Ft(),
      We(),
      Ge(),
      Te(),
      be(),
      $e(),
      _e(),
      Se(),
      Ce(),
      Ye(),
      Be(),
      rt(),
      (It = D(pe)),
      (Lt = C(R)),
      (Rt = C(_.div)),
      (zt = E(ze)),
      (Bt = E(G)),
      (K = ue(G)),
      (Vt = E(Pt)),
      (Ht = E(W)),
      (q = D(_.div)),
      (Ut = E(he)),
      (Wt = {
        k0isVn87J: `(min-width: 1200px)`,
        Se6hs0Rrv: `(min-width: 810px) and (max-width: 1199.98px)`,
        V3vOEkfF4: `(max-width: 809.98px)`,
      }),
      (Gt = () => typeof document < `u`),
      (Kt = []),
      (qt = `framer-sMim8`),
      (Jt = {
        k0isVn87J: `framer-v-hdm93e`,
        Se6hs0Rrv: `framer-v-19wbiz7`,
        V3vOEkfF4: `framer-v-b61gza`,
      }),
      (Yt = (e, t, n) => (e && t ? `position` : n)),
      (Xt = {
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
      (Zt = {
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
      (Qt = {
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
      ($t = {
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
      (en = {
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
      (tn = {
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
      (nn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (rn = () => ({
        from: { alias: `ANHZDacMO`, data: U, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        select: [
          { collection: `ANHZDacMO`, name: `slZMTzAXI`, type: `Identifier` },
          { collection: `ANHZDacMO`, name: `C0EPUrxhE`, type: `Identifier` },
          { collection: `ANHZDacMO`, name: `cm6YBFu8C`, type: `Identifier` },
          { collection: `ANHZDacMO`, name: `id`, type: `Identifier` },
        ],
      })),
      (Y = ({ query: e, pageSize: t, children: n }) => n(L(e))),
      (X = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (Z = { delay: 0, duration: 1, ease: [0.2, 0.7, 0.2, 1], type: `tween` }),
      (Q = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Z,
        x: 0,
        y: 40,
      }),
      (an = () => ({
        from: { alias: `FRV8vhgQ5`, data: U, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [{ collection: `FRV8vhgQ5`, name: `SyXuXgguS`, type: `Identifier` }],
        select: [
          { collection: `FRV8vhgQ5`, name: `cm6YBFu8C`, type: `Identifier` },
          { collection: `FRV8vhgQ5`, name: `C0EPUrxhE`, type: `Identifier` },
          { collection: `FRV8vhgQ5`, name: `FkEUFpxi_`, type: `Identifier` },
          { collection: `FRV8vhgQ5`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `FRV8vhgQ5`, name: `VQbbJjVei`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `aSEV4M8Ku` },
          type: `BinaryOperation`,
        },
      })),
      (on = () => ({
        from: { alias: `b8Cyje57M`, data: U, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [{ collection: `b8Cyje57M`, name: `SyXuXgguS`, type: `Identifier` }],
        select: [
          { collection: `b8Cyje57M`, name: `cm6YBFu8C`, type: `Identifier` },
          { collection: `b8Cyje57M`, name: `C0EPUrxhE`, type: `Identifier` },
          { collection: `b8Cyje57M`, name: `FkEUFpxi_`, type: `Identifier` },
          { collection: `b8Cyje57M`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `b8Cyje57M`, name: `VQbbJjVei`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `p_nSTcYnu` },
          type: `BinaryOperation`,
        },
      })),
      (sn = () => ({
        from: { alias: `e5HAD6qE_`, data: U, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [{ collection: `e5HAD6qE_`, name: `SyXuXgguS`, type: `Identifier` }],
        select: [
          { collection: `e5HAD6qE_`, name: `cm6YBFu8C`, type: `Identifier` },
          { collection: `e5HAD6qE_`, name: `C0EPUrxhE`, type: `Identifier` },
          { collection: `e5HAD6qE_`, name: `FkEUFpxi_`, type: `Identifier` },
          { collection: `e5HAD6qE_`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `e5HAD6qE_`, name: `VQbbJjVei`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `PzyJgwQ5x` },
          type: `BinaryOperation`,
        },
      })),
      (cn = () => ({
        from: { alias: `kJyVI5FwQ`, data: U, type: `Collection` },
        limit: { type: `LiteralValue`, value: 5001 },
        orderBy: [{ collection: `kJyVI5FwQ`, name: `SyXuXgguS`, type: `Identifier` }],
        select: [
          { collection: `kJyVI5FwQ`, name: `cm6YBFu8C`, type: `Identifier` },
          { collection: `kJyVI5FwQ`, name: `C0EPUrxhE`, type: `Identifier` },
          { collection: `kJyVI5FwQ`, name: `FkEUFpxi_`, type: `Identifier` },
          { collection: `kJyVI5FwQ`, name: `id`, type: `Identifier` },
        ],
        where: {
          left: { collection: `kJyVI5FwQ`, name: `VQbbJjVei`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: `SwPpxCtQI` },
          type: `BinaryOperation`,
        },
      })),
      (ln = { Desktop: `k0isVn87J`, Phone: `V3vOEkfF4`, Tablet: `Se6hs0Rrv` }),
      (un = ({ value: e }) =>
        fe()
          ? null
          : /*#__PURE__*/ u(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (dn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ln[r.variant] ?? r.variant ?? `k0isVn87J`,
      })),
      (fn = /*#__PURE__*/ d(function (e, n) {
        let i = o(null),
          a = n ?? i;
        ee();
        let { activeLocale: d, contentLocale: f, setLocale: te } = le(),
          p = de(),
          { style: g, className: v, layoutId: S, variant: ne, ...C } = dn(e),
          w = r(() => it({}, f), [f]);
        O(w);
        let [T, re] = me(ne, Wt, !1),
          E = y(qt, Qe, Je, Ue, Me, Ee, ye, Ae, ke, nt),
          ie = c(se)?.isLayoutTemplate,
          ae = !!c(h)?.transition?.layout,
          D = Yt(ie, ae),
          ue = B(`LdjdhqUKc`),
          fe = o(null);
        oe();
        let P = o(null),
          F = o(null),
          I = o(null),
          L = o(null),
          V = () => !Gt() || ![`Se6hs0Rrv`, `V3vOEkfF4`].includes(T),
          ge = B(`DGg6mVIcS`),
          H = () => !Gt() || T !== `V3vOEkfF4`,
          _e = B(`LesYITsZk`),
          ve = B(`YRZBJULwD`),
          be = B(`A_orpib4n`);
        return (
          ce({}),
          /*#__PURE__*/ u(se.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: ln,
              primaryVariantId: `k0isVn87J`,
              variantClassNames: Jt,
            },
            children: /*#__PURE__*/ l(m, {
              id: S ?? `Z3GcHz7lc`,
              children: [
                /*#__PURE__*/ u(un, { value: `html body { background: rgb(255, 255, 255); }` }),
                /*#__PURE__*/ u(_.div, {
                  ...C,
                  className: y(E, `framer-hdm93e`, v),
                  ref: a,
                  style: { ...g },
                  children: /*#__PURE__*/ l(_.main, {
                    className: `framer-1uwtxll`,
                    "data-framer-name": `Main`,
                    layout: D,
                    children: [
                      /*#__PURE__*/ l(`div`, {
                        className: `framer-1puaiui`,
                        "data-framer-name": `Hero`,
                        id: ue,
                        ref: fe,
                        children: [
                          /*#__PURE__*/ u(It, {
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
                              alt: `Smiling patient viewing her photos on a tablet held by a clinician`,
                              fit: `fill`,
                              loading: b(p?.y || 0),
                              pixelHeight: 1728,
                              pixelWidth: 2304,
                              sizes: p?.width || `100vw`,
                              src: `../../assets/illustrations/shaga-consultation.jpg`,
                              srcSet: `../../assets/illustrations/shaga-consultation.jpg 512w,../../assets/illustrations/shaga-consultation.jpg 1024w,../../assets/illustrations/shaga-consultation.jpg 2048w,../../assets/illustrations/shaga-consultation.jpg 2304w`,
                            },
                            className: `framer-vcfv9i`,
                            "data-framer-name": `Photo`,
                          }),
                          /*#__PURE__*/ u(`div`, {
                            className: `framer-10w2780`,
                            "data-framer-name": `Shade`,
                          }),
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-195r7on`,
                            "data-framer-name": `Content`,
                            children: [
                              /*#__PURE__*/ l(`div`, {
                                className: `framer-1nyukh0`,
                                "data-framer-name": `Title`,
                                children: [
                                  /*#__PURE__*/ u(Lt, {
                                    __fromCanvasComponent: !0,
                                    animate: Xt,
                                    children: /*#__PURE__*/ u(t, {
                                      children: /*#__PURE__*/ u(`h1`, {
                                        className: `framer-styles-preset-i1c9y9`,
                                        "data-styles-preset": `Y9102JqgO`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                        },
                                        children: `Prices`,
                                      }),
                                    }),
                                    className: `framer-1felkln`,
                                    "data-framer-appear-id": `1felkln`,
                                    fonts: [`Inter`],
                                    initial: Zt,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ u(Lt, {
                                    __fromCanvasComponent: !0,
                                    animate: Qt,
                                    children: /*#__PURE__*/ u(t, {
                                      children: /*#__PURE__*/ u(`h2`, {
                                        className: `framer-styles-preset-dtv0vy`,
                                        "data-styles-preset": `hAFZAFG_T`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-2ddfb4b0-e2a1-4651-80b0-52240267f6fc)`,
                                        },
                                        children: `in plain sight.`,
                                      }),
                                    }),
                                    className: `framer-11xikw9`,
                                    "data-framer-appear-id": `11xikw9`,
                                    fonts: [`Inter`],
                                    initial: $t,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ u(Rt, {
                                animate: en,
                                className: `framer-1tsuu6v`,
                                "data-framer-appear-id": `1tsuu6v`,
                                "data-framer-name": `Intro`,
                                initial: tn,
                                optimized: !0,
                                children: /*#__PURE__*/ u(R, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ u(t, {
                                    children: /*#__PURE__*/ u(`p`, {
                                      className: `framer-styles-preset-19oisb3`,
                                      "data-styles-preset": `yxzhfN2Rg`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-664c932f-0824-490a-ad68-61125df693ee)`,
                                      },
                                      children: `Every price is listed before you book. Your clinician recommends the path that fits your skin, and you get the total in writing.`,
                                    }),
                                  }),
                                  className: `framer-1wytltq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      /*#__PURE__*/ l(`div`, {
                        className: `framer-1mihcj4`,
                        "data-framer-name": `Price list`,
                        children: [
                          /*#__PURE__*/ l(`div`, {
                            className: `framer-bg8mfj`,
                            "data-framer-name": `Container`,
                            children: [
                              /*#__PURE__*/ l(`div`, {
                                className: `framer-1qb5dsv`,
                                "data-framer-name": `Aside`,
                                children: [
                                  /*#__PURE__*/ u(z, {
                                    breakpoint: T,
                                    overrides: {
                                      Se6hs0Rrv: { y: (p?.y || 0) + 700 },
                                      V3vOEkfF4: { y: (p?.y || 0) + 730 },
                                    },
                                    children: /*#__PURE__*/ u(M, {
                                      height: 200,
                                      y: (p?.y || 0) + 940,
                                      children: /*#__PURE__*/ u(k, {
                                        className: `framer-hpo7g-container`,
                                        nodeId: `dkSFi6zzc`,
                                        scopeId: `Z3GcHz7lc`,
                                        children: /*#__PURE__*/ u(ze, {
                                          a3s5gDorS: `Price list`,
                                          height: `100%`,
                                          id: `dkSFi6zzc`,
                                          layoutId: `dkSFi6zzc`,
                                          PEYR80g6u: Le,
                                          variant: J(`cMc9E2xro`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ l(`div`, {
                                    className: `framer-j5ucqz`,
                                    "data-framer-name": `Menu`,
                                    children: [
                                      /*#__PURE__*/ u(x, {
                                        links: [
                                          {
                                            href: { hash: `:DGg6mVIcS`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:DGg6mVIcS`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:DGg6mVIcS`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          /*#__PURE__*/ u(z, {
                                            breakpoint: T,
                                            overrides: {
                                              Se6hs0Rrv: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                y: (p?.y || 0) + 932,
                                              },
                                              V3vOEkfF4: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                y: (p?.y || 0) + 962,
                                              },
                                            },
                                            children: /*#__PURE__*/ u(M, {
                                              height: 200,
                                              width: `260px`,
                                              y: (p?.y || 0) + 1172,
                                              children: /*#__PURE__*/ u(k, {
                                                className: `framer-1fxx2m6-container`,
                                                nodeId: `JDSSNJtYJ`,
                                                rendersWithMotion: !0,
                                                scopeId: `Z3GcHz7lc`,
                                                children: /*#__PURE__*/ u(z, {
                                                  breakpoint: T,
                                                  overrides: {
                                                    Se6hs0Rrv: { JpqybaiNM: e[1] },
                                                    V3vOEkfF4: { JpqybaiNM: e[2] },
                                                  },
                                                  children: /*#__PURE__*/ u(K, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [
                                                      { offset: 130, ref: P, target: `kgWCYyGAo` },
                                                      { offset: 130, ref: F, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: I, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: L, target: `aun_Gs9z1` },
                                                    ],
                                                    __framer__threshold: 0.2,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    height: `100%`,
                                                    id: `JDSSNJtYJ`,
                                                    JpqybaiNM: e[0],
                                                    layoutId: `JDSSNJtYJ`,
                                                    style: { width: `100%` },
                                                    variant: J(`aun_Gs9z1`),
                                                    width: `100%`,
                                                    XjIQ4pgAP: `Injectables`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                      /*#__PURE__*/ u(x, {
                                        links: [
                                          {
                                            href: { hash: `:LesYITsZk`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:LesYITsZk`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:LesYITsZk`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          /*#__PURE__*/ u(z, {
                                            breakpoint: T,
                                            overrides: {
                                              Se6hs0Rrv: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                y: (p?.y || 0) + 1132,
                                              },
                                              V3vOEkfF4: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                y: (p?.y || 0) + 1162,
                                              },
                                            },
                                            children: /*#__PURE__*/ u(M, {
                                              height: 200,
                                              width: `260px`,
                                              y: (p?.y || 0) + 1372,
                                              children: /*#__PURE__*/ u(k, {
                                                className: `framer-1eft092-container`,
                                                nodeId: `wloCeEKJ6`,
                                                rendersWithMotion: !0,
                                                scopeId: `Z3GcHz7lc`,
                                                children: /*#__PURE__*/ u(z, {
                                                  breakpoint: T,
                                                  overrides: {
                                                    Se6hs0Rrv: { JpqybaiNM: e[1] },
                                                    V3vOEkfF4: { JpqybaiNM: e[2] },
                                                  },
                                                  children: /*#__PURE__*/ u(K, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [
                                                      { offset: 130, ref: P, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: F, target: `kgWCYyGAo` },
                                                      { offset: 130, ref: I, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: L, target: `aun_Gs9z1` },
                                                    ],
                                                    __framer__threshold: 0.2,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    height: `100%`,
                                                    id: `wloCeEKJ6`,
                                                    JpqybaiNM: e[0],
                                                    layoutId: `wloCeEKJ6`,
                                                    style: { width: `100%` },
                                                    variant: J(`aun_Gs9z1`),
                                                    width: `100%`,
                                                    XjIQ4pgAP: `Skin`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                      /*#__PURE__*/ u(x, {
                                        links: [
                                          {
                                            href: { hash: `:YRZBJULwD`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:YRZBJULwD`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:YRZBJULwD`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          /*#__PURE__*/ u(z, {
                                            breakpoint: T,
                                            overrides: {
                                              Se6hs0Rrv: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                y: (p?.y || 0) + 1332,
                                              },
                                              V3vOEkfF4: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                y: (p?.y || 0) + 1362,
                                              },
                                            },
                                            children: /*#__PURE__*/ u(M, {
                                              height: 200,
                                              width: `260px`,
                                              y: (p?.y || 0) + 1572,
                                              children: /*#__PURE__*/ u(k, {
                                                className: `framer-5h70xs-container`,
                                                nodeId: `v1ydm3PYY`,
                                                rendersWithMotion: !0,
                                                scopeId: `Z3GcHz7lc`,
                                                children: /*#__PURE__*/ u(z, {
                                                  breakpoint: T,
                                                  overrides: {
                                                    Se6hs0Rrv: { JpqybaiNM: e[1] },
                                                    V3vOEkfF4: { JpqybaiNM: e[2] },
                                                  },
                                                  children: /*#__PURE__*/ u(K, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [
                                                      { offset: 130, ref: P, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: F, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: I, target: `kgWCYyGAo` },
                                                      { offset: 130, ref: L, target: `aun_Gs9z1` },
                                                    ],
                                                    __framer__threshold: 0.2,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    height: `100%`,
                                                    id: `v1ydm3PYY`,
                                                    JpqybaiNM: e[0],
                                                    layoutId: `v1ydm3PYY`,
                                                    style: { width: `100%` },
                                                    variant: J(`aun_Gs9z1`),
                                                    width: `100%`,
                                                    XjIQ4pgAP: `Laser & light`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                      /*#__PURE__*/ u(x, {
                                        links: [
                                          {
                                            href: { hash: `:A_orpib4n`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:A_orpib4n`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { hash: `:A_orpib4n`, webPageId: `Z3GcHz7lc` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          /*#__PURE__*/ u(z, {
                                            breakpoint: T,
                                            overrides: {
                                              Se6hs0Rrv: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                y: (p?.y || 0) + 1532,
                                              },
                                              V3vOEkfF4: {
                                                width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                y: (p?.y || 0) + 1562,
                                              },
                                            },
                                            children: /*#__PURE__*/ u(M, {
                                              height: 200,
                                              width: `260px`,
                                              y: (p?.y || 0) + 1772,
                                              children: /*#__PURE__*/ u(k, {
                                                className: `framer-uponi-container`,
                                                nodeId: `p05Hj_Bv8`,
                                                rendersWithMotion: !0,
                                                scopeId: `Z3GcHz7lc`,
                                                children: /*#__PURE__*/ u(z, {
                                                  breakpoint: T,
                                                  overrides: {
                                                    Se6hs0Rrv: { JpqybaiNM: e[1] },
                                                    V3vOEkfF4: { JpqybaiNM: e[2] },
                                                  },
                                                  children: /*#__PURE__*/ u(K, {
                                                    __framer__animateOnce: !1,
                                                    __framer__targets: [
                                                      { offset: 130, ref: P, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: F, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: I, target: `aun_Gs9z1` },
                                                      { offset: 130, ref: L, target: `kgWCYyGAo` },
                                                    ],
                                                    __framer__threshold: 0.2,
                                                    __framer__variantAppearEffectEnabled: !0,
                                                    height: `100%`,
                                                    id: `p05Hj_Bv8`,
                                                    JpqybaiNM: e[0],
                                                    layoutId: `p05Hj_Bv8`,
                                                    style: { width: `100%` },
                                                    variant: J(`aun_Gs9z1`),
                                                    width: `100%`,
                                                    XjIQ4pgAP: `Body`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                  /*#__PURE__*/ u(R, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ u(t, {
                                      children: /*#__PURE__*/ u(`p`, {
                                        className: `framer-styles-preset-j520p6`,
                                        "data-styles-preset": `KO8C83HIN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                        },
                                        children: `All prices are starting prices. Your clinician confirms the total in writing before you start.`,
                                      }),
                                    }),
                                    className: `framer-1pmb6fo`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  V() &&
                                    /*#__PURE__*/ l(`div`, {
                                      className: `framer-7xkppz hidden-19wbiz7 hidden-b61gza`,
                                      "data-framer-name": `Photo holder`,
                                      children: [
                                        /*#__PURE__*/ u(pe, {
                                          background: {
                                            alt: `Smiling woman seated in a beige treatment chair`,
                                            fit: `fill`,
                                            loading: b((p?.y || 0) + 2141),
                                            pixelHeight: 2e3,
                                            pixelWidth: 2e3,
                                            sizes: `260px`,
                                            src: `../../assets/illustrations/shaga-haircut-men.jpg`,
                                            srcSet: `../../assets/illustrations/shaga-haircut-men.jpg 512w,../../assets/illustrations/shaga-haircut-men.jpg 1024w,../../assets/illustrations/shaga-haircut-men.jpg 2000w`,
                                          },
                                          className: `framer-kms153`,
                                          "data-framer-name": `Default photo`,
                                        }),
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-125nb8j`,
                                          "data-framer-name": `Hover photos`,
                                          children: /*#__PURE__*/ u(N, {
                                            children: /*#__PURE__*/ u(Y, {
                                              query: rn(),
                                              children: (e, t, n) =>
                                                /*#__PURE__*/ u(s, {
                                                  children: e?.map(
                                                    (
                                                      {
                                                        C0EPUrxhE: e,
                                                        cm6YBFu8C: t,
                                                        id: n,
                                                        slZMTzAXI: r,
                                                      },
                                                      i
                                                    ) => (
                                                      (e ??= ``),
                                                      (t ??= ``),
                                                      /*#__PURE__*/ u(
                                                        m,
                                                        {
                                                          id: `ANHZDacMO-${n}`,
                                                          children: /*#__PURE__*/ u(A.Provider, {
                                                            value: { cm6YBFu8C: t },
                                                            children: /*#__PURE__*/ u(M, {
                                                              children: /*#__PURE__*/ u(k, {
                                                                className: `framer-1slh51s-container`,
                                                                "data-code-component-plugin-id": `api`,
                                                                "data-framer-name": `Hover photo`,
                                                                isAuthoredByUser: !0,
                                                                name: `Hover photo`,
                                                                nodeId: `BqefcDUpF`,
                                                                scopeId: `Z3GcHz7lc`,
                                                                children: /*#__PURE__*/ u(Pt, {
                                                                  height: `100%`,
                                                                  id: `BqefcDUpF`,
                                                                  image: nn(r),
                                                                  layoutId: `BqefcDUpF`,
                                                                  name: `Hover photo`,
                                                                  style: {
                                                                    height: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                  title: e,
                                                                  width: `100%`,
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
                                ],
                              }),
                              /*#__PURE__*/ l(`div`, {
                                className: `framer-cuchpj`,
                                "data-framer-name": `Lists`,
                                children: [
                                  /*#__PURE__*/ l(q, {
                                    __framer__animate: { transition: Z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1i9ziq1`,
                                    "data-framer-name": `Injectables`,
                                    id: ge,
                                    ref: P,
                                    children: [
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-5mbun2`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`p`, {
                                                className: `framer-styles-preset-gyt55z`,
                                                "data-styles-preset": `u9_0JRzz7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                },
                                                children: `(1)`,
                                              }),
                                            }),
                                            className: `framer-89aedp`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`h2`, {
                                                className: `framer-styles-preset-6v63kf`,
                                                "data-styles-preset": `LxN6valwV`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                },
                                                children: `Injectables`,
                                              }),
                                            }),
                                            className: `framer-93fg3c`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      H() &&
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-1jytnz2 hidden-b61gza`,
                                          "data-framer-name": `Columns`,
                                          children: [
                                            /*#__PURE__*/ u(R, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ u(t, {
                                                children: /*#__PURE__*/ u(`p`, {
                                                  className: `framer-styles-preset-gyt55z`,
                                                  "data-styles-preset": `u9_0JRzz7`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                  },
                                                  children: `Treatment`,
                                                }),
                                              }),
                                              className: `framer-19x17lc`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-1citnq8`,
                                              "data-framer-name": `Right`,
                                              children: [
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Option`,
                                                    }),
                                                  }),
                                                  className: `framer-1v8reu8`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `From`,
                                                    }),
                                                  }),
                                                  className: `framer-6lqpf8`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Members`,
                                                    }),
                                                  }),
                                                  className: `framer-vm3f7w`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-15iv34t`,
                                        "data-border": !0,
                                        "data-framer-name": `Rows`,
                                        children: /*#__PURE__*/ u(N, {
                                          children: /*#__PURE__*/ u(Y, {
                                            query: an(),
                                            children: (e, n, r) =>
                                              /*#__PURE__*/ u(s, {
                                                children: e?.map(
                                                  (
                                                    {
                                                      C0EPUrxhE: e,
                                                      cm6YBFu8C: n,
                                                      FkEUFpxi_: r,
                                                      id: i,
                                                    },
                                                    a
                                                  ) => (
                                                    (n ??= ``),
                                                    (e ??= ``),
                                                    (r ??= []),
                                                    /*#__PURE__*/ u(
                                                      m,
                                                      {
                                                        id: `FRV8vhgQ5-${i}`,
                                                        children: /*#__PURE__*/ u(A.Provider, {
                                                          value: { cm6YBFu8C: n },
                                                          children: /*#__PURE__*/ u(j, {
                                                            href: {
                                                              pathVariables: { cm6YBFu8C: n },
                                                              webPageId: `XiBefzIqK`,
                                                            },
                                                            motionChild: !0,
                                                            nodeId: `IzlZITJMg`,
                                                            scopeId: `Z3GcHz7lc`,
                                                            children: /*#__PURE__*/ l(_.a, {
                                                              className: `framer-vex7ae framer-1qj86l`,
                                                              "data-border": !0,
                                                              "data-framer-name": `Row`,
                                                              children: [
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-11fbxxr`,
                                                                  "data-framer-name": `Name`,
                                                                  children: /*#__PURE__*/ u(R, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: /*#__PURE__*/ u(t, {
                                                                      children: /*#__PURE__*/ u(
                                                                        `h3`,
                                                                        {
                                                                          className: `framer-styles-preset-94eeon`,
                                                                          "data-styles-preset": `SFS3lU2AV`,
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--framer-text-alignment": `start`,
                                                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                          },
                                                                          children: `Title`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                    className: `framer-pr5cth`,
                                                                    fonts: [`Inter`],
                                                                    text: e,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                }),
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-8zpprd`,
                                                                  "data-framer-name": `Options`,
                                                                  children: r?.map(
                                                                    (
                                                                      {
                                                                        beajm0aEo: e,
                                                                        cIJn4acxd: n,
                                                                        id: r,
                                                                        vWSpPAYGV: i,
                                                                      },
                                                                      a
                                                                    ) => (
                                                                      (n ??= ``),
                                                                      (e ??= ``),
                                                                      (i ??= ``),
                                                                      /*#__PURE__*/ u(
                                                                        m,
                                                                        {
                                                                          id: `NUupsMHYK-${r ?? a}`,
                                                                          children: /*#__PURE__*/ l(
                                                                            `div`,
                                                                            {
                                                                              className: `framer-19ukaac`,
                                                                              "data-framer-name": `Option`,
                                                                              children: [
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Label`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-m9r5ty`,
                                                                                  fonts: [`Inter`],
                                                                                  text: n,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-7zv0jd`,
                                                                                              "data-styles-preset": `Q8e0BPOzo`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-qzrl2v`,
                                                                                  fonts: [`Inter`],
                                                                                  text: e,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-1xpfp60`,
                                                                                  fonts: [`Inter`],
                                                                                  text: i,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                              ],
                                                                            }
                                                                          ),
                                                                        },
                                                                        r ?? a
                                                                      )
                                                                    )
                                                                  ),
                                                                }),
                                                                H() &&
                                                                  /*#__PURE__*/ u(`div`, {
                                                                    className: `framer-1vqm8i9 hidden-b61gza`,
                                                                    "data-framer-name": `Arrow`,
                                                                  }),
                                                                /*#__PURE__*/ u(z, {
                                                                  breakpoint: T,
                                                                  overrides: {
                                                                    Se6hs0Rrv: {
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                                      y: (p?.y || 0) + 2128.2,
                                                                    },
                                                                    V3vOEkfF4: {
                                                                      height: 216.8,
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                                      y: (p?.y || 0) + 2059.2,
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ u(M, {
                                                                    height: 176,
                                                                    width: `max(min(${p?.width || `100vw`}, 1400px) - 380px, 1px)`,
                                                                    y: (p?.y || 0) + 1143.2,
                                                                    children: /*#__PURE__*/ u(k, {
                                                                      className: `framer-oq58t4-container`,
                                                                      "data-framer-name": `Row Hover`,
                                                                      name: `Row Hover`,
                                                                      nodeId: `Gsc_qbmbm`,
                                                                      scopeId: `Z3GcHz7lc`,
                                                                      children: /*#__PURE__*/ u(W, {
                                                                        height: `100%`,
                                                                        id: `Gsc_qbmbm`,
                                                                        layoutId: `Gsc_qbmbm`,
                                                                        name: `Row Hover`,
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        UgReCFny1: e,
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              ],
                                                            }),
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
                                    ],
                                  }),
                                  /*#__PURE__*/ l(q, {
                                    __framer__animate: { transition: Z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-govtp1`,
                                    "data-framer-name": `Skin`,
                                    id: _e,
                                    ref: F,
                                    children: [
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-b58hfq`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`p`, {
                                                className: `framer-styles-preset-gyt55z`,
                                                "data-styles-preset": `u9_0JRzz7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                },
                                                children: `(2)`,
                                              }),
                                            }),
                                            className: `framer-ojjhkr`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`h2`, {
                                                className: `framer-styles-preset-6v63kf`,
                                                "data-styles-preset": `LxN6valwV`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                },
                                                children: `Skin`,
                                              }),
                                            }),
                                            className: `framer-i4cego`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      H() &&
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-izkxmk hidden-b61gza`,
                                          "data-framer-name": `Columns`,
                                          children: [
                                            /*#__PURE__*/ u(R, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ u(t, {
                                                children: /*#__PURE__*/ u(`p`, {
                                                  className: `framer-styles-preset-gyt55z`,
                                                  "data-styles-preset": `u9_0JRzz7`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                  },
                                                  children: `Treatment`,
                                                }),
                                              }),
                                              className: `framer-2v3qrn`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-1yplpid`,
                                              "data-framer-name": `Right`,
                                              children: [
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Option`,
                                                    }),
                                                  }),
                                                  className: `framer-1qufxzl`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `From`,
                                                    }),
                                                  }),
                                                  className: `framer-1dv6sd5`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Members`,
                                                    }),
                                                  }),
                                                  className: `framer-zn7rxq`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-6hmuhc`,
                                        "data-border": !0,
                                        "data-framer-name": `Rows`,
                                        children: /*#__PURE__*/ u(N, {
                                          children: /*#__PURE__*/ u(Y, {
                                            query: on(),
                                            children: (e, n, r) =>
                                              /*#__PURE__*/ u(s, {
                                                children: e?.map(
                                                  (
                                                    {
                                                      C0EPUrxhE: e,
                                                      cm6YBFu8C: n,
                                                      FkEUFpxi_: r,
                                                      id: i,
                                                    },
                                                    a
                                                  ) => (
                                                    (n ??= ``),
                                                    (e ??= ``),
                                                    (r ??= []),
                                                    /*#__PURE__*/ u(
                                                      m,
                                                      {
                                                        id: `b8Cyje57M-${i}`,
                                                        children: /*#__PURE__*/ u(A.Provider, {
                                                          value: { cm6YBFu8C: n },
                                                          children: /*#__PURE__*/ u(j, {
                                                            href: {
                                                              pathVariables: { cm6YBFu8C: n },
                                                              webPageId: `XiBefzIqK`,
                                                            },
                                                            motionChild: !0,
                                                            nodeId: `mEiDxb5dC`,
                                                            scopeId: `Z3GcHz7lc`,
                                                            children: /*#__PURE__*/ l(_.a, {
                                                              className: `framer-qdkumk framer-1qj86l`,
                                                              "data-border": !0,
                                                              "data-framer-name": `Row`,
                                                              children: [
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-1drmbd0`,
                                                                  "data-framer-name": `Name`,
                                                                  children: /*#__PURE__*/ u(R, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: /*#__PURE__*/ u(t, {
                                                                      children: /*#__PURE__*/ u(
                                                                        `h3`,
                                                                        {
                                                                          className: `framer-styles-preset-94eeon`,
                                                                          "data-styles-preset": `SFS3lU2AV`,
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--framer-text-alignment": `start`,
                                                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                          },
                                                                          children: `Title`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                    className: `framer-19bvf4e`,
                                                                    fonts: [`Inter`],
                                                                    text: e,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                }),
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-78vwu5`,
                                                                  "data-framer-name": `Options`,
                                                                  children: r?.map(
                                                                    (
                                                                      {
                                                                        beajm0aEo: e,
                                                                        cIJn4acxd: n,
                                                                        id: r,
                                                                        vWSpPAYGV: i,
                                                                      },
                                                                      a
                                                                    ) => (
                                                                      (n ??= ``),
                                                                      (e ??= ``),
                                                                      (i ??= ``),
                                                                      /*#__PURE__*/ u(
                                                                        m,
                                                                        {
                                                                          id: `XIreZ_YLg-${r ?? a}`,
                                                                          children: /*#__PURE__*/ l(
                                                                            `div`,
                                                                            {
                                                                              className: `framer-lw283l`,
                                                                              "data-framer-name": `Option`,
                                                                              children: [
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Label`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-4uhbn3`,
                                                                                  fonts: [`Inter`],
                                                                                  text: n,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-7zv0jd`,
                                                                                              "data-styles-preset": `Q8e0BPOzo`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-14ed1pj`,
                                                                                  fonts: [`Inter`],
                                                                                  text: e,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-ll52lc`,
                                                                                  fonts: [`Inter`],
                                                                                  text: i,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                              ],
                                                                            }
                                                                          ),
                                                                        },
                                                                        r ?? a
                                                                      )
                                                                    )
                                                                  ),
                                                                }),
                                                                H() &&
                                                                  /*#__PURE__*/ u(`div`, {
                                                                    className: `framer-1my8i4s hidden-b61gza`,
                                                                    "data-framer-name": `Arrow`,
                                                                  }),
                                                                /*#__PURE__*/ u(z, {
                                                                  breakpoint: T,
                                                                  overrides: {
                                                                    Se6hs0Rrv: {
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                                      y: (p?.y || 0) + 2607.4,
                                                                    },
                                                                    V3vOEkfF4: {
                                                                      height: 216.8,
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                                      y: (p?.y || 0) + 2488.2,
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ u(M, {
                                                                    height: 176,
                                                                    width: `max(min(${p?.width || `100vw`}, 1400px) - 380px, 1px)`,
                                                                    y: (p?.y || 0) + 1622.4,
                                                                    children: /*#__PURE__*/ u(k, {
                                                                      className: `framer-pym8og-container`,
                                                                      "data-framer-name": `Row Hover`,
                                                                      name: `Row Hover`,
                                                                      nodeId: `UkhEhTj4A`,
                                                                      scopeId: `Z3GcHz7lc`,
                                                                      children: /*#__PURE__*/ u(W, {
                                                                        height: `100%`,
                                                                        id: `UkhEhTj4A`,
                                                                        layoutId: `UkhEhTj4A`,
                                                                        name: `Row Hover`,
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        UgReCFny1: e,
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              ],
                                                            }),
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
                                    ],
                                  }),
                                  /*#__PURE__*/ l(q, {
                                    __framer__animate: { transition: Z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-7yrkhw`,
                                    "data-framer-name": `Laser and light`,
                                    id: ve,
                                    ref: I,
                                    children: [
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-1v2q800`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`p`, {
                                                className: `framer-styles-preset-gyt55z`,
                                                "data-styles-preset": `u9_0JRzz7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                },
                                                children: `(3)`,
                                              }),
                                            }),
                                            className: `framer-2mguts`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`h2`, {
                                                className: `framer-styles-preset-6v63kf`,
                                                "data-styles-preset": `LxN6valwV`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                },
                                                children: `Laser & light`,
                                              }),
                                            }),
                                            className: `framer-baz2mr`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      H() &&
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-170nidj hidden-b61gza`,
                                          "data-framer-name": `Columns`,
                                          children: [
                                            /*#__PURE__*/ u(R, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ u(t, {
                                                children: /*#__PURE__*/ u(`p`, {
                                                  className: `framer-styles-preset-gyt55z`,
                                                  "data-styles-preset": `u9_0JRzz7`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                  },
                                                  children: `Treatment`,
                                                }),
                                              }),
                                              className: `framer-11wh82n`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-mpxkqk`,
                                              "data-framer-name": `Right`,
                                              children: [
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Option`,
                                                    }),
                                                  }),
                                                  className: `framer-mhf6d9`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `From`,
                                                    }),
                                                  }),
                                                  className: `framer-191q717`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Members`,
                                                    }),
                                                  }),
                                                  className: `framer-1e8n3j0`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-r3k4ge`,
                                        "data-border": !0,
                                        "data-framer-name": `Rows`,
                                        children: /*#__PURE__*/ u(N, {
                                          children: /*#__PURE__*/ u(Y, {
                                            query: sn(),
                                            children: (e, n, r) =>
                                              /*#__PURE__*/ u(s, {
                                                children: e?.map(
                                                  (
                                                    {
                                                      C0EPUrxhE: e,
                                                      cm6YBFu8C: n,
                                                      FkEUFpxi_: r,
                                                      id: i,
                                                    },
                                                    a
                                                  ) => (
                                                    (n ??= ``),
                                                    (e ??= ``),
                                                    (r ??= []),
                                                    /*#__PURE__*/ u(
                                                      m,
                                                      {
                                                        id: `e5HAD6qE_-${i}`,
                                                        children: /*#__PURE__*/ u(A.Provider, {
                                                          value: { cm6YBFu8C: n },
                                                          children: /*#__PURE__*/ u(j, {
                                                            href: {
                                                              pathVariables: { cm6YBFu8C: n },
                                                              webPageId: `XiBefzIqK`,
                                                            },
                                                            motionChild: !0,
                                                            nodeId: `fbvjqJ3ST`,
                                                            scopeId: `Z3GcHz7lc`,
                                                            children: /*#__PURE__*/ l(_.a, {
                                                              className: `framer-qtly2e framer-1qj86l`,
                                                              "data-border": !0,
                                                              "data-framer-name": `Row`,
                                                              children: [
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-18ulnug`,
                                                                  "data-framer-name": `Name`,
                                                                  children: /*#__PURE__*/ u(R, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: /*#__PURE__*/ u(t, {
                                                                      children: /*#__PURE__*/ u(
                                                                        `h3`,
                                                                        {
                                                                          className: `framer-styles-preset-94eeon`,
                                                                          "data-styles-preset": `SFS3lU2AV`,
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--framer-text-alignment": `start`,
                                                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                          },
                                                                          children: `Title`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                    className: `framer-yivg95`,
                                                                    fonts: [`Inter`],
                                                                    text: e,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                }),
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-njykug`,
                                                                  "data-framer-name": `Options`,
                                                                  children: r?.map(
                                                                    (
                                                                      {
                                                                        beajm0aEo: e,
                                                                        cIJn4acxd: n,
                                                                        id: r,
                                                                        vWSpPAYGV: i,
                                                                      },
                                                                      a
                                                                    ) => (
                                                                      (n ??= ``),
                                                                      (e ??= ``),
                                                                      (i ??= ``),
                                                                      /*#__PURE__*/ u(
                                                                        m,
                                                                        {
                                                                          id: `PrCQYm4uE-${r ?? a}`,
                                                                          children: /*#__PURE__*/ l(
                                                                            `div`,
                                                                            {
                                                                              className: `framer-xsw6gk`,
                                                                              "data-framer-name": `Option`,
                                                                              children: [
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Label`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-1kfswdv`,
                                                                                  fonts: [`Inter`],
                                                                                  text: n,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-7zv0jd`,
                                                                                              "data-styles-preset": `Q8e0BPOzo`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-14h68yd`,
                                                                                  fonts: [`Inter`],
                                                                                  text: e,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-16crr6`,
                                                                                  fonts: [`Inter`],
                                                                                  text: i,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                              ],
                                                                            }
                                                                          ),
                                                                        },
                                                                        r ?? a
                                                                      )
                                                                    )
                                                                  ),
                                                                }),
                                                                H() &&
                                                                  /*#__PURE__*/ u(`div`, {
                                                                    className: `framer-mkbkq5 hidden-b61gza`,
                                                                    "data-framer-name": `Arrow`,
                                                                  }),
                                                                /*#__PURE__*/ u(z, {
                                                                  breakpoint: T,
                                                                  overrides: {
                                                                    Se6hs0Rrv: {
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                                      y: (p?.y || 0) + 3086.6,
                                                                    },
                                                                    V3vOEkfF4: {
                                                                      height: 216.8,
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                                      y: (p?.y || 0) + 2917.2,
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ u(M, {
                                                                    height: 176,
                                                                    width: `max(min(${p?.width || `100vw`}, 1400px) - 380px, 1px)`,
                                                                    y: (p?.y || 0) + 2101.6,
                                                                    children: /*#__PURE__*/ u(k, {
                                                                      className: `framer-zg32r4-container`,
                                                                      "data-framer-name": `Row Hover`,
                                                                      name: `Row Hover`,
                                                                      nodeId: `iBDREacWi`,
                                                                      scopeId: `Z3GcHz7lc`,
                                                                      children: /*#__PURE__*/ u(W, {
                                                                        height: `100%`,
                                                                        id: `iBDREacWi`,
                                                                        layoutId: `iBDREacWi`,
                                                                        name: `Row Hover`,
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        UgReCFny1: e,
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              ],
                                                            }),
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
                                    ],
                                  }),
                                  /*#__PURE__*/ l(q, {
                                    __framer__animate: { transition: Z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__exit: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1j807kl`,
                                    "data-framer-name": `Body`,
                                    id: be,
                                    ref: L,
                                    children: [
                                      /*#__PURE__*/ l(`div`, {
                                        className: `framer-1cex04b`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`p`, {
                                                className: `framer-styles-preset-gyt55z`,
                                                "data-styles-preset": `u9_0JRzz7`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                },
                                                children: `(4)`,
                                              }),
                                            }),
                                            className: `framer-jrnn78`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ u(R, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(t, {
                                              children: /*#__PURE__*/ u(`h2`, {
                                                className: `framer-styles-preset-6v63kf`,
                                                "data-styles-preset": `LxN6valwV`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                },
                                                children: `Body`,
                                              }),
                                            }),
                                            className: `framer-8xgt59`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      H() &&
                                        /*#__PURE__*/ l(`div`, {
                                          className: `framer-n4mq3z hidden-b61gza`,
                                          "data-framer-name": `Columns`,
                                          children: [
                                            /*#__PURE__*/ u(R, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ u(t, {
                                                children: /*#__PURE__*/ u(`p`, {
                                                  className: `framer-styles-preset-gyt55z`,
                                                  "data-styles-preset": `u9_0JRzz7`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                  },
                                                  children: `Treatment`,
                                                }),
                                              }),
                                              className: `framer-19nhv11`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            /*#__PURE__*/ l(`div`, {
                                              className: `framer-7di39e`,
                                              "data-framer-name": `Right`,
                                              children: [
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Option`,
                                                    }),
                                                  }),
                                                  className: `framer-2pjn4s`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `From`,
                                                    }),
                                                  }),
                                                  className: `framer-6sekbi`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                /*#__PURE__*/ u(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: /*#__PURE__*/ u(t, {
                                                    children: /*#__PURE__*/ u(`p`, {
                                                      className: `framer-styles-preset-gyt55z`,
                                                      "data-styles-preset": `u9_0JRzz7`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `start`,
                                                        "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                      },
                                                      children: `Members`,
                                                    }),
                                                  }),
                                                  className: `framer-wo0s3b`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      /*#__PURE__*/ u(`div`, {
                                        className: `framer-b7eat1`,
                                        "data-border": !0,
                                        "data-framer-name": `Rows`,
                                        children: /*#__PURE__*/ u(N, {
                                          children: /*#__PURE__*/ u(Y, {
                                            query: cn(),
                                            children: (e, n, r) =>
                                              /*#__PURE__*/ u(s, {
                                                children: e?.map(
                                                  (
                                                    {
                                                      C0EPUrxhE: e,
                                                      cm6YBFu8C: n,
                                                      FkEUFpxi_: r,
                                                      id: i,
                                                    },
                                                    a
                                                  ) => (
                                                    (n ??= ``),
                                                    (e ??= ``),
                                                    (r ??= []),
                                                    /*#__PURE__*/ u(
                                                      m,
                                                      {
                                                        id: `kJyVI5FwQ-${i}`,
                                                        children: /*#__PURE__*/ u(A.Provider, {
                                                          value: { cm6YBFu8C: n },
                                                          children: /*#__PURE__*/ u(j, {
                                                            href: {
                                                              pathVariables: { cm6YBFu8C: n },
                                                              webPageId: `XiBefzIqK`,
                                                            },
                                                            motionChild: !0,
                                                            nodeId: `GTegyM1QE`,
                                                            scopeId: `Z3GcHz7lc`,
                                                            children: /*#__PURE__*/ l(_.a, {
                                                              className: `framer-150tvnw framer-1qj86l`,
                                                              "data-border": !0,
                                                              "data-framer-name": `Row`,
                                                              children: [
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-1i3vh8u`,
                                                                  "data-framer-name": `Name`,
                                                                  children: /*#__PURE__*/ u(R, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: /*#__PURE__*/ u(t, {
                                                                      children: /*#__PURE__*/ u(
                                                                        `h3`,
                                                                        {
                                                                          className: `framer-styles-preset-94eeon`,
                                                                          "data-styles-preset": `SFS3lU2AV`,
                                                                          dir: `auto`,
                                                                          style: {
                                                                            "--framer-text-alignment": `start`,
                                                                            "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                          },
                                                                          children: `Title`,
                                                                        }
                                                                      ),
                                                                    }),
                                                                    className: `framer-1bu7158`,
                                                                    fonts: [`Inter`],
                                                                    text: e,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                }),
                                                                /*#__PURE__*/ u(`div`, {
                                                                  className: `framer-1l6grqq`,
                                                                  "data-framer-name": `Options`,
                                                                  children: r?.map(
                                                                    (
                                                                      {
                                                                        beajm0aEo: e,
                                                                        cIJn4acxd: n,
                                                                        id: r,
                                                                        vWSpPAYGV: i,
                                                                      },
                                                                      a
                                                                    ) => (
                                                                      (n ??= ``),
                                                                      (e ??= ``),
                                                                      (i ??= ``),
                                                                      /*#__PURE__*/ u(
                                                                        m,
                                                                        {
                                                                          id: `iFJ5piCK5-${r ?? a}`,
                                                                          children: /*#__PURE__*/ l(
                                                                            `div`,
                                                                            {
                                                                              className: `framer-1bpovi`,
                                                                              "data-framer-name": `Option`,
                                                                              children: [
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Label`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-1fit6ki`,
                                                                                  fonts: [`Inter`],
                                                                                  text: n,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-7zv0jd`,
                                                                                              "data-styles-preset": `Q8e0BPOzo`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-1qxa68l`,
                                                                                  fonts: [`Inter`],
                                                                                  text: e,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                /*#__PURE__*/ u(R, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children:
                                                                                    /*#__PURE__*/ u(
                                                                                      t,
                                                                                      {
                                                                                        children:
                                                                                          /*#__PURE__*/ u(
                                                                                            `p`,
                                                                                            {
                                                                                              className: `framer-styles-preset-o6ajd0`,
                                                                                              "data-styles-preset": `wOh4XL4ux`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `start`,
                                                                                                  "--framer-text-color": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                                                                                                },
                                                                                              children: `Content`,
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  className: `framer-dcosq8`,
                                                                                  fonts: [`Inter`],
                                                                                  text: i,
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                              ],
                                                                            }
                                                                          ),
                                                                        },
                                                                        r ?? a
                                                                      )
                                                                    )
                                                                  ),
                                                                }),
                                                                H() &&
                                                                  /*#__PURE__*/ u(`div`, {
                                                                    className: `framer-yossjk hidden-b61gza`,
                                                                    "data-framer-name": `Arrow`,
                                                                  }),
                                                                /*#__PURE__*/ u(z, {
                                                                  breakpoint: T,
                                                                  overrides: {
                                                                    Se6hs0Rrv: {
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                                                      y: (p?.y || 0) + 3565.8,
                                                                    },
                                                                    V3vOEkfF4: {
                                                                      height: 216.8,
                                                                      width: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                                                      y: (p?.y || 0) + 3346.2,
                                                                    },
                                                                  },
                                                                  children: /*#__PURE__*/ u(M, {
                                                                    height: 176,
                                                                    width: `max(min(${p?.width || `100vw`}, 1400px) - 380px, 1px)`,
                                                                    y: (p?.y || 0) + 2580.8,
                                                                    children: /*#__PURE__*/ u(k, {
                                                                      className: `framer-1pbfu6b-container`,
                                                                      "data-framer-name": `Row Hover`,
                                                                      name: `Row Hover`,
                                                                      nodeId: `kMrjtWDt0`,
                                                                      scopeId: `Z3GcHz7lc`,
                                                                      children: /*#__PURE__*/ u(W, {
                                                                        height: `100%`,
                                                                        id: `kMrjtWDt0`,
                                                                        layoutId: `kMrjtWDt0`,
                                                                        name: `Row Hover`,
                                                                        style: {
                                                                          height: `100%`,
                                                                          width: `100%`,
                                                                        },
                                                                        UgReCFny1: e,
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                }),
                                                              ],
                                                            }),
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
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /*#__PURE__*/ u(`div`, {
                            className: `framer-1cifvsh`,
                            "data-framer-name": `Container`,
                            children: /*#__PURE__*/ l(`div`, {
                              className: `framer-100fjzi`,
                              "data-framer-name": `Consultation`,
                              children: [
                                /*#__PURE__*/ u(z, {
                                  breakpoint: T,
                                  overrides: {
                                    Se6hs0Rrv: {
                                      background: {
                                        alt: `Clinician reviewing a written plan with an older patient at a round table`,
                                        fit: `fill`,
                                        loading: b((p?.y || 0) + 3881.8),
                                        pixelHeight: 864,
                                        pixelWidth: 1536,
                                        sizes: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                        src: `../../assets/illustrations/shaga-consultation.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-consultation.jpg 512w,../../assets/illustrations/shaga-consultation.jpg 1024w,../../assets/illustrations/shaga-consultation.jpg 1536w`,
                                      },
                                    },
                                    V3vOEkfF4: {
                                      background: {
                                        alt: `Clinician reviewing a written plan with an older patient at a round table`,
                                        fit: `fill`,
                                        loading: b((p?.y || 0) + 3703),
                                        pixelHeight: 864,
                                        pixelWidth: 1536,
                                        sizes: `calc(min(${p?.width || `100vw`}, 1400px) - 40px)`,
                                        src: `../../assets/illustrations/shaga-consultation.jpg`,
                                        srcSet: `../../assets/illustrations/shaga-consultation.jpg 512w,../../assets/illustrations/shaga-consultation.jpg 1024w,../../assets/illustrations/shaga-consultation.jpg 1536w`,
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ u(pe, {
                                    background: {
                                      alt: `Clinician reviewing a written plan with an older patient at a round table`,
                                      fit: `fill`,
                                      loading: b((p?.y || 0) + 2896.8),
                                      pixelHeight: 864,
                                      pixelWidth: 1536,
                                      sizes: `calc(min(${p?.width || `100vw`}, 1400px) - 60px)`,
                                      src: `../../assets/illustrations/shaga-consultation.jpg`,
                                      srcSet: `../../assets/illustrations/shaga-consultation.jpg 512w,../../assets/illustrations/shaga-consultation.jpg 1024w,../../assets/illustrations/shaga-consultation.jpg 1536w`,
                                    },
                                    className: `framer-vvxhom`,
                                    "data-framer-name": `Photo`,
                                  }),
                                }),
                                /*#__PURE__*/ u(`div`, {
                                  className: `framer-hl8xr5`,
                                  "data-framer-name": `Shade`,
                                }),
                                /*#__PURE__*/ u(z, {
                                  breakpoint: T,
                                  overrides: {
                                    V3vOEkfF4: {
                                      children: /*#__PURE__*/ u(t, {
                                        children: /*#__PURE__*/ u(`h2`, {
                                          className: `framer-styles-preset-6v63kf`,
                                          "data-styles-preset": `LxN6valwV`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `start`,
                                            "--framer-text-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                          },
                                          children: `Your total, in writing.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: /*#__PURE__*/ u(R, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ u(t, {
                                      children: /*#__PURE__*/ u(`h2`, {
                                        className: `framer-styles-preset-6v63kf`,
                                        "data-styles-preset": `LxN6valwV`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                                        },
                                        children: `Your total, in writing.`,
                                      }),
                                    }),
                                    className: `framer-18nzv1m`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                /*#__PURE__*/ u(R, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ u(t, {
                                    children: /*#__PURE__*/ u(`p`, {
                                      className: `framer-styles-preset-o6ajd0`,
                                      "data-styles-preset": `wOh4XL4ux`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--token-81aa53c8-3521-4fb0-b3a0-1e37b4fc61a2)`,
                                      },
                                      children: `Consultation $75, credited to any treatment within 60 days.`,
                                    }),
                                  }),
                                  className: `framer-ncl3ke`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ u(x, {
                                  links: [
                                    {
                                      href: { webPageId: `OWYn2uQBu` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OWYn2uQBu` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OWYn2uQBu` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ u(z, {
                                      breakpoint: T,
                                      overrides: {
                                        Se6hs0Rrv: { y: (p?.y || 0) + 4339.8 },
                                        V3vOEkfF4: { y: (p?.y || 0) + 4161 },
                                      },
                                      children: /*#__PURE__*/ u(M, {
                                        height: 46,
                                        y: (p?.y || 0) + 3354.8,
                                        children: /*#__PURE__*/ u(k, {
                                          className: `framer-1vm94zh-container`,
                                          nodeId: `nYa5d_Vev`,
                                          scopeId: `Z3GcHz7lc`,
                                          children: /*#__PURE__*/ u(z, {
                                            breakpoint: T,
                                            overrides: {
                                              Se6hs0Rrv: { cMEc6Dyax: e[1] },
                                              V3vOEkfF4: { cMEc6Dyax: e[2] },
                                            },
                                            children: /*#__PURE__*/ u(he, {
                                              cMEc6Dyax: e[0],
                                              height: `100%`,
                                              id: `nYa5d_Vev`,
                                              layoutId: `nYa5d_Vev`,
                                              O1Pum8WD2: `Book a consultation`,
                                              style: { height: `100%` },
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
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                /*#__PURE__*/ u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (pn = [
        `.framer-sMim8.framer-1qj86l, .framer-sMim8 .framer-1qj86l { display: block; }`,
        `.framer-sMim8.framer-hdm93e { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-sMim8 .framer-1uwtxll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-1puaiui { align-content: center; align-items: center; background-color: var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 80vh; justify-content: flex-end; min-height: 620px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 56px 0px; position: sticky; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-sMim8 .framer-vcfv9i, .framer-sMim8 .framer-1slh51s-container, .framer-sMim8 .framer-oq58t4-container, .framer-sMim8 .framer-pym8og-container, .framer-sMim8 .framer-zg32r4-container, .framer-sMim8 .framer-1pbfu6b-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-sMim8 .framer-10w2780 { background: linear-gradient(180deg, rgba(20, 14, 10, 0.25) 0%, rgba(20, 14, 10, 0) 35%, rgba(20, 14, 10, 0.78) 100%); bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-sMim8 .framer-195r7on { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-1nyukh0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-sMim8 .framer-1felkln, .framer-sMim8 .framer-11xikw9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-sMim8 .framer-1tsuu6v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 400px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-sMim8 .framer-1wytltq, .framer-sMim8 .framer-1pmb6fo, .framer-sMim8 .framer-pr5cth, .framer-sMim8 .framer-19bvf4e, .framer-sMim8 .framer-yivg95, .framer-sMim8 .framer-1bu7158 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-sMim8 .framer-1mihcj4 { align-content: center; align-items: center; background-color: var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 140px; height: min-content; justify-content: flex-start; padding: 140px 0px 140px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-sMim8 .framer-bg8mfj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-1qb5dsv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 130px; width: 260px; }`,
        `.framer-sMim8 .framer-hpo7g-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-sMim8 .framer-j5ucqz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-1fxx2m6-container, .framer-sMim8 .framer-1eft092-container, .framer-sMim8 .framer-5h70xs-container, .framer-sMim8 .framer-uponi-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-7xkppz { align-content: flex-start; align-items: flex-start; aspect-ratio: 0.9 / 1; border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-sMim8 .framer-kms153 { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-sMim8 .framer-125nb8j { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        `.framer-sMim8 .framer-cuchpj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-sMim8 .framer-1i9ziq1, .framer-sMim8 .framer-govtp1, .framer-sMim8 .framer-7yrkhw, .framer-sMim8 .framer-1j807kl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; scroll-margin-top: 130px; width: 100%; }`,
        `.framer-sMim8 .framer-5mbun2, .framer-sMim8 .framer-b58hfq, .framer-sMim8 .framer-1v2q800, .framer-sMim8 .framer-1cex04b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 0px 14px 0px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-89aedp, .framer-sMim8 .framer-93fg3c, .framer-sMim8 .framer-ojjhkr, .framer-sMim8 .framer-i4cego, .framer-sMim8 .framer-2mguts, .framer-sMim8 .framer-baz2mr, .framer-sMim8 .framer-jrnn78, .framer-sMim8 .framer-8xgt59 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-sMim8 .framer-1jytnz2, .framer-sMim8 .framer-izkxmk, .framer-sMim8 .framer-170nidj, .framer-sMim8 .framer-n4mq3z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px 60px 0px 0px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-19x17lc, .framer-sMim8 .framer-1v8reu8, .framer-sMim8 .framer-m9r5ty, .framer-sMim8 .framer-2v3qrn, .framer-sMim8 .framer-1qufxzl, .framer-sMim8 .framer-4uhbn3, .framer-sMim8 .framer-11wh82n, .framer-sMim8 .framer-mhf6d9, .framer-sMim8 .framer-1kfswdv, .framer-sMim8 .framer-19nhv11, .framer-sMim8 .framer-2pjn4s, .framer-sMim8 .framer-1fit6ki { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-sMim8 .framer-1citnq8, .framer-sMim8 .framer-1yplpid, .framer-sMim8 .framer-mpxkqk, .framer-sMim8 .framer-7di39e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 490px; }`,
        `.framer-sMim8 .framer-6lqpf8, .framer-sMim8 .framer-qzrl2v, .framer-sMim8 .framer-1dv6sd5, .framer-sMim8 .framer-14ed1pj, .framer-sMim8 .framer-191q717, .framer-sMim8 .framer-14h68yd, .framer-sMim8 .framer-6sekbi, .framer-sMim8 .framer-1qxa68l { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 130px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-sMim8 .framer-vm3f7w, .framer-sMim8 .framer-1xpfp60, .framer-sMim8 .framer-zn7rxq, .framer-sMim8 .framer-ll52lc, .framer-sMim8 .framer-1e8n3j0, .framer-sMim8 .framer-16crr6, .framer-sMim8 .framer-wo0s3b, .framer-sMim8 .framer-dcosq8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 110px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-sMim8 .framer-15iv34t, .framer-sMim8 .framer-6hmuhc, .framer-sMim8 .framer-r3k4ge, .framer-sMim8 .framer-b7eat1 { --border-bottom-width: 1px; --border-color: var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-vex7ae, .framer-sMim8 .framer-qdkumk, .framer-sMim8 .framer-qtly2e, .framer-sMim8 .framer-150tvnw { --border-bottom-width: 0px; --border-color: var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 24px 0px 24px 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-sMim8 .framer-11fbxxr, .framer-sMim8 .framer-1drmbd0, .framer-sMim8 .framer-18ulnug, .framer-sMim8 .framer-1i3vh8u { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-sMim8 .framer-8zpprd, .framer-sMim8 .framer-78vwu5, .framer-sMim8 .framer-njykug, .framer-sMim8 .framer-1l6grqq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 490px; }`,
        `.framer-sMim8 .framer-19ukaac, .framer-sMim8 .framer-lw283l, .framer-sMim8 .framer-xsw6gk, .framer-sMim8 .framer-1bpovi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-1vqm8i9, .framer-sMim8 .framer-1my8i4s, .framer-sMim8 .framer-mkbkq5, .framer-sMim8 .framer-yossjk { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: flex-end; padding: 0px; position: relative; width: 36px; }`,
        `.framer-sMim8 .framer-1cifvsh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1400px; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-sMim8 .framer-100fjzi { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 560px; justify-content: flex-end; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); padding: 56px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-sMim8 .framer-vvxhom { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-sMim8 .framer-hl8xr5 { align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(20, 14, 10, 0) 25%, rgba(20, 14, 10, 0.82) 100%); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; padding: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        `.framer-sMim8 .framer-18nzv1m { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 640px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-sMim8 .framer-ncl3ke { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 520px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-sMim8 .framer-1vm94zh-container { flex: none; height: 46px; position: relative; width: auto; z-index: 1; }`,
        ...Xe,
        ...Ke,
        ...Ve,
        ...Oe,
        ...Ne,
        ...Pe,
        ...ge,
        ...De,
        ...et,
        `.framer-sMim8[data-border="true"]::after, .framer-sMim8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-sMim8.framer-hdm93e { width: 810px; } .framer-sMim8 .framer-1puaiui { height: 60vh; min-height: 560px; } .framer-sMim8 .framer-1tsuu6v { width: 320px; } .framer-sMim8 .framer-1mihcj4 { padding: 100px 0px 100px 0px; } .framer-sMim8 .framer-bg8mfj { flex-direction: column; gap: 56px; } .framer-sMim8 .framer-1qb5dsv { position: relative; top: unset; width: 100%; } .framer-sMim8 .framer-cuchpj { flex: none; width: 100%; } .framer-sMim8 .framer-1citnq8, .framer-sMim8 .framer-8zpprd, .framer-sMim8 .framer-1yplpid, .framer-sMim8 .framer-78vwu5, .framer-sMim8 .framer-mpxkqk, .framer-sMim8 .framer-njykug, .framer-sMim8 .framer-7di39e, .framer-sMim8 .framer-1l6grqq { width: 450px; }}`,
        `@media (max-width: 809.98px) { .framer-sMim8.framer-hdm93e { width: 390px; } .framer-sMim8 .framer-1puaiui { height: 65vh; min-height: 520px; } .framer-sMim8 .framer-195r7on { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; padding: 0px 20px 0px 20px; } .framer-sMim8 .framer-1nyukh0, .framer-sMim8 .framer-1tsuu6v, .framer-sMim8 .framer-18nzv1m, .framer-sMim8 .framer-ncl3ke { width: 100%; } .framer-sMim8 .framer-1felkln, .framer-sMim8 .framer-11xikw9 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-sMim8 .framer-1mihcj4 { padding: 80px 0px 80px 0px; } .framer-sMim8 .framer-bg8mfj { flex-direction: column; gap: 48px; padding: 0px 20px 0px 20px; } .framer-sMim8 .framer-1qb5dsv { position: relative; top: unset; width: 100%; } .framer-sMim8 .framer-cuchpj, .framer-sMim8 .framer-11fbxxr, .framer-sMim8 .framer-1drmbd0, .framer-sMim8 .framer-18ulnug, .framer-sMim8 .framer-1i3vh8u { flex: none; width: 100%; } .framer-sMim8 .framer-vex7ae, .framer-sMim8 .framer-qdkumk, .framer-sMim8 .framer-qtly2e, .framer-sMim8 .framer-150tvnw { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; } .framer-sMim8 .framer-8zpprd, .framer-sMim8 .framer-78vwu5, .framer-sMim8 .framer-njykug, .framer-sMim8 .framer-1l6grqq { padding: 0px 44px 0px 0px; width: 100%; } .framer-sMim8 .framer-qzrl2v, .framer-sMim8 .framer-14ed1pj, .framer-sMim8 .framer-14h68yd, .framer-sMim8 .framer-1qxa68l { width: 90px; } .framer-sMim8 .framer-1xpfp60, .framer-sMim8 .framer-ll52lc, .framer-sMim8 .framer-16crr6, .framer-sMim8 .framer-dcosq8 { width: 80px; } .framer-sMim8 .framer-1cifvsh { padding: 0px 20px 0px 20px; }}`,
      ]),
      ($ = S(fn, pn, `framer-sMim8`)),
      ($.displayName = `Prices`),
      ($.defaultProps = { height: 5812, width: 1200 }),
      ne(
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
          ...zt,
          ...Bt,
          ...Vt,
          ...Ht,
          ...Ut,
          ...V(Ze),
          ...V(qe),
          ...V(He),
          ...V(je),
          ...V(xe),
          ...V(Fe),
          ...V(ve),
          ...V(we),
          ...V(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = v.get(rn(), n, r),
            a = v.get(an(), n, r),
            o = v.get(on(), n, r),
            s = v.get(sn(), n, r),
            c = v.get(cn(), n, r);
          return P(
            [
              () => i.preload(),
              () => a.preload(),
              () => o.preload(),
              () => s.preload(),
              () => c.preload(),
              () => T(ze, {}, t),
              () => T(G, {}, t),
              () => T(he, {}, t),
              async () => {
                let e = (await I(() => a.readMaybeAsync(), t)) ?? [];
                return P(
                  e.flatMap((e) => () => T(W, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await I(() => o.readMaybeAsync(), t)) ?? [];
                return P(
                  e.flatMap((e) => () => T(W, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await I(() => s.readMaybeAsync(), t)) ?? [];
                return P(
                  e.flatMap((e) => () => T(W, {}, t)),
                  t
                );
              },
              async () => {
                let e = (await I(() => c.readMaybeAsync(), t)) ?? [];
                return P(
                  e.flatMap((e) => () => T(W, {}, t)),
                  t
                );
              },
            ],
            t
          );
        },
      }),
      (mn = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerZ3GcHz7lc`,
            slots: [],
            annotations: {
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Se6hs0Rrv":{"layout":["fixed","auto"]},"V3vOEkfF4":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerAcceptsLayoutTemplate: `true`,
              framerScrollSections: `{"LdjdhqUKc":{"pattern":":LdjdhqUKc","name":"prices-hero"},"DGg6mVIcS":{"pattern":":DGg6mVIcS","name":"prices-injectables"},"LesYITsZk":{"pattern":":LesYITsZk","name":"prices-skin"},"YRZBJULwD":{"pattern":":YRZBJULwD","name":"prices-laser-light"},"A_orpib4n":{"pattern":":A_orpib4n","name":"prices-body"}}`,
              framerResponsiveScreen: `true`,
              framerIntrinsicHeight: `5812`,
              framerIntrinsicWidth: `1200`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerLayoutTemplateFlowEffect: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
hn();
export { mn as __FramerMetadata__, $ as default, Kt as queryParamNames };
//# sourceMappingURL=TxOBfeIrZYuXAYqXcmBbtfe3FGPA2OFqf0XXdOy7Uok.DDoYhxe3.mjs.map
