import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, S as r } from "./framer.BMzpwY9X.mjs";
import { a as i, r as a } from "./UtNF5Yexj.CnX57ltF.mjs";
function o(e, t) {
  let n = e?.C0EPUrxhE,
    r = e?.Vf0m5_9Vp,
    i = e?.fDotY0Hnn;
  return {
    breakpoints: [
      { hash: `11t16n8`, mediaQuery: `(min-width: 1200px)` },
      { hash: `18800h9`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `d6l39v`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{Vf0m5_9Vp}}` : l(r)}`,
    elements: {
      AIIdAknn3: `treatment-hero`,
      CtmBJSIJo: `px-questions`,
      cTPk4_uyb: `px-price`,
      HHzmhJmix: `book`,
      KFqrH9Xvq: `how-it-works`,
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-oW5K8`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{C0EPUrxhE}}` : l(n)} \xb7 Satin Skin Clinic`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `XiBefzIqK`, data: a, type: `Collection` },
      select: [
        { collection: `XiBefzIqK`, name: `C0EPUrxhE`, type: `Identifier` },
        { collection: `XiBefzIqK`, name: `Vf0m5_9Vp`, type: `Identifier` },
        { collection: `XiBefzIqK`, name: `fDotY0Hnn`, type: `Identifier` },
      ],
      where: t(e, `XiBefzIqK`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `XiBefzIqK`, data: a, type: `Collection` },
      select: [
        { collection: `XiBefzIqK`, name: `C0EPUrxhE`, type: `Identifier` },
        { collection: `XiBefzIqK`, name: `Vf0m5_9Vp`, type: `Identifier` },
        { collection: `XiBefzIqK`, name: `fDotY0Hnn`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `XiBefzIqK`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d, f;
function p() {
  return (p = e(() => {
    (n(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (d = 1),
      (f = {
        exports: {
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=XiBefzIqK.BM7kxahW.mjs.map
