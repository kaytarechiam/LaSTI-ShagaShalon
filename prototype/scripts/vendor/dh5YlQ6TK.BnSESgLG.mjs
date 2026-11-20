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
  y as ee,
} from "./react.BF5K0J5z.mjs";
import { i as te, o as d, t as f, w as p } from "./motion.CyGOoZcc.mjs";
import {
  A as m,
  Ct as h,
  D as g,
  K as _,
  O as v,
  R as ne,
  St as re,
  T as ie,
  ct as ae,
  gt as oe,
  i as se,
  jt as y,
  lt as ce,
  m as le,
  o as b,
  w as x,
  xt as S,
  z as C,
} from "./framer.BMzpwY9X.mjs";
import { C as ue, g as w, h as T, m as de, p as fe, w as E } from "./toplevel-deps.TwMXxJp8.mjs";
import { i as D, n as O, r as k, t as pe } from "./BXrB14OtX.DFaXGUB-.mjs";
function A({ direction: e, style: t }) {
  let n = y.current() === y.canvas,
    r = i(null),
    a = i(),
    o = e === `vertical` || e === `both`,
    c = e === `horizontal` || e === `both`;
  return (
    ee(() => {
      if (n) return;
      let e = r.current?.parentElement?.parentElement;
      if (!e) return;
      let t = e.parentElement;
      if (!t) return;
      let i = () => {
        let n = e.getBoundingClientRect();
        (c && (t.style.width = `${n.width}px`),
          o && (t.style.height = `${n.height}px`),
          (a.current = requestAnimationFrame(i)));
      };
      return (
        (a.current = requestAnimationFrame(i)),
        () => {
          (a.current && cancelAnimationFrame(a.current),
            t && (c && (t.style.width = ``), o && (t.style.height = ``)));
        }
      );
    }, [e]),
    /*#__PURE__*/ s(`div`, { ref: r, style: { ...t } })
  );
}
function j() {
  return (j = e(() => {
    (l(),
      _(),
      r(),
      (A.displayName = `Layout Jump Preventer`),
      v(A, {
        direction: {
          type: b.Enum,
          defaultValue: `vertical`,
          options: [`vertical`, `horizontal`, `both`],
          optionTitles: [`Vertical`, `Horizontal`, `Both`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          optionIcons: [`direction-vertical`, `direction-horizontal`, `direction-all`],
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }))();
}
var M, N, P, F, I, L, R;
function z() {
  return (z = e(() => {
    (l(),
      _(),
      r(),
      (M = `var(--framer-icon-mask)`),
      (N = /*#__PURE__*/ c(function (e, t) {
        return /*#__PURE__*/ s(`svg`, { ...e, ref: t, children: e.children });
      })),
      (P = p.create(N)),
      (F = /*#__PURE__*/ c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ s(P, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ s(`svg`, { ...a, ref: t, children: i });
      })),
      (I = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="jSiOsA4GS" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="NfSWNK3uH" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/></svg>`),
      (L = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (R = h(
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
            ee = S(`650073895`, I);
          return /*#__PURE__*/ s(F, {
            ...u,
            className: m(`framer-I69i9`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": l, "--21h8s6": o, "--pgex8v": c, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ s(`use`, { href: ee }),
          });
        }),
        [
          `.framer-I69i9 { -webkit-mask: ${M}; aspect-ratio: 1; display: block; mask: ${M}; width: 24px; }`,
        ],
        `framer-I69i9`
      )),
      (R.displayName = `Minus`),
      v(R, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: b.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: b.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: b.Number,
        },
      }));
  }))();
}
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V, H, U, W, G, K, q, J, Y, X, Z, Q, me, $;
function he() {
  return (he = e(() => {
    (l(),
      _(),
      f(),
      r(),
      j(),
      E(),
      z(),
      D(),
      w(),
      (V = ne(A)),
      (H = [`HGmtP_0Uf`, `LL6oYUEBh`]),
      (U = `framer-YFRDv`),
      (W = { HGmtP_0Uf: `framer-v-1ahp3p5`, LL6oYUEBh: `framer-v-e1pmin` }),
      (G = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (K = (e, t) => `translateX(-50%) ${t}`),
      (q = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (J = { Closed: `LL6oYUEBh`, Open: `HGmtP_0Uf` }),
      (Y = p.create(t)),
      (X = ({ answer: e, height: t, id: n, question: r, width: i, ...a }) => ({
        ...a,
        Jdm7QxoEe:
          e ??
          a.Jdm7QxoEe ??
          `Start with a consultation. We look at what you notice and suggest options, including waiting or doing nothing.`,
        variant: J[a.variant] ?? a.variant ?? `HGmtP_0Uf`,
        XtKnr8b_e: r ?? a.XtKnr8b_e ?? `How do I choose the right treatment?`,
      })),
      (Z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = /*#__PURE__*/ c(function (e, n) {
        let r = i(null),
          a = n ?? r,
          c = u(),
          { activeLocale: l, contentLocale: ee, setLocale: d } = oe();
        ce();
        let {
            style: f,
            className: h,
            layoutId: g,
            variant: _,
            XtKnr8b_e: v,
            Jdm7QxoEe: ne,
            ...y
          } = X(e),
          {
            baseVariant: b,
            classNames: S,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: de,
            setGestureState: E,
            setVariant: D,
            variants: O,
          } = re({
            cycleOrder: H,
            defaultVariant: `HGmtP_0Uf`,
            ref: a,
            variant: _,
            variantClassNames: W,
          }),
          k = Z(e, O),
          j = [pe, fe],
          { activeVariantCallback: M, delay: N } = ae(b),
          P = M(async (...e) => {
            (E({ isPressed: !1 }), D(`LL6oYUEBh`));
          }),
          F = m(U, ...j),
          I = M(async (...e) => {
            (E({ isPressed: !1 }), D(`HGmtP_0Uf`));
          }),
          L = () => b !== `LL6oYUEBh`;
        return /*#__PURE__*/ s(te, {
          id: g ?? c,
          children: /*#__PURE__*/ s(Y, {
            animate: O,
            initial: !1,
            children: /*#__PURE__*/ s(q, {
              value: G,
              children: /*#__PURE__*/ o(p.div, {
                ...y,
                ...w,
                className: m(F, `framer-1ahp3p5`, h, S),
                "data-border": !0,
                "data-framer-name": `Open`,
                "data-highlight": !0,
                layoutDependency: k,
                layoutId: `HGmtP_0Uf`,
                onTap: P,
                ref: a,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `0px`,
                  backgroundColor: `rgba(0, 0, 0, 0)`,
                  ...f,
                },
                ...B({ LL6oYUEBh: { "data-framer-name": `Closed`, onTap: I } }, b, T),
                children: [
                  /*#__PURE__*/ o(p.div, {
                    className: `framer-17940mh`,
                    "data-framer-name": `Row`,
                    layoutDependency: k,
                    layoutId: `NJmrIPzdC`,
                    children: [
                      /*#__PURE__*/ s(p.div, {
                        className: `framer-1noasqd`,
                        "data-border": !0,
                        "data-framer-name": `Disc`,
                        layoutDependency: k,
                        layoutId: `IGgrNZPZI`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                          borderBottomLeftRadius: `50%`,
                          borderBottomRightRadius: `50%`,
                          borderTopLeftRadius: `50%`,
                          borderTopRightRadius: `50%`,
                        },
                        variants: {
                          LL6oYUEBh: {
                            "--border-color": `var(--token-6128a28b-dfe1-4766-81b2-430aebc2c64a)`,
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                          },
                        },
                        children: /*#__PURE__*/ s(le, {
                          animated: !0,
                          className: `framer-qnior8`,
                          Component: R,
                          layoutDependency: k,
                          layoutId: `m0ExuqCoo`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `var(--token-6406c1af-6f1c-4e8f-b2c3-b02b1486d109)`,
                            "--pgex8v": 1.5,
                          },
                          variants: {
                            LL6oYUEBh: {
                              "--21h8s6": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                            },
                          },
                          ...B({ LL6oYUEBh: { Component: ue } }, b, T),
                        }),
                      }),
                      /*#__PURE__*/ s(x, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(t, {
                          children: /*#__PURE__*/ s(p.p, {
                            className: `framer-styles-preset-49rlwi`,
                            "data-styles-preset": `BXrB14OtX`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8))`,
                            },
                            children: `Question`,
                          }),
                        }),
                        className: `framer-yxuxy2`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `LGsGTAgVx`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-607e14b0-1bb9-40a5-b1a5-19cd8ad171d8)`,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  L() &&
                    /*#__PURE__*/ s(p.div, {
                      className: `framer-r6e0gu`,
                      "data-framer-name": `Answer`,
                      layoutDependency: k,
                      layoutId: `oLDgBex7o`,
                      children: /*#__PURE__*/ s(x, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(t, {
                          children: /*#__PURE__*/ s(p.p, {
                            className: `framer-styles-preset-o6ajd0`,
                            "data-styles-preset": `wOh4XL4ux`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-805984a8-b570-40b1-8afb-91817b3ddc69))`,
                            },
                            children: `Start with a consultation. We look at what you notice and suggest options, including waiting or doing nothing.`,
                          }),
                        }),
                        className: `framer-nuj80`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `sS1CyFtla`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-805984a8-b570-40b1-8afb-91817b3ddc69)`,
                        },
                        text: ne,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  /*#__PURE__*/ s(se, {
                    children: /*#__PURE__*/ s(ie, {
                      className: `framer-16xj8ow-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: k,
                      layoutId: `rcPmlTCh7-container`,
                      nodeId: `rcPmlTCh7`,
                      rendersWithMotion: !0,
                      scopeId: `dh5YlQ6TK`,
                      transformTemplate: K,
                      children: /*#__PURE__*/ s(A, {
                        direction: `vertical`,
                        height: `100%`,
                        id: `rcPmlTCh7`,
                        layoutId: `rcPmlTCh7`,
                        width: `100%`,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (me = [
        `.framer-YFRDv.framer-1ixajc7, .framer-YFRDv .framer-1ixajc7 { display: block; }`,
        `.framer-YFRDv.framer-1ahp3p5 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 0px; position: relative; width: 820px; }`,
        `.framer-YFRDv .framer-17940mh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YFRDv .framer-1noasqd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 30px; justify-content: center; padding: 0px; position: relative; width: 30px; }`,
        `.framer-YFRDv .framer-qnior8 { flex: none; height: auto; position: relative; width: 14px; }`,
        `.framer-YFRDv .framer-yxuxy2 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-YFRDv .framer-r6e0gu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 4px 48px; position: relative; width: 100%; }`,
        `.framer-YFRDv .framer-nuj80 { flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-YFRDv .framer-16xj8ow-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: auto; z-index: 1; }`,
        ...O,
        ...de,
        `.framer-YFRDv[data-border="true"]::after, .framer-YFRDv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      ($ = h(Q, me, `framer-YFRDv`)),
      ($.displayName = `FAQ Item Soft`),
      ($.defaultProps = { height: 146.5, width: 820 }),
      v($, {
        variant: {
          options: [`HGmtP_0Uf`, `LL6oYUEBh`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: b.Enum,
        },
        XtKnr8b_e: {
          defaultValue: `How do I choose the right treatment?`,
          title: `Question`,
          type: b.String,
        },
        onXtKnr8b_eChange: { changes: `XtKnr8b_e`, type: b.ChangeHandler },
        Jdm7QxoEe: {
          defaultValue: `Start with a consultation. We look at what you notice and suggest options, including waiting or doing nothing.`,
          title: `Answer`,
          type: b.String,
        },
        onJdm7QxoEeChange: { changes: `Jdm7QxoEe`, type: b.ChangeHandler },
      }),
      g(
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
          ...V,
          ...C(k),
          ...C(T),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { he as n, $ as t };
//# sourceMappingURL=dh5YlQ6TK.BnSESgLG.mjs.map
