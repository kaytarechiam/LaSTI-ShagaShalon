import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  D as t,
  F as n,
  L as r,
  P as i,
  R as a,
  S as o,
  T as s,
  _ as c,
  a as l,
  b as u,
  d,
  g as f,
  h as p,
  i as m,
  k as h,
  n as g,
  r as _,
  t as v,
  y as ee,
  z as y,
} from "./react.BF5K0J5z.mjs";
import {
  At as b,
  Dt as x,
  G as S,
  K as C,
  Q as w,
  W as te,
  X as ne,
  Y as re,
  at as ie,
  bt as ae,
  et as oe,
  f as se,
  gt as ce,
  h as le,
  it as T,
  q as E,
  s as D,
  st as O,
  tt as k,
  ut as A,
  v as j,
  y as M,
} from "./framer.BMzpwY9X.mjs";
import { U as N, W as P, i as F, n as I, r as L, t as R } from "./toplevel-deps.TwMXxJp8.mjs";
function z({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `Ld4UAG9tx`:
    case `Z3GcHz7lc`:
    case `dz2H5y2mp`:
    case `YCZRb32bW`:
    case `l2tkxitt1`:
    case `M4gdu8RqF`:
    case `B9c3sKFzT`:
    case `D_sPGOIz7`:
    case `aRl9Y_GiK`:
    case `WFhSQsHF4`:
    case `VN_pDxj1t`:
    case `XiBefzIqK`:
    case `LGKNYxrCR`:
    case `sWSq2uL0e`:
    case `Wwg3VNwUY`:
      return d(R, { ...i, key: `Main`, style: n }, t(!0));
    case `Nk7ATPIe1`:
    case `e6jqohVBv`:
      return d(N, { ...i, key: `NoFooter`, style: n }, t(!0));
    case `esa_fsRal`:
    case `OWYn2uQBu`:
      return d(L, { ...i, key: `NoForm`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function B(e) {
  switch (e) {
    case `augiA20Il`:
    case `Ld4UAG9tx`:
    case `Z3GcHz7lc`:
    case `dz2H5y2mp`:
    case `YCZRb32bW`:
    case `l2tkxitt1`:
    case `M4gdu8RqF`:
    case `B9c3sKFzT`:
    case `D_sPGOIz7`:
    case `aRl9Y_GiK`:
    case `WFhSQsHF4`:
    case `VN_pDxj1t`:
    case `XiBefzIqK`:
    case `LGKNYxrCR`:
    case `sWSq2uL0e`:
    case `Wwg3VNwUY`:
      return [
        { hash: `vhai1f`, mediaQuery: `(min-width: 1200px)` },
        { hash: `1tyxr5w`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `10n5qqs`, mediaQuery: `(max-width: 809.98px)` },
      ];
    case `Nk7ATPIe1`:
    case `e6jqohVBv`:
      return [
        { hash: `ap0ze3`, mediaQuery: `(min-width: 1200px)` },
        { hash: `1rysmuy`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1t0z5zr`, mediaQuery: `(max-width: 809.98px)` },
      ];
    case `esa_fsRal`:
    case `OWYn2uQBu`:
      return [
        { hash: `1fhmgdm`, mediaQuery: `(min-width: 1200px)` },
        { hash: `zmiynf`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1rujbl0`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
function V({ routeId: e, pathVariables: t, localeId: n }) {
  return (
    (Q ??= k({
      routes: G,
      routeId: e,
      pathVariables: t,
      localeId: n,
      locales: K,
      collectionUtils: q,
    })),
    Q
  );
}
async function H({
  routeId: e,
  pathVariables: r,
  canonicalPathVariables: i,
  localeId: a,
  collectionItemId: s,
  contentLocaleId: l,
  shouldResolveInitialRouteContentState: f = !1,
}) {
  (ie({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    T(Y));
  let p = G[e].page.preload(),
    g = G[e];
  if (f && s === void 0 && g.collectionId) {
    let t = await V({ routeId: e, pathVariables: r, localeId: a });
    ((l ??= t.contentLocaleId), (i ??= t.canonicalPathVariables));
  }
  let _ = d(M, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: r,
      canonicalPathVariables: i,
      routes: G,
      collectionUtils: q,
      serverDatabaseClient: J,
      framerSiteId: Y,
      notFoundPage: E(() => import("./ebsjsiQiaqNiM63d7OhoPM5oZliciuvDrGUt1I6xZVw.D7J0NYqq.mjs")),
      isReducedMotion: void 0,
      localeId: a,
      locales: K,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://satinclinic.framer.website`,
      EditorBar:
        y === void 0
          ? void 0
          : (() => {
              if (Z) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return E(async () => {
                  y.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: A, useLocaleInfo: ce, useRouter: ae },
                    react: {
                      createElement: d,
                      Fragment: n,
                      memo: o,
                      useCallback: h,
                      useEffect: ee,
                      useRef: u,
                      useState: c,
                      useLayoutEffect: t,
                    },
                    "react-dom": { createPortal: m },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
            })(),
      adaptLayoutToTextDirection: !0,
      LayoutTemplate: z,
      loadSnippetsModule: new le(
        () => import("./NOJjGZWxwJMHIVT1FJXRA_8lmNhmMsLvl3NOPrqsC00.C7KpNMjj.mjs")
      ),
      initialCollectionItemId: s,
      initialContentLocaleIdOverride: l,
    }),
    v = d(se, { children: _ }),
    b = d(j, {
      children: v,
      value: {
        global: {
          enter: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.22,
              ease: [0.25, 0.1, 0.25, 1],
              mass: 1,
              stagger: 0,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return (await p, b);
}
function U() {
  X && y.__framer_events.push(arguments);
}
async function W(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || y.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    U(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, s, c, l, u;
    if (e)
      ((u = JSON.parse(t.dataset.framerHydrateV2)),
        (r = u.routeId),
        (a = u.localeId),
        (o = u.contentLocaleId),
        (s = u.pathVariables),
        (c = u.canonicalPathVariables),
        (l = u.breakpoints),
        (r = w(G, r)));
    else {
      w(G, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = te(G, decodeURIComponent(location.pathname), !0, K);
        ((r = e.routeId), (a = e.localeId), (s = e.pathVariables));
      }
    }
    let d = H({
      routeId: r,
      localeId: a,
      contentLocaleId: o,
      pathVariables: s,
      canonicalPathVariables: c,
      collectionItemId: e ? u?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    y !== void 0 &&
      (async () => {
        let e = G[r],
          t = K.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n;
        n =
          u?.collectionItemId === void 0
            ? e?.collectionId
              ? await (
                  await V({ routeId: r, pathVariables: s, localeId: a })
                ).collectionItemId
              : null
            : u.collectionItemId;
        let i = Intl.DateTimeFormat().resolvedOptions(),
          o = i.timeZone,
          c = i.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          y.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Y,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: y.location.href,
              hostname: y.location.hostname || null,
              pathname: y.location.pathname || null,
              hash: y.location.hash || null,
              search: y.location.search || null,
              timezone: o,
              locale: c,
            },
            `eager`,
          ]),
          await b({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let f = await d;
    e
      ? (x(`framer-rewrite-breakpoints`, () => {
          (oe(l), y.__framer_onRewriteBreakpoints?.(l));
        }),
        (Z ? (e) => e() : i)(() => {
          (ne(), O(), v(t, f, { onRecoverableError: n }));
        }))
      : (await re(), _(t, { onRecoverableError: n }).render(f));
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (r(),
      C(),
      s(),
      l(),
      g(),
      P(),
      F(),
      I(),
      (G = {
        augiA20Il: {
          elements: {
            AhrOgJ6eC: `intro-step-0`,
            Aqfx_62dU: `twelve-weeks`,
            B43kyrvNm: `week-12`,
            DF2Xmfp3Q: `treat-scroll-step-3b`,
            DMASLHrMY: `treatments-step-1`,
            ES1FVIs_Z: `treatments-step-3`,
            evtFXMHBN: `visit`,
            F6M4iARIk: `treatments-step-4`,
            JLGwBVhuh: `treat-scroll-end`,
            Ko3whgo0U: `faq`,
            kSkml3IM7: `approach-facts`,
            kt2XjCkxI: `prices`,
            LIiSLb_2M: `why-step-2`,
            m8pAz693Y: `intro-step-1`,
            nDncfvrLw: `approach`,
            ORH74ID5S: `treatments-step-2`,
            Pw6neSW41: `practitioners`,
            qI63TvoB3: `intro`,
            sAB5AYzon: `why-step-3`,
            smCFhpYEg: `concerns`,
            stT78wLO6: `approach-fly`,
            SZnWt2t3P: `week-2`,
            tDfKsz6iP: `week-0`,
            TeGEh354O: `treat-hold-1`,
            tKQPj_iQn: `why`,
            uqD3yU2Js: `results`,
            V2Ei0hpcF: `why-stage`,
            VjpCk42_C: `treatments`,
            VOJXiShLR: `journal`,
            vTOT0YzHO: `why-step-1`,
            vXpmUNP5W: `intro-step-2`,
            wd1PvRyZ0: `treat-scroll-step-2b`,
            WfU81nYA0: `intro-step-3`,
            xcc3P2Y5c: `why-step-4`,
            Xl8OsJhy2: `first-visit`,
            yfXQ1yaGK: `week-6`,
          },
          page: E(() => import("./TBPQ77QIs8q7y_5C94qcgIpx6mLq7XJPriLA3_S4f_w.BMpx3TMb.mjs")),
          path: `/`,
        },
        Ld4UAG9tx: {
          elements: { TDPsbMc80: `treatments-list`, XtXaGkeqo: `treatments-hero` },
          page: E(() => import("./DZyXKMry6kIxttmwpBn-hVDPX0Sz9GCi2do13B5mqP8.DnAt3Q7-.mjs")),
          path: `/treatments`,
        },
        Nk7ATPIe1: {
          elements: { cQginEAzB: `thank-you-hero` },
          page: E(() => import("./AXF2Js8zwDOniDQjdyhfyXynmCq0V34UYpIQTZC5Nmc.D3YlGeIK.mjs")),
          path: `/thank-you`,
        },
        Z3GcHz7lc: {
          elements: {
            A_orpib4n: `prices-body`,
            DGg6mVIcS: `prices-injectables`,
            LdjdhqUKc: `prices-hero`,
            LesYITsZk: `prices-skin`,
            YRZBJULwD: `prices-laser-light`,
          },
          page: E(() => import("./TxOBfeIrZYuXAYqXcmBbtfe3FGPA2OFqf0XXdOy7Uok.DDoYhxe3.mjs")),
          path: `/prices`,
        },
        dz2H5y2mp: {
          elements: { SE17nOiur: `practitioners-hero` },
          page: E(() => import("./oCJD6r7EIg9hJILIAGOAh5RXuhdL4Ze1lwuOG0aFE7g.HtB_tnTb.mjs")),
          path: `/practitioners`,
        },
        YCZRb32bW: {
          elements: {
            c5fYw6M9k: `about-hero`,
            cB_zFU6ig: `about-panel-2`,
            EtGInzj8e: `approach-facts`,
            FA2MSDf8V: `about-panel-1`,
            kE2TXf7sL: `about-panel-3`,
            NTAk2vCEL: `about-fly`,
            YF_AM196M: `about-paragraph`,
          },
          page: E(() => import("./d56vaqpD40BSa9NM7WgQRVNfxdx5Lfk5VCgjJJ_UdiI.D6i0DNly.mjs")),
          path: `/about`,
        },
        esa_fsRal: {
          elements: {},
          page: E(() => import("./L03a9DjJTvMD_xFiOFyiOGmkwz6d1zgBc6qPBJEqIgA.Bcge9pMZ.mjs")),
          path: `/concerns`,
        },
        l2tkxitt1: {
          elements: {},
          page: E(() => import("./OlLZLc2UCASDiWXG9FydiECMN2S6K6Bi5zVLuje0SNU.ifp-iQOV.mjs")),
          path: `/journal`,
        },
        M4gdu8RqF: {
          elements: {
            dq_AX6W9J: `first-visit`,
            Nfnyq_N6v: `safety`,
            Nt580vfT5: `prices`,
            TTr1fBY5l: `treatments`,
          },
          page: E(() => import("./ZY5_17pzRVhyCVd3X_lsDqJ7WDfn66ef6F7PzOJ55yI.wTtlh2PU.mjs")),
          path: `/questions`,
        },
        B9c3sKFzT: {
          elements: {},
          page: E(() => import("./fIMFLzW4kDEVCPaS8w6Mj1orRSVXUSUBA-jct_d9U9k.DApgCe7m.mjs")),
          path: `/results`,
        },
        e6jqohVBv: {
          elements: {},
          page: E(() => import("./ebsjsiQiaqNiM63d7OhoPM5oZliciuvDrGUt1I6xZVw.D7J0NYqq.mjs")),
          path: `/404`,
        },
        D_sPGOIz7: {
          elements: {},
          page: E(() => import("./hac4nmmZFcrG1KoGggJtEEAyuxkFRmzbPPJ6o6y3mC4.qb9GOL48.mjs")),
          path: `/membership`,
        },
        OWYn2uQBu: {
          elements: {},
          page: E(() => import("./o69j32lMb6ocb4ct21s6xH5aLK95xmlXgQRCwgD547I.BFI53B5q.mjs")),
          path: `/visit`,
        },
        aRl9Y_GiK: {
          elements: {},
          page: E(() => import("./5xSQ_x1RurfikRNQkgkwmzzJ63c95ELXZKavTKtt_MQ.DQnu0dbO.mjs")),
          path: `/privacy`,
        },
        WFhSQsHF4: {
          elements: {},
          page: E(() => import("./Wfs5-fKBe-v04pDdokTKFAisOZiaeR3u4uA_D7q6CUQ.DH2oIqoe.mjs")),
          path: `/terms`,
        },
        VN_pDxj1t: {
          elements: {
            aqybj3DRV: `ds-house-rules`,
            EAVVB_GZm: `treatments-hero`,
            FMyyRLqMF: `prices`,
            GeOmrfivz: `ds-typography`,
            lKdlAV0td: `ds-shape`,
            mRqPRVpQw: `ds-skills`,
            MW5dZxc3e: `ds-layout`,
            mZ5lyFQ2M: `ds-voice`,
            O4mSytylg: `ds-colour`,
            oeEVwyDFr: `ds-components`,
            pkvhjdhl2: `ds-content-model`,
            SdGLNBBb1: `ds-scaffold`,
            TUNNRcoHa: `ds-imagery`,
            Zd61J9I3Y: `ds-patterns`,
            zRq1qUmDM: `approach-facts`,
            zSN1dA1ij: `ds-motion`,
          },
          page: E(() => import("./0Hb3xx4OMyJHNO11QdIQ6gS4qdaI2HiCq0hEWr_SU1Y.B5Tas6Kv.mjs")),
          path: `/design-system`,
        },
        XiBefzIqK: {
          collectionId: `UtNF5Yexj`,
          elements: {
            AIIdAknn3: `treatment-hero`,
            CtmBJSIJo: `px-questions`,
            cTPk4_uyb: `px-price`,
            HHzmhJmix: `book`,
            KFqrH9Xvq: `how-it-works`,
          },
          page: E(() => import("./wHZl4XuPEqvZQNci0GEnbYsvZk0XbH0fQzwPJnjx7lU.BCEO3X6B.mjs")),
          path: `/treatments/:cm6YBFu8C`,
        },
        LGKNYxrCR: {
          collectionId: `EPFZL52vH`,
          elements: {},
          page: E(() => import("./H2OQOHQu97q7tpoRBpyj2Noq6eUQhOjKzWXDBCRwEMQ.DsD4fYTo.mjs")),
          path: `/practitioners/:FddT6kH0f`,
        },
        sWSq2uL0e: {
          collectionId: `XFv023kLt`,
          elements: {},
          page: E(() => import("./sBZT8MFsjdAwqo6Wc_BCxeK44b6BszODbPQtSsKnP8o.DbBa8CUI.mjs")),
          path: `/concerns/:dvDr64L7X`,
        },
        Wwg3VNwUY: {
          collectionId: `HatdYK9df`,
          elements: {},
          page: E(() => import("./669sFgZ4gTiGYprUN1AHh0LbNuJwHa2Rayw6DRcs7jg.CXBzkzO-.mjs")),
          path: `/journal/:QOdnj0RIR`,
        },
      }),
      (K = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
      (q = {
        EPFZL52vH: async () =>
          (await import("./BR65aYn5VNWUKoFOEaLucTxoB4kVdVKaHGDe2MAZAf4.B2NIwaGn.mjs"))?.utils,
        HatdYK9df: async () =>
          (await import("./HqosZvYzC96WCX74QO7xf3n8YMlCOwg2YxjsnMmzWGY.dsgXAvYH.mjs"))?.utils,
        UtNF5Yexj: async () =>
          (await import("./gm09SRpIxNCIhI-xU7f4UN-FgNN-MVTst2NWJGtkfXc.C-qOq0mn.mjs"))?.utils,
        XFv023kLt: async () =>
          (await import("./Xt5-7HB5UeqC0EuAvcmU1QuCywuSdRFZvhAZcNAJ2jI.D_FR0g6U.mjs"))?.utils,
      }),
      (J = void 0),
      (Y = `75d74a66a30d8166f3333d247b73276191878095c578fa97e60d215fd1767c67`),
      (X = typeof document < `u`),
      (Z = X && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
      X)
    ) {
      ((y.__framer_importFromPackage = (e, t) => () =>
        d(D, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (y.__framer_events = y.__framer_events || []),
        S());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? W(!0, e) : W(!1, e);
    }
  }))();
}
$();
export { B as getLayoutTemplateBreakpoints, H as getPageRoot };
//# sourceMappingURL=script_main.CKyY8O7d.mjs.map
