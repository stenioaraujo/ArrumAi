/******************************************
Slider
******************************************/
if (function(t) {
        "use strict"
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipetp.defaults, e), this.each(function() {
                var a = t(this),
                    n = a.data(P);
                n || (n = new i(this, e), a.data(P, n))
            })
        }

        function i(e, i) {
            function a(e) {
                if (!(dt() || t(e.target).closest(i.excludedElements, Bt).length > 0)) {
                    var a, n = e.originalEvent ? e.originalEvent : e,
                        r = n.touches,
                        o = r ? r[0] : n;
                    return Yt = b, r ? Vt = r.length : e.preventDefault(), jt = 0, Dt = null, Qt = null, Wt = 0, Ft = 0, Et = 0, Ht = 1, Nt = 0, qt = ft(), Xt = vt(), st(), !r || Vt === i.fingers || i.fingers === w || X() ? (ut(0, o), Ut = Ot(), 2 == Vt && (ut(1, r[1]), Ft = Et = yt(qt[0].start, qt[1].start)), (i.swipeStatus || i.pinchStatus) && (a = j(n, Yt))) : a = !1, a === !1 ? (Yt = k, j(n, Yt), a) : (i.hold && (te = setTimeout(t.proxy(function() {
                        Bt.trigger("hold", [n.target]), i.hold && (a = i.hold.call(Bt, n, n.target))
                    }, this), i.longTapThreshold)), ht(!0), null)
                }
            }

            function C(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Yt !== T && Yt !== k && !lt()) {
                    var a, n = e.touches,
                        r = n ? n[0] : e,
                        o = pt(r);
                    if (Gt = Ot(), n && (Vt = n.length), i.hold && clearTimeout(te), Yt = x, 2 == Vt && (0 == Ft ? (ut(1, n[1]), Ft = Et = yt(qt[0].start, qt[1].start)) : (pt(n[1]), Et = yt(qt[0].end, qt[1].end), Qt = xt(qt[0].end, qt[1].end)), Ht = bt(Ft, Et), Nt = Math.abs(Ft - Et)), Vt === i.fingers || i.fingers === w || !n || X()) {
                        if (Dt = St(o.start, o.end), N(t, Dt), jt = Tt(o.start, o.end), Wt = wt(), gt(Dt, jt), (i.swipeStatus || i.pinchStatus) && (a = j(e, Yt)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                            var s = !0;
                            if (i.triggerOnTouchLeave) {
                                var l = Lt(this);
                                s = Pt(o.end, l)
                            }!i.triggerOnTouchEnd && s ? Yt = I(x) : i.triggerOnTouchLeave && !s && (Yt = I(T)), (Yt == k || Yt == T) && j(e, Yt)
                        }
                    } else Yt = k, j(e, Yt);
                    a === !1 && (Yt = k, j(e, Yt))
                }
            }

            function A(t) {
                var e = t.originalEvent ? t.originalEvent : t,
                    a = e.touches;
                return a && a.length ? (ot(), !0) : (lt() && (Vt = $t), Gt = Ot(), Wt = wt(), F() || !W() ? (Yt = k, j(e, Yt)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Yt === x ? (t.preventDefault(), Yt = T, j(e, Yt)) : !i.triggerOnTouchEnd && Z() ? (Yt = T, D(e, Yt, f)) : Yt === x && (Yt = k, j(e, Yt)), ht(!1), null)
            }

            function M() {
                Vt = 0, Gt = 0, Ut = 0, Ft = 0, Et = 0, Ht = 1, st(), ht(!1)
            }

            function z(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                i.triggerOnTouchLeave && (Yt = I(T), j(e, Yt))
            }

            function R() {
                Bt.unbind(At, a), Bt.unbind(It, M), Bt.unbind(Mt, C), Bt.unbind(zt, A), Rt && Bt.unbind(Rt, z), ht(!1)
            }

            function I(t) {
                var e = t,
                    a = H(),
                    n = W(),
                    r = F();
                return !a || r ? e = k : !n || t != x || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !n && t == T && i.triggerOnTouchLeave && (e = k) : e = T, e
            }

            function j(t, e) {
                var i, a = t.touches;
                return q() || V() || B() || X() ? ((q() || V()) && (i = D(t, e, p)), (B() || X()) && i !== !1 && (i = D(t, e, c))) : nt() && i !== !1 ? i = D(t, e, g) : rt() && i !== !1 ? i = D(t, e, m) : at() && i !== !1 && (i = D(t, e, f)), e === k && M(t), e === T && (a ? a.length || M(t) : M(t)), i
            }

            function D(e, a, h) {
                var u;
                if (h == p) {
                    if (Bt.trigger("swipeStatus", [a, Dt || null, jt || 0, Wt || 0, Vt, qt]), i.swipeStatus && (u = i.swipeStatus.call(Bt, e, a, Dt || null, jt || 0, Wt || 0, Vt, qt), u === !1)) return !1;
                    if (a == T && Y()) {
                        if (Bt.trigger("swipe", [Dt, jt, Wt, Vt, qt]), i.swipe && (u = i.swipe.call(Bt, e, Dt, jt, Wt, Vt, qt), u === !1)) return !1;
                        switch (Dt) {
                            case n:
                                Bt.trigger("swipeLeft", [Dt, jt, Wt, Vt, qt]), i.swipeLeft && (u = i.swipeLeft.call(Bt, e, Dt, jt, Wt, Vt, qt));
                                break;
                            case r:
                                Bt.trigger("swipeRight", [Dt, jt, Wt, Vt, qt]), i.swipeRight && (u = i.swipeRight.call(Bt, e, Dt, jt, Wt, Vt, qt));
                                break;
                            case o:
                                Bt.trigger("swipeUp", [Dt, jt, Wt, Vt, qt]), i.swipeUp && (u = i.swipeUp.call(Bt, e, Dt, jt, Wt, Vt, qt));
                                break;
                            case s:
                                Bt.trigger("swipeDown", [Dt, jt, Wt, Vt, qt]), i.swipeDown && (u = i.swipeDown.call(Bt, e, Dt, jt, Wt, Vt, qt))
                        }
                    }
                }
                if (h == c) {
                    if (Bt.trigger("pinchStatus", [a, Qt || null, Nt || 0, Wt || 0, Vt, Ht, qt]), i.pinchStatus && (u = i.pinchStatus.call(Bt, e, a, Qt || null, Nt || 0, Wt || 0, Vt, Ht, qt), u === !1)) return !1;
                    if (a == T && Q()) switch (Qt) {
                        case l:
                            Bt.trigger("pinchIn", [Qt || null, Nt || 0, Wt || 0, Vt, Ht, qt]), i.pinchIn && (u = i.pinchIn.call(Bt, e, Qt || null, Nt || 0, Wt || 0, Vt, Ht, qt));
                            break;
                        case d:
                            Bt.trigger("pinchOut", [Qt || null, Nt || 0, Wt || 0, Vt, Ht, qt]), i.pinchOut && (u = i.pinchOut.call(Bt, e, Qt || null, Nt || 0, Wt || 0, Vt, Ht, qt))
                    }
                }
                return h == f ? (a === k || a === T) && (clearTimeout(Jt), clearTimeout(te), $() && !tt() ? (Kt = Ot(), Jt = setTimeout(t.proxy(function() {
                    Kt = null, Bt.trigger("tap", [e.target]), i.tap && (u = i.tap.call(Bt, e, e.target))
                }, this), i.doubleTapThreshold)) : (Kt = null, Bt.trigger("tap", [e.target]), i.tap && (u = i.tap.call(Bt, e, e.target)))) : h == g ? (a === k || a === T) && (clearTimeout(Jt), Kt = null, Bt.trigger("doubletap", [e.target]), i.doubleTap && (u = i.doubleTap.call(Bt, e, e.target))) : h == m && (a === k || a === T) && (clearTimeout(Jt), Kt = null, Bt.trigger("longtap", [e.target]), i.longTap && (u = i.longTap.call(Bt, e, e.target))), u
            }

            function W() {
                var t = !0;
                return null !== i.threshold && (t = jt >= i.threshold), t
            }

            function F() {
                var t = !1;
                return null !== i.cancelThreshold && null !== Dt && (t = mt(Dt) - jt >= i.cancelThreshold), t
            }

            function E() {
                return null !== i.pinchThreshold ? Nt >= i.pinchThreshold : !0
            }

            function H() {
                var t;
                return t = i.maxTimeThreshold && Wt >= i.maxTimeThreshold ? !1 : !0
            }

            function N(t, e) {
                if (i.preventDefaultEvents !== !1)
                    if (i.allowPageScroll === h) t.preventDefault();
                    else {
                        var a = i.allowPageScroll === u;
                        switch (e) {
                            case n:
                                (i.swipeLeft && a || !a && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case r:
                                (i.swipeRight && a || !a && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case o:
                                (i.swipeUp && a || !a && i.allowPageScroll != _) && t.preventDefault();
                                break;
                            case s:
                                (i.swipeDown && a || !a && i.allowPageScroll != _) && t.preventDefault()
                        }
                    }
            }

            function Q() {
                var t = U(),
                    e = G(),
                    i = E();
                return t && e && i
            }

            function X() {
                return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
            }

            function B() {
                return !(!Q() || !X())
            }

            function Y() {
                var t = H(),
                    e = W(),
                    i = U(),
                    a = G(),
                    n = F(),
                    r = !n && a && i && e && t;
                return r
            }

            function V() {
                return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
            }

            function q() {
                return !(!Y() || !V())
            }

            function U() {
                return Vt === i.fingers || i.fingers === w || !S
            }

            function G() {
                return 0 !== qt[0].end.x
            }

            function Z() {
                return !!i.tap
            }

            function $() {
                return !!i.doubleTap
            }

            function K() {
                return !!i.longTap
            }

            function J() {
                if (null == Kt) return !1;
                var t = Ot();
                return $() && t - Kt <= i.doubleTapThreshold
            }

            function tt() {
                return J()
            }

            function et() {
                return (1 === Vt || !S) && (isNaN(jt) || jt < i.threshold)
            }

            function it() {
                return Wt > i.longTapThreshold && y > jt
            }

            function at() {
                return !(!et() || !Z())
            }

            function nt() {
                return !(!J() || !$())
            }

            function rt() {
                return !(!it() || !K())
            }

            function ot() {
                Zt = Ot(), $t = event.touches.length + 1
            }

            function st() {
                Zt = 0, $t = 0
            }

            function lt() {
                var t = !1;
                if (Zt) {
                    var e = Ot() - Zt;
                    e <= i.fingerReleaseThreshold && (t = !0)
                }
                return t
            }

            function dt() {
                return !(Bt.data(P + "_intouch") !== !0)
            }

            function ht(t) {
                t === !0 ? (Bt.bind(Mt, C), Bt.bind(zt, A), Rt && Bt.bind(Rt, z)) : (Bt.unbind(Mt, C, !1), Bt.unbind(zt, A, !1), Rt && Bt.unbind(Rt, z, !1)), Bt.data(P + "_intouch", t === !0)
            }

            function ut(t, e) {
                var i = void 0 !== e.identifier ? e.identifier : 0;
                return qt[t].identifier = i, qt[t].start.x = qt[t].end.x = e.pageX || e.clientX, qt[t].start.y = qt[t].end.y = e.pageY || e.clientY, qt[t]
            }

            function pt(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    i = ct(e);
                return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
            }

            function ct(t) {
                for (var e = 0; e < qt.length; e++)
                    if (qt[e].identifier == t) return qt[e]
            }

            function ft() {
                for (var t = [], e = 0; 5 >= e; e++) t.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return t
            }

            function gt(t, e) {
                e = Math.max(e, mt(t)), Xt[t].distance = e
            }

            function mt(t) {
                return Xt[t] ? Xt[t].distance : void 0
            }

            function vt() {
                var t = {};
                return t[n] = _t(n), t[r] = _t(r), t[o] = _t(o), t[s] = _t(s), t
            }

            function _t(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function wt() {
                return Gt - Ut
            }

            function yt(t, e) {
                var i = Math.abs(t.x - e.x),
                    a = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + a * a))
            }

            function bt(t, e) {
                var i = e / t * 1;
                return i.toFixed(2)
            }

            function xt() {
                return 1 > Ht ? d : l
            }

            function Tt(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }

            function kt(t, e) {
                var i = t.x - e.x,
                    a = e.y - t.y,
                    n = Math.atan2(a, i),
                    r = Math.round(180 * n / Math.PI);
                return 0 > r && (r = 360 - Math.abs(r)), r
            }

            function St(t, e) {
                var i = kt(t, e);
                return 45 >= i && i >= 0 ? n : 360 >= i && i >= 315 ? n : i >= 135 && 225 >= i ? r : i > 45 && 135 > i ? s : o
            }

            function Ot() {
                var t = new Date;
                return t.getTime()
            }

            function Lt(e) {
                e = t(e);
                var i = e.offset(),
                    a = {
                        left: i.left,
                        right: i.left + e.outerWidth(),
                        top: i.top,
                        bottom: i.top + e.outerHeight()
                    };
                return a
            }

            function Pt(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }
            var Ct = S || L || !i.fallbackToMouseEvents,
                At = Ct ? L ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Mt = Ct ? L ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                zt = Ct ? L ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Rt = Ct ? null : "mouseleave",
                It = L ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                jt = 0,
                Dt = null,
                Wt = 0,
                Ft = 0,
                Et = 0,
                Ht = 1,
                Nt = 0,
                Qt = 0,
                Xt = null,
                Bt = t(e),
                Yt = "start",
                Vt = 0,
                qt = null,
                Ut = 0,
                Gt = 0,
                Zt = 0,
                $t = 0,
                Kt = 0,
                Jt = null,
                te = null;
            try {
                Bt.bind(At, a), Bt.bind(It, M)
            } catch (ee) {
                t.error("events not supported " + At + "," + It + " on jQuery.swipetp")
            }
            this.enable = function() {
                return Bt.bind(At, a), Bt.bind(It, M), Bt
            }, this.disable = function() {
                return R(), Bt
            }, this.destroy = function() {
                R(), Bt.data(P, null), Bt = null
            }, this.option = function(e, a) {
                if (void 0 !== i[e]) {
                    if (void 0 === a) return i[e];
                    i[e] = a
                } else t.error("Option " + e + " does not exist on jQuery.swipetp.options");
                return null
            }
        }
        var a = "1.6.9",
            n = "left",
            r = "right",
            o = "up",
            s = "down",
            l = "in",
            d = "out",
            h = "none",
            u = "auto",
            p = "swipe",
            c = "pinch",
            f = "tap",
            g = "doubletap",
            m = "longtap",
            v = "horizontal",
            _ = "vertical",
            w = "all",
            y = 10,
            b = "start",
            x = "move",
            T = "end",
            k = "cancel",
            S = "ontouchstart" in window,
            O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            L = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            P = "TouchSwipe",
            C = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe",
                preventDefaultEvents: !0
            };
        t.fn.swipetp = function(i) {
            var a = t(this),
                n = a.data(P);
            if (n && "string" == typeof i) {
                if (n[i]) return n[i].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipetp")
            } else if (!(n || "object" != typeof i && i)) return e.apply(this, arguments);
            return a
        }, t.fn.swipetp.version = a, t.fn.swipetp.defaults = C, t.fn.swipetp.phases = {
            PHASE_START: b,
            PHASE_MOVE: x,
            PHASE_END: T,
            PHASE_CANCEL: k
        }, t.fn.swipetp.directions = {
            LEFT: n,
            RIGHT: r,
            UP: o,
            DOWN: s,
            IN: l,
            OUT: d
        }, t.fn.swipetp.pageScroll = {
            NONE: h,
            HORIZONTAL: v,
            VERTICAL: _,
            AUTO: u
        }, t.fn.swipetp.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: w
        }
    }), "undefined" == typeof console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
