(function () {
    var e, t = window.T;
    e = {name: "OpenJS", version: "3.0", debug: !1, noConflict: function () {
        return window.T = t, e
    }, copy: function (e, t, n, r) {
        for (var i in t)if (n || typeof e[i] == "undefined")e[i] = r ? r(t[i]) : t[i];
        return e
    }, create: function (e, t) {
        var n = this, r = e ? e.split(".") : [], i = r.length;
        for (var s = 0; s < i; s++) {
            var o = r[s], u = n[o];
            u || (u = t && s + 1 === i ? t : {}, n[o] = u), n = u
        }
        return n
    }, extend: function (t, n, r) {
        return e.copy(typeof t == "string" ? e.create.call(this, t) : t, n, r)
    }, uid: function (e) {
        var t;
        e = e || 6, t = Math.random().toString(16).substr(2);
        if (t.length > e)t = t.substr(0, e); else if (t.length < e)for (var n = 0, r = e - t.length; n < r; n++)t += Math.random().toString(16).substr(2, 1);
        return t
    }}, function () {
        var n, r, i, s, o, u, a, f, l, c = "boolean", h = "number", p = "string", d = /openjs\.js(.*)$/, v = /openjs\.proxy\.js(.*)$/, m, g = {}, y = {debug: {type: c, "default": e.debug}, loglevel: {type: h, "default": 0}, cookiedomain: {type: p, "default": ""}, cookiepath: {type: p, "default": "/"}, crossdomainmethod: {type: p, "default": "auto"}, autoboot: {type: c, "default": !0}}, b, w, E, S = document.getElementsByTagName("script"), x, T;
        b = function (t) {
            t = E(t).toLowerCase();
            switch (t) {
                case"no":
                case"off":
                case"false":
                    return!1
            }
            return!!t
        }, w = function (t, n) {
            return parseInt(E(t), n) || 0
        }, E = String.prototype.trim ? function (e) {
            return e ? String.prototype.trim.call(e) : ""
        } : function (e) {
            return e ? e.toString().replace(/^\s+/, "").replace(/\s+$/, "") : ""
        };
        for (x = 0, T = S.length; x < T && (u = S[x]); x++) {
            n = u.getAttribute("src", 4) || u.src;
            if (n) {
                m = n.match(d) || n.match(v);
                if (m) {
                    r = m[1], i = r.split("#").pop(), s = r.indexOf("?") === 0 ? r.slice(1, r.indexOf("#") == -1 ? o : r.indexOf("#")) : "";
                    break
                }
            }
        }
        if (i) {
            i = i.split("&");
            for (x = 0, T = i.length; x < T && (u = i[x]); x++) {
                u = u.split("="), a = u[0].toLowerCase(), f = u.length > 1 ? u[1] : o;
                if (y.hasOwnProperty(a)) {
                    l = y[a];
                    switch (l.type) {
                        case c:
                            f = b(f);
                            break;
                        case h:
                            f = w(f, 10);
                            break;
                        default:
                            f = E(f)
                    }
                    g[a] = f
                }
            }
        }
        for (var N in y)y.hasOwnProperty(N) && !g.hasOwnProperty(N) && (g[N] = y[N]["default"]);
        e.extend("envs", g)
    }(), e.debug = e.envs.debug, e.provide = e.create, window.QQWB = window.T = e
})(), QQWB.extend("", {bind: function (e, t) {
    e = e.toLowerCase();
    var n = QQWB, r = n.bigtable, i = r.get("eventhandler", e);
    return i ? QQWB.Array.inArray(i, t) || i.push(t) : r.put("eventhandler", e, [t]), n
}, once: function (e, t) {
    e = e.toLowerCase();
    var n = QQWB, r;
    return r = function () {
        var i = t.apply(QQWB, arguments);
        return n.unbind(e, r), r = null, i
    }, n.bind(e, r), n
}, unbind: function (e, t) {
    e = e.toLowerCase();
    var n = QQWB, r = n.bigtable, i = r.get("eventhandler", e), s, o;
    if (i)if (t)for (s = 0, o = i.length; s < o; s++)t === i[s] && (t = null, i.splice(s, 1)); else r.del("eventhandler", e);
    return!r.get("eventhandler", e)
}, trigger: function (e, t) {
    e = e.toLowerCase();
    var n = QQWB, r = n.Array, i = n.bigtable, s = i.get("eventhandler", e);
    t = r.fromArguments(arguments).slice(1);
    if (s)return r.forEach(s, function (e, r) {
        if (e)return e.apply(n, t);
        return
    });
    return
}}), QQWB.extend("Function", {isFunction: function (e) {
    return typeof e == "function"
}}), QQWB.extend("String", {_trimLeft: /^\s+/, _trimRight: /\s+$/, isString: function (e) {
    return typeof e == "string"
}, ltrim: function (e) {
    return e ? e.toString().replace(this._trimLeft, "") : ""
}, rtrim: function (e) {
    return e ? e.toString().replace(this._trimRight, "") : ""
}, trim: String.prototype.trim ? function (e) {
    return e ? String.prototype.trim.call(e) : ""
} : function (e) {
    return e ? e.toString().replace(this._trimLeft, "").replace(this._trimRight, "") : ""
}, startsWith: String.prototype.startsWith ? function (e, t) {
    return e ? String.prototype.startsWith.call(e, t) : !1
} : function (e, t) {
    return e ? e.toString().indexOf(t) === 0 : !1
}, endsWith: String.prototype.endsWith ? function (e, t) {
    return e ? String.prototype.endsWith.call(e, t) : !1
} : function (e, t) {
    return e ? e.toString().lastIndexOf(t) >= 0 && e.toString().lastIndexOf(t) + t.length == e.length : !1
}, replaceAll: function (e, t, n) {
    var r;
    e = e || "";
    do r = e, e = e.replace(t, n); while (r != e);
    return e
}, splitby: function (e, t) {
    var n = QQWB.String, r = "[****]";
    t = n.replaceAll(t, "\\" + e, r), t = t.split(e);
    for (var i = 0, s = t.length; i < s; i++)t[i] = n.replaceAll(t[i], r, "|");
    return t
}}), QQWB.extend("Array", {isArray: function (e) {
    return Object.prototype.toString.call(e) === "[object Array]"
}, inArray: function (e, t) {
    for (var n = 0, r = e.length; n < r; n++)if (t === e[n])return!0;
    return!1
}, fromString: function (e, t, n) {
    return QQWB.String.isString(e) ? (t = t || "", n ? e.split(t, n) : e.split(t)) : []
}, fromArguments: function (e, t) {
    return typeof e != "object" ? [] : t ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e)
}, toArray: function (e) {
    return typeof e == "string" ? e.split("") : typeof e == "object" ? Array.prototype.slice.call(e, 0) : this.toArray(e.toString())
}, each: function (e, t) {
    for (var n = 0, r = e.length; n < r; n++)if (!1 === t(n, e[n]))break
}, forEach: function (e, t, n) {
    var r = [];
    if (e) {
        var i = n || this;
        for (var s = 0, o = e.length, u; s < o; s++)u = t.call(i, e[s], s, e), u !== undefined && r.push(u)
    }
    return r
}, get: function (e, t) {
    var n = e.length;
    if (Math.abs(t) < n)return t >= 0 ? e[t] : e[n + t]
}}), function () {
    var e;
    e = function () {
        var e = [], t, n, r, i = {done: function () {
            if (!r) {
                var n = arguments, s, o;
                t && (o = t, t = 0);
                for (var u = 0, a = n.length; u < a; u++)s = n[u], QQWB.Array.isArray(s) ? i.done.apply(i, s) : QQWB.Function.isFunction(s) && e.push(s);
                o && i.resolveWith(o[0], o[1])
            }
            return this
        }, resolveWith: function (i, s) {
            if (!r && !t && !n) {
                s = s || [], n = 1;
                try {
                    while (e[0])e.shift().apply(i, s)
                } finally {
                    t = [i, s], n = 0
                }
            }
            return this
        }, resolve: function () {
            return i.resolveWith(this, arguments), this
        }, isResolved: function () {
            return!!n || !!t
        }, cancel: function () {
            return r = 1, e = [], this
        }};
        return i
    }, QQWB.extend("deferred", {deferred: function (t) {
        var n, r = e(), i = e();
        return QQWB.extend(r, {fail: i.done, then: function (e, t) {
            return r.done(e).fail(t), this
        }, always: function () {
            return r.done.apply(r, arguments).fail.apply(this, arguments)
        }, rejectWith: i.resolveWith, reject: i.resolve, isRejected: i.isResolved, promise: function (e) {
            var t = "done fail isResolved isRejected promise then always success error complete whatever".split(" ");
            if (e == null) {
                if (n)return n;
                n = e = {}
            }
            var i = t.length;
            while (i--)e[t[i]] = r[t[i]];
            return e
        }}), r.success = r.done, r.error = r.fail, r.complete = r.whatever = r.always, r.done(i.cancel).fail(r.cancel), delete r.cancel, t && t.call(r, r), r
    }, when: function (e) {
        function s(e) {
            return function (n) {
                t[e] = arguments.length > 1 ? QQWB.Array.fromArguments(arguments) : n, --r || i.resolveWith(i, QQWB.Array.fromArguments(t))
            }
        }

        var t = arguments, n = t.length, r = n, i = n <= 1 && e && QQWB.Function.isFunction(e.promise) ? e : QQWB.deferred.deferred();
        if (n > 1)for (var o = 0; o < n; o++)t[o] && QQWB.Function.isFunction(t[o].promise) ? t[o].promise().then(s(o), i.reject) : --r, r || i.resolveWith(i, t); else i !== e && i.resolveWith(i, n ? [e] : []);
        return i.promise()
    }}), QQWB.task = QQWB.when = QQWB.deferred.when
}(), function () {
    var e = {1: "\u53c2\u6570\u9519\u8bef", 2: "\u9891\u7387\u53d7\u9650", 3: "\u9274\u6743\u5931\u8d25", 4: "\u5185\u90e8\u9519\u8bef"}, t = {4: "\u8fc7\u591a\u810f\u8bdd", 5: "\u7981\u6b62\u8bbf\u95ee", 6: "\u8bb0\u5f55\u4e0d\u5b58\u5728", 8: "\u5185\u5bb9\u8fc7\u957f", 9: "\u5185\u5bb9\u5305\u542b\u5783\u573e\u4fe1\u606f", 10: "\u53d1\u8868\u592a\u5feb\uff0c\u9891\u7387\u9650\u5236", 11: "\u6e90\u6d88\u606f\u4e0d\u5b58\u5728", 12: "\u672a\u77e5\u9519\u8bef", 13: "\u91cd\u590d\u53d1\u8868"};
    QQWB.extend("weibo.util", {parseRetCode: function (e) {
        var t = e.match(/"ret":([^\}]+)/i) || e.match(/<ret>([^<]+)<\/ret>/i);
        return t ? parseInt(t[1], 10) : t
    }, parseErrorCode: function (e) {
        var t = e.match(/"errcode":([^,]+)/i) || e.match(/<errcode>([^<]+)<\/errcode>/);
        return t ? parseInt(t[1], 10) : t
    }, parseErrorMsg: function (e) {
        var t = e.match(/"msg":"([^"]+)"/) || e.match(/<msg>([^<]+)<\/msg>/);
        return t ? t[1] : t
    }, getErrorMessage: function (n) {
        var r = this, i = [], s = e[this.parseRetCode(n)], o = t[this.parseErrorCode(n)], u = this.parseErrorMsg(n);
        return s && i.push(s), o && i.push(o), u && i.push(u), i = i.join(","), i || "\u672a\u77e5\u9519\u8bef"
    }, compat: function (e) {
        return!QQWB.String.startsWith(e, "/") && (e = "/" + e), e.toLowerCase()
    }})
}(), QQWB.extend("Object", {create: function () {
    return Object.create ? Object.create : function (e, t) {
        var n = function () {
        };
        return n.prototype = e, new n
    }
}(), forEach: function (e, t, n, r) {
    for (var i in e)r ? t.call(n, e[i], i, e) : e.hasOwnProperty(i) && t.call(n, e[i], i, e)
}, isObject: function (e) {
    return Object.prototype.toString.call(e) == "[object Object]"
}, isEmptyObject: function (e) {
    var t;
    for (t in e)return!1;
    return!0
}}), QQWB.extend("XML", {isXML: function (e) {
}, toString: function (e) {
    return this.stringify(e)
}, stringify: function (e) {
    var t;
    return window.ActiveXObject ? t = e.xml : t = (new XMLSerializer).serializeToString(e), t
}, fromString: function (e) {
    var t;
    if (window.ActiveXObject)t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e); else {
        var n = new DOMParser;
        t = n.parseFromString(e, "text/xml")
    }
    return t
}}, !0), function () {
    function t(e, t) {
        var n = QQWB, r = n.String;
        return r.isString(e) || n.log.warn("bigtable inName is not a str"), r.isString(t) || n.log.warn("bigtable inKey is not a str"), ["bt", e, t].join("_")
    }

    var e = {};
    QQWB.extend("bigtable", {put: function (n, r, i) {
        var s = t(n, r);
        return e[s] = i, e[s]
    }, get: function (n, r, i) {
        var s = t(n, r), o = e[s], u;
        return i != u && o == u ? i : o
    }, del: function (n, r) {
        var i = t(n, r);
        try {
            delete e[i]
        } catch (s) {
            e[i] = null
        }
    }, has: function (n, r) {
        var i = t(n, r);
        return e.hasOwnProperty(i)
    }, _: function () {
        return e
    }}), QQWB.bigtable.set = QQWB.bigtable.put
}(), QQWB.extend("time", {now: function () {
    return this.dateNow().getTime()
}, secondsNow: function () {
    return Math.round(this.now() / 1e3)
}, dateNow: function () {
    return new Date
}, shortTime: function (e, t) {
    var n;
    return e instanceof Date || (t = e, e = this.dateNow()), [e.getFullYear(), "/", e.getMonth(), "/", e.getDate(), " ", (n = e.getHours()) && n < 10 ? "0" + n : n, ":", (n = e.getMinutes()) && n < 10 ? "0" + n : n, ":", (n = e.getSeconds()) && n < 10 ? "0" + n : n].join("")
}}), QQWB.extend("log", {CRITICAL: 50, ERROR: 40, WARNING: 30, INFO: 20, DEBUG: 10, NOTSET: 0, _level: 0, setLevel: function (e) {
    return this._level = e, this
}, debug: function (e) {
    return this.DEBUG >= this._level && this._out("DEBUG", e), this
}, info: function (e) {
    return this.INFO >= this._level && this._out("INFO", e), this
}, warning: function (e) {
    return this.WARNING >= this._level && this._out("WARNING", e), this
}, error: function (e) {
    return this.ERROR >= this._level && this._out("ERROR", e), this
}, critical: function (e) {
    return this.CRITICAL >= this._level && this._out("CRITICAL", e), this
}, _out: function (e, t) {
    var n = QQWB, r = n.bigtable, i;
    output = [window.name ? window.name : "", window.opener || window.name === r.get("oauthwindow", "name") ? "#" : "", window != window.parent ? "*" : "", n.name, ": ", "[" + e + "] ", n.time.shortTime() + " ", t].join(""), i = r.get("log", "latest"), i || (i = r.put("log", "latest", [])), i.length >= 200 && i.shift(), i.push(output), QQWB.debug && window.console && window.console.log(output)
}, last: function (e) {
    var t = QQWB.bigtable.get("log", "latest");
    return t && e && (t = t.slice(0, e)), t ? t.join("\n") : ""
}}), QQWB.log.warn = QQWB.log.warning, QQWB.log.setLevel(QQWB.envs.loglevel), QQWB.extend("queryString", {encode: function (e, t, n, r) {
    var i = /%20/g, s = t || "&", o = n || encodeURIComponent, u = [], a = [], f, l;
    for (f in e)if (e.hasOwnProperty(f)) {
        l = e[f];
        if (l !== null && typeof l != "undefined") {
            f = o(f).replace(i, "+"), l = o(l).replace(i, "+");
            if (!r)u.push(f + "=" + l); else for (var c = 0, h = r.length; c < h; c++)r[c] === f && (u[c] = f + "=" + l)
        }
    }
    for (var p = 0, d = u.length; p < d; p++)typeof u[p] != "undefined" && a.push(u[p]);
    return u = a, a = null, u.join(s)
}, decode: function (e, t, n) {
    var r = n || decodeURIComponent, i = t || "&", s = e.split(i), o = {}, u;
    for (var a = 0, f = s.length; a < f; a++)u = s[a].split("=", 2), u && u[0] && (o[r(u[0])] = r(u[1]));
    return o
}}), function () {
    var e = QQWB, t = e.bigtable, n = e.log, r = e.String, i = "://open.t.qq.com", s = "http" + i, o = document.location.protocol.replace(":", ""), u = "https" + i, a = o + i;
    t.put("innerauth", "layerid", "openjslayer" + QQWB.uid(5)), t.put("innerauth", "originaldomain", document.domain), t.put("innerauth", "rootdomain", "qq.com"), t.put("innerauth", "enabled", !1), t.put("innerauth", "eventproxyready", "InnerAuthProxyFrameReady"), t.put("innerauth", "eventproxysizechange", "InnerAuthProxySizeChange"), t.put("innerauth", "eventproxysubmit", "InnerAuthResult"), t.put("innerauth", "eventproxycancel", "InnerAuthRequestCancel"), t.put("uri", "html5proxy", [t.get("innerauth", "enabled") ? a : u, "/oauth2/openjs/proxy_v3.html"].join("")), t.put("uri", "api", [a, "/api"].join("")), t.put("uri", "exchangetoken", [u, "/cgi-bin/oauth2/access_token"].join("")), t.put("uri", "gettokenbypt", [a, "/cgi-bin/oauth2/get_oauth2token_pt"].join("")), t.put("uri", "apiforflash", [u, "/api"].join("")), t.put("uri", "auth", [u, "/cgi-bin/oauth2/authorize"].join("")), t.put("uri", "flashas3proxy", [u, "/oauth2/openjs/proxy_as3_v3.swf"].join("")), t.put("uri", "innerauth", [t.get("innerauth", "enabled") ? a : s, "/cgi-bin/oauth2/inner_flow_page?pagetype=2"].join("")), t.put("oauthwindow", "name", "authClientProxy_ee5a0f93"), t.put("oauthwindow", "width", "630"), t.put("oauthwindow", "height", "480"), t.put("cookie", "domain", QQWB.envs.cookiedomain), t.put("cookie", "path", QQWB.envs.cookiepath), t.put("cookie", "accesstokenname", "QQWBToken3"), t.put("cookie", "refreshtokenname", "QQWBRefreshToken3"), t.put("cookie", "refreshtokenexpires", 2592e3), t.put("cookie", "getAccesstokenName", function () {
        return[t.get("cookie", "accesstokenname"), t.get("base", "appkey")].join("_")
    }), t.put("cookie", "getRefreshtokenName", function () {
        return[t.get("cookie", "refreshtokenname"), t.get("base", "appkey")].join("_")
    }), t.put("cookie", "defaultEncoder", function (e) {
        return escape(e)
    }), t.put("cookie", "defaultDecoder", function (e) {
        return unescape(e)
    }), t.put("nativeevent", "userloggedin", "UserLoggedIn"), t.put("nativeevent", "userloginfailed", "UserLoginFailed"), t.put("nativeevent", "userloggedout", "UserLoggedOut"), t.put("nativeevent", "tokenready", "tokenReady"), t.put("nativeevent", "documentready", "documentReady"), t.put("nativeevent", "everythingready", "everythingReady"), t.put("nativeevent", "ready", "ready"), t.put("solution", "deferred", e.deferred.deferred()), t.put("solution", "jscallbackname", "onFlashReady_a1f5b4ce"), t.put("api", "count", 0), t.put("ping", "urlbase", "http://btrace.qq.com/collect"), t.put("ping", "paramorder", ["ftime", "sIp", "iQQ", "sBiz", "sOp", "iSta", "iTy", "iFlow"]), t.put("ping", "paramsep", ";"), t.put("io", "timeout", 15e3), t.put("openjs", "asynccallbackfunctionname", "onOpenjsLoad"), t.put("boot", "booting", !1), t.get("innerauth", "enabled") && (n.info("enter inner auth model, set domain to " + t.get("innerauth", "rootdomain")), document.domain = t.get("innerauth", "rootdomain")), QQWB.provide("init", function (e) {
        function b(e) {
            var t = /.*(?=\/.*$)/, n = /^\/[^\/]/, r = /^http/, i = /^\/\//, s = document.location, o = s.host, u = s.protocol.replace(":", "") + ":", a;
            return i.test(e) || r.test(e) ? a = "" : n.test(e) ? a = u + o + "/" : (a = document.location.href, a = a.match(t), a = (a ? a[0] : ".") + "/"), i.test(e) && (e = u + e), a + w(e)
        }

        function w(e, t) {
            e = e.replace(/\\/g, "/").replace(/\/\//g, "/").replace(/:\//, "://").replace(/(^|[^\.])(\.\/)/g, "$1");
            do t = e, e = e.replace(/([\w,\-]*[\/]{1,})([\.]{2,}\/)/g, ""); while (t !== e);
            return e
        }

        var t = QQWB, n = t.bigtable, r = t.ping, i = t.log, s = t.String, u = t._token, a = t.dom, f = "base", l = n.get("boot", "booting"), c = n.get("innerauth", "enabled"), h = location.href.match(/oauth2atoken=([^&]+)/i), p, d, v, m, g, y;
        l || (n.put("boot", "booting", !0), n.get("boot", "solution")());
        if (n.get(f, "inited") === !0) {
            i.warning("already initialized");
            return
        }
        e.callbackurl && (e.callbackurl = b(e.callbackurl)), i.debug("init signal has arrived"), e = t.extend({callbackurl: document.location.href.replace(location.hash, ""), pingback: !0, autoclose: !0, samewindow: !1, showappinfo: !0}, e, !0), n.put(f, "pingback", e.pingback), n.put(f, "autoclose", e.autoclose), n.put(f, "samewindow", e.samewindow);
        if (typeof e.appkey == "undefined") {
            i.critical("client id(appkey) is NOT optional");
            return
        }
        i.info("client id(appkey) is " + e.appkey), n.put("base", "appkey", e.appkey), h && (i.info("resolve token from url"), p = location.href.match(/name=([^&#]+)/i), d = location.href.match(/nick=([^&#]+)/i), u.resolveResponse(decodeURIComponent(h[1]) + (p ? "&name=" + p[1] : "") + (d ? "&nick=" + d[1] : ""), !1)), g = n.get("boot", "tokenready"), v = u.getAccessToken(), m = u.getRefreshToken(), y = document.cookie;
        if (c) {
            if (/uin=([^;]+)/.test(y) && /skey=([^;]+)/.test(y) || /luin=([^;]+)/.test(y) && /lskey=([^;]+)/.test(y))g.lock("start auto login"), n.get("solution", "deferred").complete(function () {
                var t = n.get("solution", "frame");
                t && t.contentWindow && t.contentWindow.getToken ? t.contentWindow.getToken(n.get("base", "appkey"), !e.showappinfo).success(function (e) {
                    e = e.replace(/expires_in=\d+/, "expires_in=").replace(/refresh_token=\w+/, "refresh_token="), u.resolveResponse(e, !1)
                }).error(function (e, t, n, r) {
                    i.error(["auto login failed,", e, ", ", t, ", ", s.trim(r)].join(""))
                }).complete(function () {
                    g.unlock("done auto login")
                }) : (i.error("retrieve inner auth token error, proxy frame not loaded"), g.unlock("failed to load innerauth proxy frame, auto login failed"))
            })
        } else i.info("client proxy uri is " + e.callbackurl), n.put("uri", "redirect", e.callbackurl), m && !v && (g.lock("exchange token"), i.info("exchanging refresh token to access token..."), u.exchangeForToken(function (e) {
            g.unlock("token exchanged")
        }));
        return g.unlock("init is called"), r && e.pingback && o.indexOf("https") !== 0 && r.pingInit(), function () {
            function s() {
                var o = u.getRefreshToken(), a;
                i && (t.debug("cancel the **OLD** maintain token schedule"), clearTimeout(i)), o ? (a = parseInt(n.get(r.get("cookie", "getAccesstokenName")()).split("|")[2], 10) - e.time.now() - 15e3, t.debug("scheduled to exchange token after " + a + "ms"), i = setTimeout(function () {
                    u.exchangeForToken(function () {
                        s()
                    })
                }, a)) : i && (t.debug("cancel the exchange token schedule"), clearTimeout(i))
            }

            var e = QQWB, t = e.log, n = e.cookie, r = e.bigtable, i;
            e.bind(r.get("nativeevent", "tokenready"), s), e.bind(r.get("nativeevent", "userloggedin"), s), e.bind(r.get("nativeevent", "userloginfailed"), s), e.bind(r.get("nativeevent", "userloggedout"), s)
        }(), n.put(f, "inited", !0), t
    })
}(), function () {
    function l(e) {
        e = e.toLowerCase();
        var t, n;
        return t = function () {
            var e, t = 3, n = document.createElement("div"), r = n.getElementsByTagName("i");
            while (n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", r[0]);
            return t > 4 ? t : e
        }(), t ? {browser: "msie", version: t} : (n = i.exec(e) || r.exec(e) || e.indexOf("compatible") < 0 && s.exec(e) || [], {browser: n[1] || "unknown", version: n[2] || "0"})
    }

    function c() {
        var e, t;
        for (e in f)f.hasOwnProperty(e) && (t = f[e](), t && (u[e] = t))
    }

    function h() {
        var e = navigator.appVersion, t = {}, n = "unknown";
        return e.indexOf("Win") != -1 && (n = "windows"), e.indexOf("Mac") != -1 && (n = "mac"), e.indexOf("X11") != -1 && (n = "unix"), e.indexOf("Linux") != -1 && (n = "linux"), t[n] = !0, t.name = n, t
    }

    function p() {
        return document.compatMode == "BackCompat" ? {quirks: !0} : {standard: !0}
    }

    function d() {
        return QQWB.bigtable.get("browser", "detectviewportsize")()
    }

    var e, t, n = navigator.userAgent, r = /(opera)(?:.*version)?[ \/]([\w.]+)/, i = /(webkit)[ \/]([\w.]+)/, s = /(mozilla)(?:.*? rv:([\w.]+))?/, o = /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, u = {}, a = ["Webkit", "Moz", "O", "ms", "khtml"], f = {cookie: function () {
        if (navigator.cookieEnabled)return!0;
        document.cookie = "cookietest=1";
        var e = document.cookie.indexOf("cookietest=") != -1;
        return document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
    }, flash: function () {
        var e, t, n, r, i;
        if (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object")e = navigator.plugins["Shockwave Flash"].description, t = typeof navigator.mimeTypes != "undefined" && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin, e && t && (e = e.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), r = [], r[0] = parseInt(e.replace(/^(.*)\..*$/, "$1"), 10), r[1] = parseInt(e.replace(/^.*\.(.*)\s.*$/, "$1"), 10), r[2] = /[a-zA-Z]/.test(e) ? parseInt(e.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof window.ActiveXObject != "undefined") {
            try {
                n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (s) {
            }
            n && (e = n.getVariable("$version"), e ? (e = e.split(" ")[1].split(","), r = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]) : r = [0, 0, 0])
        }
        if (r)return i = {version: r.join(".")}, r[0] >= 9 && (i.externalinterface = !0), i
    }, userdata: function () {
        return QQWB.browser.msie
    }, postmessage: function () {
        return!!window.postMessage && (QQWB.browser.msie && parseInt(QQWB.browser.version, 10) < 8 ? !1 : !0)
    }, canvas: function () {
        var e = document.createElement("canvas");
        return!!e.getContext && !!e.getContext("2d")
    }, webgl: function () {
        return!!window.WebGLRenderingContext
    }, geolocation: function () {
        return!!navigator.geolocation
    }, websqldatabase: function () {
        return!!window.openDatabase
    }, indexeddb: function () {
        for (var e = 0, t = a.length; e < t; e++)if (window[a[e].toLowerCase() + "IndexedDB"])return!0;
        return!!window.indexedDB
    }, websocket: function () {
        for (var e = 0, t = a.length; e < t; e++)if (window[a[e].toLowerCase() + "WebSocket"])return!0;
        return!!window.WebSocket
    }, localstorage: function () {
        return!!window.localStorage && !!localStorage.getItem
    }, sessionstorage: function () {
        return!!window.sessionStorage && !!sessionStorage.getItem
    }, webworker: function () {
        return!!window.Worker
    }, applicationcache: function () {
        return!!window.applicationCache
    }};
    QQWB.bigtable.put("browser", "detectviewportsize", function () {
        var e = window, t = "inner", n = document.compatMode;
        return"innerWidth"in e || (t = "client", e = n == "BackCompat" ? document.body : document.documentElement), e ? {width: e[t + "Width"], height: e[t + "Height"]} : {width: 0, height: 0}
    }), e = l(n), window.addEventListener ? window.addEventListener("resize", function () {
        QQWB.extend("browser.viewport", d(), !0)
    }, !1) : window.attachEvent && window.attachEvent("onresize", function () {
        QQWB.extend("browser.viewport", d(), !0)
    }), QQWB.extend("browser", {version: e.version}), QQWB.browser[e.browser] = !0, QQWB.browser.engine = e.browser, c(), QQWB.extend("browser.feature", u), t = o.exec(navigator.userAgent || navigator.vendor || window.opera || ""), t ? (QQWB.extend("browser.platform", {name: t[0], mobile: !0}), QQWB.browser.platform[t[0]] = !0) : QQWB.extend("browser.platform", {name: "desktop", desktop: !0}), QQWB.extend("browser.os", h()), QQWB.extend("browser.rendererMode", p()), QQWB.extend("browser.viewport", d())
}(), function () {
    var e = QQWB, t = e.bigtable, n = e.String, r = e.queryString, i = e.log, s = e.Object, o = e.time, u = t.get("io", "timeout"), a, f, l, c, h = 0, p, d, v, m, g;
    d = function () {
        return e.Object.create({ajax: e.ajax, jsonp: e.jsonp, script: e.script, loadStyle: e.loadStyle})
    }, v = function (e, t) {
        return t = t || "unknown", e.data && (s.isObject(e.data) ? e.data = r.encode(e.data) : n.isString(e.data) ? e.data = n.trim(e.data).replace(/^&+/, "") : i.warn("[" + t + "] ignored invalid params data " + e.data)), n.trim(e.type).toUpperCase() === "GET" && (e.url = m(e.url, e.data)), n.trim(e.type).toUpperCase() === "GET" && !e.cache && (e.url = m(e.url, "nocache=openjs" + QQWB.uid(5))), e
    }, m = function (e, t) {
        var n = e.lastIndexOf("?"), r;
        return t ? (n === -1 ? r = [e, "?", t] : n === e.length - 1 ? r = [e, t] : r = [e, "&", t], r.join("")) : e
    }, a = function (e) {
        var t;
        return{send: function (n) {
            var r = o.now(), s = document.head || document.getElementsByTagName("head")[0] || document.documentElement, a = setTimeout(function () {
                i.error("load script " + e.url + " timeout"), n(599, "timeout", o.now() - r), n = null
            }, u);
            t = document.createElement("script"), t.type = "text/javascript", t.async = !1, e.charset && (t.charset = e.charset), t.src = e.url, t.onload = t.onreadystatechange = function (e, i) {
                if (i || !t.readyState || /loaded|complete/.test(t.readyState)) {
                    var u;
                    clearTimeout(a), t.onload = t.onreadystatechange = null, s && t.parentNode, t = null, n && (u = o.now() - r, i ? n(-1, "aborted", u) : n(200, "success", u), n = null)
                }
            }, t.onerror = function () {
                clearTimeout(a), n && n(500, "server error", o.now() - r), n = null
            }, s.insertBefore(t, s.firstChild)
        }, abort: function () {
            t && t.onload(0, 1)
        }}
    }, f = function (e) {
        var t;
        return{send: function (n) {
            function c() {
                function i(e, t) {
                    return e.lastIndexOf(t.replace("../", "").replace("./", "")) !== -1
                }

                QQWB.Array.each(document.styleSheets, function (u, c) {
                    var h = c.href;
                    if (h && i(h, e.url)) {
                        var p;
                        return clearTimeout(a), f = null, s && t.parentNode, n && (p = o.now() - r, n(200, "success", p), n = null), l = !0, t = null, !1
                    }
                });
                if (l)return;
                f = setTimeout(c, 50)
            }

            var r = o.now(), s = document.head || document.getElementsByTagName("head")[0] || document.documentElement, a = setTimeout(function () {
                i.error("load style " + e.url + " timeout"), n(599, "timeout", o.now() - r), n = null, f && clearTimeout(f)
            }, u), f, l;
            t = document.createElement("link"), t.rel = "stylesheet", t.type = "text/css", e.charset && (t.charset = e.charset), t.href = e.url, QQWB.browser.msie || c(), t.onreadystatechange = function (e, i) {
                if (i || /loaded|complete/.test(t.readyState)) {
                    var u;
                    clearTimeout(a), f && clearTimeout(f), t.onreadystatechange = null, s && t.parentNode, t = null, n && (u = o.now() - r, i ? n(-1, "aborted", u) : n(200, "success", u), n = null)
                }
            }, s.insertBefore(t, s.firstChild)
        }, abort: function () {
            t && t.onreadystatechange(0, 1)
        }}
    }, l = function (t) {
        var n;
        return{send: function (r) {
            var s = o.now(), a = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP"), f = setTimeout(function () {
                i.error("ajax timeout, url " + t.url), r(599, "timeout", o.now() - s), r = null
            }, u);
            t.async || (t.async = "async"), t.username ? a.open(t.type, t.url, t.async, t.username, t.password) : a.open(t.type, t.url, t.async);
            try {
                t.type.toUpperCase() === "POST" && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("X-Requested-From", "openjs" + e.version)
            } catch (l) {
                i.warning("set header error " + l)
            }
            a.send(t.data || null), n = function (u, l) {
                var c, h, p, d, v, m;
                if (n && (l || a.readyState === 4)) {
                    n = null;
                    if (l)a.readyState !== 4 ? (clearTimeout(f), a.abort(), r && r(-1, "aborted", o.now() - s), r = null) : i.debug("abort ajax failed, already finish"); else {
                        clearTimeout(f), c = a.status, p = a.getAllResponseHeaders() || "", d = {}, m = a.responseXML, m && m.documentElement && (d.xml = m), d.text = a.responseText;
                        try {
                            h = a.statusText
                        } catch (g) {
                            h = ""
                        }
                        c === 1223 && (c = 204);
                        try {
                            t.dataType.toLowerCase() === "json" ? v = e.JSON.fromString(d.text) : t.dataType.toLowerCase() === "xml" ? v = d.xml || e.XML.fromString(d.text) : v = d.text
                        } catch (y) {
                            clearTimeout(f), i.error("caught exception " + [y.type, y.message].join(" ") + " in ioajax"), r(-2, "exception " + y, o.now() - s);
                            return
                        }
                    }
                    r(c, h, o.now() - s, v, d.text, p, t.dataType), r = null
                }
            }, !t.async || a.readyState === 4 ? n() : a.onreadystatechange = n
        }, abort: function () {
            n && n(0, 1)
        }}
    }, c = function (e) {
        var n;
        return{send: function (r) {
            var s = o.now(), a = t.get("solution", "flashmovie"), f = "as3callbacktkt" + ++h, l = setTimeout(function () {
                i.error("flash as3 timeout, url " + e.url), r(599, "timeout", o.now() - s), r = null
            }, u);
            n = function (t, u) {
                var a, f, c, h, p;
                if (n) {
                    n = null, clearTimeout(l);
                    if (u)r && r(-1, "aborted", o.now() - s), r = null; else {
                        a = this.httpStatus, f = this.httpStatus === 200 ? "ok" : "", c = "", h = {}, h.text = this.httpResponseText;
                        try {
                            e.dataType.toLowerCase() === "json" ? p = QQWB.JSON.fromString(h.text) : e.dataType.toLowerCase() === "xml" ? p = QQWB.XML.fromString(h.text) : p = h.text
                        } catch (d) {
                            clearTimeout(l), i.error("caught exception " + [d.type, d.message].join(" ") + " in ioas3"), r(-2, "exception " + d, o.now() - s);
                            return
                        }
                    }
                    r(a, f, o.now() - s, p, h.text, c, e.dataType), r = null
                }
            }, t.put("io", f, n), a && a.httpRequest ? a.httpRequest(e.url, e.data, e.type, f) : i.critical("flash transportation object error")
        }, abort: function () {
            n && n(0, 1)
        }}
    }, window.onFlashRequestComplete_8df046 = function (e) {
        var n, r;
        if (!e.ticket) {
            i.error("ticket doesn't exists in response");
            return
        }
        n = t.get("io", e.ticket), r = e.srcEvent, n.readyState || (n.readyState = 0), /httpStatus/i.test(r.type) ? (n.httpStatus = r.status, n.readyState++) : /error/i.test(r.type) ? (n.httpError = r.type, n.readyState++) : /complete/i.test(r.type) && (n.httpResponseText = r.target.data, n.readyState++), n.readyState === 2 && (n.call(n), t.del("io", e.ticket))
    }, p = function (e) {
        return function (t, n, r, i, s, o, u) {
            var a, f;
            t !== 200 ? (t = 2e6 + Math.abs(t ? t : 0), e.reject(t, n, r, "")) : typeof (a = QQWB.weibo.util.parseRetCode(s)) == "number" && 0 !== a ? (f = QQWB.weibo.util.parseErrorCode(s), t = 1e6 + a * 1e3 + 500 + (f ? f : 0), e.reject(t, QQWB.weibo.util.getErrorMessage(s), r, s)) : e.resolve(t, n, r, i, o, u)
        }
    }, g = function (e) {
        return function (t, n, r, i, s) {
            t !== 200 ? e.reject(t, n, r, s) : e.resolve(i, r, s)
        }
    }, QQWB.extend("io", {flashAjax: function (e) {
        var t = QQWB.deferred.deferred(), n = {type: "get", dataType: "json"};
        return QQWB.extend(n, e, !0), c(n).send(p(t)), t.promise()
    }, ajaxWith: function (e, t, n) {
        var r = QQWB, i = r.String, s = QQWB.deferred.deferred(), o = {type: "get", dataType: "json", cache: !1};
        return QQWB.extend(o, e, !0), o.url ? (o.type = i.trim(o.type), o = v(o, "script"), o.dataType = i.trim(o.dataType), o.type.toUpperCase() === "GET" && o.data && (o.url = m(o.url, o.data), o.cache || (o.url = m(o.url, "nocache=openjs" + QQWB.uid(5)))), l(o).send(t(s)), s.promise(n)) : (s.reject(-2, "invalid url", 0), s.promise(n))
    }, apiAjax: function (e) {
        return QQWB.io.ajaxWith(e, p)
    }, ajax: function (e) {
        return QQWB.io.ajaxWith(e, g, d())
    }, script: function (e) {
        var t = QQWB, n = d(), r = t.deferred.deferred(), i = {charset: "utf-8", cache: !0, type: "get"};
        return QQWB.extend(i, e, !0), i.url ? (i = v(i, "script"), a(i).send(function (e, t, n) {
            e !== 200 ? r.reject(e, t, n) : r.resolve(e, t, n)
        }), r.promise(n)) : (r.reject(-2, "invalid url", 0), r.promise(n))
    }, loadStyle: function (e) {
        var t = QQWB, n = d(), r = t.deferred.deferred(), i = {cache: !0, type: "get"};
        return QQWB.extend(i, e, !0), i.url ? (i = v(i, "loadStyle"), f(i).send(function (e, t, n) {
            e !== 200 ? r.reject(e, t, n) : r.resolve(e, t, n)
        }), r.promise(n)) : (r.reject(-2, "invalid url", 0), r.promise(n))
    }, jsonp: function (e) {
        var t = QQWB, n = t.String, r = d(), s = QQWB.deferred.deferred(), o = "jsonp_" + QQWB.uid(5), u = window.callbackName, f, l = {dataType: "json", charset: "utf-8", cache: !1, type: "get"};
        return QQWB.extend(l, e, !0), l.url ? (l = v(l, "jsonp"), l.url = m(l.url, "callback=" + o), window[o] = function (e) {
            var t = e;
            if (n.isString(e))try {
                l.dataType.toLowerCase() === "json" ? t = QQWB.JSON.fromString(e) : l.dataType.toLowerCase() === "xml" && (t = QQWB.XML.fromString(e))
            } catch (r) {
                i.error("caught exception " + [r.type, r.message].join(" ") + " in jsonp"), s.reject(-2, "exception " + r, f)
            }
            s.resolve(t, f), window[o] = u
        }, a(l).send(function (e, t, n) {
            e !== 200 && s.reject(e, t, n), f = n
        }), s.promise(r)) : (s.reject(-2, "invalid url", 0), s.promise(r))
    }}), QQWB.ajax = QQWB.io.ajax, QQWB.jsonp = QQWB.io.jsonp, QQWB.script = QQWB.io.script, QQWB.loadStyle = QQWB.io.loadStyle
}(), QQWB.provide("api", function (e, t, n, r, i) {
    var s = QQWB, o = s.Array, u = s.String, a = s.JSON, f = s.XML, l = s.bigtable, c = s.log, h = s.queryString, p = s.io, d = l.get("api", "count", 0), v = l.get("solution", "deferred"), m = l.get("solution", "name"), g = n, y = {json: !0, xml: !0}, b = s.deferred.deferred(), w = {api: QQWB.api}, E = QQWB.Object.create(w), S = b.promise(E), x, T, N, C, k;
    e = s.weibo.util.compat(e), t = t || {}, n = (n || "json").toLowerCase(), r = r || "GET", i = i || {}, x = i.appkey || i.clientid || l.get("base", "appkey"), T = i.accesstoken || i.token || s._token.getAccessToken(), i.openid ? N = i.openid : (N = s._token.getTokenUser() || "", N && (N = N.openid)), g in y || (g = "json"), t.oauth_consumer_key = x, t.access_token = T, t.oauth_version = "2.a", t.openid = N, t.format = g;
    if (!x)return c.error("appkey can not be empty"), b.reject(-1, "appkey cant not be empty", 0), S;
    if (e == "/t/add_pic")return c.error("/t/add_pic is not supported yet"), b.reject(-1, "\u6682\u4e0d\u652f\u6301\u6b64\u63a5\u53e3\uff0c\u8bf7\u4f7f\u7528 t/add_pic_url \u4ee3\u66ff", 0), S;
    T || c.warn("accesstoken is empty");
    if (!v.isResolved() && !v.isRejected())return c.warning("api call cached, waiting solution ready ..."), v.promise().done(function () {
        c.info("invoking cached api call " + e + "..."), s.api(e, t, n, r, i).success(function () {
            b.resolveWith(b, arguments)
        }).error(function () {
            b.rejectWith(b, arguments)
        })
    }).fail(function () {
        c.error("can't invoking cached api call " + e + "..."), b.rejectWith(b, arguments)
    }), S;
    if (!v.isResolved())return v.fail(function () {
        c.error(arguments[1]), b.rejectWith(b, arguments)
    }), S;
    l.put("api", "count", ++d), c.info("[" + d + "] sending weibo request...");
    switch (m) {
        case"innerauth":
            C = l.get("solution", "frame"), C && C.contentWindow && C.contentWindow.apiAjax ? C.contentWindow.apiAjax(e, t, n, r).complete(function () {
                arguments[0] !== 200 ? b.rejectWith(b, arguments) : b.resolve(arguments[3], arguments[2], arguments[4])
            }) : (c.error(-1, "proxy frame not found"), b.reject(-1, "proxy frame not found"));
            break;
        case"html5":
            C = l.get("solution", "frame"), C ? (k = l.get("api", "ondataback"), k || (k = l.put("api", "ondataback", function (e) {
                var t, n, r, i;
                if (l.get("uri", "html5proxy").indexOf(e.origin) !== 0) {
                    c.warn("ignore data from origin " + e.origin);
                    return
                }
                try {
                    t = a.fromString(e.data)
                } catch (s) {
                    c.warn("[T.api] invalid JSON:" + e.data);
                    return
                }
                n = t.id, i = t.data;
                if (!n || !i) {
                    c.warn("[T.api] invalid data, id and data must exists:" + t);
                    return
                }
                r = l.get("api", "resultdeferred" + n), r ? (i[0] !== 200 ? r.rejectWith(r, i) : (i[5] == "_xml_" && (i[3] = f.fromString(i[3])), r.resolve(i[3], i[2], i[4])), l.del("api", "resultdeferred" + n)) : c.error("[T.api] invalid api request id " + n)
            }), window.addEventListener ? window.addEventListener("message", k, !1) : window.attachEvent && window.attachEvent("onmessage", k)), l.put("api", "resultdeferred" + d, b), setTimeout(function () {
                C.contentWindow.postMessage(a.stringify({id: d, data: [e, t, n, r]}), l.get("uri", "html5proxy"))
            }, 0)) : (c.error(-1, "proxy frame not found"), b.reject(-1, "proxy frame not found"));
            break;
        case"as3":
        function L(e, t, n, r) {
            var i = {type: u.trim(r.toUpperCase()), url: l.get("uri", "apiforflash") + e, data: h.encode(t), dataType: u.trim(n.toLowerCase())};
            return i.type == "GET" && (i.url += i.data ? "?" + i.data : "", delete i.data), p.flashAjax(i)
        }

            L(e, t, n, r).complete(function () {
                arguments[0] !== 200 ? b.rejectWith(b, arguments) : b.resolve(arguments[3], arguments[2], arguments[4])
            });
            break;
        default:
            b.reject(-1, "invalid solutionName " + m)
    }
    return S.complete(function () {
        c.info("*[" + d + "] done")
    }), S
}), function () {
    var e = QQWB, t = e.Object, n = e.Array, r = {}, i;
    i = {add: function (e) {
        return this.tmpl.push(e), this
    }, wrapTag: function (e) {
        var t = arguments, n = [], r = [];
        for (var i = 0, s = arguments.length; i < s; i++)n.push(["<", t[i], ">"].join("")), r.push(["</", t[i], ">"].join(""));
        return n.length > 0 && this.tmpl.splice(0, 0, n.join("")), r.length > 0 && this.tmpl.push(r.join("")), this
    }, reset: function (e, t) {
        return!e && !t ? (this.tmpl = [], this.datas = {}) : (e && (this.tmpl = []), t && (this.datas =
        {})), this
    }, data: function (r, i) {
        var s, o, u = arguments;
        u.length > 3 && (r = n.fromArguments(u), i = r.splice(-1, 1), i = i.length > 0 ? i[0] : !1);
        if (t.isObject(r))e.extend(this.datas, r, i); else if (n.isArray(r))for (var a = 0, f = r.length; a < f; a += 2) {
            s = r[a], a + 1 < f && (o = r[a + 1]);
            if (i || !(s in this.datas))this.datas[s] = o
        } else s = u[0], o = u[1], i = u[2], s && (i || !(s in this.datas)) && (this.datas[s] = o);
        return this
    }, renderWith: function (t, n) {
        this.data.apply(this, arguments);
        try {
            return e.template.renderTemplate(this.tmpl.join(""), this.datas)
        } catch (r) {
            throw msg = ["render template ", this.name, " error, ", r].join(""), new Error(msg)
        }
        return""
    }, render: function () {
        return this.renderWith(this.datas)
    }, toString: function () {
        try {
            return this.render()
        } catch (e) {
            return""
        }
    }}, e.provide("template", function (e) {
        var n = t.create(i);
        return n.tmpl = [], n.datas = {}, n.name = e || "unknown", n
    }), e.extend("template", {renderTemplate: function (e, t) {
        function n(e, t) {
            var i = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : r[e] = r[e] || n(document.getElementById(e).innerHTML);
            return t ? i(t) : i
        }

        return n(e, t)
    }})
}();
var JSON;
JSON || (JSON = {}), function () {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap, u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
            case"string":
                return quote(a);
            case"number":
                return isFinite(a) ? String(a) : "null";
            case"boolean":
            case"null":
                return String(a);
            case"object":
                if (!a)return"null";
                gap += indent, u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1)u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1)typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else for (r in a)Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }

    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")for (r = 0; r < n; r += 1)indent += " "; else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number")return str("", {"": e});
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }

        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), QQWB.extend("JSON", {fromString: function (e) {
    if (!e || !QQWB.String.isString(e))return{};
    e = e.replace(/^\s+/, "").replace(/\s+$/, "");
    if (window.JSON && window.JSON.parse)e = window.JSON.parse(e); else {
        if (!/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))throw new SyntaxError("Invalid JSON: " + e);
        e = (new Function("return " + data))()
    }
    return e
}, stringify: function (e) {
    return e ? window.JSON.stringify(e) : ""
}, toString: function (e) {
    return QQWB.JSON.stringify(e)
}, parse: function (e) {
    return e ? window.JSON.parse(e) : {}
}}, !0), QQWB.browser.feature.cookie ? QQWB.extend("cookie", {set: function (e, t, n, r, i, s) {
    var o, u, a;
    s = s || QQWB.bigtable.get("cookie", "defaultEncoder");
    if (typeof n == "undefined" || n === null)n = -1;
    return o = i ? "; domain=" + i : "", u = r ? "; path=" + r : "", a = "", n === 0 ? a = "; expires=Thu, 01-Jan-1970 00:00:01 GMT" : n > 0 && (a = "; expires=" + (new Date((new Date).getTime() + n * 1e3)).toUTCString()), document.cookie = s(e) + "=" + escape(t) + a + o + u, QQWB
}, get: function (e, t, n) {
    t = t || QQWB.bigtable.get("cookie", "defaultDecoder"), e += "=";
    var r = (document.cookie || "").split(/\s*;\s*/);
    for (var i = 0, s = r.length; i < s; i++) {
        var o = r[i];
        if (o.indexOf(e) === 0)return t(o.substr(e.length))
    }
    return n
}, del: function (e, t, n) {
    return QQWB.cookie.set(e, "", 0, t, n), document.cookie.indexOf(e + "=") >= 0 && QQWB.log.warning("cookie may not be deleted as you expected"), QQWB
}}) : QQWB.log.warn("This browser doesn't support cookie or cookie isn't enabled," + navigator.userAgent), QQWB.extend("_token", {setAccessToken: function (e, t, n, r, i) {
    var s = QQWB, o = s.bigtable, u = s.cookie, a = s.time, f;
    return f = this.getTokenUser(), n || (n = null), u.set(o.get("cookie", "getAccesstokenName")(), [e, t, a.now() + 6048e5, r || f && f.name || "", i || f && f.nick || ""].join("|"), n, o.get("cookie", "path"), o.get("cookie", "domain")), s
}, getAccessToken: function () {
    var e = QQWB, t = e.bigtable, n = e.cookie, r;
    r = n.get(t.get("cookie", "getAccesstokenName")());
    if (r)return r.split("|", 1)[0]
}, getTokenUser: function () {
    var e = QQWB, t = e.bigtable, n = e.cookie, r;
    r = n.get(t.get("cookie", "getAccesstokenName")());
    if (r)return r = r.split("|", 5), {openid: r[1], name: r[3], nick: r[4]}
}, clearAccessToken: function () {
    var e = QQWB, t = e.cookie, n = e.bigtable, r = n.get("cookie", "getAccesstokenName")(), i = n.get("cookie", "path"), s = n.get("cookie", "domain");
    return t.del(r, i, s), t.del(r, "/", s), e
}, setRefreshToken: function (e) {
    var t = QQWB, n = t.bigtable, r = t.cookie;
    return r.set(n.get("cookie", "getRefreshtokenName")(), e, n.get("cookie", "refreshtokenexpires"), n.get("cookie", "path"), n.get("cookie", "domain")), t
}, getRefreshToken: function () {
    return QQWB.cookie.get(QQWB.bigtable.get("cookie", "getRefreshtokenName")())
}, clearRefreshToken: function () {
    var e = QQWB, t = e.cookie, n = e.bigtable, r = n.get("cookie", "getRefreshtokenName")(), i = n.get("cookie", "path"), s = n.get("cookie", "domain");
    return t.del(r, i, s), t.del(r, "/", s), e
}, exchangeForToken: function (e) {
    var t = QQWB, n = t.bigtable, r = t.queryString, i = t.log, s = t.io, o = t.String, u = t._token, a = u.getRefreshToken(), f = n.get("base", "appkey");
    return s.jsonp({url: n.get("uri", "exchangetoken"), dataType: "text", data: r.encode({grant_type: "refresh_token", client_id: f, refresh_token: a})}).success(function (e) {
        var n = e;
        o.isString(e) && (e = r.decode(e)), e.access_token ? (e.expires_in || i.info("[exchangetoken] token expires_in not retrieved"), !e.name && !e.wb_name && i.info("[exchangetoken] weibo username not retrieved, will not update username"), !e.nick && !e.wb_nick && i.info("[exchangetoken] weibo nick not retrieved, will not update nick"), u.setAccessToken(e.access_token, e.openid || "", e.expires_in ? parseInt(e.expires_in, 10) : 0, e.name || e.wb_name || "", e.nick || e.wb_nick || ""), e.refresh_token ? u.setRefreshToken(e.refresh_token) : i.warning("[exchangetoken] refresh token not retrieved"), t.loginStatus() || i.warn("[exchangetoken] thirdparty cookie needs to be enabled, please follow this instruction to set P3P header http://url.cn/0ZbFuL"), i.info("exchange token succeed")) : e.error ? i.error("exchange token error " + e.error) : i.error("[exchangetoken] unexpected result returned from server " + n + " while exchanging for new accesstoken")
    }).error(function (e, t) {
        e === 404 ? i.error("exchange token has failed, script not found") : i.error("exchange token has failed, " + t)
    }).complete(function (t, n, r) {
        e && e(t, n, r)
    }), t
}, resolveResponse: function (e, t) {
    var n = QQWB, r = n.bigtable, i = n.queryString, s = n.log, o = n.String, u = n._token, a, f = o.isString(e) ? i.decode(e) : e;
    return s.debug(["resolve response ", n.JSON.stringify(f)].join("")), f.access_token ? (f.expires_in || s.info("token expires_in not retrieved or disabled"), !f.name && !f.wb_name && s.info("weibo username not retrieved"), !f.nick && !f.wb_nick && s.info("weibo usernick not retrieved"), u.setAccessToken(f.access_token, f.openid || "", f.expires_in ? parseInt(f.expires_in, 10) : 0, f.name || f.wb_name || "", f.nick || f.wb_nick || ""), f.refresh_token ? u.setRefreshToken(f.refresh_token) : s.info("refresh token not retrieved or disabled"), t && (a = n.loginStatus(), a ? (s.info("user " + a.name || "unknown logged in"), n.trigger(r.get("nativeevent", "userloggedin"), a)) : s.warn("thirdparty cookie needs to be enabled, please follow this instruction to set P3P header http://url.cn/0ZbFuL"))) : f.error || f.errorMsg ? (s.error("login error occurred " + f.error), t && (f.error = f.error || f.errorMsg, f.message = f.error, n.trigger(r.get("nativeevent", "userloginfailed"), f))) : (s.error("unexpected result returned from server " + e), t && (f = {}, f.message = f.error = "server error", n.trigger(r.get("nativeevent", "userloginfailed"), f))), n
}}), function () {
    var e = QQWB, t = e.bigtable, n = e.browser, r = e.log, i = e._token, s = e.cookie, o, u;
    u = {show: function () {
        QQWB.documentReady(function () {
            var e = t.get("innerauth", "layerid"), r = t.get("base", "appkey"), i = t.get("uri", "innerauth"), s = 'frameBorder="0" width="100%" height="100%" scrolling="no"', o = document.getElementById(e), u, a, f, l;
            o || (o = QQWB.dom.createElement("div", {id: t.get("innerauth", "layerid"), style: ["position:absolute;padding:5px;overflow:hidden;z-index:999;visibility:hidden;", n.msie && n.version < 9 ? 'filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr="#4c000000", EndColorStr="#4c000000");' : "background-color:rgba(0,0,0,0.3);"].join(""), innerhtml: ['<iframe src="', i, "&appkey=", r, '" ', s, "></iframe>"].join("")}), f = function () {
                QQWB.trigger(t.get("innerauth", "eventproxysizechange"), u, a)
            }, l = function () {
                o.parentNode.removeChild(o), QQWB.unbind(t.get("innerauth", "eventproxysizechange"), !1), window.removeEventListener ? window.removeEventListener("resize", f) : window.detachEvent && window.detachEvent("onresize", f)
            }, QQWB.once(t.get("innerauth", "eventproxysubmit"), function (e) {
                e = e.replace(/expires_in=\d+/, "expires_in=").replace(/refresh_token=\w+/, "refresh_token="), QQWB._token.resolveResponse(e, !0), l()
            }), QQWB.once(t.get("innerauth", "eventproxycancel"), function () {
                QQWB._token.resolveResponse("error=user_refused", !0), l()
            }), QQWB.bind(t.get("innerauth", "eventproxysizechange"), function (e, t) {
                var r = document.documentElement.scrollTop || document.body.scrollTop;
                u = e, a = t, o.style.width = e + "px", o.style.height = t + "px", o.style.left = Math.max(0, n.viewport.width - e) / 2 + "px", o.style.top = r + Math.max(0, n.viewport.height - t) / 2 + "px", o.style.visibility = "visible"
            }), window.addEventListener ? window.addEventListener("resize", f) : window.attachEvent && window.attachEvent("onresize", f), document.body.appendChild(o))
        })
    }}, o = function () {
        var i = !1, s = null;
        return{show: function () {
            var o = t.get("oauthwindow", "width"), u = t.get("oauthwindow", "height"), a = t.get("oauthwindow", "name"), f = t.get("uri", "auth"), l = "toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=yes,status=no", c = t.get("base", "appkey"), h = t.get("base", "autoclose"), p = t.get("base", "samewindow"), d, v, m, g;
            if (!i) {
                d = (window.screenX || window.screenLeft) + Math.max(0, (window.outerWidth || document.documentElement.clientWidth) - o) / 2, v = (window.screenY || window.screenTop) + Math.max(0, (window.outerHeight || document.documentElement.clientHeight) - u) / 2, m = e.queryString.encode({response_type: "token", client_id: c, redirect_uri: t.get("uri", "redirect"), scope: "all", wap: n.platform.mobile ? 2 : null}), g = ["width=" + o, "height=" + u, "left=" + d, "top=" + v].join(",");
                if (p) {
                    window.name = a, window.location.href = f + "?" + m;
                    return
                }
                s = window.open(f + "?" + m, a, [g, l].join(",")), i = !0, function () {
                    var e = QQWB, t = e._token, n, o, u, a = e.queryString;
                    if (!s) {
                        u = "browser blocked popup authorize window", r.error(u), t.resolveResponse("error=" + u, !0);
                        return
                    }
                    if (s.closed) {
                        t.resolveResponse("error=access_denied", !0), i = !1, s = null;
                        return
                    }
                    try {
                        n = s.location && s.location.href
                    } catch (f) {
                        n = null
                    }
                    if (n && n !== "about:blank") {
                        o = n.lastIndexOf("#"), n = o === -1 ? "" : n.slice(o + 1);
                        if (n) {
                            n = a.decode(n), t.resolveResponse(n, !0), i = !1, h && s.close(), s = null;
                            return
                        }
                    }
                    setTimeout(arguments.callee, 0)
                }()
            } else s && s.focus()
        }}
    }(), QQWB.extend("auth", {login: function (n, i) {
        var s = t.get("base", "inited"), a = t.get("innerauth", "enabled"), f = e.auth.loginStatus(), l, c;
        s || (l = e.name + " not initialized, call T.init() to initialize", r.critical(l));
        if (l && i)return i({message: l}), e;
        if (f && n)return n(f), e;
        if (n || i)c = function (s) {
            s.access_token && n ? n(s) : s.error && i ? i(s) : r.error("wired result of T.login " + QQWB.JSON.stringify(s)), e.unbind(t.get("nativeevent", "userloggedin"), c), e.unbind(t.get("nativeevent", "userloginfailed"), c), c = null
        }, e.bind(t.get("nativeevent", "userloggedin"), c), e.bind(t.get("nativeevent", "userloginfailed"), c);
        return a ? u.show() : o.show(), e
    }, logout: function (n) {
        var o = e.loginStatus(), u = t.get("innerauth", "enabled"), a = t.get("innerauth", "rootdomain");
        return r.info("logging out user"), o ? (i.clearAccessToken(), i.clearRefreshToken(), r.info("user " + (o.name || "unknown") + " logged out")) : r.warning("oops, user not logged in"), u && (s.del("uin", "/", a), s.del("skey", "/", a), s.del("luin", "/", a), s.del("lskey", "/", a)), n && n(), e.trigger(t.get("nativeevent", "userloggedout")), e
    }, loginStatus: function (e) {
        var t = i.getAccessToken(), n = i.getTokenUser(), r;
        return t && (r = {access_token: t, openid: n.openid, name: n.name, nick: n.nick}), e && e(r), r
    }}), QQWB.login = QQWB.auth.login, QQWB.logout = QQWB.auth.logout, QQWB.loginStatus = QQWB.auth.loginStatus
}(), function () {
    function m(e, t, n, r, i, s) {
        for (var o = 0, u = r.length; o < u; o++) {
            var a = r[o];
            if (a) {
                var f = !1;
                a = a[e];
                while (a) {
                    if (a.sizcache === n) {
                        f = r[a.sizset];
                        break
                    }
                    a.nodeType === 1 && !s && (a.sizcache = n, a.sizset = o);
                    if (a.nodeName.toLowerCase() === t) {
                        f = a;
                        break
                    }
                    a = a[e]
                }
                r[o] = f
            }
        }
    }

    function g(e, t, n, r, i, s) {
        for (var o = 0, a = r.length; o < a; o++) {
            var f = r[o];
            if (f) {
                var l = !1;
                f = f[e];
                while (f) {
                    if (f.sizcache === n) {
                        l = r[f.sizset];
                        break
                    }
                    if (f.nodeType === 1) {
                        s || (f.sizcache = n, f.sizset = o);
                        if (typeof t != "string") {
                            if (f === t) {
                                l = !0;
                                break
                            }
                        } else if (u.filter(t, [f]).length > 0) {
                            l = f;
                            break
                        }
                    }
                    f = f[e]
                }
                r[o] = l
            }
        }
    }

    var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, t = 0, n = Object.prototype.toString, r = !1, i = !0, s = /\\/g, o = /\W/;
    [0, 0].sort(function () {
        return i = !1, 0
    });
    var u = function (t, r, i, s) {
        i = i || [], r = r || document;
        var o = r;
        if (r.nodeType !== 1 && r.nodeType !== 9)return[];
        if (!t || typeof t != "string")return i;
        var l, c, p, d, v, m, g, b, w = !0, E = u.isXML(r), S = [], x = t;
        do {
            e.exec(""), l = e.exec(x);
            if (l) {
                x = l[3], S.push(l[1]);
                if (l[2]) {
                    d = l[3];
                    break
                }
            }
        } while (l);
        if (S.length > 1 && f.exec(t))if (S.length === 2 && a.relative[S[0]])c = y(S[0] + S[1], r); else {
            c = a.relative[S[0]] ? [r] : u(S.shift(), r);
            while (S.length)t = S.shift(), a.relative[t] && (t += S.shift()), c = y(t, c)
        } else {
            !s && S.length > 1 && r.nodeType === 9 && !E && a.match.ID.test(S[0]) && !a.match.ID.test(S[S.length - 1]) && (v = u.find(S.shift(), r, E), r = v.expr ? u.filter(v.expr, v.set)[0] : v.set[0]);
            if (r) {
                v = s ? {expr: S.pop(), set: h(s)} : u.find(S.pop(), S.length !== 1 || S[0] !== "~" && S[0] !== "+" || !r.parentNode ? r : r.parentNode, E), c = v.expr ? u.filter(v.expr, v.set) : v.set, S.length > 0 ? p = h(c) : w = !1;
                while (S.length)m = S.pop(), g = m, a.relative[m] ? g = S.pop() : m = "", g == null && (g = r), a.relative[m](p, g, E)
            } else p = S = []
        }
        p || (p = c), p || u.error(m || t);
        if (n.call(p) === "[object Array]")if (!w)i.push.apply(i, p); else if (r && r.nodeType === 1)for (b = 0; p[b] != null; b++)p[b] && (p[b] === !0 || p[b].nodeType === 1 && u.contains(r, p[b])) && i.push(c[b]); else for (b = 0; p[b] != null; b++)p[b] && p[b].nodeType === 1 && i.push(c[b]); else h(p, i);
        return d && (u(d, o, i, s), u.uniqueSort(i)), i
    };
    u.uniqueSort = function (e) {
        if (d) {
            r = i, e.sort(d);
            if (r)for (var t = 1; t < e.length; t++)e[t] === e[t - 1] && e.splice(t--, 1)
        }
        return e
    }, u.matches = function (e, t) {
        return u(e, null, null, t)
    }, u.matchesSelector = function (e, t) {
        return u(t, null, null, [e]).length > 0
    }, u.find = function (e, t, n) {
        var r;
        if (!e)return[];
        for (var i = 0, o = a.order.length; i < o; i++) {
            var u, f = a.order[i];
            if (u = a.leftMatch[f].exec(e)) {
                var l = u[1];
                u.splice(1, 1);
                if (l.substr(l.length - 1) !== "\\") {
                    u[1] = (u[1] || "").replace(s, ""), r = a.find[f](u, t, n);
                    if (r != null) {
                        e = e.replace(a.match[f], "");
                        break
                    }
                }
            }
        }
        return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {set: r, expr: e}
    }, u.filter = function (e, t, n, r) {
        var i, s, o = e, f = [], l = t, c = t && t[0] && u.isXML(t[0]);
        while (e && t.length) {
            for (var h in a.filter)if ((i = a.leftMatch[h].exec(e)) != null && i[2]) {
                var p, d, v = a.filter[h], m = i[1];
                s = !1, i.splice(1, 1);
                if (m.substr(m.length - 1) === "\\")continue;
                l === f && (f = []);
                if (a.preFilter[h]) {
                    i = a.preFilter[h](i, l, n, f, r, c);
                    if (!i)s = p = !0; else if (i === !0)continue
                }
                if (i)for (var g = 0; (d = l[g]) != null; g++)if (d) {
                    p = v(d, i, g, l);
                    var y = r ^ !!p;
                    n && p != null ? y ? s = !0 : l[g] = !1 : y && (f.push(d), s = !0)
                }
                if (p !== undefined) {
                    n || (l = f), e = e.replace(a.match[h], "");
                    if (!s)return[];
                    break
                }
            }
            if (e === o) {
                if (s != null)break;
                u.error(e)
            }
            o = e
        }
        return l
    }, u.error = function (e) {
        throw"Syntax error, unrecognized expression: " + e
    };
    var a = u.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (e) {
        return e.getAttribute("href")
    }, type: function (e) {
        return e.getAttribute("type")
    }}, relative: {"+": function (e, t) {
        var n = typeof t == "string", r = n && !o.test(t), i = n && !r;
        r && (t = t.toLowerCase());
        for (var s = 0, a = e.length, f; s < a; s++)if (f = e[s]) {
            while ((f = f.previousSibling) && f.nodeType !== 1);
            e[s] = i || f && f.nodeName.toLowerCase() === t ? f || !1 : f === t
        }
        i && u.filter(t, e, !0)
    }, ">": function (e, t) {
        var n, r = typeof t == "string", i = 0, s = e.length;
        if (r && !o.test(t)) {
            t = t.toLowerCase();
            for (; i < s; i++) {
                n = e[i];
                if (n) {
                    var a = n.parentNode;
                    e[i] = a.nodeName.toLowerCase() === t ? a : !1
                }
            }
        } else {
            for (; i < s; i++)n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
            r && u.filter(t, e, !0)
        }
    }, "": function (e, n, r) {
        var i, s = t++, u = g;
        typeof n == "string" && !o.test(n) && (n = n.toLowerCase(), i = n, u = m), u("parentNode", n, s, e, i, r)
    }, "~": function (e, n, r) {
        var i, s = t++, u = g;
        typeof n == "string" && !o.test(n) && (n = n.toLowerCase(), i = n, u = m), u("previousSibling", n, s, e, i, r)
    }}, find: {ID: function (e, t, n) {
        if (typeof t.getElementById != "undefined" && !n) {
            var r = t.getElementById(e[1]);
            return r && r.parentNode ? [r] : []
        }
    }, NAME: function (e, t) {
        if (typeof t.getElementsByName != "undefined") {
            var n = [], r = t.getElementsByName(e[1]);
            for (var i = 0, s = r.length; i < s; i++)r[i].getAttribute("name") === e[1] && n.push(r[i]);
            return n.length === 0 ? null : n
        }
    }, TAG: function (e, t) {
        if (typeof t.getElementsByTagName != "undefined")return t.getElementsByTagName(e[1])
    }}, preFilter: {CLASS: function (e, t, n, r, i, o) {
        e = " " + e[1].replace(s, "") + " ";
        if (o)return e;
        for (var u = 0, a; (a = t[u]) != null; u++)a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[u] = !1));
        return!1
    }, ID: function (e) {
        return e[1].replace(s, "")
    }, TAG: function (e, t) {
        return e[1].replace(s, "").toLowerCase()
    }, CHILD: function (e) {
        if (e[1] === "nth") {
            e[2] || u.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
            var n = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
            e[2] = n[1] + (n[2] || 1) - 0, e[3] = n[3] - 0
        } else e[2] && u.error(e[0]);
        return e[0] = t++, e
    }, ATTR: function (e, t, n, r, i, o) {
        var u = e[1] = e[1].replace(s, "");
        return!o && a.attrMap[u] && (e[1] = a.attrMap[u]), e[4] = (e[4] || e[5] || "").replace(s, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
    }, PSEUDO: function (t, n, r, i, s) {
        if (t[1] === "not") {
            if (!((e.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) {
                var o = u.filter(t[3], n, r, !0 ^ s);
                return r || i.push.apply(i, o), !1
            }
            t[3] = u(t[3], null, null, n)
        } else if (a.match.POS.test(t[0]) || a.match.CHILD.test(t[0]))return!0;
        return t
    }, POS: function (e) {
        return e.unshift(!0), e
    }}, filters: {enabled: function (e) {
        return e.disabled === !1 && e.type !== "hidden"
    }, disabled: function (e) {
        return e.disabled === !0
    }, checked: function (e) {
        return e.checked === !0
    }, selected: function (e) {
        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
    }, parent: function (e) {
        return!!e.firstChild
    }, empty: function (e) {
        return!e.firstChild
    }, has: function (e, t, n) {
        return!!u(n[3], e).length
    }, header: function (e) {
        return/h\d/i.test(e.nodeName)
    }, text: function (e) {
        var t = e.getAttribute("type"), n = e.type;
        return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
    }, radio: function (e) {
        return e.nodeName.toLowerCase() === "input" && "radio" === e.type
    }, checkbox: function (e) {
        return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
    }, file: function (e) {
        return e.nodeName.toLowerCase() === "input" && "file" === e.type
    }, password: function (e) {
        return e.nodeName.toLowerCase() === "input" && "password" === e.type
    }, submit: function (e) {
        var t = e.nodeName.toLowerCase();
        return(t === "input" || t === "button") && "submit" === e.type
    }, image: function (e) {
        return e.nodeName.toLowerCase() === "input" && "image" === e.type
    }, reset: function (e) {
        var t = e.nodeName.toLowerCase();
        return(t === "input" || t === "button") && "reset" === e.type
    }, button: function (e) {
        var t = e.nodeName.toLowerCase();
        return t === "input" && "button" === e.type || t === "button"
    }, input: function (e) {
        return/input|select|textarea|button/i.test(e.nodeName)
    }, focus: function (e) {
        return e === e.ownerDocument.activeElement
    }}, setFilters: {first: function (e, t) {
        return t === 0
    }, last: function (e, t, n, r) {
        return t === r.length - 1
    }, even: function (e, t) {
        return t % 2 === 0
    }, odd: function (e, t) {
        return t % 2 === 1
    }, lt: function (e, t, n) {
        return t < n[3] - 0
    }, gt: function (e, t, n) {
        return t > n[3] - 0
    }, nth: function (e, t, n) {
        return n[3] - 0 === t
    }, eq: function (e, t, n) {
        return n[3] - 0 === t
    }}, filter: {PSEUDO: function (e, t, n, r) {
        var i = t[1], s = a.filters[i];
        if (s)return s(e, n, t, r);
        if (i === "contains")return(e.textContent || e.innerText || u.getText([e]) || "").indexOf(t[3]) >= 0;
        if (i === "not") {
            var o = t[3];
            for (var f = 0, l = o.length; f < l; f++)if (o[f] === e)return!1;
            return!0
        }
        u.error(i)
    }, CHILD: function (e, t) {
        var n = t[1], r = e;
        switch (n) {
            case"only":
            case"first":
                while (r = r.previousSibling)if (r.nodeType === 1)return!1;
                if (n === "first")return!0;
                r = e;
            case"last":
                while (r = r.nextSibling)if (r.nodeType === 1)return!1;
                return!0;
            case"nth":
                var i = t[2], s = t[3];
                if (i === 1 && s === 0)return!0;
                var o = t[0], u = e.parentNode;
                if (u && (u.sizcache !== o || !e.nodeIndex)) {
                    var a = 0;
                    for (r = u.firstChild; r; r = r.nextSibling)r.nodeType === 1 && (r.nodeIndex = ++a);
                    u.sizcache = o
                }
                var f = e.nodeIndex - s;
                return i === 0 ? f === 0 : f % i === 0 && f / i >= 0
        }
    }, ID: function (e, t) {
        return e.nodeType === 1 && e.getAttribute("id") === t
    }, TAG: function (e, t) {
        return t === "*" && e.nodeType === 1 || e.nodeName.toLowerCase() === t
    }, CLASS: function (e, t) {
        return(" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
    }, ATTR: function (e, t) {
        var n = t[1], r = a.attrHandle[n] ? a.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n), i = r + "", s = t[2], o = t[4];
        return r == null ? s === "!=" : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
    }, POS: function (e, t, n, r) {
        var i = t[2], s = a.setFilters[i];
        if (s)return s(e, n, t, r)
    }}}, f = a.match.POS, l = function (e, t) {
        return"\\" + (t - 0 + 1)
    };
    for (var c in a.match)a.match[c] = new RegExp(a.match[c].source + /(?![^\[]*\])(?![^\(]*\))/.source), a.leftMatch[c] = new RegExp(/(^(?:.|\r|\n)*?)/.source + a.match[c].source.replace(/\\(\d+)/g, l));
    var h = function (e, t) {
        return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
    } catch (p) {
        h = function (e, t) {
            var r = 0, i = t || [];
            if (n.call(e) === "[object Array]")Array.prototype.push.apply(i, e); else if (typeof e.length == "number")for (var s = e.length; r < s; r++)i.push(e[r]); else for (; e[r]; r++)i.push(e[r]);
            return i
        }
    }
    var d, v;
    document.documentElement.compareDocumentPosition ? d = function (e, t) {
        return e === t ? (r = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
    } : (d = function (e, t) {
        if (e === t)return r = !0, 0;
        if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
        var n, i, s = [], o = [], u = e.parentNode, a = t.parentNode, f = u;
        if (u === a)return v(e, t);
        if (!u)return-1;
        if (!a)return 1;
        while (f)s.unshift(f), f = f.parentNode;
        f = a;
        while (f)o.unshift(f), f = f.parentNode;
        n = s.length, i = o.length;
        for (var l = 0; l < n && l < i; l++)if (s[l] !== o[l])return v(s[l], o[l]);
        return l === n ? v(e, o[l], -1) : v(s[l], t, 1)
    }, v = function (e, t, n) {
        if (e === t)return n;
        var r = e.nextSibling;
        while (r) {
            if (r === t)return-1;
            r = r.nextSibling
        }
        return 1
    }), u.getText = function (e) {
        var t = "", n;
        for (var r = 0; e[r]; r++)n = e[r], n.nodeType === 3 || n.nodeType === 4 ? t += n.nodeValue : n.nodeType !== 8 && (t += u.getText(n.childNodes));
        return t
    }, function () {
        var e = document.createElement("div"), t = "script" + (new Date).getTime(), n = document.documentElement;
        e.innerHTML = "<a name='" + t + "'/>", n.insertBefore(e, n.firstChild), document.getElementById(t) && (a.find.ID = function (e, t, n) {
            if (typeof t.getElementById != "undefined" && !n) {
                var r = t.getElementById(e[1]);
                return r ? r.id === e[1] || typeof r.getAttributeNode != "undefined" && r.getAttributeNode("id").nodeValue === e[1] ? [r] : undefined : []
            }
        }, a.filter.ID = function (e, t) {
            var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
            return e.nodeType === 1 && n && n.nodeValue === t
        }), n.removeChild(e), n = e = null
    }(), function () {
        var e = document.createElement("div");
        e.appendChild(document.createComment("")), e.getElementsByTagName("*").length > 0 && (a.find.TAG = function (e, t) {
            var n = t.getElementsByTagName(e[1]);
            if (e[1] === "*") {
                var r = [];
                for (var i = 0; n[i]; i++)n[i].nodeType === 1 && r.push(n[i]);
                n = r
            }
            return n
        }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (a.attrHandle.href = function (e) {
            return e.getAttribute("href", 2)
        }), e = null
    }(), document.querySelectorAll && function () {
        var e = u, t = document.createElement("div"), n = "__sizzle__";
        t.innerHTML = "<p class='TEST'></p>";
        if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0)return;
        u = function (t, r, i, s) {
            r = r || document;
            if (!s && !u.isXML(r)) {
                var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                    if (o[1])return h(r.getElementsByTagName(t), i);
                    if (o[2] && a.find.CLASS && r.getElementsByClassName)return h(r.getElementsByClassName(o[2]), i)
                }
                if (r.nodeType === 9) {
                    if (t === "body" && r.body)return h([r.body], i);
                    if (o && o[3]) {
                        var f = r.getElementById(o[3]);
                        if (!f || !f.parentNode)return h([], i);
                        if (f.id === o[3])return h([f], i)
                    }
                    try {
                        return h(r.querySelectorAll(t), i)
                    } catch (l) {
                    }
                } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                    var c = r, p = r.getAttribute("id"), d = p || n, v = r.parentNode, m = /^\s*[+~]/.test(t);
                    p ? d = d.replace(/'/g, "\\$&") : r.setAttribute("id", d), m && v && (r = r.parentNode);
                    try {
                        if (!m || v)return h(r.querySelectorAll("[id='" + d + "'] " + t), i)
                    } catch (g) {
                    } finally {
                        p || c.removeAttribute("id")
                    }
                }
            }
            return e(t, r, i, s)
        };
        for (var r in e)u[r] = e[r];
        t = null
    }(), function () {
        var e = document.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
        if (t) {
            var n = !t.call(document.createElement("div"), "div"), r = !1;
            try {
                t.call(document.documentElement, "[test!='']:sizzle")
            } catch (i) {
                r = !0
            }
            u.matchesSelector = function (e, i) {
                i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (!u.isXML(e))try {
                    if (r || !a.match.PSEUDO.test(i) && !/!=/.test(i)) {
                        var s = t.call(e, i);
                        if (s || !n || e.document && e.document.nodeType !== 11)return s
                    }
                } catch (o) {
                }
                return u(i, null, null, [e]).length > 0
            }
        }
    }(), function () {
        var e = document.createElement("div");
        e.innerHTML = "<div class='test e'></div><div class='test'></div>";
        if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0)return;
        e.lastChild.className = "e";
        if (e.getElementsByClassName("e").length === 1)return;
        a.order.splice(1, 0, "CLASS"), a.find.CLASS = function (e, t, n) {
            if (typeof t.getElementsByClassName != "undefined" && !n)return t.getElementsByClassName(e[1])
        }, e = null
    }(), document.documentElement.contains ? u.contains = function (e, t) {
        return e !== t && (e.contains ? e.contains(t) : !0)
    } : document.documentElement.compareDocumentPosition ? u.contains = function (e, t) {
        return!!(e.compareDocumentPosition(t) & 16)
    } : u.contains = function () {
        return!1
    }, u.isXML = function (e) {
        var t = (e ? e.ownerDocument || e : 0).documentElement;
        return t ? t.nodeName !== "HTML" : !1
    };
    var y = function (e, t) {
        var n, r = [], i = "", s = t.nodeType ? [t] : t;
        while (n = a.match.PSEUDO.exec(e))i += n[0], e = e.replace(a.match.PSEUDO, "");
        e = a.relative[e] ? e + "*" : e;
        for (var o = 0, f = s.length; o < f; o++)u(e, s[o], r);
        return u.filter(i, r)
    }, b = window.Sizzle;
    u.noConflict = function () {
        window.Sizzle = b
    }, window.Sizzle = u
}(), function (e) {
    var t = QQWB, n = t.bigtable, r = window.Sizzle, i = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", rowspan: "rowSpan", valign: "vAlign", height: "height", width: "width", usemap: "useMap", frameborder: "frameBorder", innerhtml: "innerHTML", src: "src", maxlength: "maxLength", type: "type"}, s;
    r.noConflict(), s = {}, QQWB.provide("dom.$", function (e, n) {
        var r, i;
        return e && e.nodeType == 1 ? i = [e] : t.String.isString(e) && (i = this.find(e, n)), r = t.Object.create(s), r.all = i, r
    }), QQWB.extend("dom", {ready: function (e) {
        var r = n.get("document", "ready"), i;
        return r ? e && e() : (t.bind(n.get("nativeevent", "documentready"), e), i = n.get("document", "tryready"), i && i()), t
    }, find: function (e, t, n) {
        return r(e, t, n)
    }, createElement: function (e, t) {
        var n = document.createElement(e);
        return this.setProperties(n, t), n
    }, setProperties: function (e, t) {
        var n = QQWB, r = n.Object;
        r.forEach(t, function (t, r) {
            r == "style" ? e.style.cssText = t : r == "class" ? e.className = t : r == "for" ? e.htmlFor = t : r in i ? e[i[r]] = t : n.String.startsWith(r, "aria-") ? e.setAttribute(r, t) : n.String.startsWith(r, "data-") ? e.setAttribute(r, t) : e[r] = t
        })
    }, getProperties: function (e, n, r) {
        var s = n;
        return r = r || {}, t.String.isString(s) && (s = [s]), t.Array.forEach(s, function (n, s) {
            n == "style" ? r[n] = e.style.cssText : n == "class" ? r[n] = e.className : n == "for" ? r[n] = e.htmlFor : n in i ? r[n] = e[i[n]] : t.String.startsWith(n, "aria-") ? r[n] = e.getAttribute(n) : t.String.startsWith(n, "data-") ? r[n] = e.getAttribute(n) : r[n] = e[n]
        }), t.String.isString(n) ? r[n] : r
    }}), QQWB.documentReady = QQWB.dom.ready, QQWB.find = QQWB.dom.find, QQWB.browser.rendererMode.quirks && QQWB.documentReady(function () {
        QQWB.extend("browser.viewport", QQWB.bigtable.get("browser", "detectviewportsize")(), !0)
    })
}(), function () {
    var e = QQWB, t = e.bigtable, n;
    n = function () {
        var e = QQWB, t = e.bigtable, n = e.log, r = t.get("document", "ready"), i = t.get("boot", "everythingready"), s = t.get("boot", "tokenready"), o, u, a, f;
        if (r)return;
        a = document.getElementsByTagName("body")[0];
        if (!a)return;
        try {
            f = a.appendChild(document.createElement("span")), f.parentNode.removeChild(f)
        } catch (l) {
            return
        }
        t.put("document", "ready", !0), n.info("document is ready"), i && i.unlock("document is ready"), o = s && s.isOpen(), u = t.get("base", "inited"), !o && !u && n.info("waiting init signal ..."), e.trigger(t.get("nativeevent", "documentready"))
    }, t.put("document", "tryready", n), window.addEventListener && document.addEventListener("DOMContentLoaded", function () {
        n()
    }, !1), window.attachEvent && (document.attachEvent("onreadystatechange", function () {
        /complete/.test(document.readyState) && (document.detachEvent("onreadystatechange", arguments.callee), n())
    }), window === window.top && function () {
        var e = QQWB, t = e.bigtable, r = t.get("document", "ready");
        if (r)return;
        try {
            document.documentElement.doScroll("left")
        } catch (i) {
            setTimeout(arguments.callee, 0);
            return
        }
        n()
    }()), e.browser.webkit && function () {
        var e = QQWB, t = e.bigtable, r = t.get("document", "ready");
        if (r)return;
        if (!/load|complete/.test(document.readyState)) {
            setTimeout(arguments.callee, 0);
            return
        }
        n()
    }()
}(), function () {
    function u(r, i, u, a) {
        var f, l, c = this;
        this._width = r || s.defaultWidth, this._height = i || s.defaultHeight, this._wid = "openjs_widget_" + e.uid(5), this._wzIndex = s.startzIndex++, this._containerIsVisible = !1, this._hasParent = !!u, u ? this._widgetContainer = t.createElement("div", {style: "position:relative;overflow:hidden"}) : this._widgetContainer = t.createElement("div", {id: this._wid, style: "position:absolute;padding:" + s.padding + "px;overflow:hidden;z-index:" + this._wzIndex + ";" + (n.msie && n.version < 9 ? 'filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr="#4c000000", EndColorStr="#4c000000");' : "background-color:rgba(0,0,0,.3);") + "border-radius:" + s.borderRadius + "px;"}), this._contentContainer = t.createElement("div", {style: "position:absolute;"}), u ? (f = t.createElement("div", {style: "width:100%;height:100%;" + (a ? a : "background:#f5f5f5;")}), this._widgetContainer.id = this._wid) : (f = t.createElement("div", {style: "width:100%;height:100%;" + (a ? a : "background:#f5f5f5;"
            ), innerHTML: '<div style="width:100%;height:7px;font-size:0;background:#C1DEA9 url(' + o + '/images/line.png) no-repeat;"></div><div style="width:118px;height:29px;top:27px;left:27px;position:absolute;background:url(' + o + '/images/logo.png) no-repeat;"></div>'}), l = t.createElement("a", {style: "width:15px;height:15px;top:24px;right:18px;position:absolute;background:url(" + o + "/images/close.png) no-repeat;display:block;", href: "#", onclick: function () {
            var e = c.closeHandler;
            return e && typeof e == "function" && e() === !1 ? !1 : (c.close(), !1)
        }}), f.appendChild(l)), f.appendChild(this._contentContainer), this._widgetContainer.appendChild(f), u && u.appendChild(this._widgetContainer)
    }

    var e = QQWB, t = e.dom, n = e.browser, r = e.log, i = [], s = {borderRadius: 10, padding: 10, defaultWidth: 200, defaultHeight: 200, startzIndex: 1e3, bottomzIndex: 900, margin: {top: 60, right: 10, bottom: 10, left: 10}}, o = "http://mat1.gtimg.com/app/openjs/widget/static/base";
    u.prototype = {setWidth: function (e) {
        this._width = e, this._reflow(), this._repaint()
    }, setContentWidth: function (e) {
        this._hasParent ? this.setWidth(e) : this.setWidth(e + s.margin.left + s.margin.right)
    }, setHeight: function (e) {
        this._height = e, this._reflow(), this._repaint()
    }, setContentHeight: function (e) {
        this._hasParent ? this.setHeight(e) : this.setHeight(e + s.margin.top + s.margin.bottom)
    }, setDimension: function (e, t) {
        this._width = e, this._height = t, this._reflow(), this._repaint()
    }, setContentDimension: function (e, t) {
        this._hasParent ? this.setDimension(e, t) : this.setDimension(e + s.margin.left + s.margin.right, t + s.margin.top + s.margin.bottom)
    }, _reflow: function () {
        var e = this._widgetContainer, t = this.getContainer(), r = this._width, i = this._height;
        e.style.width = r + "px", e.style.height = i + "px";
        if (!this._hasParent) {
            var o = document.documentElement.scrollTop || document.body.scrollTop;
            t.style.width = r - s.margin.left - s.margin.right + "px", t.style.height = i - s.margin.top - s.margin.bottom + "px", t.style.left = s.padding + s.margin.left + "px", t.style.top = s.padding + s.margin.top + "px", e.style.left = Math.max(0, n.viewport.width - (r + s.padding * 2)) / 2 + "px", e.style.top = o + Math.max(0, n.viewport.height - (i + s.padding * 2)) / 2 + "px"
        } else t.style.width = "100%", t.style.height = "100%"
    }, _repaint: function () {
        var e = this.getContainer();
        e.style.visibility = "hidden", e.style.visibility = "visible", this._hasParent || (this._widgetContainer.style.zIndex = this._wzIndex + "")
    }, show: function () {
        var t = this._widgetContainer;
        this._reflow(), t.style.display = "block", this._repaint(), e.find("#" + this._wid).length < 1 && document.body.appendChild(t), this._containerIsVisible = !0
    }, hide: function () {
        var e = this._widgetContainer;
        e.style.display = "none", this._containerIsVisible = !1
    }, _remove: function () {
        var e = this._widgetContainer;
        e.nodeName === "BODY" ? (document.body.removeChild(this.getContainer().parentNode), e.removeAttribute("id")) : e.parentNode && e.parentNode.removeChild(e), this._containerIsVisible = !1
    }, isAlive: function () {
        return e.find("#" + this._wid).length > 0
    }, isVisible: function () {
        return this.isAlive() && this._containerIsVisible
    }, getContainer: function () {
        return this._contentContainer
    }, getDimension: function () {
        return this._hasParent ? {width: this._width, height: this._height, outerWidth: this._width, outerHeight: this._height} : {width: this._width, height: this._height, outerWidth: this._width + s.padding * 2, outerHeight: this._height + s.padding * 2}
    }, getContentDimension: function () {
        return this._hasParent ? {width: this._width, height: this._height} : {width: this._width - s.margin.left - s.margin.right, height: this._height - s.margin.top - s.margin.bottom}
    }, close: function () {
        this._remove()
    }, getWidgetWrap: function () {
        return this._wid
    }, onCloseButtonClicked: function (e) {
        this.closeHandler = e
    }, _setzIndex: function (e) {
        this._lastwzIndex = this._wzIndex, this._wzIndex = e, this.isAlive() && this._repaint()
    }, setTopMost: function () {
        this._setzIndex(++s.startzIndex)
    }, setBottomMost: function () {
        this._setzIndex(s.bottomzIndex)
    }, restorezIndex: function () {
        this._setzIndex(this._lastwzIndex)
    }}, e.provide("widget", function (t, n, s) {
        function g(i, f, l, m) {
            function w() {
                a.main.call(g, b), g.isVisible() || g.show(), v.resolve()
            }

            var g, y, b;
            i ? g = new u(f, l, i, "background:white;") : (f = f || 320, l = l || 130, g = new u(f, l, i)), g.getParams = function () {
                return n || {}
            }, g.getContainer().style.background = "url(" + o + "/images/loading.gif) no-repeat 50% 50%", g.ready = function () {
                g.getContainer().style.background = ""
            }, g.sendData = function () {
                c && typeof c == "function" && c.apply(window, arguments)
            }, g.sendSuccessData = function () {
                h && typeof h == "function" && h.apply(window, arguments)
            }, g.sendErrorData = function () {
                p && typeof p == "function" && p.apply(window, arguments)
            }, g.getElemtId = function () {
                return m || ""
            }, g.show(), a.css || a.jquery ? (a.jquery && (y = e.deferred.deferred(), e.bind("jQueryLoaded", function (e) {
                b = e, y.resolve()
            })), e.task(a.css ? e.loadStyle({url: a.css}) : 1, a.jquery ? e.script({url: o + "/js/jquery.js"}) : 1, y ? y : 1).success(w).error(function (e, n) {
                d = "\u63d2\u4ef6[" + t + "]" + (s ? "\u7248\u672c\u4e3a[" + s + "]" : "") + "]\u5b58\u5728\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u63d2\u4ef6\u4f5c\u8005\u68c0\u67e5manifest\u4e2dcss,jquery\u7684\u8bbe\u7f6e\uff0c\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\uff1a" + n, r.error(d), v.reject(d), p && typeof p == "function" && p.apply(window, [d])
            })) : w()
        }

        function y(t, n) {
            a.loginRequired ? e.ready(function () {
                var r = e.loginStatus(), i = "openjs_widget_login_" + e.uid(5), s = "openjs_widget_logout_" + e.uid(5), c, h;
                if (!r) {
                    c = new u(t ? 220 : 420, t ? 100 : 210, t), h = c.getContainer(), h.innerHTML = '<div style="text-align:center;font-family:MicrosoftYaHei,SimSun;font-size:14px;margin:20px 0px;">' + a.name + ' \u9700\u8981\u60a8\u7684\u817e\u8baf\u5fae\u535a\u6388\u6743 </div><div style="width:210px;margin:0 auto;"><div style="display:block;width:85px;height:25px;background:url(' + o + '/images/btns.png) no-repeat -11px -4px;cursor:hand;cursor:pointer;font-size:12px;text-align:center;line-height:25px;color:white;" href="#" id="' + i + '">\u6388 \u6743</div><div style="display:block;width:85px;height:25px;background:url(' + o + '/images/btns.png) no-repeat -100px -4px;cursor:hand;cursor:pointer;font-size:12px;text-align:center;line-height:25px;margin-top:-25px;margin-left:125px;color:gray;" href="#" id="' + s + '">\u53d6 \u6d88</div></div>', c.onCloseButtonClicked(function () {
                        return l && typeof l == "function" && !1 === l() ? !1 : !0
                    }), c.show(), e.find("#" + i)[0].onclick = function () {
                        var r = e.bigtable.get("innerauth", "enabled");
                        return r && c.setBottomMost(), e.login(function () {
                            c._remove(), c.restorezIndex(), g(t, a.width, a.height, n)
                        }), !1
                    }, e.find("#" + s)[0].onclick = function () {
                        return f && typeof f == "function" && !1 === f() ? !1 : (c._remove(), !1)
                    };
                    return
                }
                g(t, a.width, a.height, n)
            }) : e.documentReady(function () {
                g(t, a.width, a.height, n)
            })
        }

        var a;
        e.Array.each(i, function (e, n) {
            if (n.name === t)if (!s || s && n.version === s)return a = n, !1
        });
        var f, l, c, h, p, d, v = e.deferred.deferred(), m = v.promise({onCancel: function (e) {
            return f = e, m
        }, onClose: function (e) {
            return l = e, m
        }, onData: function (e) {
            return c = e, m
        }, onSuccess: function (e) {
            return h = e, m
        }, onError: function (e) {
            return p = e, m
        }, show: function (e) {
            var t;
            return e ? (!e || !e.nodeType) && typeof e == "string" && (t = document.getElementById(e), t && t.nodeType && y(t, e)) : y(), m
        }});
        return a ? m : (d = "\u627e\u4e0d\u5230\u540d\u4e3a[" + t + "]" + (s ? "\u7248\u672c\u4e3a[" + s + "]" : "") + "\u7684\u63d2\u4ef6\uff0c\u63d2\u4ef6\u672a\u6ce8\u518c", r.error(d), v.reject(d), p && typeof p == "function" && p.apply(window, [d]), m)
    }), e.extend("widget", {register: function (e) {
        var t = "\u5b9a\u4e49\u63d2\u4ef6\u51fa\u9519,";
        if (!e.hasOwnProperty("name"))throw t += "\u5fc5\u987b\u5305\u542bname\u5c5e\u6027", new Error(t);
        if (!e.hasOwnProperty("version"))throw t += "\u5fc5\u987b\u5305\u542bversion\u5c5e\u6027", new Error(t);
        e.hasOwnProperty("loginRequired") || (e.loginRequired = !1), i.push(e)
    }, all: function () {
        return e.Array.forEach(i, function (e) {
            return[e.name, e.version].join(",")
        })
    }})
}(), function () {
    var e = QQWB, t = e.bigtable, n = e.dom, r = e.log, i = e.queryString, s = e.String, o = e.Array, u = [], a, f;
    f = {dimension: function (t, n) {
        return typeof t == "object" ? e.extend(this.componentConfig, t, !0) : e.extend(this.componentConfig, {width: t, height: n}, !0), this
    }, width: function (t) {
        return e.extend(this.componentConfig, {width: t}, !0), this
    }, height: function (t) {
        return e.extend(this.componentConfig, {height: t}, !0), this
    }, style: function (t) {
        return e.extend(this.componentConfig, {style: t}, !0), this
    }, config: function (t) {
        return e.extend(this.componentConfig, t, !0), this
    }, renderInto: function (i) {
        function l(e) {
            var t, i, f, l;
            f = o.componentName, i = a(f);
            if (!i.hasOwnProperty("create"))throw u = "\u521b\u5efa" + f + "\u7ec4\u4ef6\u5931\u8d25\uff0c\u672a\u5b9a\u4e49create\u65b9\u6cd5", r.error(u), new Error(u);
            l = i.create(o.componentConfig), i.rootStyle && n.setProperties(e, {style: i.rootStyle});
            if (typeof l == "undefined" || l.nodeType != 1 && l.nodeType != 11) {
                if (!s.isString(l))throw u = "\u521b\u5efa" + o.componentName + "\u7ec4\u4ef6\u5931\u8d25\uff0c\u65e0\u6cd5\u5904\u7406\u7684create\u65b9\u6cd5\u8fd4\u56de\u7ed3\u679c", r.error(u), new Error(u);
                e.innerHTML = l
            } else e.appendChild(l)
        }

        var o = this, u, f = i;
        if (i && i.nodeType == 1)t.get("document", "ready") ? l(i) : e.dom.ready(function () {
            l(i)
        }); else {
            if (!s.isString(i))throw u = "\u52a0\u8f7d" + o.componentName + "\u7ec4\u4ef6\u5931\u8d25\uff0c\u65e0\u6548\u7684\u8282\u70b9" + i, r.error(u), new Error(u);
            e.dom.ready(function () {
                i = e.dom.find(f);
                if (!(i.length > 0))throw u = "\u52a0\u8f7d" + o.componentName + "\u7ec4\u4ef6\u5931\u8d25\uff0c\u672a\u627e\u5230\u8282\u70b9" + f, r.error(u), new Error(u);
                i = i[0], l(i)
            })
        }
    }, render: function () {
        var e, t, i = this, s = a(i.componentName);
        n.ready(function () {
            var e = document.getElementById(s.idname);
            if (!e || e.nodeType != 1)throw t = ["\u672a\u627e\u5230", s.componentName, "\u8282\u70b9", s.idname].join(""), r.error(t), new Error(t);
            i.renderInto(e)
        })
    }}, a = function (t) {
        var n;
        return o.each(u, function (e, r) {
            if (r.name == t)return n = r, !1
        }), n
    }, e.provide("component", function (e, t) {
        var n = QQWB, r = n.String, i = n.Object, s = n.log, o, u, l;
        e = r.trim(e), o = a(e);
        if (!o)throw u = "\u65e0\u6cd5\u4f7f\u7528\u7ec4\u4ef6" + e + "\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u5b58\u5728", s.error(u), new Error(u);
        return l = n.Object.create(f), l.componentName = e, t ? l.componentConfig = t : l.componentConfig = {}, n.extend(l, o.methods), l
    }), e.extend("component", {defineComponent: function (e) {
        var t = "\u5b9a\u4e49\u7ec4\u4ef6\u9519\u8bef\uff0c", n, i;
        if (!e.hasOwnProperty("name"))throw i = t + "\u5fc5\u987b\u4e3a\u7ec4\u4ef6\u6307\u5b9a\u540d\u79f0", r.error(i), new Error(i);
        if (!e.hasOwnProperty("create"))throw i = t + "\u5fc5\u987b\u5b9e\u73b0\u521b\u5efa\u7ec4\u4ef6\u903b\u8f91create\u65b9\u6cd5", r.error(i), new Error(i);
        if (!e.hasOwnProperty("idname"))throw i = t + "\u7f3a\u5c11idname", r.error(i), new Error(i);
        if (!e.hasOwnProperty("version"))throw i = t + "\u7f3a\u5c11version", r.error(i), new Error(i);
        n = a(e.name);
        if (n && !n.allowRedefination)throw i = t + "\u7ec4\u4ef6" + n.name + "\u5df2\u5b58\u5728\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u88ab\u91cd\u65b0\u5b9a\u4e49", r.error(i), new Error(i);
        u.push(e)
    }}), e.component.defineComponent({name: "\u5fae\u8bc4\u8bba", version: "1.0", allowRedefination: !1, idname: "qqwb_comment__", attributes: "width height style appkey title colors", create: function (t) {
        var s, o, u = "http://comment.v.t.qq.com/index.html", a = location.href, f = {};
        if (!t.appkey)throw s = "\u521b\u5efa" + this.name + "\u7ec4\u4ef6\u5931\u8d25\uff0c\u7f3a\u5c11Appkey", r.error(s), new Error(s);
        return location.hash && (a = a.replace(location.hash, "")), e.extend(f, {src: [u, "#", i.encode({appkey: t.appkey, url: a, title: t.title, colorset: t.colors})].join(""), width: t.width || "100%", height: t.height || "500", frameborder: 0, scrolling: "no", allowtransparency: "true"}), o = n.createElement("iframe", f), o
    }, methods: {appkey: function (t) {
        return e.extend(this.componentConfig, {appkey: t}, !0), this
    }, colors: function (t) {
        return s.isString(t) && (t = o.fromArguments(arguments)), o.isArray(t) ? e.extend(this.componentConfig, {colors: t}, !0) : r.error("component set colors error, expect an array"), this
    }}}), e.component.defineComponent({name: "\u4e00\u952e\u8f6c\u64ad", version: "1.0", allowRedefination: !1, idname: "qqwb_share__", attributes: "icon counter counter_pos cto_icon cto_ui appkey content richcontent pic", rootStyle: "text-align:left;", create: function (t) {
        function D(e) {
            return e = Math.max(e, 0), e >= 0 && e < 1e4 ? e : e >= 1e4 && e < 1e8 ? Math.floor(e / 1e3) / 10 + "\u4e07" : e >= 1e8 ? "\u4e0a\u4ebf\u6b21" : 0
        }

        function P(e) {
            var t = D(e);
            e > 0 && (A.title = "\u5df2\u5206\u4eab" + t + "\u6b21");
            switch (f) {
                case 0:
                    switch (c) {
                        case"right":
                            dshare_count_fix.style.margin = "4px 0 -30px 39px", M.style.backgroundPosition = "-2px -31px", M.style.left = "-4px", M.style.top = "9px", M.style.height = "8px", M.style.width = "5px", O.innerHTML = t;
                            break;
                        case"top":
                            dshare_count_fix.style.width = "54px", dshare_count_fix.style.textAlign = "center", dshare_count_fix.style.position = "relative", dshare_count_fix.style.textAlign = "center", A.style.position = "static", A.style.margin = "0 0 6px 0", M.style.backgroundPosition = "-12px -30px", M.style.left = "24px", M.style.top = "23px", M.style.height = "5px", M.style.width = "6px", n.setProperties(L, {style: "margin-left:11px;"}), O.innerHTML = t
                    }
                    break;
                case 1:
                    switch (c) {
                        case"right":
                            dshare_count_fix.style.margin = "0 0 -25px 68px", M.style.backgroundPosition = "-2px -30px", M.style.left = "-4px", M.style.top = "9px", M.style.height = "8px", M.style.width = "5px", O.innerHTML = t;
                            break;
                        case"top":
                            dshare_count_fix.style.width = "62px", dshare_count_fix.style.textAlign = "center", dshare_count_fix.style.position = "relative", dshare_count_fix.style.textAlign = "center", A.style.position = "static", A.style.margin = "0 0 6px 0", M.style.backgroundPosition = "-12px -30px", M.style.left = "28px", M.style.top = "23px", M.style.height = "5px", M.style.width = "6px", O.innerHTML = t
                    }
            }
        }

        function H() {
            e.jsonp({url: "http://open.t.qq.com/api/other/get_count", data: {url: o, appkey: t.appkey}, dataType: "text"}).success(function (e) {
                e.ret === 0 && e.count > 0 ? (m = e.count, m > 0 && (A.title = "\u5df2\u5206\u4eab" + m + "\u6b21"), P(m)) : r.warn("\u83b7\u53d6\u8f6c\u64ad\u6570\u5b57\u5931\u8d25, ret=" + e.ret)
            })
        }

        var o = location.href, u = "http://share.v.t.qq.com/index.php?c=share&a=index", a = "toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=yes,status=no", f = 0, l = !1, c = "right", h = t.pic || "", p = t.content || "", d = t.richcontent || "", v = t.cto_ui || "", m = 0, g;
        if (!t.appkey)throw msg = "\u521b\u5efa" + this.name + "\u7ec4\u4ef6\u5931\u8d25\uff0c\u7f3a\u5c11Appkey", r.error(msg), new Error(msg);
        location.hash && (o = o.replace(location.hash, "")), t.icon && (f = parseInt(t.icon, 10)), t.counter && (l = !!parseInt(t.counter, 10)), d = s.splitby("|", d), t.counter_pos && (g = s.trim(t.counter_pos), g != "top" && g != "right" ? r.warn("\u5df2\u5ffd\u7565\u7684\u8ba1\u6570\u4f4d\u7f6e\u6307\u5b9a\u9519\u8bef\uff0c\u65e0\u6cd5\u5728\u4f4d\u7f6e" + t.counter_pos + "\u663e\u793a\u8ba1\u6570") : c = g);
        var y = document, b = y.createElement("a"), w = y.createElement("img"), E = y.createElement("div"), S = y.createElement("span"), x = y.createElement("p"), T = y.createElement("em"), N = y.createDocumentFragment(), C = w.cloneNode(!1), k = b.cloneNode(!1), L = E.cloneNode(!1), A = S.cloneNode(!1), O = S.cloneNode(!1), M = T.cloneNode(!1);
        return dshare_count_fix = E.cloneNode(!1), C.src = t.cto_icon || "http://mat1.gtimg.com/app/newvt/share/images/share_icon_" + f + ".png", C.style.border = "0", k.href = "javascript:;", k.onclick = function () {
            var n = {url: o, appkey: t.appkey};
            p && e.extend(n, {title: p}), h && e.extend(n, {pic: h}), v && e.extend(n, {bm: "1" + v});
            if (d.length > 0)for (var r = 0, s = d.length; r < s && r < 3; r++)n["line" + (r + 1)] = d[r];
            return window.open(u + "&" + i.encode(n), null, a), m += 1, P(m), !1
        }, k.appendChild(C), L.appendChild(k), n.setProperties(A, {style: "display:inline-block;padding-left:3px;height:25px;position:relative;background-image:url(http://mat1.gtimg.com/app/newvt/share/images/share.gif);background-position:0 0;background-repeat:no-repeat no-repeat;"}), n.setProperties(O, {style: "display:inline-block;padding:0 6px 0 3px;font-family:Microsoft YaHei,SimSun,Arial,sans-serf;text-align:center;color:rgb(100, 127, 136);font-size:12px;height:25px;line-height:25px;background-image:url(http://mat1.gtimg.com/app/newvt/share/images/share.gif); text-indent:0px;background-position:right 0px;background-repeat:no-repeat no-repeat;"}), n.setProperties(M, {style: "position:absolute;background-image:url(http://mat1.gtimg.com/app/newvt/share/images/share.gif);background-repeat:no-repeat no-repeat;font-size:1px;"}), A.appendChild(O), A.appendChild(M), dshare_count_fix.appendChild(A), l && (N.appendChild(dshare_count_fix), P(0), H()), N.appendChild(L), N
    }, methods: {appkey: function (t) {
        return e.extend(this.componentConfig, {appkey: t}, !0), this
    }, icon: function (t) {
        return typeof t == "number" || s.isString(t) ? (typeof t == "number" && (t < 0 || t > 2) && r.warn("component set icon, default icon index must be 0,1,2, you gave " + t), e.extend(this.componentConfig, {icon: t}, !0)) : r.error("component set icon error, expect number or string, you gave " + typeof t), this
    }, showCounter: function (t) {
        var n = this.componentConfig.icon;
        switch (t) {
            case"left":
            case"top":
                break;
            default:
                return r.warning("component showcounter, position must be either 'left' or 'top', you gave '" + t + "'"), this
        }
        return typeof n != "number" || n !== 0 && n !== 1 ? r.warning("component showcounter, icon index must be either 0 or 1, you gave " + n) : e.extend(this.componentConfig, {counter: 1, counter_pos: t}, !0), this
    }}}), r.info("scanning components ..."), n.ready(function () {
        var t = 0;
        o.forEach(u, function (n) {
            var i = n.idname, s = (n.attributes || "").split(/\s+/), u, a, f = {}, l = !1, c = document.getElementById(i);
            u = o.forEach(s, function (e, t) {
                return"data-" + e
            });
            if (c) {
                a = e.dom.getProperties(c, u), e.Object.forEach(a, function (e, t) {
                    e && (t = t.replace("data-", ""), f[t] = e, !l && e !== null && (l = !0))
                }), r.debug(["read configuration ", QQWB.JSON.stringify(f)].join(""));
                if (l) {
                    r.debug(["try render component [", n.name, " ", n.version, "]"].join(""));
                    try {
                        e.component(n.name).config(f).render()
                    } catch (h) {
                        r.error(["render component [", n.name, n.version, "] error exception: ", h].join(""))
                    }
                    t++
                } else r.debug(["found dom element for [", n.name, " ", n.version, "], but auto render will not start"].join(""))
            }
        }), r.info("found " + t + " components")
    })
}(), QQWB.browser.feature.localstorage ? QQWB.extend("localStorage", {set: function (e, t, n) {
    var r = QQWB, i, s;
    if (!e || !t)return r.log.error(["[localstorage] save error, key or value is empty [", e, "] value [", t, "]"].join("")), !1;
    e = "k" + e, i = r.time.secondsNow() + (n || 7) * 24 * 3600, s = {value: t, expire: i};
    try {
        localStorage[e] = r.JSON.stringify(s)
    } catch (o) {
        r.log.error("[localstorage] save error key [" + e + "] value [" + t + "]" + o);
        return
    }
    return localStorage[e]
}, get: function (e, t) {
    var n = QQWB, r;
    if (!e) {
        n.log.error("[localstorage] get error, key is empty");
        return
    }
    return e = "k" + e, r = localStorage[e], r && (r = n.JSON.parse(r)) && r.value && n.time.secondsNow() < r.expire ? r.value : t
}, del: function (e) {
    var t = QQWB;
    return e ? (e = "k" + e, localStorage.removeItem(e), typeof localStorage[e] == "undefined") : (t.log.error("[localstorage] del error, key is empty"), !1)
}}) : QQWB.browser.feature.userdata ? function () {
    var e = QQWB, t, n = "QQWBLocalStorage";
    e.dom.ready(function () {
        var n = e.bigtable.get("localstorage", "writecache"), r = e.bigtable.get("localstorage", "deletecache");
        t = document.createElement("input"), t.type = "hidden", t.style.display = "none", t.addBehavior("#default#userData"), t.expires = (new Date(e.time.now() + 31536e7)).toUTCString(), setTimeout(function () {
            document.body.appendChild(t), n && n.length > 0 && e.Array.forEach(n, function (t) {
                e.localStorage.set.apply(e.localStorage, t)
            }), r && r.length > 0 && e.Array.forEach(r, function (t) {
                e.localStorage.del.apply(e.localStorage, t)
            })
        }, 0)
    }), e.extend("localStorage", {set: function (e, r, i) {
        var s = QQWB, o, u, a;
        if (!e || !r)return s.log.error(["[localstorage] save error, key or value is empty [", e, "] value [", r, "]"].join("")), !1;
        if (!t)return o = s.bigtable.get("localstorage", "writecache", []), o.push(s.Array.fromArguments(arguments)), s.log.warning("userdata is not ready, save operation to write cache, key " + e), -1;
        e = "k" + e, u = s.time.secondsNow() + (i || 7) * 24 * 3600, a = {value: r, expire: u};
        try {
            t.load(n), t.setAttribute(e, JSON.stringify(a)), t.save(n)
        } catch (f) {
            s.log.error("[localstorage] save error key [" + e + "] value [" + r + "]" + f);
            return
        }
        return t.getAttribute(e)
    }, get: function (e, r) {
        var i = QQWB, s;
        if (!e) {
            i.log.error("[localstorage] get error, key is empty");
            return
        }
        return e = "k" + e, t ? (t.load(n), s = t.getAttribute(e), s && (s = JSON.parse(s)) && s.value && i.time.secondsNow() < s.expire ? s.value : r) : (i.log.error("[localStorage] can't get value for key " + e + ",userData is currently unavaiable"), r)
    }, del: function (e) {
        var r = QQWB, i;
        return e ? t ? (e = "k" + e, t.load(n), t.removeAttribute(e), t.save(n), typeof t.getAttribute(e) == "undefined") : (i = r.bigtable.get("localstorage", "deletecache", []), i.push(r.Array.fromArguments(arguments)), r.log.warning("userdata is not ready, save operation to delete cache, key " + e), -1) : (r.log.error("[localstorage] del error, key is empty"), !1)
    }})
}() : QQWB.log.warn("localStorage is not supported and no workaround"), QQWB.localStorage && (QQWB.localStorage.save = QQWB.localStorage.set, QQWB.localStorage.remove = QQWB.localStorage.del), QQWB.extend("ping", {pingWith: function (e, t) {
    function n() {
        var e = (QQWB.cookie.get("uin", null) || "0").match(/\d+/), t = e ? e[0] : "0", n = "";
        return{sIp: "", iQQ: t, sBiz: "openJS", sOp: "", iSta: "", iTy: 1183, iFlow: n, iFrom: "", iPubFrom: "", sUrl: "", iUrlType: "", iPos: "", sText: "", iBak1: "", iBak2: "", sBak1: "", sBak2: QQWB.uid()}
    }

    e = QQWB.extend(n(), e, !0), QQWBPingTransport_18035d19 = new Image(1, 1), QQWBPingTransport_18035d19.src = [QQWB.bigtable.get("ping", "urlbase"), "?", QQWB.queryString.encode(e, null, null, t)].join("")
}, pingInit: function () {
    function e() {
        var e = 1e6, t = 0;
        return QQWB.browser.msie ? e += 100 : QQWB.browser.opera ? e += 200 : QQWB.browser.webkit ? e += 300 : QQWB.browser.mozilla ? e += 400 : e += 500, QQWB.browser.feature.postmessage && (t += 1), QQWB.browser.feature.flash && (t += 2), QQWB.browser.feature.cookie && (t += 4), e += t, QQWB.bigtable.get("innerauth", "enabled") && (e += 1e4), e
    }

    function t() {
        var e = 1e6;
        return QQWB.browser.platform.mobile ? e += 100 : e += 200, QQWB.browser.os.windows ? e += 10 : QQWB.browser.os.mac ? e += 20 : QQWB.browser.os.linux ? e += 30 : QQWB.browser.os.unix ? e += 40 : e += 50, e
    }

    return QQWB.ping.pingWith({sOp: "init", iFrom: QQWB.version.replace(/\./g, ""), iPubFrom: t(), sUrl: [document.title, document.location.href].join(QQWB.bigtable.get("ping", "paramsep")), sText: QQWB.bigtable.get("base", "appkey"), iBak1: e()}, QQWB.bigtable.get("ping", "paramorder").concat("iFrom", "iPubFrom", "sUrl", "iUrlType", "iPos", "sText", "iBak1", "iBak2", "sBak1", "sBak2"))
}}), QQWB.extend("door", {doors: 0, door: function (e, t) {
    var n = 0;
    return this.doors++, {lock: function (t) {
        return n++, e && e.call(QQWB, t), this
    }, unlock: function (e) {
        return n--, n = Math.max(0, n), t && t.call(QQWB, e), this
    }, isOpen: function () {
        return n === 0
    }}
}, count: function () {
    return this.doors
}}), QQWB.bigtable.put("boot", "solution", function () {
    var e = QQWB, t = e.bigtable, n = e.log, r = e.String, i = e.browser, s, o, u, a, f, l, c, h, p = 15, d;
    s = t.put("boot", "tokenready", QQWB.door.door(function (e) {
        n.debug("tokenReady is locked" + (e ? "," + e : ""))
    }, function (r) {
        n.debug("tokenReady is unlocked" + (r ? "," + r : "")), s.isOpen() && (n.info("token is ready"), e.trigger(t.get("nativeevent", "tokenready")))
    })), o = t.put("boot", "everythingready", QQWB.door.door(function (e) {
        n.debug("everythingReady is locked" + (e ? "," + e : ""))
    }, function (r) {
        n.debug("everythingReady is unlocked" + (r ? "," + r : "")), o.isOpen() && (n.info("everything is ready"), e.trigger(t.get("nativeevent", "everythingready")), e.trigger(t.get("nativeevent", "ready")))
    })), s.lock("waiting init"), o.lock("wait token ready"), t.get("document", "ready") || o.lock("wait document ready"), e.bind(t.get("nativeevent", "tokenready"), function () {
        o.unlock("token is ready")
    }), u = function (e) {
        var t = QQWB, n = t.log, r = t.dom, i = t.bigtable, s = i.get("uri", "html5proxy"), o = i.get("solution", "deferred"), u;
        if (e) {
            var a;
            a = function (e) {
                s.indexOf(e.origin) !== 0 ? n.warn("ignore a message from " + e.origin) : e.data === "success" ? (n.info("proxy frame was successfully loaded for html5 solution"), o.resolve(), window.addEventListener ? window.removeEventListener("message", a, !1) : window.attachEvent && window.detachEvent("onmessage", a), a = null) : n.warn("ignore wired message from " + e.origin)
            }, window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a)
        } else t.once(i.get("innerauth", "eventproxyready"), function () {
            n.info("proxy frame was successfully loaded for inner auth"), o.resolve()
        });
        r.ready(function () {
            var e, r = "openjsframe_" + t.uid(5), a;
            n.info("loading proxy frame ..."), e = document.createElement("iframe"), e.id = r, e.src = s, e.style.display = "none", a = function () {
                u && clearTimeout(u), setTimeout(function () {
                    o.isResolved() || (o.reject(-6, "can't load proxy frame from path " + s + ",request timeout"), n.critical("proxy frame error"))
                }, 500)
            }, e.attachEvent ? e.attachEvent("onload", a) : e.onload = a, u = setTimeout(function () {
                o.isResolved() || (o.reject(-6, "can't load proxy frame from path " + s + ",request timeout"), n.critical("proxy frame error"))
            }, p * 1e3), setTimeout(function () {
                document.body.appendChild(e)
            }, 0), i.put("solution", "frame", e)
        })
    }, a = function () {
        var e = QQWB, t = e.log, n = e.bigtable, r = e.browser, i = e.dom, s = e.flash, o = n.get("solution", "deferred"), u = n.get("uri", "flashas3proxy"), a, f;
        i.ready(function () {
            var i, s, l = "openjsflash_" + e.uid(5), c = n.get("solution", "jscallbackname");
            t.info("init flash as3 solution ..."), window[c] = function () {
                a && clearTimeout(a), s = window[l] || document.getElementById(l), s ? (t.info("flash solution initlized successfully"), n.put("solution", "flashmovie", s), o.resolve()) : t.critical("proxy swf has unexpected error, os " + r.os.name + "; browser engine " + r.engine + "; version " + r.version);
                try {
                    delete window[c]
                } catch (e) {
                    window[c] = f
                }
            }, i = document.createElement("div"), i.style.width = "0px", i.style.height = "0px", i.style.position = "absolute", i.style.top = "-9999px", a = setTimeout(function () {
                if (!o.isResolved()) {
                    o.reject(-6, "can't load proxy swf from " + u + ",request timeout");
                    try {
                        document.body.removeChild(i)
                    } catch (e) {
                    }
                }
            }, p * 1e3), setTimeout(function () {
                document.body.appendChild(i), r.msie && r.os.windows ? i.innerHTML = ['<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ', 'id="' + l + '" ', 'name="' + l + '">', '<param name="movie" value="' + u + '"></param>', '<param name="allowscriptaccess" value="always"></param>', "</object>"].join("") : i.innerHTML = ['<object type= "application/x-shockwave-flash"', 'id="' + l + '" ', 'data="' + u + '">', '<param name="allowscriptaccess" value="always"></param>', "</object>"].join("")
            }, 0)
        })
    }, f = function () {
        u(!0), t.put("solution", "name", "html5")
    }, l = function () {
        u(!1), t.put("solution", "name", "innerauth")
    }, c = function () {
        n.info("flash player version " + i.feature.flash.version), i.feature.flash.externalinterface || n.warn("flash player too old, openjs may not work properly"), a(), t.put("solution", "name", "as3")
    }, h = function (e) {
        var n = t.get("solution", "deferred");
        n.reject(-6, e)
    };
    if (t.get("innerauth", "enabled")) {
        l();
        return
    }
    if (QQWB.envs.crossdomainmethod == "auto")n.debug("detect crossdomain method"), i.feature.postmessage ? f() : i.feature.flash ? c() : (n.critical("no solution available, switch to modern browser or install latest flash player, then refresh this page"), h("no solution available, need a modern browser or install lastest flash player")); else {
        n.debug("load crossdomain method " + QQWB.envs.crossdomainmethod), d = r.trim(QQWB.envs.crossdomainmethod.toLowerCase());
        switch (d) {
            case"html5":
            case"postmessage":
                i.feature.postmessage ? f() : (n.critical("can not setup crossdomain method " + QQWB.envs.crossdomainmethod + ", browser not support"), h("postmessage solution can not be setted up"));
                break;
            case"flash":
            case"as3":
                i.feature.flash ? c() : (n.critical("can not setup crossdomain method " + QQWB.envs.crossdomainmethod + ", browser not support"), h("flash as3 solution can not be setted up"))
        }
    }
}), QQWB.envs.autoboot && (QQWB.bigtable.put("boot", "booting", !0), QQWB.bigtable.get("boot", "solution")()), QQWB.extend("", {tokenReady: function (e) {
    var t = QQWB, n = t.bigtable, r = n.get("boot", "tokenready");
    return r && r.isOpen() ? e && e() : t.bind(n.get("nativeevent", "tokenready"), e), t
}, everythingReady: function (e) {
    var t = QQWB, n = t.bigtable, r = n.get("boot", "everythingready");
    return r && r.isOpen() ? e && e() : t.bind(n.get("nativeevent", "everythingready"), e), t
}}), QQWB.ready = QQWB.everythingReady, function () {
    var e = QQWB.bigtable.get("openjs", "asynccallbackfunctionname");
    typeof window[e] == "function" && window[e](QQWB)
}();
/*  |xGv00|940ddebbe52b895e243bbf3474e541b6 */