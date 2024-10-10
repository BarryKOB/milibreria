var ma = Object.defineProperty;
var ha = (e, r, t) => r in e ? ma(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Lr = (e, r, t) => ha(e, typeof r != "symbol" ? r + "" : r, t);
import * as Q from "react";
import nr, { forwardRef as ga, useContext as ya, Children as va, isValidElement as ft, cloneElement as dt } from "react";
function ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pn = { exports: {} }, Vr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Sa() {
  if (Wn) return Vr;
  Wn = 1;
  var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, f) {
    var m, h = {}, y = null, x = null;
    f !== void 0 && (y = "" + f), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (m in l) n.call(l, m) && !i.hasOwnProperty(m) && (h[m] = l[m]);
    if (u && u.defaultProps) for (m in l = u.defaultProps, l) h[m] === void 0 && (h[m] = l[m]);
    return { $$typeof: r, type: u, key: y, ref: x, props: h, _owner: o.current };
  }
  return Vr.Fragment = t, Vr.jsx = s, Vr.jsxs = s, Vr;
}
var Wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function Ea() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C = Symbol.iterator, b = "@@iterator";
    function g(a) {
      if (a === null || typeof a != "object")
        return null;
      var p = C && a[C] || a[b];
      return typeof p == "function" ? p : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(a) {
      {
        for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), P = 1; P < p; P++)
          v[P - 1] = arguments[P];
        T("error", a, v);
      }
    }
    function T(a, p, v) {
      {
        var P = O.ReactDebugCurrentFrame, F = P.getStackAddendum();
        F !== "" && (p += "%s", v = v.concat([F]));
        var W = v.map(function(N) {
          return String(N);
        });
        W.unshift("Warning: " + p), Function.prototype.apply.call(console[a], console, W);
      }
    }
    var R = !1, d = !1, I = !1, j = !1, ne = !1, c;
    c = Symbol.for("react.module.reference");
    function A(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || ne || a === o || a === f || a === m || j || a === x || R || d || I || typeof a == "object" && a !== null && (a.$$typeof === y || a.$$typeof === h || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === c || a.getModuleId !== void 0));
    }
    function V(a, p, v) {
      var P = a.displayName;
      if (P)
        return P;
      var F = p.displayName || p.name || "";
      return F !== "" ? v + "(" + F + ")" : v;
    }
    function B(a) {
      return a.displayName || "Context";
    }
    function z(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var p = a;
            return B(p) + ".Consumer";
          case s:
            var v = a;
            return B(v._context) + ".Provider";
          case l:
            return V(a, a.render, "ForwardRef");
          case h:
            var P = a.displayName || null;
            return P !== null ? P : z(a.type) || "Memo";
          case y: {
            var F = a, W = F._payload, N = F._init;
            try {
              return z(N(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, oe = 0, ae, ve, xe, Se, _, k, U;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function L() {
      {
        if (oe === 0) {
          ae = console.log, ve = console.info, xe = console.warn, Se = console.error, _ = console.group, k = console.groupCollapsed, U = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        oe++;
      }
    }
    function re() {
      {
        if (oe--, oe === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, a, {
              value: ae
            }),
            info: X({}, a, {
              value: ve
            }),
            warn: X({}, a, {
              value: xe
            }),
            error: X({}, a, {
              value: Se
            }),
            group: X({}, a, {
              value: _
            }),
            groupCollapsed: X({}, a, {
              value: k
            }),
            groupEnd: X({}, a, {
              value: U
            })
          });
        }
        oe < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = O.ReactCurrentDispatcher, q;
    function K(a, p, v) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (F) {
            var P = F.stack.trim().match(/\n( *(at )?)/);
            q = P && P[1] || "";
          }
        return `
` + q + a;
      }
    }
    var Z = !1, H;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ee();
    }
    function S(a, p) {
      if (!a || Z)
        return "";
      {
        var v = H.get(a);
        if (v !== void 0)
          return v;
      }
      var P;
      Z = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = Y.current, Y.current = null, L();
      try {
        if (p) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (he) {
              P = he;
            }
            Reflect.construct(a, [], N);
          } else {
            try {
              N.call();
            } catch (he) {
              P = he;
            }
            a.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            P = he;
          }
          a();
        }
      } catch (he) {
        if (he && P && typeof he.stack == "string") {
          for (var M = he.stack.split(`
`), ie = P.stack.split(`
`), ee = M.length - 1, te = ie.length - 1; ee >= 1 && te >= 0 && M[ee] !== ie[te]; )
            te--;
          for (; ee >= 1 && te >= 0; ee--, te--)
            if (M[ee] !== ie[te]) {
              if (ee !== 1 || te !== 1)
                do
                  if (ee--, te--, te < 0 || M[ee] !== ie[te]) {
                    var be = `
` + M[ee].replace(" at new ", " at ");
                    return a.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", a.displayName)), typeof a == "function" && H.set(a, be), be;
                  }
                while (ee >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        Z = !1, Y.current = W, re(), Error.prepareStackTrace = F;
      }
      var Fe = a ? a.displayName || a.name : "", Me = Fe ? K(Fe) : "";
      return typeof a == "function" && H.set(a, Me), Me;
    }
    function we(a, p, v) {
      return S(a, !1);
    }
    function D(a) {
      var p = a.prototype;
      return !!(p && p.isReactComponent);
    }
    function Te(a, p, v) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return S(a, D(a));
      if (typeof a == "string")
        return K(a);
      switch (a) {
        case f:
          return K("Suspense");
        case m:
          return K("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return we(a.render);
          case h:
            return Te(a.type, p, v);
          case y: {
            var P = a, F = P._payload, W = P._init;
            try {
              return Te(W(F), p, v);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, Ge = {}, Ke = O.ReactDebugCurrentFrame;
    function Ie(a) {
      if (a) {
        var p = a._owner, v = Te(a.type, a._source, p ? p.type : null);
        Ke.setExtraStackFrame(v);
      } else
        Ke.setExtraStackFrame(null);
    }
    function $r(a, p, v, P, F) {
      {
        var W = Function.call.bind($e);
        for (var N in a)
          if (W(a, N)) {
            var M = void 0;
            try {
              if (typeof a[N] != "function") {
                var ie = Error((P || "React class") + ": " + v + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              M = a[N](p, N, P, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              M = ee;
            }
            M && !(M instanceof Error) && (Ie(F), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", v, N, typeof M), Ie(null)), M instanceof Error && !(M.message in Ge) && (Ge[M.message] = !0, Ie(F), $("Failed %s type: %s", v, M.message), Ie(null));
          }
      }
    }
    var gr = Array.isArray;
    function er(a) {
      return gr(a);
    }
    function J(a) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, v = p && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v;
      }
    }
    function yr(a) {
      try {
        return ur(a), !1;
      } catch {
        return !0;
      }
    }
    function ur(a) {
      return "" + a;
    }
    function ar(a) {
      if (yr(a))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", J(a)), ur(a);
    }
    var We = O.ReactCurrentOwner, Dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ar, kr, lr;
    lr = {};
    function Ft(a) {
      if ($e.call(a, "ref")) {
        var p = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Bt(a) {
      if ($e.call(a, "key")) {
        var p = Object.getOwnPropertyDescriptor(a, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Lt(a, p) {
      if (typeof a.ref == "string" && We.current && p && We.current.stateNode !== p) {
        var v = z(We.current.type);
        lr[v] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(We.current.type), a.ref), lr[v] = !0);
      }
    }
    function Vt(a, p) {
      {
        var v = function() {
          Ar || (Ar = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Wt(a, p) {
      {
        var v = function() {
          kr || (kr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var zt = function(a, p, v, P, F, W, N) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: p,
        ref: v,
        props: N,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Yt(a, p, v, P, F) {
      {
        var W, N = {}, M = null, ie = null;
        v !== void 0 && (ar(v), M = "" + v), Bt(p) && (ar(p.key), M = "" + p.key), Ft(p) && (ie = p.ref, Lt(p, F));
        for (W in p)
          $e.call(p, W) && !Dt.hasOwnProperty(W) && (N[W] = p[W]);
        if (a && a.defaultProps) {
          var ee = a.defaultProps;
          for (W in ee)
            N[W] === void 0 && (N[W] = ee[W]);
        }
        if (M || ie) {
          var te = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          M && Vt(N, te), ie && Wt(N, te);
        }
        return zt(a, M, ie, F, P, We.current, N);
      }
    }
    var fr = O.ReactCurrentOwner, Ir = O.ReactDebugCurrentFrame;
    function De(a) {
      if (a) {
        var p = a._owner, v = Te(a.type, a._source, p ? p.type : null);
        Ir.setExtraStackFrame(v);
      } else
        Ir.setExtraStackFrame(null);
    }
    var dr;
    dr = !1;
    function pr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Mr() {
      {
        if (fr.current) {
          var a = z(fr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Ut(a) {
      return "";
    }
    var jr = {};
    function qt(a) {
      {
        var p = Mr();
        if (!p) {
          var v = typeof a == "string" ? a : a.displayName || a.name;
          v && (p = `

Check the top-level render call using <` + v + ">.");
        }
        return p;
      }
    }
    function Nr(a, p) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var v = qt(p);
        if (jr[v])
          return;
        jr[v] = !0;
        var P = "";
        a && a._owner && a._owner !== fr.current && (P = " It was passed a child from " + z(a._owner.type) + "."), De(a), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, P), De(null);
      }
    }
    function Dr(a, p) {
      {
        if (typeof a != "object")
          return;
        if (er(a))
          for (var v = 0; v < a.length; v++) {
            var P = a[v];
            pr(P) && Nr(P, p);
          }
        else if (pr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var F = g(a);
          if (typeof F == "function" && F !== a.entries)
            for (var W = F.call(a), N; !(N = W.next()).done; )
              pr(N.value) && Nr(N.value, p);
        }
      }
    }
    function Gt(a) {
      {
        var p = a.type;
        if (p == null || typeof p == "string")
          return;
        var v;
        if (typeof p == "function")
          v = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === h))
          v = p.propTypes;
        else
          return;
        if (v) {
          var P = z(p);
          $r(v, a.props, "prop", P, a);
        } else if (p.PropTypes !== void 0 && !dr) {
          dr = !0;
          var F = z(p);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(a) {
      {
        for (var p = Object.keys(a.props), v = 0; v < p.length; v++) {
          var P = p[v];
          if (P !== "children" && P !== "key") {
            De(a), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), De(null);
            break;
          }
        }
        a.ref !== null && (De(a), $("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var Fr = {};
    function Br(a, p, v, P, F, W) {
      {
        var N = A(a);
        if (!N) {
          var M = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Ut();
          ie ? M += ie : M += Mr();
          var ee;
          a === null ? ee = "null" : er(a) ? ee = "array" : a !== void 0 && a.$$typeof === r ? (ee = "<" + (z(a.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof a, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, M);
        }
        var te = Yt(a, p, v, F, W);
        if (te == null)
          return te;
        if (N) {
          var be = p.children;
          if (be !== void 0)
            if (P)
              if (er(be)) {
                for (var Fe = 0; Fe < be.length; Fe++)
                  Dr(be[Fe], a);
                Object.freeze && Object.freeze(be);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dr(be, a);
        }
        if ($e.call(p, "key")) {
          var Me = z(a), he = Object.keys(p).filter(function(en) {
            return en !== "key";
          }), mr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fr[Me + mr]) {
            var Zt = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mr, Me, Zt, Me), Fr[Me + mr] = !0;
          }
        }
        return a === n ? Kt(te) : Gt(te), te;
      }
    }
    function Ht(a, p, v) {
      return Br(a, p, v, !0);
    }
    function Xt(a, p, v) {
      return Br(a, p, v, !1);
    }
    var Jt = Xt, Qt = Ht;
    Wr.Fragment = n, Wr.jsx = Jt, Wr.jsxs = Qt;
  }()), Wr;
}
process.env.NODE_ENV === "production" ? pn.exports = Sa() : pn.exports = Ea();
var Ca = pn.exports, mn = { exports: {} }, ot = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function Ta() {
  if (Yn) return ue;
  Yn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function T(d) {
    if (typeof d == "object" && d !== null) {
      var I = d.$$typeof;
      switch (I) {
        case r:
          switch (d = d.type, d) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case u:
                case m:
                case C:
                case x:
                case s:
                  return d;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  function R(d) {
    return T(d) === f;
  }
  return ue.AsyncMode = l, ue.ConcurrentMode = f, ue.ContextConsumer = u, ue.ContextProvider = s, ue.Element = r, ue.ForwardRef = m, ue.Fragment = n, ue.Lazy = C, ue.Memo = x, ue.Portal = t, ue.Profiler = i, ue.StrictMode = o, ue.Suspense = h, ue.isAsyncMode = function(d) {
    return R(d) || T(d) === l;
  }, ue.isConcurrentMode = R, ue.isContextConsumer = function(d) {
    return T(d) === u;
  }, ue.isContextProvider = function(d) {
    return T(d) === s;
  }, ue.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, ue.isForwardRef = function(d) {
    return T(d) === m;
  }, ue.isFragment = function(d) {
    return T(d) === n;
  }, ue.isLazy = function(d) {
    return T(d) === C;
  }, ue.isMemo = function(d) {
    return T(d) === x;
  }, ue.isPortal = function(d) {
    return T(d) === t;
  }, ue.isProfiler = function(d) {
    return T(d) === i;
  }, ue.isStrictMode = function(d) {
    return T(d) === o;
  }, ue.isSuspense = function(d) {
    return T(d) === h;
  }, ue.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === f || d === i || d === o || d === h || d === y || typeof d == "object" && d !== null && (d.$$typeof === C || d.$$typeof === x || d.$$typeof === s || d.$$typeof === u || d.$$typeof === m || d.$$typeof === g || d.$$typeof === O || d.$$typeof === $ || d.$$typeof === b);
  }, ue.typeOf = T, ue;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function xa() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function T(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === f || S === i || S === o || S === h || S === y || typeof S == "object" && S !== null && (S.$$typeof === C || S.$$typeof === x || S.$$typeof === s || S.$$typeof === u || S.$$typeof === m || S.$$typeof === g || S.$$typeof === O || S.$$typeof === $ || S.$$typeof === b);
    }
    function R(S) {
      if (typeof S == "object" && S !== null) {
        var we = S.$$typeof;
        switch (we) {
          case r:
            var D = S.type;
            switch (D) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case h:
                return D;
              default:
                var Te = D && D.$$typeof;
                switch (Te) {
                  case u:
                  case m:
                  case C:
                  case x:
                  case s:
                    return Te;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var d = l, I = f, j = u, ne = s, c = r, A = m, V = n, B = C, z = x, X = t, oe = i, ae = o, ve = h, xe = !1;
    function Se(S) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || R(S) === l;
    }
    function _(S) {
      return R(S) === f;
    }
    function k(S) {
      return R(S) === u;
    }
    function U(S) {
      return R(S) === s;
    }
    function G(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function L(S) {
      return R(S) === m;
    }
    function re(S) {
      return R(S) === n;
    }
    function Y(S) {
      return R(S) === C;
    }
    function q(S) {
      return R(S) === x;
    }
    function K(S) {
      return R(S) === t;
    }
    function Z(S) {
      return R(S) === i;
    }
    function H(S) {
      return R(S) === o;
    }
    function Ee(S) {
      return R(S) === h;
    }
    le.AsyncMode = d, le.ConcurrentMode = I, le.ContextConsumer = j, le.ContextProvider = ne, le.Element = c, le.ForwardRef = A, le.Fragment = V, le.Lazy = B, le.Memo = z, le.Portal = X, le.Profiler = oe, le.StrictMode = ae, le.Suspense = ve, le.isAsyncMode = Se, le.isConcurrentMode = _, le.isContextConsumer = k, le.isContextProvider = U, le.isElement = G, le.isForwardRef = L, le.isFragment = re, le.isLazy = Y, le.isMemo = q, le.isPortal = K, le.isProfiler = Z, le.isStrictMode = H, le.isSuspense = Ee, le.isValidElementType = T, le.typeOf = R;
  }()), le;
}
var qn;
function Io() {
  return qn || (qn = 1, process.env.NODE_ENV === "production" ? ot.exports = Ta() : ot.exports = xa()), ot.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rn, Gn;
function wa() {
  if (Gn) return rn;
  Gn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return rn = o() ? Object.assign : function(i, s) {
    for (var u, l = n(i), f, m = 1; m < arguments.length; m++) {
      u = Object(arguments[m]);
      for (var h in u)
        r.call(u, h) && (l[h] = u[h]);
      if (e) {
        f = e(u);
        for (var y = 0; y < f.length; y++)
          t.call(u, f[y]) && (l[f[y]] = u[f[y]]);
      }
    }
    return l;
  }, rn;
}
var tn, Kn;
function Rn() {
  if (Kn) return tn;
  Kn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tn = e, tn;
}
var nn, Hn;
function Mo() {
  return Hn || (Hn = 1, nn = Function.call.bind(Object.prototype.hasOwnProperty)), nn;
}
var on, Xn;
function Ra() {
  if (Xn) return on;
  Xn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Rn(), t = {}, n = Mo();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, u, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var h;
          try {
            if (typeof i[m] != "function") {
              var y = Error(
                (l || "React class") + ": " + u + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = i[m](s, m, l, u, null, r);
          } catch (C) {
            h = C;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + u + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + u + " type: " + h.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, on = o, on;
}
var an, Jn;
function _a() {
  if (Jn) return an;
  Jn = 1;
  var e = Io(), r = wa(), t = Rn(), n = Mo(), o = Ra(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var l = "Warning: " + u;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return an = function(u, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function h(_) {
      var k = _ && (f && _[f] || _[m]);
      if (typeof k == "function")
        return k;
    }
    var y = "<<anonymous>>", x = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: $(),
      arrayOf: T,
      element: R(),
      elementType: d(),
      instanceOf: I,
      node: A(),
      objectOf: ne,
      oneOf: j,
      oneOfType: c,
      shape: B,
      exact: z
    };
    function C(_, k) {
      return _ === k ? _ !== 0 || 1 / _ === 1 / k : _ !== _ && k !== k;
    }
    function b(_, k) {
      this.message = _, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function g(_) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, U = 0;
      function G(re, Y, q, K, Z, H, Ee) {
        if (K = K || y, H = H || q, Ee !== t) {
          if (l) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = K + ":" + q;
            !k[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[we] = !0, U++);
          }
        }
        return Y[q] == null ? re ? Y[q] === null ? new b("The " + Z + " `" + H + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new b("The " + Z + " `" + H + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : _(Y, q, K, Z, H);
      }
      var L = G.bind(null, !1);
      return L.isRequired = G.bind(null, !0), L;
    }
    function O(_) {
      function k(U, G, L, re, Y, q) {
        var K = U[G], Z = ae(K);
        if (Z !== _) {
          var H = ve(K);
          return new b(
            "Invalid " + re + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + L + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return g(k);
    }
    function $() {
      return g(s);
    }
    function T(_) {
      function k(U, G, L, re, Y) {
        if (typeof _ != "function")
          return new b("Property `" + Y + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var q = U[G];
        if (!Array.isArray(q)) {
          var K = ae(q);
          return new b("Invalid " + re + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + L + "`, expected an array."));
        }
        for (var Z = 0; Z < q.length; Z++) {
          var H = _(q, Z, L, re, Y + "[" + Z + "]", t);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return g(k);
    }
    function R() {
      function _(k, U, G, L, re) {
        var Y = k[U];
        if (!u(Y)) {
          var q = ae(Y);
          return new b("Invalid " + L + " `" + re + "` of type " + ("`" + q + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(_);
    }
    function d() {
      function _(k, U, G, L, re) {
        var Y = k[U];
        if (!e.isValidElementType(Y)) {
          var q = ae(Y);
          return new b("Invalid " + L + " `" + re + "` of type " + ("`" + q + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(_);
    }
    function I(_) {
      function k(U, G, L, re, Y) {
        if (!(U[G] instanceof _)) {
          var q = _.name || y, K = Se(U[G]);
          return new b("Invalid " + re + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + L + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return g(k);
    }
    function j(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(U, G, L, re, Y) {
        for (var q = U[G], K = 0; K < _.length; K++)
          if (C(q, _[K]))
            return null;
        var Z = JSON.stringify(_, function(Ee, S) {
          var we = ve(S);
          return we === "symbol" ? String(S) : S;
        });
        return new b("Invalid " + re + " `" + Y + "` of value `" + String(q) + "` " + ("supplied to `" + L + "`, expected one of " + Z + "."));
      }
      return g(k);
    }
    function ne(_) {
      function k(U, G, L, re, Y) {
        if (typeof _ != "function")
          return new b("Property `" + Y + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var q = U[G], K = ae(q);
        if (K !== "object")
          return new b("Invalid " + re + " `" + Y + "` of type " + ("`" + K + "` supplied to `" + L + "`, expected an object."));
        for (var Z in q)
          if (n(q, Z)) {
            var H = _(q, Z, L, re, Y + "." + Z, t);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return g(k);
    }
    function c(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < _.length; k++) {
        var U = _[k];
        if (typeof U != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(U) + " at index " + k + "."
          ), s;
      }
      function G(L, re, Y, q, K) {
        for (var Z = [], H = 0; H < _.length; H++) {
          var Ee = _[H], S = Ee(L, re, Y, q, K, t);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && Z.push(S.data.expectedType);
        }
        var we = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new b("Invalid " + q + " `" + K + "` supplied to " + ("`" + Y + "`" + we + "."));
      }
      return g(G);
    }
    function A() {
      function _(k, U, G, L, re) {
        return X(k[U]) ? null : new b("Invalid " + L + " `" + re + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return g(_);
    }
    function V(_, k, U, G, L) {
      return new b(
        (_ || "React class") + ": " + k + " type `" + U + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function B(_) {
      function k(U, G, L, re, Y) {
        var q = U[G], K = ae(q);
        if (K !== "object")
          return new b("Invalid " + re + " `" + Y + "` of type `" + K + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var Z in _) {
          var H = _[Z];
          if (typeof H != "function")
            return V(L, re, Y, Z, ve(H));
          var Ee = H(q, Z, L, re, Y + "." + Z, t);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return g(k);
    }
    function z(_) {
      function k(U, G, L, re, Y) {
        var q = U[G], K = ae(q);
        if (K !== "object")
          return new b("Invalid " + re + " `" + Y + "` of type `" + K + "` " + ("supplied to `" + L + "`, expected `object`."));
        var Z = r({}, U[G], _);
        for (var H in Z) {
          var Ee = _[H];
          if (n(_, H) && typeof Ee != "function")
            return V(L, re, Y, H, ve(Ee));
          if (!Ee)
            return new b(
              "Invalid " + re + " `" + Y + "` key `" + H + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(U[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var S = Ee(q, H, L, re, Y + "." + H, t);
          if (S)
            return S;
        }
        return null;
      }
      return g(k);
    }
    function X(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(X);
          if (_ === null || u(_))
            return !0;
          var k = h(_);
          if (k) {
            var U = k.call(_), G;
            if (k !== _.entries) {
              for (; !(G = U.next()).done; )
                if (!X(G.value))
                  return !1;
            } else
              for (; !(G = U.next()).done; ) {
                var L = G.value;
                if (L && !X(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(_, k) {
      return _ === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function ae(_) {
      var k = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : oe(k, _) ? "symbol" : k;
    }
    function ve(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var k = ae(_);
      if (k === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function xe(_) {
      var k = ve(_);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function Se(_) {
      return !_.constructor || !_.constructor.name ? y : _.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, an;
}
var sn, Qn;
function Oa() {
  if (Qn) return sn;
  Qn = 1;
  var e = Rn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, sn = function() {
    function n(s, u, l, f, m, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, sn;
}
if (process.env.NODE_ENV !== "production") {
  var Pa = Io(), $a = !0;
  mn.exports = _a()(Pa.isElement, $a);
} else
  mn.exports = Oa()();
var Aa = mn.exports;
const w = /* @__PURE__ */ ba(Aa);
function jo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = jo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function ze() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = jo(e)) && (n && (n += " "), n += r);
  return n;
}
function yt(e, r) {
  const t = {
    ...r
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        t[o] = {
          ...e[o],
          ...t[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = r[o];
        if (!s)
          t[o] = i || {};
        else if (!i)
          t[o] = s;
        else {
          t[o] = {
            ...s
          };
          for (const u in i)
            if (Object.prototype.hasOwnProperty.call(i, u)) {
              const l = u;
              t[o][l] = yt(i[l], s[l]);
            }
        }
      } else t[o] === void 0 && (t[o] = e[o]);
    }
  return t;
}
function No(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", u = !0;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      f && (s += (u === !0 ? "" : " ") + r(f), u = !1, t && t[f] && (s += " " + t[f]));
    }
    n[o] = s;
  }
  return n;
}
function ir(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
function ka(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function _n(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), ka(e, r, t);
}
function Ia(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function sr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return sr(Ia(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ir(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ir(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Ma = (e) => {
  const r = sr(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, Gr = (e, r) => {
  try {
    return Ma(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function Ct(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Do(e) {
  e = sr(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), s = (f, m = (f + t / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let u = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (u += "a", l.push(r[3])), Ct({
    type: u,
    values: l
  });
}
function hn(e) {
  e = sr(e);
  let r = e.type === "hsl" || e.type === "hsla" ? sr(Do(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Zn(e, r) {
  const t = hn(e), n = hn(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function xr(e, r) {
  return e = sr(e), r = _n(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ct(e);
}
function at(e, r, t) {
  try {
    return xr(e, r);
  } catch {
    return e;
  }
}
function On(e, r) {
  if (e = sr(e), r = _n(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ct(e);
}
function ge(e, r, t) {
  try {
    return On(e, r);
  } catch {
    return e;
  }
}
function Pn(e, r) {
  if (e = sr(e), r = _n(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ct(e);
}
function ye(e, r, t) {
  try {
    return Pn(e, r);
  } catch {
    return e;
  }
}
function ja(e, r = 0.15) {
  return hn(e) > 0.5 ? On(e, r) : Pn(e, r);
}
function it(e, r, t) {
  try {
    return ja(e, r);
  } catch {
    return e;
  }
}
function Na(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Fo = (e) => Na(e) && e !== "classes";
function je(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ir(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function tr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Bo(e) {
  if (!tr(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Bo(e[t]);
  }), r;
}
function Le(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return tr(e) && tr(r) && Object.keys(r).forEach((o) => {
    tr(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && tr(e[o]) ? n[o] = Le(e[o], r[o], t) : t.clone ? n[o] = tr(r[o]) ? Bo(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function Hr(e, r) {
  return r ? Le(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const cr = process.env.NODE_ENV !== "production" ? w.oneOfType([w.number, w.string, w.object, w.array]) : {};
function Da(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, u;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((u = o.match(i)) == null ? void 0 : u[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function Fa(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function Ba(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ir(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function La(e) {
  const r = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function t(i, s) {
    i.up = (...u) => r(e.breakpoints.up(...u), s), i.down = (...u) => r(e.breakpoints.down(...u), s), i.between = (...u) => r(e.breakpoints.between(...u), s), i.only = (...u) => r(e.breakpoints.only(...u), s), i.not = (...u) => {
      const l = r(e.breakpoints.not(...u), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const Tt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, eo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Tt[e]}px)`
}, Va = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : Tt[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function or(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || eo;
    return r.reduce((s, u, l) => (s[i.up(i.keys[l])] = t(r[l]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || eo;
    return Object.keys(r).reduce((s, u) => {
      if (Fa(i.keys, u)) {
        const l = Ba(n.containerQueries ? n : Va, u);
        l && (s[l] = t(r[u], u));
      } else if (Object.keys(i.values || Tt).includes(u)) {
        const l = i.up(u);
        s[l] = t(r[u], u);
      } else {
        const l = u;
        s[l] = r[l];
      }
      return s;
    }, {});
  }
  return t(r);
}
function Wa(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function za(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function xt(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function vt(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = xt(e, t) || n, r && (o = r(o, n, e)), o;
}
function Oe(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const u = s[r], l = s.theme, f = xt(l, n) || {};
    return or(s, u, (h) => {
      let y = vt(f, o, h);
      return h === y && typeof h == "string" && (y = vt(f, o, `${r}${h === "default" ? "" : je(h)}`, h)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: cr
  } : {}, i.filterProps = [r], i;
}
function Ya(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Ua = {
  m: "margin",
  p: "padding"
}, qa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ro = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ga = Ya((e) => {
  if (e.length > 2)
    if (ro[e])
      e = ro[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Ua[r], o = qa[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), wt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Rt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ka = [...wt, ...Rt];
function et(e, r, t, n) {
  const o = xt(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const u = o[s];
    return i >= 0 ? u : typeof u == "number" ? -u : `-${u}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function $n(e) {
  return et(e, "spacing", 8, "spacing");
}
function rt(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function Ha(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = rt(r, t), n), {});
}
function Xa(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = Ga(t), i = Ha(o, n), s = e[t];
  return or(e, s, i);
}
function Lo(e, r) {
  const t = $n(e.theme);
  return Object.keys(e).map((n) => Xa(e, r, n, t)).reduce(Hr, {});
}
function Re(e) {
  return Lo(e, wt);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? wt.reduce((e, r) => (e[r] = cr, e), {}) : {};
Re.filterProps = wt;
function _e(e) {
  return Lo(e, Rt);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? Rt.reduce((e, r) => (e[r] = cr, e), {}) : {};
_e.filterProps = Rt;
process.env.NODE_ENV !== "production" && Ka.reduce((e, r) => (e[r] = cr, e), {});
function _t(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Hr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function qe(e, r) {
  return Oe({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Ja = qe("border", Ue), Qa = qe("borderTop", Ue), Za = qe("borderRight", Ue), ei = qe("borderBottom", Ue), ri = qe("borderLeft", Ue), ti = qe("borderColor"), ni = qe("borderTopColor"), oi = qe("borderRightColor"), ai = qe("borderBottomColor"), ii = qe("borderLeftColor"), si = qe("outline", Ue), ci = qe("outlineColor"), Ot = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = et(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: rt(r, n)
    });
    return or(e, e.borderRadius, t);
  }
  return null;
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: cr
} : {};
Ot.filterProps = ["borderRadius"];
_t(Ja, Qa, Za, ei, ri, ti, ni, oi, ai, ii, Ot, si, ci);
const Pt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = et(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: rt(r, n)
    });
    return or(e, e.gap, t);
  }
  return null;
};
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: cr
} : {};
Pt.filterProps = ["gap"];
const $t = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = et(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: rt(r, n)
    });
    return or(e, e.columnGap, t);
  }
  return null;
};
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: cr
} : {};
$t.filterProps = ["columnGap"];
const At = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = et(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: rt(r, n)
    });
    return or(e, e.rowGap, t);
  }
  return null;
};
At.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: cr
} : {};
At.filterProps = ["rowGap"];
const ui = Oe({
  prop: "gridColumn"
}), li = Oe({
  prop: "gridRow"
}), fi = Oe({
  prop: "gridAutoFlow"
}), di = Oe({
  prop: "gridAutoColumns"
}), pi = Oe({
  prop: "gridAutoRows"
}), mi = Oe({
  prop: "gridTemplateColumns"
}), hi = Oe({
  prop: "gridTemplateRows"
}), gi = Oe({
  prop: "gridTemplateAreas"
}), yi = Oe({
  prop: "gridArea"
});
_t(Pt, $t, At, ui, li, fi, di, pi, mi, hi, gi, yi);
function wr(e, r) {
  return r === "grey" ? r : e;
}
const vi = Oe({
  prop: "color",
  themeKey: "palette",
  transform: wr
}), bi = Oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wr
}), Si = Oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wr
});
_t(vi, bi, Si);
function Be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ei = Oe({
  prop: "width",
  transform: Be
}), An = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, s, u, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[t]) || Tt[t];
      return n ? ((l = (u = e.theme) == null ? void 0 : u.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Be(t)
      };
    };
    return or(e, e.maxWidth, r);
  }
  return null;
};
An.filterProps = ["maxWidth"];
const Ci = Oe({
  prop: "minWidth",
  transform: Be
}), Ti = Oe({
  prop: "height",
  transform: Be
}), xi = Oe({
  prop: "maxHeight",
  transform: Be
}), wi = Oe({
  prop: "minHeight",
  transform: Be
});
Oe({
  prop: "size",
  cssProperty: "width",
  transform: Be
});
Oe({
  prop: "size",
  cssProperty: "height",
  transform: Be
});
const Ri = Oe({
  prop: "boxSizing"
});
_t(Ei, An, Ci, Ti, xi, wi, Ri);
const kt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ue
  },
  borderTop: {
    themeKey: "borders",
    transform: Ue
  },
  borderRight: {
    themeKey: "borders",
    transform: Ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ue
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ue
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ot
  },
  // palette
  color: {
    themeKey: "palette",
    transform: wr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: wr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: wr
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Re
  },
  mt: {
    style: Re
  },
  mr: {
    style: Re
  },
  mb: {
    style: Re
  },
  ml: {
    style: Re
  },
  mx: {
    style: Re
  },
  my: {
    style: Re
  },
  margin: {
    style: Re
  },
  marginTop: {
    style: Re
  },
  marginRight: {
    style: Re
  },
  marginBottom: {
    style: Re
  },
  marginLeft: {
    style: Re
  },
  marginX: {
    style: Re
  },
  marginY: {
    style: Re
  },
  marginInline: {
    style: Re
  },
  marginInlineStart: {
    style: Re
  },
  marginInlineEnd: {
    style: Re
  },
  marginBlock: {
    style: Re
  },
  marginBlockStart: {
    style: Re
  },
  marginBlockEnd: {
    style: Re
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Pt
  },
  rowGap: {
    style: At
  },
  columnGap: {
    style: $t
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Be
  },
  maxWidth: {
    style: An
  },
  minWidth: {
    transform: Be
  },
  height: {
    transform: Be
  },
  maxHeight: {
    transform: Be
  },
  minHeight: {
    transform: Be
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function _i(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Oi(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Pi() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, u = i[t];
    if (!u)
      return {
        [t]: n
      };
    const {
      cssProperty: l = t,
      themeKey: f,
      transform: m,
      style: h
    } = u;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = xt(o, f) || {};
    return h ? h(s) : or(s, n, (C) => {
      let b = vt(y, m, C);
      return C === b && typeof C == "string" && (b = vt(y, m, `${t}${C === "default" ? "" : je(C)}`, C)), l === !1 ? b : {
        [l]: b
      };
    });
  }
  function r(t) {
    const {
      sx: n,
      theme: o = {}
    } = t || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? kt;
    function s(u) {
      let l = u;
      if (typeof u == "function")
        l = u(o);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const f = Wa(o.breakpoints), m = Object.keys(f);
      let h = f;
      return Object.keys(l).forEach((y) => {
        const x = Oi(l[y], o);
        if (x != null)
          if (typeof x == "object")
            if (i[y])
              h = Hr(h, e(y, x, o, i));
            else {
              const C = or({
                theme: o
              }, x, (b) => ({
                [y]: b
              }));
              _i(C, x) ? h[y] = r({
                sx: x,
                theme: o
              }) : h = Hr(h, C);
            }
          else
            h = Hr(h, e(y, x, o, i));
      }), Da(o, za(m, h));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return r;
}
const tt = Pi();
tt.filterProps = ["sx"];
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, bt.apply(null, arguments);
}
function Vo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var $i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ai = /* @__PURE__ */ Vo(
  function(e) {
    return $i.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ki = !1;
function Ii(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Mi(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var ji = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !ki : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Mi(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ii(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ke = "-ms-", St = "-moz-", se = "-webkit-", Wo = "comm", kn = "rule", In = "decl", Ni = "@import", zo = "@keyframes", Di = "@layer", Fi = Math.abs, It = String.fromCharCode, Bi = Object.assign;
function Li(e, r) {
  return Ae(e, 0) ^ 45 ? (((r << 2 ^ Ae(e, 0)) << 2 ^ Ae(e, 1)) << 2 ^ Ae(e, 2)) << 2 ^ Ae(e, 3) : 0;
}
function Yo(e) {
  return e.trim();
}
function Vi(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ce(e, r, t) {
  return e.replace(r, t);
}
function gn(e, r) {
  return e.indexOf(r);
}
function Ae(e, r) {
  return e.charCodeAt(r) | 0;
}
function Xr(e, r, t) {
  return e.slice(r, t);
}
function Xe(e) {
  return e.length;
}
function Mn(e) {
  return e.length;
}
function st(e, r) {
  return r.push(e), e;
}
function Wi(e, r) {
  return e.map(r).join("");
}
var Mt = 1, _r = 1, Uo = 0, Ne = 0, Pe = 0, Or = "";
function jt(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Mt, column: _r, length: s, return: "" };
}
function zr(e, r) {
  return Bi(jt("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function zi() {
  return Pe;
}
function Yi() {
  return Pe = Ne > 0 ? Ae(Or, --Ne) : 0, _r--, Pe === 10 && (_r = 1, Mt--), Pe;
}
function Ve() {
  return Pe = Ne < Uo ? Ae(Or, Ne++) : 0, _r++, Pe === 10 && (_r = 1, Mt++), Pe;
}
function Qe() {
  return Ae(Or, Ne);
}
function pt() {
  return Ne;
}
function nt(e, r) {
  return Xr(Or, e, r);
}
function Jr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function qo(e) {
  return Mt = _r = 1, Uo = Xe(Or = e), Ne = 0, [];
}
function Go(e) {
  return Or = "", e;
}
function mt(e) {
  return Yo(nt(Ne - 1, yn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ui(e) {
  for (; (Pe = Qe()) && Pe < 33; )
    Ve();
  return Jr(e) > 2 || Jr(Pe) > 3 ? "" : " ";
}
function qi(e, r) {
  for (; --r && Ve() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97); )
    ;
  return nt(e, pt() + (r < 6 && Qe() == 32 && Ve() == 32));
}
function yn(e) {
  for (; Ve(); )
    switch (Pe) {
      case e:
        return Ne;
      case 34:
      case 39:
        e !== 34 && e !== 39 && yn(Pe);
        break;
      case 40:
        e === 41 && yn(e);
        break;
      case 92:
        Ve();
        break;
    }
  return Ne;
}
function Gi(e, r) {
  for (; Ve() && e + Pe !== 57; )
    if (e + Pe === 84 && Qe() === 47)
      break;
  return "/*" + nt(r, Ne - 1) + "*" + It(e === 47 ? e : Ve());
}
function Ki(e) {
  for (; !Jr(Qe()); )
    Ve();
  return nt(e, Ne);
}
function Hi(e) {
  return Go(ht("", null, null, null, [""], e = qo(e), 0, [0], e));
}
function ht(e, r, t, n, o, i, s, u, l) {
  for (var f = 0, m = 0, h = s, y = 0, x = 0, C = 0, b = 1, g = 1, O = 1, $ = 0, T = "", R = o, d = i, I = n, j = T; g; )
    switch (C = $, $ = Ve()) {
      case 40:
        if (C != 108 && Ae(j, h - 1) == 58) {
          gn(j += ce(mt($), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        j += mt($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += Ui(C);
        break;
      case 92:
        j += qi(pt() - 1, 7);
        continue;
      case 47:
        switch (Qe()) {
          case 42:
          case 47:
            st(Xi(Gi(Ve(), pt()), r, t), l);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * b:
        u[f++] = Xe(j) * O;
      case 125 * b:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            g = 0;
          case 59 + m:
            O == -1 && (j = ce(j, /\f/g, "")), x > 0 && Xe(j) - h && st(x > 32 ? no(j + ";", n, t, h - 1) : no(ce(j, " ", "") + ";", n, t, h - 2), l);
            break;
          case 59:
            j += ";";
          default:
            if (st(I = to(j, r, t, f, m, o, u, T, R = [], d = [], h), i), $ === 123)
              if (m === 0)
                ht(j, r, I, I, R, i, h, u, d);
              else
                switch (y === 99 && Ae(j, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ht(e, I, I, n && st(to(e, I, I, 0, 0, o, u, T, o, R = [], h), d), o, d, h, u, n ? R : d);
                    break;
                  default:
                    ht(j, I, I, I, [""], d, 0, u, d);
                }
        }
        f = m = x = 0, b = O = 1, T = j = "", h = s;
        break;
      case 58:
        h = 1 + Xe(j), x = C;
      default:
        if (b < 1) {
          if ($ == 123)
            --b;
          else if ($ == 125 && b++ == 0 && Yi() == 125)
            continue;
        }
        switch (j += It($), $ * b) {
          case 38:
            O = m > 0 ? 1 : (j += "\f", -1);
            break;
          case 44:
            u[f++] = (Xe(j) - 1) * O, O = 1;
            break;
          case 64:
            Qe() === 45 && (j += mt(Ve())), y = Qe(), m = h = Xe(T = j += Ki(pt())), $++;
            break;
          case 45:
            C === 45 && Xe(j) == 2 && (b = 0);
        }
    }
  return i;
}
function to(e, r, t, n, o, i, s, u, l, f, m) {
  for (var h = o - 1, y = o === 0 ? i : [""], x = Mn(y), C = 0, b = 0, g = 0; C < n; ++C)
    for (var O = 0, $ = Xr(e, h + 1, h = Fi(b = s[C])), T = e; O < x; ++O)
      (T = Yo(b > 0 ? y[O] + " " + $ : ce($, /&\f/g, y[O]))) && (l[g++] = T);
  return jt(e, r, t, o === 0 ? kn : u, l, f, m);
}
function Xi(e, r, t) {
  return jt(e, r, t, Wo, It(zi()), Xr(e, 2, -2), 0);
}
function no(e, r, t, n) {
  return jt(e, r, t, In, Xr(e, 0, n), Xr(e, n + 1, -1), n);
}
function Rr(e, r) {
  for (var t = "", n = Mn(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Ji(e, r, t, n) {
  switch (e.type) {
    case Di:
      if (e.children.length) break;
    case Ni:
    case In:
      return e.return = e.return || e.value;
    case Wo:
      return "";
    case zo:
      return e.return = e.value + "{" + Rr(e.children, n) + "}";
    case kn:
      e.value = e.props.join(",");
  }
  return Xe(t = Rr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Qi(e) {
  var r = Mn(e);
  return function(t, n, o, i) {
    for (var s = "", u = 0; u < r; u++)
      s += e[u](t, n, o, i) || "";
    return s;
  };
}
function Zi(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var es = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Qe(), o === 38 && i === 12 && (t[n] = 1), !Jr(i); )
    Ve();
  return nt(r, Ne);
}, rs = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Jr(o)) {
      case 0:
        o === 38 && Qe() === 12 && (t[n] = 1), r[n] += es(Ne - 1, t, n);
        break;
      case 2:
        r[n] += mt(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Qe() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += It(o);
    }
  while (o = Ve());
  return r;
}, ts = function(r, t) {
  return Go(rs(qo(r), t));
}, oo = /* @__PURE__ */ new WeakMap(), ns = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !oo.get(n)) && !o) {
      oo.set(r, !0);
      for (var i = [], s = ts(t, i), u = n.props, l = 0, f = 0; l < s.length; l++)
        for (var m = 0; m < u.length; m++, f++)
          r.props[f] = i[l] ? s[l].replace(/&\f/g, u[m]) : u[m] + " " + s[l];
    }
  }
}, os = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Ko(e, r) {
  switch (Li(e, r)) {
    case 5103:
      return se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + St + e + ke + e + e;
    case 6828:
    case 4268:
      return se + e + ke + e + e;
    case 6165:
      return se + e + ke + "flex-" + e + e;
    case 5187:
      return se + e + ce(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + ke + "flex-$1$2") + e;
    case 5443:
      return se + e + ke + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    case 4675:
      return se + e + ke + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return se + e + ke + ce(e, "shrink", "negative") + e;
    case 5292:
      return se + e + ke + ce(e, "basis", "preferred-size") + e;
    case 6060:
      return se + "box-" + ce(e, "-grow", "") + se + e + ke + ce(e, "grow", "positive") + e;
    case 4554:
      return se + ce(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return ce(ce(ce(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return ce(ce(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xe(e) - 1 - r > 6) switch (Ae(e, r + 1)) {
        case 109:
          if (Ae(e, r + 4) !== 45) break;
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + St + (Ae(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~gn(e, "stretch") ? Ko(ce(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (Ae(e, r + 1) !== 115) break;
    case 6444:
      switch (Ae(e, Xe(e) - 3 - (~gn(e, "!important") && 10))) {
        case 107:
          return ce(e, ":", ":" + se) + e;
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (Ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ae(e, r + 11)) {
        case 114:
          return se + e + ke + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + ke + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + ke + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + ke + e + e;
  }
  return e;
}
var as = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case In:
      r.return = Ko(r.value, r.length);
      break;
    case zo:
      return Rr([zr(r, {
        value: ce(r.value, "@", "@" + se)
      })], o);
    case kn:
      if (r.length) return Wi(r.props, function(i) {
        switch (Vi(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Rr([zr(r, {
              props: [ce(i, /:(read-\w+)/, ":" + St + "$1")]
            })], o);
          case "::placeholder":
            return Rr([zr(r, {
              props: [ce(i, /:(plac\w+)/, ":" + se + "input-$1")]
            }), zr(r, {
              props: [ce(i, /:(plac\w+)/, ":" + St + "$1")]
            }), zr(r, {
              props: [ce(i, /:(plac\w+)/, ke + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, is = [as], ss = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(b) {
      var g = b.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || is, i = {}, s, u = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(b) {
      for (var g = b.getAttribute("data-emotion").split(" "), O = 1; O < g.length; O++)
        i[g[O]] = !0;
      u.push(b);
    }
  );
  var l, f = [ns, os];
  {
    var m, h = [Ji, Zi(function(b) {
      m.insert(b);
    })], y = Qi(f.concat(o, h)), x = function(g) {
      return Rr(Hi(g), y);
    };
    l = function(g, O, $, T) {
      m = $, x(g ? g + "{" + O.styles + "}" : O.styles), T && (C.inserted[O.name] = !0);
    };
  }
  var C = {
    key: t,
    sheet: new ji({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return C.sheet.hydrate(u), C;
}, vn = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function cs() {
  if (ao) return fe;
  ao = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function T(d) {
    if (typeof d == "object" && d !== null) {
      var I = d.$$typeof;
      switch (I) {
        case r:
          switch (d = d.type, d) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case u:
                case m:
                case C:
                case x:
                case s:
                  return d;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  function R(d) {
    return T(d) === f;
  }
  return fe.AsyncMode = l, fe.ConcurrentMode = f, fe.ContextConsumer = u, fe.ContextProvider = s, fe.Element = r, fe.ForwardRef = m, fe.Fragment = n, fe.Lazy = C, fe.Memo = x, fe.Portal = t, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = h, fe.isAsyncMode = function(d) {
    return R(d) || T(d) === l;
  }, fe.isConcurrentMode = R, fe.isContextConsumer = function(d) {
    return T(d) === u;
  }, fe.isContextProvider = function(d) {
    return T(d) === s;
  }, fe.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, fe.isForwardRef = function(d) {
    return T(d) === m;
  }, fe.isFragment = function(d) {
    return T(d) === n;
  }, fe.isLazy = function(d) {
    return T(d) === C;
  }, fe.isMemo = function(d) {
    return T(d) === x;
  }, fe.isPortal = function(d) {
    return T(d) === t;
  }, fe.isProfiler = function(d) {
    return T(d) === i;
  }, fe.isStrictMode = function(d) {
    return T(d) === o;
  }, fe.isSuspense = function(d) {
    return T(d) === h;
  }, fe.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === f || d === i || d === o || d === h || d === y || typeof d == "object" && d !== null && (d.$$typeof === C || d.$$typeof === x || d.$$typeof === s || d.$$typeof === u || d.$$typeof === m || d.$$typeof === g || d.$$typeof === O || d.$$typeof === $ || d.$$typeof === b);
  }, fe.typeOf = T, fe;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function us() {
  return io || (io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function T(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === f || S === i || S === o || S === h || S === y || typeof S == "object" && S !== null && (S.$$typeof === C || S.$$typeof === x || S.$$typeof === s || S.$$typeof === u || S.$$typeof === m || S.$$typeof === g || S.$$typeof === O || S.$$typeof === $ || S.$$typeof === b);
    }
    function R(S) {
      if (typeof S == "object" && S !== null) {
        var we = S.$$typeof;
        switch (we) {
          case r:
            var D = S.type;
            switch (D) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case h:
                return D;
              default:
                var Te = D && D.$$typeof;
                switch (Te) {
                  case u:
                  case m:
                  case C:
                  case x:
                  case s:
                    return Te;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var d = l, I = f, j = u, ne = s, c = r, A = m, V = n, B = C, z = x, X = t, oe = i, ae = o, ve = h, xe = !1;
    function Se(S) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || R(S) === l;
    }
    function _(S) {
      return R(S) === f;
    }
    function k(S) {
      return R(S) === u;
    }
    function U(S) {
      return R(S) === s;
    }
    function G(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function L(S) {
      return R(S) === m;
    }
    function re(S) {
      return R(S) === n;
    }
    function Y(S) {
      return R(S) === C;
    }
    function q(S) {
      return R(S) === x;
    }
    function K(S) {
      return R(S) === t;
    }
    function Z(S) {
      return R(S) === i;
    }
    function H(S) {
      return R(S) === o;
    }
    function Ee(S) {
      return R(S) === h;
    }
    de.AsyncMode = d, de.ConcurrentMode = I, de.ContextConsumer = j, de.ContextProvider = ne, de.Element = c, de.ForwardRef = A, de.Fragment = V, de.Lazy = B, de.Memo = z, de.Portal = X, de.Profiler = oe, de.StrictMode = ae, de.Suspense = ve, de.isAsyncMode = Se, de.isConcurrentMode = _, de.isContextConsumer = k, de.isContextProvider = U, de.isElement = G, de.isForwardRef = L, de.isFragment = re, de.isLazy = Y, de.isMemo = q, de.isPortal = K, de.isProfiler = Z, de.isStrictMode = H, de.isSuspense = Ee, de.isValidElementType = T, de.typeOf = R;
  }()), de;
}
process.env.NODE_ENV === "production" ? vn.exports = cs() : vn.exports = us();
var ls = vn.exports, Ho = ls, fs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ds = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xo = {};
Xo[Ho.ForwardRef] = fs;
Xo[Ho.Memo] = ds;
var ps = !0;
function ms(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Jo = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ps === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, hs = function(r, t, n) {
  Jo(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function gs(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var ys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, vs = !1, bs = /[A-Z]|^ms/g, Ss = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qo = function(r) {
  return r.charCodeAt(1) === 45;
}, so = function(r) {
  return r != null && typeof r != "boolean";
}, cn = /* @__PURE__ */ Vo(function(e) {
  return Qo(e) ? e : e.replace(bs, "-$&").toLowerCase();
}), co = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Ss, function(n, o, i) {
          return Je = {
            name: o,
            styles: i,
            next: Je
          }, o;
        });
  }
  return ys[r] !== 1 && !Qo(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, Es = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Qr(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Je = {
          name: o.name,
          styles: o.styles,
          next: Je
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Je = {
              name: s.name,
              styles: s.styles,
              next: Je
            }, s = s.next;
        var u = i.styles + ";";
        return u;
      }
      return Cs(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var l = Je, f = t(e);
        return Je = l, Qr(e, r, f);
      }
      break;
    }
  }
  var m = t;
  if (r == null)
    return m;
  var h = r[m];
  return h !== void 0 ? h : m;
}
function Cs(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Qr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object") {
        var u = s;
        r != null && r[u] !== void 0 ? n += i + "{" + r[u] + "}" : so(u) && (n += cn(i) + ":" + co(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && vs)
          throw new Error(Es);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            so(s[l]) && (n += cn(i) + ":" + co(i, s[l]) + ";");
        else {
          var f = Qr(e, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += cn(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var uo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Je;
function Zo(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Je = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Qr(t, r, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Qr(t, r, e[u]), n) {
      var l = i;
      o += l[u];
    }
  uo.lastIndex = 0;
  for (var f = "", m; (m = uo.exec(o)) !== null; )
    f += "-" + m[1];
  var h = gs(o) + f;
  return {
    name: h,
    styles: o,
    next: Je
  };
}
var Ts = function(r) {
  return r();
}, xs = Q.useInsertionEffect ? Q.useInsertionEffect : !1, ws = xs || Ts, ea = /* @__PURE__ */ Q.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ss({
    key: "css"
  }) : null
);
ea.Provider;
var Rs = function(r) {
  return /* @__PURE__ */ ga(function(t, n) {
    var o = ya(ea);
    return r(t, o, n);
  });
}, _s = /* @__PURE__ */ Q.createContext({});
function Os() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Zo(r);
}
var jn = function() {
  var r = Os.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ps = Ai, $s = function(r) {
  return r !== "theme";
}, lo = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ps : $s;
}, fo = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, As = !1, ks = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Jo(t, n, o), ws(function() {
    return hs(t, n, o);
  }), null;
}, Is = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var u = fo(r, t, n), l = u || lo(o), f = !l("as");
  return function() {
    var m = arguments, h = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      h.push.apply(h, m);
    else {
      h.push(m[0][0]);
      for (var y = m.length, x = 1; x < y; x++)
        h.push(m[x], m[0][x]);
    }
    var C = Rs(function(b, g, O) {
      var $ = f && b.as || o, T = "", R = [], d = b;
      if (b.theme == null) {
        d = {};
        for (var I in b)
          d[I] = b[I];
        d.theme = Q.useContext(_s);
      }
      typeof b.className == "string" ? T = ms(g.registered, R, b.className) : b.className != null && (T = b.className + " ");
      var j = Zo(h.concat(R), g.registered, d);
      T += g.key + "-" + j.name, s !== void 0 && (T += " " + s);
      var ne = f && u === void 0 ? lo($) : l, c = {};
      for (var A in b)
        f && A === "as" || ne(A) && (c[A] = b[A]);
      return c.className = T, O && (c.ref = O), /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(ks, {
        cache: g,
        serialized: j,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ Q.createElement($, c));
    });
    return C.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", C.defaultProps = r.defaultProps, C.__emotion_real = C, C.__emotion_base = o, C.__emotion_styles = h, C.__emotion_forwardProp = u, Object.defineProperty(C, "toString", {
      value: function() {
        return s === void 0 && As ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), C.withComponent = function(b, g) {
      return e(b, bt({}, t, g, {
        shouldForwardProp: fo(C, g, !0)
      })).apply(void 0, h);
    }, C;
  };
}, Ms = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], bn = Is.bind();
Ms.forEach(function(e) {
  bn[e] = bn(e);
});
var Sn = { exports: {} }, Yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function js() {
  if (po) return Yr;
  po = 1;
  var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, f) {
    var m, h = {}, y = null, x = null;
    f !== void 0 && (y = "" + f), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (m in l) n.call(l, m) && !i.hasOwnProperty(m) && (h[m] = l[m]);
    if (u && u.defaultProps) for (m in l = u.defaultProps, l) h[m] === void 0 && (h[m] = l[m]);
    return { $$typeof: r, type: u, key: y, ref: x, props: h, _owner: o.current };
  }
  return Yr.Fragment = t, Yr.jsx = s, Yr.jsxs = s, Yr;
}
var Ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function Ns() {
  return mo || (mo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C = Symbol.iterator, b = "@@iterator";
    function g(a) {
      if (a === null || typeof a != "object")
        return null;
      var p = C && a[C] || a[b];
      return typeof p == "function" ? p : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(a) {
      {
        for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), P = 1; P < p; P++)
          v[P - 1] = arguments[P];
        T("error", a, v);
      }
    }
    function T(a, p, v) {
      {
        var P = O.ReactDebugCurrentFrame, F = P.getStackAddendum();
        F !== "" && (p += "%s", v = v.concat([F]));
        var W = v.map(function(N) {
          return String(N);
        });
        W.unshift("Warning: " + p), Function.prototype.apply.call(console[a], console, W);
      }
    }
    var R = !1, d = !1, I = !1, j = !1, ne = !1, c;
    c = Symbol.for("react.module.reference");
    function A(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || ne || a === o || a === f || a === m || j || a === x || R || d || I || typeof a == "object" && a !== null && (a.$$typeof === y || a.$$typeof === h || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === c || a.getModuleId !== void 0));
    }
    function V(a, p, v) {
      var P = a.displayName;
      if (P)
        return P;
      var F = p.displayName || p.name || "";
      return F !== "" ? v + "(" + F + ")" : v;
    }
    function B(a) {
      return a.displayName || "Context";
    }
    function z(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var p = a;
            return B(p) + ".Consumer";
          case s:
            var v = a;
            return B(v._context) + ".Provider";
          case l:
            return V(a, a.render, "ForwardRef");
          case h:
            var P = a.displayName || null;
            return P !== null ? P : z(a.type) || "Memo";
          case y: {
            var F = a, W = F._payload, N = F._init;
            try {
              return z(N(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, oe = 0, ae, ve, xe, Se, _, k, U;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function L() {
      {
        if (oe === 0) {
          ae = console.log, ve = console.info, xe = console.warn, Se = console.error, _ = console.group, k = console.groupCollapsed, U = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        oe++;
      }
    }
    function re() {
      {
        if (oe--, oe === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, a, {
              value: ae
            }),
            info: X({}, a, {
              value: ve
            }),
            warn: X({}, a, {
              value: xe
            }),
            error: X({}, a, {
              value: Se
            }),
            group: X({}, a, {
              value: _
            }),
            groupCollapsed: X({}, a, {
              value: k
            }),
            groupEnd: X({}, a, {
              value: U
            })
          });
        }
        oe < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = O.ReactCurrentDispatcher, q;
    function K(a, p, v) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (F) {
            var P = F.stack.trim().match(/\n( *(at )?)/);
            q = P && P[1] || "";
          }
        return `
` + q + a;
      }
    }
    var Z = !1, H;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ee();
    }
    function S(a, p) {
      if (!a || Z)
        return "";
      {
        var v = H.get(a);
        if (v !== void 0)
          return v;
      }
      var P;
      Z = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = Y.current, Y.current = null, L();
      try {
        if (p) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (he) {
              P = he;
            }
            Reflect.construct(a, [], N);
          } else {
            try {
              N.call();
            } catch (he) {
              P = he;
            }
            a.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            P = he;
          }
          a();
        }
      } catch (he) {
        if (he && P && typeof he.stack == "string") {
          for (var M = he.stack.split(`
`), ie = P.stack.split(`
`), ee = M.length - 1, te = ie.length - 1; ee >= 1 && te >= 0 && M[ee] !== ie[te]; )
            te--;
          for (; ee >= 1 && te >= 0; ee--, te--)
            if (M[ee] !== ie[te]) {
              if (ee !== 1 || te !== 1)
                do
                  if (ee--, te--, te < 0 || M[ee] !== ie[te]) {
                    var be = `
` + M[ee].replace(" at new ", " at ");
                    return a.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", a.displayName)), typeof a == "function" && H.set(a, be), be;
                  }
                while (ee >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        Z = !1, Y.current = W, re(), Error.prepareStackTrace = F;
      }
      var Fe = a ? a.displayName || a.name : "", Me = Fe ? K(Fe) : "";
      return typeof a == "function" && H.set(a, Me), Me;
    }
    function we(a, p, v) {
      return S(a, !1);
    }
    function D(a) {
      var p = a.prototype;
      return !!(p && p.isReactComponent);
    }
    function Te(a, p, v) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return S(a, D(a));
      if (typeof a == "string")
        return K(a);
      switch (a) {
        case f:
          return K("Suspense");
        case m:
          return K("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return we(a.render);
          case h:
            return Te(a.type, p, v);
          case y: {
            var P = a, F = P._payload, W = P._init;
            try {
              return Te(W(F), p, v);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, Ge = {}, Ke = O.ReactDebugCurrentFrame;
    function Ie(a) {
      if (a) {
        var p = a._owner, v = Te(a.type, a._source, p ? p.type : null);
        Ke.setExtraStackFrame(v);
      } else
        Ke.setExtraStackFrame(null);
    }
    function $r(a, p, v, P, F) {
      {
        var W = Function.call.bind($e);
        for (var N in a)
          if (W(a, N)) {
            var M = void 0;
            try {
              if (typeof a[N] != "function") {
                var ie = Error((P || "React class") + ": " + v + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              M = a[N](p, N, P, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              M = ee;
            }
            M && !(M instanceof Error) && (Ie(F), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", v, N, typeof M), Ie(null)), M instanceof Error && !(M.message in Ge) && (Ge[M.message] = !0, Ie(F), $("Failed %s type: %s", v, M.message), Ie(null));
          }
      }
    }
    var gr = Array.isArray;
    function er(a) {
      return gr(a);
    }
    function J(a) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, v = p && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v;
      }
    }
    function yr(a) {
      try {
        return ur(a), !1;
      } catch {
        return !0;
      }
    }
    function ur(a) {
      return "" + a;
    }
    function ar(a) {
      if (yr(a))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", J(a)), ur(a);
    }
    var We = O.ReactCurrentOwner, Dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ar, kr, lr;
    lr = {};
    function Ft(a) {
      if ($e.call(a, "ref")) {
        var p = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Bt(a) {
      if ($e.call(a, "key")) {
        var p = Object.getOwnPropertyDescriptor(a, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Lt(a, p) {
      if (typeof a.ref == "string" && We.current && p && We.current.stateNode !== p) {
        var v = z(We.current.type);
        lr[v] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(We.current.type), a.ref), lr[v] = !0);
      }
    }
    function Vt(a, p) {
      {
        var v = function() {
          Ar || (Ar = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Wt(a, p) {
      {
        var v = function() {
          kr || (kr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var zt = function(a, p, v, P, F, W, N) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: p,
        ref: v,
        props: N,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Yt(a, p, v, P, F) {
      {
        var W, N = {}, M = null, ie = null;
        v !== void 0 && (ar(v), M = "" + v), Bt(p) && (ar(p.key), M = "" + p.key), Ft(p) && (ie = p.ref, Lt(p, F));
        for (W in p)
          $e.call(p, W) && !Dt.hasOwnProperty(W) && (N[W] = p[W]);
        if (a && a.defaultProps) {
          var ee = a.defaultProps;
          for (W in ee)
            N[W] === void 0 && (N[W] = ee[W]);
        }
        if (M || ie) {
          var te = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          M && Vt(N, te), ie && Wt(N, te);
        }
        return zt(a, M, ie, F, P, We.current, N);
      }
    }
    var fr = O.ReactCurrentOwner, Ir = O.ReactDebugCurrentFrame;
    function De(a) {
      if (a) {
        var p = a._owner, v = Te(a.type, a._source, p ? p.type : null);
        Ir.setExtraStackFrame(v);
      } else
        Ir.setExtraStackFrame(null);
    }
    var dr;
    dr = !1;
    function pr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Mr() {
      {
        if (fr.current) {
          var a = z(fr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Ut(a) {
      return "";
    }
    var jr = {};
    function qt(a) {
      {
        var p = Mr();
        if (!p) {
          var v = typeof a == "string" ? a : a.displayName || a.name;
          v && (p = `

Check the top-level render call using <` + v + ">.");
        }
        return p;
      }
    }
    function Nr(a, p) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var v = qt(p);
        if (jr[v])
          return;
        jr[v] = !0;
        var P = "";
        a && a._owner && a._owner !== fr.current && (P = " It was passed a child from " + z(a._owner.type) + "."), De(a), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, P), De(null);
      }
    }
    function Dr(a, p) {
      {
        if (typeof a != "object")
          return;
        if (er(a))
          for (var v = 0; v < a.length; v++) {
            var P = a[v];
            pr(P) && Nr(P, p);
          }
        else if (pr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var F = g(a);
          if (typeof F == "function" && F !== a.entries)
            for (var W = F.call(a), N; !(N = W.next()).done; )
              pr(N.value) && Nr(N.value, p);
        }
      }
    }
    function Gt(a) {
      {
        var p = a.type;
        if (p == null || typeof p == "string")
          return;
        var v;
        if (typeof p == "function")
          v = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === h))
          v = p.propTypes;
        else
          return;
        if (v) {
          var P = z(p);
          $r(v, a.props, "prop", P, a);
        } else if (p.PropTypes !== void 0 && !dr) {
          dr = !0;
          var F = z(p);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(a) {
      {
        for (var p = Object.keys(a.props), v = 0; v < p.length; v++) {
          var P = p[v];
          if (P !== "children" && P !== "key") {
            De(a), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), De(null);
            break;
          }
        }
        a.ref !== null && (De(a), $("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var Fr = {};
    function Br(a, p, v, P, F, W) {
      {
        var N = A(a);
        if (!N) {
          var M = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Ut();
          ie ? M += ie : M += Mr();
          var ee;
          a === null ? ee = "null" : er(a) ? ee = "array" : a !== void 0 && a.$$typeof === r ? (ee = "<" + (z(a.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof a, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, M);
        }
        var te = Yt(a, p, v, F, W);
        if (te == null)
          return te;
        if (N) {
          var be = p.children;
          if (be !== void 0)
            if (P)
              if (er(be)) {
                for (var Fe = 0; Fe < be.length; Fe++)
                  Dr(be[Fe], a);
                Object.freeze && Object.freeze(be);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dr(be, a);
        }
        if ($e.call(p, "key")) {
          var Me = z(a), he = Object.keys(p).filter(function(en) {
            return en !== "key";
          }), mr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fr[Me + mr]) {
            var Zt = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mr, Me, Zt, Me), Fr[Me + mr] = !0;
          }
        }
        return a === n ? Kt(te) : Gt(te), te;
      }
    }
    function Ht(a, p, v) {
      return Br(a, p, v, !0);
    }
    function Xt(a, p, v) {
      return Br(a, p, v, !1);
    }
    var Jt = Xt, Qt = Ht;
    Ur.Fragment = n, Ur.jsx = Jt, Ur.jsxs = Qt;
  }()), Ur;
}
process.env.NODE_ENV === "production" ? Sn.exports = js() : Sn.exports = Ns();
var Ze = Sn.exports;
/**
 * @mui/styled-engine v6.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ds(e, r) {
  const t = bn(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Fs = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Bs = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function Ls(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5,
    ...o
  } = e, i = Bs(r), s = Object.keys(i);
  function u(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function l(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function f(y, x) {
    const C = s.indexOf(x);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(C !== -1 && typeof r[s[C]] == "number" ? r[s[C]] : x) - n / 100}${t})`;
  }
  function m(y) {
    return s.indexOf(y) + 1 < s.length ? f(y, s[s.indexOf(y) + 1]) : u(y);
  }
  function h(y) {
    const x = s.indexOf(y);
    return x === 0 ? u(s[1]) : x === s.length - 1 ? l(s[x]) : f(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: u,
    down: l,
    between: f,
    only: m,
    not: h,
    unit: t,
    ...o
  };
}
const Vs = {
  borderRadius: 4
};
function ra(e = 8, r = $n({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function Ws(e, r) {
  var n;
  const t = this;
  if (t.vars) {
    if (!((n = t.colorSchemes) != null && n[e]) || typeof t.getColorSchemeSelector != "function")
      return {};
    let o = t.getColorSchemeSelector(e);
    return o === "&" ? r : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: r
    });
  }
  return t.palette.mode === e ? r : {};
}
function ta(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, u = Ls(t), l = ra(o);
  let f = Le({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Vs,
      ...i
    }
  }, s);
  return f = La(f), f.applyStyles = Ws, f = r.reduce((m, h) => Le(m, h), f), f.unstable_sxConfig = {
    ...kt,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, f.unstable_sx = function(h) {
    return tt({
      sx: h,
      theme: this
    });
  }, f;
}
const ho = (e) => e, zs = () => {
  let e = ho;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ho;
    }
  };
}, Ys = zs(), Us = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Nt(e, r, t = "Mui") {
  const n = Us[r];
  return n ? `${t}-${n}` : `${Ys.generate(e)}-${r}`;
}
function Nn(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Nt(e, o, t);
  }), n;
}
var En = { exports: {} }, pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function qs() {
  if (go) return pe;
  go = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function b(g) {
    if (typeof g == "object" && g !== null) {
      var O = g.$$typeof;
      switch (O) {
        case e:
          switch (g = g.type, g) {
            case t:
            case o:
            case n:
            case f:
            case m:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case u:
                case s:
                case l:
                case y:
                case h:
                case i:
                  return g;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  return pe.ContextConsumer = s, pe.ContextProvider = i, pe.Element = e, pe.ForwardRef = l, pe.Fragment = t, pe.Lazy = y, pe.Memo = h, pe.Portal = r, pe.Profiler = o, pe.StrictMode = n, pe.Suspense = f, pe.SuspenseList = m, pe.isAsyncMode = function() {
    return !1;
  }, pe.isConcurrentMode = function() {
    return !1;
  }, pe.isContextConsumer = function(g) {
    return b(g) === s;
  }, pe.isContextProvider = function(g) {
    return b(g) === i;
  }, pe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, pe.isForwardRef = function(g) {
    return b(g) === l;
  }, pe.isFragment = function(g) {
    return b(g) === t;
  }, pe.isLazy = function(g) {
    return b(g) === y;
  }, pe.isMemo = function(g) {
    return b(g) === h;
  }, pe.isPortal = function(g) {
    return b(g) === r;
  }, pe.isProfiler = function(g) {
    return b(g) === o;
  }, pe.isStrictMode = function(g) {
    return b(g) === n;
  }, pe.isSuspense = function(g) {
    return b(g) === f;
  }, pe.isSuspenseList = function(g) {
    return b(g) === m;
  }, pe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === f || g === m || g === x || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === h || g.$$typeof === i || g.$$typeof === s || g.$$typeof === l || g.$$typeof === C || g.getModuleId !== void 0);
  }, pe.typeOf = b, pe;
}
var me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function Gs() {
  return yo || (yo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C = !1, b = !1, g = !1, O = !1, $ = !1, T;
    T = Symbol.for("react.module.reference");
    function R(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === t || D === o || $ || D === n || D === f || D === m || O || D === x || C || b || g || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === h || D.$$typeof === i || D.$$typeof === s || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === T || D.getModuleId !== void 0));
    }
    function d(D) {
      if (typeof D == "object" && D !== null) {
        var Te = D.$$typeof;
        switch (Te) {
          case e:
            var $e = D.type;
            switch ($e) {
              case t:
              case o:
              case n:
              case f:
              case m:
                return $e;
              default:
                var Ge = $e && $e.$$typeof;
                switch (Ge) {
                  case u:
                  case s:
                  case l:
                  case y:
                  case h:
                  case i:
                    return Ge;
                  default:
                    return Te;
                }
            }
          case r:
            return Te;
        }
      }
    }
    var I = s, j = i, ne = e, c = l, A = t, V = y, B = h, z = r, X = o, oe = n, ae = f, ve = m, xe = !1, Se = !1;
    function _(D) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(D) {
      return Se || (Se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(D) {
      return d(D) === s;
    }
    function G(D) {
      return d(D) === i;
    }
    function L(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function re(D) {
      return d(D) === l;
    }
    function Y(D) {
      return d(D) === t;
    }
    function q(D) {
      return d(D) === y;
    }
    function K(D) {
      return d(D) === h;
    }
    function Z(D) {
      return d(D) === r;
    }
    function H(D) {
      return d(D) === o;
    }
    function Ee(D) {
      return d(D) === n;
    }
    function S(D) {
      return d(D) === f;
    }
    function we(D) {
      return d(D) === m;
    }
    me.ContextConsumer = I, me.ContextProvider = j, me.Element = ne, me.ForwardRef = c, me.Fragment = A, me.Lazy = V, me.Memo = B, me.Portal = z, me.Profiler = X, me.StrictMode = oe, me.Suspense = ae, me.SuspenseList = ve, me.isAsyncMode = _, me.isConcurrentMode = k, me.isContextConsumer = U, me.isContextProvider = G, me.isElement = L, me.isForwardRef = re, me.isFragment = Y, me.isLazy = q, me.isMemo = K, me.isPortal = Z, me.isProfiler = H, me.isStrictMode = Ee, me.isSuspense = S, me.isSuspenseList = we, me.isValidElementType = R, me.typeOf = d;
  }()), me;
}
process.env.NODE_ENV === "production" ? En.exports = qs() : En.exports = Gs();
var vo = En.exports;
function na(e, r = "") {
  return e.displayName || e.name || r;
}
function bo(e, r, t) {
  const n = na(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Ks(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return na(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vo.ForwardRef:
          return bo(e, e.render, "ForwardRef");
        case vo.Memo:
          return bo(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Hs = ta();
function un(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Cn(e, r, t) {
  return Qs(r) ? t : r[e] || r;
}
const ct = Symbol("mui.processed_props");
function ut(e, r, t) {
  if (ct in e)
    return e[ct];
  const n = {
    ...e,
    theme: Cn(r, e.theme, t)
  };
  return e[ct] = n, n[ct] = n, n;
}
function Xs(e) {
  return e ? (r, t) => t[e] : null;
}
function gt(e, r) {
  var n;
  const t = typeof e == "function" ? e(r) : e;
  if (Array.isArray(t))
    return t.flatMap((o) => gt(o, r));
  if (Array.isArray(t == null ? void 0 : t.variants)) {
    const {
      variants: o,
      ...i
    } = t;
    let s = i, u;
    e: for (let l = 0; l < o.length; l += 1) {
      const f = o[l];
      if (typeof f.props == "function") {
        if (u ?? (u = {
          ...r,
          ...r.ownerState,
          ownerState: r.ownerState
        }), !f.props(u))
          continue;
      } else
        for (const m in f.props)
          if (r[m] !== f.props[m] && ((n = r.ownerState) == null ? void 0 : n[m]) !== f.props[m])
            continue e;
      Array.isArray(s) || (s = [s]), typeof f.style == "function" ? (u ?? (u = {
        ...r,
        ...r.ownerState,
        ownerState: r.ownerState
      }), s.push(f.style(u))) : s.push(f.style);
    }
    return s;
  }
  return t;
}
function Js(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Hs,
    rootShouldForwardProp: n = un,
    slotShouldForwardProp: o = un
  } = e, i = (u) => tt(ut(u, r, t));
  return i.__mui_systemSx = !0, (u, l = {}) => {
    Fs(u, (I) => I.filter((j) => !(j != null && j.__mui_systemSx)));
    const {
      name: f,
      slot: m,
      skipVariantsResolver: h,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Xs(So(m)),
      ...C
    } = l, b = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), g = y || !1;
    let O;
    process.env.NODE_ENV !== "production" && f && (O = `${f}-${So(m || "Root")}`);
    let $ = un;
    m === "Root" || m === "root" ? $ = n : m ? $ = o : Zs(u) && ($ = void 0);
    const T = Ds(u, {
      shouldForwardProp: $,
      label: O,
      ...C
    }), R = (I) => typeof I == "function" && I.__emotion_real !== I || tr(I) ? (j) => gt(I, ut(j, r, t)) : I, d = (I, ...j) => {
      let ne = R(I);
      const c = j ? j.map(R) : [];
      f && x && c.push((B) => {
        const z = Cn(r, B.theme, t);
        if (!z.components || !z.components[f] || !z.components[f].styleOverrides)
          return null;
        const X = z.components[f].styleOverrides, oe = {}, ae = ut(B, r, t);
        for (const ve in X)
          oe[ve] = gt(X[ve], ae);
        return x(B, oe);
      }), f && !b && c.push((B) => {
        var oe, ae;
        const z = Cn(r, B.theme, t), X = (ae = (oe = z == null ? void 0 : z.components) == null ? void 0 : oe[f]) == null ? void 0 : ae.variants;
        return X ? gt({
          variants: X
        }, ut(B, r, t)) : null;
      }), g || c.push(i);
      const A = c.length - j.length;
      if (Array.isArray(I) && A > 0) {
        const B = new Array(A).fill("");
        ne = [...I, ...B], ne.raw = [...I.raw, ...B];
      }
      const V = T(ne, ...c);
      if (process.env.NODE_ENV !== "production") {
        let B;
        f && (B = `${f}${je(m || "")}`), B === void 0 && (B = `Styled(${Ks(u)})`), V.displayName = B;
      }
      return u.muiName && (V.muiName = u.muiName), V;
    };
    return T.withConfig && (d.withConfig = T.withConfig), d;
  };
}
function Qs(e) {
  for (const r in e)
    return !1;
  return !0;
}
function Zs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function So(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ec = typeof window < "u" ? Q.useLayoutEffect : Q.useEffect;
function rc(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function tc(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function nc(e, r, t, n, o) {
  const i = e[r], s = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let u;
  return typeof i == "function" && !tc(i) && (u = "Did you accidentally provide a plain function component instead?"), u !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${u} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const oc = rc(w.elementType, nc), ac = w.oneOfType([w.func, w.object]);
function ic(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
function lt(e) {
  const r = Q.useRef(e);
  return ec(() => {
    r.current = e;
  }), Q.useRef((...t) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...t)
  )).current;
}
function Eo(...e) {
  return Q.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      ic(t, r);
    });
  }, e);
}
const Co = {};
function oa(e, r) {
  const t = Q.useRef(Co);
  return t.current === Co && (t.current = e(r)), t;
}
const sc = [];
function cc(e) {
  Q.useEffect(e, sc);
}
class Dn {
  constructor() {
    Lr(this, "currentId", null);
    Lr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Lr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Dn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, t) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, t();
    }, r);
  }
}
function uc() {
  const e = oa(Dn.create).current;
  return cc(e.disposeEffect), e;
}
function To(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const lc = /* @__PURE__ */ Q.createContext(void 0);
process.env.NODE_ENV !== "production" && (w.node, w.object);
function fc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? yt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? yt(o, n) : n;
}
function dc({
  props: e,
  name: r
}) {
  const t = Q.useContext(lc);
  return fc({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
function pc(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const xo = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, s) => {
    s === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, mc = (e, r, t) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([u, l]) => {
      (!t || t && !t([...i, u])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, u], Array.isArray(l) ? [...s, u] : s) : r([...i, u], l, s));
    });
  }
  n(e);
}, hc = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function ln(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, s = {};
  return mc(
    e,
    (u, l, f) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(u, l))) {
        const m = `--${t ? `${t}-` : ""}${u.join("-")}`, h = hc(u, l);
        Object.assign(o, {
          [m]: h
        }), xo(i, u, `var(${m})`, f), xo(s, u, `var(${m}, ${h})`, f);
      }
    },
    (u) => u[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function gc(e, r = {}) {
  const {
    getSelector: t = g,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = r, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: u = "light",
    ...l
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: h
  } = ln(l, r);
  let y = h;
  const x = {}, {
    [u]: C,
    ...b
  } = i;
  if (Object.entries(b || {}).forEach(([T, R]) => {
    const {
      vars: d,
      css: I,
      varsWithDefaults: j
    } = ln(R, r);
    y = Le(y, j), x[T] = {
      css: I,
      vars: d
    };
  }), C) {
    const {
      css: T,
      vars: R,
      varsWithDefaults: d
    } = ln(C, r);
    y = Le(y, d), x[u] = {
      css: T,
      vars: R
    };
  }
  function g(T, R) {
    var I, j;
    let d = o;
    if (o === "class" && (d = ".%s"), o === "data" && (d = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (d = `[${o}="%s"]`), T) {
      if (d === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((j = (I = i[T]) == null ? void 0 : I.palette) == null ? void 0 : j.mode) || T})`]: {
            ":root": R
          }
        };
      if (d)
        return e.defaultColorScheme === T ? `:root, ${d.replace("%s", String(T))}` : d.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let T = {
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: R
      }]) => {
        T = Le(T, R);
      }), T;
    },
    generateStyleSheets: () => {
      var ne, c;
      const T = [], R = e.defaultColorScheme || "light";
      function d(A, V) {
        Object.keys(V).length && T.push(typeof A == "string" ? {
          [A]: {
            ...V
          }
        } : A);
      }
      d(t(void 0, {
        ...m
      }), m);
      const {
        [R]: I,
        ...j
      } = x;
      if (I) {
        const {
          css: A
        } = I, V = (c = (ne = i[R]) == null ? void 0 : ne.palette) == null ? void 0 : c.mode, B = !n && V ? {
          colorScheme: V,
          ...A
        } : {
          ...A
        };
        d(t(R, {
          ...B
        }), B);
      }
      return Object.entries(j).forEach(([A, {
        css: V
      }]) => {
        var X, oe;
        const B = (oe = (X = i[A]) == null ? void 0 : X.palette) == null ? void 0 : oe.mode, z = !n && B ? {
          colorScheme: B,
          ...V
        } : {
          ...V
        };
        d(t(A, {
          ...z
        }), z);
      }), T;
    }
  };
}
function yc(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const Zr = {
  black: "#000",
  white: "#fff"
}, vc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, vr = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, br = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, qr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Sr = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Er = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Cr = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, wo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Zr.white,
    default: Zr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, fn = {
  text: {
    primary: Zr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Zr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ro(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Pn(e.main, o) : r === "dark" && (e.dark = On(e.main, i)));
}
function bc(e = "light") {
  return e === "dark" ? {
    main: Sr[200],
    light: Sr[50],
    dark: Sr[400]
  } : {
    main: Sr[700],
    light: Sr[400],
    dark: Sr[800]
  };
}
function Sc(e = "light") {
  return e === "dark" ? {
    main: vr[200],
    light: vr[50],
    dark: vr[400]
  } : {
    main: vr[500],
    light: vr[300],
    dark: vr[700]
  };
}
function Ec(e = "light") {
  return e === "dark" ? {
    main: br[500],
    light: br[300],
    dark: br[700]
  } : {
    main: br[700],
    light: br[400],
    dark: br[800]
  };
}
function Cc(e = "light") {
  return e === "dark" ? {
    main: Er[400],
    light: Er[300],
    dark: Er[700]
  } : {
    main: Er[700],
    light: Er[500],
    dark: Er[900]
  };
}
function Tc(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: Cr[800],
    light: Cr[500],
    dark: Cr[900]
  };
}
function xc(e = "light") {
  return e === "dark" ? {
    main: qr[400],
    light: qr[300],
    dark: qr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qr[500],
    dark: qr[900]
  };
}
function Fn(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || bc(r), s = e.secondary || Sc(r), u = e.error || Ec(r), l = e.info || Cc(r), f = e.success || Tc(r), m = e.warning || xc(r);
  function h(b) {
    const g = Zn(b, fn.text.primary) >= t ? fn.text.primary : wo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = Zn(b, g);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${g} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const y = ({
    color: b,
    name: g,
    mainShade: O = 500,
    lightShade: $ = 300,
    darkShade: T = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[O] && (b.main = b[O]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : ir(11, g ? ` (${g})` : "", O));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ir(12, g ? ` (${g})` : "", JSON.stringify(b.main)));
    return Ro(b, "light", $, n), Ro(b, "dark", T, n), b.contrastText || (b.contrastText = h(b.main)), b;
  }, x = {
    dark: fn,
    light: wo
  };
  return process.env.NODE_ENV !== "production" && (x[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Le({
    // A collection of common colors.
    common: {
      ...Zr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: vc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x[r]
  }, o);
}
function wc(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function Rc(e, r) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function _c(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _o = {
  textTransform: "uppercase"
}, Oo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Oc(e, r) {
  const {
    fontFamily: t = Oo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m,
    ...h
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, x = m || ((g) => `${g / l * y}rem`), C = (g, O, $, T, R) => ({
    fontFamily: t,
    fontWeight: g,
    fontSize: x(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === Oo ? {
      letterSpacing: `${_c(T / O)}em`
    } : {},
    ...R,
    ...f
  }), b = {
    h1: C(o, 96, 1.167, -1.5),
    h2: C(o, 60, 1.2, -0.5),
    h3: C(i, 48, 1.167, 0),
    h4: C(i, 34, 1.235, 0.25),
    h5: C(i, 24, 1.334, 0),
    h6: C(s, 20, 1.6, 0.15),
    subtitle1: C(i, 16, 1.75, 0.15),
    subtitle2: C(s, 14, 1.57, 0.1),
    body1: C(i, 16, 1.5, 0.15),
    body2: C(i, 14, 1.43, 0.15),
    button: C(s, 14, 1.75, 0.4, _o),
    caption: C(i, 12, 1.66, 0.4),
    overline: C(i, 12, 2.66, 1, _o),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Le({
    htmlFontSize: l,
    pxToRem: x,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: u,
    ...b
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Pc = 0.2, $c = 0.14, Ac = 0.12;
function Ce(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Pc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${$c})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ac})`].join(",");
}
const kc = ["none", Ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ic = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Mc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Po(e) {
  return `${Math.round(e)}ms`;
}
function jc(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function Nc(e) {
  const r = {
    ...Ic,
    ...e.easing
  }, t = {
    ...Mc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: jc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: u = r.easeInOut,
        delay: l = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (y) => typeof y == "string", h = (y) => !Number.isNaN(parseFloat(y));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(u) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !m(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : Po(s)} ${u} ${typeof l == "string" ? l : Po(l)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const Dc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Tn(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: u = {},
    shape: l,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ir(20));
  const m = Fn(i), h = ta(e);
  let y = Le(h, {
    mixins: Rc(h.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: kc.slice(),
    typography: Oc(m, u),
    transitions: Nc(s),
    zIndex: {
      ...Dc
    }
  });
  if (y = Le(y, f), y = r.reduce((x, C) => Le(x, C), y), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (b, g) => {
      let O;
      for (O in b) {
        const $ = b[O];
        if (x.includes(O) && Object.keys($).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = Nt("", O);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: $
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[O] = {};
        }
      }
    };
    Object.keys(y.components).forEach((b) => {
      const g = y.components[b].styleOverrides;
      g && b.startsWith("Mui") && C(g, b);
    });
  }
  return y.unstable_sxConfig = {
    ...kt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(C) {
    return tt({
      sx: C,
      theme: this
    });
  }, y;
}
function Fc(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Bc = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Fc(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function aa(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ia(e) {
  return e === "dark" ? Bc : [];
}
function Lc(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    ...o
  } = e, i = Fn(r);
  return {
    palette: i,
    opacity: {
      ...aa(i.mode),
      ...t
    },
    overlays: n || ia(i.mode),
    ...o
  };
}
function Vc(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Wc = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], zc = (e) => (r, t) => {
  const n = e.colorSchemeSelector;
  let o = n;
  if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), n != null && n.startsWith("data-") && !n.includes("%s") && (o = `[${n}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const i = {};
      return Wc(e.cssVarPrefix).forEach((s) => {
        i[s] = t[s], delete t[s];
      }), o === "media" ? {
        ":root": t,
        "@media (prefers-color-scheme: dark)": {
          ":root": i
        }
      } : o ? {
        [o.replace("%s", r)]: i,
        [`:root, ${o.replace("%s", r)}`]: t
      } : {
        ":root": {
          ...t,
          ...i
        }
      };
    }
    if (o && o !== "media")
      return `:root, ${o.replace("%s", String(r))}`;
  } else if (r) {
    if (o === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          ":root": t
        }
      };
    if (o)
      return o.replace("%s", String(r));
  }
  return ":root";
};
function Yc(e) {
  return tr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Uc(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, u] = o[i];
      !Yc(u) || s.startsWith("unstable_") ? delete n[s] : tr(u) && (n[s] = {
        ...u
      }, t(n[s]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function qc(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function E(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Kr(e) {
  return !e || !e.startsWith("hsl") ? e : Do(e);
}
function rr(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = Gr(Kr(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Gc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const He = (e) => {
  try {
    return e();
  } catch {
  }
}, Kc = (e = "mui") => pc(e);
function dn(e, r, t, n) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = n === "dark" ? "dark" : "light";
  if (!t) {
    e[n] = Lc({
      ...r,
      palette: {
        mode: o,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Tn({
    ...t,
    palette: {
      mode: o,
      ...r == null ? void 0 : r.palette
    }
  });
  return e[n] = {
    ...r,
    palette: i,
    opacity: {
      ...aa(o),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || ia(o)
  }, s;
}
function Hc(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Vc,
    colorSchemeSelector: u = t.light && t.dark ? "media" : void 0,
    ...l
  } = e, f = Object.keys(t)[0], m = n || (t.light && f !== "light" ? "light" : f), h = Kc(i), {
    [m]: y,
    light: x,
    dark: C,
    ...b
  } = t, g = {
    ...b
  };
  let O = y;
  if ((m === "dark" && !("dark" in t) || m === "light" && !("light" in t)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : ir(21, m));
  const $ = dn(g, O, l, m);
  x && !g.light && dn(g, x, void 0, "light"), C && !g.dark && dn(g, C, void 0, "dark");
  let T = {
    defaultColorScheme: m,
    ...$,
    cssVarPrefix: i,
    colorSchemeSelector: u,
    getCssVar: h,
    colorSchemes: g,
    font: {
      ...wc($.typography),
      ...$.font
    },
    spacing: Gc(l.spacing)
  };
  Object.keys(T.colorSchemes).forEach((ne) => {
    const c = T.colorSchemes[ne].palette, A = (V) => {
      const B = V.split("-"), z = B[1], X = B[2];
      return h(V, c[z][X]);
    };
    if (c.mode === "light" && (E(c.common, "background", "#fff"), E(c.common, "onBackground", "#000")), c.mode === "dark" && (E(c.common, "background", "#000"), E(c.common, "onBackground", "#fff")), qc(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      E(c.Alert, "errorColor", ge(c.error.light, 0.6)), E(c.Alert, "infoColor", ge(c.info.light, 0.6)), E(c.Alert, "successColor", ge(c.success.light, 0.6)), E(c.Alert, "warningColor", ge(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", A("palette-error-main")), E(c.Alert, "infoFilledBg", A("palette-info-main")), E(c.Alert, "successFilledBg", A("palette-success-main")), E(c.Alert, "warningFilledBg", A("palette-warning-main")), E(c.Alert, "errorFilledColor", He(() => c.getContrastText(c.error.main))), E(c.Alert, "infoFilledColor", He(() => c.getContrastText(c.info.main))), E(c.Alert, "successFilledColor", He(() => c.getContrastText(c.success.main))), E(c.Alert, "warningFilledColor", He(() => c.getContrastText(c.warning.main))), E(c.Alert, "errorStandardBg", ye(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", ye(c.info.light, 0.9)), E(c.Alert, "successStandardBg", ye(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", ye(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", A("palette-error-main")), E(c.Alert, "infoIconColor", A("palette-info-main")), E(c.Alert, "successIconColor", A("palette-success-main")), E(c.Alert, "warningIconColor", A("palette-warning-main")), E(c.AppBar, "defaultBg", A("palette-grey-100")), E(c.Avatar, "defaultBg", A("palette-grey-400")), E(c.Button, "inheritContainedBg", A("palette-grey-300")), E(c.Button, "inheritContainedHoverBg", A("palette-grey-A100")), E(c.Chip, "defaultBorder", A("palette-grey-400")), E(c.Chip, "defaultAvatarColor", A("palette-grey-700")), E(c.Chip, "defaultIconColor", A("palette-grey-700")), E(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), E(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), E(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), E(c.LinearProgress, "primaryBg", ye(c.primary.main, 0.62)), E(c.LinearProgress, "secondaryBg", ye(c.secondary.main, 0.62)), E(c.LinearProgress, "errorBg", ye(c.error.main, 0.62)), E(c.LinearProgress, "infoBg", ye(c.info.main, 0.62)), E(c.LinearProgress, "successBg", ye(c.success.main, 0.62)), E(c.LinearProgress, "warningBg", ye(c.warning.main, 0.62)), E(c.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), E(c.Slider, "primaryTrack", ye(c.primary.main, 0.62)), E(c.Slider, "secondaryTrack", ye(c.secondary.main, 0.62)), E(c.Slider, "errorTrack", ye(c.error.main, 0.62)), E(c.Slider, "infoTrack", ye(c.info.main, 0.62)), E(c.Slider, "successTrack", ye(c.success.main, 0.62)), E(c.Slider, "warningTrack", ye(c.warning.main, 0.62));
      const V = it(c.background.default, 0.8);
      E(c.SnackbarContent, "bg", V), E(c.SnackbarContent, "color", He(() => c.getContrastText(V))), E(c.SpeedDialAction, "fabHoverBg", it(c.background.paper, 0.15)), E(c.StepConnector, "border", A("palette-grey-400")), E(c.StepContent, "border", A("palette-grey-400")), E(c.Switch, "defaultColor", A("palette-common-white")), E(c.Switch, "defaultDisabledColor", A("palette-grey-100")), E(c.Switch, "primaryDisabledColor", ye(c.primary.main, 0.62)), E(c.Switch, "secondaryDisabledColor", ye(c.secondary.main, 0.62)), E(c.Switch, "errorDisabledColor", ye(c.error.main, 0.62)), E(c.Switch, "infoDisabledColor", ye(c.info.main, 0.62)), E(c.Switch, "successDisabledColor", ye(c.success.main, 0.62)), E(c.Switch, "warningDisabledColor", ye(c.warning.main, 0.62)), E(c.TableCell, "border", ye(at(c.divider, 1), 0.88)), E(c.Tooltip, "bg", at(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      E(c.Alert, "errorColor", ye(c.error.light, 0.6)), E(c.Alert, "infoColor", ye(c.info.light, 0.6)), E(c.Alert, "successColor", ye(c.success.light, 0.6)), E(c.Alert, "warningColor", ye(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", A("palette-error-dark")), E(c.Alert, "infoFilledBg", A("palette-info-dark")), E(c.Alert, "successFilledBg", A("palette-success-dark")), E(c.Alert, "warningFilledBg", A("palette-warning-dark")), E(c.Alert, "errorFilledColor", He(() => c.getContrastText(c.error.dark))), E(c.Alert, "infoFilledColor", He(() => c.getContrastText(c.info.dark))), E(c.Alert, "successFilledColor", He(() => c.getContrastText(c.success.dark))), E(c.Alert, "warningFilledColor", He(() => c.getContrastText(c.warning.dark))), E(c.Alert, "errorStandardBg", ge(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", ge(c.info.light, 0.9)), E(c.Alert, "successStandardBg", ge(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", ge(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", A("palette-error-main")), E(c.Alert, "infoIconColor", A("palette-info-main")), E(c.Alert, "successIconColor", A("palette-success-main")), E(c.Alert, "warningIconColor", A("palette-warning-main")), E(c.AppBar, "defaultBg", A("palette-grey-900")), E(c.AppBar, "darkBg", A("palette-background-paper")), E(c.AppBar, "darkColor", A("palette-text-primary")), E(c.Avatar, "defaultBg", A("palette-grey-600")), E(c.Button, "inheritContainedBg", A("palette-grey-800")), E(c.Button, "inheritContainedHoverBg", A("palette-grey-700")), E(c.Chip, "defaultBorder", A("palette-grey-700")), E(c.Chip, "defaultAvatarColor", A("palette-grey-300")), E(c.Chip, "defaultIconColor", A("palette-grey-300")), E(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), E(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), E(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), E(c.LinearProgress, "primaryBg", ge(c.primary.main, 0.5)), E(c.LinearProgress, "secondaryBg", ge(c.secondary.main, 0.5)), E(c.LinearProgress, "errorBg", ge(c.error.main, 0.5)), E(c.LinearProgress, "infoBg", ge(c.info.main, 0.5)), E(c.LinearProgress, "successBg", ge(c.success.main, 0.5)), E(c.LinearProgress, "warningBg", ge(c.warning.main, 0.5)), E(c.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), E(c.Slider, "primaryTrack", ge(c.primary.main, 0.5)), E(c.Slider, "secondaryTrack", ge(c.secondary.main, 0.5)), E(c.Slider, "errorTrack", ge(c.error.main, 0.5)), E(c.Slider, "infoTrack", ge(c.info.main, 0.5)), E(c.Slider, "successTrack", ge(c.success.main, 0.5)), E(c.Slider, "warningTrack", ge(c.warning.main, 0.5));
      const V = it(c.background.default, 0.98);
      E(c.SnackbarContent, "bg", V), E(c.SnackbarContent, "color", He(() => c.getContrastText(V))), E(c.SpeedDialAction, "fabHoverBg", it(c.background.paper, 0.15)), E(c.StepConnector, "border", A("palette-grey-600")), E(c.StepContent, "border", A("palette-grey-600")), E(c.Switch, "defaultColor", A("palette-grey-300")), E(c.Switch, "defaultDisabledColor", A("palette-grey-600")), E(c.Switch, "primaryDisabledColor", ge(c.primary.main, 0.55)), E(c.Switch, "secondaryDisabledColor", ge(c.secondary.main, 0.55)), E(c.Switch, "errorDisabledColor", ge(c.error.main, 0.55)), E(c.Switch, "infoDisabledColor", ge(c.info.main, 0.55)), E(c.Switch, "successDisabledColor", ge(c.success.main, 0.55)), E(c.Switch, "warningDisabledColor", ge(c.warning.main, 0.55)), E(c.TableCell, "border", ge(at(c.divider, 1), 0.68)), E(c.Tooltip, "bg", at(c.grey[700], 0.92));
    }
    rr(c.background, "default"), rr(c.background, "paper"), rr(c.common, "background"), rr(c.common, "onBackground"), rr(c, "divider"), Object.keys(c).forEach((V) => {
      const B = c[V];
      B && typeof B == "object" && (B.main && E(c[V], "mainChannel", Gr(Kr(B.main))), B.light && E(c[V], "lightChannel", Gr(Kr(B.light))), B.dark && E(c[V], "darkChannel", Gr(Kr(B.dark))), B.contrastText && E(c[V], "contrastTextChannel", Gr(Kr(B.contrastText))), V === "text" && (rr(c[V], "primary"), rr(c[V], "secondary")), V === "action" && (B.active && rr(c[V], "active"), B.selected && rr(c[V], "selected")));
    });
  }), T = r.reduce((ne, c) => Le(ne, c), T);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: zc(T)
  }, {
    vars: d,
    generateThemeVars: I,
    generateStyleSheets: j
  } = gc(T, R);
  return T.vars = d, Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([ne, c]) => {
    T[ne] = c;
  }), T.generateThemeVars = I, T.generateStyleSheets = j, T.generateSpacing = function() {
    return ra(l.spacing, $n(this));
  }, T.getColorSchemeSelector = yc(u), T.spacing = T.generateSpacing(), T.shouldSkipGeneratingVar = s, T.unstable_sxConfig = {
    ...kt,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, T.unstable_sx = function(c) {
    return tt({
      sx: c,
      theme: this
    });
  }, T.toRuntimeSource = Uc, T;
}
function $o(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: Fn({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function Xc(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...s
  } = e, u = i || "light", l = o == null ? void 0 : o[u], f = {
    ...o,
    ...t ? {
      [u]: {
        ...typeof l != "boolean" && l,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Tn(e, ...r);
    let m = t;
    "palette" in e || f[u] && (f[u] !== !0 ? m = f[u].palette : u === "dark" && (m = {
      mode: "dark"
    }));
    const h = Tn({
      ...e,
      palette: m
    }, ...r);
    return h.defaultColorScheme = u, h.colorSchemes = f, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: h.palette
    }, $o(h, "dark", f.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: h.palette
    }, $o(h, "light", f.light)), h;
  }
  return !t && !("light" in f) && u === "light" && (f.light = !0), Hc({
    ...s,
    colorSchemes: f,
    defaultColorScheme: u,
    ...typeof n != "boolean" && n
  }, ...r);
}
const Jc = Xc(), Qc = "$$material", Pr = Js({
  themeId: Qc,
  defaultTheme: Jc,
  rootShouldForwardProp: Fo
}), Ao = {
  theme: void 0
};
function Zc(e) {
  let r, t;
  return (n) => {
    let o = r;
    return (o === void 0 || n.theme !== t) && (Ao.theme = n.theme, o = e(Ao), r = o, t = n.theme), o;
  };
}
process.env.NODE_ENV !== "production" && (w.node, w.object.isRequired);
function Bn(e) {
  return dc(e);
}
class Et {
  constructor() {
    Lr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Et();
  }
  static use() {
    const r = oa(Et.create).current, [t, n] = Q.useState(!1);
    return r.shouldMount = t, r.setShouldMount = n, Q.useEffect(r.mountEffect, [t]), r;
  }
  mount() {
    return this.mounted || (this.mounted = ru(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var t;
      return (t = this.ref.current) == null ? void 0 : t.pulsate(...r);
    });
  }
}
function eu() {
  return Et.use();
}
function ru() {
  let e, r;
  const t = new Promise((n, o) => {
    e = n, r = o;
  });
  return t.resolve = e, t.reject = r, t;
}
function tu(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function xn(e, r) {
  return xn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, xn(e, r);
}
function nu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, xn(e, r);
}
const ko = nr.createContext(null);
function ou(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ln(e, r) {
  var t = function(i) {
    return r && ft(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && va.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function au(e, r) {
  e = e || {}, r = r || {};
  function t(m) {
    return m in r ? r[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, u = {};
  for (var l in r) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var f = n[l][s];
        u[n[l][s]] = t(f);
      }
    u[l] = t(l);
  }
  for (s = 0; s < o.length; s++)
    u[o[s]] = t(o[s]);
  return u;
}
function hr(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function iu(e, r) {
  return Ln(e.children, function(t) {
    return dt(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: hr(t, "appear", e),
      enter: hr(t, "enter", e),
      exit: hr(t, "exit", e)
    });
  });
}
function su(e, r, t) {
  var n = Ln(e.children), o = au(r, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (ft(s)) {
      var u = i in r, l = i in n, f = r[i], m = ft(f) && !f.props.in;
      l && (!u || m) ? o[i] = dt(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: hr(s, "exit", e),
        enter: hr(s, "enter", e)
      }) : !l && u && !m ? o[i] = dt(s, {
        in: !1
      }) : l && u && ft(f) && (o[i] = dt(s, {
        onExited: t.bind(null, s),
        in: f.props.in,
        exit: hr(s, "exit", e),
        enter: hr(s, "enter", e)
      }));
    }
  }), o;
}
var cu = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, uu = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, Vn = /* @__PURE__ */ function(e) {
  nu(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(ou(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(o, i) {
    var s = i.children, u = i.handleExited, l = i.firstRender;
    return {
      children: l ? iu(o, u) : su(o, s, u),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var s = Ln(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(u) {
      var l = bt({}, u.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, u = tu(o, ["component", "childFactory"]), l = this.state.contextValue, f = cu(this.state.children).map(s);
    return delete u.appear, delete u.enter, delete u.exit, i === null ? /* @__PURE__ */ nr.createElement(ko.Provider, {
      value: l
    }, f) : /* @__PURE__ */ nr.createElement(ko.Provider, {
      value: l
    }, /* @__PURE__ */ nr.createElement(i, u, f));
  }, r;
}(nr.Component);
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: w.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: w.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: w.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: w.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: w.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: w.func
} : {};
Vn.defaultProps = uu;
function sa(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: u,
    onExited: l,
    timeout: f
  } = e, [m, h] = Q.useState(!1), y = ze(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, C = ze(t.child, m && t.childLeaving, n && t.childPulsate);
  return !u && !m && h(!0), Q.useEffect(() => {
    if (!u && l != null) {
      const b = setTimeout(l, f);
      return () => {
        clearTimeout(b);
      };
    }
  }, [l, u, f]), /* @__PURE__ */ Ze.jsx("span", {
    className: y,
    style: x,
    children: /* @__PURE__ */ Ze.jsx("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (sa.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object.isRequired,
  className: w.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: w.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: w.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: w.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: w.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: w.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: w.number,
  /**
   * exit delay
   */
  timeout: w.number.isRequired
});
const Ye = Nn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), wn = 550, lu = 80, fu = jn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, du = jn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, pu = jn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, mu = Pr("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), hu = Pr(sa, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ye.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${fu};
    animation-duration: ${wn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ye.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ye.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ye.childLeaving} {
    opacity: 0;
    animation-name: ${du};
    animation-duration: ${wn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ye.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pu};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ca = /* @__PURE__ */ Q.forwardRef(function(r, t) {
  const n = Bn({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...u
  } = n, [l, f] = Q.useState([]), m = Q.useRef(0), h = Q.useRef(null);
  Q.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const y = Q.useRef(!1), x = uc(), C = Q.useRef(null), b = Q.useRef(null), g = Q.useCallback((R) => {
    const {
      pulsate: d,
      rippleX: I,
      rippleY: j,
      rippleSize: ne,
      cb: c
    } = R;
    f((A) => [...A, /* @__PURE__ */ Ze.jsx(hu, {
      classes: {
        ripple: ze(i.ripple, Ye.ripple),
        rippleVisible: ze(i.rippleVisible, Ye.rippleVisible),
        ripplePulsate: ze(i.ripplePulsate, Ye.ripplePulsate),
        child: ze(i.child, Ye.child),
        childLeaving: ze(i.childLeaving, Ye.childLeaving),
        childPulsate: ze(i.childPulsate, Ye.childPulsate)
      },
      timeout: wn,
      pulsate: d,
      rippleX: I,
      rippleY: j,
      rippleSize: ne
    }, m.current)]), m.current += 1, h.current = c;
  }, [i]), O = Q.useCallback((R = {}, d = {}, I = () => {
  }) => {
    const {
      pulsate: j = !1,
      center: ne = o || d.pulsate,
      fakeElement: c = !1
      // For test purposes
    } = d;
    if ((R == null ? void 0 : R.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (R == null ? void 0 : R.type) === "touchstart" && (y.current = !0);
    const A = c ? null : b.current, V = A ? A.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, z, X;
    if (ne || R === void 0 || R.clientX === 0 && R.clientY === 0 || !R.clientX && !R.touches)
      B = Math.round(V.width / 2), z = Math.round(V.height / 2);
    else {
      const {
        clientX: oe,
        clientY: ae
      } = R.touches && R.touches.length > 0 ? R.touches[0] : R;
      B = Math.round(oe - V.left), z = Math.round(ae - V.top);
    }
    if (ne)
      X = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3), X % 2 === 0 && (X += 1);
    else {
      const oe = Math.max(Math.abs((A ? A.clientWidth : 0) - B), B) * 2 + 2, ae = Math.max(Math.abs((A ? A.clientHeight : 0) - z), z) * 2 + 2;
      X = Math.sqrt(oe ** 2 + ae ** 2);
    }
    R != null && R.touches ? C.current === null && (C.current = () => {
      g({
        pulsate: j,
        rippleX: B,
        rippleY: z,
        rippleSize: X,
        cb: I
      });
    }, x.start(lu, () => {
      C.current && (C.current(), C.current = null);
    })) : g({
      pulsate: j,
      rippleX: B,
      rippleY: z,
      rippleSize: X,
      cb: I
    });
  }, [o, g, x]), $ = Q.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), T = Q.useCallback((R, d) => {
    if (x.clear(), (R == null ? void 0 : R.type) === "touchend" && C.current) {
      C.current(), C.current = null, x.start(0, () => {
        T(R, d);
      });
      return;
    }
    C.current = null, f((I) => I.length > 0 ? I.slice(1) : I), h.current = d;
  }, [x]);
  return Q.useImperativeHandle(t, () => ({
    pulsate: $,
    start: O,
    stop: T
  }), [$, O, T]), /* @__PURE__ */ Ze.jsx(mu, {
    className: ze(Ye.root, i.root, s),
    ref: b,
    ...u,
    children: /* @__PURE__ */ Ze.jsx(Vn, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (ca.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: w.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string
});
function gu(e) {
  return Nt("MuiButtonBase", e);
}
const yu = Nn("MuiButtonBase", ["root", "disabled", "focusVisible"]), vu = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, s = No({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, gu, o);
  return t && n && (s.root += ` ${n}`), s;
}, bu = Pr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${yu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ua = /* @__PURE__ */ Q.forwardRef(function(r, t) {
  const n = Bn({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: u,
    component: l = "button",
    disabled: f = !1,
    disableRipple: m = !1,
    disableTouchRipple: h = !1,
    focusRipple: y = !1,
    focusVisibleClassName: x,
    LinkComponent: C = "a",
    onBlur: b,
    onClick: g,
    onContextMenu: O,
    onDragLeave: $,
    onFocus: T,
    onFocusVisible: R,
    onKeyDown: d,
    onKeyUp: I,
    onMouseDown: j,
    onMouseLeave: ne,
    onMouseUp: c,
    onTouchEnd: A,
    onTouchMove: V,
    onTouchStart: B,
    tabIndex: z = 0,
    TouchRippleProps: X,
    touchRippleRef: oe,
    type: ae,
    ...ve
  } = n, xe = Q.useRef(null), Se = eu(), _ = Eo(Se.ref, oe), [k, U] = Q.useState(!1);
  f && k && U(!1), Q.useImperativeHandle(o, () => ({
    focusVisible: () => {
      U(!0), xe.current.focus();
    }
  }), []);
  const G = Se.shouldMount && !m && !f;
  Q.useEffect(() => {
    k && y && !m && Se.pulsate();
  }, [m, y, k, Se]);
  function L(J, yr, ur = h) {
    return lt((ar) => (yr && yr(ar), ur || Se[J](ar), !0));
  }
  const re = L("start", j), Y = L("stop", O), q = L("stop", $), K = L("stop", c), Z = L("stop", (J) => {
    k && J.preventDefault(), ne && ne(J);
  }), H = L("start", B), Ee = L("stop", A), S = L("stop", V), we = L("stop", (J) => {
    To(J.target) || U(!1), b && b(J);
  }, !1), D = lt((J) => {
    xe.current || (xe.current = J.currentTarget), To(J.target) && (U(!0), R && R(J)), T && T(J);
  }), Te = () => {
    const J = xe.current;
    return l && l !== "button" && !(J.tagName === "A" && J.href);
  }, $e = lt((J) => {
    y && !J.repeat && k && J.key === " " && Se.stop(J, () => {
      Se.start(J);
    }), J.target === J.currentTarget && Te() && J.key === " " && J.preventDefault(), d && d(J), J.target === J.currentTarget && Te() && J.key === "Enter" && !f && (J.preventDefault(), g && g(J));
  }), Ge = lt((J) => {
    y && J.key === " " && k && !J.defaultPrevented && Se.stop(J, () => {
      Se.pulsate(J);
    }), I && I(J), g && J.target === J.currentTarget && Te() && J.key === " " && !J.defaultPrevented && g(J);
  });
  let Ke = l;
  Ke === "button" && (ve.href || ve.to) && (Ke = C);
  const Ie = {};
  Ke === "button" ? (Ie.type = ae === void 0 ? "button" : ae, Ie.disabled = f) : (!ve.href && !ve.to && (Ie.role = "button"), f && (Ie["aria-disabled"] = f));
  const $r = Eo(t, xe), gr = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: f,
    disableRipple: m,
    disableTouchRipple: h,
    focusRipple: y,
    tabIndex: z,
    focusVisible: k
  }, er = vu(gr);
  return /* @__PURE__ */ Ze.jsxs(bu, {
    as: Ke,
    className: ze(er.root, u),
    ownerState: gr,
    onBlur: we,
    onClick: g,
    onContextMenu: Y,
    onFocus: D,
    onKeyDown: $e,
    onKeyUp: Ge,
    onMouseDown: re,
    onMouseLeave: Z,
    onMouseUp: K,
    onDragLeave: q,
    onTouchEnd: Ee,
    onTouchMove: S,
    onTouchStart: H,
    ref: $r,
    tabIndex: f ? -1 : z,
    type: ae,
    ...Ie,
    ...ve,
    children: [s, G ? /* @__PURE__ */ Ze.jsx(ca, {
      ref: _,
      center: i,
      ...X
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ua.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ac,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: w.bool,
  /**
   * The content of the component.
   */
  children: w.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: oc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: w.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: w.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: w.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: w.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: w.string,
  /**
   * @ignore
   */
  href: w.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: w.elementType,
  /**
   * @ignore
   */
  onBlur: w.func,
  /**
   * @ignore
   */
  onClick: w.func,
  /**
   * @ignore
   */
  onContextMenu: w.func,
  /**
   * @ignore
   */
  onDragLeave: w.func,
  /**
   * @ignore
   */
  onFocus: w.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: w.func,
  /**
   * @ignore
   */
  onKeyDown: w.func,
  /**
   * @ignore
   */
  onKeyUp: w.func,
  /**
   * @ignore
   */
  onMouseDown: w.func,
  /**
   * @ignore
   */
  onMouseLeave: w.func,
  /**
   * @ignore
   */
  onMouseUp: w.func,
  /**
   * @ignore
   */
  onTouchEnd: w.func,
  /**
   * @ignore
   */
  onTouchMove: w.func,
  /**
   * @ignore
   */
  onTouchStart: w.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * @default 0
   */
  tabIndex: w.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: w.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: w.oneOfType([w.func, w.shape({
    current: w.shape({
      pulsate: w.func.isRequired,
      start: w.func.isRequired,
      stop: w.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: w.oneOfType([w.oneOf(["button", "reset", "submit"]), w.string])
});
function Su(e) {
  return typeof e.main == "string";
}
function Eu(e, r = []) {
  if (!Su(e))
    return !1;
  for (const t of r)
    if (!e.hasOwnProperty(t) || typeof e[t] != "string")
      return !1;
  return !0;
}
function Cu(e = []) {
  return ([, r]) => r && Eu(r, e);
}
function Tu(e) {
  return Nt("MuiButton", e);
}
const Tr = Nn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), la = /* @__PURE__ */ Q.createContext({});
process.env.NODE_ENV !== "production" && (la.displayName = "ButtonGroupContext");
const fa = /* @__PURE__ */ Q.createContext(void 0);
process.env.NODE_ENV !== "production" && (fa.displayName = "ButtonGroupButtonContext");
const xu = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, u = {
    root: ["root", i, `${i}${je(r)}`, `size${je(o)}`, `${i}Size${je(o)}`, `color${je(r)}`, t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${je(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${je(o)}`]
  }, l = No(u, Tu, s);
  return {
    ...s,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, da = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], wu = Pr(ua, {
  shouldForwardProp: (e) => Fo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${je(t.color)}`], r[`size${je(t.size)}`], r[`${t.variant}Size${je(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(Zc(({
  theme: e
}) => {
  var n, o;
  const r = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], t = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Tr.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Tr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Tr.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Tr.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Cu(["dark", "contrastText"])).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[i].main,
        "--variant-outlinedColor": (e.vars || e).palette[i].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / 0.5)` : xr(e.palette[i].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[i].contrastText,
        "--variant-containedBg": (e.vars || e).palette[i].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[i].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette[i].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[i].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette[i].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        "--variant-containedColor": e.vars ? (
          // this is safe because grey does not change between default light/dark mode
          e.vars.palette.text.primary
        ) : (o = (n = e.palette).getContrastText) == null ? void 0 : o.call(n, r),
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : r,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : t,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : xr(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Tr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Tr.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Ru = Pr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${je(t.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...da]
}), _u = Pr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${je(t.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...da]
}), pa = /* @__PURE__ */ Q.forwardRef(function(r, t) {
  const n = Q.useContext(la), o = Q.useContext(fa), i = yt(n, r), s = Bn({
    props: i,
    name: "MuiButton"
  }), {
    children: u,
    color: l = "primary",
    component: f = "button",
    className: m,
    disabled: h = !1,
    disableElevation: y = !1,
    disableFocusRipple: x = !1,
    endIcon: C,
    focusVisibleClassName: b,
    fullWidth: g = !1,
    size: O = "medium",
    startIcon: $,
    type: T,
    variant: R = "text",
    ...d
  } = s, I = {
    ...s,
    color: l,
    component: f,
    disabled: h,
    disableElevation: y,
    disableFocusRipple: x,
    fullWidth: g,
    size: O,
    type: T,
    variant: R
  }, j = xu(I), ne = $ && /* @__PURE__ */ Ze.jsx(Ru, {
    className: j.startIcon,
    ownerState: I,
    children: $
  }), c = C && /* @__PURE__ */ Ze.jsx(_u, {
    className: j.endIcon,
    ownerState: I,
    children: C
  }), A = o || "";
  return /* @__PURE__ */ Ze.jsxs(wu, {
    ownerState: I,
    className: ze(n.className, j.root, m, A),
    component: f,
    disabled: h,
    focusRipple: !x,
    focusVisibleClassName: ze(j.focusVisible, b),
    ref: t,
    type: T,
    ...d,
    classes: j,
    children: [ne, u, c]
  });
});
process.env.NODE_ENV !== "production" && (pa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: w.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: w.oneOfType([w.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), w.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: w.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: w.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: w.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: w.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: w.bool,
  /**
   * Element placed after the children.
   */
  endIcon: w.node,
  /**
   * @ignore
   */
  focusVisibleClassName: w.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: w.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: w.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: w.oneOfType([w.oneOf(["small", "medium", "large"]), w.string]),
  /**
   * Element placed before the children.
   */
  startIcon: w.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * @ignore
   */
  type: w.oneOfType([w.oneOf(["button", "reset", "submit"]), w.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: w.oneOfType([w.oneOf(["contained", "outlined", "text"]), w.string])
});
function $u(e) {
  const { bgcolor: r, text: t, txtcolor: n, disabled: o, onClick: i, size: s } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ Ca.jsx(
      pa,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: s,
        sx: { backgroundColor: r, color: n },
        children: t
      }
    )
  );
}
export {
  $u as CustomButton
};
//# sourceMappingURL=index.es.js.map
