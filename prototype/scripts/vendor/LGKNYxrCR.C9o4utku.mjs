import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { H as t, K as n, S as r } from "./framer.BMzpwY9X.mjs";
import { i, t as a } from "./EPFZL52vH.BhnkeW8G.mjs";
function o(e, t) {
  let n = e?.S8Sn8hvny,
    r = e?.zsc47JL2U,
    i = e?.VJYrOQxim;
  return {
    breakpoints: [
      { hash: `w34tdm`, mediaQuery: `(min-width: 1200px)` },
      { hash: `8emdmw`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1th3o0g`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{zsc47JL2U}}` : l(r)}`,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-rGW7Z`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{S8Sn8hvny}}` : l(n)} \xb7 Satin Skin Clinic`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `LGKNYxrCR`, data: a, type: `Collection` },
      select: [
        { collection: `LGKNYxrCR`, name: `S8Sn8hvny`, type: `Identifier` },
        { collection: `LGKNYxrCR`, name: `zsc47JL2U`, type: `Identifier` },
        { collection: `LGKNYxrCR`, name: `VJYrOQxim`, type: `Identifier` },
      ],
      where: t(e, `LGKNYxrCR`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `LGKNYxrCR`, data: a, type: `Collection` },
      select: [
        { collection: `LGKNYxrCR`, name: `S8Sn8hvny`, type: `Identifier` },
        { collection: `LGKNYxrCR`, name: `zsc47JL2U`, type: `Identifier` },
        { collection: `LGKNYxrCR`, name: `VJYrOQxim`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `LGKNYxrCR`, name: t, type: `Identifier` });
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
          fetchMetadata: {
            type: `function`,
            isAsync: !0,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=LGKNYxrCR.C9o4utku.mjs.map