if (1 == window.tplogs) try {
    console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try {
    console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
} catch (e) {}! function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var a, n, r, o, s, l = function(t) {
                var e, a = t.split("."),
                    n = i;
                for (e = 0; a.length > e; e++) n[a[e]] = n = n[a[e]] || {};
                return n
            },
            d = l("com.greensock"),
            h = 1e-10,
            u = function(t) {
                var e, i = [],
                    a = t.length;
                for (e = 0; e !== a; i.push(t[e++]));
                return i
            },
            p = function() {},
            c = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            f = {},
            g = function(a, n, r, o) {
                this.sc = f[a] ? f[a].sc : [], f[a] = this, this.gsClass = null, this.func = r;
                var s = [];
                this.check = function(d) {
                    for (var h, u, p, c, m = n.length, v = m; --m > -1;)(h = f[n[m]] || new g(n[m], [])).gsClass ? (s[m] = h.gsClass, v--) : d && h.sc.push(this);
                    if (0 === v && r)
                        for (u = ("com.greensock." + a).split("."), p = u.pop(), c = l(u.join("."))[p] = this.gsClass = r.apply(r, s), o && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                                return c
                            }) : a === e && "undefined" != typeof module && module.exports && (module.exports = c)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                }, this.check(!0)
            },
            m = t._gsDefine = function(t, e, i, a) {
                return new g(t, e, i, a)
            },
            v = d._class = function(t, e, i) {
                return e = e || function() {}, m(t, [], function() {
                    return e
                }, i), e
            };
        m.globals = i;
        var _ = [0, 0, 1, 1],
            w = [],
            y = v("easing.Ease", function(t, e, i, a) {
                this._func = t, this._type = i || 0, this._power = a || 0, this._params = e ? _.concat(e) : _
            }, !0),
            b = y.map = {},
            x = y.register = function(t, e, i, a) {
                for (var n, r, o, s, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                    for (r = l[h], n = a ? v("easing." + r, null, !0) : d.easing[r] || {}, o = u.length; --o > -1;) s = u[o], b[r + "." + s] = b[s + r] = n[s] = t.getRatio ? t : t[s] || new t
            };
        for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    a = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? a *= a : 2 === i ? a *= a * a : 3 === i ? a *= a * a * a : 4 === i && (a *= a * a * a * a), 1 === e ? 1 - a : 2 === e ? a : .5 > t ? a / 2 : 1 - a / 2
            }, a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = a.length; --n > -1;) r = a[n] + ",Power" + n, x(new y(null, null, 1, n), r, "easeOut", !0), x(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), x(new y(null, null, 3, n), r, "easeInOut");
        b.linear = d.easing.Linear.easeIn, b.swing = d.easing.Quad.easeInOut;
        var T = v("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = T.prototype, r.addEventListener = function(t, e, i, a, n) {
            n = n || 0;
            var r, l, d = this._listeners[t],
                h = 0;
            for (null == d && (this._listeners[t] = d = []), l = d.length; --l > -1;) r = d[l], r.c === e && r.s === i ? d.splice(l, 1) : 0 === h && n > r.pr && (h = l + 1);
            d.splice(h, 0, {
                c: e,
                s: i,
                up: a,
                pr: n
            }), this !== o || s || o.wake()
        }, r.removeEventListener = function(t, e) {
            var i, a = this._listeners[t];
            if (a)
                for (i = a.length; --i > -1;)
                    if (a[i].c === e) return void a.splice(i, 1)
        }, r.dispatchEvent = function(t) {
            var e, i, a, n = this._listeners[t];
            if (n)
                for (e = n.length, i = this._eventTarget; --e > -1;) a = n[e], a && (a.up ? a.c.call(a.s || i, {
                    type: t,
                    target: i
                }) : a.c.call(a.s || i))
        };
        var k = t.requestAnimationFrame,
            S = t.cancelAnimationFrame,
            O = Date.now || function() {
                return (new Date).getTime()
            },
            L = O();
        for (a = ["ms", "moz", "webkit", "o"], n = a.length; --n > -1 && !k;) k = t[a[n] + "RequestAnimationFrame"], S = t[a[n] + "CancelAnimationFrame"] || t[a[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, a, n, r, l, d = this,
                u = O(),
                c = e !== !1 && k,
                f = 500,
                g = 33,
                m = "tick",
                v = function(t) {
                    var e, o, s = O() - L;
                    s > f && (u += s - g), L += s, d.time = (L - u) / 1e3, e = d.time - l, (!i || e > 0 || t === !0) && (d.frame++, l += e + (e >= r ? .004 : r - e), o = !0), t !== !0 && (n = a(v)), o && d.dispatchEvent(m)
                };
            T.call(d), d.time = d.frame = 0, d.tick = function() {
                v(!0)
            }, d.lagSmoothing = function(t, e) {
                f = t || 1 / h, g = Math.min(e, f, 0)
            }, d.sleep = function() {
                null != n && (c && S ? S(n) : clearTimeout(n), a = p, n = null, d === o && (s = !1))
            }, d.wake = function() {
                null !== n ? d.sleep() : d.frame > 10 && (L = O() - f + 5), a = 0 === i ? p : c && k ? k : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - d.time) + 1)
                }, d === o && (s = !0), v(2)
            }, d.fps = function(t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void d.wake()) : i
            }, d.useRAF = function(t) {
                return arguments.length ? (d.sleep(), c = t, void d.fps(i)) : c
            }, d.fps(t), setTimeout(function() {
                c && 5 > d.frame && d.useRAF(!1)
            }, 1500)
        }), r = d.Ticker.prototype = new d.events.EventDispatcher, r.constructor = d.Ticker;
        var P = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, X) {
                s || o.wake();
                var i = this.vars.useFrames ? Q : X;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = P.ticker = new d.Ticker, r = P.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var C = function() {
            s && O() - L > 2e3 && o.wake(), setTimeout(C, 2e3)
        };
        C(), r.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function() {}, r.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, r.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) {
            return s || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function() {
            return this._enabled(!1, !1)
        }, r.kill = function(t, e) {
            return this._kill(t, e), this
        }, r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || w)
        }, r.eventCallback = function(t, e, i, a) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = a), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function(t, e, i) {
            if (s || o.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var a = this._totalDuration,
                        n = this._timeline;
                    if (t > a && !i && (t = a), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? a - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && Y())
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, a = this._timeline;
            return t != this._paused && a && (s || t || o.wake(), e = a.rawTime(), i = e - this._pauseTime, !t && a.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(a.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var A = v("core.SimpleTimeline", function(t) {
            P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = A.prototype = new P, r.constructor = A, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
            var i, a;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (a = t._startTime; i && i._startTime > a;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function(t, e, i) {
            var a, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) a = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a
        }, r.rawTime = function() {
            return s || o.wake(), this._totalTime
        };
        var M = v("TweenLite", function(e, i, a) {
                if (P.call(this, i, a), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                var n, r, o, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? N[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : N[l], (s || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                    for (this._targets = o = u(e), this._propLookup = [], this._siblings = [], n = 0; o.length > n; n++) r = o[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(u(r))) : (this._siblings[n] = V(r, this, !1), 1 === l && this._siblings[n].length > 1 && U(r, this, null, 1, this._siblings[n])) : (r = o[n--] = M.selector(r), "string" == typeof r && o.splice(n + 1, 1)) : o.splice(n--, 1);
                else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
            }, !0),
            z = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            R = function(t, e) {
                var i, a = {};
                for (i in t) H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (a[i] = t[i], delete t[i]);
                t.css = a
            };
        r = M.prototype = new P, r.constructor = M, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, M.version = "1.17.0", M.defaultEase = r._ease = new y(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = o, M.autoSleep = 120, M.lagSmoothing = function(t, e) {
            o.lagSmoothing(t, e)
        }, M.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (M.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var I = [],
            j = {},
            D = M._internals = {
                isArray: c,
                isSelector: z,
                lazyTweens: I
            },
            W = M._plugins = {},
            F = D.tweenLookup = {},
            E = 0,
            H = D.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1
            },
            N = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            Q = P._rootFramesTimeline = new A,
            X = P._rootTimeline = new A,
            B = 30,
            Y = D.lazyRender = function() {
                var t, e = I.length;
                for (j = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                I.length = 0
            };
        X._startTime = o.time, Q._startTime = o.frame, X._active = Q._active = !0, setTimeout(Y, 1), P._updateRoot = M.render = function() {
            var t, e, i;
            if (I.length && Y(), X.render((o.time - X._startTime) * X._timeScale, !1, !1), Q.render((o.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && Y(), o.frame >= B) {
                B = o.frame + (parseInt(M.autoSleep, 10) || 120);
                for (i in F) {
                    for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if (i = X._first, (!i || i._paused) && M.autoSleep && !Q._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", P._updateRoot);
        var V = function(t, e, i) {
                var a, n, r = t._gsTweenID;
                if (F[r || (t._gsTweenID = r = "t" + E++)] || (F[r] = {
                        target: t,
                        tweens: []
                    }), e && (a = F[r].tweens, a[n = a.length] = e, i))
                    for (; --n > -1;) a[n] === e && a.splice(n, 1);
                return F[r].tweens
            },
            q = function(t, e, i, a) {
                var n, r, o = t.vars.onOverwrite;
                return o && (n = o(t, e, i, a)), o = M.onOverwrite, o && (r = o(t, e, i, a)), n !== !1 && r !== !1
            },
            U = function(t, e, i, a, n) {
                var r, o, s, l;
                if (1 === a || a >= 4) {
                    for (l = n.length, r = 0; l > r; r++)
                        if ((s = n[r]) !== e) s._gc || s._kill(null, t, e) && (o = !0);
                        else if (5 === a) break;
                    return o
                }
                var d, u = e._startTime + h,
                    p = [],
                    c = 0,
                    f = 0 === e._duration;
                for (r = n.length; --r > -1;)(s = n[r]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (d = d || G(e, 0, f), 0 === G(s, d, f) && (p[c++] = s)) : u >= s._startTime && s._startTime + s.totalDuration() / s._timeScale > u && ((f || !s._initted) && 2e-10 >= u - s._startTime || (p[c++] = s)));
                for (r = c; --r > -1;)
                    if (s = p[r], 2 === a && s._kill(i, t, e) && (o = !0), 2 !== a || !s._firstPT && s._initted) {
                        if (2 !== a && !q(s, e)) continue;
                        s._enabled(!1, !1) && (o = !0)
                    }
                return o
            },
            G = function(t, e, i) {
                for (var a = t._timeline, n = a._timeScale, r = t._startTime; a._timeline;) {
                    if (r += a._startTime, n *= a._timeScale, a._paused) return -100;
                    a = a._timeline
                }
                return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * h > r - e ? h : (r += t.totalDuration() / t._timeScale / n) > e + h ? 0 : r - e - h
            };
        r._init = function() {
            var t, e, i, a, n, r = this.vars,
                o = this._overwrittenProps,
                s = this._duration,
                l = !!r.immediateRender,
                d = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (a in r.startAt) n[a] = r.startAt[a];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = M.to(this.target, 0, n), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== s) return
            } else if (r.runBackwards && 0 !== s)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (a in r) H[a] && "autoCSS" !== a || (i[a] = r[a]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = M.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = d = d ? d instanceof y ? d : "function" == typeof d ? new y(d, r.easeParams) : b[d] || M.defaultEase : M.defaultEase, r.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && M._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(e, i, a, n) {
            var r, o, s, l, d, h;
            if (null == e) return !1;
            j[e._gsTweenID] && Y(), this.vars.css || e.style && e !== t && e.nodeType && W.css && this.vars.autoCSS !== !1 && R(this.vars, e);
            for (r in this.vars) {
                if (h = this.vars[r], H[r]) h && (h instanceof Array || h.push && c(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[r] = h = this._swapSelfInParams(h, this));
                else if (W[r] && (l = new W[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = d = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: r,
                            pg: !0,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = d = {
                    _next: this._firstPT,
                    t: e,
                    p: r,
                    f: "function" == typeof e[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, d.s = d.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), d.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - d.s || 0;
                d && d._next && (d._next._prev = d)
            }
            return n && this._kill(n, e) ? this._initProps(e, i, a, n) : this._overwrite > 1 && this._firstPT && a.length > 1 && U(e, this, i, this._overwrite, a) ? (this._kill(i, e), this._initProps(e, i, a, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (j[e._gsTweenID] = !0), s)
        }, r.render = function(t, e, i) {
            var a, n, r, o, s = this._time,
                l = this._duration,
                d = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (a = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > d || d === h && "isPause" !== this.data) && d !== t && (i = !0, d > h && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || d === t ? t : h);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && d > 0) && (n = "onReverseComplete", a = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (d !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || d === t ? t : h)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    p = this._easeType,
                    c = this._easePower;
                (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== s || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = d, I.push(this), void(this._lazy = [t, e]);
                    this._time && !a ? this.ratio = this._ease.getRatio(this._time / l) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== s || a) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
            }
        }, r._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
            var a, n, r, o, s, l, d, h, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((c(e) || z(e)) && "number" != typeof e[0])
                for (a = e.length; --a > -1;) this._kill(t, e[a], i) && (l = !0);
            else {
                if (this._targets) {
                    for (a = this._targets.length; --a > -1;)
                        if (e === this._targets[a]) {
                            s = this._propLookup[a] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[a] = t ? this._overwrittenProps[a] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    s = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
                }
                if (s) {
                    if (d = t || s, h = t !== n && "all" !== n && t !== s && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (r in d) s[r] && (u || (u = []), u.push(r));
                        if ((u || !t) && !q(this, i, e, u)) return !1
                    }
                    for (r in d)(o = s[r]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(d) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), h && (n[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
        }, r._enabled = function(t, e) {
            if (s || o.wake(), t && this._gc) {
                var i, a = this._targets;
                if (a)
                    for (i = a.length; --i > -1;) this._siblings[i] = V(a[i], this, !0);
                else this._siblings = V(this.target, this, !0)
            }
            return P.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, M.to = function(t, e, i) {
            return new M(t, e, i)
        }, M.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
        }, M.fromTo = function(t, e, i, a) {
            return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, new M(t, e, a)
        }, M.delayedCall = function(t, e, i, a, n) {
            return new M(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: a,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        }, M.set = function(t, e) {
            return new M(t, 0, e)
        }, M.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : M.selector(t) || t;
            var i, a, n, r;
            if ((c(t) || z(t)) && "number" != typeof t[0]) {
                for (i = t.length, a = []; --i > -1;) a = a.concat(M.getTweensOf(t[i], e));
                for (i = a.length; --i > -1;)
                    for (r = a[i], n = i; --n > -1;) r === a[n] && a.splice(i, 1)
            } else
                for (a = V(t).concat(), i = a.length; --i > -1;)(a[i]._gc || e && !a[i].isActive()) && a.splice(i, 1);
            return a
        }, M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var a = M.getTweensOf(t, e), n = a.length; --n > -1;) a[n]._kill(i, t)
        };
        var Z = v("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Z.prototype
        }, !0);
        if (r = Z.prototype, Z.version = "1.10.1", Z.API = 2, r._firstPT = null, r._addTween = function(t, e, i, a, n, r) {
                var o, s;
                return null != a && (o = "number" == typeof a || "=" !== a.charAt(1) ? Number(a) - Number(i) : parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2))) ? (this._firstPT = s = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: o,
                    f: "function" == typeof t[e],
                    n: n || e,
                    r: r
                }, s._next && (s._next._prev = s), s) : void 0
            }, r.setRatio = function(t) {
                for (var e, i = this._firstPT, a = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : a > e && e > -a && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, r._kill = function(t) {
                var e, i = this._overwriteProps,
                    a = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; a;) null != t[a.n] && (a._next && (a._next._prev = a._prev), a._prev ? (a._prev._next = a._next, a._prev = null) : this._firstPT === a && (this._firstPT = a._next)), a = a._next;
                return !1
            }, r._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, M._onPluginEvent = function(t, e) {
                var i, a, n, r, o, s = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; s;) {
                        for (o = s._next, a = n; a && a.pr > s.pr;) a = a._next;
                        (s._prev = a ? a._prev : r) ? s._prev._next = s: n = s, (s._next = a) ? a._prev = s : r = s, s = o
                    }
                    s = e._firstPT = n
                }
                for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (i = !0), s = s._next;
                return i
            }, Z.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === Z.API && (W[(new t[e])._propName] = t[e]);
                return !0
            }, m.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    a = t.priority || 0,
                    n = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        Z.call(this, i, a), this._overwriteProps = n || []
                    }, t.global === !0),
                    s = o.prototype = new Z(i);
                s.constructor = o, o.API = t.API;
                for (e in r) "function" == typeof t[e] && (s[r[e]] = t[e]);
                return o.version = t.version, Z.activate([o]), o
            }, a = t._gsQueue) {
            for (n = 0; a.length > n; n++) a[n]();
            for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        s = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var a = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, a, n = this.vars;
                    for (a in n) i = n[a], l(i) && -1 !== i.join("").indexOf("{self}") && (n[a] = this._swapSelfInParams(i));
                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                n = 1e-10,
                r = i._internals,
                o = a._internals = {},
                s = r.isSelector,
                l = r.isArray,
                d = r.lazyTweens,
                h = r.lazyRender,
                u = [],
                p = _gsScope._gsDefine.globals,
                c = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                f = o.pauseCallback = function(t, e, i, a) {
                    var r, o = t._timeline,
                        s = o._totalTime,
                        l = t._startTime,
                        d = 0 > t._rawPrevTime || 0 === t._rawPrevTime && o._reversed,
                        h = d ? 0 : n,
                        p = d ? n : 0;
                    if (e || !this._forcingPlayhead) {
                        for (o.pause(l), r = t._prev; r && r._startTime === l;) r._rawPrevTime = p, r = r._prev;
                        for (r = t._next; r && r._startTime === l;) r._rawPrevTime = h, r = r._next;
                        e && e.apply(a || o.vars.callbackScope || o, i || u), (this._forcingPlayhead || !o._paused) && o.seek(s)
                    }
                },
                g = function(t) {
                    var e, i = [],
                        a = t.length;
                    for (e = 0; e !== a; i.push(t[e++]));
                    return i
                },
                m = a.prototype = new e;
            return a.version = "1.17.0", m.constructor = a, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, a, n) {
                var r = a.repeat && p.TweenMax || i;
                return e ? this.add(new r(t, e, a), n) : this.set(t, a, n)
            }, m.from = function(t, e, a, n) {
                return this.add((a.repeat && p.TweenMax || i).from(t, e, a), n)
            }, m.fromTo = function(t, e, a, n, r) {
                var o = n.repeat && p.TweenMax || i;
                return e ? this.add(o.fromTo(t, e, a, n), r) : this.set(t, n, r)
            }, m.staggerTo = function(t, e, n, r, o, l, d, h) {
                var u, p = new a({
                    onComplete: l,
                    onCompleteParams: d,
                    callbackScope: h,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], s(t) && (t = g(t)), r = r || 0, 0 > r && (t = g(t), t.reverse(), r *= -1), u = 0; t.length > u; u++) n.startAt && (n.startAt = c(n.startAt)), p.to(t[u], e, c(n), u * r);
                return this.add(p, o)
            }, m.staggerFrom = function(t, e, i, a, n, r, o, s) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, a, n, r, o, s)
            }, m.staggerFromTo = function(t, e, i, a, n, r, o, s, l) {
                return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, a, n, r, o, s, l)
            }, m.call = function(t, e, a, n) {
                return this.add(i.delayedCall(0, t, e, a), n)
            }, m.set = function(t, e, a) {
                return a = this._parseTimeOrLabel(a, 0, !0), null == e.immediateRender && (e.immediateRender = a === this._time && !this._paused), this.add(new i(t, 0, e), a)
            }, a.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var n, r, o = new a(t),
                    s = o._timeline;
                for (null == e && (e = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, n = s._first; n;) r = n._next, e && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay), n = r;
                return s.add(o, 0), o
            }, m.add = function(n, r, o, s) {
                var d, h, u, p, c, f;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                    if (n instanceof Array || n && n.push && l(n)) {
                        for (o = o || "normal", s = s || 0, d = r, h = n.length, u = 0; h > u; u++) l(p = n[u]) && (p = new a({
                            tweens: p
                        })), this.add(p, d), "string" != typeof p && "function" != typeof p && ("sequence" === o ? d = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), d += s;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof n) return this.addLabel(n, r);
                    if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                    n = i.delayedCall(0, n)
                }
                if (e.prototype.add.call(this, n, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = this, f = c.rawTime() > n._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                return this
            }, m.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && l(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, m._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var a = this._last;
                return a ? this._time > a._startTime + a._totalDuration / a._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, m.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, m.insert = m.insertMultiple = function(t, e, i, a) {
                return this.add(t, e || 0, i, a)
            }, m.appendMultiple = function(t, e, i, a) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, a)
            }, m.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, m.addPause = function(t, e, a, n) {
                var r = i.delayedCall(0, f, ["{self}", e, a, n], this);
                return r.data = "isPause", this.add(r, t)
            }, m.removeLabel = function(t) {
                return delete this._labels[t], this
            }, m.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, m._parseTimeOrLabel = function(e, i, a, n) {
                var r;
                if (n instanceof t && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && l(n)))
                    for (r = n.length; --r > -1;) n[r] instanceof t && n[r].timeline === this && this.remove(n[r]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, a && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, a);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? a ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, a) : this.duration()
                }
                return Number(e) + i
            }, m.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, m.stop = function() {
                return this.paused(!0)
            }, m.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, m.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var a, r, o, s, l, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._time,
                    c = this._startTime,
                    f = this._timeScale,
                    g = this._paused;
                if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = u + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (s = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                            for (a = this._first; a && 0 === a._startTime;) a._duration || (r = !1), a = a._next;
                        t = 0, this._initted || (l = !0)
                    }
                else this._totalTime = this._time = this._rawPrevTime = t;
                if (this._time !== p && this._first || i || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= p)
                        for (a = this._first; a && (o = a._next, !this._paused || g);)(a._active || a._startTime <= this._time && !a._paused && !a._gc) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = o;
                    else
                        for (a = this._last; a && (o = a._prev, !this._paused || g);)(a._active || p >= a._startTime && !a._paused && !a._gc) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = o;
                    this._onUpdate && (e || (d.length && h(), this._callback("onUpdate"))), s && (this._gc || (c === this._startTime || f !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (d.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof a && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, m.getChildren = function(t, e, a, n) {
                n = n || -9999999999;
                for (var r = [], o = this._first, s = 0; o;) n > o._startTime || (o instanceof i ? e !== !1 && (r[s++] = o) : (a !== !1 && (r[s++] = o), t !== !1 && (r = r.concat(o.getChildren(!0, e, a)), s = r.length))), o = o._next;
                return r
            }, m.getTweensOf = function(t, e) {
                var a, n, r = this._gc,
                    o = [],
                    s = 0;
                for (r && this._enabled(!0, !0), a = i.getTweensOf(t), n = a.length; --n > -1;)(a[n].timeline === this || e && this._contains(a[n])) && (o[s++] = a[n]);
                return r && this._enabled(!1, !0), o
            }, m.recent = function() {
                return this._recent
            }, m._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, m.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var a, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                if (e)
                    for (a in r) r[a] >= i && (r[a] += t);
                return this._uncache(!0)
            }, m._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), a = i.length, n = !1; --a > -1;) i[a]._kill(t, e) && (n = !0);
                return n
            }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, m.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var a = this._first; a;) a._enabled(t, !0), a = a._next;
                return e.prototype._enabled.call(this, t, i)
            }, m.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, m.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, a = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, 0 > n._startTime && !n._paused && (a -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), i = n._startTime + n._totalDuration / n._timeScale, i > a && (a = i), n = e;
                        this._duration = this._totalDuration = a, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, m.paused = function(e) {
                if (!e)
                    for (var i = this._first, a = this._time; i;) i._startTime === a && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, m.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, m.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, a, n = _gsScope.GreenSockGlobals || _gsScope,
            r = n.com.greensock,
            o = 2 * Math.PI,
            s = Math.PI / 2,
            l = r._class,
            d = function(e, i) {
                var a = l("easing." + e, function() {}, !0),
                    n = a.prototype = new t;
                return n.constructor = a, n.getRatio = i, a
            },
            h = t.register || function() {},
            u = function(t, e, i, a) {
                var n = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new a
                }, !0);
                return h(n, t), n
            },
            p = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            c = function(e, i) {
                var a = l("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    n = a.prototype = new t;
                return n.constructor = a, n.getRatio = i, n.config = function(t) {
                    return new a(t)
                }, a
            },
            f = u("Back", c("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), c("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), c("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            g = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            m = g.prototype = new t;
        return m.constructor = g, m.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
            return new g(t, e, i)
        }, e = l("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, m.config = e.config = function(t) {
            return new e(t)
        }, i = l("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, a, n, r, o, s, l = e.taper || "none", d = [], h = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c, a = m ? m.getRatio(i) : i, "none" === l ? n = v : "out" === l ? (r = 1 - i, n = r * r * v) : "in" === l ? n = i * i * v : .5 > i ? (r = 2 * i, n = .5 * r * r * v) : (r = 2 * (1 - i), n = .5 * r * r * v), f ? a += Math.random() * n - .5 * n : c % 2 ? a += .5 * n : a -= .5 * n, g && (a > 1 ? a = 1 : 0 > a && (a = 0)), d[h++] = {
                x: i,
                y: a
            };
            for (d.sort(function(t, e) {
                    return t.x - e.x
                }), s = new p(1, 1, null), c = u; --c > -1;) o = d[c], s = new p(o.x, o.y, s);
            this._prev = new p(0, 0, 0 !== s.t ? s : s.next)
        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, m.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", d("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), d("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), d("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", d("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), d("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), d("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), a = function(e, i, a) {
            var n = l("easing." + e, function(t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || a) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                }, !0),
                r = n.prototype = new t;
            return r.constructor = n, r.getRatio = i, r.config = function(t, e) {
                return new n(t, e)
            }, n
        }, u("Elastic", a("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), a("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), a("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }, .45)), u("Expo", d("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), d("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), d("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", d("SineOut", function(t) {
            return Math.sin(t * s)
        }), d("SineIn", function(t) {
            return -Math.cos(t * s) + 1
        }), d("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), h(n.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, a, n, r, o = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                },
                s = _gsScope._gsDefine.globals,
                l = {},
                d = o.prototype = new t("css");
            d.constructor = o, o.version = "1.17.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, d = "px", o.suffixMap = {
                top: d,
                right: d,
                bottom: d,
                left: d,
                width: d,
                height: d,
                fontSize: d,
                padding: d,
                margin: d,
                perspective: d,
                lineHeight: ""
            };
            var h, u, p, c, f, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                y = /(?:\d|\-|\+|=|#|\.)*/g,
                b = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                T = /alpha\(opacity *=.+?\)/i,
                k = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                O = /-([a-z])/gi,
                L = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                P = function(t, e) {
                    return e.toUpperCase()
                },
                C = /(?:Left|Right|Width)/i,
                A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                z = /,(?=[^\)]*(?:\(|$))/gi,
                R = Math.PI / 180,
                I = 180 / Math.PI,
                j = {},
                D = document,
                W = function(t) {
                    return D.createElementNS ? D.createElementNS("http://www.w3.org/1999/xhtml", t) : D.createElement(t)
                },
                F = W("div"),
                E = W("img"),
                H = o._internals = {
                    _specialProps: l
                },
                N = navigator.userAgent,
                Q = function() {
                    var t = N.indexOf("Android"),
                        e = W("a");
                    return p = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === t || Number(N.substr(t + 8, 1)) > 3), f = p && 6 > Number(N.substr(N.indexOf("Version/") + 8, 1)), c = -1 !== N.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(N)) && (g = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                }(),
                X = function(t) {
                    return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                B = function(t) {
                    window.console && console.log(t)
                },
                Y = "",
                V = "",
                q = function(t, e) {
                    e = e || F;
                    var i, a, n = e.style;
                    if (void 0 !== n[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], a = 5; --a > -1 && void 0 === n[i[a] + t];);
                    return a >= 0 ? (V = 3 === a ? "ms" : i[a], Y = "-" + V.toLowerCase() + "-", V + t) : null
                },
                U = D.defaultView ? D.defaultView.getComputedStyle : function() {},
                G = o.getStyle = function(t, e, i, a, n) {
                    var r;
                    return Q || "opacity" !== e ? (!a && t.style[e] ? r = t.style[e] : (i = i || U(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : X(t)
                },
                Z = H.convertToPixels = function(t, i, a, n, r) {
                    if ("px" === n || !n) return a;
                    if ("auto" === n || !a) return 0;
                    var s, l, d, h = C.test(i),
                        u = t,
                        p = F.style,
                        c = 0 > a;
                    if (c && (a = -a), "%" === n && -1 !== i.indexOf("border")) s = a / 100 * (h ? t.clientWidth : t.clientHeight);
                    else {
                        if (p.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== n && u.appendChild) p[h ? "borderLeftWidth" : "borderTopWidth"] = a + n;
                        else {
                            if (u = t.parentNode || D.body, l = u._gsCache, d = e.ticker.frame, l && h && l.time === d) return l.width * a / 100;
                            p[h ? "width" : "height"] = a + n
                        }
                        u.appendChild(F), s = parseFloat(F[h ? "offsetWidth" : "offsetHeight"]), u.removeChild(F), h && "%" === n && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = d, l.width = 100 * (s / a)), 0 !== s || r || (s = Z(t, i, a, n, !0))
                    }
                    return c ? -s : s
                },
                $ = H.calculateOffset = function(t, e, i) {
                    if ("absolute" !== G(t, "position", i)) return 0;
                    var a = "left" === e ? "Left" : "Top",
                        n = G(t, "margin" + a, i);
                    return t["offset" + a] - (Z(t, e, parseFloat(n), n.replace(y, "")) || 0)
                },
                K = function(t, e) {
                    var i, a, n, r = {};
                    if (e = e || U(t, null))
                        if (i = e.length)
                            for (; --i > -1;) n = e[i], (-1 === n.indexOf("-transform") || kt === n) && (r[n.replace(O, P)] = e.getPropertyValue(n));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (r[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(O, P)] = e[i]);
                    return Q || (r.opacity = X(t)), a = Dt(t, e, !1), r.rotation = a.rotation, r.skewX = a.skewX, r.scaleX = a.scaleX, r.scaleY = a.scaleY, r.x = a.x, r.y = a.y, Ot && (r.z = a.z, r.rotationX = a.rotationX, r.rotationY = a.rotationY, r.scaleZ = a.scaleZ), r.filters && delete r.filters, r
                },
                J = function(t, e, i, a, n) {
                    var r, o, s, l = {},
                        d = t.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(w, "") ? r : 0 : $(t, o), void 0 !== d[o] && (s = new ct(d, o, d[o], s)));
                    if (a)
                        for (o in a) "className" !== o && (l[o] = a[o]);
                    return {
                        difs: l,
                        firstMPT: s
                    }
                },
                tt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                it = function(t, e, i) {
                    var a = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = tt[e],
                        r = n.length;
                    for (i = i || U(t, null); --r > -1;) a -= parseFloat(G(t, "padding" + n[r], i, !0)) || 0, a -= parseFloat(G(t, "border" + n[r] + "Width", i, !0)) || 0;
                    return a
                },
                at = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        a = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == n ? n = "center" === a ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === a || isNaN(parseFloat(a)) && -1 === (a + "").indexOf("=")) && (a = "50%"), t = a + " " + n + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== a.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === a.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(a.replace(w, "")), e.oy = parseFloat(n.replace(w, "")), e.v = t), e || t
                },
                nt = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                rt = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                },
                ot = function(t, e, i, a) {
                    var n, r, o, s, l, d = 1e-6;
                    return null == t ? s = e : "number" == typeof t ? s = t : (n = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), r.length && (a && (a[i] = e + o), -1 !== t.indexOf("short") && (o %= n, o !== o % (n / 2) && (o = 0 > o ? o + n : o - n)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * n) % n - (0 | o / n) * n : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * n) % n - (0 | o / n) * n)), s = e + o), d > s && s > -d && (s = 0), s
                },
                st = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                lt = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                dt = o.parseColor = function(t) {
                    var e, i, a, n, r, o;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), st[t] ? st[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), a = t.charAt(3), t = "#" + e + e + i + i + a + a), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), n = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (r + 1) : o + r - o * r, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(n + 1 / 3, e, i), t[1] = lt(n, e, i), t[2] = lt(n - 1 / 3, e, i), t) : (t = t.match(m) || st.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : st.black
                },
                ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (d in st) ht += "|" + d + "\\b";
            ht = RegExp(ht + ")", "gi");
            var ut = function(t, e, i, a) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var n, r = e ? (t.match(ht) || [""])[0] : "",
                        o = t.split(r).join("").match(_) || [],
                        s = t.substr(0, t.indexOf(o[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        d = -1 !== t.indexOf(" ") ? " " : ",",
                        h = o.length,
                        u = h > 0 ? o[0].replace(m, "") : "";
                    return h ? n = e ? function(t) {
                        var e, p, c, f;
                        if ("number" == typeof t) t += u;
                        else if (a && z.test(t)) {
                            for (f = t.replace(z, "|").split("|"), c = 0; f.length > c; c++) f[c] = n(f[c]);
                            return f.join(",")
                        }
                        if (e = (t.match(ht) || [r])[0], p = t.split(e).join("").match(_) || [], c = p.length, h > c--)
                            for (; h > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : o[c];
                        return s + p.join(d) + d + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, r, p;
                        if ("number" == typeof t) t += u;
                        else if (a && z.test(t)) {
                            for (r = t.replace(z, "|").split("|"), p = 0; r.length > p; p++) r[p] = n(r[p]);
                            return r.join(",")
                        }
                        if (e = t.match(_) || [], p = e.length, h > p--)
                            for (; h > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : o[p];
                        return s + e.join(d) + l
                    } : function(t) {
                        return t
                    }
                },
                pt = function(t) {
                    return t = t.split(","),
                        function(e, i, a, n, r, o, s) {
                            var l, d = (i + "").split(" ");
                            for (s = {}, l = 0; 4 > l; l++) s[t[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                            return n.parse(e, s, r, o)
                        }
                },
                ct = (H._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, a, n, r = this.data, o = r.proxy, s = r.firstMPT, l = 1e-6; s;) e = o[s.v], s.r ? e = Math.round(e) : l > e && e > -l && (e = 0), s.t[s.p] = e, s = s._next;
                    if (r.autoRotate && (r.autoRotate.rotation = o.rotation), 1 === t)
                        for (s = r.firstMPT; s;) {
                            if (i = s.t, i.type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, a = 1; i.l > a; a++) n += i["xn" + a] + i["xs" + (a + 1)];
                                    i.e = n
                                }
                            } else i.e = i.s + i.xs0;
                            s = s._next
                        }
                }, function(t, e, i, a, n) {
                    this.t = t, this.p = e, this.v = i, this.r = n, a && (a._prev = this, this._next = a)
                }),
                ft = (H._parseToProxy = function(t, e, i, a, n, r) {
                    var o, s, l, d, h, u = a,
                        p = {},
                        c = {},
                        f = i._transform,
                        g = j;
                    for (i._transform = null, j = e, a = h = i.parse(t, e, a, n), j = g, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); a && a !== u;) {
                        if (1 >= a.type && (s = a.p, c[s] = a.s + a.c, p[s] = a.s, r || (d = new ct(a, "s", s, d, a.r), a.c = 0), 1 === a.type))
                            for (o = a.l; --o > 0;) l = "xn" + o, s = a.p + "_" + l, c[s] = a.data[l], p[s] = a[l], r || (d = new ct(a, l, s, d, a.rxp[l]));
                        a = a._next
                    }
                    return {
                        proxy: p,
                        end: c,
                        firstMPT: d,
                        pt: h
                    }
                }, H.CSSPropTween = function(t, e, a, n, o, s, l, d, h, u, p) {
                    this.t = t, this.p = e, this.s = a, this.c = n, this.n = l || e, t instanceof ft || r.push(this.n), this.r = d, this.type = s || 0, h && (this.pr = h, i = !0), this.b = void 0 === u ? a : u, this.e = void 0 === p ? a + n : p, o && (this._next = o, o._prev = this)
                }),
                gt = function(t, e, i, a, n, r) {
                    var o = new ft(t, e, i, a - i, n, -1, r);
                    return o.b = i, o.e = o.xs0 = a, o
                },
                mt = o.parseComplex = function(t, e, i, a, n, r, o, s, l, d) {
                    i = i || r || "", o = new ft(t, e, 0, 0, o, d ? 2 : 1, null, !1, s, i, a), a += "";
                    var u, p, c, f, g, _, w, y, b, x, T, S, O = i.split(", ").join(",").split(" "),
                        L = a.split(", ").join(",").split(" "),
                        P = O.length,
                        C = h !== !1;
                    for ((-1 !== a.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(z, ", ").split(" "), L = L.join(" ").replace(z, ", ").split(" "), P = O.length), P !== L.length && (O = (r || "").split(" "), P = O.length), o.plugin = l, o.setRatio = d, u = 0; P > u; u++)
                        if (f = O[u], g = L[u], y = parseFloat(f), y || 0 === y) o.appendXtra("", y, nt(g, y), g.replace(v, ""), C && -1 !== g.indexOf("px"), !0);
                        else if (n && ("#" === f.charAt(0) || st[f] || k.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")", f = dt(f), g = dt(g), b = f.length + g.length > 6, b && !Q && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(L[u]).join("transparent")) : (Q || (b = !1), o.appendXtra(b ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], b ? "," : S, !0), b && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, S, !1)));
                    else if (_ = f.match(m)) {
                        if (w = g.match(v), !w || w.length !== _.length) return o;
                        for (c = 0, p = 0; _.length > p; p++) T = _[p], x = f.indexOf(T, c), o.appendXtra(f.substr(c, x - c), Number(T), nt(w[p], T), "", C && "px" === f.substr(x + T.length, 2), 0 === p), c = x + T.length;
                        o["xs" + o.l] += f.substr(c)
                    } else o["xs" + o.l] += o.l ? " " + f : f;
                    if (-1 !== a.indexOf("=") && o.data) {
                        for (S = o.xs0 + o.data.s, u = 1; o.l > u; u++) S += o["xs" + u] + o.data["xn" + u];
                        o.e = S + o["xs" + u]
                    }
                    return o.l || (o.type = -1,
                        o.xs0 = o.e), o.xfirst || o
                },
                vt = 9;
            for (d = ft.prototype, d.l = d.pr = 0; --vt > 0;) d["xn" + vt] = 0, d["xs" + vt] = "";
            d.xs0 = "", d._next = d._prev = d.xfirst = d.data = d.plugin = d.setRatio = d.rxp = null, d.appendXtra = function(t, e, i, a, n, r) {
                var o = this,
                    s = o.l;
                return o["xs" + s] += r && s ? " " + t : t || "", i || 0 === s || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = a || "", s > 0 ? (o.data["xn" + s] = e + i, o.rxp["xn" + s] = n, o["xn" + s] = e, o.plugin || (o.xfirst = new ft(o, "xn" + s, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                    s: e + i
                }, o.rxp = {}, o.s = e, o.c = i, o.r = n, o)) : (o["xs" + s] += e + (a || ""), o)
            };
            var _t = function(t, e) {
                    e = e || {}, this.p = e.prefix ? q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                wt = H._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var a, n, r = t.split(","),
                        o = e.defaultValue;
                    for (i = i || [o], a = 0; r.length > a; a++) e.prefix = 0 === a && e.prefix, e.defaultValue = i[a] || o, n = new _t(r[a], e)
                },
                yt = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        wt(t, {
                            parser: function(t, i, a, n, r, o, d) {
                                var h = s.com.greensock.plugins[e];
                                return h ? (h._cssRegister(), l[a].parse(t, i, a, n, r, o, d)) : (B("Error: " + e + " js file not loaded."), r)
                            }
                        })
                    }
                };
            d = _t.prototype, d.parseComplex = function(t, e, i, a, n, r) {
                var o, s, l, d, h, u, p = this.keyword;
                if (this.multi && (z.test(i) || z.test(e) ? (s = e.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : p && (s = [e], l = [i])), l) {
                    for (d = l.length > s.length ? l.length : s.length, o = 0; d > o; o++) e = s[o] = s[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (h = e.indexOf(p), u = i.indexOf(p), h !== u && (-1 === u ? s[o] = s[o].split(p).join("") : -1 === h && (s[o] += " " + p)));
                    e = s.join(", "), i = l.join(", ")
                }
                return mt(t, this.p, e, i, this.clrs, this.dflt, a, this.pr, n, r)
            }, d.parse = function(t, e, i, a, r, o) {
                return this.parseComplex(t.style, this.format(G(t, this.p, n, !1, this.dflt)), this.format(e), r, o)
            }, o.registerSpecialProp = function(t, e, i) {
                wt(t, {
                    parser: function(t, a, n, r, o, s) {
                        var l = new ft(t, n, 0, 0, o, 2, n, !1, i);
                        return l.plugin = s, l.setRatio = e(t, a, r._tween, n), l
                    },
                    priority: i
                })
            }, o.useSVGTransformAttr = p || c;
            var bt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Tt = q("transform"),
                kt = Y + "transform",
                St = q("transformOrigin"),
                Ot = null !== q("perspective"),
                Lt = H.Transform = function() {
                    this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Ot ? o.defaultForce3D || "auto" : !1
                },
                Pt = window.SVGElement,
                Ct = function(t, e, i) {
                    var a, n = D.createElementNS("http://www.w3.org/2000/svg", t),
                        r = /([a-z])([A-Z])/g;
                    for (a in i) n.setAttributeNS(null, a.replace(r, "$1-$2").toLowerCase(), i[a]);
                    return e.appendChild(n), n
                },
                At = D.documentElement,
                Mt = function() {
                    var t, e, i, a = g || /Android/i.test(N) && !window.chrome;
                    return D.createElementNS && !a && (t = Ct("svg", At), e = Ct("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[Tt] = "scaleX(0.5)", a = i === e.getBoundingClientRect().width && !(c && Ot), At.removeChild(t)), a
                }(),
                zt = function(t, e, i, a, n) {
                    var r, s, l, d, h, u, p, c, f, g, m, v, _, w, y = t._gsTransform,
                        b = jt(t, !0);
                    y && (_ = y.xOrigin, w = y.yOrigin), (!a || 2 > (r = a.split(" ")).length) && (p = t.getBBox(), e = at(e).split(" "), r = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = d = parseFloat(r[0]), i.yOrigin = h = parseFloat(r[1]), a && b !== It && (u = b[0], p = b[1], c = b[2], f = b[3], g = b[4], m = b[5], v = u * f - p * c, s = d * (f / v) + h * (-c / v) + (c * m - f * g) / v, l = d * (-p / v) + h * (u / v) - (u * m - p * g) / v, d = i.xOrigin = r[0] = s, h = i.yOrigin = r[1] = l), y && (n || n !== !1 && o.defaultSmoothOrigin !== !1 ? (s = d - _, l = h - w, y.xOffset += s * b[0] + l * b[2] - s, y.yOffset += s * b[1] + l * b[3] - l) : y.xOffset = y.yOffset = 0), t.setAttribute("data-svg-origin", r.join(" "))
                },
                Rt = function(t) {
                    return !!(Pt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                It = [1, 0, 0, 1, 0, 0],
                jt = function(t, e) {
                    var i, a, n, r, o, s = t._gsTransform || new Lt,
                        l = 1e5;
                    if (Tt ? a = G(t, kt, null, !0) : t.currentStyle && (a = t.currentStyle.filter.match(A), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), s.x || 0, s.y || 0].join(",") : ""), i = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, (s.svg || t.getBBox && Rt(t)) && (i && -1 !== (t.style[Tt] + "").indexOf("matrix") && (a = t.style[Tt], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (a = n, i = 0) : -1 !== n.indexOf("translate") && (a = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return It;
                    for (n = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = n.length; --vt > -1;) r = Number(n[vt]), n[vt] = (o = r - (r |= 0)) ? (0 | o * l + (0 > o ? -.5 : .5)) / l + r : r;
                    return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                },
                Dt = H.getTransform = function(t, i, a, r) {
                    if (t._gsTransform && a && !r) return t._gsTransform;
                    var s, l, d, h, u, p, c = a ? t._gsTransform || new Lt : new Lt,
                        f = 0 > c.scaleX,
                        g = 2e-5,
                        m = 1e5,
                        v = Ot ? parseFloat(G(t, St, i, !1, "0 0 0").split(" ")[2]) || c.zOrigin || 0 : 0,
                        _ = parseFloat(o.defaultTransformPerspective) || 0;
                    if (c.svg = !(!t.getBBox || !Rt(t)), c.svg && (zt(t, G(t, St, n, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), bt = o.useSVGTransformAttr || Mt), s = jt(t), s !== It) {
                        if (16 === s.length) {
                            var w, y, b, x, T, k = s[0],
                                S = s[1],
                                O = s[2],
                                L = s[3],
                                P = s[4],
                                C = s[5],
                                A = s[6],
                                M = s[7],
                                z = s[8],
                                R = s[9],
                                j = s[10],
                                D = s[12],
                                W = s[13],
                                F = s[14],
                                E = s[11],
                                H = Math.atan2(A, j);
                            c.zOrigin && (F = -c.zOrigin, D = z * F - s[12], W = R * F - s[13], F = j * F + c.zOrigin - s[14]), c.rotationX = H * I, H && (x = Math.cos(-H), T = Math.sin(-H), w = P * x + z * T, y = C * x + R * T, b = A * x + j * T, z = P * -T + z * x, R = C * -T + R * x, j = A * -T + j * x, E = M * -T + E * x, P = w, C = y, A = b), H = Math.atan2(z, j), c.rotationY = H * I, H && (x = Math.cos(-H), T = Math.sin(-H), w = k * x - z * T, y = S * x - R * T, b = O * x - j * T, R = S * T + R * x, j = O * T + j * x, E = L * T + E * x, k = w, S = y, O = b), H = Math.atan2(S, k), c.rotation = H * I, H && (x = Math.cos(-H), T = Math.sin(-H), k = k * x + P * T, y = S * x + C * T, C = S * -T + C * x, A = O * -T + A * x, S = y), c.rotationX && Math.abs(c.rotationX) + Math.abs(c.rotation) > 359.9 && (c.rotationX = c.rotation = 0, c.rotationY += 180), c.scaleX = (0 | Math.sqrt(k * k + S * S) * m + .5) / m, c.scaleY = (0 | Math.sqrt(C * C + R * R) * m + .5) / m, c.scaleZ = (0 | Math.sqrt(A * A + j * j) * m + .5) / m, c.skewX = 0, c.perspective = E ? 1 / (0 > E ? -E : E) : 0, c.x = D, c.y = W, c.z = F, c.svg && (c.x -= c.xOrigin - (c.xOrigin * k - c.yOrigin * P), c.y -= c.yOrigin - (c.yOrigin * S - c.xOrigin * C))
                        } else if (!(Ot && !r && s.length && c.x === s[4] && c.y === s[5] && (c.rotationX || c.rotationY) || void 0 !== c.x && "none" === G(t, "display", i))) {
                            var N = s.length >= 6,
                                Q = N ? s[0] : 1,
                                X = s[1] || 0,
                                B = s[2] || 0,
                                Y = N ? s[3] : 1;
                            c.x = s[4] || 0, c.y = s[5] || 0, d = Math.sqrt(Q * Q + X * X), h = Math.sqrt(Y * Y + B * B), u = Q || X ? Math.atan2(X, Q) * I : c.rotation || 0, p = B || Y ? Math.atan2(B, Y) * I + u : c.skewX || 0, Math.abs(p) > 90 && 270 > Math.abs(p) && (f ? (d *= -1, p += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (h *= -1, p += 0 >= p ? 180 : -180)), c.scaleX = d, c.scaleY = h, c.rotation = u, c.skewX = p, Ot && (c.rotationX = c.rotationY = c.z = 0, c.perspective = _, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * Q + c.yOrigin * B), c.y -= c.yOrigin - (c.xOrigin * X + c.yOrigin * Y))
                        }
                        c.zOrigin = v;
                        for (l in c) g > c[l] && c[l] > -g && (c[l] = 0)
                    }
                    return a && (t._gsTransform = c, c.svg && (bt && t.style[Tt] ? e.delayedCall(.001, function() {
                        Ht(t.style, Tt)
                    }) : !bt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), c
                },
                Wt = function(t) {
                    var e, i, a = this.data,
                        n = -a.rotation * R,
                        r = n + a.skewX * R,
                        o = 1e5,
                        s = (0 | Math.cos(n) * a.scaleX * o) / o,
                        l = (0 | Math.sin(n) * a.scaleX * o) / o,
                        d = (0 | Math.sin(r) * -a.scaleY * o) / o,
                        h = (0 | Math.cos(r) * a.scaleY * o) / o,
                        u = this.t.style,
                        p = this.t.currentStyle;
                    if (p) {
                        i = l, l = -d, d = -i, e = p.filter, u.filter = "";
                        var c, f, m = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            _ = "absolute" !== p.position,
                            w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + d + ", M22=" + h,
                            x = a.x + m * a.xPercent / 100,
                            T = a.y + v * a.yPercent / 100;
                        if (null != a.ox && (c = (a.oxp ? .01 * m * a.ox : a.ox) - m / 2, f = (a.oyp ? .01 * v * a.oy : a.oy) - v / 2, x += c - (c * s + f * l), T += f - (c * d + f * h)), _ ? (c = m / 2, f = v / 2, w += ", Dx=" + (c - (c * s + f * l) + x) + ", Dy=" + (f - (c * d + f * h) + T) + ")") : w += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, w) : w + " " + e, (0 === t || 1 === t) && 1 === s && 0 === l && 0 === d && 1 === h && (_ && -1 === w.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !_) {
                            var k, S, O, L = 8 > g ? 1 : -1;
                            for (c = a.ieOffsetX || 0, f = a.ieOffsetY || 0, a.ieOffsetX = Math.round((m - ((0 > s ? -s : s) * m + (0 > l ? -l : l) * v)) / 2 + x), a.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > d ? -d : d) * m)) / 2 + T), vt = 0; 4 > vt; vt++) S = et[vt], k = p[S], i = -1 !== k.indexOf("px") ? parseFloat(k) : Z(this.t, S, parseFloat(k), k.replace(y, "")) || 0, O = i !== a[S] ? 2 > vt ? -a.ieOffsetX : -a.ieOffsetY : 2 > vt ? c - a.ieOffsetX : f - a.ieOffsetY, u[S] = (a[S] = Math.round(i - O * (0 === vt || 2 === vt ? 1 : L))) + "px"
                        }
                    }
                },
                Ft = H.set3DTransformRatio = H.setTransformRatio = function(t) {
                    var e, i, a, n, r, o, s, l, d, h, u, p, f, g, m, v, _, w, y, b, x, T, k, S = this.data,
                        O = this.t.style,
                        L = S.rotation,
                        P = S.rotationX,
                        C = S.rotationY,
                        A = S.scaleX,
                        M = S.scaleY,
                        z = S.scaleZ,
                        I = S.x,
                        j = S.y,
                        D = S.z,
                        W = S.svg,
                        F = S.perspective,
                        E = S.force3D;
                    if (!((1 !== t && 0 !== t || "auto" !== E || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && E || D || F || C || P) || bt && W || !Ot) return void(L || S.skewX || W ? (L *= R, T = S.skewX * R, k = 1e5, e = Math.cos(L) * A, n = Math.sin(L) * A, i = Math.sin(L - T) * -M, r = Math.cos(L - T) * M, T && "simple" === S.skewType && (_ = Math.tan(T), _ = Math.sqrt(1 + _ * _), i *= _, r *= _, S.skewY && (e *= _, n *= _)), W && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, j += S.yOrigin - (S.xOrigin * n + S.yOrigin * r) + S.yOffset, bt && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), I += .01 * S.xPercent * g.width, j += .01 * S.yPercent * g.height), g = 1e-6, g > I && I > -g && (I = 0), g > j && j > -g && (j = 0)), y = (0 | e * k) / k + "," + (0 | n * k) / k + "," + (0 | i * k) / k + "," + (0 | r * k) / k + "," + I + "," + j + ")", W && bt ? this.t.setAttribute("transform", "matrix(" + y) : O[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + y) : O[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + M + "," + I + "," + j + ")");
                    if (c && (g = 1e-4, g > A && A > -g && (A = z = 2e-5), g > M && M > -g && (M = z = 2e-5), !F || S.z || S.rotationX || S.rotationY || (F = 0)), L || S.skewX) L *= R, m = e = Math.cos(L), v = n = Math.sin(L), S.skewX && (L -= S.skewX * R, m = Math.cos(L), v = Math.sin(L), "simple" === S.skewType && (_ = Math.tan(S.skewX * R), _ = Math.sqrt(1 + _ * _), m *= _, v *= _, S.skewY && (e *= _, n *= _))), i = -v, r = m;
                    else {
                        if (!(C || P || 1 !== z || F || W)) return void(O[Tt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + j + "px," + D + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")" : ""));
                        e = r = 1, i = n = 0
                    }
                    d = 1, a = o = s = l = h = u = 0, p = F ? -1 / F : 0, f = S.zOrigin, g = 1e-6, b = ",", x = "0", L = C * R, L && (m = Math.cos(L), v = Math.sin(L), s = -v, h = p * -v, a = e * v, o = n * v, d = m, p *= m, e *= m, n *= m), L = P * R, L && (m = Math.cos(L), v = Math.sin(L), _ = i * m + a * v, w = r * m + o * v, l = d * v, u = p * v, a = i * -v + a * m, o = r * -v + o * m, d *= m, p *= m, i = _, r = w), 1 !== z && (a *= z, o *= z, d *= z, p *= z), 1 !== M && (i *= M, r *= M, l *= M, u *= M), 1 !== A && (e *= A, n *= A, s *= A, h *= A), (f || W) && (f && (I += a * -f, j += o * -f, D += d * -f + f), W && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, j += S.yOrigin - (S.xOrigin * n + S.yOrigin * r) + S.yOffset), g > I && I > -g && (I = x), g > j && j > -g && (j = x), g > D && D > -g && (D = 0)), y = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", y += (g > e && e > -g ? x : e) + b + (g > n && n > -g ? x : n) + b + (g > s && s > -g ? x : s), y += b + (g > h && h > -g ? x : h) + b + (g > i && i > -g ? x : i) + b + (g > r && r > -g ? x : r), P || C ? (y += b + (g > l && l > -g ? x : l) + b + (g > u && u > -g ? x : u) + b + (g > a && a > -g ? x : a), y += b + (g > o && o > -g ? x : o) + b + (g > d && d > -g ? x : d) + b + (g > p && p > -g ? x : p) + b) : y += ",0,0,0,0,1,0,", y += I + b + j + b + D + b + (F ? 1 + -D / F : 1) + ")", O[Tt] = y
                };
            d = Lt.prototype, d.x = d.y = d.z = d.skewX = d.skewY = d.rotation = d.rotationX = d.rotationY = d.zOrigin = d.xPercent = d.yPercent = d.xOffset = d.yOffset = 0, d.scaleX = d.scaleY = d.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, a, r, s, l) {
                    if (a._lastParsedTransform === l) return r;
                    a._lastParsedTransform = l;
                    var d, h, u, p, c, f, g, m, v, _ = t._gsTransform,
                        w = a._transform = Dt(t, n, !0, l.parseTransform),
                        y = t.style,
                        b = 1e-6,
                        x = xt.length,
                        T = l,
                        k = {},
                        S = "transformOrigin";
                    if ("string" == typeof T.transform && Tt) u = F.style, u[Tt] = T.transform, u.display = "block", u.position = "absolute", D.body.appendChild(F), d = Dt(F, null, !1), D.body.removeChild(F), null != T.xPercent && (d.xPercent = rt(T.xPercent, w.xPercent)), null != T.yPercent && (d.yPercent = rt(T.yPercent, w.yPercent));
                    else if ("object" == typeof T) {
                        if (d = {
                                scaleX: rt(null != T.scaleX ? T.scaleX : T.scale, w.scaleX),
                                scaleY: rt(null != T.scaleY ? T.scaleY : T.scale, w.scaleY),
                                scaleZ: rt(T.scaleZ, w.scaleZ),
                                x: rt(T.x, w.x),
                                y: rt(T.y, w.y),
                                z: rt(T.z, w.z),
                                xPercent: rt(T.xPercent, w.xPercent),
                                yPercent: rt(T.yPercent, w.yPercent),
                                perspective: rt(T.transformPerspective, w.perspective)
                            }, g = T.directionalRotation, null != g)
                            if ("object" == typeof g)
                                for (u in g) T[u] = g[u];
                            else T.rotation = g;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (d.x = 0, d.xPercent = rt(T.x, w.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (d.y = 0, d.yPercent = rt(T.y, w.yPercent)), d.rotation = ot("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : w.rotation, w.rotation, "rotation", k), Ot && (d.rotationX = ot("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", k), d.rotationY = ot("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", k)), d.skewX = null == T.skewX ? w.skewX : ot(T.skewX, w.skewX), d.skewY = null == T.skewY ? w.skewY : ot(T.skewY, w.skewY), (h = d.skewY - w.skewY) && (d.skewX += h, d.rotation += h)
                    }
                    for (Ot && null != T.force3D && (w.force3D = T.force3D, f = !0), w.skewType = T.skewType || w.skewType || o.defaultSkewType, c = w.force3D || w.z || w.rotationX || w.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, c || null == T.scale || (d.scaleZ = 1); --x > -1;) i = xt[x], p = d[i] - w[i], (p > b || -b > p || null != T[i] || null != j[i]) && (f = !0, r = new ft(w, i, w[i], p, r), i in k && (r.e = k[i]), r.xs0 = 0, r.plugin = s, a._overwriteProps.push(r.n));
                    return p = T.transformOrigin, w.svg && (p || T.svgOrigin) && (m = w.xOffset, v = w.yOffset, zt(t, at(p), d, T.svgOrigin, T.smoothOrigin), r = gt(w, "xOrigin", (_ ? w : d).xOrigin, d.xOrigin, r, S), r = gt(w, "yOrigin", (_ ? w : d).yOrigin, d.yOrigin, r, S), (m !== w.xOffset || v !== w.yOffset) && (r = gt(w, "xOffset", _ ? m : w.xOffset, w.xOffset, r, S), r = gt(w, "yOffset", _ ? v : w.yOffset, w.yOffset, r, S)), p = bt ? null : "0px 0px"), (p || Ot && c && w.zOrigin) && (Tt ? (f = !0, i = St, p = (p || G(t, i, n, !1, "50% 50%")) + "", r = new ft(y, i, 0, 0, r, -1, S), r.b = y[i], r.plugin = s, Ot ? (u = w.zOrigin, p = p.split(" "), w.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, r.xs0 = r.e = p[0] + " " + (p[1] || "50%") + " 0px", r = new ft(w, "zOrigin", 0, 0, r, -1, r.n), r.b = u, r.xs0 = r.e = w.zOrigin) : r.xs0 = r.e = p) : at(p + "", w)), f && (a._transformType = w.svg && bt || !c && 3 !== this._transformType ? 2 : 3), r
                },
                prefix: !0
            }), wt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), wt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, r, o) {
                    e = this.format(e);
                    var s, l, d, h, u, p, c, f, g, m, v, _, w, y, b, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        k = t.style;
                    for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), s = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = q(T[l])), u = h = G(t, T[l], n, !1, "0px"), -1 !== u.indexOf(" ") && (h = u.split(" "), u = h[0], h = h[1]), p = d = s[l], c = parseFloat(u), _ = u.substr((c + "").length), w = "=" === p.charAt(1), w ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), v = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), v = p.substr((f + "").length)), "" === v && (v = a[i] || _), v !== _ && (y = Z(t, "borderLeft", c, _), b = Z(t, "borderTop", c, _), "%" === v ? (u = 100 * (y / g) + "%", h = 100 * (b / m) + "%") : "em" === v ? (x = Z(t, "borderLeft", 1, "em"), u = y / x + "em", h = b / x + "em") : (u = y + "px", h = b + "px"), w && (p = parseFloat(u) + f + v, d = parseFloat(h) + f + v)), o = mt(k, T[l], u + " " + h, p + " " + d, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: ut("0px 0px 0px 0px", !1, !0)
            }), wt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, a, r, o) {
                    var s, l, d, h, u, p, c = "background-position",
                        f = n || U(t, null),
                        m = this.format((f ? g ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (p = G(t, "backgroundImage").replace(L, ""), p && "none" !== p)) {
                        for (s = m.split(" "), l = v.split(" "), E.setAttribute("src", p), d = 2; --d > -1;) m = s[d], h = -1 !== m.indexOf("%"), h !== (-1 !== l[d].indexOf("%")) && (u = 0 === d ? t.offsetWidth - E.width : t.offsetHeight - E.height, s[d] = h ? parseFloat(m) / 100 * u + "px" : 100 * (parseFloat(m) / u) + "%");
                        m = s.join(" ")
                    }
                    return this.parseComplex(t.style, m, v, r, o)
                },
                formatter: at
            }), wt("backgroundSize", {
                defaultValue: "0 0",
                formatter: at
            }), wt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), wt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), wt("transformStyle", {
                prefix: !0
            }), wt("backfaceVisibility", {
                prefix: !0
            }), wt("userSelect", {
                prefix: !0
            }), wt("margin", {
                parser: pt("marginTop,marginRight,marginBottom,marginLeft")
            }), wt("padding", {
                parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), wt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, a, r, o) {
                    var s, l, d;
                    return 9 > g ? (l = t.currentStyle, d = 8 > g ? " " : ",", s = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", e = this.format(e).split(",").join(d)) : (s = this.format(G(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, r, o)
                }
            }), wt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), wt("autoRound,strictUnits", {
                parser: function(t, e, i, a, n) {
                    return n
                }
            }), wt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, a, r, o) {
                    return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", n, !1, "0px") + " " + G(t, "borderTopStyle", n, !1, "solid") + " " + G(t, "borderTopColor", n, !1, "#000")), this.format(e), r, o)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                }
            }), wt("borderWidth", {
                parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), wt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, a, n) {
                    var r = t.style,
                        o = "cssFloat" in r ? "cssFloat" : "styleFloat";
                    return new ft(r, o, 0, 0, n, -1, i, !1, 0, r[o], e)
                }
            });
            var Et = function(t) {
                var e, i = this.t,
                    a = i.filter || G(this.data, "filter") || "",
                    n = 0 | this.s + this.c * t;
                100 === n && (-1 === a.indexOf("atrix(") && -1 === a.indexOf("radient(") && -1 === a.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = a.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = a = a || "alpha(opacity=" + n + ")"), -1 === a.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = a + " alpha(opacity=" + n + ")") : i.filter = a.replace(b, "opacity=" + n))
            };
            wt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, a, r, o) {
                    var s = parseFloat(G(t, "opacity", n, !1, "1")),
                        l = t.style,
                        d = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), d && 1 === s && "hidden" === G(t, "visibility", n) && 0 !== e && (s = 0), Q ? r = new ft(l, "opacity", s, e - s, r) : (r = new ft(l, "opacity", 100 * s, 100 * (e - s), r), r.xn1 = d ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Et), d && (r = new ft(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", a._overwriteProps.push(r.n), a._overwriteProps.push(i)), r
                }
            });
            var Ht = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Nt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            wt("className", {
                parser: function(t, e, a, r, o, s, l) {
                    var d, h, u, p, c, f = t.getAttribute("class") || "",
                        g = t.style.cssText;
                    if (o = r._classNamePT = new ft(t, a, 0, 0, o, 2), o.setRatio = Nt, o.pr = -11, i = !0, o.b = f, h = K(t, n), u = t._gsClassPT) {
                        for (p = {}, c = u.data; c;) p[c.p] = 1, c = c._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), d = J(t, h, K(t), l, p), t.setAttribute("class", f), o.data = d.firstMPT, t.style.cssText = g, o = o.xfirst = r.parse(t, d.difs, o, s)
                }
            });
            var Qt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, a, n, r, o = this.t.style,
                        s = l.transform.parse;
                    if ("all" === this.e) o.cssText = "", n = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), a = e.length; --a > -1;) i = e[a], l[i] && (l[i].parse === s ? n = !0 : i = "transformOrigin" === i ? St : l[i].p), Ht(o, i);
                    n && (Ht(o, Tt), r = this.t._gsTransform, r && (r.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (wt("clearProps", {
                    parser: function(t, e, a, n, r) {
                        return r = new ft(t, a, 0, 0, r, 2), r.setRatio = Qt, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r
                    }
                }), d = "bezier,throwProps,physicsProps,physics2D".split(","), vt = d.length; vt--;) yt(d[vt]);
            d = o.prototype, d._firstPT = d._lastParsedTransform = d._transform = null, d._onInitTween = function(t, e, s) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = s, this._vars = e, h = e.autoRound, i = !1, a = e.suffixMap || o.suffixMap, n = U(t, ""), r = this._overwriteProps;
                var d, c, g, m, v, _, w, y, b, T = t.style;
                if (u && "" === T.zIndex && (d = G(t, "zIndex", n), ("auto" === d || "" === d) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, d = K(t, n), T.cssText = m + ";" + e, d = J(t, d, K(t)).difs, !Q && x.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, T.cssText = m), this._firstPT = c = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (b = 3 === this._transformType, Tt ? p && (u = !0, "" === T.zIndex && (w = G(t, "zIndex", n), ("auto" === w || "" === w) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, g = c; g && g._next;) g = g._next;
                    y = new ft(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, g), y.setRatio = Tt ? Ft : Wt, y.data = this._transform || Dt(t, n, !0), y.tween = s, y.pr = -1, r.pop()
                }
                if (i) {
                    for (; c;) {
                        for (_ = c._next, g = m; g && g.pr > c.pr;) g = g._next;
                        (c._prev = g ? g._prev : v) ? c._prev._next = c: m = c, (c._next = g) ? g._prev = c : v = c, c = _
                    }
                    this._firstPT = m
                }
                return !0
            }, d.parse = function(t, e, i, r) {
                var o, s, d, u, p, c, f, g, m, v, _ = t.style;
                for (o in e) c = e[o], s = l[o], s ? i = s.parse(t, c, o, this, i, r, e) : (p = G(t, o, n) + "", m = "string" == typeof c, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && k.test(c) ? (m || (c = dt(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = mt(_, o, p, c, !0, "transparent", i, 0, r)) : !m || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (d = parseFloat(p), f = d || 0 === d ? p.substr((d + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (d = it(t, o, n), f = "px") : "left" === o || "top" === o ? (d = $(t, o, n), f = "px") : (d = "opacity" !== o ? 0 : 1, f = "")), v = m && "=" === c.charAt(1), v ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), g = c.replace(y, "")) : (u = parseFloat(c), g = m ? c.replace(y, "") : ""), "" === g && (g = o in a ? a[o] : f), c = u || 0 === u ? (v ? u + d : u) + g : e[o], f !== g && "" !== g && (u || 0 === u) && d && (d = Z(t, o, d, f), "%" === g ? (d /= Z(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = d + "%")) : "em" === g ? d /= Z(t, o, 1, "em") : "px" !== g && (u = Z(t, o, u, g), g = "px"), v && (u || 0 === u) && (c = u + d + g)), v && (u += d), !d && 0 !== d || !u && 0 !== u ? void 0 !== _[o] && (c || "NaN" != c + "" && null != c) ? (i = new ft(_, o, u || d || 0, 0, i, -1, o, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== o && -1 === o.indexOf("Style") ? c : p) : B("invalid " + o + " tween value: " + e[o]) : (i = new ft(_, o, d, u - d, i, 0, o, h !== !1 && ("px" === g || "zIndex" === o), 0, p, c), i.xs0 = g)) : i = mt(_, o, p, c, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                return i
            }, d.setRatio = function(t) {
                var e, i, a, n = this._firstPT,
                    r = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = Math.round(e) : r > e && e > -r && (e = 0), n.type)
                                if (1 === n.type)
                                    if (a = n.l, 2 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + e + n.xs1, a = 1; n.l > a; a++) i += n["xn" + a] + n["xs" + (a + 1)];
                                n.t[n.p] = i
                            } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next
                        } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (e = Math.round(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (a = n.l, i = n.xs0 + e + n.xs1, a = 1; n.l > a; a++) i += n["xn" + a] + n["xs" + (a + 1)];
                                            n.t[n.p] = i
                                        }
                                    } else n.t[n.p] = e + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(t);
                            n = n._next
                        }
            }, d._enableTransforms = function(t) {
                this._transform = this._transform || Dt(this._target, n, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
            };
            var Xt = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            d._addLazySet = function(t, e, i) {
                var a = this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2);
                a.e = i, a.setRatio = Xt, a.data = this
            }, d._linkCSSP = function(t, e, i, a) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, a = !0), i ? i._next = t : a || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, d._kill = function(e) {
                var i, a, n, r = e;
                if (e.autoAlpha || e.alpha) {
                    r = {};
                    for (a in e) r[a] = e[a];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
            };
            var Bt = function(t, e, i) {
                var a, n, r, o;
                if (t.slice)
                    for (n = t.length; --n > -1;) Bt(t[n], e, i);
                else
                    for (a = t.childNodes, n = a.length; --n > -1;) r = a[n], o = r.type, r.style && (e.push(K(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Bt(r, e, i)
            };
            return o.cascadeTo = function(t, i, a) {
                var n, r, o, s, l = e.to(t, i, a),
                    d = [l],
                    h = [],
                    u = [],
                    p = [],
                    c = e._internals.reservedProps;
                for (t = l._targets || l.target, Bt(t, h, p), l.render(i, !0, !0), Bt(t, u), l.render(0, !0, !0), l._enabled(!0), n = p.length; --n > -1;)
                    if (r = J(p[n], h[n], u[n]), r.firstMPT) {
                        r = r.difs;
                        for (o in a) c[o] && (r[o] = a[o]);
                        s = {};
                        for (o in r) s[o] = h[n][o];
                        d.push(e.fromTo(p[n], i, s, r))
                    }
                return d
            }, t.activate([o]), o
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, a = t.split("."),
                n = e;
            for (i = 0; a.length > i; i++) n[a[i]] = n = n[a[i]] || {};
            return n
        },
        a = i("com.greensock.utils"),
        n = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        r = document,
        o = r.defaultView ? r.defaultView.getComputedStyle : function() {},
        s = /([A-Z])/g,
        l = function(t, e, i, a) {
            var n;
            return (i = i || o(t, null)) ? (t = i.getPropertyValue(e.replace(s, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, n = i[e]), a ? n : parseInt(n, 10) || 0
        },
        d = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        h = function(t) {
            var e, i, a, n = [],
                r = t.length;
            for (e = 0; r > e; e++)
                if (i = t[e], d(i))
                    for (a = i.length, a = 0; i.length > a; a++) n.push(i[a]);
                else n.push(i);
            return n
        },
        u = ")eefec303079ad17405c",
        p = /(?:<br>|<br\/>|<br \/>)/gi,
        c = r.all && !r.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (c ? "*display:inline;*zoom:1;'" : "'"),
        g = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        },
        m = a.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = m.selector(t)), !t) throw "cannot split a null element.";
            this.elements = d(t) ? h(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        v = function(t, e, i) {
            var a = t.nodeType;
            if (1 === a || 9 === a || 11 === a)
                for (t = t.firstChild; t; t = t.nextSibling) v(t, e, i);
            else(3 === a || 4 === a) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        _ = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        w = function(t, e, i, a, s) {
            p.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(p, u));
            var d, h, c, f, m, w, y, b, x, T, k, S, O, L, P = n(t),
                C = e.type || e.split || "chars,words,lines",
                A = -1 !== C.indexOf("lines") ? [] : null,
                M = -1 !== C.indexOf("words"),
                z = -1 !== C.indexOf("chars"),
                R = "absolute" === e.position || e.absolute === !0,
                I = R ? "&#173; " : " ",
                j = -999,
                D = o(t),
                W = l(t, "paddingLeft", D),
                F = l(t, "borderBottomWidth", D) + l(t, "borderTopWidth", D),
                E = l(t, "borderLeftWidth", D) + l(t, "borderRightWidth", D),
                H = l(t, "paddingTop", D) + l(t, "paddingBottom", D),
                N = l(t, "paddingLeft", D) + l(t, "paddingRight", D),
                Q = l(t, "textAlign", D, !0),
                X = t.clientHeight,
                B = t.clientWidth,
                Y = "</div>",
                V = g(e.wordsClass),
                q = g(e.charsClass),
                U = -1 !== (e.linesClass || "").indexOf("++"),
                G = e.linesClass,
                Z = -1 !== P.indexOf("<"),
                $ = !0,
                K = [],
                J = [],
                tt = [];
            for (U && (G = G.split("++").join("")), Z && (P = P.split("<").join("{{LT}}")), d = P.length, f = V(), m = 0; d > m; m++)
                if (y = P.charAt(m), ")" === y && P.substr(m, 20) === u) f += ($ ? Y : "") + "<BR/>", $ = !1, m !== d - 20 && P.substr(m + 20, 20) !== u && (f += " " + V(), $ = !0), m += 19;
                else if (" " === y && " " !== P.charAt(m - 1) && m !== d - 1 && P.substr(m - 20, 20) !== u) {
                for (f += $ ? Y : "", $ = !1;
                    " " === P.charAt(m + 1);) f += I, m++;
                (")" !== P.charAt(m + 1) || P.substr(m + 1, 20) !== u) && (f += I + V(), $ = !0)
            } else f += z && " " !== y ? q() + y + "</div>" : y;
            for (t.innerHTML = f + ($ ? Y : ""), Z && v(t, "{{LT}}", "<"), w = t.getElementsByTagName("*"), d = w.length, b = [], m = 0; d > m; m++) b[m] = w[m];
            if (A || R)
                for (m = 0; d > m; m++) x = b[m], c = x.parentNode === t, (c || R || z && !M) && (T = x.offsetTop, A && c && T !== j && "BR" !== x.nodeName && (h = [], A.push(h), j = T), R && (x._x = x.offsetLeft, x._y = T, x._w = x.offsetWidth, x._h = x.offsetHeight), A && (M !== c && z || (h.push(x), x._x -= W), c && m && (b[m - 1]._wordEnd = !0), "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && A.push([])));
            for (m = 0; d > m; m++) x = b[m], c = x.parentNode === t, "BR" !== x.nodeName ? (R && (S = x.style, M || c || (x._x += x.parentNode._x, x._y += x.parentNode._y), S.left = x._x + "px", S.top = x._y + "px", S.position = "absolute", S.display = "block", S.width = x._w + 1 + "px", S.height = x._h + "px"), M ? c && "" !== x.innerHTML ? J.push(x) : z && K.push(x) : c ? (t.removeChild(x), b.splice(m--, 1), d--) : !c && z && (T = !A && !R && x.nextSibling, t.appendChild(x), T || t.appendChild(r.createTextNode(" ")), K.push(x))) : A || R ? (t.removeChild(x), b.splice(m--, 1), d--) : M || t.appendChild(x);
            if (A) {
                for (R && (k = r.createElement("div"), t.appendChild(k), O = k.offsetWidth + "px", T = k.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(k)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (L = !R || !M && !z, m = 0; A.length > m; m++) {
                    for (h = A[m], k = r.createElement("div"), k.style.cssText = "display:block;text-align:" + Q + ";position:" + (R ? "absolute;" : "relative;"), G && (k.className = G + (U ? m + 1 : "")), tt.push(k), d = h.length, w = 0; d > w; w++) "BR" !== h[w].nodeName && (x = h[w], k.appendChild(x), L && (x._wordEnd || M) && k.appendChild(r.createTextNode(" ")), R && (0 === w && (k.style.top = x._y + "px", k.style.left = W + T + "px"), x.style.top = "0px", T && (x.style.left = x._x - T + "px")));
                    0 === d && (k.innerHTML = "&nbsp;"), M || z || (k.innerHTML = n(k).split(String.fromCharCode(160)).join(" ")), R && (k.style.width = O, k.style.height = x._h + "px"), t.appendChild(k)
                }
                t.style.cssText = S
            }
            R && (X > t.clientHeight && (t.style.height = X - H + "px", X > t.clientHeight && (t.style.height = X + F + "px")), B > t.clientWidth && (t.style.width = B - N + "px", B > t.clientWidth && (t.style.width = B + E + "px"))), _(i, K), _(a, J), _(s, tt)
        },
        y = m.prototype;
    y.split = function(t) {
        this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, w(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, y.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, m.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (m.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, m.version = "0.3.3"
}(_gsScope),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e());
}("SplitText");
try {
    window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (e) {}
if (1 == window.tplogs) try {
    console.groupEnd()
} catch (e) {}! function(t, e) {
    t.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    }, t.expr[":"].uncached = function(e) {
        var i = document.createElement("img");
        return i.src = e.src, t(e).is('img[src!=""]') && !i.complete
    }, t.fn.waitForImages = function(e, i, a) {
        if (t.isPlainObject(arguments[0]) && (i = e.each, a = e.waitForAll, e = e.finished), e = e || t.noop, i = i || t.noop, a = !!a, !t.isFunction(e) || !t.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var n = t(this),
                r = [];
            if (a) {
                var o = t.waitForImages.hasImageProperties || [],
                    s = /url\((['"]?)(.*?)\1\)/g;
                n.find("*").each(function() {
                    var e = t(this);
                    e.is("img:uncached") && r.push({

                        src: e.attr("src"),
                        element: e[0]
                    }), t.each(o, function(t, i) {
                        var a = e.css(i);
                        if (!a) return !0;
                        for (var n; n = s.exec(a);) r.push({
                            src: n[2],
                            element: e[0]
                        })
                    })
                })
            } else n.find("img:uncached").each(function() {
                r.push({
                    src: this.src,
                    element: this
                })
            });
            var l = r.length,
                d = 0;
            0 == l && e.call(n[0]), t.each(r, function(a, r) {
                var o = new Image;
                t(o).bind("load error", function(t) {
                    return d++, i.call(r.element, d, l, "load" == t.type), d == l ? (e.call(n[0]), !1) : void 0
                }), o.src = r.src
            })
        })
    }
}(jQuery), ! function(t, e) {
    "use strict";
    t.fn.extend({
        revolution: function(a) {
            var n = {
                delay: 9e3,
                responsiveLevels: 4064,
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAutoWidth: "on",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%"
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "on",
                    opacity: "on",
                    disable_onmobile: "off"
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                    },
                    thumbnails: {
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return a = t.extend(!0, {}, n, a), this.each(function() {
                var n = t(this);
                "hero" == a.sliderType && n.find(">ul>li").each(function(e) {
                    e > 0 && t(this).remove()
                }), a.jsFileLocation = a.jsFileLocation || s("themepunch.revolution.min.js"), a.jsFileLocation = a.jsFileLocation + a.extensions, a.scriptsneeded = r(a, n), a.curWinRange = 0, t(this).on("scriptsloaded", function() {
                    return a.modulesfailing ? (n.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + a.errorm + "</div>").show(), !1) : (i.migration != e && (a = i.migration(n, a)), punchgs.force3D = !0, "on" !== a.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), d(n, a), void u(n, a))
                }), o(n, a.scriptsneeded)
            })
        },
        revaddcallback: function(i) {
            return this.each(function() {
                var a = t(this);
                if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    r.callBackArray === e && (r.callBackArray = new Array), r.callBackArray.push(i)
                }
            })
        },
        revgetparallaxproc: function() {
            var i = t(this);
            if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                var a = i.parent().find(".tp-bannertimer"),
                    n = a.data("opt");
                return n.scrollproc
            }
        },
        revdebugmode: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.debugMode = !0, m(i, n)
                }
            })
        },
        revscroll: function(i) {
            return this.each(function() {
                var a = t(this);
                a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0 && t("body,html").animate({
                    scrollTop: a.offset().top + opt.li.height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    m(i, n)
                }
            })
        },
        revkill: function() {
            var a = this,
                n = t(this);
            if (punchgs.TweenLite.killDelayedCallsTo(showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                n.data("conthover", 1), n.data("conthover-changed", 1), n.trigger("revolution.slide.onpause");
                var r = n.parent().find(".tp-bannertimer"),
                    o = r.data("opt");
                o.tonpause = !0, n.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), n.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var s = "resize.revslider-" + n.attr("id");
                t(window).off(s), n.find("*").each(function() {
                    var i = t(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != e && i.data("tween").kill(), i.data("kenburn") != e && i.data("kenburn").kill(), i.data("timeline_out") != e && i.data("timeline_out").kill(), i.data("timeline") != e && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), r.remove();
                try {
                    n.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (l) {}
                try {
                    n.closest(".rev_slider_wrapper").remove()
                } catch (l) {}
                try {
                    n.remove()
                } catch (l) {}
                return n.empty(), n.html(), n = null, o = null, delete a.c, delete a.opt, !0
            }
            return !1
        },
        revpause: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.tonpause = !0, i.trigger("stoptimer")
                }
            })
        },
        revresume: function() {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.tonpause = !1, i.trigger("starttimer")
                }
            })
        },
        revnext: function() {
            return this.each(function() {
                var a = t(this);
                if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    i.callingNewSlide(r, a, 1)
                }
            })
        },
        revprev: function() {
            return this.each(function() {
                var a = t(this);
                if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        r = n.data("opt");
                    i.callingNewSlide(r, a, -1)
                }
            })
        },
        revmaxslide: function() {
            return t(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function() {
            var i = t(this);
            if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                var a = i.parent().find(".tp-bannertimer"),
                    n = a.data("opt");
                return parseInt(n.act, 0) + 1
            }
        },
        revlastslide: function() {
            return t(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function(a) {
            return this.each(function() {
                var n = t(this);
                if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                    var r = n.parent().find(".tp-bannertimer"),
                        o = r.data("opt");
                    i.callingNewSlide(o, n, "to" + (a - 1))
                }
            })
        },
        revcallslidewithid: function(a) {
            return this.each(function() {
                var n = t(this);
                if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                    var r = n.parent().find(".tp-bannertimer"),
                        o = r.data("opt");
                    i.callingNewSlide(o, n, a)
                }
            })
        }
    });
    var i = t.fn.revolution;
    t.extend(!0, i, {
        simp: function(t, e, i) {
            var a = Math.abs(t) - Math.floor(Math.abs(t / e)) * e;
            return i ? a : 0 > t ? -1 * a : a
        },
        iOSVersion: function() {
            var t = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t
        },
        isIE: function(e, i) {
            var a = t('<div style="display:none;"/>').appendTo(t("body"));
            a.html("<!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
            var n = a.find("a").length;
            return a.remove(), n
        },
        is_mobile: function() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                e = !1;
            for (var i in t) navigator.userAgent.split(t[i]).length > 1 && (e = !0);
            return e
        },
        callBackHandling: function(e, i, a) {
            try {
                e.callBackArray && t.each(e.callBackArray, function(t, e) {
                    e && e.inmodule && e.inmodule === i && e.atposition && e.atposition === a && e.callback && e.callback.call()
                })
            } catch (n) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function() {
            var t, e = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (t = i.match(/version\/([\.\d]+)/i)) && (a[2] = t[1]), a = a ? [a[1], a[2]] : [e, navigator.appVersion, "-?"], a[0]
        },
        get_browser_version: function() {
            var t, e = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (t = i.match(/version\/([\.\d]+)/i)) && (a[2] = t[1]), a = a ? [a[1], a[2]] : [e, navigator.appVersion, "-?"], a[1]
        },
        getHorizontalOffset: function(t, e) {
            var i = h(t, ".outer-left"),
                a = h(t, ".outer-right");
            switch (e) {
                case "left":
                    return i;
                case "right":
                    return a;
                case "both":
                    return i + a
            }
        },
        callingNewSlide: function(e, i, a) {
            var n = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index(),
                r = 0;
            i.find(".next-revslide").removeClass("next-revslide"), a && t.isNumeric(a) || a.match(/to/g) ? (1 === a || -1 === a ? (r = n + a, r = 0 > r ? e.slideamount - 1 : r >= e.slideamount ? 0 : r) : (a = t.isNumeric(a) ? a : parseInt(a.split("to")[1], 0), r = 0 > a ? 0 : a > e.slideamount - 1 ? e.slideamount - 1 : a), i.find(".tp-revslider-slidesli:eq(" + r + ")").addClass("next-revslide")) : a && i.find(".tp-revslider-slidesli").each(function() {
                var e = t(this);
                e.data("index") === a && e.addClass("next-revslide")
            }), r = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), r !== n && -1 != r ? P(i, e) : i.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function(i, a) {
            a.slotw = Math.ceil(a.width / a.slots), a.sloth = Math.ceil("fullscreen" == a.sliderLayout ? t(window).height() / a.slots : a.height / a.slots), "on" == a.autoHeight && i !== e && "" !== i && (a.sloth = Math.ceil(i.height() / a.slots))
        },
        setSize: function(i) {
            var a = (i.top_outer || 0) + (i.bottom_outer || 0),
                n = parseInt(i.carousel.padding_top || 0, 0),
                r = parseInt(i.carousel.padding_bottom || 0, 0),
                o = i.gridheight[i.curWinRange];
            if (o = o < i.minHeight ? i.minHeight : o, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, {
                    maxHeight: o + "px"
                }), i.c.css({
                    marginTop: n,
                    marginBottom: r
                }), i.width = i.ul.width(), i.height = i.ul.height(), v(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout) {
                i.height = i.bw * i.gridheight[i.curWinRange];
                var s = (i.c.parent().width(), t(window).height());
                if (i.fullScreenOffsetContainer != e) {
                    try {
                        var l = i.fullScreenOffsetContainer.split(",");
                        l && t.each(l, function(e, i) {
                            s = t(i).length > 0 ? s - t(i).outerHeight(!0) : s
                        })
                    } catch (d) {}
                    try {
                        i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != e && i.fullScreenOffset.length > 0 ? s -= t(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != e && i.fullScreenOffset.length > 0 && (s -= parseInt(i.fullScreenOffset, 0))
                    } catch (d) {}
                }
                s = s < i.minHeight ? i.minHeight : s, s -= a, i.c.parent().height(s), i.c.closest(".rev_slider_wrapper").height(s), i.c.css({
                    height: "100%"
                }), i.height = s, i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight)
            } else i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
            var h = {
                height: n + r + a + i.height
            };
            i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(h), i.c.closest(".rev_slider_wrapper").css(h), v(i)
        },
        enterInViewPort: function(a) {
            a.waitForCountDown && (z(a.c, a), a.waitForCountDown = !1), a.waitForFirstSlide && (P(a.c, a), a.waitForFirstSlide = !1), ("playing" == a.sliderlaststatus || a.sliderlaststatus == e) && a.c.trigger("starttimer"), a.lastplayedvideos != e && a.lastplayedvideos.length > 0 && t.each(a.lastplayedvideos, function(t, e) {
                i.playVideo(e, a)
            })
        },
        leaveViewPort: function(a) {
            a.sliderlaststatus = a.sliderstatus, a.c.trigger("stoptimer"), a.playingvideos != e && a.playingvideos.length > 0 && (a.lastplayedvideos = t.extend(!0, [], a.playingvideos), a.playingvideos && t.each(a.playingvideos, function(t, e) {
                i.stopVideo && i.stopVideo(e, a)
            }))
        }
    });
    var a = i.is_mobile(),
        n = function(i, a) {
            return t("body").data(i) ? !1 : a.filesystem ? (a.errorm === e && (a.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), a.errorm = a.errorm + '<br>&lt;script type="text/javascript" src="' + a.jsFileLocation + i + a.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(a.jsFileLocation + i + a.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), a.modulesfailing = !0, !1) : (t.ajax({
                url: a.jsFileLocation + i + a.extensions_suffix,
                dataType: "script",
                cache: !0,
                error: function(t) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + a.extensions_suffix + " on Path:" + a.jsFileLocation), console.info(t)
                }
            }), void t("body").data(i, !0))
        },
        r = function(a, r) {
            var o = new Object,
                s = a.navigation;
            return o.kenburns = !1, o.parallax = !1, o.carousel = !1, o.navigation = !1, o.videos = !1, o.actions = !1, o.layeranim = !1, o.migration = !1, r.data("version") && r.data("version").match(/5./gi) ? (r.find("img").each(function() {
                "on" == t(this).data("kenburns") && (o.kenburns = !0)
            }), ("carousel" == a.sliderType || "on" == s.keyboardNavigation || "on" == s.mouseScrollNavigation || "on" == s.touch.touchenabled || s.arrows.enable || s.bullets.enable || s.thumbnails.enable || s.tabs.enable) && (o.navigation = !0), r.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                var i = t(this);
                (i.data("ytid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (o.videos = !0), (i.data("vimeoid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (o.videos = !0), i.data("actions") !== e && (o.actions = !0), o.layeranim = !0
            }), r.find("li").each(function() {
                t(this).data("link") && t(this).data("link") != e && (o.layeranim = !0, o.actions = !0)
            }), !o.videos && (r.find(".rs-background-video-layer").length > 0 || r.find(".tp-videolayer").length > 0 || r.find("iframe").length > 0 || r.find("video").length > 0) && (o.videos = !0), "carousel" == a.sliderType && (o.carousel = !0), ("off" !== a.parallax.type || a.viewPort.enable || "true" == a.viewPort.enable) && (o.parallax = !0)) : (o.kenburns = !0, o.parallax = !0, o.carousel = !1, o.navigation = !0, o.videos = !0, o.actions = !0, o.layeranim = !0, o.migration = !0), "hero" == a.sliderType && (o.carousel = !1, o.navigation = !1), window.location.href.match(/file:/gi) && (o.filesystem = !0, a.filesystem = !0), o.videos && "undefined" == typeof i.isVideoPlaying && n("revolution.extension.video", a), o.carousel && "undefined" == typeof i.prepareCarousel && n("revolution.extension.carousel", a), o.carousel || "undefined" != typeof i.animateSlide || n("revolution.extension.slideanims", a), o.actions && "undefined" == typeof i.checkActions && n("revolution.extension.actions", a), o.layeranim && "undefined" == typeof i.handleStaticLayers && n("revolution.extension.layeranimation", a), o.kenburns && "undefined" == typeof i.stopKenBurn && n("revolution.extension.kenburn", a), o.navigation && "undefined" == typeof i.createNavigation && n("revolution.extension.navigation", a), o.migration && "undefined" == typeof i.migration && n("revolution.extension.migration", a), o.parallax && "undefined" == typeof i.checkForParallax && n("revolution.extension.parallax", a), o
        },
        o = function(t, e) {
            e.filesystem || "undefined" != typeof punchgs && (!e.kenburns || e.kenburns && "undefined" != typeof i.stopKenBurn) && (!e.navigation || e.navigation && "undefined" != typeof i.createNavigation) && (!e.carousel || e.carousel && "undefined" != typeof i.prepareCarousel) && (!e.videos || e.videos && "undefined" != typeof i.resetVideo) && (!e.actions || e.actions && "undefined" != typeof i.checkActions) && (!e.layeranim || e.layeranim && "undefined" != typeof i.handleStaticLayers) && (!e.migration || e.migration && "undefined" != typeof i.migration) && (!e.parallax || e.parallax && "undefined" != typeof i.checkForParallax) && (e.carousel || !e.carousel && "undefined" != typeof i.animateSlide) ? t.trigger("scriptsloaded") : setTimeout(function() {
                o(t, e)
            }, 50)
        },
        s = function() {
            var e = new RegExp("themepunch.revolution.min.js", "gi"),
                i = "";
            return t("script").each(function() {
                var a = t(this).attr("src");
                a && a.match(e) && (i = a)
            }), i = i.replace("jquery.themepunch.revolution.min.js", ""), i = i.replace("jquery.themepunch.revolution.js", ""), i = i.split("?")[0]
        },
        l = function(e) {
            var i = 9999,
                a = 0,
                n = 0,
                r = 0,
                o = t(window).width();
            e.responsiveLevels && e.responsiveLevels.length && t.each(e.responsiveLevels, function(t, e) {
                e > o && (0 == a || a > e) && (i = e, r = t, a = e), o > e && e > a && (a = e, n = t)
            }), i > a && (r = n), e.curWinRange = r
        },
        d = function(t, e) {
            e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%"
        },
        h = function(e, i) {
            var a = 0;
            return e.find(i).each(function() {
                var e = t(this);
                !e.hasClass("tp-forcenotvisible") && a < e.outerWidth() && (a = e.outerWidth())
            }), a
        },
        u = function(n, r) {
            if (n == e) return !1;
            if (n.data("aimg") != e && ("enabled" == n.data("aie8") && i.isIE(8) || "enabled" == n.data("amobile") && a) && n.html('<img class="tp-slider-alternative-image" src="' + n.data("aimg") + '">'), n.find(">ul").addClass("tp-revslider-mainul"), r.c = n, r.ul = n.find(".tp-revslider-mainul"), r.cid = n.attr("id"), r.ul.css({
                    visibility: "visible"
                }), r.slideamount = r.ul.find(">li").length, r.slayers = n.find(".tp-static-layers"), r.ul.find(">li").each(function(e) {
                    t(this).data("originalindex", e)
                }), "on" == r.shuffle) {
                var o = new Object,
                    s = r.ul.find(">li:first-child");
                o.fstransition = s.data("fstransition"), o.fsmasterspeed = s.data("fsmasterspeed"), o.fsslotamount = s.data("fsslotamount");
                for (var d = 0; d < r.slideamount; d++) {
                    var h = Math.round(Math.random() * r.slideamount);
                    r.ul.find(">li:eq(" + h + ")").prependTo(r.ul)
                }
                var u = r.ul.find(">li:first-child");
                u.data("fstransition", o.fstransition), u.data("fsmasterspeed", o.fsmasterspeed), u.data("fsslotamount", o.fsslotamount), r.li = r.ul.find(">li")
            }
            if (r.li = r.ul.find(">li"), r.thumbs = new Array, r.slots = 4, r.act = -1, r.firststart = 1, r.loadqueue = new Array, r.syncload = 0, r.conw = n.width(), r.conh = n.height(), r.responsiveLevels.length > 1 ? r.responsiveLevels[0] = 9999 : r.responsiveLevels = 9999, t.each(r.li, function(i, a) {
                    var a = t(a),
                        n = a.find(".rev-slidebg") || a.find("img").first(),
                        o = 0;
                    a.addClass("tp-revslider-slidesli"), a.data("index") === e && a.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var s = new Object;
                    s.params = new Array, s.id = a.data("index"), s.src = a.data("thumb") !== e ? a.data("thumb") : n.data("lazyload") !== e ? n.data("lazyload") : n.attr("src"), a.data("title") !== e && s.params.push({
                        from: RegExp("\\{\\{title\\}\\}", "g"),
                        to: a.data("title")
                    }), a.data("description") !== e && s.params.push({
                        from: RegExp("\\{\\{description\\}\\}", "g"),
                        to: a.data("description")
                    });
                    for (var o = 1; 10 >= o; o++) a.data("param" + o) !== e && s.params.push({
                        from: RegExp("\\{\\{param" + o + "\\}\\}", "g"),
                        to: a.data("param" + o)
                    });
                    if (r.thumbs.push(s), a.data("origindex", a.index()), a.data("link") != e) {
                        var l = a.data("link"),
                            d = a.data("target") || "_self",
                            h = "back" === a.data("slideindex") ? 0 : 60,
                            u = a.data("linktoslide"),
                            p = u;
                        u != e && "next" != u && "prev" != u && r.li.each(function() {
                            var e = t(this);
                            e.data("origindex") + 1 == p && (u = e.index() + 1)
                        }), "slide" != l && (u = "no");
                        var c = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + h + ';" data-x="center" data-y="center" ',
                            f = "scroll_under" === u ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : '[{"event":"click","action":"jumptoslide","slide":"2","delay":"0.2"}]';
                        c = "no" == u ? c + ' data-start="0">' : c + "data-actions='" + f + '\' data-start="0">', c += '<a style="width:100%;height:100%;display:block"', c = "slide" != l ? c + ' target="' + d + '" href="' + l + '"' : c, c += '><span style="width:100%;height:100%;display:block"></span></a></div>', a.append(c)
                    }
                }), r.rle = r.responsiveLevels.length || 1, r.gridwidth = p(r.gridwidth, r.rle), r.gridheight = p(r.gridheight, r.rle), "on" == r.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (n.find(".tp-caption").each(function() {
                    var e = t(this);
                    e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400)
                }), r.li.each(function() {
                    var e = t(this);
                    e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
                    var i = e.find(".rev-slidebg") || e.find(">img").first();
                    i.data("kenburns", "off")
                })), r.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.autoHeight = "fullscreen" == r.sliderLayout ? "on" : r.autoHeight, "fullwidth" == r.sliderLayout && "off" == r.autoHeight && n.css({
                    maxHeight: r.gridheight[r.curWinRange] + "px"
                }), "auto" != r.sliderLayout && 0 == n.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== r.sliderLayout || "on" != r.fullScreenAutoWidth)) {
                var v = n.parent(),
                    w = v.css("marginBottom"),
                    y = v.css("marginTop");
                w = w === e ? 0 : w, y = y === e ? 0 : y, v.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + y + ";margin-bottom:" + w + '"></div>'), n.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + n.height() + 'px"></div>'), n.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), n.parent().css({
                    position: "absolute"
                })
            }
            if (r.shadow !== e && r.shadow > 0 && (n.parent().addClass("tp-shadow" + r.shadow), n.parent().append('<div class="tp-shadowcover"></div>'), n.parent().find(".tp-shadowcover").css({
                    backgroundColor: n.parent().css("backgroundColor"),
                    backgroundImage: n.parent().css("backgroundImage")
                })), l(r), !n.hasClass("revslider-initialised")) {
                n.addClass("revslider-initialised"), n.addClass("tp-simpleresponsive"), n.attr("id") == e && n.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), r.firefox13 = !1, r.ie = !t.support.opacity, r.ie9 = 9 == document.documentMode, r.origcd = r.delay;
                var b = t.fn.jquery.split("."),
                    x = parseFloat(b[0]),
                    T = parseFloat(b[1]);
                parseFloat(b[2] || "0"), 1 == x && 7 > T && n.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + b + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), x > 1 && (r.ie = !1);
                var k = new Object;
                k.addedyt = 0, k.addedvim = 0, k.addedvid = 0, n.find(".tp-caption, .rs-background-video-layer").each(function() {
                    var n = t(this),
                        o = n.data("autoplayonlyfirsttime"),
                        s = n.data("autoplay");
                    n.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(n, r);
                    var l = 0;
                    if (n.find("iframe").each(function() {
                            punchgs.TweenLite.set(t(this), {
                                autoAlpha: 0
                            }), l++
                        }), l > 0 && n.data("iframes", !0), n.hasClass("tp-caption")) {
                        var d = n.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                        n.wrap('<div class="tp-parallax-wrap" style="' + d + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + d + 'position:absolute;"><div class="tp-mask-wrap" style="' + d + 'position:absolute" ></div></div></div>');
                        var h = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                            u = n.closest(".tp-loop-wrap");
                        t.each(h, function(t, e) {
                            var i = n.find(".rs-" + e),
                                a = i.data() || "";
                            "" != a && (u.data(a), u.addClass("rs-" + e), i.children(0).unwrap(), n.data("loopanimation", "on"))
                        }), punchgs.TweenLite.set(n, {
                            visibility: "hidden"
                        })
                    }
                    var p = n.data("actions");
                    p !== e && i.checkActions(n, r, p), c(n, r), i.checkVideoApis && (k = i.checkVideoApis(n, r, k)), a && ((1 == o || "true" == o) && (n.data("autoplayonlyfirsttime", "false"), o = !1), (1 == s || "true" == s || "on" == s || "1sttime" == s) && (n.data("autoplay", "off"), s = "off")), (1 == o || "true" == o || "1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == s || "true" == s || "on" == s || "no1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), n.hover(function() {
                    n.trigger("tp-mouseenter"), r.overcontainer = !0
                }, function() {
                    n.trigger("tp-mouseleft"), r.overcontainer = !1
                }), n.on("mouseover", function() {
                    n.trigger("tp-mouseover"), r.overcontainer = !0
                }), n.find(".tp-caption video").each(function() {
                    var e = t(this);
                    e.removeClass("video-js vjs-default-skin"), e.attr("preload", ""), e.css({
                        display: "none"
                    })
                }), "standard" !== r.sliderType && (r.lazyType = "all"), S(n.find(".tp-static-layers"), r, 0), L(n.find(".tp-static-layers img"), r, function() {
                    n.find(".tp-static-layers img").each(function() {
                        var i = t(this),
                            a = i.data("lazyload") != e ? i.data("lazyload") : i.attr("src"),
                            n = O(r, a);
                        i.attr("src", n.src)
                    })
                }), r.li.each(function(e) {
                    var i = t(this);
                    ("all" == r.lazyType || "smart" == r.lazyType && (0 == e || 1 == e || e == r.slideamount || e == r.slideamount - 1)) && (S(i, r, e), L(i, r, function() {
                        "carousel" == r.sliderType && punchgs.TweenLite.to(i, 1, {
                            autoAlpha: 1,
                            ease: punchgs.Power3.easeInOut
                        })
                    }))
                });
                var C = D("#")[0];
                if (C.length < 9 && C.split("slide").length > 1) {
                    var A = parseInt(C.split("slide")[1], 0);
                    1 > A && (A = 1), A > r.slideamount && (A = r.slideamount), r.startWithSlide = A - 1
                }
                n.append('<div class="tp-loader ' + r.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === n.find(".tp-bannertimer").length && n.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), n.find(".tp-bannertimer").css({
                    width: "0%"
                }), n.find(".tp-bannertimer").data("opt", r), r.ul.css({
                    display: "block"
                }), _(n, r), "off" !== r.parallax.type && i.checkForParallax(n, r), i.setSize(r), "hero" !== r.sliderType && i.createNavigation(n, r), i.resizeThumbsTabs && i.resizeThumbsTabs(r), f(r);
                var M = r.viewPort;
                r.inviewport = !1, M != e && M.enable && (M.visible_area = parseFloat(M.visible_area) / 100, M.visible_area = M.visible_area < .001 ? 100 * M.visible_area : M.visible_area, i.scrollTicker && i.scrollTicker(r, n)), setTimeout(function() {
                    "carousel" == r.sliderType && i.prepareCarousel(r), !M.enable || M.enable && r.inviewport || M.enable && !r.inviewport && "wait" == !M.outof ? P(n, r) : r.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(r), r.slideamount > 1 && (!M.enable || M.enable && r.inviewport ? z(n, r) : r.waitForCountDown = !0), setTimeout(function() {
                        n.trigger("revolution.slide.onloaded")
                    }, 100)
                }, r.startDelay), r.startDelay = 0, t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                    t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
                        t(window).trigger("resize")
                    }, 200)
                });
                var R = "resize.revslider-" + n.attr("id");
                t(window).on(R, function() {
                    return n == e ? !1 : (0 != t("body").find(n) && f(r), void((n.outerWidth(!0) != r.width || n.is(":hidden") || "fullscreen" == r.sliderLayout && t(window).height() != r.lastwindowheight) && (r.lastwindowheight = t(window).height(), m(n, r))))
                }), g(n, r), f(r), r.disableFocusListener || "true" == r.disableFocusListener || r.disableFocusListener === !0 || j(n, r)
            }
        },
        p = function(e, i) {
            if (!t.isArray(e)) {
                var a = e;
                e = new Array, e.push(a)
            }
            if (e.length < i)
                for (var a = e[e.length - 1], n = 0; n < i - e.length + 2; n++) e.push(a);
            return e
        },
        c = function(a, n) {
            "sliderenter" === a.data("start") && (n.layersonhover === e && (n.c.on("tp-mouseenter", function() {
                n.layersonhover && t.each(n.layersonhover, function(t, a) {
                    a.data("animdirection", "in");
                    var r = a.data("timeline_out"),
                        o = "carousel" === n.sliderType ? 0 : n.width / 2 - n.gridwidth[n.curWinRange] * n.bw / 2,
                        s = 0,
                        l = a.closest(".tp-revslider-slidesli");
                    if (l.hasClass("active-revslide") || l.hasClass("processing-revslide")) {
                        r != e && (r.pause(0), r.kill()), i.animateSingleCaption(a, n, o, s, 0, !1, !0);
                        var d = a.data("timeline");
                        a.data("triggerstate", "on"), d.play(0)
                    }
                })
            }), n.c.on("tp-mouseleft", function() {
                n.layersonhover && t.each(n.layersonhover, function(t, e) {
                    e.data("animdirection", "out"), e.data("triggered", !0), e.data("triggerstate", "off"), i.stopVideo && i.stopVideo(e, n), i.endMoveCaption && i.endMoveCaption(e, null, null, n)
                })
            }), n.layersonhover = new Array), n.layersonhover.push(a))
        },
        f = function(e) {
            if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) {
                var a = i.getHorizontalOffset(e.c, "left");
                punchgs.TweenLite.set(e.ul, {
                    left: a,
                    width: e.c.width() - i.getHorizontalOffset(e.c, "both")
                })
            } else {
                var a = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i.getHorizontalOffset(e.c, "left"));
                punchgs.TweenLite.set(e.c.parent(), {
                    left: 0 - a + "px",
                    width: t(window).width() - i.getHorizontalOffset(e.c, "both")
                })
            }
            e.slayers && punchgs.TweenLite.set(e.slayers, {
                left: a
            })
        },
        g = function(a, n, r) {
            var o = a.parent();
            t(window).width() < n.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != o.css("display") && o.data("olddisplay", o.css("display")), o.css({
                display: "none"
            })) : a.is(":hidden") && r && (o.css(o.data("olddisplay") != e && "undefined" != o.data("olddisplay") && "none" != o.data("olddisplay") ? {
                display: o.data("olddisplay")
            } : {
                display: "block"
            }), a.trigger("restarttimer"), setTimeout(function() {
                m(a, n)
            }, 150)), i.hideUnHideNav && i.hideUnHideNav(n)
        },
        m = function(t, a) {
            if (l(a), !i.resizeThumbsTabs || i.resizeThumbsTabs(a) === !0) {
                if (g(t, a, !0), f(a), "carousel" == a.sliderType && i.prepareCarousel(a, !0), t === e) return !1;
                i.setSize(a), a.conw = a.c.width(), a.conh = a.c.height();
                var n = t.find(".active-revslide .slotholder"),
                    r = t.find(".processing-revslide .slotholder");
                w(t, a, t, 2), "standard" === a.sliderType && (punchgs.TweenLite.set(r.find(".defaultimg"), {
                    opacity: 0
                }), n.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" == a.sliderType && a.lastconw != a.conw && (clearTimeout(a.pcartimer), a.pcartimer = setTimeout(function() {
                    i.prepareCarousel(a, !0)
                }, 100), a.lastconw = a.conw), i.manageNavigation && i.manageNavigation(a), i.animateTheCaptions && i.animateTheCaptions(t.find(".active-revslide"), a, !0), "on" == r.data("kenburns") && i.startKenBurn(r, a, r.data("kbtl").progress()), "on" == n.data("kenburns") && i.startKenBurn(n, a, n.data("kbtl").progress())
            }
        },
        v = function(t) {
            t.bw = t.width / t.gridwidth[t.curWinRange], t.bh = t.height / t.gridheight[t.curWinRange], t.bh > t.bw ? t.bh = t.bw : t.bw = t.bh, (t.bh > 1 || t.bw > 1) && (t.bw = 1, t.bh = 1)
        },
        _ = function(n, r) {
            if (n.find(".tp-caption").each(function() {
                    var i = t(this);
                    i.data("transition") !== e && i.addClass(i.data("transition"))
                }), r.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: n.parent().css("maxHeight")
                }), "on" == r.autoHeight && (r.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), n.css({
                    maxHeight: "none"
                }), n.parent().css({
                    maxHeight: "none"
                })), r.li.each(function(i) {
                    var a = t(this),
                        n = a.data("originalindex");
                    (r.startWithSlide != e && n == r.startWithSlide || r.startWithSlide === e && 0 == i) && a.addClass("next-revslide"), a.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === r.sliderType) {
                r.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var o = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                r.c.parent().prepend(o), r.c.parent().append(o), i.prepareCarousel(r)
            }
            n.parent().css({
                overflow: "visible"
            }), r.li.find(">img").each(function() {
                var i = t(this),
                    n = i.closest("li").find(".rs-background-video-layer");
                i.addClass("defaultimg"), "on" == r.panZoomDisableOnMobile && a && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
                var o = i.data();
                i.closest(".slotholder").data(o), n.length > 0 && o.bgparallax != e && n.data("bgparallax", o.bgparallax), "none" != r.dottedOverlay && r.dottedOverlay != e && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + r.dottedOverlay + '"></div>');
                var s = i.attr("src");
                o.src = s, o.bgfit = o.bgfit || "cover", o.bgrepeat = o.bgrepeat || "no-repeat", o.bgposition = o.bgposition || "center center";
                var l = i.closest(".slotholder");
                i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + o.bgrepeat + ";background-image:url(" + s + ");background-size:" + o.bgfit + ";background-position:" + o.bgposition + ';width:100%;height:100%;"></div>');
                var d = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                i.replaceWith(d), i = l.find(".tp-bgimg"), i.data(o), i.attr("src", s), ("standard" === r.sliderType || "undefined" === r.sliderType) && i.css({
                    opacity: 0
                })
            })
        },
        w = function(e, i, a, n) {
            i.removePrepare = i.removePrepare + n, a.find(".slot").each(function() {
                t(this).remove()
            }), i.transition = 0, i.removePrepare = 0
        },
        y = function(t) {
            var i = t;
            return t != e && t.length > 0 && (i = t.split("?")[0]), i
        },
        b = function(t, e) {
            var i = t.split("/"),
                a = e.split("/");
            i.pop();
            for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? i.pop() : i.push(a[n]));
            return i.join("/")
        },
        x = function(e, i, a) {
            i.syncload--, i.loadqueue && t.each(i.loadqueue, function(t, i) {
                var n = i.src.replace(/\.\.\/\.\.\//gi, ""),
                    r = self.location.href,
                    o = document.location.origin,
                    s = r.substring(0, r.length - 1) + "/" + n,
                    l = o + "/" + n,
                    d = b(self.location.href, i.src);
                r = r.substring(0, r.length - 1) + n, o += n, (y(o) === y(decodeURIComponent(e.src)) || y(r) === y(decodeURIComponent(e.src)) || y(d) === y(decodeURIComponent(e.src)) || y(l) === y(decodeURIComponent(e.src)) || y(s) === y(decodeURIComponent(e.src)) || y(i.src) === y(decodeURIComponent(e.src)) || y(i.src).replace(/^.*\/\/[^\/]+/, "") === y(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && y(e.src).match(new RegExp(n))) && (i.progress = a, i.width = e.width, i.height = e.height)
            }), T(i)
        },
        T = function(e) {
            3 != e.syncload && e.loadqueue && t.each(e.loadqueue, function(t, i) {
                if (i.progress.match(/prepared/g) && e.syncload <= 3) {
                    e.syncload++;
                    var a = new Image;
                    a.onload = function() {
                        x(this, e, "loaded")
                    }, a.onerror = function() {
                        x(this, e, "failed")
                    }, a.src = i.src, i.progress = "inload"
                }
            })
        },
        k = function(e, i, a) {
            var n = !1;
            if (i.loadqueue && t.each(i.loadqueue, function(t, i) {
                    i.src === e && (n = !0)
                }), !n) {
                var r = new Object;
                r.src = e, r.prio = a, r.progress = "prepared", i.loadqueue.push(r)
            }
        },
        S = function(i, a, n) {
            i.find("img,.defaultimg").each(function() {
                var i = t(this),
                    r = i.data("lazyload") !== e && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
                i.data("start-to-load", t.now()), k(r, a, n)
            }), T(a)
        },
        O = function(e, i) {
            var a = new Object;
            return e.loadqueue && t.each(e.loadqueue, function(t, e) {
                e.src == i && (a = e)
            }), a
        },
        L = function(a, n, r) {
            var o = !1;
            a.find("img,.defaultimg").each(function() {
                var r = t(this),
                    s = r.data("lazyload") != e ? r.data("lazyload") : r.attr("src"),
                    l = O(n, s);
                if (r.data("loaded") === e && l !== e && l.progress && l.progress.match(/loaded/g)) {
                    if (r.attr("src", l.src), r.hasClass("defaultimg")) i.isIE(8) ? defimg.attr("src", l.src) : r.css({
                        backgroundImage: 'url("' + l.src + '")'
                    }), a.data("owidth", l.width), a.data("oheight", l.height), a.find(".slotholder").data("owidth", l.width), a.find(".slotholder").data("oheight", l.height);
                    else {
                        var d = r.data("ww"),
                            h = r.data("hh");
                        r.data("owidth", l.width), r.data("oheight", l.height), d = d == e || "auto" == d || "" == d ? l.width : d, h = h == e || "auto" == h || "" == h ? l.height : h, r.data("ww", d), r.data("hh", h)
                    }
                    r.data("loaded", !0)
                }

                if (1 == n.vimeoapineeded && !window.Froogaloop && (o = !0, t.now() - n.vimeostarttime > 5e3 && 1 != n.vimeowarning)) {
                    n.vimeowarning = !0;
                    var u = "Vimeo Froogaloop Api Could not be loaded !";
                    "https:" === location.protocol && (u += " Please Check and Renew SSL Certificate !"), console.error(u), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + u + "</strong></div>")
                }
            }), o ? setTimeout(function() {
                L(a, n, r)
            }, 19) : r()
        },
        P = function(e, a) {
            if (clearTimeout(a.waitWithSwapSlide), e.find(".processing-revslide").length > 0) return a.waitWithSwapSlide = setTimeout(function() {
                P(e, a)
            }, 150), !1;
            var n = e.find(".active-revslide"),
                r = e.find(".next-revslide"),
                o = r.find(".defaultimg");
            return r.index() === n.index() ? (r.removeClass("next-revslide"), !1) : (r.removeClass("next-revslide").addClass("processing-revslide"), "on" == a.stopLoop && r.index() == a.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), e.trigger("revolution.slide.onstop"), a.noloopanymore = 1), r.index() === a.slideamount - 1 && (a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), a.tonpause = !0, e.trigger("stoptimer"), a.cd = 0, e.find(".tp-loader").css({
                display: "block"
            }), S(r, a, 1), void L(r, a, function() {
                r.find(".rs-background-video-layer").each(function() {
                    var e = t(this);
                    e.hasClass("HasListener") || (e.data("bgvideo", 1), i.manageVideoLayer(e, a)), e.append('<div class="rs-fullvideo-cover"></div>')
                }), C(a, o, e)
            }))
        },
        C = function(t, a, n) {
            var r = n.find(".active-revslide"),
                o = n.find(".processing-revslide"),
                s = r.find(".slotholder"),
                l = o.find(".slotholder");
            t.tonpause = !1, t.cd = 0, n.trigger("nulltimer"), n.find(".tp-loader").css({
                display: "none"
            }), i.setSize(t), i.slotSize(a, t), i.manageNavigation && i.manageNavigation(t);
            var d = {};
            d.nextslide = o, d.currentslide = r, n.trigger("revolution.slide.onbeforeswap", d), t.transition = 1, t.videoplaying = !1, o.data("delay") != e ? (t.cd = 0, t.delay = o.data("delay")) : t.delay = t.origcd;
            var h = r.index(),
                u = o.index();
            t.sdir = h > u ? 1 : 0, "arrow" == t.sc_indicator && (0 == h && u == t.slideamount - 1 && (t.sdir = 1), h == t.slideamount - 1 && 0 == u && (t.sdir = 0)), t.lsdir = t.lsdir === e ? t.sdir : t.lsdir, t.dirc = t.lsdir != t.sdir, t.lsdir = t.sdir, r.index() != o.index() && 1 != t.firststart && i.removeTheCaptions && i.removeTheCaptions(r, t), o.hasClass("rs-pause-timer-once") || o.hasClass("rs-pause-timer-always") ? t.videoplaying = !0 : n.trigger("restarttimer"), o.removeClass("rs-pause-timer-once");
            var p, c;
            if ("carousel" == t.sliderType) c = new punchgs.TimelineLite, i.prepareCarousel(t, c), A(n, t, l, s, o, r, c), t.transition = 0, t.firststart = 0;
            else {
                c = new punchgs.TimelineLite({
                    onComplete: function() {
                        A(n, t, l, s, o, r, c)
                    }
                }), c.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    opacity: 0
                })), c.pause(), 1 == t.firststart && (punchgs.TweenLite.set(r, {
                    autoAlpha: 0
                }), t.firststart = 0), punchgs.TweenLite.set(r, {
                    zIndex: 18
                }), punchgs.TweenLite.set(o, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == o.data("differentissplayed") && (o.data("differentissplayed", "done"), o.data("transition", o.data("savedtransition")), o.data("slotamount", o.data("savedslotamount")), o.data("masterspeed", o.data("savedmasterspeed"))), o.data("fstransition") != e && "done" != o.data("differentissplayed") && (o.data("savedtransition", o.data("transition")), o.data("savedslotamount", o.data("slotamount")), o.data("savedmasterspeed", o.data("masterspeed")), o.data("transition", o.data("fstransition")), o.data("slotamount", o.data("fsslotamount")), o.data("masterspeed", o.data("fsmasterspeed")), o.data("differentissplayed", "prepared")), o.data("transition") == e && o.data("transition", "random"), p = 0;
                var f = o.data("transition") !== e ? o.data("transition").split(",") : "fade",
                    g = o.data("nexttransid") == e ? -1 : o.data("nexttransid");
                "on" == o.data("randomtransition") ? g = Math.round(Math.random() * f.length) : g += 1, g == f.length && (g = 0), o.data("nexttransid", g);
                var m = f[g];
                t.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal")), i.isIE(8) && (m = 11), c = i.animateSlide(p, m, n, t, o, r, l, s, c), "on" == l.data("kenburns") && (i.startKenBurn(l, t), c.add(punchgs.TweenLite.set(l, {
                    autoAlpha: 0
                }))), c.pause()
            }
            "off" != t.parallax.type && t.parallax.firstgo == e && i.scrollHandling && (t.parallax.firstgo = !0, t.lastscrolltop = -999, i.scrollHandling(t), setTimeout(function() {
                t.lastscrolltop = -999, i.scrollHandling(t)
            }, 210), setTimeout(function() {
                t.lastscrolltop = -999, i.scrollHandling(t)
            }, 420)), i.animateTheCaptions ? i.animateTheCaptions(o, t, null, c) : c != e && setTimeout(function() {
                c.resume()
            }, 30), punchgs.TweenLite.to(o, .001, {
                autoAlpha: 1
            })
        },
        A = function(n, r, o, s, l, d, h) {
            "carousel" === r.sliderType || (r.removePrepare = 0, punchgs.TweenLite.to(o.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function() {
                    w(n, r, l, 1)
                }
            }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function() {
                    w(n, r, d, 1)
                }
            })), n.find(".active-revslide").removeClass("active-revslide"), n.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), r.act = l.index(), ("scroll" == r.parallax.type || "scroll+mouse" == r.parallax.type || "mouse+scroll" == r.parallax.type) && (r.lastscrolltop = -999, i.scrollHandling(r)), h.clear(), s.data("kbtl") != e && (s.data("kbtl").reverse(), s.data("kbtl").timeScale(25)), "on" == o.data("kenburns") && (o.data("kbtl") != e ? (o.data("kbtl").timeScale(1), o.data("kbtl").play()) : i.startKenBurn(o, r)), l.find(".rs-background-video-layer").each(function() {
                if (a) return !1;
                var e = t(this);
                i.resetVideo(e, r), punchgs.TweenLite.fromTo(e, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function() {
                        i.animcompleted && i.animcompleted(e, r)
                    }
                })
            }), d.find(".rs-background-video-layer").each(function() {
                if (a) return !1;
                var e = t(this);
                i.stopVideo && (i.resetVideo(e, r), i.stopVideo(e, r)), punchgs.TweenLite.to(e, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var u = {};
            u.slideIndex = l.index() + 1, u.slideLIIndex = l.index(), u.slide = l, u.currentslide = l, u.prevslide = d, n.trigger("revolution.slide.onchange", u), n.trigger("revolution.slide.onafterswap", u)
        },
        M = function(e, i) {
            e.children().each(function() {
                try {
                    t(this).die("click")
                } catch (e) {}
                try {
                    t(this).die("mouseenter")
                } catch (e) {}
                try {
                    t(this).die("mouseleave")
                } catch (e) {}
                try {
                    t(this).unbind("hover")
                } catch (e) {}
            });
            try {
                e.die("click", "mouseenter", "mouseleave")
            } catch (a) {}
            clearInterval(i.cdint), e = null
        },
        z = function(n, r) {
            if (r.cd = 0, r.loop = 0, r.looptogo = r.stopAfterLoops != e && r.stopAfterLoops > -1 ? r.stopAfterLoops : 9999999, r.lastslidetoshow = r.stopAtSlide != e && r.stopAtSlide > -1 ? r.stopAtSlide : 999, r.stopLoop = "off", 0 == r.looptogo && (r.stopLoop = "on"), r.slideamount > 1 && (0 != r.stopAfterLoops || 1 != r.stopAtSlide)) {
                var o = n.find(".tp-bannertimer");
                n.on("stoptimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    e.data("tween").pause(), "on" == r.disableProgressBar && e.css({
                        visibility: "hidden"
                    }), r.sliderstatus = "paused"
                }), n.on("starttimer", function() {
                    1 != r.conthover && 1 != r.videoplaying && r.width > r.hideSliderAtLimit && 1 != r.tonpause && 1 != r.overnav && (1 === r.noloopanymore || r.viewPort.enable && !r.inviewport || (o.css({
                        visibility: "visible"
                    }), o.data("tween").resume(), r.sliderstatus = "playing")), "on" == r.disableProgressBar && o.css({
                        visibility: "hidden"
                    })
                }), n.on("restarttimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    1 === r.noloopanymore || r.viewPort.enable && !r.inviewport || (e.css({
                        visibility: "visible"
                    }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, r.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: s,
                        delay: 1
                    })), r.sliderstatus = "playing"), "on" == r.disableProgressBar && e.css({
                        visibility: "hidden"
                    })
                }), n.on("nulltimer", function() {
                    o.data("tween").pause(0), "on" == r.disableProgressBar && o.css({
                        visibility: "hidden"
                    }), r.sliderstatus = "paused"
                });
                var s = function() {
                    0 == t("body").find(n).length && (M(n, r), clearInterval(r.cdint)), n.trigger("revolution.slide.slideatend"), 1 == n.data("conthover-changed") && (r.conthover = n.data("conthover"), n.data("conthover-changed", 0)), i.callingNewSlide(r, n, 1)
                };
                o.data("tween", punchgs.TweenLite.fromTo(o, r.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: s,
                    delay: 1
                })), o.data("opt", r), n.trigger("starttimer"), n.on("tp-mouseenter", function() {
                    "on" != r.navigation.onHoverStop || a || (n.trigger("stoptimer"), n.trigger("revolution.slide.onpause"))
                }), n.on("tp-mouseleft", function() {
                    1 != n.data("conthover") && "on" == r.navigation.onHoverStop && (1 == r.viewPort.enable && r.inviewport || 0 == r.viewPort.enable) && (n.trigger("revolution.slide.onresume"), n.trigger("starttimer"))
                })
            }
        },
        R = (function() {
            var t, e, i = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (t in i)
                if (t in document) {
                    e = i[t];
                    break
                }
            return function(i) {
                return i && document.addEventListener(e, i), !document[t]
            }
        }(), function(t) {
            return t == e || t.c == e ? !1 : void punchgs.TweenLite.delayedCall(.3, function() {
                "on" == t.fallbacks.nextSlideOnWindowFocus && t.c.revnext(), t.c.revredraw(), "playing" == t.lastsliderstatus && t.c.revresume()
            })
        }),
        I = function(t) {
            t.lastsliderstatus = t.sliderstatus, t.c.revpause();
            var e = t.c.find(".active-revslide .slotholder"),
                a = t.c.find(".processing-revslide .slotholder");
            "on" == a.data("kenburns") && i.stopKenBurn(a, t), "on" == e.data("kenburns") && i.stopKenBurn(e, t)
        },
        j = function(i, a) {
            var n = document.documentMode === e,
                r = window.chrome;
            n && !r ? t(window).on("focusin", function() {
                R(a)
            }).on("focusout", function() {
                I(a)
            }) : window.addEventListener ? (window.addEventListener("focus", function() {
                R(a)
            }, !1), window.addEventListener("blur", function() {
                I(a)
            }, !1)) : (window.attachEvent("focus", function() {
                R(a)
            }), window.attachEvent("blur", function() {
                I(a)
            }))
        },
        D = function(t) {
            for (var e, i = [], a = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), e = a[n].split("="), i.push(e[0]), i[e[0]] = e[1];
            return i
        }
}(jQuery), ! function() {
    function t(t, e, i, a, n, r, o) {
        var s = t.find(e);
        s.css("borderWidth", r + "px"), s.css(i, 0 - r + "px"), s.css(a, "0px solid transparent"), s.css(n, o)
    }
    var e = jQuery.fn.revolution;
    jQuery.extend(!0, e, {
        animcompleted: function(t, i) {
            var a = t.data("videotype"),
                n = t.data("autoplay"),
                r = t.data("autoplayonlyfirsttime");
            void 0 != a && "none" != a && (1 == n || "true" == n || "on" == n || "1sttime" == n || r ? (e.playVideo(t, i), (r || "1sttime" == n) && (t.data("autoplayonlyfirsttime", !1), t.data("autoplay", "off"))) : "no1sttime" == n && t.data("autoplay", "on"))
        },
        handleStaticLayers: function(t, e) {
            var i = parseInt(t.data("startslide"), 0),
                a = parseInt(t.data("endslide"), 0);
            0 > i && (i = 0), 0 > a && (a = e.slideamount), 0 === i && a === e.slideamount - 1 && (a = e.slideamount + 1), t.data("startslide", i), t.data("endslide", a)
        },
        animateTheCaptions: function(t, i, a, n) {
            var r = "carousel" === i.sliderType ? 0 : i.width / 2 - i.gridwidth[i.curWinRange] * i.bw / 2,
                o = 0,
                s = t.data("index");
            i.layers = i.layers || new Object, i.layers[s] = i.layers[s] || t.find(".tp-caption"), i.layers["static"] = i.layers["static"] || i.c.find(".tp-static-layers").find(".tp-caption");
            var l = new Array;
            if (i.conh = i.c.height(), i.conw = i.c.width(), i.ulw = i.ul.width(), i.ulh = i.ul.height(), i.debugMode) {
                t.addClass("indebugmode"), t.find(".helpgrid").remove(), i.c.find(".hglayerinfo").remove(), t.append('<div class="helpgrid" style="width:' + i.gridwidth[i.curWinRange] * i.bw + "px;height:" + i.gridheight[i.curWinRange] * i.bw + 'px;"></div>');
                var d = t.find(".helpgrid");
                d.append('<div class="hginfo">Zoom:' + Math.round(100 * i.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + i.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + i.gridwidth[i.curWinRange] + "x" + i.gridheight[i.curWinRange] + "</div>"), i.c.append('<div class="hglayerinfo"></div>'), d.append('<div class="tlhg"></div>')
            }
            l && jQuery.each(l, function() {
                var t = jQuery(this);
                punchgs.TweenLite.set(t.find(".tp-videoposter"), {
                    autoAlpha: 1
                }), punchgs.TweenLite.set(t.find("iframe"), {
                    autoAlpha: 0
                })
            }), i.layers[s] && jQuery.each(i.layers[s], function(t, e) {
                l.push(e)
            }), i.layers["static"] && jQuery.each(i.layers["static"], function(t, e) {
                l.push(e)
            }), l && jQuery.each(l, function(t) {
                e.animateSingleCaption(jQuery(this), i, r, o, t, a)
            });
            var h = jQuery("body").find("#" + i.c.attr("id")).find(".tp-bannertimer");
            h.data("opt", i), void 0 != n && setTimeout(function() {
                n.resume()
            }, 30)
        },
        animateSingleCaption: function(a, r, f, v, _, w, y) {
            var b = w,
                x = h(a, r, "in", !0),
                T = a.data("_pw") || a.closest(".tp-parallax-wrap"),
                k = a.data("_lw") || a.closest(".tp-loop-wrap"),
                S = a.data("_mw") || a.closest(".tp-mask-wrap"),
                O = a.data("responsive") || "on",
                L = a.data("responsive_offset") || "on",
                P = a.data("basealign") || "grid",
                C = "grid" === P ? r.width : r.ulw,
                A = "grid" === P ? r.height : r.ulh,
                M = jQuery("body").hasClass("rtl");
            if (a.data("_pw") || (a.data("_pw", T), a.data("_lw", k), a.data("_mw", S)), "fullscreen" == r.sliderLayout && (v = A / 2 - r.gridheight[r.curWinRange] * r.bh / 2), ("on" == r.autoHeight || void 0 != r.minHeight && r.minHeight > 0) && (v = r.conh / 2 - r.gridheight[r.curWinRange] * r.bh / 2), 0 > v && (v = 0), r.debugMode) {
                a.closest("li").find(".helpgrid").css({
                    top: v + "px",
                    left: f + "px"
                });
                var z = r.c.find(".hglayerinfo");
                a.on("hover, mouseenter", function() {
                    var t = "";
                    a.data() && jQuery.each(a.data(), function(e, i) {
                        "object" != typeof i && (t = t + '<span style="white-space:nowrap"><span style="color:#27ae60">' + e + ":</span>" + i + "</span>&nbsp; &nbsp; ")
                    }), z.html(t)
                })
            }
            var R = d(a.data("visibility"), r)[r.curWinRange] || d(a.data("visibility"), r) || "on";
            if ("off" == R || C < r.hideCaptionAtLimit && "on" == a.data("captionhidden") || C < r.hideAllCaptionAtLimit ? a.addClass("tp-hidden-caption") : a.removeClass("tp-hidden-caption"), a.data("layertype", "html"), 0 > f && (f = 0), void 0 != a.data("thumbimage") && void 0 == a.data("videoposter") && a.data("videoposter", a.data("thumbimage")), a.hasClass("tp-videolayer") && void 0 != a.data("videoposter") && "on" == a.data("posterOnMobile") && _ISM) {
                var I = d(a.data("videowidth"), r)[r.curWinRange] || d(a.data("videowidth"), r) || "auto",
                    j = d(a.data("videoheight"), r)[r.curWinRange] || d(a.data("videoheight"), r) || "auto";
                I = parseFloat(W), j = parseFloat(F), a.append('<div class="tp-videoposter" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + a.data("videoposter") + '); background-size:cover;background-position:center center;"></div>'), a.css("100%" != I ? {
                    minWidth: I + "px",
                    minHeight: j + "px"
                } : {
                    width: "100%",
                    height: "100%"
                }), a.removeClass("tp-videolayer")
            }
            if (a.find("img").length > 0) {
                var D = a.find("img");
                a.data("layertype", "image"), 0 == D.width() && D.css({
                    width: "auto"
                }), 0 == D.height() && D.css({
                    height: "auto"
                }), void 0 == D.data("ww") && D.width() > 0 && D.data("ww", D.width()), void 0 == D.data("hh") && D.height() > 0 && D.data("hh", D.height());
                var W = D.data("ww"),
                    F = D.data("hh"),
                    E = "slide" == P ? r.ulw : r.gridwidth[r.curWinRange],
                    H = "slide" == P ? r.ulh : r.gridheight[r.curWinRange],
                    W = d(D.data("ww"), r)[r.curWinRange] || d(D.data("ww"), r) || "auto",
                    F = d(D.data("hh"), r)[r.curWinRange] || d(D.data("hh"), r) || "auto",
                    N = "full" === W || "full-proportional" === W,
                    Q = "full" === F || "full-proportional" === F;
                if ("full-proportional" === W) {
                    var X = D.data("owidth"),
                        B = D.data("oheight");
                    B / H > X / E ? (W = E, F = B * (E / X)) : (F = H, W = X * (H / B))
                } else W = N ? E : parseFloat(W), F = Q ? H : parseFloat(F);
                void 0 == W && (W = 0), void 0 == F && (F = 0), "off" !== O ? (D.width("grid" != P && N ? W : W * r.bw), D.height("grid" != P && Q ? F : F * r.bh)) : (D.width(W), D.height(F))
            }
            if ("slide" === P && (f = 0, v = 0), a.hasClass("tp-videolayer") || a.find("iframe").length > 0 || a.find("video").length > 0) {
                a.data("layertype", "video"), e.manageVideoLayer(a, r, w, b), w || b || (a.data("videotype"), e.resetVideo(a, r));
                var Y = a.data("aspectratio");
                void 0 != Y && Y.split(":").length > 1 && e.prepareCoveredVideo(Y, r, a);
                var D = a.find("iframe") ? a.find("iframe") : D = a.find("video"),
                    V = a.find("iframe") ? !1 : !0,
                    q = a.hasClass("coverscreenvideo");
                D.css({
                    display: "block"
                }), void 0 == a.data("videowidth") && (a.data("videowidth", D.width()), a.data("videoheight", D.height()));
                var U, W = d(a.data("videowidth"), r)[r.curWinRange] || d(a.data("videowidth"), r) || "auto",
                    F = d(a.data("videoheight"), r)[r.curWinRange] || d(a.data("videoheight"), r) || "auto";
                W = parseFloat(W), F = parseFloat(F), void 0 === a.data("cssobj") && (U = p(a, 0), a.data("cssobj", U));
                var G = c(a.data("cssobj"), r);
                if ("auto" == G.lineHeight && (G.lineHeight = G.fontSize + 4), a.hasClass("fullscreenvideo") || q) {
                    f = 0, v = 0, a.data("x", 0), a.data("y", 0);
                    var Z = A;
                    "on" == r.autoHeight && (Z = r.conh), a.css({
                        width: C,
                        height: Z
                    })
                } else punchgs.TweenLite.set(a, {
                    paddingTop: Math.round(G.paddingTop * r.bh) + "px",
                    paddingBottom: Math.round(G.paddingBottom * r.bh) + "px",
                    paddingLeft: Math.round(G.paddingLeft * r.bw) + "px",
                    paddingRight: Math.round(G.paddingRight * r.bw) + "px",
                    marginTop: G.marginTop * r.bh + "px",
                    marginBottom: G.marginBottom * r.bh + "px",
                    marginLeft: G.marginLeft * r.bw + "px",
                    marginRight: G.marginRight * r.bw + "px",
                    borderTopWidth: Math.round(G.borderTopWidth * r.bh) + "px",
                    borderBottomWidth: Math.round(G.borderBottomWidth * r.bh) + "px",
                    borderLeftWidth: Math.round(G.borderLeftWidth * r.bw) + "px",
                    borderRightWidth: Math.round(G.borderRightWidth * r.bw) + "px",
                    width: W * r.bw + "px",
                    height: F * r.bh + "px"
                });
                (0 == V && !q || 1 != a.data("forcecover") && !a.hasClass("fullscreenvideo") && !q) && (D.width(W * r.bw), D.height(F * r.bh))
            }
            a.find(".tp-resizeme, .tp-resizeme *").each(function() {
                g(jQuery(this), r, "rekursive", O)
            }), a.hasClass("tp-resizeme") && a.find("*").each(function() {
                g(jQuery(this), r, "rekursive", O)
            }), g(a, r, 0, O);
            var $ = a.outerHeight(),
                K = a.css("backgroundColor");
            t(a, ".frontcorner", "left", "borderRight", "borderTopColor", $, K), t(a, ".frontcornertop", "left", "borderRight", "borderBottomColor", $, K), t(a, ".backcorner", "right", "borderLeft", "borderBottomColor", $, K), t(a, ".backcornertop", "right", "borderLeft", "borderTopColor", $, K), "on" == r.fullScreenAlignForce && (f = 0, v = 0);
            var J = a.data("arrobj");
            if (void 0 === J) {
                var J = new Object;
                J.voa = d(a.data("voffset"), r)[r.curWinRange] || d(a.data("voffset"), r)[0], J.hoa = d(a.data("hoffset"), r)[r.curWinRange] || d(a.data("hoffset"), r)[0], J.elx = d(a.data("x"), r)[r.curWinRange] || d(a.data("x"), r)[0], J.ely = d(a.data("y"), r)[r.curWinRange] || d(a.data("y"), r)[0]
            }
            var tt = 0 == J.voa.length ? 0 : J.voa,
                et = 0 == J.hoa.length ? 0 : J.hoa,
                it = 0 == J.elx.length ? 0 : J.elx,
                at = 0 == J.ely.length ? 0 : J.ely,
                nt = a.outerWidth(!0),
                rt = a.outerHeight(!0);
            0 == nt && 0 == rt && (nt = r.ulw, rt = r.ulh);
            var ot = "off" !== L ? parseInt(tt, 0) * r.bw : parseInt(tt, 0),
                st = "off" !== L ? parseInt(et, 0) * r.bw : parseInt(et, 0),
                lt = "grid" === P ? r.gridwidth[r.curWinRange] * r.bw : C,
                dt = "grid" === P ? r.gridheight[r.curWinRange] * r.bw : A;
            "on" == r.fullScreenAlignForce && (lt = r.ulw, dt = r.ulh), it = "center" === it || "middle" === it ? lt / 2 - nt / 2 + st : "left" === it ? st : "right" === it ? lt - nt - st : "off" !== L ? it * r.bw : it, at = "center" == at || "middle" == at ? dt / 2 - rt / 2 + ot : "top" == at ? ot : "bottom" == at ? dt - rt - ot : "off" !== L ? at * r.bw : at, M && (it += nt);
            var ht = a.data("lasttriggerstate"),
                ut = a.data("triggerstate"),
                pt = a.data("start") || 100,
                ct = a.data("end"),
                ft = y ? 0 : "bytrigger" === pt || "sliderenter" === pt ? 0 : parseFloat(pt) / 1e3,
                gt = it + f,
                mt = at + v,
                vt = a.css("z-Index");
            y || ("reset" == ht && "bytrigger" != pt ? (a.data("triggerstate", "on"), a.data("animdirection", "in"), ut = "on") : "reset" == ht && "bytrigger" == pt && (a.data("triggerstate", "off"), a.data("animdirection", "out"), ut = "off")), punchgs.TweenLite.set(T, {
                zIndex: vt,
                top: mt,
                left: gt,
                overwrite: "auto"
            }), 0 == x && (b = !0), void 0 == a.data("timeline") || b || (2 != x && a.data("timeline").gotoAndPlay(0), b = !0), !w && a.data("timeline_out") && 2 != x && 0 != x && (a.data("timeline_out").kill(), a.data("outstarted", 0)), y && void 0 != a.data("timeline") && (a.removeData("$anims"), a.data("timeline").pause(0), a.data("timeline").kill(), void 0 != a.data("newhoveranim") && (a.data("newhoveranim").progress(0), a.data("newhoveranim").kill()), a.removeData("timeline"), punchgs.TweenLite.killTweensOf(a), a.unbind("hover"), a.removeClass("rs-hover-ready"), a.removeData("newhoveranim"));
            var _t = a.data("timeline") ? a.data("timeline").time() : 0,
                wt = void 0 !== a.data("timeline") ? a.data("timeline").progress() : 0,
                yt = a.data("timeline") || new punchgs.TimelineLite({
                    smoothChildTiming: !0
                });
            if (wt = jQuery.isNumeric(wt) ? wt : 0, yt.pause(), 1 > wt && 1 != a.data("outstarted") || 2 == x || y) {
                var bt = a;
                if (void 0 != a.data("mySplitText") && a.data("mySplitText").revert(), void 0 != a.data("splitin") && a.data("splitin").match(/chars|words|lines/g) || void 0 != a.data("splitout") && a.data("splitout").match(/chars|words|lines/g)) {
                    var xt = a.find("a").length > 0 ? a.find("a") : a;
                    a.data("mySplitText", new punchgs.SplitText(xt, {
                        type: "lines,words,chars",
                        charsClass: "tp-splitted",
                        wordsClass: "tp-splitted",
                        linesClass: "tp-splitted"
                    })), a.addClass("splitted")
                }
                void 0 !== a.data("mySplitText") && a.data("splitin") && a.data("splitin").match(/chars|words|lines/g) && (bt = a.data("mySplitText")[a.data("splitin")]);
                var Tt = new Object,
                    kt = void 0 != a.data("transform_in") ? a.data("transform_in").match(/\(R\)/gi) : !1;
                if (!a.data("$anims") || y || kt) {
                    var St = i(),
                        Ot = i(),
                        Lt = n(),
                        Pt = void 0 !== a.data("transform_hover") || void 0 !== a.data("style_hover");
                    Ot = s(Ot, a.data("transform_idle")), St = s(Ot, a.data("transform_in"), 1 == r.sdir), Pt && (Lt = s(Lt, a.data("transform_hover")), Lt = u(Lt, a.data("style_hover")), a.data("hover", Lt)), St.elemdelay = void 0 == a.data("elementdelay") ? 0 : a.data("elementdelay"), Ot.anim.ease = St.anim.ease = St.anim.ease || punchgs.Power1.easeInOut, Pt && !a.hasClass("rs-hover-ready") && (a.addClass("rs-hover-ready"), a.hover(function(t) {
                        var e = jQuery(t.currentTarget),
                            i = e.data("hover"),
                            a = e.data("timeline");
                        a && 1 == a.progress() && (void 0 === e.data("newhoveranim") || "none" === e.data("newhoveranim") ? e.data("newhoveranim", punchgs.TweenLite.to(e, i.speed, i.anim)) : (e.data("newhoveranim").progress(0), e.data("newhoveranim").play()))
                    }, function(t) {
                        var e = jQuery(t.currentTarget),
                            i = e.data("timeline");
                        i && 1 == i.progress() && void 0 != e.data("newhoveranim") && e.data("newhoveranim").reverse()
                    })), Tt = new Object, Tt.f = St, Tt.r = Ot, a.data("$anims")
                } else Tt = a.data("$anims");
                var Ct = l(a.data("mask_in")),
                    At = new punchgs.TimelineLite;
                if (Tt.f.anim.x = Tt.f.anim.x * r.bw || o(Tt.f.anim.x, r, nt, rt, mt, gt, "horizontal"), Tt.f.anim.y = Tt.f.anim.y * r.bw || o(Tt.f.anim.y, r, nt, rt, mt, gt, "vertical"), 2 != x || y) {
                    if (bt != a) {
                        var Mt = Tt.r.anim.ease;
                        yt.add(punchgs.TweenLite.set(a, Tt.r.anim)), Tt.r = i(), Tt.r.anim.ease = Mt
                    }
                    if (Tt.f.anim.visibility = "hidden", At.eventCallback("onStart", function() {
                            punchgs.TweenLite.set(a, {
                                visibility: "visible"
                            }), a.data("iframes") && a.find("iframe").each(function() {
                                punchgs.TweenLite.set(jQuery(this), {
                                    autoAlpha: 1
                                })
                            }), punchgs.TweenLite.set(T, {
                                visibility: "visible"
                            });
                            var t = {};
                            t.layer = a, t.eventtype = "enterstage", t.layertype = a.data("layertype"), t.layersettings = a.data(), r.c.trigger("revolution.layeraction", t)
                        }), At.eventCallback("onComplete", function() {
                            var t = {};
                            t.layer = a, t.eventtype = "enteredstage", t.layertype = a.data("layertype"), t.layersettings = a.data(), r.c.trigger("revolution.layeraction", t), e.animcompleted(a, r)
                        }), "sliderenter" == pt && r.overcontainer && (ft = .6), yt.add(At.staggerFromTo(bt, Tt.f.speed, Tt.f.anim, Tt.r.anim, Tt.f.elemdelay), ft), Ct) {
                        var zt = new Object;
                        zt.ease = Tt.r.anim.ease, zt.overflow = Ct.anim.overflow = "hidden", zt.x = zt.y = 0, Ct.anim.x = Ct.anim.x * r.bw || o(Ct.anim.x, r, nt, rt, mt, gt, "horizontal"), Ct.anim.y = Ct.anim.y * r.bw || o(Ct.anim.y, r, nt, rt, mt, gt, "vertical"), yt.add(punchgs.TweenLite.fromTo(S, Tt.f.speed, Ct.anim, zt, St.elemdelay), ft)
                    } else yt.add(punchgs.TweenLite.set(S, {
                        overflow: "visible"
                    }, St.elemdelay), 0)
                }
                a.data("timeline", yt), x = h(a, r, "in"), 0 !== wt && 2 != x || "bytrigger" === ct || y || "sliderleave" == ct || (void 0 == ct || -1 != x && 2 != x || "bytriger" === ct ? punchgs.TweenLite.delayedCall(999999, e.endMoveCaption, [a, S, T, r]) : punchgs.TweenLite.delayedCall(parseInt(a.data("end"), 0) / 1e3, e.endMoveCaption, [a, S, T, r])), yt = a.data("timeline"), "on" == a.data("loopanimation") && m(k, r.bw), ("sliderenter" != pt || "sliderenter" == pt && r.overcontainer) && (-1 == x || 1 == x || y || 0 == x && 1 > wt && a.hasClass("rev-static-visbile")) && (1 > wt && wt > 0 || 0 == wt && "bytrigger" != pt && "keep" != ht || 0 == wt && "bytrigger" != pt && "keep" == ht && "on" == ut || "bytrigger" == pt && "keep" == ht && "on" == ut) && yt.resume(_t)
            }
            "on" == a.data("loopanimation") && punchgs.TweenLite.set(k, {
                minWidth: nt,
                minHeight: rt
            }), 0 == a.data("slidelink") || 1 != a.data("slidelink") && !a.hasClass("slidelink") ? (punchgs.TweenLite.set(S, {
                width: "auto",
                height: "auto"
            }), a.data("slidelink", 0)) : (punchgs.TweenLite.set(S, {
                width: "100%",
                height: "100%"
            }), a.data("slidelink", 1))
        },
        endMoveCaption: function(t, e, n, r) {
            if (e = e || t.data("_mw"), n = n || t.data("_pw"), t.data("outstarted", 1), t.data("timeline")) t.data("timeline").pause();
            else if (void 0 === t.data("_pw")) return;
            var d = new punchgs.TimelineLite,
                h = new punchgs.TimelineLite,
                u = new punchgs.TimelineLite,
                p = s(i(), t.data("transform_in"), 1 == r.sdir),
                c = t.data("transform_out") ? s(a(), t.data("transform_out"), 1 == r.sdir) : s(a(), t.data("transform_in"), 1 == r.sdir),
                f = t.data("splitout") && t.data("splitout").match(/words|chars|lines/g) ? t.data("mySplitText")[t.data("splitout")] : t,
                g = void 0 == t.data("endelementdelay") ? 0 : t.data("endelementdelay"),
                m = t.innerWidth(),
                v = t.innerHeight(),
                _ = n.position();
            t.data("transform_out") && t.data("transform_out").match(/auto:auto/g) && (p.speed = c.speed, p.anim.ease = c.anim.ease, c = p);
            var w = l(t.data("mask_out"));
            c.anim.x = c.anim.x * r.bw || o(c.anim.x, r, m, v, _.top, _.left, "horizontal"), c.anim.y = c.anim.y * r.bw || o(c.anim.y, r, m, v, _.top, _.left, "vertical"), h.eventCallback("onStart", function() {
                var e = {};
                e.layer = t, e.eventtype = "leavestage", e.layertype = t.data("layertype"), e.layersettings = t.data(), r.c.trigger("revolution.layeraction", e)
            }), h.eventCallback("onComplete", function() {
                punchgs.TweenLite.set(t, {
                    visibility: "hidden"
                }), punchgs.TweenLite.set(n, {
                    visibility: "hidden"
                });
                var e = {};
                e.layer = t, e.eventtype = "leftstage", e.layertype = t.data("layertype"), e.layersettings = t.data(), r.c.trigger("revolution.layeraction", e)
            }), d.add(h.staggerTo(f, c.speed, c.anim, g), 0), w ? (w.anim.ease = c.anim.ease, w.anim.overflow = "hidden", w.anim.x = w.anim.x * r.bw || o(w.anim.x, r, m, v, _.top, _.left, "horizontal"), w.anim.y = w.anim.y * r.bw || o(w.anim.y, r, m, v, _.top, _.left, "vertical"), d.add(u.to(e, c.speed, w.anim, g), 0)) : d.add(u.set(e, {
                overflow: "visible",
                overwrite: "auto"
            }, g), 0), t.data("timeline_out", d)
        },
        removeTheCaptions: function(t, i) {
            var a = t.data("index"),
                n = new Array;
            i.layers[a] && jQuery.each(i.layers[a], function(t, e) {
                n.push(e)
            }), i.layers["static"] && jQuery.each(i.layers["static"], function(t, e) {
                n.push(e)
            }), punchgs.TweenLite.killDelayedCallsTo(e.endMoveCaption), n && jQuery.each(n, function() {
                var t = jQuery(this),
                    a = h(t, i, "out");
                0 != a && (v(t), clearTimeout(t.data("videoplaywait")), e.stopVideo && e.stopVideo(t, i), e.endMoveCaption(t, null, null, i), i.playingvideos = [], i.lastplayedvideos = [])
            })
        }
    });
    var i = function() {
            var t = new Object;
            return t.anim = new Object, t.anim.x = 0, t.anim.y = 0, t.anim.z = 0, t.anim.rotationX = 0, t.anim.rotationY = 0, t.anim.rotationZ = 0, t.anim.scaleX = 1, t.anim.scaleY = 1, t.anim.skewX = 0, t.anim.skewY = 0, t.anim.opacity = 1, t.anim.transformOrigin = "50% 50%", t.anim.transformPerspective = 600, t.anim.rotation = 0, t.anim.ease = punchgs.Power3.easeOut, t.anim.force3D = "auto", t.speed = .3, t.anim.autoAlpha = 1, t.anim.visibility = "visible", t.anim.overwrite = "all", t
        },
        a = function() {
            var t = new Object;
            return t.anim = new Object, t.anim.x = 0, t.anim.y = 0, t.anim.z = 0, t
        },
        n = function() {
            var t = new Object;
            return t.anim = new Object, t.speed = .2, t
        },
        r = function(t, e) {
            if (jQuery.isNumeric(parseFloat(t))) return parseFloat(t);
            if (void 0 === t || "inherit" === t) return e;
            if (t.split("{").length > 1) {
                var i = t.split(","),
                    a = parseFloat(i[1].split("}")[0]);
                i = parseFloat(i[0].split("{")[1]), t = Math.random() * (a - i) + i
            }
            return t
        },
        o = function(t, e, i, a, n, r, o) {
            return !jQuery.isNumeric(t) && t.match(/%]/g) ? (t = t.split("[")[1].split("]")[0], "horizontal" == o ? t = (i + 2) * parseInt(t, 0) / 100 : "vertical" == o && (t = (a + 2) * parseInt(t, 0) / 100)) : (t = "layer_left" === t ? 0 - i : "layer_right" === t ? i : t, t = "layer_top" === t ? 0 - a : "layer_bottom" === t ? a : t, t = "left" === t || "stage_left" === t ? 0 - i - r : "right" === t || "stage_right" === t ? e.conw - r : "center" === t || "stage_center" === t ? e.conw / 2 - i / 2 - r : t, t = "top" === t || "stage_top" === t ? 0 - a - n : "bottom" === t || "stage_bottom" === t ? e.conh - n : "middle" === t || "stage_middle" === t ? e.conh / 2 - a / 2 - n : t), t
        },
        s = function(t, e, i) {
            var a = new Object;
            if (a = jQuery.extend(!0, {}, a, t), void 0 === e) return a;
            var n = e.split(";");
            return n && jQuery.each(n, function(t, e) {
                var n = e.split(":"),
                    o = n[0],
                    s = n[1];
                i && void 0 != s && s.length > 0 && s.match(/\(R\)/) && (s = s.replace("(R)", ""), s = "right" === s ? "left" : "left" === s ? "right" : "top" === s ? "bottom" : "bottom" === s ? "top" : s, "[" === s[0] && "-" === s[1] ? s = s.replace("[-", "[") : "[" === s[0] && "-" !== s[1] ? s = s.replace("[", "[-") : "-" === s[0] ? s = s.replace("-", "") : s[0].match(/[1-9]/) && (s = "-" + s)),
                    void 0 != s && (s = s.replace(/\(R\)/, ""), ("rotationX" == o || "rX" == o) && (a.anim.rotationX = r(s, a.anim.rotationX) + "deg"), ("rotationY" == o || "rY" == o) && (a.anim.rotationY = r(s, a.anim.rotationY) + "deg"), ("rotationZ" == o || "rZ" == o) && (a.anim.rotation = r(s, a.anim.rotationZ) + "deg"), ("scaleX" == o || "sX" == o) && (a.anim.scaleX = r(s, a.anim.scaleX)), ("scaleY" == o || "sY" == o) && (a.anim.scaleY = r(s, a.anim.scaleY)), ("opacity" == o || "o" == o) && (a.anim.opacity = r(s, a.anim.opacity)), ("skewX" == o || "skX" == o) && (a.anim.skewX = r(s, a.anim.skewX)), ("skewY" == o || "skY" == o) && (a.anim.skewY = r(s, a.anim.skewY)), "x" == o && (a.anim.x = r(s, a.anim.x)), "y" == o && (a.anim.y = r(s, a.anim.y)), "z" == o && (a.anim.z = r(s, a.anim.z)), ("transformOrigin" == o || "tO" == o) && (a.anim.transformOrigin = s.toString()), ("transformPerspective" == o || "tP" == o) && (a.anim.transformPerspective = parseInt(s, 0)), ("speed" == o || "s" == o) && (a.speed = parseFloat(s) / 1e3), ("ease" == o || "e" == o) && (a.anim.ease = s))
            }), a
        },
        l = function(t) {
            if (void 0 === t) return !1;
            var e = new Object;
            e.anim = new Object;
            var i = t.split(";");
            return i && jQuery.each(i, function(t, i) {
                i = i.split(":");
                var a = i[0],
                    n = i[1];
                "x" == a && (e.anim.x = n), "y" == a && (e.anim.y = n), "s" == a && (e.speed = parseFloat(n) / 1e3), ("e" == a || "ease" == a) && (e.anim.ease = n)
            }), e
        },
        d = function(t, e) {
            if (void 0 == t && (t = 0), !jQuery.isArray(t) && "string" === jQuery.type(t) && (t.split(",").length > 1 || t.split("[").length > 1)) {
                t = t.replace("[", ""), t = t.replace("]", "");
                var i = t.split(t.match(/'/g) ? "'," : ",");
                t = new Array, i && jQuery.each(i, function(e, i) {
                    i = i.replace("'", ""), i = i.replace("'", ""), t.push(i)
                })
            } else {
                var a = t;
                jQuery.isArray(t) || (t = new Array, t.push(a))
            }
            var a = t[t.length - 1];
            if (t.length < e.rle)
                for (var n = 1; n <= e.curWinRange; n++) t.push(a);
            return t
        },
        h = function(t, e, i, a) {
            var n = -1;
            if (t.hasClass("tp-static-layer")) {
                var r = parseInt(t.data("startslide"), 0),
                    o = parseInt(t.data("endslide"), 0),
                    s = e.c.find(".processing-revslide").index(),
                    l = -1 != s ? s : e.c.find(".active-revslide").index();
                l = -1 == l ? 0 : l, "in" === i ? t.hasClass("rev-static-visbile") ? n = o == l || r > l || l > o ? 2 : 0 : l >= r && o >= l || r == l || o == l ? (a || (t.addClass("rev-static-visbile"), t.removeClass("rev-static-hidden")), n = 1) : n = 0 : t.hasClass("rev-static-visbile") ? r > l || l > o ? (n = 2, a || (t.removeClass("rev-static-visbile"), t.addClass("rev-static-hidden"))) : n = 0 : n = 2
            }
            return n
        },
        u = function(t, e) {
            if (void 0 === e) return t;
            e = e.replace("c:", "color:"), e = e.replace("bg:", "background-color:"), e = e.replace("bw:", "border-width:"), e = e.replace("bc:", "border-color:"), e = e.replace("br:", "borderRadius:"), e = e.replace("bs:", "border-style:"), e = e.replace("td:", "text-decoration:");
            var i = e.split(";");
            return i && jQuery.each(i, function(e, i) {
                var a = i.split(":");
                a[0].length > 0 && (t.anim[a[0]] = a[1])
            }), t
        },
        p = function(t, e) {
            var i, a = new Object,
                n = !1;
            if ("rekursive" == e && (i = t.closest(".tp-caption"), i && t.css("fontSize") === i.css("fontSize") && (n = !0)), a.basealign = t.data("basealign") || "grid", a.fontSize = n ? void 0 === i.data("fontsize") ? parseInt(i.css("fontSize"), 0) || 0 : i.data("fontsize") : void 0 === t.data("fontsize") ? parseInt(t.css("fontSize"), 0) || 0 : t.data("fontsize"), a.fontWeight = n ? void 0 === i.data("fontweight") ? parseInt(i.css("fontWeight"), 0) || 0 : i.data("fontweight") : void 0 === t.data("fontweight") ? parseInt(t.css("fontWeight"), 0) || 0 : t.data("fontweight"), a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whitespace") || "normal" : i.data("whitespace") : void 0 === t.data("whitespace") ? t.css("whitespace") || "normal" : t.data("whitespace"), a.lineHeight = n ? void 0 === i.data("lineheight") ? parseInt(i.css("lineHeight"), 0) || 0 : i.data("lineheight") : void 0 === t.data("lineheight") ? parseInt(t.css("lineHeight"), 0) || 0 : t.data("lineheight"), a.letterSpacing = n ? void 0 === i.data("letterspacing") ? parseFloat(i.css("letterSpacing"), 0) || 0 : i.data("letterspacing") : void 0 === t.data("letterspacing") ? parseFloat(t.css("letterSpacing")) || 0 : t.data("letterspacing"), a.paddingTop = void 0 === t.data("paddingtop") ? parseInt(t.css("paddingTop"), 0) || 0 : t.data("paddingtop"), a.paddingBottom = void 0 === t.data("paddingbottom") ? parseInt(t.css("paddingBottom"), 0) || 0 : t.data("paddingbottom"), a.paddingLeft = void 0 === t.data("paddingleft") ? parseInt(t.css("paddingLeft"), 0) || 0 : t.data("paddingleft"), a.paddingRight = void 0 === t.data("paddingright") ? parseInt(t.css("paddingRight"), 0) || 0 : t.data("paddingright"), a.marginTop = void 0 === t.data("margintop") ? parseInt(t.css("marginTop"), 0) || 0 : t.data("margintop"), a.marginBottom = void 0 === t.data("marginbottom") ? parseInt(t.css("marginBottom"), 0) || 0 : t.data("marginbottom"), a.marginLeft = void 0 === t.data("marginleft") ? parseInt(t.css("marginLeft"), 0) || 0 : t.data("marginleft"), a.marginRight = void 0 === t.data("marginright") ? parseInt(t.css("marginRight"), 0) || 0 : t.data("marginright"), a.borderTopWidth = void 0 === t.data("bordertopwidth") ? parseInt(t.css("borderTopWidth"), 0) || 0 : t.data("bordertopwidth"), a.borderBottomWidth = void 0 === t.data("borderbottomwidth") ? parseInt(t.css("borderBottomWidth"), 0) || 0 : t.data("borderbottomwidth"), a.borderLeftWidth = void 0 === t.data("borderleftwidth") ? parseInt(t.css("borderLeftWidth"), 0) || 0 : t.data("borderleftwidth"), a.borderRightWidth = void 0 === t.data("borderrightwidth") ? parseInt(t.css("borderRightWidth"), 0) || 0 : t.data("borderrightwidth"), "rekursive" != e) {
                if (a.color = void 0 === t.data("color") ? "nopredefinedcolor" : t.data("color"), a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whiteSpace") || "nowrap" : i.data("whitespace") : void 0 === t.data("whitespace") ? t.css("whiteSpace") || "nowrap" : t.data("whitespace"), a.minWidth = void 0 === t.data("width") ? parseInt(t.css("minWidth"), 0) || 0 : t.data("width"), a.minHeight = void 0 === t.data("height") ? parseInt(t.css("minHeight"), 0) || 0 : t.data("height"), void 0 != t.data("videowidth") && void 0 != t.data("videoheight")) {
                    var r = t.data("videowidth"),
                        o = t.data("videoheight");
                    r = "100%" === r ? "none" : r, o = "100%" === o ? "none" : o, t.data("width", r), t.data("height", o)
                }
                a.maxWidth = void 0 === t.data("width") ? parseInt(t.css("maxWidth"), 0) || "none" : t.data("width"), a.maxHeight = void 0 === t.data("height") ? parseInt(t.css("maxHeight"), 0) || "none" : t.data("height"), a.wan = void 0 === t.data("wan") ? parseInt(t.css("-webkit-transition"), 0) || "none" : t.data("wan"), a.moan = void 0 === t.data("moan") ? parseInt(t.css("-moz-animation-transition"), 0) || "none" : t.data("moan"), a.man = void 0 === t.data("man") ? parseInt(t.css("-ms-animation-transition"), 0) || "none" : t.data("man"), a.ani = void 0 === t.data("ani") ? parseInt(t.css("transition"), 0) || "none" : t.data("ani")
            }
            return a.styleProps = t.css(["background-color", "border-top-color", "border-bottom-color", "border-right-color", "border-left-color", "border-top-style", "border-bottom-style", "border-left-style", "border-right-style", "border-left-width", "border-right-width", "border-bottom-width", "border-top-width", "color", "text-decoration", "font-style", "border-radius"]), a
        },
        c = function(t, e) {
            var i = new Object;
            return t && jQuery.each(t, function(a, n) {
                i[a] = d(n, e)[e.curWinRange] || t[a]
            }), i
        },
        f = function(t, e, i, a) {
            return t = jQuery.isNumeric(t) ? t * e + "px" : t, t = "full" === t ? a : "auto" === t || "none" === t ? i : t
        },
        g = function(t, e, i, a) {
            var n;
            void 0 === t.data("cssobj") ? (n = p(t, i), t.data("cssobj", n)) : n = t.data("cssobj");
            var r = c(n, e),
                o = e.bw,
                s = e.bh;
            if ("off" === a && (o = 1, s = 1), "auto" == r.lineHeight && (r.lineHeight = r.fontSize + 4), !t.hasClass("tp-splitted")) {
                t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none");
                var l = void 0 !== t.data("transform_hover") || void 0 !== t.data("style_hover");
                if (l && punchgs.TweenLite.set(t, r.styleProps), punchgs.TweenLite.set(t, {
                        fontSize: Math.round(r.fontSize * o) + "px",
                        fontWeight: r.fontWeight,
                        letterSpacing: Math.floor(r.letterSpacing * o) + "px",
                        paddingTop: Math.round(r.paddingTop * s) + "px",
                        paddingBottom: Math.round(r.paddingBottom * s) + "px",
                        paddingLeft: Math.round(r.paddingLeft * o) + "px",
                        paddingRight: Math.round(r.paddingRight * o) + "px",
                        marginTop: r.marginTop * s + "px",
                        marginBottom: r.marginBottom * s + "px",
                        marginLeft: r.marginLeft * o + "px",
                        marginRight: r.marginRight * o + "px",
                        borderTopWidth: Math.round(r.borderTopWidth * s) + "px",
                        borderBottomWidth: Math.round(r.borderBottomWidth * s) + "px",
                        borderLeftWidth: Math.round(r.borderLeftWidth * o) + "px",
                        borderRightWidth: Math.round(r.borderRightWidth * o) + "px",
                        lineHeight: Math.round(r.lineHeight * s) + "px",
                        overwrite: "auto"
                    }), "rekursive" != i) {
                    var d = "slide" == r.basealign ? e.ulw : e.gridwidth[e.curWinRange],
                        h = "slide" == r.basealign ? e.ulh : e.gridheight[e.curWinRange],
                        u = f(r.maxWidth, o, "none", d),
                        g = f(r.maxHeight, s, "none", h),
                        m = f(r.minWidth, o, "0px", d),
                        v = f(r.minHeight, s, "0px", h);
                    punchgs.TweenLite.set(t, {
                        maxWidth: u,
                        maxHeight: g,
                        minWidth: m,
                        minHeight: v,
                        whiteSpace: r.whiteSpace,
                        overwrite: "auto"
                    }), "nopredefinedcolor" != r.color && punchgs.TweenLite.set(t, {
                        color: r.color,
                        overwrite: "auto"
                    })
                }
                setTimeout(function() {
                    t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani"))
                }, 30)
            }
        },
        m = function(t, e) {
            if (t.hasClass("rs-pendulum") && void 0 == t.data("loop-timeline")) {
                t.data("loop-timeline", new punchgs.TimelineLite);
                var i = void 0 == t.data("startdeg") ? -20 : t.data("startdeg"),
                    a = void 0 == t.data("enddeg") ? 20 : t.data("enddeg"),
                    n = void 0 == t.data("speed") ? 2 : t.data("speed"),
                    r = void 0 == t.data("origin") ? "50% 50%" : t.data("origin"),
                    o = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("ease");
                i *= e, a *= e, t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, {
                    force3D: "auto",
                    rotation: i,
                    transformOrigin: r
                }, {
                    rotation: a,
                    ease: o
                })), t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, {
                    force3D: "auto",
                    rotation: a,
                    transformOrigin: r
                }, {
                    rotation: i,
                    ease: o,
                    onComplete: function() {
                        t.data("loop-timeline").restart()
                    }
                }))
            }
            if (t.hasClass("rs-rotate") && void 0 == t.data("loop-timeline")) {
                t.data("loop-timeline", new punchgs.TimelineLite);
                var i = void 0 == t.data("startdeg") ? 0 : t.data("startdeg"),
                    a = void 0 == t.data("enddeg") ? 360 : t.data("enddeg");
                n = void 0 == t.data("speed") ? 2 : t.data("speed"), r = void 0 == t.data("origin") ? "50% 50%" : t.data("origin"), o = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("easing"), i *= e, a *= e, t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, {
                    force3D: "auto",
                    rotation: i,
                    transformOrigin: r
                }, {
                    rotation: a,
                    ease: o,
                    onComplete: function() {
                        t.data("loop-timeline").restart()
                    }
                }))
            }
            if (t.hasClass("rs-slideloop") && void 0 == t.data("loop-timeline")) {
                t.data("loop-timeline", new punchgs.TimelineLite);
                var s = void 0 == t.data("xs") ? 0 : t.data("xs"),
                    l = void 0 == t.data("ys") ? 0 : t.data("ys"),
                    d = void 0 == t.data("xe") ? 0 : t.data("xe"),
                    h = void 0 == t.data("ye") ? 0 : t.data("ye"),
                    n = void 0 == t.data("speed") ? 2 : t.data("speed"),
                    o = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("easing");
                s *= e, l *= e, d *= e, h *= e, t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, {
                    force3D: "auto",
                    x: s,
                    y: l
                }, {
                    x: d,
                    y: h,
                    ease: o
                })), t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, {
                    force3D: "auto",
                    x: d,
                    y: h
                }, {
                    x: s,
                    y: l,
                    onComplete: function() {
                        t.data("loop-timeline").restart()
                    }
                }))
            }
            if (t.hasClass("rs-pulse") && void 0 == t.data("loop-timeline")) {
                t.data("loop-timeline", new punchgs.TimelineLite);
                var u = void 0 == t.data("zoomstart") ? 0 : t.data("zoomstart"),
                    p = void 0 == t.data("zoomend") ? 0 : t.data("zoomend"),
                    n = void 0 == t.data("speed") ? 2 : t.data("speed"),
                    o = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("easing");
                t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, {
                    force3D: "auto",
                    scale: u
                }, {
                    scale: p,
                    ease: o
                })), t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, {
                    force3D: "auto",
                    scale: p
                }, {
                    scale: u,
                    onComplete: function() {
                        t.data("loop-timeline").restart()
                    }
                }))
            }
            if (t.hasClass("rs-wave") && void 0 == t.data("loop-timeline")) {
                t.data("loop-timeline", new punchgs.TimelineLite);
                var c = void 0 == t.data("angle") ? 10 : parseInt(t.data("angle"), 0),
                    f = void 0 == t.data("radius") ? 10 : parseInt(t.data("radius"), 0),
                    n = void 0 == t.data("speed") ? -20 : t.data("speed"),
                    r = void 0 == t.data("origin") ? "50% 50%" : t.data("origin"),
                    g = r.split(" "),
                    m = new Object;
                g.length >= 1 ? (m.x = g[0], m.y = g[1]) : (m.x = "50%", m.y = "50%"), c *= e, f *= e;
                var v = 0 - t.height() / 2 + f * (-1 + parseInt(m.y, 0) / 100),
                    _ = t.width() * (-.5 + parseInt(m.x, 0) / 100),
                    w = {
                        a: 0,
                        ang: c,
                        element: t,
                        unit: f,
                        xoffset: _,
                        yoffset: v
                    };
                t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(w, n, {
                    a: 360
                }, {
                    a: 0,
                    force3D: "auto",
                    ease: punchgs.Linear.easeNone,
                    onUpdate: function() {
                        var t = w.a * (Math.PI / 180);
                        punchgs.TweenLite.to(w.element, .1, {
                            force3D: "auto",
                            x: w.xoffset + Math.cos(t) * w.unit,
                            y: w.yoffset + w.unit * (1 - Math.sin(t))
                        })
                    },
                    onComplete: function() {
                        t.data("loop-timeline").restart()
                    }
                }))
            }
        },
        v = function(t) {
            t.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var t = jQuery(this);
                void 0 != t.data("loop-timeline") && (t.data("loop-timeline").pause(), t.data("loop-timeline", null))
            })
        }
}(jQuery), ! function() {
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        migration: function(t, a) {
            return a = e(a), i(t, a), a
        }
    });
    var e = function(t) {
            if (t.parallaxLevels || t.parallaxBgFreeze) {
                var e = new Object;
                e.type = t.parallax, e.levels = t.parallaxLevels, e.bgparallax = "on" == t.parallaxBgFreeze ? "off" : "on", e.disable_onmobile = t.parallaxDisableOnMobile, t.parallax = e
            }
            if (void 0 === t.disableProgressBar && (t.disableProgressBar = t.hideTimerBar || "off"), (t.startwidth || t.startheight) && (t.gridwidth = t.startwidth, t.gridheight = t.startheight), void 0 === t.sliderType && (t.sliderType = "standard"), "on" === t.fullScreen && (t.sliderLayout = "fullscreen"), "on" === t.fullWidth && (t.sliderLayout = "fullwidth"), void 0 === t.sliderLayout && (t.sliderLayout = "auto"), void 0 === t.navigation) {
                var i = new Object;
                if ("solo" == t.navigationArrows || "nextto" == t.navigationArrows) {
                    var a = new Object;
                    a.enable = !0, a.style = t.navigationStyle || "", a.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, a.hide_onleave = t.hideThumbs > 0 ? !0 : !1, a.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, a.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, a.hide_under = 0, a.tmp = "", a.left = {
                        h_align: t.soloArrowLeftHalign,
                        v_align: t.soloArrowLeftValign,
                        h_offset: t.soloArrowLeftHOffset,
                        v_offset: t.soloArrowLeftVOffset
                    }, a.right = {
                        h_align: t.soloArrowRightHalign,
                        v_align: t.soloArrowRightValign,
                        h_offset: t.soloArrowRightHOffset,
                        v_offset: t.soloArrowRightVOffset
                    }, i.arrows = a
                }
                if ("bullet" == t.navigationType) {
                    var n = new Object;
                    n.style = t.navigationStyle || "", n.enable = !0, n.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, n.hide_onleave = t.hideThumbs > 0 ? !0 : !1, n.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, n.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, n.hide_under = 0, n.direction = "horizontal", n.h_align = t.navigationHAlign || "center", n.v_align = t.navigationVAlign || "bottom", n.space = 5, n.h_offset = t.navigationHOffset || 0, n.v_offset = t.navigationVOffset || 20, n.tmp = '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', i.bullets = n
                }
                if ("thumb" == t.navigationType) {
                    var r = new Object;
                    r.style = t.navigationStyle || "", r.enable = !0, r.width = t.thumbWidth || 100, r.height = t.thumbHeight || 50, r.min_width = t.thumbWidth || 100, r.wrapper_padding = 2, r.wrapper_color = "#f5f5f5", r.wrapper_opacity = 1, r.visibleAmount = t.thumbAmount || 3, r.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, r.hide_onleave = t.hideThumbs > 0 ? !0 : !1, r.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, r.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, r.hide_under = 0, r.direction = "horizontal", r.span = !1, r.position = "inner", r.space = 2, r.h_align = t.navigationHAlign || "center", r.v_align = t.navigationVAlign || "bottom", r.h_offset = t.navigationHOffset || 0, r.v_offset = t.navigationVOffset || 20, r.tmp = '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', i.thumbnails = r
                }
                t.navigation = i, t.navigation.keyboardNavigation = t.keyboardNavigation || "on", t.navigation.onHoverStop = t.onHoverStop || "on", t.navigation.touch = {
                    touchenabled: t.touchenabled || "on",
                    swipe_treshold: t.swipe_treshold || 75,
                    swipe_min_touches: t.swipe_min_touches || 1,
                    drag_block_vertical: t.drag_block_vertical || !1
                }
            }
            return t.fallbacks = {
                isJoomla: t.isJoomla || !1,
                panZoomDisableOnMobile: t.parallaxDisableOnMobile || "off",
                simplifyAll: t.simplifyAll || "on",
                nextSlideOnWindowFocus: t.nextSlideOnWindowFocus || "off",
                disableFocusListener: t.disableFocusListener || !0
            }, t
        },
        i = function(t) {
            var e = new Object,
                i = t.width(),
                a = t.height();
            e.skewfromleftshort = "x:-50;skX:85;o:0", e.skewfromrightshort = "x:50;skX:-85;o:0", e.sfl = "x:-50;o:0", e.sfr = "x:50;o:0", e.sft = "y:-50;o:0", e.sfb = "y:50;o:0", e.skewfromleft = "x:top;skX:85;o:0", e.skewfromright = "x:bottom;skX:-85;o:0", e.lfl = "x:top;o:0", e.lfr = "x:bottom;o:0", e.lft = "y:left;o:0", e.lfb = "y:right;o:0", e.fade = "o:0", 720 * Math.random() - 360, t.find(".tp-caption").each(function() {
                var t = jQuery(this),
                    n = (2 * Math.random() * i - i, 2 * Math.random() * a - a, 3 * Math.random(), 720 * Math.random() - 360, 70 * Math.random() - 35, 70 * Math.random() - 35, t.attr("class"));
                e.randomrotate = "x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;", n.match("randomrotate") ? t.data("transform_in", e.randomrotate) : n.match(/\blfl\b/) ? t.data("transform_in", e.lfl) : n.match(/\blfr\b/) ? t.data("transform_in", e.lfr) : n.match(/\blft\b/) ? t.data("transform_in", e.lft) : n.match(/\blfb\b/) ? t.data("transform_in", e.lfb) : n.match(/\bsfl\b/) ? t.data("transform_in", e.sfl) : n.match(/\bsfr\b/) ? t.data("transform_in", e.sfr) : n.match(/\bsft\b/) ? t.data("transform_in", e.sft) : n.match(/\bsfb\b/) ? t.data("transform_in", e.sfb) : n.match(/\bskewfromleftshort\b/) ? t.data("transform_in", e.skewfromleftshort) : n.match(/\bskewfromrightshort\b/) ? t.data("transform_in", e.skewfromrightshort) : n.match(/\bskewfromleft\b/) ? t.data("transform_in", e.skewfromleft) : n.match(/\bskewfromright\b/) ? t.data("transform_in", e.skewfromright) : n.match(/\bfade\b/) && t.data("transform_in", e.fade), n.match(/\brandomrotateout\b/) ? t.data("transform_out", e.randomrotate) : n.match(/\bltl\b/) ? t.data("transform_out", e.lfl) : n.match(/\bltr\b/) ? t.data("transform_out", e.lfr) : n.match(/\bltt\b/) ? t.data("transform_out", e.lft) : n.match(/\bltb\b/) ? t.data("transform_out", e.lfb) : n.match(/\bstl\b/) ? t.data("transform_out", e.sfl) : n.match(/\bstr\b/) ? t.data("transform_out", e.sfr) : n.match(/\bstt\b/) ? t.data("transform_out", e.sft) : n.match(/\bstb\b/) ? t.data("transform_out", e.sfb) : n.match(/\bskewtoleftshortout\b/) ? t.data("transform_out", e.skewfromleftshort) : n.match(/\bskewtorightshortout\b/) ? t.data("transform_out", e.skewfromrightshort) : n.match(/\bskewtoleftout\b/) ? t.data("transform_out", e.skewfromleft) : n.match(/\bskewtorightout\b/) ? t.data("transform_out", e.skewfromright) : n.match(/\bfadeout\b/) && t.data("transform_out", e.fade), void 0 != t.data("customin") && t.data("transform_in", t.data("customin")), void 0 != t.data("customout") && t.data("transform_out", t.data("customout"))
            })
        }
}(jQuery), ! function() {
    var t = jQuery.fn.revolution,
        e = t.is_mobile();
    jQuery.extend(!0, t, {
        hideUnHideNav: function(t) {
            var e = t.c.width(),
                i = t.navigation.arrows,
                a = t.navigation.bullets,
                n = t.navigation.thumbnails,
                r = t.navigation.tabs;
            h(i) && x(t.c.find(".tparrows"), i.hide_under, e, i.hide_over), h(a) && x(t.c.find(".tp-bullets"), a.hide_under, e, a.hide_over), h(n) && x(t.c.parent().find(".tp-thumbs"), n.hide_under, e, n.hide_over), h(r) && x(t.c.parent().find(".tp-tabs"), r.hide_under, e, r.hide_over), b(t)
        },
        resizeThumbsTabs: function(t) {
            if (t.navigation && t.navigation.tabs.enable || t.navigation && t.navigation.thumbnails.enable) {
                var e = (jQuery(window).width() - 480) / 500,
                    i = new punchgs.TimelineLite,
                    n = t.navigation.tabs,
                    r = t.navigation.thumbnails;
                i.pause(), e = e > 1 ? 1 : 0 > e ? 0 : e, h(n) && n.width > n.min_width && a(e, i, t.c, n, t.slideamount, "tab"), h(r) && r.width > r.min_width && a(e, i, t.c, r, t.slideamount, "thumb"), i.play(), b(t)
            }
            return !0
        },
        manageNavigation: function(e) {
            var a = t.getHorizontalOffset(e.c.parent(), "left"),
                n = t.getHorizontalOffset(e.c.parent(), "right");
            h(e.navigation.bullets) && ("fullscreen" != e.sliderLayout && "fullwidth" != e.sliderLayout && (e.navigation.bullets.h_offset_old = void 0 === e.navigation.bullets.h_offset_old ? e.navigation.bullets.h_offset : e.navigation.bullets.h_offset_old, e.navigation.bullets.h_offset = "center" === e.navigation.bullets.h_align ? e.navigation.bullets.h_offset_old + a / 2 - n / 2 : e.navigation.bullets.h_offset_old + a - n), v(e.c.find(".tp-bullets"), e.navigation.bullets)), h(e.navigation.thumbnails) && v(e.c.parent().find(".tp-thumbs"), e.navigation.thumbnails), h(e.navigation.tabs) && v(e.c.parent().find(".tp-tabs"), e.navigation.tabs), h(e.navigation.arrows) && ("fullscreen" != e.sliderLayout && "fullwidth" != e.sliderLayout && (e.navigation.arrows.left.h_offset_old = void 0 === e.navigation.arrows.left.h_offset_old ? e.navigation.arrows.left.h_offset : e.navigation.arrows.left.h_offset_old, e.navigation.arrows.left.h_offset = "right" === e.navigation.arrows.left.h_align ? e.navigation.arrows.left.h_offset_old + n : e.navigation.arrows.left.h_offset_old + a, e.navigation.arrows.right.h_offset_old = void 0 === e.navigation.arrows.right.h_offset_old ? e.navigation.arrows.right.h_offset : e.navigation.arrows.right.h_offset_old, e.navigation.arrows.right.h_offset = "right" === e.navigation.arrows.right.h_align ? e.navigation.arrows.right.h_offset_old + n : e.navigation.arrows.right.h_offset_old + a), v(e.c.find(".tp-leftarrow.tparrows"), e.navigation.arrows.left), v(e.c.find(".tp-rightarrow.tparrows"), e.navigation.arrows.right)), h(e.navigation.thumbnails) && i(e.c.parent().find(".tp-thumbs"), e.navigation.thumbnails), h(e.navigation.tabs) && i(e.c.parent().find(".tp-tabs"), e.navigation.tabs)
        },
        createNavigation: function(t, a) {
            var n = t.parent(),
                s = a.navigation.arrows,
                u = a.navigation.bullets,

                g = a.navigation.thumbnails,
                m = a.navigation.tabs,
                v = h(s),
                w = h(u),
                b = h(g),
                x = h(m);
            r(t, a), o(t, a), v && f(t, s, a), a.li.each(function() {
                var e = jQuery(this);
                w && _(t, u, e, a), b && y(t, g, e, "tp-thumb", a), x && y(t, m, e, "tp-tab", a)
            }), t.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                var e = 0 == t.find(".next-revslide").length ? t.find(".active-revslide").data("index") : t.find(".next-revslide").data("index");
                t.find(".tp-bullet").each(function() {
                    var t = jQuery(this);
                    t.data("liref") === e ? t.addClass("selected") : t.removeClass("selected")
                }), n.find(".tp-thumb, .tp-tab").each(function() {
                    var t = jQuery(this);
                    t.data("liref") === e ? (t.addClass("selected"), t.hasClass("tp-tab") ? i(n.find(".tp-tabs"), m) : i(n.find(".tp-thumbs"), g)) : t.removeClass("selected")
                });
                var r = 0,
                    o = !1;
                a.thumbs && jQuery.each(a.thumbs, function(t, i) {
                    r = o === !1 ? t : r, o = i.id === e || t === e ? !0 : o
                });
                var l = r > 0 ? r - 1 : a.slideamount - 1,
                    d = r + 1 == a.slideamount ? 0 : r + 1;
                if (s.enable === !0) {
                    var h = s.tmp;
                    jQuery.each(a.thumbs[l].params, function(t, e) {
                        h = h.replace(e.from, e.to)
                    }), s.left.j.html(h), h = s.tmp, jQuery.each(a.thumbs[d].params, function(t, e) {
                        h = h.replace(e.from, e.to)
                    }), s.right.j.html(h), punchgs.TweenLite.set(s.left.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + a.thumbs[l].src + ")"
                    }), punchgs.TweenLite.set(s.right.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + a.thumbs[d].src + ")"
                    })
                }
            }), d(s), d(u), d(g), d(m), n.on("mouseenter mousemove", function() {
                n.hasClass("tp-mouseover") || (n.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(c), v && s.hide_onleave && c(n.find(".tparrows"), s, "show"), w && u.hide_onleave && c(n.find(".tp-bullets"), u, "show"), b && g.hide_onleave && c(n.find(".tp-thumbs"), g, "show"), x && m.hide_onleave && c(n.find(".tp-tabs"), m, "show"), e && (n.removeClass("tp-mouseover"), p(t, a)))
            }), n.on("mouseleave", function() {
                n.removeClass("tp-mouseover"), p(t, a)
            }), v && s.hide_onleave && c(n.find(".tparrows"), s, "hide", 0), w && u.hide_onleave && c(n.find(".tp-bullets"), u, "hide", 0), b && g.hide_onleave && c(n.find(".tp-thumbs"), g, "hide", 0), x && m.hide_onleave && c(n.find(".tp-tabs"), m, "hide", 0), b && l(n.find(".tp-thumbs"), a), x && l(n.find(".tp-tabs"), a), "carousel" === a.sliderType && l(t, a, !0), "on" == a.navigation.touch.touchenabled && l(t, a, "swipebased")
        }
    });
    var i = function(t, e) {
            var i = (t.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", t.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                a = t.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                n = t.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
                r = t.find(i),
                o = r.find(a),
                s = e.direction,
                l = "vertical" === s ? r.find(n).first().outerHeight(!0) + e.space : r.find(n).first().outerWidth(!0) + e.space,
                d = "vertical" === s ? r.height() : r.width(),
                h = parseInt(r.find(n + ".selected").data("liindex"), 0),
                u = d / l,
                p = "vertical" === s ? r.height() : r.width(),
                c = 0 - h * l,
                f = "vertical" === s ? o.height() : o.width(),
                g = 0 - (f - p) > c ? 0 - (f - p) : g > 0 ? 0 : c,
                m = o.data("offset");
            u > 2 && (g = 0 >= c - (m + l) ? 0 - l > c - (m + l) ? m : g + l : g, g = l > c - l + m + d && c + (Math.round(u) - 2) * l < m ? c + (Math.round(u) - 2) * l : g), g = 0 - (f - p) > g ? 0 - (f - p) : g > 0 ? 0 : g, "vertical" !== s && r.width() >= o.width() && (g = 0), "vertical" === s && r.height() >= o.height() && (g = 0), t.hasClass("dragged") || ("vertical" === s ? o.data("tmmove", punchgs.TweenLite.to(o, .5, {
                top: g + "px",
                ease: punchgs.Power3.easeInOut
            })) : o.data("tmmove", punchgs.TweenLite.to(o, .5, {
                left: g + "px",
                ease: punchgs.Power3.easeInOut
            })), o.data("offset", g))
        },
        a = function(t, e, i, a, n, r) {
            var o = i.parent().find(".tp-" + r + "s"),
                s = o.find(".tp-" + r + "s-inner-wrapper"),
                l = o.find(".tp-" + r + "-mask"),
                d = a.width * t < a.min_width ? a.min_width : Math.round(a.width * t),
                h = Math.round(d / a.width * a.height),
                u = "vertical" === a.direction ? d : d * n + a.space * (n - 1),
                p = "vertical" === a.direction ? h * n + a.space * (n - 1) : h,
                c = "vertical" === a.direction ? {
                    width: d + "px"
                } : {
                    height: h + "px"
                };
            e.add(punchgs.TweenLite.set(o, c)), e.add(punchgs.TweenLite.set(s, {
                width: u + "px",
                height: p + "px"
            })), e.add(punchgs.TweenLite.set(l, {
                width: u + "px",
                height: p + "px"
            }));
            var f = s.find(".tp-" + r);
            return f && jQuery.each(f, function(t, i) {
                "vertical" === a.direction ? e.add(punchgs.TweenLite.set(i, {
                    top: t * (h + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: d + "px",
                    height: h + "px"
                })) : "horizontal" === a.direction && e.add(punchgs.TweenLite.set(i, {
                    left: t * (d + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: d + "px",
                    height: h + "px"
                }))
            }), e
        },
        n = function(t) {
            var e = 0,
                i = 0,
                a = 0,
                n = 0,
                r = 1,
                o = 1,
                s = 1;
            return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), a = e * r, n = i * r, "deltaY" in t && (n = t.deltaY), "deltaX" in t && (a = t.deltaX), (a || n) && t.deltaMode && (1 == t.deltaMode ? (a *= o, n *= o) : (a *= s, n *= s)), a && !e && (e = 1 > a ? -1 : 1), n && !i && (i = 1 > n ? -1 : 1), n = navigator.userAgent.match(/mozilla/i) ? 10 * n : n, (n > 300 || -300 > n) && (n /= 10), {
                spinX: e,
                spinY: i,
                pixelX: a,
                pixelY: n
            }
        },
        r = function(e, i) {
            "on" === i.navigation.keyboardNavigation && jQuery(document).keydown(function(a) {
                ("horizontal" == i.navigation.keyboard_direction && 39 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 40 == a.keyCode) && (i.sc_indicator = "arrow", t.callingNewSlide(i, e, 1)), ("horizontal" == i.navigation.keyboard_direction && 37 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 38 == a.keyCode) && (i.sc_indicator = "arrow", t.callingNewSlide(i, e, -1))
            })
        },
        o = function(e, i) {
            if ("on" === i.navigation.mouseScrollNavigation) {
                var a = navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                    r = navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                e.on("mousewheel DOMMouseScroll", function(o) {
                    var s = n(o.originalEvent),
                        l = e.find(".tp-revslider-slidesli.active-revslide").index(),
                        d = e.find(".tp-revslider-slidesli.processing-revslide").index(),
                        h = -1 != l && 0 == l || -1 != d && 0 == d ? !0 : !1,
                        u = -1 != l && l == i.slideamount - 1 || 1 != d && d == i.slideamount - 1 ? !0 : !1;
                    if (-1 == d) {
                        if (s.pixelY < a) {
                            if (!h) return i.sc_indicator = "arrow", t.callingNewSlide(i, e, -1), !1
                        } else if (s.pixelY > r && !u) return i.sc_indicator = "arrow", t.callingNewSlide(i, e, 1), !1
                    } else if (!u) return !1;
                    o.preventDefault()
                })
            }
        },
        s = function(t, i, a) {
            return t = e ? jQuery(a.target).closest("." + t).length || jQuery(a.srcElement).closest("." + t).length : jQuery(a.toElement).closest("." + t).length || jQuery(a.originalTarget).closest("." + t).length, t === !0 || 1 === t ? 1 : 0
        },
        l = function(i, a, n) {
            i.data("opt", a);
            var r = a.carousel;
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), r.Limit = "endless";
            var o = (e || "Firefox" === t.get_browser(), i),
                l = "vertical" === a.navigation.thumbnails.direction || "vertical" === a.navigation.tabs.direction ? "none" : "vertical",
                d = a.navigation.touch.swipe_direction || "horizontal";
            l = "swipebased" == n && "vertical" == d ? "none" : n ? "vertical" : l, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || (jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, a, .noSwipe"), o.swipetp({
                allowPageScroll: l,
                triggerOnTouchLeave: !0,
                excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
                swipeStatus: function(e, n, o, l) {
                    var h = s("rev_slider_wrapper", i, e),
                        u = s("tp-thumbs", i, e),
                        p = s("tp-tabs", i, e),
                        c = jQuery(this).attr("class"),
                        f = c.match(/tp-tabs|tp-thumb/gi) ? !0 : !1;
                    if ("carousel" === a.sliderType && (("move" === n || "end" === n || "cancel" == n) && a.dragStartedOverSlider && !a.dragStartedOverThumbs && !a.dragStartedOverTabs || "start" === n && h > 0 && 0 === u && 0 === p)) switch (a.dragStartedOverSlider = !0, l = o && o.match(/left|up/g) ? Math.round(-1 * l) : l = Math.round(1 * l), n) {
                        case "start":
                            void 0 !== r.positionanim && (r.positionanim.kill(), r.slide_globaloffset = "off" === r.infinity ? r.slide_offset : t.simp(r.slide_offset, r.maxwidth)), r.overpull = "none", r.wrap.addClass("dragged");
                            break;
                        case "move":
                            if (r.slide_offset = "off" === r.infinity ? r.slide_globaloffset + l : t.simp(r.slide_globaloffset + l, r.maxwidth), "off" === r.infinity) {
                                var g = "center" === r.horizontal_align ? (r.wrapwidth / 2 - r.slide_width / 2 - r.slide_offset) / r.slide_width : (0 - r.slide_offset) / r.slide_width;
                                "none" !== r.overpull && 0 !== r.overpull || !(0 > g || g > a.slideamount - 1) ? g >= 0 && g <= a.slideamount - 1 && (g >= 0 && l > r.overpull || g <= a.slideamount - 1 && l < r.overpull) && (r.overpull = 0) : r.overpull = l, r.slide_offset = 0 > g ? r.slide_offset + (r.overpull - l) / 1.1 + Math.sqrt(Math.abs((r.overpull - l) / 1.1)) : g > a.slideamount - 1 ? r.slide_offset + (r.overpull - l) / 1.1 - Math.sqrt(Math.abs((r.overpull - l) / 1.1)) : r.slide_offset
                            }
                            t.organiseCarousel(a, o, !0, !0);
                            break;
                        case "end":
                        case "cancel":
                            r.slide_globaloffset = r.slide_offset, r.wrap.removeClass("dragged"), t.carouselToEvalPosition(a, o), a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                    } else {
                        if (("move" !== n && "end" !== n && "cancel" != n || a.dragStartedOverSlider || !a.dragStartedOverThumbs && !a.dragStartedOverTabs) && !("start" === n && h > 0 && (u > 0 || p > 0))) {
                            if ("end" == n && !f) {
                                if (a.sc_indicator = "arrow", "horizontal" == d && "left" == o || "vertical" == d && "up" == o) return t.callingNewSlide(a, a.c, 1), !1;
                                if ("horizontal" == d && "right" == o || "vertical" == d && "down" == o) return t.callingNewSlide(a, a.c, -1), !1
                            }
                            return a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1, !0
                        }
                        u > 0 && (a.dragStartedOverThumbs = !0), p > 0 && (a.dragStartedOverTabs = !0);
                        var m = a.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                            v = a.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                            _ = a.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                            w = a.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                            y = a.dragStartedOverThumbs ? a.navigation.thumbnails : a.navigation.tabs;
                        l = o && o.match(/left|up/g) ? Math.round(-1 * l) : l = Math.round(1 * l);
                        var b = i.parent().find(v),
                            x = b.find(_),
                            T = y.direction,
                            k = "vertical" === T ? x.height() : x.width(),
                            S = "vertical" === T ? b.height() : b.width(),
                            O = "vertical" === T ? b.find(w).first().outerHeight(!0) + y.space : b.find(w).first().outerWidth(!0) + y.space,
                            L = void 0 === x.data("offset") ? 0 : parseInt(x.data("offset"), 0),
                            P = 0;
                        switch (n) {
                            case "start":
                                i.parent().find(m).addClass("dragged"), L = "vertical" === T ? x.position().top : x.position().left, x.data("offset", L), x.data("tmmove") && x.data("tmmove").pause();
                                break;
                            case "move":
                                if (S >= k) return !1;
                                P = L + l, P = P > 0 ? "horizontal" === T ? P - x.width() * (P / x.width() * P / x.width()) : P - x.height() * (P / x.height() * P / x.height()) : P;
                                var C = "vertical" === T ? 0 - (x.height() - b.height()) : 0 - (x.width() - b.width());
                                P = C > P ? "horizontal" === T ? P + x.width() * (P - C) / x.width() * (P - C) / x.width() : P + x.height() * (P - C) / x.height() * (P - C) / x.height() : P, "vertical" === T ? punchgs.TweenLite.set(x, {
                                    top: P + "px"
                                }) : punchgs.TweenLite.set(x, {
                                    left: P + "px"
                                });
                                break;
                            case "end":
                            case "cancel":
                                if (f) return P = L + l, P = "vertical" === T ? P < 0 - (x.height() - b.height()) ? 0 - (x.height() - b.height()) : P : P < 0 - (x.width() - b.width()) ? 0 - (x.width() - b.width()) : P, P = P > 0 ? 0 : P, P = Math.abs(l) > O / 10 ? 0 >= l ? Math.floor(P / O) * O : Math.ceil(P / O) * O : 0 > l ? Math.ceil(P / O) * O : Math.floor(P / O) * O, P = "vertical" === T ? P < 0 - (x.height() - b.height()) ? 0 - (x.height() - b.height()) : P : P < 0 - (x.width() - b.width()) ? 0 - (x.width() - b.width()) : P, P = P > 0 ? 0 : P, "vertical" === T ? punchgs.TweenLite.to(x, .5, {
                                    top: P + "px",
                                    ease: punchgs.Power3.easeOut
                                }) : punchgs.TweenLite.to(x, .5, {
                                    left: P + "px",
                                    ease: punchgs.Power3.easeOut
                                }), P = P ? P : "vertical" === T ? x.position().top : x.position().left, x.data("offset", P), x.data("distance", l), setTimeout(function() {
                                    a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                                }, 100), i.parent().find(m).removeClass("dragged"), !1
                        }
                    }
                }
            })
        },
        d = function(t) {
            t.hide_delay = jQuery.isNumeric(parseInt(t.hide_delay, 0)) ? t.hide_delay / 1e3 : .2, t.hide_delay_mobile = jQuery.isNumeric(parseInt(t.hide_delay_mobile, 0)) ? t.hide_delay_mobile / 1e3 : .2
        },
        h = function(t) {
            return t && t.enable
        },
        u = function(t) {
            return t && t.enable && t.hide_onleave === !0 && (void 0 === t.position ? !0 : !t.position.match(/outer/g))
        },
        p = function(t, i) {
            var a = t.parent();
            u(i.navigation.arrows) && punchgs.TweenLite.delayedCall(e ? i.navigation.arrows.hide_delay_mobile : i.navigation.arrows.hide_delay, c, [a.find(".tparrows"), i.navigation.arrows, "hide"]),
                u(i.navigation.bullets) && punchgs.TweenLite.delayedCall(e ? i.navigation.bullets.hide_delay_mobile : i.navigation.bullets.hide_delay, c, [a.find(".tp-bullets"), i.navigation.bullets, "hide"]), u(i.navigation.thumbnails) && punchgs.TweenLite.delayedCall(e ? i.navigation.thumbnails.hide_delay_mobile : i.navigation.thumbnails.hide_delay, c, [a.find(".tp-thumbs"), i.navigation.thumbnails, "hide"]), u(i.navigation.tabs) && punchgs.TweenLite.delayedCall(e ? i.navigation.tabs.hide_delay_mobile : i.navigation.tabs.hide_delay, c, [a.find(".tp-tabs"), i.navigation.tabs, "hide"])
        },
        c = function(t, e, i, a) {
            switch (a = void 0 === a ? .5 : a, i) {
                case "show":
                    punchgs.TweenLite.to(t, a, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        overwrite: "auto"
                    });
                    break;
                case "hide":
                    punchgs.TweenLite.to(t, a, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOu,
                        overwrite: "auto"
                    })
            }
        },
        f = function(t, e, i) {
            e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, 0 === t.find(".tp-leftarrow.tparrows").length && t.append('<div class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</div>"), 0 === t.find(".tp-rightarrow.tparrows").length && t.append('<div class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</div>");
            var a = t.find(".tp-leftarrow.tparrows"),
                n = t.find(".tp-rightarrow.tparrows");
            n.click(function() {
                i.sc_indicator = "arrow", t.revnext()
            }), a.click(function() {
                i.sc_indicator = "arrow", t.revprev()
            }), e.right.j = t.find(".tp-rightarrow.tparrows"), e.left.j = t.find(".tp-leftarrow.tparrows"), e.padding_top = parseInt(i.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(i.carousel.padding_bottom || 0, 0), v(a, e.left), v(n, e.right), ("outer-left" == e.position || "outer-right" == e.position) && (i.outernav = !0)
        },
        g = function(t, e) {
            var i = t.outerHeight(!0),
                a = (t.outerWidth(!0), "top" === e.v_align ? {
                    top: "0px",
                    y: Math.round(e.v_offset) + "px"
                } : "center" === e.v_align ? {
                    top: "50%",
                    y: Math.round(0 - i / 2 + e.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (i + e.v_offset)) + "px"
                });
            t.hasClass("outer-bottom") || punchgs.TweenLite.set(t, a)
        },
        m = function(t, e) {
            var i = (t.outerHeight(!0), t.outerWidth(!0)),
                a = "left" === e.h_align ? {
                    left: "0px",
                    x: Math.round(e.h_offset) + "px"
                } : "center" === e.h_align ? {
                    left: "50%",
                    x: Math.round(0 - i / 2 + e.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (i + e.h_offset)) + "px"
                };
            punchgs.TweenLite.set(t, a)
        },
        v = function(t, e) {
            var i = t.closest(".tp-simpleresponsive").length > 0 ? t.closest(".tp-simpleresponsive") : t.closest(".tp-revslider-mainul").length > 0 ? t.closest(".tp-revslider-mainul") : t.closest(".rev_slider_wrapper").length > 0 ? t.closest(".rev_slider_wrapper") : t.parent().find(".tp-revslider-mainul"),
                a = i.width(),
                n = i.height();
            if (g(t, e), m(t, e), "outer-left" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout ? "outer-right" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout || punchgs.TweenLite.set(t, {
                    right: 0 - t.outerWidth() + "px",
                    x: e.h_offset + "px"
                }) : punchgs.TweenLite.set(t, {
                    left: 0 - t.outerWidth() + "px",
                    x: e.h_offset + "px"
                }), t.hasClass("tp-thumbs") || t.hasClass("tp-tabs")) {
                var r = t.data("wr_padding"),
                    o = t.data("maxw"),
                    s = t.data("maxh"),
                    l = t.find(t.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                    d = parseInt(e.padding_top || 0, 0),
                    h = parseInt(e.padding_bottom || 0, 0);
                o > a && "outer-left" !== e.position && "outer-right" !== e.position ? (punchgs.TweenLite.set(t, {
                    left: "0px",
                    x: 0,
                    maxWidth: a - 2 * r + "px"
                }), punchgs.TweenLite.set(l, {
                    maxWidth: a - 2 * r + "px"
                })) : (punchgs.TweenLite.set(t, {
                    maxWidth: o + "px"
                }), punchgs.TweenLite.set(l, {
                    maxWidth: o + "px"
                })), s + 2 * r > n && "outer-bottom" !== e.position && "outer-top" !== e.position ? (punchgs.TweenLite.set(t, {
                    top: "0px",
                    y: 0,
                    maxHeight: d + h + (n - 2 * r) + "px"
                }), punchgs.TweenLite.set(l, {
                    maxHeight: d + h + (n - 2 * r) + "px"
                })) : (punchgs.TweenLite.set(t, {
                    maxHeight: s + "px"
                }), punchgs.TweenLite.set(l, {
                    maxHeight: s + "px"
                })), "outer-left" !== e.position && "outer-right" !== e.position && (d = 0, h = 0), e.span === !0 && "vertical" === e.direction ? (punchgs.TweenLite.set(t, {
                    maxHeight: d + h + (n - 2 * r) + "px",
                    height: d + h + (n - 2 * r) + "px",
                    top: 0 - d,
                    y: 0
                }), g(l, e)) : e.span === !0 && "horizontal" === e.direction && (punchgs.TweenLite.set(t, {
                    maxWidth: "100%",
                    width: a - 2 * r + "px",
                    left: 0,
                    x: 0
                }), m(l, e))
            }
        },
        _ = function(t, e, i, a) {
            0 === t.find(".tp-bullets").length && (e.style = void 0 === e.style ? "" : e.style, t.append('<div class="tp-bullets ' + e.style + " " + e.direction + '"></div>'));
            var n = t.find(".tp-bullets"),
                r = i.data("index"),
                o = e.tmp;
            jQuery.each(a.thumbs[i.index()].params, function(t, e) {
                o = o.replace(e.from, e.to)
            }), n.append('<div class="justaddedbullet tp-bullet">' + o + "</div>");
            var s = t.find(".justaddedbullet"),
                l = t.find(".tp-bullet").length,
                d = s.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                h = s.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0);
            "vertical" === e.direction ? (s.css({
                top: (l - 1) * h + "px",
                left: "0px"
            }), n.css({
                height: (l - 1) * h + s.outerHeight(),
                width: s.outerWidth()
            })) : (s.css({
                left: (l - 1) * d + "px",
                top: "0px"
            }), n.css({
                width: (l - 1) * d + s.outerWidth(),
                height: s.outerHeight()
            })), s.find(".tp-bullet-image").css({
                backgroundImage: "url(" + a.thumbs[i.index()].src + ")"
            }), s.data("liref", r), s.click(function() {
                a.sc_indicator = "bullet", t.revcallslidewithid(r), t.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), s.removeClass("justaddedbullet"), e.padding_top = parseInt(a.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(a.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (a.outernav = !0), v(n, e)
        },
        w = function(t, e) {
            e = parseFloat(e), t = t.replace("#", "");
            var i = parseInt(t.substring(0, 2), 16),
                a = parseInt(t.substring(2, 4), 16),
                n = parseInt(t.substring(4, 6), 16),
                r = "rgba(" + i + "," + a + "," + n + "," + e + ")";
            return r
        },
        y = function(t, e, i, a, n) {
            var r = "tp-thumb" === a ? ".tp-thumbs" : ".tp-tabs",
                o = "tp-thumb" === a ? ".tp-thumb-mask" : ".tp-tab-mask",
                s = "tp-thumb" === a ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                l = "tp-thumb" === a ? ".tp-thumb" : ".tp-tab",
                d = "tp-thumb" === a ? ".tp-thumb-image" : ".tp-tab-image";
            if (e.visibleAmount = e.visibleAmount > n.slideamount ? n.slideamount : e.visibleAmount, e.sliderLayout = n.sliderLayout, 0 === t.parent().find(r).length) {
                e.style = void 0 === e.style ? "" : e.style;
                var h = e.span === !0 ? "tp-span-wrapper" : "",
                    u = '<div class="' + a + "s " + h + " " + e.position + " " + e.style + '"><div class="' + a + '-mask"><div class="' + a + 's-inner-wrapper" style="position:relative;"></div></div></div>';
                "outer-top" === e.position ? t.parent().prepend(u) : "outer-bottom" === e.position ? t.after(u) : t.append(u), e.padding_top = parseInt(n.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(n.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (n.outernav = !0)
            }
            var p = i.data("index"),
                c = t.parent().find(r),
                f = c.find(o),
                g = f.find(s),
                m = "horizontal" === e.direction ? e.width * e.visibleAmount + e.space * (e.visibleAmount - 1) : e.width,
                _ = "horizontal" === e.direction ? e.height : e.height * e.visibleAmount + e.space * (e.visibleAmount - 1),
                y = e.tmp;
            jQuery.each(n.thumbs[i.index()].params, function(t, e) {
                y = y.replace(e.from, e.to)
            }), g.append('<div data-liindex="' + i.index() + '" data-liref="' + p + '" class="justaddedthumb ' + a + '" style="width:' + e.width + "px;height:" + e.height + 'px;">' + y + "</div>");
            var b = c.find(".justaddedthumb"),
                x = c.find(l).length,
                T = b.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                k = b.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0);
            b.find(d).css({
                backgroundImage: "url(" + n.thumbs[i.index()].src + ")"
            }), "vertical" === e.direction ? (b.css({
                top: (x - 1) * k + "px",
                left: "0px"
            }), g.css({
                height: (x - 1) * k + b.outerHeight(),
                width: b.outerWidth()
            })) : (b.css({
                left: (x - 1) * T + "px",
                top: "0px"
            }), g.css({
                width: (x - 1) * T + b.outerWidth(),
                height: b.outerHeight()
            })), c.data("maxw", m), c.data("maxh", _), c.data("wr_padding", e.wrapper_padding);
            var S = "outer-top" === e.position || "outer-bottom" === e.position ? "relative" : "absolute",
                O = "outer-top" !== e.position && "outer-bottom" !== e.position || "center" !== e.h_align ? "0" : "auto";
            f.css({
                maxWidth: m + "px",
                maxHeight: _ + "px",
                overflow: "hidden",
                position: "relative"
            }), c.css({
                maxWidth: m + "px",
                margin: O,
                maxHeight: _ + "px",
                overflow: "visible",
                position: S,
                background: w(e.wrapper_color, e.wrapper_opacity),
                padding: e.wrapper_padding + "px",
                boxSizing: "contet-box"
            }), b.click(function() {
                n.sc_indicator = "bullet";
                var e = t.parent().find(s).data("distance");
                e = void 0 === e ? 0 : e, Math.abs(e) < 10 && (t.revcallslidewithid(p), t.parent().find(r).removeClass("selected"), jQuery(this).addClass("selected"))
            }), b.removeClass("justaddedthumb"), v(c, e)
        },
        b = function(t) {
            var e = t.c.parent().find(".outer-top"),
                i = t.c.parent().find(".outer-bottom");
            t.top_outer = e.hasClass("tp-forcenotvisible") ? 0 : e.outerHeight() || 0, t.bottom_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0
        },
        x = function(t, e, i, a) {
            e > i || i > a ? t.addClass("tp-forcenotvisible") : t.removeClass("tp-forcenotvisible")
        }
}(jQuery), ! function() {
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        animateSlide: function(t, e, i, a, r, o, s, l, d) {
            return n(t, e, i, a, r, o, s, l, d)
        }
    });
    var e = function(e, i, a, n) {
            var r = e,
                o = r.find(".defaultimg"),
                s = r.data("zoomstart"),
                l = r.data("rotationstart");
            void 0 != o.data("currotate") && (l = o.data("currotate")), void 0 != o.data("curscale") && "box" == n ? s = 100 * o.data("curscale") : void 0 != o.data("curscale") && (s = o.data("curscale")), t.slotSize(o, i);
            var d = o.attr("src"),
                h = o.css("backgroundColor"),
                u = i.width,
                p = i.height,
                c = o.data("fxof"),
                f = 0;
            "on" == i.autoHeight && (p = i.c.height()), void 0 == c && (c = 0);
            var g = 0,
                m = o.data("bgfit"),
                v = o.data("bgrepeat"),
                _ = o.data("bgposition");

            switch (void 0 == m && (m = "cover"), void 0 == v && (v = "no-repeat"), void 0 == _ && (_ = "center center"), n) {
                case "box":
                    var w = 0,
                        y = 0,
                        b = 0;
                    if (w = i.sloth > i.slotw ? i.sloth : i.slotw, !a) var g = 0 - w;
                    i.slotw = w, i.sloth = w;
                    for (var y = 0, b = 0, x = 0; x < i.slots; x++) {
                        b = 0;
                        for (var T = 0; T < i.slots; T++) r.append('<div class="slot" style="position:absolute;top:' + (f + b) + "px;left:" + (c + y) + "px;width:" + w + "px;height:" + w + 'px;overflow:hidden;"><div class="slotslide" data-x="' + y + '" data-y="' + b + '" style="position:absolute;top:0px;left:0px;width:' + w + "px;height:" + w + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - b) + "px;left:" + (0 - y) + "px;width:" + u + "px;height:" + p + "px;background-color:" + h + ";background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + m + ";background-position:" + _ + ';"></div></div></div>'), b += w, void 0 != s && void 0 != l && punchgs.TweenLite.set(r.find(".slot").last(), {
                            rotationZ: l
                        });
                        y += w
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("horizontal" == n) {
                        if (!a) var g = 0 - i.slotw;
                        for (var T = 0; T < i.slots; T++) r.append('<div class="slot" style="position:absolute;top:' + (0 + f) + "px;left:" + (c + T * i.slotw) + "px;overflow:hidden;width:" + (i.slotw + .6) + "px;height:" + p + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + g + "px;width:" + (i.slotw + .6) + "px;height:" + p + 'px;overflow:hidden;"><div style="background-color:' + h + ";position:absolute;top:0px;left:" + (0 - T * i.slotw) + "px;width:" + u + "px;height:" + p + "px;background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + m + ";background-position:" + _ + ';"></div></div></div>'), void 0 != s && void 0 != l && punchgs.TweenLite.set(r.find(".slot").last(), {
                            rotationZ: l
                        })
                    } else {
                        if (!a) var g = 0 - i.sloth;
                        for (var T = 0; T < i.slots + 2; T++) r.append('<div class="slot" style="position:absolute;top:' + (f + T * i.sloth) + "px;left:" + c + "px;overflow:hidden;width:" + u + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + g + "px;left:0px;width:" + u + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + h + ";position:absolute;top:" + (0 - T * i.sloth) + "px;left:0px;width:" + u + "px;height:" + p + "px;background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + m + ";background-position:" + _ + ';"></div></div></div>'), void 0 != s && void 0 != l && punchgs.TweenLite.set(r.find(".slot").last(), {
                            rotationZ: l
                        })
                    }
            }
        },
        i = function(t, e, i, a, n) {
            function r() {
                jQuery.each(y, function(t, e) {
                    (e[0] == i || e[8] == i) && (m = e[1], v = e[2], _ = w), w += 1
                })
            }
            var o = punchgs.Power1.easeIn,
                s = punchgs.Power1.easeOut,
                l = punchgs.Power1.easeInOut,
                d = punchgs.Power2.easeIn,
                h = punchgs.Power2.easeOut,
                u = punchgs.Power2.easeInOut,
                p = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
                c = punchgs.Power3.easeInOut,
                f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                g = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                m = 0,
                v = 1,
                _ = 0,
                w = 0,
                y = (new Array, [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, s, s, 500, 6],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, l, l, 700, 5],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, u, u, 700, 3],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, u, u, 700, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, s, s, 300, 5],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, s, s, 300, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, s, s, 300, 5],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, s, s, 300, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, h, h, 500, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9, h, h, 500, 25],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10, h, h, 500, 25],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, u, u, 1e3, 1],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                    ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                    ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                    ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                    ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                    ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                    ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                    ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                    ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16, c, c, 1e3, 2],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, l, l, 500, 7],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, l, l, 500, 5],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, c, c, 500, 1],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, c, c, 500, 1],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, p, c, 500, 1],
                    ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, c, c, 500, 1],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, u, u, 500, 1],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, h, h, 500, 1],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, h, h, 500, 1],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, u, u, 500, 1],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, u, u, 500, 1],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28, u, u, 1e3, 1],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, u, u, 1e3, 1],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, u, u, 1e3, 1],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, u, u, 1e3, 1],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, u, u, 1e3, 1],
                    ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, u, u, 1e3, 1],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, u, u, 1e3, 1],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, u, u, 1e3, 1],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36, u, d, 1500, 1],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37, u, d, 1500, 1],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, u, o, 1500, 1],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, u, o, 1500, 1],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, u, d, 1e3, 1],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, u, d, 1e3, 1],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, u, d, 1e3, 1],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, u, d, 1e3, 1],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, u, d, 1e3, 1],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, u, d, 1e3, 1],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, u, d, 1e3, 1]
                ]);
            "slidehorizontal" == i && (i = "slideleft", 1 == n && (i = "slideright")), "slidevertical" == i && (i = "slideup", 1 == n && (i = "slidedown")), "slideoverhorizontal" == i && (i = "slideoverleft", 1 == n && (i = "slideoverright")), "slideoververtical" == i && (i = "slideoverup", 1 == n && (i = "slideoverdown")), "slideremovehorizontal" == i && (i = "slideremoveleft", 1 == n && (i = "slideremoveright")), "slideremovevertical" == i && (i = "slideremoveup", 1 == n && (i = "slideremovedown")), "parallaxhorizontal" == i && (i = "parallaxtoleft", 1 == n && (i = "parallaxtoright")), "parallaxvertical" == i && (i = "parallaxtotop", 1 == n && (i = "parallaxtobottom")), "random" == i && (i = Math.round(Math.random() * y.length - 1), i > y.length - 1 && (i = y.length - 1)), "random-static" == i && (i = Math.round(Math.random() * f.length - 1), i > f.length - 1 && (i = f.length - 1), i = f[i]), "random-premium" == i && (i = Math.round(Math.random() * g.length - 1), i > g.length - 1 && (i = g.length - 1), i = g[i]);
            var b = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == e.isJoomla && void 0 != window.MooTools && -1 != b.indexOf(i)) {
                var x = Math.round(Math.random() * (g.length - 2)) + 1;
                x > g.length - 1 && (x = g.length - 1), 0 == x && (x = 1), i = g[x]
            }
            r(), m > 26 && (m = 26), 0 > m && (m = 0);
            var T = new Object;
            return T.nexttrans = m, T.STA = y[_], T.specials = v, T
        },
        a = function(t, e) {
            return void 0 == e || jQuery.isNumeric(t) ? t : void 0 == t ? t : t.split(",")[e]
        },
        n = function(t, n, r, o, s, l, d, h, u) {
            var p = l.index(),
                c = s.index(),
                f = p > c ? 1 : 0;
            "arrow" == o.sc_indicator && (0 == p && c == o.slideamount - 1 && (f = 1), p == o.slideamount - 1 && 0 == c && (f = 0));
            var g = i(r, o, n, d, f),
                m = g.STA,
                v = g.specials,
                t = g.nexttrans;
            "on" == d.data("kenburns") && (t = 11);
            var _ = s.data("nexttransid") || 0,
                w = a(s.data("masterspeed"), _);
            w = "default" === w ? m[11] : "random" === w ? Math.round(1e3 * Math.random() + 300) : void 0 != w ? parseInt(w, 0) : m[11], w = w > o.delay ? o.delay : w, w += m[4], o.slots = a(s.data("slotamount"), _), o.slots = void 0 == o.slots || "default" == o.slots ? m[12] : "random" == o.slots ? Math.round(12 * Math.random() + 4) : m[12], o.slots = o.slots < 1 ? "boxslide" == n ? Math.round(6 * Math.random() + 3) : "flyin" == n ? Math.round(4 * Math.random() + 1) : o.slots : o.slots, o.slots = (4 == t || 5 == t || 6 == t) && o.slots < 3 ? 3 : o.slots, o.slots = 0 != m[3] ? Math.min(o.slots, m[3]) : o.slots, o.slots = 9 == t ? o.width / 20 : 10 == t ? o.height / 20 : o.slots, o.rotate = a(s.data("rotate"), _), o.rotate = void 0 == o.rotate || "default" == o.rotate ? 0 : 999 == o.rotate || "random" == o.rotate ? Math.round(360 * Math.random()) : o.rotate, o.rotate = !jQuery.support.transition || o.ie || o.ie9 ? 0 : o.rotate, 11 != t && (null != m[7] && e(h, o, m[7], m[5]), null != m[6] && e(d, o, m[6], m[5])), u.add(punchgs.TweenLite.set(d, {
                autoAlpha: 1
            }), 0), u.add(punchgs.TweenLite.set(h, {
                autoAlpha: 1
            }), 0);
            var y = a(s.data("easein"), _),
                b = a(s.data("easeout"), _);
            if (y = "default" === y ? m[9] || punchgs.Power2.easeInOut : y || m[9] || punchgs.Power2.easeInOut, b = "default" === b ? m[10] || punchgs.Power2.easeInOut : b || m[10] || punchgs.Power2.easeInOut, 0 == t) {
                var x = Math.ceil(o.height / o.sloth),
                    T = 0;
                d.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    T += 1, T == x && (T = 0), u.add(punchgs.TweenLite.from(e, w / 600, {
                        opacity: 0,
                        top: 0 - o.sloth,
                        left: 0 - o.slotw,
                        rotation: o.rotate,
                        force3D: "auto",
                        ease: y
                    }), (15 * t + 30 * T) / 1500)
                })
            }
            if (1 == t) {
                var k, S = 0;
                d.find(".slotslide").each(function(t) {
                    var e = jQuery(this),
                        i = Math.random() * w + 300,
                        a = 500 * Math.random() + 200;
                    i + a > k && (k = a + a, S = t), u.add(punchgs.TweenLite.from(e, i / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: o.rotate,
                        ease: y
                    }), a / 1e3)
                })
            }
            if (2 == t) {
                var O = new punchgs.TimelineLite;
                h.find(".slotslide").each(function() {
                    var t = jQuery(this);
                    O.add(punchgs.TweenLite.to(t, w / 1e3, {
                        left: o.slotw,
                        ease: y,
                        force3D: "auto",
                        rotation: 0 - o.rotate
                    }), 0), u.add(O, 0)
                }), d.find(".slotslide").each(function() {
                    var t = jQuery(this);
                    O.add(punchgs.TweenLite.from(t, w / 1e3, {
                        left: 0 - o.slotw,
                        ease: y,
                        force3D: "auto",
                        rotation: o.rotate
                    }), 0), u.add(O, 0)
                })
            }
            if (3 == t) {
                var O = new punchgs.TimelineLite;
                h.find(".slotslide").each(function() {
                    var t = jQuery(this);
                    O.add(punchgs.TweenLite.to(t, w / 1e3, {
                        top: o.sloth,
                        ease: y,
                        rotation: o.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), u.add(O, 0)
                }), d.find(".slotslide").each(function() {
                    var t = jQuery(this);
                    O.add(punchgs.TweenLite.from(t, w / 1e3, {
                        top: 0 - o.sloth,
                        rotation: o.rotate,
                        ease: b,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), u.add(O, 0)
                })
            }
            if (4 == t || 5 == t) {
                setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var L = w / 1e3,
                    O = new punchgs.TimelineLite;
                h.find(".slotslide").each(function(e) {
                    var i = jQuery(this),
                        a = e * L / o.slots;
                    5 == t && (a = (o.slots - e - 1) * L / o.slots / 1.5), O.add(punchgs.TweenLite.to(i, 3 * L, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + o.height,
                        opacity: .5,
                        rotation: o.rotate,
                        ease: y,
                        delay: a
                    }), 0), u.add(O, 0)
                }), d.find(".slotslide").each(function(e) {
                    var i = jQuery(this),
                        a = e * L / o.slots;
                    5 == t && (a = (o.slots - e - 1) * L / o.slots / 1.5), O.add(punchgs.TweenLite.from(i, 3 * L, {
                        top: 0 - o.height,
                        opacity: .5,
                        rotation: o.rotate,
                        force3D: "auto",
                        ease: punchgs.eo,
                        delay: a
                    }), 0), u.add(O, 0)
                })
            }
            if (6 == t) {
                o.slots < 2 && (o.slots = 2), o.slots % 2 && (o.slots = o.slots + 1);
                var O = new punchgs.TimelineLite;
                setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), h.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    if (t + 1 < o.slots / 2) var i = 90 * (t + 2);
                    else var i = 90 * (2 + o.slots - t);
                    O.add(punchgs.TweenLite.to(e, (w + i) / 1e3, {
                        top: 0 + o.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: o.rotate,
                        ease: y
                    }), 0), u.add(O, 0)
                }), d.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    if (t + 1 < o.slots / 2) var i = 90 * (t + 2);
                    else var i = 90 * (2 + o.slots - t);
                    O.add(punchgs.TweenLite.from(e, (w + i) / 1e3, {
                        top: 0 - o.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: o.rotate,
                        ease: b
                    }), 0), u.add(O, 0)
                })
            }
            if (7 == t) {
                w = 2 * w, w > o.delay && (w = o.delay);
                var O = new punchgs.TimelineLite;
                setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), h.find(".slotslide").each(function() {
                    var t = jQuery(this).find("div");
                    O.add(punchgs.TweenLite.to(t, w / 1e3, {
                        left: 0 - o.slotw / 2 + "px",
                        top: 0 - o.height / 2 + "px",
                        width: 2 * o.slotw + "px",
                        height: 2 * o.height + "px",
                        opacity: 0,
                        rotation: o.rotate,
                        force3D: "auto",
                        ease: y
                    }), 0), u.add(O, 0)
                }), d.find(".slotslide").each(function(t) {
                    var e = jQuery(this).find("div");
                    O.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - t * o.slotw + "px",
                        ease: b,
                        force3D: "auto",

                        top: "0px",
                        width: o.width,
                        height: o.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), u.add(O, 0)
                })
            }
            if (8 == t) {
                w = 3 * w, w > o.delay && (w = o.delay);
                var O = new punchgs.TimelineLite;
                h.find(".slotslide").each(function() {
                    var t = jQuery(this).find("div");
                    O.add(punchgs.TweenLite.to(t, w / 1e3, {
                        left: 0 - o.width / 2 + "px",
                        top: 0 - o.sloth / 2 + "px",
                        width: 2 * o.width + "px",
                        height: 2 * o.sloth + "px",
                        force3D: "auto",
                        ease: y,
                        opacity: 0,
                        rotation: o.rotate
                    }), 0), u.add(O, 0)
                }), d.find(".slotslide").each(function(t) {
                    var e = jQuery(this).find("div");
                    O.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - t * o.sloth + "px",
                        width: d.find(".defaultimg").data("neww") + "px",
                        height: d.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        ease: b,
                        rotation: 0
                    }), 0), u.add(O, 0)
                })
            }
            if (9 == t || 10 == t) {
                var P = 0;
                d.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    P++, u.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: y,
                        delay: 5 * t / 1e3
                    }), 0)
                })
            }
            if (11 == t || 26 == t) {
                var P = 0;
                26 == t && (w = 0), u.add(punchgs.TweenLite.fromTo(d, w / 1e3, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: y
                }), 0), u.add(punchgs.TweenLite.to(h, w / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: y
                }), 0), u.add(punchgs.TweenLite.set(d.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), u.add(punchgs.TweenLite.set(h.find("defaultimg"), {
                    autoAlpha: 1
                }), 0)
            }
            if (12 == t || 13 == t || 14 == t || 15 == t) {
                w = w, w > o.delay && (w = o.delay), setTimeout(function() {
                    punchgs.TweenLite.set(h.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var C = o.width,
                    A = o.height,
                    M = d.find(".slotslide"),
                    z = 0,
                    R = 0,
                    I = 1,
                    j = 1,
                    D = 1,
                    W = w / 1e3,
                    F = W;
                ("fullwidth" == o.sliderLayout || "fullscreen" == o.sliderLayout) && (C = M.width(), A = M.height()), 12 == t ? z = C : 15 == t ? z = 0 - C : 13 == t ? R = A : 14 == t && (R = 0 - A), 1 == v && (I = 0), 2 == v && (I = 0), 3 == v && (W = w / 1300), (4 == v || 5 == v) && (j = .6), 6 == v && (j = 1.4), (5 == v || 6 == v) && (D = 1.4, I = 0, C = 0, A = 0, z = 0, R = 0), 6 == v && (D = .6), 7 == v && (C = 0, A = 0);
                var E = d.find(".slotslide"),
                    H = h.find(".slotslide");
                if (u.add(punchgs.TweenLite.set(l, {
                        zIndex: 15
                    }), 0), u.add(punchgs.TweenLite.set(s, {
                        zIndex: 20
                    }), 0), 8 == v ? (u.add(punchgs.TweenLite.set(l, {
                        zIndex: 20
                    }), 0), u.add(punchgs.TweenLite.set(s, {
                        zIndex: 15
                    }), 0), u.add(punchgs.TweenLite.set(E, {
                        left: 0,
                        top: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        ease: y,
                        force3D: "auto"
                    }), 0)) : u.add(punchgs.TweenLite.from(E, W, {
                        left: z,
                        top: R,
                        scale: D,
                        opacity: I,
                        rotation: o.rotate,
                        ease: y,
                        force3D: "auto"
                    }), 0), (4 == v || 5 == v) && (C = 0, A = 0), 1 != v) switch (t) {
                    case 12:
                        u.add(punchgs.TweenLite.to(H, F, {
                            left: 0 - C + "px",
                            force3D: "auto",
                            scale: j,
                            opacity: I,
                            rotation: o.rotate,
                            ease: b
                        }), 0);
                        break;
                    case 15:
                        u.add(punchgs.TweenLite.to(H, F, {
                            left: C + "px",
                            force3D: "auto",
                            scale: j,
                            opacity: I,
                            rotation: o.rotate,
                            ease: b
                        }), 0);
                        break;
                    case 13:
                        u.add(punchgs.TweenLite.to(H, F, {
                            top: 0 - A + "px",
                            force3D: "auto",
                            scale: j,
                            opacity: I,
                            rotation: o.rotate,
                            ease: b
                        }), 0);
                        break;
                    case 14:
                        u.add(punchgs.TweenLite.to(H, F, {
                            top: A + "px",
                            force3D: "auto",
                            scale: j,
                            opacity: I,
                            rotation: o.rotate,
                            ease: b
                        }), 0)
                }
            }
            if (16 == t) {
                var O = new punchgs.TimelineLite;
                u.add(punchgs.TweenLite.set(l, {
                    position: "absolute",
                    "z-index": 20
                }), 0), u.add(punchgs.TweenLite.set(s, {
                    position: "absolute",
                    "z-index": 15
                }), 0), l.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), l.find(".tp-half-one").clone(!0).appendTo(l).addClass("tp-half-two"), l.find(".tp-half-two").removeClass("tp-half-one");
                var C = o.width,
                    A = o.height;
                "on" == o.autoHeight && (A = r.height()), l.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + C + "px;height:" + A + 'px;"></div>'), l.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + C + "px;height:" + A + 'px;"></div>'), l.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), l.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), u.add(punchgs.TweenLite.set(l.find(".tp-half-two"), {
                    width: C,
                    height: A,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: A / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), u.add(punchgs.TweenLite.set(l.find(".tp-half-one"), {
                    width: C,
                    height: A / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var N = (l.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    Q = Math.round(20 * Math.random() - 10),
                    X = Math.round(20 * Math.random() - 10),
                    B = .4 * Math.random() - .2,
                    Y = .4 * Math.random() - .2,
                    V = 1 * Math.random() + 1,
                    q = 1 * Math.random() + 1,
                    U = .3 * Math.random() + .3;
                u.add(punchgs.TweenLite.set(l.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), u.add(punchgs.TweenLite.fromTo(l.find(".tp-half-one"), w / 800, {
                    width: C,
                    height: A / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: V,
                    rotation: N,
                    y: 0 - A - A / 4,
                    autoAlpha: 0,
                    ease: y
                }), 0), u.add(punchgs.TweenLite.fromTo(l.find(".tp-half-two"), w / 800, {
                    width: C,
                    height: A,
                    overflow: "hidden",
                    position: "absolute",
                    top: A / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: q,
                    rotation: Q,
                    y: A + A / 4,
                    ease: y,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(l, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(s, {
                            position: "absolute",
                            "z-index": 20
                        }), l.find(".tp-half-one").length > 0 && (l.find(".tp-half-one .defaultimg").unwrap(), l.find(".tp-half-one .slotholder").unwrap()), l.find(".tp-half-two").remove()
                    }
                }), 0), O.add(punchgs.TweenLite.set(d.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != l.html() && u.add(punchgs.TweenLite.fromTo(s, (w - 200) / 1e3, {
                    scale: U,
                    x: o.width / 4 * B,
                    y: A / 4 * Y,
                    rotation: X,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: b
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), u.add(O, 0)
            }
            if (17 == t && d.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    u.add(punchgs.TweenLite.fromTo(e, w / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: y,
                        delay: .06 * t
                    }), 0)
                }), 18 == t && d.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    u.add(punchgs.TweenLite.fromTo(e, w / 500, {
                        autoAlpha: 0,
                        rotationY: 110,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: y,
                        delay: .06 * t
                    }), 0)
                }), 19 == t || 22 == t) {
                var O = new punchgs.TimelineLite;
                u.add(punchgs.TweenLite.set(l, {
                    zIndex: 20
                }), 0), u.add(punchgs.TweenLite.set(s, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var G = 90,
                    I = 1,
                    Z = "center center ";
                1 == f && (G = -90), 19 == t ? (Z = Z + "-" + o.height / 2, I = 0) : Z += o.height / 2, punchgs.TweenLite.set(r, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), d.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    O.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: o.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: Z,
                        rotationX: G
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: 50 * t / 1e3,
                        ease: y
                    }), 0), O.add(punchgs.TweenLite.to(e, .1, {
                        autoAlpha: 1,
                        delay: 50 * t / 1e3
                    }), 0), u.add(O)
                }), h.find(".slotslide").each(function(t) {
                    var e = jQuery(this),
                        i = -90;
                    1 == f && (i = 90), O.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: Z,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: o.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: i,
                        delay: 50 * t / 1e3,
                        force3D: "auto",
                        ease: b
                    }), 0), u.add(O)
                }), u.add(punchgs.TweenLite.set(l, {
                    zIndex: 18
                }), 0)
            }
            if (20 == t) {
                if (setTimeout(function() {
                        h.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), 1 == f) var $ = -o.width,
                    G = 80,
                    Z = "20% 70% -" + o.height / 2;
                else var $ = o.width,
                    G = -80,
                    Z = "80% 70% -" + o.height / 2;
                d.find(".slotslide").each(function(t) {
                    var e = jQuery(this),
                        i = 50 * t / 1e3;
                    u.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        left: $,
                        rotationX: 40,
                        z: -600,
                        opacity: I,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: Z,
                        transformStyle: "flat",
                        rotationY: G
                    }, {
                        left: 0,
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: i,
                        ease: y
                    }), 0)
                }), h.find(".slotslide").each(function(t) {
                    var e = jQuery(this),
                        i = 50 * t / 1e3;
                    if (i = t > 0 ? i + w / 9e3 : 0, 1 != f) var a = -o.width / 2,
                        n = 30,
                        r = "20% 70% -" + o.height / 2;
                    else var a = o.width / 2,
                        n = -30,
                        r = "80% 70% -" + o.height / 2;
                    b = punchgs.Power2.easeInOut, u.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: r,
                        transformStyle: "flat",
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 20,
                        top: 0,
                        z: -600,
                        left: a,
                        force3D: "auto",
                        rotationY: n,
                        delay: i,
                        ease: b
                    }), 0)
                })
            }
            if (21 == t || 25 == t) {
                setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var G = 90,
                    $ = -o.width,
                    K = -G;
                if (1 == f)
                    if (25 == t) {
                        var Z = "center top 0";
                        G = o.rotate
                    } else {
                        var Z = "left center 0";
                        K = o.rotate
                    }
                else if ($ = o.width, G = -90, 25 == t) {
                    var Z = "center bottom 0";
                    K = -G, G = o.rotate
                } else {
                    var Z = "right center 0";
                    K = o.rotate
                }
                d.find(".slotslide").each(function() {
                    var t = jQuery(this),
                        e = w / 1.5 / 3;
                    u.add(punchgs.TweenLite.fromTo(t, 2 * e / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: K,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: Z,
                        rotationY: G
                    }, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        scale: 1,
                        rotationY: 0,
                        force3D: "auto",
                        delay: e / 1e3,
                        ease: y
                    }), 0)
                }), 1 != f ? ($ = -o.width, G = 90, 25 == t ? (Z = "center top 0", K = -G, G = o.rotate) : (Z = "left center 0", K = o.rotate)) : ($ = o.width, G = -90, 25 == t ? (Z = "center bottom 0", K = -G, G = o.rotate) : (Z = "right center 0", K = o.rotate)), h.find(".slotslide").each(function() {
                    var t = jQuery(this);
                    u.add(punchgs.TweenLite.fromTo(t, w / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: Z,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: K,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: G,
                        ease: b
                    }), 0)
                })
            }
            if (23 == t || 24 == t) {
                setTimeout(function() {
                    h.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var G = -90,
                    I = 1,
                    J = 0;
                if (1 == f && (G = 90), 23 == t) {
                    var Z = "center center -" + o.width / 2;
                    I = 0
                } else var Z = "center center " + o.width / 2;
                punchgs.TweenLite.set(r, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), d.find(".slotslide").each(function(t) {
                    var e = jQuery(this);
                    u.add(punchgs.TweenLite.fromTo(e, w / 1e3, {
                        left: J,
                        rotationX: o.rotate,
                        force3D: "auto",
                        opacity: I,
                        top: 0,
                        scale: 1,
                        transformPerspective: 1200,
                        transformOrigin: Z,
                        rotationY: G
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * t / 500,
                        ease: y
                    }), 0)
                }), G = 90, 1 == f && (G = -90), h.find(".slotslide").each(function(e) {
                    var i = jQuery(this);
                    u.add(punchgs.TweenLite.fromTo(i, w / 1e3, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformStyle: "flat",
                        transformPerspective: 1200,
                        transformOrigin: Z,
                        rotationY: 0
                    }, {
                        left: J,
                        rotationX: o.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: G,
                        delay: 50 * e / 500,
                        ease: b
                    }), 0), 23 == t && u.add(punchgs.TweenLite.fromTo(i, w / 2e3, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        delay: 50 * e / 500 + w / 3e3,
                        ease: b
                    }), 0)
                })
            }
            return u
        }
}(jQuery);