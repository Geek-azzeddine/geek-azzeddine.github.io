(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
    l(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && l(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function l(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = s(u);
    fetch(u.href, f);
  }
})();
function p0(n) {
  return n &&
    n.__esModule &&
    Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Xl = { exports: {} },
  si = {},
  Yl = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var df;
function h0() {
  if (df) return se;
  df = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function P(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (w && C[w]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var N = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { },
  },
    _ = Object.assign,
    M = {};
  function L(C, D, re) {
    (this.props = C),
      (this.context = D),
      (this.refs = M),
      (this.updater = re || N);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (C, D) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, C, D, "setState");
    }),
    (L.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function I() { }
  I.prototype = L.prototype;
  function U(C, D, re) {
    (this.props = C),
      (this.context = D),
      (this.refs = M),
      (this.updater = re || N);
  }
  var H = (U.prototype = new I());
  (H.constructor = U), _(H, L.prototype), (H.isPureReactComponent = !0);
  var Q = Array.isArray,
    B = Object.prototype.hasOwnProperty,
    ee = { current: null },
    le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(C, D, re) {
    var oe,
      ue = {},
      ce = null,
      me = null;
    if (D != null)
      for (oe in (D.ref !== void 0 && (me = D.ref),
        D.key !== void 0 && (ce = "" + D.key),
        D))
        B.call(D, oe) && !le.hasOwnProperty(oe) && (ue[oe] = D[oe]);
    var fe = arguments.length - 2;
    if (fe === 1) ue.children = re;
    else if (1 < fe) {
      for (var Se = Array(fe), lt = 0; lt < fe; lt++)
        Se[lt] = arguments[lt + 2];
      ue.children = Se;
    }
    if (C && C.defaultProps)
      for (oe in ((fe = C.defaultProps), fe))
        ue[oe] === void 0 && (ue[oe] = fe[oe]);
    return {
      $$typeof: n,
      type: C,
      key: ce,
      ref: me,
      props: ue,
      _owner: ee.current,
    };
  }
  function ye(C, D) {
    return {
      $$typeof: n,
      type: C.type,
      key: D,
      ref: C.ref,
      props: C.props,
      _owner: C._owner,
    };
  }
  function je(C) {
    return typeof C == "object" && C !== null && C.$$typeof === n;
  }
  function Ze(C) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (re) {
        return D[re];
      })
    );
  }
  var ot = /\/+/g;
  function Ge(C, D) {
    return typeof C == "object" && C !== null && C.key != null
      ? Ze("" + C.key)
      : D.toString(36);
  }
  function Je(C, D, re, oe, ue) {
    var ce = typeof C;
    (ce === "undefined" || ce === "boolean") && (C = null);
    var me = !1;
    if (C === null) me = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case n:
            case i:
              me = !0;
          }
      }
    if (me)
      return (
        (me = C),
        (ue = ue(me)),
        (C = oe === "" ? "." + Ge(me, 0) : oe),
        Q(ue)
          ? ((re = ""),
            C != null && (re = C.replace(ot, "$&/") + "/"),
            Je(ue, D, re, "", function (lt) {
              return lt;
            }))
          : ue != null &&
          (je(ue) &&
            (ue = ye(
              ue,
              re +
              (!ue.key || (me && me.key === ue.key)
                ? ""
                : ("" + ue.key).replace(ot, "$&/") +
                "/") +
              C
            )),
            D.push(ue)),
        1
      );
    if (((me = 0), (oe = oe === "" ? "." : oe + ":"), Q(C)))
      for (var fe = 0; fe < C.length; fe++) {
        ce = C[fe];
        var Se = oe + Ge(ce, fe);
        me += Je(ce, D, re, Se, ue);
      }
    else if (((Se = P(C)), typeof Se == "function"))
      for (C = Se.call(C), fe = 0; !(ce = C.next()).done;)
        (ce = ce.value),
          (Se = oe + Ge(ce, fe++)),
          (me += Je(ce, D, re, Se, ue));
    else if (ce === "object")
      throw (
        ((D = String(C)),
          Error(
            "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" +
              Object.keys(C).join(", ") +
              "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
          ))
      );
    return me;
  }
  function kt(C, D, re) {
    if (C == null) return C;
    var oe = [],
      ue = 0;
    return (
      Je(C, oe, "", "", function (ce) {
        return D.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Qe(C) {
    if (C._status === -1) {
      var D = C._result;
      (D = D()),
        D.then(
          function (re) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = re));
          },
          function (re) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = re));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = D));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var ie = { current: null },
    F = { transition: null },
    Y = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: ee,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: kt,
      forEach: function (C, D, re) {
        kt(
          C,
          function () {
            D.apply(this, arguments);
          },
          re
        );
      },
      count: function (C) {
        var D = 0;
        return (
          kt(C, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (C) {
        return (
          kt(C, function (D) {
            return D;
          }) || []
        );
      },
      only: function (C) {
        if (!je(C))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return C;
      },
    }),
    (se.Component = L),
    (se.Fragment = s),
    (se.Profiler = u),
    (se.PureComponent = U),
    (se.StrictMode = l),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (se.act = W),
    (se.cloneElement = function (C, D, re) {
      if (C == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
          C +
          "."
        );
      var oe = _({}, C.props),
        ue = C.key,
        ce = C.ref,
        me = C._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((ce = D.ref), (me = ee.current)),
            D.key !== void 0 && (ue = "" + D.key),
            C.type && C.type.defaultProps)
        )
          var fe = C.type.defaultProps;
        for (Se in D)
          B.call(D, Se) &&
            !le.hasOwnProperty(Se) &&
            (oe[Se] =
              D[Se] === void 0 && fe !== void 0 ? fe[Se] : D[Se]);
      }
      var Se = arguments.length - 2;
      if (Se === 1) oe.children = re;
      else if (1 < Se) {
        fe = Array(Se);
        for (var lt = 0; lt < Se; lt++) fe[lt] = arguments[lt + 2];
        oe.children = fe;
      }
      return {
        $$typeof: n,
        type: C.type,
        key: ue,
        ref: ce,
        props: oe,
        _owner: me,
      };
    }),
    (se.createContext = function (C) {
      return (
        (C = {
          $$typeof: d,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: f, _context: C }),
        (C.Consumer = C)
      );
    }),
    (se.createElement = X),
    (se.createFactory = function (C) {
      var D = X.bind(null, C);
      return (D.type = C), D;
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (C) {
      return { $$typeof: h, render: C };
    }),
    (se.isValidElement = je),
    (se.lazy = function (C) {
      return {
        $$typeof: v,
        _payload: { _status: -1, _result: C },
        _init: Qe,
      };
    }),
    (se.memo = function (C, D) {
      return { $$typeof: g, type: C, compare: D === void 0 ? null : D };
    }),
    (se.startTransition = function (C) {
      var D = F.transition;
      F.transition = {};
      try {
        C();
      } finally {
        F.transition = D;
      }
    }),
    (se.unstable_act = W),
    (se.useCallback = function (C, D) {
      return ie.current.useCallback(C, D);
    }),
    (se.useContext = function (C) {
      return ie.current.useContext(C);
    }),
    (se.useDebugValue = function () { }),
    (se.useDeferredValue = function (C) {
      return ie.current.useDeferredValue(C);
    }),
    (se.useEffect = function (C, D) {
      return ie.current.useEffect(C, D);
    }),
    (se.useId = function () {
      return ie.current.useId();
    }),
    (se.useImperativeHandle = function (C, D, re) {
      return ie.current.useImperativeHandle(C, D, re);
    }),
    (se.useInsertionEffect = function (C, D) {
      return ie.current.useInsertionEffect(C, D);
    }),
    (se.useLayoutEffect = function (C, D) {
      return ie.current.useLayoutEffect(C, D);
    }),
    (se.useMemo = function (C, D) {
      return ie.current.useMemo(C, D);
    }),
    (se.useReducer = function (C, D, re) {
      return ie.current.useReducer(C, D, re);
    }),
    (se.useRef = function (C) {
      return ie.current.useRef(C);
    }),
    (se.useState = function (C) {
      return ie.current.useState(C);
    }),
    (se.useSyncExternalStore = function (C, D, re) {
      return ie.current.useSyncExternalStore(C, D, re);
    }),
    (se.useTransition = function () {
      return ie.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var ff;
function La() {
  return ff || ((ff = 1), (Yl.exports = h0())), Yl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf;
function m0() {
  if (pf) return si;
  pf = 1;
  var n = La(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    u =
      n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, m, g) {
    var v,
      w = {},
      P = null,
      N = null;
    g !== void 0 && (P = "" + g),
      m.key !== void 0 && (P = "" + m.key),
      m.ref !== void 0 && (N = m.ref);
    for (v in m) l.call(m, v) && !f.hasOwnProperty(v) && (w[v] = m[v]);
    if (h && h.defaultProps)
      for (v in ((m = h.defaultProps), m))
        w[v] === void 0 && (w[v] = m[v]);
    return {
      $$typeof: i,
      type: h,
      key: P,
      ref: N,
      props: w,
      _owner: u.current,
    };
  }
  return (si.Fragment = s), (si.jsx = d), (si.jsxs = d), si;
}
var hf;
function g0() {
  return hf || ((hf = 1), (Xl.exports = m0())), Xl.exports;
}
var y = g0(),
  Vs = {},
  Zl = { exports: {} },
  st = {},
  Jl = { exports: {} },
  ea = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mf;
function y0() {
  return (
    mf ||
    ((mf = 1),
      (function (n) {
        function i(F, Y) {
          var W = F.length;
          F.push(Y);
          e: for (; 0 < W;) {
            var C = (W - 1) >>> 1,
              D = F[C];
            if (0 < u(D, Y)) (F[C] = Y), (F[W] = D), (W = C);
            else break e;
          }
        }
        function s(F) {
          return F.length === 0 ? null : F[0];
        }
        function l(F) {
          if (F.length === 0) return null;
          var Y = F[0],
            W = F.pop();
          if (W !== Y) {
            F[0] = W;
            e: for (
              var C = 0, D = F.length, re = D >>> 1;
              C < re;

            ) {
              var oe = 2 * (C + 1) - 1,
                ue = F[oe],
                ce = oe + 1,
                me = F[ce];
              if (0 > u(ue, W))
                ce < D && 0 > u(me, ue)
                  ? ((F[C] = me), (F[ce] = W), (C = ce))
                  : ((F[C] = ue), (F[oe] = W), (C = oe));
              else if (ce < D && 0 > u(me, W))
                (F[C] = me), (F[ce] = W), (C = ce);
              else break e;
            }
          }
          return Y;
        }
        function u(F, Y) {
          var W = F.sortIndex - Y.sortIndex;
          return W !== 0 ? W : F.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          g = [],
          v = 1,
          w = null,
          P = 3,
          N = !1,
          _ = !1,
          M = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(
            navigator.scheduling
          );
        function H(F) {
          for (var Y = s(g); Y !== null;) {
            if (Y.callback === null) l(g);
            else if (Y.startTime <= F)
              l(g), (Y.sortIndex = Y.expirationTime), i(m, Y);
            else break;
            Y = s(g);
          }
        }
        function Q(F) {
          if (((M = !1), H(F), !_))
            if (s(m) !== null) (_ = !0), Qe(B);
            else {
              var Y = s(g);
              Y !== null && ie(Q, Y.startTime - F);
            }
        }
        function B(F, Y) {
          (_ = !1), M && ((M = !1), I(X), (X = -1)), (N = !0);
          var W = P;
          try {
            for (
              H(Y), w = s(m);
              w !== null &&
              (!(w.expirationTime > Y) || (F && !Ze()));

            ) {
              var C = w.callback;
              if (typeof C == "function") {
                (w.callback = null), (P = w.priorityLevel);
                var D = C(w.expirationTime <= Y);
                (Y = n.unstable_now()),
                  typeof D == "function"
                    ? (w.callback = D)
                    : w === s(m) && l(m),
                  H(Y);
              } else l(m);
              w = s(m);
            }
            if (w !== null) var re = !0;
            else {
              var oe = s(g);
              oe !== null && ie(Q, oe.startTime - Y), (re = !1);
            }
            return re;
          } finally {
            (w = null), (P = W), (N = !1);
          }
        }
        var ee = !1,
          le = null,
          X = -1,
          ye = 5,
          je = -1;
        function Ze() {
          return !(n.unstable_now() - je < ye);
        }
        function ot() {
          if (le !== null) {
            var F = n.unstable_now();
            je = F;
            var Y = !0;
            try {
              Y = le(!0, F);
            } finally {
              Y ? Ge() : ((ee = !1), (le = null));
            }
          } else ee = !1;
        }
        var Ge;
        if (typeof U == "function")
          Ge = function () {
            U(ot);
          };
        else if (typeof MessageChannel < "u") {
          var Je = new MessageChannel(),
            kt = Je.port2;
          (Je.port1.onmessage = ot),
            (Ge = function () {
              kt.postMessage(null);
            });
        } else
          Ge = function () {
            L(ot, 0);
          };
        function Qe(F) {
          (le = F), ee || ((ee = !0), Ge());
        }
        function ie(F, Y) {
          X = L(function () {
            F(n.unstable_now());
          }, Y);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            _ || N || ((_ = !0), Qe(B));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
              : (ye = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (F) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = P;
            }
            var W = P;
            P = Y;
            try {
              return F();
            } finally {
              P = W;
            }
          }),
          (n.unstable_pauseExecution = function () { }),
          (n.unstable_requestPaint = function () { }),
          (n.unstable_runWithPriority = function (F, Y) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var W = P;
            P = F;
            try {
              return Y();
            } finally {
              P = W;
            }
          }),
          (n.unstable_scheduleCallback = function (F, Y, W) {
            var C = n.unstable_now();
            switch (
            (typeof W == "object" && W !== null
              ? ((W = W.delay),
                (W =
                  typeof W == "number" && 0 < W
                    ? C + W
                    : C))
              : (W = C),
              F)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = W + D),
              (F = {
                id: v++,
                callback: Y,
                priorityLevel: F,
                startTime: W,
                expirationTime: D,
                sortIndex: -1,
              }),
              W > C
                ? ((F.sortIndex = W),
                  i(g, F),
                  s(m) === null &&
                  F === s(g) &&
                  (M ? (I(X), (X = -1)) : (M = !0),
                    ie(Q, W - C)))
                : ((F.sortIndex = D),
                  i(m, F),
                  _ || N || ((_ = !0), Qe(B))),
              F
            );
          }),
          (n.unstable_shouldYield = Ze),
          (n.unstable_wrapCallback = function (F) {
            var Y = P;
            return function () {
              var W = P;
              P = Y;
              try {
                return F.apply(this, arguments);
              } finally {
                P = W;
              }
            };
          });
      })(ea)),
    ea
  );
}
var gf;
function v0() {
  return gf || ((gf = 1), (Jl.exports = y0())), Jl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf;
function x0() {
  if (yf) return st;
  yf = 1;
  var n = La(),
    i = v0();
  function s(e) {
    for (
      var t =
        "https://reactjs.org/docs/error-decoder.html?invariant=" +
        e,
      r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    u = {};
  function f(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var h = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
    m = Object.prototype.hasOwnProperty,
    g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    w = {};
  function P(e) {
    return m.call(w, e)
      ? !0
      : m.call(v, e)
        ? !1
        : g.test(e)
          ? (w[e] = !0)
          : ((v[e] = !0), !1);
  }
  function N(e, t, r, o) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _(e, t, r, o) {
    if (t === null || typeof t > "u" || N(e, t, r, o)) return !0;
    if (o) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function M(e, t, r, o, a, c, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p);
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      L[e] = new M(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new M(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        L[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      L[e] = new M(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        L[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      L[e] = new M(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      L[e] = new M(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      L[e] = new M(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      L[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, U);
      L[t] = new M(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, U);
        L[t] = new M(
          t,
          1,
          !1,
          e,
          "http://www.w3.org/1999/xlink",
          !1,
          !1
        );
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, U);
      L[t] = new M(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      L[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new M(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      L[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function H(e, t, r, o) {
    var a = L.hasOwnProperty(t) ? L[t] : null;
    (a !== null
      ? a.type !== 0
      : o ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
      (_(t, r, a, o) && (r = null),
        o || a === null
          ? P(t) &&
          (r === null
            ? e.removeAttribute(t)
            : e.setAttribute(t, "" + r))
          : a.mustUseProperty
            ? (e[a.propertyName] =
              r === null ? (a.type === 3 ? !1 : "") : r)
            : ((t = a.attributeName),
              (o = a.attributeNamespace),
              r === null
                ? e.removeAttribute(t)
                : ((a = a.type),
                  (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
                  o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var Q = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    B = Symbol.for("react.element"),
    ee = Symbol.for("react.portal"),
    le = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    ye = Symbol.for("react.profiler"),
    je = Symbol.for("react.provider"),
    Ze = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    Je = Symbol.for("react.suspense_list"),
    kt = Symbol.for("react.memo"),
    Qe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    C;
  function D(e) {
    if (C === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        C = (t && t[1]) || "";
      }
    return (
      `
` +
      C +
      e
    );
  }
  var re = !1;
  function oe(e, t) {
    if (!e || re) return "";
    re = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (j) {
            var o = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            o = j;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          o = j;
        }
        e();
      }
    } catch (j) {
      if (j && o && typeof j.stack == "string") {
        for (
          var a = j.stack.split(`
`),
          c = o.stack.split(`
`),
          p = a.length - 1,
          x = c.length - 1;
          1 <= p && 0 <= x && a[p] !== c[x];

        )
          x--;
        for (; 1 <= p && 0 <= x; p--, x--)
          if (a[p] !== c[x]) {
            if (p !== 1 || x !== 1)
              do
                if ((p--, x--, 0 > x || a[p] !== c[x])) {
                  var S =
                    `
` + a[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                    S.includes("<anonymous>") &&
                    (S = S.replace(
                      "<anonymous>",
                      e.displayName
                    )),
                    S
                  );
                }
              while (1 <= p && 0 <= x);
            break;
          }
      }
    } finally {
      (re = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case le:
        return "Fragment";
      case ee:
        return "Portal";
      case ye:
        return "Profiler";
      case X:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ze:
          return (e.displayName || "Context") + ".Consumer";
        case je:
          return (e._context.displayName || "Context") + ".Provider";
        case ot:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
            ((e = t.displayName || t.name || ""),
              (e =
                e !== ""
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef")),
            e
          );
        case kt:
          return (
            (t = e.displayName || null),
            t !== null ? t : ce(e.type) || "Memo"
          );
        case Qe:
          (t = e._payload), (e = e._init);
          try {
            return ce(e(t));
          } catch { }
      }
    return null;
  }
  function me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName ||
          (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(t);
      case 8:
        return t === X ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function fe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Se(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function lt(e) {
    var t = Se(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        c = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (p) {
            (o = "" + p), c.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (p) {
            o = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ci(e) {
    e._valueTracker || (e._valueTracker = lt(e));
  }
  function gu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = Se(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ti(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)),
        typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function no(e, t) {
    var r = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function yu(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    (r = fe(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function vu(e, t) {
    (t = t.checked), t != null && H(e, "checked", t, !1);
  }
  function ro(e, t) {
    vu(e, t);
    var r = fe(t.value),
      o = t.type;
    if (r != null)
      o === "number"
        ? ((r === 0 && e.value === "") || e.value != r) &&
        (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? io(e, t.type, r)
      : t.hasOwnProperty("defaultValue") &&
      io(e, t.type, fe(t.defaultValue)),
      t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
  }
  function xu(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (
        !(
          (o !== "submit" && o !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function io(e, t, r) {
    (t !== "number" || Ti(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var wr = Array.isArray;
  function On(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && o && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + fe(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), o && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function so(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function wu(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(s(92));
        if (wr(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: fe(r) };
  }
  function Su(e, t) {
    var r = fe(t.value),
      o = fe(t.defaultValue);
    r != null &&
      ((r = "" + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null &&
        e.defaultValue !== r &&
        (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o);
  }
  function ku(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Pu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function oo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Pu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ei,
    Cu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, o, a);
          });
        }
        : e;
    })(function (e, t) {
      if (
        e.namespaceURI !== "http://www.w3.org/2000/svg" ||
        "innerHTML" in e
      )
        e.innerHTML = t;
      else {
        for (
          Ei = Ei || document.createElement("div"),
          Ei.innerHTML =
          "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ei.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Sr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
    ym = ["Webkit", "ms", "Moz", "O"];
  Object.keys(kr).forEach(function (e) {
    ym.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
        (kr[t] = kr[e]);
    });
  });
  function Tu(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r ||
        typeof t != "number" ||
        t === 0 ||
        (kr.hasOwnProperty(e) && kr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Eu(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          a = Tu(r, t[r], o);
        r === "float" && (r = "cssFloat"),
          o ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var vm = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function lo(e, t) {
    if (t) {
      if (
        vm[e] &&
        (t.children != null || t.dangerouslySetInnerHTML != null)
      )
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(s(62));
    }
  }
  function ao(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var uo = null;
  function co(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fo = null,
    Bn = null,
    bn = null;
  function ju(e) {
    if ((e = $r(e))) {
      if (typeof fo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Qi(t)), fo(e.stateNode, e.type, t));
    }
  }
  function Nu(e) {
    Bn ? (bn ? bn.push(e) : (bn = [e])) : (Bn = e);
  }
  function Mu() {
    if (Bn) {
      var e = Bn,
        t = bn;
      if (((bn = Bn = null), ju(e), t))
        for (e = 0; e < t.length; e++) ju(t[e]);
    }
  }
  function Au(e, t) {
    return e(t);
  }
  function Du() { }
  var po = !1;
  function Ru(e, t, r) {
    if (po) return e(t, r);
    po = !0;
    try {
      return Au(e, t, r);
    } finally {
      (po = !1), (Bn !== null || bn !== null) && (Du(), Mu());
    }
  }
  function Pr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Qi(r);
    if (o === null) return null;
    r = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((e = e.type),
            (o = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(s(231, t, typeof r));
    return r;
  }
  var ho = !1;
  if (h)
    try {
      var Cr = {};
      Object.defineProperty(Cr, "passive", {
        get: function () {
          ho = !0;
        },
      }),
        window.addEventListener("test", Cr, Cr),
        window.removeEventListener("test", Cr, Cr);
    } catch {
      ho = !1;
    }
  function xm(e, t, r, o, a, c, p, x, S) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, j);
    } catch (R) {
      this.onError(R);
    }
  }
  var Tr = !1,
    ji = null,
    Ni = !1,
    mo = null,
    wm = {
      onError: function (e) {
        (Tr = !0), (ji = e);
      },
    };
  function Sm(e, t, r, o, a, c, p, x, S) {
    (Tr = !1), (ji = null), xm.apply(wm, arguments);
  }
  function km(e, t, r, o, a, c, p, x, S) {
    if ((Sm.apply(this, arguments), Tr)) {
      if (Tr) {
        var j = ji;
        (Tr = !1), (ji = null);
      } else throw Error(s(198));
      Ni || ((Ni = !0), (mo = j));
    }
  }
  function xn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do
        (t = e),
          (t.flags & 4098) !== 0 && (r = t.return),
          (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Lu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null &&
          ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Vu(e) {
    if (xn(e) !== e) throw Error(s(188));
  }
  function Pm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = xn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ;) {
      var a = r.return;
      if (a === null) break;
      var c = a.alternate;
      if (c === null) {
        if (((o = a.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (a.child === c.child) {
        for (c = a.child; c;) {
          if (c === r) return Vu(a), e;
          if (c === o) return Vu(a), t;
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== o.return) (r = a), (o = c);
      else {
        for (var p = !1, x = a.child; x;) {
          if (x === r) {
            (p = !0), (r = a), (o = c);
            break;
          }
          if (x === o) {
            (p = !0), (o = a), (r = c);
            break;
          }
          x = x.sibling;
        }
        if (!p) {
          for (x = c.child; x;) {
            if (x === r) {
              (p = !0), (r = c), (o = a);
              break;
            }
            if (x === o) {
              (p = !0), (o = c), (r = a);
              break;
            }
            x = x.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (r.alternate !== o) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function _u(e) {
    return (e = Pm(e)), e !== null ? zu(e) : null;
  }
  function zu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = zu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Iu = i.unstable_scheduleCallback,
    Fu = i.unstable_cancelCallback,
    Cm = i.unstable_shouldYield,
    Tm = i.unstable_requestPaint,
    Ae = i.unstable_now,
    Em = i.unstable_getCurrentPriorityLevel,
    go = i.unstable_ImmediatePriority,
    Ou = i.unstable_UserBlockingPriority,
    Mi = i.unstable_NormalPriority,
    jm = i.unstable_LowPriority,
    Bu = i.unstable_IdlePriority,
    Ai = null,
    Dt = null;
  function Nm(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(
          Ai,
          e,
          void 0,
          (e.current.flags & 128) === 128
        );
      } catch { }
  }
  var Pt = Math.clz32 ? Math.clz32 : Dm,
    Mm = Math.log,
    Am = Math.LN2;
  function Dm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Mm(e) / Am) | 0)) | 0;
  }
  var Di = 64,
    Ri = 4194304;
  function Er(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Li(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      a = e.suspendedLanes,
      c = e.pingedLanes,
      p = r & 268435455;
    if (p !== 0) {
      var x = p & ~a;
      x !== 0 ? (o = Er(x)) : ((c &= p), c !== 0 && (o = Er(c)));
    } else (p = r & ~a), p !== 0 ? (o = Er(p)) : c !== 0 && (o = Er(c));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & a) === 0 &&
      ((a = o & -o),
        (c = t & -t),
        a >= c || (a === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t;)
        (r = 31 - Pt(t)), (a = 1 << r), (o |= e[r]), (t &= ~a);
    return o;
  }
  function Rm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Lm(e, t) {
    for (
      var r = e.suspendedLanes,
      o = e.pingedLanes,
      a = e.expirationTimes,
      c = e.pendingLanes;
      0 < c;

    ) {
      var p = 31 - Pt(c),
        x = 1 << p,
        S = a[p];
      S === -1
        ? ((x & r) === 0 || (x & o) !== 0) && (a[p] = Rm(x, t))
        : S <= t && (e.expiredLanes |= x),
        (c &= ~x);
    }
  }
  function yo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function bu() {
    var e = Di;
    return (Di <<= 1), (Di & 4194240) === 0 && (Di = 64), e;
  }
  function vo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function jr(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Pt(t)),
      (e[t] = r);
  }
  function Vm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
      var a = 31 - Pt(r),
        c = 1 << a;
      (t[a] = 0), (o[a] = -1), (e[a] = -1), (r &= ~c);
    }
  }
  function xo(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r;) {
      var o = 31 - Pt(r),
        a = 1 << o;
      (a & t) | (e[o] & t) && (e[o] |= t), (r &= ~a);
    }
  }
  var pe = 0;
  function Uu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Wu,
    wo,
    $u,
    Hu,
    Ku,
    So = !1,
    Vi = [],
    Qt = null,
    Xt = null,
    Yt = null,
    Nr = new Map(),
    Mr = new Map(),
    Zt = [],
    _m = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
  function qu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Xt = null;
        break;
      case "mouseover":
      case "mouseout":
        Yt = null;
        break;
      case "pointerover":
      case "pointerout":
        Nr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mr.delete(t.pointerId);
    }
  }
  function Ar(e, t, r, o, a, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: o,
        nativeEvent: c,
        targetContainers: [a],
      }),
        t !== null && ((t = $r(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function zm(e, t, r, o, a) {
    switch (t) {
      case "focusin":
        return (Qt = Ar(Qt, e, t, r, o, a)), !0;
      case "dragenter":
        return (Xt = Ar(Xt, e, t, r, o, a)), !0;
      case "mouseover":
        return (Yt = Ar(Yt, e, t, r, o, a)), !0;
      case "pointerover":
        var c = a.pointerId;
        return Nr.set(c, Ar(Nr.get(c) || null, e, t, r, o, a)), !0;
      case "gotpointercapture":
        return (
          (c = a.pointerId),
          Mr.set(c, Ar(Mr.get(c) || null, e, t, r, o, a)),
          !0
        );
    }
    return !1;
  }
  function Gu(e) {
    var t = wn(e.target);
    if (t !== null) {
      var r = xn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Lu(r)), t !== null)) {
            (e.blockedOn = t),
              Ku(e.priority, function () {
                $u(r);
              });
            return;
          }
        } else if (
          t === 3 &&
          r.stateNode.current.memoizedState.isDehydrated
        ) {
          e.blockedOn =
            r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var r = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        (uo = o), r.target.dispatchEvent(o), (uo = null);
      } else
        return (t = $r(r)), t !== null && wo(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Qu(e, t, r) {
    _i(e) && r.delete(t);
  }
  function Im() {
    (So = !1),
      Qt !== null && _i(Qt) && (Qt = null),
      Xt !== null && _i(Xt) && (Xt = null),
      Yt !== null && _i(Yt) && (Yt = null),
      Nr.forEach(Qu),
      Mr.forEach(Qu);
  }
  function Dr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
        So ||
        ((So = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, Im)));
  }
  function Rr(e) {
    function t(a) {
      return Dr(a, e);
    }
    if (0 < Vi.length) {
      Dr(Vi[0], e);
      for (var r = 1; r < Vi.length; r++) {
        var o = Vi[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Qt !== null && Dr(Qt, e),
      Xt !== null && Dr(Xt, e),
      Yt !== null && Dr(Yt, e),
      Nr.forEach(t),
      Mr.forEach(t),
      r = 0;
      r < Zt.length;
      r++
    )
      (o = Zt[r]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < Zt.length && ((r = Zt[0]), r.blockedOn === null);)
      Gu(r), r.blockedOn === null && Zt.shift();
  }
  var Un = Q.ReactCurrentBatchConfig,
    zi = !0;
  function Fm(e, t, r, o) {
    var a = pe,
      c = Un.transition;
    Un.transition = null;
    try {
      (pe = 1), ko(e, t, r, o);
    } finally {
      (pe = a), (Un.transition = c);
    }
  }
  function Om(e, t, r, o) {
    var a = pe,
      c = Un.transition;
    Un.transition = null;
    try {
      (pe = 4), ko(e, t, r, o);
    } finally {
      (pe = a), (Un.transition = c);
    }
  }
  function ko(e, t, r, o) {
    if (zi) {
      var a = Po(e, t, r, o);
      if (a === null) Bo(e, t, o, Ii, r), qu(e, o);
      else if (zm(a, e, t, r, o)) o.stopPropagation();
      else if ((qu(e, o), t & 4 && -1 < _m.indexOf(e))) {
        for (; a !== null;) {
          var c = $r(a);
          if (
            (c !== null && Wu(c),
              (c = Po(e, t, r, o)),
              c === null && Bo(e, t, o, Ii, r),
              c === a)
          )
            break;
          a = c;
        }
        a !== null && o.stopPropagation();
      } else Bo(e, t, o, null, r);
    }
  }
  var Ii = null;
  function Po(e, t, r, o) {
    if (((Ii = null), (e = co(o)), (e = wn(e)), e !== null))
      if (((t = xn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Lu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ii = e), null;
  }
  function Xu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Em()) {
          case go:
            return 1;
          case Ou:
            return 4;
          case Mi:
          case jm:
            return 16;
          case Bu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    Co = null,
    Fi = null;
  function Yu() {
    if (Fi) return Fi;
    var e,
      t = Co,
      r = t.length,
      o,
      a = "value" in Jt ? Jt.value : Jt.textContent,
      c = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var p = r - e;
    for (o = 1; o <= p && t[r - o] === a[c - o]; o++);
    return (Fi = a.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Oi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Bi() {
    return !0;
  }
  function Zu() {
    return !1;
  }
  function at(e) {
    function t(r, o, a, c, p) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = o),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null);
      for (var x in e)
        e.hasOwnProperty(x) &&
          ((r = e[x]), (this[x] = r ? r(c) : c[x]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null
            ? c.defaultPrevented
            : c.returnValue === !1
        )
          ? Bi
          : Zu),
        (this.isPropagationStopped = Zu),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" &&
              (r.returnValue = !1),
              (this.isDefaultPrevented = Bi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" &&
              (r.cancelBubble = !0),
              (this.isPropagationStopped = Bi));
        },
        persist: function () { },
        isPersistent: Bi,
      }),
      t
    );
  }
  var Wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
    To = at(Wn),
    Lr = W({}, Wn, { view: 0, detail: 0 }),
    Bm = at(Lr),
    Eo,
    jo,
    Vr,
    bi = W({}, Lr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Mo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Vr &&
            (Vr && e.type === "mousemove"
              ? ((Eo = e.screenX - Vr.screenX),
                (jo = e.screenY - Vr.screenY))
              : (jo = Eo = 0),
              (Vr = e)),
            Eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : jo;
      },
    }),
    Ju = at(bi),
    bm = W({}, bi, { dataTransfer: 0 }),
    Um = at(bm),
    Wm = W({}, Lr, { relatedTarget: 0 }),
    No = at(Wm),
    $m = W({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hm = at($m),
    Km = W({}, Wn, {
      clipboardData: function (e) {
        return "clipboardData" in e
          ? e.clipboardData
          : window.clipboardData;
      },
    }),
    qm = at(Km),
    Gm = W({}, Wn, { data: 0 }),
    ec = at(Gm),
    Qm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ym = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ym[e])
        ? !!t[e]
        : !1;
  }
  function Mo() {
    return Zm;
  }
  var Jm = W({}, Lr, {
    key: function (e) {
      if (e.key) {
        var t = Qm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Xm[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mo,
    charCode: function (e) {
      return e.type === "keypress" ? Oi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Oi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
    eg = at(Jm),
    tg = W({}, bi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    tc = at(tg),
    ng = W({}, Lr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mo,
    }),
    rg = at(ng),
    ig = W({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sg = at(ig),
    og = W({}, bi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    lg = at(og),
    ag = [9, 13, 27, 32],
    Ao = h && "CompositionEvent" in window,
    _r = null;
  h && "documentMode" in document && (_r = document.documentMode);
  var ug = h && "TextEvent" in window && !_r,
    nc = h && (!Ao || (_r && 8 < _r && 11 >= _r)),
    rc = " ",
    ic = !1;
  function sc(e, t) {
    switch (e) {
      case "keyup":
        return ag.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function oc(e) {
    return (
      (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var $n = !1;
  function cg(e, t) {
    switch (e) {
      case "compositionend":
        return oc(t);
      case "keypress":
        return t.which !== 32 ? null : ((ic = !0), rc);
      case "textInput":
        return (e = t.data), e === rc && ic ? null : e;
      default:
        return null;
    }
  }
  function dg(e, t) {
    if ($n)
      return e === "compositionend" || (!Ao && sc(e, t))
        ? ((e = Yu()), (Fi = Co = Jt = null), ($n = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (
          !(t.ctrlKey || t.altKey || t.metaKey) ||
          (t.ctrlKey && t.altKey)
        ) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return nc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fg[e.type] : t === "textarea";
  }
  function ac(e, t, r, o) {
    Nu(o),
      (t = Ki(t, "onChange")),
      0 < t.length &&
      ((r = new To("onChange", "change", null, r, o)),
        e.push({ event: r, listeners: t }));
  }
  var zr = null,
    Ir = null;
  function pg(e) {
    Ec(e, 0);
  }
  function Ui(e) {
    var t = Qn(e);
    if (gu(t)) return e;
  }
  function hg(e, t) {
    if (e === "change") return t;
  }
  var uc = !1;
  if (h) {
    var Do;
    if (h) {
      var Ro = "oninput" in document;
      if (!Ro) {
        var cc = document.createElement("div");
        cc.setAttribute("oninput", "return;"),
          (Ro = typeof cc.oninput == "function");
      }
      Do = Ro;
    } else Do = !1;
    uc = Do && (!document.documentMode || 9 < document.documentMode);
  }
  function dc() {
    zr && (zr.detachEvent("onpropertychange", fc), (Ir = zr = null));
  }
  function fc(e) {
    if (e.propertyName === "value" && Ui(Ir)) {
      var t = [];
      ac(t, Ir, e, co(e)), Ru(pg, t);
    }
  }
  function mg(e, t, r) {
    e === "focusin"
      ? (dc(), (zr = t), (Ir = r), zr.attachEvent("onpropertychange", fc))
      : e === "focusout" && dc();
  }
  function gg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ui(Ir);
  }
  function yg(e, t) {
    if (e === "click") return Ui(t);
  }
  function vg(e, t) {
    if (e === "input" || e === "change") return Ui(t);
  }
  function xg(e, t) {
    return (
      (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
    );
  }
  var Ct = typeof Object.is == "function" ? Object.is : xg;
  function Fr(e, t) {
    if (Ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var a = r[o];
      if (!m.call(t, a) || !Ct(e[a], t[a])) return !1;
    }
    return !0;
  }
  function pc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function hc(e, t) {
    var r = pc(e);
    e = 0;
    for (var o; r;) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t))
          return { node: r, offset: t - e };
        e = o;
      }
      e: {
        for (; r;) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = pc(r);
    }
  }
  function mc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? mc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function gc() {
    for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement;) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ti(e.document);
    }
    return t;
  }
  function Lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function wg(e) {
    var t = gc(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      mc(r.ownerDocument.documentElement, r)
    ) {
      if (o !== null && Lo(r)) {
        if (
          ((t = o.start),
            (e = o.end),
            e === void 0 && (e = t),
            "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e =
            ((t = r.ownerDocument || document) && t.defaultView) ||
            window),
            e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            c = Math.min(o.start, a);
          (o = o.end === void 0 ? c : Math.min(o.end, a)),
            !e.extend && c > o && ((a = o), (o = c), (c = a)),
            (a = hc(r, c));
          var p = hc(r, o);
          a &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
              t.setStart(a.node, a.offset),
              e.removeAllRanges(),
              c > o
                ? (e.addRange(t), e.extend(p.node, p.offset))
                : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode);)
        e.nodeType === 1 &&
          t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop,
          });
      for (
        typeof r.focus == "function" && r.focus(), r = 0;
        r < t.length;
        r++
      )
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Sg = h && "documentMode" in document && 11 >= document.documentMode,
    Hn = null,
    Vo = null,
    Or = null,
    _o = !1;
  function yc(e, t, r) {
    var o =
      r.window === r
        ? r.document
        : r.nodeType === 9
          ? r
          : r.ownerDocument;
    _o ||
      Hn == null ||
      Hn !== Ti(o) ||
      ((o = Hn),
        "selectionStart" in o && Lo(o)
          ? (o = { start: o.selectionStart, end: o.selectionEnd })
          : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
            (o = {
              anchorNode: o.anchorNode,
              anchorOffset: o.anchorOffset,
              focusNode: o.focusNode,
              focusOffset: o.focusOffset,
            })),
        (Or && Fr(Or, o)) ||
        ((Or = o),
          (o = Ki(Vo, "onSelect")),
          0 < o.length &&
          ((t = new To("onSelect", "select", null, t, r)),
            e.push({ event: t, listeners: o }),
            (t.target = Hn))));
  }
  function Wi(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Kn = {
    animationend: Wi("Animation", "AnimationEnd"),
    animationiteration: Wi("Animation", "AnimationIteration"),
    animationstart: Wi("Animation", "AnimationStart"),
    transitionend: Wi("Transition", "TransitionEnd"),
  },
    zo = {},
    vc = {};
  h &&
    ((vc = document.createElement("div").style),
      "AnimationEvent" in window ||
      (delete Kn.animationend.animation,
        delete Kn.animationiteration.animation,
        delete Kn.animationstart.animation),
      "TransitionEvent" in window || delete Kn.transitionend.transition);
  function $i(e) {
    if (zo[e]) return zo[e];
    if (!Kn[e]) return e;
    var t = Kn[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in vc) return (zo[e] = t[r]);
    return e;
  }
  var xc = $i("animationend"),
    wc = $i("animationiteration"),
    Sc = $i("animationstart"),
    kc = $i("transitionend"),
    Pc = new Map(),
    Cc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
  function en(e, t) {
    Pc.set(e, t), f(t, [e]);
  }
  for (var Io = 0; Io < Cc.length; Io++) {
    var Fo = Cc[Io],
      kg = Fo.toLowerCase(),
      Pg = Fo[0].toUpperCase() + Fo.slice(1);
    en(kg, "on" + Pg);
  }
  en(xc, "onAnimationEnd"),
    en(wc, "onAnimationIteration"),
    en(Sc, "onAnimationStart"),
    en("dblclick", "onDoubleClick"),
    en("focusin", "onFocus"),
    en("focusout", "onBlur"),
    en(kc, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste",
    ]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(
        " "
      )
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(
        " "
      )
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(
        " "
      )
    );
  var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
    Cg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Br)
    );
  function Tc(e, t, r) {
    var o = e.type || "unknown-event";
    (e.currentTarget = r), km(o, t, void 0, e), (e.currentTarget = null);
  }
  function Ec(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        a = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = o.length - 1; 0 <= p; p--) {
            var x = o[p],
              S = x.instance,
              j = x.currentTarget;
            if (
              ((x = x.listener),
                S !== c && a.isPropagationStopped())
            )
              break e;
            Tc(a, x, j), (c = S);
          }
        else
          for (p = 0; p < o.length; p++) {
            if (
              ((x = o[p]),
                (S = x.instance),
                (j = x.currentTarget),
                (x = x.listener),
                S !== c && a.isPropagationStopped())
            )
              break e;
            Tc(a, x, j), (c = S);
          }
      }
    }
    if (Ni) throw ((e = mo), (Ni = !1), (mo = null), e);
  }
  function ve(e, t) {
    var r = t[Ko];
    r === void 0 && (r = t[Ko] = new Set());
    var o = e + "__bubble";
    r.has(o) || (jc(t, e, 2, !1), r.add(o));
  }
  function Oo(e, t, r) {
    var o = 0;
    t && (o |= 4), jc(r, e, o, t);
  }
  var Hi = "_reactListening" + Math.random().toString(36).slice(2);
  function br(e) {
    if (!e[Hi]) {
      (e[Hi] = !0),
        l.forEach(function (r) {
          r !== "selectionchange" &&
            (Cg.has(r) || Oo(r, !1, e), Oo(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hi] || ((t[Hi] = !0), Oo("selectionchange", !1, t));
    }
  }
  function jc(e, t, r, o) {
    switch (Xu(t)) {
      case 1:
        var a = Fm;
        break;
      case 4:
        a = Om;
        break;
      default:
        a = ko;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !ho ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (a = !0),
      o
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1);
  }
  function Bo(e, t, r, o, a) {
    var c = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ;) {
        if (o === null) return;
        var p = o.tag;
        if (p === 3 || p === 4) {
          var x = o.stateNode.containerInfo;
          if (x === a || (x.nodeType === 8 && x.parentNode === a))
            break;
          if (p === 4)
            for (p = o.return; p !== null;) {
              var S = p.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = p.stateNode.containerInfo),
                  S === a ||
                  (S.nodeType === 8 && S.parentNode === a))
              )
                return;
              p = p.return;
            }
          for (; x !== null;) {
            if (((p = wn(x)), p === null)) return;
            if (((S = p.tag), S === 5 || S === 6)) {
              o = c = p;
              continue e;
            }
            x = x.parentNode;
          }
        }
        o = o.return;
      }
    Ru(function () {
      var j = c,
        R = co(r),
        V = [];
      e: {
        var A = Pc.get(e);
        if (A !== void 0) {
          var b = To,
            K = e;
          switch (e) {
            case "keypress":
              if (Oi(r) === 0) break e;
            case "keydown":
            case "keyup":
              b = eg;
              break;
            case "focusin":
              (K = "focus"), (b = No);
              break;
            case "focusout":
              (K = "blur"), (b = No);
              break;
            case "beforeblur":
            case "afterblur":
              b = No;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Ju;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Um;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = rg;
              break;
            case xc:
            case wc:
            case Sc:
              b = Hm;
              break;
            case kc:
              b = sg;
              break;
            case "scroll":
              b = Bm;
              break;
            case "wheel":
              b = lg;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = qm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = tc;
          }
          var q = (t & 4) !== 0,
            De = !q && e === "scroll",
            T = q ? (A !== null ? A + "Capture" : null) : A;
          q = [];
          for (var k = j, E; k !== null;) {
            E = k;
            var z = E.stateNode;
            if (
              (E.tag === 5 &&
                z !== null &&
                ((E = z),
                  T !== null &&
                  ((z = Pr(k, T)),
                    z != null && q.push(Ur(k, z, E)))),
                De)
            )
              break;
            k = k.return;
          }
          0 < q.length &&
            ((A = new b(A, K, null, r, R)),
              V.push({ event: A, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((A = e === "mouseover" || e === "pointerover"),
              (b = e === "mouseout" || e === "pointerout"),
              A &&
              r !== uo &&
              (K = r.relatedTarget || r.fromElement) &&
              (wn(K) || K[Ft]))
          )
            break e;
          if (
            (b || A) &&
            ((A =
              R.window === R
                ? R
                : (A = R.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
              b
                ? ((K = r.relatedTarget || r.toElement),
                  (b = j),
                  (K = K ? wn(K) : null),
                  K !== null &&
                  ((De = xn(K)),
                    K !== De || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
                : ((b = null), (K = j)),
              b !== K)
          ) {
            if (
              ((q = Ju),
                (z = "onMouseLeave"),
                (T = "onMouseEnter"),
                (k = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                ((q = tc),
                  (z = "onPointerLeave"),
                  (T = "onPointerEnter"),
                  (k = "pointer")),
                (De = b == null ? A : Qn(b)),
                (E = K == null ? A : Qn(K)),
                (A = new q(z, k + "leave", b, r, R)),
                (A.target = De),
                (A.relatedTarget = E),
                (z = null),
                wn(R) === j &&
                ((q = new q(T, k + "enter", K, r, R)),
                  (q.target = E),
                  (q.relatedTarget = De),
                  (z = q)),
                (De = z),
                b && K)
            )
              t: {
                for (q = b, T = K, k = 0, E = q; E; E = qn(E))
                  k++;
                for (E = 0, z = T; z; z = qn(z)) E++;
                for (; 0 < k - E;) (q = qn(q)), k--;
                for (; 0 < E - k;) (T = qn(T)), E--;
                for (; k--;) {
                  if (
                    q === T ||
                    (T !== null && q === T.alternate)
                  )
                    break t;
                  (q = qn(q)), (T = qn(T));
                }
                q = null;
              }
            else q = null;
            b !== null && Nc(V, A, b, q, !1),
              K !== null && De !== null && Nc(V, De, K, q, !0);
          }
        }
        e: {
          if (
            ((A = j ? Qn(j) : window),
              (b = A.nodeName && A.nodeName.toLowerCase()),
              b === "select" || (b === "input" && A.type === "file"))
          )
            var G = hg;
          else if (lc(A))
            if (uc) G = vg;
            else {
              G = gg;
              var Z = mg;
            }
          else
            (b = A.nodeName) &&
              b.toLowerCase() === "input" &&
              (A.type === "checkbox" || A.type === "radio") &&
              (G = yg);
          if (G && (G = G(e, j))) {
            ac(V, G, r, R);
            break e;
          }
          Z && Z(e, A, j),
            e === "focusout" &&
            (Z = A._wrapperState) &&
            Z.controlled &&
            A.type === "number" &&
            io(A, "number", A.value);
        }
        switch (((Z = j ? Qn(j) : window), e)) {
          case "focusin":
            (lc(Z) || Z.contentEditable === "true") &&
              ((Hn = Z), (Vo = j), (Or = null));
            break;
          case "focusout":
            Or = Vo = Hn = null;
            break;
          case "mousedown":
            _o = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_o = !1), yc(V, r, R);
            break;
          case "selectionchange":
            if (Sg) break;
          case "keydown":
          case "keyup":
            yc(V, r, R);
        }
        var J;
        if (Ao)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          $n
            ? sc(e, r) && (ne = "onCompositionEnd")
            : e === "keydown" &&
            r.keyCode === 229 &&
            (ne = "onCompositionStart");
        ne &&
          (nc &&
            r.locale !== "ko" &&
            ($n || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && $n && (J = Yu())
              : ((Jt = R),
                (Co = "value" in Jt ? Jt.value : Jt.textContent),
                ($n = !0))),
            (Z = Ki(j, ne)),
            0 < Z.length &&
            ((ne = new ec(ne, e, null, r, R)),
              V.push({ event: ne, listeners: Z }),
              J
                ? (ne.data = J)
                : ((J = oc(r)), J !== null && (ne.data = J)))),
          (J = ug ? cg(e, r) : dg(e, r)) &&
          ((j = Ki(j, "onBeforeInput")),
            0 < j.length &&
            ((R = new ec(
              "onBeforeInput",
              "beforeinput",
              null,
              r,
              R
            )),
              V.push({ event: R, listeners: j }),
              (R.data = J)));
      }
      Ec(V, t);
    });
  }
  function Ur(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Ki(e, t) {
    for (var r = t + "Capture", o = []; e !== null;) {
      var a = e,
        c = a.stateNode;
      a.tag === 5 &&
        c !== null &&
        ((a = c),
          (c = Pr(e, r)),
          c != null && o.unshift(Ur(e, c, a)),
          (c = Pr(e, t)),
          c != null && o.push(Ur(e, c, a))),
        (e = e.return);
    }
    return o;
  }
  function qn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Nc(e, t, r, o, a) {
    for (var c = t._reactName, p = []; r !== null && r !== o;) {
      var x = r,
        S = x.alternate,
        j = x.stateNode;
      if (S !== null && S === o) break;
      x.tag === 5 &&
        j !== null &&
        ((x = j),
          a
            ? ((S = Pr(r, c)), S != null && p.unshift(Ur(r, S, x)))
            : a || ((S = Pr(r, c)), S != null && p.push(Ur(r, S, x)))),
        (r = r.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Tg = /\r\n?/g,
    Eg = /\u0000|\uFFFD/g;
  function Mc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Tg,
        `
`
      )
      .replace(Eg, "");
  }
  function qi(e, t, r) {
    if (((t = Mc(t)), Mc(e) !== t && r)) throw Error(s(425));
  }
  function Gi() { }
  var bo = null,
    Uo = null;
  function Wo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $o = typeof setTimeout == "function" ? setTimeout : void 0,
    jg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ac = typeof Promise == "function" ? Promise : void 0,
    Ng =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ac < "u"
          ? function (e) {
            return Ac.resolve(null).then(e).catch(Mg);
          }
          : $o;
  function Mg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ho(e, t) {
    var r = t,
      o = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (o === 0) {
            e.removeChild(a), Rr(t);
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = a;
    } while (r);
    Rr(t);
  }
  function tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?"))
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Dc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Gn = Math.random().toString(36).slice(2),
    Rt = "__reactFiber$" + Gn,
    Wr = "__reactProps$" + Gn,
    Ft = "__reactContainer$" + Gn,
    Ko = "__reactEvents$" + Gn,
    Ag = "__reactListeners$" + Gn,
    Dg = "__reactHandles$" + Gn;
  function wn(e) {
    var t = e[Rt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
      if ((t = r[Ft] || r[Rt])) {
        if (
          ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Dc(e); e !== null;) {
            if ((r = e[Rt])) return r;
            e = Dc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function $r(e) {
    return (
      (e = e[Rt] || e[Ft]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Qi(e) {
    return e[Wr] || null;
  }
  var qo = [],
    Xn = -1;
  function nn(e) {
    return { current: e };
  }
  function xe(e) {
    0 > Xn || ((e.current = qo[Xn]), (qo[Xn] = null), Xn--);
  }
  function ge(e, t) {
    Xn++, (qo[Xn] = e.current), (e.current = t);
  }
  var rn = {},
    Ue = nn(rn),
    et = nn(!1),
    Sn = rn;
  function Yn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return rn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      c;
    for (c in r) a[c] = t[c];
    return (
      o &&
      ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function tt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Xi() {
    xe(et), xe(Ue);
  }
  function Rc(e, t, r) {
    if (Ue.current !== rn) throw Error(s(168));
    ge(Ue, t), ge(et, r);
  }
  function Lc(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
      return r;
    o = o.getChildContext();
    for (var a in o)
      if (!(a in t)) throw Error(s(108, me(e) || "Unknown", a));
    return W({}, r, o);
  }
  function Yi(e) {
    return (
      (e =
        ((e = e.stateNode) &&
          e.__reactInternalMemoizedMergedChildContext) ||
        rn),
      (Sn = Ue.current),
      ge(Ue, e),
      ge(et, et.current),
      !0
    );
  }
  function Vc(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    r
      ? ((e = Lc(e, t, Sn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        xe(et),
        xe(Ue),
        ge(Ue, e))
      : xe(et),
      ge(et, r);
  }
  var Ot = null,
    Zi = !1,
    Go = !1;
  function _c(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
  }
  function Rg(e) {
    (Zi = !0), _c(e);
  }
  function sn() {
    if (!Go && Ot !== null) {
      Go = !0;
      var e = 0,
        t = pe;
      try {
        var r = Ot;
        for (pe = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        (Ot = null), (Zi = !1);
      } catch (a) {
        throw (Ot !== null && (Ot = Ot.slice(e + 1)), Iu(go, sn), a);
      } finally {
        (pe = t), (Go = !1);
      }
    }
    return null;
  }
  var Zn = [],
    Jn = 0,
    Ji = null,
    es = 0,
    ht = [],
    mt = 0,
    kn = null,
    Bt = 1,
    bt = "";
  function Pn(e, t) {
    (Zn[Jn++] = es), (Zn[Jn++] = Ji), (Ji = e), (es = t);
  }
  function zc(e, t, r) {
    (ht[mt++] = Bt), (ht[mt++] = bt), (ht[mt++] = kn), (kn = e);
    var o = Bt;
    e = bt;
    var a = 32 - Pt(o) - 1;
    (o &= ~(1 << a)), (r += 1);
    var c = 32 - Pt(t) + a;
    if (30 < c) {
      var p = a - (a % 5);
      (c = (o & ((1 << p) - 1)).toString(32)),
        (o >>= p),
        (a -= p),
        (Bt = (1 << (32 - Pt(t) + a)) | (r << a) | o),
        (bt = c + e);
    } else (Bt = (1 << c) | (r << a) | o), (bt = e);
  }
  function Qo(e) {
    e.return !== null && (Pn(e, 1), zc(e, 1, 0));
  }
  function Xo(e) {
    for (; e === Ji;)
      (Ji = Zn[--Jn]), (Zn[Jn] = null), (es = Zn[--Jn]), (Zn[Jn] = null);
    for (; e === kn;)
      (kn = ht[--mt]),
        (ht[mt] = null),
        (bt = ht[--mt]),
        (ht[mt] = null),
        (Bt = ht[--mt]),
        (ht[mt] = null);
  }
  var ut = null,
    ct = null,
    ke = !1,
    Tt = null;
  function Ic(e, t) {
    var r = xt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Fc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 ||
              r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t),
              (ut = e),
              (ct = tn(t.firstChild)),
              !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null
            ? ((e.stateNode = t), (ut = e), (ct = null), !0)
            : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = kn !== null ? { id: Bt, overflow: bt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = xt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (ut = e),
              (ct = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zo(e) {
    if (ke) {
      var t = ct;
      if (t) {
        var r = t;
        if (!Fc(e, t)) {
          if (Yo(e)) throw Error(s(418));
          t = tn(r.nextSibling);
          var o = ut;
          t && Fc(e, t)
            ? Ic(o, r)
            : ((e.flags = (e.flags & -4097) | 2),
              (ke = !1),
              (ut = e));
        }
      } else {
        if (Yo(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (ke = !1), (ut = e);
      }
    }
  }
  function Oc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ut = e;
  }
  function ts(e) {
    if (e !== ut) return !1;
    if (!ke) return Oc(e), (ke = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
          (t =
            t !== "head" &&
            t !== "body" &&
            !Wo(e.type, e.memoizedProps))),
        t && (t = ct))
    ) {
      if (Yo(e)) throw (Bc(), Error(s(418)));
      for (; t;) Ic(e, t), (t = tn(t.nextSibling));
    }
    if ((Oc(e), e.tag === 13)) {
      if (
        ((e = e.memoizedState),
          (e = e !== null ? e.dehydrated : null),
          !e)
      )
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                ct = tn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bc() {
    for (var e = ct; e;) e = tn(e.nextSibling);
  }
  function er() {
    (ct = ut = null), (ke = !1);
  }
  function Jo(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  var Lg = Q.ReactCurrentBatchConfig;
  function Hr(e, t, r) {
    if (
      ((e = r.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(s(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var a = o,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (p) {
            var x = a.refs;
            p === null ? delete x[c] : (x[c] = p);
          }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!r._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ns(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ))
    );
  }
  function bc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Uc(e) {
    function t(T, k) {
      if (e) {
        var E = T.deletions;
        E === null ? ((T.deletions = [k]), (T.flags |= 16)) : E.push(k);
      }
    }
    function r(T, k) {
      if (!e) return null;
      for (; k !== null;) t(T, k), (k = k.sibling);
      return null;
    }
    function o(T, k) {
      for (T = new Map(); k !== null;)
        k.key !== null ? T.set(k.key, k) : T.set(k.index, k),
          (k = k.sibling);
      return T;
    }
    function a(T, k) {
      return (T = pn(T, k)), (T.index = 0), (T.sibling = null), T;
    }
    function c(T, k, E) {
      return (
        (T.index = E),
        e
          ? ((E = T.alternate),
            E !== null
              ? ((E = E.index), E < k ? ((T.flags |= 2), k) : E)
              : ((T.flags |= 2), k))
          : ((T.flags |= 1048576), k)
      );
    }
    function p(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function x(T, k, E, z) {
      return k === null || k.tag !== 6
        ? ((k = $l(E, T.mode, z)), (k.return = T), k)
        : ((k = a(k, E)), (k.return = T), k);
    }
    function S(T, k, E, z) {
      var G = E.type;
      return G === le
        ? R(T, k, E.props.children, z, E.key)
        : k !== null &&
          (k.elementType === G ||
            (typeof G == "object" &&
              G !== null &&
              G.$$typeof === Qe &&
              bc(G) === k.type))
          ? ((z = a(k, E.props)),
            (z.ref = Hr(T, k, E)),
            (z.return = T),
            z)
          : ((z = Es(E.type, E.key, E.props, null, T.mode, z)),
            (z.ref = Hr(T, k, E)),
            (z.return = T),
            z);
    }
    function j(T, k, E, z) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== E.containerInfo ||
        k.stateNode.implementation !== E.implementation
        ? ((k = Hl(E, T.mode, z)), (k.return = T), k)
        : ((k = a(k, E.children || [])), (k.return = T), k);
    }
    function R(T, k, E, z, G) {
      return k === null || k.tag !== 7
        ? ((k = Dn(E, T.mode, z, G)), (k.return = T), k)
        : ((k = a(k, E)), (k.return = T), k);
    }
    function V(T, k, E) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return (k = $l("" + k, T.mode, E)), (k.return = T), k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case B:
            return (
              (E = Es(k.type, k.key, k.props, null, T.mode, E)),
              (E.ref = Hr(T, null, k)),
              (E.return = T),
              E
            );
          case ee:
            return (k = Hl(k, T.mode, E)), (k.return = T), k;
          case Qe:
            var z = k._init;
            return V(T, z(k._payload), E);
        }
        if (wr(k) || Y(k))
          return (k = Dn(k, T.mode, E, null)), (k.return = T), k;
        ns(T, k);
      }
      return null;
    }
    function A(T, k, E, z) {
      var G = k !== null ? k.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return G !== null ? null : x(T, k, "" + E, z);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case B:
            return E.key === G ? S(T, k, E, z) : null;
          case ee:
            return E.key === G ? j(T, k, E, z) : null;
          case Qe:
            return (G = E._init), A(T, k, G(E._payload), z);
        }
        if (wr(E) || Y(E))
          return G !== null ? null : R(T, k, E, z, null);
        ns(T, E);
      }
      return null;
    }
    function b(T, k, E, z, G) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return (T = T.get(E) || null), x(k, T, "" + z, G);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case B:
            return (
              (T = T.get(z.key === null ? E : z.key) || null),
              S(k, T, z, G)
            );
          case ee:
            return (
              (T = T.get(z.key === null ? E : z.key) || null),
              j(k, T, z, G)
            );
          case Qe:
            var Z = z._init;
            return b(T, k, E, Z(z._payload), G);
        }
        if (wr(z) || Y(z))
          return (T = T.get(E) || null), R(k, T, z, G, null);
        ns(k, z);
      }
      return null;
    }
    function K(T, k, E, z) {
      for (
        var G = null, Z = null, J = k, ne = (k = 0), Fe = null;
        J !== null && ne < E.length;
        ne++
      ) {
        J.index > ne ? ((Fe = J), (J = null)) : (Fe = J.sibling);
        var de = A(T, J, E[ne], z);
        if (de === null) {
          J === null && (J = Fe);
          break;
        }
        e && J && de.alternate === null && t(T, J),
          (k = c(de, k, ne)),
          Z === null ? (G = de) : (Z.sibling = de),
          (Z = de),
          (J = Fe);
      }
      if (ne === E.length) return r(T, J), ke && Pn(T, ne), G;
      if (J === null) {
        for (; ne < E.length; ne++)
          (J = V(T, E[ne], z)),
            J !== null &&
            ((k = c(J, k, ne)),
              Z === null ? (G = J) : (Z.sibling = J),
              (Z = J));
        return ke && Pn(T, ne), G;
      }
      for (J = o(T, J); ne < E.length; ne++)
        (Fe = b(J, T, ne, E[ne], z)),
          Fe !== null &&
          (e &&
            Fe.alternate !== null &&
            J.delete(Fe.key === null ? ne : Fe.key),
            (k = c(Fe, k, ne)),
            Z === null ? (G = Fe) : (Z.sibling = Fe),
            (Z = Fe));
      return (
        e &&
        J.forEach(function (hn) {
          return t(T, hn);
        }),
        ke && Pn(T, ne),
        G
      );
    }
    function q(T, k, E, z) {
      var G = Y(E);
      if (typeof G != "function") throw Error(s(150));
      if (((E = G.call(E)), E == null)) throw Error(s(151));
      for (
        var Z = (G = null),
        J = k,
        ne = (k = 0),
        Fe = null,
        de = E.next();
        J !== null && !de.done;
        ne++, de = E.next()
      ) {
        J.index > ne ? ((Fe = J), (J = null)) : (Fe = J.sibling);
        var hn = A(T, J, de.value, z);
        if (hn === null) {
          J === null && (J = Fe);
          break;
        }
        e && J && hn.alternate === null && t(T, J),
          (k = c(hn, k, ne)),
          Z === null ? (G = hn) : (Z.sibling = hn),
          (Z = hn),
          (J = Fe);
      }
      if (de.done) return r(T, J), ke && Pn(T, ne), G;
      if (J === null) {
        for (; !de.done; ne++, de = E.next())
          (de = V(T, de.value, z)),
            de !== null &&
            ((k = c(de, k, ne)),
              Z === null ? (G = de) : (Z.sibling = de),
              (Z = de));
        return ke && Pn(T, ne), G;
      }
      for (J = o(T, J); !de.done; ne++, de = E.next())
        (de = b(J, T, ne, de.value, z)),
          de !== null &&
          (e &&
            de.alternate !== null &&
            J.delete(de.key === null ? ne : de.key),
            (k = c(de, k, ne)),
            Z === null ? (G = de) : (Z.sibling = de),
            (Z = de));
      return (
        e &&
        J.forEach(function (f0) {
          return t(T, f0);
        }),
        ke && Pn(T, ne),
        G
      );
    }
    function De(T, k, E, z) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === le &&
          E.key === null &&
          (E = E.props.children),
          typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case B:
            e: {
              for (var G = E.key, Z = k; Z !== null;) {
                if (Z.key === G) {
                  if (((G = E.type), G === le)) {
                    if (Z.tag === 7) {
                      r(T, Z.sibling),
                        (k = a(Z, E.props.children)),
                        (k.return = T),
                        (T = k);
                      break e;
                    }
                  } else if (
                    Z.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === Qe &&
                      bc(G) === Z.type)
                  ) {
                    r(T, Z.sibling),
                      (k = a(Z, E.props)),
                      (k.ref = Hr(T, Z, E)),
                      (k.return = T),
                      (T = k);
                    break e;
                  }
                  r(T, Z);
                  break;
                } else t(T, Z);
                Z = Z.sibling;
              }
              E.type === le
                ? ((k = Dn(E.props.children, T.mode, z, E.key)),
                  (k.return = T),
                  (T = k))
                : ((z = Es(
                  E.type,
                  E.key,
                  E.props,
                  null,
                  T.mode,
                  z
                )),
                  (z.ref = Hr(T, k, E)),
                  (z.return = T),
                  (T = z));
            }
            return p(T);
          case ee:
            e: {
              for (Z = E.key; k !== null;) {
                if (k.key === Z)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo ===
                    E.containerInfo &&
                    k.stateNode.implementation ===
                    E.implementation
                  ) {
                    r(T, k.sibling),
                      (k = a(k, E.children || [])),
                      (k.return = T),
                      (T = k);
                    break e;
                  } else {
                    r(T, k);
                    break;
                  }
                else t(T, k);
                k = k.sibling;
              }
              (k = Hl(E, T.mode, z)), (k.return = T), (T = k);
            }
            return p(T);
          case Qe:
            return (Z = E._init), De(T, k, Z(E._payload), z);
        }
        if (wr(E)) return K(T, k, E, z);
        if (Y(E)) return q(T, k, E, z);
        ns(T, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          k !== null && k.tag === 6
            ? (r(T, k.sibling),
              (k = a(k, E)),
              (k.return = T),
              (T = k))
            : (r(T, k),
              (k = $l(E, T.mode, z)),
              (k.return = T),
              (T = k)),
          p(T))
        : r(T, k);
    }
    return De;
  }
  var tr = Uc(!0),
    Wc = Uc(!1),
    rs = nn(null),
    is = null,
    nr = null,
    el = null;
  function tl() {
    el = nr = is = null;
  }
  function nl(e) {
    var t = rs.current;
    xe(rs), (e._currentValue = t);
  }
  function rl(e, t, r) {
    for (; e !== null;) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null &&
          (o.childLanes & t) !== t &&
          (o.childLanes |= t),
          e === r)
      )
        break;
      e = e.return;
    }
  }
  function rr(e, t) {
    (is = e),
      (el = nr = null),
      (e = e.dependencies),
      e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (nt = !0), (e.firstContext = null));
  }
  function gt(e) {
    var t = e._currentValue;
    if (el !== e)
      if (
        ((e = { context: e, memoizedValue: t, next: null }),
          nr === null)
      ) {
        if (is === null) throw Error(s(308));
        (nr = e), (is.dependencies = { lanes: 0, firstContext: e });
      } else nr = nr.next = e;
    return t;
  }
  var Cn = null;
  function il(e) {
    Cn === null ? (Cn = [e]) : Cn.push(e);
  }
  function $c(e, t, r, o) {
    var a = t.interleaved;
    return (
      a === null
        ? ((r.next = r), il(t))
        : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      Ut(e, o)
    );
  }
  function Ut(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;)
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var on = !1;
  function sl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Hc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
  }
  function Wt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function ln(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ae & 2) !== 0)) {
      var a = o.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (o.pending = t),
        Ut(e, r)
      );
    }
    return (
      (a = o.interleaved),
      a === null
        ? ((t.next = t), il(o))
        : ((t.next = a.next), (a.next = t)),
      (o.interleaved = t),
      Ut(e, r)
    );
  }
  function ss(e, t, r) {
    if (
      ((t = t.updateQueue),
        t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r);
    }
  }
  function Kc(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var a = null,
        c = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var p = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          c === null ? (a = c = p) : (c = c.next = p), (r = r.next);
        } while (r !== null);
        c === null ? (a = c = t) : (c = c.next = t);
      } else a = c = t;
      (r = {
        baseState: o.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: c,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function os(e, t, r, o) {
    var a = e.updateQueue;
    on = !1;
    var c = a.firstBaseUpdate,
      p = a.lastBaseUpdate,
      x = a.shared.pending;
    if (x !== null) {
      a.shared.pending = null;
      var S = x,
        j = S.next;
      (S.next = null), p === null ? (c = j) : (p.next = j), (p = S);
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
          (x = R.lastBaseUpdate),
          x !== p &&
          (x === null ? (R.firstBaseUpdate = j) : (x.next = j),
            (R.lastBaseUpdate = S)));
    }
    if (c !== null) {
      var V = a.baseState;
      (p = 0), (R = j = S = null), (x = c);
      do {
        var A = x.lane,
          b = x.eventTime;
        if ((o & A) === A) {
          R !== null &&
            (R = R.next = {
              eventTime: b,
              lane: 0,
              tag: x.tag,
              payload: x.payload,
              callback: x.callback,
              next: null,
            });
          e: {
            var K = e,
              q = x;
            switch (((A = t), (b = r), q.tag)) {
              case 1:
                if (((K = q.payload), typeof K == "function")) {
                  V = K.call(b, V, A);
                  break e;
                }
                V = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = q.payload),
                    (A =
                      typeof K == "function"
                        ? K.call(b, V, A)
                        : K),
                    A == null)
                )
                  break e;
                V = W({}, V, A);
                break e;
              case 2:
                on = !0;
            }
          }
          x.callback !== null &&
            x.lane !== 0 &&
            ((e.flags |= 64),
              (A = a.effects),
              A === null ? (a.effects = [x]) : A.push(x));
        } else
          (b = {
            eventTime: b,
            lane: A,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            R === null ? ((j = R = b), (S = V)) : (R = R.next = b),
            (p |= A);
        if (((x = x.next), x === null)) {
          if (((x = a.shared.pending), x === null)) break;
          (A = x),
            (x = A.next),
            (A.next = null),
            (a.lastBaseUpdate = A),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (R === null && (S = V),
          (a.baseState = S),
          (a.firstBaseUpdate = j),
          (a.lastBaseUpdate = R),
          (t = a.shared.interleaved),
          t !== null)
      ) {
        a = t;
        do (p |= a.lane), (a = a.next);
        while (a !== t);
      } else c === null && (a.shared.lanes = 0);
      (jn |= p), (e.lanes = p), (e.memoizedState = V);
    }
  }
  function qc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          a = o.callback;
        if (a !== null) {
          if (((o.callback = null), (o = r), typeof a != "function"))
            throw Error(s(191, a));
          a.call(o);
        }
      }
  }
  var Kr = {},
    Lt = nn(Kr),
    qr = nn(Kr),
    Gr = nn(Kr);
  function Tn(e) {
    if (e === Kr) throw Error(s(174));
    return e;
  }
  function ol(e, t) {
    switch ((ge(Gr, t), ge(qr, e), ge(Lt, Kr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = oo(t, e));
    }
    xe(Lt), ge(Lt, t);
  }
  function ir() {
    xe(Lt), xe(qr), xe(Gr);
  }
  function Gc(e) {
    Tn(Gr.current);
    var t = Tn(Lt.current),
      r = oo(t, e.type);
    t !== r && (ge(qr, e), ge(Lt, r));
  }
  function ll(e) {
    qr.current === e && (xe(Lt), xe(qr));
  }
  var Pe = nn(0);
  function ls(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated),
            r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var al = [];
  function ul() {
    for (var e = 0; e < al.length; e++)
      al[e]._workInProgressVersionPrimary = null;
    al.length = 0;
  }
  var as = Q.ReactCurrentDispatcher,
    cl = Q.ReactCurrentBatchConfig,
    En = 0,
    Ce = null,
    Ve = null,
    ze = null,
    us = !1,
    Qr = !1,
    Xr = 0,
    Vg = 0;
  function We() {
    throw Error(s(321));
  }
  function dl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Ct(e[r], t[r])) return !1;
    return !0;
  }
  function fl(e, t, r, o, a, c) {
    if (
      ((En = c),
        (Ce = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (as.current = e === null || e.memoizedState === null ? Fg : Og),
        (e = r(o, a)),
        Qr)
    ) {
      c = 0;
      do {
        if (((Qr = !1), (Xr = 0), 25 <= c)) throw Error(s(301));
        (c += 1),
          (ze = Ve = null),
          (t.updateQueue = null),
          (as.current = Bg),
          (e = r(o, a));
      } while (Qr);
    }
    if (
      ((as.current = fs),
        (t = Ve !== null && Ve.next !== null),
        (En = 0),
        (ze = Ve = Ce = null),
        (us = !1),
        t)
    )
      throw Error(s(300));
    return e;
  }
  function pl() {
    var e = Xr !== 0;
    return (Xr = 0), e;
  }
  function Vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (
      ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e), ze
    );
  }
  function yt() {
    if (Ve === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = ze === null ? Ce.memoizedState : ze.next;
    if (t !== null) (ze = t), (Ve = e);
    else {
      if (e === null) throw Error(s(310));
      (Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e);
    }
    return ze;
  }
  function Yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hl(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = Ve,
      a = o.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (a !== null) {
        var p = a.next;
        (a.next = c.next), (c.next = p);
      }
      (o.baseQueue = a = c), (r.pending = null);
    }
    if (a !== null) {
      (c = a.next), (o = o.baseState);
      var x = (p = null),
        S = null,
        j = c;
      do {
        var R = j.lane;
        if ((En & R) === R)
          S !== null &&
            (S = S.next = {
              lane: 0,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
            (o = j.hasEagerState ? j.eagerState : e(o, j.action));
        else {
          var V = {
            lane: R,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          S === null ? ((x = S = V), (p = o)) : (S = S.next = V),
            (Ce.lanes |= R),
            (jn |= R);
        }
        j = j.next;
      } while (j !== null && j !== c);
      S === null ? (p = o) : (S.next = x),
        Ct(o, t.memoizedState) || (nt = !0),
        (t.memoizedState = o),
        (t.baseState = p),
        (t.baseQueue = S),
        (r.lastRenderedState = o);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (c = a.lane), (Ce.lanes |= c), (jn |= c), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ml(e) {
    var t = yt(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      a = r.pending,
      c = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var p = (a = a.next);
      do (c = e(c, p.action)), (p = p.next);
      while (p !== a);
      Ct(c, t.memoizedState) || (nt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c);
    }
    return [c, o];
  }
  function Qc() { }
  function Xc(e, t) {
    var r = Ce,
      o = yt(),
      a = t(),
      c = !Ct(o.memoizedState, a);
    if (
      (c && ((o.memoizedState = a), (nt = !0)),
        (o = o.queue),
        gl(Jc.bind(null, r, o, e), [e]),
        o.getSnapshot !== t ||
        c ||
        (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
          Zr(9, Zc.bind(null, r, o, a, t), void 0, null),
          Ie === null)
      )
        throw Error(s(349));
      (En & 30) !== 0 || Yc(r, t, a);
    }
    return a;
  }
  function Yc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Zc(e, t, r, o) {
    (t.value = r), (t.getSnapshot = o), ed(t) && td(e);
  }
  function Jc(e, t, r) {
    return r(function () {
      ed(t) && td(e);
    });
  }
  function ed(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ct(e, r);
    } catch {
      return !0;
    }
  }
  function td(e) {
    var t = Ut(e, 1);
    t !== null && Mt(t, e, 1, -1);
  }
  function nd(e) {
    var t = Vt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ig.bind(null, Ce, e)),
      [t.memoizedState, e]
    );
  }
  function Zr(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next),
              (r.next = e),
              (e.next = o),
              (t.lastEffect = e))),
      e
    );
  }
  function rd() {
    return yt().memoizedState;
  }
  function cs(e, t, r, o) {
    var a = Vt();
    (Ce.flags |= e),
      (a.memoizedState = Zr(1 | t, r, void 0, o === void 0 ? null : o));
  }
  function ds(e, t, r, o) {
    var a = yt();
    o = o === void 0 ? null : o;
    var c = void 0;
    if (Ve !== null) {
      var p = Ve.memoizedState;
      if (((c = p.destroy), o !== null && dl(o, p.deps))) {
        a.memoizedState = Zr(t, r, c, o);
        return;
      }
    }
    (Ce.flags |= e), (a.memoizedState = Zr(1 | t, r, c, o));
  }
  function id(e, t) {
    return cs(8390656, 8, e, t);
  }
  function gl(e, t) {
    return ds(2048, 8, e, t);
  }
  function sd(e, t) {
    return ds(4, 2, e, t);
  }
  function od(e, t) {
    return ds(4, 4, e, t);
  }
  function ld(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ad(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null),
      ds(4, 4, ld.bind(null, t, e), r)
    );
  }
  function yl() { }
  function ud(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && dl(t, o[1])
      ? o[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function cd(e, t) {
    var r = yt();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && dl(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function dd(e, t, r) {
    return (En & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (nt = !0)),
        (e.memoizedState = r))
      : (Ct(r, t) ||
        ((r = bu()), (Ce.lanes |= r), (jn |= r), (e.baseState = !0)),
        t);
  }
  function _g(e, t) {
    var r = pe;
    (pe = r !== 0 && 4 > r ? r : 4), e(!0);
    var o = cl.transition;
    cl.transition = {};
    try {
      e(!1), t();
    } finally {
      (pe = r), (cl.transition = o);
    }
  }
  function fd() {
    return yt().memoizedState;
  }
  function zg(e, t, r) {
    var o = dn(e);
    if (
      ((r = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        pd(e))
    )
      hd(t, r);
    else if (((r = $c(e, t, r, o)), r !== null)) {
      var a = Ye();
      Mt(r, e, o, a), md(r, t, o);
    }
  }
  function Ig(e, t, r) {
    var o = dn(e),
      a = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (pd(e)) hd(t, a);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            x = c(p, r);
          if (
            ((a.hasEagerState = !0), (a.eagerState = x), Ct(x, p))
          ) {
            var S = t.interleaved;
            S === null
              ? ((a.next = a), il(t))
              : ((a.next = S.next), (S.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = $c(e, t, a, o)),
        r !== null && ((a = Ye()), Mt(r, e, o, a), md(r, t, o));
    }
  }
  function pd(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function hd(e, t) {
    Qr = us = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function md(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), xo(e, r);
    }
  }
  var fs = {
    readContext: gt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
    Fg = {
      readContext: gt,
      useCallback: function (e, t) {
        return (Vt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: gt,
      useEffect: id,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          cs(4194308, 4, ld.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return cs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return cs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Vt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var o = Vt();
        return (
          (t = r !== void 0 ? r(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = zg.bind(null, Ce, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: nd,
      useDebugValue: yl,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = nd(!1),
          t = e[0];
        return (
          (e = _g.bind(null, e[1])), (Vt().memoizedState = e), [t, e]
        );
      },
      useMutableSource: function () { },
      useSyncExternalStore: function (e, t, r) {
        var o = Ce,
          a = Vt();
        if (ke) {
          if (r === void 0) throw Error(s(407));
          r = r();
        } else {
          if (((r = t()), Ie === null)) throw Error(s(349));
          (En & 30) !== 0 || Yc(o, t, r);
        }
        a.memoizedState = r;
        var c = { value: r, getSnapshot: t };
        return (
          (a.queue = c),
          id(Jc.bind(null, o, c, e), [e]),
          (o.flags |= 2048),
          Zr(9, Zc.bind(null, o, c, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Vt(),
          t = Ie.identifierPrefix;
        if (ke) {
          var r = bt,
            o = Bt;
          (r = (o & ~(1 << (32 - Pt(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Xr++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Vg++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Og = {
      readContext: gt,
      useCallback: ud,
      useContext: gt,
      useEffect: gl,
      useImperativeHandle: ad,
      useInsertionEffect: sd,
      useLayoutEffect: od,
      useMemo: cd,
      useReducer: hl,
      useRef: rd,
      useState: function () {
        return hl(Yr);
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = yt();
        return dd(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = hl(Yr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Xc,
      useId: fd,
      unstable_isNewReconciler: !1,
    },
    Bg = {
      readContext: gt,
      useCallback: ud,
      useContext: gt,
      useEffect: gl,
      useImperativeHandle: ad,
      useInsertionEffect: sd,
      useLayoutEffect: od,
      useMemo: cd,
      useReducer: ml,
      useRef: rd,
      useState: function () {
        return ml(Yr);
      },
      useDebugValue: yl,
      useDeferredValue: function (e) {
        var t = yt();
        return Ve === null
          ? (t.memoizedState = e)
          : dd(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = ml(Yr)[0],
          t = yt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qc,
      useSyncExternalStore: Xc,
      useId: fd,
      unstable_isNewReconciler: !1,
    };
  function Et(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function vl(e, t, r, o) {
    (t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : W({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ps = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? xn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = dn(e),
        c = Wt(o, a);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = ln(e, c, a)),
        t !== null && (Mt(t, e, a, o), ss(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = Ye(),
        a = dn(e),
        c = Wt(o, a);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = ln(e, c, a)),
        t !== null && (Mt(t, e, a, o), ss(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ye(),
        o = dn(e),
        a = Wt(r, o);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = ln(e, a, o)),
        t !== null && (Mt(t, e, o, r), ss(t, e, o));
    },
  };
  function gd(e, t, r, o, a, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, c, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Fr(r, o) || !Fr(a, c)
          : !0
    );
  }
  function yd(e, t, r) {
    var o = !1,
      a = rn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = gt(c))
        : ((a = tt(t) ? Sn : Ue.current),
          (o = t.contextTypes),
          (c = (o = o != null) ? Yn(e, a) : rn)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ps),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
      ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function vd(e, t, r, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && ps.enqueueReplaceState(t, t.state, null);
  }
  function xl(e, t, r, o) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), sl(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (a.context = gt(c))
      : ((c = tt(t) ? Sn : Ue.current), (a.context = Yn(e, c))),
      (a.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" &&
      (vl(e, t, c, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((t = a.state),
        typeof a.componentWillMount == "function" &&
        a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
        t !== a.state && ps.enqueueReplaceState(a, a.state, null),
        os(e, r, a, o),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function sr(e, t) {
    try {
      var r = "",
        o = t;
      do (r += ue(o)), (o = o.return);
      while (o);
      var a = r;
    } catch (c) {
      a =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function wl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Sl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var bg = typeof WeakMap == "function" ? WeakMap : Map;
  function xd(e, t, r) {
    (r = Wt(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var o = t.value;
    return (
      (r.callback = function () {
        ws || ((ws = !0), (zl = o)), Sl(e, t);
      }),
      r
    );
  }
  function wd(e, t, r) {
    (r = Wt(-1, r)), (r.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var a = t.value;
      (r.payload = function () {
        return o(a);
      }),
        (r.callback = function () {
          Sl(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
      typeof c.componentDidCatch == "function" &&
      (r.callback = function () {
        Sl(e, t),
          typeof o != "function" &&
          (un === null
            ? (un = new Set([this]))
            : un.add(this));
        var p = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: p !== null ? p : "",
        });
      }),
      r
    );
  }
  function Sd(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new bg();
      var a = new Set();
      o.set(t, a);
    } else (a = o.get(t)), a === void 0 && ((a = new Set()), o.set(t, a));
    a.has(r) || (a.add(r), (e = t0.bind(null, e, t, r)), t.then(e, e));
  }
  function kd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Pd(e, t, r, o, a) {
    return (e.mode & 1) === 0
      ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
          (r.alternate === null
            ? (r.tag = 17)
            : ((t = Wt(-1, 1)), (t.tag = 2), ln(r, t, 1))),
          (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var Ug = Q.ReactCurrentOwner,
    nt = !1;
  function Xe(e, t, r, o) {
    t.child = e === null ? Wc(t, null, r, o) : tr(t, e.child, r, o);
  }
  function Cd(e, t, r, o, a) {
    r = r.render;
    var c = t.ref;
    return (
      rr(t, a),
      (o = fl(e, t, r, o, c, a)),
      (r = pl()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $t(e, t, a))
        : (ke && r && Qo(t), (t.flags |= 1), Xe(e, t, o, a), t.child)
    );
  }
  function Td(e, t, r, o, a) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" &&
        !Wl(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Ed(e, t, c, o, a))
        : ((e = Es(r.type, null, o, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & a) === 0)) {
      var p = c.memoizedProps;
      if (
        ((r = r.compare),
          (r = r !== null ? r : Fr),
          r(p, o) && e.ref === t.ref)
      )
        return $t(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = pn(c, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ed(e, t, r, o, a) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Fr(c, o) && e.ref === t.ref)
        if (((nt = !1), (t.pendingProps = o = c), (e.lanes & a) !== 0))
          (e.flags & 131072) !== 0 && (nt = !0);
        else return (t.lanes = e.lanes), $t(e, t, a);
    }
    return kl(e, t, r, o, a);
  }
  function jd(e, t, r) {
    var o = t.pendingProps,
      a = o.children,
      c = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ge(lr, dt),
          (dt |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ge(lr, dt),
            (dt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = c !== null ? c.baseLanes : r),
          ge(lr, dt),
          (dt |= o);
      }
    else
      c !== null
        ? ((o = c.baseLanes | r), (t.memoizedState = null))
        : (o = r),
        ge(lr, dt),
        (dt |= o);
    return Xe(e, t, a, r), t.child;
  }
  function Nd(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function kl(e, t, r, o, a) {
    var c = tt(r) ? Sn : Ue.current;
    return (
      (c = Yn(t, c)),
      rr(t, a),
      (r = fl(e, t, r, o, c, a)),
      (o = pl()),
      e !== null && !nt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $t(e, t, a))
        : (ke && o && Qo(t), (t.flags |= 1), Xe(e, t, r, a), t.child)
    );
  }
  function Md(e, t, r, o, a) {
    if (tt(r)) {
      var c = !0;
      Yi(t);
    } else c = !1;
    if ((rr(t, a), t.stateNode === null))
      ms(e, t), yd(t, r, o), xl(t, r, o, a), (o = !0);
    else if (e === null) {
      var p = t.stateNode,
        x = t.memoizedProps;
      p.props = x;
      var S = p.context,
        j = r.contextType;
      typeof j == "object" && j !== null
        ? (j = gt(j))
        : ((j = tt(r) ? Sn : Ue.current), (j = Yn(t, j)));
      var R = r.getDerivedStateFromProps,
        V =
          typeof R == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      V ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((x !== o || S !== j) && vd(t, p, o, j)),
        (on = !1);
      var A = t.memoizedState;
      (p.state = A),
        os(t, o, p, a),
        (S = t.memoizedState),
        x !== o || A !== S || et.current || on
          ? (typeof R == "function" &&
            (vl(t, r, R, o), (S = t.memoizedState)),
            (x = on || gd(t, r, x, o, A, S, j))
              ? (V ||
                (typeof p.UNSAFE_componentWillMount !=
                  "function" &&
                  typeof p.componentWillMount !=
                  "function") ||
                (typeof p.componentWillMount == "function" &&
                  p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount ==
                  "function" &&
                  p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = S)),
            (p.props = o),
            (p.state = S),
            (p.context = j),
            (o = x))
          : (typeof p.componentDidMount == "function" &&
            (t.flags |= 4194308),
            (o = !1));
    } else {
      (p = t.stateNode),
        Hc(e, t),
        (x = t.memoizedProps),
        (j = t.type === t.elementType ? x : Et(t.type, x)),
        (p.props = j),
        (V = t.pendingProps),
        (A = p.context),
        (S = r.contextType),
        typeof S == "object" && S !== null
          ? (S = gt(S))
          : ((S = tt(r) ? Sn : Ue.current), (S = Yn(t, S)));
      var b = r.getDerivedStateFromProps;
      (R =
        typeof b == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((x !== V || A !== S) && vd(t, p, o, S)),
        (on = !1),
        (A = t.memoizedState),
        (p.state = A),
        os(t, o, p, a);
      var K = t.memoizedState;
      x !== V || A !== K || et.current || on
        ? (typeof b == "function" &&
          (vl(t, r, b, o), (K = t.memoizedState)),
          (j = on || gd(t, r, j, o, A, K, S) || !1)
            ? (R ||
              (typeof p.UNSAFE_componentWillUpdate !=
                "function" &&
                typeof p.componentWillUpdate != "function") ||
              (typeof p.componentWillUpdate == "function" &&
                p.componentWillUpdate(o, K, S),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                p.UNSAFE_componentWillUpdate(o, K, S)),
              typeof p.componentDidUpdate == "function" &&
              (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
              (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
              (x === e.memoizedProps && A === e.memoizedState) ||
              (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
              (x === e.memoizedProps && A === e.memoizedState) ||
              (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = K)),
          (p.props = o),
          (p.state = K),
          (p.context = S),
          (o = j))
        : (typeof p.componentDidUpdate != "function" ||
          (x === e.memoizedProps && A === e.memoizedState) ||
          (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
          (x === e.memoizedProps && A === e.memoizedState) ||
          (t.flags |= 1024),
          (o = !1));
    }
    return Pl(e, t, r, o, c, a);
  }
  function Pl(e, t, r, o, a, c) {
    Nd(e, t);
    var p = (t.flags & 128) !== 0;
    if (!o && !p) return a && Vc(t, r, !1), $t(e, t, c);
    (o = t.stateNode), (Ug.current = t);
    var x =
      p && typeof r.getDerivedStateFromError != "function"
        ? null
        : o.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = tr(t, e.child, null, c)),
          (t.child = tr(t, null, x, c)))
        : Xe(e, t, x, c),
      (t.memoizedState = o.state),
      a && Vc(t, r, !0),
      t.child
    );
  }
  function Ad(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Rc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Rc(e, t.context, !1),
      ol(e, t.containerInfo);
  }
  function Dd(e, t, r, o, a) {
    return er(), Jo(a), (t.flags |= 256), Xe(e, t, r, o), t.child;
  }
  var Cl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Rd(e, t, r) {
    var o = t.pendingProps,
      a = Pe.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      x;
    if (
      ((x = p) ||
        (x =
          e !== null && e.memoizedState === null
            ? !1
            : (a & 2) !== 0),
        x
          ? ((c = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (a |= 1),
        ge(Pe, a & 1),
        e === null)
    )
      return (
        Zo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((p = o.children),
            (e = o.fallback),
            c
              ? ((o = t.mode),
                (c = t.child),
                (p = { mode: "hidden", children: p }),
                (o & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = p))
                  : (c = js(p, o, 0, null)),
                (e = Dn(e, o, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = Tl(r)),
                (t.memoizedState = Cl),
                e)
              : El(t, p))
      );
    if (
      ((a = e.memoizedState),
        a !== null && ((x = a.dehydrated), x !== null))
    )
      return Wg(e, t, p, o, x, a, r);
    if (c) {
      (c = o.fallback), (p = t.mode), (a = e.child), (x = a.sibling);
      var S = { mode: "hidden", children: o.children };
      return (
        (p & 1) === 0 && t.child !== a
          ? ((o = t.child),
            (o.childLanes = 0),
            (o.pendingProps = S),
            (t.deletions = null))
          : ((o = pn(a, S)),
            (o.subtreeFlags = a.subtreeFlags & 14680064)),
        x !== null
          ? (c = pn(x, c))
          : ((c = Dn(c, p, r, null)), (c.flags |= 2)),
        (c.return = t),
        (o.return = t),
        (o.sibling = c),
        (t.child = o),
        (o = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? Tl(r)
            : {
              baseLanes: p.baseLanes | r,
              cachePool: null,
              transitions: p.transitions,
            }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = Cl),
        o
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (o = pn(c, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = r),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
      ((r = t.deletions),
        r === null
          ? ((t.deletions = [e]), (t.flags |= 16))
          : r.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function El(e, t) {
    return (
      (t = js({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function hs(e, t, r, o) {
    return (
      o !== null && Jo(o),
      tr(t, e.child, null, r),
      (e = El(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wg(e, t, r, o, a, c, p) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = wl(Error(s(422)))), hs(e, t, p, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = o.fallback),
            (a = t.mode),
            (o = js(
              { mode: "visible", children: o.children },
              a,
              0,
              null
            )),
            (c = Dn(c, a, p, null)),
            (c.flags |= 2),
            (o.return = t),
            (c.return = t),
            (o.sibling = c),
            (t.child = o),
            (t.mode & 1) !== 0 && tr(t, e.child, null, p),
            (t.child.memoizedState = Tl(p)),
            (t.memoizedState = Cl),
            c);
    if ((t.mode & 1) === 0) return hs(e, t, p, null);
    if (a.data === "$!") {
      if (((o = a.nextSibling && a.nextSibling.dataset), o))
        var x = o.dgst;
      return (
        (o = x),
        (c = Error(s(419))),
        (o = wl(c, o, void 0)),
        hs(e, t, p, o)
      );
    }
    if (((x = (p & e.childLanes) !== 0), nt || x)) {
      if (((o = Ie), o !== null)) {
        switch (p & -p) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = (a & (o.suspendedLanes | p)) !== 0 ? 0 : a),
          a !== 0 &&
          a !== c.retryLane &&
          ((c.retryLane = a), Ut(e, a), Mt(o, e, a, -1));
      }
      return Ul(), (o = wl(Error(s(421)))), hs(e, t, p, o);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = n0.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (ct = tn(a.nextSibling)),
        (ut = t),
        (ke = !0),
        (Tt = null),
        e !== null &&
        ((ht[mt++] = Bt),
          (ht[mt++] = bt),
          (ht[mt++] = kn),
          (Bt = e.id),
          (bt = e.overflow),
          (kn = t)),
        (t = El(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function Ld(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), rl(e.return, t, r);
  }
  function jl(e, t, r, o, a) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: r,
        tailMode: a,
      })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = o),
        (c.tail = r),
        (c.tailMode = a));
  }
  function Vd(e, t, r) {
    var o = t.pendingProps,
      a = o.revealOrder,
      c = o.tail;
    if ((Xe(e, t, o.children, r), (o = Pe.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Ld(e, r, t);
          else if (e.tag === 19) Ld(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    if ((ge(Pe, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null;)
            (e = r.alternate),
              e !== null && ls(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            jl(t, !1, a, r, c);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null;) {
            if (((e = a.alternate), e !== null && ls(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          jl(t, !0, r, null, c);
          break;
        case "together":
          jl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ms(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
        (jn |= t.lanes),
        (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child,
        r = pn(e, e.pendingProps),
        t.child = r,
        r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = pn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function $g(e, t, r) {
    switch (t.tag) {
      case 3:
        Ad(t), er();
        break;
      case 5:
        Gc(t);
        break;
      case 1:
        tt(t.type) && Yi(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          a = t.memoizedProps.value;
        ge(rs, o._currentValue), (o._currentValue = a);
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (ge(Pe, Pe.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Rd(e, t, r)
              : (ge(Pe, Pe.current & 1),
                (e = $t(e, t, r)),
                e !== null ? e.sibling : null);
        ge(Pe, Pe.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Vd(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
            a !== null &&
            ((a.rendering = null),
              (a.tail = null),
              (a.lastEffect = null)),
            ge(Pe, Pe.current),
            o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), jd(e, t, r);
    }
    return $t(e, t, r);
  }
  var _d, Nl, zd, Id;
  (_d = function (e, t) {
    for (var r = t.child; r !== null;) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null;) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Nl = function () { }),
    (zd = function (e, t, r, o) {
      var a = e.memoizedProps;
      if (a !== o) {
        (e = t.stateNode), Tn(Lt.current);
        var c = null;
        switch (r) {
          case "input":
            (a = no(e, a)), (o = no(e, o)), (c = []);
            break;
          case "select":
            (a = W({}, a, { value: void 0 })),
              (o = W({}, o, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (a = so(e, a)), (o = so(e, o)), (c = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = Gi);
        }
        lo(r, o);
        var p;
        r = null;
        for (j in a)
          if (
            !o.hasOwnProperty(j) &&
            a.hasOwnProperty(j) &&
            a[j] != null
          )
            if (j === "style") {
              var x = a[j];
              for (p in x)
                x.hasOwnProperty(p) &&
                  (r || (r = {}), (r[p] = ""));
            } else
              j !== "dangerouslySetInnerHTML" &&
                j !== "children" &&
                j !== "suppressContentEditableWarning" &&
                j !== "suppressHydrationWarning" &&
                j !== "autoFocus" &&
                (u.hasOwnProperty(j)
                  ? c || (c = [])
                  : (c = c || []).push(j, null));
        for (j in o) {
          var S = o[j];
          if (
            ((x = a != null ? a[j] : void 0),
              o.hasOwnProperty(j) &&
              S !== x &&
              (S != null || x != null))
          )
            if (j === "style")
              if (x) {
                for (p in x)
                  !x.hasOwnProperty(p) ||
                    (S && S.hasOwnProperty(p)) ||
                    (r || (r = {}), (r[p] = ""));
                for (p in S)
                  S.hasOwnProperty(p) &&
                    x[p] !== S[p] &&
                    (r || (r = {}), (r[p] = S[p]));
              } else r || (c || (c = []), c.push(j, r)), (r = S);
            else
              j === "dangerouslySetInnerHTML"
                ? ((S = S ? S.__html : void 0),
                  (x = x ? x.__html : void 0),
                  S != null &&
                  x !== S &&
                  (c = c || []).push(j, S))
                : j === "children"
                  ? (typeof S != "string" &&
                    typeof S != "number") ||
                  (c = c || []).push(j, "" + S)
                  : j !== "suppressContentEditableWarning" &&
                  j !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(j)
                    ? (S != null &&
                      j === "onScroll" &&
                      ve("scroll", e),
                      c || x === S || (c = []))
                    : (c = c || []).push(j, S));
        }
        r && (c = c || []).push("style", r);
        var j = c;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }),
    (Id = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    });
  function Jr(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null;)
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var o = null; r !== null;)
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var a = e.child; a !== null;)
        (r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags & 14680064),
          (o |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null;)
        (r |= a.lanes | a.childLanes),
          (o |= a.subtreeFlags),
          (o |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = r), t;
  }
  function Hg(e, t, r) {
    var o = t.pendingProps;
    switch ((Xo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $e(t), null;
      case 1:
        return tt(t.type) && Xi(), $e(t), null;
      case 3:
        return (
          (o = t.stateNode),
          ir(),
          xe(et),
          xe(Ue),
          ul(),
          o.pendingContext &&
          ((o.context = o.pendingContext),
            (o.pendingContext = null)),
          (e === null || e.child === null) &&
          (ts(t)
            ? (t.flags |= 4)
            : e === null ||
            (e.memoizedState.isDehydrated &&
              (t.flags & 256) === 0) ||
            ((t.flags |= 1024),
              Tt !== null && (Ol(Tt), (Tt = null)))),
          Nl(e, t),
          $e(t),
          null
        );
      case 5:
        ll(t);
        var a = Tn(Gr.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          zd(e, t, r, o, a),
            e.ref !== t.ref &&
            ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return $e(t), null;
          }
          if (((e = Tn(Lt.current)), ts(t))) {
            (o = t.stateNode), (r = t.type);
            var c = t.memoizedProps;
            switch (
            ((o[Rt] = t),
              (o[Wr] = c),
              (e = (t.mode & 1) !== 0),
              r)
            ) {
              case "dialog":
                ve("cancel", o), ve("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", o);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Br.length; a++) ve(Br[a], o);
                break;
              case "source":
                ve("error", o);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", o), ve("load", o);
                break;
              case "details":
                ve("toggle", o);
                break;
              case "input":
                yu(o, c), ve("invalid", o);
                break;
              case "select":
                (o._wrapperState = {
                  wasMultiple: !!c.multiple,
                }),
                  ve("invalid", o);
                break;
              case "textarea":
                wu(o, c), ve("invalid", o);
            }
            lo(r, c), (a = null);
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var x = c[p];
                p === "children"
                  ? typeof x == "string"
                    ? o.textContent !== x &&
                    (c.suppressHydrationWarning !== !0 &&
                      qi(o.textContent, x, e),
                      (a = ["children", x]))
                    : typeof x == "number" &&
                    o.textContent !== "" + x &&
                    (c.suppressHydrationWarning !== !0 &&
                      qi(o.textContent, x, e),
                      (a = ["children", "" + x]))
                  : u.hasOwnProperty(p) &&
                  x != null &&
                  p === "onScroll" &&
                  ve("scroll", o);
              }
            switch (r) {
              case "input":
                Ci(o), xu(o, c, !0);
                break;
              case "textarea":
                Ci(o), ku(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" &&
                  (o.onclick = Gi);
            }
            (o = a),
              (t.updateQueue = o),
              o !== null && (t.flags |= 4);
          } else {
            (p = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Pu(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                    ? (e = p.createElement(r, { is: o.is }))
                    : ((e = p.createElement(r)),
                      r === "select" &&
                      ((p = e),
                        o.multiple
                          ? (p.multiple = !0)
                          : o.size && (p.size = o.size)))
                : (e = p.createElementNS(e, r)),
              (e[Rt] = t),
              (e[Wr] = o),
              _d(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = ao(r, o)), r)) {
                case "dialog":
                  ve("cancel", e), ve("close", e), (a = o);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ve("load", e), (a = o);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Br.length; a++)
                    ve(Br[a], e);
                  a = o;
                  break;
                case "source":
                  ve("error", e), (a = o);
                  break;
                case "img":
                case "image":
                case "link":
                  ve("error", e), ve("load", e), (a = o);
                  break;
                case "details":
                  ve("toggle", e), (a = o);
                  break;
                case "input":
                  yu(e, o), (a = no(e, o)), ve("invalid", e);
                  break;
                case "option":
                  a = o;
                  break;
                case "select":
                  (e._wrapperState = {
                    wasMultiple: !!o.multiple,
                  }),
                    (a = W({}, o, { value: void 0 })),
                    ve("invalid", e);
                  break;
                case "textarea":
                  wu(e, o), (a = so(e, o)), ve("invalid", e);
                  break;
                default:
                  a = o;
              }
              lo(r, a), (x = a);
              for (c in x)
                if (x.hasOwnProperty(c)) {
                  var S = x[c];
                  c === "style"
                    ? Eu(e, S)
                    : c === "dangerouslySetInnerHTML"
                      ? ((S = S ? S.__html : void 0),
                        S != null && Cu(e, S))
                      : c === "children"
                        ? typeof S == "string"
                          ? (r !== "textarea" || S !== "") &&
                          Sr(e, S)
                          : typeof S == "number" &&
                          Sr(e, "" + S)
                        : c !==
                        "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (u.hasOwnProperty(c)
                          ? S != null &&
                          c === "onScroll" &&
                          ve("scroll", e)
                          : S != null && H(e, c, S, p));
                }
              switch (r) {
                case "input":
                  Ci(e), xu(e, o, !1);
                  break;
                case "textarea":
                  Ci(e), ku(e);
                  break;
                case "option":
                  o.value != null &&
                    e.setAttribute(
                      "value",
                      "" + fe(o.value)
                    );
                  break;
                case "select":
                  (e.multiple = !!o.multiple),
                    (c = o.value),
                    c != null
                      ? On(e, !!o.multiple, c, !1)
                      : o.defaultValue != null &&
                      On(
                        e,
                        !!o.multiple,
                        o.defaultValue,
                        !0
                      );
                  break;
                default:
                  typeof a.onClick == "function" &&
                    (e.onclick = Gi);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return $e(t), null;
      case 6:
        if (e && t.stateNode != null) Id(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(s(166));
          if (((r = Tn(Gr.current)), Tn(Lt.current), ts(t))) {
            if (
              ((o = t.stateNode),
                (r = t.memoizedProps),
                (o[Rt] = t),
                (c = o.nodeValue !== r) && ((e = ut), e !== null))
            )
              switch (e.tag) {
                case 3:
                  qi(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !==
                    !0 &&
                    qi(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (o = (r.nodeType === 9
              ? r
              : r.ownerDocument
            ).createTextNode(o)),
              (o[Rt] = t),
              (t.stateNode = o);
        }
        return $e(t), null;
      case 13:
        if (
          (xe(Pe),
            (o = t.memoizedState),
            e === null ||
            (e.memoizedState !== null &&
              e.memoizedState.dehydrated !== null))
        ) {
          if (
            ke &&
            ct !== null &&
            (t.mode & 1) !== 0 &&
            (t.flags & 128) === 0
          )
            Bc(), er(), (t.flags |= 98560), (c = !1);
          else if (
            ((c = ts(t)), o !== null && o.dehydrated !== null)
          ) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (
                ((c = t.memoizedState),
                  (c = c !== null ? c.dehydrated : null),
                  !c)
              )
                throw Error(s(317));
              c[Rt] = t;
            } else
              er(),
                (t.flags & 128) === 0 &&
                (t.memoizedState = null),
                (t.flags |= 4);
            $e(t), (c = !1);
          } else Tt !== null && (Ol(Tt), (Tt = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
            o &&
            ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
              (e === null || (Pe.current & 1) !== 0
                ? _e === 0 && (_e = 3)
                : Ul())),
            t.updateQueue !== null && (t.flags |= 4),
            $e(t),
            null);
      case 4:
        return (
          ir(),
          Nl(e, t),
          e === null && br(t.stateNode.containerInfo),
          $e(t),
          null
        );
      case 10:
        return nl(t.type._context), $e(t), null;
      case 17:
        return tt(t.type) && Xi(), $e(t), null;
      case 19:
        if ((xe(Pe), (c = t.memoizedState), c === null))
          return $e(t), null;
        if (
          ((o = (t.flags & 128) !== 0), (p = c.rendering), p === null)
        )
          if (o) Jr(c, !1);
          else {
            if (_e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((p = ls(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                    Jr(c, !1),
                    o = p.updateQueue,
                    o !== null &&
                    ((t.updateQueue = o),
                      (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    o = r,
                    r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = o),
                      (c.flags &= 14680066),
                      (p = c.alternate),
                      p === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes =
                          p.childLanes),
                          (c.lanes = p.lanes),
                          (c.child = p.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps =
                            p.memoizedProps),
                          (c.memoizedState =
                            p.memoizedState),
                          (c.updateQueue =
                            p.updateQueue),
                          (c.type = p.type),
                          (e = p.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                lanes: e.lanes,
                                firstContext:
                                  e.firstContext,
                              })),
                      (r = r.sibling);
                  return (
                    ge(Pe, (Pe.current & 1) | 2), t.child
                  );
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Ae() > ar &&
              ((t.flags |= 128),
                (o = !0),
                Jr(c, !1),
                (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = ls(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                  (o = !0),
                  (r = e.updateQueue),
                  r !== null &&
                  ((t.updateQueue = r), (t.flags |= 4)),
                  Jr(c, !0),
                  c.tail === null &&
                  c.tailMode === "hidden" &&
                  !p.alternate &&
                  !ke)
              )
                return $e(t), null;
            } else
              2 * Ae() - c.renderingStartTime > ar &&
                r !== 1073741824 &&
                ((t.flags |= 128),
                  (o = !0),
                  Jr(c, !1),
                  (t.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((r = c.last),
              r !== null ? (r.sibling = p) : (t.child = p),
              (c.last = p));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Ae()),
            (t.sibling = null),
            (r = Pe.current),
            ge(Pe, o ? (r & 1) | 2 : r & 1),
            t)
          : ($e(t), null);
      case 22:
      case 23:
        return (
          bl(),
          (o = t.memoizedState !== null),
          e !== null &&
          (e.memoizedState !== null) !== o &&
          (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (dt & 1073741824) !== 0 &&
            ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : $e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Kg(e, t) {
    switch ((Xo(t), t.tag)) {
      case 1:
        return (
          tt(t.type) && Xi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ir(),
          xe(et),
          xe(Ue),
          ul(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return ll(t), null;
      case 13:
        if (
          (xe(Pe),
            (e = t.memoizedState),
            e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          er();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return xe(Pe), null;
      case 4:
        return ir(), null;
      case 10:
        return nl(t.type._context), null;
      case 22:
      case 23:
        return bl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gs = !1,
    He = !1,
    qg = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;
  function or(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          Ne(e, t, o);
        }
      else r.current = null;
  }
  function Ml(e, t, r) {
    try {
      r();
    } catch (o) {
      Ne(e, t, o);
    }
  }
  var Fd = !1;
  function Gg(e, t) {
    if (((bo = zi), (e = gc()), Lo(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var a = o.anchorOffset,
              c = o.focusNode;
            o = o.focusOffset;
            try {
              r.nodeType, c.nodeType;
            } catch {
              r = null;
              break e;
            }
            var p = 0,
              x = -1,
              S = -1,
              j = 0,
              R = 0,
              V = e,
              A = null;
            t: for (; ;) {
              for (
                var b;
                V !== r ||
                (a !== 0 && V.nodeType !== 3) ||
                (x = p + a),
                V !== c ||
                (o !== 0 && V.nodeType !== 3) ||
                (S = p + o),
                V.nodeType === 3 &&
                (p += V.nodeValue.length),
                (b = V.firstChild) !== null;

              )
                (A = V), (V = b);
              for (; ;) {
                if (V === e) break t;
                if (
                  (A === r && ++j === a && (x = p),
                    A === c && ++R === o && (S = p),
                    (b = V.nextSibling) !== null)
                )
                  break;
                (V = A), (A = V.parentNode);
              }
              V = b;
            }
            r = x === -1 || S === -1 ? null : { start: x, end: S };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Uo = { focusedElem: e, selectionRange: r }, zi = !1, $ = t;
      $ !== null;

    )
      if (
        ((t = $),
          (e = t.child),
          (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), ($ = e);
      else
        for (; $ !== null;) {
          t = $;
          try {
            var K = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var q = K.memoizedProps,
                      De = K.memoizedState,
                      T = t.stateNode,
                      k = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type
                          ? q
                          : Et(t.type, q),
                        De
                      );
                    T.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = "")
                    : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (z) {
            Ne(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), ($ = e);
            break;
          }
          $ = t.return;
        }
    return (K = Fd), (Fd = !1), K;
  }
  function ei(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var a = (o = o.next);
      do {
        if ((a.tag & e) === e) {
          var c = a.destroy;
          (a.destroy = void 0), c !== void 0 && Ml(t, r, c);
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function ys(e, t) {
    if (
      ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var o = r.create;
          r.destroy = o();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Al(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Od(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Od(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
      ((t = e.stateNode),
        t !== null &&
        (delete t[Rt],
          delete t[Wr],
          delete t[Ko],
          delete t[Ag],
          delete t[Dg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Bd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function bd(e) {
    e: for (; ;) {
      for (; e.sibling === null;) {
        if (e.return === null || Bd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Dl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Gi));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Dl(e, t, r), e = e.sibling; e !== null;)
        Dl(e, t, r), (e = e.sibling);
  }
  function Rl(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Rl(e, t, r), e = e.sibling; e !== null;)
        Rl(e, t, r), (e = e.sibling);
  }
  var Oe = null,
    jt = !1;
  function an(e, t, r) {
    for (r = r.child; r !== null;) Ud(e, t, r), (r = r.sibling);
  }
  function Ud(e, t, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Ai, r);
      } catch { }
    switch (r.tag) {
      case 5:
        He || or(r, t);
      case 6:
        var o = Oe,
          a = jt;
        (Oe = null),
          an(e, t, r),
          (Oe = o),
          (jt = a),
          Oe !== null &&
          (jt
            ? ((e = Oe),
              (r = r.stateNode),
              e.nodeType === 8
                ? e.parentNode.removeChild(r)
                : e.removeChild(r))
            : Oe.removeChild(r.stateNode));
        break;
      case 18:
        Oe !== null &&
          (jt
            ? ((e = Oe),
              (r = r.stateNode),
              e.nodeType === 8
                ? Ho(e.parentNode, r)
                : e.nodeType === 1 && Ho(e, r),
              Rr(e))
            : Ho(Oe, r.stateNode));
        break;
      case 4:
        (o = Oe),
          (a = jt),
          (Oe = r.stateNode.containerInfo),
          (jt = !0),
          an(e, t, r),
          (Oe = o),
          (jt = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !He &&
          ((o = r.updateQueue),
            o !== null && ((o = o.lastEffect), o !== null))
        ) {
          a = o = o.next;
          do {
            var c = a,
              p = c.destroy;
            (c = c.tag),
              p !== void 0 &&
              ((c & 2) !== 0 || (c & 4) !== 0) &&
              Ml(r, t, p),
              (a = a.next);
          } while (a !== o);
        }
        an(e, t, r);
        break;
      case 1:
        if (
          !He &&
          (or(r, t),
            (o = r.stateNode),
            typeof o.componentWillUnmount == "function")
        )
          try {
            (o.props = r.memoizedProps),
              (o.state = r.memoizedState),
              o.componentWillUnmount();
          } catch (x) {
            Ne(r, t, x);
          }
        an(e, t, r);
        break;
      case 21:
        an(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((He = (o = He) || r.memoizedState !== null),
            an(e, t, r),
            (He = o))
          : an(e, t, r);
        break;
      default:
        an(e, t, r);
    }
  }
  function Wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new qg()),
        t.forEach(function (o) {
          var a = r0.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(a, a));
        });
    }
  }
  function Nt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var a = r[o];
        try {
          var c = e,
            p = t,
            x = p;
          e: for (; x !== null;) {
            switch (x.tag) {
              case 5:
                (Oe = x.stateNode), (jt = !1);
                break e;
              case 3:
                (Oe = x.stateNode.containerInfo), (jt = !0);
                break e;
              case 4:
                (Oe = x.stateNode.containerInfo), (jt = !0);
                break e;
            }
            x = x.return;
          }
          if (Oe === null) throw Error(s(160));
          Ud(c, p, a), (Oe = null), (jt = !1);
          var S = a.alternate;
          S !== null && (S.return = null), (a.return = null);
        } catch (j) {
          Ne(a, t, j);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) $d(t, e), (t = t.sibling);
  }
  function $d(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Nt(t, e), _t(e), o & 4)) {
          try {
            ei(3, e, e.return), ys(3, e);
          } catch (q) {
            Ne(e, e.return, q);
          }
          try {
            ei(5, e, e.return);
          } catch (q) {
            Ne(e, e.return, q);
          }
        }
        break;
      case 1:
        Nt(t, e), _t(e), o & 512 && r !== null && or(r, r.return);
        break;
      case 5:
        if (
          (Nt(t, e),
            _t(e),
            o & 512 && r !== null && or(r, r.return),
            e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            Sr(a, "");
          } catch (q) {
            Ne(e, e.return, q);
          }
        }
        if (o & 4 && ((a = e.stateNode), a != null)) {
          var c = e.memoizedProps,
            p = r !== null ? r.memoizedProps : c,
            x = e.type,
            S = e.updateQueue;
          if (((e.updateQueue = null), S !== null))
            try {
              x === "input" &&
                c.type === "radio" &&
                c.name != null &&
                vu(a, c),
                ao(x, p);
              var j = ao(x, c);
              for (p = 0; p < S.length; p += 2) {
                var R = S[p],
                  V = S[p + 1];
                R === "style"
                  ? Eu(a, V)
                  : R === "dangerouslySetInnerHTML"
                    ? Cu(a, V)
                    : R === "children"
                      ? Sr(a, V)
                      : H(a, R, V, j);
              }
              switch (x) {
                case "input":
                  ro(a, c);
                  break;
                case "textarea":
                  Su(a, c);
                  break;
                case "select":
                  var A = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!c.multiple;
                  var b = c.value;
                  b != null
                    ? On(a, !!c.multiple, b, !1)
                    : A !== !!c.multiple &&
                    (c.defaultValue != null
                      ? On(
                        a,
                        !!c.multiple,
                        c.defaultValue,
                        !0
                      )
                      : On(
                        a,
                        !!c.multiple,
                        c.multiple ? [] : "",
                        !1
                      ));
              }
              a[Wr] = c;
            } catch (q) {
              Ne(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((Nt(t, e), _t(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (a = e.stateNode), (c = e.memoizedProps);
          try {
            a.nodeValue = c;
          } catch (q) {
            Ne(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          (Nt(t, e),
            _t(e),
            o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Rr(t.containerInfo);
          } catch (q) {
            Ne(e, e.return, q);
          }
        break;
      case 4:
        Nt(t, e), _t(e);
        break;
      case 13:
        Nt(t, e),
          _t(e),
          (a = e.child),
          a.flags & 8192 &&
          ((c = a.memoizedState !== null),
            (a.stateNode.isHidden = c),
            !c ||
            (a.alternate !== null &&
              a.alternate.memoizedState !== null) ||
            (_l = Ae())),
          o & 4 && Wd(e);
        break;
      case 22:
        if (
          ((R = r !== null && r.memoizedState !== null),
            e.mode & 1
              ? ((He = (j = He) || R), Nt(t, e), (He = j))
              : Nt(t, e),
            _t(e),
            o & 8192)
        ) {
          if (
            ((j = e.memoizedState !== null),
              (e.stateNode.isHidden = j) && !R && (e.mode & 1) !== 0)
          )
            for ($ = e, R = e.child; R !== null;) {
              for (V = $ = R; $ !== null;) {
                switch (((A = $), (b = A.child), A.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ei(4, A, A.return);
                    break;
                  case 1:
                    or(A, A.return);
                    var K = A.stateNode;
                    if (
                      typeof K.componentWillUnmount ==
                      "function"
                    ) {
                      (o = A), (r = A.return);
                      try {
                        (t = o),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount();
                      } catch (q) {
                        Ne(o, r, q);
                      }
                    }
                    break;
                  case 5:
                    or(A, A.return);
                    break;
                  case 22:
                    if (A.memoizedState !== null) {
                      qd(V);
                      continue;
                    }
                }
                b !== null ? ((b.return = A), ($ = b)) : qd(V);
              }
              R = R.sibling;
            }
          e: for (R = null, V = e; ;) {
            if (V.tag === 5) {
              if (R === null) {
                R = V;
                try {
                  (a = V.stateNode),
                    j
                      ? ((c = a.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty(
                            "display",
                            "none",
                            "important"
                          )
                          : (c.display = "none"))
                      : ((x = V.stateNode),
                        (S = V.memoizedProps.style),
                        (p =
                          S != null &&
                            S.hasOwnProperty("display")
                            ? S.display
                            : null),
                        (x.style.display = Tu(
                          "display",
                          p
                        )));
                } catch (q) {
                  Ne(e, e.return, q);
                }
              }
            } else if (V.tag === 6) {
              if (R === null)
                try {
                  V.stateNode.nodeValue = j
                    ? ""
                    : V.memoizedProps;
                } catch (q) {
                  Ne(e, e.return, q);
                }
            } else if (
              ((V.tag !== 22 && V.tag !== 23) ||
                V.memoizedState === null ||
                V === e) &&
              V.child !== null
            ) {
              (V.child.return = V), (V = V.child);
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null;) {
              if (V.return === null || V.return === e) break e;
              R === V && (R = null), (V = V.return);
            }
            R === V && (R = null),
              (V.sibling.return = V.return),
              (V = V.sibling);
          }
        }
        break;
      case 19:
        Nt(t, e), _t(e), o & 4 && Wd(e);
        break;
      case 21:
        break;
      default:
        Nt(t, e), _t(e);
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null;) {
            if (Bd(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var a = o.stateNode;
            o.flags & 32 && (Sr(a, ""), (o.flags &= -33));
            var c = bd(e);
            Rl(e, c, a);
            break;
          case 3:
          case 4:
            var p = o.stateNode.containerInfo,
              x = bd(e);
            Dl(e, x, p);
            break;
          default:
            throw Error(s(161));
        }
      } catch (S) {
        Ne(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qg(e, t, r) {
    ($ = e), Hd(e);
  }
  function Hd(e, t, r) {
    for (var o = (e.mode & 1) !== 0; $ !== null;) {
      var a = $,
        c = a.child;
      if (a.tag === 22 && o) {
        var p = a.memoizedState !== null || gs;
        if (!p) {
          var x = a.alternate,
            S = (x !== null && x.memoizedState !== null) || He;
          x = gs;
          var j = He;
          if (((gs = p), (He = S) && !j))
            for ($ = a; $ !== null;)
              (p = $),
                (S = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? Gd(a)
                  : S !== null
                    ? ((S.return = p), ($ = S))
                    : Gd(a);
          for (; c !== null;) ($ = c), Hd(c), (c = c.sibling);
          ($ = a), (gs = x), (He = j);
        }
        Kd(e);
      } else
        (a.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = a), ($ = c))
          : Kd(e);
    }
  }
  function Kd(e) {
    for (; $ !== null;) {
      var t = $;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                He || ys(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !He)
                  if (r === null) o.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Et(t.type, r.memoizedProps);
                    o.componentDidUpdate(
                      a,
                      r.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && qc(t, c, o);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  qc(t, p, r);
                }
                break;
              case 5:
                var x = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = x;
                  var S = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      S.autoFocus && r.focus();
                      break;
                    case "img":
                      S.src && (r.src = S.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var j = t.alternate;
                  if (j !== null) {
                    var R = j.memoizedState;
                    if (R !== null) {
                      var V = R.dehydrated;
                      V !== null && Rr(V);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          He || (t.flags & 512 && Al(t));
        } catch (A) {
          Ne(t, t.return, A);
        }
      }
      if (t === e) {
        $ = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), ($ = r);
        break;
      }
      $ = t.return;
    }
  }
  function qd(e) {
    for (; $ !== null;) {
      var t = $;
      if (t === e) {
        $ = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), ($ = r);
        break;
      }
      $ = t.return;
    }
  }
  function Gd(e) {
    for (; $ !== null;) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ys(4, t);
            } catch (S) {
              Ne(t, r, S);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var a = t.return;
              try {
                o.componentDidMount();
              } catch (S) {
                Ne(t, a, S);
              }
            }
            var c = t.return;
            try {
              Al(t);
            } catch (S) {
              Ne(t, c, S);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Al(t);
            } catch (S) {
              Ne(t, p, S);
            }
        }
      } catch (S) {
        Ne(t, t.return, S);
      }
      if (t === e) {
        $ = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        (x.return = t.return), ($ = x);
        break;
      }
      $ = t.return;
    }
  }
  var Xg = Math.ceil,
    vs = Q.ReactCurrentDispatcher,
    Ll = Q.ReactCurrentOwner,
    vt = Q.ReactCurrentBatchConfig,
    ae = 0,
    Ie = null,
    Le = null,
    Be = 0,
    dt = 0,
    lr = nn(0),
    _e = 0,
    ti = null,
    jn = 0,
    xs = 0,
    Vl = 0,
    ni = null,
    rt = null,
    _l = 0,
    ar = 1 / 0,
    Ht = null,
    ws = !1,
    zl = null,
    un = null,
    Ss = !1,
    cn = null,
    ks = 0,
    ri = 0,
    Il = null,
    Ps = -1,
    Cs = 0;
  function Ye() {
    return (ae & 6) !== 0 ? Ae() : Ps !== -1 ? Ps : (Ps = Ae());
  }
  function dn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ae & 2) !== 0 && Be !== 0
        ? Be & -Be
        : Lg.transition !== null
          ? (Cs === 0 && (Cs = bu()), Cs)
          : ((e = pe),
            e !== 0 ||
            ((e = window.event), (e = e === void 0 ? 16 : Xu(e.type))),
            e);
  }
  function Mt(e, t, r, o) {
    if (50 < ri) throw ((ri = 0), (Il = null), Error(s(185)));
    jr(e, r, o),
      ((ae & 2) === 0 || e !== Ie) &&
      (e === Ie &&
        ((ae & 2) === 0 && (xs |= r), _e === 4 && fn(e, Be)),
        it(e, o),
        r === 1 &&
        ae === 0 &&
        (t.mode & 1) === 0 &&
        ((ar = Ae() + 500), Zi && sn()));
  }
  function it(e, t) {
    var r = e.callbackNode;
    Lm(e, t);
    var o = Li(e, e === Ie ? Be : 0);
    if (o === 0)
      r !== null && Fu(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Fu(r), t === 1))
        e.tag === 0 ? Rg(Xd.bind(null, e)) : _c(Xd.bind(null, e)),
          Ng(function () {
            (ae & 6) === 0 && sn();
          }),
          (r = null);
      else {
        switch (Uu(o)) {
          case 1:
            r = go;
            break;
          case 4:
            r = Ou;
            break;
          case 16:
            r = Mi;
            break;
          case 536870912:
            r = Bu;
            break;
          default:
            r = Mi;
        }
        r = sf(r, Qd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Qd(e, t) {
    if (((Ps = -1), (Cs = 0), (ae & 6) !== 0)) throw Error(s(327));
    var r = e.callbackNode;
    if (ur() && e.callbackNode !== r) return null;
    var o = Li(e, e === Ie ? Be : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ts(e, o);
    else {
      t = o;
      var a = ae;
      ae |= 2;
      var c = Zd();
      (Ie !== e || Be !== t) &&
        ((Ht = null), (ar = Ae() + 500), Mn(e, t));
      do
        try {
          Jg();
          break;
        } catch (x) {
          Yd(e, x);
        }
      while (!0);
      tl(),
        (vs.current = c),
        (ae = a),
        Le !== null ? (t = 0) : ((Ie = null), (Be = 0), (t = _e));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = yo(e)), a !== 0 && ((o = a), (t = Fl(e, a)))),
          t === 1)
      )
        throw ((r = ti), Mn(e, 0), fn(e, o), it(e, Ae()), r);
      if (t === 6) fn(e, o);
      else {
        if (
          ((a = e.current.alternate),
            (o & 30) === 0 &&
            !Yg(a) &&
            ((t = Ts(e, o)),
              t === 2 &&
              ((c = yo(e)), c !== 0 && ((o = c), (t = Fl(e, c)))),
              t === 1))
        )
          throw ((r = ti), Mn(e, 0), fn(e, o), it(e, Ae()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            An(e, rt, Ht);
            break;
          case 3:
            if (
              (fn(e, o),
                (o & 130023424) === o &&
                ((t = _l + 500 - Ae()), 10 < t))
            ) {
              if (Li(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & o) !== o)) {
                Ye(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = $o(An.bind(null, e, rt, Ht), t);
              break;
            }
            An(e, rt, Ht);
            break;
          case 4:
            if ((fn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, a = -1; 0 < o;) {
              var p = 31 - Pt(o);
              (c = 1 << p),
                (p = t[p]),
                p > a && (a = p),
                (o &= ~c);
            }
            if (
              ((o = a),
                (o = Ae() - o),
                (o =
                  (120 > o
                    ? 120
                    : 480 > o
                      ? 480
                      : 1080 > o
                        ? 1080
                        : 1920 > o
                          ? 1920
                          : 3e3 > o
                            ? 3e3
                            : 4320 > o
                              ? 4320
                              : 1960 * Xg(o / 1960)) - o),
                10 < o)
            ) {
              e.timeoutHandle = $o(An.bind(null, e, rt, Ht), o);
              break;
            }
            An(e, rt, Ht);
            break;
          case 5:
            An(e, rt, Ht);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return it(e, Ae()), e.callbackNode === r ? Qd.bind(null, e) : null;
  }
  function Fl(e, t) {
    var r = ni;
    return (
      e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
      (e = Ts(e, t)),
      e !== 2 && ((t = rt), (rt = r), t !== null && Ol(t)),
      e
    );
  }
  function Ol(e) {
    rt === null ? (rt = e) : rt.push.apply(rt, e);
  }
  function Yg(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var a = r[o],
              c = a.getSnapshot;
            a = a.value;
            try {
              if (!Ct(c(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function fn(e, t) {
    for (
      t &= ~Vl,
      t &= ~xs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Pt(t),
        o = 1 << r;
      (e[r] = -1), (t &= ~o);
    }
  }
  function Xd(e) {
    if ((ae & 6) !== 0) throw Error(s(327));
    ur();
    var t = Li(e, 0);
    if ((t & 1) === 0) return it(e, Ae()), null;
    var r = Ts(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = yo(e);
      o !== 0 && ((t = o), (r = Fl(e, o)));
    }
    if (r === 1) throw ((r = ti), Mn(e, 0), fn(e, t), it(e, Ae()), r);
    if (r === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      An(e, rt, Ht),
      it(e, Ae()),
      null
    );
  }
  function Bl(e, t) {
    var r = ae;
    ae |= 1;
    try {
      return e(t);
    } finally {
      (ae = r), ae === 0 && ((ar = Ae() + 500), Zi && sn());
    }
  }
  function Nn(e) {
    cn !== null && cn.tag === 0 && (ae & 6) === 0 && ur();
    var t = ae;
    ae |= 1;
    var r = vt.transition,
      o = pe;
    try {
      if (((vt.transition = null), (pe = 1), e)) return e();
    } finally {
      (pe = o), (vt.transition = r), (ae = t), (ae & 6) === 0 && sn();
    }
  }
  function bl() {
    (dt = lr.current), xe(lr);
  }
  function Mn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), jg(r)), Le !== null))
      for (r = Le.return; r !== null;) {
        var o = r;
        switch ((Xo(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && Xi();
            break;
          case 3:
            ir(), xe(et), xe(Ue), ul();
            break;
          case 5:
            ll(o);
            break;
          case 4:
            ir();
            break;
          case 13:
            xe(Pe);
            break;
          case 19:
            xe(Pe);
            break;
          case 10:
            nl(o.type._context);
            break;
          case 22:
          case 23:
            bl();
        }
        r = r.return;
      }
    if (
      ((Ie = e),
        (Le = e = pn(e.current, null)),
        (Be = dt = t),
        (_e = 0),
        (ti = null),
        (Vl = xs = jn = 0),
        (rt = ni = null),
        Cn !== null)
    ) {
      for (t = 0; t < Cn.length; t++)
        if (((r = Cn[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var a = o.next,
            c = r.pending;
          if (c !== null) {
            var p = c.next;
            (c.next = a), (o.next = p);
          }
          r.pending = o;
        }
      Cn = null;
    }
    return e;
  }
  function Yd(e, t) {
    do {
      var r = Le;
      try {
        if ((tl(), (as.current = fs), us)) {
          for (var o = Ce.memoizedState; o !== null;) {
            var a = o.queue;
            a !== null && (a.pending = null), (o = o.next);
          }
          us = !1;
        }
        if (
          ((En = 0),
            (ze = Ve = Ce = null),
            (Qr = !1),
            (Xr = 0),
            (Ll.current = null),
            r === null || r.return === null)
        ) {
          (_e = 1), (ti = t), (Le = null);
          break;
        }
        e: {
          var c = e,
            p = r.return,
            x = r,
            S = t;
          if (
            ((t = Be),
              (x.flags |= 32768),
              S !== null &&
              typeof S == "object" &&
              typeof S.then == "function")
          ) {
            var j = S,
              R = x,
              V = R.tag;
            if (
              (R.mode & 1) === 0 &&
              (V === 0 || V === 11 || V === 15)
            ) {
              var A = R.alternate;
              A
                ? ((R.updateQueue = A.updateQueue),
                  (R.memoizedState = A.memoizedState),
                  (R.lanes = A.lanes))
                : ((R.updateQueue = null),
                  (R.memoizedState = null));
            }
            var b = kd(p);
            if (b !== null) {
              (b.flags &= -257),
                Pd(b, p, x, c, t),
                b.mode & 1 && Sd(c, j, t),
                (t = b),
                (S = j);
              var K = t.updateQueue;
              if (K === null) {
                var q = new Set();
                q.add(S), (t.updateQueue = q);
              } else K.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Sd(c, j, t), Ul();
                break e;
              }
              S = Error(s(426));
            }
          } else if (ke && x.mode & 1) {
            var De = kd(p);
            if (De !== null) {
              (De.flags & 65536) === 0 && (De.flags |= 256),
                Pd(De, p, x, c, t),
                Jo(sr(S, x));
              break e;
            }
          }
          (c = S = sr(S, x)),
            _e !== 4 && (_e = 2),
            ni === null ? (ni = [c]) : ni.push(c),
            (c = p);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var T = xd(c, S, t);
                Kc(c, T);
                break e;
              case 1:
                x = S;
                var k = c.type,
                  E = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError ==
                    "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch ==
                      "function" &&
                      (un === null || !un.has(E))))
                ) {
                  (c.flags |= 65536),
                    (t &= -t),
                    (c.lanes |= t);
                  var z = wd(c, x, t);
                  Kc(c, z);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        ef(r);
      } catch (G) {
        (t = G), Le === r && r !== null && (Le = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zd() {
    var e = vs.current;
    return (vs.current = fs), e === null ? fs : e;
  }
  function Ul() {
    (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
      Ie === null ||
      ((jn & 268435455) === 0 && (xs & 268435455) === 0) ||
      fn(Ie, Be);
  }
  function Ts(e, t) {
    var r = ae;
    ae |= 2;
    var o = Zd();
    (Ie !== e || Be !== t) && ((Ht = null), Mn(e, t));
    do
      try {
        Zg();
        break;
      } catch (a) {
        Yd(e, a);
      }
    while (!0);
    if ((tl(), (ae = r), (vs.current = o), Le !== null))
      throw Error(s(261));
    return (Ie = null), (Be = 0), _e;
  }
  function Zg() {
    for (; Le !== null;) Jd(Le);
  }
  function Jg() {
    for (; Le !== null && !Cm();) Jd(Le);
  }
  function Jd(e) {
    var t = rf(e.alternate, e, dt);
    (e.memoizedProps = e.pendingProps),
      t === null ? ef(e) : (Le = t),
      (Ll.current = null);
  }
  function ef(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Hg(r, t, dt)), r !== null)) {
          Le = r;
          return;
        }
      } else {
        if (((r = Kg(r, t)), r !== null)) {
          (r.flags &= 32767), (Le = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768),
            (e.subtreeFlags = 0),
            (e.deletions = null);
        else {
          (_e = 6), (Le = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function An(e, t, r) {
    var o = pe,
      a = vt.transition;
    try {
      (vt.transition = null), (pe = 1), e0(e, t, r, o);
    } finally {
      (vt.transition = a), (pe = o);
    }
    return null;
  }
  function e0(e, t, r, o) {
    do ur();
    while (cn !== null);
    if ((ae & 6) !== 0) throw Error(s(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = r.lanes | r.childLanes;
    if (
      (Vm(e, c),
        e === Ie && ((Le = Ie = null), (Be = 0)),
        ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Ss ||
        ((Ss = !0),
          sf(Mi, function () {
            return ur(), null;
          })),
        (c = (r.flags & 15990) !== 0),
        (r.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = vt.transition), (vt.transition = null);
      var p = pe;
      pe = 1;
      var x = ae;
      (ae |= 4),
        (Ll.current = null),
        Gg(e, r),
        $d(r, e),
        wg(Uo),
        (zi = !!bo),
        (Uo = bo = null),
        (e.current = r),
        Qg(r),
        Tm(),
        (ae = x),
        (pe = p),
        (vt.transition = c);
    } else e.current = r;
    if (
      (Ss && ((Ss = !1), (cn = e), (ks = a)),
        (c = e.pendingLanes),
        c === 0 && (un = null),
        Nm(r.stateNode),
        it(e, Ae()),
        t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]),
          o(a.value, { componentStack: a.stack, digest: a.digest });
    if (ws) throw ((ws = !1), (e = zl), (zl = null), e);
    return (
      (ks & 1) !== 0 && e.tag !== 0 && ur(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Il ? ri++ : ((ri = 0), (Il = e))) : (ri = 0),
      sn(),
      null
    );
  }
  function ur() {
    if (cn !== null) {
      var e = Uu(ks),
        t = vt.transition,
        r = pe;
      try {
        if (
          ((vt.transition = null),
            (pe = 16 > e ? 16 : e),
            cn === null)
        )
          var o = !1;
        else {
          if (((e = cn), (cn = null), (ks = 0), (ae & 6) !== 0))
            throw Error(s(331));
          var a = ae;
          for (ae |= 4, $ = e.current; $ !== null;) {
            var c = $,
              p = c.child;
            if (($.flags & 16) !== 0) {
              var x = c.deletions;
              if (x !== null) {
                for (var S = 0; S < x.length; S++) {
                  var j = x[S];
                  for ($ = j; $ !== null;) {
                    var R = $;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ei(8, R, c);
                    }
                    var V = R.child;
                    if (V !== null) (V.return = R), ($ = V);
                    else
                      for (; $ !== null;) {
                        R = $;
                        var A = R.sibling,
                          b = R.return;
                        if ((Od(R), R === j)) {
                          $ = null;
                          break;
                        }
                        if (A !== null) {
                          (A.return = b), ($ = A);
                          break;
                        }
                        $ = b;
                      }
                  }
                }
                var K = c.alternate;
                if (K !== null) {
                  var q = K.child;
                  if (q !== null) {
                    K.child = null;
                    do {
                      var De = q.sibling;
                      (q.sibling = null), (q = De);
                    } while (q !== null);
                  }
                }
                $ = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && p !== null)
              (p.return = c), ($ = p);
            else
              e: for (; $ !== null;) {
                if (((c = $), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(9, c, c.return);
                  }
                var T = c.sibling;
                if (T !== null) {
                  (T.return = c.return), ($ = T);
                  break e;
                }
                $ = c.return;
              }
          }
          var k = e.current;
          for ($ = k; $ !== null;) {
            p = $;
            var E = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && E !== null)
              (E.return = p), ($ = E);
            else
              e: for (p = k; $ !== null;) {
                if (((x = $), (x.flags & 2048) !== 0))
                  try {
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(9, x);
                    }
                  } catch (G) {
                    Ne(x, x.return, G);
                  }
                if (x === p) {
                  $ = null;
                  break e;
                }
                var z = x.sibling;
                if (z !== null) {
                  (z.return = x.return), ($ = z);
                  break e;
                }
                $ = x.return;
              }
          }
          if (
            ((ae = a),
              sn(),
              Dt && typeof Dt.onPostCommitFiberRoot == "function")
          )
            try {
              Dt.onPostCommitFiberRoot(Ai, e);
            } catch { }
          o = !0;
        }
        return o;
      } finally {
        (pe = r), (vt.transition = t);
      }
    }
    return !1;
  }
  function tf(e, t, r) {
    (t = sr(r, t)),
      (t = xd(e, t, 1)),
      (e = ln(e, t, 1)),
      (t = Ye()),
      e !== null && (jr(e, 1, t), it(e, t));
  }
  function Ne(e, t, r) {
    if (e.tag === 3) tf(e, e, r);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          tf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (un === null || !un.has(o)))
          ) {
            (e = sr(r, e)),
              (e = wd(t, e, 1)),
              (t = ln(t, e, 1)),
              (e = Ye()),
              t !== null && (jr(t, 1, e), it(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function t0(e, t, r) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Ie === e &&
      (Be & r) === r &&
      (_e === 4 ||
        (_e === 3 && (Be & 130023424) === Be && 500 > Ae() - _l)
        ? Mn(e, 0)
        : (Vl |= r)),
      it(e, t);
  }
  function nf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ri),
          (Ri <<= 1),
          (Ri & 130023424) === 0 && (Ri = 4194304)));
    var r = Ye();
    (e = Ut(e, t)), e !== null && (jr(e, t, r), it(e, r));
  }
  function n0(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), nf(e, r);
  }
  function r0(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(t), nf(e, r);
  }
  var rf;
  rf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (nt = !1), $g(e, t, r);
        nt = (e.flags & 131072) !== 0;
      }
    else (nt = !1), ke && (t.flags & 1048576) !== 0 && zc(t, es, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        ms(e, t), (e = t.pendingProps);
        var a = Yn(t, Ue.current);
        rr(t, r), (a = fl(null, t, o, e, a, r));
        var c = pl();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
            a !== null &&
            typeof a.render == "function" &&
            a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              tt(o) ? ((c = !0), Yi(t)) : (c = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0
                  ? a.state
                  : null),
              sl(t),
              (a.updater = ps),
              (t.stateNode = a),
              (a._reactInternals = t),
              xl(t, o, e, r),
              (t = Pl(null, t, o, !0, c, r)))
            : ((t.tag = 0),
              ke && c && Qo(t),
              Xe(null, t, a, r),
              (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
          (ms(e, t),
            (e = t.pendingProps),
            (a = o._init),
            (o = a(o._payload)),
            (t.type = o),
            (a = t.tag = s0(o)),
            (e = Et(o, e)),
            a)
          ) {
            case 0:
              t = kl(null, t, o, e, r);
              break e;
            case 1:
              t = Md(null, t, o, e, r);
              break e;
            case 11:
              t = Cd(null, t, o, e, r);
              break e;
            case 14:
              t = Td(null, t, o, Et(o.type, e), r);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          kl(e, t, o, a, r)
        );
      case 1:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          Md(e, t, o, a, r)
        );
      case 3:
        e: {
          if ((Ad(t), e === null)) throw Error(s(387));
          (o = t.pendingProps),
            (c = t.memoizedState),
            (a = c.element),
            Hc(e, t),
            os(t, o, null, r);
          var p = t.memoizedState;
          if (((o = p.element), c.isDehydrated))
            if (
              ((c = {
                element: o,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries:
                  p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
                (t.updateQueue.baseState = c),
                (t.memoizedState = c),
                t.flags & 256)
            ) {
              (a = sr(Error(s(423)), t)), (t = Dd(e, t, o, r, a));
              break e;
            } else if (o !== a) {
              (a = sr(Error(s(424)), t)), (t = Dd(e, t, o, r, a));
              break e;
            } else
              for (
                ct = tn(t.stateNode.containerInfo.firstChild),
                ut = t,
                ke = !0,
                Tt = null,
                r = Wc(t, null, o, r),
                t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096),
                  (r = r.sibling);
          else {
            if ((er(), o === a)) {
              t = $t(e, t, r);
              break e;
            }
            Xe(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Gc(t),
          e === null && Zo(t),
          (o = t.type),
          (a = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = a.children),
          Wo(o, a)
            ? (p = null)
            : c !== null && Wo(o, c) && (t.flags |= 32),
          Nd(e, t),
          Xe(e, t, p, r),
          t.child
        );
      case 6:
        return e === null && Zo(t), null;
      case 13:
        return Rd(e, t, r);
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = tr(t, null, o, r)) : Xe(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          Cd(e, t, o, a, r)
        );
      case 7:
        return Xe(e, t, t.pendingProps, r), t.child;
      case 8:
        return Xe(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Xe(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((o = t.type._context),
              (a = t.pendingProps),
              (c = t.memoizedProps),
              (p = a.value),
              ge(rs, o._currentValue),
              (o._currentValue = p),
              c !== null)
          )
            if (Ct(c.value, p)) {
              if (c.children === a.children && !et.current) {
                t = $t(e, t, r);
                break e;
              }
            } else
              for (
                c = t.child, c !== null && (c.return = t);
                c !== null;

              ) {
                var x = c.dependencies;
                if (x !== null) {
                  p = c.child;
                  for (var S = x.firstContext; S !== null;) {
                    if (S.context === o) {
                      if (c.tag === 1) {
                        (S = Wt(-1, r & -r)),
                          (S.tag = 2);
                        var j = c.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var R = j.pending;
                          R === null
                            ? (S.next = S)
                            : ((S.next = R.next),
                              (R.next = S)),
                            (j.pending = S);
                        }
                      }
                      (c.lanes |= r),
                        (S = c.alternate),
                        S !== null && (S.lanes |= r),
                        rl(c.return, r, t),
                        (x.lanes |= r);
                      break;
                    }
                    S = S.next;
                  }
                } else if (c.tag === 10)
                  p = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((p = c.return), p === null))
                    throw Error(s(341));
                  (p.lanes |= r),
                    (x = p.alternate),
                    x !== null && (x.lanes |= r),
                    rl(p, r, t),
                    (p = c.sibling);
                } else p = c.child;
                if (p !== null) p.return = c;
                else
                  for (p = c; p !== null;) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((c = p.sibling), c !== null)) {
                      (c.return = p.return), (p = c);
                      break;
                    }
                    p = p.return;
                  }
                c = p;
              }
          Xe(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (o = t.pendingProps.children),
          rr(t, r),
          (a = gt(a)),
          (o = o(a)),
          (t.flags |= 1),
          Xe(e, t, o, r),
          t.child
        );
      case 14:
        return (
          (o = t.type),
          (a = Et(o, t.pendingProps)),
          (a = Et(o.type, a)),
          Td(e, t, o, a, r)
        );
      case 15:
        return Ed(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (a = t.pendingProps),
          (a = t.elementType === o ? a : Et(o, a)),
          ms(e, t),
          (t.tag = 1),
          tt(o) ? ((e = !0), Yi(t)) : (e = !1),
          rr(t, r),
          yd(t, o, a),
          xl(t, o, a, r),
          Pl(null, t, o, !0, e, r)
        );
      case 19:
        return Vd(e, t, r);
      case 22:
        return jd(e, t, r);
    }
    throw Error(s(156, t.tag));
  };
  function sf(e, t) {
    return Iu(e, t);
  }
  function i0(e, t, r, o) {
    (this.tag = e),
      (this.key = r),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function xt(e, t, r, o) {
    return new i0(e, t, r, o);
  }
  function Wl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function s0(e) {
    if (typeof e == "function") return Wl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ot)) return 11;
      if (e === kt) return 14;
    }
    return 2;
  }
  function pn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = xt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null
          ? null
          : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Es(e, t, r, o, a, c) {
    var p = 2;
    if (((o = e), typeof e == "function")) Wl(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case le:
          return Dn(r.children, a, c, t);
        case X:
          (p = 8), (a |= 8);
          break;
        case ye:
          return (
            (e = xt(12, r, t, a | 2)),
            (e.elementType = ye),
            (e.lanes = c),
            e
          );
        case Ge:
          return (
            (e = xt(13, r, t, a)),
            (e.elementType = Ge),
            (e.lanes = c),
            e
          );
        case Je:
          return (
            (e = xt(19, r, t, a)),
            (e.elementType = Je),
            (e.lanes = c),
            e
          );
        case ie:
          return js(r, a, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case je:
                p = 10;
                break e;
              case Ze:
                p = 9;
                break e;
              case ot:
                p = 11;
                break e;
              case kt:
                p = 14;
                break e;
              case Qe:
                (p = 16), (o = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = xt(p, r, t, a)),
      (t.elementType = e),
      (t.type = o),
      (t.lanes = c),
      t
    );
  }
  function Dn(e, t, r, o) {
    return (e = xt(7, e, o, t)), (e.lanes = r), e;
  }
  function js(e, t, r, o) {
    return (
      (e = xt(22, e, o, t)),
      (e.elementType = ie),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function $l(e, t, r) {
    return (e = xt(6, e, null, t)), (e.lanes = r), e;
  }
  function Hl(e, t, r) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function o0(e, t, r, o, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vo(0)),
      (this.expirationTimes = vo(-1)),
      (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = vo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Kl(e, t, r, o, a, c, p, x, S) {
    return (
      (e = new o0(e, t, r, x, S)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = xt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      sl(c),
      e
    );
  }
  function l0(e, t, r) {
    var o =
      3 < arguments.length && arguments[3] !== void 0
        ? arguments[3]
        : null;
    return {
      $$typeof: ee,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function of(e) {
    if (!e) return rn;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (tt(t.type)) {
              t =
                t.stateNode
                  .__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (tt(r)) return Lc(e, r, t);
    }
    return t;
  }
  function lf(e, t, r, o, a, c, p, x, S) {
    return (
      (e = Kl(r, o, !0, e, a, c, p, x, S)),
      (e.context = of(null)),
      (r = e.current),
      (o = Ye()),
      (a = dn(r)),
      (c = Wt(o, a)),
      (c.callback = t ?? null),
      ln(r, c, a),
      (e.current.lanes = a),
      jr(e, a, o),
      it(e, o),
      e
    );
  }
  function Ns(e, t, r, o) {
    var a = t.current,
      c = Ye(),
      p = dn(a);
    return (
      (r = of(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Wt(c, p)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = ln(a, t, p)),
      e !== null && (Mt(e, a, p, c), ss(e, a, p)),
      p
    );
  }
  function Ms(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function af(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function ql(e, t) {
    af(e, t), (e = e.alternate) && af(e, t);
  }
  function a0() {
    return null;
  }
  var uf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
        console.error(e);
      };
  function Gl(e) {
    this._internalRoot = e;
  }
  (As.prototype.render = Gl.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ns(e, t, null, null);
  }),
    (As.prototype.unmount = Gl.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nn(function () {
          Ns(null, e, null, null);
        }),
          (t[Ft] = null);
      }
    });
  function As(e) {
    this._internalRoot = e;
  }
  As.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Hu();
      e = { blockedOn: null, target: e, priority: t };
      for (
        var r = 0;
        r < Zt.length && t !== 0 && t < Zt[r].priority;
        r++
      );
      Zt.splice(r, 0, e), r === 0 && Gu(e);
    }
  };
  function Ql(e) {
    return !(
      !e ||
      (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    );
  }
  function Ds(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 ||
          e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function cf() { }
  function u0(e, t, r, o, a) {
    if (a) {
      if (typeof o == "function") {
        var c = o;
        o = function () {
          var j = Ms(p);
          c.call(j);
        };
      }
      var p = lf(t, o, e, 0, null, !1, !1, "", cf);
      return (
        (e._reactRootContainer = p),
        (e[Ft] = p.current),
        br(e.nodeType === 8 ? e.parentNode : e),
        Nn(),
        p
      );
    }
    for (; (a = e.lastChild);) e.removeChild(a);
    if (typeof o == "function") {
      var x = o;
      o = function () {
        var j = Ms(S);
        x.call(j);
      };
    }
    var S = Kl(e, 0, !1, null, null, !1, !1, "", cf);
    return (
      (e._reactRootContainer = S),
      (e[Ft] = S.current),
      br(e.nodeType === 8 ? e.parentNode : e),
      Nn(function () {
        Ns(t, S, r, o);
      }),
      S
    );
  }
  function Rs(e, t, r, o, a) {
    var c = r._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof a == "function") {
        var x = a;
        a = function () {
          var S = Ms(p);
          x.call(S);
        };
      }
      Ns(t, p, e, a);
    } else p = u0(r, t, e, a, o);
    return Ms(p);
  }
  (Wu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Er(t.pendingLanes);
          r !== 0 &&
            (xo(t, r | 1),
              it(t, Ae()),
              (ae & 6) === 0 && ((ar = Ae() + 500), sn()));
        }
        break;
      case 13:
        Nn(function () {
          var o = Ut(e, 1);
          if (o !== null) {
            var a = Ye();
            Mt(o, e, 1, a);
          }
        }),
          ql(e, 1);
    }
  }),
    (wo = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var r = Ye();
          Mt(t, e, 134217728, r);
        }
        ql(e, 134217728);
      }
    }),
    ($u = function (e) {
      if (e.tag === 13) {
        var t = dn(e),
          r = Ut(e, t);
        if (r !== null) {
          var o = Ye();
          Mt(r, e, t, o);
        }
        ql(e, t);
      }
    }),
    (Hu = function () {
      return pe;
    }),
    (Ku = function (e, t) {
      var r = pe;
      try {
        return (pe = e), t();
      } finally {
        pe = r;
      }
    }),
    (fo = function (e, t, r) {
      switch (t) {
        case "input":
          if (
            (ro(e, r),
              (t = r.name),
              r.type === "radio" && t != null)
          ) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" +
                JSON.stringify("" + t) +
                '][type="radio"]'
              ),
              t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var a = Qi(o);
                if (!a) throw Error(s(90));
                gu(o), ro(o, a);
              }
            }
          }
          break;
        case "textarea":
          Su(e, r);
          break;
        case "select":
          (t = r.value), t != null && On(e, !!r.multiple, t, !1);
      }
    }),
    (Au = Bl),
    (Du = Nn);
  var c0 = { usingClientEntryPoint: !1, Events: [$r, Qn, Qi, Nu, Mu, Bl] },
    ii = {
      findFiberByHostInstance: wn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    d0 = {
      bundleType: ii.bundleType,
      version: ii.version,
      rendererPackageName: ii.rendererPackageName,
      rendererConfig: ii.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = _u(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ii.findFiberByHostInstance || a0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber)
      try {
        (Ai = Ls.inject(d0)), (Dt = Ls);
      } catch { }
  }
  return (
    (st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0),
    (st.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0
          ? arguments[2]
          : null;
      if (!Ql(t)) throw Error(s(200));
      return l0(e, t, null, r);
    }),
    (st.createRoot = function (e, t) {
      if (!Ql(e)) throw Error(s(299));
      var r = !1,
        o = "",
        a = uf;
      return (
        t != null &&
        (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 &&
          (a = t.onRecoverableError)),
        (t = Kl(e, 1, !1, null, null, r, !1, o, a)),
        (e[Ft] = t.current),
        br(e.nodeType === 8 ? e.parentNode : e),
        new Gl(t)
      );
    }),
    (st.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = _u(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (st.flushSync = function (e) {
      return Nn(e);
    }),
    (st.hydrate = function (e, t, r) {
      if (!Ds(t)) throw Error(s(200));
      return Rs(null, e, t, !0, r);
    }),
    (st.hydrateRoot = function (e, t, r) {
      if (!Ql(e)) throw Error(s(405));
      var o = (r != null && r.hydratedSources) || null,
        a = !1,
        c = "",
        p = uf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
            r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
            r.onRecoverableError !== void 0 &&
            (p = r.onRecoverableError)),
          (t = lf(t, null, e, 1, r ?? null, a, !1, c, p)),
          (e[Ft] = t.current),
          br(e),
          o)
      )
        for (e = 0; e < o.length; e++)
          (r = o[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new As(t);
    }),
    (st.render = function (e, t, r) {
      if (!Ds(t)) throw Error(s(200));
      return Rs(null, e, t, !1, r);
    }),
    (st.unmountComponentAtNode = function (e) {
      if (!Ds(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Nn(function () {
          Rs(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Ft] = null);
          });
        }),
          !0)
        : !1;
    }),
    (st.unstable_batchedUpdates = Bl),
    (st.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Ds(r)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Rs(e, t, r, !1, o);
    }),
    (st.version = "18.3.1-next-f1338f8080-20240426"),
    st
  );
}
var vf;
function w0() {
  if (vf) return Zl.exports;
  vf = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (Zl.exports = x0()), Zl.exports;
}
var xf;
function S0() {
  if (xf) return Vs;
  xf = 1;
  var n = w0();
  return (Vs.createRoot = n.createRoot), (Vs.hydrateRoot = n.hydrateRoot), Vs;
}
var k0 = S0();
const P0 = p0(k0);
var O = La();
const Va = O.createContext({});
function _a(n) {
  const i = O.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const Qs = O.createContext(null),
  za = O.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
class C0 extends O.Component {
  getSnapshotBeforeUpdate(i) {
    const s = this.props.childRef.current;
    if (s && i.isPresent && !this.props.isPresent) {
      const l = this.props.sizeRef.current;
      (l.height = s.offsetHeight || 0),
        (l.width = s.offsetWidth || 0),
        (l.top = s.offsetTop),
        (l.left = s.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() { }
  render() {
    return this.props.children;
  }
}
function T0({ children: n, isPresent: i }) {
  const s = O.useId(),
    l = O.useRef(null),
    u = O.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: f } = O.useContext(za);
  return (
    O.useInsertionEffect(() => {
      const { width: d, height: h, top: m, left: g } = u.current;
      if (i || !l.current || !d || !h) return;
      l.current.dataset.motionPopId = s;
      const v = document.createElement("style");
      return (
        f && (v.nonce = f),
        document.head.appendChild(v),
        v.sheet &&
        v.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${h}px !important;
            top: ${m}px !important;
            left: ${g}px !important;
          }
        `),
        () => {
          document.head.removeChild(v);
        }
      );
    }, [i]),
    y.jsx(C0, {
      isPresent: i,
      childRef: l,
      sizeRef: u,
      children: O.cloneElement(n, { ref: l }),
    })
  );
}
const E0 = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: l,
  custom: u,
  presenceAffectsLayout: f,
  mode: d,
}) => {
  const h = _a(j0),
    m = O.useId(),
    g = O.useCallback(
      (w) => {
        h.set(w, !0);
        for (const P of h.values()) if (!P) return;
        l && l();
      },
      [h, l]
    ),
    v = O.useMemo(
      () => ({
        id: m,
        initial: i,
        isPresent: s,
        custom: u,
        onExitComplete: g,
        register: (w) => (h.set(w, !1), () => h.delete(w)),
      }),
      f ? [Math.random(), g] : [s, g]
    );
  return (
    O.useMemo(() => {
      h.forEach((w, P) => h.set(P, !1));
    }, [s]),
    O.useEffect(() => {
      !s && !h.size && l && l();
    }, [s]),
    d === "popLayout" && (n = y.jsx(T0, { isPresent: s, children: n })),
    y.jsx(Qs.Provider, { value: v, children: n })
  );
};
function j0() {
  return new Map();
}
function zp(n = !0) {
  const i = O.useContext(Qs);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: l, register: u } = i,
    f = O.useId();
  O.useEffect(() => {
    n && u(f);
  }, [n]);
  const d = O.useCallback(() => n && l && l(f), [f, l, n]);
  return !s && l ? [!1, d] : [!0];
}
const _s = (n) => n.key || "";
function wf(n) {
  const i = [];
  return (
    O.Children.forEach(n, (s) => {
      O.isValidElement(s) && i.push(s);
    }),
    i
  );
}
const Ia = typeof window < "u",
  Ip = Ia ? O.useLayoutEffect : O.useEffect,
  Xs = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: l,
    presenceAffectsLayout: u = !0,
    mode: f = "sync",
    propagate: d = !1,
  }) => {
    const [h, m] = zp(d),
      g = O.useMemo(() => wf(n), [n]),
      v = d && !h ? [] : g.map(_s),
      w = O.useRef(!0),
      P = O.useRef(g),
      N = _a(() => new Map()),
      [_, M] = O.useState(g),
      [L, I] = O.useState(g);
    Ip(() => {
      (w.current = !1), (P.current = g);
      for (let Q = 0; Q < L.length; Q++) {
        const B = _s(L[Q]);
        v.includes(B) ? N.delete(B) : N.get(B) !== !0 && N.set(B, !1);
      }
    }, [L, v.length, v.join("-")]);
    const U = [];
    if (g !== _) {
      let Q = [...g];
      for (let B = 0; B < L.length; B++) {
        const ee = L[B],
          le = _s(ee);
        v.includes(le) || (Q.splice(B, 0, ee), U.push(ee));
      }
      f === "wait" && U.length && (Q = U), I(wf(Q)), M(g);
      return;
    }
    const { forceRender: H } = O.useContext(Va);
    return y.jsx(y.Fragment, {
      children: L.map((Q) => {
        const B = _s(Q),
          ee = d && !h ? !1 : g === L || v.includes(B),
          le = () => {
            if (N.has(B)) N.set(B, !0);
            else return;
            let X = !0;
            N.forEach((ye) => {
              ye || (X = !1);
            }),
              X &&
              (H == null || H(),
                I(P.current),
                d && (m == null || m()),
                l && l());
          };
        return y.jsx(
          E0,
          {
            isPresent: ee,
            initial: !w.current || s ? void 0 : !1,
            custom: ee ? void 0 : i,
            presenceAffectsLayout: u,
            mode: f,
            onExitComplete: ee ? void 0 : le,
            children: Q,
          },
          B
        );
      }),
    });
  },
  ft = (n) => n;
let Fp = ft;
function Fa(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const mr = (n, i, s) => {
  const l = i - n;
  return l === 0 ? 1 : (s - n) / l;
},
  Kt = (n) => n * 1e3,
  qt = (n) => n / 1e3,
  N0 = { useManualTiming: !1 };
function M0(n) {
  let i = new Set(),
    s = new Set(),
    l = !1,
    u = !1;
  const f = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function h(g) {
    f.has(g) && (m.schedule(g), n()), g(d);
  }
  const m = {
    schedule: (g, v = !1, w = !1) => {
      const N = w && l ? i : s;
      return v && f.add(g), N.has(g) || N.add(g), g;
    },
    cancel: (g) => {
      s.delete(g), f.delete(g);
    },
    process: (g) => {
      if (((d = g), l)) {
        u = !0;
        return;
      }
      (l = !0),
        ([i, s] = [s, i]),
        i.forEach(h),
        i.clear(),
        (l = !1),
        u && ((u = !1), m.process(g));
    },
  };
  return m;
}
const zs = [
  "read",
  "resolveKeyframes",
  "update",
  "preRender",
  "render",
  "postRender",
],
  A0 = 40;
function Op(n, i) {
  let s = !1,
    l = !0;
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    f = () => (s = !0),
    d = zs.reduce((I, U) => ((I[U] = M0(f)), I), {}),
    {
      read: h,
      resolveKeyframes: m,
      update: g,
      preRender: v,
      render: w,
      postRender: P,
    } = d,
    N = () => {
      const I = performance.now();
      (s = !1),
        (u.delta = l
          ? 1e3 / 60
          : Math.max(Math.min(I - u.timestamp, A0), 1)),
        (u.timestamp = I),
        (u.isProcessing = !0),
        h.process(u),
        m.process(u),
        g.process(u),
        v.process(u),
        w.process(u),
        P.process(u),
        (u.isProcessing = !1),
        s && i && ((l = !1), n(N));
    },
    _ = () => {
      (s = !0), (l = !0), u.isProcessing || n(N);
    };
  return {
    schedule: zs.reduce((I, U) => {
      const H = d[U];
      return (
        (I[U] = (Q, B = !1, ee = !1) => (
          s || _(), H.schedule(Q, B, ee)
        )),
        I
      );
    }, {}),
    cancel: (I) => {
      for (let U = 0; U < zs.length; U++) d[zs[U]].cancel(I);
    },
    state: u,
    steps: d,
  };
}
const { schedule: we, cancel: gn, state: be, steps: ta } = Op(
  typeof requestAnimationFrame < "u" ? requestAnimationFrame : ft,
  !0
),
  Bp = O.createContext({ strict: !1 }),
  Sf = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gr = {};
for (const n in Sf) gr[n] = { isEnabled: (i) => Sf[n].some((s) => !!i[s]) };
function D0(n) {
  for (const i in n) gr[i] = { ...gr[i], ...n[i] };
}
const R0 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Us(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    R0.has(n)
  );
}
let bp = (n) => !Us(n);
function L0(n) {
  n && (bp = (i) => (i.startsWith("on") ? !Us(i) : n(i)));
}
try {
  L0(require("@emotion/is-prop-valid").default);
} catch { }
function V0(n, i, s) {
  const l = {};
  for (const u in n)
    (u === "values" && typeof n.values == "object") ||
      ((bp(u) ||
        (s === !0 && Us(u)) ||
        (!i && !Us(u)) ||
        (n.draggable && u.startsWith("onDrag"))) &&
        (l[u] = n[u]));
  return l;
}
function _0(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...l) => n(...l);
  return new Proxy(s, {
    get: (l, u) =>
      u === "create" ? n : (i.has(u) || i.set(u, n(u)), i.get(u)),
  });
}
const Ys = O.createContext({});
function mi(n) {
  return typeof n == "string" || Array.isArray(n);
}
function Zs(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
const Oa = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit",
],
  Ba = ["initial", ...Oa];
function Js(n) {
  return Zs(n.animate) || Ba.some((i) => mi(n[i]));
}
function Up(n) {
  return !!(Js(n) || n.variants);
}
function z0(n, i) {
  if (Js(n)) {
    const { initial: s, animate: l } = n;
    return {
      initial: s === !1 || mi(s) ? s : void 0,
      animate: mi(l) ? l : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function I0(n) {
  const { initial: i, animate: s } = z0(n, O.useContext(Ys));
  return O.useMemo(() => ({ initial: i, animate: s }), [kf(i), kf(s)]);
}
function kf(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const F0 = Symbol.for("motionComponentSymbol");
function cr(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function O0(n, i, s) {
  return O.useCallback(
    (l) => {
      l && n.onMount && n.onMount(l),
        i && (l ? i.mount(l) : i.unmount()),
        s && (typeof s == "function" ? s(l) : cr(s) && (s.current = l));
    },
    [i]
  );
}
const ba = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  B0 = "framerAppearId",
  Wp = "data-" + ba(B0),
  { schedule: Ua } = Op(queueMicrotask, !1),
  $p = O.createContext({});
function b0(n, i, s, l, u) {
  var f, d;
  const { visualElement: h } = O.useContext(Ys),
    m = O.useContext(Bp),
    g = O.useContext(Qs),
    v = O.useContext(za).reducedMotion,
    w = O.useRef(null);
  (l = l || m.renderer),
    !w.current &&
    l &&
    (w.current = l(n, {
      visualState: i,
      parent: h,
      props: s,
      presenceContext: g,
      blockInitialAnimation: g ? g.initial === !1 : !1,
      reducedMotionConfig: v,
    }));
  const P = w.current,
    N = O.useContext($p);
  P &&
    !P.projection &&
    u &&
    (P.type === "html" || P.type === "svg") &&
    U0(w.current, s, u, N);
  const _ = O.useRef(!1);
  O.useInsertionEffect(() => {
    P && _.current && P.update(s, g);
  });
  const M = s[Wp],
    L = O.useRef(
      !!M &&
      !(
        !(
          (f = window.MotionHandoffIsComplete) === null ||
          f === void 0
        ) && f.call(window, M)
      ) &&
      ((d = window.MotionHasOptimisedAnimation) === null ||
        d === void 0
        ? void 0
        : d.call(window, M))
    );
  return (
    Ip(() => {
      P &&
        ((_.current = !0),
          (window.MotionIsMounted = !0),
          P.updateFeatures(),
          Ua.render(P.render),
          L.current &&
          P.animationState &&
          P.animationState.animateChanges());
    }),
    O.useEffect(() => {
      P &&
        (!L.current &&
          P.animationState &&
          P.animationState.animateChanges(),
          L.current &&
          (queueMicrotask(() => {
            var I;
            (I = window.MotionHandoffMarkAsComplete) === null ||
              I === void 0 ||
              I.call(window, M);
          }),
            (L.current = !1)));
    }),
    P
  );
}
function U0(n, i, s, l) {
  const {
    layoutId: u,
    layout: f,
    drag: d,
    dragConstraints: h,
    layoutScroll: m,
    layoutRoot: g,
  } = i;
  (n.projection = new s(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : Hp(n.parent)
  )),
    n.projection.setOptions({
      layoutId: u,
      layout: f,
      alwaysMeasureLayout: !!d || (h && cr(h)),
      visualElement: n,
      animationType: typeof f == "string" ? f : "both",
      initialPromotionConfig: l,
      layoutScroll: m,
      layoutRoot: g,
    });
}
function Hp(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : Hp(n.parent);
}
function W0({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: l,
  Component: u,
}) {
  var f, d;
  n && D0(n);
  function h(g, v) {
    let w;
    const P = { ...O.useContext(za), ...g, layoutId: $0(g) },
      { isStatic: N } = P,
      _ = I0(g),
      M = l(g, N);
    if (!N && Ia) {
      H0();
      const L = K0(P);
      (w = L.MeasureLayout),
        (_.visualElement = b0(u, M, P, i, L.ProjectionNode));
    }
    return y.jsxs(Ys.Provider, {
      value: _,
      children: [
        w && _.visualElement
          ? y.jsx(w, { visualElement: _.visualElement, ...P })
          : null,
        s(u, g, O0(M, _.visualElement, v), M, N, _.visualElement),
      ],
    });
  }
  h.displayName = `motion.${typeof u == "string"
    ? u
    : `create(${(d =
      (f = u.displayName) !== null && f !== void 0
        ? f
        : u.name) !== null && d !== void 0
      ? d
      : ""
    })`
    }`;
  const m = O.forwardRef(h);
  return (m[F0] = u), m;
}
function $0({ layoutId: n }) {
  const i = O.useContext(Va).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function H0(n, i) {
  O.useContext(Bp).strict;
}
function K0(n) {
  const { drag: i, layout: s } = gr;
  if (!i && !s) return {};
  const l = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n))
        ? l.MeasureLayout
        : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
const q0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Wa(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(q0.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Pf(n) {
  const i = [{}, {}];
  return (
    n == null ||
    n.values.forEach((s, l) => {
      (i[0][l] = s.get()), (i[1][l] = s.getVelocity());
    }),
    i
  );
}
function $a(n, i, s, l) {
  if (typeof i == "function") {
    const [u, f] = Pf(l);
    i = i(s !== void 0 ? s : n.custom, u, f);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
      typeof i == "function")
  ) {
    const [u, f] = Pf(l);
    i = i(s !== void 0 ? s : n.custom, u, f);
  }
  return i;
}
const ha = (n) => Array.isArray(n),
  G0 = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
  Q0 = (n) => (ha(n) ? n[n.length - 1] || 0 : n),
  qe = (n) => !!(n && n.getVelocity);
function Os(n) {
  const i = qe(n) ? n.get() : n;
  return G0(i) ? i.toValue() : i;
}
function X0(
  { scrapeMotionValuesFromProps: n, createRenderState: i, onUpdate: s },
  l,
  u,
  f
) {
  const d = { latestValues: Y0(l, u, f, n), renderState: i() };
  return (
    s &&
    ((d.onMount = (h) => s({ props: l, current: h, ...d })),
      (d.onUpdate = (h) => s(h))),
    d
  );
}
const Kp = (n) => (i, s) => {
  const l = O.useContext(Ys),
    u = O.useContext(Qs),
    f = () => X0(n, i, l, u);
  return s ? f() : _a(f);
};
function Y0(n, i, s, l) {
  const u = {},
    f = l(n, {});
  for (const P in f) u[P] = Os(f[P]);
  let { initial: d, animate: h } = n;
  const m = Js(n),
    g = Up(n);
  i &&
    g &&
    !m &&
    n.inherit !== !1 &&
    (d === void 0 && (d = i.initial), h === void 0 && (h = i.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || d === !1;
  const w = v ? h : d;
  if (w && typeof w != "boolean" && !Zs(w)) {
    const P = Array.isArray(w) ? w : [w];
    for (let N = 0; N < P.length; N++) {
      const _ = $a(n, P[N]);
      if (_) {
        const { transitionEnd: M, transition: L, ...I } = _;
        for (const U in I) {
          let H = I[U];
          if (Array.isArray(H)) {
            const Q = v ? H.length - 1 : 0;
            H = H[Q];
          }
          H !== null && (u[U] = H);
        }
        for (const U in M) u[U] = M[U];
      }
    }
  }
  return u;
}
const vr = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY",
],
  Fn = new Set(vr),
  qp = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Gp = qp("--"),
  Z0 = qp("var(--"),
  Ha = (n) => (Z0(n) ? J0.test(n.split("/*")[0].trim()) : !1),
  J0 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Qp = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Gt = (n, i, s) => (s > i ? i : s < n ? n : s),
  xr = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  gi = { ...xr, transform: (n) => Gt(0, 1, n) },
  Is = { ...xr, default: 1 },
  wi = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  mn = wi("deg"),
  zt = wi("%"),
  te = wi("px"),
  ey = wi("vh"),
  ty = wi("vw"),
  Cf = {
    ...zt,
    parse: (n) => zt.parse(n) / 100,
    transform: (n) => zt.transform(n * 100),
  },
  ny = {
    borderWidth: te,
    borderTopWidth: te,
    borderRightWidth: te,
    borderBottomWidth: te,
    borderLeftWidth: te,
    borderRadius: te,
    radius: te,
    borderTopLeftRadius: te,
    borderTopRightRadius: te,
    borderBottomRightRadius: te,
    borderBottomLeftRadius: te,
    width: te,
    maxWidth: te,
    height: te,
    maxHeight: te,
    top: te,
    right: te,
    bottom: te,
    left: te,
    padding: te,
    paddingTop: te,
    paddingRight: te,
    paddingBottom: te,
    paddingLeft: te,
    margin: te,
    marginTop: te,
    marginRight: te,
    marginBottom: te,
    marginLeft: te,
    backgroundPositionX: te,
    backgroundPositionY: te,
  },
  ry = {
    rotate: mn,
    rotateX: mn,
    rotateY: mn,
    rotateZ: mn,
    scale: Is,
    scaleX: Is,
    scaleY: Is,
    scaleZ: Is,
    skew: mn,
    skewX: mn,
    skewY: mn,
    distance: te,
    translateX: te,
    translateY: te,
    translateZ: te,
    x: te,
    y: te,
    z: te,
    perspective: te,
    transformPerspective: te,
    opacity: gi,
    originX: Cf,
    originY: Cf,
    originZ: te,
  },
  Tf = { ...xr, transform: Math.round },
  Ka = {
    ...ny,
    ...ry,
    zIndex: Tf,
    size: te,
    fillOpacity: gi,
    strokeOpacity: gi,
    numOctaves: Tf,
  },
  iy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  sy = vr.length;
function oy(n, i, s) {
  let l = "",
    u = !0;
  for (let f = 0; f < sy; f++) {
    const d = vr[f],
      h = n[d];
    if (h === void 0) continue;
    let m = !0;
    if (
      (typeof h == "number"
        ? (m = h === (d.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(h) === 0),
        !m || s)
    ) {
      const g = Qp(h, Ka[d]);
      if (!m) {
        u = !1;
        const v = iy[d] || d;
        l += `${v}(${g}) `;
      }
      s && (i[d] = g);
    }
  }
  return (l = l.trim()), s ? (l = s(i, u ? "" : l)) : u && (l = "none"), l;
}
function qa(n, i, s) {
  const { style: l, vars: u, transformOrigin: f } = n;
  let d = !1,
    h = !1;
  for (const m in i) {
    const g = i[m];
    if (Fn.has(m)) {
      d = !0;
      continue;
    } else if (Gp(m)) {
      u[m] = g;
      continue;
    } else {
      const v = Qp(g, Ka[m]);
      m.startsWith("origin") ? ((h = !0), (f[m] = v)) : (l[m] = v);
    }
  }
  if (
    (i.transform ||
      (d || s
        ? (l.transform = oy(i, n.transform, s))
        : l.transform && (l.transform = "none")),
      h)
  ) {
    const { originX: m = "50%", originY: g = "50%", originZ: v = 0 } = f;
    l.transformOrigin = `${m} ${g} ${v}`;
  }
}
const ly = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ay = { offset: "strokeDashoffset", array: "strokeDasharray" };
function uy(n, i, s = 1, l = 0, u = !0) {
  n.pathLength = 1;
  const f = u ? ly : ay;
  n[f.offset] = te.transform(-l);
  const d = te.transform(i),
    h = te.transform(s);
  n[f.array] = `${d} ${h}`;
}
function Ef(n, i, s) {
  return typeof n == "string" ? n : te.transform(i + s * n);
}
function cy(n, i, s) {
  const l = Ef(i, n.x, n.width),
    u = Ef(s, n.y, n.height);
  return `${l} ${u}`;
}
function Ga(
  n,
  {
    attrX: i,
    attrY: s,
    attrScale: l,
    originX: u,
    originY: f,
    pathLength: d,
    pathSpacing: h = 1,
    pathOffset: m = 0,
    ...g
  },
  v,
  w
) {
  if ((qa(n, g, w), v)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: P, style: N, dimensions: _ } = n;
  P.transform && (_ && (N.transform = P.transform), delete P.transform),
    _ &&
    (u !== void 0 || f !== void 0 || N.transform) &&
    (N.transformOrigin = cy(
      _,
      u !== void 0 ? u : 0.5,
      f !== void 0 ? f : 0.5
    )),
    i !== void 0 && (P.x = i),
    s !== void 0 && (P.y = s),
    l !== void 0 && (P.scale = l),
    d !== void 0 && uy(P, d, h, m, !1);
}
const Qa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Xp = () => ({ ...Qa(), attrs: {} }),
  Xa = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Yp(n, { style: i, vars: s }, l, u) {
  Object.assign(n.style, i, u && u.getProjectionStyles(l));
  for (const f in s) n.style.setProperty(f, s[f]);
}
const Zp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Jp(n, i, s, l) {
  Yp(n, i, void 0, l);
  for (const u in i.attrs) n.setAttribute(Zp.has(u) ? u : ba(u), i.attrs[u]);
}
const Ws = {};
function dy(n) {
  Object.assign(Ws, n);
}
function eh(n, { layout: i, layoutId: s }) {
  return (
    Fn.has(n) ||
    n.startsWith("origin") ||
    ((i || s !== void 0) && (!!Ws[n] || n === "opacity"))
  );
}
function Ya(n, i, s) {
  var l;
  const { style: u } = n,
    f = {};
  for (const d in u)
    (qe(u[d]) ||
      (i.style && qe(i.style[d])) ||
      eh(d, n) ||
      ((l = s == null ? void 0 : s.getValue(d)) === null || l === void 0
        ? void 0
        : l.liveStyle) !== void 0) &&
      (f[d] = u[d]);
  return f;
}
function th(n, i, s) {
  const l = Ya(n, i, s);
  for (const u in n)
    if (qe(n[u]) || qe(i[u])) {
      const f =
        vr.indexOf(u) !== -1
          ? "attr" + u.charAt(0).toUpperCase() + u.substring(1)
          : u;
      l[f] = n[u];
    }
  return l;
}
function fy(n, i) {
  try {
    i.dimensions =
      typeof n.getBBox == "function"
        ? n.getBBox()
        : n.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const jf = ["x", "y", "width", "height", "cx", "cy", "r"],
  py = {
    useVisualState: Kp({
      scrapeMotionValuesFromProps: th,
      createRenderState: Xp,
      onUpdate: ({
        props: n,
        prevProps: i,
        current: s,
        renderState: l,
        latestValues: u,
      }) => {
        if (!s) return;
        let f = !!n.drag;
        if (!f) {
          for (const h in u)
            if (Fn.has(h)) {
              f = !0;
              break;
            }
        }
        if (!f) return;
        let d = !i;
        if (i)
          for (let h = 0; h < jf.length; h++) {
            const m = jf[h];
            n[m] !== i[m] && (d = !0);
          }
        d &&
          we.read(() => {
            fy(s, l),
              we.render(() => {
                Ga(l, u, Xa(s.tagName), n.transformTemplate),
                  Jp(s, l);
              });
          });
      },
    }),
  },
  hy = {
    useVisualState: Kp({
      scrapeMotionValuesFromProps: Ya,
      createRenderState: Qa,
    }),
  };
function nh(n, i, s) {
  for (const l in i) !qe(i[l]) && !eh(l, s) && (n[l] = i[l]);
}
function my({ transformTemplate: n }, i) {
  return O.useMemo(() => {
    const s = Qa();
    return qa(s, i, n), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function gy(n, i) {
  const s = n.style || {},
    l = {};
  return nh(l, s, n), Object.assign(l, my(n, i)), l;
}
function yy(n, i) {
  const s = {},
    l = gy(n, i);
  return (
    n.drag &&
    n.dragListener !== !1 &&
    ((s.draggable = !1),
      (l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none"),
      (l.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
    (n.onTap || n.onTapStart || n.whileTap) &&
    (s.tabIndex = 0),
    (s.style = l),
    s
  );
}
function vy(n, i, s, l) {
  const u = O.useMemo(() => {
    const f = Xp();
    return (
      Ga(f, i, Xa(l), n.transformTemplate),
      { ...f.attrs, style: { ...f.style } }
    );
  }, [i]);
  if (n.style) {
    const f = {};
    nh(f, n.style, n), (u.style = { ...f, ...u.style });
  }
  return u;
}
function xy(n = !1) {
  return (s, l, u, { latestValues: f }, d) => {
    const m = (Wa(s) ? vy : yy)(l, f, d, s),
      g = V0(l, typeof s == "string", n),
      v = s !== O.Fragment ? { ...g, ...m, ref: u } : {},
      { children: w } = l,
      P = O.useMemo(() => (qe(w) ? w.get() : w), [w]);
    return O.createElement(s, { ...v, children: P });
  };
}
function wy(n, i) {
  return function (
    l,
    { forwardMotionProps: u } = { forwardMotionProps: !1 }
  ) {
    const d = {
      ...(Wa(l) ? py : hy),
      preloadedFeatures: n,
      useRender: xy(u),
      createVisualElement: i,
      Component: l,
    };
    return W0(d);
  };
}
function rh(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let l = 0; l < s; l++) if (i[l] !== n[l]) return !1;
  return !0;
}
function eo(n, i, s) {
  const l = n.getProps();
  return $a(l, i, s !== void 0 ? s : l.custom, n);
}
const Sy = Fa(() => window.ScrollTimeline !== void 0);
class ky {
  constructor(i) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = i.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((i) => ("finished" in i ? i.finished : i))
    );
  }
  getAll(i) {
    return this.animations[0][i];
  }
  setAll(i, s) {
    for (let l = 0; l < this.animations.length; l++)
      this.animations[l][i] = s;
  }
  attachTimeline(i, s) {
    const l = this.animations.map((u) => {
      if (Sy() && u.attachTimeline) return u.attachTimeline(i);
      if (typeof s == "function") return s(u);
    });
    return () => {
      l.forEach((u, f) => {
        u && u(), this.animations[f].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(i) {
    this.setAll("time", i);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(i) {
    this.setAll("speed", i);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let i = 0;
    for (let s = 0; s < this.animations.length; s++)
      i = Math.max(i, this.animations[s].duration);
    return i;
  }
  runAll(i) {
    this.animations.forEach((s) => s[i]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Py extends ky {
  then(i, s) {
    return Promise.all(this.animations).then(i).catch(s);
  }
}
function Za(n, i) {
  return n ? n[i] || n.default || n : void 0;
}
const ma = 2e4;
function ih(n) {
  let i = 0;
  const s = 50;
  let l = n.next(i);
  for (; !l.done && i < ma;) (i += s), (l = n.next(i));
  return i >= ma ? 1 / 0 : i;
}
function Ja(n) {
  return typeof n == "function";
}
function Nf(n, i) {
  (n.timeline = i), (n.onfinish = null);
}
const eu = (n) => Array.isArray(n) && typeof n[0] == "number",
  Cy = { linearEasing: void 0 };
function Ty(n, i) {
  const s = Fa(n);
  return () => {
    var l;
    return (l = Cy[i]) !== null && l !== void 0 ? l : s();
  };
}
const $s = Ty(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"),
  sh = (n, i, s = 10) => {
    let l = "";
    const u = Math.max(Math.round(i / s), 2);
    for (let f = 0; f < u; f++) l += n(mr(0, u - 1, f)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  };
function oh(n) {
  return !!(
    (typeof n == "function" && $s()) ||
    !n ||
    (typeof n == "string" && (n in ga || $s())) ||
    eu(n) ||
    (Array.isArray(n) && n.every(oh))
  );
}
const ai = ([n, i, s, l]) => `cubic-bezier(${n}, ${i}, ${s}, ${l})`,
  ga = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ai([0, 0.65, 0.55, 1]),
    circOut: ai([0.55, 0, 1, 0.45]),
    backIn: ai([0.31, 0.01, 0.66, -0.59]),
    backOut: ai([0.33, 1.53, 0.69, 0.99]),
  };
function lh(n, i) {
  if (n)
    return typeof n == "function" && $s()
      ? sh(n, i)
      : eu(n)
        ? ai(n)
        : Array.isArray(n)
          ? n.map((s) => lh(s, i) || ga.easeOut)
          : ga[n];
}
const At = { x: !1, y: !1 };
function ah() {
  return At.x || At.y;
}
function Ey(n, i, s) {
  var l;
  if (n instanceof Element) return [n];
  if (typeof n == "string") {
    let u = document;
    const f =
      (l = void 0) !== null && l !== void 0 ? l : u.querySelectorAll(n);
    return f ? Array.from(f) : [];
  }
  return Array.from(n);
}
function uh(n, i) {
  const s = Ey(n),
    l = new AbortController(),
    u = { passive: !0, ...i, signal: l.signal };
  return [s, u, () => l.abort()];
}
function Mf(n) {
  return (i) => {
    i.pointerType === "touch" || ah() || n(i);
  };
}
function jy(n, i, s = {}) {
  const [l, u, f] = uh(n, s),
    d = Mf((h) => {
      const { target: m } = h,
        g = i(h);
      if (typeof g != "function" || !m) return;
      const v = Mf((w) => {
        g(w), m.removeEventListener("pointerleave", v);
      });
      m.addEventListener("pointerleave", v, u);
    });
  return (
    l.forEach((h) => {
      h.addEventListener("pointerenter", d, u);
    }),
    f
  );
}
const ch = (n, i) => (i ? (n === i ? !0 : ch(n, i.parentElement)) : !1),
  tu = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  Ny = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function My(n) {
  return Ny.has(n.tagName) || n.tabIndex !== -1;
}
const ui = new WeakSet();
function Af(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function na(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 })
  );
}
const Ay = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const l = Af(() => {
    if (ui.has(s)) return;
    na(s, "down");
    const u = Af(() => {
      na(s, "up");
    }),
      f = () => na(s, "cancel");
    s.addEventListener("keyup", u, i), s.addEventListener("blur", f, i);
  });
  s.addEventListener("keydown", l, i),
    s.addEventListener(
      "blur",
      () => s.removeEventListener("keydown", l),
      i
    );
};
function Df(n) {
  return tu(n) && !ah();
}
function Dy(n, i, s = {}) {
  const [l, u, f] = uh(n, s),
    d = (h) => {
      const m = h.currentTarget;
      if (!Df(h) || ui.has(m)) return;
      ui.add(m);
      const g = i(h),
        v = (N, _) => {
          window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", P),
            !(!Df(N) || !ui.has(m)) &&
            (ui.delete(m),
              typeof g == "function" && g(N, { success: _ }));
        },
        w = (N) => {
          v(N, s.useGlobalTarget || ch(m, N.target));
        },
        P = (N) => {
          v(N, !1);
        };
      window.addEventListener("pointerup", w, u),
        window.addEventListener("pointercancel", P, u);
    };
  return (
    l.forEach((h) => {
      !My(h) && h.getAttribute("tabindex") === null && (h.tabIndex = 0),
        (s.useGlobalTarget ? window : h).addEventListener(
          "pointerdown",
          d,
          u
        ),
        h.addEventListener("focus", (g) => Ay(g, u), u);
    }),
    f
  );
}
function Ry(n) {
  return n === "x" || n === "y"
    ? At[n]
      ? null
      : ((At[n] = !0),
        () => {
          At[n] = !1;
        })
    : At.x || At.y
      ? null
      : ((At.x = At.y = !0),
        () => {
          At.x = At.y = !1;
        });
}
const dh = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...vr,
]);
let Bs;
function Ly() {
  Bs = void 0;
}
const It = {
  now: () => (
    Bs === void 0 &&
    It.set(
      be.isProcessing || N0.useManualTiming
        ? be.timestamp
        : performance.now()
    ),
    Bs
  ),
  set: (n) => {
    (Bs = n), queueMicrotask(Ly);
  },
};
function nu(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function ru(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
class iu {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return nu(this.subscriptions, i), () => ru(this.subscriptions, i);
  }
  notify(i, s, l) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1) this.subscriptions[0](i, s, l);
      else
        for (let f = 0; f < u; f++) {
          const d = this.subscriptions[f];
          d && d(i, s, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function fh(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Rf = 30,
  Vy = (n) => !isNaN(parseFloat(n));
class _y {
  constructor(i, s = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l, u = !0) => {
        const f = It.now();
        this.updatedAt !== f && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
          this.events.change &&
          this.events.change.notify(this.current),
          u &&
          this.events.renderRequest &&
          this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner);
  }
  setCurrent(i) {
    (this.current = i),
      (this.updatedAt = It.now()),
      this.canTrackVelocity === null &&
      i !== void 0 &&
      (this.canTrackVelocity = Vy(this.current));
  }
  setPrevFrameValue(i = this.current) {
    (this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new iu());
    const l = this.events[i].add(s);
    return i === "change"
      ? () => {
        l(),
          we.read(() => {
            this.events.change.getSize() || this.stop();
          });
      }
      : l;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, s) {
    (this.passiveEffect = i), (this.stopPassiveEffect = s);
  }
  set(i, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(i, s)
      : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, s, l) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - l);
  }
  jump(i, s = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = It.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Rf
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Rf);
    return fh(
      parseFloat(this.current) - parseFloat(this.prevFrameValue),
      s
    );
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        (this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart &&
          this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
        this.events.animationCancel &&
        this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function yi(n, i) {
  return new _y(n, i);
}
function zy(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, yi(s));
}
function Iy(n, i) {
  const s = eo(n, i);
  let { transitionEnd: l = {}, transition: u = {}, ...f } = s || {};
  f = { ...f, ...l };
  for (const d in f) {
    const h = Q0(f[d]);
    zy(n, d, h);
  }
}
function Fy(n) {
  return !!(qe(n) && n.add);
}
function ya(n, i) {
  const s = n.getValue("willChange");
  if (Fy(s)) return s.add(i);
}
function ph(n) {
  return n.props[Wp];
}
const hh = (n, i, s) =>
  (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  Oy = 1e-7,
  By = 12;
function by(n, i, s, l, u) {
  let f,
    d,
    h = 0;
  do (d = i + (s - i) / 2), (f = hh(d, l, u) - n), f > 0 ? (s = d) : (i = d);
  while (Math.abs(f) > Oy && ++h < By);
  return d;
}
function Si(n, i, s, l) {
  if (n === i && s === l) return ft;
  const u = (f) => by(f, 0, 1, n, s);
  return (f) => (f === 0 || f === 1 ? f : hh(u(f), i, l));
}
const mh = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  gh = (n) => (i) => 1 - n(1 - i),
  yh = Si(0.33, 1.53, 0.69, 0.99),
  su = gh(yh),
  vh = mh(su),
  xh = (n) =>
    (n *= 2) < 1 ? 0.5 * su(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  ou = (n) => 1 - Math.sin(Math.acos(n)),
  wh = gh(ou),
  Sh = mh(ou),
  kh = (n) => /^0[^.\s]+$/u.test(n);
function Uy(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
      ? n === "none" || n === "0" || kh(n)
      : !0;
}
const di = (n) => Math.round(n * 1e5) / 1e5,
  lu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Wy(n) {
  return n == null;
}
const $y = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  au = (n, i) => (s) =>
    !!(
      (typeof s == "string" && $y.test(s) && s.startsWith(n)) ||
      (i && !Wy(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  Ph = (n, i, s) => (l) => {
    if (typeof l != "string") return l;
    const [u, f, d, h] = l.match(lu);
    return {
      [n]: parseFloat(u),
      [i]: parseFloat(f),
      [s]: parseFloat(d),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  Hy = (n) => Gt(0, 255, n),
  ra = { ...xr, transform: (n) => Math.round(Hy(n)) },
  zn = {
    test: au("rgb", "red"),
    parse: Ph("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: l = 1 }) =>
      "rgba(" +
      ra.transform(n) +
      ", " +
      ra.transform(i) +
      ", " +
      ra.transform(s) +
      ", " +
      di(gi.transform(l)) +
      ")",
  };
function Ky(n) {
  let i = "",
    s = "",
    l = "",
    u = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (l = n.substring(5, 7)),
        (u = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (l = n.substring(3, 4)),
        (u = n.substring(4, 5)),
        (i += i),
        (s += s),
        (l += l),
        (u += u)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(l, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  );
}
const va = { test: au("#"), parse: Ky, transform: zn.transform },
  dr = {
    test: au("hsl", "hue"),
    parse: Ph("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      zt.transform(di(i)) +
      ", " +
      zt.transform(di(s)) +
      ", " +
      di(gi.transform(l)) +
      ")",
  },
  Ke = {
    test: (n) => zn.test(n) || va.test(n) || dr.test(n),
    parse: (n) =>
      zn.test(n) ? zn.parse(n) : dr.test(n) ? dr.parse(n) : va.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
          ? zn.transform(n)
          : dr.transform(n),
  },
  qy = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Gy(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(lu)) === null || i === void 0 ? void 0 : i.length) ||
      0) +
    (((s = n.match(qy)) === null || s === void 0 ? void 0 : s.length) ||
      0) >
    0
  );
}
const Ch = "number",
  Th = "color",
  Qy = "var",
  Xy = "var(",
  Lf = "${}",
  Yy = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vi(n) {
  const i = n.toString(),
    s = [],
    l = { color: [], number: [], var: [] },
    u = [];
  let f = 0;
  const h = i
    .replace(
      Yy,
      (m) => (
        Ke.test(m)
          ? (l.color.push(f), u.push(Th), s.push(Ke.parse(m)))
          : m.startsWith(Xy)
            ? (l.var.push(f), u.push(Qy), s.push(m))
            : (l.number.push(f), u.push(Ch), s.push(parseFloat(m))),
        ++f,
        Lf
      )
    )
    .split(Lf);
  return { values: s, split: h, indexes: l, types: u };
}
function Eh(n) {
  return vi(n).values;
}
function jh(n) {
  const { split: i, types: s } = vi(n),
    l = i.length;
  return (u) => {
    let f = "";
    for (let d = 0; d < l; d++)
      if (((f += i[d]), u[d] !== void 0)) {
        const h = s[d];
        h === Ch
          ? (f += di(u[d]))
          : h === Th
            ? (f += Ke.transform(u[d]))
            : (f += u[d]);
      }
    return f;
  };
}
const Zy = (n) => (typeof n == "number" ? 0 : n);
function Jy(n) {
  const i = Eh(n);
  return jh(n)(i.map(Zy));
}
const yn = {
  test: Gy,
  parse: Eh,
  createTransformer: jh,
  getAnimatableNone: Jy,
},
  ev = new Set(["brightness", "contrast", "saturate", "opacity"]);
function tv(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [l] = s.match(lu) || [];
  if (!l) return n;
  const u = s.replace(l, "");
  let f = ev.has(i) ? 1 : 0;
  return l !== s && (f *= 100), i + "(" + f + u + ")";
}
const nv = /\b([a-z-]*)\(.*?\)/gu,
  xa = {
    ...yn,
    getAnimatableNone: (n) => {
      const i = n.match(nv);
      return i ? i.map(tv).join(" ") : n;
    },
  },
  rv = {
    ...Ka,
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: xa,
    WebkitFilter: xa,
  },
  uu = (n) => rv[n];
function Nh(n, i) {
  let s = uu(n);
  return (
    s !== xa && (s = yn),
    s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
  );
}
const iv = new Set(["auto", "none", "0"]);
function sv(n, i, s) {
  let l = 0,
    u;
  for (; l < n.length && !u;) {
    const f = n[l];
    typeof f == "string" && !iv.has(f) && vi(f).values.length && (u = n[l]),
      l++;
  }
  if (u && s) for (const f of i) n[f] = Nh(s, u);
}
const Vf = (n) => n === xr || n === te,
  _f = (n, i) => parseFloat(n.split(", ")[i]),
  zf = (n, i) => (s, { transform: l }) => {
    if (l === "none" || !l) return 0;
    const u = l.match(/^matrix3d\((.+)\)$/u);
    if (u) return _f(u[1], i);
    {
      const f = l.match(/^matrix\((.+)\)$/u);
      return f ? _f(f[1], n) : 0;
    }
  },
  ov = new Set(["x", "y", "z"]),
  lv = vr.filter((n) => !ov.has(n));
function av(n) {
  const i = [];
  return (
    lv.forEach((s) => {
      const l = n.getValue(s);
      l !== void 0 &&
        (i.push([s, l.get()]), l.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const yr = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: zf(4, 13),
  y: zf(5, 14),
};
yr.translateX = yr.x;
yr.translateY = yr.y;
const In = new Set();
let wa = !1,
  Sa = !1;
function Mh() {
  if (Sa) {
    const n = Array.from(In).filter((l) => l.needsMeasurement),
      i = new Set(n.map((l) => l.element)),
      s = new Map();
    i.forEach((l) => {
      const u = av(l);
      u.length && (s.set(l, u), l.render());
    }),
      n.forEach((l) => l.measureInitialState()),
      i.forEach((l) => {
        l.render();
        const u = s.get(l);
        u &&
          u.forEach(([f, d]) => {
            var h;
            (h = l.getValue(f)) === null ||
              h === void 0 ||
              h.set(d);
          });
      }),
      n.forEach((l) => l.measureEndState()),
      n.forEach((l) => {
        l.suspendedScrollY !== void 0 &&
          window.scrollTo(0, l.suspendedScrollY);
      });
  }
  (Sa = !1), (wa = !1), In.forEach((n) => n.complete()), In.clear();
}
function Ah() {
  In.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Sa = !0);
  });
}
function uv() {
  Ah(), Mh();
}
class cu {
  constructor(i, s, l, u, f, d = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = l),
      (this.motionValue = u),
      (this.element = f),
      (this.isAsync = d);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (In.add(this),
          wa || ((wa = !0), we.read(Ah), we.resolveKeyframes(Mh)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: s,
      element: l,
      motionValue: u,
    } = this;
    for (let f = 0; f < i.length; f++)
      if (i[f] === null)
        if (f === 0) {
          const d = u == null ? void 0 : u.get(),
            h = i[i.length - 1];
          if (d !== void 0) i[0] = d;
          else if (l && s) {
            const m = l.readValue(s, h);
            m != null && (i[0] = m);
          }
          i[0] === void 0 && (i[0] = h),
            u && d === void 0 && u.set(i[0]);
        } else i[f] = i[f - 1];
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      In.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), In.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Dh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  cv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function dv(n) {
  const i = cv.exec(n);
  if (!i) return [,];
  const [, s, l, u] = i;
  return [`--${s ?? l}`, u];
}
function Rh(n, i, s = 1) {
  const [l, u] = dv(n);
  if (!l) return;
  const f = window.getComputedStyle(i).getPropertyValue(l);
  if (f) {
    const d = f.trim();
    return Dh(d) ? parseFloat(d) : d;
  }
  return Ha(u) ? Rh(u, i, s + 1) : u;
}
const Lh = (n) => (i) => i.test(n),
  fv = { test: (n) => n === "auto", parse: (n) => n },
  Vh = [xr, te, zt, mn, ty, ey, fv],
  If = (n) => Vh.find(Lh(n));
class _h extends cu {
  constructor(i, s, l, u, f) {
    super(i, s, l, u, f, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: l } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let g = i[m];
      if (typeof g == "string" && ((g = g.trim()), Ha(g))) {
        const v = Rh(g, s.current);
        v !== void 0 && (i[m] = v),
          m === i.length - 1 && (this.finalKeyframe = g);
      }
    }
    if ((this.resolveNoneKeyframes(), !dh.has(l) || i.length !== 2)) return;
    const [u, f] = i,
      d = If(u),
      h = If(f);
    if (d !== h)
      if (Vf(d) && Vf(h))
        for (let m = 0; m < i.length; m++) {
          const g = i[m];
          typeof g == "string" && (i[m] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      l = [];
    for (let u = 0; u < i.length; u++) Uy(i[u]) && l.push(u);
    l.length && sv(i, l, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: l } = this;
    if (!i || !i.current) return;
    l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = yr[l](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
      (s[0] = this.measuredOrigin);
    const u = s[s.length - 1];
    u !== void 0 && i.getValue(l, u).jump(u, !1);
  }
  measureEndState() {
    var i;
    const { element: s, name: l, unresolvedKeyframes: u } = this;
    if (!s || !s.current) return;
    const f = s.getValue(l);
    f && f.jump(this.measuredOrigin, !1);
    const d = u.length - 1,
      h = u[d];
    (u[d] = yr[l](
      s.measureViewportBox(),
      window.getComputedStyle(s.current)
    )),
      h !== null &&
      this.finalKeyframe === void 0 &&
      (this.finalKeyframe = h),
      !((i = this.removedTransforms) === null || i === void 0) &&
      i.length &&
      this.removedTransforms.forEach(([m, g]) => {
        s.getValue(m).set(g);
      }),
      this.resolveNoneKeyframes();
  }
}
const Ff = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
      typeof n == "number" ||
      Array.isArray(n) ||
      (typeof n == "string" &&
        (yn.test(n) || n === "0") &&
        !n.startsWith("url("))
    );
function pv(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function hv(n, i, s, l) {
  const u = n[0];
  if (u === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const f = n[n.length - 1],
    d = Ff(u, i),
    h = Ff(f, i);
  return !d || !h ? !1 : pv(n) || ((s === "spring" || Ja(s)) && l);
}
const mv = (n) => n !== null;
function to(n, { repeat: i, repeatType: s = "loop" }, l) {
  const u = n.filter(mv),
    f = i && s !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
  return !f || l === void 0 ? u[f] : l;
}
const gv = 40;
class zh {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: l = "keyframes",
    repeat: u = 0,
    repeatDelay: f = 0,
    repeatType: d = "loop",
    ...h
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = It.now()),
      (this.options = {
        autoplay: i,
        delay: s,
        type: l,
        repeat: u,
        repeatDelay: f,
        repeatType: d,
        ...h,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > gv
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && uv(), this._resolved
    );
  }
  onKeyframesResolved(i, s) {
    (this.resolvedAt = It.now()), (this.hasAttemptedResolve = !0);
    const {
      name: l,
      type: u,
      velocity: f,
      delay: d,
      onComplete: h,
      onUpdate: m,
      isGenerator: g,
    } = this.options;
    if (!g && !hv(i, l, u, f))
      if (d) this.options.duration = 0;
      else {
        m && m(to(i, this.options, s)),
          h && h(),
          this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(i, s);
    v !== !1 &&
      ((this._resolved = { keyframes: i, finalKeyframe: s, ...v }),
        this.onPostResolved());
  }
  onPostResolved() { }
  then(i, s) {
    return this.currentFinishedPromise.then(i, s);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((i) => {
      this.resolveFinishedPromise = i;
    });
  }
}
const Ee = (n, i, s) => n + (i - n) * s;
function ia(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? n + (i - n) * 6 * s
      : s < 1 / 2
        ? i
        : s < 2 / 3
          ? n + (i - n) * (2 / 3 - s) * 6
          : n
  );
}
function yv({ hue: n, saturation: i, lightness: s, alpha: l }) {
  (n /= 360), (i /= 100), (s /= 100);
  let u = 0,
    f = 0,
    d = 0;
  if (!i) u = f = d = s;
  else {
    const h = s < 0.5 ? s * (1 + i) : s + i - s * i,
      m = 2 * s - h;
    (u = ia(m, h, n + 1 / 3)), (f = ia(m, h, n)), (d = ia(m, h, n - 1 / 3));
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(f * 255),
    blue: Math.round(d * 255),
    alpha: l,
  };
}
function Hs(n, i) {
  return (s) => (s > 0 ? i : n);
}
const sa = (n, i, s) => {
  const l = n * n,
    u = s * (i * i - l) + l;
  return u < 0 ? 0 : Math.sqrt(u);
},
  vv = [va, zn, dr],
  xv = (n) => vv.find((i) => i.test(n));
function Of(n) {
  const i = xv(n);
  if (!i) return !1;
  let s = i.parse(n);
  return i === dr && (s = yv(s)), s;
}
const Bf = (n, i) => {
  const s = Of(n),
    l = Of(i);
  if (!s || !l) return Hs(n, i);
  const u = { ...s };
  return (f) => (
    (u.red = sa(s.red, l.red, f)),
    (u.green = sa(s.green, l.green, f)),
    (u.blue = sa(s.blue, l.blue, f)),
    (u.alpha = Ee(s.alpha, l.alpha, f)),
    zn.transform(u)
  );
},
  wv = (n, i) => (s) => i(n(s)),
  ki = (...n) => n.reduce(wv),
  ka = new Set(["none", "hidden"]);
function Sv(n, i) {
  return ka.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function kv(n, i) {
  return (s) => Ee(n, i, s);
}
function du(n) {
  return typeof n == "number"
    ? kv
    : typeof n == "string"
      ? Ha(n)
        ? Hs
        : Ke.test(n)
          ? Bf
          : Tv
      : Array.isArray(n)
        ? Ih
        : typeof n == "object"
          ? Ke.test(n)
            ? Bf
            : Pv
          : Hs;
}
function Ih(n, i) {
  const s = [...n],
    l = s.length,
    u = n.map((f, d) => du(f)(f, i[d]));
  return (f) => {
    for (let d = 0; d < l; d++) s[d] = u[d](f);
    return s;
  };
}
function Pv(n, i) {
  const s = { ...n, ...i },
    l = {};
  for (const u in s)
    n[u] !== void 0 && i[u] !== void 0 && (l[u] = du(n[u])(n[u], i[u]));
  return (u) => {
    for (const f in l) s[f] = l[f](u);
    return s;
  };
}
function Cv(n, i) {
  var s;
  const l = [],
    u = { color: 0, var: 0, number: 0 };
  for (let f = 0; f < i.values.length; f++) {
    const d = i.types[f],
      h = n.indexes[d][u[d]],
      m = (s = n.values[h]) !== null && s !== void 0 ? s : 0;
    (l[f] = m), u[d]++;
  }
  return l;
}
const Tv = (n, i) => {
  const s = yn.createTransformer(i),
    l = vi(n),
    u = vi(i);
  return l.indexes.var.length === u.indexes.var.length &&
    l.indexes.color.length === u.indexes.color.length &&
    l.indexes.number.length >= u.indexes.number.length
    ? (ka.has(n) && !u.values.length) || (ka.has(i) && !l.values.length)
      ? Sv(n, i)
      : ki(Ih(Cv(l, u), u.values), s)
    : Hs(n, i);
};
function Fh(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Ee(n, i, s)
    : du(n)(n, i);
}
const Ev = 5;
function Oh(n, i, s) {
  const l = Math.max(i - Ev, 0);
  return fh(s - n(l), i - l);
}
const Me = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
},
  oa = 0.001;
function jv({
  duration: n = Me.duration,
  bounce: i = Me.bounce,
  velocity: s = Me.velocity,
  mass: l = Me.mass,
}) {
  let u,
    f,
    d = 1 - i;
  (d = Gt(Me.minDamping, Me.maxDamping, d)),
    (n = Gt(Me.minDuration, Me.maxDuration, qt(n))),
    d < 1
      ? ((u = (g) => {
        const v = g * d,
          w = v * n,
          P = v - s,
          N = Pa(g, d),
          _ = Math.exp(-w);
        return oa - (P / N) * _;
      }),
        (f = (g) => {
          const w = g * d * n,
            P = w * s + s,
            N = Math.pow(d, 2) * Math.pow(g, 2) * n,
            _ = Math.exp(-w),
            M = Pa(Math.pow(g, 2), d);
          return ((-u(g) + oa > 0 ? -1 : 1) * ((P - N) * _)) / M;
        }))
      : ((u = (g) => {
        const v = Math.exp(-g * n),
          w = (g - s) * n + 1;
        return -oa + v * w;
      }),
        (f = (g) => {
          const v = Math.exp(-g * n),
            w = (s - g) * (n * n);
          return v * w;
        }));
  const h = 5 / n,
    m = Mv(u, f, h);
  if (((n = Kt(n)), isNaN(m)))
    return { stiffness: Me.stiffness, damping: Me.damping, duration: n };
  {
    const g = Math.pow(m, 2) * l;
    return { stiffness: g, damping: d * 2 * Math.sqrt(l * g), duration: n };
  }
}
const Nv = 12;
function Mv(n, i, s) {
  let l = s;
  for (let u = 1; u < Nv; u++) l = l - n(l) / i(l);
  return l;
}
function Pa(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const Av = ["duration", "bounce"],
  Dv = ["stiffness", "damping", "mass"];
function bf(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function Rv(n) {
  let i = {
    velocity: Me.velocity,
    stiffness: Me.stiffness,
    damping: Me.damping,
    mass: Me.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!bf(n, Dv) && bf(n, Av))
    if (n.visualDuration) {
      const s = n.visualDuration,
        l = (2 * Math.PI) / (s * 1.2),
        u = l * l,
        f = 2 * Gt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
      i = { ...i, mass: Me.mass, stiffness: u, damping: f };
    } else {
      const s = jv(n);
      (i = { ...i, ...s, mass: Me.mass }),
        (i.isResolvedFromDuration = !0);
    }
  return i;
}
function Bh(n = Me.visualDuration, i = Me.bounce) {
  const s =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: l, restDelta: u } = s;
  const f = s.keyframes[0],
    d = s.keyframes[s.keyframes.length - 1],
    h = { done: !1, value: f },
    {
      stiffness: m,
      damping: g,
      mass: v,
      duration: w,
      velocity: P,
      isResolvedFromDuration: N,
    } = Rv({ ...s, velocity: -qt(s.velocity || 0) }),
    _ = P || 0,
    M = g / (2 * Math.sqrt(m * v)),
    L = d - f,
    I = qt(Math.sqrt(m / v)),
    U = Math.abs(L) < 5;
  l || (l = U ? Me.restSpeed.granular : Me.restSpeed.default),
    u || (u = U ? Me.restDelta.granular : Me.restDelta.default);
  let H;
  if (M < 1) {
    const B = Pa(I, M);
    H = (ee) => {
      const le = Math.exp(-M * I * ee);
      return (
        d -
        le *
        (((_ + M * I * L) / B) * Math.sin(B * ee) +
          L * Math.cos(B * ee))
      );
    };
  } else if (M === 1) H = (B) => d - Math.exp(-I * B) * (L + (_ + I * L) * B);
  else {
    const B = I * Math.sqrt(M * M - 1);
    H = (ee) => {
      const le = Math.exp(-M * I * ee),
        X = Math.min(B * ee, 300);
      return (
        d -
        (le * ((_ + M * I * L) * Math.sinh(X) + B * L * Math.cosh(X))) /
        B
      );
    };
  }
  const Q = {
    calculatedDuration: (N && w) || null,
    next: (B) => {
      const ee = H(B);
      if (N) h.done = B >= w;
      else {
        let le = 0;
        M < 1 && (le = B === 0 ? Kt(_) : Oh(H, B, ee));
        const X = Math.abs(le) <= l,
          ye = Math.abs(d - ee) <= u;
        h.done = X && ye;
      }
      return (h.value = h.done ? d : ee), h;
    },
    toString: () => {
      const B = Math.min(ih(Q), ma),
        ee = sh((le) => Q.next(B * le).value, B, 30);
      return B + "ms " + ee;
    },
  };
  return Q;
}
function Uf({
  keyframes: n,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: l = 325,
  bounceDamping: u = 10,
  bounceStiffness: f = 500,
  modifyTarget: d,
  min: h,
  max: m,
  restDelta: g = 0.5,
  restSpeed: v,
}) {
  const w = n[0],
    P = { done: !1, value: w },
    N = (X) => (h !== void 0 && X < h) || (m !== void 0 && X > m),
    _ = (X) =>
      h === void 0
        ? m
        : m === void 0 || Math.abs(h - X) < Math.abs(m - X)
          ? h
          : m;
  let M = s * i;
  const L = w + M,
    I = d === void 0 ? L : d(L);
  I !== L && (M = I - w);
  const U = (X) => -M * Math.exp(-X / l),
    H = (X) => I + U(X),
    Q = (X) => {
      const ye = U(X),
        je = H(X);
      (P.done = Math.abs(ye) <= g), (P.value = P.done ? I : je);
    };
  let B, ee;
  const le = (X) => {
    N(P.value) &&
      ((B = X),
        (ee = Bh({
          keyframes: [P.value, _(P.value)],
          velocity: Oh(H, X, P.value),
          damping: u,
          stiffness: f,
          restDelta: g,
          restSpeed: v,
        })));
  };
  return (
    le(0),
    {
      calculatedDuration: null,
      next: (X) => {
        let ye = !1;
        return (
          !ee && B === void 0 && ((ye = !0), Q(X), le(X)),
          B !== void 0 && X >= B ? ee.next(X - B) : (!ye && Q(X), P)
        );
      },
    }
  );
}
const Lv = Si(0.42, 0, 1, 1),
  Vv = Si(0, 0, 0.58, 1),
  bh = Si(0.42, 0, 0.58, 1),
  _v = (n) => Array.isArray(n) && typeof n[0] != "number",
  zv = {
    linear: ft,
    easeIn: Lv,
    easeInOut: bh,
    easeOut: Vv,
    circIn: ou,
    circInOut: Sh,
    circOut: wh,
    backIn: su,
    backInOut: vh,
    backOut: yh,
    anticipate: xh,
  },
  Wf = (n) => {
    if (eu(n)) {
      Fp(n.length === 4);
      const [i, s, l, u] = n;
      return Si(i, s, l, u);
    } else if (typeof n == "string") return zv[n];
    return n;
  };
function Iv(n, i, s) {
  const l = [],
    u = s || Fh,
    f = n.length - 1;
  for (let d = 0; d < f; d++) {
    let h = u(n[d], n[d + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[d] || ft : i;
      h = ki(m, h);
    }
    l.push(h);
  }
  return l;
}
function Fv(n, i, { clamp: s = !0, ease: l, mixer: u } = {}) {
  const f = n.length;
  if ((Fp(f === i.length), f === 1)) return () => i[0];
  if (f === 2 && i[0] === i[1]) return () => i[1];
  const d = n[0] === n[1];
  n[0] > n[f - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const h = Iv(i, l, u),
    m = h.length,
    g = (v) => {
      if (d && v < n[0]) return i[0];
      let w = 0;
      if (m > 1) for (; w < n.length - 2 && !(v < n[w + 1]); w++);
      const P = mr(n[w], n[w + 1], v);
      return h[w](P);
    };
  return s ? (v) => g(Gt(n[0], n[f - 1], v)) : g;
}
function Ov(n, i) {
  const s = n[n.length - 1];
  for (let l = 1; l <= i; l++) {
    const u = mr(0, i, l);
    n.push(Ee(s, 1, u));
  }
}
function Bv(n) {
  const i = [0];
  return Ov(i, n.length - 1), i;
}
function bv(n, i) {
  return n.map((s) => s * i);
}
function Uv(n, i) {
  return n.map(() => i || bh).splice(0, n.length - 1);
}
function Ks({
  duration: n = 300,
  keyframes: i,
  times: s,
  ease: l = "easeInOut",
}) {
  const u = _v(l) ? l.map(Wf) : Wf(l),
    f = { done: !1, value: i[0] },
    d = bv(s && s.length === i.length ? s : Bv(i), n),
    h = Fv(d, i, { ease: Array.isArray(u) ? u : Uv(i, u) });
  return {
    calculatedDuration: n,
    next: (m) => ((f.value = h(m)), (f.done = m >= n), f),
  };
}
const Wv = (n) => {
  const i = ({ timestamp: s }) => n(s);
  return {
    start: () => we.update(i, !0),
    stop: () => gn(i),
    now: () => (be.isProcessing ? be.timestamp : It.now()),
  };
},
  $v = { decay: Uf, inertia: Uf, tween: Ks, keyframes: Ks, spring: Bh },
  Hv = (n) => n / 100;
class fu extends zh {
  constructor(i) {
    super(i),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: m } = this.options;
        m && m();
      });
    const {
      name: s,
      motionValue: l,
      element: u,
      keyframes: f,
    } = this.options,
      d = (u == null ? void 0 : u.KeyframeResolver) || cu,
      h = (m, g) => this.onKeyframesResolved(m, g);
    (this.resolver = new d(f, h, s, l, u)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
      Object.assign(
        this._resolved,
        this.initPlayback(this._resolved.keyframes)
      );
  }
  initPlayback(i) {
    const {
      type: s = "keyframes",
      repeat: l = 0,
      repeatDelay: u = 0,
      repeatType: f,
      velocity: d = 0,
    } = this.options,
      h = Ja(s) ? s : $v[s] || Ks;
    let m, g;
    h !== Ks &&
      typeof i[0] != "number" &&
      ((m = ki(Hv, Fh(i[0], i[1]))), (i = [0, 100]));
    const v = h({ ...this.options, keyframes: i });
    f === "mirror" &&
      (g = h({
        ...this.options,
        keyframes: [...i].reverse(),
        velocity: -d,
      })),
      v.calculatedDuration === null && (v.calculatedDuration = ih(v));
    const { calculatedDuration: w } = v,
      P = w + u,
      N = P * (l + 1) - u;
    return {
      generator: v,
      mirroredGenerator: g,
      mapPercentToKeyframes: m,
      calculatedDuration: w,
      resolvedDuration: P,
      totalDuration: N,
    };
  }
  onPostResolved() {
    const { autoplay: i = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !i
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(i, s = !1) {
    const { resolved: l } = this;
    if (!l) {
      const { keyframes: X } = this.options;
      return { done: !0, value: X[X.length - 1] };
    }
    const {
      finalKeyframe: u,
      generator: f,
      mirroredGenerator: d,
      mapPercentToKeyframes: h,
      keyframes: m,
      calculatedDuration: g,
      totalDuration: v,
      resolvedDuration: w,
    } = l;
    if (this.startTime === null) return f.next(0);
    const {
      delay: P,
      repeat: N,
      repeatType: _,
      repeatDelay: M,
      onUpdate: L,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
      (this.startTime = Math.min(i - v / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime =
            Math.round(i - this.startTime) * this.speed);
    const I = this.currentTime - P * (this.speed >= 0 ? 1 : -1),
      U = this.speed >= 0 ? I < 0 : I > v;
    (this.currentTime = Math.max(I, 0)),
      this.state === "finished" &&
      this.holdTime === null &&
      (this.currentTime = v);
    let H = this.currentTime,
      Q = f;
    if (N) {
      const X = Math.min(this.currentTime, v) / w;
      let ye = Math.floor(X),
        je = X % 1;
      !je && X >= 1 && (je = 1),
        je === 1 && ye--,
        (ye = Math.min(ye, N + 1)),
        !!(ye % 2) &&
        (_ === "reverse"
          ? ((je = 1 - je), M && (je -= M / w))
          : _ === "mirror" && (Q = d)),
        (H = Gt(0, 1, je) * w);
    }
    const B = U ? { done: !1, value: m[0] } : Q.next(H);
    h && (B.value = h(B.value));
    let { done: ee } = B;
    !U &&
      g !== null &&
      (ee =
        this.speed >= 0
          ? this.currentTime >= v
          : this.currentTime <= 0);
    const le =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && ee));
    return (
      le && u !== void 0 && (B.value = to(m, this.options, u)),
      L && L(B.value),
      le && this.finish(),
      B
    );
  }
  get duration() {
    const { resolved: i } = this;
    return i ? qt(i.calculatedDuration) : 0;
  }
  get time() {
    return qt(this.currentTime);
  }
  set time(i) {
    (i = Kt(i)),
      (this.currentTime = i),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = i)
        : this.driver &&
        (this.startTime = this.driver.now() - i / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const s = this.playbackSpeed !== i;
    (this.playbackSpeed = i), s && (this.time = qt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: i = Wv, onPlay: s, startTime: l } = this.options;
    this.driver || (this.driver = i((f) => this.tick(f))), s && s();
    const u = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = u - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = u)
        : (this.startTime = l ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var i;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime =
        (i = this.currentTime) !== null && i !== void 0 ? i : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: i } = this.options;
    i && i();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0);
  }
}
const Kv = new Set(["opacity", "clipPath", "filter", "transform"]);
function qv(
  n,
  i,
  s,
  {
    delay: l = 0,
    duration: u = 300,
    repeat: f = 0,
    repeatType: d = "loop",
    ease: h = "easeInOut",
    times: m,
  } = {}
) {
  const g = { [i]: s };
  m && (g.offset = m);
  const v = lh(h, u);
  return (
    Array.isArray(v) && (g.easing = v),
    n.animate(g, {
      delay: l,
      duration: u,
      easing: Array.isArray(v) ? "linear" : v,
      fill: "both",
      iterations: f + 1,
      direction: d === "reverse" ? "alternate" : "normal",
    })
  );
}
const Gv = Fa(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  qs = 10,
  Qv = 2e4;
function Xv(n) {
  return Ja(n.type) || n.type === "spring" || !oh(n.ease);
}
function Yv(n, i) {
  const s = new fu({
    ...i,
    keyframes: n,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let l = { done: !1, value: n[0] };
  const u = [];
  let f = 0;
  for (; !l.done && f < Qv;) (l = s.sample(f)), u.push(l.value), (f += qs);
  return { times: void 0, keyframes: u, duration: f - qs, ease: "linear" };
}
const Uh = { anticipate: xh, backInOut: vh, circInOut: Sh };
function Zv(n) {
  return n in Uh;
}
class $f extends zh {
  constructor(i) {
    super(i);
    const {
      name: s,
      motionValue: l,
      element: u,
      keyframes: f,
    } = this.options;
    (this.resolver = new _h(
      f,
      (d, h) => this.onKeyframesResolved(d, h),
      s,
      l,
      u
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(i, s) {
    let {
      duration: l = 300,
      times: u,
      ease: f,
      type: d,
      motionValue: h,
      name: m,
      startTime: g,
    } = this.options;
    if (!h.owner || !h.owner.current) return !1;
    if (
      (typeof f == "string" && $s() && Zv(f) && (f = Uh[f]),
        Xv(this.options))
    ) {
      const {
        onComplete: w,
        onUpdate: P,
        motionValue: N,
        element: _,
        ...M
      } = this.options,
        L = Yv(i, M);
      (i = L.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (l = L.duration),
        (u = L.times),
        (f = L.ease),
        (d = "keyframes");
    }
    const v = qv(h.owner.current, m, i, {
      ...this.options,
      duration: l,
      times: u,
      ease: f,
    });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Nf(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
          const { onComplete: w } = this.options;
          h.set(to(i, this.options, s)),
            w && w(),
            this.cancel(),
            this.resolveFinishedPromise();
        }),
      {
        animation: v,
        duration: l,
        times: u,
        type: d,
        ease: f,
        keyframes: i,
      }
    );
  }
  get duration() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { duration: s } = i;
    return qt(s);
  }
  get time() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { animation: s } = i;
    return qt(s.currentTime || 0);
  }
  set time(i) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: l } = s;
    l.currentTime = Kt(i);
  }
  get speed() {
    const { resolved: i } = this;
    if (!i) return 1;
    const { animation: s } = i;
    return s.playbackRate;
  }
  set speed(i) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: l } = s;
    l.playbackRate = i;
  }
  get state() {
    const { resolved: i } = this;
    if (!i) return "idle";
    const { animation: s } = i;
    return s.playState;
  }
  get startTime() {
    const { resolved: i } = this;
    if (!i) return null;
    const { animation: s } = i;
    return s.startTime;
  }
  attachTimeline(i) {
    if (!this._resolved) this.pendingTimeline = i;
    else {
      const { resolved: s } = this;
      if (!s) return ft;
      const { animation: l } = s;
      Nf(l, i);
    }
    return ft;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    s.playState === "finished" && this.updateFinishedPromise(), s.play();
  }
  pause() {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    s.pause();
  }
  stop() {
    if (
      (this.resolver.cancel(),
        (this.isStopped = !0),
        this.state === "idle")
    )
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: i } = this;
    if (!i) return;
    const {
      animation: s,
      keyframes: l,
      duration: u,
      type: f,
      ease: d,
      times: h,
    } = i;
    if (s.playState === "idle" || s.playState === "finished") return;
    if (this.time) {
      const {
        motionValue: g,
        onUpdate: v,
        onComplete: w,
        element: P,
        ...N
      } = this.options,
        _ = new fu({
          ...N,
          keyframes: l,
          duration: u,
          type: f,
          ease: d,
          times: h,
          isGenerator: !0,
        }),
        M = Kt(this.time);
      g.setWithVelocity(_.sample(M - qs).value, _.sample(M).value, qs);
    }
    const { onStop: m } = this.options;
    m && m(), this.cancel();
  }
  complete() {
    const { resolved: i } = this;
    i && i.animation.finish();
  }
  cancel() {
    const { resolved: i } = this;
    i && i.animation.cancel();
  }
  static supports(i) {
    const {
      motionValue: s,
      name: l,
      repeatDelay: u,
      repeatType: f,
      damping: d,
      type: h,
    } = i;
    if (!s || !s.owner || !(s.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: m, transformTemplate: g } = s.owner.getProps();
    return (
      Gv() &&
      l &&
      Kv.has(l) &&
      !m &&
      !g &&
      !u &&
      f !== "mirror" &&
      d !== 0 &&
      h !== "inertia"
    );
  }
}
const Jv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ex = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  tx = { type: "keyframes", duration: 0.8 },
  nx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  rx = (n, { keyframes: i }) =>
    i.length > 2
      ? tx
      : Fn.has(n)
        ? n.startsWith("scale")
          ? ex(i[1])
          : Jv
        : nx;
function ix({
  when: n,
  delay: i,
  delayChildren: s,
  staggerChildren: l,
  staggerDirection: u,
  repeat: f,
  repeatType: d,
  repeatDelay: h,
  from: m,
  elapsed: g,
  ...v
}) {
  return !!Object.keys(v).length;
}
const pu = (n, i, s, l = {}, u, f) => (d) => {
  const h = Za(l, n) || {},
    m = h.delay || l.delay || 0;
  let { elapsed: g = 0 } = l;
  g = g - Kt(m);
  let v = {
    keyframes: Array.isArray(s) ? s : [null, s],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...h,
    delay: -g,
    onUpdate: (P) => {
      i.set(P), h.onUpdate && h.onUpdate(P);
    },
    onComplete: () => {
      d(), h.onComplete && h.onComplete();
    },
    name: n,
    motionValue: i,
    element: f ? void 0 : u,
  };
  ix(h) || (v = { ...v, ...rx(n, v) }),
    v.duration && (v.duration = Kt(v.duration)),
    v.repeatDelay && (v.repeatDelay = Kt(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
  let w = !1;
  if (
    ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
      ((v.duration = 0), v.delay === 0 && (w = !0)),
      w && !f && i.get() !== void 0)
  ) {
    const P = to(v.keyframes, h);
    if (P !== void 0)
      return (
        we.update(() => {
          v.onUpdate(P), v.onComplete();
        }),
        new Py([])
      );
  }
  return !f && $f.supports(v) ? new $f(v) : new fu(v);
};
function sx({ protectedKeys: n, needsAnimating: i }, s) {
  const l = n.hasOwnProperty(s) && i[s] !== !0;
  return (i[s] = !1), l;
}
function Wh(n, i, { delay: s = 0, transitionOverride: l, type: u } = {}) {
  var f;
  let {
    transition: d = n.getDefaultTransition(),
    transitionEnd: h,
    ...m
  } = i;
  l && (d = l);
  const g = [],
    v = u && n.animationState && n.animationState.getState()[u];
  for (const w in m) {
    const P = n.getValue(
      w,
      (f = n.latestValues[w]) !== null && f !== void 0 ? f : null
    ),
      N = m[w];
    if (N === void 0 || (v && sx(v, w))) continue;
    const _ = { delay: s, ...Za(d || {}, w) };
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const I = ph(n);
      if (I) {
        const U = window.MotionHandoffAnimation(I, w, we);
        U !== null && ((_.startTime = U), (M = !0));
      }
    }
    ya(n, w),
      P.start(
        pu(
          w,
          P,
          N,
          n.shouldReduceMotion && dh.has(w) ? { type: !1 } : _,
          n,
          M
        )
      );
    const L = P.animation;
    L && g.push(L);
  }
  return (
    h &&
    Promise.all(g).then(() => {
      we.update(() => {
        h && Iy(n, h);
      });
    }),
    g
  );
}
function Ca(n, i, s = {}) {
  var l;
  const u = eo(
    n,
    i,
    s.type === "exit"
      ? (l = n.presenceContext) === null || l === void 0
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: f = n.getDefaultTransition() || {} } = u || {};
  s.transitionOverride && (f = s.transitionOverride);
  const d = u ? () => Promise.all(Wh(n, u, s)) : () => Promise.resolve(),
    h =
      n.variantChildren && n.variantChildren.size
        ? (g = 0) => {
          const {
            delayChildren: v = 0,
            staggerChildren: w,
            staggerDirection: P,
          } = f;
          return ox(n, i, v + g, w, P, s);
        }
        : () => Promise.resolve(),
    { when: m } = f;
  if (m) {
    const [g, v] = m === "beforeChildren" ? [d, h] : [h, d];
    return g().then(() => v());
  } else return Promise.all([d(), h(s.delay)]);
}
function ox(n, i, s = 0, l = 0, u = 1, f) {
  const d = [],
    h = (n.variantChildren.size - 1) * l,
    m = u === 1 ? (g = 0) => g * l : (g = 0) => h - g * l;
  return (
    Array.from(n.variantChildren)
      .sort(lx)
      .forEach((g, v) => {
        g.notify("AnimationStart", i),
          d.push(
            Ca(g, i, { ...f, delay: s + m(v) }).then(() =>
              g.notify("AnimationComplete", i)
            )
          );
      }),
    Promise.all(d)
  );
}
function lx(n, i) {
  return n.sortNodePosition(i);
}
function ax(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let l;
  if (Array.isArray(i)) {
    const u = i.map((f) => Ca(n, f, s));
    l = Promise.all(u);
  } else if (typeof i == "string") l = Ca(n, i, s);
  else {
    const u = typeof i == "function" ? eo(n, i, s.custom) : i;
    l = Promise.all(Wh(n, u, s));
  }
  return l.then(() => {
    n.notify("AnimationComplete", i);
  });
}
const ux = Ba.length;
function $h(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? $h(n.parent) || {} : {};
    return n.props.initial !== void 0 && (s.initial = n.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < ux; s++) {
    const l = Ba[s],
      u = n.props[l];
    (mi(u) || u === !1) && (i[l] = u);
  }
  return i;
}
const cx = [...Oa].reverse(),
  dx = Oa.length;
function fx(n) {
  return (i) =>
    Promise.all(i.map(({ animation: s, options: l }) => ax(n, s, l)));
}
function px(n) {
  let i = fx(n),
    s = Hf(),
    l = !0;
  const u = (m) => (g, v) => {
    var w;
    const P = eo(
      n,
      v,
      m === "exit"
        ? (w = n.presenceContext) === null || w === void 0
          ? void 0
          : w.custom
        : void 0
    );
    if (P) {
      const { transition: N, transitionEnd: _, ...M } = P;
      g = { ...g, ...M, ..._ };
    }
    return g;
  };
  function f(m) {
    i = m(n);
  }
  function d(m) {
    const { props: g } = n,
      v = $h(n.parent) || {},
      w = [],
      P = new Set();
    let N = {},
      _ = 1 / 0;
    for (let L = 0; L < dx; L++) {
      const I = cx[L],
        U = s[I],
        H = g[I] !== void 0 ? g[I] : v[I],
        Q = mi(H),
        B = I === m ? U.isActive : null;
      B === !1 && (_ = L);
      let ee = H === v[I] && H !== g[I] && Q;
      if (
        (ee && l && n.manuallyAnimateOnMount && (ee = !1),
          (U.protectedKeys = { ...N }),
          (!U.isActive && B === null) ||
          (!H && !U.prevProp) ||
          Zs(H) ||
          typeof H == "boolean")
      )
        continue;
      const le = hx(U.prevProp, H);
      let X = le || (I === m && U.isActive && !ee && Q) || (L > _ && Q),
        ye = !1;
      const je = Array.isArray(H) ? H : [H];
      let Ze = je.reduce(u(I), {});
      B === !1 && (Ze = {});
      const { prevResolvedValues: ot = {} } = U,
        Ge = { ...ot, ...Ze },
        Je = (ie) => {
          (X = !0),
            P.has(ie) && ((ye = !0), P.delete(ie)),
            (U.needsAnimating[ie] = !0);
          const F = n.getValue(ie);
          F && (F.liveStyle = !1);
        };
      for (const ie in Ge) {
        const F = Ze[ie],
          Y = ot[ie];
        if (N.hasOwnProperty(ie)) continue;
        let W = !1;
        ha(F) && ha(Y) ? (W = !rh(F, Y)) : (W = F !== Y),
          W
            ? F != null
              ? Je(ie)
              : P.add(ie)
            : F !== void 0 && P.has(ie)
              ? Je(ie)
              : (U.protectedKeys[ie] = !0);
      }
      (U.prevProp = H),
        (U.prevResolvedValues = Ze),
        U.isActive && (N = { ...N, ...Ze }),
        l && n.blockInitialAnimation && (X = !1),
        X &&
        (!(ee && le) || ye) &&
        w.push(
          ...je.map((ie) => ({
            animation: ie,
            options: { type: I },
          }))
        );
    }
    if (P.size) {
      const L = {};
      P.forEach((I) => {
        const U = n.getBaseTarget(I),
          H = n.getValue(I);
        H && (H.liveStyle = !0), (L[I] = U ?? null);
      }),
        w.push({ animation: L });
    }
    let M = !!w.length;
    return (
      l &&
      (g.initial === !1 || g.initial === g.animate) &&
      !n.manuallyAnimateOnMount &&
      (M = !1),
      (l = !1),
      M ? i(w) : Promise.resolve()
    );
  }
  function h(m, g) {
    var v;
    if (s[m].isActive === g) return Promise.resolve();
    (v = n.variantChildren) === null ||
      v === void 0 ||
      v.forEach((P) => {
        var N;
        return (N = P.animationState) === null || N === void 0
          ? void 0
          : N.setActive(m, g);
      }),
      (s[m].isActive = g);
    const w = d(m);
    for (const P in s) s[P].protectedKeys = {};
    return w;
  }
  return {
    animateChanges: d,
    setActive: h,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      (s = Hf()), (l = !0);
    },
  };
}
function hx(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !rh(i, n) : !1;
}
function Rn(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Hf() {
  return {
    animate: Rn(!0),
    whileInView: Rn(),
    whileHover: Rn(),
    whileTap: Rn(),
    whileDrag: Rn(),
    whileFocus: Rn(),
    exit: Rn(),
  };
}
class vn {
  constructor(i) {
    (this.isMounted = !1), (this.node = i);
  }
  update() { }
}
class mx extends vn {
  constructor(i) {
    super(i), i.animationState || (i.animationState = px(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Zs(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    this.node.animationState.reset(),
      (i = this.unmountControls) === null || i === void 0 || i.call(this);
  }
}
let gx = 0;
class yx extends vn {
  constructor() {
    super(...arguments), (this.id = gx++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === l) return;
    const u = this.node.animationState.setActive("exit", !i);
    s && !i && u.then(() => s(this.id));
  }
  mount() {
    const { register: i } = this.node.presenceContext || {};
    i && (this.unmount = i(this.id));
  }
  unmount() { }
}
const vx = { animation: { Feature: mx }, exit: { Feature: yx } };
function xi(n, i, s, l = { passive: !0 }) {
  return n.addEventListener(i, s, l), () => n.removeEventListener(i, s);
}
function Pi(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const xx = (n) => (i) => tu(i) && n(i, Pi(i));
function fi(n, i, s, l) {
  return xi(n, i, xx(s), l);
}
const Kf = (n, i) => Math.abs(n - i);
function wx(n, i) {
  const s = Kf(n.x, i.x),
    l = Kf(n.y, i.y);
  return Math.sqrt(s ** 2 + l ** 2);
}
class Hh {
  constructor(
    i,
    s,
    {
      transformPagePoint: l,
      contextWindow: u,
      dragSnapToOrigin: f = !1,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const w = aa(this.lastMoveEventInfo, this.history),
            P = this.startEvent !== null,
            N = wx(w.offset, { x: 0, y: 0 }) >= 3;
          if (!P && !N) return;
          const { point: _ } = w,
            { timestamp: M } = be;
          this.history.push({ ..._, timestamp: M });
          const { onStart: L, onMove: I } = this.handlers;
          P ||
            (L && L(this.lastMoveEvent, w),
              (this.startEvent = this.lastMoveEvent)),
            I && I(this.lastMoveEvent, w);
        }),
        (this.handlePointerMove = (w, P) => {
          (this.lastMoveEvent = w),
            (this.lastMoveEventInfo = la(P, this.transformPagePoint)),
            we.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (w, P) => {
          this.end();
          const {
            onEnd: N,
            onSessionEnd: _,
            resumeAnimation: M,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && M && M(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const L = aa(
            w.type === "pointercancel"
              ? this.lastMoveEventInfo
              : la(P, this.transformPagePoint),
            this.history
          );
          this.startEvent && N && N(w, L), _ && _(w, L);
        }),
        !tu(i))
    )
      return;
    (this.dragSnapToOrigin = f),
      (this.handlers = s),
      (this.transformPagePoint = l),
      (this.contextWindow = u || window);
    const d = Pi(i),
      h = la(d, this.transformPagePoint),
      { point: m } = h,
      { timestamp: g } = be;
    this.history = [{ ...m, timestamp: g }];
    const { onSessionStart: v } = s;
    v && v(i, aa(h, this.history)),
      (this.removeListeners = ki(
        fi(this.contextWindow, "pointermove", this.handlePointerMove),
        fi(this.contextWindow, "pointerup", this.handlePointerUp),
        fi(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), gn(this.updatePoint);
  }
}
function la(n, i) {
  return i ? { point: i(n.point) } : n;
}
function qf(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function aa({ point: n }, i) {
  return {
    point: n,
    delta: qf(n, Kh(i)),
    offset: qf(n, Sx(i)),
    velocity: kx(i, 0.1),
  };
}
function Sx(n) {
  return n[0];
}
function Kh(n) {
  return n[n.length - 1];
}
function kx(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    l = null;
  const u = Kh(n);
  for (; s >= 0 && ((l = n[s]), !(u.timestamp - l.timestamp > Kt(i)));) s--;
  if (!l) return { x: 0, y: 0 };
  const f = qt(u.timestamp - l.timestamp);
  if (f === 0) return { x: 0, y: 0 };
  const d = { x: (u.x - l.x) / f, y: (u.y - l.y) / f };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
const qh = 1e-4,
  Px = 1 - qh,
  Cx = 1 + qh,
  Gh = 0.01,
  Tx = 0 - Gh,
  Ex = 0 + Gh;
function pt(n) {
  return n.max - n.min;
}
function jx(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Gf(n, i, s, l = 0.5) {
  (n.origin = l),
    (n.originPoint = Ee(i.min, i.max, n.origin)),
    (n.scale = pt(s) / pt(i)),
    (n.translate = Ee(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= Px && n.scale <= Cx) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= Tx && n.translate <= Ex) || isNaN(n.translate)) &&
    (n.translate = 0);
}
function pi(n, i, s, l) {
  Gf(n.x, i.x, s.x, l ? l.originX : void 0),
    Gf(n.y, i.y, s.y, l ? l.originY : void 0);
}
function Qf(n, i, s) {
  (n.min = s.min + i.min), (n.max = n.min + pt(i));
}
function Nx(n, i, s) {
  Qf(n.x, i.x, s.x), Qf(n.y, i.y, s.y);
}
function Xf(n, i, s) {
  (n.min = i.min - s.min), (n.max = n.min + pt(i));
}
function hi(n, i, s) {
  Xf(n.x, i.x, s.x), Xf(n.y, i.y, s.y);
}
function Mx(n, { min: i, max: s }, l) {
  return (
    i !== void 0 && n < i
      ? (n = l ? Ee(i, n, l.min) : Math.max(n, i))
      : s !== void 0 &&
      n > s &&
      (n = l ? Ee(s, n, l.max) : Math.min(n, s)),
    n
  );
}
function Yf(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function Ax(n, { top: i, left: s, bottom: l, right: u }) {
  return { x: Yf(n.x, s, u), y: Yf(n.y, i, l) };
}
function Zf(n, i) {
  let s = i.min - n.min,
    l = i.max - n.max;
  return (
    i.max - i.min < n.max - n.min && ([s, l] = [l, s]), { min: s, max: l }
  );
}
function Dx(n, i) {
  return { x: Zf(n.x, i.x), y: Zf(n.y, i.y) };
}
function Rx(n, i) {
  let s = 0.5;
  const l = pt(n),
    u = pt(i);
  return (
    u > l
      ? (s = mr(i.min, i.max - l, n.min))
      : l > u && (s = mr(n.min, n.max - u, i.min)),
    Gt(0, 1, s)
  );
}
function Lx(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const Ta = 0.35;
function Vx(n = Ta) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ta),
    { x: Jf(n, "left", "right"), y: Jf(n, "top", "bottom") }
  );
}
function Jf(n, i, s) {
  return { min: ep(n, i), max: ep(n, s) };
}
function ep(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const tp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fr = () => ({ x: tp(), y: tp() }),
  np = () => ({ min: 0, max: 0 }),
  Re = () => ({ x: np(), y: np() });
function St(n) {
  return [n("x"), n("y")];
}
function Qh({ top: n, left: i, right: s, bottom: l }) {
  return { x: { min: i, max: s }, y: { min: n, max: l } };
}
function _x({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function zx(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    l = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: l.y, right: l.x };
}
function ua(n) {
  return n === void 0 || n === 1;
}
function Ea({ scale: n, scaleX: i, scaleY: s }) {
  return !ua(n) || !ua(i) || !ua(s);
}
function Vn(n) {
  return (
    Ea(n) ||
    Xh(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function Xh(n) {
  return rp(n.x) || rp(n.y);
}
function rp(n) {
  return n && n !== "0%";
}
function Gs(n, i, s) {
  const l = n - s,
    u = i * l;
  return s + u;
}
function ip(n, i, s, l, u) {
  return u !== void 0 && (n = Gs(n, u, l)), Gs(n, s, l) + i;
}
function ja(n, i = 0, s = 1, l, u) {
  (n.min = ip(n.min, i, s, l, u)), (n.max = ip(n.max, i, s, l, u));
}
function Yh(n, { x: i, y: s }) {
  ja(n.x, i.translate, i.scale, i.originPoint),
    ja(n.y, s.translate, s.scale, s.originPoint);
}
const sp = 0.999999999999,
  op = 1.0000000000001;
function Ix(n, i, s, l = !1) {
  const u = s.length;
  if (!u) return;
  i.x = i.y = 1;
  let f, d;
  for (let h = 0; h < u; h++) {
    (f = s[h]), (d = f.projectionDelta);
    const { visualElement: m } = f.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (l &&
        f.options.layoutScroll &&
        f.scroll &&
        f !== f.root &&
        hr(n, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
        d && ((i.x *= d.x.scale), (i.y *= d.y.scale), Yh(n, d)),
        l && Vn(f.latestValues) && hr(n, f.latestValues));
  }
  i.x < op && i.x > sp && (i.x = 1), i.y < op && i.y > sp && (i.y = 1);
}
function pr(n, i) {
  (n.min = n.min + i), (n.max = n.max + i);
}
function lp(n, i, s, l, u = 0.5) {
  const f = Ee(n.min, n.max, u);
  ja(n, i, s, f, l);
}
function hr(n, i) {
  lp(n.x, i.x, i.scaleX, i.scale, i.originX),
    lp(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function Zh(n, i) {
  return Qh(zx(n.getBoundingClientRect(), i));
}
function Fx(n, i, s) {
  const l = Zh(n, s),
    { scroll: u } = i;
  return u && (pr(l.x, u.offset.x), pr(l.y, u.offset.y)), l;
}
const Jh = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Ox = new WeakMap();
class Bx {
  constructor(i) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Re()),
      (this.visualElement = i);
  }
  start(i, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const u = (v) => {
      const { dragSnapToOrigin: w } = this.getProps();
      w ? this.pauseAnimation() : this.stopAnimation(),
        s && this.snapToCursor(Pi(v).point);
    },
      f = (v, w) => {
        const {
          drag: P,
          dragPropagation: N,
          onDragStart: _,
        } = this.getProps();
        if (
          P &&
          !N &&
          (this.openDragLock && this.openDragLock(),
            (this.openDragLock = Ry(P)),
            !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
          ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          St((L) => {
            let I = this.getAxisMotionValue(L).get() || 0;
            if (zt.test(I)) {
              const { projection: U } = this.visualElement;
              if (U && U.layout) {
                const H = U.layout.layoutBox[L];
                H && (I = pt(H) * (parseFloat(I) / 100));
              }
            }
            this.originPoint[L] = I;
          }),
          _ && we.postRender(() => _(v, w)),
          ya(this.visualElement, "transform");
        const { animationState: M } = this.visualElement;
        M && M.setActive("whileDrag", !0);
      },
      d = (v, w) => {
        const {
          dragPropagation: P,
          dragDirectionLock: N,
          onDirectionLock: _,
          onDrag: M,
        } = this.getProps();
        if (!P && !this.openDragLock) return;
        const { offset: L } = w;
        if (N && this.currentDirection === null) {
          (this.currentDirection = bx(L)),
            this.currentDirection !== null &&
            _ &&
            _(this.currentDirection);
          return;
        }
        this.updateAxis("x", w.point, L),
          this.updateAxis("y", w.point, L),
          this.visualElement.render(),
          M && M(v, w);
      },
      h = (v, w) => this.stop(v, w),
      m = () =>
        St((v) => {
          var w;
          return (
            this.getAnimationState(v) === "paused" &&
            ((w = this.getAxisMotionValue(v).animation) === null ||
              w === void 0
              ? void 0
              : w.play())
          );
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Hh(
      i,
      {
        onSessionStart: u,
        onStart: f,
        onMove: d,
        onSessionEnd: h,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: Jh(this.visualElement),
      }
    );
  }
  stop(i, s) {
    const l = this.isDragging;
    if ((this.cancel(), !l)) return;
    const { velocity: u } = s;
    this.startAnimation(u);
    const { onDragEnd: f } = this.getProps();
    f && we.postRender(() => f(i, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: l } = this.getProps();
    !l &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1);
  }
  updateAxis(i, s, l) {
    const { drag: u } = this.getProps();
    if (!l || !Fs(i, u, this.currentDirection)) return;
    const f = this.getAxisMotionValue(i);
    let d = this.originPoint[i] + l[i];
    this.constraints &&
      this.constraints[i] &&
      (d = Mx(d, this.constraints[i], this.elastic[i])),
      f.set(d);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: s, dragElastic: l } = this.getProps(),
      u =
        this.visualElement.projection &&
          !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) === null ||
            i === void 0
            ? void 0
            : i.layout,
      f = this.constraints;
    s && cr(s)
      ? this.constraints ||
      (this.constraints = this.resolveRefConstraints())
      : s && u
        ? (this.constraints = Ax(u.layoutBox, s))
        : (this.constraints = !1),
      (this.elastic = Vx(l)),
      f !== this.constraints &&
      u &&
      this.constraints &&
      !this.hasMutatedConstraints &&
      St((d) => {
        this.constraints !== !1 &&
          this.getAxisMotionValue(d) &&
          (this.constraints[d] = Lx(
            u.layoutBox[d],
            this.constraints[d]
          ));
      });
  }
  resolveRefConstraints() {
    const {
      dragConstraints: i,
      onMeasureDragConstraints: s,
    } = this.getProps();
    if (!i || !cr(i)) return !1;
    const l = i.current,
      { projection: u } = this.visualElement;
    if (!u || !u.layout) return !1;
    const f = Fx(l, u.root, this.visualElement.getTransformPagePoint());
    let d = Dx(u.layout.layoutBox, f);
    if (s) {
      const h = s(_x(d));
      (this.hasMutatedConstraints = !!h), h && (d = Qh(h));
    }
    return d;
  }
  startAnimation(i) {
    const {
      drag: s,
      dragMomentum: l,
      dragElastic: u,
      dragTransition: f,
      dragSnapToOrigin: d,
      onDragTransitionEnd: h,
    } = this.getProps(),
      m = this.constraints || {},
      g = St((v) => {
        if (!Fs(v, s, this.currentDirection)) return;
        let w = (m && m[v]) || {};
        d && (w = { min: 0, max: 0 });
        const P = u ? 200 : 1e6,
          N = u ? 40 : 1e7,
          _ = {
            type: "inertia",
            velocity: l ? i[v] : 0,
            bounceStiffness: P,
            bounceDamping: N,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...f,
            ...w,
          };
        return this.startAxisValueAnimation(v, _);
      });
    return Promise.all(g).then(h);
  }
  startAxisValueAnimation(i, s) {
    const l = this.getAxisMotionValue(i);
    return (
      ya(this.visualElement, i),
      l.start(pu(i, l, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    St((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    St((i) => {
      var s;
      return (s = this.getAxisMotionValue(i).animation) === null ||
        s === void 0
        ? void 0
        : s.pause();
    });
  }
  getAnimationState(i) {
    var s;
    return (s = this.getAxisMotionValue(i).animation) === null ||
      s === void 0
      ? void 0
      : s.state;
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      l = this.visualElement.getProps(),
      u = l[s];
    return (
      u ||
      this.visualElement.getValue(
        i,
        (l.initial ? l.initial[i] : void 0) || 0
      )
    );
  }
  snapToCursor(i) {
    St((s) => {
      const { drag: l } = this.getProps();
      if (!Fs(s, l, this.currentDirection)) return;
      const { projection: u } = this.visualElement,
        f = this.getAxisMotionValue(s);
      if (u && u.layout) {
        const { min: d, max: h } = u.layout.layoutBox[s];
        f.set(i[s] - Ee(d, h, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!cr(s) || !l || !this.constraints) return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    St((d) => {
      const h = this.getAxisMotionValue(d);
      if (h && this.constraints !== !1) {
        const m = h.get();
        u[d] = Rx({ min: m, max: m }, this.constraints[d]);
      }
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = f ? f({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      St((d) => {
        if (!Fs(d, i, null)) return;
        const h = this.getAxisMotionValue(d),
          { min: m, max: g } = this.constraints[d];
        h.set(Ee(m, g, u[d]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ox.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = fi(i, "pointerdown", (m) => {
        const { drag: g, dragListener: v = !0 } = this.getProps();
        g && v && this.start(m);
      }),
      l = () => {
        const { dragConstraints: m } = this.getProps();
        cr(m) &&
          m.current &&
          (this.constraints = this.resolveRefConstraints());
      },
      { projection: u } = this.visualElement,
      f = u.addEventListener("measure", l);
    u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
      we.read(l);
    const d = xi(window, "resize", () =>
      this.scalePositionWithinConstraints()
    ),
      h = u.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (St((v) => {
              const w = this.getAxisMotionValue(v);
              w &&
                ((this.originPoint[v] += m[v].translate),
                  w.set(w.get() + m[v].translate));
            }),
              this.visualElement.render());
        }
      );
    return () => {
      d(), s(), f(), h && h();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: l = !1,
        dragPropagation: u = !1,
        dragConstraints: f = !1,
        dragElastic: d = Ta,
        dragMomentum: h = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: l,
      dragPropagation: u,
      dragConstraints: f,
      dragElastic: d,
      dragMomentum: h,
    };
  }
}
function Fs(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function bx(n, i = 10) {
  let s = null;
  return Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s;
}
class Ux extends vn {
  constructor(i) {
    super(i),
      (this.removeGroupControls = ft),
      (this.removeListeners = ft),
      (this.controls = new Bx(i));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ft);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ap = (n) => (i, s) => {
  n && we.postRender(() => n(i, s));
};
class Wx extends vn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ft);
  }
  onPointerDown(i) {
    this.session = new Hh(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Jh(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: s,
      onPan: l,
      onPanEnd: u,
    } = this.node.getProps();
    return {
      onSessionStart: ap(i),
      onStart: ap(s),
      onMove: l,
      onEnd: (f, d) => {
        delete this.session, u && we.postRender(() => u(f, d));
      },
    };
  }
  mount() {
    this.removePointerDownListener = fi(
      this.node.current,
      "pointerdown",
      (i) => this.onPointerDown(i)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const bs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function up(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const oi = {
  correct: (n, i) => {
    if (!i.target) return n;
    if (typeof n == "string")
      if (te.test(n)) n = parseFloat(n);
      else return n;
    const s = up(n, i.target.x),
      l = up(n, i.target.y);
    return `${s}% ${l}%`;
  },
},
  $x = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const l = n,
        u = yn.parse(n);
      if (u.length > 5) return l;
      const f = yn.createTransformer(n),
        d = typeof u[0] != "number" ? 1 : 0,
        h = s.x.scale * i.x,
        m = s.y.scale * i.y;
      (u[0 + d] /= h), (u[1 + d] /= m);
      const g = Ee(h, m, 0.5);
      return (
        typeof u[2 + d] == "number" && (u[2 + d] /= g),
        typeof u[3 + d] == "number" && (u[3 + d] /= g),
        f(u)
      );
    },
  };
class Hx extends O.Component {
  componentDidMount() {
    const {
      visualElement: i,
      layoutGroup: s,
      switchLayoutGroup: l,
      layoutId: u,
    } = this.props,
      { projection: f } = i;
    dy(Kx),
      f &&
      (s.group && s.group.add(f),
        l && l.register && u && l.register(f),
        f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        f.setOptions({
          ...f.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (bs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(i) {
    const {
      layoutDependency: s,
      visualElement: l,
      drag: u,
      isPresent: f,
    } = this.props,
      d = l.projection;
    return (
      d &&
      ((d.isPresent = f),
        u || i.layoutDependency !== s || s === void 0
          ? d.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== f &&
        (f
          ? d.promote()
          : d.relegate() ||
          we.postRender(() => {
            const h = d.getStack();
            (!h || !h.members.length) && this.safeToRemove();
          }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
        Ua.postRender(() => {
          !i.currentAnimation && i.isLead() && this.safeToRemove();
        }));
  }
  componentWillUnmount() {
    const {
      visualElement: i,
      layoutGroup: s,
      switchLayoutGroup: l,
    } = this.props,
      { projection: u } = i;
    u &&
      (u.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(u),
        l && l.deregister && l.deregister(u));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function em(n) {
  const [i, s] = zp(),
    l = O.useContext(Va);
  return y.jsx(Hx, {
    ...n,
    layoutGroup: l,
    switchLayoutGroup: O.useContext($p),
    isPresent: i,
    safeToRemove: s,
  });
}
const Kx = {
  borderRadius: {
    ...oi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: oi,
  borderTopRightRadius: oi,
  borderBottomLeftRadius: oi,
  borderBottomRightRadius: oi,
  boxShadow: $x,
};
function qx(n, i, s) {
  const l = qe(n) ? n : yi(n);
  return l.start(pu("", l, i, s)), l.animation;
}
function Gx(n) {
  return n instanceof SVGElement && n.tagName !== "svg";
}
const Qx = (n, i) => n.depth - i.depth;
class Xx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(i) {
    nu(this.children, i), (this.isDirty = !0);
  }
  remove(i) {
    ru(this.children, i), (this.isDirty = !0);
  }
  forEach(i) {
    this.isDirty && this.children.sort(Qx),
      (this.isDirty = !1),
      this.children.forEach(i);
  }
}
function Yx(n, i) {
  const s = It.now(),
    l = ({ timestamp: u }) => {
      const f = u - s;
      f >= i && (gn(l), n(f - i));
    };
  return we.read(l, !0), () => gn(l);
}
const tm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Zx = tm.length,
  cp = (n) => (typeof n == "string" ? parseFloat(n) : n),
  dp = (n) => typeof n == "number" || te.test(n);
function Jx(n, i, s, l, u, f) {
  u
    ? ((n.opacity = Ee(0, s.opacity !== void 0 ? s.opacity : 1, e1(l))),
      (n.opacityExit = Ee(i.opacity !== void 0 ? i.opacity : 1, 0, t1(l))))
    : f &&
    (n.opacity = Ee(
      i.opacity !== void 0 ? i.opacity : 1,
      s.opacity !== void 0 ? s.opacity : 1,
      l
    ));
  for (let d = 0; d < Zx; d++) {
    const h = `border${tm[d]}Radius`;
    let m = fp(i, h),
      g = fp(s, h);
    if (m === void 0 && g === void 0) continue;
    m || (m = 0),
      g || (g = 0),
      m === 0 || g === 0 || dp(m) === dp(g)
        ? ((n[h] = Math.max(Ee(cp(m), cp(g), l), 0)),
          (zt.test(g) || zt.test(m)) && (n[h] += "%"))
        : (n[h] = g);
  }
  (i.rotate || s.rotate) && (n.rotate = Ee(i.rotate || 0, s.rotate || 0, l));
}
function fp(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const e1 = nm(0, 0.5, wh),
  t1 = nm(0.5, 0.95, ft);
function nm(n, i, s) {
  return (l) => (l < n ? 0 : l > i ? 1 : s(mr(n, i, l)));
}
function pp(n, i) {
  (n.min = i.min), (n.max = i.max);
}
function wt(n, i) {
  pp(n.x, i.x), pp(n.y, i.y);
}
function hp(n, i) {
  (n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin);
}
function mp(n, i, s, l, u) {
  return (
    (n -= i),
    (n = Gs(n, 1 / s, l)),
    u !== void 0 && (n = Gs(n, 1 / u, l)),
    n
  );
}
function n1(n, i = 0, s = 1, l = 0.5, u, f = n, d = n) {
  if (
    (zt.test(i) &&
      ((i = parseFloat(i)), (i = Ee(d.min, d.max, i / 100) - d.min)),
      typeof i != "number")
  )
    return;
  let h = Ee(f.min, f.max, l);
  n === f && (h -= i),
    (n.min = mp(n.min, i, s, h, u)),
    (n.max = mp(n.max, i, s, h, u));
}
function gp(n, i, [s, l, u], f, d) {
  n1(n, i[s], i[l], i[u], i.scale, f, d);
}
const r1 = ["x", "scaleX", "originX"],
  i1 = ["y", "scaleY", "originY"];
function yp(n, i, s, l) {
  gp(n.x, i, r1, s ? s.x : void 0, l ? l.x : void 0),
    gp(n.y, i, i1, s ? s.y : void 0, l ? l.y : void 0);
}
function vp(n) {
  return n.translate === 0 && n.scale === 1;
}
function rm(n) {
  return vp(n.x) && vp(n.y);
}
function xp(n, i) {
  return n.min === i.min && n.max === i.max;
}
function s1(n, i) {
  return xp(n.x, i.x) && xp(n.y, i.y);
}
function wp(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function im(n, i) {
  return wp(n.x, i.x) && wp(n.y, i.y);
}
function Sp(n) {
  return pt(n.x) / pt(n.y);
}
function kp(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class o1 {
  constructor() {
    this.members = [];
  }
  add(i) {
    nu(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (
      (ru(this.members, i),
        i === this.prevLead && (this.prevLead = void 0),
        i === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((u) => i === u);
    if (s === 0) return !1;
    let l;
    for (let u = s; u >= 0; u--) {
      const f = this.members[u];
      if (f.isPresent !== !1) {
        l = f;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(i, s) {
    const l = this.lead;
    if (i !== l && ((this.prevLead = l), (this.lead = i), i.show(), l)) {
      l.instance && l.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = l),
        s && (i.resumeFrom.preserveOpacity = !0),
        l.snapshot &&
        ((i.snapshot = l.snapshot),
          (i.snapshot.latestValues =
            l.animationValues || l.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: u } = i.options;
      u === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: l } = i;
      s.onExitComplete && s.onExitComplete(),
        l && l.options.onExitComplete && l.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function l1(n, i, s) {
  let l = "";
  const u = n.x.translate / i.x,
    f = n.y.translate / i.y,
    d = (s == null ? void 0 : s.z) || 0;
  if (
    ((u || f || d) && (l = `translate3d(${u}px, ${f}px, ${d}px) `),
      (i.x !== 1 || i.y !== 1) && (l += `scale(${1 / i.x}, ${1 / i.y}) `),
      s)
  ) {
    const {
      transformPerspective: g,
      rotate: v,
      rotateX: w,
      rotateY: P,
      skewX: N,
      skewY: _,
    } = s;
    g && (l = `perspective(${g}px) ${l}`),
      v && (l += `rotate(${v}deg) `),
      w && (l += `rotateX(${w}deg) `),
      P && (l += `rotateY(${P}deg) `),
      N && (l += `skewX(${N}deg) `),
      _ && (l += `skewY(${_}deg) `);
  }
  const h = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return (h !== 1 || m !== 1) && (l += `scale(${h}, ${m})`), l || "none";
}
const _n = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
},
  ci = typeof window < "u" && window.MotionDebug !== void 0,
  ca = ["", "X", "Y", "Z"],
  a1 = { visibility: "hidden" },
  Pp = 1e3;
let u1 = 0;
function da(n, i, s, l) {
  const { latestValues: u } = i;
  u[n] && ((s[n] = u[n]), i.setStaticValue(n, 0), l && (l[n] = 0));
}
function sm(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = ph(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: u, layoutId: f } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", we, !(u || f));
  }
  const { parent: l } = n;
  l && !l.hasCheckedOptimisedAppear && sm(l);
}
function om({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: l,
  resetTransform: u,
}) {
  return class {
    constructor(d = {}, h = i == null ? void 0 : i()) {
      (this.id = u1++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating &&
            ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            ci &&
            (_n.totalNodes = _n.resolvedTargetDeltas = _n.recalculatedProjection = 0),
            this.nodes.forEach(f1),
            this.nodes.forEach(y1),
            this.nodes.forEach(v1),
            this.nodes.forEach(p1),
            ci && window.MotionDebug.record(_n);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0);
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Xx());
    }
    addEventListener(d, h) {
      return (
        this.eventHandlers.has(d) ||
        this.eventHandlers.set(d, new iu()),
        this.eventHandlers.get(d).add(h)
      );
    }
    notifyListeners(d, ...h) {
      const m = this.eventHandlers.get(d);
      m && m.notify(...h);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d, h = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Gx(d)), (this.instance = d);
      const { layoutId: m, layout: g, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(d),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          h && (g || m) && (this.isLayoutDirty = !0),
          n)
      ) {
        let w;
        const P = () => (this.root.updateBlockedByResize = !1);
        n(d, () => {
          (this.root.updateBlockedByResize = !0),
            w && w(),
            (w = Yx(P, 250)),
            bs.hasAnimatedSinceResize &&
            ((bs.hasAnimatedSinceResize = !1),
              this.nodes.forEach(Tp));
        });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
        v &&
        (m || g) &&
        this.addEventListener(
          "didUpdate",
          ({
            delta: w,
            hasLayoutChanged: P,
            hasRelativeTargetChanged: N,
            layout: _,
          }) => {
            if (this.isTreeAnimationBlocked()) {
              (this.target = void 0),
                (this.relativeTarget = void 0);
              return;
            }
            const M =
              this.options.transition ||
              v.getDefaultTransition() ||
              P1,
              {
                onLayoutAnimationStart: L,
                onLayoutAnimationComplete: I,
              } = v.getProps(),
              U =
                !this.targetLayout ||
                !im(this.targetLayout, _) ||
                N,
              H = !P && N;
            if (
              this.options.layoutRoot ||
              (this.resumeFrom && this.resumeFrom.instance) ||
              H ||
              (P && (U || !this.currentAnimation))
            ) {
              this.resumeFrom &&
                ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                this.setAnimationOrigin(w, H);
              const Q = {
                ...Za(M, "layout"),
                onPlay: L,
                onComplete: I,
              };
              (v.shouldReduceMotion ||
                this.options.layoutRoot) &&
                ((Q.delay = 0), (Q.type = !1)),
                this.startAnimation(Q);
            } else
              P || Tp(this),
                this.isLead() &&
                this.options.onExitComplete &&
                this.options.onExitComplete();
            this.targetLayout = _;
          }
        );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        gn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(x1),
          this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (
        ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
      ) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          sm(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const w = this.path[v];
        (w.shouldResetTransform = !0),
          w.updateScroll("snapshot"),
          w.options.layoutRoot && w.willUpdate(!1);
      }
      const { layoutId: h, layout: m } = this.options;
      if (h === void 0 && !m) return;
      const g = this.getTransformTemplate();
      (this.prevTransformTemplateValue = g
        ? g(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Cp);
        return;
      }
      this.isUpdating || this.nodes.forEach(m1),
        (this.isUpdating = !1),
        this.nodes.forEach(g1),
        this.nodes.forEach(c1),
        this.nodes.forEach(d1),
        this.clearAllSnapshots();
      const h = It.now();
      (be.delta = Gt(0, 1e3 / 60, h - be.timestamp)),
        (be.timestamp = h),
        (be.isProcessing = !0),
        ta.update.process(be),
        ta.preRender.process(be),
        ta.render.process(be),
        (be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ua.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(h1), this.sharedNodes.forEach(w1);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
          we.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      we.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++)
          this.path[m].updateScroll();
      const d = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          d ? d.layoutBox : void 0
        );
    }
    updateScroll(d = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (h = !1),
          h)
      ) {
        const m = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: m,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!u) return;
      const d =
        this.isLayoutDirty ||
        this.shouldResetTransform ||
        this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !rm(this.projectionDelta),
        m = this.getTransformTemplate(),
        g = m ? m(this.latestValues, "") : void 0,
        v = g !== this.prevTransformTemplateValue;
      d &&
        (h || Vn(this.latestValues) || v) &&
        (u(this.instance, g),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let m = this.removeElementScroll(h);
      return (
        d && (m = this.removeTransform(m)),
        C1(m),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var d;
      const { visualElement: h } = this.options;
      if (!h) return Re();
      const m = h.measureViewportBox();
      if (
        !(
          ((d = this.scroll) === null || d === void 0
            ? void 0
            : d.wasRoot) || this.path.some(T1)
        )
      ) {
        const { scroll: v } = this.root;
        v && (pr(m.x, v.offset.x), pr(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      var h;
      const m = Re();
      if (
        (wt(m, d),
          !((h = this.scroll) === null || h === void 0) && h.wasRoot)
      )
        return m;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g],
          { scroll: w, options: P } = v;
        v !== this.root &&
          w &&
          P.layoutScroll &&
          (w.wasRoot && wt(m, d),
            pr(m.x, w.offset.x),
            pr(m.y, w.offset.y));
      }
      return m;
    }
    applyTransform(d, h = !1) {
      const m = Re();
      wt(m, d);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        !h &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          hr(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Vn(v.latestValues) && hr(m, v.latestValues);
      }
      return Vn(this.latestValues) && hr(m, this.latestValues), m;
    }
    removeTransform(d) {
      const h = Re();
      wt(h, d);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        if (!g.instance || !Vn(g.latestValues)) continue;
        Ea(g.latestValues) && g.updateSnapshot();
        const v = Re(),
          w = g.measurePageBox();
        wt(v, w),
          yp(
            h,
            g.latestValues,
            g.snapshot ? g.snapshot.layoutBox : void 0,
            v
          );
      }
      return Vn(this.latestValues) && yp(h, this.latestValues), h;
    }
    setTargetDelta(d) {
      (this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      var h;
      const m = this.getLead();
      this.isProjectionDirty ||
        (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty ||
        (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
        (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== m;
      if (
        !(
          d ||
          (g && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((h = this.parent) === null || h === void 0) &&
            h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: w, layoutId: P } = this.options;
      if (!(!this.layout || !(w || P))) {
        if (
          ((this.resolvedRelativeTargetAt = be.timestamp),
            !this.targetDelta && !this.relativeTarget)
        ) {
          const N = this.getClosestProjectingParent();
          N && N.layout && this.animationProgress !== 1
            ? ((this.relativeParent = N),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Re()),
              (this.relativeTargetOrigin = Re()),
              hi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                N.layout.layoutBox
              ),
              wt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Re()),
                (this.targetWithTransforms = Re())),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  Nx(
                    this.target,
                    this.relativeTarget,
                    this.relativeParent.target
                  ))
                : this.targetDelta
                  ? (this.resumingFrom
                    ? (this.target = this.applyTransform(
                      this.layout.layoutBox
                    ))
                    : wt(this.target, this.layout.layoutBox),
                    Yh(this.target, this.targetDelta))
                  : wt(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const N = this.getClosestProjectingParent();
            N &&
              !!N.resumingFrom == !!this.resumingFrom &&
              !N.options.layoutScroll &&
              N.target &&
              this.animationProgress !== 1
              ? ((this.relativeParent = N),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Re()),
                (this.relativeTargetOrigin = Re()),
                hi(
                  this.relativeTargetOrigin,
                  this.target,
                  N.target
                ),
                wt(
                  this.relativeTarget,
                  this.relativeTargetOrigin
                ))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ci && _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ea(this.parent.latestValues) ||
          Xh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget ||
          this.targetDelta ||
          this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var d;
      const h = this.getLead(),
        m = !!this.resumingFrom || this !== h;
      let g = !0;
      if (
        ((this.isProjectionDirty ||
          (!((d = this.parent) === null || d === void 0) &&
            d.isProjectionDirty)) &&
          (g = !1),
          m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
          this.resolvedRelativeTargetAt === be.timestamp && (g = !1),
          g)
      )
        return;
      const { layout: v, layoutId: w } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
          this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(v || w))
      )
        return;
      wt(this.layoutCorrected, this.layout.layoutBox);
      const P = this.treeScale.x,
        N = this.treeScale.y;
      Ix(this.layoutCorrected, this.treeScale, this.path, m),
        h.layout &&
        !h.target &&
        (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
        ((h.target = h.layout.layoutBox),
          (h.targetWithTransforms = Re()));
      const { target: _ } = h;
      if (!_) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (hp(this.prevProjectionDelta.x, this.projectionDelta.x),
          hp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        pi(
          this.projectionDelta,
          this.layoutCorrected,
          _,
          this.latestValues
        ),
        (this.treeScale.x !== P ||
          this.treeScale.y !== N ||
          !kp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !kp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
        ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", _)),
        ci && _n.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var h;
      if (
        ((h = this.options.visualElement) === null ||
          h === void 0 ||
          h.scheduleRender(),
          d)
      ) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = fr()),
        (this.projectionDelta = fr()),
        (this.projectionDeltaWithTransform = fr());
    }
    setAnimationOrigin(d, h = !1) {
      const m = this.snapshot,
        g = m ? m.latestValues : {},
        v = { ...this.latestValues },
        w = fr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h);
      const P = Re(),
        N = m ? m.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        M = N !== _,
        L = this.getStack(),
        I = !L || L.members.length <= 1,
        U = !!(
          M &&
          !I &&
          this.options.crossfade === !0 &&
          !this.path.some(k1)
        );
      this.animationProgress = 0;
      let H;
      (this.mixTargetDelta = (Q) => {
        const B = Q / 1e3;
        Ep(w.x, d.x, B),
          Ep(w.y, d.y, B),
          this.setTargetDelta(w),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.layout &&
          this.relativeParent &&
          this.relativeParent.layout &&
          (hi(
            P,
            this.layout.layoutBox,
            this.relativeParent.layout.layoutBox
          ),
            S1(
              this.relativeTarget,
              this.relativeTargetOrigin,
              P,
              B
            ),
            H &&
            s1(this.relativeTarget, H) &&
            (this.isProjectionDirty = !1),
            H || (H = Re()),
            wt(H, this.relativeTarget)),
          M &&
          ((this.animationValues = v),
            Jx(v, g, this.latestValues, B, U, I)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = B);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
        this.resumingFrom.currentAnimation &&
        this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
        (gn(this.pendingAnimation),
          (this.pendingAnimation = void 0)),
        (this.pendingAnimation = we.update(() => {
          (bs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = qx(0, Pp, {
              ...d,
              onUpdate: (h) => {
                this.mixTargetDelta(h),
                  d.onUpdate && d.onUpdate(h);
              },
              onComplete: () => {
                d.onComplete && d.onComplete(),
                  this.completeAnimation();
              },
            })),
            this.resumingFrom &&
            (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      d && d.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pp),
          this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: h,
        target: m,
        layout: g,
        latestValues: v,
      } = d;
      if (!(!h || !m || !g)) {
        if (
          this !== d &&
          this.layout &&
          g &&
          lm(
            this.options.animationType,
            this.layout.layoutBox,
            g.layoutBox
          )
        ) {
          m = this.target || Re();
          const w = pt(this.layout.layoutBox.x);
          (m.x.min = d.target.x.min), (m.x.max = m.x.min + w);
          const P = pt(this.layout.layoutBox.y);
          (m.y.min = d.target.y.min), (m.y.max = m.y.min + P);
        }
        wt(h, m),
          hr(h, v),
          pi(
            this.projectionDeltaWithTransform,
            this.layoutCorrected,
            h,
            v
          );
      }
    }
    registerSharedNode(d, h) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new o1()),
        this.sharedNodes.get(d).add(h);
      const g = h.options.initialPromotionConfig;
      h.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var d;
      const { layoutId: h } = this.options;
      return h
        ? ((d = this.getStack()) === null || d === void 0
          ? void 0
          : d.lead) || this
        : this;
    }
    getPrevLead() {
      var d;
      const { layoutId: h } = this.options;
      return h
        ? (d = this.getStack()) === null || d === void 0
          ? void 0
          : d.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({
      needsReset: d,
      transition: h,
      preserveFollowOpacity: m,
    } = {}) {
      const g = this.getStack();
      g && g.promote(this, m),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let h = !1;
      const { latestValues: m } = d;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (h = !0),
          !h)
      )
        return;
      const g = {};
      m.z && da("z", d, g, this.animationValues);
      for (let v = 0; v < ca.length; v++)
        da(`rotate${ca[v]}`, d, g, this.animationValues),
          da(`skew${ca[v]}`, d, g, this.animationValues);
      d.render();
      for (const v in g)
        d.setStaticValue(v, g[v]),
          this.animationValues && (this.animationValues[v] = g[v]);
      d.scheduleRender();
    }
    getProjectionStyles(d) {
      var h, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return a1;
      const g = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (g.opacity = ""),
          (g.pointerEvents =
            Os(d == null ? void 0 : d.pointerEvents) || ""),
          (g.transform = v ? v(this.latestValues, "") : "none"),
          g
        );
      const w = this.getLead();
      if (!this.projectionDelta || !this.layout || !w.target) {
        const M = {};
        return (
          this.options.layoutId &&
          ((M.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
            (M.pointerEvents =
              Os(d == null ? void 0 : d.pointerEvents) || "")),
          this.hasProjected &&
          !Vn(this.latestValues) &&
          ((M.transform = v ? v({}, "") : "none"),
            (this.hasProjected = !1)),
          M
        );
      }
      const P = w.animationValues || w.latestValues;
      this.applyTransformsToTarget(),
        (g.transform = l1(
          this.projectionDeltaWithTransform,
          this.treeScale,
          P
        )),
        v && (g.transform = v(P, g.transform));
      const { x: N, y: _ } = this.projectionDelta;
      (g.transformOrigin = `${N.origin * 100}% ${_.origin * 100}% 0`),
        w.animationValues
          ? (g.opacity =
            w === this
              ? (m =
                (h = P.opacity) !== null && h !== void 0
                  ? h
                  : this.latestValues.opacity) !== null &&
                m !== void 0
                ? m
                : 1
              : this.preserveOpacity
                ? this.latestValues.opacity
                : P.opacityExit)
          : (g.opacity =
            w === this
              ? P.opacity !== void 0
                ? P.opacity
                : ""
              : P.opacityExit !== void 0
                ? P.opacityExit
                : 0);
      for (const M in Ws) {
        if (P[M] === void 0) continue;
        const { correct: L, applyTo: I } = Ws[M],
          U = g.transform === "none" ? P[M] : L(P[M], w);
        if (I) {
          const H = I.length;
          for (let Q = 0; Q < H; Q++) g[I[Q]] = U;
        } else g[M] = U;
      }
      return (
        this.options.layoutId &&
        (g.pointerEvents =
          w === this
            ? Os(d == null ? void 0 : d.pointerEvents) || ""
            : "none"),
        g
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((d) => {
        var h;
        return (h = d.currentAnimation) === null || h === void 0
          ? void 0
          : h.stop();
      }),
        this.root.nodes.forEach(Cp),
        this.root.sharedNodes.clear();
    }
  };
}
function c1(n) {
  n.updateLayout();
}
function d1(n) {
  var i;
  const s =
    ((i = n.resumeFrom) === null || i === void 0 ? void 0 : i.snapshot) ||
    n.snapshot;
  if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: u } = n.layout,
      { animationType: f } = n.options,
      d = s.source !== n.layout.source;
    f === "size"
      ? St((w) => {
        const P = d ? s.measuredBox[w] : s.layoutBox[w],
          N = pt(P);
        (P.min = l[w].min), (P.max = P.min + N);
      })
      : lm(f, s.layoutBox, l) &&
      St((w) => {
        const P = d ? s.measuredBox[w] : s.layoutBox[w],
          N = pt(l[w]);
        (P.max = P.min + N),
          n.relativeTarget &&
          !n.currentAnimation &&
          ((n.isProjectionDirty = !0),
            (n.relativeTarget[w].max =
              n.relativeTarget[w].min + N));
      });
    const h = fr();
    pi(h, l, s.layoutBox);
    const m = fr();
    d
      ? pi(m, n.applyTransform(u, !0), s.measuredBox)
      : pi(m, l, s.layoutBox);
    const g = !rm(h);
    let v = !1;
    if (!n.resumeFrom) {
      const w = n.getClosestProjectingParent();
      if (w && !w.resumeFrom) {
        const { snapshot: P, layout: N } = w;
        if (P && N) {
          const _ = Re();
          hi(_, s.layoutBox, P.layoutBox);
          const M = Re();
          hi(M, l, N.layoutBox),
            im(_, M) || (v = !0),
            w.options.layoutRoot &&
            ((n.relativeTarget = M),
              (n.relativeTargetOrigin = _),
              (n.relativeParent = w));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: s,
      delta: m,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeTargetChanged: v,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function f1(n) {
  ci && _n.totalNodes++,
    n.parent &&
    (n.isProjecting() ||
      (n.isProjectionDirty = n.parent.isProjectionDirty),
      n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
      n.isTransformDirty ||
      (n.isTransformDirty = n.parent.isTransformDirty));
}
function p1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function h1(n) {
  n.clearSnapshot();
}
function Cp(n) {
  n.clearMeasurements();
}
function m1(n) {
  n.isLayoutDirty = !1;
}
function g1(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function Tp(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function y1(n) {
  n.resolveTargetDelta();
}
function v1(n) {
  n.calcProjection();
}
function x1(n) {
  n.resetSkewAndRotation();
}
function w1(n) {
  n.removeLeadSnapshot();
}
function Ep(n, i, s) {
  (n.translate = Ee(i.translate, 0, s)),
    (n.scale = Ee(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint);
}
function jp(n, i, s, l) {
  (n.min = Ee(i.min, s.min, l)), (n.max = Ee(i.max, s.max, l));
}
function S1(n, i, s, l) {
  jp(n.x, i.x, s.x, l), jp(n.y, i.y, s.y, l);
}
function k1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const P1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Np = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  Mp = Np("applewebkit/") && !Np("chrome/") ? Math.round : ft;
function Ap(n) {
  (n.min = Mp(n.min)), (n.max = Mp(n.max));
}
function C1(n) {
  Ap(n.x), Ap(n.y);
}
function lm(n, i, s) {
  return (
    n === "position" || (n === "preserve-aspect" && !jx(Sp(i), Sp(s), 0.2))
  );
}
function T1(n) {
  var i;
  return (
    n !== n.root &&
    ((i = n.scroll) === null || i === void 0 ? void 0 : i.wasRoot)
  );
}
const E1 = om({
  attachResizeListener: (n, i) => xi(n, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop,
  }),
  checkIsScrollRoot: () => !0,
}),
  fa = { current: void 0 },
  am = om({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!fa.current) {
        const n = new E1({});
        n.mount(window),
          n.setOptions({ layoutScroll: !0 }),
          (fa.current = n);
      }
      return fa.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) =>
      window.getComputedStyle(n).position === "fixed",
  }),
  j1 = {
    pan: { Feature: Wx },
    drag: { Feature: Ux, ProjectionNode: am, MeasureLayout: em },
  };
function Dp(n, i, s) {
  const { props: l } = n;
  n.animationState &&
    l.whileHover &&
    n.animationState.setActive("whileHover", s === "Start");
  const u = "onHover" + s,
    f = l[u];
  f && we.postRender(() => f(i, Pi(i)));
}
class N1 extends vn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = jy(
        i,
        (s) => (
          Dp(this.node, s, "Start"), (l) => Dp(this.node, l, "End")
        )
      ));
  }
  unmount() { }
}
class M1 extends vn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
  }
  mount() {
    this.unmount = ki(
      xi(this.node.current, "focus", () => this.onFocus()),
      xi(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() { }
}
function Rp(n, i, s) {
  const { props: l } = n;
  n.animationState &&
    l.whileTap &&
    n.animationState.setActive("whileTap", s === "Start");
  const u = "onTap" + (s === "End" ? "" : s),
    f = l[u];
  f && we.postRender(() => f(i, Pi(i)));
}
class A1 extends vn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = Dy(
        i,
        (s) => (
          Rp(this.node, s, "Start"),
          (l, { success: u }) =>
            Rp(this.node, l, u ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() { }
}
const Na = new WeakMap(),
  pa = new WeakMap(),
  D1 = (n) => {
    const i = Na.get(n.target);
    i && i(n);
  },
  R1 = (n) => {
    n.forEach(D1);
  };
function L1({ root: n, ...i }) {
  const s = n || document;
  pa.has(s) || pa.set(s, {});
  const l = pa.get(s),
    u = JSON.stringify(i);
  return (
    l[u] || (l[u] = new IntersectionObserver(R1, { root: n, ...i })), l[u]
  );
}
function V1(n, i, s) {
  const l = L1(i);
  return (
    Na.set(n, s),
    l.observe(n),
    () => {
      Na.delete(n), l.unobserve(n);
    }
  );
}
const _1 = { some: 0, all: 1 };
class z1 extends vn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: l, amount: u = "some", once: f } = i,
      d = {
        root: s ? s.current : void 0,
        rootMargin: l,
        threshold: typeof u == "number" ? u : _1[u],
      },
      h = (m) => {
        const { isIntersecting: g } = m;
        if (
          this.isInView === g ||
          ((this.isInView = g), f && !g && this.hasEnteredView)
        )
          return;
        g && (this.hasEnteredView = !0),
          this.node.animationState &&
          this.node.animationState.setActive("whileInView", g);
        const {
          onViewportEnter: v,
          onViewportLeave: w,
        } = this.node.getProps(),
          P = g ? v : w;
        P && P(m);
      };
    return V1(this.node.current, d, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(I1(i, s)) && this.startObserver();
  }
  unmount() { }
}
function I1({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const F1 = {
  inView: { Feature: z1 },
  tap: { Feature: A1 },
  focus: { Feature: M1 },
  hover: { Feature: N1 },
},
  O1 = { layout: { ProjectionNode: am, MeasureLayout: em } },
  Ma = { current: null },
  um = { current: !1 };
function B1() {
  if (((um.current = !0), !!Ia))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Ma.current = n.matches);
      n.addListener(i), i();
    } else Ma.current = !1;
}
const b1 = [...Vh, Ke, yn],
  U1 = (n) => b1.find(Lh(n)),
  Lp = new WeakMap();
function W1(n, i, s) {
  for (const l in i) {
    const u = i[l],
      f = s[l];
    if (qe(u)) n.addValue(l, u);
    else if (qe(f)) n.addValue(l, yi(u, { owner: n }));
    else if (f !== u)
      if (n.hasValue(l)) {
        const d = n.getValue(l);
        d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u);
      } else {
        const d = n.getStaticValue(l);
        n.addValue(l, yi(d !== void 0 ? d : u, { owner: n }));
      }
  }
  for (const l in s) i[l] === void 0 && n.removeValue(l);
  return i;
}
const Vp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class $1 {
  scrapeMotionValuesFromProps(i, s, l) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: l,
      reducedMotionConfig: u,
      blockInitialAnimation: f,
      visualState: d,
    },
    h = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = cu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () =>
        this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const N = It.now();
        this.renderScheduledAt < N &&
          ((this.renderScheduledAt = N),
            we.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: g, onUpdate: v } = d;
    (this.onUpdate = v),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = s.initial ? { ...m } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = l),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.options = h),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Js(s)),
      (this.isVariantNode = Up(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current));
    const { willChange: w, ...P } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this
    );
    for (const N in P) {
      const _ = P[N];
      m[N] !== void 0 && qe(_) && _.set(m[N], !1);
    }
  }
  mount(i) {
    (this.current = i),
      Lp.set(i, this),
      this.projection &&
      !this.projection.instance &&
      this.projection.mount(i),
      this.parent &&
      this.isVariantNode &&
      !this.isControllingVariants &&
      (this.removeFromVariantTree = this.parent.addVariantChild(
        this
      )),
      this.values.forEach((s, l) => this.bindToMotionValue(l, s)),
      um.current || B1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Ma.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Lp.delete(this.current),
      this.projection && this.projection.unmount(),
      gn(this.notifyUpdate),
      gn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const l = Fn.has(i),
      u = s.on("change", (h) => {
        (this.latestValues[i] = h),
          this.props.onUpdate && we.preRender(this.notifyUpdate),
          l &&
          this.projection &&
          (this.projection.isTransformDirty = !0);
      }),
      f = s.on("renderRequest", this.scheduleRender);
    let d;
    window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        u(), f(), d && d(), s.owner && s.stop();
      });
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in gr) {
      const s = gr[i];
      if (!s) continue;
      const { isEnabled: l, Feature: u } = s;
      if (
        (!this.features[i] &&
          u &&
          l(this.props) &&
          (this.features[i] = new u(this)),
          this.features[i])
      ) {
        const f = this.features[i];
        f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Re();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  update(i, s) {
    (i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s);
    for (let l = 0; l < Vp.length; l++) {
      const u = Vp[l];
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](),
          delete this.propEventSubscriptions[u]);
      const f = "on" + u,
        d = i[f];
      d && (this.propEventSubscriptions[u] = this.on(u, d));
    }
    (this.prevMotionValues = W1(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(i),
        () => s.variantChildren.delete(i)
      );
  }
  addValue(i, s) {
    const l = this.values.get(i);
    s !== l &&
      (l && this.removeValue(i),
        this.bindToMotionValue(i, s),
        this.values.set(i, s),
        (this.latestValues[i] = s.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState);
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i])
      return this.props.values[i];
    let l = this.values.get(i);
    return (
      l === void 0 &&
      s !== void 0 &&
      ((l = yi(s === null ? void 0 : s, { owner: this })),
        this.addValue(i, l)),
      l
    );
  }
  readValue(i, s) {
    var l;
    let u =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (l = this.getBaseTargetFromProps(this.props, i)) !== null &&
          l !== void 0
          ? l
          : this.readValueFromInstance(this.current, i, this.options);
    return (
      u != null &&
      (typeof u == "string" && (Dh(u) || kh(u))
        ? (u = parseFloat(u))
        : !U1(u) && yn.test(s) && (u = Nh(i, s)),
        this.setBaseTarget(i, qe(u) ? u.get() : u)),
      qe(u) ? u.get() : u
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    var s;
    const { initial: l } = this.props;
    let u;
    if (typeof l == "string" || typeof l == "object") {
      const d = $a(
        this.props,
        l,
        (s = this.presenceContext) === null || s === void 0
          ? void 0
          : s.custom
      );
      d && (u = d[i]);
    }
    if (l && u !== void 0) return u;
    const f = this.getBaseTargetFromProps(this.props, i);
    return f !== void 0 && !qe(f)
      ? f
      : this.initialValues[i] !== void 0 && u === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return (
      this.events[i] || (this.events[i] = new iu()), this.events[i].add(s)
    );
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class cm extends $1 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = _h);
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: l }) {
    delete s[i], delete l[i];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    qe(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function H1(n) {
  return window.getComputedStyle(n);
}
class K1 extends cm {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Yp);
  }
  readValueFromInstance(i, s) {
    if (Fn.has(s)) {
      const l = uu(s);
      return (l && l.default) || 0;
    } else {
      const l = H1(i),
        u = (Gp(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof u == "string" ? u.trim() : u;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Zh(i, s);
  }
  build(i, s, l) {
    qa(i, s, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return Ya(i, s, l);
  }
}
class q1 extends cm {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Re);
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (Fn.has(s)) {
      const l = uu(s);
      return (l && l.default) || 0;
    }
    return (s = Zp.has(s) ? s : ba(s)), i.getAttribute(s);
  }
  scrapeMotionValuesFromProps(i, s, l) {
    return th(i, s, l);
  }
  build(i, s, l) {
    Ga(i, s, this.isSVGTag, l.transformTemplate);
  }
  renderInstance(i, s, l, u) {
    Jp(i, s, l, u);
  }
  mount(i) {
    (this.isSVGTag = Xa(i.tagName)), super.mount(i);
  }
}
const G1 = (n, i) =>
  Wa(n) ? new q1(i) : new K1(i, { allowProjection: n !== O.Fragment }),
  Q1 = wy({ ...vx, ...F1, ...j1, ...O1 }, G1),
  Te = _0(Q1);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var X1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = (n) =>
  n
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .trim(),
  he = (n, i) => {
    const s = O.forwardRef(
      (
        {
          color: l = "currentColor",
          size: u = 24,
          strokeWidth: f = 2,
          absoluteStrokeWidth: d,
          className: h = "",
          children: m,
          ...g
        },
        v
      ) =>
        O.createElement(
          "svg",
          {
            ref: v,
            ...X1,
            width: u,
            height: u,
            stroke: l,
            strokeWidth: d ? (Number(f) * 24) / Number(u) : f,
            className: ["lucide", `lucide-${Y1(n)}`, h].join(" "),
            ...g,
          },
          [
            ...i.map(([w, P]) => O.createElement(w, P)),
            ...(Array.isArray(m) ? m : [m]),
          ]
        )
    );
    return (s.displayName = `${n}`), s;
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = he("AlertTriangle", [
    [
      "path",
      {
        d:
          "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = he("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ew = he("Briefcase", [
    [
      "rect",
      {
        width: "20",
        height: "14",
        x: "2",
        y: "7",
        rx: "2",
        ry: "2",
        key: "eto64e",
      },
    ],
    [
      "path",
      { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" },
    ],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = he("Calendar", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        ry: "2",
        key: "eu3xkr",
      },
    ],
    ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
    ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
    ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = he("CheckCircle2", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Aa = he("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = he("ChevronRight", [
    ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pm = he("Code", [
    ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
    ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Da = he("Copy", [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hm = he("ExternalLink", [
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
    ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
    ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mm = he("Eye", [
    [
      "path",
      { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nw = he("Globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = he("GraduationCap", [
    ["path", { d: "M22 10v6M2 10l10-5 10 5-10 5z", key: "1ef52a" }],
    ["path", { d: "M6 12v5c3 3 9 3 12 0v-5", key: "1f75yj" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = he("Layers", [
    [
      "path",
      {
        d:
          "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
        key: "8b97xw",
      },
    ],
    [
      "path",
      { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
    ],
    [
      "path",
      { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
    ],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = he("Lightbulb", [
    [
      "path",
      {
        d:
          "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = he("Linkedin", [
    [
      "path",
      {
        d:
          "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ra = he("Mail", [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ow = he("MapPin", [
    [
      "path",
      { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = he("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = he("MessageSquare", [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = he("Phone", [
    [
      "path",
      {
        d:
          "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cw = he("Server", [
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9",
      },
    ],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dw = he("Shield", [
    [
      "path",
      { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" },
    ],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fw = he("Sparkles", [
    [
      "path",
      {
        d:
          "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn",
      },
    ],
    ["path", { d: "M5 3v4", key: "bklmnn" }],
    ["path", { d: "M19 17v4", key: "iiml17" }],
    ["path", { d: "M3 5h4", key: "nem4j1" }],
    ["path", { d: "M17 19h4", key: "lbex7p" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hu = he("Target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pw = he("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mu = he("Wrench", [
    [
      "path",
      {
        d:
          "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        key: "cbrjhi",
      },
    ],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hw = he("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mw = he("Zap", [
    [
      "polygon",
      { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" },
    ],
  ]),
  gw =
    "https://geek-azzeddine.github.io/assets/img/webdesigner/profile-img.jpg",
  Ln = [
    {
      id: 1,
      number: "01",
      title: "Cadrage & Alignement Client",
      icon: hu,
      objectives: [
        "Comprendre les objectifs métier et la vision du client",
        "Définir le périmètre MVP vs évolutions futures",
        "Établir les critères de validation et KPIs",
        "Aligner toutes les parties prenantes sur les livrables",
      ],
      deliverables: [
        "Brief projet validé et partagé",
        "Cahier des charges fonctionnel",
        "Matrice des rôles et responsabilités",
        "Planning macro avec jalons clés",
      ],
      decision:
        "Prioriser le MVP sur la base du ratio valeur/effort, en reportant les features non-critiques en phase 2 pour garantir une livraison dans les délais.",
      example:
        "Blocage résolu : Le client souhaitait 15 fonctionnalités e-commerce en 4 semaines. J'ai structuré un MVP de 6 features essentielles livrables en 3 semaines, avec un backlog priorisé pour les 9 restantes — permettant un lancement rapide et des revenus dès le mois 1.",
    },
    {
      id: 2,
      number: "02",
      title: "Architecture, Planning & Risques",
      icon: iw,
      objectives: [
        "Choisir la stack technique adaptée (HTML/CSS/JS/PHP/WordPress/WooCommerce)",
        "Structurer les sprints et jalons de livraison",
        "Identifier les dépendances et risques techniques",
        "Préparer l'architecture serveur et le workflow de déploiement",
      ],
      deliverables: [
        "Architecture technique documentée",
        "Backlog sprint avec estimations",
        "Registre des risques et plan de mitigation",
        "Environnements dev/staging/production configurés",
      ],
      decision:
        "Opter pour WordPress + WooCommerce avec thème custom plutôt qu'un développement from-scratch, réduisant le time-to-market de 60% tout en maintenant la flexibilité nécessaire.",
      example:
        "Blocage résolu : Un plugin critique présentait un conflit avec le thème custom en staging. J'ai isolé le problème via debug progressif, identifié le hook conflictuel, et proposé un patch custom validé en 48h — sans impacter le planning.",
    },
    {
      id: 3,
      number: "03",
      title: "Exécution, QA & Résolution d'imprévus",
      icon: mu,
      objectives: [
        "Coordonner l'équipe technique, designers et prestataires",
        "Assurer le suivi qualité à chaque livraison de sprint",
        "Diagnostiquer et résoudre les bugs/lenteurs bloquants",
        "Maintenir la communication transparente avec le client",
      ],
      deliverables: [
        "Livrables fonctionnels testés et validés",
        "Rapports d'avancement hebdomadaires",
        "Documentation technique et procédures",
        "Tests de performance et compatibilité",
      ],
      decision:
        "Bloquer la mise en ligne pour corriger un bug d'affichage mobile critique plutôt que livrer en l'état — en communiquant proactivement au client l'impact et le plan de résolution (24h).",
      example:
        "Blocage résolu : Le site affichait des temps de chargement > 8s en production. Diagnostic : requêtes SQL non-optimisées + images non-compressées. Action : mise en cache objet, optimisation des requêtes WP_Query, compression WebP — résultat : < 2s en 3 jours.",
    },
    {
      id: 4,
      number: "04",
      title: "Mise en Ligne, Passation & Suivi",
      icon: dw,
      objectives: [
        "Déployer en production de manière sécurisée",
        "Vérifier le fonctionnement post-lancement",
        "Assurer la passation et la formation client",
        "Mettre en place le suivi et l'amélioration continue",
      ],
      deliverables: [
        "Site déployé et vérifié (checklist QA)",
        "Documentation de passation complète",
        "Plan de maintenance et monitoring",
        "Roadmap d'évolutions post-lancement",
      ],
      decision:
        "Planifier un déploiement en heures creuses (2h du matin) avec rollback planifié, plutôt qu'en journée — minimisant l'impact utilisateur en cas de problème.",
      example:
        "Blocage résolu : Après migration serveur, certains formulaires de contact ne fonctionnaient plus (configuration SMTP différente). Détection via monitoring post-lancement, correction en 30 minutes avec notification proactive au client.",
    },
  ],
  li = [
    {
      id: "scope-creep",
      title: "Dérive de périmètre en cours de sprint",
      icon: Z1,
      diagnostic:
        "Le client demande 3 nouvelles fonctionnalités en plein sprint 2, menaçant la date de livraison et la charge de l'équipe. Analyse d'impact : +5 jours de développement, risque de qualité sur les features déjà en cours.",
      decision:
        "Proposer un arbitrage transparent : intégrer 1 feature critique au sprint actuel (en décalant 2 features de moindre priorité), et planifier les 2 autres en sprint 3. Mise à jour du planning partagée avec justification business.",
      communication:
        "Réunion de 30 min avec le client : présentation de l'impact chiffré, proposition d'arbitrage claire avec options. Le client comprend et valide le réajustement — confiance renforcée par la transparence.",
      action:
        "Mise à jour du backlog Jira/Trello, redistribution des tâches dans l'équipe, notification aux développeurs des priorités ajustées, et documentation de la décision pour traçabilité.",
    },
    {
      id: "critical-bug",
      title: "Bug critique ou lenteur avant mise en ligne",
      icon: mw,
      diagnostic:
        "À J-2 du lancement, le site affiche des temps de chargement > 10s sur mobile. Investigation : combinaison de requêtes non-optimisées, images lourdes et conflit de plugins. Impact business : perte estimée de 40% de trafic mobile.",
      decision:
        "Décision de décaler la mise en ligne de 48h plutôt que livrer un site non-performant. Communication immédiate au client avec plan d'action détaillé et nouvelle date ferme.",
      communication:
        "Appel client dans l'heure : explication technique vulgarisée, impact business chiffré, plan de résolution avec nouvelle date. Le client apprécie la proactivité et la rigueur.",
      action:
        "Audit performance (Lighthouse + GTmetrix), optimisation images en WebP, mise en cache Redis, désactivation plugins non-essentiels, test cross-device. Résultat : < 2.5s mobile, score Lighthouse 92+.",
    },
    {
      id: "design-gap",
      title: "Écart entre vision design/client et faisabilité technique",
      icon: mm,
      diagnostic:
        "Le designer propose une animation complexe (parallax multi-couches + transitions custom) qui impacte les performances et nécessite 3 semaines de développement supplémentaire. Le client adore le concept mais le budget est fixe.",
      decision:
        "Proposer une alternative technique qui préserve 80% de l'effet visuel avec 30% de l'effort : utilisation de CSS animations natives + intersection observer au lieu de librairies lourdes. Démonstration via prototype rapide.",
      communication:
        "Présentation side-by-side (version designer vs alternative optimisée) avec métriques performance. Le client choisit l'alternative après avoir compris le compromis qualité/performance.",
      action:
        "Création d'un prototype fonctionnel en 2 jours, validation client, intégration dans le sprint. Résultat : effet visuel préservé, performances maintenues, budget respecté.",
    },
  ],
  _p = [
    {
      id: "m-morocco",
      title: "M-Morocco",
      url: "https://m-morocco.com",
      category: "e-commerce",
      color: "#c99a1d",
      initials: "MM",
      problem:
        "Parcours e-commerce complexe avec gestion multi-niveaux d'accès et processus métier spécifiques nécessitant des automatisations sur-mesure.",
      roadmap:
        "Audit du parcours utilisateur existant → Restructuration des rôles/permissions WooCommerce → Développement d'automatisations custom (notifications, relances, reporting) → Tests UAT avec l'équipe métier.",
      blockage:
        "Conflit entre le plugin de membership et le workflow de commande personnalisé — résolu par le développement d'un middleware PHP léger qui orchestre les deux systèmes.",
      impact:
        "Parcours d'achat fluidifié, réduction de 60% des tickets support liés aux commandes, automatisations épargnant 10h/semaine de travail manuel.",
    },
    {
      id: "south-cluster",
      title: "South Cluster AISBL",
      url: "https://www.southcluster.org/",
      category: "pilotage",
      color: "#2e86ab",
      initials: "SC",
      problem:
        "Plateforme multilingue (FR/NL/EN) avec formulaires complexes et besoin d'alignement entre multiples parties prenantes internationales.",
      roadmap:
        "Cadrage multilingue avec WPML → Architecture des formulaires (Contact Form 7 + custom) → Coordination avec les 3 pays membres → Recette fonctionnelle multilingue.",
      blockage:
        "Incohérences de traduction dans les emails transactionnels — résolu par la création d'un glossaire partagé et d'un workflow de validation traduit avant intégration.",
      impact:
        "Plateforme opérationnelle en 3 langues, formulaires fonctionnels avec routing intelligent, satisfaction des 3 entités membres.",
    },
    {
      id: "massor-maroc",
      title: "Massor Maroc",
      url: "https://massor-maroc.ma",
      category: "pilotage",
      color: "#1a936f",
      initials: "Ma",
      problem:
        "Structuration digitale complète d'une entreprise en croissance : besoin d'aligner les processus opérationnels avec les outils digitaux.",
      roadmap:
        "Audit des processus existants → Évaluation ERPNext pour la gestion → Structuration du site vitrine WordPress → Pilotage de la transformation digitale globale.",
      blockage:
        "Résistance au changement sur l'adoption des outils digitaux — résolu par des sessions de formation progressives et un accompagnement terrain personnalisé.",
      impact:
        "Processus digitalisés, présence web professionnelle établie, équipe autonome sur les outils — évolution du rôle vers Digital Transformation Manager.",
    },
    {
      id: "twily",
      title: "Twily",
      url: "https://twily.ma/",
      category: "pilotage",
      color: "#6c3483",
      initials: "Tw",
      problem:
        "Pilotage de projets web avec coordination d'équipes pluridisciplinaires (développeurs, designers, clients) et exigences de performance élevées.",
      roadmap:
        "Mise en place de sprints bi-hebdomadaires → Coordination quotidienne équipe/client → Audits de performance réguliers → Process de QA systématique.",
      blockage:
        "Désalignement entre les maquettes designer et les contraintes techniques WordPress — résolu par un atelier de conciliation design/dev avec prototypes interactifs.",
      impact:
        "Projets livrés dans les délais, satisfaction client mesurée, performance web optimisée (scores Lighthouse 90+).",
    },
    {
      id: "moulay-driss",
      title: "Moulay Driss",
      url: "https://moulaydriss.ma",
      category: "web",
      color: "#d4a373",
      initials: "MD",
      problem:
        "Expérience utilisateur à optimiser sur un site existant avec des problèmes de réactivité et de performance mobile.",
      roadmap:
        "Audit UX et performance → Refonte responsive mobile-first → Optimisation des assets et du chargement → Tests cross-device.",
      blockage:
        "Images non-optimisées et scripts bloquants ralentissant le site — résolu par lazy loading, compression WebP et defer des scripts non-critiques.",
      impact:
        "Temps de chargement divisé par 3, expérience mobile fluide, bounce rate réduit de 35%.",
    },
    {
      id: "feedback-branding",
      title: "Feedback Branding Studio",
      url: "https://feedbackbranding.studio/",
      category: "web",
      color: "#e76f51",
      initials: "FB",
      problem:
        "Intégration soignée d'une identité visuelle forte dans un site web performant, avec collaboration étroite entre l'équipe branding et le développement.",
      roadmap:
        "Brief créatif avec l'équipe branding → Intégration pixel-perfect des maquettes → Animations subtiles respectant l'identité → Optimisation performance.",
      blockage:
        "Polices custom impactant le FCP (First Contentful Paint) — résolu par font-display: swap + préchargement stratégique des polices critiques.",
      impact:
        "Site fidèle à l'identité de marque, score performance 95+, collaboration design/dev fluide et efficace.",
    },
    {
      id: "sores-africa",
      title: "Sores Africa",
      url: "https://sores.africa/",
      category: "web",
      color: "#264653",
      initials: "SA",
      problem:
        "Architecture web robuste pour une présence digitale africaine avec exigences de réactivité et de livraison fiable.",
      roadmap:
        "Architecture WordPress multisite → Configuration serveur optimisée → Intégration continue → Monitoring et alertes.",
      blockage:
        "Problèmes de compatibilité hébergement/plugin — résolu par migration vers un VPS optimisé WordPress avec configuration Nginx + PHP-FPM dédiée.",
      impact:
        "Site rapide et stable (uptime 99.9%), architecture scalable, livraison dans les délais avec documentation complète.",
    },
  ],
  yw = {
    management: {
      title: "Gestion de Projet & Relation Client",
      icon: ew,
      items: [
        "Cadrage, planification et pilotage de projets web",
        "Méthodes Agiles / Scrum",
        "Coordination d'équipes pluridisciplinaires",
        "Gestion de la relation client et communication",
        "Traduction des besoins métier en solutions",
        "Suivi des jalons, délais et qualité",
        "Arbitrage et prise de décision",
      ],
    },
    development: {
      title: "Développement Web",
      icon: pm,
      items: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "PHP & WordPress (thèmes, plugins, custom)",
        "WooCommerce & E-commerce",
        "Intégration responsive et accessibilité",
        "API REST & intégrations tierces",
        "Git / GitHub / Gitflow",
        "jQuery, React (notions), Vanilla JS",
      ],
    },
    technical: {
      title: "Performance, Serveur & Workflow IA",
      icon: cw,
      items: [
        "Administration serveur (Linux, Nginx, Apache)",
        "Déploiement, sauvegardes et sécurité",
        "Optimisation performance (Core Web Vitals)",
        "Hébergement et configuration DNS/SSL",
        "Workflow assisté par IA (prototypage, debug)",
        "Audit SEO technique",
        "Monitoring et maintenance proactive",
      ],
    },
  },
  vw = [
    {
      period: "AVRI. 2024 – 2026",
      role: "WEB CONSULTANT | PROBLEM SOLVING SPECIALIST",
      company: "Urban Fusion Agency — Marrakech (Remote)",
      description:
        "Gestion, maintenance et optimisation de sites WordPress pour des clients variés. Administration serveur : hébergement, déploiements, sauvegardes et résolution d'incidents. Mise en place de bonnes pratiques sécurité, performance et disponibilité. Collaboration avec designers, équipes marketing et clients pour des livrables alignés aux objectifs métier.",
    },
    {
      period: "JAN. 2025 – OCT. 2025",
      role: "RESPONSABLE DE LA TRANSFORMATION DIGITALE",
      company: "Massor Maroc SARL — Casablanca",
      description:
        "Pilotage de la modernisation des processus internes et conduite du changement organisationnel. Déploiement d'outils digitaux pour améliorer l'efficacité opérationnelle et l'expérience client. Animation de synergies interdépartementales et alignement des stratégies digitales sur les objectifs de l'entreprise. Mise en place de tableaux de bord analytiques pour le suivi de la performance.",
    },
    {
      period: "SEP. 2024 – JAN. 2025",
      role: "CHEF DE PROJET WEB",
      company: "Twily LLC — Marrakech",
      description:
        "Planification, exécution et livraison de projets web en coordination avec développeurs, designers et clients. Suivi des plannings, gestion des ressources et résolution des problèmes techniques. Audits réguliers de performance pour améliorer l'UX et l'engagement utilisateur. Point de contact principal pour les clients : traduction des besoins métier en solutions digitales.",
    },
    {
      period: "AOÛ. – DÉC. 2023",
      role: "CONSULTANT IT & SPÉCIALISTE WORDPRESS",
      company: "INPRIVATE.MA — Marrakech",
      description:
        "Constitution et encadrement d'équipes pluridisciplinaires (dev, design, contenu). Conseil IT stratégique et développement de solutions WordPress sur-mesure. Gestion multi-projets avec respect des délais, du budget et des exigences qualité.",
    },
    {
      period: "JAN. – MAI 2022",
      role: "LEAD DÉVELOPPEUR WORDPRESS & MENTOR",
      company: "QALQUL — Casablanca",
      description:
        "Direction technique de projets WordPress complexes pour une clientèle variée. Formation et accompagnement de stagiaires aux bonnes pratiques du développement web. Amélioration des workflows de développement pour un meilleur rendement d'équipe.",
    },
    {
      period: "SEP. 2018 – NOV. 2020",
      role: "DESIGNER FULL-STACK & DÉVELOPPEUR FRONT-END",
      company: "Lysah Export — Marrakech",
      description:
        "Conception UI/UX (wireframes, maquettes, intégration) pour des projets web variés. Développement d'interfaces responsives et optimisation des performances front-end.",
    },
  ];
function xw() {
  const [n, i] = O.useState(!1),
    [s, l] = O.useState(!1),
    [u, f] = O.useState(!1);
  O.useEffect(() => {
    const m = () => l(window.scrollY > 50);
    return (
      window.addEventListener("scroll", m),
      () => window.removeEventListener("scroll", m)
    );
  }, []);
  const d = () => {
    navigator.clipboard.writeText("azzeddine.lahlil@gmail.com"),
      f(!0),
      setTimeout(() => f(!1), 2e3);
  },
    h = [
      { href: "#roadmap", label: "ROADMAP" },
      { href: "#decisions", label: "DÉCISIONS" },
      { href: "#etudes-de-cas", label: "ÉTUDES DE CAS" },
      { href: "#parcours", label: "PARCOURS" },
    ];
  return y.jsxs("header", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s ? "glass py-3" : "py-5"
      }`,
    children: [
      y.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between",
        children: [
          y.jsxs("a", {
            href: "#",
            className: "flex items-center gap-2",
            children: [
              y.jsx("div", {
                className:
                  "w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-900 font-bold text-sm",
                children: "AL",
              }),
              y.jsx("span", {
                className:
                  "font-semibold text-white hidden sm:block",
                children: "Azzeddine LAHLIL",
              }),
            ],
          }),
          y.jsx("nav", {
            className: "hidden lg:flex items-center gap-8",
            children: h.map((m) =>
              y.jsx(
                "a",
                {
                  href: m.href,
                  className:
                    "text-sm text-gray-300 hover:text-gold-400 transition-colors duration-200",
                  children: m.label,
                },
                m.href
              )
            ),
          }),
          y.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              y.jsx("a", {
                href: "#contact",
                className:
                  "hidden sm:block px-4 py-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold text-sm hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-200",
                children: "Let's Talk",
              }),
              y.jsx("button", {
                onClick: () => i(!n),
                className: "lg:hidden text-white p-2",
                children: n
                  ? y.jsx(hw, { size: 24 })
                  : y.jsx(lw, { size: 24 }),
              }),
            ],
          }),
        ],
      }),
      y.jsx(Xs, {
        children:
          n &&
          y.jsx(Te.div, {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className:
              "lg:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden",
            children: y.jsxs("nav", {
              className: "flex flex-col p-4 gap-2",
              children: [
                h.map((m) =>
                  y.jsx(
                    "a",
                    {
                      href: m.href,
                      onClick: () => i(!1),
                      className:
                        "text-gray-300 hover:text-gold-400 py-3 px-4 rounded-lg hover:bg-white/5 transition-all",
                      children: m.label,
                    },
                    m.href
                  )
                ),
                y.jsx("a", {
                  href: "#contact",
                  onClick: () => i(!1),
                  className:
                    "mt-2 text-center px-4 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold",
                  children: "Me contacter",
                }),
              ],
            }),
          }),
      }),
    ],
  });
}
function ww() {
  return y.jsxs("section", {
    className:
      "min-h-screen flex items-center relative overflow-hidden pt-20",
    children: [
      y.jsxs("div", {
        className: "absolute inset-0",
        children: [
          y.jsx("div", {
            className:
              "absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl",
          }),
          y.jsx("div", {
            className:
              "absolute bottom-1/4 -left-32 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl",
          }),
        ],
      }),
      y.jsx("div", {
        className:
          "max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10",
        children: y.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 items-center",
          children: [
            y.jsxs(Te.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: [
                y.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6",
                  children: [
                    y.jsx(fw, {
                      size: 14,
                      className: "text-gold-400",
                    }),
                    y.jsx("span", {
                      className: "text-sm text-gold-300",
                      children:
                        "+10 ans d'expérience en pilotage web",
                    }),
                  ],
                }),
                y.jsxs("h1", {
                  className:
                    "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4",
                  children: [
                    y.jsx("span", {
                      className: "text-white",
                      children: "Chef de Projet Web",
                    }),
                    y.jsx("br", {}),
                    y.jsx("span", {
                      className:
                        "gradient-text font-serif italic",
                      children:
                        "Pilotage, Relation Client",
                    }),
                    y.jsx(),
                    y.jsx("span", {
                      className: "text-white",
                      children:
                        " & Résolution de Problèmes",
                    }),
                  ],
                }),
                y.jsxs("p", {
                  className:
                    "text-lg text-gray-400 mb-8 max-w-xl leading-relaxed",
                  children: [
                    "Double expertise ",
                    y.jsx("strong", {
                      className: "text-white",
                      children: "pilotage de projets",
                    }),
                    " et ",
                    y.jsx("strong", {
                      className: "text-white",
                      children: "vision d'un artistestack technique web",
                    }),
                    " (HTML, CSS, JS, PHP, WordPress/WooCommerce). Je transforme les besoins métier en solutions digitales livrées dans les délais, avec qualité et transparence.",
                  ],
                }),
                y.jsxs("div", {
                  className: "flex flex-wrap gap-4 mb-10",
                  children: [
                    y.jsxs("a", {
                      href: "#roadmap",
                      className:
                        "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300",
                      children: [
                        "Découvrir ma roadmap",
                        y.jsx(J1, { size: 16 }),
                      ],
                    }),
                    y.jsxs("a", {
                      href: "#etudes-de-cas",
                      className:
                        "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 transition-all duration-300",
                      children: [
                        "Explorer les études de cas",
                        y.jsx(fm, { size: 16 }),
                      ],
                    }),
                  ],
                }),
                y.jsx("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-4 gap-4",
                  children: [
                    {
                      value: "10+",
                      label: "Années d'expérience",
                    },
                    {
                      value: "30+",
                      label: "Projets livrés",
                    },
                    {
                      value: "3",
                      label: "Langues (FR/EN/AR)",
                    },
                    {
                      value: "100%",
                      label: "Orienté résultats",
                    },
                  ].map((n, i) =>
                    y.jsxs(
                      "div",
                      {
                        className:
                          "text-center p-3 rounded-xl bg-dark-700/50 border border-dark-600/50",
                        children: [
                          y.jsx("div", {
                            className:
                              "text-xl font-bold text-gold-400",
                            children: n.value,
                          }),
                          y.jsx("div", {
                            className:
                              "text-xs text-gray-500 mt-1",
                            children: n.label,
                          }),
                        ],
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
            y.jsx(Te.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "hidden lg:flex justify-center",
              children: y.jsxs("div", {
                className: "relative",
                children: [
                  y.jsx("div", {
                    className:
                      "w-80 h-80 rounded-full overflow-hidden border-2 border-gold-500/30 gold-glow",
                    children: y.jsx("img", {
                      src: gw,
                      alt: "Azzeddine LAHLIL",
                      className:
                        "w-full h-full object-cover",
                      onError: (n) => {
                        n.target.src =
                          "/img/pic-profile.png";
                      },
                    }),
                  }),
                  y.jsxs(Te.div, {
                    animate: { y: [-5, 5, -5] },
                    transition: {
                      duration: 4,
                      repeat: 1 / 0,
                    },
                    className:
                      "absolute -top-4 -right-8 glass rounded-xl p-3 flex items-center gap-2",
                    children: [
                      y.jsx(hu, {
                        size: 18,
                        className: "text-gold-400",
                      }),
                      y.jsx("span", {
                        className:
                          "text-xs text-gray-300",
                        children: "Gestion de Projet",
                      }),
                    ],
                  }),
                  y.jsxs(Te.div, {
                    animate: { y: [5, -5, 5] },
                    transition: {
                      duration: 4,
                      repeat: 1 / 0,
                      delay: 1,
                    },
                    className:
                      "absolute -bottom-4 -left-8 glass rounded-xl p-3 flex items-center gap-2",
                    children: [
                      y.jsx(pm, {
                        size: 18,
                        className: "text-gold-400",
                      }),
                      y.jsx("span", {
                        className:
                          "text-xs text-gray-300",
                        children: "Stack Web",
                      }),
                    ],
                  }),
                  y.jsxs(Te.div, {
                    animate: { y: [-3, 3, -3] },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      delay: 2,
                    },
                    className:
                      "absolute top-1/2 -right-12 glass rounded-xl p-3 flex items-center gap-2",
                    children: [
                      y.jsx(pw, {
                        size: 18,
                        className: "text-gold-400",
                      }),
                      y.jsx("span", {
                        className:
                          "text-xs text-gray-300",
                        children: "Relation Client",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Sw() {
  const [n, i] = O.useState(0);
  return y.jsx("section", {
    id: "roadmap",
    className: "py-24 relative",
    children: y.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6",
      children: [
        y.jsxs(Te.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "text-center mb-16",
          children: [
            y.jsx("span", {
              className:
                "text-gold-400 text-sm font-medium tracking-wider uppercase",
              children: "Ma méthode",
            }),
            y.jsx("h2", {
              className:
                "text-3xl sm:text-4xl font-bold text-white mt-3 mb-4",
              children: "Roadmap Projet Interactive",
            }),
            y.jsx("p", {
              className: "text-gray-400 max-w-2xl mx-auto",
              children:
                "Chaque projet suit une méthodologie éprouvée en 4 étapes, garantissant alignement, qualité et livraison dans les délais.",
            }),
          ],
        }),
        y.jsx("div", {
          className: "grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12",
          children: Ln.map((s, l) => {
            const u = s.icon;
            return y.jsxs(
              "button",
              {
                onClick: () => i(l),
                className: `p-4 rounded-xl text-left transition-all duration-300 ${n === l
                  ? "bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/40 gold-glow"
                  : "bg-dark-700/50 border border-dark-600/50 hover:border-gold-500/20"
                  }`,
                children: [
                  y.jsxs("div", {
                    className:
                      "flex items-center gap-3 mb-2",
                    children: [
                      y.jsx("span", {
                        className: `text-xs font-bold ${n === l
                          ? "text-gold-400"
                          : "text-gray-500"
                          }`,
                        children: s.number,
                      }),
                      y.jsx(u, {
                        size: 18,
                        className:
                          n === l
                            ? "text-gold-400"
                            : "text-gray-500",
                      }),
                    ],
                  }),
                  y.jsx("h3", {
                    className: `text-sm font-semibold ${n === l
                      ? "text-white"
                      : "text-gray-400"
                      }`,
                    children: s.title,
                  }),
                ],
              },
              s.id
            );
          }),
        }),
        y.jsx(Xs, {
          mode: "wait",
          children: y.jsx(
            Te.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.3 },
              className: "glass rounded-2xl p-6 sm:p-8",
              children: y.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsxs("h3", {
                        className:
                          "text-xl font-bold text-white mb-4 flex items-center gap-3",
                        children: [
                          y.jsx("span", {
                            className:
                              "text-gold-400 font-serif text-2xl",
                            children: Ln[n].number,
                          }),
                          Ln[n].title,
                        ],
                      }),
                      y.jsxs("div", {
                        className: "mb-6",
                        children: [
                          y.jsx("h4", {
                            className:
                              "text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3",
                            children: "Objectifs",
                          }),
                          y.jsx("ul", {
                            className: "space-y-2",
                            children: Ln[
                              n
                            ].objectives.map(
                              (s, l) =>
                                y.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex items-start gap-2 text-sm text-gray-300",
                                    children: [
                                      y.jsx(
                                        dm,
                                        {
                                          size: 14,
                                          className:
                                            "text-gold-500 mt-0.5 flex-shrink-0",
                                        }
                                      ),
                                      s,
                                    ],
                                  },
                                  l
                                )
                            ),
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        children: [
                          y.jsx("h4", {
                            className:
                              "text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3",
                            children: "Livrables",
                          }),
                          y.jsx("ul", {
                            className: "space-y-2",
                            children: Ln[
                              n
                            ].deliverables.map(
                              (s, l) =>
                                y.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex items-start gap-2 text-sm text-gray-300",
                                    children: [
                                      y.jsx(
                                        fm,
                                        {
                                          size: 14,
                                          className:
                                            "text-gold-500 mt-0.5 flex-shrink-0",
                                        }
                                      ),
                                      s,
                                    ],
                                  },
                                  l
                                )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      y.jsxs("div", {
                        className:
                          "p-4 rounded-xl bg-dark-800/80 border border-gold-500/20",
                        children: [
                          y.jsxs("div", {
                            className:
                              "flex items-center gap-2 mb-2",
                            children: [
                              y.jsx(sw, {
                                size: 16,
                                className:
                                  "text-gold-400",
                              }),
                              y.jsx("h4", {
                                className:
                                  "text-sm font-semibold text-gold-400",
                                children:
                                  "Décision clé du Chef de Projet",
                              }),
                            ],
                          }),
                          y.jsx("p", {
                            className:
                              "text-sm text-gray-300 leading-relaxed",
                            children:
                              Ln[n].decision,
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        className:
                          "p-4 rounded-xl bg-dark-800/80 border border-gold-500/10",
                        children: [
                          y.jsxs("div", {
                            className:
                              "flex items-center gap-2 mb-2",
                            children: [
                              y.jsx(mu, {
                                size: 16,
                                className:
                                  "text-gold-400",
                              }),
                              y.jsx("h4", {
                                className:
                                  "text-sm font-semibold text-gold-400",
                                children:
                                  "Exemple concret — Blocage résolu",
                              }),
                            ],
                          }),
                          y.jsx("p", {
                            className:
                              "text-sm text-gray-300 leading-relaxed",
                            children: Ln[n].example,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            n
          ),
        }),
      ],
    }),
  });
}
function kw() {
  const [n, i] = O.useState(0);
  return y.jsx("section", {
    id: "decisions",
    className: "py-24 relative bg-dark-800/30",
    children: y.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6",
      children: [
        y.jsxs(Te.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "text-center mb-16",
          children: [
            y.jsx("span", {
              className:
                "text-gold-400 text-sm font-medium tracking-wider uppercase",
              children: "Playbook",
            }),
            y.jsx("h2", {
              className:
                "text-3xl sm:text-4xl font-bold text-white mt-3 mb-4",
              children:
                "Prise de Décision & Résolution de Problèmes",
            }),
            y.jsx("p", {
              className: "text-gray-400 max-w-2xl mx-auto",
              children:
                "Des scénarios concrets d'agence web illustrant ma méthodologie de diagnostic, arbitrage et action.",
            }),
          ],
        }),
        y.jsx("div", {
          className: "flex flex-wrap justify-center gap-3 mb-12",
          children: li.map((s, l) => {
            const u = s.icon;
            return y.jsxs(
              "button",
              {
                onClick: () => i(l),
                className: `flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${n === l
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 shadow-lg shadow-gold-500/25"
                  : "bg-dark-700/80 border border-dark-600 text-gray-400 hover:border-gold-500/30 hover:text-white"
                  }`,
                children: [y.jsx(u, { size: 16 }), s.title],
              },
              s.id
            );
          }),
        }),
        y.jsx(Xs, {
          mode: "wait",
          children: y.jsx(
            Te.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.3 },
              className: "grid md:grid-cols-2 gap-6",
              children: [
                {
                  label: "Diagnostic",
                  icon: mm,
                  content: li[n].diagnostic,
                  color: "text-blue-400",
                },
                {
                  label: "Décision & Arbitrage",
                  icon: hu,
                  content: li[n].decision,
                  color: "text-gold-400",
                },
                {
                  label: "Communication Client",
                  icon: aw,
                  content: li[n].communication,
                  color: "text-green-400",
                },
                {
                  label: "Action Technique",
                  icon: mu,
                  content: li[n].action,
                  color: "text-purple-400",
                },
              ].map((s, l) => {
                const u = s.icon;
                return y.jsxs(
                  Te.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: l * 0.1 },
                    className: "glass rounded-xl p-6",
                    children: [
                      y.jsxs("div", {
                        className:
                          "flex items-center gap-3 mb-3",
                        children: [
                          y.jsx("div", {
                            className: `p-2 rounded-lg bg-dark-800 ${s.color}`,
                            children: y.jsx(u, {
                              size: 18,
                            }),
                          }),
                          y.jsx("h4", {
                            className: `font-semibold text-sm ${s.color}`,
                            children: s.label,
                          }),
                        ],
                      }),
                      y.jsx("p", {
                        className:
                          "text-sm text-gray-300 leading-relaxed",
                        children: s.content,
                      }),
                    ],
                  },
                  l
                );
              }),
            },
            n
          ),
        }),
      ],
    }),
  });
}
function Pw() {
  const [n, i] = O.useState("all"),
    s = [
      { id: "all", label: "Tous" },
      { id: "e-commerce", label: "E-Commerce & Logique Métier" },
      { id: "pilotage", label: "Pilotage & Transformation" },
      { id: "web", label: "Web, Identité & Performance" },
    ],
    l = n === "all" ? _p : _p.filter((u) => u.category === n);
  return y.jsx("section", {
    id: "etudes-de-cas",
    className: "py-24 relative",
    children: y.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6",
      children: [
        y.jsxs(Te.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "text-center mb-16",
          children: [
            y.jsx("span", {
              className:
                "text-gold-400 text-sm font-medium tracking-wider uppercase",
              children: "Portfolio",
            }),
            y.jsx("h2", {
              className:
                "text-3xl sm:text-4xl font-bold text-white mt-3 mb-4",
              children: "Études de Cas",
            }),
            y.jsx("p", {
              className: "text-gray-400 max-w-2xl mx-auto",
              children:
                "Des projets réels illustrant le problème, la décision, le blocage résolu et l'impact mesurable.",
            }),
          ],
        }),
        y.jsx("div", {
          className: "flex flex-wrap justify-center gap-2 mb-12",
          children: s.map((u) =>
            y.jsx(
              "button",
              {
                onClick: () => i(u.id),
                className: `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${n === u.id
                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900"
                  : "bg-dark-700/80 border border-dark-600 text-gray-400 hover:border-gold-500/30 hover:text-white"
                  }`,
                children: u.label,
              },
              u.id
            )
          ),
        }),
        y.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: y.jsx(Xs, {
            mode: "popLayout",
            children: l.map((u) =>
              y.jsxs(
                Te.div,
                {
                  layout: !0,
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { duration: 0.3 },
                  className:
                    "glass rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300 group",
                  children: [
                    y.jsx("div", {
                      className:
                        "flex items-center justify-between mb-4",
                      children: y.jsxs("div", {
                        className:
                          "flex items-center gap-3",
                        children: [
                          y.jsx("div", {
                            className:
                              "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm",
                            style: {
                              backgroundColor:
                                u.color + "22",
                              border: `1px solid ${u.color}44`,
                            },
                            children: y.jsx(
                              "span",
                              {
                                style: {
                                  color:
                                    u.color,
                                },
                                children:
                                  u.initials,
                              }
                            ),
                          }),
                          y.jsxs("div", {
                            children: [
                              y.jsx("h3", {
                                className:
                                  "font-semibold text-white text-sm group-hover:text-gold-400 transition-colors",
                                children:
                                  u.title,
                              }),
                              y.jsxs("a", {
                                href: u.url,
                                target:
                                  "_blank",
                                rel:
                                  "noopener noreferrer",
                                className:
                                  "text-xs text-gray-500 hover:text-gold-400 flex items-center gap-1 transition-colors",
                                children: [
                                  u.url.replace(
                                    "https://",
                                    ""
                                  ),
                                  " ",
                                  y.jsx(hm, {
                                    size: 10,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    y.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        y.jsxs("div", {
                          children: [
                            y.jsx("span", {
                              className:
                                "text-xs font-semibold text-red-400/80 uppercase tracking-wider",
                              children:
                                "Problème",
                            }),
                            y.jsx("p", {
                              className:
                                "text-xs text-gray-400 mt-1 leading-relaxed",
                              children: u.problem,
                            }),
                          ],
                        }),
                        y.jsxs("div", {
                          children: [
                            y.jsx("span", {
                              className:
                                "text-xs font-semibold text-gold-400/80 uppercase tracking-wider",
                              children:
                                "Roadmap & Décision",
                            }),
                            y.jsx("p", {
                              className:
                                "text-xs text-gray-400 mt-1 leading-relaxed",
                              children: u.roadmap,
                            }),
                          ],
                        }),
                        y.jsxs("div", {
                          children: [
                            y.jsx("span", {
                              className:
                                "text-xs font-semibold text-blue-400/80 uppercase tracking-wider",
                              children:
                                "Blocage Résolu",
                            }),
                            y.jsx("p", {
                              className:
                                "text-xs text-gray-400 mt-1 leading-relaxed",
                              children:
                                u.blockage,
                            }),
                          ],
                        }),
                        y.jsxs("div", {
                          children: [
                            y.jsx("span", {
                              className:
                                "text-xs font-semibold text-green-400/80 uppercase tracking-wider",
                              children: "Impact",
                            }),
                            y.jsx("p", {
                              className:
                                "text-xs text-gray-400 mt-1 leading-relaxed",
                              children: u.impact,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                u.id
              )
            ),
          }),
        }),
      ],
    }),
  });
}
function Cw() {
  return y.jsx("section", {
    id: "parcours",
    className: "py-24 relative bg-dark-800/30",
    children: y.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6",
      children: [
        y.jsxs(Te.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "text-center mb-16",
          children: [
            y.jsx("span", {
              className:
                "text-gold-400 text-sm font-medium tracking-wider uppercase",
              children: "Expertise",
            }),
            y.jsx("h2", {
              className:
                "text-3xl sm:text-4xl font-bold text-white mt-3 mb-4",
              children: "Compétences & Parcours",
            }),
            y.jsx("p", {
              className: "text-gray-400 max-w-2xl mx-auto",
              children:
                "Une double compétence en gestion de projet web et développement technique, enrichie par 10+ ans de terrain.",
            }),
          ],
        }),
        y.jsx("div", {
          className: "grid md:grid-cols-3 gap-6 mb-20",
          children: Object.values(yw).map((n, i) => {
            const s = n.icon;
            return y.jsxs(
              Te.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { delay: i * 0.1 },
                className: "glass rounded-2xl p-6",
                children: [
                  y.jsxs("div", {
                    className:
                      "flex items-center gap-3 mb-4",
                    children: [
                      y.jsx("div", {
                        className:
                          "p-3 rounded-xl bg-gold-500/10",
                        children: y.jsx(s, {
                          size: 22,
                          className: "text-gold-400",
                        }),
                      }),
                      y.jsx("h3", {
                        className:
                          "font-semibold text-white text-sm",
                        children: n.title,
                      }),
                    ],
                  }),
                  y.jsx("ul", {
                    className: "space-y-2",
                    children: n.items.map((l, u) =>
                      y.jsxs(
                        "li",
                        {
                          className:
                            "flex items-start gap-2 text-sm text-gray-400",
                          children: [
                            y.jsx(dm, {
                              size: 12,
                              className:
                                "text-gold-500 mt-1 flex-shrink-0",
                            }),
                            l,
                          ],
                        },
                        u
                      )
                    ),
                  }),
                ],
              },
              i
            );
          }),
        }),
        y.jsxs("div", {
          className: "mb-16",
          children: [
            y.jsx("h3", {
              className:
                "text-2xl font-bold text-white text-center mb-10",
              children: "Parcours Professionnel",
            }),
            y.jsxs("div", {
              className: "relative",
              children: [
                y.jsx("div", {
                  className:
                    "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent",
                }),
                y.jsx("div", {
                  className: "space-y-8",
                  children: vw.map((n, i) =>
                    y.jsxs(
                      Te.div,
                      {
                        initial: {
                          opacity: 0,
                          x: i % 2 === 0 ? -20 : 20,
                        },
                        whileInView: {
                          opacity: 1,
                          x: 0,
                        },
                        viewport: { once: !0 },
                        transition: { delay: i * 0.05 },
                        className: `relative flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                          }`,
                        children: [
                          y.jsx("div", {
                            className: `flex-1 ${i % 2 === 0
                              ? "md:text-right"
                              : "md:text-left"
                              }`,
                            children: y.jsxs(
                              "div",
                              {
                                className:
                                  "glass rounded-xl p-5 inline-block text-left",
                                children: [
                                  y.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-2 mb-2",
                                      children: [
                                        y.jsx(
                                          tw,
                                          {
                                            size: 12,
                                            className:
                                              "text-gold-400",
                                          }
                                        ),
                                        y.jsx(
                                          "span",
                                          {
                                            className:
                                              "text-xs text-gold-400 font-medium",
                                            children:
                                              n.period,
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                  y.jsx(
                                    "h4",
                                    {
                                      className:
                                        "font-semibold text-white text-sm mb-1",
                                      children:
                                        n.role,
                                    }
                                  ),
                                  y.jsx("p", {
                                    className:
                                      "text-xs text-gold-400/80 mb-2",
                                    children:
                                      n.company,
                                  }),
                                  y.jsx("p", {
                                    className:
                                      "text-xs text-gray-400 leading-relaxed",
                                    children:
                                      n.description,
                                  }),
                                ],
                              }
                            ),
                          }),
                          y.jsx("div", {
                            className:
                              "absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-gold-500 border-2 border-dark-900 top-6",
                          }),
                          y.jsx("div", {
                            className:
                              "flex-1 hidden md:block",
                          }),
                        ],
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Tw() {
  const [n, i] = O.useState(!1),
    [s, l] = O.useState(!1),
    u = (f, d) => {
      navigator.clipboard.writeText(f),
        d === "email"
          ? (i(!0), setTimeout(() => i(!1), 2e3))
          : (l(!0), setTimeout(() => l(!1), 2e3));
    };
  return y.jsx("section", {
    id: "contact",
    className: "py-24 relative",
    children: y.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6",
      children: [
        y.jsxs(Te.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "text-center mb-16",
          children: [
            y.jsx("span", {
              className:
                "text-gold-400 text-sm font-medium tracking-wider uppercase",
              children: "Contact",
            }),
            y.jsx("h2", {
              className:
                "text-3xl sm:text-4xl font-bold text-white mt-3 mb-4",
              children: "Discutons de votre projet",
            }),
            y.jsx("p", {
              className: "text-gray-400 max-w-2xl mx-auto",
              children:
                "Disponible en présentiel à Casablanca. N'hésitez pas à me contacter pour échanger sur vos besoins.",
            }),
          ],
        }),
        y.jsxs("div", {
          className:
            "grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto",
          children: [
            y.jsxs(Te.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className:
                "glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300",
              children: [
                y.jsx("div", {
                  className:
                    "w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4",
                  children: y.jsx(Ra, {
                    size: 20,
                    className: "text-gold-400",
                  }),
                }),
                y.jsx("h4", {
                  className:
                    "text-sm font-semibold text-white mb-2",
                  children: "Email",
                }),
                y.jsx("p", {
                  className:
                    "text-xs text-gray-400 mb-3 break-all",
                  children: "azzeddine.lahlil@gmail.com",
                }),
                y.jsx("button", {
                  onClick: () =>
                    u(
                      "azzeddine.lahlil@gmail.com",
                      "email"
                    ),
                  className:
                    "inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 transition-colors",
                  children: n
                    ? y.jsxs(y.Fragment, {
                      children: [
                        y.jsx(Aa, { size: 12 }),
                        " Copié !",
                      ],
                    })
                    : y.jsxs(y.Fragment, {
                      children: [
                        y.jsx(Da, { size: 12 }),
                        " Copier",
                      ],
                    }),
                }),
              ],
            }),
            y.jsxs(Te.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.1 },
              className:
                "glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300",
              children: [
                y.jsx("div", {
                  className:
                    "w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4",
                  children: y.jsx(uw, {
                    size: 20,
                    className: "text-gold-400",
                  }),
                }),
                y.jsx("h4", {
                  className:
                    "text-sm font-semibold text-white mb-2",
                  children: "Téléphone",
                }),
                y.jsx("p", {
                  className: "text-xs text-gray-400 mb-3",
                  children: "+212 625 350 050",
                }),
                y.jsx("button", {
                  onClick: () => u("+212625350050", "phone"),
                  className:
                    "inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 transition-colors",
                  children: s
                    ? y.jsxs(y.Fragment, {
                      children: [
                        y.jsx(Aa, { size: 12 }),
                        " Copié !",
                      ],
                    })
                    : y.jsxs(y.Fragment, {
                      children: [
                        y.jsx(Da, { size: 12 }),
                        " Copier",
                      ],
                    }),
                }),
              ],
            }),
            y.jsxs(Te.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.2 },
              className:
                "glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300",
              children: [
                y.jsx("div", {
                  className:
                    "w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4",
                  children: y.jsx(gm, {
                    size: 20,
                    className: "text-gold-400",
                  }),
                }),
                y.jsx("h4", {
                  className:
                    "text-sm font-semibold text-white mb-2",
                  children: "LinkedIn",
                }),
                y.jsx("p", {
                  className: "text-xs text-gray-400 mb-3",
                  children: "geekazzeddine",
                }),
                y.jsxs("a", {
                  href:
                    "https://ma.linkedin.com/in/geekazzeddine",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 transition-colors",
                  children: [
                    y.jsx(hm, { size: 12 }),
                    " Voir le profil",
                  ],
                }),
              ],
            }),
            y.jsxs(Te.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.3 },
              className:
                "glass rounded-2xl p-6 text-center hover:border-gold-500/30 transition-all duration-300",
              children: [
                y.jsx("div", {
                  className:
                    "w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4",
                  children: y.jsx(ow, {
                    size: 20,
                    className: "text-gold-400",
                  }),
                }),
                y.jsx("h4", {
                  className:
                    "text-sm font-semibold text-white mb-2",
                  children: "Localisation",
                }),
                y.jsx("p", {
                  className: "text-xs text-gray-400 mb-3",
                  children: "Casablanca & Marrakech, Maroc",
                }),
                y.jsxs("span", {
                  className:
                    "inline-flex items-center gap-1 text-xs text-green-400",
                  children: [
                    y.jsx("span", {
                      className:
                        "w-2 h-2 rounded-full bg-green-400 animate-pulse",
                    }),
                    "Disponible — Présentiel",
                  ],
                }),
              ],
            }),
          ],
        }),
        y.jsx(Te.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "text-center mt-12",
          children: y.jsxs("a", {
            href: "mailto:azzeddine.lahlil@gmail.com",
            className:
              "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300 text-sm",
            children: [y.jsx(Ra, { size: 16 }), "Envoyer un email"],
          }),
        }),
      ],
    }),
  });
}
function Ew() {
  return y.jsx("footer", {
    className: "py-8 border-t border-dark-600/50",
    children: y.jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6",
      children: y.jsxs("div", {
        className:
          "flex flex-col sm:flex-row items-center justify-between gap-4",
        children: [
          y.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              y.jsx("div", {
                className:
                  "w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-dark-900 font-bold text-xs",
                children: "AL",
              }),
              y.jsx("span", {
                className: "text-sm text-gray-400",
                children:
                  "Azzeddine LAHLIL — Digital Transformation Advisor",
              }),
            ],
          }),
          y.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              y.jsx("a", {
                href:
                  "https://ma.linkedin.com/in/geekazzeddine",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-gray-500 hover:text-gold-400 transition-colors",
                children: y.jsx(gm, { size: 18 }),
              }),
              y.jsx("a", {
                href: "https://azzeddinelahlil.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-gray-500 hover:text-gold-400 transition-colors",
                children: y.jsx(nw, { size: 18 }),
              }),
              y.jsx("a", {
                href: "mailto:azzeddine.lahlil@gmail.com",
                className:
                  "text-gray-500 hover:text-gold-400 transition-colors",
                children: y.jsx(Ra, { size: 18 }),
              }),
            ],
          }),
          y.jsx("p", {
            className: "text-xs text-gray-600",
            children: "© 2024 — Conçu et développé avec passion",
          }),
        ],
      }),
    }),
  });
}
function jw() {
  return y.jsxs("div", {
    className: "min-h-screen bg-dark-900 text-white font-sans",
    children: [
      y.jsx("div", { className: "noise-overlay" }),
      y.jsx(xw, {}),
      y.jsxs("main", {
        children: [
          y.jsx(ww, {}),
          y.jsx(Sw, {}),
          y.jsx(kw, {}),
          y.jsx(Pw, {}),
          y.jsx(Cw, {}),
          y.jsx(Tw, {}),
        ],
      }),
      y.jsx(Ew, {}),
    ],
  });
}
P0.createRoot(document.getElementById("root")).render(y.jsx(jw, {}));
