import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { F as t, T as n, d as r, m as i, o as a, s as o } from "./react.BF5K0J5z.mjs";
import { w as s } from "./motion.CyGOoZcc.mjs";
import {
  At as c,
  K as l,
  O as u,
  S as d,
  g as ee,
  o as f,
  r as te,
  t as ne,
} from "./framer.BMzpwY9X.mjs";
function p(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function m(e) {
  return typeof e == `function` ? e() : e;
}
function re(e, t) {
  return M[e] > M[t];
}
function h(e) {
  let t;
  for (let n of e) {
    let e = m(n);
    if (((t === void 0 || re(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function g(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function _(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function v(e) {
  throw Error(`Unexpected value: ${e}`);
}
function y(e, t, n, r) {
  (_(e >= t, e, `outside lower bound for`, r), _(e <= n, e, `outside upper bound for`, r));
}
function b(e) {
  return typeof e == `string`;
}
function x(e) {
  return Number.isFinite(e);
}
function S(e) {
  return e === null;
}
function C(e) {
  if (S(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      v(e);
  }
}
function ie(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = O.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function ae(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) O.write(e, n);
}
function oe(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = O.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function se(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function ce(e, t) {
  e.writeUint8(+!!t.value);
}
function le(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ue(e) {
  return { type: `color`, value: e.readString() };
}
function de(e, t) {
  e.writeString(t.value);
}
function fe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function pe(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function me(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function he(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ge(e) {
  return { type: `enum`, value: e.readString() };
}
function _e(e, t) {
  e.writeString(t.value);
}
function ve(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ye(e) {
  return { type: `file`, value: e.readString() };
}
function be(e, t) {
  e.writeString(t.value);
}
function xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Se(e) {
  return { type: `link`, value: e.readJson() };
}
function Ce(e, t) {
  e.writeJson(t.value);
}
function we(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Te(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Ee(e, t) {
  e.writeFloat64(t.value);
}
function De(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oe(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = O.read(e);
  }
  return { type: `object`, value: n };
}
function ke(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), O.write(e, r));
}
function Ae(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = O.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function je(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Me(e, t) {
  e.writeJson(t.value);
}
function Ne(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Pe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Fe(e, t) {
  if (x(t.value)) (e.writeInt8(0), e.writeUint32(t.value));
  else if (b(t.value)) (e.writeInt8(1), e.writeString(t.value));
  else throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  let n = e.value,
    r = t.value;
  if ((x(n) && x(r)) || (b(n) && b(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Le(e) {
  return { type: `string`, value: e.readString() };
}
function Re(e, t) {
  e.writeString(t.value);
}
function ze(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Be(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Ve(e, t) {
  e.writeUint32(t.value);
}
function He(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ue(e) {
  let t = Math.floor(rt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function w(e, t) {
  let n = We(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await H(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new at(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function T(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function We(e) {
  _(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function E(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = O.read(e);
  }
  return t;
}
function* Ge(e) {
  for (let t of e) yield* t.prioritySources;
}
var D,
  O,
  k,
  A,
  Ke,
  j,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  M,
  N,
  P,
  $e,
  et,
  F,
  I,
  L,
  R,
  z,
  tt,
  B,
  nt,
  V,
  rt,
  it,
  H,
  at,
  U,
  ot,
  st;
function ct() {
  return (ct = e(() => {
    (l(),
      (k = Object.create),
      (A = Object.defineProperty),
      (Ke = Object.getOwnPropertyDescriptor),
      (j = Object.getOwnPropertyNames),
      (qe = Object.getPrototypeOf),
      (Je = Object.prototype.hasOwnProperty),
      (Ye = (e, t) =>
        function () {
          try {
            return (t || (0, e[j(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (Xe = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of j(t))
            Je.call(e, i) ||
              i === n ||
              A(e, i, { get: () => t[i], enumerable: !(r = Ke(t, i)) || r.enumerable });
        return e;
      }),
      (Ze = (e, t, n) => (
        (n = e == null ? {} : k(qe(e))),
        Xe(!t && e && e.__esModule ? n : A(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (Qe = Ze(
        Ye({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = /* @__PURE__ */ (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (e && !1 === e.batch) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (e && !1 === e.cache) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return /* @__PURE__ */ new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) o(t);
                              else {
                                try {
                                  n = e._batchLoadFn(t.keys);
                                } catch (n) {
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                }
                                if (!n || typeof n.then != `function`)
                                  return a(
                                    e,
                                    t,
                                    TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                        String(n) +
                                        `.`
                                    )
                                  );
                                n.then(function (e) {
                                  if (!s(e))
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                        String(e) +
                                        `.`
                                    );
                                  if (e.length !== t.keys.length)
                                    throw TypeError(
                                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                        String(t.keys) +
                                        `

Values:
` +
                                        String(e)
                                    );
                                  o(t);
                                  for (var n = 0; n < t.callbacks.length; n++) {
                                    var r = e[n];
                                    r instanceof Error
                                      ? t.callbacks[n].reject(r)
                                      : t.callbacks[n].resolve(r);
                                  }
                                }).catch(function (n) {
                                  a(e, t, n);
                                });
                              }
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (M = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (N = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (P =
        ((D = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = N.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = N.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = N.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = N.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = N.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = N.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = N.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = N.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = N.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = N.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (p(this, `bytes`, void 0),
              p(this, `offset`, 0),
              p(this, `view`, void 0),
              (this.bytes = e),
              (this.view = g(this.bytes)));
          }
        }),
        p(D, `textDecoder`, new TextDecoder()),
        D)),
      ($e = 1024),
      (et = 1.5),
      (F = (e) => 2 ** e - 1),
      (I = (e) => -(2 ** (e - 1))),
      (L = (e) => 2 ** (e - 1) - 1),
      (R = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: I(8),
        Int16: I(16),
        Int32: I(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (z = {
        Uint8: F(8),
        Uint16: F(16),
        Uint32: F(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: L(8),
        Int16: L(16),
        Int32: L(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (tt = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * et) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = g(n)));
        }
        writeUint8(e) {
          y(e, R.Uint8, z.Uint8, `Uint8`);
          let t = N.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          y(e, R.Uint16, z.Uint16, `Uint16`);
          let t = N.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          y(e, R.Uint32, z.Uint32, `Uint32`);
          let t = N.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          y(e, R.Uint64, z.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          y(e, R.BigUint64, z.BigUint64, `BigUint64`);
          let t = N.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          y(e, R.Int8, z.Int8, `Int8`);
          let t = N.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          y(e, R.Int16, z.Int16, `Int16`);
          let t = N.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          y(e, R.Int32, z.Int32, `Int32`);
          let t = N.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          y(e, R.Int64, z.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          y(e, R.BigInt64, z.BigInt64, `BigInt64`);
          let t = N.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = N.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = N.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (p(this, `offset`, 0),
            p(this, `bytes`, new Uint8Array($e)),
            p(this, `view`, g(this.bytes)),
            p(this, `encoder`, new TextEncoder()),
            p(this, `encodedStrings`, /* @__PURE__ */ new Map()));
        }
      }),
      (B = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            _(x(n), `Invalid chunkId`),
            _(x(r), `Invalid offset`),
            _(x(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (_(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (p(this, `chunkId`, void 0),
            p(this, `offset`, void 0),
            p(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ie(e);
            case 2:
              return se(e);
            case 3:
              return ue(e);
            case 4:
              return pe(e);
            case 5:
              return ge(e);
            case 6:
              return ye(e);
            case 7:
              return Se(e);
            case 8:
              return Te(e);
            case 9:
              return Oe(e);
            case 10:
              return je(e);
            case 11:
              return Pe(e);
            case 12:
              return Le(e);
            case 13:
              return Be(e);
            default:
              v(t);
          }
        }),
          (e.write = function (e, t) {
            let n = C(t);
            if ((e.writeUint8(n), !S(t)))
              switch (t.type) {
                case `array`:
                  return ae(e, t);
                case `boolean`:
                  return ce(e, t);
                case `color`:
                  return de(e, t);
                case `date`:
                  return me(e, t);
                case `enum`:
                  return _e(e, t);
                case `file`:
                  return be(e, t);
                case `link`:
                  return Ce(e, t);
                case `number`:
                  return Ee(e, t);
                case `object`:
                  return ke(e, t);
                case `responsiveimage`:
                  return Me(e, t);
                case `richtext`:
                  return Fe(e, t);
                case `vectorsetitem`:
                  return Ve(e, t);
                case `string`:
                  return Re(e, t);
                default:
                  v(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = C(e),
              i = C(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (S(e) || S(t)) return 0;
            switch (e.type) {
              case `array`:
                return (_(t.type === `array`), oe(e, t, n));
              case `boolean`:
                return (_(t.type === `boolean`), le(e, t));
              case `color`:
                return (_(t.type === `color`), fe(e, t));
              case `date`:
                return (_(t.type === `date`), he(e, t));
              case `enum`:
                return (_(t.type === `enum`), ve(e, t));
              case `file`:
                return (_(t.type === `file`), xe(e, t));
              case `link`:
                return (_(t.type === `link`), we(e, t));
              case `number`:
                return (_(t.type === `number`), De(e, t));
              case `object`:
                return (_(t.type === `object`), Ae(e, t, n));
              case `responsiveimage`:
                return (_(t.type === `responsiveimage`), Ne(e, t));
              case `richtext`:
                return (_(t.type === `richtext`), Ie(e, t));
              case `vectorsetitem`:
                return (_(t.type === `vectorsetitem`), He(e, t));
              case `string`:
                return (_(t.type === `string`), ze(e, t, n));
              default:
                v(e);
            }
          }));
      })((O ||= {})),
      (nt = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = O.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static async deserialize(t, n) {
          let r = new P(t),
            i = r.readJson(),
            a = r.readUint8(),
            o = [];
          for (let e = 0; e < a; e++) {
            let e = r.readString();
            o.push(e);
          }
          let s = new e(o, { collation: i }),
            c = r.readUint32(),
            l = () => {
              let e = [];
              for (let t = 0; t < a; t++) {
                let t = O.read(r);
                e.push(t);
              }
              let t = B.read(r);
              s.entries.push({ values: e, pointer: t });
            };
          for (let e = 0; e < c; e++) {
            let e = n?.();
            (e && (await e), l());
          }
          return s;
        }
        serialize() {
          let e = new tt();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) O.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          (p(this, `fieldNames`, void 0),
            p(this, `options`, void 0),
            p(this, `entries`, []),
            (this.fieldNames = e),
            (this.options = t));
        }
      }),
      (V = 3),
      (rt = 250),
      (it = [408, 429, 500, 502, 503, 504]),
      (H = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!it.includes(r.status) || ++n > V) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > V) throw e;
          }
          await Ue(n);
        }
      }),
      (at = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((_(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = T(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((_(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = T(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          p(this, `chunks`, []);
        }
      }),
      (U = class {
        async loadModel() {
          let [e] = await w(this.options.url, [this.options.range]);
          return (
            _(e, `Failed to load model`),
            nt.deserialize(e, () => {
              let e = h(this.modelPrioritySources);
              return e ? c({ batch: !0, priority: e }) : void 0;
            })
          );
        }
        async getModel(e) {
          return (
            this.model ||
              (e && this.modelPrioritySources.add(e),
              (this.modelPromise ??= this.loadModel().finally(() => {
                this.modelPrioritySources.clear();
              })),
              (this.model ??= await this.modelPromise)),
            this.model
          );
        }
        async lookupItems(e, t) {
          _(e.length === this.fields.length, `Invalid query length`);
          let n = [(await this.getModel(t)).entries];
          for (let [r, i] of e.entries()) {
            let e = [];
            for (let a of n) {
              let n,
                o = t ? c({ batch: !0, priority: m(t) }) : void 0;
              switch ((o && (await o), i.type)) {
                case `All`:
                  n = [a];
                  break;
                case `Equals`:
                  n = this.queryEquals(a, i, r);
                  break;
                case `NotEquals`:
                  n = this.queryNotEquals(a, i, r);
                  break;
                case `LessThan`:
                  n = this.queryLessThan(a, i, r);
                  break;
                case `GreaterThan`:
                  n = this.queryGreaterThan(a, i, r);
                  break;
                case `Contains`:
                  n = await this.queryContains(a, i, r, t);
                  break;
                case `StartsWith`:
                  n = await this.queryStartsWith(a, i, r, t);
                  break;
                case `EndsWith`:
                  n = await this.queryEndsWith(a, i, r, t);
                  break;
                default:
                  v(i);
              }
              e.push(...n);
            }
            n = e;
          }
          let r = [];
          for (let e of n)
            for (let n of e) {
              let e = t ? c({ batch: !0, priority: m(t) }) : void 0;
              e && (await e);
              let i = {};
              for (let e = 0; e < this.options.fieldNames.length; e++) {
                let t = this.options.fieldNames[e];
                i[t] = n.values[e];
              }
              r.push({ pointer: n.pointer.toString(), data: i });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n, r) {
          return this.findItems(e, n, r, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > O.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            O.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        async findItems(e, t, n, r) {
          let i = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let s = n ? c({ batch: !0, priority: m(n) }) : void 0;
            s && (await s);
            let l = e[o].values[t];
            if (!r(l)) {
              if (a < o) {
                let t = e.slice(a, o);
                i.push(t);
              }
              a = o + 1;
            }
          }
          if (a < e.length) {
            let t = e.slice(a);
            i.push(t);
          }
          return i;
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `schema`, void 0),
            p(this, `fields`, void 0),
            p(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            p(this, `modelPromise`, void 0),
            p(this, `model`, void 0),
            p(this, `modelPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `collation`, void 0),
            (this.options = e));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (_(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (ot = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = H(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new P(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = h(this.scanPrioritySources),
                        t = e ? c({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = E(n),
                        o = n.getOffset() - i,
                        s = new B(this.id, i, o).toString(),
                        l = { pointer: s, data: a };
                      (this.itemLoader.prime(
                        { pointer: s, prioritySources: /* @__PURE__ */ new Set() },
                        l
                      ),
                        r.push(l));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = /* @__PURE__ */ new Set()), this.itemPrioritySources.set(e, n)),
            t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (p(this, `id`, void 0),
            p(this, `url`, void 0),
            p(this, `itemsPromise`, void 0),
            p(this, `isScanning`, !1),
            p(this, `scanPrioritySources`, /* @__PURE__ */ new Set()),
            p(this, `itemPrioritySources`, /* @__PURE__ */ new Map()),
            p(
              this,
              `itemLoader`,
              new Qe.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = B.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await w(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = h(Ge(e)),
                      a = i ? c({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    _(o, `Missing range bytes`);
                    let s = E(new P(o)),
                      l = e[t]?.pointer;
                    (_(l, `Missing pointer`), r.push({ pointer: l, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (st = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = B.fromString(e),
                r = this.chunks[n.chunkId];
              return (_(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = B.fromString(e.pointer),
            r = B.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return O.compare(e, t, n);
        }
        constructor(e) {
          (p(this, `options`, void 0),
            p(this, `id`, void 0),
            p(this, `schema`, void 0),
            p(this, `indexes`, void 0),
            p(this, `resolveRichText`, void 0),
            p(this, `resolveVectorSetItem`, void 0),
            p(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new ot(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  }))();
}
function lt(e) {
  return typeof e == `object` && !!e && !(/*#__PURE__*/ i(e)) && pt in e;
}
function ut(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function dt(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? (e[r] = n(i, t)) : W(t, i, n);
  }
}
function W(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : W(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || dt(e, t, n);
  }
}
function ft(e) {
  let n = /* @__PURE__ */ new Map();
  return (i) => {
    let o = n.get(i);
    if (o) return o;
    let c = (function n(i) {
      switch (i[0]) {
        case 1: {
          let [, ...e] = i,
            a = e.map(n);
          return /*#__PURE__*/ r(t, void 0, ...a);
        }
        case 2: {
          let [, e, ...t] = i,
            a = t.map(n);
          return /*#__PURE__*/ r(ee, e, ...a);
        }
        case 3: {
          let [, t, r, o] = i;
          dt(r, o, (t, r) => {
            if (t === 1) return r && n(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (lt(i) && i.preload(), i) : r;
          });
          let s = e[t];
          return (
            ut(s, `Module not found`),
            lt(s) && s.preload(),
            /*#__PURE__*/ a(te, {
              componentIdentifier: t,
              children: (e) => /*#__PURE__*/ a(ne, { component: s, props: { ...e, ...r } }),
            })
          );
        }
        case 4: {
          let [, e, t, ...a] = i,
            o = a.map(n);
          return r(e === `a` ? s.a : e, t, ...o);
        }
        case 5: {
          let [, e] = i;
          return e;
        }
      }
    })(JSON.parse(i));
    return (n.set(i, c), c);
  };
}
var G, K, pt, mt, ht;
function gt() {
  return (gt = e(() => {
    (o(),
      l(),
      n(),
      (pt = `preload`),
      (mt =
        (((G = mt || {})[(G.Fragment = 1)] = `Fragment`),
        (G[(G.Link = 2)] = `Link`),
        (G[(G.Module = 3)] = `Module`),
        (G[(G.Tag = 4)] = `Tag`),
        (G[(G.Text = 5)] = `Text`),
        G)),
      (ht =
        (((K = ht || {})[(K.RichText = 1)] = `RichText`),
        (K[(K.VectorSetItem = 2)] = `VectorSetItem`),
        K)));
  }))();
}
var q,
  J,
  _t,
  Y,
  vt,
  yt,
  bt,
  xt,
  X,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
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
  Z,
  Q,
  $,
  nn,
  rn,
  an;
function on() {
  return (on = e(() => {
    (l(),
      ct(),
      gt(),
      (q = {
        akOXKleNn: { isNullable: !0, type: f.String },
        ARW9j5cpw: { isNullable: !0, type: f.String },
        B13uq1qHI: { isNullable: !0, type: f.RichText },
        bF_c0_r0S: { isNullable: !0, type: f.ResponsiveImage },
        cKGda1Az4: { isNullable: !0, type: f.String },
        CLT246ezt: { isNullable: !0, type: f.Enum },
        createdAt: { isNullable: !0, type: f.Date },
        CzJvzb6YY: { isNullable: !0, type: f.String },
        D2Q95MhRo: { isNullable: !0, type: f.ResponsiveImage },
        ETCpT5xoW: { isNullable: !0, type: f.String },
        fEvSkqVwy: { isNullable: !0, type: f.String },
        FKXzUr7TC: { isNullable: !0, type: f.String },
        gIi6ku_om: { isNullable: !0, type: f.String },
        GZhaIAoQp: { isNullable: !0, type: f.String },
        HHQlYDB0G: { isNullable: !0, type: f.ResponsiveImage },
        id: { isNullable: !1, type: f.String },
        nextItemId: { isNullable: !0, type: f.String },
        o4kXyMddq: { isNullable: !0, type: f.String },
        o9hD7y096: { isNullable: !0, type: f.String },
        ol0iIe2AG: { isNullable: !0, type: f.Date },
        previousItemId: { isNullable: !0, type: f.String },
        PsleXgERb: { isNullable: !0, type: f.Boolean },
        q8S8rlM14: { isNullable: !0, type: f.String },
        Qa51MTbTL: { isNullable: !0, type: f.String },
        QOdnj0RIR: { isNullable: !0, type: f.String },
        qST4zhJ0L: { isNullable: !0, type: f.String },
        rwwqMsYxM: { isNullable: !0, type: f.ResponsiveImage },
        SaAKj5wWJ: { isNullable: !0, type: f.String },
        sazvvb5T9: { isNullable: !0, type: f.String },
        seCUFDyaf: { isNullable: !0, type: f.RichText },
        ukyQ8GwtM: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        UvNpfIviN: { isNullable: !0, type: f.String },
        xSX7LtX4U: { isNullable: !0, type: f.String },
        ZeP1C3RwB: { isNullable: !0, type: f.String },
        znSuGYIxa: { isNullable: !0, type: f.RichText },
      }),
      (J = new URL(
        `./HatdYK9df-indexes-default-0.framercms`,
        `https://framerusercontent.com/modules/s18aXGmrBEvCcC8Q6ChB/rEdZAXPFb3HOwqjZS5Pf/HatdYK9df.js`
      ).href.replace(`/modules/`, `/cms/`)),
      (_t = [`id`]),
      (Y = { type: 1 }),
      (vt = [`previousItemId`]),
      (yt = [`nextItemId`]),
      (bt = [`id`, `QOdnj0RIR`]),
      (xt = [`QOdnj0RIR`, `id`]),
      (X = { type: 0 }),
      (St = [`gIi6ku_om`]),
      (Ct = [`QOdnj0RIR`]),
      (wt = [`FKXzUr7TC`]),
      (Tt = [`CLT246ezt`]),
      (Et = [`CzJvzb6YY`]),
      (Dt = [`D2Q95MhRo`]),
      (Ot = [`ol0iIe2AG`]),
      (kt = [`B13uq1qHI`]),
      (At = [`o9hD7y096`]),
      (jt = [`fEvSkqVwy`]),
      (Mt = [`PsleXgERb`]),
      (Nt = [`Qa51MTbTL`]),
      (Pt = [`rwwqMsYxM`]),
      (Ft = [`SaAKj5wWJ`]),
      (It = [`sazvvb5T9`]),
      (Lt = [`UvNpfIviN`]),
      (Rt = [`xSX7LtX4U`]),
      (zt = [`ETCpT5xoW`]),
      (Bt = [`q8S8rlM14`]),
      (Vt = [`o4kXyMddq`]),
      (Ht = [`ARW9j5cpw`]),
      (Ut = [`ukyQ8GwtM`]),
      (Wt = [`akOXKleNn`]),
      (Gt = [`ZeP1C3RwB`]),
      (Kt = [`HHQlYDB0G`]),
      (qt = [`bF_c0_r0S`]),
      (Jt = [`seCUFDyaf`]),
      (Yt = [`znSuGYIxa`]),
      (Xt = [`qST4zhJ0L`]),
      (Zt = [`cKGda1Az4`]),
      (Qt = [`GZhaIAoQp`]),
      ($t = []),
      (en = (e) => {
        let t = $t[e];
        if (t) return t().then((e) => e.default);
      }),
      (tn = ft({})),
      (Z = new d()),
      (Q = {
        collectionByLocaleId: {
          default: new st({
            chunks: [
              new URL(
                `./HatdYK9df-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/s18aXGmrBEvCcC8Q6ChB/rEdZAXPFb3HOwqjZS5Pf/HatdYK9df.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `0e620738-9445-4bdb-bb1b-429685f2ea61default`,
            indexes: [
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: _t,
                range: { from: 0, to: 265 },
                url: J,
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: vt,
                range: { from: 265, to: 529 },
                url: J,
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: yt,
                range: { from: 529, to: 789 },
                url: J,
              }),
              new U({
                collation: Y,
                collectionSchema: q,
                fieldNames: bt,
                range: { from: 789, to: 1352 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: xt,
                range: { from: 1352, to: 1915 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: St,
                range: { from: 1915, to: 2421 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Ct,
                range: { from: 2421, to: 2838 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: wt,
                range: { from: 2838, to: 4003 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Tt,
                range: { from: 4003, to: 4275 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Et,
                range: { from: 4275, to: 4557 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Dt,
                range: { from: 4557, to: 10111 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Ot,
                range: { from: 10111, to: 10333 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: kt,
                range: { from: 10333, to: 16264 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: At,
                range: { from: 16264, to: 16536 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: jt,
                range: { from: 16536, to: 16808 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Mt,
                range: { from: 16808, to: 16960 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Nt,
                range: { from: 16960, to: 17274 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Pt,
                range: { from: 17274, to: 21404 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Ft,
                range: { from: 21404, to: 21702 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: It,
                range: { from: 21702, to: 21981 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Lt,
                range: { from: 21981, to: 23408 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Rt,
                range: { from: 23408, to: 24088 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: zt,
                range: { from: 24088, to: 24771 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Bt,
                range: { from: 24771, to: 25460 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Vt,
                range: { from: 25460, to: 26236 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Ht,
                range: { from: 26236, to: 27025 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Ut,
                range: { from: 27025, to: 28217 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Wt,
                range: { from: 28217, to: 28739 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Gt,
                range: { from: 28739, to: 30069 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Kt,
                range: { from: 30069, to: 35445 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: qt,
                range: { from: 35445, to: 41205 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Jt,
                range: { from: 41205, to: 44889 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Yt,
                range: { from: 44889, to: 47534 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Xt,
                range: { from: 47534, to: 47806 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Zt,
                range: { from: 47806, to: 48078 },
                url: J,
              }),
              new U({
                collation: X,
                collectionSchema: q,
                fieldNames: Qt,
                range: { from: 48078, to: 48350 },
                url: J,
              }),
            ],
            resolveRichText: tn,
            resolveVectorSetItem: en,
            schema: q,
          }),
        },
        displayName: `Journal`,
        id: `0e620738-9445-4bdb-bb1b-429685f2ea61`,
      }),
      u(Q, {
        gIi6ku_om: { defaultValue: ``, title: `Title`, type: f.String },
        QOdnj0RIR: { preventLocalization: !1, title: `Slug`, type: f.String },
        FKXzUr7TC: { defaultValue: ``, displayTextArea: !0, title: `Excerpt`, type: f.String },
        CLT246ezt: {
          defaultValue: `SiT9WqERN`,
          options: [`SiT9WqERN`, `m7OAlALbB`, `UObTQ4QI6`, `UUUfRWhax`, `H9RzVYAiW`],
          optionTitles: [`Skin care`, `Injectables`, `Our method`, `Aftercare`, `Comparison`],
          title: `Category`,
          type: f.Enum,
        },
        CzJvzb6YY: { defaultValue: ``, title: `Read Time`, type: f.String },
        D2Q95MhRo: { title: `Cover`, type: f.ResponsiveImage },
        ol0iIe2AG: { title: `Date`, type: f.Date },
        B13uq1qHI: {
          defaultValue: `<p dir="auto"><br class="trailing-break"></p>`,
          title: `Body`,
          type: f.RichText,
        },
        o9hD7y096: {
          dataIdentifier: `local-module:collection/EPFZL52vH:default`,
          title: `Author`,
          type: f.CollectionReference,
        },
        fEvSkqVwy: {
          dataIdentifier: `local-module:collection/EPFZL52vH:default`,
          title: `Reviewed By`,
          type: f.CollectionReference,
        },
        PsleXgERb: { defaultValue: !1, title: `Featured`, type: f.Boolean },
        Qa51MTbTL: { defaultValue: ``, title: `Author Name`, type: f.String },
        rwwqMsYxM: { title: `Author Photo`, type: f.ResponsiveImage },
        SaAKj5wWJ: { defaultValue: ``, title: `Date Label`, type: f.String },
        sazvvb5T9: { defaultValue: ``, title: `Category Name`, type: f.String },
        UvNpfIviN: { defaultValue: ``, title: `Lead`, type: f.String },
        xSX7LtX4U: { defaultValue: ``, title: `In Short 1`, type: f.String },
        ETCpT5xoW: { defaultValue: ``, title: `In Short 2`, type: f.String },
        q8S8rlM14: { defaultValue: ``, title: `In Short 3`, type: f.String },
        o4kXyMddq: { defaultValue: ``, title: `Caption 1`, type: f.String },
        ARW9j5cpw: { defaultValue: ``, title: `Caption 2`, type: f.String },
        ukyQ8GwtM: { defaultValue: ``, title: `Quote`, type: f.String },
        akOXKleNn: { defaultValue: ``, title: `Quote By`, type: f.String },
        ZeP1C3RwB: { defaultValue: ``, title: `Come In`, type: f.String },
        HHQlYDB0G: { title: `Image 1`, type: f.ResponsiveImage },
        bF_c0_r0S: { title: `Image 2`, type: f.ResponsiveImage },
        seCUFDyaf: {
          defaultValue: `<p dir="auto"><br class="trailing-break"></p>`,
          title: `Body 2`,
          type: f.RichText,
        },
        znSuGYIxa: {
          defaultValue: `<p dir="auto"><br class="trailing-break"></p>`,
          title: `Body 3`,
          type: f.RichText,
        },
        qST4zhJ0L: {
          dataIdentifier: `local-module:collection/HatdYK9df:default`,
          title: `Previous Article`,
          type: f.CollectionReference,
        },
        cKGda1Az4: {
          dataIdentifier: `local-module:collection/HatdYK9df:default`,
          title: `Next Article`,
          type: f.CollectionReference,
        },
        GZhaIAoQp: {
          dataIdentifier: `local-module:collection/UtNF5Yexj:default`,
          title: `Related Treatment`,
          type: f.CollectionReference,
        },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/HatdYK9df:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/HatdYK9df:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      ($ = (e, t) => {
        switch ((t?.fallback, e)) {
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
            return ``;
        }
      }),
      (nn = { CLT246ezt: $ }),
      (rn = {
        async getSlugByRecordId(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `QOdnj0RIR`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.QOdnj0RIR;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `QOdnj0RIR`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
        getContentLocaleIdByRecordId(e, t) {},
      }),
      (an = {
        exports: {
          CLT246eztToDisplayName: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerCollectionId: `HatdYK9df`,
              framerSlug: `QOdnj0RIR`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerData: `true`,
              framerEnumToDisplayNameUtils: `2`,
              framerColorSyntax: `false`,
              framerRecordIdKey: `id`,
              framerCollectionUtils: `1`,
            },
          },
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { on as a, nn as i, Q as n, rn as o, an as r, $ as t };
//# sourceMappingURL=HatdYK9df.BIQePg1a.mjs.map
