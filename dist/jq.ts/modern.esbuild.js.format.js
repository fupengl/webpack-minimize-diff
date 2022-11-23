(() => {
  var Xn = {
    339: function (V, Y) {
      var ue, mt;
      /*!
       * jQuery JavaScript Library v3.6.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright OpenJS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2022-08-26T17:52Z
       */ (function (_, $e) {
        "use strict";
        if (typeof V.exports === "object") {
          V.exports = _.document
            ? $e(_, true)
            : function (ae) {
                if (!ae.document) {
                  throw new Error("jQuery requires a window with a document");
                }
                return $e(ae);
              };
        } else {
          $e(_);
        }
      })(typeof window !== "undefined" ? window : this, function (_, $e) {
        "use strict";
        var ae = [];
        var Xt = Object.getPrototypeOf;
        var Te = ae.slice;
        var Gt = ae.flat
          ? function (e) {
              return ae.flat.call(e);
            }
          : function (e) {
              return ae.concat.apply([], e);
            };
        var xt = ae.push;
        var nt = ae.indexOf;
        var rt = {};
        var Qt = rt.toString;
        var it = rt.hasOwnProperty;
        var Yt = it.toString;
        var Gn = Yt.call(Object);
        var I = {};
        var O = function e(t) {
          return typeof t === "function" && typeof t.nodeType !== "number" && typeof t.item !== "function";
        };
        var _e = function e(t) {
          return t != null && t === t.window;
        };
        var H = _.document;
        var Qn = { type: true, src: true, nonce: true, noModule: true };
        function Kt(e, t, n) {
          n = n || H;
          var r,
            o,
            u = n.createElement("script");
          u.text = e;
          if (t) {
            for (r in Qn) {
              o = t[r] || (t.getAttribute && t.getAttribute(r));
              if (o) {
                u.setAttribute(r, o);
              }
            }
          }
          n.head.appendChild(u).parentNode.removeChild(u);
        }
        function Oe(e) {
          if (e == null) {
            return e + "";
          }
          return typeof e === "object" || typeof e === "function" ? rt[Qt.call(e)] || "object" : typeof e;
        }
        var Jt = "3.6.1",
          i = function (e, t) {
            return new i.fn.init(e, t);
          };
        i.fn = i.prototype = {
          jquery: Jt,
          constructor: i,
          length: 0,
          toArray: function () {
            return Te.call(this);
          },
          get: function (e) {
            if (e == null) {
              return Te.call(this);
            }
            return e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = i.merge(this.constructor(), e);
            t.prevObject = this;
            return t;
          },
          each: function (e) {
            return i.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              i.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(Te.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              i.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              i.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: xt,
          sort: ae.sort,
          splice: ae.splice,
        };
        i.extend = i.fn.extend = function () {
          var e,
            t,
            n,
            r,
            o,
            u,
            a = arguments[0] || {},
            l = 1,
            f = arguments.length,
            h = false;
          if (typeof a === "boolean") {
            h = a;
            a = arguments[l] || {};
            l++;
          }
          if (typeof a !== "object" && !O(a)) {
            a = {};
          }
          if (l === f) {
            a = this;
            l--;
          }
          for (; l < f; l++) {
            if ((e = arguments[l]) != null) {
              for (t in e) {
                r = e[t];
                if (t === "__proto__" || a === r) {
                  continue;
                }
                if (h && r && (i.isPlainObject(r) || (o = Array.isArray(r)))) {
                  n = a[t];
                  if (o && !Array.isArray(n)) {
                    u = [];
                  } else if (!o && !i.isPlainObject(n)) {
                    u = {};
                  } else {
                    u = n;
                  }
                  o = false;
                  a[t] = i.extend(h, u, r);
                } else if (r !== void 0) {
                  a[t] = r;
                }
              }
            }
          }
          return a;
        };
        i.extend({
          expando: "jQuery" + (Jt + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            if (!e || Qt.call(e) !== "[object Object]") {
              return false;
            }
            t = Xt(e);
            if (!t) {
              return true;
            }
            n = it.call(t, "constructor") && t.constructor;
            return typeof n === "function" && Yt.call(n) === Gn;
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) {
              return false;
            }
            return true;
          },
          globalEval: function (e, t, n) {
            Kt(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (Tt(e)) {
              n = e.length;
              for (; r < n; r++) {
                if (t.call(e[r], r, e[r]) === false) {
                  break;
                }
              }
            } else {
              for (r in e) {
                if (t.call(e[r], r, e[r]) === false) {
                  break;
                }
              }
            }
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            if (e != null) {
              if (Tt(Object(e))) {
                i.merge(n, typeof e === "string" ? [e] : e);
              } else {
                xt.call(n, e);
              }
            }
            return n;
          },
          inArray: function (e, t, n) {
            return t == null ? -1 : nt.call(t, e, n);
          },
          merge: function (e, t) {
            var n = +t.length,
              r = 0,
              o = e.length;
            for (; r < n; r++) {
              e[o++] = t[r];
            }
            e.length = o;
            return e;
          },
          grep: function (e, t, n) {
            var r,
              o = [],
              u = 0,
              a = e.length,
              l = !n;
            for (; u < a; u++) {
              r = !t(e[u], u);
              if (r !== l) {
                o.push(e[u]);
              }
            }
            return o;
          },
          map: function (e, t, n) {
            var r,
              o,
              u = 0,
              a = [];
            if (Tt(e)) {
              r = e.length;
              for (; u < r; u++) {
                o = t(e[u], u, n);
                if (o != null) {
                  a.push(o);
                }
              }
            } else {
              for (u in e) {
                o = t(e[u], u, n);
                if (o != null) {
                  a.push(o);
                }
              }
            }
            return Gt(a);
          },
          guid: 1,
          support: I,
        });
        if (typeof Symbol === "function") {
          i.fn[Symbol.iterator] = ae[Symbol.iterator];
        }
        i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          rt["[object " + t + "]"] = t.toLowerCase();
        });
        function Tt(e) {
          var t = !!e && "length" in e && e.length,
            n = Oe(e);
          if (O(e) || _e(e)) {
            return false;
          }
          return n === "array" || t === 0 || (typeof t === "number" && t > 0 && t - 1 in e);
        }
        var Se = (function (e) {
          var t,
            n,
            r,
            o,
            u,
            a,
            l,
            f,
            h,
            y,
            x,
            g,
            v,
            S,
            L,
            E,
            X,
            U,
            ne,
            W = "sizzle" + 1 * new Date(),
            q = e.document,
            ee = 0,
            M = 0,
            z = gt(),
            Je = gt(),
            dt = gt(),
            re = gt(),
            De = function (s, c) {
              if (s === c) {
                x = true;
              }
              return 0;
            },
            ke = {}.hasOwnProperty,
            te = [],
            Ce = te.pop,
            ce = te.push,
            we = te.push,
            In = te.slice,
            je = function (s, c) {
              var d = 0,
                b = s.length;
              for (; d < b; d++) {
                if (s[d] === c) {
                  return d;
                }
              }
              return -1;
            },
            It = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            qe = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            Rn = "\\[" + R + "*(" + qe + ")(?:" + R + "*([*^$|!~]?=)" + R + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + qe + "))|)" + R + "*\\]",
            Rt = ":(" + qe + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Rn + ")*)|.*)\\)|)",
            Xr = new RegExp(R + "+", "g"),
            pt = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            Gr = new RegExp("^" + R + "*," + R + "*"),
            Wn = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            Qr = new RegExp(R + "|>"),
            Yr = new RegExp(Rt),
            Kr = new RegExp("^" + qe + "$"),
            ht = {
              ID: new RegExp("^#(" + qe + ")"),
              CLASS: new RegExp("^\\.(" + qe + ")"),
              TAG: new RegExp("^(" + qe + "|[*])"),
              ATTR: new RegExp("^" + Rn),
              PSEUDO: new RegExp("^" + Rt),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + It + ")$", "i"),
              needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i"),
            },
            Jr = /HTML$/i,
            Zr = /^(?:input|select|textarea|button)$/i,
            ei = /^h\d$/i,
            Ze = /^[^{]+\{\s*\[native \w/,
            ti = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Wt = /[+~]/,
            me = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            xe = function (s, c) {
              var d = "0x" + s.slice(1) - 65536;
              return c ? c : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (d & 1023) | 56320);
            },
            Fn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Bn = function (s, c) {
              if (c) {
                if (s === "\0") {
                  return "\uFFFD";
                }
                return s.slice(0, -1) + "\\" + s.charCodeAt(s.length - 1).toString(16) + " ";
              }
              return "\\" + s;
            },
            $n = function () {
              g();
            },
            ni = vt(
              function (s) {
                return s.disabled === true && s.nodeName.toLowerCase() === "fieldset";
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            we.apply((te = In.call(q.childNodes)), q.childNodes);
            te[q.childNodes.length].nodeType;
          } catch (s) {
            we = {
              apply: te.length
                ? function (c, d) {
                    ce.apply(c, In.call(d));
                  }
                : function (c, d) {
                    var b = c.length,
                      p = 0;
                    while ((c[b++] = d[p++])) {}
                    c.length = b - 1;
                  },
            };
          }
          function F(s, c, d, b) {
            var p,
              m,
              T,
              C,
              w,
              D,
              N,
              j = c && c.ownerDocument,
              P = c ? c.nodeType : 9;
            d = d || [];
            if (typeof s !== "string" || !s || (P !== 1 && P !== 9 && P !== 11)) {
              return d;
            }
            if (!b) {
              g(c);
              c = c || v;
              if (L) {
                if (P !== 11 && (w = ti.exec(s))) {
                  if ((p = w[1])) {
                    if (P === 9) {
                      if ((T = c.getElementById(p))) {
                        if (T.id === p) {
                          d.push(T);
                          return d;
                        }
                      } else {
                        return d;
                      }
                    } else {
                      if (j && (T = j.getElementById(p)) && ne(c, T) && T.id === p) {
                        d.push(T);
                        return d;
                      }
                    }
                  } else if (w[2]) {
                    we.apply(d, c.getElementsByTagName(s));
                    return d;
                  } else if ((p = w[3]) && n.getElementsByClassName && c.getElementsByClassName) {
                    we.apply(d, c.getElementsByClassName(p));
                    return d;
                  }
                }
                if (n.qsa && !re[s + " "] && (!E || !E.test(s)) && (P !== 1 || c.nodeName.toLowerCase() !== "object")) {
                  N = s;
                  j = c;
                  if (P === 1 && (Qr.test(s) || Wn.test(s))) {
                    j = (Wt.test(s) && Bt(c.parentNode)) || c;
                    if (j !== c || !n.scope) {
                      if ((C = c.getAttribute("id"))) {
                        C = C.replace(Fn, Bn);
                      } else {
                        c.setAttribute("id", (C = W));
                      }
                    }
                    D = a(s);
                    m = D.length;
                    while (m--) {
                      D[m] = (C ? "#" + C : ":scope") + " " + yt(D[m]);
                    }
                    N = D.join(",");
                  }
                  try {
                    we.apply(d, j.querySelectorAll(N));
                    return d;
                  } catch (B) {
                    re(s, true);
                  } finally {
                    if (C === W) {
                      c.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return f(s.replace(pt, "$1"), c, d, b);
          }
          function gt() {
            var s = [];
            function c(d, b) {
              if (s.push(d + " ") > r.cacheLength) {
                delete c[s.shift()];
              }
              return (c[d + " "] = b);
            }
            return c;
          }
          function de(s) {
            s[W] = true;
            return s;
          }
          function pe(s) {
            var c = v.createElement("fieldset");
            try {
              return !!s(c);
            } catch (d) {
              return false;
            } finally {
              if (c.parentNode) {
                c.parentNode.removeChild(c);
              }
              c = null;
            }
          }
          function Ft(s, c) {
            var d = s.split("|"),
              b = d.length;
            while (b--) {
              r.attrHandle[d[b]] = c;
            }
          }
          function zn(s, c) {
            var d = c && s,
              b = d && s.nodeType === 1 && c.nodeType === 1 && s.sourceIndex - c.sourceIndex;
            if (b) {
              return b;
            }
            if (d) {
              while ((d = d.nextSibling)) {
                if (d === c) {
                  return -1;
                }
              }
            }
            return s ? 1 : -1;
          }
          function ri(s) {
            return function (c) {
              var d = c.nodeName.toLowerCase();
              return d === "input" && c.type === s;
            };
          }
          function ii(s) {
            return function (c) {
              var d = c.nodeName.toLowerCase();
              return (d === "input" || d === "button") && c.type === s;
            };
          }
          function Un(s) {
            return function (c) {
              if ("form" in c) {
                if (c.parentNode && c.disabled === false) {
                  if ("label" in c) {
                    if ("label" in c.parentNode) {
                      return c.parentNode.disabled === s;
                    } else {
                      return c.disabled === s;
                    }
                  }
                  return c.isDisabled === s || (c.isDisabled !== !s && ni(c) === s);
                }
                return c.disabled === s;
              } else if ("label" in c) {
                return c.disabled === s;
              }
              return false;
            };
          }
          function Le(s) {
            return de(function (c) {
              c = +c;
              return de(function (d, b) {
                var p,
                  m = s([], d.length, c),
                  T = m.length;
                while (T--) {
                  if (d[(p = m[T])]) {
                    d[p] = !(b[p] = d[p]);
                  }
                }
              });
            });
          }
          function Bt(s) {
            return s && typeof s.getElementsByTagName !== "undefined" && s;
          }
          n = F.support = {};
          u = F.isXML = function (s) {
            var c = s && s.namespaceURI,
              d = s && (s.ownerDocument || s).documentElement;
            return !Jr.test(c || (d && d.nodeName) || "HTML");
          };
          g = F.setDocument = function (s) {
            var c,
              d,
              b = s ? s.ownerDocument || s : q;
            if (b == v || b.nodeType !== 9 || !b.documentElement) {
              return v;
            }
            v = b;
            S = v.documentElement;
            L = !u(v);
            if (q != v && (d = v.defaultView) && d.top !== d) {
              if (d.addEventListener) {
                d.addEventListener("unload", $n, false);
              } else if (d.attachEvent) {
                d.attachEvent("onunload", $n);
              }
            }
            n.scope = pe(function (p) {
              S.appendChild(p).appendChild(v.createElement("div"));
              return typeof p.querySelectorAll !== "undefined" && !p.querySelectorAll(":scope fieldset div").length;
            });
            n.attributes = pe(function (p) {
              p.className = "i";
              return !p.getAttribute("className");
            });
            n.getElementsByTagName = pe(function (p) {
              p.appendChild(v.createComment(""));
              return !p.getElementsByTagName("*").length;
            });
            n.getElementsByClassName = Ze.test(v.getElementsByClassName);
            n.getById = pe(function (p) {
              S.appendChild(p).id = W;
              return !v.getElementsByName || !v.getElementsByName(W).length;
            });
            if (n.getById) {
              r.filter["ID"] = function (p) {
                var m = p.replace(me, xe);
                return function (T) {
                  return T.getAttribute("id") === m;
                };
              };
              r.find["ID"] = function (p, m) {
                if (typeof m.getElementById !== "undefined" && L) {
                  var T = m.getElementById(p);
                  return T ? [T] : [];
                }
              };
            } else {
              r.filter["ID"] = function (p) {
                var m = p.replace(me, xe);
                return function (T) {
                  var C = typeof T.getAttributeNode !== "undefined" && T.getAttributeNode("id");
                  return C && C.value === m;
                };
              };
              r.find["ID"] = function (p, m) {
                if (typeof m.getElementById !== "undefined" && L) {
                  var T,
                    C,
                    w,
                    D = m.getElementById(p);
                  if (D) {
                    T = D.getAttributeNode("id");
                    if (T && T.value === p) {
                      return [D];
                    }
                    w = m.getElementsByName(p);
                    C = 0;
                    while ((D = w[C++])) {
                      T = D.getAttributeNode("id");
                      if (T && T.value === p) {
                        return [D];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            r.find["TAG"] = n.getElementsByTagName
              ? function (p, m) {
                  if (typeof m.getElementsByTagName !== "undefined") {
                    return m.getElementsByTagName(p);
                  } else if (n.qsa) {
                    return m.querySelectorAll(p);
                  }
                }
              : function (p, m) {
                  var T,
                    C = [],
                    w = 0,
                    D = m.getElementsByTagName(p);
                  if (p === "*") {
                    while ((T = D[w++])) {
                      if (T.nodeType === 1) {
                        C.push(T);
                      }
                    }
                    return C;
                  }
                  return D;
                };
            r.find["CLASS"] =
              n.getElementsByClassName &&
              function (p, m) {
                if (typeof m.getElementsByClassName !== "undefined" && L) {
                  return m.getElementsByClassName(p);
                }
              };
            X = [];
            E = [];
            if ((n.qsa = Ze.test(v.querySelectorAll))) {
              pe(function (p) {
                var m;
                S.appendChild(p).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (p.querySelectorAll("[msallowcapture^='']").length) {
                  E.push("[*^$]=" + R + `*(?:''|"")`);
                }
                if (!p.querySelectorAll("[selected]").length) {
                  E.push("\\[" + R + "*(?:value|" + It + ")");
                }
                if (!p.querySelectorAll("[id~=" + W + "-]").length) {
                  E.push("~=");
                }
                m = v.createElement("input");
                m.setAttribute("name", "");
                p.appendChild(m);
                if (!p.querySelectorAll("[name='']").length) {
                  E.push("\\[" + R + "*name" + R + "*=" + R + `*(?:''|"")`);
                }
                if (!p.querySelectorAll(":checked").length) {
                  E.push(":checked");
                }
                if (!p.querySelectorAll("a#" + W + "+*").length) {
                  E.push(".#.+[+~]");
                }
                p.querySelectorAll("\\\f");
                E.push("[\\r\\n\\f]");
              });
              pe(function (p) {
                p.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var m = v.createElement("input");
                m.setAttribute("type", "hidden");
                p.appendChild(m).setAttribute("name", "D");
                if (p.querySelectorAll("[name=d]").length) {
                  E.push("name" + R + "*[*^$|!~]?=");
                }
                if (p.querySelectorAll(":enabled").length !== 2) {
                  E.push(":enabled", ":disabled");
                }
                S.appendChild(p).disabled = true;
                if (p.querySelectorAll(":disabled").length !== 2) {
                  E.push(":enabled", ":disabled");
                }
                p.querySelectorAll("*,:x");
                E.push(",.*:");
              });
            }
            if ((n.matchesSelector = Ze.test((U = S.matches || S.webkitMatchesSelector || S.mozMatchesSelector || S.oMatchesSelector || S.msMatchesSelector)))) {
              pe(function (p) {
                n.disconnectedMatch = U.call(p, "*");
                U.call(p, "[s!='']:x");
                X.push("!=", Rt);
              });
            }
            E = E.length && new RegExp(E.join("|"));
            X = X.length && new RegExp(X.join("|"));
            c = Ze.test(S.compareDocumentPosition);
            ne =
              c || Ze.test(S.contains)
                ? function (p, m) {
                    var T = p.nodeType === 9 ? p.documentElement : p,
                      C = m && m.parentNode;
                    return p === C || !!(C && C.nodeType === 1 && (T.contains ? T.contains(C) : p.compareDocumentPosition && p.compareDocumentPosition(C) & 16));
                  }
                : function (p, m) {
                    if (m) {
                      while ((m = m.parentNode)) {
                        if (m === p) {
                          return true;
                        }
                      }
                    }
                    return false;
                  };
            De = c
              ? function (p, m) {
                  if (p === m) {
                    x = true;
                    return 0;
                  }
                  var T = !p.compareDocumentPosition - !m.compareDocumentPosition;
                  if (T) {
                    return T;
                  }
                  T = (p.ownerDocument || p) == (m.ownerDocument || m) ? p.compareDocumentPosition(m) : 1;
                  if (T & 1 || (!n.sortDetached && m.compareDocumentPosition(p) === T)) {
                    if (p == v || (p.ownerDocument == q && ne(q, p))) {
                      return -1;
                    }
                    if (m == v || (m.ownerDocument == q && ne(q, m))) {
                      return 1;
                    }
                    return y ? je(y, p) - je(y, m) : 0;
                  }
                  return T & 4 ? -1 : 1;
                }
              : function (p, m) {
                  if (p === m) {
                    x = true;
                    return 0;
                  }
                  var T,
                    C = 0,
                    w = p.parentNode,
                    D = m.parentNode,
                    N = [p],
                    j = [m];
                  if (!w || !D) {
                    return p == v ? -1 : m == v ? 1 : w ? -1 : D ? 1 : y ? je(y, p) - je(y, m) : 0;
                  } else if (w === D) {
                    return zn(p, m);
                  }
                  T = p;
                  while ((T = T.parentNode)) {
                    N.unshift(T);
                  }
                  T = m;
                  while ((T = T.parentNode)) {
                    j.unshift(T);
                  }
                  while (N[C] === j[C]) {
                    C++;
                  }
                  return C ? zn(N[C], j[C]) : N[C] == q ? -1 : j[C] == q ? 1 : 0;
                };
            return v;
          };
          F.matches = function (s, c) {
            return F(s, null, null, c);
          };
          F.matchesSelector = function (s, c) {
            g(s);
            if (n.matchesSelector && L && !re[c + " "] && (!X || !X.test(c)) && (!E || !E.test(c))) {
              try {
                var d = U.call(s, c);
                if (d || n.disconnectedMatch || (s.document && s.document.nodeType !== 11)) {
                  return d;
                }
              } catch (b) {
                re(c, true);
              }
            }
            return F(c, v, null, [s]).length > 0;
          };
          F.contains = function (s, c) {
            if ((s.ownerDocument || s) != v) {
              g(s);
            }
            return ne(s, c);
          };
          F.attr = function (s, c) {
            if ((s.ownerDocument || s) != v) {
              g(s);
            }
            var d = r.attrHandle[c.toLowerCase()],
              b = d && ke.call(r.attrHandle, c.toLowerCase()) ? d(s, c, !L) : void 0;
            return b !== void 0 ? b : n.attributes || !L ? s.getAttribute(c) : (b = s.getAttributeNode(c)) && b.specified ? b.value : null;
          };
          F.escape = function (s) {
            return (s + "").replace(Fn, Bn);
          };
          F.error = function (s) {
            throw new Error("Syntax error, unrecognized expression: " + s);
          };
          F.uniqueSort = function (s) {
            var c,
              d = [],
              b = 0,
              p = 0;
            x = !n.detectDuplicates;
            y = !n.sortStable && s.slice(0);
            s.sort(De);
            if (x) {
              while ((c = s[p++])) {
                if (c === s[p]) {
                  b = d.push(p);
                }
              }
              while (b--) {
                s.splice(d[b], 1);
              }
            }
            y = null;
            return s;
          };
          o = F.getText = function (s) {
            var c,
              d = "",
              b = 0,
              p = s.nodeType;
            if (!p) {
              while ((c = s[b++])) {
                d += o(c);
              }
            } else if (p === 1 || p === 9 || p === 11) {
              if (typeof s.textContent === "string") {
                return s.textContent;
              } else {
                for (s = s.firstChild; s; s = s.nextSibling) {
                  d += o(s);
                }
              }
            } else if (p === 3 || p === 4) {
              return s.nodeValue;
            }
            return d;
          };
          r = F.selectors = {
            cacheLength: 50,
            createPseudo: de,
            match: ht,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } },
            preFilter: {
              ATTR: function (s) {
                s[1] = s[1].replace(me, xe);
                s[3] = (s[3] || s[4] || s[5] || "").replace(me, xe);
                if (s[2] === "~=") {
                  s[3] = " " + s[3] + " ";
                }
                return s.slice(0, 4);
              },
              CHILD: function (s) {
                s[1] = s[1].toLowerCase();
                if (s[1].slice(0, 3) === "nth") {
                  if (!s[3]) {
                    F.error(s[0]);
                  }
                  s[4] = +(s[4] ? s[5] + (s[6] || 1) : 2 * (s[3] === "even" || s[3] === "odd"));
                  s[5] = +(s[7] + s[8] || s[3] === "odd");
                } else if (s[3]) {
                  F.error(s[0]);
                }
                return s;
              },
              PSEUDO: function (s) {
                var c,
                  d = !s[6] && s[2];
                if (ht["CHILD"].test(s[0])) {
                  return null;
                }
                if (s[3]) {
                  s[2] = s[4] || s[5] || "";
                } else if (d && Yr.test(d) && (c = a(d, true)) && (c = d.indexOf(")", d.length - c) - d.length)) {
                  s[0] = s[0].slice(0, c);
                  s[2] = d.slice(0, c);
                }
                return s.slice(0, 3);
              },
            },
            filter: {
              TAG: function (s) {
                var c = s.replace(me, xe).toLowerCase();
                return s === "*"
                  ? function () {
                      return true;
                    }
                  : function (d) {
                      return d.nodeName && d.nodeName.toLowerCase() === c;
                    };
              },
              CLASS: function (s) {
                var c = z[s + " "];
                return (
                  c ||
                  ((c = new RegExp("(^|" + R + ")" + s + "(" + R + "|$)")) &&
                    z(s, function (d) {
                      return c.test((typeof d.className === "string" && d.className) || (typeof d.getAttribute !== "undefined" && d.getAttribute("class")) || "");
                    }))
                );
              },
              ATTR: function (s, c, d) {
                return function (b) {
                  var p = F.attr(b, s);
                  if (p == null) {
                    return c === "!=";
                  }
                  if (!c) {
                    return true;
                  }
                  p += "";
                  return c === "="
                    ? p === d
                    : c === "!="
                    ? p !== d
                    : c === "^="
                    ? d && p.indexOf(d) === 0
                    : c === "*="
                    ? d && p.indexOf(d) > -1
                    : c === "$="
                    ? d && p.slice(-d.length) === d
                    : c === "~="
                    ? (" " + p.replace(Xr, " ") + " ").indexOf(d) > -1
                    : c === "|="
                    ? p === d || p.slice(0, d.length + 1) === d + "-"
                    : false;
                };
              },
              CHILD: function (s, c, d, b, p) {
                var m = s.slice(0, 3) !== "nth",
                  T = s.slice(-4) !== "last",
                  C = c === "of-type";
                return b === 1 && p === 0
                  ? function (w) {
                      return !!w.parentNode;
                    }
                  : function (w, D, N) {
                      var j,
                        P,
                        B,
                        k,
                        G,
                        Q,
                        ie = m !== T ? "nextSibling" : "previousSibling",
                        $ = w.parentNode,
                        et = C && w.nodeName.toLowerCase(),
                        tt = !N && !C,
                        oe = false;
                      if ($) {
                        if (m) {
                          while (ie) {
                            k = w;
                            while ((k = k[ie])) {
                              if (C ? k.nodeName.toLowerCase() === et : k.nodeType === 1) {
                                return false;
                              }
                            }
                            Q = ie = s === "only" && !Q && "nextSibling";
                          }
                          return true;
                        }
                        Q = [T ? $.firstChild : $.lastChild];
                        if (T && tt) {
                          k = $;
                          B = k[W] || (k[W] = {});
                          P = B[k.uniqueID] || (B[k.uniqueID] = {});
                          j = P[s] || [];
                          G = j[0] === ee && j[1];
                          oe = G && j[2];
                          k = G && $.childNodes[G];
                          while ((k = (++G && k && k[ie]) || (oe = G = 0) || Q.pop())) {
                            if (k.nodeType === 1 && ++oe && k === w) {
                              P[s] = [ee, G, oe];
                              break;
                            }
                          }
                        } else {
                          if (tt) {
                            k = w;
                            B = k[W] || (k[W] = {});
                            P = B[k.uniqueID] || (B[k.uniqueID] = {});
                            j = P[s] || [];
                            G = j[0] === ee && j[1];
                            oe = G;
                          }
                          if (oe === false) {
                            while ((k = (++G && k && k[ie]) || (oe = G = 0) || Q.pop())) {
                              if ((C ? k.nodeName.toLowerCase() === et : k.nodeType === 1) && ++oe) {
                                if (tt) {
                                  B = k[W] || (k[W] = {});
                                  P = B[k.uniqueID] || (B[k.uniqueID] = {});
                                  P[s] = [ee, oe];
                                }
                                if (k === w) {
                                  break;
                                }
                              }
                            }
                          }
                        }
                        oe -= p;
                        return oe === b || (oe % b === 0 && oe / b >= 0);
                      }
                    };
              },
              PSEUDO: function (s, c) {
                var d,
                  b = r.pseudos[s] || r.setFilters[s.toLowerCase()] || F.error("unsupported pseudo: " + s);
                if (b[W]) {
                  return b(c);
                }
                if (b.length > 1) {
                  d = [s, s, "", c];
                  return r.setFilters.hasOwnProperty(s.toLowerCase())
                    ? de(function (p, m) {
                        var T,
                          C = b(p, c),
                          w = C.length;
                        while (w--) {
                          T = je(p, C[w]);
                          p[T] = !(m[T] = C[w]);
                        }
                      })
                    : function (p) {
                        return b(p, 0, d);
                      };
                }
                return b;
              },
            },
            pseudos: {
              not: de(function (s) {
                var c = [],
                  d = [],
                  b = l(s.replace(pt, "$1"));
                return b[W]
                  ? de(function (p, m, T, C) {
                      var w,
                        D = b(p, null, C, []),
                        N = p.length;
                      while (N--) {
                        if ((w = D[N])) {
                          p[N] = !(m[N] = w);
                        }
                      }
                    })
                  : function (p, m, T) {
                      c[0] = p;
                      b(c, null, T, d);
                      c[0] = null;
                      return !d.pop();
                    };
              }),
              has: de(function (s) {
                return function (c) {
                  return F(s, c).length > 0;
                };
              }),
              contains: de(function (s) {
                s = s.replace(me, xe);
                return function (c) {
                  return (c.textContent || o(c)).indexOf(s) > -1;
                };
              }),
              lang: de(function (s) {
                if (!Kr.test(s || "")) {
                  F.error("unsupported lang: " + s);
                }
                s = s.replace(me, xe).toLowerCase();
                return function (c) {
                  var d;
                  do {
                    if ((d = L ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang"))) {
                      d = d.toLowerCase();
                      return d === s || d.indexOf(s + "-") === 0;
                    }
                  } while ((c = c.parentNode) && c.nodeType === 1);
                  return false;
                };
              }),
              target: function (s) {
                var c = e.location && e.location.hash;
                return c && c.slice(1) === s.id;
              },
              root: function (s) {
                return s === S;
              },
              focus: function (s) {
                return s === v.activeElement && (!v.hasFocus || v.hasFocus()) && !!(s.type || s.href || ~s.tabIndex);
              },
              enabled: Un(false),
              disabled: Un(true),
              checked: function (s) {
                var c = s.nodeName.toLowerCase();
                return (c === "input" && !!s.checked) || (c === "option" && !!s.selected);
              },
              selected: function (s) {
                if (s.parentNode) {
                  s.parentNode.selectedIndex;
                }
                return s.selected === true;
              },
              empty: function (s) {
                for (s = s.firstChild; s; s = s.nextSibling) {
                  if (s.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function (s) {
                return !r.pseudos["empty"](s);
              },
              header: function (s) {
                return ei.test(s.nodeName);
              },
              input: function (s) {
                return Zr.test(s.nodeName);
              },
              button: function (s) {
                var c = s.nodeName.toLowerCase();
                return (c === "input" && s.type === "button") || c === "button";
              },
              text: function (s) {
                var c;
                return s.nodeName.toLowerCase() === "input" && s.type === "text" && ((c = s.getAttribute("type")) == null || c.toLowerCase() === "text");
              },
              first: Le(function () {
                return [0];
              }),
              last: Le(function (s, c) {
                return [c - 1];
              }),
              eq: Le(function (s, c, d) {
                return [d < 0 ? d + c : d];
              }),
              even: Le(function (s, c) {
                var d = 0;
                for (; d < c; d += 2) {
                  s.push(d);
                }
                return s;
              }),
              odd: Le(function (s, c) {
                var d = 1;
                for (; d < c; d += 2) {
                  s.push(d);
                }
                return s;
              }),
              lt: Le(function (s, c, d) {
                var b = d < 0 ? d + c : d > c ? c : d;
                for (; --b >= 0; ) {
                  s.push(b);
                }
                return s;
              }),
              gt: Le(function (s, c, d) {
                var b = d < 0 ? d + c : d;
                for (; ++b < c; ) {
                  s.push(b);
                }
                return s;
              }),
            },
          };
          r.pseudos["nth"] = r.pseudos["eq"];
          for (t in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            r.pseudos[t] = ri(t);
          }
          for (t in { submit: true, reset: true }) {
            r.pseudos[t] = ii(t);
          }
          function Vn() {}
          Vn.prototype = r.filters = r.pseudos;
          r.setFilters = new Vn();
          a = F.tokenize = function (s, c) {
            var d,
              b,
              p,
              m,
              T,
              C,
              w,
              D = Je[s + " "];
            if (D) {
              return c ? 0 : D.slice(0);
            }
            T = s;
            C = [];
            w = r.preFilter;
            while (T) {
              if (!d || (b = Gr.exec(T))) {
                if (b) {
                  T = T.slice(b[0].length) || T;
                }
                C.push((p = []));
              }
              d = false;
              if ((b = Wn.exec(T))) {
                d = b.shift();
                p.push({ value: d, type: b[0].replace(pt, " ") });
                T = T.slice(d.length);
              }
              for (m in r.filter) {
                if ((b = ht[m].exec(T)) && (!w[m] || (b = w[m](b)))) {
                  d = b.shift();
                  p.push({ value: d, type: m, matches: b });
                  T = T.slice(d.length);
                }
              }
              if (!d) {
                break;
              }
            }
            return c ? T.length : T ? F.error(s) : Je(s, C).slice(0);
          };
          function yt(s) {
            var c = 0,
              d = s.length,
              b = "";
            for (; c < d; c++) {
              b += s[c].value;
            }
            return b;
          }
          function vt(s, c, d) {
            var b = c.dir,
              p = c.next,
              m = p || b,
              T = d && m === "parentNode",
              C = M++;
            return c.first
              ? function (w, D, N) {
                  while ((w = w[b])) {
                    if (w.nodeType === 1 || T) {
                      return s(w, D, N);
                    }
                  }
                  return false;
                }
              : function (w, D, N) {
                  var j,
                    P,
                    B,
                    k = [ee, C];
                  if (N) {
                    while ((w = w[b])) {
                      if (w.nodeType === 1 || T) {
                        if (s(w, D, N)) {
                          return true;
                        }
                      }
                    }
                  } else {
                    while ((w = w[b])) {
                      if (w.nodeType === 1 || T) {
                        B = w[W] || (w[W] = {});
                        P = B[w.uniqueID] || (B[w.uniqueID] = {});
                        if (p && p === w.nodeName.toLowerCase()) {
                          w = w[b] || w;
                        } else if ((j = P[m]) && j[0] === ee && j[1] === C) {
                          return (k[2] = j[2]);
                        } else {
                          P[m] = k;
                          if ((k[2] = s(w, D, N))) {
                            return true;
                          }
                        }
                      }
                    }
                  }
                  return false;
                };
          }
          function $t(s) {
            return s.length > 1
              ? function (c, d, b) {
                  var p = s.length;
                  while (p--) {
                    if (!s[p](c, d, b)) {
                      return false;
                    }
                  }
                  return true;
                }
              : s[0];
          }
          function oi(s, c, d) {
            var b = 0,
              p = c.length;
            for (; b < p; b++) {
              F(s, c[b], d);
            }
            return d;
          }
          function bt(s, c, d, b, p) {
            var m,
              T = [],
              C = 0,
              w = s.length,
              D = c != null;
            for (; C < w; C++) {
              if ((m = s[C])) {
                if (!d || d(m, b, p)) {
                  T.push(m);
                  if (D) {
                    c.push(C);
                  }
                }
              }
            }
            return T;
          }
          function zt(s, c, d, b, p, m) {
            if (b && !b[W]) {
              b = zt(b);
            }
            if (p && !p[W]) {
              p = zt(p, m);
            }
            return de(function (T, C, w, D) {
              var N,
                j,
                P,
                B = [],
                k = [],
                G = C.length,
                Q = T || oi(c || "*", w.nodeType ? [w] : w, []),
                ie = s && (T || !c) ? bt(Q, B, s, w, D) : Q,
                $ = d ? (p || (T ? s : G || b) ? [] : C) : ie;
              if (d) {
                d(ie, $, w, D);
              }
              if (b) {
                N = bt($, k);
                b(N, [], w, D);
                j = N.length;
                while (j--) {
                  if ((P = N[j])) {
                    $[k[j]] = !(ie[k[j]] = P);
                  }
                }
              }
              if (T) {
                if (p || s) {
                  if (p) {
                    N = [];
                    j = $.length;
                    while (j--) {
                      if ((P = $[j])) {
                        N.push((ie[j] = P));
                      }
                    }
                    p(null, ($ = []), N, D);
                  }
                  j = $.length;
                  while (j--) {
                    if ((P = $[j]) && (N = p ? je(T, P) : B[j]) > -1) {
                      T[N] = !(C[N] = P);
                    }
                  }
                }
              } else {
                $ = bt($ === C ? $.splice(G, $.length) : $);
                if (p) {
                  p(null, C, $, D);
                } else {
                  we.apply(C, $);
                }
              }
            });
          }
          function Ut(s) {
            var c,
              d,
              b,
              p = s.length,
              m = r.relative[s[0].type],
              T = m || r.relative[" "],
              C = m ? 1 : 0,
              w = vt(
                function (j) {
                  return j === c;
                },
                T,
                true
              ),
              D = vt(
                function (j) {
                  return je(c, j) > -1;
                },
                T,
                true
              ),
              N = [
                function (j, P, B) {
                  var k = (!m && (B || P !== h)) || ((c = P).nodeType ? w(j, P, B) : D(j, P, B));
                  c = null;
                  return k;
                },
              ];
            for (; C < p; C++) {
              if ((d = r.relative[s[C].type])) {
                N = [vt($t(N), d)];
              } else {
                d = r.filter[s[C].type].apply(null, s[C].matches);
                if (d[W]) {
                  b = ++C;
                  for (; b < p; b++) {
                    if (r.relative[s[b].type]) {
                      break;
                    }
                  }
                  return zt(
                    C > 1 && $t(N),
                    C > 1 && yt(s.slice(0, C - 1).concat({ value: s[C - 2].type === " " ? "*" : "" })).replace(pt, "$1"),
                    d,
                    C < b && Ut(s.slice(C, b)),
                    b < p && Ut((s = s.slice(b))),
                    b < p && yt(s)
                  );
                }
                N.push(d);
              }
            }
            return $t(N);
          }
          function ui(s, c) {
            var d = c.length > 0,
              b = s.length > 0,
              p = function (m, T, C, w, D) {
                var N,
                  j,
                  P,
                  B = 0,
                  k = "0",
                  G = m && [],
                  Q = [],
                  ie = h,
                  $ = m || (b && r.find["TAG"]("*", D)),
                  et = (ee += ie == null ? 1 : Math.random() || 0.1),
                  tt = $.length;
                if (D) {
                  h = T == v || T || D;
                }
                for (; k !== tt && (N = $[k]) != null; k++) {
                  if (b && N) {
                    j = 0;
                    if (!T && N.ownerDocument != v) {
                      g(N);
                      C = !L;
                    }
                    while ((P = s[j++])) {
                      if (P(N, T || v, C)) {
                        w.push(N);
                        break;
                      }
                    }
                    if (D) {
                      ee = et;
                    }
                  }
                  if (d) {
                    if ((N = !P && N)) {
                      B--;
                    }
                    if (m) {
                      G.push(N);
                    }
                  }
                }
                B += k;
                if (d && k !== B) {
                  j = 0;
                  while ((P = c[j++])) {
                    P(G, Q, T, C);
                  }
                  if (m) {
                    if (B > 0) {
                      while (k--) {
                        if (!(G[k] || Q[k])) {
                          Q[k] = Ce.call(w);
                        }
                      }
                    }
                    Q = bt(Q);
                  }
                  we.apply(w, Q);
                  if (D && !m && Q.length > 0 && B + c.length > 1) {
                    F.uniqueSort(w);
                  }
                }
                if (D) {
                  ee = et;
                  h = ie;
                }
                return G;
              };
            return d ? de(p) : p;
          }
          l = F.compile = function (s, c) {
            var d,
              b = [],
              p = [],
              m = dt[s + " "];
            if (!m) {
              if (!c) {
                c = a(s);
              }
              d = c.length;
              while (d--) {
                m = Ut(c[d]);
                if (m[W]) {
                  b.push(m);
                } else {
                  p.push(m);
                }
              }
              m = dt(s, ui(p, b));
              m.selector = s;
            }
            return m;
          };
          f = F.select = function (s, c, d, b) {
            var p,
              m,
              T,
              C,
              w,
              D = typeof s === "function" && s,
              N = !b && a((s = D.selector || s));
            d = d || [];
            if (N.length === 1) {
              m = N[0] = N[0].slice(0);
              if (m.length > 2 && (T = m[0]).type === "ID" && c.nodeType === 9 && L && r.relative[m[1].type]) {
                c = (r.find["ID"](T.matches[0].replace(me, xe), c) || [])[0];
                if (!c) {
                  return d;
                } else if (D) {
                  c = c.parentNode;
                }
                s = s.slice(m.shift().value.length);
              }
              p = ht["needsContext"].test(s) ? 0 : m.length;
              while (p--) {
                T = m[p];
                if (r.relative[(C = T.type)]) {
                  break;
                }
                if ((w = r.find[C])) {
                  if ((b = w(T.matches[0].replace(me, xe), (Wt.test(m[0].type) && Bt(c.parentNode)) || c))) {
                    m.splice(p, 1);
                    s = b.length && yt(m);
                    if (!s) {
                      we.apply(d, b);
                      return d;
                    }
                    break;
                  }
                }
              }
            }
            (D || l(s, N))(b, c, !L, d, !c || (Wt.test(s) && Bt(c.parentNode)) || c);
            return d;
          };
          n.sortStable = W.split("").sort(De).join("") === W;
          n.detectDuplicates = !!x;
          g();
          n.sortDetached = pe(function (s) {
            return s.compareDocumentPosition(v.createElement("fieldset")) & 1;
          });
          if (
            !pe(function (s) {
              s.innerHTML = "<a href='#'></a>";
              return s.firstChild.getAttribute("href") === "#";
            })
          ) {
            Ft("type|href|height|width", function (s, c, d) {
              if (!d) {
                return s.getAttribute(c, c.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (
            !n.attributes ||
            !pe(function (s) {
              s.innerHTML = "<input/>";
              s.firstChild.setAttribute("value", "");
              return s.firstChild.getAttribute("value") === "";
            })
          ) {
            Ft("value", function (s, c, d) {
              if (!d && s.nodeName.toLowerCase() === "input") {
                return s.defaultValue;
              }
            });
          }
          if (
            !pe(function (s) {
              return s.getAttribute("disabled") == null;
            })
          ) {
            Ft(It, function (s, c, d) {
              var b;
              if (!d) {
                return s[c] === true ? c.toLowerCase() : (b = s.getAttributeNode(c)) && b.specified ? b.value : null;
              }
            });
          }
          return F;
        })(_);
        i.find = Se;
        i.expr = Se.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.uniqueSort = i.unique = Se.uniqueSort;
        i.text = Se.getText;
        i.isXMLDoc = Se.isXML;
        i.contains = Se.contains;
        i.escapeSelector = Se.escape;
        var Pe = function (e, t, n) {
          var r = [],
            o = n !== void 0;
          while ((e = e[t]) && e.nodeType !== 9) {
            if (e.nodeType === 1) {
              if (o && i(e).is(n)) {
                break;
              }
              r.push(e);
            }
          }
          return r;
        };
        var Zt = function (e, t) {
          var n = [];
          for (; e; e = e.nextSibling) {
            if (e.nodeType === 1 && e !== t) {
              n.push(e);
            }
          }
          return n;
        };
        var en = i.expr.match.needsContext;
        function se(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var tn = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function Ct(e, t, n) {
          if (O(t)) {
            return i.grep(e, function (r, o) {
              return !!t.call(r, o, r) !== n;
            });
          }
          if (t.nodeType) {
            return i.grep(e, function (r) {
              return (r === t) !== n;
            });
          }
          if (typeof t !== "string") {
            return i.grep(e, function (r) {
              return nt.call(t, r) > -1 !== n;
            });
          }
          return i.filter(t, e, n);
        }
        i.filter = function (e, t, n) {
          var r = t[0];
          if (n) {
            e = ":not(" + e + ")";
          }
          if (t.length === 1 && r.nodeType === 1) {
            return i.find.matchesSelector(r, e) ? [r] : [];
          }
          return i.find.matches(
            e,
            i.grep(t, function (o) {
              return o.nodeType === 1;
            })
          );
        };
        i.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              o = this;
            if (typeof e !== "string") {
              return this.pushStack(
                i(e).filter(function () {
                  for (t = 0; t < r; t++) {
                    if (i.contains(o[t], this)) {
                      return true;
                    }
                  }
                })
              );
            }
            n = this.pushStack([]);
            for (t = 0; t < r; t++) {
              i.find(e, o[t], n);
            }
            return r > 1 ? i.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(Ct(this, e || [], false));
          },
          not: function (e) {
            return this.pushStack(Ct(this, e || [], true));
          },
          is: function (e) {
            return !!Ct(this, typeof e === "string" && en.test(e) ? i(e) : e || [], false).length;
          },
        });
        var nn,
          Yn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
          Kn = (i.fn.init = function (e, t, n) {
            var r, o;
            if (!e) {
              return this;
            }
            n = n || nn;
            if (typeof e === "string") {
              if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                r = [null, e, null];
              } else {
                r = Yn.exec(e);
              }
              if (r && (r[1] || !t)) {
                if (r[1]) {
                  t = t instanceof i ? t[0] : t;
                  i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : H, true));
                  if (tn.test(r[1]) && i.isPlainObject(t)) {
                    for (r in t) {
                      if (O(this[r])) {
                        this[r](t[r]);
                      } else {
                        this.attr(r, t[r]);
                      }
                    }
                  }
                  return this;
                } else {
                  o = H.getElementById(r[2]);
                  if (o) {
                    this[0] = o;
                    this.length = 1;
                  }
                  return this;
                }
              } else if (!t || t.jquery) {
                return (t || n).find(e);
              } else {
                return this.constructor(t).find(e);
              }
            } else if (e.nodeType) {
              this[0] = e;
              this.length = 1;
              return this;
            } else if (O(e)) {
              return n.ready !== void 0 ? n.ready(e) : e(i);
            }
            return i.makeArray(e, this);
          });
        Kn.prototype = i.fn;
        nn = i(H);
        var Jn = /^(?:parents|prev(?:Until|All))/,
          Zn = { children: true, contents: true, next: true, prev: true };
        i.fn.extend({
          has: function (e) {
            var t = i(e, this),
              n = t.length;
            return this.filter(function () {
              var r = 0;
              for (; r < n; r++) {
                if (i.contains(this, t[r])) {
                  return true;
                }
              }
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              o = this.length,
              u = [],
              a = typeof e !== "string" && i(e);
            if (!en.test(e)) {
              for (; r < o; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                  if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && i.find.matchesSelector(n, e))) {
                    u.push(n);
                    break;
                  }
                }
              }
            }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
          },
          index: function (e) {
            if (!e) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof e === "string") {
              return nt.call(i(e), this[0]);
            }
            return nt.call(this, e.jquery ? e[0] : e);
          },
          add: function (e, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))));
          },
          addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
          },
        });
        function rn(e, t) {
          while ((e = e[t]) && e.nodeType !== 1) {}
          return e;
        }
        i.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && t.nodeType !== 11 ? t : null;
            },
            parents: function (e) {
              return Pe(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return Pe(e, "parentNode", n);
            },
            next: function (e) {
              return rn(e, "nextSibling");
            },
            prev: function (e) {
              return rn(e, "previousSibling");
            },
            nextAll: function (e) {
              return Pe(e, "nextSibling");
            },
            prevAll: function (e) {
              return Pe(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return Pe(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return Pe(e, "previousSibling", n);
            },
            siblings: function (e) {
              return Zt((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return Zt(e.firstChild);
            },
            contents: function (e) {
              if (e.contentDocument != null && Xt(e.contentDocument)) {
                return e.contentDocument;
              }
              if (se(e, "template")) {
                e = e.content || e;
              }
              return i.merge([], e.childNodes);
            },
          },
          function (e, t) {
            i.fn[e] = function (n, r) {
              var o = i.map(this, t, n);
              if (e.slice(-5) !== "Until") {
                r = n;
              }
              if (r && typeof r === "string") {
                o = i.filter(r, o);
              }
              if (this.length > 1) {
                if (!Zn[e]) {
                  i.uniqueSort(o);
                }
                if (Jn.test(e)) {
                  o.reverse();
                }
              }
              return this.pushStack(o);
            };
          }
        );
        var he = /[^\x20\t\r\n\f]+/g;
        function er(e) {
          var t = {};
          i.each(e.match(he) || [], function (n, r) {
            t[r] = true;
          });
          return t;
        }
        i.Callbacks = function (e) {
          e = typeof e === "string" ? er(e) : i.extend({}, e);
          var t,
            n,
            r,
            o,
            u = [],
            a = [],
            l = -1,
            f = function () {
              o = o || e.once;
              r = t = true;
              for (; a.length; l = -1) {
                n = a.shift();
                while (++l < u.length) {
                  if (u[l].apply(n[0], n[1]) === false && e.stopOnFalse) {
                    l = u.length;
                    n = false;
                  }
                }
              }
              if (!e.memory) {
                n = false;
              }
              t = false;
              if (o) {
                if (n) {
                  u = [];
                } else {
                  u = "";
                }
              }
            },
            h = {
              add: function () {
                if (u) {
                  if (n && !t) {
                    l = u.length - 1;
                    a.push(n);
                  }
                  (function y(x) {
                    i.each(x, function (g, v) {
                      if (O(v)) {
                        if (!e.unique || !h.has(v)) {
                          u.push(v);
                        }
                      } else if (v && v.length && Oe(v) !== "string") {
                        y(v);
                      }
                    });
                  })(arguments);
                  if (n && !t) {
                    f();
                  }
                }
                return this;
              },
              remove: function () {
                i.each(arguments, function (y, x) {
                  var g;
                  while ((g = i.inArray(x, u, g)) > -1) {
                    u.splice(g, 1);
                    if (g <= l) {
                      l--;
                    }
                  }
                });
                return this;
              },
              has: function (y) {
                return y ? i.inArray(y, u) > -1 : u.length > 0;
              },
              empty: function () {
                if (u) {
                  u = [];
                }
                return this;
              },
              disable: function () {
                o = a = [];
                u = n = "";
                return this;
              },
              disabled: function () {
                return !u;
              },
              lock: function () {
                o = a = [];
                if (!n && !t) {
                  u = n = "";
                }
                return this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (y, x) {
                if (!o) {
                  x = x || [];
                  x = [y, x.slice ? x.slice() : x];
                  a.push(x);
                  if (!t) {
                    f();
                  }
                }
                return this;
              },
              fire: function () {
                h.fireWith(this, arguments);
                return this;
              },
              fired: function () {
                return !!r;
              },
            };
          return h;
        };
        function He(e) {
          return e;
        }
        function ot(e) {
          throw e;
        }
        function on(e, t, n, r) {
          var o;
          try {
            if (e && O((o = e.promise))) {
              o.call(e).done(t).fail(n);
            } else if (e && O((o = e.then))) {
              o.call(e, t, n);
            } else {
              t.apply(void 0, [e].slice(r));
            }
          } catch (u) {
            n.apply(void 0, [u]);
          }
        }
        i.extend({
          Deferred: function (e) {
            var t = [
                ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"],
              ],
              n = "pending",
              r = {
                state: function () {
                  return n;
                },
                always: function () {
                  o.done(arguments).fail(arguments);
                  return this;
                },
                catch: function (u) {
                  return r.then(null, u);
                },
                pipe: function () {
                  var u = arguments;
                  return i
                    .Deferred(function (a) {
                      i.each(t, function (l, f) {
                        var h = O(u[f[4]]) && u[f[4]];
                        o[f[1]](function () {
                          var y = h && h.apply(this, arguments);
                          if (y && O(y.promise)) {
                            y.promise().progress(a.notify).done(a.resolve).fail(a.reject);
                          } else {
                            a[f[0] + "With"](this, h ? [y] : arguments);
                          }
                        });
                      });
                      u = null;
                    })
                    .promise();
                },
                then: function (u, a, l) {
                  var f = 0;
                  function h(y, x, g, v) {
                    return function () {
                      var S = this,
                        L = arguments,
                        E = function () {
                          var U, ne;
                          if (y < f) {
                            return;
                          }
                          U = g.apply(S, L);
                          if (U === x.promise()) {
                            throw new TypeError("Thenable self-resolution");
                          }
                          ne = U && (typeof U === "object" || typeof U === "function") && U.then;
                          if (O(ne)) {
                            if (v) {
                              ne.call(U, h(f, x, He, v), h(f, x, ot, v));
                            } else {
                              f++;
                              ne.call(U, h(f, x, He, v), h(f, x, ot, v), h(f, x, He, x.notifyWith));
                            }
                          } else {
                            if (g !== He) {
                              S = void 0;
                              L = [U];
                            }
                            (v || x.resolveWith)(S, L);
                          }
                        },
                        X = v
                          ? E
                          : function () {
                              try {
                                E();
                              } catch (U) {
                                if (i.Deferred.exceptionHook) {
                                  i.Deferred.exceptionHook(U, X.stackTrace);
                                }
                                if (y + 1 >= f) {
                                  if (g !== ot) {
                                    S = void 0;
                                    L = [U];
                                  }
                                  x.rejectWith(S, L);
                                }
                              }
                            };
                      if (y) {
                        X();
                      } else {
                        if (i.Deferred.getStackHook) {
                          X.stackTrace = i.Deferred.getStackHook();
                        }
                        _.setTimeout(X);
                      }
                    };
                  }
                  return i
                    .Deferred(function (y) {
                      t[0][3].add(h(0, y, O(l) ? l : He, y.notifyWith));
                      t[1][3].add(h(0, y, O(u) ? u : He));
                      t[2][3].add(h(0, y, O(a) ? a : ot));
                    })
                    .promise();
                },
                promise: function (u) {
                  return u != null ? i.extend(u, r) : r;
                },
              },
              o = {};
            i.each(t, function (u, a) {
              var l = a[2],
                f = a[5];
              r[a[1]] = l.add;
              if (f) {
                l.add(
                  function () {
                    n = f;
                  },
                  t[3 - u][2].disable,
                  t[3 - u][3].disable,
                  t[0][2].lock,
                  t[0][3].lock
                );
              }
              l.add(a[3].fire);
              o[a[0]] = function () {
                o[a[0] + "With"](this === o ? void 0 : this, arguments);
                return this;
              };
              o[a[0] + "With"] = l.fireWith;
            });
            r.promise(o);
            if (e) {
              e.call(o, o);
            }
            return o;
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              o = Te.call(arguments),
              u = i.Deferred(),
              a = function (l) {
                return function (f) {
                  r[l] = this;
                  o[l] = arguments.length > 1 ? Te.call(arguments) : f;
                  if (!--t) {
                    u.resolveWith(r, o);
                  }
                };
              };
            if (t <= 1) {
              on(e, u.done(a(n)).resolve, u.reject, !t);
              if (u.state() === "pending" || O(o[n] && o[n].then)) {
                return u.then();
              }
            }
            while (n--) {
              on(o[n], a(n), u.reject);
            }
            return u.promise();
          },
        });
        var tr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        i.Deferred.exceptionHook = function (e, t) {
          if (_.console && _.console.warn && e && tr.test(e.name)) {
            _.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }
        };
        i.readyException = function (e) {
          _.setTimeout(function () {
            throw e;
          });
        };
        var wt = i.Deferred();
        i.fn.ready = function (e) {
          wt.then(e).catch(function (t) {
            i.readyException(t);
          });
          return this;
        };
        i.extend({
          isReady: false,
          readyWait: 1,
          ready: function (e) {
            if (e === true ? --i.readyWait : i.isReady) {
              return;
            }
            i.isReady = true;
            if (e !== true && --i.readyWait > 0) {
              return;
            }
            wt.resolveWith(H, [i]);
          },
        });
        i.ready.then = wt.then;
        function ut() {
          H.removeEventListener("DOMContentLoaded", ut);
          _.removeEventListener("load", ut);
          i.ready();
        }
        if (H.readyState === "complete" || (H.readyState !== "loading" && !H.documentElement.doScroll)) {
          _.setTimeout(i.ready);
        } else {
          H.addEventListener("DOMContentLoaded", ut);
          _.addEventListener("load", ut);
        }
        var ve = function (e, t, n, r, o, u, a) {
          var l = 0,
            f = e.length,
            h = n == null;
          if (Oe(n) === "object") {
            o = true;
            for (l in n) {
              ve(e, t, l, n[l], true, u, a);
            }
          } else if (r !== void 0) {
            o = true;
            if (!O(r)) {
              a = true;
            }
            if (h) {
              if (a) {
                t.call(e, r);
                t = null;
              } else {
                h = t;
                t = function (y, x, g) {
                  return h.call(i(y), g);
                };
              }
            }
            if (t) {
              for (; l < f; l++) {
                t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
              }
            }
          }
          if (o) {
            return e;
          }
          if (h) {
            return t.call(e);
          }
          return f ? t(e[0], n) : u;
        };
        var nr = /^-ms-/,
          rr = /-([a-z])/g;
        function ir(e, t) {
          return t.toUpperCase();
        }
        function ge(e) {
          return e.replace(nr, "ms-").replace(rr, ir);
        }
        var ze = function (e) {
          return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
        };
        function Ue() {
          this.expando = i.expando + Ue.uid++;
        }
        Ue.uid = 1;
        Ue.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            if (!t) {
              t = {};
              if (ze(e)) {
                if (e.nodeType) {
                  e[this.expando] = t;
                } else {
                  Object.defineProperty(e, this.expando, { value: t, configurable: true });
                }
              }
            }
            return t;
          },
          set: function (e, t, n) {
            var r,
              o = this.cache(e);
            if (typeof t === "string") {
              o[ge(t)] = n;
            } else {
              for (r in t) {
                o[ge(r)] = t[r];
              }
            }
            return o;
          },
          get: function (e, t) {
            return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][ge(t)];
          },
          access: function (e, t, n) {
            if (t === void 0 || (t && typeof t === "string" && n === void 0)) {
              return this.get(e, t);
            }
            this.set(e, t, n);
            return n !== void 0 ? n : t;
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (r === void 0) {
              return;
            }
            if (t !== void 0) {
              if (Array.isArray(t)) {
                t = t.map(ge);
              } else {
                t = ge(t);
                t = t in r ? [t] : t.match(he) || [];
              }
              n = t.length;
              while (n--) {
                delete r[t[n]];
              }
            }
            if (t === void 0 || i.isEmptyObject(r)) {
              if (e.nodeType) {
                e[this.expando] = void 0;
              } else {
                delete e[this.expando];
              }
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return t !== void 0 && !i.isEmptyObject(t);
          },
        };
        var A = new Ue();
        var K = new Ue();
        var or = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ur = /[A-Z]/g;
        function ar(e) {
          if (e === "true") {
            return true;
          }
          if (e === "false") {
            return false;
          }
          if (e === "null") {
            return null;
          }
          if (e === +e + "") {
            return +e;
          }
          if (or.test(e)) {
            return JSON.parse(e);
          }
          return e;
        }
        function un(e, t, n) {
          var r;
          if (n === void 0 && e.nodeType === 1) {
            r = "data-" + t.replace(ur, "-$&").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n === "string") {
              try {
                n = ar(n);
              } catch (o) {}
              K.set(e, t, n);
            } else {
              n = void 0;
            }
          }
          return n;
        }
        i.extend({
          hasData: function (e) {
            return K.hasData(e) || A.hasData(e);
          },
          data: function (e, t, n) {
            return K.access(e, t, n);
          },
          removeData: function (e, t) {
            K.remove(e, t);
          },
          _data: function (e, t, n) {
            return A.access(e, t, n);
          },
          _removeData: function (e, t) {
            A.remove(e, t);
          },
        });
        i.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              u = this[0],
              a = u && u.attributes;
            if (e === void 0) {
              if (this.length) {
                o = K.get(u);
                if (u.nodeType === 1 && !A.get(u, "hasDataAttrs")) {
                  n = a.length;
                  while (n--) {
                    if (a[n]) {
                      r = a[n].name;
                      if (r.indexOf("data-") === 0) {
                        r = ge(r.slice(5));
                        un(u, r, o[r]);
                      }
                    }
                  }
                  A.set(u, "hasDataAttrs", true);
                }
              }
              return o;
            }
            if (typeof e === "object") {
              return this.each(function () {
                K.set(this, e);
              });
            }
            return ve(
              this,
              function (l) {
                var f;
                if (u && l === void 0) {
                  f = K.get(u, e);
                  if (f !== void 0) {
                    return f;
                  }
                  f = un(u, e);
                  if (f !== void 0) {
                    return f;
                  }
                  return;
                }
                this.each(function () {
                  K.set(this, e, l);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              true
            );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        });
        i.extend({
          queue: function (e, t, n) {
            var r;
            if (e) {
              t = (t || "fx") + "queue";
              r = A.get(e, t);
              if (n) {
                if (!r || Array.isArray(n)) {
                  r = A.access(e, t, i.makeArray(n));
                } else {
                  r.push(n);
                }
              }
              return r || [];
            }
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = i.queue(e, t),
              r = n.length,
              o = n.shift(),
              u = i._queueHooks(e, t),
              a = function () {
                i.dequeue(e, t);
              };
            if (o === "inprogress") {
              o = n.shift();
              r--;
            }
            if (o) {
              if (t === "fx") {
                n.unshift("inprogress");
              }
              delete u.stop;
              o.call(e, a, u);
            }
            if (!r && u) {
              u.empty.fire();
            }
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              A.get(e, n) ||
              A.access(e, n, {
                empty: i.Callbacks("once memory").add(function () {
                  A.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        });
        i.fn.extend({
          queue: function (e, t) {
            var n = 2;
            if (typeof e !== "string") {
              t = e;
              e = "fx";
              n--;
            }
            if (arguments.length < n) {
              return i.queue(this[0], e);
            }
            return t === void 0
              ? this
              : this.each(function () {
                  var r = i.queue(this, e, t);
                  i._queueHooks(this, e);
                  if (e === "fx" && r[0] !== "inprogress") {
                    i.dequeue(this, e);
                  }
                });
          },
          dequeue: function (e) {
            return this.each(function () {
              i.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              o = i.Deferred(),
              u = this,
              a = this.length,
              l = function () {
                if (!--r) {
                  o.resolveWith(u, [u]);
                }
              };
            if (typeof e !== "string") {
              t = e;
              e = void 0;
            }
            e = e || "fx";
            while (a--) {
              n = A.get(u[a], e + "queueHooks");
              if (n && n.empty) {
                r++;
                n.empty.add(l);
              }
            }
            l();
            return o.promise(t);
          },
        });
        var an = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var Ve = new RegExp("^(?:([+-])=|)(" + an + ")([a-z%]*)$", "i");
        var be = ["Top", "Right", "Bottom", "Left"];
        var Ee = H.documentElement;
        var Me = function (e) {
            return i.contains(e.ownerDocument, e);
          },
          sr = { composed: true };
        if (Ee.getRootNode) {
          Me = function (e) {
            return i.contains(e.ownerDocument, e) || e.getRootNode(sr) === e.ownerDocument;
          };
        }
        var at = function (e, t) {
          e = t || e;
          return e.style.display === "none" || (e.style.display === "" && Me(e) && i.css(e, "display") === "none");
        };
        function sn(e, t, n, r) {
          var o,
            u,
            a = 20,
            l = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return i.css(e, t, "");
                },
            f = l(),
            h = (n && n[3]) || (i.cssNumber[t] ? "" : "px"),
            y = e.nodeType && (i.cssNumber[t] || (h !== "px" && +f)) && Ve.exec(i.css(e, t));
          if (y && y[3] !== h) {
            f = f / 2;
            h = h || y[3];
            y = +f || 1;
            while (a--) {
              i.style(e, t, y + h);
              if ((1 - u) * (1 - (u = l() / f || 0.5)) <= 0) {
                a = 0;
              }
              y = y / u;
            }
            y = y * 2;
            i.style(e, t, y + h);
            n = n || [];
          }
          if (n) {
            y = +y || +f || 0;
            o = n[1] ? y + (n[1] + 1) * n[2] : +n[2];
            if (r) {
              r.unit = h;
              r.start = y;
              r.end = o;
            }
          }
          return o;
        }
        var fn = {};
        function fr(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            o = fn[r];
          if (o) {
            return o;
          }
          t = n.body.appendChild(n.createElement(r));
          o = i.css(t, "display");
          t.parentNode.removeChild(t);
          if (o === "none") {
            o = "block";
          }
          fn[r] = o;
          return o;
        }
        function Ie(e, t) {
          var n,
            r,
            o = [],
            u = 0,
            a = e.length;
          for (; u < a; u++) {
            r = e[u];
            if (!r.style) {
              continue;
            }
            n = r.style.display;
            if (t) {
              if (n === "none") {
                o[u] = A.get(r, "display") || null;
                if (!o[u]) {
                  r.style.display = "";
                }
              }
              if (r.style.display === "" && at(r)) {
                o[u] = fr(r);
              }
            } else {
              if (n !== "none") {
                o[u] = "none";
                A.set(r, "display", n);
              }
            }
          }
          for (u = 0; u < a; u++) {
            if (o[u] != null) {
              e[u].style.display = o[u];
            }
          }
          return e;
        }
        i.fn.extend({
          show: function () {
            return Ie(this, true);
          },
          hide: function () {
            return Ie(this);
          },
          toggle: function (e) {
            if (typeof e === "boolean") {
              return e ? this.show() : this.hide();
            }
            return this.each(function () {
              if (at(this)) {
                i(this).show();
              } else {
                i(this).hide();
              }
            });
          },
        });
        var Xe = /^(?:checkbox|radio)$/i;
        var cn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var ln = /^$|^module$|\/(?:java|ecma)script/i;
        (function () {
          var e = H.createDocumentFragment(),
            t = e.appendChild(H.createElement("div")),
            n = H.createElement("input");
          n.setAttribute("type", "radio");
          n.setAttribute("checked", "checked");
          n.setAttribute("name", "t");
          t.appendChild(n);
          I.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
          t.innerHTML = "<textarea>x</textarea>";
          I.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
          t.innerHTML = "<option></option>";
          I.option = !!t.lastChild;
        })();
        var fe = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead;
        fe.th = fe.td;
        if (!I.option) {
          fe.optgroup = fe.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function J(e, t) {
          var n;
          if (typeof e.getElementsByTagName !== "undefined") {
            n = e.getElementsByTagName(t || "*");
          } else if (typeof e.querySelectorAll !== "undefined") {
            n = e.querySelectorAll(t || "*");
          } else {
            n = [];
          }
          if (t === void 0 || (t && se(e, t))) {
            return i.merge([e], n);
          }
          return n;
        }
        function St(e, t) {
          var n = 0,
            r = e.length;
          for (; n < r; n++) {
            A.set(e[n], "globalEval", !t || A.get(t[n], "globalEval"));
          }
        }
        var cr = /<|&#?\w+;/;
        function dn(e, t, n, r, o) {
          var u,
            a,
            l,
            f,
            h,
            y,
            x = t.createDocumentFragment(),
            g = [],
            v = 0,
            S = e.length;
          for (; v < S; v++) {
            u = e[v];
            if (u || u === 0) {
              if (Oe(u) === "object") {
                i.merge(g, u.nodeType ? [u] : u);
              } else if (!cr.test(u)) {
                g.push(t.createTextNode(u));
              } else {
                a = a || x.appendChild(t.createElement("div"));
                l = (cn.exec(u) || ["", ""])[1].toLowerCase();
                f = fe[l] || fe._default;
                a.innerHTML = f[1] + i.htmlPrefilter(u) + f[2];
                y = f[0];
                while (y--) {
                  a = a.lastChild;
                }
                i.merge(g, a.childNodes);
                a = x.firstChild;
                a.textContent = "";
              }
            }
          }
          x.textContent = "";
          v = 0;
          while ((u = g[v++])) {
            if (r && i.inArray(u, r) > -1) {
              if (o) {
                o.push(u);
              }
              continue;
            }
            h = Me(u);
            a = J(x.appendChild(u), "script");
            if (h) {
              St(a);
            }
            if (n) {
              y = 0;
              while ((u = a[y++])) {
                if (ln.test(u.type || "")) {
                  n.push(u);
                }
              }
            }
          }
          return x;
        }
        var pn = /^([^.]*)(?:\.(.+)|)/;
        function Re() {
          return true;
        }
        function We() {
          return false;
        }
        function lr(e, t) {
          return (e === dr()) === (t === "focus");
        }
        function dr() {
          try {
            return H.activeElement;
          } catch (e) {}
        }
        function Et(e, t, n, r, o, u) {
          var a, l;
          if (typeof t === "object") {
            if (typeof n !== "string") {
              r = r || n;
              n = void 0;
            }
            for (l in t) {
              Et(e, l, n, r, t[l], u);
            }
            return e;
          }
          if (r == null && o == null) {
            o = n;
            r = n = void 0;
          } else if (o == null) {
            if (typeof n === "string") {
              o = r;
              r = void 0;
            } else {
              o = r;
              r = n;
              n = void 0;
            }
          }
          if (o === false) {
            o = We;
          } else if (!o) {
            return e;
          }
          if (u === 1) {
            a = o;
            o = function (f) {
              i().off(f);
              return a.apply(this, arguments);
            };
            o.guid = a.guid || (a.guid = i.guid++);
          }
          return e.each(function () {
            i.event.add(this, t, o, r, n);
          });
        }
        i.event = {
          global: {},
          add: function (e, t, n, r, o) {
            var u,
              a,
              l,
              f,
              h,
              y,
              x,
              g,
              v,
              S,
              L,
              E = A.get(e);
            if (!ze(e)) {
              return;
            }
            if (n.handler) {
              u = n;
              n = u.handler;
              o = u.selector;
            }
            if (o) {
              i.find.matchesSelector(Ee, o);
            }
            if (!n.guid) {
              n.guid = i.guid++;
            }
            if (!(f = E.events)) {
              f = E.events = Object.create(null);
            }
            if (!(a = E.handle)) {
              a = E.handle = function (X) {
                return typeof i !== "undefined" && i.event.triggered !== X.type ? i.event.dispatch.apply(e, arguments) : void 0;
              };
            }
            t = (t || "").match(he) || [""];
            h = t.length;
            while (h--) {
              l = pn.exec(t[h]) || [];
              v = L = l[1];
              S = (l[2] || "").split(".").sort();
              if (!v) {
                continue;
              }
              x = i.event.special[v] || {};
              v = (o ? x.delegateType : x.bindType) || v;
              x = i.event.special[v] || {};
              y = i.extend(
                { type: v, origType: L, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && i.expr.match.needsContext.test(o), namespace: S.join(".") },
                u
              );
              if (!(g = f[v])) {
                g = f[v] = [];
                g.delegateCount = 0;
                if (!x.setup || x.setup.call(e, r, S, a) === false) {
                  if (e.addEventListener) {
                    e.addEventListener(v, a);
                  }
                }
              }
              if (x.add) {
                x.add.call(e, y);
                if (!y.handler.guid) {
                  y.handler.guid = n.guid;
                }
              }
              if (o) {
                g.splice(g.delegateCount++, 0, y);
              } else {
                g.push(y);
              }
              i.event.global[v] = true;
            }
          },
          remove: function (e, t, n, r, o) {
            var u,
              a,
              l,
              f,
              h,
              y,
              x,
              g,
              v,
              S,
              L,
              E = A.hasData(e) && A.get(e);
            if (!E || !(f = E.events)) {
              return;
            }
            t = (t || "").match(he) || [""];
            h = t.length;
            while (h--) {
              l = pn.exec(t[h]) || [];
              v = L = l[1];
              S = (l[2] || "").split(".").sort();
              if (!v) {
                for (v in f) {
                  i.event.remove(e, v + t[h], n, r, true);
                }
                continue;
              }
              x = i.event.special[v] || {};
              v = (r ? x.delegateType : x.bindType) || v;
              g = f[v] || [];
              l = l[2] && new RegExp("(^|\\.)" + S.join("\\.(?:.*\\.|)") + "(\\.|$)");
              a = u = g.length;
              while (u--) {
                y = g[u];
                if ((o || L === y.origType) && (!n || n.guid === y.guid) && (!l || l.test(y.namespace)) && (!r || r === y.selector || (r === "**" && y.selector))) {
                  g.splice(u, 1);
                  if (y.selector) {
                    g.delegateCount--;
                  }
                  if (x.remove) {
                    x.remove.call(e, y);
                  }
                }
              }
              if (a && !g.length) {
                if (!x.teardown || x.teardown.call(e, S, E.handle) === false) {
                  i.removeEvent(e, v, E.handle);
                }
                delete f[v];
              }
            }
            if (i.isEmptyObject(f)) {
              A.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              o,
              u,
              a,
              l = new Array(arguments.length),
              f = i.event.fix(e),
              h = (A.get(this, "events") || Object.create(null))[f.type] || [],
              y = i.event.special[f.type] || {};
            l[0] = f;
            for (t = 1; t < arguments.length; t++) {
              l[t] = arguments[t];
            }
            f.delegateTarget = this;
            if (y.preDispatch && y.preDispatch.call(this, f) === false) {
              return;
            }
            a = i.event.handlers.call(this, f, h);
            t = 0;
            while ((o = a[t++]) && !f.isPropagationStopped()) {
              f.currentTarget = o.elem;
              n = 0;
              while ((u = o.handlers[n++]) && !f.isImmediatePropagationStopped()) {
                if (!f.rnamespace || u.namespace === false || f.rnamespace.test(u.namespace)) {
                  f.handleObj = u;
                  f.data = u.data;
                  r = ((i.event.special[u.origType] || {}).handle || u.handler).apply(o.elem, l);
                  if (r !== void 0) {
                    if ((f.result = r) === false) {
                      f.preventDefault();
                      f.stopPropagation();
                    }
                  }
                }
              }
            }
            if (y.postDispatch) {
              y.postDispatch.call(this, f);
            }
            return f.result;
          },
          handlers: function (e, t) {
            var n,
              r,
              o,
              u,
              a,
              l = [],
              f = t.delegateCount,
              h = e.target;
            if (f && h.nodeType && !(e.type === "click" && e.button >= 1)) {
              for (; h !== this; h = h.parentNode || this) {
                if (h.nodeType === 1 && !(e.type === "click" && h.disabled === true)) {
                  u = [];
                  a = {};
                  for (n = 0; n < f; n++) {
                    r = t[n];
                    o = r.selector + " ";
                    if (a[o] === void 0) {
                      a[o] = r.needsContext ? i(o, this).index(h) > -1 : i.find(o, this, null, [h]).length;
                    }
                    if (a[o]) {
                      u.push(r);
                    }
                  }
                  if (u.length) {
                    l.push({ elem: h, handlers: u });
                  }
                }
              }
            }
            h = this;
            if (f < t.length) {
              l.push({ elem: h, handlers: t.slice(f) });
            }
            return l;
          },
          addProp: function (e, t) {
            Object.defineProperty(i.Event.prototype, e, {
              enumerable: true,
              configurable: true,
              get: O(t)
                ? function () {
                    if (this.originalEvent) {
                      return t(this.originalEvent);
                    }
                  }
                : function () {
                    if (this.originalEvent) {
                      return this.originalEvent[e];
                    }
                  },
              set: function (n) {
                Object.defineProperty(this, e, { enumerable: true, configurable: true, writable: true, value: n });
              },
            });
          },
          fix: function (e) {
            return e[i.expando] ? e : new i.Event(e);
          },
          special: {
            load: { noBubble: true },
            click: {
              setup: function (e) {
                var t = this || e;
                if (Xe.test(t.type) && t.click && se(t, "input")) {
                  st(t, "click", Re);
                }
                return false;
              },
              trigger: function (e) {
                var t = this || e;
                if (Xe.test(t.type) && t.click && se(t, "input")) {
                  st(t, "click");
                }
                return true;
              },
              _default: function (e) {
                var t = e.target;
                return (Xe.test(t.type) && t.click && se(t, "input") && A.get(t, "click")) || se(t, "a");
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                if (e.result !== void 0 && e.originalEvent) {
                  e.originalEvent.returnValue = e.result;
                }
              },
            },
          },
        };
        function st(e, t, n) {
          if (!n) {
            if (A.get(e, t) === void 0) {
              i.event.add(e, t, Re);
            }
            return;
          }
          A.set(e, t, false);
          i.event.add(e, t, {
            namespace: false,
            handler: function (r) {
              var o,
                u,
                a = A.get(this, t);
              if (r.isTrigger & 1 && this[t]) {
                if (!a.length) {
                  a = Te.call(arguments);
                  A.set(this, t, a);
                  o = n(this, t);
                  this[t]();
                  u = A.get(this, t);
                  if (a !== u || o) {
                    A.set(this, t, false);
                  } else {
                    u = {};
                  }
                  if (a !== u) {
                    r.stopImmediatePropagation();
                    r.preventDefault();
                    return u && u.value;
                  }
                } else if ((i.event.special[t] || {}).delegateType) {
                  r.stopPropagation();
                }
              } else if (a.length) {
                A.set(this, t, { value: i.event.trigger(i.extend(a[0], i.Event.prototype), a.slice(1), this) });
                r.stopImmediatePropagation();
              }
            },
          });
        }
        i.removeEvent = function (e, t, n) {
          if (e.removeEventListener) {
            e.removeEventListener(t, n);
          }
        };
        i.Event = function (e, t) {
          if (!(this instanceof i.Event)) {
            return new i.Event(e, t);
          }
          if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || (e.defaultPrevented === void 0 && e.returnValue === false) ? Re : We;
            this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
            this.currentTarget = e.currentTarget;
            this.relatedTarget = e.relatedTarget;
          } else {
            this.type = e;
          }
          if (t) {
            i.extend(this, t);
          }
          this.timeStamp = (e && e.timeStamp) || Date.now();
          this[i.expando] = true;
        };
        i.Event.prototype = {
          constructor: i.Event,
          isDefaultPrevented: We,
          isPropagationStopped: We,
          isImmediatePropagationStopped: We,
          isSimulated: false,
          preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Re;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Re;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Re;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          },
        };
        i.each(
          {
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            code: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: true,
          },
          i.event.addProp
        );
        i.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          i.event.special[e] = {
            setup: function () {
              st(this, e, lr);
              return false;
            },
            trigger: function () {
              st(this, e);
              return true;
            },
            _default: function (n) {
              return A.get(n.target, e);
            },
            delegateType: t,
          };
        });
        i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
          i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
              var r,
                o = this,
                u = n.relatedTarget,
                a = n.handleObj;
              if (!u || (u !== o && !i.contains(o, u))) {
                n.type = a.origType;
                r = a.handler.apply(this, arguments);
                n.type = t;
              }
              return r;
            },
          };
        });
        i.fn.extend({
          on: function (e, t, n, r) {
            return Et(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Et(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) {
              r = e.handleObj;
              i(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
              return this;
            }
            if (typeof e === "object") {
              for (o in e) {
                this.off(o, t, e[o]);
              }
              return this;
            }
            if (t === false || typeof t === "function") {
              n = t;
              t = void 0;
            }
            if (n === false) {
              n = We;
            }
            return this.each(function () {
              i.event.remove(this, e, n, t);
            });
          },
        });
        var pr = /<script|<style|<link/i,
          hr = /checked\s*(?:[^=]|=\s*.checked.)/i,
          gr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function hn(e, t) {
          if (se(e, "table") && se(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
            return i(e).children("tbody")[0] || e;
          }
          return e;
        }
        function yr(e) {
          e.type = (e.getAttribute("type") !== null) + "/" + e.type;
          return e;
        }
        function vr(e) {
          if ((e.type || "").slice(0, 5) === "true/") {
            e.type = e.type.slice(5);
          } else {
            e.removeAttribute("type");
          }
          return e;
        }
        function gn(e, t) {
          var n, r, o, u, a, l, f;
          if (t.nodeType !== 1) {
            return;
          }
          if (A.hasData(e)) {
            u = A.get(e);
            f = u.events;
            if (f) {
              A.remove(t, "handle events");
              for (o in f) {
                for (n = 0, r = f[o].length; n < r; n++) {
                  i.event.add(t, o, f[o][n]);
                }
              }
            }
          }
          if (K.hasData(e)) {
            a = K.access(e);
            l = i.extend({}, a);
            K.set(t, l);
          }
        }
        function br(e, t) {
          var n = t.nodeName.toLowerCase();
          if (n === "input" && Xe.test(e.type)) {
            t.checked = e.checked;
          } else if (n === "input" || n === "textarea") {
            t.defaultValue = e.defaultValue;
          }
        }
        function Fe(e, t, n, r) {
          t = Gt(t);
          var o,
            u,
            a,
            l,
            f,
            h,
            y = 0,
            x = e.length,
            g = x - 1,
            v = t[0],
            S = O(v);
          if (S || (x > 1 && typeof v === "string" && !I.checkClone && hr.test(v))) {
            return e.each(function (L) {
              var E = e.eq(L);
              if (S) {
                t[0] = v.call(this, L, E.html());
              }
              Fe(E, t, n, r);
            });
          }
          if (x) {
            o = dn(t, e[0].ownerDocument, false, e, r);
            u = o.firstChild;
            if (o.childNodes.length === 1) {
              o = u;
            }
            if (u || r) {
              a = i.map(J(o, "script"), yr);
              l = a.length;
              for (; y < x; y++) {
                f = o;
                if (y !== g) {
                  f = i.clone(f, true, true);
                  if (l) {
                    i.merge(a, J(f, "script"));
                  }
                }
                n.call(e[y], f, y);
              }
              if (l) {
                h = a[a.length - 1].ownerDocument;
                i.map(a, vr);
                for (y = 0; y < l; y++) {
                  f = a[y];
                  if (ln.test(f.type || "") && !A.access(f, "globalEval") && i.contains(h, f)) {
                    if (f.src && (f.type || "").toLowerCase() !== "module") {
                      if (i._evalUrl && !f.noModule) {
                        i._evalUrl(f.src, { nonce: f.nonce || f.getAttribute("nonce") }, h);
                      }
                    } else {
                      Kt(f.textContent.replace(gr, ""), f, h);
                    }
                  }
                }
              }
            }
          }
          return e;
        }
        function yn(e, t, n) {
          var r,
            o = t ? i.filter(t, e) : e,
            u = 0;
          for (; (r = o[u]) != null; u++) {
            if (!n && r.nodeType === 1) {
              i.cleanData(J(r));
            }
            if (r.parentNode) {
              if (n && Me(r)) {
                St(J(r, "script"));
              }
              r.parentNode.removeChild(r);
            }
          }
          return e;
        }
        i.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              o,
              u,
              a,
              l = e.cloneNode(true),
              f = Me(e);
            if (!I.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !i.isXMLDoc(e)) {
              a = J(l);
              u = J(e);
              for (r = 0, o = u.length; r < o; r++) {
                br(u[r], a[r]);
              }
            }
            if (t) {
              if (n) {
                u = u || J(e);
                a = a || J(l);
                for (r = 0, o = u.length; r < o; r++) {
                  gn(u[r], a[r]);
                }
              } else {
                gn(e, l);
              }
            }
            a = J(l, "script");
            if (a.length > 0) {
              St(a, !f && J(e, "script"));
            }
            return l;
          },
          cleanData: function (e) {
            var t,
              n,
              r,
              o = i.event.special,
              u = 0;
            for (; (n = e[u]) !== void 0; u++) {
              if (ze(n)) {
                if ((t = n[A.expando])) {
                  if (t.events) {
                    for (r in t.events) {
                      if (o[r]) {
                        i.event.remove(n, r);
                      } else {
                        i.removeEvent(n, r, t.handle);
                      }
                    }
                  }
                  n[A.expando] = void 0;
                }
                if (n[K.expando]) {
                  n[K.expando] = void 0;
                }
              }
            }
          },
        });
        i.fn.extend({
          detach: function (e) {
            return yn(this, e, true);
          },
          remove: function (e) {
            return yn(this, e);
          },
          text: function (e) {
            return ve(
              this,
              function (t) {
                return t === void 0
                  ? i.text(this)
                  : this.empty().each(function () {
                      if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = t;
                      }
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Fe(this, arguments, function (e) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var t = hn(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return Fe(this, arguments, function (e) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var t = hn(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Fe(this, arguments, function (e) {
              if (this.parentNode) {
                this.parentNode.insertBefore(e, this);
              }
            });
          },
          after: function () {
            return Fe(this, arguments, function (e) {
              if (this.parentNode) {
                this.parentNode.insertBefore(e, this.nextSibling);
              }
            });
          },
          empty: function () {
            var e,
              t = 0;
            for (; (e = this[t]) != null; t++) {
              if (e.nodeType === 1) {
                i.cleanData(J(e, false));
                e.textContent = "";
              }
            }
            return this;
          },
          clone: function (e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function () {
              return i.clone(this, e, t);
            });
          },
          html: function (e) {
            return ve(
              this,
              function (t) {
                var n = this[0] || {},
                  r = 0,
                  o = this.length;
                if (t === void 0 && n.nodeType === 1) {
                  return n.innerHTML;
                }
                if (typeof t === "string" && !pr.test(t) && !fe[(cn.exec(t) || ["", ""])[1].toLowerCase()]) {
                  t = i.htmlPrefilter(t);
                  try {
                    for (; r < o; r++) {
                      n = this[r] || {};
                      if (n.nodeType === 1) {
                        i.cleanData(J(n, false));
                        n.innerHTML = t;
                      }
                    }
                    n = 0;
                  } catch (u) {}
                }
                if (n) {
                  this.empty().append(t);
                }
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Fe(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                if (i.inArray(this, e) < 0) {
                  i.cleanData(J(this));
                  if (n) {
                    n.replaceChild(t, this);
                  }
                }
              },
              e
            );
          },
        });
        i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
          i.fn[e] = function (n) {
            var r,
              o = [],
              u = i(n),
              a = u.length - 1,
              l = 0;
            for (; l <= a; l++) {
              r = l === a ? this : this.clone(true);
              i(u[l])[t](r);
              xt.apply(o, r.get());
            }
            return this.pushStack(o);
          };
        });
        var Nt = new RegExp("^(" + an + ")(?!px)[a-z%]+$", "i");
        var At = /^--/;
        var ft = function (e) {
          var t = e.ownerDocument.defaultView;
          if (!t || !t.opener) {
            t = _;
          }
          return t.getComputedStyle(e);
        };
        var vn = function (e, t, n) {
          var r,
            o,
            u = {};
          for (o in t) {
            u[o] = e.style[o];
            e.style[o] = t[o];
          }
          r = n.call(e);
          for (o in t) {
            e.style[o] = u[o];
          }
          return r;
        };
        var mr = new RegExp(be.join("|"), "i");
        var bn = "[\\x20\\t\\r\\n\\f]";
        var xr = new RegExp("^" + bn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + bn + "+$", "g");
        (function () {
          function e() {
            if (!h) {
              return;
            }
            f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            Ee.appendChild(f).appendChild(h);
            var y = _.getComputedStyle(h);
            n = y.top !== "1%";
            l = t(y.marginLeft) === 12;
            h.style.right = "60%";
            u = t(y.right) === 36;
            r = t(y.width) === 36;
            h.style.position = "absolute";
            o = t(h.offsetWidth / 3) === 12;
            Ee.removeChild(f);
            h = null;
          }
          function t(y) {
            return Math.round(parseFloat(y));
          }
          var n,
            r,
            o,
            u,
            a,
            l,
            f = H.createElement("div"),
            h = H.createElement("div");
          if (!h.style) {
            return;
          }
          h.style.backgroundClip = "content-box";
          h.cloneNode(true).style.backgroundClip = "";
          I.clearCloneStyle = h.style.backgroundClip === "content-box";
          i.extend(I, {
            boxSizingReliable: function () {
              e();
              return r;
            },
            pixelBoxStyles: function () {
              e();
              return u;
            },
            pixelPosition: function () {
              e();
              return n;
            },
            reliableMarginLeft: function () {
              e();
              return l;
            },
            scrollboxSize: function () {
              e();
              return o;
            },
            reliableTrDimensions: function () {
              var y, x, g, v;
              if (a == null) {
                y = H.createElement("table");
                x = H.createElement("tr");
                g = H.createElement("div");
                y.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                x.style.cssText = "border:1px solid";
                x.style.height = "1px";
                g.style.height = "9px";
                g.style.display = "block";
                Ee.appendChild(y).appendChild(x).appendChild(g);
                v = _.getComputedStyle(x);
                a = parseInt(v.height, 10) + parseInt(v.borderTopWidth, 10) + parseInt(v.borderBottomWidth, 10) === x.offsetHeight;
                Ee.removeChild(y);
              }
              return a;
            },
          });
        })();
        function Ge(e, t, n) {
          var r,
            o,
            u,
            a,
            l = At.test(t),
            f = e.style;
          n = n || ft(e);
          if (n) {
            a = n.getPropertyValue(t) || n[t];
            if (l) {
              a = a.replace(xr, "$1");
            }
            if (a === "" && !Me(e)) {
              a = i.style(e, t);
            }
            if (!I.pixelBoxStyles() && Nt.test(a) && mr.test(t)) {
              r = f.width;
              o = f.minWidth;
              u = f.maxWidth;
              f.minWidth = f.maxWidth = f.width = a;
              a = n.width;
              f.width = r;
              f.minWidth = o;
              f.maxWidth = u;
            }
          }
          return a !== void 0 ? a + "" : a;
        }
        function mn(e, t) {
          return {
            get: function () {
              if (e()) {
                delete this.get;
                return;
              }
              return (this.get = t).apply(this, arguments);
            },
          };
        }
        var xn = ["Webkit", "Moz", "ms"],
          Tn = H.createElement("div").style,
          Cn = {};
        function Tr(e) {
          var t = e[0].toUpperCase() + e.slice(1),
            n = xn.length;
          while (n--) {
            e = xn[n] + t;
            if (e in Tn) {
              return e;
            }
          }
        }
        function Dt(e) {
          var t = i.cssProps[e] || Cn[e];
          if (t) {
            return t;
          }
          if (e in Tn) {
            return e;
          }
          return (Cn[e] = Tr(e) || e);
        }
        var Cr = /^(none|table(?!-c[ea]).+)/,
          wr = { position: "absolute", visibility: "hidden", display: "block" },
          wn = { letterSpacing: "0", fontWeight: "400" };
        function Sn(e, t, n) {
          var r = Ve.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function kt(e, t, n, r, o, u) {
          var a = t === "width" ? 1 : 0,
            l = 0,
            f = 0;
          if (n === (r ? "border" : "content")) {
            return 0;
          }
          for (; a < 4; a += 2) {
            if (n === "margin") {
              f += i.css(e, n + be[a], true, o);
            }
            if (!r) {
              f += i.css(e, "padding" + be[a], true, o);
              if (n !== "padding") {
                f += i.css(e, "border" + be[a] + "Width", true, o);
              } else {
                l += i.css(e, "border" + be[a] + "Width", true, o);
              }
            } else {
              if (n === "content") {
                f -= i.css(e, "padding" + be[a], true, o);
              }
              if (n !== "margin") {
                f -= i.css(e, "border" + be[a] + "Width", true, o);
              }
            }
          }
          if (!r && u >= 0) {
            f += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - u - f - l - 0.5)) || 0;
          }
          return f;
        }
        function En(e, t, n) {
          var r = ft(e),
            o = !I.boxSizingReliable() || n,
            u = o && i.css(e, "boxSizing", false, r) === "border-box",
            a = u,
            l = Ge(e, t, r),
            f = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Nt.test(l)) {
            if (!n) {
              return l;
            }
            l = "auto";
          }
          if (
            ((!I.boxSizingReliable() && u) || (!I.reliableTrDimensions() && se(e, "tr")) || l === "auto" || (!parseFloat(l) && i.css(e, "display", false, r) === "inline")) &&
            e.getClientRects().length
          ) {
            u = i.css(e, "boxSizing", false, r) === "border-box";
            a = f in e;
            if (a) {
              l = e[f];
            }
          }
          l = parseFloat(l) || 0;
          return l + kt(e, t, n || (u ? "border" : "content"), a, r, l) + "px";
        }
        i.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ge(e, "opacity");
                  return n === "" ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
              return;
            }
            var o,
              u,
              a,
              l = ge(t),
              f = At.test(t),
              h = e.style;
            if (!f) {
              t = Dt(l);
            }
            a = i.cssHooks[t] || i.cssHooks[l];
            if (n !== void 0) {
              u = typeof n;
              if (u === "string" && (o = Ve.exec(n)) && o[1]) {
                n = sn(e, t, o);
                u = "number";
              }
              if (n == null || n !== n) {
                return;
              }
              if (u === "number" && !f) {
                n += (o && o[3]) || (i.cssNumber[l] ? "" : "px");
              }
              if (!I.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                h[t] = "inherit";
              }
              if (!a || !("set" in a) || (n = a.set(e, n, r)) !== void 0) {
                if (f) {
                  h.setProperty(t, n);
                } else {
                  h[t] = n;
                }
              }
            } else {
              if (a && "get" in a && (o = a.get(e, false, r)) !== void 0) {
                return o;
              }
              return h[t];
            }
          },
          css: function (e, t, n, r) {
            var o,
              u,
              a,
              l = ge(t),
              f = At.test(t);
            if (!f) {
              t = Dt(l);
            }
            a = i.cssHooks[t] || i.cssHooks[l];
            if (a && "get" in a) {
              o = a.get(e, true, n);
            }
            if (o === void 0) {
              o = Ge(e, t, r);
            }
            if (o === "normal" && t in wn) {
              o = wn[t];
            }
            if (n === "" || n) {
              u = parseFloat(o);
              return n === true || isFinite(u) ? u || 0 : o;
            }
            return o;
          },
        });
        i.each(["height", "width"], function (e, t) {
          i.cssHooks[t] = {
            get: function (n, r, o) {
              if (r) {
                return Cr.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width)
                  ? vn(n, wr, function () {
                      return En(n, t, o);
                    })
                  : En(n, t, o);
              }
            },
            set: function (n, r, o) {
              var u,
                a = ft(n),
                l = !I.scrollboxSize() && a.position === "absolute",
                f = l || o,
                h = f && i.css(n, "boxSizing", false, a) === "border-box",
                y = o ? kt(n, t, o, h, a) : 0;
              if (h && l) {
                y -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - kt(n, t, "border", false, a) - 0.5);
              }
              if (y && (u = Ve.exec(r)) && (u[3] || "px") !== "px") {
                n.style[t] = r;
                r = i.css(n, t);
              }
              return Sn(n, r, y);
            },
          };
        });
        i.cssHooks.marginLeft = mn(I.reliableMarginLeft, function (e, t) {
          if (t) {
            return (
              (parseFloat(Ge(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  vn(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
          }
        });
        i.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          i.cssHooks[e + t] = {
            expand: function (n) {
              var r = 0,
                o = {},
                u = typeof n === "string" ? n.split(" ") : [n];
              for (; r < 4; r++) {
                o[e + be[r] + t] = u[r] || u[r - 2] || u[0];
              }
              return o;
            },
          };
          if (e !== "margin") {
            i.cssHooks[e + t].set = Sn;
          }
        });
        i.fn.extend({
          css: function (e, t) {
            return ve(
              this,
              function (n, r, o) {
                var u,
                  a,
                  l = {},
                  f = 0;
                if (Array.isArray(r)) {
                  u = ft(n);
                  a = r.length;
                  for (; f < a; f++) {
                    l[r[f]] = i.css(n, r[f], false, u);
                  }
                  return l;
                }
                return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        });
        function Z(e, t, n, r, o) {
          return new Z.prototype.init(e, t, n, r, o);
        }
        i.Tween = Z;
        Z.prototype = {
          constructor: Z,
          init: function (e, t, n, r, o, u) {
            this.elem = e;
            this.prop = n;
            this.easing = o || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = r;
            this.unit = u || (i.cssNumber[n] ? "" : "px");
          },
          cur: function () {
            var e = Z.propHooks[this.prop];
            return e && e.get ? e.get(this) : Z.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = Z.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = t = i.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
            } else {
              this.pos = t = e;
            }
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (n && n.set) {
              n.set(this);
            } else {
              Z.propHooks._default.set(this);
            }
            return this;
          },
        };
        Z.prototype.init.prototype = Z.prototype;
        Z.propHooks = {
          _default: {
            get: function (e) {
              var t;
              if (e.elem.nodeType !== 1 || (e.elem[e.prop] != null && e.elem.style[e.prop] == null)) {
                return e.elem[e.prop];
              }
              t = i.css(e.elem, e.prop, "");
              return !t || t === "auto" ? 0 : t;
            },
            set: function (e) {
              if (i.fx.step[e.prop]) {
                i.fx.step[e.prop](e);
              } else if (e.elem.nodeType === 1 && (i.cssHooks[e.prop] || e.elem.style[Dt(e.prop)] != null)) {
                i.style(e.elem, e.prop, e.now + e.unit);
              } else {
                e.elem[e.prop] = e.now;
              }
            },
          },
        };
        Z.propHooks.scrollTop = Z.propHooks.scrollLeft = {
          set: function (e) {
            if (e.elem.nodeType && e.elem.parentNode) {
              e.elem[e.prop] = e.now;
            }
          },
        };
        i.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        };
        i.fx = Z.prototype.init;
        i.fx.step = {};
        var Be,
          ct,
          Sr = /^(?:toggle|show|hide)$/,
          Er = /queueHooks$/;
        function jt() {
          if (ct) {
            if (H.hidden === false && _.requestAnimationFrame) {
              _.requestAnimationFrame(jt);
            } else {
              _.setTimeout(jt, i.fx.interval);
            }
            i.fx.tick();
          }
        }
        function Nn() {
          _.setTimeout(function () {
            Be = void 0;
          });
          return (Be = Date.now());
        }
        function lt(e, t) {
          var n,
            r = 0,
            o = { height: e };
          t = t ? 1 : 0;
          for (; r < 4; r += 2 - t) {
            n = be[r];
            o["margin" + n] = o["padding" + n] = e;
          }
          if (t) {
            o.opacity = o.width = e;
          }
          return o;
        }
        function An(e, t, n) {
          var r,
            o = (le.tweeners[t] || []).concat(le.tweeners["*"]),
            u = 0,
            a = o.length;
          for (; u < a; u++) {
            if ((r = o[u].call(n, t, e))) {
              return r;
            }
          }
        }
        function Nr(e, t, n) {
          var r,
            o,
            u,
            a,
            l,
            f,
            h,
            y,
            x = "width" in t || "height" in t,
            g = this,
            v = {},
            S = e.style,
            L = e.nodeType && at(e),
            E = A.get(e, "fxshow");
          if (!n.queue) {
            a = i._queueHooks(e, "fx");
            if (a.unqueued == null) {
              a.unqueued = 0;
              l = a.empty.fire;
              a.empty.fire = function () {
                if (!a.unqueued) {
                  l();
                }
              };
            }
            a.unqueued++;
            g.always(function () {
              g.always(function () {
                a.unqueued--;
                if (!i.queue(e, "fx").length) {
                  a.empty.fire();
                }
              });
            });
          }
          for (r in t) {
            o = t[r];
            if (Sr.test(o)) {
              delete t[r];
              u = u || o === "toggle";
              if (o === (L ? "hide" : "show")) {
                if (o === "show" && E && E[r] !== void 0) {
                  L = true;
                } else {
                  continue;
                }
              }
              v[r] = (E && E[r]) || i.style(e, r);
            }
          }
          f = !i.isEmptyObject(t);
          if (!f && i.isEmptyObject(v)) {
            return;
          }
          if (x && e.nodeType === 1) {
            n.overflow = [S.overflow, S.overflowX, S.overflowY];
            h = E && E.display;
            if (h == null) {
              h = A.get(e, "display");
            }
            y = i.css(e, "display");
            if (y === "none") {
              if (h) {
                y = h;
              } else {
                Ie([e], true);
                h = e.style.display || h;
                y = i.css(e, "display");
                Ie([e]);
              }
            }
            if (y === "inline" || (y === "inline-block" && h != null)) {
              if (i.css(e, "float") === "none") {
                if (!f) {
                  g.done(function () {
                    S.display = h;
                  });
                  if (h == null) {
                    y = S.display;
                    h = y === "none" ? "" : y;
                  }
                }
                S.display = "inline-block";
              }
            }
          }
          if (n.overflow) {
            S.overflow = "hidden";
            g.always(function () {
              S.overflow = n.overflow[0];
              S.overflowX = n.overflow[1];
              S.overflowY = n.overflow[2];
            });
          }
          f = false;
          for (r in v) {
            if (!f) {
              if (E) {
                if ("hidden" in E) {
                  L = E.hidden;
                }
              } else {
                E = A.access(e, "fxshow", { display: h });
              }
              if (u) {
                E.hidden = !L;
              }
              if (L) {
                Ie([e], true);
              }
              g.done(function () {
                if (!L) {
                  Ie([e]);
                }
                A.remove(e, "fxshow");
                for (r in v) {
                  i.style(e, r, v[r]);
                }
              });
            }
            f = An(L ? E[r] : 0, r, g);
            if (!(r in E)) {
              E[r] = f.start;
              if (L) {
                f.end = f.start;
                f.start = 0;
              }
            }
          }
        }
        function Ar(e, t) {
          var n, r, o, u, a;
          for (n in e) {
            r = ge(n);
            o = t[r];
            u = e[n];
            if (Array.isArray(u)) {
              o = u[1];
              u = e[n] = u[0];
            }
            if (n !== r) {
              e[r] = u;
              delete e[n];
            }
            a = i.cssHooks[r];
            if (a && "expand" in a) {
              u = a.expand(u);
              delete e[r];
              for (n in u) {
                if (!(n in e)) {
                  e[n] = u[n];
                  t[n] = o;
                }
              }
            } else {
              t[r] = o;
            }
          }
        }
        function le(e, t, n) {
          var r,
            o,
            u = 0,
            a = le.prefilters.length,
            l = i.Deferred().always(function () {
              delete f.elem;
            }),
            f = function () {
              if (o) {
                return false;
              }
              var x = Be || Nn(),
                g = Math.max(0, h.startTime + h.duration - x),
                v = g / h.duration || 0,
                S = 1 - v,
                L = 0,
                E = h.tweens.length;
              for (; L < E; L++) {
                h.tweens[L].run(S);
              }
              l.notifyWith(e, [h, S, g]);
              if (S < 1 && E) {
                return g;
              }
              if (!E) {
                l.notifyWith(e, [h, 1, 0]);
              }
              l.resolveWith(e, [h]);
              return false;
            },
            h = l.promise({
              elem: e,
              props: i.extend({}, t),
              opts: i.extend(true, { specialEasing: {}, easing: i.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: Be || Nn(),
              duration: n.duration,
              tweens: [],
              createTween: function (x, g) {
                var v = i.Tween(e, h.opts, x, g, h.opts.specialEasing[x] || h.opts.easing);
                h.tweens.push(v);
                return v;
              },
              stop: function (x) {
                var g = 0,
                  v = x ? h.tweens.length : 0;
                if (o) {
                  return this;
                }
                o = true;
                for (; g < v; g++) {
                  h.tweens[g].run(1);
                }
                if (x) {
                  l.notifyWith(e, [h, 1, 0]);
                  l.resolveWith(e, [h, x]);
                } else {
                  l.rejectWith(e, [h, x]);
                }
                return this;
              },
            }),
            y = h.props;
          Ar(y, h.opts.specialEasing);
          for (; u < a; u++) {
            r = le.prefilters[u].call(h, e, y, h.opts);
            if (r) {
              if (O(r.stop)) {
                i._queueHooks(h.elem, h.opts.queue).stop = r.stop.bind(r);
              }
              return r;
            }
          }
          i.map(y, An, h);
          if (O(h.opts.start)) {
            h.opts.start.call(e, h);
          }
          h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always);
          i.fx.timer(i.extend(f, { elem: e, anim: h, queue: h.opts.queue }));
          return h;
        }
        i.Animation = i.extend(le, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                sn(n.elem, e, Ve.exec(t), n);
                return n;
              },
            ],
          },
          tweener: function (e, t) {
            if (O(e)) {
              t = e;
              e = ["*"];
            } else {
              e = e.match(he);
            }
            var n,
              r = 0,
              o = e.length;
            for (; r < o; r++) {
              n = e[r];
              le.tweeners[n] = le.tweeners[n] || [];
              le.tweeners[n].unshift(t);
            }
          },
          prefilters: [Nr],
          prefilter: function (e, t) {
            if (t) {
              le.prefilters.unshift(e);
            } else {
              le.prefilters.push(e);
            }
          },
        });
        i.speed = function (e, t, n) {
          var r = e && typeof e === "object" ? i.extend({}, e) : { complete: n || (!n && t) || (O(e) && e), duration: e, easing: (n && t) || (t && !O(t) && t) };
          if (i.fx.off) {
            r.duration = 0;
          } else {
            if (typeof r.duration !== "number") {
              if (r.duration in i.fx.speeds) {
                r.duration = i.fx.speeds[r.duration];
              } else {
                r.duration = i.fx.speeds._default;
              }
            }
          }
          if (r.queue == null || r.queue === true) {
            r.queue = "fx";
          }
          r.old = r.complete;
          r.complete = function () {
            if (O(r.old)) {
              r.old.call(this);
            }
            if (r.queue) {
              i.dequeue(this, r.queue);
            }
          };
          return r;
        };
        i.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(at).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var o = i.isEmptyObject(e),
              u = i.speed(t, n, r),
              a = function () {
                var l = le(this, i.extend({}, e), u);
                if (o || A.get(this, "finish")) {
                  l.stop(true);
                }
              };
            a.finish = a;
            return o || u.queue === false ? this.each(a) : this.queue(u.queue, a);
          },
          stop: function (e, t, n) {
            var r = function (o) {
              var u = o.stop;
              delete o.stop;
              u(n);
            };
            if (typeof e !== "string") {
              n = t;
              t = e;
              e = void 0;
            }
            if (t) {
              this.queue(e || "fx", []);
            }
            return this.each(function () {
              var o = true,
                u = e != null && e + "queueHooks",
                a = i.timers,
                l = A.get(this);
              if (u) {
                if (l[u] && l[u].stop) {
                  r(l[u]);
                }
              } else {
                for (u in l) {
                  if (l[u] && l[u].stop && Er.test(u)) {
                    r(l[u]);
                  }
                }
              }
              for (u = a.length; u--; ) {
                if (a[u].elem === this && (e == null || a[u].queue === e)) {
                  a[u].anim.stop(n);
                  o = false;
                  a.splice(u, 1);
                }
              }
              if (o || !n) {
                i.dequeue(this, e);
              }
            });
          },
          finish: function (e) {
            if (e !== false) {
              e = e || "fx";
            }
            return this.each(function () {
              var t,
                n = A.get(this),
                r = n[e + "queue"],
                o = n[e + "queueHooks"],
                u = i.timers,
                a = r ? r.length : 0;
              n.finish = true;
              i.queue(this, e, []);
              if (o && o.stop) {
                o.stop.call(this, true);
              }
              for (t = u.length; t--; ) {
                if (u[t].elem === this && u[t].queue === e) {
                  u[t].anim.stop(true);
                  u.splice(t, 1);
                }
              }
              for (t = 0; t < a; t++) {
                if (r[t] && r[t].finish) {
                  r[t].finish.call(this);
                }
              }
              delete n.finish;
            });
          },
        });
        i.each(["toggle", "show", "hide"], function (e, t) {
          var n = i.fn[t];
          i.fn[t] = function (r, o, u) {
            return r == null || typeof r === "boolean" ? n.apply(this, arguments) : this.animate(lt(t, true), r, o, u);
          };
        });
        i.each(
          { slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } },
          function (e, t) {
            i.fn[e] = function (n, r, o) {
              return this.animate(t, n, r, o);
            };
          }
        );
        i.timers = [];
        i.fx.tick = function () {
          var e,
            t = 0,
            n = i.timers;
          Be = Date.now();
          for (; t < n.length; t++) {
            e = n[t];
            if (!e() && n[t] === e) {
              n.splice(t--, 1);
            }
          }
          if (!n.length) {
            i.fx.stop();
          }
          Be = void 0;
        };
        i.fx.timer = function (e) {
          i.timers.push(e);
          i.fx.start();
        };
        i.fx.interval = 13;
        i.fx.start = function () {
          if (ct) {
            return;
          }
          ct = true;
          jt();
        };
        i.fx.stop = function () {
          ct = null;
        };
        i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
        i.fn.delay = function (e, t) {
          e = i.fx ? i.fx.speeds[e] || e : e;
          t = t || "fx";
          return this.queue(t, function (n, r) {
            var o = _.setTimeout(n, e);
            r.stop = function () {
              _.clearTimeout(o);
            };
          });
        };
        (function () {
          var e = H.createElement("input"),
            t = H.createElement("select"),
            n = t.appendChild(H.createElement("option"));
          e.type = "checkbox";
          I.checkOn = e.value !== "";
          I.optSelected = n.selected;
          e = H.createElement("input");
          e.value = "t";
          e.type = "radio";
          I.radioValue = e.value === "t";
        })();
        var Dn,
          Qe = i.expr.attrHandle;
        i.fn.extend({
          attr: function (e, t) {
            return ve(this, i.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              i.removeAttr(this, e);
            });
          },
        });
        i.extend({
          attr: function (e, t, n) {
            var r,
              o,
              u = e.nodeType;
            if (u === 3 || u === 8 || u === 2) {
              return;
            }
            if (typeof e.getAttribute === "undefined") {
              return i.prop(e, t, n);
            }
            if (u !== 1 || !i.isXMLDoc(e)) {
              o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? Dn : void 0);
            }
            if (n !== void 0) {
              if (n === null) {
                i.removeAttr(e, t);
                return;
              }
              if (o && "set" in o && (r = o.set(e, n, t)) !== void 0) {
                return r;
              }
              e.setAttribute(t, n + "");
              return n;
            }
            if (o && "get" in o && (r = o.get(e, t)) !== null) {
              return r;
            }
            r = i.find.attr(e, t);
            return r == null ? void 0 : r;
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!I.radioValue && t === "radio" && se(e, "input")) {
                  var n = e.value;
                  e.setAttribute("type", t);
                  if (n) {
                    e.value = n;
                  }
                  return t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              o = t && t.match(he);
            if (o && e.nodeType === 1) {
              while ((n = o[r++])) {
                e.removeAttribute(n);
              }
            }
          },
        });
        Dn = {
          set: function (e, t, n) {
            if (t === false) {
              i.removeAttr(e, n);
            } else {
              e.setAttribute(n, n);
            }
            return n;
          },
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = Qe[t] || i.find.attr;
          Qe[t] = function (r, o, u) {
            var a,
              l,
              f = o.toLowerCase();
            if (!u) {
              l = Qe[f];
              Qe[f] = a;
              a = n(r, o, u) != null ? f : null;
              Qe[f] = l;
            }
            return a;
          };
        });
        var Dr = /^(?:input|select|textarea|button)$/i,
          kr = /^(?:a|area)$/i;
        i.fn.extend({
          prop: function (e, t) {
            return ve(this, i.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[i.propFix[e] || e];
            });
          },
        });
        i.extend({
          prop: function (e, t, n) {
            var r,
              o,
              u = e.nodeType;
            if (u === 3 || u === 8 || u === 2) {
              return;
            }
            if (u !== 1 || !i.isXMLDoc(e)) {
              t = i.propFix[t] || t;
              o = i.propHooks[t];
            }
            if (n !== void 0) {
              if (o && "set" in o && (r = o.set(e, n, t)) !== void 0) {
                return r;
              }
              return (e[t] = n);
            }
            if (o && "get" in o && (r = o.get(e, t)) !== null) {
              return r;
            }
            return e[t];
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = i.find.attr(e, "tabindex");
                if (t) {
                  return parseInt(t, 10);
                }
                if (Dr.test(e.nodeName) || (kr.test(e.nodeName) && e.href)) {
                  return 0;
                }
                return -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        });
        if (!I.optSelected) {
          i.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              if (t && t.parentNode) {
                t.parentNode.selectedIndex;
              }
              return null;
            },
            set: function (e) {
              var t = e.parentNode;
              if (t) {
                t.selectedIndex;
                if (t.parentNode) {
                  t.parentNode.selectedIndex;
                }
              }
            },
          };
        }
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          i.propFix[this.toLowerCase()] = this;
        });
        function Ne(e) {
          var t = e.match(he) || [];
          return t.join(" ");
        }
        function Ae(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function qt(e) {
          if (Array.isArray(e)) {
            return e;
          }
          if (typeof e === "string") {
            return e.match(he) || [];
          }
          return [];
        }
        i.fn.extend({
          addClass: function (e) {
            var t, n, r, o, u, a;
            if (O(e)) {
              return this.each(function (l) {
                i(this).addClass(e.call(this, l, Ae(this)));
              });
            }
            t = qt(e);
            if (t.length) {
              return this.each(function () {
                r = Ae(this);
                n = this.nodeType === 1 && " " + Ne(r) + " ";
                if (n) {
                  for (u = 0; u < t.length; u++) {
                    o = t[u];
                    if (n.indexOf(" " + o + " ") < 0) {
                      n += o + " ";
                    }
                  }
                  a = Ne(n);
                  if (r !== a) {
                    this.setAttribute("class", a);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function (e) {
            var t, n, r, o, u, a;
            if (O(e)) {
              return this.each(function (l) {
                i(this).removeClass(e.call(this, l, Ae(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            t = qt(e);
            if (t.length) {
              return this.each(function () {
                r = Ae(this);
                n = this.nodeType === 1 && " " + Ne(r) + " ";
                if (n) {
                  for (u = 0; u < t.length; u++) {
                    o = t[u];
                    while (n.indexOf(" " + o + " ") > -1) {
                      n = n.replace(" " + o + " ", " ");
                    }
                  }
                  a = Ne(n);
                  if (r !== a) {
                    this.setAttribute("class", a);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function (e, t) {
            var n,
              r,
              o,
              u,
              a = typeof e,
              l = a === "string" || Array.isArray(e);
            if (O(e)) {
              return this.each(function (f) {
                i(this).toggleClass(e.call(this, f, Ae(this), t), t);
              });
            }
            if (typeof t === "boolean" && l) {
              return t ? this.addClass(e) : this.removeClass(e);
            }
            n = qt(e);
            return this.each(function () {
              if (l) {
                u = i(this);
                for (o = 0; o < n.length; o++) {
                  r = n[o];
                  if (u.hasClass(r)) {
                    u.removeClass(r);
                  } else {
                    u.addClass(r);
                  }
                }
              } else if (e === void 0 || a === "boolean") {
                r = Ae(this);
                if (r) {
                  A.set(this, "__className__", r);
                }
                if (this.setAttribute) {
                  this.setAttribute("class", r || e === false ? "" : A.get(this, "__className__") || "");
                }
              }
            });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            t = " " + e + " ";
            while ((n = this[r++])) {
              if (n.nodeType === 1 && (" " + Ne(Ae(n)) + " ").indexOf(t) > -1) {
                return true;
              }
            }
            return false;
          },
        });
        var jr = /\r/g;
        i.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              o = this[0];
            if (!arguments.length) {
              if (o) {
                t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()];
                if (t && "get" in t && (n = t.get(o, "value")) !== void 0) {
                  return n;
                }
                n = o.value;
                if (typeof n === "string") {
                  return n.replace(jr, "");
                }
                return n == null ? "" : n;
              }
              return;
            }
            r = O(e);
            return this.each(function (u) {
              var a;
              if (this.nodeType !== 1) {
                return;
              }
              if (r) {
                a = e.call(this, u, i(this).val());
              } else {
                a = e;
              }
              if (a == null) {
                a = "";
              } else if (typeof a === "number") {
                a += "";
              } else if (Array.isArray(a)) {
                a = i.map(a, function (l) {
                  return l == null ? "" : l + "";
                });
              }
              t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()];
              if (!t || !("set" in t) || t.set(this, a, "value") === void 0) {
                this.value = a;
              }
            });
          },
        });
        i.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = i.find.attr(e, "value");
                return t != null ? t : Ne(i.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o = e.options,
                  u = e.selectedIndex,
                  a = e.type === "select-one",
                  l = a ? null : [],
                  f = a ? u + 1 : o.length;
                if (u < 0) {
                  r = f;
                } else {
                  r = a ? u : 0;
                }
                for (; r < f; r++) {
                  n = o[r];
                  if ((n.selected || r === u) && !n.disabled && (!n.parentNode.disabled || !se(n.parentNode, "optgroup"))) {
                    t = i(n).val();
                    if (a) {
                      return t;
                    }
                    l.push(t);
                  }
                }
                return l;
              },
              set: function (e, t) {
                var n,
                  r,
                  o = e.options,
                  u = i.makeArray(t),
                  a = o.length;
                while (a--) {
                  r = o[a];
                  if ((r.selected = i.inArray(i.valHooks.option.get(r), u) > -1)) {
                    n = true;
                  }
                }
                if (!n) {
                  e.selectedIndex = -1;
                }
                return u;
              },
            },
          },
        });
        i.each(["radio", "checkbox"], function () {
          i.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) {
                return (e.checked = i.inArray(i(e).val(), t) > -1);
              }
            },
          };
          if (!I.checkOn) {
            i.valHooks[this].get = function (e) {
              return e.getAttribute("value") === null ? "on" : e.value;
            };
          }
        });
        I.focusin = "onfocusin" in _;
        var kn = /^(?:focusinfocus|focusoutblur)$/,
          jn = function (e) {
            e.stopPropagation();
          };
        i.extend(i.event, {
          trigger: function (e, t, n, r) {
            var o,
              u,
              a,
              l,
              f,
              h,
              y,
              x,
              g = [n || H],
              v = it.call(e, "type") ? e.type : e,
              S = it.call(e, "namespace") ? e.namespace.split(".") : [];
            u = x = a = n = n || H;
            if (n.nodeType === 3 || n.nodeType === 8) {
              return;
            }
            if (kn.test(v + i.event.triggered)) {
              return;
            }
            if (v.indexOf(".") > -1) {
              S = v.split(".");
              v = S.shift();
              S.sort();
            }
            f = v.indexOf(":") < 0 && "on" + v;
            e = e[i.expando] ? e : new i.Event(v, typeof e === "object" && e);
            e.isTrigger = r ? 2 : 3;
            e.namespace = S.join(".");
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + S.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            e.result = void 0;
            if (!e.target) {
              e.target = n;
            }
            t = t == null ? [e] : i.makeArray(t, [e]);
            y = i.event.special[v] || {};
            if (!r && y.trigger && y.trigger.apply(n, t) === false) {
              return;
            }
            if (!r && !y.noBubble && !_e(n)) {
              l = y.delegateType || v;
              if (!kn.test(l + v)) {
                u = u.parentNode;
              }
              for (; u; u = u.parentNode) {
                g.push(u);
                a = u;
              }
              if (a === (n.ownerDocument || H)) {
                g.push(a.defaultView || a.parentWindow || _);
              }
            }
            o = 0;
            while ((u = g[o++]) && !e.isPropagationStopped()) {
              x = u;
              e.type = o > 1 ? l : y.bindType || v;
              h = (A.get(u, "events") || Object.create(null))[e.type] && A.get(u, "handle");
              if (h) {
                h.apply(u, t);
              }
              h = f && u[f];
              if (h && h.apply && ze(u)) {
                e.result = h.apply(u, t);
                if (e.result === false) {
                  e.preventDefault();
                }
              }
            }
            e.type = v;
            if (!r && !e.isDefaultPrevented()) {
              if ((!y._default || y._default.apply(g.pop(), t) === false) && ze(n)) {
                if (f && O(n[v]) && !_e(n)) {
                  a = n[f];
                  if (a) {
                    n[f] = null;
                  }
                  i.event.triggered = v;
                  if (e.isPropagationStopped()) {
                    x.addEventListener(v, jn);
                  }
                  n[v]();
                  if (e.isPropagationStopped()) {
                    x.removeEventListener(v, jn);
                  }
                  i.event.triggered = void 0;
                  if (a) {
                    n[f] = a;
                  }
                }
              }
            }
            return e.result;
          },
          simulate: function (e, t, n) {
            var r = i.extend(new i.Event(), n, { type: e, isSimulated: true });
            i.event.trigger(r, null, t);
          },
        });
        i.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              i.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) {
              return i.event.trigger(e, t, n, true);
            }
          },
        });
        if (!I.focusin) {
          i.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (r) {
              i.event.simulate(t, r.target, i.event.fix(r));
            };
            i.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  o = A.access(r, t);
                if (!o) {
                  r.addEventListener(e, n, true);
                }
                A.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  o = A.access(r, t) - 1;
                if (!o) {
                  r.removeEventListener(e, n, true);
                  A.remove(r, t);
                } else {
                  A.access(r, t, o);
                }
              },
            };
          });
        }
        var Ye = _.location;
        var qn = { guid: Date.now() };
        var Lt = /\?/;
        i.parseXML = function (e) {
          var t, n;
          if (!e || typeof e !== "string") {
            return null;
          }
          try {
            t = new _.DOMParser().parseFromString(e, "text/xml");
          } catch (r) {}
          n = t && t.getElementsByTagName("parsererror")[0];
          if (!t || n) {
            i.error(
              "Invalid XML: " +
                (n
                  ? i
                      .map(n.childNodes, function (r) {
                        return r.textContent;
                      })
                      .join("\n")
                  : e)
            );
          }
          return t;
        };
        var qr = /\[\]$/,
          Ln = /\r?\n/g,
          Lr = /^(?:submit|button|image|reset|file)$/i,
          _r = /^(?:input|select|textarea|keygen)/i;
        function _t(e, t, n, r) {
          var o;
          if (Array.isArray(t)) {
            i.each(t, function (u, a) {
              if (n || qr.test(e)) {
                r(e, a);
              } else {
                _t(e + "[" + (typeof a === "object" && a != null ? u : "") + "]", a, n, r);
              }
            });
          } else if (!n && Oe(t) === "object") {
            for (o in t) {
              _t(e + "[" + o + "]", t[o], n, r);
            }
          } else {
            r(e, t);
          }
        }
        i.param = function (e, t) {
          var n,
            r = [],
            o = function (u, a) {
              var l = O(a) ? a() : a;
              r[r.length] = encodeURIComponent(u) + "=" + encodeURIComponent(l == null ? "" : l);
            };
          if (e == null) {
            return "";
          }
          if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e))) {
            i.each(e, function () {
              o(this.name, this.value);
            });
          } else {
            for (n in e) {
              _t(n, e[n], t, o);
            }
          }
          return r.join("&");
        };
        i.fn.extend({
          serialize: function () {
            return i.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = i.prop(this, "elements");
              return e ? i.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return this.name && !i(this).is(":disabled") && _r.test(this.nodeName) && !Lr.test(e) && (this.checked || !Xe.test(e));
              })
              .map(function (e, t) {
                var n = i(this).val();
                if (n == null) {
                  return null;
                }
                if (Array.isArray(n)) {
                  return i.map(n, function (r) {
                    return { name: t.name, value: r.replace(Ln, "\r\n") };
                  });
                }
                return { name: t.name, value: n.replace(Ln, "\r\n") };
              })
              .get();
          },
        });
        var Or = /%20/g,
          Pr = /#.*$/,
          Hr = /([?&])_=[^&]*/,
          Mr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ir = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          Rr = /^(?:GET|HEAD)$/,
          Wr = /^\/\//,
          _n = {},
          Ot = {},
          On = "*/".concat("*"),
          Pt = H.createElement("a");
        Pt.href = Ye.href;
        function Pn(e) {
          return function (t, n) {
            if (typeof t !== "string") {
              n = t;
              t = "*";
            }
            var r,
              o = 0,
              u = t.toLowerCase().match(he) || [];
            if (O(n)) {
              while ((r = u[o++])) {
                if (r[0] === "+") {
                  r = r.slice(1) || "*";
                  (e[r] = e[r] || []).unshift(n);
                } else {
                  (e[r] = e[r] || []).push(n);
                }
              }
            }
          };
        }
        function Hn(e, t, n, r) {
          var o = {},
            u = e === Ot;
          function a(l) {
            var f;
            o[l] = true;
            i.each(e[l] || [], function (h, y) {
              var x = y(t, n, r);
              if (typeof x === "string" && !u && !o[x]) {
                t.dataTypes.unshift(x);
                a(x);
                return false;
              } else if (u) {
                return !(f = x);
              }
            });
            return f;
          }
          return a(t.dataTypes[0]) || (!o["*"] && a("*"));
        }
        function Ht(e, t) {
          var n,
            r,
            o = i.ajaxSettings.flatOptions || {};
          for (n in t) {
            if (t[n] !== void 0) {
              (o[n] ? e : r || (r = {}))[n] = t[n];
            }
          }
          if (r) {
            i.extend(true, e, r);
          }
          return e;
        }
        function Fr(e, t, n) {
          var r,
            o,
            u,
            a,
            l = e.contents,
            f = e.dataTypes;
          while (f[0] === "*") {
            f.shift();
            if (r === void 0) {
              r = e.mimeType || t.getResponseHeader("Content-Type");
            }
          }
          if (r) {
            for (o in l) {
              if (l[o] && l[o].test(r)) {
                f.unshift(o);
                break;
              }
            }
          }
          if (f[0] in n) {
            u = f[0];
          } else {
            for (o in n) {
              if (!f[0] || e.converters[o + " " + f[0]]) {
                u = o;
                break;
              }
              if (!a) {
                a = o;
              }
            }
            u = u || a;
          }
          if (u) {
            if (u !== f[0]) {
              f.unshift(u);
            }
            return n[u];
          }
        }
        function Br(e, t, n, r) {
          var o,
            u,
            a,
            l,
            f,
            h = {},
            y = e.dataTypes.slice();
          if (y[1]) {
            for (a in e.converters) {
              h[a.toLowerCase()] = e.converters[a];
            }
          }
          u = y.shift();
          while (u) {
            if (e.responseFields[u]) {
              n[e.responseFields[u]] = t;
            }
            if (!f && r && e.dataFilter) {
              t = e.dataFilter(t, e.dataType);
            }
            f = u;
            u = y.shift();
            if (u) {
              if (u === "*") {
                u = f;
              } else if (f !== "*" && f !== u) {
                a = h[f + " " + u] || h["* " + u];
                if (!a) {
                  for (o in h) {
                    l = o.split(" ");
                    if (l[1] === u) {
                      a = h[f + " " + l[0]] || h["* " + l[0]];
                      if (a) {
                        if (a === true) {
                          a = h[o];
                        } else if (h[o] !== true) {
                          u = l[0];
                          y.unshift(l[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (a !== true) {
                  if (a && e.throws) {
                    t = a(t);
                  } else {
                    try {
                      t = a(t);
                    } catch (x) {
                      return { state: "parsererror", error: a ? x : "No conversion from " + f + " to " + u };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: t };
        }
        i.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ye.href,
            type: "GET",
            isLocal: Ir.test(Ye.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": On, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": i.parseXML },
            flatOptions: { url: true, context: true },
          },
          ajaxSetup: function (e, t) {
            return t ? Ht(Ht(e, i.ajaxSettings), t) : Ht(i.ajaxSettings, e);
          },
          ajaxPrefilter: Pn(_n),
          ajaxTransport: Pn(Ot),
          ajax: function (e, t) {
            if (typeof e === "object") {
              t = e;
              e = void 0;
            }
            t = t || {};
            var n,
              r,
              o,
              u,
              a,
              l,
              f,
              h,
              y,
              x,
              g = i.ajaxSetup({}, t),
              v = g.context || g,
              S = g.context && (v.nodeType || v.jquery) ? i(v) : i.event,
              L = i.Deferred(),
              E = i.Callbacks("once memory"),
              X = g.statusCode || {},
              U = {},
              ne = {},
              W = "canceled",
              q = {
                readyState: 0,
                getResponseHeader: function (M) {
                  var z;
                  if (f) {
                    if (!u) {
                      u = {};
                      while ((z = Mr.exec(o))) {
                        u[z[1].toLowerCase() + " "] = (u[z[1].toLowerCase() + " "] || []).concat(z[2]);
                      }
                    }
                    z = u[M.toLowerCase() + " "];
                  }
                  return z == null ? null : z.join(", ");
                },
                getAllResponseHeaders: function () {
                  return f ? o : null;
                },
                setRequestHeader: function (M, z) {
                  if (f == null) {
                    M = ne[M.toLowerCase()] = ne[M.toLowerCase()] || M;
                    U[M] = z;
                  }
                  return this;
                },
                overrideMimeType: function (M) {
                  if (f == null) {
                    g.mimeType = M;
                  }
                  return this;
                },
                statusCode: function (M) {
                  var z;
                  if (M) {
                    if (f) {
                      q.always(M[q.status]);
                    } else {
                      for (z in M) {
                        X[z] = [X[z], M[z]];
                      }
                    }
                  }
                  return this;
                },
                abort: function (M) {
                  var z = M || W;
                  if (n) {
                    n.abort(z);
                  }
                  ee(0, z);
                  return this;
                },
              };
            L.promise(q);
            g.url = ((e || g.url || Ye.href) + "").replace(Wr, Ye.protocol + "//");
            g.type = t.method || t.type || g.method || g.type;
            g.dataTypes = (g.dataType || "*").toLowerCase().match(he) || [""];
            if (g.crossDomain == null) {
              l = H.createElement("a");
              try {
                l.href = g.url;
                l.href = l.href;
                g.crossDomain = Pt.protocol + "//" + Pt.host !== l.protocol + "//" + l.host;
              } catch (M) {
                g.crossDomain = true;
              }
            }
            if (g.data && g.processData && typeof g.data !== "string") {
              g.data = i.param(g.data, g.traditional);
            }
            Hn(_n, g, t, q);
            if (f) {
              return q;
            }
            h = i.event && g.global;
            if (h && i.active++ === 0) {
              i.event.trigger("ajaxStart");
            }
            g.type = g.type.toUpperCase();
            g.hasContent = !Rr.test(g.type);
            r = g.url.replace(Pr, "");
            if (!g.hasContent) {
              x = g.url.slice(r.length);
              if (g.data && (g.processData || typeof g.data === "string")) {
                r += (Lt.test(r) ? "&" : "?") + g.data;
                delete g.data;
              }
              if (g.cache === false) {
                r = r.replace(Hr, "$1");
                x = (Lt.test(r) ? "&" : "?") + "_=" + qn.guid++ + x;
              }
              g.url = r + x;
            } else if (g.data && g.processData && (g.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              g.data = g.data.replace(Or, "+");
            }
            if (g.ifModified) {
              if (i.lastModified[r]) {
                q.setRequestHeader("If-Modified-Since", i.lastModified[r]);
              }
              if (i.etag[r]) {
                q.setRequestHeader("If-None-Match", i.etag[r]);
              }
            }
            if ((g.data && g.hasContent && g.contentType !== false) || t.contentType) {
              q.setRequestHeader("Content-Type", g.contentType);
            }
            q.setRequestHeader(
              "Accept",
              g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : g.accepts["*"]
            );
            for (y in g.headers) {
              q.setRequestHeader(y, g.headers[y]);
            }
            if (g.beforeSend && (g.beforeSend.call(v, q, g) === false || f)) {
              return q.abort();
            }
            W = "abort";
            E.add(g.complete);
            q.done(g.success);
            q.fail(g.error);
            n = Hn(Ot, g, t, q);
            if (!n) {
              ee(-1, "No Transport");
            } else {
              q.readyState = 1;
              if (h) {
                S.trigger("ajaxSend", [q, g]);
              }
              if (f) {
                return q;
              }
              if (g.async && g.timeout > 0) {
                a = _.setTimeout(function () {
                  q.abort("timeout");
                }, g.timeout);
              }
              try {
                f = false;
                n.send(U, ee);
              } catch (M) {
                if (f) {
                  throw M;
                }
                ee(-1, M);
              }
            }
            function ee(M, z, Je, dt) {
              var re,
                De,
                ke,
                te,
                Ce,
                ce = z;
              if (f) {
                return;
              }
              f = true;
              if (a) {
                _.clearTimeout(a);
              }
              n = void 0;
              o = dt || "";
              q.readyState = M > 0 ? 4 : 0;
              re = (M >= 200 && M < 300) || M === 304;
              if (Je) {
                te = Fr(g, q, Je);
              }
              if (!re && i.inArray("script", g.dataTypes) > -1 && i.inArray("json", g.dataTypes) < 0) {
                g.converters["text script"] = function () {};
              }
              te = Br(g, te, q, re);
              if (re) {
                if (g.ifModified) {
                  Ce = q.getResponseHeader("Last-Modified");
                  if (Ce) {
                    i.lastModified[r] = Ce;
                  }
                  Ce = q.getResponseHeader("etag");
                  if (Ce) {
                    i.etag[r] = Ce;
                  }
                }
                if (M === 204 || g.type === "HEAD") {
                  ce = "nocontent";
                } else if (M === 304) {
                  ce = "notmodified";
                } else {
                  ce = te.state;
                  De = te.data;
                  ke = te.error;
                  re = !ke;
                }
              } else {
                ke = ce;
                if (M || !ce) {
                  ce = "error";
                  if (M < 0) {
                    M = 0;
                  }
                }
              }
              q.status = M;
              q.statusText = (z || ce) + "";
              if (re) {
                L.resolveWith(v, [De, ce, q]);
              } else {
                L.rejectWith(v, [q, ce, ke]);
              }
              q.statusCode(X);
              X = void 0;
              if (h) {
                S.trigger(re ? "ajaxSuccess" : "ajaxError", [q, g, re ? De : ke]);
              }
              E.fireWith(v, [q, ce]);
              if (h) {
                S.trigger("ajaxComplete", [q, g]);
                if (!--i.active) {
                  i.event.trigger("ajaxStop");
                }
              }
            }
            return q;
          },
          getJSON: function (e, t, n) {
            return i.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return i.get(e, void 0, t, "script");
          },
        });
        i.each(["get", "post"], function (e, t) {
          i[t] = function (n, r, o, u) {
            if (O(r)) {
              u = u || o;
              o = r;
              r = void 0;
            }
            return i.ajax(i.extend({ url: n, type: t, dataType: u, data: r, success: o }, i.isPlainObject(n) && n));
          };
        });
        i.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers) {
            if (t.toLowerCase() === "content-type") {
              e.contentType = e.headers[t] || "";
            }
          }
        });
        i._evalUrl = function (e, t, n) {
          return i.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: { "text script": function () {} },
            dataFilter: function (r) {
              i.globalEval(r, t, n);
            },
          });
        };
        i.fn.extend({
          wrapAll: function (e) {
            var t;
            if (this[0]) {
              if (O(e)) {
                e = e.call(this[0]);
              }
              t = i(e, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                t.insertBefore(this[0]);
              }
              t.map(function () {
                var n = this;
                while (n.firstElementChild) {
                  n = n.firstElementChild;
                }
                return n;
              }).append(this);
            }
            return this;
          },
          wrapInner: function (e) {
            if (O(e)) {
              return this.each(function (t) {
                i(this).wrapInner(e.call(this, t));
              });
            }
            return this.each(function () {
              var t = i(this),
                n = t.contents();
              if (n.length) {
                n.wrapAll(e);
              } else {
                t.append(e);
              }
            });
          },
          wrap: function (e) {
            var t = O(e);
            return this.each(function (n) {
              i(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            this.parent(e)
              .not("body")
              .each(function () {
                i(this).replaceWith(this.childNodes);
              });
            return this;
          },
        });
        i.expr.pseudos.hidden = function (e) {
          return !i.expr.pseudos.visible(e);
        };
        i.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        };
        i.ajaxSettings.xhr = function () {
          try {
            return new _.XMLHttpRequest();
          } catch (e) {}
        };
        var $r = { 0: 200, 1223: 204 },
          Ke = i.ajaxSettings.xhr();
        I.cors = !!Ke && "withCredentials" in Ke;
        I.ajax = Ke = !!Ke;
        i.ajaxTransport(function (e) {
          var t, n;
          if (I.cors || (Ke && !e.crossDomain)) {
            return {
              send: function (r, o) {
                var u,
                  a = e.xhr();
                a.open(e.type, e.url, e.async, e.username, e.password);
                if (e.xhrFields) {
                  for (u in e.xhrFields) {
                    a[u] = e.xhrFields[u];
                  }
                }
                if (e.mimeType && a.overrideMimeType) {
                  a.overrideMimeType(e.mimeType);
                }
                if (!e.crossDomain && !r["X-Requested-With"]) {
                  r["X-Requested-With"] = "XMLHttpRequest";
                }
                for (u in r) {
                  a.setRequestHeader(u, r[u]);
                }
                t = function (l) {
                  return function () {
                    if (t) {
                      t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null;
                      if (l === "abort") {
                        a.abort();
                      } else if (l === "error") {
                        if (typeof a.status !== "number") {
                          o(0, "error");
                        } else {
                          o(a.status, a.statusText);
                        }
                      } else {
                        o(
                          $r[a.status] || a.status,
                          a.statusText,
                          (a.responseType || "text") !== "text" || typeof a.responseText !== "string" ? { binary: a.response } : { text: a.responseText },
                          a.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                a.onload = t();
                n = a.onerror = a.ontimeout = t("error");
                if (a.onabort !== void 0) {
                  a.onabort = n;
                } else {
                  a.onreadystatechange = function () {
                    if (a.readyState === 4) {
                      _.setTimeout(function () {
                        if (t) {
                          n();
                        }
                      });
                    }
                  };
                }
                t = t("abort");
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (l) {
                  if (t) {
                    throw l;
                  }
                }
              },
              abort: function () {
                if (t) {
                  t();
                }
              },
            };
          }
        });
        i.ajaxPrefilter(function (e) {
          if (e.crossDomain) {
            e.contents.script = false;
          }
        });
        i.ajaxSetup({
          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              i.globalEval(e);
              return e;
            },
          },
        });
        i.ajaxPrefilter("script", function (e) {
          if (e.cache === void 0) {
            e.cache = false;
          }
          if (e.crossDomain) {
            e.type = "GET";
          }
        });
        i.ajaxTransport("script", function (e) {
          if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
              send: function (r, o) {
                t = i("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (u) {
                      t.remove();
                      n = null;
                      if (u) {
                        o(u.type === "error" ? 404 : 200, u.type);
                      }
                    })
                  );
                H.head.appendChild(t[0]);
              },
              abort: function () {
                if (n) {
                  n();
                }
              },
            };
          }
        });
        var Mn = [],
          Mt = /(=)\?(?=&|$)|\?\?/;
        i.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Mn.pop() || i.expando + "_" + qn.guid++;
            this[e] = true;
            return e;
          },
        });
        i.ajaxPrefilter("json jsonp", function (e, t, n) {
          var r,
            o,
            u,
            a =
              e.jsonp !== false &&
              (Mt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Mt.test(e.data) && "data");
          if (a || e.dataTypes[0] === "jsonp") {
            r = e.jsonpCallback = O(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
            if (a) {
              e[a] = e[a].replace(Mt, "$1" + r);
            } else if (e.jsonp !== false) {
              e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r;
            }
            e.converters["script json"] = function () {
              if (!u) {
                i.error(r + " was not called");
              }
              return u[0];
            };
            e.dataTypes[0] = "json";
            o = _[r];
            _[r] = function () {
              u = arguments;
            };
            n.always(function () {
              if (o === void 0) {
                i(_).removeProp(r);
              } else {
                _[r] = o;
              }
              if (e[r]) {
                e.jsonpCallback = t.jsonpCallback;
                Mn.push(r);
              }
              if (u && O(o)) {
                o(u[0]);
              }
              u = o = void 0;
            });
            return "script";
          }
        });
        I.createHTMLDocument = (function () {
          var e = H.implementation.createHTMLDocument("").body;
          e.innerHTML = "<form></form><form></form>";
          return e.childNodes.length === 2;
        })();
        i.parseHTML = function (e, t, n) {
          if (typeof e !== "string") {
            return [];
          }
          if (typeof t === "boolean") {
            n = t;
            t = false;
          }
          var r, o, u;
          if (!t) {
            if (I.createHTMLDocument) {
              t = H.implementation.createHTMLDocument("");
              r = t.createElement("base");
              r.href = H.location.href;
              t.head.appendChild(r);
            } else {
              t = H;
            }
          }
          o = tn.exec(e);
          u = !n && [];
          if (o) {
            return [t.createElement(o[1])];
          }
          o = dn([e], t, u);
          if (u && u.length) {
            i(u).remove();
          }
          return i.merge([], o.childNodes);
        };
        i.fn.load = function (e, t, n) {
          var r,
            o,
            u,
            a = this,
            l = e.indexOf(" ");
          if (l > -1) {
            r = Ne(e.slice(l));
            e = e.slice(0, l);
          }
          if (O(t)) {
            n = t;
            t = void 0;
          } else if (t && typeof t === "object") {
            o = "POST";
          }
          if (a.length > 0) {
            i.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function (f) {
                u = arguments;
                a.html(r ? i("<div>").append(i.parseHTML(f)).find(r) : f);
              })
              .always(
                n &&
                  function (f, h) {
                    a.each(function () {
                      n.apply(this, u || [f.responseText, h, f]);
                    });
                  }
              );
          }
          return this;
        };
        i.expr.pseudos.animated = function (e) {
          return i.grep(i.timers, function (t) {
            return e === t.elem;
          }).length;
        };
        i.offset = {
          setOffset: function (e, t, n) {
            var r,
              o,
              u,
              a,
              l,
              f,
              h,
              y = i.css(e, "position"),
              x = i(e),
              g = {};
            if (y === "static") {
              e.style.position = "relative";
            }
            l = x.offset();
            u = i.css(e, "top");
            f = i.css(e, "left");
            h = (y === "absolute" || y === "fixed") && (u + f).indexOf("auto") > -1;
            if (h) {
              r = x.position();
              a = r.top;
              o = r.left;
            } else {
              a = parseFloat(u) || 0;
              o = parseFloat(f) || 0;
            }
            if (O(t)) {
              t = t.call(e, n, i.extend({}, l));
            }
            if (t.top != null) {
              g.top = t.top - l.top + a;
            }
            if (t.left != null) {
              g.left = t.left - l.left + o;
            }
            if ("using" in t) {
              t.using.call(e, g);
            } else {
              x.css(g);
            }
          },
        };
        i.fn.extend({
          offset: function (e) {
            if (arguments.length) {
              return e === void 0
                ? this
                : this.each(function (o) {
                    i.offset.setOffset(this, e, o);
                  });
            }
            var t,
              n,
              r = this[0];
            if (!r) {
              return;
            }
            if (!r.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            t = r.getBoundingClientRect();
            n = r.ownerDocument.defaultView;
            return { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset };
          },
          position: function () {
            if (!this[0]) {
              return;
            }
            var e,
              t,
              n,
              r = this[0],
              o = { top: 0, left: 0 };
            if (i.css(r, "position") === "fixed") {
              t = r.getBoundingClientRect();
            } else {
              t = this.offset();
              n = r.ownerDocument;
              e = r.offsetParent || n.documentElement;
              while (e && (e === n.body || e === n.documentElement) && i.css(e, "position") === "static") {
                e = e.parentNode;
              }
              if (e && e !== r && e.nodeType === 1) {
                o = i(e).offset();
                o.top += i.css(e, "borderTopWidth", true);
                o.left += i.css(e, "borderLeftWidth", true);
              }
            }
            return { top: t.top - o.top - i.css(r, "marginTop", true), left: t.left - o.left - i.css(r, "marginLeft", true) };
          },
          offsetParent: function () {
            return this.map(function () {
              var e = this.offsetParent;
              while (e && i.css(e, "position") === "static") {
                e = e.offsetParent;
              }
              return e || Ee;
            });
          },
        });
        i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
          var n = "pageYOffset" === t;
          i.fn[e] = function (r) {
            return ve(
              this,
              function (o, u, a) {
                var l;
                if (_e(o)) {
                  l = o;
                } else if (o.nodeType === 9) {
                  l = o.defaultView;
                }
                if (a === void 0) {
                  return l ? l[t] : o[u];
                }
                if (l) {
                  l.scrollTo(!n ? a : l.pageXOffset, n ? a : l.pageYOffset);
                } else {
                  o[u] = a;
                }
              },
              e,
              r,
              arguments.length
            );
          };
        });
        i.each(["top", "left"], function (e, t) {
          i.cssHooks[t] = mn(I.pixelPosition, function (n, r) {
            if (r) {
              r = Ge(n, t);
              return Nt.test(r) ? i(n).position()[t] + "px" : r;
            }
          });
        });
        i.each({ Height: "height", Width: "width" }, function (e, t) {
          i.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
            i.fn[r] = function (o, u) {
              var a = arguments.length && (n || typeof o !== "boolean"),
                l = n || (o === true || u === true ? "margin" : "border");
              return ve(
                this,
                function (f, h, y) {
                  var x;
                  if (_e(f)) {
                    return r.indexOf("outer") === 0 ? f["inner" + e] : f.document.documentElement["client" + e];
                  }
                  if (f.nodeType === 9) {
                    x = f.documentElement;
                    return Math.max(f.body["scroll" + e], x["scroll" + e], f.body["offset" + e], x["offset" + e], x["client" + e]);
                  }
                  return y === void 0 ? i.css(f, h, l) : i.style(f, h, y, l);
                },
                t,
                a ? o : void 0,
                a
              );
            };
          });
        });
        i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          i.fn[t] = function (n) {
            return this.on(t, n);
          };
        });
        i.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        });
        i.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            i.fn[t] = function (n, r) {
              return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t);
            };
          }
        );
        var zr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        i.proxy = function (e, t) {
          var n, r, o;
          if (typeof t === "string") {
            n = e[t];
            t = e;
            e = n;
          }
          if (!O(e)) {
            return void 0;
          }
          r = Te.call(arguments, 2);
          o = function () {
            return e.apply(t || this, r.concat(Te.call(arguments)));
          };
          o.guid = e.guid = e.guid || i.guid++;
          return o;
        };
        i.holdReady = function (e) {
          if (e) {
            i.readyWait++;
          } else {
            i.ready(true);
          }
        };
        i.isArray = Array.isArray;
        i.parseJSON = JSON.parse;
        i.nodeName = se;
        i.isFunction = O;
        i.isWindow = _e;
        i.camelCase = ge;
        i.type = Oe;
        i.now = Date.now;
        i.isNumeric = function (e) {
          var t = i.type(e);
          return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
        };
        i.trim = function (e) {
          return e == null ? "" : (e + "").replace(zr, "$1");
        };
        if (true) {
          !((ue = []),
          (mt = function () {
            return i;
          }.apply(Y, ue)),
          mt !== void 0 && (V.exports = mt));
        }
        var Ur = _.jQuery,
          Vr = _.$;
        i.noConflict = function (e) {
          if (_.$ === i) {
            _.$ = Vr;
          }
          if (e && _.jQuery === i) {
            _.jQuery = Ur;
          }
          return i;
        };
        if (typeof $e === "undefined") {
          _.jQuery = _.$ = i;
        }
        return i;
      });
    },
  };
  var Vt = {};
  function ye(V) {
    var Y = Vt[V];
    if (Y !== void 0) {
      return Y.exports;
    }
    var ue = (Vt[V] = { exports: {} });
    Xn[V].call(ue.exports, ue, ue.exports, ye);
    return ue.exports;
  }
  (() => {
    ye.n = (V) => {
      var Y = V && V.__esModule ? () => V["default"] : () => V;
      ye.d(Y, { a: Y });
      return Y;
    };
  })();
  (() => {
    ye.d = (V, Y) => {
      for (var ue in Y) {
        if (ye.o(Y, ue) && !ye.o(V, ue)) {
          Object.defineProperty(V, ue, { enumerable: true, get: Y[ue] });
        }
      }
    };
  })();
  (() => {
    ye.o = (V, Y) => Object.prototype.hasOwnProperty.call(V, Y);
  })();
  var ai = {};
  (() => {
    "use strict";
    var V = ye(339);
    var Y = ye.n(V);
  })();
})();
