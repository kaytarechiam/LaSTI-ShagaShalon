import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  D as t,
  E as n,
  F as r,
  I as i,
  L as a,
  M as o,
  N as s,
  O as c,
  P as l,
  R as u,
  S as d,
  T as f,
  _ as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  h as y,
  i as b,
  j as x,
  k as S,
  l as C,
  m as w,
  o as T,
  p as E,
  s as D,
  u as O,
  v as k,
  w as A,
  x as j,
  y as M,
  z as N,
} from "./react.BF5K0J5z.mjs";
import {
  $ as ee,
  A as P,
  B as F,
  C as te,
  D as ne,
  E as re,
  F as ie,
  G as ae,
  H as oe,
  I as se,
  J as ce,
  K as le,
  L as ue,
  M as de,
  N as fe,
  O as pe,
  P as me,
  Q as I,
  R as L,
  S as he,
  T as ge,
  U as _e,
  V as ve,
  W as R,
  X as ye,
  Y as be,
  Z as xe,
  _ as Se,
  a as Ce,
  b as we,
  c as Te,
  d as Ee,
  et as De,
  f as Oe,
  g as ke,
  h as Ae,
  i as je,
  j as Me,
  k as Ne,
  l as Pe,
  m as Fe,
  n as Ie,
  o as Le,
  p as Re,
  r as ze,
  s as Be,
  u as Ve,
  v as He,
  w as Ue,
  x as We,
  y as Ge,
  z as Ke,
} from "./motion.CyGOoZcc.mjs";
function qe(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function Je(e) {
  return typeof e == `function`;
}
function Ye(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function B(e) {
  return Number.isFinite(e);
}
function Xe(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e == `object` && !!e && !Xe(e);
}
function Ze(e) {
  for (let t in e) return !1;
  return !0;
}
function Qe(e) {
  return e === void 0;
}
function $e(e) {
  return e === null;
}
function et(e) {
  return e == null;
}
function tt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function nt(e) {
  return V(e) && Je(e.return);
}
function rt(e) {
  return V(e) && Je(e.then);
}
function it(e) {
  return e instanceof Promise;
}
function at(e) {
  return `url('${qe(e)}')`;
}
function ot(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${e ? `${e}\n` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${n ? `:\n${n}` : `.`}`;
}
function H(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function U(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function st() {
  return Ot.location.origin === `https://screenshot.framer.invalid`;
}
function ct(e, t, n = At) {
  if (e && !n.has(e) && typeof document < `u`) {
    if ((n.add(e), !t)) {
      if (!jt) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) jt = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = jt;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function lt(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? K.variable(e) : e === `` ? `""` : e;
}
function ut(e) {
  return e !== Vt && e !== Ht;
}
function dt(e) {
  for (let t in e) if (ut(t) && e?.[t] === !0) return !0;
  return !1;
}
function ft(e, t, n, r, i) {
  let a = j.useRef(null),
    o = j.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = j.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !dt(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = j.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        dt(n) ? o(e) : r?.(e);
      },
      [o, r, t]
    );
  return j.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function pt(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return mt(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return ht(r);
    case `lower-roman`:
    case `upper-roman`:
      return _t(r);
    default:
      return mt(r);
  }
}
function mt(e) {
  return String(e).length;
}
function ht(e) {
  let t = 1;
  for (; gt(t) < e;) t++;
  return t;
}
function gt(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function _t(e) {
  let t = 0;
  for (let n of Kt) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function vt(e, t) {
  return K.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function yt(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
var bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  W,
  At,
  jt,
  Mt,
  G,
  Nt,
  Pt,
  Ft,
  It,
  K,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
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
  nn,
  rn;
function an() {
  return (an = e(() => {
    (a(),
      f(),
      (bt = () => {}),
      (xt = N !== void 0),
      (St =
        xt &&
        (u.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(u.userAgent))),
      (Ct = xt && typeof N.requestIdleCallback == `function`),
      (wt = Ct ? N.requestIdleCallback : setTimeout),
      (Tt = () => bt),
      (Et = () => !0),
      (Dt = () => !1),
      (Ot = xt
        ? N
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (kt = { target: st() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (W = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => kt.target,
        hasRestrictions: () => {
          let e = kt.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (At = /* @__PURE__ */ new Set()),
      (Mt = /* @__PURE__ */ (function (e) {
        return (
          (e.Padding = `--framer-input-padding`),
          (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
          (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
          (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
          (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
          (e.CornerShape = `--framer-input-corner-shape`),
          (e.BorderColor = `--framer-input-border-color`),
          (e.BorderTopWidth = `--framer-input-border-top-width`),
          (e.BorderRightWidth = `--framer-input-border-right-width`),
          (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
          (e.BorderLeftWidth = `--framer-input-border-left-width`),
          (e.BorderStyle = `--framer-input-border-style`),
          (e.Background = `--framer-input-background`),
          (e.FontFamily = `--framer-input-font-family`),
          (e.FontWeight = `--framer-input-font-weight`),
          (e.FontSize = `--framer-input-font-size`),
          (e.FontColor = `--framer-input-font-color`),
          (e.FontStyle = `--framer-input-font-style`),
          (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
          (e.FontTextAlignment = `--framer-input-font-text-alignment`),
          (e.FontLineHeight = `--framer-input-font-line-height`),
          (e.FontOpenType = `--framer-input-font-open-type-features`),
          (e.FontVariationAxes = `--framer-input-font-variation-axes`),
          (e.PlaceholderColor = `--framer-input-placeholder-color`),
          (e.BoxShadow = `--framer-input-box-shadow`),
          (e.FocusedBorderColor = `--framer-input-focused-border-color`),
          (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
          (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
          (e.FocusedBackground = `--framer-input-focused-background`),
          (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
          (e.FocusedTransition = `--framer-input-focused-transition`),
          (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
          (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
          (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
          (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
          (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
          (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
          (e.InvalidTextColor = `--framer-input-invalid-text-color`),
          (e.IconBackgroundImage = `--framer-input-icon-image`),
          (e.IconMaskImage = `--framer-input-icon-mask-image`),
          (e.IconColor = `--framer-input-icon-color`),
          (e.IconContent = `--framer-input-icon-content`),
          (e.WrapperHeight = `--framer-input-wrapper-height`),
          e
        );
      })({})),
      (G = Mt),
      (Nt = `framer-form-input`),
      (Pt = `framer-form-input-wrapper`),
      (Ft = `framer-form-input-empty`),
      (It = `framer-form-input-forced-focus`),
      (K = /* @__PURE__ */ (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (H(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${lt(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            H(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (Lt = [
        K(`.${Nt}`, {
          padding: K.variable(G.Padding),
          background: `transparent`,
          fontFamily: K.variable(G.FontFamily),
          fontWeight: K.variable(G.FontWeight),
          fontSize: K.variable(G.FontSize),
          fontStyle: K.variable(G.FontStyle),
          color: K.variable(G.FontColor),
          fontFeatureSettings: K.variable(G.FontOpenType),
          fontVariationSettings: K.variable(G.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: K.variable(G.WrapperHeight, `100%`),
          letterSpacing: K.variable(G.FontLetterSpacing),
          textAlign: K.variable(G.FontTextAlignment),
          lineHeight: K.variable(G.FontLineHeight),
        }),
        K(`.${Nt}:focus-visible`, { outline: `none` }),
      ]),
      (Rt = [K(`.${Pt}`, { overflow: `hidden` })]),
      (zt = `var(${G.BorderTopWidth}) var(${G.BorderRightWidth}) var(${G.BorderBottomWidth}) var(${G.BorderLeftWidth})`),
      (Bt = [
        `.${Pt}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${G.BorderRadiusTopLeft});
        border-top-right-radius: var(${G.BorderRadiusTopRight});
        border-bottom-right-radius: var(${G.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${G.BorderRadiusBottomLeft});
        corner-shape: var(${G.CornerShape});
        border-color: var(${G.BorderColor});
        border-top-width: var(${G.BorderTopWidth});
        border-right-width: var(${G.BorderRightWidth});
        border-bottom-width: var(${G.BorderBottomWidth});
        border-left-width: var(${G.BorderLeftWidth});
        border-style: var(${G.BorderStyle});
        transition: var(${G.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (Vt = `customError`),
      (Ht = `valid`),
      (Ut = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `16px`,
        maskRepeat: `no-repeat`,
        maskSize: `16px`,
        backgroundColor: K.variable(G.IconColor),
      }),
      (Wt = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `16px`,
        boxSizing: `content-box`,
        padding: K.variable(G.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Ut,
      }),
      (Gt = `--max-list-digits`),
      (Kt = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (qt = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Jt = { display: `inline-block` }),
      (Yt = { display: `block` }),
      (Xt = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${qt.display};
            flex-direction: ${qt.flexDirection};
            justify-content: ${qt.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${vt([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${vt([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Jt.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${vt([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${vt([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${vt([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${vt([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${vt([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${vt([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${vt([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${vt([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${vt([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${vt([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${vt([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${vt([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${vt([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Yt.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Gt}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${yt(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (Zt = `--text-truncation-display-inline-for-safari-16`),
      (Qt = `--text-truncation-display-none-for-safari-16`),
      ($t = `--text-truncation-line-break-for-safari-16`),
      (en = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (tn = `(background: -webkit-named-image(i))`),
      (nn = `(contain-intrinsic-size: inherit)`),
      (rn = [
        `@supports ${tn} and (not ${nn}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${en.join(`, `)} { display: var(${Zt}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${en.map((e) => `${e}::after`).join(`, `)} { content: var(${$t}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Qt}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Zt}, ${Jt.display}) }
    }`,
      ]));
  }))();
}
function on(e, t, n) {
  if (U_.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (U_.set(e, t), t))
    .catch((t) => {
      throw (U_.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(bt), U_.set(e, r));
}
function sn(e, t) {
  xt && (W_.set(e, t), G_.has(e) && on(e, t, `registered loader ${e}`));
}
function cn() {
  if (!xt) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(K_),
      i = r ? e.slice(1) : e;
    if (!i) continue;
    G_.add(i);
    let a = W_.get(i);
    a
      ? on(i, a, `registered loader ${i}`)
      : r &&
        on(
          i,
          () =>
            import(
              /* @vite-ignore */
              n
            ),
          n
        );
  }
}
function ln(e) {
  return typeof e == `object` && !!e && !w(e) && J_ in e;
}
function un(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function dn(e, t = `default`, n) {
  n && sn(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !U_.has(n)) return;
      let e = U_.get(n);
      it(e) ? s(() => e) : (i = un(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = un(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = E(function (t, r) {
      if (
        (M(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && q_ !== void 0 && q_.add(n), !i)) throw s(e);
      return /* @__PURE__ */ T(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function fn(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function pn(e) {
  return e === null || !(X_ in e) ? !1 : typeof e.equals == `function`;
}
function mn(e, t) {
  return e === t || (e !== e && t !== t);
}
function hn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!mn(e[r], t[r])) return !1;
  return !0;
}
function gn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Sn(e[r], t[r], !0)) return !1;
  return !0;
}
function _n(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!mn(r, t.get(n))) return !1;
  return !0;
}
function vn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Sn(r, t.get(n), !0)) return !1;
  return !0;
}
function yn(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function bn(e, t) {
  let n = Y_(e);
  if (n.length !== Y_(t).length) return !1;
  for (let r of n)
    if (!fn(t, r) || (!(r === `_owner` && fn(e, `$$typeof`) && e.$$typeof) && !mn(e[r], t[r])))
      return !1;
  return !0;
}
function xn(e, t) {
  let n = Y_(e);
  if (n.length !== Y_(t).length) return !1;
  for (let r of n)
    if (!fn(t, r) || (!(r === `_owner` && fn(e, `$$typeof`) && e.$$typeof) && !Sn(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Sn(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? gn(e, t) : hn(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? vn(e, t) : _n(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return yn(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? pn(e) && pn(t)
        ? e.equals(t)
        : n
          ? xn(e, t)
          : bn(e, t)
      : !1;
}
function Cn(e, t, n = !0) {
  try {
    return Sn(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function wn(e) {
  return j.useCallback((t) => e[t], [e]);
}
function Tn({ api: e, children: t }) {
  return /* @__PURE__ */ T(Z_.Provider, { value: e, children: t });
}
function En() {
  return j.useContext(Z_);
}
function Dn({ routes: e, children: t }) {
  let n = wn(e),
    r = o(() => ({ getRoute: n }), [n]);
  return /* @__PURE__ */ T(Z_.Provider, { value: r, children: t });
}
function On() {
  let e = En(),
    t = x(Q_),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return o(() => {
    if (n && a) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function kn() {
  let e = On();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function An(e) {
  let t = On(),
    n = j.useRef(t);
  !Cn(n.current, t) && t && ((n.current = t), e(t));
}
function jn(e) {
  let t = En();
  if (e) return t.getRoute?.(e);
}
function Mn(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Nn(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Pn(e, t) {
  let n = On(),
    r = jn(t) ?? n;
  return j.useMemo(() => (r ? Mn(r, e) : e), [e, r]);
}
function Fn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > iv);
}
function In(e) {
  return !(!Number.isInteger(e) || e < 0 || e > rv);
}
function Ln(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Rn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function zn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function Bn(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function Vn(e, t, n) {
  return Hn(JSON.parse(e), t, n);
}
function Hn(e, t, n) {
  let r = Bn(uv, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === -1) return r.fromPrimitive(void 0);
    if (e === -3) return r.fromPrimitive(NaN);
    if (e === -4) return r.fromPrimitive(1 / 0);
    if (e === -5) return r.fromPrimitive(-1 / 0);
    if (e === -6) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    if (e >= i.length) throw Error(`Invalid input`);
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c)) {
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= /* @__PURE__ */ new Set()), o.has(t)))
            throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              let t = c[e];
              if (typeof t != `string`) throw Error(`Cannot parse an object with a non-string key`);
              if (t === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, t, s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(sv(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === -7) {
        let t = c[1];
        if (!In(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Fn(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== -2 && r.set(t, e, s(n));
        }
      }
    } else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function Un(e, t, n = `lazy`) {
  switch ((Ot.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function Wn(e) {
  return z(e) && (e === `` || dv.test(e));
}
function Gn() {
  return {
    [fv.QueryCache]: /* @__PURE__ */ new Map(),
    [fv.CollectionUtilsCache]: /* @__PURE__ */ new Map(),
  };
}
function Kn() {
  if (!xt) return;
  if (pv !== void 0) return pv;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      pv = Vn(e.text) ?? Gn();
    } catch (e) {
      ((pv = Gn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      wt(() => {
        (e?.remove(), (e = null));
      }),
      pv
    );
  }
}
function qn(e, t) {
  if (
    (console.warn(
      ot(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    Un(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Jn(e, t) {
  let n = Kn();
  return n ? n[e].has(t) : !1;
}
function Yn(e, t) {
  let n = Kn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function Xn(e) {
  return e?.id ?? `default`;
}
function Zn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function Qn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (_v.has(n)) return _v.get(n);
    let r = new yv(n, t);
    return (_v.set(n, r), r);
  };
}
function $n({ children: e, collectionUtils: t }) {
  let n = o(() => ({ get: Qn(t) }), [t]);
  return /* @__PURE__ */ T(vv.Provider, { value: n, children: e });
}
function er() {
  return x(vv);
}
function tr(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function nr() {
  return u === void 0 ? void 0 : u;
}
function rr() {
  let e = nr();
  return e ? bv.test(e.platform) : !1;
}
function ir() {
  let e = nr();
  return e
    ? xv.test(e.platform)
      ? !0
      : Sv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function ar() {
  return rr() || ir();
}
function or() {
  let e = nr();
  return e ? Cv.test(e.userAgent) : !1;
}
function sr() {
  let e = nr();
  return e ? wv.test(e.userAgent) && Tv.test(e.vendor) && !or() : !1;
}
function cr() {
  let e = nr();
  return e ? Ev.test(e.userAgent) && Dv.test(e.vendor) : !1;
}
function lr() {
  let e = nr();
  return e ? Ov.test(e.userAgent) : !1;
}
function ur() {
  return typeof document == `object`;
}
function dr() {
  let e = nr();
  if (!e) return -1;
  let t = kv.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function fr() {
  let e = nr();
  return e ? Av.test(e.userAgent) : !1;
}
function pr() {
  return !1;
}
function mr() {
  let e = nr();
  return e && jv.test(e.userAgent) ? `tablet` : e && Mv.test(e.userAgent) ? `phone` : `desktop`;
}
function hr() {
  return mr() === `desktop`;
}
function gr(e) {
  return ar() ? e.metaKey : e.ctrlKey;
}
function _r() {}
async function vr() {}
function yr(e) {
  return typeof e == `function` ? e() : e;
}
function br(e, t) {
  return Iv[e] > Iv[t];
}
function xr() {
  if (typeof scheduler < `u`) return scheduler;
}
function Sr(e, t) {
  let n = e?.priority,
    r = xr();
  return n === `background`
    ? (t?.() ?? tr(1))
    : r?.yield
      ? r.yield(e).catch(_r)
      : r?.postTask
        ? r.postTask(_r, e).catch(_r)
        : t
          ? t()
          : n === `user-blocking`
            ? Lv
            : tr(0);
}
function Cr(e, t, n) {
  let r = -1 / 0,
    i,
    a = /* @__PURE__ */ new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    ur() && (document.addEventListener(`visibilitychange`, s), N.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Rv),
        e(() => {
          Sr(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return ur()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Sr(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Nv : Pv),
        s = ur() && document.hidden ? Fv : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !ur() && !t ? (n ? void 0 : Lv) : n ? p(i, r) : d(i);
  }
  return m;
}
function wr(e, t = !1) {
  let n = ``;
  if (N !== void 0) {
    if (t) n = N.location.search;
    else {
      let e = N.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? N.location.search : e === `` ? `` : `?${e}`;
    }
  }
  return n ? Tr(n, e) : e;
}
function Tr(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Vv && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Er(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Hv)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = it(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = it(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = it(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    t &&
      n &&
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Dr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Or({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Er(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Dr(u.path, t.slug)),
    o && u.path && (u.path = wr(u.path, !0)),
    u
  );
}
async function kr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(Hv)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (z(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Ar({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === "default") return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await kr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function jr({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Ar({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Or({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Cn(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function Mr() {
  return j.useContext(Gv);
}
function Nr() {
  return j.useContext(Kv);
}
function Pr() {
  let e = er(),
    { getRoute: t } = En(),
    { activeLocale: n, locales: r } = Mr();
  return S(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Ir(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function Fr(e, t = !0) {
  let n = Pr();
  M(() => {
    if (t && qv) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Ir(e, t, n = {}) {
  if (!qv || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !ln(o)) return;
  let s = a && !!t;
  if (!o.getStatus().hasLoaded || s) {
    i && (await Bv({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Lr(n, e, t, r));
    } catch {}
  }
}
async function Lr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await jr({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === ev),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Rr() {
  if (Jv) return;
  Jv = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (N.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((N.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), Un(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function zr({ children: e, value: t }) {
  return /* @__PURE__ */ T(Yv.Provider, { value: t, children: e });
}
function Br() {
  return j.useContext(Yv);
}
function Vr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Hr(e) {
  let t = Xv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Zv;) ((n = e.next(t)), r.push(n.value), (t += Xv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Xv }
  );
}
function Ur(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Wr(e) {
  let { innerWidth: t, innerHeight: n } = N,
    [r, i] = Ur(e.x),
    [a, o] = Ur(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Gr(e) {
  let [t, n] = Ur(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Kr(e) {
  let { x: t, y: n } = Wr(e);
  return Math.hypot(Math.max(t, N.innerWidth - t), Math.max(n, N.innerHeight - n));
}
function qr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Jr(e) {
  return e ? ey[e] : void 0;
}
function Yr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Xr(t)) {
    let { easing: e, duration: n } = Hr(
      Me({ keyframes: [0, 1], ...Zr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Jr(n?.mask?.type),
    o = qr(n, `start`, e, a),
    s = qr({ ...ty, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Xr(e) {
  return e.type === `spring`;
}
function Zr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Qr({ exit: e = ry, enter: t }) {
  let n = document.createElement(`style`);
  n.id = ny;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Yr(`exit`, e)),
    (r += Yr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function $r() {
  wt(() => {
    He.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(ny);
      e && document.head.removeChild(e);
    });
  });
}
function ei() {
  return !!document.startViewTransition;
}
function ti(e) {
  return new Promise((t) => {
    He.render(() => {
      (performance.mark(`framer-vt-style`), Qr(e), t());
    });
  });
}
async function ni(e, t, n) {
  if (!ei()) {
    e();
    return;
  }
  if ((await ti(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(iy),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), $r());
      })
      .catch(iy),
    r
  );
}
function ri() {
  let e = Br(),
    t = h(void 0);
  return (
    M(() => {
      t.current &&= (t.current(), void 0);
    }),
    S(
      (n, r, i, a) => {
        let o = Vr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return ni(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function ii(e, t) {
  wt(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function ai(e, t) {
  wt(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function oi(e) {
  wt(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = /* @__PURE__ */ new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = /* @__PURE__ */ new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
//! Credit to Astro | MIT License
function si(e, n, r, i = t) {
  i(() => {
    let t = async (e) => (await Bv({ ...r, continueAfter: `paint` }), e()),
      n = t(e);
    return () => {
      (async () => {
        let e = await n;
        e && t(e);
      })();
    };
  }, n);
}
function ci(e) {
  let t = h(/* @__PURE__ */ new Set());
  return (
    si(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    S(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function li(e) {
  return V(e) && `routeId` in e;
}
function ui(e = N.history.state) {
  return li(e) ? e : void 0;
}
function di(e) {
  return e?.entryId;
}
function fi(e) {
  sy = e;
}
function pi() {
  return sy;
}
function mi() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function hi(e, t) {
  return gi(e, di(e) ?? di(t));
}
function gi(e, t = mi()) {
  return { ...e, entryId: t };
}
function _i(e, t) {
  (performance.mark(`framer-history-replace`), fi(hi(e, ui())), t && ii(t, N.location.href));
  let n =
    !t || t === N.location.href
      ? N.History.prototype.replaceState.bind(N.history)
      : N.history.replaceState.bind(N.history);
  try {
    n(sy, ``, t);
  } catch {}
}
function vi(e) {
  (performance.mark(`framer-history-replace`),
    fi(gi(e)),
    History.prototype.replaceState.call(N.history, sy, ``, void 0));
}
function yi(e, t) {
  (performance.mark(`framer-history-push`), fi(gi(e)), ii(t, N.location.href), Rr());
  try {
    N.history.pushState(sy, ``, t);
  } catch {}
}
function bi({
  disabled: e,
  routeId: n,
  initialPathVariables: r,
  initialLocaleId: i,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  t(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let t = N.location.hash ? N.location.hash.slice(1) : void 0;
    _i({
      ...ui(),
      routeId: n,
      hash: t,
      pathVariables: r,
      localeId: i,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function xi(e, t, n) {
  let r = ri(),
    i = ci(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = h(void 0),
    l = S(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    u = S(
      async ({ state: e }) => {
        if (!li(e)) return;
        let o = i({ popstate: !0 }),
          c = Nn();
        (o.promise.finally(c), di(pi()) !== (di(e) ?? di(ui())) && a(), fi(e));
        let {
            routeId: u,
            hash: d,
            pathVariables: f,
            localeId: p,
            contentLocaleId: m,
            canonicalPathVariables: h,
          } = e,
          g = z(d) ? d : N.location.hash ? N.location.hash.slice(1) : void 0,
          _ = !1,
          v = () => {
            _ ||=
              (n(
                u,
                z(p) ? p : void 0,
                g,
                N.location.pathname + N.location.search + N.location.hash,
                V(f) ? f : void 0,
                m,
                h,
                !0,
                o,
                !1
              ),
              !0);
          },
          y = s === `after-transition`;
        (await Promise.resolve(r(t.current, u, v))
          .then((e) => e?.updateCallbackDone)
          .catch(v)
          .finally(() => {
            y || l();
          }),
          await o.promise,
          y && l(),
          await N.navigation?.transition?.finished.catch(bt),
          oy(),
          ii(N.location.href));
      },
      [t, i, a, l, n, r, s]
    ),
    d = S(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        li(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s]
    );
  M(
    () => (
      N.addEventListener(`popstate`, u),
      cy && N.navigation.addEventListener(`navigate`, d),
      () => {
        (N.removeEventListener(`popstate`, u),
          cy && N.navigation.removeEventListener(`navigate`, d));
      }
    ),
    [u, d]
  );
}
async function Si(e) {
  return (
    (await fetch(e, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect` &&
    ((N.location.href = N.location.origin + e), !0)
  );
}
function Ci() {
  let e = er();
  return S((t) => wi({ ...t, collectionUtils: e }), [e]);
}
async function wi({ sitePrefix: e, ...t }) {
  let n = await Or(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!z(n.path)) throw Error(`Expected result.path to be a string`);
      if (
        (n.isMissingInLocale ||
          (t.route.includedLocales && !t.route.includedLocales.includes(t.nextLocale.id))) &&
        (await Si(e + n.path))
      )
        return;
    } catch {}
    return n;
  }
}
function Ti(e) {
  let t = h(Promise.resolve()),
    n = h(),
    r = S(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return S(
    (e, i, a) => {
      cy
        ? ((t.current = e),
          (n.current = i),
          N.navigation.addEventListener(`navigate`, r),
          a?.(),
          e.finally(() => {
            t.current === e &&
              ((n.current = void 0), N.navigation.removeEventListener(`navigate`, r));
          }))
        : a?.();
    },
    [r]
  );
}
function Ei(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Di(e) {
  return Ei(e.trim().toLowerCase().replace(ly, `-`));
}
function Oi({ children: e, value: t }) {
  return /* @__PURE__ */ T(dy.Provider, { value: t, children: e });
}
function ki() {
  return x(dy);
}
function Ai(e, t) {
  let n = p(() => ({ inputs: t, result: e() }))[0],
    r = h(!0),
    i = h(n),
    a =
      r.current || (t && i.current.inputs && Cn(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    M(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function ji(e, t) {
  return Ai(() => e, t);
}
function Mi() {
  return N.location.search;
}
function Ni() {
  return ``;
}
function Pi(e) {
  return (
    py.add(e),
    N.addEventListener(`popstate`, e),
    () => {
      (py.delete(e), N.removeEventListener(`popstate`, e));
    }
  );
}
function Fi() {
  for (let e of py) e();
}
function Ii({ children: e, routerRenderKey: t, currentRouteId: n, isNavigationCommitPending: r }) {
  let i = ki() === `preview`,
    [a, o] = p({ routeId: n, search: `` });
  a.routeId !== n && o({ routeId: n, search: `` });
  let s = a.search,
    u = h(t);
  fy(() => {
    u.current = t;
  }, [t]);
  let d = c(Pi, Mi, Ni),
    f = k(d),
    m = t !== k(t),
    g = i ? s : m ? d : f,
    _ = S(
      async (e) => {
        if (i) {
          l(() => {
            o((t) =>
              t.routeId === n
                ? { routeId: n, search: e(new URLSearchParams(t.search)).toString() }
                : t
            );
          });
          return;
        }
        let a = r(),
          s = t;
        if ((await Bv({ continueAfter: `paint` }), a || r() || u.current !== s)) return;
        let c = ui();
        if (!c) return;
        let d = new URL(N.location.href),
          f = e(d.searchParams).toString();
        d.search = f;
        let p = c.queryParamBackAnchorSearch,
          m = N.location.search.slice(1),
          h = p === void 0 && f !== m,
          g = p !== void 0 && f === p,
          _ = { ...c, queryParamBackAnchorSearch: g ? void 0 : (p ?? (h ? m : void 0)) },
          v = d.toString();
        (h || g ? yi(_, v) : _i(_, v), Fi());
      },
      [n, r, i, t]
    ),
    v = Ai(() => ({ urlSearchParams: new URLSearchParams(g), replaceSearchParams: _ }), [g, _]);
  return /* @__PURE__ */ T(my.Provider, { value: v, children: e });
}
function Li({ parameterName: e }) {
  let t = h(e),
    { urlSearchParams: n, replaceSearchParams: r } = x(my);
  return [
    o(() => n.getAll(t.current), [n]),
    S(
      async (e) => {
        Xe(e) &&
          (await r((n) => {
            let r = t.current,
              i = new URLSearchParams(),
              a = !1;
            for (let [t, o] of n.entries())
              if (t !== r) i.append(t, o);
              else if (!a) {
                a = !0;
                for (let t of e) z(t) && i.append(r, t);
              }
            if (!a) for (let t of e) z(t) && i.append(r, t);
            return i;
          }));
      },
      [r]
    ),
  ];
}
function Ri({ initialValue: e, parameterName: t, optional: n }) {
  let r = h(n ? void 0 : z(e) ? e : ``),
    [i, a] = Li({ parameterName: t });
  return [
    o(() => (i.length === 0 ? r.current : (i[0] ?? ``)), [i]),
    S(
      async (e) => {
        if (e === r.current) return a($_);
        if (z(e)) return a([e]);
      },
      [a]
    ),
  ];
}
function zi({
  initialValue: e,
  parameterName: t,
  options: n = $_,
  getOptionTitle: r = hy,
  optional: i,
}) {
  M(() => {
    (n === $_ || r === hy) &&
      console.warn(
        `[useEnumQueryParam]`,
        `The URL variable \`${t}\` is misconfigured because the referenced Option field was removed from the collection. Filters using this variable are disabled, and updating the variable will have no effect.`
      );
  }, [n, r, t]);
  let a = Mr().activeLocale ?? void 0,
    s = o(() => {
      let e = /* @__PURE__ */ new Map();
      for (let t of n) {
        let n = r(t, a);
        n && e.set(n, t);
      }
      return e;
    }, [a, n, r]),
    [c, l] = Ri({
      initialValue: o(() => {
        if (e && n.includes(e)) return r(e, a) || ``;
      }, [a, e, n, r]),
      parameterName: t,
      optional: i,
    });
  return [
    o(() => {
      let t = e && n.includes(e) ? e : void 0;
      return Qe(c) ? void 0 : c ? s.get(c) || (i ? void 0 : t) : t;
    }, [c, s, e, n, i]),
    S(
      async (e) => {
        if (Qe(e)) return l(void 0);
        let t = r(e, a);
        if (t) return l(t);
      },
      [l, a, r]
    ),
  ];
}
function Bi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Vi(e),
    [r, i] = Vi(t),
    a = Hi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Vi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Hi(e, t) {
  if (e === t || ((e = `/` + Ui(e)), (t = `/` + Ui(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = vy(e, 1 + s);
    if (n !== vy(t, 1 + s)) break;
    n === _y && (o = s);
  }
  if (s === a) {
    if (i > a) {
      if (vy(t, 1 + s) === _y) return by(t, 1 + s + 1);
      if (s === 0) return by(t, 1 + s);
    } else r > a && (vy(e, 1 + s) === _y ? (o = s) : s === 0 && (o = 0));
  }
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || vy(e, s) === _y) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${by(t, 1 + o)}`;
}
function Ui(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = vy(e, o);
    else if (Sy(a)) break;
    else a = _y;
    if (Sy(a)) {
      if (r !== o - 1 && i !== 1) {
        if (i === 2) {
          if (t.length < 2 || n !== 2 || vy(t, t.length - 1) !== gy || vy(t, t.length - 2) !== gy) {
            if (t.length > 2) {
              let e = yy(t, xy);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = by(t, 0, e)), (n = t.length - 1 - yy(t, xy))),
                (r = o),
                (i = 0));
              continue;
            }
            if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
        } else
          (t.length > 0 ? (t += `${xy}${by(e, r + 1, o)}`) : (t = by(e, r + 1, o)),
            (n = o - r - 1));
      }
      ((r = o), (i = 0));
    } else a === gy && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Wi(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || N.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Gi(e, t) {
  let n = e.replace(Hv, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function Ki(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return Gi(i, r);
  }
  if (e.includes(`:`)) return Gi(e, r);
  let i = t.elements?.[e];
  return i ? Gi(i, r) : e;
}
function qi(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p;
  if ((i && e && (p = Ki(i, e, o)), l)) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace(Hv, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(Hv, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (s) {
    if (Cy.has(m) && N !== void 0) {
      let e = Wi(u);
      h = Bi(N.location.pathname, e + h);
    } else h = Bi(m, h);
  } else h = Dr(h, f);
  let v = g || _;
  return ((c || v) && (h = wr(h, v)), p && (h = `${h}#${p}`), h);
}
function Ji(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function Yi() {
  return `(${Ji.toString()})("${Ey}","${Dy}")`;
}
function Xi(e, t) {
  M(() => {
    let n = e.current;
    if (!n || (n.setAttribute(Ey, ``), !n.hasAttribute(Dy))) return;
    n.removeAttribute(Dy);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function Zi() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[wy] = 1), e);
}
function Qi() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[wy] = 1), e);
}
function $i(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function ea(e) {
  return wy in e && e[wy] === 1;
}
function ta(e) {
  return Ty in e.nativeEvent && e.nativeEvent[Ty] === 1;
}
function na(e) {
  let t = h(!1),
    n = h(null),
    r = c(Tt, Dt, Oy);
  return (
    M(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = $i(i),
        o = i[a];
      if (o === (a === `checked` ? !!e : e)) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(Qi()));
        return;
      }
      if (a === `checked`) {
        let e = Qi();
        ((e[Ty] = 1), i.dispatchEvent(e), i.dispatchEvent(Qi()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(Zi());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = Zi();
      ((c[Ty] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(Zi()));
        }));
    }, [r]),
    n
  );
}
function ra() {
  if (!ky) return;
  ((jy = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  ky.forEach((n) => t.addEventListener(n, Ay, e));
}
function ia() {
  return (
    M(() => {
      if (!jy || !ky) return;
      let e = { capture: !0 },
        t = document.body;
      (ky.forEach((n) => t.removeEventListener(n, Ay, e)),
        (ky = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function aa(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function oa(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function sa() {
  ((Ny = new My()), Ny.render.markStart());
}
function ca() {
  (s(() => {
    Ny?.useInsertionEffects.markRouterStart();
  }, []),
    t(() => {
      Ny?.useLayoutEffects.markRouterStart();
    }, []),
    M(() => {
      Ny?.useEffects.markRouterStart();
    }, []));
}
function la() {
  (s(() => {
    (Ny?.render.markEnd(), Ny?.useInsertionEffects.markStart());
  }, []),
    t(() => {
      (Ny?.useLayoutEffects.markStart(),
        document.visibilityState === `visible`
          ? He.read(() => {
              (Ny?.browserRendering.requestAnimationFrame.markStart(),
                Ny?.unattributedHydrationOverhead.measure());
            })
          : (Py = !0));
    }, []),
    M(() => {
      (Ny?.useEffects.markStart(),
        Ny?.browserRendering.hasStarted ||
          (Ny?.mutationEffects.measure(), Ny?.useEffects.markAreSynchronous()));
    }, []));
}
function ua() {
  (s(() => {
    Ny?.useInsertionEffects.markEnd();
  }, []),
    t(() => {
      (Ny?.useLayoutEffects.markEnd(),
        !(Py || document.visibilityState !== `visible`) &&
          He.read(() => {
            (Ny?.browserRendering.requestAnimationFrame.markEnd(),
              Bv().then(() => {
                Ny?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    M(() => {
      Ny?.useEffects.markEnd();
    }, []));
}
function da() {
  return (la(), null);
}
function fa() {
  return (ua(), null);
}
function pa(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return j.isValidElement(e) ? j.cloneElement(e, n) : /* @__PURE__ */ T(e, { ...n });
}
function ma() {
  return Ry;
}
function ha(e) {
  if (zy?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      H(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: va(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          H(t, `localizedPath must be defined`);
          let i = va(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    zy = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: zy.pathRoutes,
    paths: zy.paths,
    pathRoutesLocalized: zy.pathRoutesLocalized,
    pathsLocalized: zy.pathsLocalized,
  };
}
function ga(e, t, n = !0, r = ma()) {
  return _a(e, t, r, n);
}
function _a(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = ha(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = ya(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = ya(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = ya(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = ya(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function va(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function ya(e, t) {
  let n = [],
    r = ba(t).replace(Hv, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
    } else {
      if (r === void 0) throw Error(`Path variable values cannot be undefined`);
      o[t] = r;
    }
  }
  return { isMatch: !0, pathVariables: o };
}
function ba(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
async function xa({
  routes: e,
  routeId: t,
  pathVariables: n,
  localeId: r,
  locales: i,
  collectionUtils: a,
}) {
  let o = e[t],
    s = i ?? [],
    c = { get: Qn(a) },
    l = s.find(({ id: e }) => e === ev),
    u = s.find(({ id: e }) => e === (r ?? `default`)) ?? null,
    d = (
      o?.collectionId
        ? kr({ activeLocale: u, collectionUtils: c, currentRoute: o, pathVariables: n })
        : Promise.resolve(void 0)
    )
      .then((e) => e ?? null)
      .catch(
        (e) => (console.error(ot(`Failed to resolve the initial collection item id.`, e)), null)
      );
  return {
    ...(await jr({
      activeLocale: u,
      defaultLocale: l,
      collectionUtilsCache: c,
      locales: s,
      pathVariables: n,
      route: o,
      routeId: t,
    })),
    collectionItemId: d,
  };
}
function Sa(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Ca(e) {
  let t = /* @__PURE__ */ new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Sa(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function wa(e, t) {
  let n = e.toLowerCase(),
    r = Ca(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Ta(e) {
  if (N === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in N)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Ea() {
  let e = Ta(`abtests`);
  return new URLSearchParams(e?.description);
}
function Da(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Oa(e, t) {
  for (let [n, r] of t) Da(e, n, r);
}
function ka(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Aa(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function ja(e, t) {
  if (N === void 0) return t;
  let n = t;
  if (t) {
    Aa(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Oa(e, Ea()), ka(e), n);
}
function Ma(e) {
  (M(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    s(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Na(e, ...t) {
  By.has(e) || (By.add(e), console.warn(e, ...t));
}
function Pa(e, t, n) {
  Na(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Fa(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Uy in e &&
    e[Uy] instanceof Function &&
    Wy in e &&
    e[Wy] instanceof Function
  );
}
function Ia(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Hy(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function La(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Ra(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function za(e) {
  return Math.round(e * 2) / 2;
}
function Ba(e, t) {
  return { x: e, y: t };
}
function Va(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0) {
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  }
  return u;
}
function Ha(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ua(e) {
  let t = Wa(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Wa(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Ga(e, t, n) {
  return (
    (Jy.rgb_r = e / 255),
    (Jy.rgb_g = t / 255),
    (Jy.rgb_b = n / 255),
    Jy.rgbToHsluv(),
    { h: Jy.hsluv_h, s: Jy.hsluv_s, l: Jy.hsluv_l }
  );
}
function Ka(e, t, n, r = 1) {
  return (
    (Jy.hsluv_h = e),
    (Jy.hsluv_s = t),
    (Jy.hsluv_l = n),
    Jy.hsluvToRgb(),
    { r: Jy.rgb_r * 255, g: Jy.rgb_g * 255, b: Jy.rgb_b * 255, a: r }
  );
}
function qa(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Ja(e, t, n) {
  return {
    r: Ha(e) ? to(e, 255) * 255 : 0,
    g: Ha(t) ? to(t, 255) * 255 : 0,
    b: Ha(n) ? to(n, 255) * 255 : 0,
  };
}
function Ya(e, t, n, r) {
  let i = [
    io(Math.round(e).toString(16)),
    io(Math.round(t).toString(16)),
    io(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Xa(e, t, n) {
  let r,
    i,
    a = to(e, 255),
    o = to(t, 255),
    s = to(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Za(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Qa(e, t, n) {
  let r, i, a;
  if (((e = to(e, 360)), (t = to(t * 100, 100)), (n = to(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Za(s, o, e + 1 / 3)), (i = Za(s, o, e)), (a = Za(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function $a(e, t, n) {
  ((e = to(e, 255)), (t = to(t, 255)), (n = to(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function eo(e, t, n) {
  ((e = to(e, 360) * 6), (t = to(t * 100, 100)), (n = to(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function to(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    no(e) && (e = `100%`);
    let t = ro(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function no(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function ro(e) {
  return typeof e == `string` && e.includes(`%`);
}
function io(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ao(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Ky[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Yy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Yy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Yy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Ua(r[2] ?? ``), l: Ua(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Yy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Ua(r[2] ?? ``),
              l: Ua(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Yy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Ua(r[2] ?? ``), v: Ua(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Yy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Ua(r[2] ?? ``),
                  v: Ua(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Yy.hex8.exec(t))
                ? {
                    r: oo(r[1] ?? ``),
                    g: oo(r[2] ?? ``),
                    b: oo(r[3] ?? ``),
                    a: so(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Yy.hex6.exec(t))
                  ? {
                      r: oo(r[1] ?? ``),
                      g: oo(r[2] ?? ``),
                      b: oo(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Yy.hex4.exec(t))
                    ? {
                        r: oo(`${r[1]}${r[1]}`),
                        g: oo(`${r[2]}${r[2]}`),
                        b: oo(`${r[3]}${r[3]}`),
                        a: so(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Yy.hex3.exec(t))
                      ? {
                          r: oo(`${r[1]}${r[1]}`),
                          g: oo(`${r[2]}${r[2]}`),
                          b: oo(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function oo(e) {
  return parseInt(e, 16);
}
function so(e) {
  return oo(e) / 255;
}
function co(e) {
  let t = Xy.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function lo(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function uo({ r: e, g: t, b: n, a: r }) {
  return { r: lo(e), g: lo(t), b: lo(n), a: r };
}
function fo(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function po({ r: e, g: t, b: n, a: r }) {
  return { r: fo(e), g: fo(t), b: fo(n), a: r };
}
function mo({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function ho(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function go({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ho(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function _o(e) {
  return eb($y(e));
}
function vo(e) {
  return Qy(Zy(e));
}
function yo(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = So({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = bo(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? So(e)
              : Co(e)),
    i
  );
}
function bo(e) {
  let t = ao(e);
  if (t) return t.format === `hsl` ? Co(t) : t.format === `hsv` ? xo(t) : So(t);
}
function xo(e) {
  let t = eo(e.h, e.s, e.v);
  return { ...Xa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : wo(e.a) };
}
function So(e) {
  let t = Ja(e.r, e.g, e.b);
  return { ...Xa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : wo(e.a) };
}
function Co(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ha(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ha(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Wa(e.s)),
    (r = Ha(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Wa(e.l)),
    (i = Qa(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function wo(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function To({ children: e }) {
  if (x(mb).top) return /* @__PURE__ */ T(g, { children: e });
  let t = h({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = h({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = h(/* @__PURE__ */ new Set()).current,
    i = S(({ id: e, name: i, duplicatedFrom: a }) => {
      if (!e) return null;
      let o = i ? `byName` : `byId`,
        s = t.current[o][e];
      if (s) return s;
      let c = i || e;
      if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
        return (
          t.current.count[o][c] === void 0 &&
            ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
          r.add(c),
          c
        );
      let l;
      if (a?.length)
        for (let s = a.length - 1; s >= 0; s--) {
          let c = a[s];
          H(!!c, `duplicatedId must be defined`);
          let u = t.current[o][c],
            d = t.current.byLastId[c];
          if (d && !l) {
            let e = t.current.byLayoutId[d],
              n = !e || e === i;
            d && !r.has(d) && (!i || n) && (l = [d, c]);
          }
          let f = u ? t.current.byLayoutId[u] : void 0,
            p = !f || f === i;
          if (u && !r.has(u) && (!i || p))
            return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
        }
      let u = t.current.byLastId[e];
      if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
      if (l) {
        let [t, i] = l;
        return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
      }
      let d = t.current.byPossibleId[e];
      if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
      let f = a?.[0],
        p = i || f || e,
        { layoutId: m, value: h } = Eo(p, (t.current.count[o][p] ?? -1) + 1, r);
      if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
        let e = a[a.length - 1];
        if ((e && (n.current.byLastId[e] = m), a.length > 1))
          for (let e = 0; e < a.length - 1; e++) {
            let t = a[e];
            t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
          }
      }
      return ((n.current.byLayoutId[m] = c), r.add(m), m);
    }, []),
    a = S(() => {
      ((t.current = {
        byId: { ...t.current.byId, ...n.current.byId },
        byLastId: { ...t.current.byLastId, ...n.current.byLastId },
        byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
        byName: { ...t.current.byName, ...n.current.byName },
        byLastName: { ...t.current.byLastName, ...n.current.byLastName },
        byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
        count: { ...t.current.count, byName: {} },
      }),
        (n.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        r.clear());
    }, []),
    o = h({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return /* @__PURE__ */ T(mb.Provider, { value: o, children: e });
}
function Eo(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Do({ enabled: e = !0, ...t }) {
  let n = x(mb),
    r = o(() => ({ ...n, enabled: e }), [e]);
  return /* @__PURE__ */ T(mb.Provider, { ...t, value: r });
}
function Oo(e) {
  let t = h(null);
  return (t.current === null && (t.current = e()), t.current);
}
function ko(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ao(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return /* @__PURE__ */ C(`div`, {
    style: gb,
    children: [
      /* @__PURE__ */ T(`div`, { className: `text`, style: vb, children: r }),
      i && /* @__PURE__ */ T(`div`, { className: `text`, style: yb, children: i }),
    ],
  });
}
function Ao(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function jo() {
  let e = W.current();
  return e === W.canvas || e === W.export;
}
function Mo() {
  let [e] = p(() => jo());
  return e;
}
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function No(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Po(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of jb) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Fo(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Io(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < 512) continue;
    let n = Fo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Fo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Lo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Ab) {
    let n = Fo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Ro(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Lo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  }
  return { src: n, srcSet: Io(n, t, Po(t.pixelWidth, t.pixelHeight)) };
}
function zo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: at(Db.imagePlaceholderSvg),
  };
}
function Bo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Vo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ho(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...kb,
    objectPosition: Vo(e.positionX, e.positionY),
    objectFit: Bo(e.fit),
  };
}
function Uo(e) {
  let t = j.useRef(e ? `auto` : `async`),
    n = S((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = S(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = S(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Wo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Db.useImageSource(e, t, n),
    s = Ho(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Uo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Ro(e.nodeFixedSize, e, o);
  return /* @__PURE__ */ T(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Go({ image: e, containerSize: t, nodeId: n }) {
  let r = j.useRef(null),
    i = Db.useImageElement(e, t, n),
    a = Ho(e);
  return (
    j.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    /* @__PURE__ */ T(`div`, { ref: r, style: { display: `contents`, ...kb } })
  );
}
function Ko({ nodeId: e, image: t, containerSize: n }) {
  let r = j.useRef(null),
    i = Db.useImageSource(t, n, e);
  return (
    j.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ho(t);
      Db.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    /* @__PURE__ */ T(`div`, { ref: r, style: { display: `contents`, ...kb } })
  );
}
function qo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src)) {
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = B(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = za(e * (t.pixelWidth / 2)),
        s = Db.useImageSource(t, n);
      ((r = {
        ...Mb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Vo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        W.current() === W.canvas
          ? Db.canRenderOptimizedCanvasImage(Db.useImageSource(t))
            ? /* @__PURE__ */ T(Ko, { image: t, ...n })
            : /* @__PURE__ */ T(Go, { image: t, ...n })
          : /* @__PURE__ */ T(Wo, { image: t, avoidAsyncDecoding: W.current() === W.export, ...n });
  }
  let o = a ? Mb : (r ?? { ...Mb, ...zo() });
  return i
    ? /* @__PURE__ */ T(Ue.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : /* @__PURE__ */ T(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function Jo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  (typeof r == `number`
    ? (o = s = c = l = r)
    : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    (o !== 0 || s !== 0 || c !== 0 || l !== 0) &&
      (n && o === s && o === c && o === l
        ? (t.border = `${o}px ${i} ${a}`)
        : ((t.borderStyle = e.borderStyle),
          (t.borderColor = e.borderColor),
          (t.borderTopWidth = `${o}px`),
          (t.borderBottomWidth = `${s}px`),
          (t.borderLeftWidth = `${c}px`),
          (t.borderRightWidth = `${l}px`))));
}
function Yo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...kb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), /* @__PURE__ */ T(Ue.div, { style: n }))
    : (Jo(e, n, !1), /* @__PURE__ */ T(Ue.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Xo(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Zo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Pb.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : Hy.get(t, null)), Pb.isImageObject(r))) return Xo(r, e);
}
function Qo(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function $o(e) {
  return typeof e != `string` && typeof e != `number`;
}
function es(e) {
  return e != null && typeof e != `boolean` && !Qo(e);
}
function q(e) {
  return Number.isFinite(e);
}
function ts(e) {
  return (Math.PI / 180) * e;
}
function ns(e) {
  return Qe(e) ? !1 : e === 2 || e === 5;
}
function rs(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function is(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return as(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function as(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      U(e, `unknown constraint key`);
  }
}
function os(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(is(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(is(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function ss(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(is(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(is(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function cs(e, t, n, r, i) {
  let a = ss(q(e) ? e : zb, n, r, i),
    o = os(q(t) ? t : Bb, n, r, i);
  return (
    q(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (q(n.left) && q(n.right)
        ? (o = a / n.aspectRatio)
        : (q(n.top) && q(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ls(e, t) {
  return !q(e) || !q(t) ? null : e + t;
}
function us(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function ds(e) {
  return !e._constraints || us(e) ? !1 : e._constraints.enabled;
}
function fs(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    q(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    q(n) && q(r) ? { width: n, height: r } : null
  );
}
function ps(e) {
  let t = fs(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return q(n) && q(r) ? { x: n, y: r, ...t } : null;
}
function ms(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!ds(e) || r) return ps(e);
  let i = hs(e),
    a = gs(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Rb.toRect(i, o, null, n, null);
}
function hs(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Lb.quickfix({
      left: q(t),
      right: q(n),
      top: q(r),
      bottom: q(i),
      widthType: rs(c),
      heightType: rs(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function gs(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function _s() {
  return j.useContext(Vb).parentSize;
}
function vs(e) {
  return typeof e == `object`;
}
function ys(e) {
  return vs(e) ? e.width : e;
}
function bs(e) {
  return vs(e) ? e.height : e;
}
function xs(e, t) {
  return /* @__PURE__ */ T(Hb, { parentSize: t, children: e });
}
function Ss(e) {
  return ms(e, _s(), !0);
}
function Cs({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function ws(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Ts(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? Ue[e] : Ue.div;
}
function Es() {
  return !1;
}
function Ds() {
  return st() ? W.preview : W.current();
}
function Os() {
  return (Xb ??= import("./chunk.B3RYC8bk.DstwyWWw.mjs").then((e) => {
    if (((Zb = e.getCombinedCSSRules), ur())) for (let e of Zb()) ct(e, void 0);
    return e;
  }));
}
function ks() {
  return Zb ? Zb() : (ur() && Os(), []);
}
function As(e) {
  return qb(e, ks, `framer-lib-combinedCSSRules`);
}
function js(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function Ms(e, t) {
  let n = {};
  return (
    W.current() === W.canvas &&
      js(n, Qb ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Ns(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Ps(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = j.Children.map(t, (e) =>
        j.isValidElement(e) ? j.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Fs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Is(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = x(mb);
  return o(() => {
    if (!u) return e.layoutId;
    let o = t || e.layoutId;
    if (!o && (c || !i || s)) return;
    let d = o || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function Ls() {
  let [e, t] = j.useState(0);
  return j.useCallback(() => t((e) => e + 1), []);
}
function Rs(e) {
  let t = Ls();
  M(() => {
    let n = e?.current;
    if (n)
      return (
        tx?.observeElementWithCallback(e.current, t),
        () => {
          tx?.unobserve(n);
        }
      );
  }, [e, t]);
}
function zs(e) {
  return [
    ...(e.firstElementChild &&
    e.firstElementChild.hasAttribute(`data-framer-size-compatibility-wrapper`)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Bs)
    .map(Vs);
}
function Bs(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Vs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Bs);
  return t ? Vs(t) : e;
}
function Hs(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = x($b),
    l = W.current() === W.canvas;
  fy(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && Db.queueMeasureRequest(Ns(i), t.current, n(t.current)));
  });
}
function Us(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Db.queueMeasureRequest(Ns(t.id), t, zs(t));
}
function Ws(e) {
  e.willChange = `transform`;
  let t = W.current() === W.canvas;
  ix && t && (e.translateZ = nx);
}
function Gs(e) {
  ((e.willChange = `transform`), Ks(e, !0));
}
function Ks(e, t) {
  let n = W.current() === W.canvas;
  if (!ix || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t ? r.includes(rx) || (e.transform = r + rx) : (e.transform = r.replace(rx, ``));
}
function qs(e, t, n, r = !0) {
  if (!e) return;
  let i = bb(e.style),
    a = n || i[t],
    o = () => {
      Js(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Js(e) {
  return z(e) || B(e) || $e(e);
}
function Ys(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Xs(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Ys(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Zs(e, t) {
  let n = [e, t];
  return cx.test(e) ? e : Xs(1e3, lx, n, () => sx.multiplyAlpha(e, t));
}
function Qs(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Zs(e.value, t) }))
  );
}
function $s(e, t) {
  let n = 0;
  return (
    Qs(e, t).forEach((e) => {
      n ^= ox(e.value) ^ e.position;
    }),
    n
  );
}
function ec(e) {
  return e && ux.every((t) => t in e);
}
function tc(e) {
  return e && dx.every((t) => t in e);
}
function nc({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || rb(t)
      ? (n.backgroundColor = t)
      : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e))
    : e &&
      ((e = Hy.get(e, null)),
      typeof e == `string` || rb(e)
        ? (n.background = e)
        : px.isLinearGradient(e)
          ? (n.background = px.toCSS(e))
          : hx.isRadialGradient(e)
            ? (n.background = hx.toCSS(e))
            : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e)));
}
function J(e, t, n, r) {
  (r === void 0 && (r = t), e[t] !== void 0 && (n[r] = e[t]));
}
function rc(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function ic(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ac(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    he(n)
      ? (t.cornerShape = me(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    J(e, `size`, t),
    J(e, `width`, t),
    J(e, `height`, t),
    J(e, `minWidth`, t),
    J(e, `minHeight`, t),
    J(e, `top`, t),
    J(e, `right`, t),
    J(e, `bottom`, t),
    J(e, `left`, t),
    J(e, `position`, t),
    J(e, `overflow`, t),
    J(e, `opacity`, t),
    e._border?.borderWidth || J(e, `border`, t),
    J(e, `borderRadius`, t),
    J(e, `radius`, t, `borderRadius`),
    J(e, `color`, t),
    J(e, `shadow`, t, `boxShadow`),
    J(e, `x`, t),
    J(e, `y`, t),
    J(e, `z`, t),
    J(e, `rotate`, t),
    J(e, `rotateX`, t),
    J(e, `rotateY`, t),
    J(e, `rotateZ`, t),
    J(e, `scale`, t),
    J(e, `scaleX`, t),
    J(e, `scaleY`, t),
    J(e, `skew`, t),
    J(e, `skewX`, t),
    J(e, `skewY`, t),
    J(e, `originX`, t),
    J(e, `originY`, t),
    J(e, `originZ`, t),
    nc(e, t),
    t
  );
}
function oc(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof bb(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function sc(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (_x.has(t)) return `pointer`;
}
function cc(e) {
  return lc(e) ? !0 : e.style ? !!lc(e.style) : !1;
}
function lc(e) {
  return vx in e && (e[vx] === `scroll` || e[vx] === `auto`);
}
function uc(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = Ne(e.minWidth),
    h = Ne(e.minHeight),
    g = Ne(e.maxWidth),
    _ = Ne(e.maxHeight);
  return {
    top: Ne(n),
    left: Ne(t),
    bottom: Ne(r),
    right: Ne(i),
    width: Ne(a),
    height: Ne(o),
    size: Ne(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function dc(e) {
  let t = x($b),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = uc(e),
    s = Ss(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: W.current() === W.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !oc(e) && !e.__fromCanvasComponent && !cc(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = j.Children.count(e.children) > 0 &&
      j.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = ac(e);
  (a === void 0 && !i && (rc(f) || (c.width = yx.width), ic(f) || (c.height = yx.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (ds(o) &&
    s &&
    !Cs(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    ax.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let h = jo();
  return (
    e.positionSticky
      ? (!h || Db.isOnPageCanvas || t) &&
        ((m.position = `sticky`),
        (m.willChange = `transform`),
        (m.top = e.positionStickyTop),
        (m.right = e.positionStickyRight),
        (m.bottom = e.positionStickyBottom),
        (m.left = e.positionStickyLeft))
      : h &&
        (e.positionFixed
          ? (m.position = Db.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (m.position = `absolute`)),
    `rotate` in m && m.rotate === void 0 && delete m.rotate,
    [m, s]
  );
}
function fc(e) {
  let t = {};
  for (let n in e)
    (te(n) || Sb(n)) && !bx.has(n)
      ? (t[n] = bb(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof bb(e)[n] != `boolean` && !e.transition && (t.transition = bb(e)[n]));
  return t;
}
function pc(e) {
  return `data-framer-name` in e;
}
function mc(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function hc(e) {
  return /* @__PURE__ */ T(Ue.div, { layoutId: Cx, style: Ex, children: e.children });
}
function gc(e, t) {
  Je(e) ? e(t) : _c(e) && (e.current = t);
}
function _c(e) {
  return V(e) && `current` in e;
}
function vc() {
  let e = Oo(() => /* @__PURE__ */ new Set()),
    t = Oo(() => /* @__PURE__ */ new Map());
  return Oo(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      i !== n.current &&
        ((n.current = i),
        r && r(i),
        t.forEach((e, t) => {
          e ? e() : t(null);
        }),
        i === null
          ? (t.clear(), e.clear())
          : e.forEach((e) => {
              let n = e(i);
              t.set(e, n);
            }));
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function yc(e) {
  let t = h(null),
    n = vc();
  return Oo(() => (_c(e) ? n(e) : Je(e) ? n(t, e) : n(t)));
}
function bc(e, t, n) {
  let r = h(),
    i = h();
  (Ai(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function xc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Dx({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Sc(e, t, n) {
  let r = Oo(() => `${n.rootMargin}`),
    i = x(Ox),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  bc(
    e,
    (e) => {
      if (a && e !== null) return xc(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Cc(e, t, n) {
  let r = j.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n,
    c = j.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Tc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
        } else if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
        }
      },
      [a, o?.y, t]
    );
  kx(e, c, { threshold: Ax, rootMargin: s, enabled: i ?? !0 });
}
function wc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Ot.innerHeight);
}
function Tc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && wc(t, e) >= r;
}
function Ec() {
  return /* @__PURE__ */ new Map();
}
function Dc() {
  return Oo(Ec);
}
function Oc(e, t = []) {
  let { register: n, deregister: r } = x(Fx);
  M(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function kc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Ac(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (q(t.originX) && (r.originX = t.originX),
      q(t.originY) && (r.originY = t.originY),
      q(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (q(n.originX) && (r.originX = n.originX),
      q(n.originY) && (r.originY = n.originY),
      q(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function jc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Mc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return Vx.PushLeft;
    case `left`:
      return Vx.PushRight;
    case `bottom`:
      return Vx.PushUp;
    case `top`:
      return Vx.PushDown;
  }
}
function Nc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Vx.OverlayLeft;
    case `left`:
      return Vx.OverlayRight;
    case `bottom`:
      return Vx.OverlayUp;
    case `top`:
      return Vx.OverlayDown;
  }
}
function Pc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Vx.FlipLeft;
    case `left`:
      return Vx.FlipRight;
    case `bottom`:
      return Vx.FlipUp;
    case `top`:
      return Vx.FlipDown;
  }
}
function Fc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Lc(e, t.transition, t.component);
    case `removeOverlay`:
      return Rc(e);
    case `add`:
      return zc(e, t.key, t.transition, t.component);
    case `remove`:
      return Hc(e);
    case `update`:
      return Ic(e, t.key, t.component);
    case `back`:
      return Bc(e);
    case `forward`:
      return Vc(e);
    default:
      return;
  }
}
function Ic(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Lc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Rc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function zc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? qc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Gc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Uc(e, t, c),
    p = Kc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Bc(e) {
  let t = { ...e.containers },
    n = Hc(e);
  if (n) return ((n.containers = t), n);
}
function Vc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = zc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Hc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (H(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Wc(e, r, n),
    u = Kc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Uc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Wc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Gc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Kc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Jc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function qc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function Jc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (e === n || e === r) {
    if (e === n && n > r) {
      let t = i[e];
      return Yc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Yc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Yc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Yc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Yc(e, t, n) {
  let r = {},
    i = {};
  return (
    Ux.forEach((e) => {
      ((r[e] = Rx[e]), (i[e] = { ...n, from: Rx[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${bb(Rx)[a]}%` : bb(Rx)[a];
        ((bb(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Xc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Zc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Qc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : qx;
}
function $c({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function el(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function tl(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
  if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  }
  {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function nl(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function rl(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function il(e, t) {
  let { current: n, history: r } = t;
  if (e !== n) {
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
  }
}
function al(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return qx;
}
function ol(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function sl(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function cl(e) {
  return j.Children.map(e.component, (t) => {
    if (!es(t) || !$o(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? V(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      j.cloneElement(t, n)
    );
  });
}
function ll(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function ul(e, t) {
  let n = be(),
    r = F();
  return /* @__PURE__ */ T(Kx, {
    ref: (e) => {
      t && (typeof t == `function` ? t(e) : (t.current = e));
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function dl(e) {
  return V(e) && Xx in e;
}
function fl(e) {
  return V(e) || Je(e);
}
function pl(e) {
  return !!e && Zx in e && e[Zx] === !0;
}
function ml(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `sharedtype`: {
        if (!(`definition` in e) || !dl(e.definition)) return;
        let { definition: t } = e;
        switch (t.kind) {
          case `enum`:
            return z(e.defaultValue) && t.options.includes(e.defaultValue)
              ? e.defaultValue
              : void 0;
          default:
            t.kind;
            return;
        }
      }
      case `boolean`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Qe(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = V(e.defaultValue) ? e.defaultValue : {};
        return (V(e.controls) && hl(t, e.controls), t);
      }
      case `array`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `motionvalue`:
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function hl(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Qe(i) || pl(r)) continue;
    let a = ml(r);
    Qe(a) || (e[n] = a);
  }
}
function gl(e) {
  if (V(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function _l(e, t) {
  fl(e) && hl(gl(e), t);
}
function vl(e, t) {
  Object.assign(e, { [Qx]: t });
}
function yl(e, t, n) {
  (Object.assign(e, { propertyControls: t }), bl(t), _l(e, t), n !== void 0 && vl(e, n));
}
function bl(e) {
  for (let t of Object.values(e))
    t?.type === `sharedtype` &&
      `definition` in t &&
      dl(t.definition) &&
      Object.isExtensible(t) &&
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function xl(e) {
  return e.propertyControls;
}
function Sl(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Cl(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function wl(e, t) {
  let n = [];
  (q(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    q(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    q(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    q(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    q(e.invert) && n.push(`invert(${e.invert / 100})`),
    q(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    q(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    q(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Sl(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Tl(e, t) {
  q(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function El(e, t) {
  (Tl(e, t), wl(e, t));
}
function Dl(e, t) {
  let n,
    r = (...r) => {
      (Ot.clearTimeout(n), (n = Ot.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      Ot.clearTimeout(n);
    }),
    r
  );
}
function Ol(...e) {
  return e.filter(Boolean).join(` `);
}
function kl(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Al(i);
    a && t.has(a) ? (n[a] = e[i]) : (r[i] = e[i]);
  }
  return [n, r];
}
function Al(e) {
  if (e.startsWith(cS)) return e.substr(lS);
}
function jl(e, t, r) {
  let a = n.map(e, (e) => (w(e) ? i(e, t) : e));
  return r ? a : /* @__PURE__ */ T(g, { children: a });
}
function Ml(e) {
  let t = Oo(() => Nl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Nl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Pl(t);
  let r = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Pl(t)));
    },
    a = !1;
  function o(o, s) {
    if (a)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (a = !0),
      n.count(o) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      n.map(o, (e) => {
        if (w(e)) {
          let n = `ref` in e ? e.ref : void 0;
          r(t.forwardedRef, n);
          let a = Je(s) ? s(e.props) : s;
          return i(e, t.ref === n ? a : { ...a, ref: t.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return /* @__PURE__ */ T(g, { children: o(e, t) });
  };
  return (
    (s.cloneAsArray = o),
    {
      useSetup: (e) => {
        ((a = !1), r(e, t.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function Pl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (gc(n, e), gc(t, e));
  };
}
function Fl(e, t, n, r, i, a, o, s) {
  let c = j.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !j.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !zl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Rl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Rl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = /* @__PURE__ */ T(
        dS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Ll(e, a, r);
    (f.length
      ? (H(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = /* @__PURE__ */ T(
          `div`,
          { className: `${fS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : H(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    H(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, /* @__PURE__ */ T(`div`, { className: pS }, `property-overrides-separator`)]
  );
}
function Il(e) {
  return e.split(`-`)[2];
}
function Ll(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Il(a)}`);
  }
  return r;
}
function Rl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function zl(e, t) {
  for (let n of Object.keys(t)) if (!Cn(e[n], t[n], !0)) return !0;
  return !1;
}
function Bl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Vl(e) {
  return j.forwardRef(({ optimized: t, ...n }, r) => {
    let i = j.useContext(uS),
      a = j.useContext(dS)?.variants,
      o = n[xS];
    o && !ur() && yS.setAll(o, a, t ? n : null, i);
    let s = CS(n);
    return /* @__PURE__ */ T(e, { ref: r, ...n, ...s });
  });
}
function Hl(e) {
  return z(e) || Array.isArray(e);
}
function Ul(e) {
  return e in ES;
}
function Wl(e, t) {
  let n = Oo(() => ({ values: TS(t ? e : void 0) }));
  return (
    j.useEffect(() => {
      if (!t)
        for (let e of wS) {
          let t = ES[e];
          Qe(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function Gl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  s
) {
  let c = ce(),
    u = Oo(TS),
    d = h(!1),
    f = AS(),
    m = h(null),
    g = S(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? ES : i,
        o = t ? i : ES;
      return (
        (d.current = !d.current),
        (m.current = Promise.all(
          wS.map((t) => {
            if (!(c && t !== `opacity`))
              return (
                u[t].jump(o[t] ?? ES[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Fe(u[t], i, r);
                })
              );
          })
        )),
        m.current
      );
    }, [i, r, n, c]),
    [_, v] = p(!1),
    y = h(!1),
    b = S(async () => {
      e && y.current && (await g(), await f(t ?? 0), b());
    }, [g, f, e, t]),
    x = S(() => {
      y.current || ((y.current = !0), l(() => v(!0)), b());
    }, [b]),
    C = S((e = !0) => {
      (wS.forEach((e) => {
        u[e].stop();
      }),
        wS.forEach((e) => {
          u[e].set(ES[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), l(() => v(!1))));
    }, []),
    w = e && i,
    T = S(() => {
      document.hidden ? C(!1) : y.current && ((y.current = !1), x());
    }, [x, C]);
  (M(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    M(() => {
      (w && a) || (w ? x() : C());
    }, [x, C, a, w]),
    M(() => () => C(), [C]));
  let E = h(!1),
    D = S(async () => {
      m.current && (await m.current, !E.current && C());
    }, [C]),
    O = S(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    );
  kx(s, O, { enabled: w && a });
  let k = _ || !a;
  return o(() => ({ values: u, style: w && k ? DS : OS }), [w, k]);
}
function Kl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function ql(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = j.useRef(null),
    c = ce(),
    l = j.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Kl(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = ye(),
    d = I(u, l),
    f = _e(a && s.current === null ? `hidden` : n),
    p = _e(0),
    m = x(Ox);
  return (
    bc(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = xc(m, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            He.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    An(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? p : d }, style: o ? { ...DS, visibility: f } : OS }
  );
}
function Jl(e) {
  return typeof e == `object` && !!e;
}
function Yl(e) {
  if (Jl(e)) return e?.transition;
}
function Xl(e, t, n, r, i, a) {
  let o = Yl(e);
  return Promise.all(
    wS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Jl(e) ? (e?.[s] ?? ES[s]) : ES[s];
          if ((he(u) && (u = u.get()), !B(u))) return c();
          let d = ee.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && Ot.MotionHandoffAnimation) {
            let e = Ot.MotionHandoffAnimation(i, s, He);
            e && (f = e);
          } else z(i) && Ot.MotionCancelOptimisedAnimation?.(i, s, He);
          a ? l.set(u) : Fe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Zl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  s,
  c,
  l,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, g] = le(),
    _ = h({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    v = Oo(() => {
      let e = d ?? l;
      if (!V(e)) return { values: TS() };
      let t = {};
      for (let n in e) {
        let r = V(e) ? e[n] : void 0;
        B(r) && (t[n] = r);
      }
      return { values: TS(t) };
    });
  bc(
    s,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && f) return;
      let n = ee.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!Ul(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, B(t) ? t : ES[e]);
        }
      }
    },
    [f]
  );
  let y = ce();
  bc(s, (e) => {
    if (!c) {
      g?.();
      return;
    }
    if (e === null) return;
    if (m !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(_.current, { running: !0 }),
            Xl(f, v, y, s, u).then(() => Object.assign(_.current, { running: !1 })))
          : p
            ? (Object.assign(_.current, { running: !0 }),
              Xl(p, v, y, s, u)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    !Cn(f, t) &&
      f &&
      (Object.assign(_.current, { lastAnimate: f }),
      Xl(f, v, y, s, u, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = c && f;
  return o(() => ({ values: v.values, style: b ? DS : OS }), [b]);
}
function Ql(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function $l(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = Ql(o.current, document.documentElement) - NS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function eu(e, t = 0) {
  return e < t ? `up` : `down`;
}
function tu(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = kn();
  j.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return P((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = eu(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < PS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function nu(e, t, n) {
  let r = $l(e, t),
    i = [...IS],
    a = r[0];
  if (!B(a)) return LS;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!B(e)) return LS;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function ru(e) {
  return {
    x: e?.x ?? ES.x,
    y: e?.y ?? ES.y,
    scale: e?.scale ?? ES.scale,
    opacity: e?.opacity ?? ES.opacity,
    transformPerspective: e?.transformPerspective ?? ES.transformPerspective,
    rotate: e?.rotate ?? ES.rotate,
    rotateX: e?.rotateX ?? ES.rotateX,
    rotateY: e?.rotateY ?? ES.rotateY,
    skewX: e?.skewX ?? ES.skewX,
    skewY: e?.skewY ?? ES.skewY,
    transition: e?.transition ?? void 0,
  };
}
function iu({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return j.useMemo(
    () => ({
      initial: r ?? ru({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? ru({ opacity: t }),
      exit: i ?? ru(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function au(e, t) {
  let n = ce(),
    r = iu(e),
    i = e.styleAppearEffectEnabled,
    a = Wl(i ? r.initial : r.animate, i),
    s = j.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = kn(),
    l = j.useRef(),
    u = j.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = ee.get(t.current);
      l.current = Promise.all(
        wS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? ES[e]);
          let t = o[e] ?? ES[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (B(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && Fe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  Cc(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = s.current;
      t
        ? (s.current.scheduledAppearState = e)
        : ((s.current.scheduledAppearState = void 0),
          (s.current.lastAppearState = e),
          n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    j.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return P((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = nu(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = fe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = bb(r)[l];
        d && u(d);
      });
    }, [c, f]),
    tu(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    An(() => {
      if (i && (e.targets || e.scrollDirection))
        for (let e of wS) a.values[e].set(r.initial?.[e] ?? ES[e]);
    }),
    o(() => ({ values: a.values, style: i ? DS : OS }), [i])
  );
}
function ou(e, t) {
  let n = j.useRef({});
  j.useEffect(() => {
    if (t !== void 0)
      for (let r of Y_(e)) {
        let i = e[r],
          a,
          o;
        function s() {
          let e = n.current[r];
          (e && e.stop(),
            (n.current[r] = Ae({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: a,
            })));
        }
        i.attach((e, t) => ((o = e), (a = t), He.postRender(s), i.get()));
      }
  }, [JSON.stringify(t)]);
}
function su(e, t) {
  let n = BS();
  return {
    inputRange: $l(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of wS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function cu(e) {
  let t = BS();
  for (let { target: n } of e) for (let e of wS) t[e]?.push(n[e]);
  return t;
}
function lu(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: n,
    transformTargets: r,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = ce(),
    c = Wl(zS(r, s), n),
    l = !n || !r,
    u = e === `onScrollTarget`,
    d = kn();
  return (
    t(() => {
      if (!l && u)
        return P((e, { y: t }) => {
          if (!r[0] || (r[0].ref && !r[0].ref.current)) return;
          let { inputRange: n, effectKeyOutputRange: i } = su(r, a * t.containerLength);
          if (n.length !== 0)
            for (let e of wS)
              (s && e !== `opacity`) ||
                (n.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(fe(t.current, n, i[e])));
        });
    }, [s, u, a, r, l]),
    bc(
      o,
      (t) => {
        if (l || u || t === null) return;
        let n = cu(r);
        return P(
          (e, { y: t }) => {
            for (let e of wS)
              (s && e !== `opacity`) ||
                (VS.length === n[e].length &&
                  n[e][0] !== void 0 &&
                  c.values[e].set(fe(t.progress, VS, n[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, r, l]
    ),
    ou(c.values, i),
    An(() => {
      if (l) return;
      let e = zS(r, s);
      for (let t of wS) c.values[t].set(e?.[t] ?? ES[t]);
    }),
    j.useMemo(() => ({ values: c.values, style: n ? DS : OS }), [n])
  );
}
function uu(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function du(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Al(n);
    if (r) {
      for (let i of US)
        if (HS[i]?.has(r)) {
          t[i][r] = bb(e)[n];
          break;
        }
    } else t.forwardedProps[n] = bb(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = uu(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = uu(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function fu(e) {
  return V(e) && KS in e;
}
function pu(e, t) {
  if (!e || !V(e)) return t;
  for (let n in e) {
    let r = e[n];
    he(r) && Ul(n) && B(r.get()) && t[n].push(r);
  }
}
function mu(e) {
  return z(e) || Array.isArray(e);
}
function hu({ componentIdentifier: e, children: t }) {
  return t(x(JS)[e] ?? {});
}
function gu() {
  return j.useContext(YS);
}
function _u(e) {
  let t = Is(e),
    { layoutIdKey: n, duplicatedFrom: r, ...i } = e;
  return { layoutId: t, ...i };
}
function vu(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function yu() {
  if (N === void 0 || tC)
    return /* @__PURE__ */ T(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw rC;
}
function bu({ children: e }) {
  return x(aC)
    ? /* @__PURE__ */ T(g, { children: e })
    : /* @__PURE__ */ T(y, { fallback: iC, children: e });
}
function xu() {
  return /* @__PURE__ */ T(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Su(e, t) {
  if (!xt || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  Un(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Cu(...e) {
  console.error(...e);
}
function wu() {
  return W.current() !== W.canvas;
}
function Tu({ getErrorMessage: e, fallback: t, children: n }) {
  return wu()
    ? /* @__PURE__ */ T(Eu, {
        fallback: t,
        children: /* @__PURE__ */ T(sC, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function Eu({ children: e, fallback: t = oC }) {
  return N === void 0
    ? /* @__PURE__ */ T(y, { fallback: t, children: e })
    : /* @__PURE__ */ T(bu, { children: e });
}
function Du() {
  return /* @__PURE__ */ T(`div`, {
    style: {
      padding: `12px 16px`,
      borderWidth: 1,
      borderRadius: 6,
      borderStyle: `solid`,
      borderColor: `rgba(149, 149, 149, 0.15)`,
      backgroundColor: `rgba(149, 149, 149, 0.1)`,
      fontSize: 12,
      color: `#a5a5a5`,
    },
    children: `Code component disabled`,
  });
}
function Ou() {
  return j.useContext(lC);
}
function ku() {
  let e = Ou();
  return j.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Au({ children: e, scopeId: t, nodeId: n }) {
  let r = Ou(),
    i = j.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return /* @__PURE__ */ T(lC.Provider, { value: i, children: e });
}
function ju(e, t) {
  return `${uC}${e}:${t}`;
}
function Mu(e, t) {
  return Pu(`component`, e, t);
}
function Nu(e, t) {
  return Pu(`override`, e, t);
}
function Pu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor → open Quick Actions (press Cmd+K or Ctrl+K) → paste this: ${ju(t, n)} → click “Show Layer”.`;
}
function Fu(e, t, n, r, i, a) {
  let o = Lu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Iu(e, t, n, r) {
  return Lu(e, t, n, r);
}
function Lu(e, t, n, r) {
  return !!(Qe(n) || (n === 1 && r && e === t));
}
function Ru(e, t, n, r, i, a) {
  let o = Ou();
  if (Qe(t) || Qe(n)) return /* @__PURE__ */ T(cC, { children: e });
  let { disableCustomCode: s } = $S();
  return s && r
    ? /* @__PURE__ */ T(Du, {})
    : (Fu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = /* @__PURE__ */ T(Tu, {
          getErrorMessage: Mu.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = /* @__PURE__ */ T(Au, { scopeId: t, nodeId: n, children: e })),
      e);
}
function zu() {
  if (pC !== void 0 || N === void 0) return;
  let e = Ot.matchMedia(`(any-hover: hover)`);
  ((pC = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== pC) {
        pC = t;
        for (let e of mC) e();
      }
    }));
}
function Bu() {
  return (zu(), Vu());
}
function Vu() {
  return pC ?? !1;
}
function Hu(e) {
  return (
    mC.add(e),
    zu(),
    () => {
      mC.delete(e);
    }
  );
}
function Uu(e = !1) {
  let [t, n] = p(e);
  return (
    fy(function () {
      function e(e = !0) {
        let t = Vu();
        e ? l(() => n(t)) : n(t);
      }
      let t = Hu(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function Wu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Gu(e) {
  return !(!e || e.placement || e.alignment);
}
function Ku(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      U(e);
  }
}
function qu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Ku(t)}, -100%`;
    case `right`:
      return `0%, ${Ku(t)}`;
    case `bottom`:
      return `${Ku(t)}, 0%`;
    case `left`:
      return `-100%, ${Ku(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Ju(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(`data-framer-portal-id`)) {
      let e = n.getAttribute(xC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Yu(e) {
  let { registerCursors: n } = x(hC),
    r = Oo(() => e),
    i = A();
  t(() => n(r, i), [n, i]);
}
function Xu(e) {
  return !!(e && typeof e == `object` && CC in e);
}
function Zu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Qu() {
  return W.current() === W.canvas;
}
function $u(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function ed(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function td(e, t, n, r) {
  if (z(e)) {
    let i = $u(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = ga(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function nd(e) {
  return z(e) && e.startsWith(`data:${AC}`);
}
function rd(e) {
  if (nd(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(17),
        r = t.searchParams,
        i = r.has(EC) ? r.get(EC) : void 0,
        a,
        o = r.get(DC),
        s = r.get(OC),
        c = r.get(kC);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function id(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = rd(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function ad(e) {
  if (!nd(e)) return e;
  let t = rd(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: od(i) };
}
function od(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function sd(e, t, r, i, a, s) {
  let c = x(jC),
    l = ku(),
    u = o(() => ({ scopeId: t, nodeId: r, furthestExternalComponent: l }), [t, r, l]),
    d = En(),
    f = On(),
    { locales: p } = Mr(),
    m = o(() => {
      let e = Xu(i) ? i : ad(i);
      if (e) return td(e, d, f, p);
    }, [f, i, d, p]),
    h = !!(!Qu() && c?.nodeId && u.nodeId),
    g = S(
      (e) => {
        a.href &&
          (e.preventDefault(),
          e.stopPropagation(),
          gr(e) ? ud(a.href, ``, `_blank`) : m ? a.navigate?.() : ud(a.href, a.rel, a.target));
      },
      [a, m]
    ),
    v = S(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), ud(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = S(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : ud(a.href, a.rel, a.target));
      },
      [a, m]
    );
  bc(
    s,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (n.forEach(e, (e) => {
        ld(e) &&
          (H(
            cd(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          H(
            cd(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          TC.collectNestedLink(c, u));
      }),
      (b = n.map(e, (e) => {
        if (!ld(e)) return e;
        let t = dd(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: v,
            onKeyDown: y,
            as: r.as && dd(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return _(t, { ...i, ref: a }, n);
      }))),
    /* @__PURE__ */ T(jC.Provider, { value: u, children: b })
  );
}
function cd(e) {
  return !Qe(e?.nodeId);
}
function ld(e) {
  return w(e) && (dd(e.type) !== e.type || dd(e.props.as) !== e.props.as);
}
function ud(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function dd(e) {
  return e === `a` ? `span` : We(e) && ie(e) === `a` ? Ue.span : e;
}
function fd({ component: e, props: t }) {
  let n = x(uS),
    r = _(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return /* @__PURE__ */ T(hS, { overrides: o, breakpoint: i, children: r });
}
function pd(e) {
  PC = e;
}
function md() {
  return PC;
}
function hd(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : hd(e.parentElement, t)
      : null;
}
function gd({ children: e }) {
  return /* @__PURE__ */ T(bu, { children: e });
}
function _d(e) {
  return E(function (t, n) {
    return /* @__PURE__ */ T(gd, { children: /* @__PURE__ */ T(e, { ...t, ref: n }) });
  });
}
function vd(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return bd(e, t, o, s, a, c, l, i, r);
}
function yd(e, t, n, r) {
  if (e.routes && e.getRoute && $u(t))
    try {
      let [i, a] = t.split(`#`, 2);
      H(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      H(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = ga(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function bd(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = qi(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function xd() {
  let e = x(IC),
    t = On()?.pathVariables;
  return e || t;
}
function Sd(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(FC)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Cd() {
  return !!Ta(`ss-only-routes`);
}
function wd(e) {
  if (N === void 0) return;
  let t = N.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Td(e) {
  return wa(`rewrite`, e)?.description === `external`;
}
function Ed() {
  if (!$S().checkServerSideRouter) return !1;
  if (BC === void 0) {
    let e = Cd();
    ((VC = !e && cr() && dr() < 16.4), (BC = e || VC));
  }
  return BC;
}
function Dd(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Td(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === md() ? `client` : `server` };
}
async function Od(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (VC &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((VC = !1), wa(`ss-only-routes`, t.headers.get(`server-timing`)) || (BC = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Dd(t, e);
}
function kd(e, t) {
  LC.has(e) && LC.set(e, t);
}
async function Ad(e) {
  await tr(RC);
  try {
    kd(e, await Od(e));
  } catch {
    LC.delete(e);
  }
}
async function jd(e) {
  try {
    let t = await Od(e);
    return (kd(e, t), t);
  } catch {
    return (Ad(e), { decision: `server` });
  }
}
function Md(e) {
  if (!Ed()) return;
  let t = wd(e);
  if (!t || t.origin !== N.location.origin) return;
  let n = t.href;
  LC.has(n) || LC.set(n, jd(n));
}
function Nd(e) {
  let t = wd(e);
  if (!t) return;
  let n = LC.get(t.href);
  return n && !it(n) ? n : void 0;
}
async function Pd(e) {
  let t = wd(e);
  if (!t) return;
  let n = LC.get(t.href);
  if (n) return it(n) ? Promise.race([n, tr(zC).then(() => void 0)]) : n;
}
function Fd() {
  let e = u.connection || u.mozConnection || u.webkitConnection || {},
    t = u.deviceMemory && u.deviceMemory < WC,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? GC : KC));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: UC }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Md(e.navigationUrl);
    let { id: n, preload: a } = e,
      l = YC.get(n);
    if (!l?.size || JC.has(n)) return;
    if (s >= i) {
      setTimeout(() => c(e, t), HC);
      return;
    }
    (++s, JC.add(n));
    let u = a()?.catch(() => {});
    (o.unobserve(t), qC.delete(t));
    for (let e of l) (o.unobserve(e), qC.delete(e));
    (l.clear(), YC.delete(n), await u, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = qC.get(e);
      if (!n || JC.has(n.id)) {
        (o.unobserve(e), qC.delete(e));
        continue;
      }
      let r = n.id,
        i = YC.get(r),
        a = YC.get(r)?.size ?? 0;
      t.isIntersecting
        ? (i ? i.add(e) : YC.set(r, /* @__PURE__ */ new Set([e])), setTimeout(() => c(n, e), HC))
        : (i && i.delete(e), a <= 1 && YC.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!JC.has(n))
      return (
        qC.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (qC.delete(e), o.unobserve(e));
        }
      );
  };
}
function Id(e, t) {
  let n = $u(e),
    r = {
      href: e === `` || ed(e, n) ? e : `https://${e}`,
      target: Ld(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = wr(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Ld(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Rd(e, t) {
  console.warn(
    ot(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function zd(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Rd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return it(i) ? i.catch(Rd) : i;
  } catch (e) {
    Rd(e);
  }
}
async function Bd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      H(a, `unresolvedSlug should be defined`);
      let o = zd(a, r, n),
        s = it(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Vd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = zd(o, r, n);
      it(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Hd() {
  let e = er();
  return S((t, n, r, i = []) => Vd(t, n, r, e, i), [e]);
}
function Ud({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = er();
  return S(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Xu(r) ? r : ad(r);
      if (!Xu(c))
        return Un(
          `published_site_click`,
          {
            ...s,
            href: o ? Wd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (it(n) ? await n : n) ?? null;
        }
      }
      return Un(
        `published_site_click`,
        {
          ...s,
          href: o ? Wd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Wd(e) {
  try {
    let t = new URL(e, Ot.document.baseURI);
    return t.origin === Ot.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Gd(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Kd(e, t, n) {
  return async (r) => {
    let i = gr(r),
      a = hd(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    s
      ? (r.preventDefault(), n(c))
      : (await Bv({
          priority: `user-blocking`,
          ensureContinueBeforeUnload: !0,
          continueAfter: `paint`,
        }),
        c());
  };
}
function qd(e, t, n) {
  return async (r) => {
    let i = await Jd(t);
    i.decision === `client` ? n(r) : Yd(t ?? e, r, i.redirectUrl);
  };
}
async function Jd(e) {
  return !e || !Ed()
    ? { decision: `client` }
    : Nd(e) || (Md(e), (await Pd(e)) ?? { decision: `server` });
}
async function Yd(e, t, n) {
  (await Bv({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    N.location.assign(Xd(e, n)));
}
function Xd(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, N.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function Zd(e) {
  let t = Wi(e);
  if (t && N.location.pathname === t) {
    let e = new URL(N.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return N.location.href;
}
function Qd(e, t, n) {
  if (t || N === void 0) return;
  let r = Zd(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && (i.pathname !== a.pathname || i.search !== a.search)) return i.href;
}
function $d(e, t, n, r, i, a, o, s) {
  if (!n) return Id(e, r);
  let c = yd(t, e, s, o);
  if (!c) return Id(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Id(e, r);
  let m = qi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !St,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Ld(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = Qd(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = qd(m, _, (e) =>
      Gd(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: Kd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Sd(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function ef(e, t, n) {
  let r = tf(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Je(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Je(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function tf(e, t) {
  let n = V(e) ? e : void 0,
    r = n && !Ze(n),
    i = t && !Ze(t);
  if (r || i) return { ...n, ...t };
}
function nf(e, t, n) {
  if (!(t && ir())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: rf } : { ...i, onTap: r }) : e;
}
function rf(e) {
  let t = hd(e.target);
  t && t.getAttribute(`target`) !== `_blank` && e.preventDefault();
}
function af(e, t, n, r, i, a) {
  let o = Xu(e) ? e : ad(e);
  if (!Xu(o)) return z(e) ? Id(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (it(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return qi(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function of() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function sf() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, of(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: QC, difficulty: $C, tokenLength: ew, maxTime: tw }));
  });
}
function cf(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of e.elements)
    lf(n) && !n.disabled && n.name && (n.name.startsWith(`__framer`) || t.add(n.name));
  return Array.from(t);
}
function lf(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function uf(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function df(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function ff() {
  let e = j.useContext(hw),
    t = j.useMemo(
      () =>
        iw.map((e) => ({
          inputRef: j.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: j.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${nw}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: j.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [ow.name]: e.originalName,
                [ow.value]: o,
                [ow.setAttribute]: e.methodsUsed.setAttribute,
                [ow.valueProperty]: e.methodsUsed.valueProperty,
                [ow.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [ow.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [ow.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${nw}_${sw.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${nw}_${sw.fieldCount}`, r.toString()),
          n.append(`${nw}_${sw.fieldFilledCount}`, i.toString()),
          n.append(`${nw}_${sw.hpVersion}`, rw),
          n.append(`${nw}_${sw.siteId}`, e || ``),
          n.append(`${nw}_${sw.timeToSubmissionSinceModuleLoad}`, cw()));
      },
      [t, e]
    ),
  };
}
function pf({ states: e }) {
  return /* @__PURE__ */ T(g, {
    children: e.map((e) => /* @__PURE__ */ T(lw, { inputStateRef: e }, `hp_${e.originalName}`)),
  });
}
function mf({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          hf(e, t, n);
        })
      : hf(e.pageviewEventData.current, t, n));
}
function hf(e, t, n) {
  return Un(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function gf({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? mw : pw;
    case `incomplete`:
      return e === `error` ? mw : fw;
    case `submit`:
      return uw;
    case `success`:
      return dw;
    case `error`:
      return mw;
    default:
      U(t);
  }
}
function _f({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function vf(e) {
  e.preventDefault();
}
function yf(e, t) {
  let n = ed(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function bf(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (bf(t)) return !0;
  return !1;
}
async function xf(e, t, n, r) {
  let i = await sf();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": uf(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Sf(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Sf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    V(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Cf({ EditorBar: e, fast: t = !1 }) {
  let n = x(hw),
    r = c(Tt, t ? yw : bw, Dt),
    i = $S(),
    a = o(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : /* @__PURE__ */ T(vw, {
        children: /* @__PURE__ */ T(y, {
          children: /* @__PURE__ */ T(e, { framerSiteId: n, features: a }),
        }),
      });
}
function wf(e, t) {
  return e.replace(Hv, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Tf({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = h(),
    i = h(),
    a = h(t),
    o = h(null);
  ((a.current = t),
    M(() => {
      e && ((r.current ??= /* @__PURE__ */ new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = p(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? /* @__PURE__ */ new Set(),
      getCurrentRoutePath: () =>
        a.current ? Df(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Df(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && Ef(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return /* @__PURE__ */ T(xw.Provider, { value: s, children: n });
}
async function Ef(e, t) {
  if (!Wn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    Un(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Df(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? wf(r.path, n) : r.path) : ``;
}
function Of(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function kf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((Sw = e.timeZone), (Cw = e.locale));
}
function Af({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  yi(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: ui()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function jf(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = ui();
  yi(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Mf(e, t, n, r) {
  let i = ui();
  t.path &&
    i?.hash !== n.hash &&
    (r?.(),
    yi(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      qi(t, n)
    ));
}
function Nf() {
  return dr() >= 17 ? Dw : Ew;
}
function Pf(e = Bf) {
  let t = (e) => {
    e.persisted && Uf();
  };
  cr() && (N.addEventListener(`pageshow`, t), (Tw = Date.now() - Nf()));
  let n = Ff(),
    r = Vf(e);
  return function () {
    (N.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Ff() {
  let e = N.history.scrollRestoration;
  return (
    (N.history.scrollRestoration = `manual`),
    function () {
      N.history.scrollRestoration = e;
    }
  );
}
function If(e) {
  return V(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Lf() {
  return { x: N.scrollX, y: N.scrollY };
}
function Rf() {
  let e = ui();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (If(t)) return t;
}
function zf(e) {
  let t = ui();
  t && (_i({ ...t, scrollPosition: e }), cr() && (Tw = Date.now()));
}
function Bf(e, t = !1) {
  let n = Rf();
  if (!(n && n.x === e.x && n.y === e.y)) {
    if (cr() && !t) {
      let e = Nf();
      if (Date.now() - Tw < e) return;
    }
    zf(e);
  }
}
function Vf(e) {
  let t = () => {
      e(Lf());
    },
    n = () => {
      e(Lf(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), N.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), N.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in N)) {
    let e = Hf(t);
    return function () {
      (i(), e());
    };
  }
  return (
    N.addEventListener(`scrollend`, t),
    function () {
      (i(), N.removeEventListener(`scrollend`, t));
    }
  );
}
function Hf(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), t !== void 0 && di(ui()) === t && e());
    },
    a = () => {
      let e = di(ui());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = cr() ? Nf() : 100;
      t = N.setTimeout(i, a);
    };
  return (
    N.addEventListener(`scroll`, a),
    function () {
      (N.removeEventListener(`scroll`, a), r());
    }
  );
}
function Uf() {
  let e = Rf();
  return e ? (N.scrollTo(e.x, e.y), !0) : !1;
}
function Wf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Gf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Wf(n, t), !0);
}
function Kf(e, t, n) {
  n !== `preserve-scroll-position` &&
    He.render(
      () => {
        (n === `restore-scroll-position` && Uf()) || Gf(e, t) || N.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function qf(e, t) {
  He.read(() => {
    N.scrollY === 0 &&
      N.scrollX === 0 &&
      He.render(
        () => {
          Uf() || Gf(e, t);
        },
        !1,
        !0
      );
  });
}
function Jf(e) {
  let n = $S().scrollRestoration,
    r = h(void 0),
    i = h(!1),
    a = !(!n || e),
    o = S(
      (e) => {
        ((r.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = S((e, t = !1) => {
      i.current || Bf(e, t);
    }, []),
    c = S(() => {
      a && (i.current = !0);
    }, [a]),
    l = S(() => r.current !== void 0 || i.current, []),
    u = S((e, t) => {
      let n = r.current;
      n &&
        n.routeId === e &&
        n.remountKey === t &&
        ((r.current = void 0), (i.current = !1), Kf(n.hash, n.shouldSmoothScroll, n.behavior));
    }, []);
  return (
    t(() => {
      if (a) return Pf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function Yf({ currentRouteId: e, remountKey: n, scrollRestoration: r }) {
  let { commitNavigationScroll: i, usesCustomScrollRestoration: a } = r;
  return (
    t(() => {
      i(e, n);
    }),
    M(() => {
      a && qf(N.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Xf() {
  let [e, t] = j.useState(0);
  return [e, j.useCallback(() => t((e) => e + 1), [])];
}
function Zf({ children: e, loadSnippetsModule: t }) {
  return /* @__PURE__ */ T(Rw.Provider, { value: t, children: e });
}
function Qf() {
  return j.useContext(Rw);
}
function $f(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function ep(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (H(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (H(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      U(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await tp(a.createContextualFragment(e), r, i));
}
async function tp(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = np(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await tp(r, e, null)));
  }
}
function np(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return rp(r, t, n);
}
function rp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function ip(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = Pw), (n = Fw));
      break;
    case `bodyEnd`:
      ((t = Iw), (n = Lw));
      break;
    case `headStart`:
      ((t = Aw), (n = jw));
      break;
    case `headEnd`:
      ((t = Mw), (n = Nw));
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function ap(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = $f(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function op(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = ip(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = ap(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((sp(t, o), s)) {
      await ep(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = $f(e.id),
      u = `${c}\n${e.code}\n${l}`,
      d = lp(e.id, n, r, i);
    d ? await ep(u, d, `afterend`) : await ep(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function sp(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (cp(n) && n.remove(), (n = e));
  }
}
function cp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function lp(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = ap(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function up() {
  let e = Qf();
  return S(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(Ow)?.dataset[kw] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await op(t, n, r);
      }
    },
    [e]
  );
}
function dp(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function fp({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === ev),
    { path: d } = await Or({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = dp(d, e));
  let f;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o, isMissingInLocale: c } = await Or({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o || c) continue;
    let d = dp(o, e);
    (l.push({ href: d, hrefLang: n.code }), n.id === "default" && (f = d));
  }
  return (
    f && l.push({ href: f, hrefLang: `x-default` }),
    () => {
      (ai(c, N.location.href), oi(l));
    }
  );
}
function pp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = er(),
    l = up();
  M(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Su(e);
        }),
        d)
      : ((e.id === t.id
          ? /* @__PURE__ */ vr()
          : Or({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === ev),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await fp({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Su(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function mp(e) {
  if (!e) return bt;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function hp(e) {
  let t = Ti(e),
    n = h(void 0),
    r = S(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: S(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Nn(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(bt);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = N.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || oy();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function gp({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: a,
  notFoundPage: s,
  collectionUtils: c,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: f,
  initialContentLocaleIdOverride: p,
  locales: m = $_,
  initialCanonicalPathVariables: g,
  preserveQueryParams: _ = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (ca(),
    bi({
      disabled: n,
      routeId: a,
      initialPathVariables: i,
      initialLocaleId: d,
      initialContentLocaleId: p,
      initialCanonicalPathVariables: g,
    }));
  let w = ri(),
    [E, D] = Xf(),
    O = ci(`framer-route-change`),
    k = o(() => (!$S().synchronousNavigationOnDesktop || !hr() ? l : (e) => e()), []),
    A = h(!0),
    j = h(),
    ee = h(0),
    P = h(a),
    F = h(i),
    te = h(),
    ne = h(d),
    re = Jf(n),
    { isNavigationCommitPending: ie, usesCustomScrollRestoration: ae } = re,
    { startNavigation: oe, cancelPendingNavigation: se } = hp(ae),
    ce = er(),
    le = re.scheduleScroll,
    ue = ne.current,
    de = P.current,
    fe = F.current,
    pe = u[de],
    me = pe?.path;
  if (!pe) throw Error(`Router cannot find route for ${de}`);
  let I = o(() => m.find(({ id: e }) => e === ev), [m]),
    L = o(() => m.find(({ id: e }) => (ue ? e === ue : e === "default")) ?? null, [ue, m]),
    {
      contentLocale: he,
      currentCanonicalPathVariables: ge,
      pageExistsInCurrentLocale: _e,
      setRouteContentState: ve,
    } = vp({
      activeLocale: L,
      currentRoute: pe,
      initialCanonicalPathVariables: g,
      initialContentLocaleIdOverride: p,
      locales: m,
      routes: u,
    }),
    R = L?.textDirection ?? `ltr`,
    ye = x ? R : `ltr`;
  t(() => {
    x && document.documentElement.setAttribute(`dir`, R);
  }, [R, x]);
  let be = L?.code;
  t(() => {
    be && document.documentElement.setAttribute(`lang`, be);
  }, [be]);
  let xe = Ci(),
    Se = o(
      () => ({
        activeLocale: L,
        contentLocale: he,
        locales: m,
        setLocale: async (e) => {
          let t = ++ee.current,
            r = O({ localized: !0 });
          if ((await Bv({ priority: `user-blocking`, continueAfter: `paint` }), t !== ee.current)) {
            r.ignore?.();
            return;
          }
          let i;
          z(e) ? (i = e) : V(e) && (i = e.id);
          let a = m.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = P.current,
            s = u[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = Wi(b);
          try {
            let e = await xe({
              currentLocale: L,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: I,
              pathVariables: F.current,
              preserveQueryParams: _,
              sitePrefix: c,
            });
            if (!e || t !== ee.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await jr({
                activeLocale: a,
                defaultLocale: I,
                collectionUtilsCache: ce,
                locales: m,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (t !== ee.current) {
              r.ignore?.();
              return;
            }
            ((A.current = !1),
              (ne.current = a.id),
              (j.current = i),
              (F.current = e.pathVariables),
              ve(l, u));
            let d = s.path && e.pathVariables ? wf(s.path, e.pathVariables) : s.path;
            (le({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              oe(
                () => {
                  w(o, o, () => k(D));
                },
                r,
                n
                  ? void 0
                  : i
                    ? () => {
                        Af({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [L, I, he, n, D, m, _, ve, u, le, oe, w, O, k, xe, ce, b]
    ),
    Ce = S(
      (e, t, n, r, i, a, o, s, c, l, d) => {
        A.current = !1;
        let f = P.current,
          p = u[e],
          m = Mn(p, n),
          h = p?.path && i ? wf(p.path, i) : p?.path;
        ((P.current = e),
          (ne.current = t),
          (F.current = i),
          (te.current = void 0),
          ve(a, o),
          (j.current = r),
          le({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: l ?? !1,
            behavior: s
              ? ae
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s
            ? (se(), k(D))
            : oe(
                (t) => {
                  w(f, e, () => k(D), t);
                },
                c,
                d,
                !0
              ));
      },
      [D, ve, u, ae, le, oe, w, k, se]
    );
  (xi(re, P, Ce),
    M(() => {
      if (n) return;
      let e = () => {
        let e = ui(),
          t = N.location.hash === `` ? void 0 : N.location.hash.slice(1);
        (e && Mn(u[e.routeId], e.hash) === t) ||
          vi({
            ...(e ||
              (pi() ?? { routeId: P.current, pathVariables: F.current, localeId: ne.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (N.addEventListener(`hashchange`, e), () => N.removeEventListener(`hashchange`, e));
    }, [n, u]));
  let we = S(
      async (e, t, r, i, a) => {
        let o = u[e],
          s = ln(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = mp(a);
        if (
          (Bv({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await Bv({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = /* @__PURE__ */ new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Hv)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Mn(o, t),
          p = F.current,
          h = ne.current;
        if (
          te.current === void 0 &&
          Of({ routeId: P.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = ie();
          if (a) {
            let t = o?.path && r ? wf(o.path, r) : o?.path;
            le({
              routeId: e,
              remountKey: `${h}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else se();
          (l.ignore?.(), !a && ae && Kf(f, i, `scroll-to-hash-or-top`));
          let s = u[e];
          (!n &&
            s &&
            Mf(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: t,
                localeId: h,
                preserveQueryParams: _,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !ae && Kf(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let g = u[P.current],
          v =
            Wi(b) +
            qi(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: h,
              localeSlug: m.find(({ id: e }) => e === h)?.slug,
              preserveQueryParams: _,
              relative: !1,
              siteCanonicalURL: b,
            }),
          y = {};
        te.current = y;
        let { contentLocaleId: x, canonicalPathVariables: S } = await jr({
          activeLocale: L,
          defaultLocale: I,
          collectionUtilsCache: ce,
          locales: m,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        te.current === y &&
          Ce(
            e,
            h,
            t,
            v,
            r,
            x,
            S,
            !1,
            l,
            i,
            n
              ? void 0
              : () => {
                  (d(),
                    jf(e, o, {
                      historyPath: v,
                      currentRoutePath: g?.path,
                      hash: t,
                      pathVariables: r,
                      contentLocaleId: x,
                      canonicalPathVariables: S,
                      localeId: h,
                    }));
                }
          );
      },
      [se, u, m, Ce, n, _, b, O, ae, ie, le, ce, I, L]
    ),
    Te = wn(u),
    Ee = j.current,
    De = ww(pe, de, Ee, fe, L, f),
    Oe = A.current;
  pp({
    activeLocale: L,
    contentLocale: he,
    currentPathVariables: fe,
    currentRoute: pe,
    currentRouteId: de,
    isInitialNavigation: Oe,
    locales: m,
    siteCanonicalURL: b,
  });
  let ke = o(
      () => ({
        navigate: we,
        getRoute: Te,
        currentRouteId: de,
        currentPathVariables: fe,
        currentCanonicalPathVariables: ge,
        routes: u,
        collectionUtils: c,
        preserveQueryParams: _,
        pageviewEventData: De,
        siteCanonicalURL: b,
        isInitialNavigation: Oe,
      }),
      [we, Te, de, fe, ge, u, c, _, b, De, Oe]
    ),
    Ae = me && fe ? wf(me, fe) : me,
    je = `${ue}${Ae}`,
    Me = Oo(() => ({ ...e, display: `contents` }));
  return /* @__PURE__ */ T(Tn, {
    api: ke,
    children: /* @__PURE__ */ T(Gv.Provider, {
      value: Se,
      children: /* @__PURE__ */ T(Kv.Provider, {
        value: ye,
        children: /* @__PURE__ */ T(yC, {
          children: /* @__PURE__ */ T(Ii, {
            routerRenderKey: E,
            currentRouteId: de,
            isNavigationCommitPending: re.isNavigationCommitPending,
            children: /* @__PURE__ */ C(Tf, {
              currentRoutePath: Ae,
              routerAPI: ke,
              children: [
                y && /* @__PURE__ */ T(Cf, { EditorBar: y, fast: !0 }),
                /* @__PURE__ */ T(nC, {
                  children: /* @__PURE__ */ C(bu, {
                    children: [
                      /* @__PURE__ */ T(Fy.Start, {}),
                      /* @__PURE__ */ T(Yf, {
                        currentRouteId: de,
                        remountKey: je,
                        scrollRestoration: re,
                      }),
                      /* @__PURE__ */ T(Ly, {
                        notFoundPage: s,
                        defaultPageStyle: e,
                        routerRenderKey: E,
                        children: /* @__PURE__ */ T(_p, {
                          LayoutTemplate: v,
                          webPageId: pe?.abTestingVariantId ?? de,
                          style: e,
                          children: (t) =>
                            /* @__PURE__ */ T(
                              r,
                              { children: _e ? pa(pe.page, t ? Me : e) : s && pa(s, e) },
                              je
                            ),
                        }),
                      }),
                      y && /* @__PURE__ */ T(Cf, { EditorBar: y }),
                      /* @__PURE__ */ T(ia, {}),
                      /* @__PURE__ */ T(Fy.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function _p({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? /* @__PURE__ */ T(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function vp({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let s = h(n),
    c = h(r),
    l = c.current,
    u = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = o(() => {
      if (!e) return null;
      let n;
      return (
        (n = u
          ? (l ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && Cy.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, l, u, a]),
    f = S((e, t) => {
      ((c.current = e), (s.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: s.current,
    pageExistsInCurrentLocale: u,
    setRouteContentState: f,
  };
}
function yp(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function bp(e) {
  return typeof e == `object` && !!e;
}
function xp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!bp(r)) return;
    r = r[e];
  }
  return r;
}
function Sp(e) {
  return `${e.credentials}:${e.url}`;
}
function Cp(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function wp(e, t) {
  switch (e) {
    case `string`:
      return z(t) || B(t);
    case `color`:
      return z(t);
    case `boolean`:
      return Ye(t);
    case `number`:
      return B(t) || Cp(t);
    case `link`:
    case `image`:
      return z(t) && ed(t, !1);
    default:
      return !1;
  }
}
function Tp(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = xp(e.data, t.resultKeyPath);
  if (Qe(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!wp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Ep(e) {
  return Math.max(e * 1e3, Bw);
}
function Dp(e, t) {
  if (W.current() === W.canvas) return !1;
  let n = Ep(t);
  return Date.now() >= e + n;
}
function Op({ client: e, children: t }) {
  return /* @__PURE__ */ T(Kw.Provider, { value: e, children: t });
}
function kp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: h,
    locales: g,
    preserveQueryParams: _,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: D,
  } = e;
  if (
    (j.useEffect(() => {
      n || fb.start();
    }, []),
    n)
  )
    return /* @__PURE__ */ T(Oi, {
      value: r ?? `preview`,
      children: /* @__PURE__ */ T(Ce, {
        reducedMotion: p ? `always` : f ? `user` : `never`,
        skipAnimations: p,
        children: /* @__PURE__ */ T($n, {
          collectionUtils: l,
          children: /* @__PURE__ */ T(Op, {
            client: u,
            children: /* @__PURE__ */ T(Gw, {
              children: /* @__PURE__ */ T(hw.Provider, {
                value: a,
                children: /* @__PURE__ */ T(Zf, {
                  loadSnippetsModule: w,
                  children: /* @__PURE__ */ T(gp, {
                    initialRoute: i,
                    initialPathVariables: o,
                    initialCanonicalPathVariables: s,
                    initialLocaleId: h,
                    initialCollectionItemId: E,
                    initialContentLocaleIdOverride: D,
                    routes: c,
                    collectionUtils: l,
                    notFoundPage: d,
                    locales: g,
                    defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                    preserveQueryParams: _,
                    EditorBar: v,
                    disableHistory: b,
                    LayoutTemplate: x,
                    siteCanonicalURL: S,
                    adaptLayoutToTextDirection: C,
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  {
    let e = m ? sS : j.Fragment;
    return /* @__PURE__ */ T(e, {
      children: /* @__PURE__ */ T(Dn, {
        routes: c,
        children: /* @__PURE__ */ T(Jx, {
          children: j.isValidElement(t) ? t : j.createElement(t, { key: i }),
        }),
      }),
    });
  }
}
function Ap(e, t) {
  let n = En(),
    { activeLocale: r } = Mr(),
    i = Hd();
  return Ai(() => {
    let t = [],
      a = (e) => {
        if (e)
          return z(e) || Xu(e)
            ? af(e, n, void 0, void 0, r, o)
            : af(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function jp(e) {
  return {
    trace(...t) {
      return Db.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Db.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Db.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Db.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Db.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Db.getLogger(e) !== void 0;
    },
  };
}
function Mp() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Np() {
  var e =
      typeof SuppressedError == `function`
        ? SuppressedError
        : function (e, t) {
            var n = Error();
            return ((n.name = `SuppressedError`), (n.error = e), (n.suppressed = t), n);
          },
    t = {},
    n = [];
  function r(e, t) {
    if (t != null) {
      if (Object(t) !== t)
        throw TypeError(
          `using declarations can only be used with objects, functions, null, or undefined.`
        );
      if (e) var r = t[Symbol.asyncDispose || Symbol.for(`Symbol.asyncDispose`)];
      if (r === void 0 && ((r = t[Symbol.dispose || Symbol.for(`Symbol.dispose`)]), e)) var i = r;
      if (typeof r != `function`) throw TypeError(`Object is not disposable.`);
      (i &&
        (r = function () {
          try {
            i.call(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        n.push({ v: t, d: r, a: e }));
    } else e && n.push({ d: t, a: e });
    return t;
  }
  return {
    e: t,
    u: r.bind(null, !1),
    a: r.bind(null, !0),
    d: function () {
      var r,
        i = this.e,
        a = 0;
      function o() {
        for (; (r = n.pop());)
          try {
            if (!r.a && a === 1) return ((a = 0), n.push(r), Promise.resolve().then(o));
            if (r.d) {
              var e = r.d.call(r.v);
              if (r.a) return ((a |= 2), Promise.resolve(e).then(o, s));
            } else a |= 1;
          } catch (e) {
            return s(e);
          }
        if (a === 1) return i === t ? Promise.resolve() : Promise.reject(i);
        if (i !== t) throw i;
      }
      function s(n) {
        return ((i = i === t ? n : new e(n, i)), o());
      }
      return o();
    },
  };
}
function Pp() {
  return Jw.priority;
}
function Fp(e) {
  let t = Jw;
  return (
    (Jw = e),
    {
      [Mp()]() {
        Jw = t;
      },
    }
  );
}
function Ip(e = Jw.priority, t = Jw.canYield) {
  if (!t || e === void 0) return;
  let n = yr(e);
  return Bv({ batch: !0, priority: n });
}
function Lp(e) {
  try {
    var t = Np();
    t.u(Fp({ priority: Jw.priority, canYield: !1 }));
    let n = e.next();
    return (H(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    t.e = e;
  } finally {
    t.d();
  }
}
async function Rp(e, t, n = Jw.priority, r = Jw.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0)
    try {
      var o = Np();
      (o.u(Fp(i)), (a = e.next()));
    } catch (e) {
      o.e = e;
    } finally {
      o.d();
    }
  for (; !a.done;)
    try {
      var s = Np();
      let t = await a.value,
        o = Ip(n, r);
      (o && (await o), s.u(Fp(i)), (a = e.next(t)));
    } catch (e) {
      s.e = e;
    } finally {
      s.d();
    }
  return a.value;
}
function zp(e, t = Jw.priority, n = Jw.canYield) {
  try {
    var r = Np();
    r.u(Fp({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Rp(e, i, t, n);
  } catch (e) {
    r.e = e;
  } finally {
    r.d();
  }
}
function* Bp(e, t = Jw.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (nt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Rp(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Vp(e, t = Jw.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Ip(t);
    r && (yield r);
    let o = e[a];
    if (nt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Rp(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Hp(e) {
  return Gp(e) || Jp(e);
}
function Up(e) {
  return Xe(e) && e.every(V);
}
function Wp(e) {
  return V(e) && Je(e.read) && Je(e.preload);
}
function Gp(e) {
  return Up(e) || Wp(e);
}
function Kp(e) {
  return V(e) && V(e.schema);
}
function qp(e) {
  return V(e) && V(e.collectionByLocaleId);
}
function Jp(e) {
  return Kp(e) || qp(e);
}
function Yp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = wm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Xp(e, t) {
  return e?.type === `array`
    ? { type: `array`, value: e.value.map((e) => Yw.cast(e, t.definition)) }
    : null;
}
function Zp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Qp(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function $p(e) {
  return Qp(e)?.value ?? !1;
}
function em(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function tm(e) {
  return e?.type === `color` ? e : null;
}
function nm(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function rm(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return tt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function im(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function am(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function om(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function sm(e) {
  return e?.type === `file` ? e : null;
}
function cm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function lm(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function um(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function dm(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function fm(e) {
  return dm(e)?.value ?? null;
}
function pm(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = wm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function mm(e, t) {
  if (e?.type === `object`) {
    let n = {},
      r = Object.entries(t.definitions);
    for (let [t, i] of r) {
      let r = e.value[t] ?? null;
      n[t] = Yw.cast(r, i);
    }
    return { type: `object`, value: n };
  }
  return null;
}
function hm(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function gm(e) {
  return e?.type === `responsiveimage` ? e : null;
}
function _m(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function vm(e) {
  return e?.type === `richtext` ? e : null;
}
function ym(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function bm(e) {
  return e?.type === `vectorsetitem` ? e : null;
}
function xm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Sm(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Cm(e) {
  return Sm(e)?.value ?? null;
}
function wm(e, t, n) {
  if ($e(e) || $e(t)) return (H(e === t), 0);
  switch (e.type) {
    case `array`:
      return (H(e.type === t.type), Yp(e, t, n));
    case `boolean`:
      return (H(e.type === t.type), Zp(e, t));
    case `color`:
      return (H(e.type === t.type), em(e, t));
    case `date`:
      return (H(e.type === t.type), nm(e, t));
    case `enum`:
      return (H(e.type === t.type), im(e, t));
    case `file`:
      return (H(e.type === t.type), om(e, t));
    case `link`:
      return (H(e.type === t.type), cm(e, t));
    case `number`:
      return (H(e.type === t.type), um(e, t));
    case `object`:
      return (H(e.type === t.type), pm(e, t, n));
    case `responsiveimage`:
      return (H(e.type === t.type), hm(e, t));
    case `richtext`:
      return (H(e.type === t.type), _m(e, t));
    case `vectorsetitem`:
      return (H(e.type === t.type), ym(e, t));
    case `string`:
      return (H(e.type === t.type), xm(e, t, n));
    default:
      U(e);
  }
}
async function Tm(e, t) {
  return Wp(e) ? (await e.preload(t), e.read(t)) : e;
}
function Em(e) {
  return e.includes(eT);
}
function Dm(e) {
  if (!Jp(e) || !e.id) return;
  let t = Qw.get(e.id);
  if (!t) return (Qw.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Om(e) {
  let t = Dm(e);
  if (t) return t;
  let n = $w.get(e);
  if (n) return n;
  let r = `${eT}${Math.random().toString(16).slice(2)}`;
  return ($w.set(e, r), r);
}
function km(e, t) {
  if (Gp(e)) {
    let n = Om(e) + (t?.id ?? `default`),
      r = tT.get(n);
    if (r) return r;
    let i = new Zw(e, t);
    return (tT.set(n, i), i);
  }
  if (Kp(e)) return e;
  if (qp(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  U(e, `Unsupported collection type`);
}
function Am(e) {
  return e;
}
function jm(e) {
  return Je(e.getHash);
}
function Y(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    V(r) && jm(r) ? (n += r.getHash()) : (n += JSON.stringify(r) ?? ``);
  }
  return Am(`${n})`);
}
function Mm(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Nm(e) {
  if (e !== void 0) return yr(e);
}
function Pm(e, t) {
  return { collectionId: Om(e), pointer: t };
}
function Fm(e) {
  return V(e) && z(e.collectionId);
}
function Im(e, t) {
  return { collectionId: Om(e), pointer: t };
}
function Lm(e) {
  return V(e) && z(e.collectionId);
}
function Rm(e, t) {
  let n = /* @__PURE__ */ new Map();
  function r(e) {
    if (V(e)) {
      if (e.type === `Collection` && Hp(e.data)) {
        let r = km(e.data, t),
          i = Om(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    } else if (Xe(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function zm(e) {
  return e;
}
function Bm(e) {
  return e;
}
function Vm(e) {
  return e;
}
function Hm() {
  return 25;
}
function Um() {
  return 12500;
}
function Wm(e) {
  return Array(e).fill({ type: `All` });
}
function Gm(e) {
  return e;
}
function Km(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new cE(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function qm(e) {
  let t = /* @__PURE__ */ new Set();
  if (!e) return t;
  Km(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Km(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Jm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Jm(n, t);
      return;
    case `object`:
      for (let n in e.value) Jm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Ym(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Xm(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Zm(e) {
  return `${e.functionName}(${e.arguments.map((e) => nh(e)).join(`, `)})`;
}
function Qm(e) {
  let t = `CASE`;
  e.value && (t += ` ${nh(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${nh(n.when)} THEN ${nh(n.then)}`;
  return (e.else && (t += ` ELSE ${nh(e.else)}`), (t += ` END`), t);
}
function $m(e) {
  let t = nh(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function eh(e) {
  let t = nh(e.left),
    n = nh(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function th(e) {
  return `CAST(${nh(e.value)} as ${e.dataType})`;
}
function nh(e) {
  switch (e.type) {
    case `Identifier`:
      return Ym(e);
    case `LiteralValue`:
      return Xm(e);
    case `FunctionCall`:
      return Zm(e);
    case `Case`:
      return Qm(e);
    case `UnaryOperation`:
      return $m(e);
    case `BinaryOperation`:
      return eh(e);
    case `TypeCast`:
      return th(e);
    case `Select`:
      return `${sh(e)}`;
    default:
      U(e);
  }
}
function rh(e) {
  return Kp(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function ih(e) {
  let t = `${ah(e.left)} LEFT JOIN ${ah(e.right)}`;
  return (e.constraint && (t += ` ON ${nh(e.constraint)}`), t);
}
function ah(e) {
  switch (e.type) {
    case `Collection`:
      return rh(e);
    case `LeftJoin`:
      return ih(e);
    default:
      U(e);
  }
}
function oh(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `\n${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `\n\t${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function sh(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = nh(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${ah(e.from)}`),
    e.where && (t += ` WHERE ${nh(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${nh(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${nh(e.limit)}`),
    e.offset && (t += ` OFFSET ${nh(e.offset)}`),
    oh(t)
  );
}
function ch(e) {
  return V(e) && e.type === `Collection`;
}
function lh(e, t) {
  return ch(t) && Hp(t.data) ? Om(t.data) : t;
}
function uh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, lh) + n;
}
function dh(e) {
  let { activeLocale: t } = Mr();
  return TE.get(e, t).use();
}
function fh(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Qe(e) || V(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function ph(e) {
  let t = h(e);
  return (
    s(() => {
      t.current = e;
    }, [e]),
    ji((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function mh(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function hh() {
  return /* @__PURE__ */ new Set();
}
function gh(e) {
  let t = Oo(hh),
    n = Oo(hh);
  return (
    Oc(() => () => mh(n, t)),
    M(() => () => mh(n, t), []),
    M(() => {
      mh(n, t);
    }, [e]),
    h({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function _h(e, t, n) {
  return j.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function vh(e) {
  for (let [t, n] of Object.entries(e)) if (Ot.matchMedia(n).matches) return t;
}
function yh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && Ot.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function bh(e, t, n = !0) {
  let r = x(Gx),
    i = Mo(),
    a = st(),
    o = ur() && (!i || a),
    s = h(o ? (vh(t) ?? e) : e),
    c = h(n && r ? e : s.current),
    u = Ls(),
    d = ve(),
    f = S(
      (e) => {
        if (e !== s.current || e !== c.current) {
          function t() {
            ((s.current = c.current = e),
              l(() => {
                u();
              }));
          }
          i
            ? t()
            : d(() => {
                t();
              });
        }
      },
      [d, u, i]
    );
  return (
    fy(() => {
      i && f(a ? (vh(t) ?? e) : e);
    }, [e, a, i, t, f]),
    fy(() => {
      n && r === !0 && f(s.current);
    }, []),
    M(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = Ot.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (xh(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => Sh(e, t));
    }, [a, t, f, o]),
    [s.current, c.current]
  );
}
function xh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Sh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Ch(e) {
  setTimeout(e, 1);
}
function wh(e) {
  let t = /* @__PURE__ */ new Set(),
    n = yh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Th(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Ct ? Ot.requestIdleCallback : Ch)(() => {
    document.querySelector(EE)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Th(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Eh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Th(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Eh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Dh(e) {
  return V(e) && DE in e && e.page !== void 0;
}
function Oh(e, t) {
  return `${e}-${t}`;
}
function kh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (H(r !== void 0, `nextVariant should be defined`), r);
}
function Ah(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function jh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Mh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Nh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Ph() {
  let e = h(),
    t = h(),
    n = S(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    M(
      () => () => {
        n();
      },
      [n]
    ),
    S(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Fh() {
  let e = h(),
    t = h(!1),
    n = h(),
    r = x(Ox);
  return (
    M(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    S(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = xc(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function Ih(e) {
  let t = Ph(),
    n = Fh();
  return S(
    (r, i = !1) => {
      St ? r() : t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Lh() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (AE = () => {
        (e(), (t = void 0));
      }));
  });
}
function Rh(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (kE = Lh()));
}
function zh() {
  (performance.mark(`click-received-listener`), (kE = void 0), AE?.(), (AE = void 0));
}
function Bh(e = !1) {
  M(() => {
    e &&
      (document.addEventListener(`pointerup`, Rh, !0),
      document.__proto__.addEventListener.call(document, `click`, zh, !0));
  }, [e]);
}
function Vh({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let u = Ls(),
    d = Qu(),
    f = Oo(() => new Set(i));
  Bh($S().yieldOnTap);
  let p = Ih(c),
    m = h({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Nh(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = S((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = Nh(e, a, f),
        s = jh(i?.[o], t, n, !1, r);
      return [o, s ? Oh(o, s) : void 0];
    }, []),
    _ = S(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = $S().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          kE &&
          (performance.mark(`wait-for-tap-start`),
          await kE,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Bv({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: h,
          isPressedHasUpdated: _,
        } = m.current;
        d || h || f || _ ? l(u) : p(() => l(u), i);
      },
      [g, u, p]
    ),
    v = S(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && $S().disableHoverOnMobile && !Bu() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_, d]
    ),
    y = S(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === OE ? kh(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = S(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => l(u), !0));
    }, [u, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = g(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: C,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = m.current,
    A = _h(m.current.baseVariant, m.current.gestureVariant, a);
  return o(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? Oh(x, `loading`) : C;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Ah(m.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Ol(Mh(x, s), jh(i, E, D, n, O)),
      }
    );
  }, [x, C, E, D, k, A, y, w, T, v, b, s]);
}
function Hh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if ($S().disableCustomCode) return e;
  if (!wu()) return Wh(e, r, t, n);
  let a = Uh(e, r, t, n),
    o = !1;
  function s(r, s) {
    let c = Ou();
    if (Iu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? /* @__PURE__ */ T(uy.Provider, {
            value: n,
            children: /* @__PURE__ */ T(Tu, {
              getErrorMessage: Nu.bind(null, t, n),
              fallback: /* @__PURE__ */ T(e, { ...r, ref: s }),
              children: /* @__PURE__ */ T(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Cu(a.error), Cu(Nu(t, n)), Su(a.error), !0)),
          /* @__PURE__ */ T(e, { ...r, ref: s }));
    if (a.status === `success`)
      return /* @__PURE__ */ T(uy.Provider, {
        value: n,
        children: /* @__PURE__ */ T(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return j.forwardRef(s);
}
function Uh(e, t, n, r) {
  try {
    return { status: `success`, Component: Wh(e, t, n, r) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Wh(e, t, n, r) {
  let i = jE.get(t);
  i || ((i = /* @__PURE__ */ new WeakMap()), jE.set(t, i));
  let a = i.get(e);
  a || ((a = /* @__PURE__ */ new Map()), i.set(e, a));
  let o = `${n}:${r}`;
  if (a.has(o)) return a.get(o);
  let s = t(e);
  return (a.set(o, s), s);
}
function Gh(e) {
  let t = [];
  return (
    n.forEach(e, (e) => {
      w(e) && e.type === r ? t.push(...Gh(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function Kh(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function qh(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Kh(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[De(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Jh(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Kh(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[De(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Yh() {
  let e = x(ME);
  return (lg(e, `useTicker must be used within a Ticker component`), e);
}
function Xh() {
  let e = x(NE);
  return (lg(e, `useTickerItem must be used within a TickerItem`), e);
}
function Zh(e, t) {
  return (t?.offsetWidth ?? N.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function Qh(e, t) {
  return e === `y` ? IE : t === `ltr` ? FE : LE;
}
function $h({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i,
  itemIndex: a,
  positionInSet: o,
  cloneIndex: s,
  bounds: c,
  alignItems: l,
  reproject: u = !0,
  size: d = `auto`,
  safeMargin: f,
}) {
  let { start: p, end: m } = c,
    { visibleLength: h, direction: g, inset: _ } = Yh(),
    { sign: v } = Qh(n, g),
    y = I(() => {
      if (!u) return 0;
      let e = t.get();
      if ((!p && !m) || !r) return 0;
      if (e * v + c.end <= -_ - f) return r * v;
      if (f > 0) {
        let t = h - f - _;
        if (e * v + c.start >= t) return -r * v;
      }
      return 0;
    }),
    b = I(() => {
      let e = t.get(),
        n = y.get();
      return (!p && !m) || !r ? 0 : e * v + p + n * v;
    }),
    x =
      s === void 0
        ? {
            "aria-hidden": !1,
            "aria-posinset": o ?? a + 1,
            "aria-setsize": i,
            "data-item-index": a,
          }
        : { "aria-hidden": !0 },
    S = d === `fill`,
    C = l === `stretch` ? `100%` : `fit-content`,
    w = {
      className: s === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: d === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return /* @__PURE__ */ T(NE.Provider, {
    value: { start: p, end: m, offset: b, projection: y, itemIndex: a, cloneIndex: s, props: w },
    children: d === `manual` ? e : /* @__PURE__ */ T(eg, { children: e }),
  });
}
function eg({ children: e }) {
  let { props: t } = Xh();
  return /* @__PURE__ */ T(Ue.li, { ...t, children: e });
}
function tg(e, t, n, r, i) {
  let a = h(!1);
  M(() => {
    let o = e.current;
    if (!o) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      f = t === `x` ? `offsetLeft` : `offsetTop`,
      p = t === `x` ? `ArrowLeft` : `ArrowUp`,
      m = t === `x` ? `ArrowRight` : `ArrowDown`,
      h = [],
      g = 0,
      _ = () => {
        let e = h[g];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[f]),
          (o[d] = 0),
          He.render(() => {
            o[d] = 0;
          }));
      },
      v = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), x());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(rg);
          t.sort(ng);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          }
          {
            let n = t.indexOf(h[g]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
        } else (e.key === p ? g-- : e.key === m && g++, (g = De(0, h.length, g)), _());
      },
      y = () => {
        a.current ||
          ((h = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(rg)),
          (g = 0),
          h.length &&
            (i(!0),
            (a.current = !0),
            _(),
            N.addEventListener(`focus`, b, u),
            N.addEventListener(`blur`, b, u),
            o.addEventListener(`keydown`, v, l)));
      },
      b = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !o.contains(e.target)) && x();
      },
      x = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          N.removeEventListener(`focus`, b),
          N.removeEventListener(`blur`, b),
          o.removeEventListener(`keydown`, v));
      },
      S = (e) => {
        let { target: t } = e;
        rg(t) && (a.current || y());
      },
      C = () => {
        s || ((s = !0), o.addEventListener(`focus`, S, u), N.addEventListener(`pointermove`, w, l));
      },
      w = () => {
        s &&
          ((s = !1),
          o.removeEventListener(`focus`, S, !0),
          N.removeEventListener(`pointermove`, w, l));
      };
    return (
      N.addEventListener(`keydown`, C, l),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        l
      ),
      () => {
        (c.abort(), x());
      }
    );
  }, []);
}
function ng(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function rg(e) {
  return e instanceof HTMLElement;
}
function ig(e) {
  return e.end - e.start;
}
function ag(e) {
  return e[e.length - 1].end - e[0].start;
}
function og(e, t, n) {
  let r = ag(t),
    i = Math.max(...t.map(ig)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function sg(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: i = `x`,
    align: a = `center`,
    offset: s,
    isStatic: c = !1,
    itemSize: l = `auto`,
    overflow: u = !1,
    loop: d = !0,
    children: f,
    as: m = `div`,
    snap: g,
    safeMargin: _ = 0,
    fade: v = 0,
    fadeTransition: y,
    pageTransition: b,
    ...x
  },
  C
) {
  let w = h(null),
    E = L(C, w),
    D = h(null),
    [O, k] = p({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      itemBounds: [],
      itemSetPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    A = RE[a] || a,
    { sign: j } = Qh(i, O.direction);
  if (c) {
    let t = _e(0),
      n = o(() => ({ ...O, gap: r, clampOffset: re, offset: t, renderedOffset: t }), [O, r, t]);
    return /* @__PURE__ */ T(ME.Provider, {
      value: n,
      children: /* @__PURE__ */ T(cg, {
        containerProps: x,
        containerRef: E,
        gap: r,
        axis: i,
        alignItems: A,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: l,
        state: O,
        overflow: u,
        safeMargin: _,
        isStatic: !0,
        as: m,
        fade: v,
        sign: j,
        children: f,
      }),
    });
  }
  let [M, ee] = p(!1),
    P = _e(1),
    F = _e(0);
  s ??= F;
  let te = I(() =>
      O.direction === `rtl` && i === `x`
        ? De(O.totalItemLength + r + O.inset, O.inset, s.get())
        : De(-O.totalItemLength - r - O.inset, -O.inset, s.get())
    ),
    ne = _e(0),
    ie = M ? ne : d ? te : s,
    se = Ke(w, { margin: `100px` }),
    le = ae(),
    de = se && le,
    fe = ce(),
    me = () => {
      if (!w.current || !D.current) return;
      let e = N.getComputedStyle(w.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: a } = Qh(i, e),
        o = i === `x` ? `paddingLeft` : `paddingTop`,
        s = i === `x` ? `paddingRight` : `paddingBottom`,
        c = w.current,
        l = D.current.querySelectorAll(`.ticker-item`);
      if (!l.length) return;
      let f = !1,
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l.length; e++) {
        let n = l[e],
          r = Number(n.dataset.itemIndex),
          i = t(n, c);
        (p.push(i), (m[r] = i), (h[r] = p.length));
        let a = O.itemBounds[r];
        (!a || i.start !== a.start || i.end !== a.end) && (f = !0);
      }
      let g = Math.min(c[n], N[r]),
        v = u ? N[r] : g;
      _ > 0 && (v += _ * 2);
      let y = ag(p),
        b = N.getComputedStyle(c),
        x = parseInt(b[o] ?? 0),
        S = parseInt(b[s] ?? 0),
        C = u ? a(l[0]) : x,
        T = d === !1 ? Math.max(0, y - g + x + S) : null;
      (v !== O.visibleLength ||
        y !== O.totalItemLength ||
        C !== O.inset ||
        O.itemPositions.length !== p.length ||
        f) &&
        k({
          direction: e,
          visibleLength: v,
          itemPositions: p,
          itemBounds: m,
          itemSetPositions: h,
          totalItemLength: y,
          inset: C,
          containerLength: g,
          maxInset: T,
          isMeasured: !0,
        });
    };
  oe(() => {
    if (!de || !w.current) return;
    me();
    let e = u ? pe(me) : void 0,
      t = pe(w.current, me);
    return () => {
      (e?.(), t());
    };
  }, [e, de, u]);
  let he = O.totalItemLength > 0;
  ue(
    he && de && s === F && !fe
      ? (e, n) => {
          let r = (n / 1e3) * (t * j * P.get());
          s.set(s.get() - r);
        }
      : re
  );
  let ge = o(
      () => (!he || !O.visibleLength ? 0 : og(O.visibleLength, O.itemPositions, r)),
      [he, O, r]
    ),
    ve = O.totalItemLength === 0 ? 0 : (O.totalItemLength + r) * (ge + 1),
    R = [];
  if (d)
    for (let t = 0; t < ge; t++) {
      let n = [];
      e.forEach((a, o) => {
        let s = O.itemBounds[o],
          c = (O.totalItemLength + r) * (t + 1),
          u = s ? { start: s.start + c, end: s.end + c } : BE;
        n.push(
          /* @__PURE__ */ T(
            $h,
            {
              offset: ie,
              axis: i,
              listSize: ve,
              itemIndex: o,
              cloneIndex: o,
              bounds: u,
              alignItems: A,
              size: l,
              safeMargin: _,
              numItems: O.isMeasured ? O.itemPositions.length : e.length,
              children: a,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let a = `ticker-group-${t}`;
      R.push(/* @__PURE__ */ T(je, { id: a, children: n }, a));
    }
  tg(w, i, ne, s, ee);
  let ye = S((e) => (O.maxInset === null ? e : Se(-O.maxInset, 0, e)), [O.maxInset]),
    be = o(
      () => ({ ...O, gap: r, clampOffset: ye, offset: s, renderedOffset: ie }),
      [O, r, ye, s, ie]
    );
  return /* @__PURE__ */ T(ME.Provider, {
    value: be,
    children: /* @__PURE__ */ T(cg, {
      containerProps: x,
      containerRef: E,
      listRef: D,
      gap: r,
      axis: i,
      alignItems: A,
      isMeasured: he,
      isInView: de,
      offset: s,
      renderedOffset: ie,
      items: e,
      itemSize: l,
      clonedItems: R,
      clampOffset: ye,
      snap: g,
      safeMargin: _,
      onPointerEnter: () => {
        Fe(P, n);
      },
      onPointerLeave: () => {
        Fe(P, 1);
      },
      totalListSize: ve,
      state: O,
      overflow: u,
      loop: d,
      as: m,
      fade: v,
      sign: j,
      fadeTransition: y,
      pageTransition: b,
      children: f,
    }),
  });
}
function cg({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: s,
  isMeasured: c,
  isInView: l,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: _,
  onPointerEnter: v,
  onPointerLeave: y,
  totalListSize: b,
  itemSize: x,
  overflow: S,
  state: w,
  safeMargin: E,
  snap: D,
  loop: O,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = UE,
  pageTransition: N,
}) {
  let ee = o(() => Ue.create(k), [k]),
    P = {},
    { maxInset: F } = w;
  F !== null &&
    (P =
      a === `x`
        ? j > 0
          ? { left: F * -1, right: 0 }
          : { right: F, left: 0 }
        : { top: F * -1, bottom: 0 });
  let {
      drag: te,
      _dragX: ne,
      _dragY: re,
      dragMomentum: ie = !1,
      onDragEnd: ae,
      onPointerDown: oe,
      ...se
    } = t,
    ce = ae,
    le = oe,
    ue = a === `x` ? ne : re,
    de = h(null),
    fe = () => {
      de.current &&= (de.current.stop(), null);
    };
  !ce &&
    te &&
    ue &&
    ((le = () => {
      (ue.jump(f.get()), fe());
    }),
    (ce = (e, { velocity: t }) => {
      let n = f.get();
      (fe(),
        He.postRender(() => {
          let e = n + t[a] * (D ? 0.3 : 0.8);
          if (D) {
            if (t[a] < 0) e = -qh(-n, w.itemPositions, i, -e);
            else if (t[a] > 0) e = -Jh(-n, w.itemPositions, i, -e, w.containerLength);
            else {
              let t = -qh(-n, w.itemPositions, i, -n),
                r = -Jh(-n, w.itemPositions, i, -n, w.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          }
          let r = O
            ? {}
            : j > 0
              ? { max: 0, min: P[a === `x` ? `left` : `top`] }
              : { min: 0, max: P.right };
          de.current = Fe(
            ue,
            m(e * j) * j,
            D
              ? N
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let pe = _e(+!O),
    me = _e(0),
    L = Qh(a, w.direction),
    he = typeof A == `number` ? `px` : ``,
    ge = I(
      () =>
        `linear-gradient(to ${L.direction}, rgba(0,0,0,${pe.get()}) 0px, black ${A}${he}, black calc(100% - ${A}${he}), rgba(0,0,0,${me.get()}) 100%)`
    ),
    ve = A ? { maskImage: ge, WebkitMaskImage: ge } : {},
    ye = h({ start: !0, end: !1 });
  return (
    R(_, `change`, (e) => {
      if (F === null) return;
      let t = F * -1;
      ((e *= j),
        e < 0
          ? ye.current.start && (Fe(pe, 0, M), (ye.current.start = !1))
          : ye.current.start || (Fe(pe, 1, M), (ye.current.start = !0)),
        e > t
          ? ye.current.end && (Fe(me, 0, M), (ye.current.end = !1))
          : ye.current.end || (Fe(me, 1, M), (ye.current.end = !0)));
    }),
    /* @__PURE__ */ C(g, {
      children: [
        /* @__PURE__ */ T(ee, {
          ...se,
          ref: n,
          style: {
            overflowX: !S && a === `x` ? `clip` : void 0,
            overflowY: !S && a === `y` ? `clip` : void 0,
            ...VE,
            ...t.style,
            ...ve,
          },
          onPointerEnter: v,
          onPointerLeave: y,
          drag: te,
          _dragX: ne,
          _dragY: re,
          dragConstraints: P,
          dragMomentum: ie,
          onPointerDown: le,
          onDragEnd: ce,
          children: /* @__PURE__ */ C(Ue.ul, {
            ref: r,
            style: {
              ...HE,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? _ : 0,
              y: a === `y` ? _ : 0,
              opacity: c || u ? 1 : 0,
              alignItems: s,
              willChange: c && l ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                /* @__PURE__ */ T(
                  $h,
                  {
                    axis: a,
                    offset: _,
                    listSize: b,
                    itemIndex: t,
                    bounds: w.itemBounds[t] ?? BE,
                    alignItems: s,
                    size: x,
                    reproject: O,
                    safeMargin: E,
                    positionInSet: w.itemSetPositions[t],
                    numItems: w.isMeasured ? w.itemPositions.length : d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function lg(e, t) {
  if (!e) throw Error(t);
}
function ug(e) {
  return -Math.sign(e);
}
function dg(
  e,
  {
    axis: t = `y`,
    onWheel: n,
    onSwipe: r,
    swipeThreshold: i = 100,
    swipeTimeout: a = 150,
    jitterThreshold: o = 2,
    lineHeight: s = 16,
  }
) {
  let c = `IDLE`,
    l = 0,
    u = 0,
    d = 0,
    f = !1,
    p = 0,
    m = !1,
    h = null,
    g = (e) => {
      let g = t === `x` && !e.shiftKey ? e.deltaX : e.deltaY,
        _ = t === `x` && !e.shiftKey ? e.deltaY : e.deltaX;
      if (Math.abs(g) < Math.abs(_)) return;
      (n || r) && e.preventDefault();
      let v = -(e.deltaMode === WheelEvent.DOM_DELTA_LINE ? g * s : g);
      if (v === 0) return;
      (h && clearTimeout(h),
        (h = setTimeout(() => {
          ((c = `IDLE`), (m = !1), (l = 0));
        }, a)),
        c === `IDLE` && (c = `WHEELING`));
      let y = ug(v);
      function b(e, t) {
        ((c = `SWIPING`),
          (m = !0),
          (u = ug(t)),
          (f = !1),
          (p = 0),
          (d = Math.abs(e)),
          r?.(u),
          (l = (Math.abs(t) % i) * u));
      }
      switch (c) {
        case `WHEELING`: {
          let e = l + v;
          r && !m && Math.abs(e) >= i ? b(v, e) : ((l = e), n?.(v));
          break;
        }
        case `SWIPING`: {
          let e = Math.abs(v),
            t = y !== u,
            a = !1;
          if (d > 0) {
            let t = e - d;
            (t < 0 && (f = !0), f && t > o ? (p++, p > 2 && (a = !0)) : (p = 0));
          }
          if (t || a) {
            m = !1;
            let e = v;
            r && !m && Math.abs(e) >= i ? b(v, e) : ((c = `WHEELING`), (l = e), n?.(v));
            break;
          }
          d = e;
          break;
        }
      }
    };
  return (
    e.addEventListener(`wheel`, g, { passive: !1 }),
    () => {
      (h && clearTimeout(h), e.removeEventListener(`wheel`, g));
    }
  );
}
function fg() {
  let e = x(WE);
  return (Sg(!!e, `useCarousel must be used within a Carousel component`), e);
}
function pg(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function mg(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = pg(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[De(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c >= e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function hg(e, t, n, r, i) {
  return mg(e, n, r, e - t, i);
}
function gg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = pg(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[De(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function _g(e, t, n, r) {
  return gg(e, n, r, e + t);
}
function vg(e, t, n, r = !0) {
  let i = { insets: [], visibleLength: t };
  if (e.length === 0) return i;
  let a = [e[0].start];
  for (let r = 1; r < e.length; r++) {
    let { start: i, end: o } = e[r];
    if (a[a.length - 1] + t < o) {
      if (n !== null) {
        if (i <= n) a.push(i);
        else {
          a.push(n);
          break;
        }
      } else a.push(i);
    }
  }
  if (r && n !== null && a.length > 1) {
    let r = a[a.length - 1],
      i = [];
    for (let e = 0; e < a.length - 1; e++) i.push(a[e + 1] - a[e]);
    let o = i.reduce((e, t) => e + t, 0) / i.length;
    if (n - r < o * 0.5) {
      let r = vg(e, t * 0.75, n, !1);
      if (r.insets.length === a.length) return r;
    }
  }
  return { insets: a, visibleLength: t };
}
function yg(e, t, n, r) {
  let i = -e,
    a = r === null ? Math.floor(i / n) : 0,
    o = a * n;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e] + o,
      s = De(0, t.length, e - 1),
      c = (e === 0 ? a - 1 : a) * n,
      l = t[s] + c,
      u = (r - l) / 2,
      d = De(0, t.length, e + 1),
      f = (e === t.length - 1 ? a + 1 : a) * n,
      p = t[d] + f;
    if (i < p - (p - r) / 2 && i >= l + u) return e;
  }
  return 0;
}
function bg({
  children: e,
  offset: t,
  targetOffset: n,
  tugOffset: r,
  loop: i = !0,
  transition: a,
  tickerRef: o,
  axis: s = `x`,
  snap: c = `page`,
  page: l,
  wheelSwipeThreshold: u,
}) {
  let d = h(!0),
    {
      clampOffset: f,
      totalItemLength: m,
      itemPositions: g,
      containerLength: _,
      gap: v,
      maxInset: y,
      direction: b,
      isMeasured: x,
    } = Yh(),
    S = m + v,
    C = vg(g, _, y),
    w = C.insets.length,
    { sign: E } = Qh(s, b),
    D = h(void 0),
    O = h(!1);
  M(() => {
    if (l === void 0 || !x || w === 0) return;
    let e = Se(0, w - 1, l),
      r = -C.insets[e] * E;
    O.current
      ? D.current !== l && ((D.current = l), n.jump(r), t.jump(r))
      : ((O.current = !0), (D.current = l), n.jump(r), t.jump(r));
  }, [x, w, l, E, n, t, C.insets]);
  let k = (e) => ({
      current: yg(e * E, C.insets, S, y),
      isNextActive: i ? !0 : e * -E < y,
      isPrevActive: i ? !0 : e * -E > 0,
    }),
    [A, j] = p(() => k(n.get()));
  M(() => {
    N();
  }, [_, m]);
  let N = () => {
    let e = k(n.get());
    (e.current !== A.current ||
      e.isNextActive !== A.isNextActive ||
      e.isPrevActive !== A.isPrevActive) &&
      j(e);
  };
  R(n, `change`, (e) => {
    (t.set(e), N());
  });
  let ee = h(null),
    P = () => {
      ee.current &&= (ee.current.stop(), null);
    };
  M(() => {
    t.attach((e, n) => {
      (P(),
        d.current
          ? n(e)
          : (ee.current = new ze({
              keyframes: [t.get(), e],
              velocity: Se(-2e3, 2e3, t.getVelocity()),
              ...a,
              duration: a.duration === void 0 ? void 0 : a.duration * 1e3,
              delay: a.delay === void 0 ? void 0 : a.delay * 1e3,
              repeatDelay: a.repeatDelay === void 0 ? void 0 : a.repeatDelay * 1e3,
              onUpdate: n,
              onComplete: () => {
                ee.current = null;
              },
            })),
        (d.current = !0));
    }, P);
  }, [a]);
  let F = (e) => {
      let t = f(e);
      (n.stop(), (d.current = !1), n.set(t * E));
    },
    te = (e, t) => {
      let i = -e(-n.get() * E, C.visibleLength, g, v, _),
        a = f(i);
      a * E === n.get() ? Fe(r, 0, { velocity: t * E * 400, ...KE }) : F(a);
    },
    ne = () => te(_g, -1),
    re = () => te(hg, 1),
    ie = (e) => {
      let t = (i ? Math.floor((-n.get() * E) / S) : 0) * -S;
      F(-C.insets[e] + t);
    },
    ae = h({ nextPage: ne, prevPage: re, clampOffset: f });
  return (
    M(() => {
      ae.current = { nextPage: ne, prevPage: re, clampOffset: f };
    }, [ne, re, f]),
    M(() => {
      let e = o.current;
      if (e)
        return dg(e, {
          axis: s,
          swipeThreshold: u,
          onSwipe: c
            ? (e) => {
                let { nextPage: t, prevPage: n } = ae.current;
                e * E === 1 ? t() : n();
              }
            : void 0,
          onWheel: (e) => {
            let { clampOffset: r } = ae.current,
              i = t.get() + e,
              a = E > 0 ? r(i) : Se(0, y, i);
            n.jump(y ? a : i);
          },
        });
    }, [s, c, t, E]),
    /* @__PURE__ */ T(WE.Provider, {
      value: {
        currentPage: A.current,
        isNextActive: A.isNextActive,
        isPrevActive: A.isPrevActive,
        totalPages: w,
        nextPage: ne,
        prevPage: re,
        gotoPage: ie,
        offset: t,
        targetOffset: n,
      },
      children: e,
    })
  );
}
function xg({
  children: e,
  loop: t = !0,
  transition: n = GE,
  axis: r = `x`,
  snap: i = `page`,
  page: a,
  wheelSwipeThreshold: o,
  ...s
}) {
  let c = h(null),
    l = _e(0),
    u = _e(0),
    d = _e(0),
    f = I(() => d.get() + u.get());
  return /* @__PURE__ */ T(zE, {
    role: `region`,
    "aria-roledescription": `carousel`,
    offset: f,
    loop: t,
    ref: c,
    axis: r,
    drag: r,
    _dragX: r === `x` && l,
    _dragY: r === `y` && l,
    snap: i,
    pageTransition: n,
    ...s,
    children: /* @__PURE__ */ T(bg, {
      tickerRef: c,
      loop: t,
      offset: u,
      tugOffset: d,
      targetOffset: l,
      transition: n,
      snap: i,
      axis: r,
      page: a,
      wheelSwipeThreshold: o,
      children: e,
    }),
  });
}
function Sg(e, t) {
  if (!e) throw Error(t);
}
function Cg({ intervalSeconds: e }) {
  let { nextPage: t, currentPage: n, isNextActive: r } = fg();
  return (
    M(() => {
      if (!r) return;
      let n = new ze({ keyframes: [0, 1], duration: e * 1e3, ease: `linear`, onComplete: t });
      return () => n.stop();
    }, [e, n, r, t]),
    null
  );
}
function wg(e, t) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0],
    a = t === `x` ? i : r;
  if (!a) return;
  let o = parseInt(a);
  return Number.isNaN(o) ? void 0 : o;
}
function Tg(e, t) {
  if (q(e)) return e;
  if (!z(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Eg(parseInt(i));
  if (t === `y` && r) return Eg(parseInt(r));
}
function Eg(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function Dg(e) {
  let {
    carouselEffectEnabled: t,
    carouselEffectAlign: n,
    carouselEffectAutoPlay: r,
    carouselEffectControls: i,
    carouselEffectGap: a,
    carouselEffectInterval: o,
    carouselEffectLoop: s,
    carouselEffectOverflow: c,
    carouselEffectSnap: l,
    carouselEffectStackDirection: u,
    carouselEffectTransition: d,
    carouselEffectXOverflow: f,
    carouselEffectYOverflow: p,
    tickerEffectEnabled: m,
    tickerEffectAlign: h,
    tickerEffectDirectionModifier: g,
    tickerEffectDraggable: _,
    tickerEffectGap: v,
    tickerEffectHoverModifier: y,
    tickerEffectIsDataRepeater: b,
    tickerEffectOverflow: x,
    tickerEffectPosition: S,
    tickerEffectStackDirection: C,
    tickerEffectVelocity: w,
    tickerEffectXOverflow: T,
    tickerEffectYOverflow: E,
    ...D
  } = e;
  return {
    carouselEffectProps: {
      carouselEffectAlign: n,
      carouselEffectAutoPlay: r,
      carouselEffectControls: i,
      carouselEffectGap: a,
      carouselEffectInterval: o,
      carouselEffectLoop: s,
      carouselEffectOverflow: c,
      carouselEffectSnap: l,
      carouselEffectStackDirection: u,
      carouselEffectTransition: d,
      carouselEffectXOverflow: f,
      carouselEffectYOverflow: p,
    },
    tickerEffectProps: {
      tickerEffectAlign: h,
      tickerEffectDirectionModifier: g,
      tickerEffectDraggable: _,
      tickerEffectGap: v,
      tickerEffectHoverModifier: y,
      tickerEffectIsDataRepeater: b,
      tickerEffectOverflow: x,
      tickerEffectPosition: S,
      tickerEffectStackDirection: C,
      tickerEffectVelocity: w,
      tickerEffectXOverflow: T,
      tickerEffectYOverflow: E,
    },
    domProps: D,
  };
}
function Og(e, t, n) {
  let r = [],
    i = $l(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!B(e)) return nD;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return B(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : nD;
}
function kg(e, t, n, r = iD) {
  let [i, a] = j.useState(e),
    [o, s] = j.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      j.useCallback(
        (e) => {
          ta(e) ||
            (t && a(r(e)),
            n &&
              j.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Ag(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function jg() {
  return /* @__PURE__ */ T(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: /* @__PURE__ */ T(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function Mg(e) {
  return e === void 0 ? `__undefined__` : B(e) ? String(e) : e === `` ? `__empty__` : e;
}
function Ng(e, t) {
  switch (e) {
    case `left`:
      return !1;
    case `right`:
      return !0;
    case `end`:
      return t === `ltr`;
    case void 0:
    case `start`:
    case `center`:
    case `justify`:
      return t === `rtl`;
    default:
      return U(e);
  }
}
function Pg(e, t) {
  M(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (N.addEventListener(`keyup`, n), () => N.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Fg(e, t, n, r) {
  let i = N.innerHeight - r,
    a = Math.min(N.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Ig(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new N.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Lg() {
  return (
    document.getElementById(`template-overlay`) ??
    document.getElementById(`overlay`) ??
    document.body
  );
}
function Rg(e, t) {
  return B(e) ? e : (t ?? 0);
}
function zg(e) {
  return Rg(e?.paddingTop, e?.padding) + Rg(e?.paddingBottom, e?.padding);
}
function Bg(e) {
  return Rg(e?.paddingLeft, e?.padding) + Rg(e?.paddingRight, e?.padding);
}
function Vg(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Bg(e)}px)`,
      srcSet: Ro(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Hg(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in SD)) continue;
    let n = SD[t],
      r = e[t];
    if (B(n) && B(r) && n !== r) return !0;
  }
  return !1;
}
function Ug(e) {
  let t = ee.get(e.current);
  if (!t) return !1;
  if (Hg(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Hg(e.latestValues)) return !0;
  return !1;
}
function Wg(e) {
  return E(function ({ lightbox: t, lightboxClassName: n, onClick: i, ...a }, s) {
    let c = x(Le),
      u = x(ZE),
      d = !!u,
      f = h(null),
      m = s ?? f,
      _ = h(),
      v = o(() => Vg(t, a.background), [t, a.background]),
      [y, w] = p(!1),
      [E, D] = p(),
      O = S(() => {
        t &&
          (y
            ? l(() => {
                w(!0);
              })
            : He.read(() => {
                if (!m.current) return;
                let e = getComputedStyle(m.current),
                  n =
                    m.current.getAttribute(`data-border`) === `true`
                      ? getComputedStyle(m.current, `::after`)
                      : void 0,
                  r = m.current.offsetWidth ?? 1,
                  i = m.current.offsetHeight ?? 1,
                  a = Ug(m) || d ? { duration: 0 } : t.transition;
                l(() => {
                  (D({
                    borderRadius: e.borderRadius,
                    aspectRatio: r / (i || 1),
                    borderTop: n?.borderTopWidth,
                    borderRight: n?.borderRightWidth,
                    borderBottom: n?.borderBottomWidth,
                    borderLeft: n?.borderLeftWidth,
                    borderStyle: n?.borderStyle,
                    borderColor: n?.borderColor,
                    transition: a,
                    imageRendering: e.imageRendering,
                    filter: e.filter,
                  }),
                    w(!0),
                    u?.stop());
                });
              }));
      }, [t, y, m, u?.stop, d]),
      k = E?.aspectRatio ?? 1,
      j = ph(() => {
        if (!t || !v?.src) return;
        let e = _.current?.[v.src];
        if (e) return e;
        let n = Fg(k, t.maxWidth, Bg(t), zg(t)),
          r = Ig(v, { width: n, height: n * k });
        return ((_.current = { [v.src]: r }), r);
      }),
      N = S(
        async (e) => {
          (i?.(e), !y && t && v && (await j(), O()));
        },
        [i, O, y, v, t, j]
      ),
      ee = S((e) => {
        (e?.stopPropagation(),
          l(() => {
            w(!1);
          }));
      }, []);
    (Pg(y, ee),
      M(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            j();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = m.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, j),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, j));
          }
        );
      }, [j, m, t]));
    let P = A(),
      F = E?.transition ?? a.transition ?? c.transition,
      te = E?.borderRadius,
      ne = E?.imageRendering,
      re = E?.filter,
      ie = E?.borderTop,
      ae = E?.borderRight,
      oe = E?.borderBottom,
      se = E?.borderLeft,
      ce = E?.borderStyle,
      le = E?.borderColor,
      ue = !!(ie || ae || oe || se || ce || le),
      de = ue
        ? {
            "--border-top-width": ie,
            "--border-right-width": ae,
            "--border-bottom-width": oe,
            "--border-left-width": se,
            "--border-style": ce,
            "--border-color": le,
          }
        : void 0,
      fe = { [xC]: a.id },
      pe = Rg(t?.paddingTop, t?.padding),
      me = Rg(t?.paddingBottom, t?.padding),
      I = Rg(t?.paddingLeft, t?.padding),
      L = Rg(t?.paddingRight, t?.padding),
      he = E?.borderRadius ? { ...a.style, borderRadius: E.borderRadius } : a.style,
      ge = y ? (a.layoutDependency ? `${a.layoutDependency}-open` : `open`) : a.layoutDependency,
      _e = d && y ? void 0 : (a.layoutId ?? (t ? P : void 0));
    return /* @__PURE__ */ C(g, {
      children: [
        /* @__PURE__ */ T(e, {
          ...a,
          style: he,
          onClick: N,
          layoutId: _e,
          ref: m,
          layoutDependency: ge,
          transition: F,
        }),
        /* @__PURE__ */ T(Ie, {
          onExitComplete: () => {
            l(() => {
              (D(void 0), u?.start());
            });
          },
          children:
            y &&
            t &&
            v &&
            /* @__PURE__ */ T(
              r,
              {
                children: b(
                  /* @__PURE__ */ C(g, {
                    children: [
                      /* @__PURE__ */ T(Ue.div, {
                        ...fe,
                        className: n,
                        onClick: ee,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: F,
                        initial: CD,
                        animate: wD,
                        exit: CD,
                      }),
                      /* @__PURE__ */ T(Ue.div, {
                        ...fe,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${pe}px ${L}px ${me}px ${I}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: /* @__PURE__ */ T(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: /* @__PURE__ */ T(Ue.div, {
                            layoutId: _e,
                            transition: F,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": ue,
                            style: {
                              aspectRatio: k,
                              borderRadius: te,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ne,
                              filter: re,
                              ...de,
                            },
                            children: /* @__PURE__ */ T(qo, {
                              image: v,
                              alt: v.alt,
                              draggable: a.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Lg()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Gg(e) {
  let t = {};
  for (let n in e) (te(n) || Sb(n)) && (t[n] = e[n]);
  return t;
}
function Kg(e, t) {
  return DD && !t
    ? Document.parseHTMLUnsafe(e)
    : ((ED ??= new DOMParser()), ED.parseFromString(e, t ?? `text/html`));
}
function qg(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Jg(e, t, n, r) {
  return e.replace(OD, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = rd(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Dh(f) || !Dh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Mn(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = ad(u);
    if (!_ || z(_)) return e;
    Sd(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(FC, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Bi(m, v)), i + o + `"${qg(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Yg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Xg(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Zg(e, t, n) {
  let r = h([]);
  Yg(r.current, e) ||
    ((r.current = e),
    Db.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      t && n.current && W.current() === W.canvas && e > 0 && Us(n.current);
    }));
}
function Qg() {
  return { current: null };
}
async function $g(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        ((n = e), e === null ? t.abort() : r(e));
      },
      configurable: !0,
    }),
    i
  );
}
function e_(e) {
  return e in MD;
}
function t_(e, t) {
  let n = {};
  for (let r in e) {
    if (!e_(r)) continue;
    let i = e[r],
      a = MD[r];
    Qe(i) || Qe(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function n_(e, t = `character`, n, i, a) {
  if (i) {
    let t = Qg();
    return (n.add(t), /* @__PURE__ */ T(`span`, { ref: t, style: a, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        i = t.length - 1;
      return t.map((e, t) => {
        let o = t === i,
          s = e.length <= 12;
        return /* @__PURE__ */ C(
          r,
          {
            children: [
              /* @__PURE__ */ T(`span`, {
                style: { whiteSpace: s ? `nowrap` : `unset` },
                children: e.match(ND)?.map((e, t) => {
                  let r = Qg();
                  return (
                    n.add(r),
                    /* @__PURE__ */ T(`span`, { ref: r, style: a, children: e }, e + t)
                  );
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        i = t.length - 1;
      return t.map((e, t) => {
        let o = t === i,
          s = Qg();
        return (
          n.add(s),
          /* @__PURE__ */ C(
            r,
            {
              children: [
                /* @__PURE__ */ T(`span`, { ref: s, style: a, children: e }),
                o ? null : ` `,
              ],
            },
            e + t + o
          )
        );
      });
    }
    default:
      return e;
  }
}
function r_(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      U(t);
  }
}
function i_(e) {
  let t = [];
  return (
    B(e.x) && t.push(`translateX(${e.x}px)`),
    B(e.y) && t.push(`translateY(${e.y}px)`),
    B(e.scale) && t.push(`scale(${e.scale})`),
    B(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    B(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    B(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    B(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    B(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function a_(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : i_(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : i_(n.effect),
              };
      }
    default:
      U(i);
  }
}
function o_(e, t, n) {
  let r = Oo(() => /* @__PURE__ */ new Set()),
    i = jo(),
    a = n || !i,
    s = ce(),
    c = h({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  c.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  M(() => {
    if (!a || n) return;
    c.current.hasMounted = !0;
    function e() {
      let { effect: e } = c.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && c.current.hasAnimatedOnce) ||
        (e?.type === `appear` && c.current.isAnimating)
      )
        return;
      Object.assign(c.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            o = { current: void 0 };
          return (
            c_(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              s,
              () => {
                Object.assign(c.current, { isAnimating: !1 });
              },
              o
            ),
            () => o.current?.()
          );
        }
        default:
          U(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Ge(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? Ge(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        U(l);
    }
  }, [a, r, n, t, u, d, l]);
  let f = !!e,
    p = e ? r_(e) : void 0;
  return o(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = c.current,
          o = a_(a, n || s_(e, t, i), c.current.effect, s);
        return {
          text: (e) => n_(e, p, r, s, o),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Qg();
            return (r.add(t), { ref: t, style: { ...e, ...o } });
          },
        };
      },
      play: () => {
        let { effect: e } = c.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            c_(p, e.effect, r, t, n, !1, s);
            break;
          }
          default:
            U(t);
        }
      },
    }),
    [a, f, r, n, p]
  );
}
function s_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function c_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = t_(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await l_(n, u);
      if (
        e === null ||
        (Fe(e, l, { ...r, restDelta: 0.001, delay: de(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Fe(e, n, { ...r, restDelta: 0.001, delay: de(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await $g(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (He.read(() => {
          ((e = u_(n)),
            e.length !== 0 &&
              He.update(() => {
                let t = e.map((e, t) =>
                  Fe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Fe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      U(e);
  }
}
async function l_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await $g(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function u_(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function d_(e) {
  return e.type === r;
}
function f_(e) {
  return e.type === `br`;
}
function p_(e, t, r, a, o = {}, s, c = d_(e) ? -1 : 0) {
  let l = n.toArray(e.props.children);
  Qe(r) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!w(e) || !f_(e)) && (u = !1), w(e))) return p_(e, t, r, a, o, s, c + 1);
    let n = Qe(r) ? e : r;
    return z(n) && s ? s.text(n) : n;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (z(e.type) || We(e.type)) {
    let r = ie(e.type) || e.type,
      i = d || r,
      p = z(i) ? t?.[i] : void 0;
    ((f.className = Ol(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m = r === `h1` || r === `h2` || r === `h3` || r === `h4` || r === `h5` || r === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = m_(l, o);
      f.id = e;
      let t = Ol(`framer-text`, h),
        n = /* @__PURE__ */ T(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: a }), (l = [n]));
    }
    i === `ol` &&
      (f.style = {
        ...f.style,
        [Gt]: g_(f.start ?? 1, n.count(f.children), f.style?.[`--list-style-type`] ?? ``),
      });
  }
  return i(e, f, ...l);
}
function m_(e, t) {
  let n = Di(e.map(h_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function h_(e) {
  return z(e) || B(e)
    ? e.toString()
    : w(e)
      ? h_(e.props.children)
      : Array.isArray(e)
        ? e.map(h_).join(``)
        : ``;
}
function g_(e, t, n) {
  return pt(Number(e) || 1, t, n);
}
function __(e, t) {
  return (M(() => GD.subscribeToTemplate(e), [e]), GD.template(e, t));
}
function v_(e) {
  try {
    let t = Kg(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function y_(e, t) {
  x_(e, b_(t));
}
function b_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function x_(e, t) {
  (S_(e, t),
    Array.from(e.children).forEach((e) => {
      x_(e, t);
    }));
}
function S_(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function C_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (t?.[1] !== void 0 && t?.[2] !== void 0 && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (KD[t[2]] || 1));
}
function w_(e) {
  let t = C_(e.getAttribute(`width`)),
    n = C_(e.getAttribute(`height`));
  if (typeof t == `number` && typeof n == `number` && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function T_({ height: e, width: t, isCarouselControl: n, children: r }) {
  let i = E_();
  if (n) return null;
  if (!i || !r) return r;
  let { props: a } = i;
  return /* @__PURE__ */ T(Ue.li, {
    ...a,
    style: { ...a.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: r,
  });
}
function E_() {
  try {
    return Xh();
  } catch {
    return;
  }
}
function D_(e) {
  return e > qD ? `lazy` : void 0;
}
function O_(e, t, n) {
  let r = j_(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function k_(e) {
  return e ? (e.fonts ?? ma()) : ma();
}
function A_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : j_(e);
}
function j_(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    M_(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(N_) })
      : t.fonts.push(N_(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function M_(e) {
  return YD in e;
}
function N_(e) {
  let t = P_(e) || F_(e) ? e : I_(e);
  return F_(t) ? t : L_(t);
}
function P_(e) {
  return `source` in e;
}
function F_(e) {
  return `cssFamilyName` in e;
}
function I_(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function L_(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${JD}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function R_(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function z_(e, t) {
  let n = Bv({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function B_(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = Bv({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function V_(e) {
  return e.loader;
}
function H_(e, t, n) {
  let r = V_(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  X,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Z,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  Q,
  lT,
  uT,
  dT,
  fT,
  pT,
  $,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD;
function XD() {
  return (XD = e(() => {
    (a(),
      we(),
      an(),
      f(),
      D(),
      m(),
      (U_ = /* @__PURE__ */ new Map()),
      (W_ = /* @__PURE__ */ new Map()),
      (G_ = /* @__PURE__ */ new Set()),
      (K_ = `:`),
      (q_ = xt ? void 0 : /* @__PURE__ */ new Set()),
      (J_ = `preload`),
      (Y_ = Object.keys),
      (X_ = `equals`),
      (Z_ = /* @__PURE__ */ j.createContext({})),
      (Q_ = /* @__PURE__ */ j.createContext({})),
      ($_ = []),
      (ev = `default`),
      (tv = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (nv = class e {
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = tv.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && sn(t, e));
        }
        then(e, t) {
          return this.promiseState === tv.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === tv.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== tv.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && q_ !== void 0 && q_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = tv.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = tv.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && U_.has(this.cacheHash) ? U_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!it(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === tv.Fulfilled) return this.value;
          throw this.promiseState === tv.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (rv = 2 ** 32 - 1),
      (iv = rv - 1),
      (av = typeof Uint8Array.fromBase64 == `function`),
      (ov = typeof process == `object` && process.versions?.node !== void 0),
      (sv = av ? Ln : ov ? Rn : zn),
      (cv = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, `byteLength`).get),
      (lv =
        typeof SharedArrayBuffer > `u`
          ? void 0
          : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, `byteLength`).get),
      (uv = /* @__PURE__ */ Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          try {
            cv.call(t);
          } catch (e) {
            if (!lv) throw e;
            lv.call(t);
          }
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[iv] = void 0), delete t[iv], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => /* @__PURE__ */ new Set(),
        createMap: () => /* @__PURE__ */ new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (dv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (fv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (mv = class {
        payload = Gn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        getPayload() {
          return this.isEmpty ? void 0 : this.payload;
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (hv = xt ? void 0 : new mv()),
      (gv = fv.CollectionUtilsCache),
      (_v = /* @__PURE__ */ new WeakMap()),
      (vv = /* @__PURE__ */ O(void 0)),
      (yv = class {
        collectionId;
        module;
        cacheMap = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new nv(async () => {
              try {
                let t = await e();
                return (H(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ot(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = Xn(n),
            i = Zn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (hv !== void 0) {
              if (it(e)) return e.then((e) => (hv.set(gv, i, e), e));
              hv.set(gv, i, e);
            }
            return e;
          }
          if (Jn(gv, i)) {
            let e = Yn(gv, i);
            return (this.cacheMap.set(i, new nv(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = it(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(ot(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (hv !== void 0 && hv.set(gv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new nv(async () => {
            try {
              let e = it(s) ? await s : s;
              return (hv !== void 0 && hv.set(gv, i, e), e);
            } catch (e) {
              console.error(ot(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (bv = /Mac/u),
      (xv = /iPhone|iPod|iPad/iu),
      (Sv = /MacIntel/iu),
      (Cv = /Edg\//u),
      (wv = /Chrome/u),
      (Tv = /Google Inc/u),
      (Ev = /Safari/u),
      (Dv = /Apple Computer/u),
      (Ov = /Firefox\/\d+\.\d+$/u),
      (kv = /Version\/([\d.]+)/u),
      (Av = /FramerX/u),
      (jv = /tablet|iPad|Nexus 9/iu),
      (Mv = /mobi/iu),
      (Nv = 1e3 / 60),
      (Pv = 40),
      (Fv = 500),
      (Iv = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Lv = /* @__PURE__ */ Promise.resolve()),
      (Rv = 100),
      (zv = (e) => {
        He.read(e, !1, !0);
      }),
      (Bv = /* @__PURE__ */ Cr(zv)),
      (Vv = `framer_variant`),
      (Hv = /* @__PURE__ */ RegExp(`:([a-z]\\w*)`, `gi`)),
      (Uv = async () => {}),
      (Wv = { contentLocale: null, activeLocale: null, locales: [], setLocale: Uv }),
      (Gv = /* @__PURE__ */ (() => {
        let e = j.createContext(Wv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Kv = /* @__PURE__ */ (() => {
        let e = j.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (qv = !St),
      (Jv = !1),
      (Yv = /* @__PURE__ */ j.createContext({ global: void 0, routes: {} })),
      (Xv = 10),
      (Zv = 1e4),
      (Qv = (e) => `--view-transition-${e}`),
      ($v = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Qv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Qv(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${Qv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (ey = {
        circle: {
          makeKeyframe: (e, t) => `${Qv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Qv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Kr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Qv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: $v,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${Gr(e.x)} ${Gr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Ur(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Qv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Qv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Qv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Qv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Qv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Qv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (ty = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (ny = `view-transition-styles`),
      (ry = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (iy = () => {}),
      (oy = () => {
        let e = document.title;
        e &&
          (document.ariaNotify
            ? document.ariaNotify(e, { priority: `high` })
            : (ay ||
                ((ay = document.createElement(`div`)),
                ay.setAttribute(`aria-live`, `assertive`),
                ay.setAttribute(`aria-atomic`, `true`),
                (ay.style.position = `absolute`),
                (ay.style.transform = `scale(0)`),
                document.body.append(ay)),
              setTimeout(() => {
                ay.textContent = e;
              }, 60)));
      }),
      (cy =
        xt &&
        typeof N.navigation?.back == `function` &&
        !(
          /* @__PURE__ */ (() => {
            if (u === void 0) return !1;
            let e = u.userAgent,
              t = e.indexOf(`Chrome/`),
              n = +e.slice(t + 7, e.indexOf(`.`, t));
            return n > 101 && n < 128;
          })()
        ) &&
        !cr()),
      (ly = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (uy = /* @__PURE__ */ j.createContext(null)),
      (dy = /* @__PURE__ */ (() => {
        let e = O(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (fy = typeof document < `u` ? t : M),
      (py = /* @__PURE__ */ new Set()),
      (my = /* @__PURE__ */ (() => {
        let e = O({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (hy = () => void 0),
      (gy = 46),
      (_y = 47),
      (vy = (e, t) => e.charCodeAt(t)),
      (yy = (e, t) => e.lastIndexOf(t)),
      (by = (e, t, n) => e.slice(t, n)),
      (xy = `/`),
      (Sy = (e) => e === _y),
      (Cy = /* @__PURE__ */ new Set([`/404.html`, `/404`, `/404/`])),
      (wy = `__f_replay`),
      (Ty = `__f_replay_ignore`),
      (Ey = `data-framer-form-hydrated`),
      (Dy = `data-framer-form-pending-submit`),
      (Oy = () => xt),
      (ky =
        /* @__PURE__ */ `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Ay = (e) => {
        e.target?.closest?.(`#main`) &&
          (ea(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (jy = !1),
      (My = class {
        markRenderStart = aa(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = aa(() => {
          (performance.mark(`framer-hydration-render-end`),
            oa(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = aa(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = aa(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = aa(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            oa(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = aa(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = aa(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = aa(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            oa(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = aa(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = aa(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = aa(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = aa(() => {
          (performance.mark(`framer-hydration-effects-end`),
            oa(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = aa(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = aa(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            oa(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = aa(() => {
          (performance.mark(`framer-hydration-first-paint`),
            oa(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            oa(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = aa(() => {
          oa(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = aa(() => {
          oa(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (Py = !1),
      (Fy = { Start: da, End: fa }),
      (Iy = class extends Error {}),
      (Ly = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Iy)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return pa(e, t);
        }
      }),
      (Ry = /* @__PURE__ */ Object.freeze([])),
      (By = /* @__PURE__ */ new Set()),
      (Vy = class {
        observers = /* @__PURE__ */ new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Hy = /* @__PURE__ */ (() => {
        function e(e) {
          return (
            Pa(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Fa(e) ? e : new Gy(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = /* @__PURE__ */ new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Fa(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              t[n] = Fa(r) ? r.get() : r;
            }
            return t;
          }),
          e
        );
      })()),
      (Uy = `onUpdate`),
      (Wy = `finishTransaction`),
      (Gy = class {
        value;
        observers = new Vy();
        constructor(e) {
          this.value = e;
        }
        static interpolationFor(e, t) {
          if (Fa(e)) return Ia(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Fa(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      (function (e) {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Ra(e.x, t.x), y: Ra(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(e) {
          let t = Ba.centroid(e),
            n = /* @__PURE__ */ new Map();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            i && n.set(i, Math.atan2(i.y - t.y, i.x - t.x));
          }
          return e.sort((e, t) => (n.get(e) ?? 0) - (n.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Ba ||= {})),
      (Ky = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (qy = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (qy.hexChars = `0123456789abcdef`),
      (qy.refY = 1),
      (qy.refU = 0.19783000664283),
      (qy.refV = 0.46831999493879),
      (qy.kappa = 903.2962962),
      (qy.epsilon = 0.0088564516),
      (qy.m_r0 = 3.240969941904521),
      (qy.m_r1 = -1.537383177570093),
      (qy.m_r2 = -0.498610760293),
      (qy.m_g0 = -0.96924363628087),
      (qy.m_g1 = 1.87596750150772),
      (qy.m_g2 = 0.041555057407175),
      (qy.m_b0 = 0.055630079696993),
      (qy.m_b1 = -0.20397695888897),
      (qy.m_b2 = 1.056971514242878),
      (Jy = /* @__PURE__ */ new qy()),
      (Yy = /* @__PURE__ */ (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (Xy =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Zy = (e) => {
        let { r: t, g: n, b: r, a: i } = uo(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Qy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        po({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      ($y = (e) => {
        let { r: t, g: n, b: r, a: i } = uo(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (eb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        po({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (tb = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return mo(this);
        }
        rgb() {
          return vo(this);
        }
        hsl() {
          return Xa(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(go(t));
            case `srgb`:
              return new e(_o(go(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            _o({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = X(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = co(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !X.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (nb = /* @__PURE__ */ new Map()),
      (X = /* @__PURE__ */ (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = nb.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (nb.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = yo(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          }
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && ao(e) !== !1),
          (e.isColorObject = (e) =>
            V(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => Ya(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && tb.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...Ga(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = $a(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = $a(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = Ya(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Ky)) if (Ky[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Va(i, [0, 1], [t.r, r.r], a),
                g: Va(i, [0, 1], [t.g, r.g], a),
                b: Va(i, [0, 1], [t.b, r.b], a),
                a: Va(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Va(i, [0, 1], [u, u + f], a),
                s: Va(i, [0, 1], [c.s, l.s], a),
                l: Va(i, [0, 1], [c.l, l.l], a),
                a: Va(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Ka(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => Xa(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !(
              (t.toLowerCase().slice(-5) !== `color` && t !== `fill` && t !== `stroke`) ||
              typeof n != `string` ||
              !e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (rb = (e) => e instanceof Te),
      (ib = /* @__PURE__ */ Oe((e, t) => {
        var n = Object.prototype.hasOwnProperty,
          r = `~`;
        function i() {}
        Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
        function a(e, t, n) {
          ((this.fn = e), (this.context = t), (this.once = n || !1));
        }
        function o(e, t, n, i, o) {
          if (typeof n != `function`) throw TypeError(`The listener must be a function`);
          var s = new a(n, i || e, o),
            c = r ? r + t : t;
          return (
            e._events[c]
              ? e._events[c].fn
                ? (e._events[c] = [e._events[c], s])
                : e._events[c].push(s)
              : ((e._events[c] = s), e._eventsCount++),
            e
          );
        }
        function s(e, t) {
          --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
        }
        function c() {
          ((this._events = new i()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var e = [],
            t,
            i;
          if (this._eventsCount === 0) return e;
          for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
          return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }),
          (c.prototype.listeners = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
            return o;
          }),
          (c.prototype.listenerCount = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            return n ? (n.fn ? 1 : n.length) : 0;
          }),
          (c.prototype.emit = function (e, t, n, i, a, o) {
            var s = r ? r + e : e;
            if (!this._events[s]) return !1;
            var c = this._events[s],
              l = arguments.length,
              u,
              d;
            if (c.fn) {
              switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                case 1:
                  return (c.fn.call(c.context), !0);
                case 2:
                  return (c.fn.call(c.context, t), !0);
                case 3:
                  return (c.fn.call(c.context, t, n), !0);
                case 4:
                  return (c.fn.call(c.context, t, n, i), !0);
                case 5:
                  return (c.fn.call(c.context, t, n, i, a), !0);
                case 6:
                  return (c.fn.call(c.context, t, n, i, a, o), !0);
              }
              for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
              c.fn.apply(c.context, u);
            } else {
              var f = c.length,
                p;
              for (d = 0; d < f; d++)
                switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                  case 1:
                    c[d].fn.call(c[d].context);
                    break;
                  case 2:
                    c[d].fn.call(c[d].context, t);
                    break;
                  case 3:
                    c[d].fn.call(c[d].context, t, n);
                    break;
                  case 4:
                    c[d].fn.call(c[d].context, t, n, i);
                    break;
                  default:
                    if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                    c[d].fn.apply(c[d].context, u);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (c.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (c.prototype.removeListener = function (e, t, n, i) {
            var a = r ? r + e : e;
            if (!this._events[a]) return this;
            if (!t) return (s(this, a), this);
            var o = this._events[a];
            if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
            else {
              for (var c = 0, l = [], u = o.length; c < u; c++)
                (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
              l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                : ((this._events = new i()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          t !== void 0 && (t.exports = c));
      })),
      (ab = ib().EventEmitter),
      (ob = class {
        _emitter = new ab();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (sb = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (cb = Ot.requestAnimationFrame || sb),
      (lb = (e) => cb(e)),
      (ub = 1 / 60),
      (db = class extends ob {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          ub = e;
        }
        static get TimeStep() {
          return ub;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return (this._started || ((this._frame = 0), (this._started = !0), lb(this.tick)), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * ub;
        }
        tick = () => {
          this._started &&
            (lb(this.tick),
            this.emit(`update`, this._frame, ub),
            this.emit(`render`, this._frame, ub),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (fb = /* @__PURE__ */ new db()),
      (pb = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Re({
        borderTopWidth: pb(`y`),
        borderLeftWidth: pb(`x`),
        borderRightWidth: pb(`x`),
        borderBottomWidth: pb(`y`),
      }),
      (mb = /* @__PURE__ */ j.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (hb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (gb = {
        ...hb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (_b = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (vb = { ..._b, fontWeight: 500 }),
      (yb = {
        ..._b,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (bb = (e) => e),
      (xb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Sb = /* #__PURE__ */ No(
        (e) =>
          xb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Cb = (e) => () => {
        Na(e);
      }),
      (wb = () => () => {}),
      (Tb = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Db.useImageSource(e, t, n);
          return o(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (Eb = !1),
      (Db = /* @__PURE__ */ new Proxy(Tb, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? wb()
              : Cb(
                  Eb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Ob = {
        isSelectorLoaded(e) {
          return Db.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return Db.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return Db.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return Db.fontStore.loadMissingFonts(e, t);
        },
      }),
      (kb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Ab = [1, 2, 2.2]),
      (jb = [512, 1024, 2048, 4096]),
      (Mb = { position: `absolute`, ...kb, top: 0, right: 0, bottom: 0, left: 0 }),
      (Nb = `src`),
      (Pb = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Nb in e;
        },
      }),
      (Fb = /* @__PURE__ */ (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = ts(Ba.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Ba(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Ba.distance(e.a, e.b)),
          e
        );
      })()),
      (Z = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Z.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: La(e.x, t),
          y: La(e.y, t),
          width: La(e.width, t),
          height: La(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Z.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Z.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Ba.distance(t, n), height: Ba.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Z.minX)), y: Math.min(...e.map(Z.minY)) },
            n = { x: Math.max(...e.map(Z.maxX)), y: Math.max(...e.map(Z.maxY)) };
          return Z.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Z.minX(e), y: Z.minY(e) },
          { x: Z.minX(e), y: Z.maxY(e) },
          { x: Z.maxX(e), y: Z.minY(e) },
          { x: Z.maxX(e), y: Z.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Z.minX(e) ||
            t.x > Z.maxX(e) ||
            t.y < Z.minY(e) ||
            t.y > Z.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Z.points(t)) if (!Z.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Z.maxX(e) || Z.maxX(t) <= e.x || t.y >= Z.maxY(e) || Z.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Z.maxX(e),
            r = Z.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Z.maxY(e),
            r = Z.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => Z.intersects(t, e)),
        isEqual: (e, t) => Z.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Z.maxX(e) && (n = t.x - Z.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Z.maxY(e) && (r = t.y - Z.maxY(e)),
            Ba.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Z.minX(e), y: Z.minY(e) },
            r = { x: Z.minX(t), y: Z.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Z.minX(e),
            r = Z.minY(e),
            i = Z.maxX(e),
            a = Z.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Z.cornerPoints(e);
          return [Fb(t, n), Fb(n, r), Fb(r, i), Fb(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  U(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              U(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  U(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              U(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Z.center(e),
            r = Fb(t, n),
            i = Z.edges(e);
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (t && Fb.intersection(r, t, !0)) {
              let n = Ib[e];
              return (H(n, () => `Invalid edge name: ${JSON.stringify(Ib)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          H(r, `Rect array is empty`);
          let i = Z.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            H(o);
            let s = Z.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Ib = [`top`, `right`, `bottom`, `left`]),
      (Lb = {
        quickfix: (e) => (
          (ns(e.widthType) || ns(e.heightType)) && (e.aspectRatio = null),
          q(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ns(e.widthType) || q(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ns(e.heightType) || q(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Rb = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Lb.quickfix({
              left: q(t) || Fa(t),
              right: q(n) || Fa(n),
              top: q(r) || Fa(r),
              bottom: q(i) || Fa(i),
              widthType: rs(a),
              heightType: rs(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Hy.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Hy.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Hy.getNumber(t) : null,
              right: d.right ? Hy.getNumber(n) : null,
              top: d.top ? Hy.getNumber(r) : null,
              bottom: d.bottom ? Hy.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Hy.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Hy.getNumber(t?.sizing.height) : null,
            c = ls(e.left, e.right);
          if (o && q(c)) i = o - c;
          else if (n && ns(e.widthType)) i = n.width;
          else if (q(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.widthType);
            }
          let l = ls(e.top, e.bottom);
          if (s && q(l)) a = s - l;
          else if (n && ns(e.heightType)) a = n.height;
          else if (q(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.heightType);
            }
          return cs(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Rb.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Hy.getNumber(l.width) : null,
            d = l ? Hy.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Z.pixelAligned(f) : f;
        },
      }),
      (zb = 200),
      (Bb = 200),
      (Vb = /* @__PURE__ */ j.createContext({ parentSize: 0 })),
      (Hb = (e) => {
        let t = _s(),
          { parentSize: n, children: r } = e,
          i = j.useMemo(() => ({ parentSize: n }), [ys(n), bs(n)]);
        return t === 1
          ? r
            ? /* @__PURE__ */ T(g, { children: r })
            : null
          : /* @__PURE__ */ T(Vb.Provider, { value: i, children: r });
      }),
      (Ub = /* @__PURE__ */ j.createContext(void 0)),
      (Wb = `style[data-framer-css-ssr-minified]`),
      (Gb = /* #__PURE__ */ (() => {
        if (!ur()) return /* @__PURE__ */ new Set();
        let e = document.querySelector(Wb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : /* @__PURE__ */ new Set();
      })()),
      (Kb = `data-framer-css-ssr`),
      (qb = (e, t, n) => (
        Es() &&
          n !== void 0 &&
          !Je(t) &&
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).filter(Boolean),
        j.forwardRef((r, i) => {
          let { sheet: a, cache: o } = j.useContext(Ub) ?? {},
            c = n;
          if (!ur()) {
            Je(t) && (t = t(Ds(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Yb.add(e, c);
          }
          return (
            s(() => {
              (c && Gb.has(c)) ||
                (Je(t)
                  ? t(Ds(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && ct(e, a, o));
            }, []),
            /* @__PURE__ */ T(e, { ...r, ref: i })
          );
        })
      )),
      (Jb = class {
        styles = /* @__PURE__ */ new Set();
        componentIds = /* @__PURE__ */ new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Yb = /* @__PURE__ */ new Jb()),
      (Qb = /* @__PURE__ */ sr()),
      ($b = /* @__PURE__ */ j.createContext(!1)),
      (ex = class {
        sharedResizeObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (tx = ur() ? new ex() : void 0),
      (nx = `0.000001px`),
      (rx = ` translateZ(${nx})`),
      (ix = fr() || cr() || pr()),
      (ax = /* @__PURE__ */ (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Ws(t) : Gs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Cn(this.props, e);
          }
          componentDidUpdate(e) {
            bb(this.props).clip &&
              bb(this.props).radius === 0 &&
              bb(e).radius !== 0 &&
              qs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (ox = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (sx = {
        hueRotate: (e, t) => X.toHslString(X.hueRotate(X(e), t)),
        setAlpha: (e, t) => X.toRgbString(X.alpha(X(e), t)),
        getAlpha: (e) => {
          let t = ao(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => X.toRgbString(X.multiplyAlpha(X(e), t)),
        toHexValue: (e) => X.toHex(X(e)).toUpperCase(),
        toHex: (e) => X.toHexString(X(e)).toUpperCase(),
        toRgb: (e) => X.toRgb(X(e)),
        toRgbString: (e) => X.toRgbString(X(e)),
        toHSV: (e) => X.toHsv(X(e)),
        toHSL: (e) => X.toHsl(X(e)),
        toHslString: (e) => X.toHslString(X(e)),
        toHsvString: (e) => X.toHsvString(X(e)),
        hsvToHSLString: (e) => X.toHslString(X(qa(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => X.toHex(X(qa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => X.toHexString(X(qa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => X.toRgbString(X(qa(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => qa(e.h, e.s, e.v),
        rgbaToString: (e) => X.toRgbString(X(e)),
        rgbToHexValue: (e) => X.toHex(X(e)),
        rgbToHexString: (e) => X.toHexString(X(e)),
        hslToString: (e) => X.toHslString(X(e)),
        hslToRgbString: (e) => X.toRgbString(X(e)),
        toColorPickerSquare: (e) => X.toRgbString(X({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => X(e).isValid !== !1,
        equals: (e, t) =>
          X.isP3String(e) || X.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = X(e)),
              typeof t == `string` && (t = X(t)),
              X.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = X(e);
          return t.a === 1 ? X.toHexString(t) : X.toRgbString(t);
        },
        toFormatString: (e) => (X.isP3String(e) ? e : X.toRgbString(X(e))),
      }),
      (cx = /var\(.+\)/u),
      (lx = /* @__PURE__ */ new Map()),
      (ux = [`stops`]),
      (dx = [`start`, `end`]),
      (fx = [`angle`, `alpha`]),
      (px = {
        isLinearGradient: (e) => V(e) && fx.every((t) => t in e) && (tc(e) || ec(e)),
        hash: (e) => e.angle ^ $s(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Qs(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (mx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (hx = {
        isRadialGradient: (e) => V(e) && mx.every((t) => t in e) && (tc(e) || ec(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ $s(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Qs(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (gx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (_x = /* @__PURE__ */ new Set([...gx, ...gx.map((e) => `${e}Capture`)])),
      (vx = `overflow`),
      (yx = { x: 0, y: 0, width: 200, height: 200 }),
      (bx = /* @__PURE__ */ new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (xx = /* @__PURE__ */ E(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = Ps(e),
          l = fc(s),
          u = Is(e),
          d = sc(e),
          f = h(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": bb(e)[`data-framer-offset-parent-id`],
          };
        !pc(e) && n && (bb(m)[`data-framer-name`] = n);
        let [_, v] = dc(s),
          y = uc(s),
          b = Cs(y),
          S = r && !(v && !b && ds(y)) ? r : void 0;
        (S ? (l.transformTemplate ||= Fs(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, Ms(S, s.style)),
          Hs(e, p));
        let w = Zo(e),
          E = mc(s, y, v, x($b)),
          D = xs(
            /* @__PURE__ */ C(g, {
              children: [
                w
                  ? /* @__PURE__ */ T(qo, {
                      alt: e.alt ?? ``,
                      image: w,
                      containerSize: v ?? void 0,
                      nodeId: e.id && Ns(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                /* @__PURE__ */ T(Yo, { ...a, border: i, layoutId: u }),
              ],
            }),
            E
          ),
          O = Ts(e.as),
          k = ws(w);
        return (
          e.fitImageDimension &&
            k &&
            ((_[e.fitImageDimension] = `auto`), (_.aspectRatio = k.width / k.height)),
          /* @__PURE__ */ C(O, { ...m, ...l, layoutId: u, style: _, ref: p, children: [D, o] })
        );
      })),
      (Sx = /* @__PURE__ */ As(
        /* @__PURE__ */ E(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? /* @__PURE__ */ T(xx, { ...e, ref: t }) : null;
        })
      )),
      (Cx = `__LAYOUT_TREE_ROOT`),
      (wx = /* @__PURE__ */ j.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Tx = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return /* @__PURE__ */ T(wx.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (Ex = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Dx = class {
        sharedIntersectionObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Ox = /* @__PURE__ */ O(/* @__PURE__ */ new Map())),
      (kx = typeof IntersectionObserver > `u` ? bt : Sc),
      (Ax = /* @__PURE__ */ Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (jx = /* @__PURE__ */ j.createContext(null)),
      (Mx = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = /* @__PURE__ */ new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) =>
          e.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return /* @__PURE__ */ T(Ve.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Nx = (e) => {
        let t = j.useContext(wx);
        return /* @__PURE__ */ T(Mx, { ...e, sharedLayoutContext: t });
      }),
      (Px = /* @__PURE__ */ j.createContext(!0)),
      (Fx = /* @__PURE__ */ O({ register: () => {}, deregister: () => {} })),
      (Ix = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Dc(),
          i = S(
            (e) => {
              r.has(e)
                ? console.warn(`NavigationTargetWrapper: already registered`)
                : r.set(e, void 0);
            },
            [r]
          ),
          a = S(
            (e) => {
              (r.get(e)?.(), r.delete(e));
            },
            [r]
          ),
          o = h({ register: i, deregister: a }).current;
        return (
          M(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Je(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          /* @__PURE__ */ T(Fx.Provider, { value: o, children: n })
        );
      }),
      (Lx = /* @__PURE__ */ j.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: g,
        position: _ = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: v,
        index: y,
        areMagicMotionLayersPresent: b,
        id: S,
        isInitial: w,
      }) {
        let E = se(),
          D = x(Pe),
          { persistLayoutIdCache: O } = x(mb),
          k = h({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ac({}, m, a),
          }),
          A = h(null),
          j = D !== null && !D.isPresent;
        (t && k.current.wasCurrent === void 0 && O(),
          M(() => {
            if (e || !E) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              o = (t && !i) || (!j && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = Ac(k.current.origins, m, a),
              l = k.current.wasReset;
            (o || s
              ? (E.stop(), E.start({ zIndex: y, ...c, ...a }), (l = !1))
              : l === !1 && (E.stop(), E.set({ zIndex: y, ...Rx, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, j]));
        let N = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          ee = p ? { type: !1 } : f || d,
          P = { ..._ };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let F = (jc(a) || jc(m)) && (e || t || n) ? 1200 : void 0,
          te = { ...Rx, ...k.current.origins },
          ne = e
            ? {
                initial: { ...te, ...m },
                animate: { ...te, ...a, transition: N },
                exit: { ...te, ...g, transition: d },
              }
            : { animate: E, exit: { ...te, ...g, transition: ee } },
          re = !(j || b === !1),
          ie = !!t && re,
          ae = t && w;
        return /* @__PURE__ */ C(Sx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (t && v) ? y : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: F,
          },
          children: [
            e &&
              /* @__PURE__ */ T(Sx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c,
              }),
            /* @__PURE__ */ T(Sx, {
              ...P,
              ...ne,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: ae || e || (t && v) ? 1 : 0 },
              "data-is-present": re ? void 0 : !1,
              ref: A,
              children: /* @__PURE__ */ T(jx.Provider, {
                value: A,
                children: /* @__PURE__ */ T(Px.Provider, {
                  value: ie,
                  children: /* @__PURE__ */ T(Ix, {
                    isCurrent: ie,
                    isOverlayed: r,
                    children: /* @__PURE__ */ T(Nx, {
                      isLead: t,
                      animatesLayout: !!v,
                      transition: N,
                      isExiting: !re,
                      isOverlayed: r,
                      id: S,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, kc)),
      (Rx = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (zx = class {
        warning = () => {
          Na(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (Bx = /* @__PURE__ */ O(/* @__PURE__ */ new zx())),
      (Vx = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (Hx = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (Ux = /* @__PURE__ */ Y_(Rx)),
      (Wx = /* @__PURE__ */ j.createContext(void 0)),
      (Gx = /* @__PURE__ */ j.createContext(void 0)),
      (Kx = /* @__PURE__ */ (() => {
        class e extends v {
          #e = null;
          state = Hx();
          static defaultProps = { enabled: !0 };
          static contextType = Wx;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !es(t) || !$o(t)) return;
            let n = { ...Vx.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = Fc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!es(t) || !$o(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, Vx.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = Fc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !es(e) || !$o(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, Vx.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, Vx.Fade, t);
          }
          push(e, t) {
            this.#i(e, Mc(t), t);
          }
          modal(e, t) {
            this.#i(e, Vx.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Nc(t), t);
          }
          flip(e, t) {
            this.#i(e, Pc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, Vx.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Xc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              H(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              H(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                /* @__PURE__ */ T(
                  Lx,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: ol(o, e),
                    transitionProps: u,
                    animation: al(o, e),
                    backfaceVisible: rl(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: /* @__PURE__ */ T(hc, {
                      children: cl({ component: n, transition: l?.transition }),
                    }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              /* @__PURE__ */ T(
                Lx,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: nl(n, t),
                  transitionProps: il(n, t),
                  instant: ol(n, t, !0),
                  animation: al(n, t),
                  exitProps: e.transition.enter,
                  visible: sl(n, t),
                  backdropColor: el(e.transition),
                  backfaceVisible: tl(n, t),
                  onTapBackdrop: ll(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: cl({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return /* @__PURE__ */ T(Sx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: /* @__PURE__ */ T(Bx.Provider, {
                value: this,
                children: /* @__PURE__ */ C(Gx.Provider, {
                  value: i,
                  children: [
                    /* @__PURE__ */ T(Lx, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Zc(n),
                      animation: Qc(n),
                      backfaceVisible: $c(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: /* @__PURE__ */ T(To, {
                        children: /* @__PURE__ */ T(Tx, {
                          children: /* @__PURE__ */ T(Ie, {
                            presenceAffectsLayout: !1,
                            children: a,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ T(Ie, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (qx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Jx = /* @__PURE__ */ As(/* @__PURE__ */ j.forwardRef(ul))),
      (Yx = /* @__PURE__ */ (function (e) {
        return (
          (e.Boolean = `boolean`),
          (e.Number = `number`),
          (e.MotionValue = `motionvalue`),
          (e.Dimension = `dimension`),
          (e.String = `string`),
          (e.RichText = `richtext`),
          (e.FusedNumber = `fusednumber`),
          (e.Enum = `enum`),
          (e.SegmentedEnum = `segmentedenum`),
          (e.Color = `color`),
          (e.Image = `image`),
          (e.ResponsiveImage = `responsiveimage`),
          (e.File = `file`),
          (e.ComponentInstance = `componentinstance`),
          (e.Slot = `slot`),
          (e.Array = `array`),
          (e.EventHandler = `eventhandler`),
          (e.ChangeHandler = `changehandler`),
          (e.Transition = `transition`),
          (e.BoxShadow = `boxshadow`),
          (e.Link = `link`),
          (e.Date = `date`),
          (e.Object = `object`),
          (e.Font = `font`),
          (e.PageScope = `pagescope`),
          (e.ScrollSectionRef = `scrollsectionref`),
          (e.CustomCursor = `customcursor`),
          (e.Border = `border`),
          (e.Cursor = `cursor`),
          (e.Padding = `padding`),
          (e.BorderRadius = `borderradius`),
          (e.Gap = `gap`),
          (e.CollectionReference = `collectionreference`),
          (e.MultiCollectionReference = `multicollectionreference`),
          (e.TrackingId = `trackingid`),
          (e.VectorSetItem = `vectorsetitem`),
          (e.LinkRelValues = `linkrelvalues`),
          (e.Location = `location`),
          (e.SharedType = `sharedtype`),
          e
        );
      })({})),
      (Xx = /* @__PURE__ */ Symbol.for(`framer.sharedEnum`)),
      (Zx = `optional`),
      (Qx = `outputControls`),
      ($x = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (eS = /* @__PURE__ */ Symbol(`private`)),
      (tS = /* @__PURE__ */ (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [eS]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Vy(),
                reset() {
                  for (let t in i)
                    if ($x(i, t)) {
                      let n = $x(e, t) ? bb(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: /* @__PURE__ */ new Set(),
              },
            },
            i = new Proxy(r, rS);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[eS].reset()),
          (e.addObserver = (e, t) => e[eS].observers.add(t)),
          e
        );
      })()),
      (nS = class {
        set = (e, t, n, r) => {
          if (t === eS) return !1;
          let i = e[eS],
            a,
            o;
          if (
            (Fa(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Hy(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = bb(e)[t];
          if (l !== void 0) {
            Fa(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (bb(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === eS) return bb(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[eS].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(eS);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== eS) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (rS = /* @__PURE__ */ new nS()),
      (iS = /* @__PURE__ */ (() => {
        function e(t = {}) {
          let n = tS(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => tS.resetObject(e));
          }),
          (e.addObserver = (e, t) => tS.addObserver(e, t)),
          e
        );
      })()),
      (aS = { update: 0 }),
      (oS = /* @__PURE__ */ j.createContext({ update: NaN })),
      (sS = class extends v {
        observers = [];
        state = aS;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), fb.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), iS.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            iS._stores.forEach((e) => {
              let t = iS.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            /* @__PURE__ */ T(oS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (cS = `__framer__`),
      (lS = 10),
      (uS = /* @__PURE__ */ j.createContext(void 0)),
      (dS = /* @__PURE__ */ j.createContext(void 0)),
      (fS = `ssr-variant`),
      (pS = `ssr-variant-group-separator`),
      (mS = /* @__PURE__ */ j.forwardRef(function (e, t) {
        let n = Ml(t),
          r = j.useContext(dS),
          i = j.useSyncExternalStore(Tt, Dt, Et),
          a = Oo(() => (i ? (ur() ? 1 : 2) : 0)),
          o = j.useContext(uS);
        return Ai(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Bl(t, c, i));
            case 1:
              return Fl(i, s, c, u, l, d, n, t);
            case 2:
              return Fl(i, s, c, u, l, d, jl, void 0);
            default:
              U(a);
          }
        }, [o, r, n, e]);
      })),
      (hS = /* @__PURE__ */ qb(mS, `.${fS} { display: contents }`, `PropertyOverrides`)),
      (gS = `default`),
      (_S = /* @__PURE__ */ new Set([gS])),
      (vS = class {
        entries = /* @__PURE__ */ new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (H(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (H(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
          }
        }
        setHash(e, t = gS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return gS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Il(r)) : gS;
        }
        setAll(e, t = _S, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Je(n.transformTemplate) ? n.transformTemplate?.({}, bS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: V(a) ? a : void 0,
              animate: V(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (yS = /* @__PURE__ */ new vS()),
      (bS = `__Appear_Animation_Transform__`),
      (xS = `data-framer-appear-id`),
      (SS = `data-framer-appear-animation`),
      (CS = (e) => {
        if (jo())
          return {
            animate: Hl(e.animate) ? e.animate : void 0,
            initial: Hl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (wS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (TS = (e) => ({
        x: ge(e?.x ?? 0),
        y: ge(e?.y ?? 0),
        opacity: ge(e?.opacity ?? 1),
        scale: ge(e?.scale ?? 1),
        rotate: ge(e?.rotate ?? 0),
        rotateX: ge(e?.rotateX ?? 0),
        rotateY: ge(e?.rotateY ?? 0),
        skewX: ge(e?.skewX ?? 0),
        skewY: ge(e?.skewY ?? 0),
        transformPerspective: ge(e?.transformPerspective ?? 0),
      })),
      (ES = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (DS = /* @__PURE__ */ Object.freeze({ willChange: `transform` })),
      (OS = /* @__PURE__ */ Object.freeze({})),
      (kS = /* @__PURE__ */ new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (AS = () => {
        let e = h();
        return (
          M(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (jS = /* @__PURE__ */ new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (MS = /* @__PURE__ */ new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (NS = 1),
      (PS = 4),
      (FS = /* @__PURE__ */ new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (IS = [`animate`, `animate`]),
      (LS = { inputRange: [], outputRange: [] }),
      (RS = /* @__PURE__ */ new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (zS = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (BS = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (VS = [0, 1]),
      (HS = { parallax: jS, styleAppear: FS, styleTransform: RS, loop: kS, presence: MS }),
      (US = /* @__PURE__ */ Y_(HS)),
      (WS = (e) => e.reduce((e, t) => (e += t), 0)),
      (GS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (KS = `current`),
      (qS = (e) =>
        j.forwardRef((t, n) => {
          let r = !We(e);
          if (t.__withFX) {
            let i = { ...t };
            return (
              r || Reflect.deleteProperty(i, `__withFX`),
              /* @__PURE__ */ T(e, { ...i, animate: void 0, initial: void 0, exit: void 0, ref: n })
            );
          }
          let i = CS(t);
          if (i) return /* @__PURE__ */ T(e, { ...du(t).forwardedProps, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = du(t),
            m = yc(n),
            { values: h, style: g } = Zl(
              c,
              m,
              p,
              Qe(d) ? t.style : { ...t.style, opacity: void 0 },
              t[ne]
            ),
            { values: _, style: v } = ql(a, m, t.style?.visibility),
            { values: y, style: b } = lu(s, m),
            { values: x, style: S } = au(o, m),
            { values: C, style: w } = Gl(l, m),
            E = j.useMemo(() => {
              let e = new Te(d ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [d, y, _, x, C, h]);
          pu(t.style, E);
          let D = I(E.scale, GS),
            O = I(E.opacity, GS),
            k = I(E.x, WS),
            A = I(E.y, WS),
            M = I(E.rotate, WS),
            N = I(E.rotateX, WS),
            ee = I(E.rotateY, WS),
            P = I(E.skewX, WS),
            F = I(E.skewY, WS),
            te = I(E.transformPerspective, WS),
            { drag: re, dragConstraints: ie } = u;
          Rs(re && fu(ie) ? ie : void 0);
          let ae = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: M,
            rotateX: N,
            rotateY: ee,
            skewX: P,
            skewY: F,
          };
          Qe(f) && (ae.transformPerspective = te);
          let oe = mu(t.animate) ? t.animate : void 0,
            se = mu(t.initial) ? t.initial : void 0,
            ce = mu(t.exit) ? t.exit : void 0,
            le = p && !c.presenceInitial ? { initial: se, animate: oe, exit: ce } : {},
            ue = r ? { __withFX: !0 } : {};
          return /* @__PURE__ */ T(e, {
            ...u,
            ...le,
            ...ue,
            style: { ...t.style, ...v, ...b, ...w, ...ae, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (JS = /* @__PURE__ */ O({})),
      (YS = /* @__PURE__ */ j.createContext({})),
      (XS = /* @__PURE__ */ j.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a
      ) {
        let o = j.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Ml(a);
        return /* @__PURE__ */ T(YS.Provider, { value: o, children: s(r, i) });
      })),
      (ZS = (e) =>
        j.forwardRef((t, n) => {
          let r = _u(t);
          return /* @__PURE__ */ T(e, { ...r, ref: n });
        })),
      (QS = {}),
      ($S = () => QS),
      (eC = (e) => {
        QS = e;
      }),
      (tC = !1),
      (nC = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!vu(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ot(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          Un(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!vu(e)) throw e;
          return ((tC = !0), this.props.children);
        }
      }),
      (rC = N === void 0 ? null : new Promise(() => {})),
      (iC = /* @__PURE__ */ T(yu, {})),
      (aC = /* @__PURE__ */ (() => {
        let e = O(!1);
        return ((e.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`), e);
      })()),
      (oC = /* @__PURE__ */ T(xu, {})),
      (sC = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Cu(this.props.getErrorMessage(), t?.componentStack), Su(e, t));
        }
        render() {
          let { children: e, fallback: t = oC } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (cC = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Su(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (lC = /* @__PURE__ */ j.createContext(void 0)),
      (uC = `code-crash:`),
      (dC = /* @__PURE__ */ ZS(
        /* @__PURE__ */ j.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            rendersWithMotion: c,
            __withFX: l,
            ...u
          },
          d
        ) {
          let f = Oo(() => (t ? `${t}-container` : void 0)),
            p = Ts(n),
            m = Ru(
              j.Children.map(e, (e) =>
                j.isValidElement(e) ? j.cloneElement(e, { layoutId: t ?? e.props.layoutId }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return /* @__PURE__ */ T(p, {
            layoutId: f,
            ...u,
            ref: d,
            children: /* @__PURE__ */ T($b.Provider, {
              value: !0,
              children: /* @__PURE__ */ T(uy.Provider, {
                value: i ?? null,
                children: /* @__PURE__ */ T(Do, {
                  enabled: !1,
                  children: /* @__PURE__ */ T(je, {
                    id: t ?? ``,
                    inherit: u.layout ? !0 : `id`,
                    children: m,
                  }),
                }),
              }),
            }),
          });
        })
      )),
      (fC = /* @__PURE__ */ j.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = Ru(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Ts(f);
          return /* @__PURE__ */ T(uy.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ T(n, { ...u, ref: t, style: e.style, children: d }),
          });
        }
        {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return /* @__PURE__ */ T(uy.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ T(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (mC = /* @__PURE__ */ new Set()),
      (hC = /* @__PURE__ */ O({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (gC = `framer-cursor-none`),
      (_C = `framer-pointer-events-none`),
      (vC = /* @__PURE__ */ d(function ({ children: e }) {
        let t = Oo(() => {
            let e = /* @__PURE__ */ new Set(),
              t = {},
              n = /* @__PURE__ */ new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Wu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ce();
        return /* @__PURE__ */ C(hC.Provider, {
          value: t,
          children: [e, !n && /* @__PURE__ */ T(SC, {})],
        });
      })),
      (yC = /* @__PURE__ */ qb(
        vC,
        [
          `.${gC}, .${gC} * { cursor: none !important; }`,
          `.${_C}, .${_C} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (bC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (xC = `data-framer-portal-id`),
      (SC = /* @__PURE__ */ d(function () {
        let { onRegisterCursors: e } = x(hC),
          n = Uu(!1),
          r = _e(0),
          i = _e(0),
          a = _e(0),
          o = h(null),
          s = h({ cursors: {}, cursorHash: void 0 }),
          c = Ls();
        (M(() => {
          if (!n) return;
          let e = 0,
            t = 0;
          function l() {
            (r.set(e), i.set(t), Fe(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ze(s.current.cursors)) return;
            let n = Ju(e, t);
            n !== s.current.cursorHash && ((s.current.cursorHash = n), He.update(() => c()));
          };
          function d(n) {
            n.pointerType === `touch`
              ? ke(u)
              : (He.read(u, !0), (e = n.clientX), (t = n.clientY), He.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            He.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            Ot.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            He.read(u, !0),
            () => {
              (Ot.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                ke(u));
            }
          );
        }, [a, r, i, c, n]),
          M(() => {
            if (!n) return;
            function e() {
              Fe(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              Ot.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), Ot.removeEventListener(`blur`, e));
              }
            );
          }, [a, n]),
          t(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = Ze(e) ? null : Ju(r.get(), i.get())),
                c());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(gC, !1));
            };
          }, [r, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          f = Gu(d);
        t(() => {
          n && document.body.classList.toggle(gC, f);
        }, [f, n]);
        let p = d?.component,
          m = d?.transition ?? { duration: 0 },
          g = m.duration === void 0 ? m : { ...m, duration: m.duration * 1e3 },
          _ = xe(r, g),
          v = xe(i, g),
          b = I(() => _.get() + (d?.offset?.x ?? 0)),
          C = I(() => v.get() + (d?.offset?.y ?? 0)),
          w = d?.alignment,
          E = d?.placement,
          D = S((e, t) => `translate(${qu(E, w)}) ${t}`, [w, E]);
        return !n || !d || !p
          ? null
          : /* @__PURE__ */ T(y, {
              children: /* @__PURE__ */ T(p, {
                transformTemplate: D,
                style: { ...bC, x: b, y: C, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: _C,
              }),
            });
      })),
      (CC = `webPageId`),
      (wC = class {
        collectedLinks = /* @__PURE__ */ new Map();
        nestingInfo = /* @__PURE__ */ new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = /* @__PURE__ */ new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            H(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (H(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((xt && !pr()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Zu(e), e), this.collectedLinks.set(Zu(t), t));
          let n = this.nestingInfo.get(Zu(e)) ?? /* @__PURE__ */ new Set();
          (n.add(Zu(t)), this.nestingInfo.set(Zu(e), n));
        }
      }),
      (TC = /* @__PURE__ */ new wC()),
      (EC = `element`),
      (DC = `collection`),
      (OC = `collectionItemId`),
      (kC = `pathVariables`),
      (AC = `framer/page-link,`),
      (jC = /* @__PURE__ */ O(void 0)),
      (MC = /* @__PURE__ */ j.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? /* @__PURE__ */ T(e, { ...t, ref: n }) : null;
      })),
      (NC = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((N.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ot(St ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          Un(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (St && document.getElementById(`main`)?.innerHTML) || ``;
          return /* @__PURE__ */ T(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ot()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (FC = /:([a-z]\w*)/gi),
      (IC = /* @__PURE__ */ O(void 0)),
      (LC = /* @__PURE__ */ new Map()),
      (RC = 500),
      (zC = 500),
      (VC = !1),
      (HC = 500),
      (UC = 0.9),
      (WC = 1.7),
      (GC = 4),
      (KC = 1 / 0),
      (qC = /* @__PURE__ */ new WeakMap()),
      (JC = /* @__PURE__ */ new Set()),
      (YC = /* @__PURE__ */ new Map()),
      (XC = !qv || typeof IntersectionObserver > `u` ? null : /* @__PURE__ */ Fd()),
      (ZC = /* @__PURE__ */ _d(
        /* @__PURE__ */ E(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: s,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = En(),
            m = On(),
            h = xd(),
            { activeLocale: g, locales: _ } = Mr(),
            v = Hd(),
            y = Pr(),
            b = Qu(),
            x = Ud({ nodeId: c, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            S = o(() => {
              if (!t) return {};
              let e = Xu(t) ? t : ad(t);
              if (!e) return {};
              if (z(e))
                return $d(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: s,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: o } = e,
                c = v(i, o, g);
              if (it(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = vd(p, m, e, g, c, h),
                S = Ld(n, !0),
                C = S === `_blank`,
                w = Qd(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = qd(u, w, (e) =>
                  Gd(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: Kd(u, x, E),
                "data-framer-page-link-current": (m && Sd(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, x, a, _, s, v, y]),
            C = yc(w(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = S;
          bc(
            C,
            (e) => {
              if (e !== null && D && E && A && !b)
                return XC?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, b]
          );
          let M = !!T;
          return sd(
            Ml(f).cloneAsArray(e, (e) => ef(e, { ...d, ...nf(j, u, M) }, C)),
            l,
            c,
            t,
            S,
            C
          );
        })
      )),
      (QC = `framer`),
      ($C = 3),
      (ew = 30),
      (tw = 1e4),
      (nw = `__framer`),
      (rw = `3`),
      (iw = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (aw = /* @__PURE__ */ Date.now()),
      (ow = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (sw = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (cw = () => ((Date.now() - aw) / 1e3).toFixed(2)),
      (lw = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          j.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          j.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = cw())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = cw()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = cw()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          /* @__PURE__ */ T(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (uw = { state: `pending` }),
      (dw = { state: `success` }),
      (fw = { state: `incomplete` }),
      (pw = { state: `complete` }),
      (mw = { state: `error` }),
      (hw = /* @__PURE__ */ j.createContext(void 0)),
      (gw = /* @__PURE__ */ j.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...c
        },
        u
      ) {
        let d = j.useRef(null),
          f = L(u, d),
          {
            states: p,
            convertHoneypotFieldsForSubmission: m,
            replaceHoneypotWithMetadata: h,
          } = ff(),
          g = En(),
          _ = On(),
          v = xd(),
          y = er(),
          [b, S] = j.useReducer(gf, fw),
          { activeLocale: w, locales: E } = Mr(),
          D = x(hw),
          O = j.useRef({ onSuccess: r, onError: i, onLoading: a });
        O.current = { onSuccess: r, onError: i, onLoading: a };
        let k = j.useRef(!1);
        async function A(e) {
          if (z(e)) {
            let t = yd(g, e, v, E);
            if (!t) {
              yf(e, d);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            g.navigate?.(n, r, i);
            return;
          }
          H(
            Xu(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await Bd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, y),
            { routeId: n, elementId: r, pathVariables: i } = vd(g, _, e, w, t, v);
          g.navigate?.(n, r, i);
        }
        let M = (e) => {
          (e.preventDefault(), N(e.currentTarget));
        };
        async function N(t) {
          if (!e || !D || k.current) return;
          ((k.current = !0), m());
          let r = new FormData(t),
            i = cf(t);
          (await Bv({ priority: `user-visible`, continueAfter: `paint` }),
            h(r),
            l(() => S({ type: `submit` })),
            df(r, Ot.document));
          for (let [e, t] of r) t instanceof File && r.delete(e);
          try {
            (O.current.onLoading?.(),
              mf({ router: g, nodeId: s, submitTrackingId: o, activeLocale: w }),
              await xf(e, r, i, D),
              l(() => S({ type: `success` })),
              O.current.onSuccess?.(),
              n && (await A(n)));
          } catch (e) {
            (l(() => S({ type: `error` })), O.current.onError?.(), console.error(e));
          }
          k.current = !1;
        }
        let ee = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), M(e)));
          },
          P = async (e) => {
            let t = e.currentTarget;
            (await Bv({ priority: `background`, continueAfter: `paint` }),
              l(() => S({ type: bf(t) ? `incomplete` : `complete` })));
          };
        Xi(d, (e) => void N(e));
        let F = j.useMemo(() => t(b), [t, b]);
        return /* @__PURE__ */ C(Ue.form, {
          ...c,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: _f(b) ? M : vf,
          onKeyDown: ee,
          onChange: P,
          ref: f,
          children: [
            F,
            /* @__PURE__ */ T(pf, { states: p }),
            /* @__PURE__ */ T(`script`, { dangerouslySetInnerHTML: { __html: Yi() } }),
            /* @__PURE__ */ C(`noscript`, {
              children: [
                /* @__PURE__ */ T(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                /* @__PURE__ */ T(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                /* @__PURE__ */ T(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (_w = `__framer_force_showing_editorbar_since`),
      (vw = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (yw = () => {
        try {
          return !!localStorage[_w];
        } catch {
          return !1;
        }
      }),
      (bw = () => !yw()),
      (xw = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (Sw = null),
      (Cw = null),
      wt(kf),
      (ww = (e, t, n, r, i, a) => {
        let o = x(hw),
          s = h(),
          c = er(),
          l = h(!0);
        return (
          M(() => {
            function u() {
              (!Sw || !Cw) && kf();
              let s = n ? new URL(n, Ot.location.href) : Ot.location,
                u = {
                  version: 2,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: Sw,
                  locale: Cw,
                },
                d = l.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && c?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && z(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (it(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...u, collectionItemId: t };
                  })()
                : u;
            }
            (async () => {
              let e = (s.current = u()),
                t = e instanceof Promise ? await e : e;
              ((s.current = t),
                l.current ? (l.current = !1) : Un(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (s.current = u()),
                  t = e instanceof Promise ? await e : e;
                ((s.current = t), Un(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              N.addEventListener(`pageshow`, d),
              () => {
                N.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, o, c, a]),
          s
        );
      }),
      (Tw = 0),
      (Ew = 500),
      (Dw = 200),
      (Ow = `main`),
      (kw = `framerGeneratedPage`),
      (Aw = `<!-- Start of headStart -->`),
      (jw = `<!-- End of headStart -->`),
      (Mw = `<!-- Start of headEnd -->`),
      (Nw = `<!-- End of headEnd -->`),
      (Pw = `<!-- Start of bodyStart -->`),
      (Fw = `<!-- End of bodyStart -->`),
      (Iw = `<!-- Start of bodyEnd -->`),
      (Lw = `<!-- End of bodyEnd -->`),
      (Rw = /* @__PURE__ */ j.createContext(void 0)),
      (zw = { status: `loading`, data: void 0 }),
      (Bw = 5e3),
      (Vw = () => {}),
      (Hw = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = /* @__PURE__ */ new Map();
        #e = /* @__PURE__ */ new Map();
        #t = /* @__PURE__ */ new Set();
        #n = /* @__PURE__ */ new Map();
        #r = /* @__PURE__ */ new Map();
        #i = /* @__PURE__ */ new Map();
        #a = /* @__PURE__ */ new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Sp(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Sp(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Math.min(Ep(r), 2 ** 31 - 1),
            a = Ot.setInterval(() => {
              if (document.visibilityState === `hidden`) return;
              let n = this.#r.get(t);
              r && n && this.fetchWithCache({ ...e, cacheDuration: r });
            }, i);
          this.#a.set(t, a);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Dp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Dl(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Dp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!ur() || !ed(e.url, !1)) return;
          let t = Sp(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Tp(n, e);
          return (e.resultOutputType === `image` && z(i) && (await yp(i).catch(Vw)), i);
        }
        async fetchWithCache(e) {
          if (!ur()) return;
          let t = Sp(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Dp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, zw);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: /* @__PURE__ */ Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!t || this.#t.has(e)) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!ed(r, !1)) return Vw;
          let a = Sp(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? /* @__PURE__ */ new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n && (n.delete(t), n.size === 0 && (this.#e.delete(a), this.stopQueryRefetching(e)));
            }
          );
        }
      }),
      (Uw = /* @__PURE__ */ O(void 0)),
      (Ww = /* @__PURE__ */ O(!0)),
      (Gw = ({ children: e, client: t }) => {
        let [n] = p(() => t ?? new Hw()),
          [r, i] = p(!0);
        return (
          M(
            () => (
              n.hydrateCache(),
              l(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          /* @__PURE__ */ T(Ww.Provider, {
            value: r,
            children: /* @__PURE__ */ T(Uw.Provider, { value: n, children: e }),
          })
        );
      }),
      (Kw = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Be.WillChange = class extends Ee {
        add(e) {
          e !== `backgroundColor` && super.add(e);
        }
      }),
      (qw = /* @__PURE__ */ _d(
        /* @__PURE__ */ E(function ({ links: e, children: t, ...n }, r) {
          return Ml(r)(t(Ap((t) => e.map(t), [e])), n);
        })
      )),
      (Jw = { priority: void 0, canYield: !0 }),
      (Yw = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Xp(e, t);
            case `boolean`:
              return Qp(e);
            case `color`:
              return tm(e);
            case `date`:
              return rm(e);
            case `enum`:
              return am(e);
            case `file`:
              return sm(e);
            case `link`:
              return lm(e);
            case `number`:
              return dm(e);
            case `object`:
              return mm(e, t);
            case `responsiveimage`:
              return gm(e);
            case `richtext`:
              return vm(e);
            case `string`:
              return Sm(e);
            case `vectorsetitem`:
              return bm(e);
            case `unknown`:
              return e;
            default:
              U(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ye(e)
            ? { type: `boolean`, value: e }
            : tt(e)
              ? { type: `date`, value: e.toISOString() }
              : B(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : Xe(e)
                    ? { type: `array`, value: e.map(Yw.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && wm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && wm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && wm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && wm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && wm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Yw.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Yw.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Cm(e),
            i = Cm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Cm(e),
            i = Cm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Cm(e),
            i = Cm(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          return e?.type === `array` ? e.value.length : 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Yw.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              U(e);
          }
        },
      }),
      (Xw = { type: `unknown`, isNullable: !0 }),
      (Zw = class {
        collection;
        locale;
        schema;
        indexes = [];
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = xl(e);
          H(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (H(n !== `array`, `Array properties are not supported`),
              H(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (et(i)) continue;
            let a = this.schema[t];
            Qe(a) ||
              (H(a.type !== `unknown`, `Invalid definition type`),
              (n[t] =
                a.type === `richtext`
                  ? { type: a.type, value: { itemIndex: r, key: t } }
                  : { type: a.type, value: i }));
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Tm(this.collection, this.locale))[t]?.[n];
          return nv.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Tm(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Ip(e);
            i && (await i);
            let a = t[r];
            H(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Tm(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Ip(t);
            e && (await e);
            let a = n[Number(i)];
            (H(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Qw = /* @__PURE__ */ new Map()),
      ($w = /* @__PURE__ */ new WeakMap()),
      (eT = `$r_`),
      (tT = /* @__PURE__ */ new Map()),
      (nT = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Rm(e, t)), (this.priority = Mm(n)));
        }
        *resolveArrayValue(e) {
          return yield* Vp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Bp(t);
        }
        richTextCache = /* @__PURE__ */ new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          H(Fm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          H(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? /* @__PURE__ */ new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return rt(t) ? yield t : t;
        }
        vectorSetItemCache = /* @__PURE__ */ new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          H(Lm(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (H(n, `Can't find collection for vector set item pointer`),
            H(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? /* @__PURE__ */ new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return rt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (rT = `index`),
      (iT = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), Y(this.name, ...e));
        }
      }),
      (aT = class {
        id;
        name;
        data;
        indexes = new sT();
        fields = new Q();
        fieldByName = /* @__PURE__ */ new Map();
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (oT = class {
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
      }),
      (sT = class extends iT {
        name = `Indexes`;
      }),
      (cT = class {
        id;
        name;
        definition;
        collection;
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        isProvidedByScan() {
          let e = this.collection?.data.scannedFields;
          return !e || (this.name !== void 0 && this.name in e);
        }
        getValue(e) {
          H(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                H(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Pm(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                H(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Im(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends iT {
        name = `Fields`;
      }),
      (lT = class {
        field;
        direction;
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return Y(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (uT = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return Y(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== `index`) return !1;
          return !0;
        }
      }),
      (dT = class {
        ordering;
        resolvedFields;
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return Y(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (fT = class e {
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (H(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (H(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = /* @__PURE__ */ new Map();
        constructor(e) {
          this.parent = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new uT();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new dT(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          H(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (H(e, `Field must exist`), e.field);
        }
      }),
      (pT = 1e3),
      ($ = class e {
        network;
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = Hm(),
            i = Um(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (mT = class {
        pointers = /* @__PURE__ */ new Map();
        values = /* @__PURE__ */ new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (hT = class e {
        fields;
        tuples;
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (gT = class {
        isSynchronous;
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (_T = class extends gT {
        group;
        getGroup() {
          return (H(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (H(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Lp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Rp(this.evaluate(void 0), void 0, e);
        }
      }),
      (vT = class {
        input;
        field;
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return Y(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (yT = class e extends _T {
        input;
        projections;
        passthrough;
        inputGroup;
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new dT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new vT(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Vp(
              n.tuples.map((t) =>
                Vp(
                  this.projections.map((n) => Bp({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new mT();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            H(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (bT = { type: 0 }),
      (xT = class extends gT {
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return Lp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Rp(this.evaluate(void 0, void 0));
        }
      }),
      (ST = { type: 0 }),
      (CT = class {
        when;
        then;
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return Y(`CaseCondition`, this.when, this.then);
        }
      }),
      (wT = class e extends xT {
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        getHash() {
          return Y(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new CT(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Bp({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Vp(
              this.conditions.map((n) =>
                Bp({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Yw.equal(n, e, ST)) return t;
          } else for (let { when: e, then: t } of r) if ($p(e)) return t;
          return i;
        }
      }),
      (TT = class {
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        build() {
          let e = new fT();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new uT();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Qe(t)) continue;
                a.add(t.field);
                let r = new lT(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new cT(Vm(this.fieldId++), void 0, t.definition, void 0),
                  a = new vT(t, r);
                i.push(a);
                let s = new lT(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Qe(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              H(n.alias, `Subqueries should have an alias`);
              let r = Vm(this.fieldId++),
                a = n.alias,
                s = new cT(r, a, t.definition, void 0),
                c = new vT(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              U(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = km(t.data, this.locale),
            i = t.alias,
            a = new aT(zm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new cT(Vm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new cT(Vm(this.fieldId++), rT, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: rT, collectionName: i });
            let t = new uT(),
              r = new lT(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new uT(),
              o = new oT(Bm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new uT(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              U(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              U(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(Xw, null);
        }
        buildLiteralValue(e) {
          let t = Yw.parse(e.value);
          return this.normalizer.newScalarConstant(Xw, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (H(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              U(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new ET(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new ET(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new CT(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              U(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              U(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (ET = class {
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
        constructor(e) {
          this.inScope = e;
        }
      }),
      (DT = class e extends _T {
        input;
        predicate;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new dT(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Vp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => $p(n[t] ?? null));
        }
      }),
      (OT = class e extends _T {
        index;
        query;
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return Y(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * pT : 50 * pT);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Pp()),
            i = Pp(),
            a = [];
          for (let n of r) {
            let r = Ip(i);
            r && (yield r);
            let o = new mT();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new hT(n, a);
        }
      }),
      (kT = class e extends _T {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new dT(new uT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Bp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (AT = class e extends _T {
        collection;
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return Y(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        getScanFields() {
          return this.collection.data.scannedFields
            ? new Q(Array.from(this.collection.fields).filter((e) => e.isProvidedByScan()))
            : this.collection.fields;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.getScanFields());
        }
        optimize() {
          return $.estimate(1, 200 * pT);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = this.getScanFields(),
            r = yield e.data.scanItems(Pp()),
            i = Pp(),
            a = [];
          for (let t of r) {
            let r = Ip(i);
            r && (yield r);
            let o = new mT();
            for (let r of n) {
              let n = r.getValue(t);
              (o.addPointer(e, t.pointer), o.addValue(r, n));
            }
            a.push(o);
          }
          return new hT(t, a);
        }
      }),
      (jT = class e extends _T {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new dT(new uT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Bp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (MT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $p(n) && $p(r) };
        }
      }),
      (NT = class extends xT {
        definition;
        value;
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return Y(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (PT = { type: 0 }),
      (FT = class e extends xT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Bp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.contains(n, r, PT) };
        }
      }),
      (IT = { type: 0 }),
      (LT = class e extends xT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Bp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.endsWith(n, r, IT) };
        }
      }),
      (RT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.equal(n, r, bT) };
        }
      }),
      (zT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.greaterThan(n, r, bT) };
        }
      }),
      (BT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.greaterThanOrEqual(n, r, bT) };
        }
      }),
      (VT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.lessThan(n, r, bT) };
        }
      }),
      (HT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.lessThanOrEqual(n, r, bT) };
        }
      }),
      (UT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Yw.equal(n, r, bT) };
        }
      }),
      (WT = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: $p(n) || $p(r) };
        }
      }),
      (GT = { type: 0 }),
      (KT = class e extends xT {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Bp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.startsWith(n, r, GT) };
        }
      }),
      (qT = class {
        normalizer;
        memo;
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof DT) {
            if (e.predicate instanceof MT) {
              let n = new kT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof WT) {
              let n = new jT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof AT)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new OT(n, Wm(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof DT) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof AT)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof RT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NT &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof UT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NT &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof VT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof HT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof zT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof BT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof NT &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof KT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof NT &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof NT &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Wm(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new OT(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (JT = class {
        id;
        relational;
        nodes = [];
        winners = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new YT();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          H(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (YT = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (XT = class {
        outputFields;
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (ZT = class {
        nodes = /* @__PURE__ */ new Map();
        groups = [];
        addGroup(e) {
          let t = new JT(Gm(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new XT(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            H(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (QT = class e extends _T {
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new dT(new uT(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = /* @__PURE__ */ new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new hT(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new mT();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Bp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof RT) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new hT(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new mT();
              (n.merge(i),
                n.merge(a),
                $p(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      ($T = class e extends _T {
        input;
        limit;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields(e) {
          return Array.from(e).every((e) => e.isProvidedByScan());
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new dT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Bp({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = fm(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (eE = class e extends _T {
        input;
        offset;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new dT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Bp({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = fm(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (tE = class e extends xT {
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return Y(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) Qe(n.collection) || e.add(n);
          return new dT(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new mT();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (nE = class e extends xT {
        input;
        definition;
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            H(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return Y(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Yw.cast(n, this.definition);
        }
      }),
      (rE = class e extends xT {
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return Y(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (Qe(this.field.collection) || e.add(this.field), new dT(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new mT();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (iE = { type: 0 }),
      (aE = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yw.in(n, r, iE) };
        }
      }),
      (oE = { type: 1 }),
      (sE = class e extends xT {
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Bp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Yw.indexOf(n, r, oE) };
        }
      }),
      (cE = class extends Error {}),
      (lE = class e extends xT {
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = qm(n),
            a = qm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (uE = class e extends xT {
        input;
        definition = { type: `number`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Yw.length(n) };
        }
      }),
      (dE = class e extends xT {
        input;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !$p(yield* this.input.evaluate(e, t)) };
        }
      }),
      (fE = { type: 0 }),
      (pE = class e extends xT {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Bp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Yw.in(n, r, fE) };
        }
      }),
      (mE = class extends xT {
        field;
        isOuterField;
        definition;
        constructor(e, t) {
          H(e.name !== rT, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        getHash() {
          return Y(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (H(e, `Context must exist`), e.getValue(this.field))
            : (H(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (hE = class {
        memo;
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new AT(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new OT(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new QT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof NT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof QT && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new DT(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new yT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof yT &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new $T(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new eE(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof NT) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new mE(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new NT(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof dE)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof RT) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof UT) return this.newScalarEquals(e.left, e.right);
          if (e instanceof VT) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof HT) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof zT) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof BT) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof MT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof WT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new dE(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof NT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof NT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof NT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof NT && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new MT(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof NT && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof NT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof NT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof NT && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new WT(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof mE;
          if (t instanceof mE && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new RT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof mE;
          if (t instanceof mE && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new UT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof mE;
          if (t instanceof mE && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new VT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof mE;
          if (t instanceof mE && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new HT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof mE;
          if (t instanceof mE && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new zT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof mE;
          if (t instanceof mE && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new BT(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new aE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new pE(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new CT(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new wT(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new FT(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new KT(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new LT(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new uE(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new sE(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new tE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new rE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new lE(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new nE(e, t);
          return this.finishScalar(n);
        }
      }),
      (gE = class extends _T {}),
      (_E = class e extends gE {
        input;
        fields;
        resolver;
        inputGroup;
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new dT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * pT).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          H(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = /* @__PURE__ */ new Map();
          for (let e of this.fields) {
            H(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Jm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                H(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new mT();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (H(s, `Item not found`), H(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (vE = { type: 0 }),
      (yE = class e extends gE {
        input;
        ordering;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== `index` && (Qe(e.collection) || t.add(e));
          return new dT(new uT(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === `index`) {
                let r = n.collection;
                H(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                H(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                H(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Yw.equal(a, o, vE)) {
                if ($e(a) || Yw.lessThan(a, o, vE)) return i ? -1 : 1;
                if ($e(o) || Yw.greaterThan(a, o, vE)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (bE = class {
        query;
        locale;
        resolver;
        memo = new ZT();
        normalizer = new hE(this.memo);
        explorer = new qT(this.normalizer);
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        optimize(e) {
          let t = new TT(this.normalizer, this.query, this.locale).build(),
            n = Ip(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (H(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new _E(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new yE(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (xE = /* @__PURE__ */ jp(`query-engine`)),
      (SE = class {
        async evalQuery(e, t, n, r) {
          xE.enabled && xE.debug(`Query:\n${sh(e)}`);
          let i = new nT(e, t, r),
            a = new bE(e, t, i),
            o = Ip(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = it(s) ? await s : s,
            u = Ip(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Ip(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(Bp(a, r)));
          }
          let h = zp(Vp(m, r), r);
          return n ? [it(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new nT(t, n, r);
          return zp(
            Vp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return Bp(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (CE = fv.QueryCache),
      (wE = class {
        queryEngine;
        maxSize;
        cache = /* @__PURE__ */ new Map();
        serializedCache = hv === void 0 ? void 0 : /* @__PURE__ */ new Map();
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = uh(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = Nm(n) ?? `user-visible`,
              o = Nm(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && br(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              hv !== void 0 &&
                this.serializedCache !== void 0 &&
                !Em(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && hv.set(CE, r, e);
            }
            return i.value;
          }
          let a = new nv(() => {
            let i = Em(r),
              a = i ? void 0 : Yn(CE, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                qn(e, r);
              }
            return hv !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), hv.set(CE, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (TE = /* @__PURE__ */ new wE(/* @__PURE__ */ new SE())),
      (EE = `style[data-framer-breakpoint-css]`),
      (DE = `page`),
      (OE = /* @__PURE__ */ Symbol(`cycle`)),
      (jE = /* @__PURE__ */ new WeakMap()),
      (ME = /* @__PURE__ */ (() => {
        let e = O(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (NE = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (PE = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (FE = /* @__PURE__ */ PE(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (IE = /* @__PURE__ */ PE(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (LE = {
        ...FE,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = Zh(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += Zh(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (RE = { start: `flex-start`, end: `flex-end` }),
      (zE = /* @__PURE__ */ E(sg)),
      (BE = { start: 0, end: 0 }),
      (VE = { display: `flex`, position: `relative` }),
      (HE = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (UE = { duration: 0.2, ease: `linear` }),
      (WE = /* @__PURE__ */ (() => {
        let e = O(null);
        return ((e.displayName = `CarouselContext`), e);
      })()),
      (GE = { type: `spring`, stiffness: 200, damping: 40 }),
      (KE = { type: `spring`, stiffness: 80, damping: 10 }),
      (qE = { height: `100%`, width: `100%` }),
      (JE = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            carouselEffectStackDirection: r,
            carouselEffectAlign: i,
            carouselEffectGap: a,
            carouselEffectXOverflow: s,
            carouselEffectYOverflow: c,
            carouselEffectOverflow: l,
            carouselEffectLoop: u,
            carouselEffectAutoPlay: d,
            carouselEffectInterval: f,
            carouselEffectSnap: p,
            carouselEffectTransition: m,
            carouselEffectControls: h,
            as: g,
            ..._
          } = e,
          v = Mo(),
          y = r?.startsWith(`column`) ? `y` : `x`,
          b = (y === `x` ? (s ?? l ?? `visible`) : (c ?? l ?? `visible`)) === `visible`,
          x = wg(a, y),
          S = p === !0 ? `page` : p,
          w = Gh(n),
          E = o(() => Ue.create(g), [g]);
        return /* @__PURE__ */ T(E, {
          ..._,
          ref: t,
          children: /* @__PURE__ */ C(xg, {
            axis: y,
            align: i ?? `center`,
            gap: x,
            isStatic: v,
            itemSize: `manual`,
            overflow: b,
            loop: u,
            snap: S,
            transition: m,
            items: w,
            style: qE,
            children: [d && /* @__PURE__ */ T(Cg, { intervalSeconds: f ?? 1.5 }), h],
          }),
        });
      })),
      (YE = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? Ue.div,
          m = Mo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return /* @__PURE__ */ T(zE, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (XE = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? Ue.div,
          m = Nr() === `rtl` && o === `x` ? -1 : 1,
          g = (d === `paused` ? 0 : (i ?? 100)) * s * m,
          _ = _e(0),
          v = h(0),
          y = h(!1),
          b = h(!1),
          x = h(!1),
          S = (e) => {
            x.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          ue((e, t) => {
            let n = Math.abs(_.getVelocity()),
              r = b.current ? g * c : g;
            if (performance.now() > v.current && (!y.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = _.get() - e;
              ((y.current &&= (_.stop(), !1)), _.set(n));
            }
          }),
          M(() => {
            d === `paused` && _.stop();
          }, [d, _]),
          /* @__PURE__ */ T(zE, {
            ref: t,
            as: p,
            ...f,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? _ : void 0,
            _dragY: o === `y` ? _ : void 0,
            offset: _,
            drag: o,
            dragMomentum: !0,
            onClickCapture: S,
            onDragStart: () => {
              x.current = !0;
            },
            onDragEnd: () => {
              ((v.current = performance.now()),
                (y.current = !0),
                setTimeout(() => {
                  x.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              b.current = !0;
            },
            onMouseLeave: () => {
              b.current = !1;
            },
          })
        );
      })),
      (ZE = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (QE = ({ onPlayStateChange: e, children: t }) => {
        let n = o(
          () => ({ start: () => l(() => e(`running`)), stop: () => l(() => e(`paused`)) }),
          [e]
        );
        return /* @__PURE__ */ T(ZE.Provider, { value: n, children: t });
      }),
      ($E = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: o,
            tickerEffectOverflow: s,
            tickerEffectGap: c,
            tickerEffectDirectionModifier: l,
            tickerEffectHoverModifier: u,
            tickerEffectPosition: d,
            tickerEffectIsDataRepeater: f,
            style: m,
            ...h
          } = e,
          g = Mo(),
          [_, v] = p(`running`),
          y = i?.startsWith(`column`) ? `y` : `x`,
          b = l === `reverse` ? -1 : 1,
          x = q(u) ? u / 100 : 1,
          S = (y === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) === `visible`,
          C = Tg(c, y),
          w = Gh(n),
          E = { ...m, "--ticker-cms-total-children": f ? w.length : void 0, position: d };
        return g || !r
          ? /* @__PURE__ */ T(QE, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ T(YE, {
                ...h,
                style: E,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            })
          : /* @__PURE__ */ T(QE, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ T(XE, {
                ...h,
                style: E,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            });
      })),
      (eD = (e) => (t) => {
        let { carouselEffectProps: n, tickerEffectProps: r, domProps: i } = Dg(t);
        return t.carouselEffectEnabled
          ? /* @__PURE__ */ T(JE, { ...n, ...i, as: e })
          : t.tickerEffectEnabled
            ? /* @__PURE__ */ T($E, { ...r, ...i, as: e })
            : /* @__PURE__ */ T(e, { ...i });
      }),
      (tD = /* @__PURE__ */ new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (nD = { inputRange: [], outputRange: [] }),
      (rD = (e) =>
        j.forwardRef((t, n) => {
          if (W.current() === W.canvas) return /* @__PURE__ */ T(e, { ...t, ref: n });
          let [r, i] = kl(t, tD),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [p, m] = j.useState(o),
            h = j.useRef(!1),
            g = yc(n);
          Cc(
            g,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && h.current === !0) ||
                (h.current !== e &&
                  ((h.current = e),
                  j.startTransition(() => {
                    m(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let _ = kn(),
            v = j.useRef(_);
          return (
            j.useEffect(() => {
              if (f || !u) return;
              v.current !== _ && ((v.current = _), j.startTransition(() => m(o)));
              let e = {},
                t;
              return P((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = Og(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(fe(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  j.startTransition(() => {
                    m(l);
                  }));
              });
            }, [_, s, c, u, t.variant, f, d]),
            tu(f, (e) => j.startTransition(() => m(e)), { enabled: l, repeat: !s }),
            An(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              j.startTransition(() => m(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? /* @__PURE__ */ T(e, { ...i, variant: p ?? t.variant, ref: g })
              : /* @__PURE__ */ T(e, { ...i })
          );
        })),
      (iD = (e) => e.target.value),
      (aD = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (oD = /* @__PURE__ */ E(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: c,
            min: u,
            placeholder: d,
            required: f,
            step: p,
            style: m,
            type: h,
            maxLength: g,
            value: _,
            defaultValue: v,
            autofillEnabled: y,
            onChange: b,
            onBlur: x,
            onInvalid: w,
            onFocus: E,
            onValid: D,
            onClear: O,
            ...k
          } = e,
          A = Ag(_ ?? v, h),
          [j, M, N] = kg(A ?? ``, !0, b),
          ee = na(A),
          P = S(() => {
            (M(``), O && l(() => O()));
          }, [O, M]),
          F = ft(D, w, N, x, E),
          te = S(
            (e) => {
              e.target === e.currentTarget && ee.current?.focus();
            },
            [ee]
          );
        if (h === `hidden`)
          return /* @__PURE__ */ T(Ue.input, { type: `hidden`, name: s, defaultValue: v });
        let ne = y === !1 ? aD : void 0,
          re = !!j,
          ie = !!O && re,
          ae = Ol(sD, Pt, o, h === `text` && cD, h === `textarea` && lD);
        return /* @__PURE__ */ C(Ue.div, {
          ref: t,
          onClick: te,
          style: m,
          className: ae,
          ...k,
          children: [
            h === `textarea`
              ? /* @__PURE__ */ T(Ue.textarea, {
                  ref: ee,
                  ...ne,
                  ...F,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Nt,
                  value: j,
                  maxLength: g,
                })
              : /* @__PURE__ */ T(Ue.input, {
                  ref: ee,
                  ...ne,
                  ...F,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: h,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Ol(Nt, !re && `framer-form-input-empty`),
                  value: j,
                  min: u,
                  max: c,
                  step: p,
                  maxLength: g,
                }),
            ie &&
              /* @__PURE__ */ T(`button`, {
                type: `button`,
                className: uD,
                onClick: P,
                "aria-label": `Clear`,
                children: /* @__PURE__ */ T(jg, {}),
              }),
          ],
        });
      })),
      (sD = `framer-form-text-input`),
      (cD = `framer-form-text-input-type`),
      (lD = `framer-form-textarea-input-type`),
      (uD = `framer-form-text-input-clear`),
      (dD = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (fD = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (pD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (mD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (hD = /* @__PURE__ */ qb(
        oD,
        [
          ...Lt,
          ...Bt,
          ...Rt,
          K(`.${Pt}`, {
            boxShadow: K.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: K.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: K.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: K.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: K.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: K.variable(`--framer-input-corner-shape`),
            background: K.variable(`--framer-input-background`),
            transition: K.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          K(`.${sD} .${Nt}::placeholder`, {
            color: K.variable(`--framer-input-placeholder-color`),
          }),
          K(`.${sD}`, {
            display: `flex`,
            alignItems: `center`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${sD} .${Nt}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          K(`.${sD}.${lD}`, { padding: 0 }),
          K(`.${sD}.${lD} textarea.${Nt}`, {
            width: `100%`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${sD} .${Nt}[type="date"], .${sD} .${Nt}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          K(`.${sD} .${Nt}::-webkit-date-and-time-value`, { textAlign: `start` }),
          K(`.${sD} textarea`, {
            display: `flex`,
            resize: K.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          K(`.${sD} textarea::-webkit-resizer`, { background: `no-repeat ${at(dD)}` }),
          K(`.${sD}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${at(fD)}` }),
          K(`.${sD} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          K(`.${sD} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          K(`.${sD} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          K(`.${sD} .${Nt}::-webkit-datetime-edit`, {
            height: K.variable(`--framer-input-font-line-height`),
          }),
          K(`.${sD} .${Nt}.${Ft}::-webkit-datetime-edit`, {
            color: K.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": K.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          K(`.${sD}.${cD}::before`, {
            content: K.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginRight: `8px`,
            ...Ut,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: K.variable(`--framer-input-icon-mask-image`),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${sD} .${Nt}[type="date"]::before, .${sD} .${Nt}[type="time"]::before`, {
            ...Wt,
            paddingLeft: `10px`,
            maskPosition: `10px center`,
            backgroundPosition: `10px center`,
          }),
          K(`.${sD} .${Nt}[type="date"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, at(pD)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${sD} .${Nt}[type="time"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, at(mD)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${sD} .${Nt}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `16px`,
            height: `100%`,
          }),
          K(`.${sD}:focus-within, .${sD}.${It}`, {
            boxShadow: K.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          K(`.${sD}:focus-within::after, .${sD}.${It}::after`, {
            borderColor: K.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: K.variable(`--framer-input-focused-border-width`, zt),
          }),
          K(`.${uD}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginLeft: `8px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: K.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          K(`.${uD}:hover, .${uD}:focus-visible`, {
            color: K.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (gD = /* @__PURE__ */ j.forwardRef(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            required: c,
            hidden: l,
            defaultValue: u,
            value: d,
            selectOptions: f,
            textAlignment: p,
            style: m,
            onValid: h,
            onChange: g,
            onBlur: _,
            onInvalid: v,
            onFocus: y,
            ...b
          } = e,
          x = Qu(),
          S = Nr(),
          C = !x && d !== void 0,
          w = d ?? ``,
          [E, , D] = kg(w, C, g),
          O = na(C ? w : u),
          k = ft(h, v, D, _, y);
        return l
          ? /* @__PURE__ */ T(Ue.input, { type: `hidden`, name: s, defaultValue: u })
          : /* @__PURE__ */ T(Ue.div, {
              ref: t,
              style: m,
              className: Ol(Pt, _D, Ng(p, S) && vD, o),
              ...b,
              children: /* @__PURE__ */ T(
                Ue.select,
                {
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  ref: O,
                  name: s,
                  autoFocus: a,
                  required: c,
                  className: Nt,
                  defaultValue: u,
                  value: C ? E : void 0,
                  ...k,
                  children: f?.map((e, t) => {
                    switch (e.type) {
                      case `divider`:
                        return /* @__PURE__ */ T(`hr`, {}, t);
                      case `option`:
                        return /* @__PURE__ */ T(
                          `option`,
                          {
                            value: e.value ?? e.title,
                            disabled: e.disabled,
                            children: e.title ?? e.value,
                          },
                          t
                        );
                      default:
                        return U(e);
                    }
                  }),
                },
                x ? Mg(u) : void 0
              ),
            });
      })),
      (_D = `framer-form-select-wrapper`),
      (vD = `framer-form-select-caret-left`),
      (yD = 16),
      (bD = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${yD}" height="${yD}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`),
      (xD = /* @__PURE__ */ qb(
        gD,
        [
          ...Lt,
          ...Bt,
          ...Rt,
          K(`.${_D}`, {
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            background: K.variable(`--framer-input-background`),
            borderTopLeftRadius: K.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: K.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: K.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: K.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: K.variable(`--framer-input-corner-shape`),
            boxShadow: K.variable(`--framer-input-box-shadow`),
            transition: K.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          K(`.${_D} select`, {
            appearance: `none`,
            "-webkit-appearance": `none`,
            padding: K.variable(`--framer-input-padding`),
            background: `transparent`,
          }),
          K(`.${_D}::before`, {
            ...Wt,
            paddingLeft: `10px`,
            backgroundPosition: `10px center`,
            maskPosition: `10px center`,
            backgroundImage: K.variable(`--framer-input-icon-image`),
            maskImage: K.variable(`--framer-input-icon-mask-image`, `url('${bD}')`),
          }),
          K(`.${vD}`, {
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
          }),
          K(`.${vD}::before`, {
            left: 0,
            right: `auto`,
            padding: K.variable(`--framer-input-padding`),
            paddingRight: `10px`,
            backgroundPosition: `right 10px center`,
            maskPosition: `right 10px center`,
          }),
          K(`.${_D} select:required:invalid`, {
            color: K.variable(`--framer-input-invalid-text-color`),
          }),
          K(`.${_D}:focus-within, .${_D}.${It}`, {
            background: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
            boxShadow: K.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
          }),
          K(`.${_D}:focus-within::after, .${_D}.${It}::after`, {
            borderColor: K.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: K.variable(`--framer-input-focused-border-width`, zt),
          }),
          K(`.${_D} select option`, { color: `#000` }),
          K(`.${_D} select option:disabled`, { color: `rgba(0, 0, 0, 0.4)` }),
        ],
        `framer-lib-form-select`
      )),
      (SD = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (CD = { opacity: 0 }),
      (wD = { opacity: 1 }),
      (TD = /* @__PURE__ */ Wg(
        /* @__PURE__ */ j.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: s,
              style: c,
              ...u
            } = e,
            d = { ...c },
            f = o(() => ws(n), [n]),
            [m, h] = p();
          j.useEffect(() => {
            if (!n?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                l(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, f]);
          let g = f ?? m;
          (s && g && ((d[s] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background);
          let _ = Ts(e.as);
          return /* @__PURE__ */ C(_, {
            ...u,
            style: d,
            ref: t,
            draggable: a,
            children: [n && /* @__PURE__ */ T(qo, { image: n, alt: i, draggable: a }), r],
          });
        })
      )),
      (DD = !lr() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (OD =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (kD = `{{ text-placeholder }}`),
      (AD = `rich-text-wrapper`),
      (jD = /* @__PURE__ */ As(
        /* @__PURE__ */ E(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: s,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: g,
              center: _,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: S,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: E = !1,
              environment: D = W.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: N,
              positionStickyLeft: ee,
              __htmlStructure: P,
              __fromCanvasComponent: F = !1,
              _forwardedOverrideId: te,
              _forwardedOverrides: ne,
              _usesDOMRect: re,
              children: ie,
              ...ae
            } = e,
            oe = _s(),
            se = Is(e),
            ce = h(null),
            le = t ?? ce,
            { navigate: ue, getRoute: de } = En(),
            fe = On();
          (Fr(e.preload ?? []), Hs(e, le));
          let pe = x($b),
            me = Qu(),
            I = s,
            L = te ?? n;
          if (L && ne) {
            let e = ne[L];
            typeof e == `string` && (I = e);
          }
          let he = ``;
          if (I) {
            let e = qg(I);
            he = P ? P.replace(kD, e) : `<p>${e}</p>`;
          } else if (i) he = i;
          else if (c) {
            let e = qg(c);
            he = P ? P.replace(kD, e) : `<p>${e}</p>`;
          } else a && (he = a);
          let ge = xd(),
            _e = o(() => (me || !de || !fe ? he : Jg(he, de, fe, ge)), [he, de, fe, ge]);
          if (
            (M(() => {
              let e = le.current;
              if (e === null) return;
              function t(e) {
                let t = hd(e.target, le.current);
                !gr(e) &&
                  ue &&
                  t &&
                  t.getAttribute(`target`) !== `_blank` &&
                  id(ue, t, ge) &&
                  e.preventDefault();
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ue, ge]),
            Zg(l, F, le),
            !b)
          )
            return null;
          let ve = E && D() === W.canvas,
            R = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Xg(w),
              opacity: ve ? 0 : S,
              flexShrink: 0,
            },
            ye = W.hasRestrictions(),
            be = ms(e, oe || 0, !1),
            xe = re && (u === `auto` || d === `auto`),
            Se = !!e.transformTemplate || !be || !ye || F || xe,
            Ce = Se ? (e.transformTemplate ?? Fs(_)) : void 0;
          if (!O) {
            if (be && ye && !xe) {
              let e = Hy.getNumber(C).toFixed(4);
              ((R.transform = `translate(${be.x}px, ${be.y}px) rotate(${e}deg)`),
                (R.width = be.width),
                (R.minWidth = be.width),
                (R.height = be.height));
            } else
              ((R.left = f),
                (R.right = p),
                (R.top = m),
                (R.bottom = g),
                (R.width = u),
                (R.height = d),
                (R.rotate = C));
            k
              ? (!me || pe) &&
                ((R.position = `sticky`),
                (R.willChange = `transform`),
                (R.top = A),
                (R.right = j),
                (R.bottom = N),
                (R.left = ee))
              : me && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`);
          }
          return (
            El(e, R),
            Cl(e, R),
            Object.assign(R, e.style),
            /* @__PURE__ */ T(Ue.div, {
              id: n,
              ref: le,
              ...Gg(bb(ae)),
              ...Ms(Se ? _ : void 0, e.style),
              style: R,
              layoutId: se,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: Ol(v, y, AD),
              transformTemplate: Ce,
              dangerouslySetInnerHTML: { __html: _e },
            })
          );
        })
      )),
      (MD = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (ND =
        /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu),
      (PD = /* @__PURE__ */ E(function (e, t) {
        return /* @__PURE__ */ T(`svg`, { ...e, ref: t, children: e.children });
      })),
      (FD = /* @__PURE__ */ Ue.create(PD)),
      (ID = /* @__PURE__ */ E(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return /* @__PURE__ */ T(FD, {
          ...r,
          ref: i,
          viewBox: t,
          children: /* @__PURE__ */ T(Ue.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (LD = []),
      (RD = `RichTextContainer`),
      (zD = /* @__PURE__ */ E(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: s,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = W.current,
            fonts: p = LD,
            height: m,
            isEditable: g = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: S,
            positionStickyLeft: C,
            positionStickyRight: w,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: ee = `top`,
            visible: P = !0,
            width: F,
            withExternalLayout: te = !1,
            viewBox: ne,
            viewBoxScale: re = 1,
            effect: ie,
            ...ae
          } = e,
          oe = _s(),
          se = f(),
          ce = se === W.canvas,
          le = ce || se === W.export,
          ue = x($b),
          de = Is(e),
          fe = h(null),
          pe = t ?? fe;
        (Hs(e, pe), Zg(p, n, pe));
        let me = o_(ie, pe),
          I = o(() => {
            if (d) return p_(d, j, M, s, void 0, me.getTokenizer());
          }, [d, j, M, s, me]);
        if (!P) return null;
        let L = { opacity: g && ce ? 0 : y },
          he = Xg(ee);
        he !== qt.justifyContent && (L.justifyContent = he);
        let ge = {},
          _e = W.hasRestrictions(),
          ve = ms(e, oe || 0, !1),
          R = a && (F === `auto` || m === `auto`),
          ye = !!e.transformTemplate || !ve || !_e || n || R,
          be = ye ? (e.transformTemplate ?? Fs(u)) : void 0;
        (te ||
          (ve && _e && !R
            ? ((ge.x = ve.x + (B(k?.x) ? k.x : 0)),
              (ge.y = ve.y + (B(k?.y) ? k.y : 0)),
              (ge.left = 0),
              (ge.top = 0),
              (L.rotate = Hy.getNumber(O)),
              (L.width = ve.width),
              (L.minWidth = ve.width),
              (L.height = ve.height))
            : ((L.left = _),
              (L.right = D),
              (L.top = N),
              (L.bottom = l),
              (L.width = F),
              (L.height = m),
              (L.rotate = O)),
          b
            ? (!le || ue) &&
              ((L.position = `sticky`),
              (L.willChange = `transform`),
              (L.top = E),
              (L.right = w),
              (L.bottom = S),
              (L.left = C))
            : ce && (e.positionFixed || e.positionAbsolute) && (L.position = `absolute`)),
          El(e, L),
          Cl(e, L),
          Object.assign(L, A, k, ge),
          de && (ae.layout = `preserve-aspect`));
        let xe = Ts(e.as),
          Se = ae[`data-framer-name`] ?? v,
          Ce = Gg(bb(ae)),
          we = Ms(ye ? u : void 0, k);
        return z(e.viewBox)
          ? e.as === void 0
            ? /* @__PURE__ */ T(ID, {
                ...Ce,
                ...we,
                ref: pe,
                style: L,
                layoutId: de,
                viewBox: ne,
                viewBoxScale: re,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": RD,
                children: I,
              })
            : /* @__PURE__ */ T(xe, {
                ...Ce,
                ...we,
                ref: pe,
                style: L,
                layoutId: de,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": RD,
                children: /* @__PURE__ */ T(ID, {
                  viewBox: ne,
                  viewBoxScale: re,
                  style: { width: `100%`, height: `100%` },
                  children: I,
                }),
              })
          : /* @__PURE__ */ T(xe, {
              ...Ce,
              ...we,
              ref: pe,
              style: L,
              layoutId: de,
              transformTemplate: be,
              "data-framer-name": Se,
              "data-framer-component-type": RD,
              children: I,
            });
      })),
      (BD = /* @__PURE__ */ As(
        /* @__PURE__ */ E(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              V(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return /* @__PURE__ */ T(jD, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return /* @__PURE__ */ T(zD, { ...r, ref: i, children: w(a) ? a : void 0 });
        })
      )),
      (VD = /* @__PURE__ */ ur()),
      (HD = class {
        id;
        svg;
        innerHTML;
        viewBox;
        count;
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (UD = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (WD = class {
        entries = /* @__PURE__ */ new Map();
        vectorSetItems = /* @__PURE__ */ new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(ox(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = v_(e);
            (s &&
              (t && y_(s, n),
              (s.id = n),
              (o = w_(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (e && e !== ``) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          VD && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = UD),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          VD && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new HD(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !VD) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        VD && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${UD}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (GD = /* @__PURE__ */ new WD()),
      (KD = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 16,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (qD = 1e3),
      (JD = `Variable`),
      (YD = `explicitInter`),
      (Te.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = ge(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  }))();
}
export {
  TE as $,
  Ol as A,
  Bv as At,
  D_ as B,
  qw as C,
  qb as Ct,
  O_ as D,
  R_ as Dt,
  T_ as E,
  Vl as Et,
  xS as F,
  rn as Ft,
  cn as G,
  fh as H,
  bS as I,
  q_ as J,
  XD as K,
  Kb as L,
  H_ as M,
  an as Mt,
  SS as N,
  ct as Nt,
  yl as O,
  eD as Ot,
  yS as P,
  Xt as Pt,
  ja as Q,
  k_ as R,
  SE as S,
  Vh as St,
  fC as T,
  qS as Tt,
  hv as U,
  xl as V,
  ga as W,
  sa as X,
  Os as Y,
  TC as Z,
  Iy as _,
  Ma as _t,
  dC as a,
  eC as at,
  IC as b,
  En as bt,
  gw as c,
  gh as ct,
  uS as d,
  Yu as dt,
  wh as et,
  NC as f,
  zi as ft,
  ZC as g,
  Mr as gt,
  nv as h,
  Mo as ht,
  XS as i,
  pd as it,
  Ob as j,
  W as jt,
  Yb as k,
  rD as kt,
  hD as l,
  gu as lt,
  MC as m,
  Qu as mt,
  gd as n,
  B_ as nt,
  Yx as o,
  GD as ot,
  TD as p,
  bh as pt,
  dn as q,
  hu as r,
  z_ as rt,
  ko as s,
  ra as st,
  fd as t,
  xa as tt,
  xD as u,
  On as ut,
  zr as v,
  dh as vt,
  BD as w,
  Hh as wt,
  hS as x,
  __ as xt,
  kp as y,
  Pn as yt,
  A_ as z,
};
//# sourceMappingURL=framer.BMzpwY9X.mjs.map
