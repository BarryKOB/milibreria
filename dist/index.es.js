var yi = Object.defineProperty;
var bi = (e, r, t) => r in e ? yi(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Tr = (e, r, t) => bi(e, typeof r != "symbol" ? r + "" : r, t);
import * as D from "react";
import ir, { forwardRef as vi, useContext as Si, Children as Ci, isValidElement as Xr, cloneElement as Jr } from "react";
function Ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, wr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function xi() {
  if (wn) return wr;
  wn = 1;
  var e = ir, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, d) {
    var p, m = {}, b = null, x = null;
    d !== void 0 && (b = "" + d), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (p in u) n.call(u, p) && !i.hasOwnProperty(p) && (m[p] = u[p]);
    if (c && c.defaultProps) for (p in u = c.defaultProps, u) m[p] === void 0 && (m[p] = u[p]);
    return { $$typeof: r, type: c, key: b, ref: x, props: m, _owner: o.current };
  }
  return wr.Fragment = t, wr.jsx = a, wr.jsxs = a, wr;
}
var Rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Ti() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ir, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C = Symbol.iterator, y = "@@iterator";
    function g(l) {
      if (l === null || typeof l != "object")
        return null;
      var $ = C && l[C] || l[y];
      return typeof $ == "function" ? $ : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(l) {
      {
        for (var $ = arguments.length, A = new Array($ > 1 ? $ - 1 : 0), V = 1; V < $; V++)
          A[V - 1] = arguments[V];
        w("error", l, A);
      }
    }
    function w(l, $, A) {
      {
        var V = T.ReactDebugCurrentFrame, oe = V.getStackAddendum();
        oe !== "" && ($ += "%s", A = A.concat([oe]));
        var fe = A.map(function(Z) {
          return String(Z);
        });
        fe.unshift("Warning: " + $), Function.prototype.apply.call(console[l], console, fe);
      }
    }
    var E = !1, f = !1, k = !1, I = !1, Q = !1, X;
    X = Symbol.for("react.module.reference");
    function s(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || Q || l === o || l === d || l === p || I || l === x || E || f || k || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === m || l.$$typeof === a || l.$$typeof === c || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === X || l.getModuleId !== void 0));
    }
    function _(l, $, A) {
      var V = l.displayName;
      if (V)
        return V;
      var oe = $.displayName || $.name || "";
      return oe !== "" ? A + "(" + oe + ")" : A;
    }
    function N(l) {
      return l.displayName || "Context";
    }
    function B(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            var $ = l;
            return N($) + ".Consumer";
          case a:
            var A = l;
            return N(A._context) + ".Provider";
          case u:
            return _(l, l.render, "ForwardRef");
          case m:
            var V = l.displayName || null;
            return V !== null ? V : B(l.type) || "Memo";
          case b: {
            var oe = l, fe = oe._payload, Z = oe._init;
            try {
              return B(Z(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, ne = 0, ee, ge, ye, Ee, R, O, F;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function j() {
      {
        if (ne === 0) {
          ee = console.log, ge = console.info, ye = console.warn, Ee = console.error, R = console.group, O = console.groupCollapsed, F = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ne++;
      }
    }
    function K() {
      {
        if (ne--, ne === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, l, {
              value: ee
            }),
            info: U({}, l, {
              value: ge
            }),
            warn: U({}, l, {
              value: ye
            }),
            error: U({}, l, {
              value: Ee
            }),
            group: U({}, l, {
              value: R
            }),
            groupCollapsed: U({}, l, {
              value: O
            }),
            groupEnd: U({}, l, {
              value: F
            })
          });
        }
        ne < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = T.ReactCurrentDispatcher, L;
    function Y(l, $, A) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (oe) {
            var V = oe.stack.trim().match(/\n( *(at )?)/);
            L = V && V[1] || "";
          }
        return `
` + L + l;
      }
    }
    var H = !1, q;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      q = new be();
    }
    function v(l, $) {
      if (!l || H)
        return "";
      {
        var A = q.get(l);
        if (A !== void 0)
          return A;
      }
      var V;
      H = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = z.current, z.current = null, j();
      try {
        if ($) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (ke) {
              V = ke;
            }
            Reflect.construct(l, [], Z);
          } else {
            try {
              Z.call();
            } catch (ke) {
              V = ke;
            }
            l.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            V = ke;
          }
          l();
        }
      } catch (ke) {
        if (ke && V && typeof ke.stack == "string") {
          for (var J = ke.stack.split(`
`), Ae = V.stack.split(`
`), xe = J.length - 1, Re = Ae.length - 1; xe >= 1 && Re >= 0 && J[xe] !== Ae[Re]; )
            Re--;
          for (; xe >= 1 && Re >= 0; xe--, Re--)
            if (J[xe] !== Ae[Re]) {
              if (xe !== 1 || Re !== 1)
                do
                  if (xe--, Re--, Re < 0 || J[xe] !== Ae[Re]) {
                    var Fe = `
` + J[xe].replace(" at new ", " at ");
                    return l.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", l.displayName)), typeof l == "function" && q.set(l, Fe), Fe;
                  }
                while (xe >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = fe, K(), Error.prepareStackTrace = oe;
      }
      var lr = l ? l.displayName || l.name : "", or = lr ? Y(lr) : "";
      return typeof l == "function" && q.set(l, or), or;
    }
    function we(l, $, A) {
      return v(l, !1);
    }
    function M(l) {
      var $ = l.prototype;
      return !!($ && $.isReactComponent);
    }
    function Oe(l, $, A) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return v(l, M(l));
      if (typeof l == "string")
        return Y(l);
      switch (l) {
        case d:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return we(l.render);
          case m:
            return Oe(l.type, $, A);
          case b: {
            var V = l, oe = V._payload, fe = V._init;
            try {
              return Oe(fe(oe), $, A);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, tr = {}, nr = T.ReactDebugCurrentFrame;
    function We(l) {
      if (l) {
        var $ = l._owner, A = Oe(l.type, l._source, $ ? $.type : null);
        nr.setExtraStackFrame(A);
      } else
        nr.setExtraStackFrame(null);
    }
    function xt(l, $, A, V, oe) {
      {
        var fe = Function.call.bind(De);
        for (var Z in l)
          if (fe(l, Z)) {
            var J = void 0;
            try {
              if (typeof l[Z] != "function") {
                var Ae = Error((V || "React class") + ": " + A + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              J = l[Z]($, Z, V, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              J = xe;
            }
            J && !(J instanceof Error) && (We(oe), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", A, Z, typeof J), We(null)), J instanceof Error && !(J.message in tr) && (tr[J.message] = !0, We(oe), P("Failed %s type: %s", A, J.message), We(null));
          }
      }
    }
    var Vr = Array.isArray;
    function Er(l) {
      return Vr(l);
    }
    function G(l) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, A = $ && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return A;
      }
    }
    function Wr(l) {
      try {
        return Ur(l), !1;
      } catch {
        return !0;
      }
    }
    function Ur(l) {
      return "" + l;
    }
    function xr(l) {
      if (Wr(l))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", G(l)), Ur(l);
    }
    var sr = T.ReactCurrentOwner, Zo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gn, yn, Tt;
    Tt = {};
    function ei(l) {
      if (De.call(l, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(l, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ri(l) {
      if (De.call(l, "key")) {
        var $ = Object.getOwnPropertyDescriptor(l, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ti(l, $) {
      if (typeof l.ref == "string" && sr.current && $ && sr.current.stateNode !== $) {
        var A = B(sr.current.type);
        Tt[A] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(sr.current.type), l.ref), Tt[A] = !0);
      }
    }
    function ni(l, $) {
      {
        var A = function() {
          gn || (gn = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        A.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function oi(l, $) {
      {
        var A = function() {
          yn || (yn = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        A.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var ii = function(l, $, A, V, oe, fe, Z) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: l,
        key: $,
        ref: A,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function ai(l, $, A, V, oe) {
      {
        var fe, Z = {}, J = null, Ae = null;
        A !== void 0 && (xr(A), J = "" + A), ri($) && (xr($.key), J = "" + $.key), ei($) && (Ae = $.ref, ti($, oe));
        for (fe in $)
          De.call($, fe) && !Zo.hasOwnProperty(fe) && (Z[fe] = $[fe]);
        if (l && l.defaultProps) {
          var xe = l.defaultProps;
          for (fe in xe)
            Z[fe] === void 0 && (Z[fe] = xe[fe]);
        }
        if (J || Ae) {
          var Re = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          J && ni(Z, Re), Ae && oi(Z, Re);
        }
        return ii(l, J, Ae, oe, V, sr.current, Z);
      }
    }
    var wt = T.ReactCurrentOwner, bn = T.ReactDebugCurrentFrame;
    function cr(l) {
      if (l) {
        var $ = l._owner, A = Oe(l.type, l._source, $ ? $.type : null);
        bn.setExtraStackFrame(A);
      } else
        bn.setExtraStackFrame(null);
    }
    var Rt;
    Rt = !1;
    function $t(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }
    function vn() {
      {
        if (wt.current) {
          var l = B(wt.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function si(l) {
      return "";
    }
    var Sn = {};
    function ci(l) {
      {
        var $ = vn();
        if (!$) {
          var A = typeof l == "string" ? l : l.displayName || l.name;
          A && ($ = `

Check the top-level render call using <` + A + ">.");
        }
        return $;
      }
    }
    function Cn(l, $) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var A = ci($);
        if (Sn[A])
          return;
        Sn[A] = !0;
        var V = "";
        l && l._owner && l._owner !== wt.current && (V = " It was passed a child from " + B(l._owner.type) + "."), cr(l), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, V), cr(null);
      }
    }
    function En(l, $) {
      {
        if (typeof l != "object")
          return;
        if (Er(l))
          for (var A = 0; A < l.length; A++) {
            var V = l[A];
            $t(V) && Cn(V, $);
          }
        else if ($t(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var oe = g(l);
          if (typeof oe == "function" && oe !== l.entries)
            for (var fe = oe.call(l), Z; !(Z = fe.next()).done; )
              $t(Z.value) && Cn(Z.value, $);
        }
      }
    }
    function li(l) {
      {
        var $ = l.type;
        if ($ == null || typeof $ == "string")
          return;
        var A;
        if (typeof $ == "function")
          A = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === m))
          A = $.propTypes;
        else
          return;
        if (A) {
          var V = B($);
          xt(A, l.props, "prop", V, l);
        } else if ($.PropTypes !== void 0 && !Rt) {
          Rt = !0;
          var oe = B($);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ui(l) {
      {
        for (var $ = Object.keys(l.props), A = 0; A < $.length; A++) {
          var V = $[A];
          if (V !== "children" && V !== "key") {
            cr(l), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), cr(null);
            break;
          }
        }
        l.ref !== null && (cr(l), P("Invalid attribute `ref` supplied to `React.Fragment`."), cr(null));
      }
    }
    var xn = {};
    function Tn(l, $, A, V, oe, fe) {
      {
        var Z = s(l);
        if (!Z) {
          var J = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = si();
          Ae ? J += Ae : J += vn();
          var xe;
          l === null ? xe = "null" : Er(l) ? xe = "array" : l !== void 0 && l.$$typeof === r ? (xe = "<" + (B(l.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof l, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, J);
        }
        var Re = ai(l, $, A, oe, fe);
        if (Re == null)
          return Re;
        if (Z) {
          var Fe = $.children;
          if (Fe !== void 0)
            if (V)
              if (Er(Fe)) {
                for (var lr = 0; lr < Fe.length; lr++)
                  En(Fe[lr], l);
                Object.freeze && Object.freeze(Fe);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              En(Fe, l);
        }
        if (De.call($, "key")) {
          var or = B(l), ke = Object.keys($).filter(function(gi) {
            return gi !== "key";
          }), Ot = ke.length > 0 ? "{key: someKey, " + ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xn[or + Ot]) {
            var hi = ke.length > 0 ? "{" + ke.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ot, or, hi, or), xn[or + Ot] = !0;
          }
        }
        return l === n ? ui(Re) : li(Re), Re;
      }
    }
    function fi(l, $, A) {
      return Tn(l, $, A, !0);
    }
    function di(l, $, A) {
      return Tn(l, $, A, !1);
    }
    var pi = di, mi = fi;
    Rr.Fragment = n, Rr.jsx = pi, Rr.jsxs = mi;
  }()), Rr;
}
process.env.NODE_ENV === "production" ? Ft.exports = xi() : Ft.exports = Ti();
var Ce = Ft.exports, zt = { exports: {} }, Yr = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function wi() {
  if ($n) return ie;
  $n = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function w(f) {
    if (typeof f == "object" && f !== null) {
      var k = f.$$typeof;
      switch (k) {
        case r:
          switch (f = f.type, f) {
            case u:
            case d:
            case n:
            case i:
            case o:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case p:
                case C:
                case x:
                case a:
                  return f;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function E(f) {
    return w(f) === d;
  }
  return ie.AsyncMode = u, ie.ConcurrentMode = d, ie.ContextConsumer = c, ie.ContextProvider = a, ie.Element = r, ie.ForwardRef = p, ie.Fragment = n, ie.Lazy = C, ie.Memo = x, ie.Portal = t, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = m, ie.isAsyncMode = function(f) {
    return E(f) || w(f) === u;
  }, ie.isConcurrentMode = E, ie.isContextConsumer = function(f) {
    return w(f) === c;
  }, ie.isContextProvider = function(f) {
    return w(f) === a;
  }, ie.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, ie.isForwardRef = function(f) {
    return w(f) === p;
  }, ie.isFragment = function(f) {
    return w(f) === n;
  }, ie.isLazy = function(f) {
    return w(f) === C;
  }, ie.isMemo = function(f) {
    return w(f) === x;
  }, ie.isPortal = function(f) {
    return w(f) === t;
  }, ie.isProfiler = function(f) {
    return w(f) === i;
  }, ie.isStrictMode = function(f) {
    return w(f) === o;
  }, ie.isSuspense = function(f) {
    return w(f) === m;
  }, ie.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === d || f === i || f === o || f === m || f === b || typeof f == "object" && f !== null && (f.$$typeof === C || f.$$typeof === x || f.$$typeof === a || f.$$typeof === c || f.$$typeof === p || f.$$typeof === g || f.$$typeof === T || f.$$typeof === P || f.$$typeof === y);
  }, ie.typeOf = w, ie;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function Ri() {
  return On || (On = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function w(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === d || v === i || v === o || v === m || v === b || typeof v == "object" && v !== null && (v.$$typeof === C || v.$$typeof === x || v.$$typeof === a || v.$$typeof === c || v.$$typeof === p || v.$$typeof === g || v.$$typeof === T || v.$$typeof === P || v.$$typeof === y);
    }
    function E(v) {
      if (typeof v == "object" && v !== null) {
        var we = v.$$typeof;
        switch (we) {
          case r:
            var M = v.type;
            switch (M) {
              case u:
              case d:
              case n:
              case i:
              case o:
              case m:
                return M;
              default:
                var Oe = M && M.$$typeof;
                switch (Oe) {
                  case c:
                  case p:
                  case C:
                  case x:
                  case a:
                    return Oe;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var f = u, k = d, I = c, Q = a, X = r, s = p, _ = n, N = C, B = x, U = t, ne = i, ee = o, ge = m, ye = !1;
    function Ee(v) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(v) || E(v) === u;
    }
    function R(v) {
      return E(v) === d;
    }
    function O(v) {
      return E(v) === c;
    }
    function F(v) {
      return E(v) === a;
    }
    function W(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function j(v) {
      return E(v) === p;
    }
    function K(v) {
      return E(v) === n;
    }
    function z(v) {
      return E(v) === C;
    }
    function L(v) {
      return E(v) === x;
    }
    function Y(v) {
      return E(v) === t;
    }
    function H(v) {
      return E(v) === i;
    }
    function q(v) {
      return E(v) === o;
    }
    function be(v) {
      return E(v) === m;
    }
    ae.AsyncMode = f, ae.ConcurrentMode = k, ae.ContextConsumer = I, ae.ContextProvider = Q, ae.Element = X, ae.ForwardRef = s, ae.Fragment = _, ae.Lazy = N, ae.Memo = B, ae.Portal = U, ae.Profiler = ne, ae.StrictMode = ee, ae.Suspense = ge, ae.isAsyncMode = Ee, ae.isConcurrentMode = R, ae.isContextConsumer = O, ae.isContextProvider = F, ae.isElement = W, ae.isForwardRef = j, ae.isFragment = K, ae.isLazy = z, ae.isMemo = L, ae.isPortal = Y, ae.isProfiler = H, ae.isStrictMode = q, ae.isSuspense = be, ae.isValidElementType = w, ae.typeOf = E;
  }()), ae;
}
var _n;
function ho() {
  return _n || (_n = 1, process.env.NODE_ENV === "production" ? Yr.exports = wi() : Yr.exports = Ri()), Yr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _t, Pn;
function $i() {
  if (Pn) return _t;
  Pn = 1;
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
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _t = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), d, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var m in c)
        r.call(c, m) && (u[m] = c[m]);
      if (e) {
        d = e(c);
        for (var b = 0; b < d.length; b++)
          t.call(c, d[b]) && (u[d[b]] = c[d[b]]);
      }
    }
    return u;
  }, _t;
}
var Pt, An;
function Jt() {
  if (An) return Pt;
  An = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pt = e, Pt;
}
var At, kn;
function go() {
  return kn || (kn = 1, At = Function.call.bind(Object.prototype.hasOwnProperty)), At;
}
var kt, In;
function Oi() {
  if (In) return kt;
  In = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Jt(), t = {}, n = go();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var m;
          try {
            if (typeof i[p] != "function") {
              var b = Error(
                (u || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            m = i[p](a, p, u, c, null, r);
          } catch (C) {
            m = C;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + c + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, kt = o, kt;
}
var It, Mn;
function _i() {
  if (Mn) return It;
  Mn = 1;
  var e = ho(), r = $i(), t = Jt(), n = go(), o = Oi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return It = function(c, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(R) {
      var O = R && (d && R[d] || R[p]);
      if (typeof O == "function")
        return O;
    }
    var b = "<<anonymous>>", x = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: P(),
      arrayOf: w,
      element: E(),
      elementType: f(),
      instanceOf: k,
      node: s(),
      objectOf: Q,
      oneOf: I,
      oneOfType: X,
      shape: N,
      exact: B
    };
    function C(R, O) {
      return R === O ? R !== 0 || 1 / R === 1 / O : R !== R && O !== O;
    }
    function y(R, O) {
      this.message = R, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function g(R) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, F = 0;
      function W(K, z, L, Y, H, q, be) {
        if (Y = Y || b, q = q || L, be !== t) {
          if (u) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = Y + ":" + L;
            !O[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[we] = !0, F++);
          }
        }
        return z[L] == null ? K ? z[L] === null ? new y("The " + H + " `" + q + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new y("The " + H + " `" + q + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : R(z, L, Y, H, q);
      }
      var j = W.bind(null, !1);
      return j.isRequired = W.bind(null, !0), j;
    }
    function T(R) {
      function O(F, W, j, K, z, L) {
        var Y = F[W], H = ee(Y);
        if (H !== R) {
          var q = ge(Y);
          return new y(
            "Invalid " + K + " `" + z + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return g(O);
    }
    function P() {
      return g(a);
    }
    function w(R) {
      function O(F, W, j, K, z) {
        if (typeof R != "function")
          return new y("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var L = F[W];
        if (!Array.isArray(L)) {
          var Y = ee(L);
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an array."));
        }
        for (var H = 0; H < L.length; H++) {
          var q = R(L, H, j, K, z + "[" + H + "]", t);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return g(O);
    }
    function E() {
      function R(O, F, W, j, K) {
        var z = O[F];
        if (!c(z)) {
          var L = ee(z);
          return new y("Invalid " + j + " `" + K + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(R);
    }
    function f() {
      function R(O, F, W, j, K) {
        var z = O[F];
        if (!e.isValidElementType(z)) {
          var L = ee(z);
          return new y("Invalid " + j + " `" + K + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(R);
    }
    function k(R) {
      function O(F, W, j, K, z) {
        if (!(F[W] instanceof R)) {
          var L = R.name || b, Y = Ee(F[W]);
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return g(O);
    }
    function I(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(F, W, j, K, z) {
        for (var L = F[W], Y = 0; Y < R.length; Y++)
          if (C(L, R[Y]))
            return null;
        var H = JSON.stringify(R, function(be, v) {
          var we = ge(v);
          return we === "symbol" ? String(v) : v;
        });
        return new y("Invalid " + K + " `" + z + "` of value `" + String(L) + "` " + ("supplied to `" + j + "`, expected one of " + H + "."));
      }
      return g(O);
    }
    function Q(R) {
      function O(F, W, j, K, z) {
        if (typeof R != "function")
          return new y("Property `" + z + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var L = F[W], Y = ee(L);
        if (Y !== "object")
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an object."));
        for (var H in L)
          if (n(L, H)) {
            var q = R(L, H, j, K, z + "." + H, t);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return g(O);
    }
    function X(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < R.length; O++) {
        var F = R[O];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(F) + " at index " + O + "."
          ), a;
      }
      function W(j, K, z, L, Y) {
        for (var H = [], q = 0; q < R.length; q++) {
          var be = R[q], v = be(j, K, z, L, Y, t);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && H.push(v.data.expectedType);
        }
        var we = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new y("Invalid " + L + " `" + Y + "` supplied to " + ("`" + z + "`" + we + "."));
      }
      return g(W);
    }
    function s() {
      function R(O, F, W, j, K) {
        return U(O[F]) ? null : new y("Invalid " + j + " `" + K + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return g(R);
    }
    function _(R, O, F, W, j) {
      return new y(
        (R || "React class") + ": " + O + " type `" + F + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function N(R) {
      function O(F, W, j, K, z) {
        var L = F[W], Y = ee(L);
        if (Y !== "object")
          return new y("Invalid " + K + " `" + z + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var H in R) {
          var q = R[H];
          if (typeof q != "function")
            return _(j, K, z, H, ge(q));
          var be = q(L, H, j, K, z + "." + H, t);
          if (be)
            return be;
        }
        return null;
      }
      return g(O);
    }
    function B(R) {
      function O(F, W, j, K, z) {
        var L = F[W], Y = ee(L);
        if (Y !== "object")
          return new y("Invalid " + K + " `" + z + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        var H = r({}, F[W], R);
        for (var q in H) {
          var be = R[q];
          if (n(R, q) && typeof be != "function")
            return _(j, K, z, q, ge(be));
          if (!be)
            return new y(
              "Invalid " + K + " `" + z + "` key `" + q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(F[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var v = be(L, q, j, K, z + "." + q, t);
          if (v)
            return v;
        }
        return null;
      }
      return g(O);
    }
    function U(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(U);
          if (R === null || c(R))
            return !0;
          var O = m(R);
          if (O) {
            var F = O.call(R), W;
            if (O !== R.entries) {
              for (; !(W = F.next()).done; )
                if (!U(W.value))
                  return !1;
            } else
              for (; !(W = F.next()).done; ) {
                var j = W.value;
                if (j && !U(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(R, O) {
      return R === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function ee(R) {
      var O = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : ne(O, R) ? "symbol" : O;
    }
    function ge(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var O = ee(R);
      if (O === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function ye(R) {
      var O = ge(R);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Ee(R) {
      return !R.constructor || !R.constructor.name ? b : R.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, It;
}
var Mt, Nn;
function Pi() {
  if (Nn) return Mt;
  Nn = 1;
  var e = Jt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Mt = function() {
    function n(a, c, u, d, p, m) {
      if (m !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
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
  }, Mt;
}
if (process.env.NODE_ENV !== "production") {
  var Ai = ho(), ki = !0;
  zt.exports = _i()(Ai.isElement, ki);
} else
  zt.exports = Pi()();
var Ii = zt.exports;
const h = /* @__PURE__ */ Ei(Ii);
function yo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = yo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Ie() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = yo(e)) && (n && (n += " "), n += r);
  return n;
}
function tt(e, r) {
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
        const i = e[o], a = r[o];
        if (!a)
          t[o] = i || {};
        else if (!i)
          t[o] = a;
        else {
          t[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const u = c;
              t[o][u] = tt(i[u], a[u]);
            }
        }
      } else t[o] === void 0 && (t[o] = e[o]);
    }
  return t;
}
function ct(e, r, t = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const d = i[u];
      d && (a += (c === !0 ? "" : " ") + r(d), c = !1, t && t[d] && (a += " " + t[d]));
    }
    n[o] = a;
  }
  return n;
}
function Qe(e, ...r) {
  const t = new URL(`https://mui.com/production-error/?code=${e}`);
  return r.forEach((n) => t.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${t} for the full message.`;
}
function Mi(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
function Qt(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Mi(e, r, t);
}
function Ni(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ze(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ze(Ni(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(t))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Qe(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Qe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const ji = (e) => {
  const r = Ze(e);
  return r.values.slice(0, 3).map((t, n) => r.type.includes("hsl") && n !== 0 ? `${t}%` : t).join(" ");
}, _r = (e, r) => {
  try {
    return ji(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
function lt(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.includes("color") ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function bo(e) {
  e = Ze(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (d, p = (d + t / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(r[3])), lt({
    type: c,
    values: u
  });
}
function Lt(e) {
  e = Ze(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Ze(bo(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function jn(e, r) {
  const t = Lt(e), n = Lt(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Je(e, r) {
  return e = Ze(e), r = Qt(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, lt(e);
}
function qr(e, r, t) {
  try {
    return Je(e, r);
  } catch {
    return e;
  }
}
function Zt(e, r) {
  if (e = Ze(e), r = Qt(r), e.type.includes("hsl"))
    e.values[2] *= 1 - r;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return lt(e);
}
function de(e, r, t) {
  try {
    return Zt(e, r);
  } catch {
    return e;
  }
}
function en(e, r) {
  if (e = Ze(e), r = Qt(r), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.includes("rgb"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.includes("color"))
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return lt(e);
}
function pe(e, r, t) {
  try {
    return en(e, r);
  } catch {
    return e;
  }
}
function Bi(e, r = 0.15) {
  return Lt(e) > 0.5 ? Zt(e, r) : en(e, r);
}
function Gr(e, r, t) {
  try {
    return Bi(e, r);
  } catch {
    return e;
  }
}
function Di(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const vo = (e) => Di(e) && e !== "classes";
function he(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Qe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function He(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function So(e) {
  if (!He(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = So(e[t]);
  }), r;
}
function je(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? {
    ...e
  } : e;
  return He(e) && He(r) && Object.keys(r).forEach((o) => {
    He(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && He(e[o]) ? n[o] = je(e[o], r[o], t) : t.clone ? n[o] = He(r[o]) ? So(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
function Ar(e, r) {
  return r ? je(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const er = process.env.NODE_ENV !== "production" ? h.oneOfType([h.number, h.string, h.object, h.array]) : {};
function Fi(e, r) {
  if (!e.containerQueries)
    return r;
  const t = Object.keys(r).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return t.length ? t.reduce((n, o) => {
    const i = r[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...r
  }) : r;
}
function zi(e, r) {
  return r === "@" || r.startsWith("@") && (e.some((t) => r.startsWith(`@${t}`)) || !!r.match(/^@\d/));
}
function Li(e, r) {
  const t = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!t) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Qe(18, `(${r})`));
    return null;
  }
  const [, n, o] = t, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Vi(e) {
  const r = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function t(i, a) {
    i.up = (...c) => r(e.breakpoints.up(...c), a), i.down = (...c) => r(e.breakpoints.down(...c), a), i.between = (...c) => r(e.breakpoints.between(...c), a), i.only = (...c) => r(e.breakpoints.only(...c), a), i.not = (...c) => {
      const u = r(e.breakpoints.not(...c), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (t(n, i), n);
  return t(o), {
    ...e,
    containerQueries: o
  };
}
const ut = {
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
}, Bn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ut[e]}px)`
}, Wi = {
  containerQueries: (e) => ({
    up: (r) => {
      let t = typeof r == "number" ? r : ut[r] || r;
      return typeof t == "number" && (t = `${t}px`), e ? `@container ${e} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function Xe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Bn;
    return r.reduce((a, c, u) => (a[i.up(i.keys[u])] = t(r[u]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Bn;
    return Object.keys(r).reduce((a, c) => {
      if (zi(i.keys, c)) {
        const u = Li(n.containerQueries ? n : Wi, c);
        u && (a[u] = t(r[c], c));
      } else if (Object.keys(i.values || ut).includes(c)) {
        const u = i.up(c);
        a[u] = t(r[c], c);
      } else {
        const u = c;
        a[u] = r[u];
      }
      return a;
    }, {});
  }
  return t(r);
}
function Ui(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Yi(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ft(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function nt(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = ft(e, t) || n, r && (o = r(o, n, e)), o;
}
function Te(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const c = a[r], u = a.theme, d = ft(u, n) || {};
    return Xe(a, c, (m) => {
      let b = nt(d, o, m);
      return m === b && typeof m == "string" && (b = nt(d, o, `${r}${m === "default" ? "" : he(m)}`, m)), t === !1 ? b : {
        [t]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: er
  } : {}, i.filterProps = [r], i;
}
function qi(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Gi = {
  m: "margin",
  p: "padding"
}, Ki = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Dn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hi = qi((e) => {
  if (e.length > 2)
    if (Dn[e])
      e = Dn[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Gi[r], o = Ki[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), dt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], pt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Xi = [...dt, ...pt];
function Br(e, r, t, n) {
  const o = ft(e, r, !0) ?? t;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function rn(e) {
  return Br(e, "spacing", 8, "spacing");
}
function Dr(e, r) {
  return typeof r == "string" || r == null ? r : e(r);
}
function Ji(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Dr(r, t), n), {});
}
function Qi(e, r, t, n) {
  if (!r.includes(t))
    return null;
  const o = Hi(t), i = Ji(o, n), a = e[t];
  return Xe(e, a, i);
}
function Co(e, r) {
  const t = rn(e.theme);
  return Object.keys(e).map((n) => Qi(e, r, n, t)).reduce(Ar, {});
}
function ve(e) {
  return Co(e, dt);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? dt.reduce((e, r) => (e[r] = er, e), {}) : {};
ve.filterProps = dt;
function Se(e) {
  return Co(e, pt);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? pt.reduce((e, r) => (e[r] = er, e), {}) : {};
Se.filterProps = pt;
process.env.NODE_ENV !== "production" && Xi.reduce((e, r) => (e[r] = er, e), {});
function mt(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Ar(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Le(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, r) {
  return Te({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Zi = Ve("border", Le), ea = Ve("borderTop", Le), ra = Ve("borderRight", Le), ta = Ve("borderBottom", Le), na = Ve("borderLeft", Le), oa = Ve("borderColor"), ia = Ve("borderTopColor"), aa = Ve("borderRightColor"), sa = Ve("borderBottomColor"), ca = Ve("borderLeftColor"), la = Ve("outline", Le), ua = Ve("outlineColor"), ht = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Br(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Dr(r, n)
    });
    return Xe(e, e.borderRadius, t);
  }
  return null;
};
ht.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: er
} : {};
ht.filterProps = ["borderRadius"];
mt(Zi, ea, ra, ta, na, oa, ia, aa, sa, ca, ht, la, ua);
const gt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Br(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Dr(r, n)
    });
    return Xe(e, e.gap, t);
  }
  return null;
};
gt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: er
} : {};
gt.filterProps = ["gap"];
const yt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Br(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Dr(r, n)
    });
    return Xe(e, e.columnGap, t);
  }
  return null;
};
yt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: er
} : {};
yt.filterProps = ["columnGap"];
const bt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Br(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Dr(r, n)
    });
    return Xe(e, e.rowGap, t);
  }
  return null;
};
bt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: er
} : {};
bt.filterProps = ["rowGap"];
const fa = Te({
  prop: "gridColumn"
}), da = Te({
  prop: "gridRow"
}), pa = Te({
  prop: "gridAutoFlow"
}), ma = Te({
  prop: "gridAutoColumns"
}), ha = Te({
  prop: "gridAutoRows"
}), ga = Te({
  prop: "gridTemplateColumns"
}), ya = Te({
  prop: "gridTemplateRows"
}), ba = Te({
  prop: "gridTemplateAreas"
}), va = Te({
  prop: "gridArea"
});
mt(gt, yt, bt, fa, da, pa, ma, ha, ga, ya, ba, va);
function gr(e, r) {
  return r === "grey" ? r : e;
}
const Sa = Te({
  prop: "color",
  themeKey: "palette",
  transform: gr
}), Ca = Te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: gr
}), Ea = Te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: gr
});
mt(Sa, Ca, Ea);
function Ne(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xa = Te({
  prop: "width",
  transform: Ne
}), tn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var o, i, a, c, u;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[t]) || ut[t];
      return n ? ((u = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ne(t)
      };
    };
    return Xe(e, e.maxWidth, r);
  }
  return null;
};
tn.filterProps = ["maxWidth"];
const Ta = Te({
  prop: "minWidth",
  transform: Ne
}), wa = Te({
  prop: "height",
  transform: Ne
}), Ra = Te({
  prop: "maxHeight",
  transform: Ne
}), $a = Te({
  prop: "minHeight",
  transform: Ne
});
Te({
  prop: "size",
  cssProperty: "width",
  transform: Ne
});
Te({
  prop: "size",
  cssProperty: "height",
  transform: Ne
});
const Oa = Te({
  prop: "boxSizing"
});
mt(xa, tn, Ta, wa, Ra, $a, Oa);
const vt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Le
  },
  borderTop: {
    themeKey: "borders",
    transform: Le
  },
  borderRight: {
    themeKey: "borders",
    transform: Le
  },
  borderBottom: {
    themeKey: "borders",
    transform: Le
  },
  borderLeft: {
    themeKey: "borders",
    transform: Le
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
    transform: Le
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ht
  },
  // palette
  color: {
    themeKey: "palette",
    transform: gr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: gr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: gr
  },
  // spacing
  p: {
    style: Se
  },
  pt: {
    style: Se
  },
  pr: {
    style: Se
  },
  pb: {
    style: Se
  },
  pl: {
    style: Se
  },
  px: {
    style: Se
  },
  py: {
    style: Se
  },
  padding: {
    style: Se
  },
  paddingTop: {
    style: Se
  },
  paddingRight: {
    style: Se
  },
  paddingBottom: {
    style: Se
  },
  paddingLeft: {
    style: Se
  },
  paddingX: {
    style: Se
  },
  paddingY: {
    style: Se
  },
  paddingInline: {
    style: Se
  },
  paddingInlineStart: {
    style: Se
  },
  paddingInlineEnd: {
    style: Se
  },
  paddingBlock: {
    style: Se
  },
  paddingBlockStart: {
    style: Se
  },
  paddingBlockEnd: {
    style: Se
  },
  m: {
    style: ve
  },
  mt: {
    style: ve
  },
  mr: {
    style: ve
  },
  mb: {
    style: ve
  },
  ml: {
    style: ve
  },
  mx: {
    style: ve
  },
  my: {
    style: ve
  },
  margin: {
    style: ve
  },
  marginTop: {
    style: ve
  },
  marginRight: {
    style: ve
  },
  marginBottom: {
    style: ve
  },
  marginLeft: {
    style: ve
  },
  marginX: {
    style: ve
  },
  marginY: {
    style: ve
  },
  marginInline: {
    style: ve
  },
  marginInlineStart: {
    style: ve
  },
  marginInlineEnd: {
    style: ve
  },
  marginBlock: {
    style: ve
  },
  marginBlockStart: {
    style: ve
  },
  marginBlockEnd: {
    style: ve
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
    style: gt
  },
  rowGap: {
    style: bt
  },
  columnGap: {
    style: yt
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
    transform: Ne
  },
  maxWidth: {
    style: tn
  },
  minWidth: {
    transform: Ne
  },
  height: {
    transform: Ne
  },
  maxHeight: {
    transform: Ne
  },
  minHeight: {
    transform: Ne
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
function _a(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Pa(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Aa() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: d,
      transform: p,
      style: m
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const b = ft(o, d) || {};
    return m ? m(a) : Xe(a, n, (C) => {
      let y = nt(b, p, C);
      return C === y && typeof C == "string" && (y = nt(b, p, `${t}${C === "default" ? "" : he(C)}`, C)), u === !1 ? y : {
        [u]: y
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
    const i = o.unstable_sxConfig ?? vt;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Ui(o.breakpoints), p = Object.keys(d);
      let m = d;
      return Object.keys(u).forEach((b) => {
        const x = Pa(u[b], o);
        if (x != null)
          if (typeof x == "object")
            if (i[b])
              m = Ar(m, e(b, x, o, i));
            else {
              const C = Xe({
                theme: o
              }, x, (y) => ({
                [b]: y
              }));
              _a(C, x) ? m[b] = r({
                sx: x,
                theme: o
              }) : m = Ar(m, C);
            }
          else
            m = Ar(m, e(b, x, o, i));
      }), Fi(o, Yi(p, m));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return r;
}
const br = Aa();
br.filterProps = ["sx"];
function ot() {
  return ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ot.apply(null, arguments);
}
function Eo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ka = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ia = /* @__PURE__ */ Eo(
  function(e) {
    return ka.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ma = !1;
function Na(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function ja(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Ba = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !Ma : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ja(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Na(o);
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
}(), Pe = "-ms-", it = "-moz-", re = "-webkit-", xo = "comm", nn = "rule", on = "decl", Da = "@import", To = "@keyframes", Fa = "@layer", za = Math.abs, St = String.fromCharCode, La = Object.assign;
function Va(e, r) {
  return _e(e, 0) ^ 45 ? (((r << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function wo(e) {
  return e.trim();
}
function Wa(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function te(e, r, t) {
  return e.replace(r, t);
}
function Vt(e, r) {
  return e.indexOf(r);
}
function _e(e, r) {
  return e.charCodeAt(r) | 0;
}
function kr(e, r, t) {
  return e.slice(r, t);
}
function Ye(e) {
  return e.length;
}
function an(e) {
  return e.length;
}
function Kr(e, r) {
  return r.push(e), e;
}
function Ua(e, r) {
  return e.map(r).join("");
}
var Ct = 1, vr = 1, Ro = 0, Me = 0, $e = 0, Sr = "";
function Et(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Ct, column: vr, length: a, return: "" };
}
function $r(e, r) {
  return La(Et("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Ya() {
  return $e;
}
function qa() {
  return $e = Me > 0 ? _e(Sr, --Me) : 0, vr--, $e === 10 && (vr = 1, Ct--), $e;
}
function Be() {
  return $e = Me < Ro ? _e(Sr, Me++) : 0, vr++, $e === 10 && (vr = 1, Ct++), $e;
}
function Ge() {
  return _e(Sr, Me);
}
function Qr() {
  return Me;
}
function Fr(e, r) {
  return kr(Sr, e, r);
}
function Ir(e) {
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
function $o(e) {
  return Ct = vr = 1, Ro = Ye(Sr = e), Me = 0, [];
}
function Oo(e) {
  return Sr = "", e;
}
function Zr(e) {
  return wo(Fr(Me - 1, Wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ga(e) {
  for (; ($e = Ge()) && $e < 33; )
    Be();
  return Ir(e) > 2 || Ir($e) > 3 ? "" : " ";
}
function Ka(e, r) {
  for (; --r && Be() && !($e < 48 || $e > 102 || $e > 57 && $e < 65 || $e > 70 && $e < 97); )
    ;
  return Fr(e, Qr() + (r < 6 && Ge() == 32 && Be() == 32));
}
function Wt(e) {
  for (; Be(); )
    switch ($e) {
      case e:
        return Me;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wt($e);
        break;
      case 40:
        e === 41 && Wt(e);
        break;
      case 92:
        Be();
        break;
    }
  return Me;
}
function Ha(e, r) {
  for (; Be() && e + $e !== 57; )
    if (e + $e === 84 && Ge() === 47)
      break;
  return "/*" + Fr(r, Me - 1) + "*" + St(e === 47 ? e : Be());
}
function Xa(e) {
  for (; !Ir(Ge()); )
    Be();
  return Fr(e, Me);
}
function Ja(e) {
  return Oo(et("", null, null, null, [""], e = $o(e), 0, [0], e));
}
function et(e, r, t, n, o, i, a, c, u) {
  for (var d = 0, p = 0, m = a, b = 0, x = 0, C = 0, y = 1, g = 1, T = 1, P = 0, w = "", E = o, f = i, k = n, I = w; g; )
    switch (C = P, P = Be()) {
      case 40:
        if (C != 108 && _e(I, m - 1) == 58) {
          Vt(I += te(Zr(P), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += Zr(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += Ga(C);
        break;
      case 92:
        I += Ka(Qr() - 1, 7);
        continue;
      case 47:
        switch (Ge()) {
          case 42:
          case 47:
            Kr(Qa(Ha(Be(), Qr()), r, t), u);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * y:
        c[d++] = Ye(I) * T;
      case 125 * y:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            g = 0;
          case 59 + p:
            T == -1 && (I = te(I, /\f/g, "")), x > 0 && Ye(I) - m && Kr(x > 32 ? zn(I + ";", n, t, m - 1) : zn(te(I, " ", "") + ";", n, t, m - 2), u);
            break;
          case 59:
            I += ";";
          default:
            if (Kr(k = Fn(I, r, t, d, p, o, c, w, E = [], f = [], m), i), P === 123)
              if (p === 0)
                et(I, r, k, k, E, i, m, c, f);
              else
                switch (b === 99 && _e(I, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    et(e, k, k, n && Kr(Fn(e, k, k, 0, 0, o, c, w, o, E = [], m), f), o, f, m, c, n ? E : f);
                    break;
                  default:
                    et(I, k, k, k, [""], f, 0, c, f);
                }
        }
        d = p = x = 0, y = T = 1, w = I = "", m = a;
        break;
      case 58:
        m = 1 + Ye(I), x = C;
      default:
        if (y < 1) {
          if (P == 123)
            --y;
          else if (P == 125 && y++ == 0 && qa() == 125)
            continue;
        }
        switch (I += St(P), P * y) {
          case 38:
            T = p > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            c[d++] = (Ye(I) - 1) * T, T = 1;
            break;
          case 64:
            Ge() === 45 && (I += Zr(Be())), b = Ge(), p = m = Ye(w = I += Xa(Qr())), P++;
            break;
          case 45:
            C === 45 && Ye(I) == 2 && (y = 0);
        }
    }
  return i;
}
function Fn(e, r, t, n, o, i, a, c, u, d, p) {
  for (var m = o - 1, b = o === 0 ? i : [""], x = an(b), C = 0, y = 0, g = 0; C < n; ++C)
    for (var T = 0, P = kr(e, m + 1, m = za(y = a[C])), w = e; T < x; ++T)
      (w = wo(y > 0 ? b[T] + " " + P : te(P, /&\f/g, b[T]))) && (u[g++] = w);
  return Et(e, r, t, o === 0 ? nn : c, u, d, p);
}
function Qa(e, r, t) {
  return Et(e, r, t, xo, St(Ya()), kr(e, 2, -2), 0);
}
function zn(e, r, t, n) {
  return Et(e, r, t, on, kr(e, 0, n), kr(e, n + 1, -1), n);
}
function yr(e, r) {
  for (var t = "", n = an(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Za(e, r, t, n) {
  switch (e.type) {
    case Fa:
      if (e.children.length) break;
    case Da:
    case on:
      return e.return = e.return || e.value;
    case xo:
      return "";
    case To:
      return e.return = e.value + "{" + yr(e.children, n) + "}";
    case nn:
      e.value = e.props.join(",");
  }
  return Ye(t = yr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function es(e) {
  var r = an(e);
  return function(t, n, o, i) {
    for (var a = "", c = 0; c < r; c++)
      a += e[c](t, n, o, i) || "";
    return a;
  };
}
function rs(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var ts = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ge(), o === 38 && i === 12 && (t[n] = 1), !Ir(i); )
    Be();
  return Fr(r, Me);
}, ns = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Ir(o)) {
      case 0:
        o === 38 && Ge() === 12 && (t[n] = 1), r[n] += ts(Me - 1, t, n);
        break;
      case 2:
        r[n] += Zr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ge() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += St(o);
    }
  while (o = Be());
  return r;
}, os = function(r, t) {
  return Oo(ns($o(r), t));
}, Ln = /* @__PURE__ */ new WeakMap(), is = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Ln.get(n)) && !o) {
      Ln.set(r, !0);
      for (var i = [], a = os(t, i), c = n.props, u = 0, d = 0; u < a.length; u++)
        for (var p = 0; p < c.length; p++, d++)
          r.props[d] = i[u] ? a[u].replace(/&\f/g, c[p]) : c[p] + " " + a[u];
    }
  }
}, as = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function _o(e, r) {
  switch (Va(e, r)) {
    case 5103:
      return re + "print-" + e + e;
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
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + it + e + Pe + e + e;
    case 6828:
    case 4268:
      return re + e + Pe + e + e;
    case 6165:
      return re + e + Pe + "flex-" + e + e;
    case 5187:
      return re + e + te(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + Pe + "flex-$1$2") + e;
    case 5443:
      return re + e + Pe + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return re + e + Pe + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return re + e + Pe + te(e, "shrink", "negative") + e;
    case 5292:
      return re + e + Pe + te(e, "basis", "preferred-size") + e;
    case 6060:
      return re + "box-" + te(e, "-grow", "") + re + e + Pe + te(e, "grow", "positive") + e;
    case 4554:
      return re + te(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + Pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + re + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, re + "$1$2") + e;
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
      if (Ye(e) - 1 - r > 6) switch (_e(e, r + 1)) {
        case 109:
          if (_e(e, r + 4) !== 45) break;
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + it + (_e(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Vt(e, "stretch") ? _o(te(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (_e(e, r + 1) !== 115) break;
    case 6444:
      switch (_e(e, Ye(e) - 3 - (~Vt(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + re) + e;
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + re + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + Pe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, r + 11)) {
        case 114:
          return re + e + Pe + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + Pe + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + Pe + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + Pe + e + e;
  }
  return e;
}
var ss = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case on:
      r.return = _o(r.value, r.length);
      break;
    case To:
      return yr([$r(r, {
        value: te(r.value, "@", "@" + re)
      })], o);
    case nn:
      if (r.length) return Ua(r.props, function(i) {
        switch (Wa(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return yr([$r(r, {
              props: [te(i, /:(read-\w+)/, ":" + it + "$1")]
            })], o);
          case "::placeholder":
            return yr([$r(r, {
              props: [te(i, /:(plac\w+)/, ":" + re + "input-$1")]
            }), $r(r, {
              props: [te(i, /:(plac\w+)/, ":" + it + "$1")]
            }), $r(r, {
              props: [te(i, /:(plac\w+)/, Pe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, cs = [ss], ls = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var g = y.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || cs, i = {}, a, c = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(y) {
      for (var g = y.getAttribute("data-emotion").split(" "), T = 1; T < g.length; T++)
        i[g[T]] = !0;
      c.push(y);
    }
  );
  var u, d = [is, as];
  {
    var p, m = [Za, rs(function(y) {
      p.insert(y);
    })], b = es(d.concat(o, m)), x = function(g) {
      return yr(Ja(g), b);
    };
    u = function(g, T, P, w) {
      p = P, x(g ? g + "{" + T.styles + "}" : T.styles), w && (C.inserted[T.name] = !0);
    };
  }
  var C = {
    key: t,
    sheet: new Ba({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return C.sheet.hydrate(c), C;
}, Ut = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function us() {
  if (Vn) return se;
  Vn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function w(f) {
    if (typeof f == "object" && f !== null) {
      var k = f.$$typeof;
      switch (k) {
        case r:
          switch (f = f.type, f) {
            case u:
            case d:
            case n:
            case i:
            case o:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case p:
                case C:
                case x:
                case a:
                  return f;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  function E(f) {
    return w(f) === d;
  }
  return se.AsyncMode = u, se.ConcurrentMode = d, se.ContextConsumer = c, se.ContextProvider = a, se.Element = r, se.ForwardRef = p, se.Fragment = n, se.Lazy = C, se.Memo = x, se.Portal = t, se.Profiler = i, se.StrictMode = o, se.Suspense = m, se.isAsyncMode = function(f) {
    return E(f) || w(f) === u;
  }, se.isConcurrentMode = E, se.isContextConsumer = function(f) {
    return w(f) === c;
  }, se.isContextProvider = function(f) {
    return w(f) === a;
  }, se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, se.isForwardRef = function(f) {
    return w(f) === p;
  }, se.isFragment = function(f) {
    return w(f) === n;
  }, se.isLazy = function(f) {
    return w(f) === C;
  }, se.isMemo = function(f) {
    return w(f) === x;
  }, se.isPortal = function(f) {
    return w(f) === t;
  }, se.isProfiler = function(f) {
    return w(f) === i;
  }, se.isStrictMode = function(f) {
    return w(f) === o;
  }, se.isSuspense = function(f) {
    return w(f) === m;
  }, se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === d || f === i || f === o || f === m || f === b || typeof f == "object" && f !== null && (f.$$typeof === C || f.$$typeof === x || f.$$typeof === a || f.$$typeof === c || f.$$typeof === p || f.$$typeof === g || f.$$typeof === T || f.$$typeof === P || f.$$typeof === y);
  }, se.typeOf = w, se;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function fs() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function w(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === d || v === i || v === o || v === m || v === b || typeof v == "object" && v !== null && (v.$$typeof === C || v.$$typeof === x || v.$$typeof === a || v.$$typeof === c || v.$$typeof === p || v.$$typeof === g || v.$$typeof === T || v.$$typeof === P || v.$$typeof === y);
    }
    function E(v) {
      if (typeof v == "object" && v !== null) {
        var we = v.$$typeof;
        switch (we) {
          case r:
            var M = v.type;
            switch (M) {
              case u:
              case d:
              case n:
              case i:
              case o:
              case m:
                return M;
              default:
                var Oe = M && M.$$typeof;
                switch (Oe) {
                  case c:
                  case p:
                  case C:
                  case x:
                  case a:
                    return Oe;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var f = u, k = d, I = c, Q = a, X = r, s = p, _ = n, N = C, B = x, U = t, ne = i, ee = o, ge = m, ye = !1;
    function Ee(v) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(v) || E(v) === u;
    }
    function R(v) {
      return E(v) === d;
    }
    function O(v) {
      return E(v) === c;
    }
    function F(v) {
      return E(v) === a;
    }
    function W(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function j(v) {
      return E(v) === p;
    }
    function K(v) {
      return E(v) === n;
    }
    function z(v) {
      return E(v) === C;
    }
    function L(v) {
      return E(v) === x;
    }
    function Y(v) {
      return E(v) === t;
    }
    function H(v) {
      return E(v) === i;
    }
    function q(v) {
      return E(v) === o;
    }
    function be(v) {
      return E(v) === m;
    }
    ce.AsyncMode = f, ce.ConcurrentMode = k, ce.ContextConsumer = I, ce.ContextProvider = Q, ce.Element = X, ce.ForwardRef = s, ce.Fragment = _, ce.Lazy = N, ce.Memo = B, ce.Portal = U, ce.Profiler = ne, ce.StrictMode = ee, ce.Suspense = ge, ce.isAsyncMode = Ee, ce.isConcurrentMode = R, ce.isContextConsumer = O, ce.isContextProvider = F, ce.isElement = W, ce.isForwardRef = j, ce.isFragment = K, ce.isLazy = z, ce.isMemo = L, ce.isPortal = Y, ce.isProfiler = H, ce.isStrictMode = q, ce.isSuspense = be, ce.isValidElementType = w, ce.typeOf = E;
  }()), ce;
}
process.env.NODE_ENV === "production" ? Ut.exports = us() : Ut.exports = fs();
var ds = Ut.exports, Po = ds, ps = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ms = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ao = {};
Ao[Po.ForwardRef] = ps;
Ao[Po.Memo] = ms;
var hs = !0;
function gs(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var ko = function(r, t, n) {
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
  hs === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, ys = function(r, t, n) {
  ko(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function bs(e) {
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
var vs = {
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
}, Ss = !1, Cs = /[A-Z]|^ms/g, Es = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Io = function(r) {
  return r.charCodeAt(1) === 45;
}, Un = function(r) {
  return r != null && typeof r != "boolean";
}, Nt = /* @__PURE__ */ Eo(function(e) {
  return Io(e) ? e : e.replace(Cs, "-$&").toLowerCase();
}), Yn = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Es, function(n, o, i) {
          return qe = {
            name: o,
            styles: i,
            next: qe
          }, o;
        });
  }
  return vs[r] !== 1 && !Io(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, xs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mr(e, r, t) {
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
        return qe = {
          name: o.name,
          styles: o.styles,
          next: qe
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            qe = {
              name: a.name,
              styles: a.styles,
              next: qe
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return Ts(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var u = qe, d = t(e);
        return qe = u, Mr(e, r, d);
      }
      break;
    }
  }
  var p = t;
  if (r == null)
    return p;
  var m = r[p];
  return m !== void 0 ? m : p;
}
function Ts(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Mr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object") {
        var c = a;
        r != null && r[c] !== void 0 ? n += i + "{" + r[c] + "}" : Un(c) && (n += Nt(i) + ":" + Yn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Ss)
          throw new Error(xs);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var u = 0; u < a.length; u++)
            Un(a[u]) && (n += Nt(i) + ":" + Yn(i, a[u]) + ";");
        else {
          var d = Mr(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Nt(i) + ":" + d + ";";
              break;
            }
            default:
              n += i + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var qn = /label:\s*([^\s;{]+)\s*(;|$)/g, qe;
function sn(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  qe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Mr(t, r, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Mr(t, r, e[c]), n) {
      var u = i;
      o += u[c];
    }
  qn.lastIndex = 0;
  for (var d = "", p; (p = qn.exec(o)) !== null; )
    d += "-" + p[1];
  var m = bs(o) + d;
  return {
    name: m,
    styles: o,
    next: qe
  };
}
var ws = function(r) {
  return r();
}, Rs = D.useInsertionEffect ? D.useInsertionEffect : !1, $s = Rs || ws, Mo = /* @__PURE__ */ D.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ls({
    key: "css"
  }) : null
);
Mo.Provider;
var Os = function(r) {
  return /* @__PURE__ */ vi(function(t, n) {
    var o = Si(Mo);
    return r(t, o, n);
  });
}, _s = /* @__PURE__ */ D.createContext({});
function Ps() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return sn(r);
}
var cn = function() {
  var r = Ps.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, As = Ia, ks = function(r) {
  return r !== "theme";
}, Gn = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? As : ks;
}, Kn = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Is = !1, Ms = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return ko(t, n, o), $s(function() {
    return ys(t, n, o);
  }), null;
}, Ns = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var c = Kn(r, t, n), u = c || Gn(o), d = !u("as");
  return function() {
    var p = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      m.push(p[0][0]);
      for (var b = p.length, x = 1; x < b; x++)
        m.push(p[x], p[0][x]);
    }
    var C = Os(function(y, g, T) {
      var P = d && y.as || o, w = "", E = [], f = y;
      if (y.theme == null) {
        f = {};
        for (var k in y)
          f[k] = y[k];
        f.theme = D.useContext(_s);
      }
      typeof y.className == "string" ? w = gs(g.registered, E, y.className) : y.className != null && (w = y.className + " ");
      var I = sn(m.concat(E), g.registered, f);
      w += g.key + "-" + I.name, a !== void 0 && (w += " " + a);
      var Q = d && c === void 0 ? Gn(P) : u, X = {};
      for (var s in y)
        d && s === "as" || Q(s) && (X[s] = y[s]);
      return X.className = w, T && (X.ref = T), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Ms, {
        cache: g,
        serialized: I,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ D.createElement(P, X));
    });
    return C.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", C.defaultProps = r.defaultProps, C.__emotion_real = C, C.__emotion_base = o, C.__emotion_styles = m, C.__emotion_forwardProp = c, Object.defineProperty(C, "toString", {
      value: function() {
        return a === void 0 && Is ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), C.withComponent = function(y, g) {
      return e(y, ot({}, t, g, {
        shouldForwardProp: Kn(C, g, !0)
      })).apply(void 0, m);
    }, C;
  };
}, js = [
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
], Yt = Ns.bind();
js.forEach(function(e) {
  Yt[e] = Yt(e);
});
/**
 * @mui/styled-engine v6.1.4
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Bs(e, r) {
  const t = Yt(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function Ds(e, r) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}
const Hn = [];
function Xn(e) {
  return Hn[0] = e, sn(Hn);
}
const Fs = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ({
    ...t,
    [n.key]: n.val
  }), {});
};
function zs(e) {
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
  } = e, i = Fs(r), a = Object.keys(i);
  function c(b) {
    return `@media (min-width:${typeof r[b] == "number" ? r[b] : b}${t})`;
  }
  function u(b) {
    return `@media (max-width:${(typeof r[b] == "number" ? r[b] : b) - n / 100}${t})`;
  }
  function d(b, x) {
    const C = a.indexOf(x);
    return `@media (min-width:${typeof r[b] == "number" ? r[b] : b}${t}) and (max-width:${(C !== -1 && typeof r[a[C]] == "number" ? r[a[C]] : x) - n / 100}${t})`;
  }
  function p(b) {
    return a.indexOf(b) + 1 < a.length ? d(b, a[a.indexOf(b) + 1]) : c(b);
  }
  function m(b) {
    const x = a.indexOf(b);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? u(a[x]) : d(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: d,
    only: p,
    not: m,
    unit: t,
    ...o
  };
}
const Ls = {
  borderRadius: 4
};
function No(e = 8, r = rn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function Vs(e, r) {
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
function jo(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = zs(t), u = No(o);
  let d = je({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Ls,
      ...i
    }
  }, a);
  return d = Vi(d), d.applyStyles = Vs, d = r.reduce((p, m) => je(p, m), d), d.unstable_sxConfig = {
    ...vt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(m) {
    return br({
      sx: m,
      theme: this
    });
  }, d;
}
const Jn = (e) => e, Ws = () => {
  let e = Jn;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Jn;
    }
  };
}, Us = Ws(), Ys = {
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
function Cr(e, r, t = "Mui") {
  const n = Ys[r];
  return n ? `${t}-${n}` : `${Us.generate(e)}-${r}`;
}
function zr(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Cr(e, o, t);
  }), n;
}
var qt = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function qs() {
  if (Qn) return le;
  Qn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function y(g) {
    if (typeof g == "object" && g !== null) {
      var T = g.$$typeof;
      switch (T) {
        case e:
          switch (g = g.type, g) {
            case t:
            case o:
            case n:
            case d:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case a:
                case u:
                case b:
                case m:
                case i:
                  return g;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  return le.ContextConsumer = a, le.ContextProvider = i, le.Element = e, le.ForwardRef = u, le.Fragment = t, le.Lazy = b, le.Memo = m, le.Portal = r, le.Profiler = o, le.StrictMode = n, le.Suspense = d, le.SuspenseList = p, le.isAsyncMode = function() {
    return !1;
  }, le.isConcurrentMode = function() {
    return !1;
  }, le.isContextConsumer = function(g) {
    return y(g) === a;
  }, le.isContextProvider = function(g) {
    return y(g) === i;
  }, le.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, le.isForwardRef = function(g) {
    return y(g) === u;
  }, le.isFragment = function(g) {
    return y(g) === t;
  }, le.isLazy = function(g) {
    return y(g) === b;
  }, le.isMemo = function(g) {
    return y(g) === m;
  }, le.isPortal = function(g) {
    return y(g) === r;
  }, le.isProfiler = function(g) {
    return y(g) === o;
  }, le.isStrictMode = function(g) {
    return y(g) === n;
  }, le.isSuspense = function(g) {
    return y(g) === d;
  }, le.isSuspenseList = function(g) {
    return y(g) === p;
  }, le.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === o || g === n || g === d || g === p || g === x || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === m || g.$$typeof === i || g.$$typeof === a || g.$$typeof === u || g.$$typeof === C || g.getModuleId !== void 0);
  }, le.typeOf = y, le;
}
var ue = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Gs() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), C = !1, y = !1, g = !1, T = !1, P = !1, w;
    w = Symbol.for("react.module.reference");
    function E(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === t || M === o || P || M === n || M === d || M === p || T || M === x || C || y || g || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === m || M.$$typeof === i || M.$$typeof === a || M.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === w || M.getModuleId !== void 0));
    }
    function f(M) {
      if (typeof M == "object" && M !== null) {
        var Oe = M.$$typeof;
        switch (Oe) {
          case e:
            var De = M.type;
            switch (De) {
              case t:
              case o:
              case n:
              case d:
              case p:
                return De;
              default:
                var tr = De && De.$$typeof;
                switch (tr) {
                  case c:
                  case a:
                  case u:
                  case b:
                  case m:
                  case i:
                    return tr;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var k = a, I = i, Q = e, X = u, s = t, _ = b, N = m, B = r, U = o, ne = n, ee = d, ge = p, ye = !1, Ee = !1;
    function R(M) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(M) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(M) {
      return f(M) === a;
    }
    function W(M) {
      return f(M) === i;
    }
    function j(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function K(M) {
      return f(M) === u;
    }
    function z(M) {
      return f(M) === t;
    }
    function L(M) {
      return f(M) === b;
    }
    function Y(M) {
      return f(M) === m;
    }
    function H(M) {
      return f(M) === r;
    }
    function q(M) {
      return f(M) === o;
    }
    function be(M) {
      return f(M) === n;
    }
    function v(M) {
      return f(M) === d;
    }
    function we(M) {
      return f(M) === p;
    }
    ue.ContextConsumer = k, ue.ContextProvider = I, ue.Element = Q, ue.ForwardRef = X, ue.Fragment = s, ue.Lazy = _, ue.Memo = N, ue.Portal = B, ue.Profiler = U, ue.StrictMode = ne, ue.Suspense = ee, ue.SuspenseList = ge, ue.isAsyncMode = R, ue.isConcurrentMode = O, ue.isContextConsumer = F, ue.isContextProvider = W, ue.isElement = j, ue.isForwardRef = K, ue.isFragment = z, ue.isLazy = L, ue.isMemo = Y, ue.isPortal = H, ue.isProfiler = q, ue.isStrictMode = be, ue.isSuspense = v, ue.isSuspenseList = we, ue.isValidElementType = E, ue.typeOf = f;
  }()), ue;
}
process.env.NODE_ENV === "production" ? qt.exports = qs() : qt.exports = Gs();
var eo = qt.exports;
function Bo(e, r = "") {
  return e.displayName || e.name || r;
}
function ro(e, r, t) {
  const n = Bo(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Ks(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Bo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case eo.ForwardRef:
          return ro(e, e.render, "ForwardRef");
        case eo.Memo:
          return ro(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Do(e) {
  const {
    variants: r,
    ...t
  } = e, n = {
    variants: r,
    style: Xn(t),
    isProcessed: !0
  };
  return n.style === t || r && r.forEach((o) => {
    typeof o.style != "function" && (o.style = Xn(o.style));
  }), n;
}
const Hs = jo();
function jt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Xs(e) {
  return e ? (r, t) => t[e] : null;
}
function Js(e, r, t) {
  e.theme = rc(e.theme) ? t : e.theme[r] || e.theme;
}
function rt(e, r) {
  const t = typeof r == "function" ? r(e) : r;
  if (Array.isArray(t))
    return t.flatMap((n) => rt(e, n));
  if (Array.isArray(t == null ? void 0 : t.variants)) {
    let n;
    if (t.isProcessed)
      n = t.style;
    else {
      const {
        variants: o,
        ...i
      } = t;
      n = i;
    }
    return Fo(e, t.variants, [n]);
  }
  return t != null && t.isProcessed ? t.style : t;
}
function Fo(e, r, t = []) {
  var o;
  let n;
  e: for (let i = 0; i < r.length; i += 1) {
    const a = r[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), t.push(a.style(n))) : t.push(a.style);
  }
  return t;
}
function Qs(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Hs,
    rootShouldForwardProp: n = jt,
    slotShouldForwardProp: o = jt
  } = e;
  function i(c) {
    Js(c, r, t);
  }
  return (c, u = {}) => {
    Ds(c, (f) => f.filter((k) => k !== br));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: m,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Xs(zo(p)),
      ...C
    } = u, y = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), g = b || !1;
    let T = jt;
    p === "Root" || p === "root" ? T = n : p ? T = o : tc(c) && (T = void 0);
    const P = Bs(c, {
      shouldForwardProp: T,
      label: ec(d, p),
      ...C
    }), w = (f) => {
      if (typeof f == "function" && f.__emotion_real !== f)
        return function(I) {
          return rt(I, f);
        };
      if (He(f)) {
        const k = Do(f);
        return k.variants ? function(Q) {
          return rt(Q, k);
        } : k.style;
      }
      return f;
    }, E = (...f) => {
      const k = [], I = f.map(w), Q = [];
      if (k.push(i), d && x && Q.push(function(N) {
        var ee, ge;
        const U = (ge = (ee = N.theme.components) == null ? void 0 : ee[d]) == null ? void 0 : ge.styleOverrides;
        if (!U)
          return null;
        const ne = {};
        for (const ye in U)
          ne[ye] = rt(N, U[ye]);
        return x(N, ne);
      }), d && !y && Q.push(function(N) {
        var ne, ee;
        const B = N.theme, U = (ee = (ne = B == null ? void 0 : B.components) == null ? void 0 : ne[d]) == null ? void 0 : ee.variants;
        return U ? Fo(N, U) : null;
      }), g || Q.push(br), Array.isArray(I[0])) {
        const _ = I.shift(), N = new Array(k.length).fill(""), B = new Array(Q.length).fill("");
        let U;
        U = [...N, ..._, ...B], U.raw = [...N, ..._.raw, ...B], k.unshift(U);
      }
      const X = [...k, ...I, ...Q], s = P(...X);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = Zs(d, p, c)), s;
    };
    return P.withConfig && (E.withConfig = P.withConfig), E;
  };
}
function Zs(e, r, t) {
  return e ? `${e}${he(r || "")}` : `Styled(${Ks(t)})`;
}
function ec(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${zo(r || "Root")}`), t;
}
function rc(e) {
  for (const r in e)
    return !1;
  return !0;
}
function tc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const nc = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
function Lo(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function oc(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function ic(e, r, t, n, o) {
  const i = e[r], a = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !oc(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ac = Lo(h.elementType, ic), sc = h.oneOfType([h.func, h.object]);
function cc(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
function Hr(e) {
  const r = D.useRef(e);
  return nc(() => {
    r.current = e;
  }), D.useRef((...t) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...t)
  )).current;
}
function to(...e) {
  return D.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      cc(t, r);
    });
  }, e);
}
const no = {};
function Vo(e, r) {
  const t = D.useRef(no);
  return t.current === no && (t.current = e(r)), t;
}
const lc = [];
function uc(e) {
  D.useEffect(e, lc);
}
class ln {
  constructor() {
    Tr(this, "currentId", null);
    Tr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Tr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ln();
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
function fc() {
  const e = Vo(ln.create).current;
  return uc(e.disposeEffect), e;
}
function oo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const dc = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (h.node, h.object);
function pc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? tt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? tt(o, n) : n;
}
function mc({
  props: e,
  name: r
}) {
  const t = D.useContext(dc);
  return pc({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
const io = {
  theme: void 0
};
function hc(e) {
  let r, t;
  return function(o) {
    let i = r;
    return (i === void 0 || o.theme !== t) && (io.theme = o.theme, i = Do(e(io)), r = i, t = o.theme), i;
  };
}
function gc(e = "") {
  function r(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${r(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${r(...o)})`;
}
const ao = (e, r, t, n = []) => {
  let o = e;
  r.forEach((i, a) => {
    a === r.length - 1 ? Array.isArray(o) ? o[Number(i)] = t : o && typeof o == "object" && (o[i] = t) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, yc = (e, r, t) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!t || t && !t([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : r([...i, c], u, a));
    });
  }
  n(e);
}, bc = (e, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Bt(e, r) {
  const {
    prefix: t,
    shouldSkipGeneratingVar: n
  } = r || {}, o = {}, i = {}, a = {};
  return yc(
    e,
    (c, u, d) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const p = `--${t ? `${t}-` : ""}${c.join("-")}`, m = bc(c, u);
        Object.assign(o, {
          [p]: m
        }), ao(i, c, `var(${p})`, d), ao(a, c, `var(${p}, ${m})`, d);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function vc(e, r = {}) {
  const {
    getSelector: t = g,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = r, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: m
  } = Bt(u, r);
  let b = m;
  const x = {}, {
    [c]: C,
    ...y
  } = i;
  if (Object.entries(y || {}).forEach(([w, E]) => {
    const {
      vars: f,
      css: k,
      varsWithDefaults: I
    } = Bt(E, r);
    b = je(b, I), x[w] = {
      css: k,
      vars: f
    };
  }), C) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: f
    } = Bt(C, r);
    b = je(b, f), x[c] = {
      css: w,
      vars: E
    };
  }
  function g(w, E) {
    var k, I;
    let f = o;
    if (o === "class" && (f = ".%s"), o === "data" && (f = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (f = `[${o}="%s"]`), w) {
      if (f === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (k = i[w]) == null ? void 0 : k.palette) == null ? void 0 : I.mode) || w})`]: {
            ":root": E
          }
        };
      if (f)
        return e.defaultColorScheme === w ? `:root, ${f.replace("%s", String(w))}` : f.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let w = {
        ...d
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = je(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      var Q, X;
      const w = [], E = e.defaultColorScheme || "light";
      function f(s, _) {
        Object.keys(_).length && w.push(typeof s == "string" ? {
          [s]: {
            ..._
          }
        } : s);
      }
      f(t(void 0, {
        ...p
      }), p);
      const {
        [E]: k,
        ...I
      } = x;
      if (k) {
        const {
          css: s
        } = k, _ = (X = (Q = i[E]) == null ? void 0 : Q.palette) == null ? void 0 : X.mode, N = !n && _ ? {
          colorScheme: _,
          ...s
        } : {
          ...s
        };
        f(t(E, {
          ...N
        }), N);
      }
      return Object.entries(I).forEach(([s, {
        css: _
      }]) => {
        var U, ne;
        const N = (ne = (U = i[s]) == null ? void 0 : U.palette) == null ? void 0 : ne.mode, B = !n && N ? {
          colorScheme: N,
          ..._
        } : {
          ..._
        };
        f(t(s, {
          ...B
        }), B);
      }), w;
    }
  };
}
function Sc(e) {
  return function(t) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
  };
}
const Nr = {
  black: "#000",
  white: "#fff"
}, Cc = {
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
}, ur = {
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
}, fr = {
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
}, Or = {
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
}, dr = {
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
}, pr = {
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
}, mr = {
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
};
function Wo() {
  return {
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
      paper: Nr.white,
      default: Nr.white
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
  };
}
const Ec = Wo();
function Uo() {
  return {
    text: {
      primary: Nr.white,
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
      active: Nr.white,
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
}
const so = Uo();
function co(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = en(e.main, o) : r === "dark" && (e.dark = Zt(e.main, i)));
}
function xc(e = "light") {
  return e === "dark" ? {
    main: dr[200],
    light: dr[50],
    dark: dr[400]
  } : {
    main: dr[700],
    light: dr[400],
    dark: dr[800]
  };
}
function Tc(e = "light") {
  return e === "dark" ? {
    main: ur[200],
    light: ur[50],
    dark: ur[400]
  } : {
    main: ur[500],
    light: ur[300],
    dark: ur[700]
  };
}
function wc(e = "light") {
  return e === "dark" ? {
    main: fr[500],
    light: fr[300],
    dark: fr[700]
  } : {
    main: fr[700],
    light: fr[400],
    dark: fr[800]
  };
}
function Rc(e = "light") {
  return e === "dark" ? {
    main: pr[400],
    light: pr[300],
    dark: pr[700]
  } : {
    main: pr[700],
    light: pr[500],
    dark: pr[900]
  };
}
function $c(e = "light") {
  return e === "dark" ? {
    main: mr[400],
    light: mr[300],
    dark: mr[700]
  } : {
    main: mr[800],
    light: mr[500],
    dark: mr[900]
  };
}
function Oc(e = "light") {
  return e === "dark" ? {
    main: Or[400],
    light: Or[300],
    dark: Or[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Or[500],
    dark: Or[900]
  };
}
function un(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || xc(r), a = e.secondary || Tc(r), c = e.error || wc(r), u = e.info || Rc(r), d = e.success || $c(r), p = e.warning || Oc(r);
  function m(y) {
    const g = jn(y, so.text.primary) >= t ? so.text.primary : Ec.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = jn(y, g);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${g} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const b = ({
    color: y,
    name: g,
    mainShade: T = 500,
    lightShade: P = 300,
    darkShade: w = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[T] && (y.main = y[T]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Qe(11, g ? ` (${g})` : "", T));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Qe(12, g ? ` (${g})` : "", JSON.stringify(y.main)));
    return co(y, "light", P, n), co(y, "dark", w, n), y.contrastText || (y.contrastText = m(y.main)), y;
  };
  let x;
  return r === "light" ? x = Wo() : r === "dark" && (x = Uo()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), je({
    // A collection of common colors.
    common: {
      ...Nr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Cc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function _c(e) {
  const r = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (r[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), r;
}
function Pc(e, r) {
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
function Ac(e) {
  return Math.round(e * 1e5) / 1e5;
}
const lo = {
  textTransform: "uppercase"
}, uo = '"Roboto", "Helvetica", "Arial", sans-serif';
function kc(e, r) {
  const {
    fontFamily: t = uo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...m
  } = typeof r == "function" ? r(e) : r;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, x = p || ((g) => `${g / u * b}rem`), C = (g, T, P, w, E) => ({
    fontFamily: t,
    fontWeight: g,
    fontSize: x(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...t === uo ? {
      letterSpacing: `${Ac(w / T)}em`
    } : {},
    ...E,
    ...d
  }), y = {
    h1: C(o, 96, 1.167, -1.5),
    h2: C(o, 60, 1.2, -0.5),
    h3: C(i, 48, 1.167, 0),
    h4: C(i, 34, 1.235, 0.25),
    h5: C(i, 24, 1.334, 0),
    h6: C(a, 20, 1.6, 0.15),
    subtitle1: C(i, 16, 1.75, 0.15),
    subtitle2: C(a, 14, 1.57, 0.1),
    body1: C(i, 16, 1.5, 0.15),
    body2: C(i, 14, 1.43, 0.15),
    button: C(a, 14, 1.75, 0.4, lo),
    caption: C(i, 12, 1.66, 0.4),
    overline: C(i, 12, 2.66, 1, lo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return je({
    htmlFontSize: u,
    pxToRem: x,
    fontFamily: t,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...y
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Ic = 0.2, Mc = 0.14, Nc = 0.12;
function me(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ic})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Mc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Nc})`].join(",");
}
const jc = ["none", me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Bc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Dc = {
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
function fo(e) {
  return `${Math.round(e)}ms`;
}
function Fc(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function zc(e) {
  const r = {
    ...Bc,
    ...e.easing
  }, t = {
    ...Dc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Fc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: c = r.easeInOut,
        delay: u = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (b) => typeof b == "string", m = (b) => !Number.isNaN(parseFloat(b));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !p(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : fo(a)} ${c} ${typeof u == "string" ? u : fo(u)}`).join(",");
    },
    ...e,
    easing: r,
    duration: t
  };
}
const Lc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Gt(e = {}, ...r) {
  const {
    breakpoints: t,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Qe(20));
  const p = un(i), m = jo(e);
  let b = je(m, {
    mixins: Pc(m.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: jc.slice(),
    typography: kc(p, c),
    transitions: zc(a),
    zIndex: {
      ...Lc
    }
  });
  if (b = je(b, d), b = r.reduce((x, C) => je(x, C), b), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (y, g) => {
      let T;
      for (T in y) {
        const P = y[T];
        if (x.includes(T) && Object.keys(P).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = Cr("", T);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: P
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[T] = {};
        }
      }
    };
    Object.keys(b.components).forEach((y) => {
      const g = b.components[y].styleOverrides;
      g && y.startsWith("Mui") && C(g, y);
    });
  }
  return b.unstable_sxConfig = {
    ...vt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, b.unstable_sx = function(C) {
    return br({
      sx: C,
      theme: this
    });
  }, b;
}
function Vc(e) {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, Math.round(r * 10) / 1e3;
}
const Wc = [...Array(25)].map((e, r) => {
  if (r === 0)
    return "none";
  const t = Vc(r);
  return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
});
function Yo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function qo(e) {
  return e === "dark" ? Wc : [];
}
function Uc(e) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: t,
    overlays: n,
    ...o
  } = e, i = un(r);
  return {
    palette: i,
    opacity: {
      ...Yo(i.mode),
      ...t
    },
    overlays: n || qo(i.mode),
    ...o
  };
}
function Yc(e) {
  var r;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((r = e[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const qc = (e) => [...[...Array(25)].map((r, t) => `--${e ? `${e}-` : ""}overlays-${t}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Gc = (e) => (r, t) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === r) {
    if (r === "dark") {
      const a = {};
      return qc(e.cssVarPrefix).forEach((c) => {
        a[c] = t[c], delete t[c];
      }), i === "media" ? {
        [n]: t,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", r)]: a,
        [`${n}, ${i.replace("%s", r)}`]: t
      } : {
        [n]: {
          ...t,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(r))}`;
  } else if (r) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [n]: t
        }
      };
    if (i)
      return i.replace("%s", String(r));
  }
  return n;
};
function Kc(e) {
  return He(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Hc(e = {}) {
  const r = {
    ...e
  };
  function t(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Kc(c) || a.startsWith("unstable_") ? delete n[a] : He(c) && (n[a] = {
        ...c
      }, t(n[a]));
    }
  }
  return t(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Xc(e, r) {
  r.forEach((t) => {
    e[t] || (e[t] = {});
  });
}
function S(e, r, t) {
  !e[r] && t && (e[r] = t);
}
function Pr(e) {
  return !e || !e.startsWith("hsl") ? e : bo(e);
}
function Ke(e, r) {
  `${r}Channel` in e || (e[`${r}Channel`] = _r(Pr(e[r]), `MUI: Can't create \`palette.${r}Channel\` because \`palette.${r}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${r}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Jc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ue = (e) => {
  try {
    return e();
  } catch {
  }
}, Qc = (e = "mui") => gc(e);
function Dt(e, r, t, n) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const o = n === "dark" ? "dark" : "light";
  if (!t) {
    e[n] = Uc({
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
    ...a
  } = Gt({
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
      ...Yo(o),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || qo(o)
  }, a;
}
function Zc(e = {}, ...r) {
  const {
    colorSchemes: t = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Yc,
    colorSchemeSelector: c = t.light && t.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, p = Object.keys(t)[0], m = n || (t.light && p !== "light" ? "light" : p), b = Qc(i), {
    [m]: x,
    light: C,
    dark: y,
    ...g
  } = t, T = {
    ...g
  };
  let P = x;
  if ((m === "dark" && !("dark" in t) || m === "light" && !("light" in t)) && (P = !0), !P)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : Qe(21, m));
  const w = Dt(T, P, d, m);
  C && !T.light && Dt(T, C, void 0, "light"), y && !T.dark && Dt(T, y, void 0, "dark");
  let E = {
    defaultColorScheme: m,
    ...w,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: b,
    colorSchemes: T,
    font: {
      ..._c(w.typography),
      ...w.font
    },
    spacing: Jc(d.spacing)
  };
  Object.keys(E.colorSchemes).forEach((X) => {
    const s = E.colorSchemes[X].palette, _ = (N) => {
      const B = N.split("-"), U = B[1], ne = B[2];
      return b(N, s[U][ne]);
    };
    if (s.mode === "light" && (S(s.common, "background", "#fff"), S(s.common, "onBackground", "#000")), s.mode === "dark" && (S(s.common, "background", "#000"), S(s.common, "onBackground", "#fff")), Xc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      S(s.Alert, "errorColor", de(s.error.light, 0.6)), S(s.Alert, "infoColor", de(s.info.light, 0.6)), S(s.Alert, "successColor", de(s.success.light, 0.6)), S(s.Alert, "warningColor", de(s.warning.light, 0.6)), S(s.Alert, "errorFilledBg", _("palette-error-main")), S(s.Alert, "infoFilledBg", _("palette-info-main")), S(s.Alert, "successFilledBg", _("palette-success-main")), S(s.Alert, "warningFilledBg", _("palette-warning-main")), S(s.Alert, "errorFilledColor", Ue(() => s.getContrastText(s.error.main))), S(s.Alert, "infoFilledColor", Ue(() => s.getContrastText(s.info.main))), S(s.Alert, "successFilledColor", Ue(() => s.getContrastText(s.success.main))), S(s.Alert, "warningFilledColor", Ue(() => s.getContrastText(s.warning.main))), S(s.Alert, "errorStandardBg", pe(s.error.light, 0.9)), S(s.Alert, "infoStandardBg", pe(s.info.light, 0.9)), S(s.Alert, "successStandardBg", pe(s.success.light, 0.9)), S(s.Alert, "warningStandardBg", pe(s.warning.light, 0.9)), S(s.Alert, "errorIconColor", _("palette-error-main")), S(s.Alert, "infoIconColor", _("palette-info-main")), S(s.Alert, "successIconColor", _("palette-success-main")), S(s.Alert, "warningIconColor", _("palette-warning-main")), S(s.AppBar, "defaultBg", _("palette-grey-100")), S(s.Avatar, "defaultBg", _("palette-grey-400")), S(s.Button, "inheritContainedBg", _("palette-grey-300")), S(s.Button, "inheritContainedHoverBg", _("palette-grey-A100")), S(s.Chip, "defaultBorder", _("palette-grey-400")), S(s.Chip, "defaultAvatarColor", _("palette-grey-700")), S(s.Chip, "defaultIconColor", _("palette-grey-700")), S(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), S(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), S(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), S(s.LinearProgress, "primaryBg", pe(s.primary.main, 0.62)), S(s.LinearProgress, "secondaryBg", pe(s.secondary.main, 0.62)), S(s.LinearProgress, "errorBg", pe(s.error.main, 0.62)), S(s.LinearProgress, "infoBg", pe(s.info.main, 0.62)), S(s.LinearProgress, "successBg", pe(s.success.main, 0.62)), S(s.LinearProgress, "warningBg", pe(s.warning.main, 0.62)), S(s.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`), S(s.Slider, "primaryTrack", pe(s.primary.main, 0.62)), S(s.Slider, "secondaryTrack", pe(s.secondary.main, 0.62)), S(s.Slider, "errorTrack", pe(s.error.main, 0.62)), S(s.Slider, "infoTrack", pe(s.info.main, 0.62)), S(s.Slider, "successTrack", pe(s.success.main, 0.62)), S(s.Slider, "warningTrack", pe(s.warning.main, 0.62));
      const N = Gr(s.background.default, 0.8);
      S(s.SnackbarContent, "bg", N), S(s.SnackbarContent, "color", Ue(() => s.getContrastText(N))), S(s.SpeedDialAction, "fabHoverBg", Gr(s.background.paper, 0.15)), S(s.StepConnector, "border", _("palette-grey-400")), S(s.StepContent, "border", _("palette-grey-400")), S(s.Switch, "defaultColor", _("palette-common-white")), S(s.Switch, "defaultDisabledColor", _("palette-grey-100")), S(s.Switch, "primaryDisabledColor", pe(s.primary.main, 0.62)), S(s.Switch, "secondaryDisabledColor", pe(s.secondary.main, 0.62)), S(s.Switch, "errorDisabledColor", pe(s.error.main, 0.62)), S(s.Switch, "infoDisabledColor", pe(s.info.main, 0.62)), S(s.Switch, "successDisabledColor", pe(s.success.main, 0.62)), S(s.Switch, "warningDisabledColor", pe(s.warning.main, 0.62)), S(s.TableCell, "border", pe(qr(s.divider, 1), 0.88)), S(s.Tooltip, "bg", qr(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      S(s.Alert, "errorColor", pe(s.error.light, 0.6)), S(s.Alert, "infoColor", pe(s.info.light, 0.6)), S(s.Alert, "successColor", pe(s.success.light, 0.6)), S(s.Alert, "warningColor", pe(s.warning.light, 0.6)), S(s.Alert, "errorFilledBg", _("palette-error-dark")), S(s.Alert, "infoFilledBg", _("palette-info-dark")), S(s.Alert, "successFilledBg", _("palette-success-dark")), S(s.Alert, "warningFilledBg", _("palette-warning-dark")), S(s.Alert, "errorFilledColor", Ue(() => s.getContrastText(s.error.dark))), S(s.Alert, "infoFilledColor", Ue(() => s.getContrastText(s.info.dark))), S(s.Alert, "successFilledColor", Ue(() => s.getContrastText(s.success.dark))), S(s.Alert, "warningFilledColor", Ue(() => s.getContrastText(s.warning.dark))), S(s.Alert, "errorStandardBg", de(s.error.light, 0.9)), S(s.Alert, "infoStandardBg", de(s.info.light, 0.9)), S(s.Alert, "successStandardBg", de(s.success.light, 0.9)), S(s.Alert, "warningStandardBg", de(s.warning.light, 0.9)), S(s.Alert, "errorIconColor", _("palette-error-main")), S(s.Alert, "infoIconColor", _("palette-info-main")), S(s.Alert, "successIconColor", _("palette-success-main")), S(s.Alert, "warningIconColor", _("palette-warning-main")), S(s.AppBar, "defaultBg", _("palette-grey-900")), S(s.AppBar, "darkBg", _("palette-background-paper")), S(s.AppBar, "darkColor", _("palette-text-primary")), S(s.Avatar, "defaultBg", _("palette-grey-600")), S(s.Button, "inheritContainedBg", _("palette-grey-800")), S(s.Button, "inheritContainedHoverBg", _("palette-grey-700")), S(s.Chip, "defaultBorder", _("palette-grey-700")), S(s.Chip, "defaultAvatarColor", _("palette-grey-300")), S(s.Chip, "defaultIconColor", _("palette-grey-300")), S(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), S(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), S(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), S(s.LinearProgress, "primaryBg", de(s.primary.main, 0.5)), S(s.LinearProgress, "secondaryBg", de(s.secondary.main, 0.5)), S(s.LinearProgress, "errorBg", de(s.error.main, 0.5)), S(s.LinearProgress, "infoBg", de(s.info.main, 0.5)), S(s.LinearProgress, "successBg", de(s.success.main, 0.5)), S(s.LinearProgress, "warningBg", de(s.warning.main, 0.5)), S(s.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`), S(s.Slider, "primaryTrack", de(s.primary.main, 0.5)), S(s.Slider, "secondaryTrack", de(s.secondary.main, 0.5)), S(s.Slider, "errorTrack", de(s.error.main, 0.5)), S(s.Slider, "infoTrack", de(s.info.main, 0.5)), S(s.Slider, "successTrack", de(s.success.main, 0.5)), S(s.Slider, "warningTrack", de(s.warning.main, 0.5));
      const N = Gr(s.background.default, 0.98);
      S(s.SnackbarContent, "bg", N), S(s.SnackbarContent, "color", Ue(() => s.getContrastText(N))), S(s.SpeedDialAction, "fabHoverBg", Gr(s.background.paper, 0.15)), S(s.StepConnector, "border", _("palette-grey-600")), S(s.StepContent, "border", _("palette-grey-600")), S(s.Switch, "defaultColor", _("palette-grey-300")), S(s.Switch, "defaultDisabledColor", _("palette-grey-600")), S(s.Switch, "primaryDisabledColor", de(s.primary.main, 0.55)), S(s.Switch, "secondaryDisabledColor", de(s.secondary.main, 0.55)), S(s.Switch, "errorDisabledColor", de(s.error.main, 0.55)), S(s.Switch, "infoDisabledColor", de(s.info.main, 0.55)), S(s.Switch, "successDisabledColor", de(s.success.main, 0.55)), S(s.Switch, "warningDisabledColor", de(s.warning.main, 0.55)), S(s.TableCell, "border", de(qr(s.divider, 1), 0.68)), S(s.Tooltip, "bg", qr(s.grey[700], 0.92));
    }
    Ke(s.background, "default"), Ke(s.background, "paper"), Ke(s.common, "background"), Ke(s.common, "onBackground"), Ke(s, "divider"), Object.keys(s).forEach((N) => {
      const B = s[N];
      B && typeof B == "object" && (B.main && S(s[N], "mainChannel", _r(Pr(B.main))), B.light && S(s[N], "lightChannel", _r(Pr(B.light))), B.dark && S(s[N], "darkChannel", _r(Pr(B.dark))), B.contrastText && S(s[N], "contrastTextChannel", _r(Pr(B.contrastText))), N === "text" && (Ke(s[N], "primary"), Ke(s[N], "secondary")), N === "action" && (B.active && Ke(s[N], "active"), B.selected && Ke(s[N], "selected")));
    });
  }), E = r.reduce((X, s) => je(X, s), E);
  const f = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Gc(E)
  }, {
    vars: k,
    generateThemeVars: I,
    generateStyleSheets: Q
  } = vc(E, f);
  return E.vars = k, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([X, s]) => {
    E[X] = s;
  }), E.generateThemeVars = I, E.generateStyleSheets = Q, E.generateSpacing = function() {
    return No(d.spacing, rn(this));
  }, E.getColorSchemeSelector = Sc(c), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = a, E.unstable_sxConfig = {
    ...vt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, E.unstable_sx = function(s) {
    return br({
      sx: s,
      theme: this
    });
  }, E.toRuntimeSource = Hc, E;
}
function po(e, r, t) {
  e.colorSchemes && t && (e.colorSchemes[r] = {
    ...t !== !0 && t,
    palette: un({
      ...t === !0 ? {} : t.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function el(e = {}, ...r) {
  const {
    palette: t,
    cssVariables: n = !1,
    colorSchemes: o = t ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = t == null ? void 0 : t.mode,
    ...a
  } = e, c = i || "light", u = o == null ? void 0 : o[c], d = {
    ...o,
    ...t ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: t
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Gt(e, ...r);
    let p = t;
    "palette" in e || d[c] && (d[c] !== !0 ? p = d[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const m = Gt({
      ...e,
      palette: p
    }, ...r);
    return m.defaultColorScheme = c, m.colorSchemes = d, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: m.palette
    }, po(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, po(m, "light", d.light)), m;
  }
  return !t && !("light" in d) && c === "light" && (d.light = !0), Zc({
    ...a,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...r);
}
const rl = el(), tl = "$$material", rr = Qs({
  themeId: tl,
  defaultTheme: rl,
  rootShouldForwardProp: vo
}), at = hc;
process.env.NODE_ENV !== "production" && (h.node, h.object.isRequired);
function Lr(e) {
  return mc(e);
}
class st {
  constructor() {
    Tr(this, "mountEffect", () => {
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
    return new st();
  }
  static use() {
    const r = Vo(st.create).current, [t, n] = D.useState(!1);
    return r.shouldMount = t, r.setShouldMount = n, D.useEffect(r.mountEffect, [t]), r;
  }
  mount() {
    return this.mounted || (this.mounted = ol(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function nl() {
  return st.use();
}
function ol() {
  let e, r;
  const t = new Promise((n, o) => {
    e = n, r = o;
  });
  return t.resolve = e, t.reject = r, t;
}
function il(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function Kt(e, r) {
  return Kt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Kt(e, r);
}
function al(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Kt(e, r);
}
const mo = ir.createContext(null);
function sl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fn(e, r) {
  var t = function(i) {
    return r && Xr(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ci.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function cl(e, r) {
  e = e || {}, r = r || {};
  function t(p) {
    return p in r ? r[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in r) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var d = n[u][a];
        c[n[u][a]] = t(d);
      }
    c[u] = t(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = t(o[a]);
  return c;
}
function ar(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function ll(e, r) {
  return fn(e.children, function(t) {
    return Jr(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: ar(t, "appear", e),
      enter: ar(t, "enter", e),
      exit: ar(t, "exit", e)
    });
  });
}
function ul(e, r, t) {
  var n = fn(e.children), o = cl(r, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Xr(a)) {
      var c = i in r, u = i in n, d = r[i], p = Xr(d) && !d.props.in;
      u && (!c || p) ? o[i] = Jr(a, {
        onExited: t.bind(null, a),
        in: !0,
        exit: ar(a, "exit", e),
        enter: ar(a, "enter", e)
      }) : !u && c && !p ? o[i] = Jr(a, {
        in: !1
      }) : u && c && Xr(d) && (o[i] = Jr(a, {
        onExited: t.bind(null, a),
        in: d.props.in,
        exit: ar(a, "exit", e),
        enter: ar(a, "enter", e)
      }));
    }
  }), o;
}
var fl = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, dl = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, dn = /* @__PURE__ */ function(e) {
  al(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(sl(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
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
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? ll(o, c) : ul(o, a, c),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var a = fn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = ot({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = il(o, ["component", "childFactory"]), u = this.state.contextValue, d = fl(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ ir.createElement(mo.Provider, {
      value: u
    }, d) : /* @__PURE__ */ ir.createElement(mo.Provider, {
      value: u
    }, /* @__PURE__ */ ir.createElement(i, c, d));
  }, r;
}(ir.Component);
dn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: h.any,
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
  children: h.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: h.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: h.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: h.bool,
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
  childFactory: h.func
} : {};
dn.defaultProps = dl;
function Go(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: d
  } = e, [p, m] = D.useState(!1), b = Ie(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, C = Ie(t.child, p && t.childLeaving, n && t.childPulsate);
  return !c && !p && m(!0), D.useEffect(() => {
    if (!c && u != null) {
      const y = setTimeout(u, d);
      return () => {
        clearTimeout(y);
      };
    }
  }, [u, c, d]), /* @__PURE__ */ Ce.jsx("span", {
    className: b,
    style: x,
    children: /* @__PURE__ */ Ce.jsx("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object.isRequired,
  className: h.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: h.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: h.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: h.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: h.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: h.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: h.number,
  /**
   * exit delay
   */
  timeout: h.number.isRequired
});
const ze = zr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ht = 550, pl = 80, ml = cn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, hl = cn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, gl = cn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, yl = rr("span", {
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
}), bl = rr(Go, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ze.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ml};
    animation-duration: ${Ht}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ze.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ze.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ze.childLeaving} {
    opacity: 0;
    animation-name: ${hl};
    animation-duration: ${Ht}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ze.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${gl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ko = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = Lr({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [u, d] = D.useState([]), p = D.useRef(0), m = D.useRef(null);
  D.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [u]);
  const b = D.useRef(!1), x = fc(), C = D.useRef(null), y = D.useRef(null), g = D.useCallback((E) => {
    const {
      pulsate: f,
      rippleX: k,
      rippleY: I,
      rippleSize: Q,
      cb: X
    } = E;
    d((s) => [...s, /* @__PURE__ */ Ce.jsx(bl, {
      classes: {
        ripple: Ie(i.ripple, ze.ripple),
        rippleVisible: Ie(i.rippleVisible, ze.rippleVisible),
        ripplePulsate: Ie(i.ripplePulsate, ze.ripplePulsate),
        child: Ie(i.child, ze.child),
        childLeaving: Ie(i.childLeaving, ze.childLeaving),
        childPulsate: Ie(i.childPulsate, ze.childPulsate)
      },
      timeout: Ht,
      pulsate: f,
      rippleX: k,
      rippleY: I,
      rippleSize: Q
    }, p.current)]), p.current += 1, m.current = X;
  }, [i]), T = D.useCallback((E = {}, f = {}, k = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: Q = o || f.pulsate,
      fakeElement: X = !1
      // For test purposes
    } = f;
    if ((E == null ? void 0 : E.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (b.current = !0);
    const s = X ? null : y.current, _ = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, B, U;
    if (Q || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      N = Math.round(_.width / 2), B = Math.round(_.height / 2);
    else {
      const {
        clientX: ne,
        clientY: ee
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      N = Math.round(ne - _.left), B = Math.round(ee - _.top);
    }
    if (Q)
      U = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const ne = Math.max(Math.abs((s ? s.clientWidth : 0) - N), N) * 2 + 2, ee = Math.max(Math.abs((s ? s.clientHeight : 0) - B), B) * 2 + 2;
      U = Math.sqrt(ne ** 2 + ee ** 2);
    }
    E != null && E.touches ? C.current === null && (C.current = () => {
      g({
        pulsate: I,
        rippleX: N,
        rippleY: B,
        rippleSize: U,
        cb: k
      });
    }, x.start(pl, () => {
      C.current && (C.current(), C.current = null);
    })) : g({
      pulsate: I,
      rippleX: N,
      rippleY: B,
      rippleSize: U,
      cb: k
    });
  }, [o, g, x]), P = D.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), w = D.useCallback((E, f) => {
    if (x.clear(), (E == null ? void 0 : E.type) === "touchend" && C.current) {
      C.current(), C.current = null, x.start(0, () => {
        w(E, f);
      });
      return;
    }
    C.current = null, d((k) => k.length > 0 ? k.slice(1) : k), m.current = f;
  }, [x]);
  return D.useImperativeHandle(t, () => ({
    pulsate: P,
    start: T,
    stop: w
  }), [P, T, w]), /* @__PURE__ */ Ce.jsx(yl, {
    className: Ie(ze.root, i.root, a),
    ref: y,
    ...c,
    children: /* @__PURE__ */ Ce.jsx(dn, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: h.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string
});
function vl(e) {
  return Cr("MuiButtonBase", e);
}
const Sl = zr("MuiButtonBase", ["root", "disabled", "focusVisible"]), Cl = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, a = ct({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, vl, o);
  return t && n && (a.root += ` ${n}`), a;
}, El = rr("button", {
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
  [`&.${Sl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), pn = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = Lr({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: m = !1,
    focusRipple: b = !1,
    focusVisibleClassName: x,
    LinkComponent: C = "a",
    onBlur: y,
    onClick: g,
    onContextMenu: T,
    onDragLeave: P,
    onFocus: w,
    onFocusVisible: E,
    onKeyDown: f,
    onKeyUp: k,
    onMouseDown: I,
    onMouseLeave: Q,
    onMouseUp: X,
    onTouchEnd: s,
    onTouchMove: _,
    onTouchStart: N,
    tabIndex: B = 0,
    TouchRippleProps: U,
    touchRippleRef: ne,
    type: ee,
    ...ge
  } = n, ye = D.useRef(null), Ee = nl(), R = to(Ee.ref, ne), [O, F] = D.useState(!1);
  d && O && F(!1), D.useImperativeHandle(o, () => ({
    focusVisible: () => {
      F(!0), ye.current.focus();
    }
  }), []);
  const W = Ee.shouldMount && !p && !d;
  D.useEffect(() => {
    O && b && !p && Ee.pulsate();
  }, [p, b, O, Ee]);
  function j(G, Wr, Ur = m) {
    return Hr((xr) => (Wr && Wr(xr), Ur || Ee[G](xr), !0));
  }
  const K = j("start", I), z = j("stop", T), L = j("stop", P), Y = j("stop", X), H = j("stop", (G) => {
    O && G.preventDefault(), Q && Q(G);
  }), q = j("start", N), be = j("stop", s), v = j("stop", _), we = j("stop", (G) => {
    oo(G.target) || F(!1), y && y(G);
  }, !1), M = Hr((G) => {
    ye.current || (ye.current = G.currentTarget), oo(G.target) && (F(!0), E && E(G)), w && w(G);
  }), Oe = () => {
    const G = ye.current;
    return u && u !== "button" && !(G.tagName === "A" && G.href);
  }, De = Hr((G) => {
    b && !G.repeat && O && G.key === " " && Ee.stop(G, () => {
      Ee.start(G);
    }), G.target === G.currentTarget && Oe() && G.key === " " && G.preventDefault(), f && f(G), G.target === G.currentTarget && Oe() && G.key === "Enter" && !d && (G.preventDefault(), g && g(G));
  }), tr = Hr((G) => {
    b && G.key === " " && O && !G.defaultPrevented && Ee.stop(G, () => {
      Ee.pulsate(G);
    }), k && k(G), g && G.target === G.currentTarget && Oe() && G.key === " " && !G.defaultPrevented && g(G);
  });
  let nr = u;
  nr === "button" && (ge.href || ge.to) && (nr = C);
  const We = {};
  nr === "button" ? (We.type = ee === void 0 ? "button" : ee, We.disabled = d) : (!ge.href && !ge.to && (We.role = "button"), d && (We["aria-disabled"] = d));
  const xt = to(t, ye), Vr = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: b,
    tabIndex: B,
    focusVisible: O
  }, Er = Cl(Vr);
  return /* @__PURE__ */ Ce.jsxs(El, {
    as: nr,
    className: Ie(Er.root, c),
    ownerState: Vr,
    onBlur: we,
    onClick: g,
    onContextMenu: z,
    onFocus: M,
    onKeyDown: De,
    onKeyUp: tr,
    onMouseDown: K,
    onMouseLeave: H,
    onMouseUp: Y,
    onDragLeave: L,
    onTouchEnd: be,
    onTouchMove: v,
    onTouchStart: q,
    ref: xt,
    tabIndex: d ? -1 : B,
    type: ee,
    ...We,
    ...ge,
    children: [a, W ? /* @__PURE__ */ Ce.jsx(Ko, {
      ref: R,
      center: i,
      ...U
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: sc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: h.bool,
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ac,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: h.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: h.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: h.string,
  /**
   * @ignore
   */
  href: h.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: h.elementType,
  /**
   * @ignore
   */
  onBlur: h.func,
  /**
   * @ignore
   */
  onClick: h.func,
  /**
   * @ignore
   */
  onContextMenu: h.func,
  /**
   * @ignore
   */
  onDragLeave: h.func,
  /**
   * @ignore
   */
  onFocus: h.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: h.func,
  /**
   * @ignore
   */
  onKeyDown: h.func,
  /**
   * @ignore
   */
  onKeyUp: h.func,
  /**
   * @ignore
   */
  onMouseDown: h.func,
  /**
   * @ignore
   */
  onMouseLeave: h.func,
  /**
   * @ignore
   */
  onMouseUp: h.func,
  /**
   * @ignore
   */
  onTouchEnd: h.func,
  /**
   * @ignore
   */
  onTouchMove: h.func,
  /**
   * @ignore
   */
  onTouchStart: h.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @default 0
   */
  tabIndex: h.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: h.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: h.oneOfType([h.func, h.shape({
    current: h.shape({
      pulsate: h.func.isRequired,
      start: h.func.isRequired,
      stop: h.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string])
});
function xl(e) {
  return typeof e.main == "string";
}
function Tl(e, r = []) {
  if (!xl(e))
    return !1;
  for (const t of r)
    if (!e.hasOwnProperty(t) || typeof e[t] != "string")
      return !1;
  return !0;
}
function Xt(e = []) {
  return ([, r]) => r && Tl(r, e);
}
function wl(e) {
  return Cr("MuiButton", e);
}
const hr = zr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Ho = /* @__PURE__ */ D.createContext({});
process.env.NODE_ENV !== "production" && (Ho.displayName = "ButtonGroupContext");
const Xo = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (Xo.displayName = "ButtonGroupButtonContext");
const Rl = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${he(r)}`, `size${he(o)}`, `${i}Size${he(o)}`, `color${he(r)}`, t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${he(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${he(o)}`]
  }, u = ct(c, wl, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, Jo = [{
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
}], $l = rr(pn, {
  shouldForwardProp: (e) => vo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${he(t.color)}`], r[`size${he(t.size)}`], r[`${t.variant}Size${he(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(at(({
  theme: e
}) => {
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
    [`&.${hr.disabled}`]: {
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
        [`&.${hr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${hr.disabled}`]: {
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
        [`&.${hr.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Xt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Je(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : r,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : t,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${hr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${hr.disabled}`]: {
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
})), Ol = rr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${he(t.size)}`]];
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
  }, ...Jo]
}), _l = rr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${he(t.size)}`]];
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
  }, ...Jo]
}), mn = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = D.useContext(Ho), o = D.useContext(Xo), i = tt(n, r), a = Lr({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: d = "button",
    className: p,
    disabled: m = !1,
    disableElevation: b = !1,
    disableFocusRipple: x = !1,
    endIcon: C,
    focusVisibleClassName: y,
    fullWidth: g = !1,
    size: T = "medium",
    startIcon: P,
    type: w,
    variant: E = "text",
    ...f
  } = a, k = {
    ...a,
    color: u,
    component: d,
    disabled: m,
    disableElevation: b,
    disableFocusRipple: x,
    fullWidth: g,
    size: T,
    type: w,
    variant: E
  }, I = Rl(k), Q = P && /* @__PURE__ */ Ce.jsx(Ol, {
    className: I.startIcon,
    ownerState: k,
    children: P
  }), X = C && /* @__PURE__ */ Ce.jsx(_l, {
    className: I.endIcon,
    ownerState: k,
    children: C
  }), s = o || "";
  return /* @__PURE__ */ Ce.jsxs($l, {
    ownerState: k,
    className: Ie(n.className, I.root, p, s),
    component: d,
    disabled: m,
    focusRipple: !x,
    focusVisibleClassName: Ie(I.focusVisible, y),
    ref: t,
    type: w,
    ...f,
    classes: I,
    children: [Q, c, X]
  });
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: h.oneOfType([h.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), h.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: h.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: h.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * Element placed after the children.
   */
  endIcon: h.node,
  /**
   * @ignore
   */
  focusVisibleClassName: h.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: h.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: h.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: h.oneOfType([h.oneOf(["small", "medium", "large"]), h.string]),
  /**
   * Element placed before the children.
   */
  startIcon: h.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: h.oneOfType([h.oneOf(["contained", "outlined", "text"]), h.string])
});
function Ll(e) {
  var r = e.bgcolor, t = e.text, n = e.txtcolor, o = e.disabled, i = e.onClick, a = e.size;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    Ce.jsx(mn, { type: "button", onClick: i, disabled: o, size: a, sx: { backgroundColor: r, color: n }, children: t })
  );
}
function Pl(e) {
  return Cr("MuiIconButton", e);
}
const Al = zr("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), kl = (e) => {
  const {
    classes: r,
    disabled: t,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", t && "disabled", n !== "default" && `color${he(n)}`, o && `edge${he(o)}`, `size${he(i)}`]
  };
  return ct(a, Pl, r);
}, Il = rr(pn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "default" && r[`color${he(t.color)}`], t.edge && r[`edge${he(t.edge)}`], r[`size${he(t.size)}`]];
  }
})(at(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (r) => !r.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), at(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Xt()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (e.vars || e).palette[r].main
    }
  })), ...Object.entries(e.palette).filter(Xt()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je((e.vars || e).palette[r].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Al.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), hn = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = Lr({
    props: r,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: u = !1,
    disableFocusRipple: d = !1,
    size: p = "medium",
    ...m
  } = n, b = {
    ...n,
    edge: o,
    color: c,
    disabled: u,
    disableFocusRipple: d,
    size: p
  }, x = kl(b);
  return /* @__PURE__ */ Ce.jsx(Il, {
    className: Ie(x.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: u,
    ref: t,
    ...m,
    ownerState: b,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Lo(h.node, (e) => D.Children.toArray(e.children).some((t) => /* @__PURE__ */ D.isValidElement(t) && t.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: h.oneOfType([h.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), h.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: h.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: h.oneOfType([h.oneOf(["small", "medium", "large"]), h.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object])
});
function Ml(e) {
  return Cr("MuiSvgIcon", e);
}
zr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Nl = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${he(r)}`, `fontSize${he(t)}`]
  };
  return ct(o, Ml, n);
}, jl = rr("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${he(t.color)}`], r[`fontSize${he(t.fontSize)}`]];
  }
})(at(({
  theme: e
}) => {
  var r, t, n, o, i, a, c, u, d, p, m, b, x, C;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (r = e.transitions) == null ? void 0 : r.create) == null ? void 0 : o.call(r, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (y) => !y.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((u = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : p.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var g, T;
        return {
          props: {
            color: y
          },
          style: {
            color: (T = (g = (e.vars ?? e).palette) == null ? void 0 : g[y]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (b = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : b.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (C = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) == null ? void 0 : C.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), jr = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = Lr({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: b = "0 0 24 24",
    ...x
  } = n, C = /* @__PURE__ */ D.isValidElement(o) && o.type === "svg", y = {
    ...n,
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: r.fontSize,
    inheritViewBox: p,
    viewBox: b,
    hasSvgAsChild: C
  }, g = {};
  p || (g.viewBox = b);
  const T = Nl(y);
  return /* @__PURE__ */ Ce.jsxs(jl, {
    as: c,
    className: Ie(T.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: t,
    ...g,
    ...x,
    ...C && o.props,
    ownerState: y,
    children: [C ? o.props.children : o, m ? /* @__PURE__ */ Ce.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: h.oneOfType([h.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), h.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: h.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: h.oneOfType([h.oneOf(["inherit", "large", "medium", "small"]), h.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: h.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: h.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: h.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: h.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: h.string
});
jr && (jr.muiName = "SvgIcon");
function Qo(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ Ce.jsx(jr, {
      "data-testid": `${r}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = jr.muiName, /* @__PURE__ */ D.memo(/* @__PURE__ */ D.forwardRef(t));
}
const Bl = Qo(/* @__PURE__ */ Ce.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function Vl(e) {
  const { iconColor: r, disabled: t, onClick: n } = e;
  return /* @__PURE__ */ Ce.jsx(
    hn,
    {
      onClick: n,
      disabled: t,
      sx: { color: r },
      children: /* @__PURE__ */ Ce.jsx(Bl, {})
    }
  );
}
const Dl = Qo(/* @__PURE__ */ Ce.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function Wl(e) {
  const { iconColor: r, disabled: t, onClick: n } = e;
  return /* @__PURE__ */ Ce.jsx(
    hn,
    {
      onClick: n,
      disabled: t,
      sx: { color: r },
      children: /* @__PURE__ */ Ce.jsx(Dl, {})
    }
  );
}
function Ul(e) {
  const {
    text: r,
    txtcolor: t,
    bgcolor: n,
    bordercolor: o,
    bordersize: i,
    size: a = "medium",
    hoverTxtColor: c,
    hoverBgColor: u,
    disabled: d = !1,
    onClick: p
  } = e;
  return /* @__PURE__ */ Ce.jsx(
    mn,
    {
      type: "button",
      onClick: p,
      disabled: d,
      size: a,
      variant: "outlined",
      sx: {
        color: t,
        backgroundColor: n,
        border: `${i} solid ${o}`,
        ":hover": {
          backgroundColor: u,
          color: c
        }
      },
      children: r
    }
  );
}
export {
  Ll as CustomButton,
  Ul as MyButton,
  Vl as MyFavourite,
  Wl as MyFavouriteBorder
};
//# sourceMappingURL=index.es.js.map
