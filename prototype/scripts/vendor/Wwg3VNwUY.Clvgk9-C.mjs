import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, S as r } from "./framer.BMzpwY9X.mjs";
import { a as i, n as a } from "./HatdYK9df.BIQePg1a.mjs";
function o(e, t) {
  let n = e?.gIi6ku_om,
    r = e?.FKXzUr7TC,
    i = e?.D2Q95MhRo;
  return {
    breakpoints: [
      { hash: `d173fu`, mediaQuery: `(min-width: 1200px)` },
      { hash: `8fad9e`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1gqoto0`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{FKXzUr7TC}}` : l(r)}`,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-e4eK4`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{gIi6ku_om}}` : l(n)} \xb7 Satin Journal`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `Wwg3VNwUY`, data: a, type: `Collection` },
      select: [
        { collection: `Wwg3VNwUY`, name: `gIi6ku_om`, type: `Identifier` },
        { collection: `Wwg3VNwUY`, name: `FKXzUr7TC`, type: `Identifier` },
        { collection: `Wwg3VNwUY`, name: `D2Q95MhRo`, type: `Identifier` },
      ],
      where: t(e, `Wwg3VNwUY`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `Wwg3VNwUY`, data: a, type: `Collection` },
      select: [
        { collection: `Wwg3VNwUY`, name: `gIi6ku_om`, type: `Identifier` },
        { collection: `Wwg3VNwUY`, name: `FKXzUr7TC`, type: `Identifier` },
        { collection: `Wwg3VNwUY`, name: `D2Q95MhRo`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `Wwg3VNwUY`, name: t, type: `Identifier` });
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
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          fetchAllMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=Wwg3VNwUY.Clvgk9-C.mjs.map
