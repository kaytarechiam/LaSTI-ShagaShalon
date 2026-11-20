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
  return typeof e == `object` && !!e && !(/*#__PURE__*/ i(e)) && mt in e;
}
function ut(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function dt(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? (e[r] = n(i, t)) : ft(t, i, n);
  }
}
function ft(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : ft(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || dt(e, t, n);
  }
}
function pt(e) {
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
var W, G, mt, ht, gt;
function _t() {
  return (_t = e(() => {
    (o(),
      l(),
      n(),
      (mt = `preload`),
      (ht =
        (((W = ht || {})[(W.Fragment = 1)] = `Fragment`),
        (W[(W.Link = 2)] = `Link`),
        (W[(W.Module = 3)] = `Module`),
        (W[(W.Tag = 4)] = `Tag`),
        (W[(W.Text = 5)] = `Text`),
        W)),
      (gt =
        (((G = gt || {})[(G.RichText = 1)] = `RichText`),
        (G[(G.VectorSetItem = 2)] = `VectorSetItem`),
        G)));
  }))();
}
var K,
  q,
  vt,
  J,
  yt,
  bt,
  xt,
  St,
  Y,
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
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  X,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Z,
  Q,
  $,
  Cn,
  wn,
  Tn;
function En() {
  return (En = e(() => {
    (l(),
      ct(),
      _t(),
      (K = {
        amR6758ME: { isNullable: !0, type: f.String },
        B3kFb26Nl: {
          definition: { isNullable: !0, type: f.String },
          isNullable: !0,
          type: f.Array,
        },
        C0EPUrxhE: { isNullable: !0, type: f.String },
        cc_kzXNKB: { isNullable: !0, type: f.String },
        cJ99TYIhv: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              IZQsek9Yv: { isNullable: !0, type: f.String },
              Tt_ojq1yC: { isNullable: !0, type: f.VectorSetItem },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        cm6YBFu8C: { isNullable: !0, type: f.String },
        createdAt: { isNullable: !0, type: f.Date },
        CwdTsXH6s: { isNullable: !0, type: f.ResponsiveImage },
        d1t_KwBI5: { isNullable: !0, type: f.String },
        DFfOkZmAe: { isNullable: !0, type: f.String },
        dVMpSZBVW: { isNullable: !0, type: f.String },
        e14HaIokF: { isNullable: !0, type: f.String },
        E8HIr9ADV: { isNullable: !0, type: f.String },
        FAzwFG6Kt: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              KxIPa5vzH: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        fDotY0Hnn: { isNullable: !0, type: f.ResponsiveImage },
        FkEUFpxi_: {
          definition: {
            definitions: {
              A6VF4Z0w4: { isNullable: !0, type: f.ResponsiveImage },
              beajm0aEo: { isNullable: !0, type: f.String },
              cIJn4acxd: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              pEmfzlz1o: { isNullable: !0, type: f.String },
              vWSpPAYGV: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        fwA3wAPwE: { isNullable: !0, type: f.String },
        G8CvdCmHC: { isNullable: !0, type: f.ResponsiveImage },
        hlX8Jl7YR: {
          definition: {
            definitions: {
              CKod233b8: { isNullable: !0, type: f.ResponsiveImage },
              I8dsQ0NtL: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              QkHEKZrh9: { isNullable: !0, type: f.String },
              Zf7nO8BOo: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        Ho64sicZo: { isNullable: !0, type: f.ResponsiveImage },
        iajt4RiY9: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        ioEqOXLVE: { isNullable: !0, type: f.RichText },
        KjuI7xIqH: { isNullable: !0, type: f.ResponsiveImage },
        ld3WOR_mM: { isNullable: !0, type: f.String },
        mBOD0dzUu: { isNullable: !0, type: f.String },
        mc9gNnqAK: { isNullable: !0, type: f.String },
        MWeHOVQxY: { isNullable: !0, type: f.String },
        nextItemId: { isNullable: !0, type: f.String },
        npkSkOhqk: { isNullable: !0, type: f.ResponsiveImage },
        O2wKtxCbC: {
          definition: {
            definitions: {
              bc3si2JQR: { isNullable: !0, type: f.VectorSetItem },
              dVZKW4WP7: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        PC2jbNSl0: { isNullable: !0, type: f.String },
        pQSvXt2ua: { isNullable: !0, type: f.Boolean },
        previousItemId: { isNullable: !0, type: f.String },
        pRscAuRZe: { isNullable: !0, type: f.ResponsiveImage },
        qHp4NDSVl: {
          definition: {
            definitions: {
              gKmR3LQ8n: { isNullable: !0, type: f.String },
              id: { isNullable: !1, type: f.String },
              IMRIN0bVY: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        QKEd_bQOA: { isNullable: !0, type: f.String },
        qlZmWnTmC: { isNullable: !0, type: f.VectorSetItem },
        R1tdD8fvp: { isNullable: !0, type: f.ResponsiveImage },
        R4qYsSm4_: {
          definition: { isNullable: !0, type: f.String },
          isNullable: !0,
          type: f.Array,
        },
        slZMTzAXI: { isNullable: !0, type: f.ResponsiveImage },
        SN2RLBm6d: { isNullable: !0, type: f.ResponsiveImage },
        SqKxOjS9X: { isNullable: !0, type: f.ResponsiveImage },
        SyXuXgguS: { isNullable: !0, type: f.Number },
        UNojmDL2J: { isNullable: !0, type: f.String },
        updatedAt: { isNullable: !0, type: f.Date },
        VbS1XQeqx: { isNullable: !0, type: f.String },
        VEQjDmsFE: { isNullable: !0, type: f.String },
        Vf0m5_9Vp: { isNullable: !0, type: f.String },
        VQbbJjVei: { isNullable: !0, type: f.Enum },
        vsUAs6fik: { isNullable: !0, type: f.String },
        WY8bdkpJY: { isNullable: !0, type: f.ResponsiveImage },
        x7OrdrLbJ: {
          definition: {
            definitions: {
              id: { isNullable: !1, type: f.String },
              PpyXkHeWp: { isNullable: !0, type: f.VectorSetItem },
              suzgCYSSb: { isNullable: !0, type: f.String },
            },
            isNullable: !0,
            type: f.Object,
          },
          isNullable: !0,
          type: f.Array,
        },
        xrgcREKhQ: { isNullable: !0, type: f.ResponsiveImage },
        XRLP6i1kQ: { isNullable: !0, type: f.String },
        z8Nqy0YTK: { isNullable: !0, type: f.String },
      }),
      (q = new URL(
        `./UtNF5Yexj-indexes-default-0.framercms`,
        `https://framerusercontent.com/modules/1qI2kQzKAOa9AiAK41PB/o1mnIIB3hTolX1e4zFZg/UtNF5Yexj.js`
      ).href.replace(`/modules/`, `/cms/`)),
      (vt = [`id`]),
      (J = { type: 1 }),
      (yt = [`previousItemId`]),
      (bt = [`nextItemId`]),
      (xt = [`id`, `cm6YBFu8C`]),
      (St = [`cm6YBFu8C`, `id`]),
      (Y = { type: 0 }),
      (Ct = [`C0EPUrxhE`]),
      (wt = [`cm6YBFu8C`]),
      (Tt = [`DFfOkZmAe`]),
      (Et = [`Vf0m5_9Vp`]),
      (Dt = [`VQbbJjVei`]),
      (Ot = [`fwA3wAPwE`]),
      (kt = [`slZMTzAXI`]),
      (At = [`fDotY0Hnn`]),
      (jt = [`vsUAs6fik`]),
      (Mt = [`MWeHOVQxY`]),
      (Nt = [`QKEd_bQOA`]),
      (Pt = [`d1t_KwBI5`]),
      (Ft = [`mBOD0dzUu`]),
      (It = [`E8HIr9ADV`]),
      (Lt = [`VbS1XQeqx`]),
      (Rt = [`amR6758ME`]),
      (zt = [`VEQjDmsFE`]),
      (Bt = [`ld3WOR_mM`]),
      (Vt = [`hlX8Jl7YR`]),
      (Ht = [`x7OrdrLbJ`]),
      (Ut = [`cJ99TYIhv`]),
      (Wt = [`FAzwFG6Kt`]),
      (Gt = [`O2wKtxCbC`]),
      (Kt = [`ioEqOXLVE`]),
      (qt = [`pQSvXt2ua`]),
      (Jt = [`SyXuXgguS`]),
      (Yt = [`B3kFb26Nl`]),
      (Xt = [`R4qYsSm4_`]),
      (Zt = [`UNojmDL2J`]),
      (Qt = [`FkEUFpxi_`]),
      ($t = [`qHp4NDSVl`]),
      (en = [`XRLP6i1kQ`]),
      (tn = [`cc_kzXNKB`]),
      (nn = [`CwdTsXH6s`]),
      (rn = [`xrgcREKhQ`]),
      (an = [`z8Nqy0YTK`]),
      (on = [`e14HaIokF`]),
      (sn = [`WY8bdkpJY`]),
      (cn = [`Ho64sicZo`]),
      (ln = [`dVMpSZBVW`]),
      (un = [`iajt4RiY9`]),
      (dn = [`SN2RLBm6d`]),
      (X = [`npkSkOhqk`]),
      (fn = [`mc9gNnqAK`]),
      (pn = [`PC2jbNSl0`]),
      (mn = [`pRscAuRZe`]),
      (hn = [`G8CvdCmHC`]),
      (gn = [`R1tdD8fvp`]),
      (_n = [`qlZmWnTmC`]),
      (vn = [`KjuI7xIqH`]),
      (yn = [`SqKxOjS9X`]),
      (bn = [
        () => import("./s9Ir45kgf.CZ5VQta_.mjs"),
        () => import("./cnD21AQTM.B_VaQiFm.mjs").then((e) => (e.r(), e.n)),
        () => import("./zGwEGQcJr.CjOOhcBY.mjs").then((e) => (e.n(), e.r)),
        () => import("./IomeaNcRM.GqMUW8tc.mjs"),
        () => import("./tEPmNpmvd.kt3fXovj.mjs").then((e) => (e.n(), e.r)),
        () => import("./TlnJxmeVy.BLMgsj2b.mjs").then((e) => (e.r(), e.n)),
        () => import("./toplevel-deps.TwMXxJp8.mjs").then((e) => (e.j(), e.A)),
        () => import("./IoTnWOXgK.Bp3GdIhZ.mjs"),
        () => import("./tvIvV1TTl.BkzkgS0R.mjs").then((e) => (e.n(), e.r)),
        () => import("./xt8A_Amrt.C7ZvbK4L.mjs"),
        () => import("./LbO3HXMGE.B3o5NHi-.mjs"),
        () => import("./SAyLqmjeK.n4D5sh6Z.mjs").then((e) => (e.r(), e.n)),
        () => import("./kL1rHJbfO.BckFkdSG.mjs").then((e) => (e.n(), e.r)),
        () => import("./Jqi_BRGpm.BJPerLsL.mjs"),
        () => import("./lyehLSd8T.BK4eO7vi.mjs"),
        () => import("./guZQOz05G.C7F6i4zH.mjs").then((e) => (e.r(), e.n)),
        () => import("./B6RKbBfKy.IAsy7MV-.mjs").then((e) => (e.r(), e.t)),
        () => import("./fhHgguzMk.DsM8gqaZ.mjs").then((e) => (e.r(), e.n)),
        () => import("./BLA6mPLjC.DkRmcob4.mjs"),
        () => import("./aIfmSu0Qn.gJ-QMKy5.mjs").then((e) => (e.r(), e.n)),
        () => import("./f40ONlxDn.CEplUJox.mjs"),
        () => import("./H4mg7DsTZ.BRNBZnWR.mjs").then((e) => (e.r(), e.t)),
        () => import("./BGbxynD4e.CFDd7YLD.mjs").then((e) => (e.r(), e.t)),
        () => import("./V4FGjy_zn.CsbYykfL.mjs"),
        () => import("./toplevel-deps.TwMXxJp8.mjs").then((e) => (e.z(), e.B)),
        () => import("./bpn3X3frq.BQ_RR3Vp.mjs").then((e) => (e.r(), e.n)),
        () => import("./eSPEYyaDj.DL_W3S6y.mjs"),
        () => import("./Jz_YwQY8_.ByO6xFNQ.mjs"),
        () => import("./DeHtY4563.Bi3Hby90.mjs"),
        () => import("./RrZ0Uh93U.D9IonxxE.mjs"),
        () => import("./FjXnPUkmp.DVVKkwA1.mjs"),
        () => import("./dZkd7bSHY.DQez72BA.mjs").then((e) => (e.r(), e.n)),
        () => import("./e3RoWW9O3.DsGxuotQ.mjs"),
        () => import("./hm80GXBLx.D8p3lkq1.mjs").then((e) => (e.r(), e.n)),
        () => import("./CzMK0E2au.ChiY61dl.mjs"),
        () => import("./VyOssQTlH.d680lqKm.mjs"),
        () => import("./V0WriU4Bq.CH1woGvK.mjs").then((e) => (e.r(), e.n)),
        () => import("./y_WxbHxva.t6Yqbu69.mjs"),
        () => import("./Ouo2uHnEM.5l2Vc0ms.mjs").then((e) => (e.r(), e.n)),
      ]),
      (xn = (e) => {
        let t = bn[e];
        if (t) return t().then((e) => e.default);
      }),
      (Sn = pt({})),
      (Z = new d()),
      (Q = {
        collectionByLocaleId: {
          default: new st({
            chunks: [
              new URL(
                `./UtNF5Yexj-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/1qI2kQzKAOa9AiAK41PB/o1mnIIB3hTolX1e4zFZg/UtNF5Yexj.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `50ace1a9-9610-45b2-8f1c-bec9fe7eb145default`,
            indexes: [
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: vt,
                range: { from: 0, to: 409 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: yt,
                range: { from: 409, to: 817 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: bt,
                range: { from: 817, to: 1221 },
                url: q,
              }),
              new U({
                collation: J,
                collectionSchema: K,
                fieldNames: xt,
                range: { from: 1221, to: 1967 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: St,
                range: { from: 1967, to: 2713 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ct,
                range: { from: 2713, to: 3233 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: wt,
                range: { from: 3233, to: 3749 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Tt,
                range: { from: 3749, to: 4359 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Et,
                range: { from: 4359, to: 5868 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Dt,
                range: { from: 5868, to: 6284 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ot,
                range: { from: 6284, to: 6782 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: kt,
                range: { from: 6782, to: 15674 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: At,
                range: { from: 15674, to: 24566 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: jt,
                range: { from: 24566, to: 24984 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Mt,
                range: { from: 24984, to: 25423 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Nt,
                range: { from: 25423, to: 25801 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Pt,
                range: { from: 25801, to: 26198 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ft,
                range: { from: 26198, to: 26734 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: It,
                range: { from: 26734, to: 27252 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Lt,
                range: { from: 27252, to: 27706 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Rt,
                range: { from: 27706, to: 28186 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: zt,
                range: { from: 28186, to: 28845 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Bt,
                range: { from: 28845, to: 29269 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Vt,
                range: { from: 29269, to: 66630 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ht,
                range: { from: 66630, to: 71290 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Ut,
                range: { from: 71290, to: 76096 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Wt,
                range: { from: 76096, to: 79838 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Gt,
                range: { from: 79838, to: 84290 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Kt,
                range: { from: 84290, to: 87656 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: qt,
                range: { from: 87656, to: 87880 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Jt,
                range: { from: 87880, to: 88216 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Yt,
                range: { from: 88216, to: 88750 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Xt,
                range: { from: 88750, to: 89438 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Zt,
                range: { from: 89438, to: 89854 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: Qt,
                range: { from: 89854, to: 114369 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: $t,
                range: { from: 114369, to: 122145 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: en,
                range: { from: 122145, to: 122645 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: tn,
                range: { from: 122645, to: 123431 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: nn,
                range: { from: 123431, to: 130299 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: rn,
                range: { from: 130299, to: 137141 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: an,
                range: { from: 137141, to: 137693 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: on,
                range: { from: 137693, to: 138461 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: sn,
                range: { from: 138461, to: 145863 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: cn,
                range: { from: 145863, to: 153243 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: ln,
                range: { from: 153243, to: 153727 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: un,
                range: { from: 153727, to: 154521 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: dn,
                range: { from: 154521, to: 161155 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: X,
                range: { from: 161155, to: 167761 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: fn,
                range: { from: 167761, to: 169350 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: pn,
                range: { from: 169350, to: 171044 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: mn,
                range: { from: 171044, to: 179580 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: hn,
                range: { from: 179580, to: 189532 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: gn,
                range: { from: 189532, to: 198084 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: _n,
                range: { from: 198084, to: 198356 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: vn,
                range: { from: 198356, to: 206684 },
                url: q,
              }),
              new U({
                collation: Y,
                collectionSchema: K,
                fieldNames: yn,
                range: { from: 206684, to: 215238 },
                url: q,
              }),
            ],
            resolveRichText: Sn,
            resolveVectorSetItem: xn,
            schema: K,
          }),
        },
        displayName: `Treatments`,
        id: `50ace1a9-9610-45b2-8f1c-bec9fe7eb145`,
      }),
      u(Q, {
        C0EPUrxhE: { defaultValue: ``, title: `Title`, type: f.String },
        cm6YBFu8C: { preventLocalization: !1, title: `Slug`, type: f.String },
        DFfOkZmAe: { defaultValue: ``, title: `Tagline`, type: f.String },
        Vf0m5_9Vp: { defaultValue: ``, displayTextArea: !0, title: `Summary`, type: f.String },
        VQbbJjVei: {
          defaultValue: `aSEV4M8Ku`,
          options: [`aSEV4M8Ku`, `p_nSTcYnu`, `PzyJgwQ5x`, `SwPpxCtQI`],
          optionTitles: [`Injectables`, `Skin`, `Laser & light`, `Body`],
          title: `Category`,
          type: f.Enum,
        },
        fwA3wAPwE: { defaultValue: ``, title: `Brand`, type: f.String },
        slZMTzAXI: { title: `Card Image`, type: f.ResponsiveImage },
        fDotY0Hnn: { title: `Hero Image`, type: f.ResponsiveImage },
        vsUAs6fik: { defaultValue: ``, title: `Starting Price`, type: f.String },
        MWeHOVQxY: { defaultValue: ``, title: `Price Unit`, type: f.String },
        QKEd_bQOA: { defaultValue: ``, title: `Session`, type: f.String },
        d1t_KwBI5: { defaultValue: ``, title: `Downtime`, type: f.String },
        mBOD0dzUu: { defaultValue: ``, title: `Results Visible`, type: f.String },
        E8HIr9ADV: { defaultValue: ``, title: `Results Last`, type: f.String },
        VbS1XQeqx: { defaultValue: ``, title: `Makeup`, type: f.String },
        amR6758ME: { defaultValue: ``, title: `Exercise`, type: f.String },
        VEQjDmsFE: { defaultValue: ``, title: `Sun`, type: f.String },
        ld3WOR_mM: { defaultValue: ``, title: `Work`, type: f.String },
        hlX8Jl7YR: {
          __vekterDefault: [],
          control: {
            controls: {
              QkHEKZrh9: { defaultValue: ``, title: `Title`, type: `string` },
              Zf7nO8BOo: { defaultValue: ``, title: `Text`, type: `string` },
              CKod233b8: { title: `Image`, type: `responsiveimage` },
              I8dsQ0NtL: { defaultValue: ``, title: `Number`, type: `string` },
            },
            type: `object`,
          },
          title: `Steps`,
          type: f.Array,
        },
        x7OrdrLbJ: {
          __vekterDefault: [],
          control: {
            controls: {
              suzgCYSSb: { defaultValue: ``, title: `Text`, type: `string` },
              PpyXkHeWp: {
                defaultValue: {
                  identifier: `module:BLjRczXRCa2XMZlRX1af/3JLV0naPYn0LHwD9pOLX/ljGcHeWyh.js:default`,
                  moduleId: `BLjRczXRCa2XMZlRX1af`,
                },
                setModuleId: `omX0gWFPqDwhaiWwf6ab`,
                title: `Icon`,
                type: `vectorsetitem`,
              },
            },
            type: `object`,
          },
          title: `Ideal For`,
          type: f.Array,
        },
        cJ99TYIhv: {
          __vekterDefault: [],
          control: {
            controls: {
              IZQsek9Yv: { defaultValue: ``, title: `Text`, type: `string` },
              Tt_ojq1yC: {
                defaultValue: {
                  identifier: `module:BLjRczXRCa2XMZlRX1af/3JLV0naPYn0LHwD9pOLX/ljGcHeWyh.js:default`,
                  moduleId: `BLjRczXRCa2XMZlRX1af`,
                },
                setModuleId: `omX0gWFPqDwhaiWwf6ab`,
                title: `Icon`,
                type: `vectorsetitem`,
              },
            },
            type: `object`,
          },
          title: `Wait If`,
          type: f.Array,
        },
        FAzwFG6Kt: {
          __vekterDefault: [],
          control: {
            controls: { KxIPa5vzH: { defaultValue: ``, title: `Text`, type: `string` } },
            type: `object`,
          },
          title: `Aftercare`,
          type: f.Array,
        },
        O2wKtxCbC: {
          __vekterDefault: [],
          control: {
            controls: {
              dVZKW4WP7: { defaultValue: ``, title: `Text`, type: `string` },
              bc3si2JQR: {
                defaultValue: {
                  identifier: `module:BLjRczXRCa2XMZlRX1af/3JLV0naPYn0LHwD9pOLX/ljGcHeWyh.js:default`,
                  moduleId: `BLjRczXRCa2XMZlRX1af`,
                },
                setModuleId: `omX0gWFPqDwhaiWwf6ab`,
                title: `Icon`,
                type: `vectorsetitem`,
              },
            },
            type: `object`,
          },
          title: `Included`,
          type: f.Array,
        },
        ioEqOXLVE: {
          defaultValue: `<p dir="auto"><br class="trailing-break"></p>`,
          title: `Risks`,
          type: f.RichText,
        },
        pQSvXt2ua: { defaultValue: !1, title: `Featured`, type: f.Boolean },
        SyXuXgguS: { defaultValue: 0, title: `Order`, type: f.Number },
        B3kFb26Nl: {
          dataIdentifier: `local-module:collection/XFv023kLt:default`,
          defaultValue: [],
          title: `Concerns`,
          type: f.MultiCollectionReference,
        },
        R4qYsSm4_: {
          dataIdentifier: `local-module:collection/EPFZL52vH:default`,
          defaultValue: [],
          title: `Practitioners`,
          type: f.MultiCollectionReference,
        },
        UNojmDL2J: {
          dataIdentifier: `local-module:collection/EPFZL52vH:default`,
          title: `Reviewed By`,
          type: f.CollectionReference,
        },
        FkEUFpxi_: {
          __vekterDefault: [],
          control: {
            controls: {
              cIJn4acxd: { defaultValue: ``, title: `Label`, type: `string` },
              pEmfzlz1o: { defaultValue: ``, title: `Note`, type: `string` },
              beajm0aEo: { defaultValue: ``, title: `Price`, type: `string` },
              vWSpPAYGV: { defaultValue: ``, title: `Member`, type: `string` },
              A6VF4Z0w4: { title: `Image`, type: `responsiveimage` },
            },
            type: `object`,
          },
          title: `Price Options`,
          type: f.Array,
        },
        qHp4NDSVl: {
          __vekterDefault: [],
          control: {
            controls: {
              IMRIN0bVY: { defaultValue: ``, title: `Question`, type: `string` },
              gKmR3LQ8n: { defaultValue: ``, title: `Answer`, type: `string` },
            },
            type: `object`,
          },
          title: `Questions`,
          type: f.Array,
        },
        XRLP6i1kQ: { defaultValue: ``, title: `Case 1 Title`, type: f.String },
        cc_kzXNKB: { defaultValue: ``, title: `Case 1 Note`, type: f.String },
        CwdTsXH6s: { title: `Case 1 Before`, type: f.ResponsiveImage },
        xrgcREKhQ: { title: `Case 1 After`, type: f.ResponsiveImage },
        z8Nqy0YTK: { defaultValue: ``, title: `Case 2 Title`, type: f.String },
        e14HaIokF: { defaultValue: ``, title: `Case 2 Note`, type: f.String },
        WY8bdkpJY: { title: `Case 2 Before`, type: f.ResponsiveImage },
        Ho64sicZo: { title: `Case 2 After`, type: f.ResponsiveImage },
        dVMpSZBVW: { defaultValue: ``, title: `Case 3 Title`, type: f.String },
        iajt4RiY9: { defaultValue: ``, title: `Case 3 Note`, type: f.String },
        SN2RLBm6d: { title: `Case 3 Before`, type: f.ResponsiveImage },
        npkSkOhqk: { title: `Case 3 After`, type: f.ResponsiveImage },
        mc9gNnqAK: { defaultValue: ``, title: `Lead`, type: f.String },
        PC2jbNSl0: { defaultValue: ``, title: `Lead Rest`, type: f.String },
        pRscAuRZe: { title: `Wait If Image`, type: f.ResponsiveImage },
        G8CvdCmHC: { title: `Banner Image`, type: f.ResponsiveImage },
        R1tdD8fvp: { title: `Good Fit Image`, type: f.ResponsiveImage },
        qlZmWnTmC: {
          defaultValue: {
            identifier: `module:6E2CGo0e7Cc8gA9Pxqck/o74a7BK1ERiMNm6HcbIs/fhHgguzMk.js:default`,
            moduleId: `6E2CGo0e7Cc8gA9Pxqck`,
          },
          setModuleId: `omX0gWFPqDwhaiWwf6ab`,
          title: `Category Icon`,
          type: f.VectorSetItem,
        },
        KjuI7xIqH: { title: `Feature Photo`, type: f.ResponsiveImage },
        SqKxOjS9X: { title: `Feature Detail`, type: f.ResponsiveImage },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/UtNF5Yexj:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/UtNF5Yexj:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      ($ = (e, t) => {
        switch ((t?.fallback, e)) {
          case `aSEV4M8Ku`:
            return `Injectables`;
          case `p_nSTcYnu`:
            return `Skin`;
          case `PzyJgwQ5x`:
            return `Laser & light`;
          case `SwPpxCtQI`:
            return `Body`;
          default:
            return ``;
        }
      }),
      (Cn = { VQbbJjVei: $ }),
      (wn = {
        async getSlugByRecordId(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `cm6YBFu8C`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.cm6YBFu8C;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Z.query(
            {
              from: { data: Q, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `cm6YBFu8C`, type: `Identifier` },
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
      (Tn = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerContractVersion: `1`,
              framerCollectionUtils: `1`,
              framerRecordIdKey: `id`,
              framerColorSyntax: `false`,
              framerAutoSizeImages: `true`,
              framerCollectionId: `UtNF5Yexj`,
              framerSlug: `cm6YBFu8C`,
              framerData: `true`,
              framerEnumToDisplayNameUtils: `2`,
            },
          },
          VQbbJjVeiToDisplayName: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { En as a, Cn as i, Tn as n, wn as o, Q as r, $ as t };
//# sourceMappingURL=UtNF5Yexj.CnX57ltF.mjs.map
