import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, S as r } from "./framer.BMzpwY9X.mjs";
import { i, t as a } from "./XFv023kLt.CQh78Ink.mjs";
function o(e, t) {
  let n = e?.pQRfUjDAM,
    r = e?.XR4nqGvoR,
    i = e?.Q2aWxIX0m;
  return {
    breakpoints: [
      { hash: `1j3e8yx`, mediaQuery: `(min-width: 1200px)` },
      { hash: `9kv4u4`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `2bh020`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{XR4nqGvoR}}` : l(r)}`,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-3VBiz`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{pQRfUjDAM}}` : l(n)} \xb7 Satin Skin Clinic`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `sWSq2uL0e`, data: a, type: `Collection` },
      select: [
        { collection: `sWSq2uL0e`, name: `pQRfUjDAM`, type: `Identifier` },
        { collection: `sWSq2uL0e`, name: `XR4nqGvoR`, type: `Identifier` },
        { collection: `sWSq2uL0e`, name: `Q2aWxIX0m`, type: `Identifier` },
      ],
      where: t(e, `sWSq2uL0e`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `sWSq2uL0e`, data: a, type: `Collection` },
      select: [
        { collection: `sWSq2uL0e`, name: `pQRfUjDAM`, type: `Identifier` },
        { collection: `sWSq2uL0e`, name: `XR4nqGvoR`, type: `Identifier` },
        { collection: `sWSq2uL0e`, name: `Q2aWxIX0m`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `sWSq2uL0e`, name: t, type: `Identifier` });
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
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          fetchMetadata: {
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
//# sourceMappingURL=sWSq2uL0e.CoyhRuqH.mjs.map
