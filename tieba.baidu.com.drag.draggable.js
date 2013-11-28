/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function (bd, L) {
    var av = bd.document, bu = bd.navigator, bm = bd.location;
    var b = (function () {
        var bF = function (b0, b1) {
            return new bF.fn.init(b0, b1, bD)
        }, bU = bd.jQuery, bH = bd.$, bD, bY = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, bM = /\S/, bI = /^\s+/, bE = /\s+$/, bA = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, bN = /^[\],:{}\s]*$/, bW = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, bP = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, bJ = /(?:^|:|,)(?:\s*\[)+/g, by = /(webkit)[ \/]([\w.]+)/, bR = /(opera)(?:.*version)?[ \/]([\w.]+)/, bQ = /(msie) ([\w.]+)/, bS = /(mozilla)(?:.*? rv:([\w.]+))?/, bB = /-([a-z]|[0-9])/ig, bZ = /^-ms-/, bT = function (b0, b1) {
            return(b1 + "").toUpperCase()
        }, bX = bu.userAgent, bV, bC, e, bL = Object.prototype.toString, bG = Object.prototype.hasOwnProperty, bz = Array.prototype.push, bK = Array.prototype.slice, bO = String.prototype.trim, bv = Array.prototype.indexOf, bx = {};
        bF.fn = bF.prototype = {constructor: bF, init: function (b0, b4, b3) {
            var b2, b5, b1, b6;
            if (!b0) {
                return this
            }
            if (b0.nodeType) {
                this.context = this[0] = b0;
                this.length = 1;
                return this
            }
            if (b0 === "body" && !b4 && av.body) {
                this.context = av;
                this[0] = av.body;
                this.selector = b0;
                this.length = 1;
                return this
            }
            if (typeof b0 === "string") {
                if (b0.charAt(0) === "<" && b0.charAt(b0.length - 1) === ">" && b0.length >= 3) {
                    b2 = [null, b0, null]
                } else {
                    b2 = bY.exec(b0)
                }
                if (b2 && (b2[1] || !b4)) {
                    if (b2[1]) {
                        b4 = b4 instanceof bF ? b4[0] : b4;
                        b6 = (b4 ? b4.ownerDocument || b4 : av);
                        b1 = bA.exec(b0);
                        if (b1) {
                            if (bF.isPlainObject(b4)) {
                                b0 = [av.createElement(b1[1])];
                                bF.fn.attr.call(b0, b4, true)
                            } else {
                                b0 = [b6.createElement(b1[1])]
                            }
                        } else {
                            b1 = bF.buildFragment([b2[1]], [b6]);
                            b0 = (b1.cacheable ? bF.clone(b1.fragment) : b1.fragment).childNodes
                        }
                        return bF.merge(this, b0)
                    } else {
                        b5 = av.getElementById(b2[2]);
                        if (b5 && b5.parentNode) {
                            if (b5.id !== b2[2]) {
                                return b3.find(b0)
                            }
                            this.length = 1;
                            this[0] = b5
                        }
                        this.context = av;
                        this.selector = b0;
                        return this
                    }
                } else {
                    if (!b4 || b4.jquery) {
                        return(b4 || b3).find(b0)
                    } else {
                        return this.constructor(b4).find(b0)
                    }
                }
            } else {
                if (bF.isFunction(b0)) {
                    return b3.ready(b0)
                }
            }
            if (b0.selector !== L) {
                this.selector = b0.selector;
                this.context = b0.context
            }
            return bF.makeArray(b0, this)
        }, selector: "", jquery: "1.7.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return bK.call(this, 0)
        }, get: function (b0) {
            return b0 == null ? this.toArray() : (b0 < 0 ? this[this.length + b0] : this[b0])
        }, pushStack: function (b1, b3, b0) {
            var b2 = this.constructor();
            if (bF.isArray(b1)) {
                bz.apply(b2, b1)
            } else {
                bF.merge(b2, b1)
            }
            b2.prevObject = this;
            b2.context = this.context;
            if (b3 === "find") {
                b2.selector = this.selector + (this.selector ? " " : "") + b0
            } else {
                if (b3) {
                    b2.selector = this.selector + "." + b3 + "(" + b0 + ")"
                }
            }
            return b2
        }, each: function (b1, b0) {
            return bF.each(this, b1, b0)
        }, ready: function (b0) {
            bF.bindReady();
            bC.add(b0);
            return this
        }, eq: function (b0) {
            b0 = +b0;
            return b0 === -1 ? this.slice(b0) : this.slice(b0, b0 + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(bK.apply(this, arguments), "slice", bK.call(arguments).join(","))
        }, map: function (b0) {
            return this.pushStack(bF.map(this, function (b2, b1) {
                return b0.call(b2, b1, b2)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: bz, sort: [].sort, splice: [].splice};
        bF.fn.init.prototype = bF.fn;
        bF.extend = bF.fn.extend = function () {
            var b9, b2, b0, b1, b6, b7, b5 = arguments[0] || {}, b4 = 1, b3 = arguments.length, b8 = false;
            if (typeof b5 === "boolean") {
                b8 = b5;
                b5 = arguments[1] || {};
                b4 = 2
            }
            if (typeof b5 !== "object" && !bF.isFunction(b5)) {
                b5 = {}
            }
            if (b3 === b4) {
                b5 = this;
                --b4
            }
            for (; b4 < b3; b4++) {
                if ((b9 = arguments[b4]) != null) {
                    for (b2 in b9) {
                        b0 = b5[b2];
                        b1 = b9[b2];
                        if (b5 === b1) {
                            continue
                        }
                        if (b8 && b1 && (bF.isPlainObject(b1) || (b6 = bF.isArray(b1)))) {
                            if (b6) {
                                b6 = false;
                                b7 = b0 && bF.isArray(b0) ? b0 : []
                            } else {
                                b7 = b0 && bF.isPlainObject(b0) ? b0 : {}
                            }
                            b5[b2] = bF.extend(b8, b7, b1)
                        } else {
                            if (b1 !== L) {
                                b5[b2] = b1
                            }
                        }
                    }
                }
            }
            return b5
        };
        bF.extend({noConflict: function (b0) {
            if (bd.$ === bF) {
                bd.$ = bH
            }
            if (b0 && bd.jQuery === bF) {
                bd.jQuery = bU
            }
            return bF
        }, isReady: false, readyWait: 1, holdReady: function (b0) {
            if (b0) {
                bF.readyWait++
            } else {
                bF.ready(true)
            }
        }, ready: function (b0) {
            if ((b0 === true && !--bF.readyWait) || (b0 !== true && !bF.isReady)) {
                if (!av.body) {
                    return setTimeout(bF.ready, 1)
                }
                bF.isReady = true;
                if (b0 !== true && --bF.readyWait > 0) {
                    return
                }
                bC.fireWith(av, [bF]);
                if (bF.fn.trigger) {
                    bF(av).trigger("ready").off("ready")
                }
            }
        }, bindReady: function () {
            if (bC) {
                return
            }
            bC = bF.Callbacks("once memory");
            if (av.readyState === "complete") {
                return setTimeout(bF.ready, 1)
            }
            if (av.addEventListener) {
                av.addEventListener("DOMContentLoaded", e, false);
                bd.addEventListener("load", bF.ready, false)
            } else {
                if (av.attachEvent) {
                    av.attachEvent("onreadystatechange", e);
                    bd.attachEvent("onload", bF.ready);
                    var b0 = false;
                    try {
                        b0 = bd.frameElement == null
                    } catch (b1) {
                    }
                    if (av.documentElement.doScroll && b0) {
                        bw()
                    }
                }
            }
        }, isFunction: function (b0) {
            return bF.type(b0) === "function"
        }, isArray: Array.isArray || function (b0) {
            return bF.type(b0) === "array"
        }, isWindow: function (b0) {
            return b0 != null && b0 == b0.window
        }, isNumeric: function (b0) {
            return !isNaN(parseFloat(b0)) && isFinite(b0)
        }, type: function (b0) {
            return b0 == null ? String(b0) : bx[bL.call(b0)] || "object"
        }, isPlainObject: function (b2) {
            if (!b2 || bF.type(b2) !== "object" || b2.nodeType || bF.isWindow(b2)) {
                return false
            }
            try {
                if (b2.constructor && !bG.call(b2, "constructor") && !bG.call(b2.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b1) {
                return false
            }
            var b0;
            for (b0 in b2) {
            }
            return b0 === L || bG.call(b2, b0)
        }, isEmptyObject: function (b1) {
            for (var b0 in b1) {
                return false
            }
            return true
        }, error: function (b0) {
            throw new Error(b0)
        }, parseJSON: function (b0) {
            if (typeof b0 !== "string" || !b0) {
                return null
            }
            b0 = bF.trim(b0);
            if (bd.JSON && bd.JSON.parse) {
                return bd.JSON.parse(b0)
            }
            if (bN.test(b0.replace(bW, "@").replace(bP, "]").replace(bJ, ""))) {
                return(new Function("return " + b0))()
            }
            bF.error("Invalid JSON: " + b0)
        }, parseXML: function (b2) {
            if (typeof b2 !== "string" || !b2) {
                return null
            }
            var b0, b1;
            try {
                if (bd.DOMParser) {
                    b1 = new DOMParser();
                    b0 = b1.parseFromString(b2, "text/xml")
                } else {
                    b0 = new ActiveXObject("Microsoft.XMLDOM");
                    b0.async = "false";
                    b0.loadXML(b2)
                }
            } catch (b3) {
                b0 = L
            }
            if (!b0 || !b0.documentElement || b0.getElementsByTagName("parsererror").length) {
                bF.error("Invalid XML: " + b2)
            }
            return b0
        }, noop: function () {
        }, globalEval: function (b0) {
            if (b0 && bM.test(b0)) {
                (bd.execScript || function (b1) {
                    bd["eval"].call(bd, b1)
                })(b0)
            }
        }, camelCase: function (b0) {
            return b0.replace(bZ, "ms-").replace(bB, bT)
        }, nodeName: function (b1, b0) {
            return b1.nodeName && b1.nodeName.toUpperCase() === b0.toUpperCase()
        }, each: function (b3, b6, b2) {
            var b1, b4 = 0, b5 = b3.length, b0 = b5 === L || bF.isFunction(b3);
            if (b2) {
                if (b0) {
                    for (b1 in b3) {
                        if (b6.apply(b3[b1], b2) === false) {
                            break
                        }
                    }
                } else {
                    for (; b4 < b5;) {
                        if (b6.apply(b3[b4++], b2) === false) {
                            break
                        }
                    }
                }
            } else {
                if (b0) {
                    for (b1 in b3) {
                        if (b6.call(b3[b1], b1, b3[b1]) === false) {
                            break
                        }
                    }
                } else {
                    for (; b4 < b5;) {
                        if (b6.call(b3[b4], b4, b3[b4++]) === false) {
                            break
                        }
                    }
                }
            }
            return b3
        }, trim: bO ? function (b0) {
            return b0 == null ? "" : bO.call(b0)
        } : function (b0) {
            return b0 == null ? "" : b0.toString().replace(bI, "").replace(bE, "")
        }, makeArray: function (b3, b1) {
            var b0 = b1 || [];
            if (b3 != null) {
                var b2 = bF.type(b3);
                if (b3.length == null || b2 === "string" || b2 === "function" || b2 === "regexp" || bF.isWindow(b3)) {
                    bz.call(b0, b3)
                } else {
                    bF.merge(b0, b3)
                }
            }
            return b0
        }, inArray: function (b2, b3, b1) {
            var b0;
            if (b3) {
                if (bv) {
                    return bv.call(b3, b2, b1)
                }
                b0 = b3.length;
                b1 = b1 ? b1 < 0 ? Math.max(0, b0 + b1) : b1 : 0;
                for (; b1 < b0; b1++) {
                    if (b1 in b3 && b3[b1] === b2) {
                        return b1
                    }
                }
            }
            return -1
        }, merge: function (b4, b2) {
            var b3 = b4.length, b1 = 0;
            if (typeof b2.length === "number") {
                for (var b0 = b2.length; b1 < b0; b1++) {
                    b4[b3++] = b2[b1]
                }
            } else {
                while (b2[b1] !== L) {
                    b4[b3++] = b2[b1++]
                }
            }
            b4.length = b3;
            return b4
        }, grep: function (b1, b6, b0) {
            var b2 = [], b5;
            b0 = !!b0;
            for (var b3 = 0, b4 = b1.length; b3 < b4; b3++) {
                b5 = !!b6(b1[b3], b3);
                if (b0 !== b5) {
                    b2.push(b1[b3])
                }
            }
            return b2
        }, map: function (b0, b7, b8) {
            var b5, b6, b4 = [], b2 = 0, b1 = b0.length, b3 = b0 instanceof bF || b1 !== L && typeof b1 === "number" && ((b1 > 0 && b0[0] && b0[b1 - 1]) || b1 === 0 || bF.isArray(b0));
            if (b3) {
                for (; b2 < b1; b2++) {
                    b5 = b7(b0[b2], b2, b8);
                    if (b5 != null) {
                        b4[b4.length] = b5
                    }
                }
            } else {
                for (b6 in b0) {
                    b5 = b7(b0[b6], b6, b8);
                    if (b5 != null) {
                        b4[b4.length] = b5
                    }
                }
            }
            return b4.concat.apply([], b4)
        }, guid: 1, proxy: function (b4, b3) {
            if (typeof b3 === "string") {
                var b2 = b4[b3];
                b3 = b4;
                b4 = b2
            }
            if (!bF.isFunction(b4)) {
                return L
            }
            var b0 = bK.call(arguments, 2), b1 = function () {
                return b4.apply(b3, b0.concat(bK.call(arguments)))
            };
            b1.guid = b4.guid = b4.guid || b1.guid || bF.guid++;
            return b1
        }, access: function (b0, b6, b9, b7, b4, ca, b8) {
            var b2, b5 = b9 == null, b3 = 0, b1 = b0.length;
            if (b9 && typeof b9 === "object") {
                for (b3 in b9) {
                    bF.access(b0, b6, b3, b9[b3], 1, ca, b7)
                }
                b4 = 1
            } else {
                if (b7 !== L) {
                    b2 = b8 === L && bF.isFunction(b7);
                    if (b5) {
                        if (b2) {
                            b2 = b6;
                            b6 = function (cc, cb, cd) {
                                return b2.call(bF(cc), cd)
                            }
                        } else {
                            b6.call(b0, b7);
                            b6 = null
                        }
                    }
                    if (b6) {
                        for (; b3 < b1; b3++) {
                            b6(b0[b3], b9, b2 ? b7.call(b0[b3], b3, b6(b0[b3], b9)) : b7, b8)
                        }
                    }
                    b4 = 1
                }
            }
            return b4 ? b0 : b5 ? b6.call(b0) : b1 ? b6(b0[0], b9) : ca
        }, now: function () {
            return(new Date()).getTime()
        }, uaMatch: function (b1) {
            b1 = b1.toLowerCase();
            var b0 = by.exec(b1) || bR.exec(b1) || bQ.exec(b1) || b1.indexOf("compatible") < 0 && bS.exec(b1) || [];
            return{browser: b0[1] || "", version: b0[2] || "0"}
        }, sub: function () {
            function b0(b3, b4) {
                return new b0.fn.init(b3, b4)
            }

            bF.extend(true, b0, this);
            b0.superclass = this;
            b0.fn = b0.prototype = this();
            b0.fn.constructor = b0;
            b0.sub = this.sub;
            b0.fn.init = function b2(b3, b4) {
                if (b4 && b4 instanceof bF && !(b4 instanceof b0)) {
                    b4 = b0(b4)
                }
                return bF.fn.init.call(this, b3, b4, b1)
            };
            b0.fn.init.prototype = b0.fn;
            var b1 = b0(av);
            return b0
        }, browser: {}});
        bF.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b1, b0) {
            bx["[object " + b0 + "]"] = b0.toLowerCase()
        });
        bV = bF.uaMatch(bX);
        if (bV.browser) {
            bF.browser[bV.browser] = true;
            bF.browser.version = bV.version
        }
        if (bF.browser.webkit) {
            bF.browser.safari = true
        }
        if (bM.test("\xA0")) {
            bI = /^[\s\xA0]+/;
            bE = /[\s\xA0]+$/
        }
        bD = bF(av);
        if (av.addEventListener) {
            e = function () {
                av.removeEventListener("DOMContentLoaded", e, false);
                bF.ready()
            }
        } else {
            if (av.attachEvent) {
                e = function () {
                    if (av.readyState === "complete") {
                        av.detachEvent("onreadystatechange", e);
                        bF.ready()
                    }
                }
            }
        }
        function bw() {
            if (bF.isReady) {
                return
            }
            try {
                av.documentElement.doScroll("left")
            } catch (b0) {
                setTimeout(bw, 1);
                return
            }
            bF.ready()
        }

        return bF
    })();
    var a3 = {};

    function X(e) {
        var bv = a3[e] = {}, bw, bx;
        e = e.split(/\s+/);
        for (bw = 0, bx = e.length; bw < bx; bw++) {
            bv[e[bw]] = true
        }
        return bv
    }

    b.Callbacks = function (bx) {
        bx = bx ? (a3[bx] || X(bx)) : {};
        var bC = [], bD = [], by, e, bz, bw, bA, bB, bF = function (bG) {
            var bH, bK, bJ, bI, bL;
            for (bH = 0, bK = bG.length; bH < bK; bH++) {
                bJ = bG[bH];
                bI = b.type(bJ);
                if (bI === "array") {
                    bF(bJ)
                } else {
                    if (bI === "function") {
                        if (!bx.unique || !bE.has(bJ)) {
                            bC.push(bJ)
                        }
                    }
                }
            }
        }, bv = function (bH, bG) {
            bG = bG || [];
            by = !bx.memory || [bH, bG];
            e = true;
            bz = true;
            bB = bw || 0;
            bw = 0;
            bA = bC.length;
            for (; bC && bB < bA; bB++) {
                if (bC[bB].apply(bH, bG) === false && bx.stopOnFalse) {
                    by = true;
                    break
                }
            }
            bz = false;
            if (bC) {
                if (!bx.once) {
                    if (bD && bD.length) {
                        by = bD.shift();
                        bE.fireWith(by[0], by[1])
                    }
                } else {
                    if (by === true) {
                        bE.disable()
                    } else {
                        bC = []
                    }
                }
            }
        }, bE = {add: function () {
            if (bC) {
                var bG = bC.length;
                bF(arguments);
                if (bz) {
                    bA = bC.length
                } else {
                    if (by && by !== true) {
                        bw = bG;
                        bv(by[0], by[1])
                    }
                }
            }
            return this
        }, remove: function () {
            if (bC) {
                var bG = arguments, bI = 0, bJ = bG.length;
                for (; bI < bJ; bI++) {
                    for (var bH = 0; bH < bC.length; bH++) {
                        if (bG[bI] === bC[bH]) {
                            if (bz) {
                                if (bH <= bA) {
                                    bA--;
                                    if (bH <= bB) {
                                        bB--
                                    }
                                }
                            }
                            bC.splice(bH--, 1);
                            if (bx.unique) {
                                break
                            }
                        }
                    }
                }
            }
            return this
        }, has: function (bH) {
            if (bC) {
                var bG = 0, bI = bC.length;
                for (; bG < bI; bG++) {
                    if (bH === bC[bG]) {
                        return true
                    }
                }
            }
            return false
        }, empty: function () {
            bC = [];
            return this
        }, disable: function () {
            bC = bD = by = L;
            return this
        }, disabled: function () {
            return !bC
        }, lock: function () {
            bD = L;
            if (!by || by === true) {
                bE.disable()
            }
            return this
        }, locked: function () {
            return !bD
        }, fireWith: function (bH, bG) {
            if (bD) {
                if (bz) {
                    if (!bx.once) {
                        bD.push([bH, bG])
                    }
                } else {
                    if (!(bx.once && by)) {
                        bv(bH, bG)
                    }
                }
            }
            return this
        }, fire: function () {
            bE.fireWith(this, arguments);
            return this
        }, fired: function () {
            return !!e
        }};
        return bE
    };
    var aK = [].slice;
    b.extend({Deferred: function (by) {
        var bx = b.Callbacks("once memory"), bw = b.Callbacks("once memory"), bv = b.Callbacks("memory"), e = "pending", bA = {resolve: bx, reject: bw, notify: bv}, bC = {done: bx.add, fail: bw.add, progress: bv.add, state: function () {
            return e
        }, isResolved: bx.fired, isRejected: bw.fired, then: function (bE, bD, bF) {
            bB.done(bE).fail(bD).progress(bF);
            return this
        }, always: function () {
            bB.done.apply(bB, arguments).fail.apply(bB, arguments);
            return this
        }, pipe: function (bF, bE, bD) {
            return b.Deferred(function (bG) {
                b.each({done: [bF, "resolve"], fail: [bE, "reject"], progress: [bD, "notify"]}, function (bI, bL) {
                    var bH = bL[0], bK = bL[1], bJ;
                    if (b.isFunction(bH)) {
                        bB[bI](function () {
                            bJ = bH.apply(this, arguments);
                            if (bJ && b.isFunction(bJ.promise)) {
                                bJ.promise().then(bG.resolve, bG.reject, bG.notify)
                            } else {
                                bG[bK + "With"](this === bB ? bG : this, [bJ])
                            }
                        })
                    } else {
                        bB[bI](bG[bK])
                    }
                })
            }).promise()
        }, promise: function (bE) {
            if (bE == null) {
                bE = bC
            } else {
                for (var bD in bC) {
                    bE[bD] = bC[bD]
                }
            }
            return bE
        }}, bB = bC.promise({}), bz;
        for (bz in bA) {
            bB[bz] = bA[bz].fire;
            bB[bz + "With"] = bA[bz].fireWith
        }
        bB.done(function () {
            e = "resolved"
        }, bw.disable, bv.lock).fail(function () {
            e = "rejected"
        }, bx.disable, bv.lock);
        if (by) {
            by.call(bB, bB)
        }
        return bB
    }, when: function (bA) {
        var bx = aK.call(arguments, 0), bv = 0, e = bx.length, bB = new Array(e), bw = e, by = e, bC = e <= 1 && bA && b.isFunction(bA.promise) ? bA : b.Deferred(), bE = bC.promise();

        function bD(bF) {
            return function (bG) {
                bx[bF] = arguments.length > 1 ? aK.call(arguments, 0) : bG;
                if (!(--bw)) {
                    bC.resolveWith(bC, bx)
                }
            }
        }

        function bz(bF) {
            return function (bG) {
                bB[bF] = arguments.length > 1 ? aK.call(arguments, 0) : bG;
                bC.notifyWith(bE, bB)
            }
        }

        if (e > 1) {
            for (; bv < e; bv++) {
                if (bx[bv] && bx[bv].promise && b.isFunction(bx[bv].promise)) {
                    bx[bv].promise().then(bD(bv), bC.reject, bz(bv))
                } else {
                    --bw
                }
            }
            if (!bw) {
                bC.resolveWith(bC, bx)
            }
        } else {
            if (bC !== bA) {
                bC.resolveWith(bC, e ? [bA] : [])
            }
        }
        return bE
    }});
    b.support = (function () {
        var bI, bH, bE, bF, bx, bD, bC, bz, bJ, bA, by, bw, bv = av.createElement("div"), bG = av.documentElement;
        bv.setAttribute("className", "t");
        bv.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        bH = bv.getElementsByTagName("*");
        bE = bv.getElementsByTagName("a")[0];
        if (!bH || !bH.length || !bE) {
            return{}
        }
        bF = av.createElement("select");
        bx = bF.appendChild(av.createElement("option"));
        bD = bv.getElementsByTagName("input")[0];
        bI = {leadingWhitespace: (bv.firstChild.nodeType === 3), tbody: !bv.getElementsByTagName("tbody").length, htmlSerialize: !!bv.getElementsByTagName("link").length, style: /top/.test(bE.getAttribute("style")), hrefNormalized: (bE.getAttribute("href") === "/a"), opacity: /^0.55/.test(bE.style.opacity), cssFloat: !!bE.style.cssFloat, checkOn: (bD.value === "on"), optSelected: bx.selected, getSetAttribute: bv.className !== "t", enctype: !!av.createElement("form").enctype, html5Clone: av.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>", submitBubbles: true, changeBubbles: true, focusinBubbles: false, deleteExpando: true, noCloneEvent: true, inlineBlockNeedsLayout: false, shrinkWrapBlocks: false, reliableMarginRight: true, pixelMargin: true};
        b.boxModel = bI.boxModel = (av.compatMode === "CSS1Compat");
        bD.checked = true;
        bI.noCloneChecked = bD.cloneNode(true).checked;
        bF.disabled = true;
        bI.optDisabled = !bx.disabled;
        try {
            delete bv.test
        } catch (bB) {
            bI.deleteExpando = false
        }
        if (!bv.addEventListener && bv.attachEvent && bv.fireEvent) {
            bv.attachEvent("onclick", function () {
                bI.noCloneEvent = false
            });
            bv.cloneNode(true).fireEvent("onclick")
        }
        bD = av.createElement("input");
        bD.value = "t";
        bD.setAttribute("type", "radio");
        bI.radioValue = bD.value === "t";
        bD.setAttribute("checked", "checked");
        bD.setAttribute("name", "t");
        bv.appendChild(bD);
        bC = av.createDocumentFragment();
        bC.appendChild(bv.lastChild);
        bI.checkClone = bC.cloneNode(true).cloneNode(true).lastChild.checked;
        bI.appendChecked = bD.checked;
        bC.removeChild(bD);
        bC.appendChild(bv);
        if (bv.attachEvent) {
            for (by in {submit: 1, change: 1, focusin: 1}) {
                bA = "on" + by;
                bw = (bA in bv);
                if (!bw) {
                    bv.setAttribute(bA, "return;");
                    bw = (typeof bv[bA] === "function")
                }
                bI[by + "Bubbles"] = bw
            }
        }
        bC.removeChild(bv);
        bC = bF = bx = bv = bD = null;
        b(function () {
            var bM, bV, bW, bU, bO, bP, bR, bL, bK, bQ, bN, e, bT, bS = av.getElementsByTagName("body")[0];
            if (!bS) {
                return
            }
            bL = 1;
            bT = "padding:0;margin:0;border:";
            bN = "position:absolute;top:0;left:0;width:1px;height:1px;";
            e = bT + "0;visibility:hidden;";
            bK = "style='" + bN + bT + "5px solid #000;";
            bQ = "<div " + bK + "display:block;'><div style='" + bT + "0;display:block;overflow:hidden;'></div></div><table " + bK + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            bM = av.createElement("div");
            bM.style.cssText = e + "width:0;height:0;position:static;top:0;margin-top:" + bL + "px";
            bS.insertBefore(bM, bS.firstChild);
            bv = av.createElement("div");
            bM.appendChild(bv);
            bv.innerHTML = "<table><tr><td style='" + bT + "0;display:none'></td><td>t</td></tr></table>";
            bz = bv.getElementsByTagName("td");
            bw = (bz[0].offsetHeight === 0);
            bz[0].style.display = "";
            bz[1].style.display = "none";
            bI.reliableHiddenOffsets = bw && (bz[0].offsetHeight === 0);
            if (bd.getComputedStyle) {
                bv.innerHTML = "";
                bR = av.createElement("div");
                bR.style.width = "0";
                bR.style.marginRight = "0";
                bv.style.width = "2px";
                bv.appendChild(bR);
                bI.reliableMarginRight = (parseInt((bd.getComputedStyle(bR, null) || {marginRight: 0}).marginRight, 10) || 0) === 0
            }
            if (typeof bv.style.zoom !== "undefined") {
                bv.innerHTML = "";
                bv.style.width = bv.style.padding = "1px";
                bv.style.border = 0;
                bv.style.overflow = "hidden";
                bv.style.display = "inline";
                bv.style.zoom = 1;
                bI.inlineBlockNeedsLayout = (bv.offsetWidth === 3);
                bv.style.display = "block";
                bv.style.overflow = "visible";
                bv.innerHTML = "<div style='width:5px;'></div>";
                bI.shrinkWrapBlocks = (bv.offsetWidth !== 3)
            }
            bv.style.cssText = bN + e;
            bv.innerHTML = bQ;
            bV = bv.firstChild;
            bW = bV.firstChild;
            bO = bV.nextSibling.firstChild.firstChild;
            bP = {doesNotAddBorder: (bW.offsetTop !== 5), doesAddBorderForTableAndCells: (bO.offsetTop === 5)};
            bW.style.position = "fixed";
            bW.style.top = "20px";
            bP.fixedPosition = (bW.offsetTop === 20 || bW.offsetTop === 15);
            bW.style.position = bW.style.top = "";
            bV.style.overflow = "hidden";
            bV.style.position = "relative";
            bP.subtractsBorderForOverflowNotVisible = (bW.offsetTop === -5);
            bP.doesNotIncludeMarginInBodyOffset = (bS.offsetTop !== bL);
            if (bd.getComputedStyle) {
                bv.style.marginTop = "1%";
                bI.pixelMargin = (bd.getComputedStyle(bv, null) || {marginTop: 0}).marginTop !== "1%"
            }
            if (typeof bM.style.zoom !== "undefined") {
                bM.style.zoom = 1
            }
            bS.removeChild(bM);
            bR = bv = bM = null;
            b.extend(bI, bP)
        });
        return bI
    })();
    var aT = /^(?:\{.*\}|\[.*\])$/, aA = /([A-Z])/g;
    b.extend({cache: {}, uuid: 0, expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true}, hasData: function (e) {
        e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando];
        return !!e && !S(e)
    }, data: function (bx, bv, bz, by) {
        if (!b.acceptData(bx)) {
            return
        }
        var bG, bA, bD, bE = b.expando, bC = typeof bv === "string", bF = bx.nodeType, e = bF ? b.cache : bx, bw = bF ? bx[bE] : bx[bE] && bE, bB = bv === "events";
        if ((!bw || !e[bw] || (!bB && !by && !e[bw].data)) && bC && bz === L) {
            return
        }
        if (!bw) {
            if (bF) {
                bx[bE] = bw = ++b.uuid
            } else {
                bw = bE
            }
        }
        if (!e[bw]) {
            e[bw] = {};
            if (!bF) {
                e[bw].toJSON = b.noop
            }
        }
        if (typeof bv === "object" || typeof bv === "function") {
            if (by) {
                e[bw] = b.extend(e[bw], bv)
            } else {
                e[bw].data = b.extend(e[bw].data, bv)
            }
        }
        bG = bA = e[bw];
        if (!by) {
            if (!bA.data) {
                bA.data = {}
            }
            bA = bA.data
        }
        if (bz !== L) {
            bA[b.camelCase(bv)] = bz
        }
        if (bB && !bA[bv]) {
            return bG.events
        }
        if (bC) {
            bD = bA[bv];
            if (bD == null) {
                bD = bA[b.camelCase(bv)]
            }
        } else {
            bD = bA
        }
        return bD
    }, removeData: function (bx, bv, by) {
        if (!b.acceptData(bx)) {
            return
        }
        var bB, bA, bz, bC = b.expando, bD = bx.nodeType, e = bD ? b.cache : bx, bw = bD ? bx[bC] : bC;
        if (!e[bw]) {
            return
        }
        if (bv) {
            bB = by ? e[bw] : e[bw].data;
            if (bB) {
                if (!b.isArray(bv)) {
                    if (bv in bB) {
                        bv = [bv]
                    } else {
                        bv = b.camelCase(bv);
                        if (bv in bB) {
                            bv = [bv]
                        } else {
                            bv = bv.split(" ")
                        }
                    }
                }
                for (bA = 0, bz = bv.length; bA < bz; bA++) {
                    delete bB[bv[bA]]
                }
                if (!(by ? S : b.isEmptyObject)(bB)) {
                    return
                }
            }
        }
        if (!by) {
            delete e[bw].data;
            if (!S(e[bw])) {
                return
            }
        }
        if (b.support.deleteExpando || !e.setInterval) {
            delete e[bw]
        } else {
            e[bw] = null
        }
        if (bD) {
            if (b.support.deleteExpando) {
                delete bx[bC]
            } else {
                if (bx.removeAttribute) {
                    bx.removeAttribute(bC)
                } else {
                    bx[bC] = null
                }
            }
        }
    }, _data: function (bv, e, bw) {
        return b.data(bv, e, bw, true)
    }, acceptData: function (bv) {
        if (bv.nodeName) {
            var e = b.noData[bv.nodeName.toLowerCase()];
            if (e) {
                return !(e === true || bv.getAttribute("classid") !== e)
            }
        }
        return true
    }});
    b.fn.extend({data: function (bD, bC) {
        var by, bv, bB, e, bx, bw = this[0], bA = 0, bz = null;
        if (bD === L) {
            if (this.length) {
                bz = b.data(bw);
                if (bw.nodeType === 1 && !b._data(bw, "parsedAttrs")) {
                    bB = bw.attributes;
                    for (bx = bB.length; bA < bx; bA++) {
                        e = bB[bA].name;
                        if (e.indexOf("data-") === 0) {
                            e = b.camelCase(e.substring(5));
                            a6(bw, e, bz[e])
                        }
                    }
                    b._data(bw, "parsedAttrs", true)
                }
            }
            return bz
        }
        if (typeof bD === "object") {
            return this.each(function () {
                b.data(this, bD)
            })
        }
        by = bD.split(".", 2);
        by[1] = by[1] ? "." + by[1] : "";
        bv = by[1] + "!";
        return b.access(this, function (bE) {
            if (bE === L) {
                bz = this.triggerHandler("getData" + bv, [by[0]]);
                if (bz === L && bw) {
                    bz = b.data(bw, bD);
                    bz = a6(bw, bD, bz)
                }
                return bz === L && by[1] ? this.data(by[0]) : bz
            }
            by[1] = bE;
            this.each(function () {
                var bF = b(this);
                bF.triggerHandler("setData" + bv, by);
                b.data(this, bD, bE);
                bF.triggerHandler("changeData" + bv, by)
            })
        }, null, bC, arguments.length > 1, null, false)
    }, removeData: function (e) {
        return this.each(function () {
            b.removeData(this, e)
        })
    }});
    function a6(bx, bw, by) {
        if (by === L && bx.nodeType === 1) {
            var bv = "data-" + bw.replace(aA, "-$1").toLowerCase();
            by = bx.getAttribute(bv);
            if (typeof by === "string") {
                try {
                    by = by === "true" ? true : by === "false" ? false : by === "null" ? null : b.isNumeric(by) ? +by : aT.test(by) ? b.parseJSON(by) : by
                } catch (bz) {
                }
                b.data(bx, bw, by)
            } else {
                by = L
            }
        }
        return by
    }

    function S(bv) {
        for (var e in bv) {
            if (e === "data" && b.isEmptyObject(bv[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }

    function bj(by, bx, bA) {
        var bw = bx + "defer", bv = bx + "queue", e = bx + "mark", bz = b._data(by, bw);
        if (bz && (bA === "queue" || !b._data(by, bv)) && (bA === "mark" || !b._data(by, e))) {
            setTimeout(function () {
                if (!b._data(by, bv) && !b._data(by, e)) {
                    b.removeData(by, bw, true);
                    bz.fire()
                }
            }, 0)
        }
    }

    b.extend({_mark: function (bv, e) {
        if (bv) {
            e = (e || "fx") + "mark";
            b._data(bv, e, (b._data(bv, e) || 0) + 1)
        }
    }, _unmark: function (by, bx, bv) {
        if (by !== true) {
            bv = bx;
            bx = by;
            by = false
        }
        if (bx) {
            bv = bv || "fx";
            var e = bv + "mark", bw = by ? 0 : ((b._data(bx, e) || 1) - 1);
            if (bw) {
                b._data(bx, e, bw)
            } else {
                b.removeData(bx, e, true);
                bj(bx, bv, "mark")
            }
        }
    }, queue: function (bv, e, bx) {
        var bw;
        if (bv) {
            e = (e || "fx") + "queue";
            bw = b._data(bv, e);
            if (bx) {
                if (!bw || b.isArray(bx)) {
                    bw = b._data(bv, e, b.makeArray(bx))
                } else {
                    bw.push(bx)
                }
            }
            return bw || []
        }
    }, dequeue: function (by, bx) {
        bx = bx || "fx";
        var bv = b.queue(by, bx), bw = bv.shift(), e = {};
        if (bw === "inprogress") {
            bw = bv.shift()
        }
        if (bw) {
            if (bx === "fx") {
                bv.unshift("inprogress")
            }
            b._data(by, bx + ".run", e);
            bw.call(by, function () {
                b.dequeue(by, bx)
            }, e)
        }
        if (!bv.length) {
            b.removeData(by, bx + "queue " + bx + ".run", true);
            bj(by, bx, "queue")
        }
    }});
    b.fn.extend({queue: function (e, bv) {
        var bw = 2;
        if (typeof e !== "string") {
            bv = e;
            e = "fx";
            bw--
        }
        if (arguments.length < bw) {
            return b.queue(this[0], e)
        }
        return bv === L ? this : this.each(function () {
            var bx = b.queue(this, e, bv);
            if (e === "fx" && bx[0] !== "inprogress") {
                b.dequeue(this, e)
            }
        })
    }, dequeue: function (e) {
        return this.each(function () {
            b.dequeue(this, e)
        })
    }, delay: function (bv, e) {
        bv = b.fx ? b.fx.speeds[bv] || bv : bv;
        e = e || "fx";
        return this.queue(e, function (bx, bw) {
            var by = setTimeout(bx, bv);
            bw.stop = function () {
                clearTimeout(by)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (bD, bw) {
        if (typeof bD !== "string") {
            bw = bD;
            bD = L
        }
        bD = bD || "fx";
        var e = b.Deferred(), bv = this, by = bv.length, bB = 1, bz = bD + "defer", bA = bD + "queue", bC = bD + "mark", bx;

        function bE() {
            if (!(--bB)) {
                e.resolveWith(bv, [bv])
            }
        }

        while (by--) {
            if ((bx = b.data(bv[by], bz, L, true) || (b.data(bv[by], bA, L, true) || b.data(bv[by], bC, L, true)) && b.data(bv[by], bz, b.Callbacks("once memory"), true))) {
                bB++;
                bx.add(bE)
            }
        }
        bE();
        return e.promise(bw)
    }});
    var aQ = /[\n\t\r]/g, ag = /\s+/, aV = /\r/g, g = /^(?:button|input)$/i, C = /^(?:button|input|object|select|textarea)$/i, l = /^a(?:rea)?$/i, ao = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, E = b.support.getSetAttribute, bf, aZ, aG;
    b.fn.extend({attr: function (e, bv) {
        return b.access(this, b.attr, e, bv, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            b.removeAttr(this, e)
        })
    }, prop: function (e, bv) {
        return b.access(this, b.prop, e, bv, arguments.length > 1)
    }, removeProp: function (e) {
        e = b.propFix[e] || e;
        return this.each(function () {
            try {
                this[e] = L;
                delete this[e]
            } catch (bv) {
            }
        })
    }, addClass: function (by) {
        var bA, bw, bv, bx, bz, bB, e;
        if (b.isFunction(by)) {
            return this.each(function (bC) {
                b(this).addClass(by.call(this, bC, this.className))
            })
        }
        if (by && typeof by === "string") {
            bA = by.split(ag);
            for (bw = 0, bv = this.length; bw < bv; bw++) {
                bx = this[bw];
                if (bx.nodeType === 1) {
                    if (!bx.className && bA.length === 1) {
                        bx.className = by
                    } else {
                        bz = " " + bx.className + " ";
                        for (bB = 0, e = bA.length; bB < e; bB++) {
                            if (!~bz.indexOf(" " + bA[bB] + " ")) {
                                bz += bA[bB] + " "
                            }
                        }
                        bx.className = b.trim(bz)
                    }
                }
            }
        }
        return this
    }, removeClass: function (bz) {
        var bA, bw, bv, by, bx, bB, e;
        if (b.isFunction(bz)) {
            return this.each(function (bC) {
                b(this).removeClass(bz.call(this, bC, this.className))
            })
        }
        if ((bz && typeof bz === "string") || bz === L) {
            bA = (bz || "").split(ag);
            for (bw = 0, bv = this.length; bw < bv; bw++) {
                by = this[bw];
                if (by.nodeType === 1 && by.className) {
                    if (bz) {
                        bx = (" " + by.className + " ").replace(aQ, " ");
                        for (bB = 0, e = bA.length; bB < e; bB++) {
                            bx = bx.replace(" " + bA[bB] + " ", " ")
                        }
                        by.className = b.trim(bx)
                    } else {
                        by.className = ""
                    }
                }
            }
        }
        return this
    }, toggleClass: function (bx, bv) {
        var bw = typeof bx, e = typeof bv === "boolean";
        if (b.isFunction(bx)) {
            return this.each(function (by) {
                b(this).toggleClass(bx.call(this, by, this.className, bv), bv)
            })
        }
        return this.each(function () {
            if (bw === "string") {
                var bA, bz = 0, by = b(this), bB = bv, bC = bx.split(ag);
                while ((bA = bC[bz++])) {
                    bB = e ? bB : !by.hasClass(bA);
                    by[bB ? "addClass" : "removeClass"](bA)
                }
            } else {
                if (bw === "undefined" || bw === "boolean") {
                    if (this.className) {
                        b._data(this, "__className__", this.className)
                    }
                    this.className = this.className || bx === false ? "" : b._data(this, "__className__") || ""
                }
            }
        })
    }, hasClass: function (e) {
        var bx = " " + e + " ", bw = 0, bv = this.length;
        for (; bw < bv; bw++) {
            if (this[bw].nodeType === 1 && (" " + this[bw].className + " ").replace(aQ, " ").indexOf(bx) > -1) {
                return true
            }
        }
        return false
    }, val: function (bx) {
        var e, bv, by, bw = this[0];
        if (!arguments.length) {
            if (bw) {
                e = b.valHooks[bw.type] || b.valHooks[bw.nodeName.toLowerCase()];
                if (e && "get" in e && (bv = e.get(bw, "value")) !== L) {
                    return bv
                }
                bv = bw.value;
                return typeof bv === "string" ? bv.replace(aV, "") : bv == null ? "" : bv
            }
            return
        }
        by = b.isFunction(bx);
        return this.each(function (bA) {
            var bz = b(this), bB;
            if (this.nodeType !== 1) {
                return
            }
            if (by) {
                bB = bx.call(this, bA, bz.val())
            } else {
                bB = bx
            }
            if (bB == null) {
                bB = ""
            } else {
                if (typeof bB === "number") {
                    bB += ""
                } else {
                    if (b.isArray(bB)) {
                        bB = b.map(bB, function (bC) {
                            return bC == null ? "" : bC + ""
                        })
                    }
                }
            }
            e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
            if (!e || !("set" in e) || e.set(this, bB, "value") === L) {
                this.value = bB
            }
        })
    }});
    b.extend({valHooks: {option: {get: function (e) {
        var bv = e.attributes.value;
        return !bv || bv.specified ? e.value : e.text
    }}, select: {get: function (e) {
        var bA, bv, bz, bx, by = e.selectedIndex, bB = [], bC = e.options, bw = e.type === "select-one";
        if (by < 0) {
            return null
        }
        bv = bw ? by : 0;
        bz = bw ? by + 1 : bC.length;
        for (; bv < bz; bv++) {
            bx = bC[bv];
            if (bx.selected && (b.support.optDisabled ? !bx.disabled : bx.getAttribute("disabled") === null) && (!bx.parentNode.disabled || !b.nodeName(bx.parentNode, "optgroup"))) {
                bA = b(bx).val();
                if (bw) {
                    return bA
                }
                bB.push(bA)
            }
        }
        if (bw && !bB.length && bC.length) {
            return b(bC[by]).val()
        }
        return bB
    }, set: function (bv, bw) {
        var e = b.makeArray(bw);
        b(bv).find("option").each(function () {
            this.selected = b.inArray(b(this).val(), e) >= 0
        });
        if (!e.length) {
            bv.selectedIndex = -1
        }
        return e
    }}}, attrFn: {val: true, css: true, html: true, text: true, data: true, width: true, height: true, offset: true}, attr: function (bA, bx, bB, bz) {
        var bw, e, by, bv = bA.nodeType;
        if (!bA || bv === 3 || bv === 8 || bv === 2) {
            return
        }
        if (bz && bx in b.attrFn) {
            return b(bA)[bx](bB)
        }
        if (typeof bA.getAttribute === "undefined") {
            return b.prop(bA, bx, bB)
        }
        by = bv !== 1 || !b.isXMLDoc(bA);
        if (by) {
            bx = bx.toLowerCase();
            e = b.attrHooks[bx] || (ao.test(bx) ? aZ : bf)
        }
        if (bB !== L) {
            if (bB === null) {
                b.removeAttr(bA, bx);
                return
            } else {
                if (e && "set" in e && by && (bw = e.set(bA, bB, bx)) !== L) {
                    return bw
                } else {
                    bA.setAttribute(bx, "" + bB);
                    return bB
                }
            }
        } else {
            if (e && "get" in e && by && (bw = e.get(bA, bx)) !== null) {
                return bw
            } else {
                bw = bA.getAttribute(bx);
                return bw === null ? L : bw
            }
        }
    }, removeAttr: function (by, bA) {
        var bz, bB, bw, e, bv, bx = 0;
        if (bA && by.nodeType === 1) {
            bB = bA.toLowerCase().split(ag);
            e = bB.length;
            for (; bx < e; bx++) {
                bw = bB[bx];
                if (bw) {
                    bz = b.propFix[bw] || bw;
                    bv = ao.test(bw);
                    if (!bv) {
                        b.attr(by, bw, "")
                    }
                    by.removeAttribute(E ? bw : bz);
                    if (bv && bz in by) {
                        by[bz] = false
                    }
                }
            }
        }
    }, attrHooks: {type: {set: function (e, bv) {
        if (g.test(e.nodeName) && e.parentNode) {
            b.error("type property can't be changed")
        } else {
            if (!b.support.radioValue && bv === "radio" && b.nodeName(e, "input")) {
                var bw = e.value;
                e.setAttribute("type", bv);
                if (bw) {
                    e.value = bw
                }
                return bv
            }
        }
    }}, value: {get: function (bv, e) {
        if (bf && b.nodeName(bv, "button")) {
            return bf.get(bv, e)
        }
        return e in bv ? bv.value : null
    }, set: function (bv, bw, e) {
        if (bf && b.nodeName(bv, "button")) {
            return bf.set(bv, bw, e)
        }
        bv.value = bw
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (bz, bx, bA) {
        var bw, e, by, bv = bz.nodeType;
        if (!bz || bv === 3 || bv === 8 || bv === 2) {
            return
        }
        by = bv !== 1 || !b.isXMLDoc(bz);
        if (by) {
            bx = b.propFix[bx] || bx;
            e = b.propHooks[bx]
        }
        if (bA !== L) {
            if (e && "set" in e && (bw = e.set(bz, bA, bx)) !== L) {
                return bw
            } else {
                return(bz[bx] = bA)
            }
        } else {
            if (e && "get" in e && (bw = e.get(bz, bx)) !== null) {
                return bw
            } else {
                return bz[bx]
            }
        }
    }, propHooks: {tabIndex: {get: function (bv) {
        var e = bv.getAttributeNode("tabindex");
        return e && e.specified ? parseInt(e.value, 10) : C.test(bv.nodeName) || l.test(bv.nodeName) && bv.href ? 0 : L
    }}}});
    b.attrHooks.tabindex = b.propHooks.tabIndex;
    aZ = {get: function (bv, e) {
        var bx, bw = b.prop(bv, e);
        return bw === true || typeof bw !== "boolean" && (bx = bv.getAttributeNode(e)) && bx.nodeValue !== false ? e.toLowerCase() : L
    }, set: function (bv, bx, e) {
        var bw;
        if (bx === false) {
            b.removeAttr(bv, e)
        } else {
            bw = b.propFix[e] || e;
            if (bw in bv) {
                bv[bw] = true
            }
            bv.setAttribute(e, e.toLowerCase())
        }
        return e
    }};
    if (!E) {
        aG = {name: true, id: true, coords: true};
        bf = b.valHooks.button = {get: function (bw, bv) {
            var e;
            e = bw.getAttributeNode(bv);
            return e && (aG[bv] ? e.nodeValue !== "" : e.specified) ? e.nodeValue : L
        }, set: function (bw, bx, bv) {
            var e = bw.getAttributeNode(bv);
            if (!e) {
                e = av.createAttribute(bv);
                bw.setAttributeNode(e)
            }
            return(e.nodeValue = bx + "")
        }};
        b.attrHooks.tabindex.set = bf.set;
        b.each(["width", "height"], function (bv, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {set: function (bw, bx) {
                if (bx === "") {
                    bw.setAttribute(e, "auto");
                    return bx
                }
            }})
        });
        b.attrHooks.contenteditable = {get: bf.get, set: function (bv, bw, e) {
            if (bw === "") {
                bw = "false"
            }
            bf.set(bv, bw, e)
        }}
    }
    if (!b.support.hrefNormalized) {
        b.each(["href", "src", "width", "height"], function (bv, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {get: function (bx) {
                var bw = bx.getAttribute(e, 2);
                return bw === null ? L : bw
            }})
        })
    }
    if (!b.support.style) {
        b.attrHooks.style = {get: function (e) {
            return e.style.cssText.toLowerCase() || L
        }, set: function (e, bv) {
            return(e.style.cssText = "" + bv)
        }}
    }
    if (!b.support.optSelected) {
        b.propHooks.selected = b.extend(b.propHooks.selected, {get: function (bv) {
            var e = bv.parentNode;
            if (e) {
                e.selectedIndex;
                if (e.parentNode) {
                    e.parentNode.selectedIndex
                }
            }
            return null
        }})
    }
    if (!b.support.enctype) {
        b.propFix.enctype = "encoding"
    }
    if (!b.support.checkOn) {
        b.each(["radio", "checkbox"], function () {
            b.valHooks[this] = {get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }}
        })
    }
    b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {set: function (e, bv) {
            if (b.isArray(bv)) {
                return(e.checked = b.inArray(b(e).val(), bv) >= 0)
            }
        }})
    });
    var be = /^(?:textarea|input|select)$/i, n = /^([^\.]*)?(?:\.(.+))?$/, J = /(?:^|\s)hover(\.\S+)?\b/, aP = /^key/, bg = /^(?:mouse|contextmenu)|click/, T = /^(?:focusinfocus|focusoutblur)$/, U = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, Y = function (e) {
        var bv = U.exec(e);
        if (bv) {
            bv[1] = (bv[1] || "").toLowerCase();
            bv[3] = bv[3] && new RegExp("(?:^|\\s)" + bv[3] + "(?:\\s|$)")
        }
        return bv
    }, j = function (bw, e) {
        var bv = bw.attributes || {};
        return((!e[1] || bw.nodeName.toLowerCase() === e[1]) && (!e[2] || (bv.id || {}).value === e[2]) && (!e[3] || e[3].test((bv["class"] || {}).value)))
    }, bt = function (e) {
        return b.event.special.hover ? e : e.replace(J, "mouseenter$1 mouseleave$1")
    };
    b.event = {add: function (bx, bC, bJ, bA, by) {
        var bD, bB, bK, bI, bH, bF, e, bG, bv, bz, bw, bE;
        if (bx.nodeType === 3 || bx.nodeType === 8 || !bC || !bJ || !(bD = b._data(bx))) {
            return
        }
        if (bJ.handler) {
            bv = bJ;
            bJ = bv.handler;
            by = bv.selector
        }
        if (!bJ.guid) {
            bJ.guid = b.guid++
        }
        bK = bD.events;
        if (!bK) {
            bD.events = bK = {}
        }
        bB = bD.handle;
        if (!bB) {
            bD.handle = bB = function (bL) {
                return typeof b !== "undefined" && (!bL || b.event.triggered !== bL.type) ? b.event.dispatch.apply(bB.elem, arguments) : L
            };
            bB.elem = bx
        }
        bC = b.trim(bt(bC)).split(" ");
        for (bI = 0; bI < bC.length; bI++) {
            bH = n.exec(bC[bI]) || [];
            bF = bH[1];
            e = (bH[2] || "").split(".").sort();
            bE = b.event.special[bF] || {};
            bF = (by ? bE.delegateType : bE.bindType) || bF;
            bE = b.event.special[bF] || {};
            bG = b.extend({type: bF, origType: bH[1], data: bA, handler: bJ, guid: bJ.guid, selector: by, quick: by && Y(by), namespace: e.join(".")}, bv);
            bw = bK[bF];
            if (!bw) {
                bw = bK[bF] = [];
                bw.delegateCount = 0;
                if (!bE.setup || bE.setup.call(bx, bA, e, bB) === false) {
                    if (bx.addEventListener) {
                        bx.addEventListener(bF, bB, false)
                    } else {
                        if (bx.attachEvent) {
                            bx.attachEvent("on" + bF, bB)
                        }
                    }
                }
            }
            if (bE.add) {
                bE.add.call(bx, bG);
                if (!bG.handler.guid) {
                    bG.handler.guid = bJ.guid
                }
            }
            if (by) {
                bw.splice(bw.delegateCount++, 0, bG)
            } else {
                bw.push(bG)
            }
            b.event.global[bF] = true
        }
        bx = null
    }, global: {}, remove: function (bJ, bE, bv, bH, bB) {
        var bI = b.hasData(bJ) && b._data(bJ), bF, bx, bz, bL, bC, bA, bG, bw, by, bK, bD, e;
        if (!bI || !(bw = bI.events)) {
            return
        }
        bE = b.trim(bt(bE || "")).split(" ");
        for (bF = 0; bF < bE.length; bF++) {
            bx = n.exec(bE[bF]) || [];
            bz = bL = bx[1];
            bC = bx[2];
            if (!bz) {
                for (bz in bw) {
                    b.event.remove(bJ, bz + bE[bF], bv, bH, true)
                }
                continue
            }
            by = b.event.special[bz] || {};
            bz = (bH ? by.delegateType : by.bindType) || bz;
            bD = bw[bz] || [];
            bA = bD.length;
            bC = bC ? new RegExp("(^|\\.)" + bC.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
            for (bG = 0; bG < bD.length; bG++) {
                e = bD[bG];
                if ((bB || bL === e.origType) && (!bv || bv.guid === e.guid) && (!bC || bC.test(e.namespace)) && (!bH || bH === e.selector || bH === "**" && e.selector)) {
                    bD.splice(bG--, 1);
                    if (e.selector) {
                        bD.delegateCount--
                    }
                    if (by.remove) {
                        by.remove.call(bJ, e)
                    }
                }
            }
            if (bD.length === 0 && bA !== bD.length) {
                if (!by.teardown || by.teardown.call(bJ, bC) === false) {
                    b.removeEvent(bJ, bz, bI.handle)
                }
                delete bw[bz]
            }
        }
        if (b.isEmptyObject(bw)) {
            bK = bI.handle;
            if (bK) {
                bK.elem = null
            }
            b.removeData(bJ, ["events", "handle"], true)
        }
    }, customEvent: {getData: true, setData: true, changeData: true}, trigger: function (bv, bD, bA, bJ) {
        if (bA && (bA.nodeType === 3 || bA.nodeType === 8)) {
            return
        }
        var bG = bv.type || bv, bx = [], e, bw, bC, bH, bz, by, bF, bE, bB, bI;
        if (T.test(bG + b.event.triggered)) {
            return
        }
        if (bG.indexOf("!") >= 0) {
            bG = bG.slice(0, -1);
            bw = true
        }
        if (bG.indexOf(".") >= 0) {
            bx = bG.split(".");
            bG = bx.shift();
            bx.sort()
        }
        if ((!bA || b.event.customEvent[bG]) && !b.event.global[bG]) {
            return
        }
        bv = typeof bv === "object" ? bv[b.expando] ? bv : new b.Event(bG, bv) : new b.Event(bG);
        bv.type = bG;
        bv.isTrigger = true;
        bv.exclusive = bw;
        bv.namespace = bx.join(".");
        bv.namespace_re = bv.namespace ? new RegExp("(^|\\.)" + bx.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
        by = bG.indexOf(":") < 0 ? "on" + bG : "";
        if (!bA) {
            e = b.cache;
            for (bC in e) {
                if (e[bC].events && e[bC].events[bG]) {
                    b.event.trigger(bv, bD, e[bC].handle.elem, true)
                }
            }
            return
        }
        bv.result = L;
        if (!bv.target) {
            bv.target = bA
        }
        bD = bD != null ? b.makeArray(bD) : [];
        bD.unshift(bv);
        bF = b.event.special[bG] || {};
        if (bF.trigger && bF.trigger.apply(bA, bD) === false) {
            return
        }
        bB = [
            [bA, bF.bindType || bG]
        ];
        if (!bJ && !bF.noBubble && !b.isWindow(bA)) {
            bI = bF.delegateType || bG;
            bH = T.test(bI + bG) ? bA : bA.parentNode;
            bz = null;
            for (; bH; bH = bH.parentNode) {
                bB.push([bH, bI]);
                bz = bH
            }
            if (bz && bz === bA.ownerDocument) {
                bB.push([bz.defaultView || bz.parentWindow || bd, bI])
            }
        }
        for (bC = 0; bC < bB.length && !bv.isPropagationStopped(); bC++) {
            bH = bB[bC][0];
            bv.type = bB[bC][1];
            bE = (b._data(bH, "events") || {})[bv.type] && b._data(bH, "handle");
            if (bE) {
                bE.apply(bH, bD)
            }
            bE = by && bH[by];
            if (bE && b.acceptData(bH) && bE.apply(bH, bD) === false) {
                bv.preventDefault()
            }
        }
        bv.type = bG;
        if (!bJ && !bv.isDefaultPrevented()) {
            if ((!bF._default || bF._default.apply(bA.ownerDocument, bD) === false) && !(bG === "click" && b.nodeName(bA, "a")) && b.acceptData(bA)) {
                if (by && bA[bG] && ((bG !== "focus" && bG !== "blur") || bv.target.offsetWidth !== 0) && !b.isWindow(bA)) {
                    bz = bA[by];
                    if (bz) {
                        bA[by] = null
                    }
                    b.event.triggered = bG;
                    bA[bG]();
                    b.event.triggered = L;
                    if (bz) {
                        bA[by] = bz
                    }
                }
            }
        }
        return bv.result
    }, dispatch: function (bH) {
        bH = b.event.fix(bH || bd.event);
        var bD = ((b._data(this, "events") || {})[bH.type] || []), bC = bD.delegateCount, bx = [].slice.call(arguments, 0), bE = !bH.exclusive && !bH.namespace, bz = b.event.special[bH.type] || {}, bv = [], bJ, bG, by, bA, bK, bI, bB, bw, e, bF, bL;
        bx[0] = bH;
        bH.delegateTarget = this;
        if (bz.preDispatch && bz.preDispatch.call(this, bH) === false) {
            return
        }
        if (bC && !(bH.button && bH.type === "click")) {
            bA = b(this);
            bA.context = this.ownerDocument || this;
            for (by = bH.target; by != this; by = by.parentNode || this) {
                if (by.disabled !== true) {
                    bI = {};
                    bw = [];
                    bA[0] = by;
                    for (bJ = 0; bJ < bC; bJ++) {
                        e = bD[bJ];
                        bF = e.selector;
                        if (bI[bF] === L) {
                            bI[bF] = (e.quick ? j(by, e.quick) : bA.is(bF))
                        }
                        if (bI[bF]) {
                            bw.push(e)
                        }
                    }
                    if (bw.length) {
                        bv.push({elem: by, matches: bw})
                    }
                }
            }
        }
        if (bD.length > bC) {
            bv.push({elem: this, matches: bD.slice(bC)})
        }
        for (bJ = 0; bJ < bv.length && !bH.isPropagationStopped(); bJ++) {
            bB = bv[bJ];
            bH.currentTarget = bB.elem;
            for (bG = 0; bG < bB.matches.length && !bH.isImmediatePropagationStopped(); bG++) {
                e = bB.matches[bG];
                if (bE || (!bH.namespace && !e.namespace) || bH.namespace_re && bH.namespace_re.test(e.namespace)) {
                    bH.data = e.data;
                    bH.handleObj = e;
                    bK = ((b.event.special[e.origType] || {}).handle || e.handler).apply(bB.elem, bx);
                    if (bK !== L) {
                        bH.result = bK;
                        if (bK === false) {
                            bH.preventDefault();
                            bH.stopPropagation()
                        }
                    }
                }
            }
        }
        if (bz.postDispatch) {
            bz.postDispatch.call(this, bH)
        }
        return bH.result
    }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (bv, e) {
        if (bv.which == null) {
            bv.which = e.charCode != null ? e.charCode : e.keyCode
        }
        return bv
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (bx, bw) {
        var by, bz, e, bv = bw.button, bA = bw.fromElement;
        if (bx.pageX == null && bw.clientX != null) {
            by = bx.target.ownerDocument || av;
            bz = by.documentElement;
            e = by.body;
            bx.pageX = bw.clientX + (bz && bz.scrollLeft || e && e.scrollLeft || 0) - (bz && bz.clientLeft || e && e.clientLeft || 0);
            bx.pageY = bw.clientY + (bz && bz.scrollTop || e && e.scrollTop || 0) - (bz && bz.clientTop || e && e.clientTop || 0)
        }
        if (!bx.relatedTarget && bA) {
            bx.relatedTarget = bA === bx.target ? bw.toElement : bA
        }
        if (!bx.which && bv !== L) {
            bx.which = (bv & 1 ? 1 : (bv & 2 ? 3 : (bv & 4 ? 2 : 0)))
        }
        return bx
    }}, fix: function (bw) {
        if (bw[b.expando]) {
            return bw
        }
        var bv, bz, e = bw, bx = b.event.fixHooks[bw.type] || {}, by = bx.props ? this.props.concat(bx.props) : this.props;
        bw = b.Event(e);
        for (bv = by.length; bv;) {
            bz = by[--bv];
            bw[bz] = e[bz]
        }
        if (!bw.target) {
            bw.target = e.srcElement || av
        }
        if (bw.target.nodeType === 3) {
            bw.target = bw.target.parentNode
        }
        if (bw.metaKey === L) {
            bw.metaKey = bw.ctrlKey
        }
        return bx.filter ? bx.filter(bw, e) : bw
    }, special: {ready: {setup: b.bindReady}, load: {noBubble: true}, focus: {delegateType: "focusin"}, blur: {delegateType: "focusout"}, beforeunload: {setup: function (bw, bv, e) {
        if (b.isWindow(this)) {
            this.onbeforeunload = e
        }
    }, teardown: function (bv, e) {
        if (this.onbeforeunload === e) {
            this.onbeforeunload = null
        }
    }}}, simulate: function (bw, by, bx, bv) {
        var bz = b.extend(new b.Event(), bx, {type: bw, isSimulated: true, originalEvent: {}});
        if (bv) {
            b.event.trigger(bz, null, by)
        } else {
            b.event.dispatch.call(by, bz)
        }
        if (bz.isDefaultPrevented()) {
            bx.preventDefault()
        }
    }};
    b.event.handle = b.event.dispatch;
    b.removeEvent = av.removeEventListener ? function (bv, e, bw) {
        if (bv.removeEventListener) {
            bv.removeEventListener(e, bw, false)
        }
    } : function (bv, e, bw) {
        if (bv.detachEvent) {
            bv.detachEvent("on" + e, bw)
        }
    };
    b.Event = function (bv, e) {
        if (!(this instanceof b.Event)) {
            return new b.Event(bv, e)
        }
        if (bv && bv.type) {
            this.originalEvent = bv;
            this.type = bv.type;
            this.isDefaultPrevented = (bv.defaultPrevented || bv.returnValue === false || bv.getPreventDefault && bv.getPreventDefault()) ? i : bl
        } else {
            this.type = bv
        }
        if (e) {
            b.extend(this, e)
        }
        this.timeStamp = bv && bv.timeStamp || b.now();
        this[b.expando] = true
    };
    function bl() {
        return false
    }

    function i() {
        return true
    }

    b.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = i;
        var bv = this.originalEvent;
        if (!bv) {
            return
        }
        if (bv.preventDefault) {
            bv.preventDefault()
        } else {
            bv.returnValue = false
        }
    }, stopPropagation: function () {
        this.isPropagationStopped = i;
        var bv = this.originalEvent;
        if (!bv) {
            return
        }
        if (bv.stopPropagation) {
            bv.stopPropagation()
        }
        bv.cancelBubble = true
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = i;
        this.stopPropagation()
    }, isDefaultPrevented: bl, isPropagationStopped: bl, isImmediatePropagationStopped: bl};
    b.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (bv, e) {
        b.event.special[bv] = {delegateType: e, bindType: e, handle: function (bz) {
            var bB = this, bA = bz.relatedTarget, by = bz.handleObj, bw = by.selector, bx;
            if (!bA || (bA !== bB && !b.contains(bB, bA))) {
                bz.type = by.origType;
                bx = by.handler.apply(this, arguments);
                bz.type = e
            }
            return bx
        }}
    });
    if (!b.support.submitBubbles) {
        b.event.special.submit = {setup: function () {
            if (b.nodeName(this, "form")) {
                return false
            }
            b.event.add(this, "click._submit keypress._submit", function (bx) {
                var bw = bx.target, bv = b.nodeName(bw, "input") || b.nodeName(bw, "button") ? bw.form : L;
                if (bv && !bv._submit_attached) {
                    b.event.add(bv, "submit._submit", function (e) {
                        e._submit_bubble = true
                    });
                    bv._submit_attached = true
                }
            })
        }, postDispatch: function (e) {
            if (e._submit_bubble) {
                delete e._submit_bubble;
                if (this.parentNode && !e.isTrigger) {
                    b.event.simulate("submit", this.parentNode, e, true)
                }
            }
        }, teardown: function () {
            if (b.nodeName(this, "form")) {
                return false
            }
            b.event.remove(this, "._submit")
        }}
    }
    if (!b.support.changeBubbles) {
        b.event.special.change = {setup: function () {
            if (be.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    b.event.add(this, "propertychange._change", function (e) {
                        if (e.originalEvent.propertyName === "checked") {
                            this._just_changed = true
                        }
                    });
                    b.event.add(this, "click._change", function (e) {
                        if (this._just_changed && !e.isTrigger) {
                            this._just_changed = false;
                            b.event.simulate("change", this, e, true)
                        }
                    })
                }
                return false
            }
            b.event.add(this, "beforeactivate._change", function (bw) {
                var bv = bw.target;
                if (be.test(bv.nodeName) && !bv._change_attached) {
                    b.event.add(bv, "change._change", function (e) {
                        if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                            b.event.simulate("change", this.parentNode, e, true)
                        }
                    });
                    bv._change_attached = true
                }
            })
        }, handle: function (bv) {
            var e = bv.target;
            if (this !== e || bv.isSimulated || bv.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                return bv.handleObj.handler.apply(this, arguments)
            }
        }, teardown: function () {
            b.event.remove(this, "._change");
            return be.test(this.nodeName)
        }}
    }
    if (!b.support.focusinBubbles) {
        b.each({focus: "focusin", blur: "focusout"}, function (bx, e) {
            var bv = 0, bw = function (by) {
                b.event.simulate(e, by.target, b.event.fix(by), true)
            };
            b.event.special[e] = {setup: function () {
                if (bv++ === 0) {
                    av.addEventListener(bx, bw, true)
                }
            }, teardown: function () {
                if (--bv === 0) {
                    av.removeEventListener(bx, bw, true)
                }
            }}
        })
    }
    b.fn.extend({on: function (bw, e, bz, by, bv) {
        var bA, bx;
        if (typeof bw === "object") {
            if (typeof e !== "string") {
                bz = bz || e;
                e = L
            }
            for (bx in bw) {
                this.on(bx, e, bz, bw[bx], bv)
            }
            return this
        }
        if (bz == null && by == null) {
            by = e;
            bz = e = L
        } else {
            if (by == null) {
                if (typeof e === "string") {
                    by = bz;
                    bz = L
                } else {
                    by = bz;
                    bz = e;
                    e = L
                }
            }
        }
        if (by === false) {
            by = bl
        } else {
            if (!by) {
                return this
            }
        }
        if (bv === 1) {
            bA = by;
            by = function (bB) {
                b().off(bB);
                return bA.apply(this, arguments)
            };
            by.guid = bA.guid || (bA.guid = b.guid++)
        }
        return this.each(function () {
            b.event.add(this, bw, by, bz, e)
        })
    }, one: function (bv, e, bx, bw) {
        return this.on(bv, e, bx, bw, 1)
    }, off: function (bw, e, by) {
        if (bw && bw.preventDefault && bw.handleObj) {
            var bv = bw.handleObj;
            b(bw.delegateTarget).off(bv.namespace ? bv.origType + "." + bv.namespace : bv.origType, bv.selector, bv.handler);
            return this
        }
        if (typeof bw === "object") {
            for (var bx in bw) {
                this.off(bx, e, bw[bx])
            }
            return this
        }
        if (e === false || typeof e === "function") {
            by = e;
            e = L
        }
        if (by === false) {
            by = bl
        }
        return this.each(function () {
            b.event.remove(this, bw, by, e)
        })
    }, bind: function (e, bw, bv) {
        return this.on(e, null, bw, bv)
    }, unbind: function (e, bv) {
        return this.off(e, null, bv)
    }, live: function (e, bw, bv) {
        b(this.context).on(e, this.selector, bw, bv);
        return this
    }, die: function (e, bv) {
        b(this.context).off(e, this.selector || "**", bv);
        return this
    }, delegate: function (e, bv, bx, bw) {
        return this.on(bv, e, bx, bw)
    }, undelegate: function (e, bv, bw) {
        return arguments.length == 1 ? this.off(e, "**") : this.off(bv, e, bw)
    }, trigger: function (e, bv) {
        return this.each(function () {
            b.event.trigger(e, bv, this)
        })
    }, triggerHandler: function (e, bv) {
        if (this[0]) {
            return b.event.trigger(e, bv, this[0], true)
        }
    }, toggle: function (bx) {
        var bv = arguments, e = bx.guid || b.guid++, bw = 0, by = function (bz) {
            var bA = (b._data(this, "lastToggle" + bx.guid) || 0) % bw;
            b._data(this, "lastToggle" + bx.guid, bA + 1);
            bz.preventDefault();
            return bv[bA].apply(this, arguments) || false
        };
        by.guid = e;
        while (bw < bv.length) {
            bv[bw++].guid = e
        }
        return this.click(by)
    }, hover: function (e, bv) {
        return this.mouseenter(e).mouseleave(bv || e)
    }});
    b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (bv, e) {
        b.fn[e] = function (bx, bw) {
            if (bw == null) {
                bw = bx;
                bx = null
            }
            return arguments.length > 0 ? this.on(e, null, bx, bw) : this.trigger(e)
        };
        if (b.attrFn) {
            b.attrFn[e] = true
        }
        if (aP.test(e)) {
            b.event.fixHooks[e] = b.event.keyHooks
        }
        if (bg.test(e)) {
            b.event.fixHooks[e] = b.event.mouseHooks
        }
    });
    /*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */
    (function () {
        var bH = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, bC = "sizcache" + (Math.random() + "").replace(".", ""), bI = 0, bL = Object.prototype.toString, bB = false, bA = true, bK = /\\/g, bO = /\r\n/g, bQ = /\W/;
        [0, 0].sort(function () {
            bA = false;
            return 0
        });
        var by = function (bV, e, bY, bZ) {
            bY = bY || [];
            e = e || av;
            var b1 = e;
            if (e.nodeType !== 1 && e.nodeType !== 9) {
                return[]
            }
            if (!bV || typeof bV !== "string") {
                return bY
            }
            var bS, b3, b6, bR, b2, b5, b4, bX, bU = true, bT = by.isXML(e), bW = [], b0 = bV;
            do {
                bH.exec("");
                bS = bH.exec(b0);
                if (bS) {
                    b0 = bS[3];
                    bW.push(bS[1]);
                    if (bS[2]) {
                        bR = bS[3];
                        break
                    }
                }
            } while (bS);
            if (bW.length > 1 && bD.exec(bV)) {
                if (bW.length === 2 && bE.relative[bW[0]]) {
                    b3 = bM(bW[0] + bW[1], e, bZ)
                } else {
                    b3 = bE.relative[bW[0]] ? [e] : by(bW.shift(), e);
                    while (bW.length) {
                        bV = bW.shift();
                        if (bE.relative[bV]) {
                            bV += bW.shift()
                        }
                        b3 = bM(bV, b3, bZ)
                    }
                }
            } else {
                if (!bZ && bW.length > 1 && e.nodeType === 9 && !bT && bE.match.ID.test(bW[0]) && !bE.match.ID.test(bW[bW.length - 1])) {
                    b2 = by.find(bW.shift(), e, bT);
                    e = b2.expr ? by.filter(b2.expr, b2.set)[0] : b2.set[0]
                }
                if (e) {
                    b2 = bZ ? {expr: bW.pop(), set: bF(bZ)} : by.find(bW.pop(), bW.length === 1 && (bW[0] === "~" || bW[0] === "+") && e.parentNode ? e.parentNode : e, bT);
                    b3 = b2.expr ? by.filter(b2.expr, b2.set) : b2.set;
                    if (bW.length > 0) {
                        b6 = bF(b3)
                    } else {
                        bU = false
                    }
                    while (bW.length) {
                        b5 = bW.pop();
                        b4 = b5;
                        if (!bE.relative[b5]) {
                            b5 = ""
                        } else {
                            b4 = bW.pop()
                        }
                        if (b4 == null) {
                            b4 = e
                        }
                        bE.relative[b5](b6, b4, bT)
                    }
                } else {
                    b6 = bW = []
                }
            }
            if (!b6) {
                b6 = b3
            }
            if (!b6) {
                by.error(b5 || bV)
            }
            if (bL.call(b6) === "[object Array]") {
                if (!bU) {
                    bY.push.apply(bY, b6)
                } else {
                    if (e && e.nodeType === 1) {
                        for (bX = 0; b6[bX] != null; bX++) {
                            if (b6[bX] && (b6[bX] === true || b6[bX].nodeType === 1 && by.contains(e, b6[bX]))) {
                                bY.push(b3[bX])
                            }
                        }
                    } else {
                        for (bX = 0; b6[bX] != null; bX++) {
                            if (b6[bX] && b6[bX].nodeType === 1) {
                                bY.push(b3[bX])
                            }
                        }
                    }
                }
            } else {
                bF(b6, bY)
            }
            if (bR) {
                by(bR, b1, bY, bZ);
                by.uniqueSort(bY)
            }
            return bY
        };
        by.uniqueSort = function (bR) {
            if (bJ) {
                bB = bA;
                bR.sort(bJ);
                if (bB) {
                    for (var e = 1; e < bR.length; e++) {
                        if (bR[e] === bR[e - 1]) {
                            bR.splice(e--, 1)
                        }
                    }
                }
            }
            return bR
        };
        by.matches = function (e, bR) {
            return by(e, null, null, bR)
        };
        by.matchesSelector = function (e, bR) {
            return by(bR, null, null, [e]).length > 0
        };
        by.find = function (bX, e, bY) {
            var bW, bS, bU, bT, bV, bR;
            if (!bX) {
                return[]
            }
            for (bS = 0, bU = bE.order.length; bS < bU; bS++) {
                bV = bE.order[bS];
                if ((bT = bE.leftMatch[bV].exec(bX))) {
                    bR = bT[1];
                    bT.splice(1, 1);
                    if (bR.substr(bR.length - 1) !== "\\") {
                        bT[1] = (bT[1] || "").replace(bK, "");
                        bW = bE.find[bV](bT, e, bY);
                        if (bW != null) {
                            bX = bX.replace(bE.match[bV], "");
                            break
                        }
                    }
                }
            }
            if (!bW) {
                bW = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
            }
            return{set: bW, expr: bX}
        };
        by.filter = function (b1, b0, b4, bU) {
            var bW, e, bZ, b6, b3, bR, bT, bV, b2, bS = b1, b5 = [], bY = b0, bX = b0 && b0[0] && by.isXML(b0[0]);
            while (b1 && b0.length) {
                for (bZ in bE.filter) {
                    if ((bW = bE.leftMatch[bZ].exec(b1)) != null && bW[2]) {
                        bR = bE.filter[bZ];
                        bT = bW[1];
                        e = false;
                        bW.splice(1, 1);
                        if (bT.substr(bT.length - 1) === "\\") {
                            continue
                        }
                        if (bY === b5) {
                            b5 = []
                        }
                        if (bE.preFilter[bZ]) {
                            bW = bE.preFilter[bZ](bW, bY, b4, b5, bU, bX);
                            if (!bW) {
                                e = b6 = true
                            } else {
                                if (bW === true) {
                                    continue
                                }
                            }
                        }
                        if (bW) {
                            for (bV = 0; (b3 = bY[bV]) != null; bV++) {
                                if (b3) {
                                    b6 = bR(b3, bW, bV, bY);
                                    b2 = bU ^ b6;
                                    if (b4 && b6 != null) {
                                        if (b2) {
                                            e = true
                                        } else {
                                            bY[bV] = false
                                        }
                                    } else {
                                        if (b2) {
                                            b5.push(b3);
                                            e = true
                                        }
                                    }
                                }
                            }
                        }
                        if (b6 !== L) {
                            if (!b4) {
                                bY = b5
                            }
                            b1 = b1.replace(bE.match[bZ], "");
                            if (!e) {
                                return[]
                            }
                            break
                        }
                    }
                }
                if (b1 === bS) {
                    if (e == null) {
                        by.error(b1)
                    } else {
                        break
                    }
                }
                bS = b1
            }
            return bY
        };
        by.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var bw = by.getText = function (bU) {
            var bS, bT, e = bU.nodeType, bR = "";
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof bU.textContent === "string") {
                        return bU.textContent
                    } else {
                        if (typeof bU.innerText === "string") {
                            return bU.innerText.replace(bO, "")
                        } else {
                            for (bU = bU.firstChild; bU; bU = bU.nextSibling) {
                                bR += bw(bU)
                            }
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return bU.nodeValue
                    }
                }
            } else {
                for (bS = 0; (bT = bU[bS]); bS++) {
                    if (bT.nodeType !== 8) {
                        bR += bw(bT)
                    }
                }
            }
            return bR
        };
        var bE = by.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (e) {
            return e.getAttribute("href")
        }, type: function (e) {
            return e.getAttribute("type")
        }}, relative: {"+": function (bW, bR) {
            var bT = typeof bR === "string", bV = bT && !bQ.test(bR), bX = bT && !bV;
            if (bV) {
                bR = bR.toLowerCase()
            }
            for (var bS = 0, e = bW.length, bU; bS < e; bS++) {
                if ((bU = bW[bS])) {
                    while ((bU = bU.previousSibling) && bU.nodeType !== 1) {
                    }
                    bW[bS] = bX || bU && bU.nodeName.toLowerCase() === bR ? bU || false : bU === bR
                }
            }
            if (bX) {
                by.filter(bR, bW, true)
            }
        }, ">": function (bW, bR) {
            var bV, bU = typeof bR === "string", bS = 0, e = bW.length;
            if (bU && !bQ.test(bR)) {
                bR = bR.toLowerCase();
                for (; bS < e; bS++) {
                    bV = bW[bS];
                    if (bV) {
                        var bT = bV.parentNode;
                        bW[bS] = bT.nodeName.toLowerCase() === bR ? bT : false
                    }
                }
            } else {
                for (; bS < e; bS++) {
                    bV = bW[bS];
                    if (bV) {
                        bW[bS] = bU ? bV.parentNode : bV.parentNode === bR
                    }
                }
                if (bU) {
                    by.filter(bR, bW, true)
                }
            }
        }, "": function (bT, bR, bV) {
            var bU, bS = bI++, e = bN;
            if (typeof bR === "string" && !bQ.test(bR)) {
                bR = bR.toLowerCase();
                bU = bR;
                e = bv
            }
            e("parentNode", bR, bS, bT, bU, bV)
        }, "~": function (bT, bR, bV) {
            var bU, bS = bI++, e = bN;
            if (typeof bR === "string" && !bQ.test(bR)) {
                bR = bR.toLowerCase();
                bU = bR;
                e = bv
            }
            e("previousSibling", bR, bS, bT, bU, bV)
        }}, find: {ID: function (bR, bS, bT) {
            if (typeof bS.getElementById !== "undefined" && !bT) {
                var e = bS.getElementById(bR[1]);
                return e && e.parentNode ? [e] : []
            }
        }, NAME: function (bS, bV) {
            if (typeof bV.getElementsByName !== "undefined") {
                var bR = [], bU = bV.getElementsByName(bS[1]);
                for (var bT = 0, e = bU.length; bT < e; bT++) {
                    if (bU[bT].getAttribute("name") === bS[1]) {
                        bR.push(bU[bT])
                    }
                }
                return bR.length === 0 ? null : bR
            }
        }, TAG: function (e, bR) {
            if (typeof bR.getElementsByTagName !== "undefined") {
                return bR.getElementsByTagName(e[1])
            }
        }}, preFilter: {CLASS: function (bT, bR, bS, e, bW, bX) {
            bT = " " + bT[1].replace(bK, "") + " ";
            if (bX) {
                return bT
            }
            for (var bU = 0, bV; (bV = bR[bU]) != null; bU++) {
                if (bV) {
                    if (bW ^ (bV.className && (" " + bV.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bT) >= 0)) {
                        if (!bS) {
                            e.push(bV)
                        }
                    } else {
                        if (bS) {
                            bR[bU] = false
                        }
                    }
                }
            }
            return false
        }, ID: function (e) {
            return e[1].replace(bK, "")
        }, TAG: function (bR, e) {
            return bR[1].replace(bK, "").toLowerCase()
        }, CHILD: function (e) {
            if (e[1] === "nth") {
                if (!e[2]) {
                    by.error(e[0])
                }
                e[2] = e[2].replace(/^\+|\s*/g, "");
                var bR = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                e[2] = (bR[1] + (bR[2] || 1)) - 0;
                e[3] = bR[3] - 0
            } else {
                if (e[2]) {
                    by.error(e[0])
                }
            }
            e[0] = bI++;
            return e
        }, ATTR: function (bU, bR, bS, e, bV, bW) {
            var bT = bU[1] = bU[1].replace(bK, "");
            if (!bW && bE.attrMap[bT]) {
                bU[1] = bE.attrMap[bT]
            }
            bU[4] = (bU[4] || bU[5] || "").replace(bK, "");
            if (bU[2] === "~=") {
                bU[4] = " " + bU[4] + " "
            }
            return bU
        }, PSEUDO: function (bU, bR, bS, e, bV) {
            if (bU[1] === "not") {
                if ((bH.exec(bU[3]) || "").length > 1 || /^\w/.test(bU[3])) {
                    bU[3] = by(bU[3], null, null, bR)
                } else {
                    var bT = by.filter(bU[3], bR, bS, true ^ bV);
                    if (!bS) {
                        e.push.apply(e, bT)
                    }
                    return false
                }
            } else {
                if (bE.match.POS.test(bU[0]) || bE.match.CHILD.test(bU[0])) {
                    return true
                }
            }
            return bU
        }, POS: function (e) {
            e.unshift(true);
            return e
        }}, filters: {enabled: function (e) {
            return e.disabled === false && e.type !== "hidden"
        }, disabled: function (e) {
            return e.disabled === true
        }, checked: function (e) {
            return e.checked === true
        }, selected: function (e) {
            if (e.parentNode) {
                e.parentNode.selectedIndex
            }
            return e.selected === true
        }, parent: function (e) {
            return !!e.firstChild
        }, empty: function (e) {
            return !e.firstChild
        }, has: function (bS, bR, e) {
            return !!by(e[3], bS).length
        }, header: function (e) {
            return(/h\d/i).test(e.nodeName)
        }, text: function (bS) {
            var e = bS.getAttribute("type"), bR = bS.type;
            return bS.nodeName.toLowerCase() === "input" && "text" === bR && (e === bR || e === null)
        }, radio: function (e) {
            return e.nodeName.toLowerCase() === "input" && "radio" === e.type
        }, checkbox: function (e) {
            return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
        }, file: function (e) {
            return e.nodeName.toLowerCase() === "input" && "file" === e.type
        }, password: function (e) {
            return e.nodeName.toLowerCase() === "input" && "password" === e.type
        }, submit: function (bR) {
            var e = bR.nodeName.toLowerCase();
            return(e === "input" || e === "button") && "submit" === bR.type
        }, image: function (e) {
            return e.nodeName.toLowerCase() === "input" && "image" === e.type
        }, reset: function (bR) {
            var e = bR.nodeName.toLowerCase();
            return(e === "input" || e === "button") && "reset" === bR.type
        }, button: function (bR) {
            var e = bR.nodeName.toLowerCase();
            return e === "input" && "button" === bR.type || e === "button"
        }, input: function (e) {
            return(/input|select|textarea|button/i).test(e.nodeName)
        }, focus: function (e) {
            return e === e.ownerDocument.activeElement
        }}, setFilters: {first: function (bR, e) {
            return e === 0
        }, last: function (bS, bR, e, bT) {
            return bR === bT.length - 1
        }, even: function (bR, e) {
            return e % 2 === 0
        }, odd: function (bR, e) {
            return e % 2 === 1
        }, lt: function (bS, bR, e) {
            return bR < e[3] - 0
        }, gt: function (bS, bR, e) {
            return bR > e[3] - 0
        }, nth: function (bS, bR, e) {
            return e[3] - 0 === bR
        }, eq: function (bS, bR, e) {
            return e[3] - 0 === bR
        }}, filter: {PSEUDO: function (bS, bX, bW, bY) {
            var e = bX[1], bR = bE.filters[e];
            if (bR) {
                return bR(bS, bW, bX, bY)
            } else {
                if (e === "contains") {
                    return(bS.textContent || bS.innerText || bw([bS]) || "").indexOf(bX[3]) >= 0
                } else {
                    if (e === "not") {
                        var bT = bX[3];
                        for (var bV = 0, bU = bT.length; bV < bU; bV++) {
                            if (bT[bV] === bS) {
                                return false
                            }
                        }
                        return true
                    } else {
                        by.error(e)
                    }
                }
            }
        }, CHILD: function (bS, bU) {
            var bT, b0, bW, bZ, e, bV, bY, bX = bU[1], bR = bS;
            switch (bX) {
                case"only":
                case"first":
                    while ((bR = bR.previousSibling)) {
                        if (bR.nodeType === 1) {
                            return false
                        }
                    }
                    if (bX === "first") {
                        return true
                    }
                    bR = bS;
                case"last":
                    while ((bR = bR.nextSibling)) {
                        if (bR.nodeType === 1) {
                            return false
                        }
                    }
                    return true;
                case"nth":
                    bT = bU[2];
                    b0 = bU[3];
                    if (bT === 1 && b0 === 0) {
                        return true
                    }
                    bW = bU[0];
                    bZ = bS.parentNode;
                    if (bZ && (bZ[bC] !== bW || !bS.nodeIndex)) {
                        bV = 0;
                        for (bR = bZ.firstChild; bR; bR = bR.nextSibling) {
                            if (bR.nodeType === 1) {
                                bR.nodeIndex = ++bV
                            }
                        }
                        bZ[bC] = bW
                    }
                    bY = bS.nodeIndex - b0;
                    if (bT === 0) {
                        return bY === 0
                    } else {
                        return(bY % bT === 0 && bY / bT >= 0)
                    }
            }
        }, ID: function (bR, e) {
            return bR.nodeType === 1 && bR.getAttribute("id") === e
        }, TAG: function (bR, e) {
            return(e === "*" && bR.nodeType === 1) || !!bR.nodeName && bR.nodeName.toLowerCase() === e
        }, CLASS: function (bR, e) {
            return(" " + (bR.className || bR.getAttribute("class")) + " ").indexOf(e) > -1
        }, ATTR: function (bV, bT) {
            var bS = bT[1], e = by.attr ? by.attr(bV, bS) : bE.attrHandle[bS] ? bE.attrHandle[bS](bV) : bV[bS] != null ? bV[bS] : bV.getAttribute(bS), bW = e + "", bU = bT[2], bR = bT[4];
            return e == null ? bU === "!=" : !bU && by.attr ? e != null : bU === "=" ? bW === bR : bU === "*=" ? bW.indexOf(bR) >= 0 : bU === "~=" ? (" " + bW + " ").indexOf(bR) >= 0 : !bR ? bW && e !== false : bU === "!=" ? bW !== bR : bU === "^=" ? bW.indexOf(bR) === 0 : bU === "$=" ? bW.substr(bW.length - bR.length) === bR : bU === "|=" ? bW === bR || bW.substr(0, bR.length + 1) === bR + "-" : false
        }, POS: function (bU, bR, bS, bV) {
            var e = bR[2], bT = bE.setFilters[e];
            if (bT) {
                return bT(bU, bS, bR, bV)
            }
        }}};
        var bD = bE.match.POS, bx = function (bR, e) {
            return"\\" + (e - 0 + 1)
        };
        for (var bz in bE.match) {
            bE.match[bz] = new RegExp(bE.match[bz].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            bE.leftMatch[bz] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bE.match[bz].source.replace(/\\(\d+)/g, bx))
        }
        bE.match.globalPOS = bD;
        var bF = function (bR, e) {
            bR = Array.prototype.slice.call(bR, 0);
            if (e) {
                e.push.apply(e, bR);
                return e
            }
            return bR
        };
        try {
            Array.prototype.slice.call(av.documentElement.childNodes, 0)[0].nodeType
        } catch (bP) {
            bF = function (bU, bT) {
                var bS = 0, bR = bT || [];
                if (bL.call(bU) === "[object Array]") {
                    Array.prototype.push.apply(bR, bU)
                } else {
                    if (typeof bU.length === "number") {
                        for (var e = bU.length; bS < e; bS++) {
                            bR.push(bU[bS])
                        }
                    } else {
                        for (; bU[bS]; bS++) {
                            bR.push(bU[bS])
                        }
                    }
                }
                return bR
            }
        }
        var bJ, bG;
        if (av.documentElement.compareDocumentPosition) {
            bJ = function (bR, e) {
                if (bR === e) {
                    bB = true;
                    return 0
                }
                if (!bR.compareDocumentPosition || !e.compareDocumentPosition) {
                    return bR.compareDocumentPosition ? -1 : 1
                }
                return bR.compareDocumentPosition(e) & 4 ? -1 : 1
            }
        } else {
            bJ = function (bY, bX) {
                if (bY === bX) {
                    bB = true;
                    return 0
                } else {
                    if (bY.sourceIndex && bX.sourceIndex) {
                        return bY.sourceIndex - bX.sourceIndex
                    }
                }
                var bV, bR, bS = [], e = [], bU = bY.parentNode, bW = bX.parentNode, bZ = bU;
                if (bU === bW) {
                    return bG(bY, bX)
                } else {
                    if (!bU) {
                        return -1
                    } else {
                        if (!bW) {
                            return 1
                        }
                    }
                }
                while (bZ) {
                    bS.unshift(bZ);
                    bZ = bZ.parentNode
                }
                bZ = bW;
                while (bZ) {
                    e.unshift(bZ);
                    bZ = bZ.parentNode
                }
                bV = bS.length;
                bR = e.length;
                for (var bT = 0; bT < bV && bT < bR; bT++) {
                    if (bS[bT] !== e[bT]) {
                        return bG(bS[bT], e[bT])
                    }
                }
                return bT === bV ? bG(bY, e[bT], -1) : bG(bS[bT], bX, 1)
            };
            bG = function (bR, e, bS) {
                if (bR === e) {
                    return bS
                }
                var bT = bR.nextSibling;
                while (bT) {
                    if (bT === e) {
                        return -1
                    }
                    bT = bT.nextSibling
                }
                return 1
            }
        }
        (function () {
            var bR = av.createElement("div"), bS = "script" + (new Date()).getTime(), e = av.documentElement;
            bR.innerHTML = "<a name='" + bS + "'/>";
            e.insertBefore(bR, e.firstChild);
            if (av.getElementById(bS)) {
                bE.find.ID = function (bU, bV, bW) {
                    if (typeof bV.getElementById !== "undefined" && !bW) {
                        var bT = bV.getElementById(bU[1]);
                        return bT ? bT.id === bU[1] || typeof bT.getAttributeNode !== "undefined" && bT.getAttributeNode("id").nodeValue === bU[1] ? [bT] : L : []
                    }
                };
                bE.filter.ID = function (bV, bT) {
                    var bU = typeof bV.getAttributeNode !== "undefined" && bV.getAttributeNode("id");
                    return bV.nodeType === 1 && bU && bU.nodeValue === bT
                }
            }
            e.removeChild(bR);
            e = bR = null
        })();
        (function () {
            var e = av.createElement("div");
            e.appendChild(av.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                bE.find.TAG = function (bR, bV) {
                    var bU = bV.getElementsByTagName(bR[1]);
                    if (bR[1] === "*") {
                        var bT = [];
                        for (var bS = 0; bU[bS]; bS++) {
                            if (bU[bS].nodeType === 1) {
                                bT.push(bU[bS])
                            }
                        }
                        bU = bT
                    }
                    return bU
                }
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                bE.attrHandle.href = function (bR) {
                    return bR.getAttribute("href", 2)
                }
            }
            e = null
        })();
        if (av.querySelectorAll) {
            (function () {
                var e = by, bT = av.createElement("div"), bS = "__sizzle__";
                bT.innerHTML = "<p class='TEST'></p>";
                if (bT.querySelectorAll && bT.querySelectorAll(".TEST").length === 0) {
                    return
                }
                by = function (b4, bV, bZ, b3) {
                    bV = bV || av;
                    if (!b3 && !by.isXML(bV)) {
                        var b2 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);
                        if (b2 && (bV.nodeType === 1 || bV.nodeType === 9)) {
                            if (b2[1]) {
                                return bF(bV.getElementsByTagName(b4), bZ)
                            } else {
                                if (b2[2] && bE.find.CLASS && bV.getElementsByClassName) {
                                    return bF(bV.getElementsByClassName(b2[2]), bZ)
                                }
                            }
                        }
                        if (bV.nodeType === 9) {
                            if (b4 === "body" && bV.body) {
                                return bF([bV.body], bZ)
                            } else {
                                if (b2 && b2[3]) {
                                    var bY = bV.getElementById(b2[3]);
                                    if (bY && bY.parentNode) {
                                        if (bY.id === b2[3]) {
                                            return bF([bY], bZ)
                                        }
                                    } else {
                                        return bF([], bZ)
                                    }
                                }
                            }
                            try {
                                return bF(bV.querySelectorAll(b4), bZ)
                            } catch (b0) {
                            }
                        } else {
                            if (bV.nodeType === 1 && bV.nodeName.toLowerCase() !== "object") {
                                var bW = bV, bX = bV.getAttribute("id"), bU = bX || bS, b6 = bV.parentNode, b5 = /^\s*[+~]/.test(b4);
                                if (!bX) {
                                    bV.setAttribute("id", bU)
                                } else {
                                    bU = bU.replace(/'/g, "\\$&")
                                }
                                if (b5 && b6) {
                                    bV = bV.parentNode
                                }
                                try {
                                    if (!b5 || b6) {
                                        return bF(bV.querySelectorAll("[id='" + bU + "'] " + b4), bZ)
                                    }
                                } catch (b1) {
                                } finally {
                                    if (!bX) {
                                        bW.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return e(b4, bV, bZ, b3)
                };
                for (var bR in e) {
                    by[bR] = e[bR]
                }
                bT = null
            })()
        }
        (function () {
            var e = av.documentElement, bS = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (bS) {
                var bU = !bS.call(av.createElement("div"), "div"), bR = false;
                try {
                    bS.call(av.documentElement, "[test!='']:sizzle")
                } catch (bT) {
                    bR = true
                }
                by.matchesSelector = function (bW, bY) {
                    bY = bY.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!by.isXML(bW)) {
                        try {
                            if (bR || !bE.match.PSEUDO.test(bY) && !/!=/.test(bY)) {
                                var bV = bS.call(bW, bY);
                                if (bV || !bU || bW.document && bW.document.nodeType !== 11) {
                                    return bV
                                }
                            }
                        } catch (bX) {
                        }
                    }
                    return by(bY, null, null, [bW]).length > 0
                }
            }
        })();
        (function () {
            var e = av.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            bE.order.splice(1, 0, "CLASS");
            bE.find.CLASS = function (bR, bS, bT) {
                if (typeof bS.getElementsByClassName !== "undefined" && !bT) {
                    return bS.getElementsByClassName(bR[1])
                }
            };
            e = null
        })();
        function bv(bR, bW, bV, bZ, bX, bY) {
            for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
                var e = bZ[bT];
                if (e) {
                    var bU = false;
                    e = e[bR];
                    while (e) {
                        if (e[bC] === bV) {
                            bU = bZ[e.sizset];
                            break
                        }
                        if (e.nodeType === 1 && !bY) {
                            e[bC] = bV;
                            e.sizset = bT
                        }
                        if (e.nodeName.toLowerCase() === bW) {
                            bU = e;
                            break
                        }
                        e = e[bR]
                    }
                    bZ[bT] = bU
                }
            }
        }

        function bN(bR, bW, bV, bZ, bX, bY) {
            for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
                var e = bZ[bT];
                if (e) {
                    var bU = false;
                    e = e[bR];
                    while (e) {
                        if (e[bC] === bV) {
                            bU = bZ[e.sizset];
                            break
                        }
                        if (e.nodeType === 1) {
                            if (!bY) {
                                e[bC] = bV;
                                e.sizset = bT
                            }
                            if (typeof bW !== "string") {
                                if (e === bW) {
                                    bU = true;
                                    break
                                }
                            } else {
                                if (by.filter(bW, [e]).length > 0) {
                                    bU = e;
                                    break
                                }
                            }
                        }
                        e = e[bR]
                    }
                    bZ[bT] = bU
                }
            }
        }

        if (av.documentElement.contains) {
            by.contains = function (bR, e) {
                return bR !== e && (bR.contains ? bR.contains(e) : true)
            }
        } else {
            if (av.documentElement.compareDocumentPosition) {
                by.contains = function (bR, e) {
                    return !!(bR.compareDocumentPosition(e) & 16)
                }
            } else {
                by.contains = function () {
                    return false
                }
            }
        }
        by.isXML = function (e) {
            var bR = (e ? e.ownerDocument || e : 0).documentElement;
            return bR ? bR.nodeName !== "HTML" : false
        };
        var bM = function (bS, e, bW) {
            var bV, bX = [], bU = "", bY = e.nodeType ? [e] : e;
            while ((bV = bE.match.PSEUDO.exec(bS))) {
                bU += bV[0];
                bS = bS.replace(bE.match.PSEUDO, "")
            }
            bS = bE.relative[bS] ? bS + "*" : bS;
            for (var bT = 0, bR = bY.length; bT < bR; bT++) {
                by(bS, bY[bT], bX, bW)
            }
            return by.filter(bU, bX)
        };
        by.attr = b.attr;
        by.selectors.attrMap = {};
        b.find = by;
        b.expr = by.selectors;
        b.expr[":"] = b.expr.filters;
        b.unique = by.uniqueSort;
        b.text = by.getText;
        b.isXMLDoc = by.isXML;
        b.contains = by.contains
    })();
    var ab = /Until$/, aq = /^(?:parents|prevUntil|prevAll)/, bb = /,/, bp = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, H = b.expr.match.globalPOS, ay = {children: true, contents: true, next: true, prev: true};
    b.fn.extend({find: function (e) {
        var bw = this, by, bv;
        if (typeof e !== "string") {
            return b(e).filter(function () {
                for (by = 0, bv = bw.length; by < bv; by++) {
                    if (b.contains(bw[by], this)) {
                        return true
                    }
                }
            })
        }
        var bx = this.pushStack("", "find", e), bA, bB, bz;
        for (by = 0, bv = this.length; by < bv; by++) {
            bA = bx.length;
            b.find(e, this[by], bx);
            if (by > 0) {
                for (bB = bA; bB < bx.length; bB++) {
                    for (bz = 0; bz < bA; bz++) {
                        if (bx[bz] === bx[bB]) {
                            bx.splice(bB--, 1);
                            break
                        }
                    }
                }
            }
        }
        return bx
    }, has: function (bv) {
        var e = b(bv);
        return this.filter(function () {
            for (var bx = 0, bw = e.length; bx < bw; bx++) {
                if (b.contains(this, e[bx])) {
                    return true
                }
            }
        })
    }, not: function (e) {
        return this.pushStack(aH(this, e, false), "not", e)
    }, filter: function (e) {
        return this.pushStack(aH(this, e, true), "filter", e)
    }, is: function (e) {
        return !!e && (typeof e === "string" ? H.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
    }, closest: function (by, bx) {
        var bv = [], bw, e, bz = this[0];
        if (b.isArray(by)) {
            var bB = 1;
            while (bz && bz.ownerDocument && bz !== bx) {
                for (bw = 0; bw < by.length; bw++) {
                    if (b(bz).is(by[bw])) {
                        bv.push({selector: by[bw], elem: bz, level: bB})
                    }
                }
                bz = bz.parentNode;
                bB++
            }
            return bv
        }
        var bA = H.test(by) || typeof by !== "string" ? b(by, bx || this.context) : 0;
        for (bw = 0, e = this.length; bw < e; bw++) {
            bz = this[bw];
            while (bz) {
                if (bA ? bA.index(bz) > -1 : b.find.matchesSelector(bz, by)) {
                    bv.push(bz);
                    break
                } else {
                    bz = bz.parentNode;
                    if (!bz || !bz.ownerDocument || bz === bx || bz.nodeType === 11) {
                        break
                    }
                }
            }
        }
        bv = bv.length > 1 ? b.unique(bv) : bv;
        return this.pushStack(bv, "closest", by)
    }, index: function (e) {
        if (!e) {
            return(this[0] && this[0].parentNode) ? this.prevAll().length : -1
        }
        if (typeof e === "string") {
            return b.inArray(this[0], b(e))
        }
        return b.inArray(e.jquery ? e[0] : e, this)
    }, add: function (e, bv) {
        var bx = typeof e === "string" ? b(e, bv) : b.makeArray(e && e.nodeType ? [e] : e), bw = b.merge(this.get(), bx);
        return this.pushStack(B(bx[0]) || B(bw[0]) ? bw : b.unique(bw))
    }, andSelf: function () {
        return this.add(this.prevObject)
    }});
    function B(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    b.each({parent: function (bv) {
        var e = bv.parentNode;
        return e && e.nodeType !== 11 ? e : null
    }, parents: function (e) {
        return b.dir(e, "parentNode")
    }, parentsUntil: function (bv, e, bw) {
        return b.dir(bv, "parentNode", bw)
    }, next: function (e) {
        return b.nth(e, 2, "nextSibling")
    }, prev: function (e) {
        return b.nth(e, 2, "previousSibling")
    }, nextAll: function (e) {
        return b.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return b.dir(e, "previousSibling")
    }, nextUntil: function (bv, e, bw) {
        return b.dir(bv, "nextSibling", bw)
    }, prevUntil: function (bv, e, bw) {
        return b.dir(bv, "previousSibling", bw)
    }, siblings: function (e) {
        return b.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return b.sibling(e.firstChild)
    }, contents: function (e) {
        return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.makeArray(e.childNodes)
    }}, function (e, bv) {
        b.fn[e] = function (by, bw) {
            var bx = b.map(this, bv, by);
            if (!ab.test(e)) {
                bw = by
            }
            if (bw && typeof bw === "string") {
                bx = b.filter(bw, bx)
            }
            bx = this.length > 1 && !ay[e] ? b.unique(bx) : bx;
            if ((this.length > 1 || bb.test(bw)) && aq.test(e)) {
                bx = bx.reverse()
            }
            return this.pushStack(bx, e, P.call(arguments).join(","))
        }
    });
    b.extend({filter: function (bw, e, bv) {
        if (bv) {
            bw = ":not(" + bw + ")"
        }
        return e.length === 1 ? b.find.matchesSelector(e[0], bw) ? [e[0]] : [] : b.find.matches(bw, e)
    }, dir: function (bw, bv, by) {
        var e = [], bx = bw[bv];
        while (bx && bx.nodeType !== 9 && (by === L || bx.nodeType !== 1 || !b(bx).is(by))) {
            if (bx.nodeType === 1) {
                e.push(bx)
            }
            bx = bx[bv]
        }
        return e
    }, nth: function (by, e, bw, bx) {
        e = e || 1;
        var bv = 0;
        for (; by; by = by[bw]) {
            if (by.nodeType === 1 && ++bv === e) {
                break
            }
        }
        return by
    }, sibling: function (bw, bv) {
        var e = [];
        for (; bw; bw = bw.nextSibling) {
            if (bw.nodeType === 1 && bw !== bv) {
                e.push(bw)
            }
        }
        return e
    }});
    function aH(bx, bw, e) {
        bw = bw || 0;
        if (b.isFunction(bw)) {
            return b.grep(bx, function (bz, by) {
                var bA = !!bw.call(bz, by, bz);
                return bA === e
            })
        } else {
            if (bw.nodeType) {
                return b.grep(bx, function (bz, by) {
                    return(bz === bw) === e
                })
            } else {
                if (typeof bw === "string") {
                    var bv = b.grep(bx, function (by) {
                        return by.nodeType === 1
                    });
                    if (bp.test(bw)) {
                        return b.filter(bw, bv, !e)
                    } else {
                        bw = b.filter(bw, bv)
                    }
                }
            }
        }
        return b.grep(bx, function (bz, by) {
            return(b.inArray(bz, bw) >= 0) === e
        })
    }

    function a(e) {
        var bw = aS.split("|"), bv = e.createDocumentFragment();
        if (bv.createElement) {
            while (bw.length) {
                bv.createElement(bw.pop())
            }
        }
        return bv
    }

    var aS = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ah = / jQuery\d+="(?:\d+|null)"/g, ar = /^\s+/, R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, d = /<([\w:]+)/, v = /<tbody/i, W = /<|&#?\w+;/, ae = /<(?:script|style)/i, O = /<(?:script|object|embed|option|style)/i, ai = new RegExp("<(?:" + aS + ")[\\s/>]", "i"), o = /checked\s*(?:[^=]|=\s*.checked.)/i, bn = /\/(java|ecma)script/i, aO = /^\s*<!(?:\[CDATA\[|\-\-)/, ax = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, ac = a(av);
    ax.optgroup = ax.option;
    ax.tbody = ax.tfoot = ax.colgroup = ax.caption = ax.thead;
    ax.th = ax.td;
    if (!b.support.htmlSerialize) {
        ax._default = [1, "div<div>", "</div>"]
    }
    b.fn.extend({text: function (e) {
        return b.access(this, function (bv) {
            return bv === L ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || av).createTextNode(bv))
        }, null, e, arguments.length)
    }, wrapAll: function (e) {
        if (b.isFunction(e)) {
            return this.each(function (bw) {
                b(this).wrapAll(e.call(this, bw))
            })
        }
        if (this[0]) {
            var bv = b(e, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
                bv.insertBefore(this[0])
            }
            bv.map(function () {
                var bw = this;
                while (bw.firstChild && bw.firstChild.nodeType === 1) {
                    bw = bw.firstChild
                }
                return bw
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        if (b.isFunction(e)) {
            return this.each(function (bv) {
                b(this).wrapInner(e.call(this, bv))
            })
        }
        return this.each(function () {
            var bv = b(this), bw = bv.contents();
            if (bw.length) {
                bw.wrapAll(e)
            } else {
                bv.append(e)
            }
        })
    }, wrap: function (e) {
        var bv = b.isFunction(e);
        return this.each(function (bw) {
            b(this).wrapAll(bv ? e.call(this, bw) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            if (!b.nodeName(this, "body")) {
                b(this).replaceWith(this.childNodes)
            }
        }).end()
    }, append: function () {
        return this.domManip(arguments, true, function (e) {
            if (this.nodeType === 1) {
                this.appendChild(e)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, true, function (e) {
            if (this.nodeType === 1) {
                this.insertBefore(e, this.firstChild)
            }
        })
    }, before: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, false, function (bv) {
                this.parentNode.insertBefore(bv, this)
            })
        } else {
            if (arguments.length) {
                var e = b.clean(arguments);
                e.push.apply(e, this.toArray());
                return this.pushStack(e, "before", arguments)
            }
        }
    }, after: function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, false, function (bv) {
                this.parentNode.insertBefore(bv, this.nextSibling)
            })
        } else {
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                e.push.apply(e, b.clean(arguments));
                return e
            }
        }
    }, remove: function (e, bx) {
        for (var bv = 0, bw; (bw = this[bv]) != null; bv++) {
            if (!e || b.filter(e, [bw]).length) {
                if (!bx && bw.nodeType === 1) {
                    b.cleanData(bw.getElementsByTagName("*"));
                    b.cleanData([bw])
                }
                if (bw.parentNode) {
                    bw.parentNode.removeChild(bw)
                }
            }
        }
        return this
    }, empty: function () {
        for (var e = 0, bv; (bv = this[e]) != null; e++) {
            if (bv.nodeType === 1) {
                b.cleanData(bv.getElementsByTagName("*"))
            }
            while (bv.firstChild) {
                bv.removeChild(bv.firstChild)
            }
        }
        return this
    }, clone: function (bv, e) {
        bv = bv == null ? false : bv;
        e = e == null ? bv : e;
        return this.map(function () {
            return b.clone(this, bv, e)
        })
    }, html: function (e) {
        return b.access(this, function (by) {
            var bx = this[0] || {}, bw = 0, bv = this.length;
            if (by === L) {
                return bx.nodeType === 1 ? bx.innerHTML.replace(ah, "") : null
            }
            if (typeof by === "string" && !ae.test(by) && (b.support.leadingWhitespace || !ar.test(by)) && !ax[(d.exec(by) || ["", ""])[1].toLowerCase()]) {
                by = by.replace(R, "<$1></$2>");
                try {
                    for (; bw < bv; bw++) {
                        bx = this[bw] || {};
                        if (bx.nodeType === 1) {
                            b.cleanData(bx.getElementsByTagName("*"));
                            bx.innerHTML = by
                        }
                    }
                    bx = 0
                } catch (bz) {
                }
            }
            if (bx) {
                this.empty().append(by)
            }
        }, null, e, arguments.length)
    }, replaceWith: function (e) {
        if (this[0] && this[0].parentNode) {
            if (b.isFunction(e)) {
                return this.each(function (bx) {
                    var bw = b(this), bv = bw.html();
                    bw.replaceWith(e.call(this, bx, bv))
                })
            }
            if (typeof e !== "string") {
                e = b(e).detach()
            }
            return this.each(function () {
                var bw = this.nextSibling, bv = this.parentNode;
                b(this).remove();
                if (bw) {
                    b(bw).before(e)
                } else {
                    b(bv).append(e)
                }
            })
        } else {
            return this.length ? this.pushStack(b(b.isFunction(e) ? e() : e), "replaceWith", e) : this
        }
    }, detach: function (e) {
        return this.remove(e, true)
    }, domManip: function (bB, bF, bE) {
        var bx, by, bA, bD, bC = bB[0], bv = [];
        if (!b.support.checkClone && arguments.length === 3 && typeof bC === "string" && o.test(bC)) {
            return this.each(function () {
                b(this).domManip(bB, bF, bE, true)
            })
        }
        if (b.isFunction(bC)) {
            return this.each(function (bH) {
                var bG = b(this);
                bB[0] = bC.call(this, bH, bF ? bG.html() : L);
                bG.domManip(bB, bF, bE)
            })
        }
        if (this[0]) {
            bD = bC && bC.parentNode;
            if (b.support.parentNode && bD && bD.nodeType === 11 && bD.childNodes.length === this.length) {
                bx = {fragment: bD}
            } else {
                bx = b.buildFragment(bB, this, bv)
            }
            bA = bx.fragment;
            if (bA.childNodes.length === 1) {
                by = bA = bA.firstChild
            } else {
                by = bA.firstChild
            }
            if (by) {
                bF = bF && b.nodeName(by, "tr");
                for (var bw = 0, e = this.length, bz = e - 1; bw < e; bw++) {
                    bE.call(bF ? bc(this[bw], by) : this[bw], bx.cacheable || (e > 1 && bw < bz) ? b.clone(bA, true, true) : bA)
                }
            }
            if (bv.length) {
                b.each(bv, function (bG, bH) {
                    if (bH.src) {
                        b.ajax({type: "GET", global: false, url: bH.src, async: false, dataType: "script"})
                    } else {
                        b.globalEval((bH.text || bH.textContent || bH.innerHTML || "").replace(aO, "/*$0*/"))
                    }
                    if (bH.parentNode) {
                        bH.parentNode.removeChild(bH)
                    }
                })
            }
        }
        return this
    }});
    function bc(e, bv) {
        return b.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e
    }

    function s(bB, bv) {
        if (bv.nodeType !== 1 || !b.hasData(bB)) {
            return
        }
        var by, bx, e, bA = b._data(bB), bz = b._data(bv, bA), bw = bA.events;
        if (bw) {
            delete bz.handle;
            bz.events = {};
            for (by in bw) {
                for (bx = 0, e = bw[by].length; bx < e; bx++) {
                    b.event.add(bv, by, bw[by][bx])
                }
            }
        }
        if (bz.data) {
            bz.data = b.extend({}, bz.data)
        }
    }

    function aj(bv, e) {
        var bw;
        if (e.nodeType !== 1) {
            return
        }
        if (e.clearAttributes) {
            e.clearAttributes()
        }
        if (e.mergeAttributes) {
            e.mergeAttributes(bv)
        }
        bw = e.nodeName.toLowerCase();
        if (bw === "object") {
            e.outerHTML = bv.outerHTML
        } else {
            if (bw === "input" && (bv.type === "checkbox" || bv.type === "radio")) {
                if (bv.checked) {
                    e.defaultChecked = e.checked = bv.checked
                }
                if (e.value !== bv.value) {
                    e.value = bv.value
                }
            } else {
                if (bw === "option") {
                    e.selected = bv.defaultSelected
                } else {
                    if (bw === "input" || bw === "textarea") {
                        e.defaultValue = bv.defaultValue
                    } else {
                        if (bw === "script" && e.text !== bv.text) {
                            e.text = bv.text
                        }
                    }
                }
            }
        }
        e.removeAttribute(b.expando);
        e.removeAttribute("_submit_attached");
        e.removeAttribute("_change_attached")
    }

    b.buildFragment = function (bz, bx, bv) {
        var by, e, bw, bA, bB = bz[0];
        if (bx && bx[0]) {
            bA = bx[0].ownerDocument || bx[0]
        }
        if (!bA.createDocumentFragment) {
            bA = av
        }
        if (bz.length === 1 && typeof bB === "string" && bB.length < 512 && bA === av && bB.charAt(0) === "<" && !O.test(bB) && (b.support.checkClone || !o.test(bB)) && (b.support.html5Clone || !ai.test(bB))) {
            e = true;
            bw = b.fragments[bB];
            if (bw && bw !== 1) {
                by = bw
            }
        }
        if (!by) {
            by = bA.createDocumentFragment();
            b.clean(bz, bA, by, bv)
        }
        if (e) {
            b.fragments[bB] = bw ? by : 1
        }
        return{fragment: by, cacheable: e}
    };
    b.fragments = {};
    b.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, bv) {
        b.fn[e] = function (bw) {
            var bz = [], bC = b(bw), bB = this.length === 1 && this[0].parentNode;
            if (bB && bB.nodeType === 11 && bB.childNodes.length === 1 && bC.length === 1) {
                bC[bv](this[0]);
                return this
            } else {
                for (var bA = 0, bx = bC.length; bA < bx; bA++) {
                    var by = (bA > 0 ? this.clone(true) : this).get();
                    b(bC[bA])[bv](by);
                    bz = bz.concat(by)
                }
                return this.pushStack(bz, e, bC.selector)
            }
        }
    });
    function bh(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*")
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return[]
            }
        }
    }

    function az(e) {
        if (e.type === "checkbox" || e.type === "radio") {
            e.defaultChecked = e.checked
        }
    }

    function D(e) {
        var bv = (e.nodeName || "").toLowerCase();
        if (bv === "input") {
            az(e)
        } else {
            if (bv !== "script" && typeof e.getElementsByTagName !== "undefined") {
                b.grep(e.getElementsByTagName("input"), az)
            }
        }
    }

    function am(e) {
        var bv = av.createElement("div");
        ac.appendChild(bv);
        bv.innerHTML = e.outerHTML;
        return bv.firstChild
    }

    b.extend({clone: function (by, bA, bw) {
        var e, bv, bx, bz = b.support.html5Clone || b.isXMLDoc(by) || !ai.test("<" + by.nodeName + ">") ? by.cloneNode(true) : am(by);
        if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (by.nodeType === 1 || by.nodeType === 11) && !b.isXMLDoc(by)) {
            aj(by, bz);
            e = bh(by);
            bv = bh(bz);
            for (bx = 0; e[bx]; ++bx) {
                if (bv[bx]) {
                    aj(e[bx], bv[bx])
                }
            }
        }
        if (bA) {
            s(by, bz);
            if (bw) {
                e = bh(by);
                bv = bh(bz);
                for (bx = 0; e[bx]; ++bx) {
                    s(e[bx], bv[bx])
                }
            }
        }
        e = bv = null;
        return bz
    }, clean: function (bI, bw, bv, bx) {
        var bA, bH, bD, bJ = [];
        bw = bw || av;
        if (typeof bw.createElement === "undefined") {
            bw = bw.ownerDocument || bw[0] && bw[0].ownerDocument || av
        }
        for (var bE = 0, bG; (bG = bI[bE]) != null; bE++) {
            if (typeof bG === "number") {
                bG += ""
            }
            if (!bG) {
                continue
            }
            if (typeof bG === "string") {
                if (!W.test(bG)) {
                    bG = bw.createTextNode(bG)
                } else {
                    bG = bG.replace(R, "<$1></$2>");
                    var bN = (d.exec(bG) || ["", ""])[1].toLowerCase(), bz = ax[bN] || ax._default, bK = bz[0], bB = bw.createElement("div"), bL = ac.childNodes, bM;
                    if (bw === av) {
                        ac.appendChild(bB)
                    } else {
                        a(bw).appendChild(bB)
                    }
                    bB.innerHTML = bz[1] + bG + bz[2];
                    while (bK--) {
                        bB = bB.lastChild
                    }
                    if (!b.support.tbody) {
                        var by = v.test(bG), e = bN === "table" && !by ? bB.firstChild && bB.firstChild.childNodes : bz[1] === "<table>" && !by ? bB.childNodes : [];
                        for (bD = e.length - 1; bD >= 0; --bD) {
                            if (b.nodeName(e[bD], "tbody") && !e[bD].childNodes.length) {
                                e[bD].parentNode.removeChild(e[bD])
                            }
                        }
                    }
                    if (!b.support.leadingWhitespace && ar.test(bG)) {
                        bB.insertBefore(bw.createTextNode(ar.exec(bG)[0]), bB.firstChild)
                    }
                    bG = bB.childNodes;
                    if (bB) {
                        bB.parentNode.removeChild(bB);
                        if (bL.length > 0) {
                            bM = bL[bL.length - 1];
                            if (bM && bM.parentNode) {
                                bM.parentNode.removeChild(bM)
                            }
                        }
                    }
                }
            }
            var bF;
            if (!b.support.appendChecked) {
                if (bG[0] && typeof(bF = bG.length) === "number") {
                    for (bD = 0; bD < bF; bD++) {
                        D(bG[bD])
                    }
                } else {
                    D(bG)
                }
            }
            if (bG.nodeType) {
                bJ.push(bG)
            } else {
                bJ = b.merge(bJ, bG)
            }
        }
        if (bv) {
            bA = function (bO) {
                return !bO.type || bn.test(bO.type)
            };
            for (bE = 0; bJ[bE]; bE++) {
                bH = bJ[bE];
                if (bx && b.nodeName(bH, "script") && (!bH.type || bn.test(bH.type))) {
                    bx.push(bH.parentNode ? bH.parentNode.removeChild(bH) : bH)
                } else {
                    if (bH.nodeType === 1) {
                        var bC = b.grep(bH.getElementsByTagName("script"), bA);
                        bJ.splice.apply(bJ, [bE + 1, 0].concat(bC))
                    }
                    bv.appendChild(bH)
                }
            }
        }
        return bJ
    }, cleanData: function (bv) {
        var by, bw, e = b.cache, bB = b.event.special, bA = b.support.deleteExpando;
        for (var bz = 0, bx; (bx = bv[bz]) != null; bz++) {
            if (bx.nodeName && b.noData[bx.nodeName.toLowerCase()]) {
                continue
            }
            bw = bx[b.expando];
            if (bw) {
                by = e[bw];
                if (by && by.events) {
                    for (var bC in by.events) {
                        if (bB[bC]) {
                            b.event.remove(bx, bC)
                        } else {
                            b.removeEvent(bx, bC, by.handle)
                        }
                    }
                    if (by.handle) {
                        by.handle.elem = null
                    }
                }
                if (bA) {
                    delete bx[b.expando]
                } else {
                    if (bx.removeAttribute) {
                        bx.removeAttribute(b.expando)
                    }
                }
                delete e[bw]
            }
        }
    }});
    var al = /alpha\([^)]*\)/i, au = /opacity=([^)]*)/, y = /([A-Z]|^ms)/g, bo = /^[\-+]?(?:\d*\.)?\d+$/i, a1 = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, I = /^([\-+])=([\-+.\de]+)/, aE = /^margin/, a9 = {position: "absolute", visibility: "hidden", display: "block"}, G = ["Top", "Right", "Bottom", "Left"], Z, aJ, aY;
    b.fn.css = function (e, bv) {
        return b.access(this, function (bx, bw, by) {
            return by !== L ? b.style(bx, bw, by) : b.css(bx, bw)
        }, e, bv, arguments.length > 1)
    };
    b.extend({cssHooks: {opacity: {get: function (bw, bv) {
        if (bv) {
            var e = Z(bw, "opacity");
            return e === "" ? "1" : e
        } else {
            return bw.style.opacity
        }
    }}}, cssNumber: {fillOpacity: true, fontWeight: true, lineHeight: true, opacity: true, orphans: true, widows: true, zIndex: true, zoom: true}, cssProps: {"float": b.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (bx, bw, bD, by) {
        if (!bx || bx.nodeType === 3 || bx.nodeType === 8 || !bx.style) {
            return
        }
        var bB, bC, bz = b.camelCase(bw), bv = bx.style, bE = b.cssHooks[bz];
        bw = b.cssProps[bz] || bz;
        if (bD !== L) {
            bC = typeof bD;
            if (bC === "string" && (bB = I.exec(bD))) {
                bD = (+(bB[1] + 1) * +bB[2]) + parseFloat(b.css(bx, bw));
                bC = "number"
            }
            if (bD == null || bC === "number" && isNaN(bD)) {
                return
            }
            if (bC === "number" && !b.cssNumber[bz]) {
                bD += "px"
            }
            if (!bE || !("set" in bE) || (bD = bE.set(bx, bD)) !== L) {
                try {
                    bv[bw] = bD
                } catch (bA) {
                }
            }
        } else {
            if (bE && "get" in bE && (bB = bE.get(bx, false, by)) !== L) {
                return bB
            }
            return bv[bw]
        }
    }, css: function (by, bx, bv) {
        var bw, e;
        bx = b.camelCase(bx);
        e = b.cssHooks[bx];
        bx = b.cssProps[bx] || bx;
        if (bx === "cssFloat") {
            bx = "float"
        }
        if (e && "get" in e && (bw = e.get(by, true, bv)) !== L) {
            return bw
        } else {
            if (Z) {
                return Z(by, bx)
            }
        }
    }, swap: function (by, bx, bz) {
        var e = {}, bw, bv;
        for (bv in bx) {
            e[bv] = by.style[bv];
            by.style[bv] = bx[bv]
        }
        bw = bz.call(by);
        for (bv in bx) {
            by.style[bv] = e[bv]
        }
        return bw
    }});
    b.curCSS = b.css;
    if (av.defaultView && av.defaultView.getComputedStyle) {
        aJ = function (bA, bw) {
            var bv, bz, e, by, bx = bA.style;
            bw = bw.replace(y, "-$1").toLowerCase();
            if ((bz = bA.ownerDocument.defaultView) && (e = bz.getComputedStyle(bA, null))) {
                bv = e.getPropertyValue(bw);
                if (bv === "" && !b.contains(bA.ownerDocument.documentElement, bA)) {
                    bv = b.style(bA, bw)
                }
            }
            if (!b.support.pixelMargin && e && aE.test(bw) && a1.test(bv)) {
                by = bx.width;
                bx.width = bv;
                bv = e.width;
                bx.width = by
            }
            return bv
        }
    }
    if (av.documentElement.currentStyle) {
        aY = function (bz, bw) {
            var bA, e, by, bv = bz.currentStyle && bz.currentStyle[bw], bx = bz.style;
            if (bv == null && bx && (by = bx[bw])) {
                bv = by
            }
            if (a1.test(bv)) {
                bA = bx.left;
                e = bz.runtimeStyle && bz.runtimeStyle.left;
                if (e) {
                    bz.runtimeStyle.left = bz.currentStyle.left
                }
                bx.left = bw === "fontSize" ? "1em" : bv;
                bv = bx.pixelLeft + "px";
                bx.left = bA;
                if (e) {
                    bz.runtimeStyle.left = e
                }
            }
            return bv === "" ? "auto" : bv
        }
    }
    Z = aJ || aY;
    function af(by, bw, bv) {
        var bz = bw === "width" ? by.offsetWidth : by.offsetHeight, bx = bw === "width" ? 1 : 0, e = 4;
        if (bz > 0) {
            if (bv !== "border") {
                for (; bx < e; bx += 2) {
                    if (!bv) {
                        bz -= parseFloat(b.css(by, "padding" + G[bx])) || 0
                    }
                    if (bv === "margin") {
                        bz += parseFloat(b.css(by, bv + G[bx])) || 0
                    } else {
                        bz -= parseFloat(b.css(by, "border" + G[bx] + "Width")) || 0
                    }
                }
            }
            return bz + "px"
        }
        bz = Z(by, bw);
        if (bz < 0 || bz == null) {
            bz = by.style[bw]
        }
        if (a1.test(bz)) {
            return bz
        }
        bz = parseFloat(bz) || 0;
        if (bv) {
            for (; bx < e; bx += 2) {
                bz += parseFloat(b.css(by, "padding" + G[bx])) || 0;
                if (bv !== "padding") {
                    bz += parseFloat(b.css(by, "border" + G[bx] + "Width")) || 0
                }
                if (bv === "margin") {
                    bz += parseFloat(b.css(by, bv + G[bx])) || 0
                }
            }
        }
        return bz + "px"
    }

    b.each(["height", "width"], function (bv, e) {
        b.cssHooks[e] = {get: function (by, bx, bw) {
            if (bx) {
                if (by.offsetWidth !== 0) {
                    return af(by, e, bw)
                } else {
                    return b.swap(by, a9, function () {
                        return af(by, e, bw)
                    })
                }
            }
        }, set: function (bw, bx) {
            return bo.test(bx) ? bx + "px" : bx
        }}
    });
    if (!b.support.opacity) {
        b.cssHooks.opacity = {get: function (bv, e) {
            return au.test((e && bv.currentStyle ? bv.currentStyle.filter : bv.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
        }, set: function (by, bz) {
            var bx = by.style, bv = by.currentStyle, e = b.isNumeric(bz) ? "alpha(opacity=" + bz * 100 + ")" : "", bw = bv && bv.filter || bx.filter || "";
            bx.zoom = 1;
            if (bz >= 1 && b.trim(bw.replace(al, "")) === "") {
                bx.removeAttribute("filter");
                if (bv && !bv.filter) {
                    return
                }
            }
            bx.filter = al.test(bw) ? bw.replace(al, e) : bw + " " + e
        }}
    }
    b(function () {
        if (!b.support.reliableMarginRight) {
            b.cssHooks.marginRight = {get: function (bv, e) {
                return b.swap(bv, {display: "inline-block"}, function () {
                    if (e) {
                        return Z(bv, "margin-right")
                    } else {
                        return bv.style.marginRight
                    }
                })
            }}
        }
    });
    if (b.expr && b.expr.filters) {
        b.expr.filters.hidden = function (bw) {
            var bv = bw.offsetWidth, e = bw.offsetHeight;
            return(bv === 0 && e === 0) || (!b.support.reliableHiddenOffsets && ((bw.style && bw.style.display) || b.css(bw, "display")) === "none")
        };
        b.expr.filters.visible = function (e) {
            return !b.expr.filters.hidden(e)
        }
    }
    b.each({margin: "", padding: "", border: "Width"}, function (e, bv) {
        b.cssHooks[e + bv] = {expand: function (by) {
            var bx, bz = typeof by === "string" ? by.split(" ") : [by], bw = {};
            for (bx = 0; bx < 4; bx++) {
                bw[e + G[bx] + bv] = bz[bx] || bz[bx - 2] || bz[0]
            }
            return bw
        }}
    });
    var k = /%20/g, ap = /\[\]$/, bs = /\r?\n/g, bq = /#.*$/, aD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, a0 = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, aN = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, aR = /^(?:GET|HEAD)$/, c = /^\/\//, M = /\?/, a7 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, p = /^(?:select|textarea)/i, h = /\s+/, br = /([?&])_=[^&]*/, K = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, z = b.fn.load, aa = {}, q = {}, aF, r, aW = ["*/"] + ["*"];
    try {
        aF = bm.href
    } catch (aw) {
        aF = av.createElement("a");
        aF.href = "";
        aF = aF.href
    }
    r = K.exec(aF.toLowerCase()) || [];
    function f(e) {
        return function (by, bA) {
            if (typeof by !== "string") {
                bA = by;
                by = "*"
            }
            if (b.isFunction(bA)) {
                var bx = by.toLowerCase().split(h), bw = 0, bz = bx.length, bv, bB, bC;
                for (; bw < bz; bw++) {
                    bv = bx[bw];
                    bC = /^\+/.test(bv);
                    if (bC) {
                        bv = bv.substr(1) || "*"
                    }
                    bB = e[bv] = e[bv] || [];
                    bB[bC ? "unshift" : "push"](bA)
                }
            }
        }
    }

    function aX(bv, bE, bz, bD, bB, bx) {
        bB = bB || bE.dataTypes[0];
        bx = bx || {};
        bx[bB] = true;
        var bA = bv[bB], bw = 0, e = bA ? bA.length : 0, by = (bv === aa), bC;
        for (; bw < e && (by || !bC); bw++) {
            bC = bA[bw](bE, bz, bD);
            if (typeof bC === "string") {
                if (!by || bx[bC]) {
                    bC = L
                } else {
                    bE.dataTypes.unshift(bC);
                    bC = aX(bv, bE, bz, bD, bC, bx)
                }
            }
        }
        if ((by || !bC) && !bx["*"]) {
            bC = aX(bv, bE, bz, bD, "*", bx)
        }
        return bC
    }

    function an(bw, bx) {
        var bv, e, by = b.ajaxSettings.flatOptions || {};
        for (bv in bx) {
            if (bx[bv] !== L) {
                (by[bv] ? bw : (e || (e = {})))[bv] = bx[bv]
            }
        }
        if (e) {
            b.extend(true, bw, e)
        }
    }

    b.fn.extend({load: function (bw, bz, bA) {
        if (typeof bw !== "string" && z) {
            return z.apply(this, arguments)
        } else {
            if (!this.length) {
                return this
            }
        }
        var by = bw.indexOf(" ");
        if (by >= 0) {
            var e = bw.slice(by, bw.length);
            bw = bw.slice(0, by)
        }
        var bx = "GET";
        if (bz) {
            if (b.isFunction(bz)) {
                bA = bz;
                bz = L
            } else {
                if (typeof bz === "object") {
                    bz = b.param(bz, b.ajaxSettings.traditional);
                    bx = "POST"
                }
            }
        }
        var bv = this;
        b.ajax({url: bw, type: bx, dataType: "html", data: bz, complete: function (bC, bB, bD) {
            bD = bC.responseText;
            if (bC.isResolved()) {
                bC.done(function (bE) {
                    bD = bE
                });
                bv.html(e ? b("<div>").append(bD.replace(a7, "")).find(e) : bD)
            }
            if (bA) {
                bv.each(bA, [bD, bB, bC])
            }
        }});
        return this
    }, serialize: function () {
        return b.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            return this.elements ? b.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || p.test(this.nodeName) || a0.test(this.type))
        }).map(function (e, bv) {
            var bw = b(this).val();
            return bw == null ? null : b.isArray(bw) ? b.map(bw, function (by, bx) {
                return{name: bv.name, value: by.replace(bs, "\r\n")}
            }) : {name: bv.name, value: bw.replace(bs, "\r\n")}
        }).get()
    }});
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, bv) {
        b.fn[bv] = function (bw) {
            return this.on(bv, bw)
        }
    });
    b.each(["get", "post"], function (e, bv) {
        b[bv] = function (bw, by, bz, bx) {
            if (b.isFunction(by)) {
                bx = bx || bz;
                bz = by;
                by = L
            }
            return b.ajax({type: bv, url: bw, data: by, success: bz, dataType: bx})
        }
    });
    b.extend({getScript: function (e, bv) {
        return b.get(e, L, bv, "script")
    }, getJSON: function (e, bv, bw) {
        return b.get(e, bv, bw, "json")
    }, ajaxSetup: function (bv, e) {
        if (e) {
            an(bv, b.ajaxSettings)
        } else {
            e = bv;
            bv = b.ajaxSettings
        }
        an(bv, e);
        return bv
    }, ajaxSettings: {url: aF, isLocal: aN.test(r[1]), global: true, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: true, async: true, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": aW}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": bd.String, "text html": true, "text json": b.parseJSON, "text xml": b.parseXML}, flatOptions: {context: true, url: true}}, ajaxPrefilter: f(aa), ajaxTransport: f(q), ajax: function (bz, bx) {
        if (typeof bz === "object") {
            bx = bz;
            bz = L
        }
        bx = bx || {};
        var bD = b.ajaxSetup({}, bx), bS = bD.context || bD, bG = bS !== bD && (bS.nodeType || bS instanceof b) ? b(bS) : b.event, bR = b.Deferred(), bN = b.Callbacks("once memory"), bB = bD.statusCode || {}, bC, bH = {}, bO = {}, bQ, by, bL, bE, bI, bA = 0, bw, bK, bJ = {readyState: 0, setRequestHeader: function (bT, bU) {
            if (!bA) {
                var e = bT.toLowerCase();
                bT = bO[e] = bO[e] || bT;
                bH[bT] = bU
            }
            return this
        }, getAllResponseHeaders: function () {
            return bA === 2 ? bQ : null
        }, getResponseHeader: function (bT) {
            var e;
            if (bA === 2) {
                if (!by) {
                    by = {};
                    while ((e = aD.exec(bQ))) {
                        by[e[1].toLowerCase()] = e[2]
                    }
                }
                e = by[bT.toLowerCase()]
            }
            return e === L ? null : e
        }, overrideMimeType: function (e) {
            if (!bA) {
                bD.mimeType = e
            }
            return this
        }, abort: function (e) {
            e = e || "abort";
            if (bL) {
                bL.abort(e)
            }
            bF(0, e);
            return this
        }};

        function bF(bZ, bU, b0, bW) {
            if (bA === 2) {
                return
            }
            bA = 2;
            if (bE) {
                clearTimeout(bE)
            }
            bL = L;
            bQ = bW || "";
            bJ.readyState = bZ > 0 ? 4 : 0;
            var bT, b4, b3, bX = bU, bY = b0 ? bk(bD, bJ, b0) : L, bV, b2;
            if (bZ >= 200 && bZ < 300 || bZ === 304) {
                if (bD.ifModified) {
                    if ((bV = bJ.getResponseHeader("Last-Modified"))) {
                        b.lastModified[bC] = bV
                    }
                    if ((b2 = bJ.getResponseHeader("Etag"))) {
                        b.etag[bC] = b2
                    }
                }
                if (bZ === 304) {
                    bX = "notmodified";
                    bT = true
                } else {
                    try {
                        b4 = F(bD, bY);
                        bX = "success";
                        bT = true
                    } catch (b1) {
                        bX = "parsererror";
                        b3 = b1
                    }
                }
            } else {
                b3 = bX;
                if (!bX || bZ) {
                    bX = "error";
                    if (bZ < 0) {
                        bZ = 0
                    }
                }
            }
            bJ.status = bZ;
            bJ.statusText = "" + (bU || bX);
            if (bT) {
                bR.resolveWith(bS, [b4, bX, bJ])
            } else {
                bR.rejectWith(bS, [bJ, bX, b3])
            }
            bJ.statusCode(bB);
            bB = L;
            if (bw) {
                bG.trigger("ajax" + (bT ? "Success" : "Error"), [bJ, bD, bT ? b4 : b3])
            }
            bN.fireWith(bS, [bJ, bX]);
            if (bw) {
                bG.trigger("ajaxComplete", [bJ, bD]);
                if (!(--b.active)) {
                    b.event.trigger("ajaxStop")
                }
            }
        }

        bR.promise(bJ);
        bJ.success = bJ.done;
        bJ.error = bJ.fail;
        bJ.complete = bN.add;
        bJ.statusCode = function (bT) {
            if (bT) {
                var e;
                if (bA < 2) {
                    for (e in bT) {
                        bB[e] = [bB[e], bT[e]]
                    }
                } else {
                    e = bT[bJ.status];
                    bJ.then(e, e)
                }
            }
            return this
        };
        bD.url = ((bz || bD.url) + "").replace(bq, "").replace(c, r[1] + "//");
        bD.dataTypes = b.trim(bD.dataType || "*").toLowerCase().split(h);
        if (bD.crossDomain == null) {
            bI = K.exec(bD.url.toLowerCase());
            bD.crossDomain = !!(bI && (bI[1] != r[1] || bI[2] != r[2] || (bI[3] || (bI[1] === "http:" ? 80 : 443)) != (r[3] || (r[1] === "http:" ? 80 : 443))))
        }
        if (bD.data && bD.processData && typeof bD.data !== "string") {
            bD.data = b.param(bD.data, bD.traditional)
        }
        aX(aa, bD, bx, bJ);
        if (bA === 2) {
            return false
        }
        bw = bD.global;
        bD.type = bD.type.toUpperCase();
        bD.hasContent = !aR.test(bD.type);
        if (bw && b.active++ === 0) {
            b.event.trigger("ajaxStart")
        }
        if (!bD.hasContent) {
            if (bD.data) {
                bD.url += (M.test(bD.url) ? "&" : "?") + bD.data;
                delete bD.data
            }
            bC = bD.url;
            if (bD.cache === false) {
                var bv = b.now(), bP = bD.url.replace(br, "$1_=" + bv);
                bD.url = bP + ((bP === bD.url) ? (M.test(bD.url) ? "&" : "?") + "_=" + bv : "")
            }
        }
        if (bD.data && bD.hasContent && bD.contentType !== false || bx.contentType) {
            bJ.setRequestHeader("Content-Type", bD.contentType)
        }
        if (bD.ifModified) {
            bC = bC || bD.url;
            if (b.lastModified[bC]) {
                bJ.setRequestHeader("If-Modified-Since", b.lastModified[bC])
            }
            if (b.etag[bC]) {
                bJ.setRequestHeader("If-None-Match", b.etag[bC])
            }
        }
        bJ.setRequestHeader("Accept", bD.dataTypes[0] && bD.accepts[bD.dataTypes[0]] ? bD.accepts[bD.dataTypes[0]] + (bD.dataTypes[0] !== "*" ? ", " + aW + "; q=0.01" : "") : bD.accepts["*"]);
        for (bK in bD.headers) {
            bJ.setRequestHeader(bK, bD.headers[bK])
        }
        if (bD.beforeSend && (bD.beforeSend.call(bS, bJ, bD) === false || bA === 2)) {
            bJ.abort();
            return false
        }
        for (bK in {success: 1, error: 1, complete: 1}) {
            bJ[bK](bD[bK])
        }
        bL = aX(q, bD, bx, bJ);
        if (!bL) {
            bF(-1, "No Transport")
        } else {
            bJ.readyState = 1;
            if (bw) {
                bG.trigger("ajaxSend", [bJ, bD])
            }
            if (bD.async && bD.timeout > 0) {
                bE = setTimeout(function () {
                    bJ.abort("timeout")
                }, bD.timeout)
            }
            try {
                bA = 1;
                bL.send(bH, bF)
            } catch (bM) {
                if (bA < 2) {
                    bF(-1, bM)
                } else {
                    throw bM
                }
            }
        }
        return bJ
    }, param: function (e, bw) {
        var bv = [], by = function (bz, bA) {
            bA = b.isFunction(bA) ? bA() : bA;
            bv[bv.length] = encodeURIComponent(bz) + "=" + encodeURIComponent(bA)
        };
        if (bw === L) {
            bw = b.ajaxSettings.traditional
        }
        if (b.isArray(e) || (e.jquery && !b.isPlainObject(e))) {
            b.each(e, function () {
                by(this.name, this.value)
            })
        } else {
            for (var bx in e) {
                u(bx, e[bx], bw, by)
            }
        }
        return bv.join("&").replace(k, "+")
    }});
    function u(bw, by, bv, bx) {
        if (b.isArray(by)) {
            b.each(by, function (bA, bz) {
                if (bv || ap.test(bw)) {
                    bx(bw, bz)
                } else {
                    u(bw + "[" + (typeof bz === "object" ? bA : "") + "]", bz, bv, bx)
                }
            })
        } else {
            if (!bv && b.type(by) === "object") {
                for (var e in by) {
                    u(bw + "[" + e + "]", by[e], bv, bx)
                }
            } else {
                bx(bw, by)
            }
        }
    }

    b.extend({active: 0, lastModified: {}, etag: {}});
    function bk(bD, bC, bz) {
        var bv = bD.contents, bB = bD.dataTypes, bw = bD.responseFields, by, bA, bx, e;
        for (bA in bw) {
            if (bA in bz) {
                bC[bw[bA]] = bz[bA]
            }
        }
        while (bB[0] === "*") {
            bB.shift();
            if (by === L) {
                by = bD.mimeType || bC.getResponseHeader("content-type")
            }
        }
        if (by) {
            for (bA in bv) {
                if (bv[bA] && bv[bA].test(by)) {
                    bB.unshift(bA);
                    break
                }
            }
        }
        if (bB[0] in bz) {
            bx = bB[0]
        } else {
            for (bA in bz) {
                if (!bB[0] || bD.converters[bA + " " + bB[0]]) {
                    bx = bA;
                    break
                }
                if (!e) {
                    e = bA
                }
            }
            bx = bx || e
        }
        if (bx) {
            if (bx !== bB[0]) {
                bB.unshift(bx)
            }
            return bz[bx]
        }
    }

    function F(bH, bz) {
        if (bH.dataFilter) {
            bz = bH.dataFilter(bz, bH.dataType)
        }
        var bD = bH.dataTypes, bG = {}, bA, bE, bw = bD.length, bB, bC = bD[0], bx, by, bF, bv, e;
        for (bA = 1; bA < bw; bA++) {
            if (bA === 1) {
                for (bE in bH.converters) {
                    if (typeof bE === "string") {
                        bG[bE.toLowerCase()] = bH.converters[bE]
                    }
                }
            }
            bx = bC;
            bC = bD[bA];
            if (bC === "*") {
                bC = bx
            } else {
                if (bx !== "*" && bx !== bC) {
                    by = bx + " " + bC;
                    bF = bG[by] || bG["* " + bC];
                    if (!bF) {
                        e = L;
                        for (bv in bG) {
                            bB = bv.split(" ");
                            if (bB[0] === bx || bB[0] === "*") {
                                e = bG[bB[1] + " " + bC];
                                if (e) {
                                    bv = bG[bv];
                                    if (bv === true) {
                                        bF = e
                                    } else {
                                        if (e === true) {
                                            bF = bv
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (!(bF || e)) {
                        b.error("No conversion from " + by.replace(" ", " to "))
                    }
                    if (bF !== true) {
                        bz = bF ? bF(bz) : e(bv(bz))
                    }
                }
            }
        }
        return bz
    }

    var aC = b.now(), t = /(\=)\?(&|$)|\?\?/i;
    b.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        return b.expando + "_" + (aC++)
    }});
    b.ajaxPrefilter("json jsonp", function (bD, bA, bC) {
        var bx = (typeof bD.data === "string") && /^application\/x\-www\-form\-urlencoded/.test(bD.contentType);
        if (bD.dataTypes[0] === "jsonp" || bD.jsonp !== false && (t.test(bD.url) || bx && t.test(bD.data))) {
            var bB, bw = bD.jsonpCallback = b.isFunction(bD.jsonpCallback) ? bD.jsonpCallback() : bD.jsonpCallback, bz = bd[bw], e = bD.url, by = bD.data, bv = "$1" + bw + "$2";
            if (bD.jsonp !== false) {
                e = e.replace(t, bv);
                if (bD.url === e) {
                    if (bx) {
                        by = by.replace(t, bv)
                    }
                    if (bD.data === by) {
                        e += (/\?/.test(e) ? "&" : "?") + bD.jsonp + "=" + bw
                    }
                }
            }
            bD.url = e;
            bD.data = by;
            bd[bw] = function (bE) {
                bB = [bE]
            };
            bC.always(function () {
                bd[bw] = bz;
                if (bB && b.isFunction(bz)) {
                    bd[bw](bB[0])
                }
            });
            bD.converters["script json"] = function () {
                if (!bB) {
                    b.error(bw + " was not called")
                }
                return bB[0]
            };
            bD.dataTypes[0] = "json";
            return"script"
        }
    });
    b.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (e) {
        b.globalEval(e);
        return e
    }}});
    b.ajaxPrefilter("script", function (e) {
        if (e.cache === L) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    b.ajaxTransport("script", function (bw) {
        if (bw.crossDomain) {
            var e, bv = av.head || av.getElementsByTagName("head")[0] || av.documentElement;
            return{send: function (bx, by) {
                e = av.createElement("script");
                e.async = "async";
                if (bw.scriptCharset) {
                    e.charset = bw.scriptCharset
                }
                e.src = bw.url;
                e.onload = e.onreadystatechange = function (bA, bz) {
                    if (bz || !e.readyState || /loaded|complete/.test(e.readyState)) {
                        e.onload = e.onreadystatechange = null;
                        if (bv && e.parentNode) {
                            bv.removeChild(e)
                        }
                        e = L;
                        if (!bz) {
                            by(200, "success")
                        }
                    }
                };
                bv.insertBefore(e, bv.firstChild)
            }, abort: function () {
                if (e) {
                    e.onload(0, 1)
                }
            }}
        }
    });
    var A = bd.ActiveXObject ? function () {
        for (var e in N) {
            N[e](0, 1)
        }
    } : false, x = 0, N;

    function aM() {
        try {
            return new bd.XMLHttpRequest()
        } catch (bv) {
        }
    }

    function ak() {
        try {
            return new bd.ActiveXObject("Microsoft.XMLHTTP")
        } catch (bv) {
        }
    }

    b.ajaxSettings.xhr = bd.ActiveXObject ? function () {
        return !this.isLocal && aM() || ak()
    } : aM;
    (function (e) {
        b.extend(b.support, {ajax: !!e, cors: !!e && ("withCredentials" in e)})
    })(b.ajaxSettings.xhr());
    if (b.support.ajax) {
        b.ajaxTransport(function (e) {
            if (!e.crossDomain || b.support.cors) {
                var bv;
                return{send: function (bB, bw) {
                    var bA = e.xhr(), bz, by;
                    if (e.username) {
                        bA.open(e.type, e.url, e.async, e.username, e.password)
                    } else {
                        bA.open(e.type, e.url, e.async)
                    }
                    if (e.xhrFields) {
                        for (by in e.xhrFields) {
                            bA[by] = e.xhrFields[by]
                        }
                    }
                    if (e.mimeType && bA.overrideMimeType) {
                        bA.overrideMimeType(e.mimeType)
                    }
                    if (!e.crossDomain && !bB["X-Requested-With"]) {
                        bB["X-Requested-With"] = "XMLHttpRequest"
                    }
                    try {
                        for (by in bB) {
                            bA.setRequestHeader(by, bB[by])
                        }
                    } catch (bx) {
                    }
                    bA.send((e.hasContent && e.data) || null);
                    bv = function (bK, bE) {
                        var bF, bD, bC, bI, bH;
                        try {
                            if (bv && (bE || bA.readyState === 4)) {
                                bv = L;
                                if (bz) {
                                    bA.onreadystatechange = b.noop;
                                    if (A) {
                                        delete N[bz]
                                    }
                                }
                                if (bE) {
                                    if (bA.readyState !== 4) {
                                        bA.abort()
                                    }
                                } else {
                                    bF = bA.status;
                                    bC = bA.getAllResponseHeaders();
                                    bI = {};
                                    bH = bA.responseXML;
                                    if (bH && bH.documentElement) {
                                        bI.xml = bH
                                    }
                                    try {
                                        bI.text = bA.responseText
                                    } catch (bK) {
                                    }
                                    try {
                                        bD = bA.statusText
                                    } catch (bJ) {
                                        bD = ""
                                    }
                                    if (!bF && e.isLocal && !e.crossDomain) {
                                        bF = bI.text ? 200 : 404
                                    } else {
                                        if (bF === 1223) {
                                            bF = 204
                                        }
                                    }
                                }
                            }
                        } catch (bG) {
                            if (!bE) {
                                bw(-1, bG)
                            }
                        }
                        if (bI) {
                            bw(bF, bD, bI, bC)
                        }
                    };
                    if (!e.async || bA.readyState === 4) {
                        bv()
                    } else {
                        bz = ++x;
                        if (A) {
                            if (!N) {
                                N = {};
                                b(bd).unload(A)
                            }
                            N[bz] = bv
                        }
                        bA.onreadystatechange = bv
                    }
                }, abort: function () {
                    if (bv) {
                        bv(0, 1)
                    }
                }}
            }
        })
    }
    var Q = {}, ba, m, aB = /^(?:toggle|show|hide)$/, aU = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, a4, aI = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ], a5;
    b.fn.extend({show: function (bx, bA, bz) {
        var bw, by;
        if (bx || bx === 0) {
            return this.animate(a2("show", 3), bx, bA, bz)
        } else {
            for (var bv = 0, e = this.length; bv < e; bv++) {
                bw = this[bv];
                if (bw.style) {
                    by = bw.style.display;
                    if (!b._data(bw, "olddisplay") && by === "none") {
                        by = bw.style.display = ""
                    }
                    if ((by === "" && b.css(bw, "display") === "none") || !b.contains(bw.ownerDocument.documentElement, bw)) {
                        b._data(bw, "olddisplay", w(bw.nodeName))
                    }
                }
            }
            for (bv = 0; bv < e; bv++) {
                bw = this[bv];
                if (bw.style) {
                    by = bw.style.display;
                    if (by === "" || by === "none") {
                        bw.style.display = b._data(bw, "olddisplay") || ""
                    }
                }
            }
            return this
        }
    }, hide: function (bx, bA, bz) {
        if (bx || bx === 0) {
            return this.animate(a2("hide", 3), bx, bA, bz)
        } else {
            var bw, by, bv = 0, e = this.length;
            for (; bv < e; bv++) {
                bw = this[bv];
                if (bw.style) {
                    by = b.css(bw, "display");
                    if (by !== "none" && !b._data(bw, "olddisplay")) {
                        b._data(bw, "olddisplay", by)
                    }
                }
            }
            for (bv = 0; bv < e; bv++) {
                if (this[bv].style) {
                    this[bv].style.display = "none"
                }
            }
            return this
        }
    }, _toggle: b.fn.toggle, toggle: function (bw, bv, bx) {
        var e = typeof bw === "boolean";
        if (b.isFunction(bw) && b.isFunction(bv)) {
            this._toggle.apply(this, arguments)
        } else {
            if (bw == null || e) {
                this.each(function () {
                    var by = e ? bw : b(this).is(":hidden");
                    b(this)[by ? "show" : "hide"]()
                })
            } else {
                this.animate(a2("toggle", 3), bw, bv, bx)
            }
        }
        return this
    }, fadeTo: function (e, bx, bw, bv) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: bx}, e, bw, bv)
    }, animate: function (bz, bw, by, bx) {
        var e = b.speed(bw, by, bx);
        if (b.isEmptyObject(bz)) {
            return this.each(e.complete, [false])
        }
        bz = b.extend({}, bz);
        function bv() {
            if (e.queue === false) {
                b._mark(this)
            }
            var bE = b.extend({}, e), bL = this.nodeType === 1, bJ = bL && b(this).is(":hidden"), bB, bG, bD, bK, bN, bF, bI, bC, bH, bM, bA;
            bE.animatedProperties = {};
            for (bD in bz) {
                bB = b.camelCase(bD);
                if (bD !== bB) {
                    bz[bB] = bz[bD];
                    delete bz[bD]
                }
                if ((bN = b.cssHooks[bB]) && "expand" in bN) {
                    bF = bN.expand(bz[bB]);
                    delete bz[bB];
                    for (bD in bF) {
                        if (!(bD in bz)) {
                            bz[bD] = bF[bD]
                        }
                    }
                }
            }
            for (bB in bz) {
                bG = bz[bB];
                if (b.isArray(bG)) {
                    bE.animatedProperties[bB] = bG[1];
                    bG = bz[bB] = bG[0]
                } else {
                    bE.animatedProperties[bB] = bE.specialEasing && bE.specialEasing[bB] || bE.easing || "swing"
                }
                if (bG === "hide" && bJ || bG === "show" && !bJ) {
                    return bE.complete.call(this)
                }
                if (bL && (bB === "height" || bB === "width")) {
                    bE.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                    if (b.css(this, "display") === "inline" && b.css(this, "float") === "none") {
                        if (!b.support.inlineBlockNeedsLayout || w(this.nodeName) === "inline") {
                            this.style.display = "inline-block"
                        } else {
                            this.style.zoom = 1
                        }
                    }
                }
            }
            if (bE.overflow != null) {
                this.style.overflow = "hidden"
            }
            for (bD in bz) {
                bK = new b.fx(this, bE, bD);
                bG = bz[bD];
                if (aB.test(bG)) {
                    bA = b._data(this, "toggle" + bD) || (bG === "toggle" ? bJ ? "show" : "hide" : 0);
                    if (bA) {
                        b._data(this, "toggle" + bD, bA === "show" ? "hide" : "show");
                        bK[bA]()
                    } else {
                        bK[bG]()
                    }
                } else {
                    bI = aU.exec(bG);
                    bC = bK.cur();
                    if (bI) {
                        bH = parseFloat(bI[2]);
                        bM = bI[3] || (b.cssNumber[bD] ? "" : "px");
                        if (bM !== "px") {
                            b.style(this, bD, (bH || 1) + bM);
                            bC = ((bH || 1) / bK.cur()) * bC;
                            b.style(this, bD, bC + bM)
                        }
                        if (bI[1]) {
                            bH = ((bI[1] === "-=" ? -1 : 1) * bH) + bC
                        }
                        bK.custom(bC, bH, bM)
                    } else {
                        bK.custom(bC, bG, "")
                    }
                }
            }
            return true
        }

        return e.queue === false ? this.each(bv) : this.queue(e.queue, bv)
    }, stop: function (bw, bv, e) {
        if (typeof bw !== "string") {
            e = bv;
            bv = bw;
            bw = L
        }
        if (bv && bw !== false) {
            this.queue(bw || "fx", [])
        }
        return this.each(function () {
            var bx, by = false, bA = b.timers, bz = b._data(this);
            if (!e) {
                b._unmark(true, this)
            }
            function bB(bE, bF, bD) {
                var bC = bF[bD];
                b.removeData(bE, bD, true);
                bC.stop(e)
            }

            if (bw == null) {
                for (bx in bz) {
                    if (bz[bx] && bz[bx].stop && bx.indexOf(".run") === bx.length - 4) {
                        bB(this, bz, bx)
                    }
                }
            } else {
                if (bz[bx = bw + ".run"] && bz[bx].stop) {
                    bB(this, bz, bx)
                }
            }
            for (bx = bA.length; bx--;) {
                if (bA[bx].elem === this && (bw == null || bA[bx].queue === bw)) {
                    if (e) {
                        bA[bx](true)
                    } else {
                        bA[bx].saveState()
                    }
                    by = true;
                    bA.splice(bx, 1)
                }
            }
            if (!(e && by)) {
                b.dequeue(this, bw)
            }
        })
    }});
    function bi() {
        setTimeout(at, 0);
        return(a5 = b.now())
    }

    function at() {
        a5 = L
    }

    function a2(bv, e) {
        var bw = {};
        b.each(aI.concat.apply([], aI.slice(0, e)), function () {
            bw[this] = bv
        });
        return bw
    }

    b.each({slideDown: a2("show", 1), slideUp: a2("hide", 1), slideToggle: a2("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, bv) {
        b.fn[e] = function (bw, by, bx) {
            return this.animate(bv, bw, by, bx)
        }
    });
    b.extend({speed: function (bw, bx, bv) {
        var e = bw && typeof bw === "object" ? b.extend({}, bw) : {complete: bv || !bv && bx || b.isFunction(bw) && bw, duration: bw, easing: bv && bx || bx && !b.isFunction(bx) && bx};
        e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
        if (e.queue == null || e.queue === true) {
            e.queue = "fx"
        }
        e.old = e.complete;
        e.complete = function (by) {
            if (b.isFunction(e.old)) {
                e.old.call(this)
            }
            if (e.queue) {
                b.dequeue(this, e.queue)
            } else {
                if (by !== false) {
                    b._unmark(this)
                }
            }
        };
        return e
    }, easing: {linear: function (e) {
        return e
    }, swing: function (e) {
        return(-Math.cos(e * Math.PI) / 2) + 0.5
    }}, timers: [], fx: function (bv, e, bw) {
        this.options = e;
        this.elem = bv;
        this.prop = bw;
        e.orig = e.orig || {}
    }});
    b.fx.prototype = {update: function () {
        if (this.options.step) {
            this.options.step.call(this.elem, this.now, this)
        }
        (b.fx.step[this.prop] || b.fx.step._default)(this)
    }, cur: function () {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
            return this.elem[this.prop]
        }
        var e, bv = b.css(this.elem, this.prop);
        return isNaN(e = parseFloat(bv)) ? !bv || bv === "auto" ? 0 : bv : e
    }, custom: function (bz, by, bx) {
        var e = this, bw = b.fx;
        this.startTime = a5 || bi();
        this.end = by;
        this.now = this.start = bz;
        this.pos = this.state = 0;
        this.unit = bx || this.unit || (b.cssNumber[this.prop] ? "" : "px");
        function bv(bA) {
            return e.step(bA)
        }

        bv.queue = this.options.queue;
        bv.elem = this.elem;
        bv.saveState = function () {
            if (b._data(e.elem, "fxshow" + e.prop) === L) {
                if (e.options.hide) {
                    b._data(e.elem, "fxshow" + e.prop, e.start)
                } else {
                    if (e.options.show) {
                        b._data(e.elem, "fxshow" + e.prop, e.end)
                    }
                }
            }
        };
        if (bv() && b.timers.push(bv) && !a4) {
            a4 = setInterval(bw.tick, bw.interval)
        }
    }, show: function () {
        var e = b._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = e || b.style(this.elem, this.prop);
        this.options.show = true;
        if (e !== L) {
            this.custom(this.cur(), e)
        } else {
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur())
        }
        b(this.elem).show()
    }, hide: function () {
        this.options.orig[this.prop] = b._data(this.elem, "fxshow" + this.prop) || b.style(this.elem, this.prop);
        this.options.hide = true;
        this.custom(this.cur(), 0)
    }, step: function (by) {
        var bA, bB, bv, bx = a5 || bi(), e = true, bz = this.elem, bw = this.options;
        if (by || bx >= bw.duration + this.startTime) {
            this.now = this.end;
            this.pos = this.state = 1;
            this.update();
            bw.animatedProperties[this.prop] = true;
            for (bA in bw.animatedProperties) {
                if (bw.animatedProperties[bA] !== true) {
                    e = false
                }
            }
            if (e) {
                if (bw.overflow != null && !b.support.shrinkWrapBlocks) {
                    b.each(["", "X", "Y"], function (bC, bD) {
                        bz.style["overflow" + bD] = bw.overflow[bC]
                    })
                }
                if (bw.hide) {
                    b(bz).hide()
                }
                if (bw.hide || bw.show) {
                    for (bA in bw.animatedProperties) {
                        b.style(bz, bA, bw.orig[bA]);
                        b.removeData(bz, "fxshow" + bA, true);
                        b.removeData(bz, "toggle" + bA, true)
                    }
                }
                bv = bw.complete;
                if (bv) {
                    bw.complete = false;
                    bv.call(bz)
                }
            }
            return false
        } else {
            if (bw.duration == Infinity) {
                this.now = bx
            } else {
                bB = bx - this.startTime;
                this.state = bB / bw.duration;
                this.pos = b.easing[bw.animatedProperties[this.prop]](this.state, bB, 0, 1, bw.duration);
                this.now = this.start + ((this.end - this.start) * this.pos)
            }
            this.update()
        }
        return true
    }};
    b.extend(b.fx, {tick: function () {
        var bw, bv = b.timers, e = 0;
        for (; e < bv.length; e++) {
            bw = bv[e];
            if (!bw() && bv[e] === bw) {
                bv.splice(e--, 1)
            }
        }
        if (!bv.length) {
            b.fx.stop()
        }
    }, interval: 13, stop: function () {
        clearInterval(a4);
        a4 = null
    }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (e) {
        b.style(e.elem, "opacity", e.now)
    }, _default: function (e) {
        if (e.elem.style && e.elem.style[e.prop] != null) {
            e.elem.style[e.prop] = e.now + e.unit
        } else {
            e.elem[e.prop] = e.now
        }
    }}});
    b.each(aI.concat.apply([], aI), function (e, bv) {
        if (bv.indexOf("margin")) {
            b.fx.step[bv] = function (bw) {
                b.style(bw.elem, bv, Math.max(0, bw.now) + bw.unit)
            }
        }
    });
    if (b.expr && b.expr.filters) {
        b.expr.filters.animated = function (e) {
            return b.grep(b.timers,function (bv) {
                return e === bv.elem
            }).length
        }
    }
    function w(bx) {
        if (!Q[bx]) {
            var e = av.body, bv = b("<" + bx + ">").appendTo(e), bw = bv.css("display");
            bv.remove();
            if (bw === "none" || bw === "") {
                if (!ba) {
                    ba = av.createElement("iframe");
                    ba.frameBorder = ba.width = ba.height = 0
                }
                e.appendChild(ba);
                if (!m || !ba.createElement) {
                    m = (ba.contentWindow || ba.contentDocument).document;
                    m.write((b.support.boxModel ? "<!doctype html>" : "") + "<html><body>");
                    m.close()
                }
                bv = m.createElement(bx);
                m.body.appendChild(bv);
                bw = b.css(bv, "display");
                e.removeChild(ba)
            }
            Q[bx] = bw
        }
        return Q[bx]
    }

    var a8, V = /^t(?:able|d|h)$/i, ad = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in av.documentElement) {
        a8 = function (by, bH, bw, bB) {
            try {
                bB = by.getBoundingClientRect()
            } catch (bF) {
            }
            if (!bB || !b.contains(bw, by)) {
                return bB ? {top: bB.top, left: bB.left} : {top: 0, left: 0}
            }
            var bC = bH.body, bD = aL(bH), bA = bw.clientTop || bC.clientTop || 0, bE = bw.clientLeft || bC.clientLeft || 0, bv = bD.pageYOffset || b.support.boxModel && bw.scrollTop || bC.scrollTop, bz = bD.pageXOffset || b.support.boxModel && bw.scrollLeft || bC.scrollLeft, bG = bB.top + bv - bA, bx = bB.left + bz - bE;
            return{top: bG, left: bx}
        }
    } else {
        a8 = function (bz, bE, bx) {
            var bC, bw = bz.offsetParent, bv = bz, bA = bE.body, bB = bE.defaultView, e = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle, bD = bz.offsetTop, by = bz.offsetLeft;
            while ((bz = bz.parentNode) && bz !== bA && bz !== bx) {
                if (b.support.fixedPosition && e.position === "fixed") {
                    break
                }
                bC = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle;
                bD -= bz.scrollTop;
                by -= bz.scrollLeft;
                if (bz === bw) {
                    bD += bz.offsetTop;
                    by += bz.offsetLeft;
                    if (b.support.doesNotAddBorder && !(b.support.doesAddBorderForTableAndCells && V.test(bz.nodeName))) {
                        bD += parseFloat(bC.borderTopWidth) || 0;
                        by += parseFloat(bC.borderLeftWidth) || 0
                    }
                    bv = bw;
                    bw = bz.offsetParent
                }
                if (b.support.subtractsBorderForOverflowNotVisible && bC.overflow !== "visible") {
                    bD += parseFloat(bC.borderTopWidth) || 0;
                    by += parseFloat(bC.borderLeftWidth) || 0
                }
                e = bC
            }
            if (e.position === "relative" || e.position === "static") {
                bD += bA.offsetTop;
                by += bA.offsetLeft
            }
            if (b.support.fixedPosition && e.position === "fixed") {
                bD += Math.max(bx.scrollTop, bA.scrollTop);
                by += Math.max(bx.scrollLeft, bA.scrollLeft)
            }
            return{top: bD, left: by}
        }
    }
    b.fn.offset = function (e) {
        if (arguments.length) {
            return e === L ? this : this.each(function (bx) {
                b.offset.setOffset(this, e, bx)
            })
        }
        var bv = this[0], bw = bv && bv.ownerDocument;
        if (!bw) {
            return null
        }
        if (bv === bw.body) {
            return b.offset.bodyOffset(bv)
        }
        return a8(bv, bw, bw.documentElement)
    };
    b.offset = {bodyOffset: function (e) {
        var bw = e.offsetTop, bv = e.offsetLeft;
        if (b.support.doesNotIncludeMarginInBodyOffset) {
            bw += parseFloat(b.css(e, "marginTop")) || 0;
            bv += parseFloat(b.css(e, "marginLeft")) || 0
        }
        return{top: bw, left: bv}
    }, setOffset: function (bx, bG, bA) {
        var bB = b.css(bx, "position");
        if (bB === "static") {
            bx.style.position = "relative"
        }
        var bz = b(bx), bv = bz.offset(), e = b.css(bx, "top"), bE = b.css(bx, "left"), bF = (bB === "absolute" || bB === "fixed") && b.inArray("auto", [e, bE]) > -1, bD = {}, bC = {}, bw, by;
        if (bF) {
            bC = bz.position();
            bw = bC.top;
            by = bC.left
        } else {
            bw = parseFloat(e) || 0;
            by = parseFloat(bE) || 0
        }
        if (b.isFunction(bG)) {
            bG = bG.call(bx, bA, bv)
        }
        if (bG.top != null) {
            bD.top = (bG.top - bv.top) + bw
        }
        if (bG.left != null) {
            bD.left = (bG.left - bv.left) + by
        }
        if ("using" in bG) {
            bG.using.call(bx, bD)
        } else {
            bz.css(bD)
        }
    }};
    b.fn.extend({position: function () {
        if (!this[0]) {
            return null
        }
        var bw = this[0], bv = this.offsetParent(), bx = this.offset(), e = ad.test(bv[0].nodeName) ? {top: 0, left: 0} : bv.offset();
        bx.top -= parseFloat(b.css(bw, "marginTop")) || 0;
        bx.left -= parseFloat(b.css(bw, "marginLeft")) || 0;
        e.top += parseFloat(b.css(bv[0], "borderTopWidth")) || 0;
        e.left += parseFloat(b.css(bv[0], "borderLeftWidth")) || 0;
        return{top: bx.top - e.top, left: bx.left - e.left}
    }, offsetParent: function () {
        return this.map(function () {
            var e = this.offsetParent || av.body;
            while (e && (!ad.test(e.nodeName) && b.css(e, "position") === "static")) {
                e = e.offsetParent
            }
            return e
        })
    }});
    b.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (bw, bv) {
        var e = /Y/.test(bv);
        b.fn[bw] = function (bx) {
            return b.access(this, function (by, bB, bA) {
                var bz = aL(by);
                if (bA === L) {
                    return bz ? (bv in bz) ? bz[bv] : b.support.boxModel && bz.document.documentElement[bB] || bz.document.body[bB] : by[bB]
                }
                if (bz) {
                    bz.scrollTo(!e ? bA : b(bz).scrollLeft(), e ? bA : b(bz).scrollTop())
                } else {
                    by[bB] = bA
                }
            }, bw, bx, arguments.length, null)
        }
    });
    function aL(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }

    b.each({Height: "height", Width: "width"}, function (bw, bx) {
        var bv = "client" + bw, e = "scroll" + bw, by = "offset" + bw;
        b.fn["inner" + bw] = function () {
            var bz = this[0];
            return bz ? bz.style ? parseFloat(b.css(bz, bx, "padding")) : this[bx]() : null
        };
        b.fn["outer" + bw] = function (bA) {
            var bz = this[0];
            return bz ? bz.style ? parseFloat(b.css(bz, bx, bA ? "margin" : "border")) : this[bx]() : null
        };
        b.fn[bx] = function (bz) {
            return b.access(this, function (bC, bB, bD) {
                var bF, bE, bG, bA;
                if (b.isWindow(bC)) {
                    bF = bC.document;
                    bE = bF.documentElement[bv];
                    return b.support.boxModel && bE || bF.body && bF.body[bv] || bE
                }
                if (bC.nodeType === 9) {
                    bF = bC.documentElement;
                    if (bF[bv] >= bF[e]) {
                        return bF[bv]
                    }
                    return Math.max(bC.body[e], bF[e], bC.body[by], bF[by])
                }
                if (bD === L) {
                    bG = b.css(bC, bB);
                    bA = parseFloat(bG);
                    return b.isNumeric(bA) ? bA : bG
                }
                b(bC).css(bB, bD)
            }, bx, bz, arguments.length, null)
        }
    });
    bd.jQuery = bd.$ = b;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function () {
            return b
        })
    }
})(window);
;
/*! jQuery UI - v1.10.3 - 2013-08-17
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.sortable.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function (b, f) {
    var a = 0, e = /^ui-id-\d+$/;
    b.ui = b.ui || {};
    b.extend(b.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}});
    b.fn.extend({focus: (function (g) {
        return function (h, i) {
            return typeof h === "number" ? this.each(function () {
                var j = this;
                setTimeout(function () {
                    b(j).focus();
                    if (i) {
                        i.call(j)
                    }
                }, h)
            }) : g.apply(this, arguments)
        }
    })(b.fn.focus), scrollParent: function () {
        var g;
        if ((b.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
            g = this.parents().filter(function () {
                return(/(relative|absolute|fixed)/).test(b.css(this, "position")) && (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
            }).eq(0)
        } else {
            g = this.parents().filter(function () {
                return(/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
            }).eq(0)
        }
        return(/fixed/).test(this.css("position")) || !g.length ? b(document) : g
    }, zIndex: function (j) {
        if (j !== f) {
            return this.css("zIndex", j)
        }
        if (this.length) {
            var h = b(this[0]), g, i;
            while (h.length && h[0] !== document) {
                g = h.css("position");
                if (g === "absolute" || g === "relative" || g === "fixed") {
                    i = parseInt(h.css("zIndex"), 10);
                    if (!isNaN(i) && i !== 0) {
                        return i
                    }
                }
                h = h.parent()
            }
        }
        return 0
    }, uniqueId: function () {
        return this.each(function () {
            if (!this.id) {
                this.id = "ui-id-" + (++a)
            }
        })
    }, removeUniqueId: function () {
        return this.each(function () {
            if (e.test(this.id)) {
                b(this).removeAttr("id")
            }
        })
    }});
    function d(i, g) {
        var k, j, h, l = i.nodeName.toLowerCase();
        if ("area" === l) {
            k = i.parentNode;
            j = k.name;
            if (!i.href || !j || k.nodeName.toLowerCase() !== "map") {
                return false
            }
            h = b("img[usemap=#" + j + "]")[0];
            return !!h && c(h)
        }
        return(/input|select|textarea|button|object/.test(l) ? !i.disabled : "a" === l ? i.href || g : g) && c(i)
    }

    function c(g) {
        return b.expr.filters.visible(g) && !b(g).parents().addBack().filter(function () {
            return b.css(this, "visibility") === "hidden"
        }).length
    }

    b.extend(b.expr[":"], {data: b.expr.createPseudo ? b.expr.createPseudo(function (g) {
        return function (h) {
            return !!b.data(h, g)
        }
    }) : function (j, h, g) {
        return !!b.data(j, g[3])
    }, focusable: function (g) {
        return d(g, !isNaN(b.attr(g, "tabindex")))
    }, tabbable: function (i) {
        var g = b.attr(i, "tabindex"), h = isNaN(g);
        return(h || g >= 0) && d(i, !h)
    }});
    if (!b("<a>").outerWidth(1).jquery) {
        b.each(["Width", "Height"], function (j, g) {
            var h = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], k = g.toLowerCase(), m = {innerWidth: b.fn.innerWidth, innerHeight: b.fn.innerHeight, outerWidth: b.fn.outerWidth, outerHeight: b.fn.outerHeight};

            function l(o, n, i, p) {
                b.each(h, function () {
                    n -= parseFloat(b.css(o, "padding" + this)) || 0;
                    if (i) {
                        n -= parseFloat(b.css(o, "border" + this + "Width")) || 0
                    }
                    if (p) {
                        n -= parseFloat(b.css(o, "margin" + this)) || 0
                    }
                });
                return n
            }

            b.fn["inner" + g] = function (i) {
                if (i === f) {
                    return m["inner" + g].call(this)
                }
                return this.each(function () {
                    b(this).css(k, l(this, i) + "px")
                })
            };
            b.fn["outer" + g] = function (i, n) {
                if (typeof i !== "number") {
                    return m["outer" + g].call(this, i)
                }
                return this.each(function () {
                    b(this).css(k, l(this, i, true, n) + "px")
                })
            }
        })
    }
    if (!b.fn.addBack) {
        b.fn.addBack = function (g) {
            return this.add(g == null ? this.prevObject : this.prevObject.filter(g))
        }
    }
    if (b("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        b.fn.removeData = (function (g) {
            return function (h) {
                if (arguments.length) {
                    return g.call(this, b.camelCase(h))
                } else {
                    return g.call(this)
                }
            }
        })(b.fn.removeData)
    }
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.support.selectstart = "onselectstart" in document.createElement("div");
    b.fn.extend({disableSelection: function () {
        return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (g) {
            g.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }});
    b.extend(b.ui, {plugin: {add: function (h, j, l) {
        var g, k = b.ui[h].prototype;
        for (g in l) {
            k.plugins[g] = k.plugins[g] || [];
            k.plugins[g].push([j, l[g]])
        }
    }, call: function (g, j, h) {
        var k, l = g.plugins[j];
        if (!l || !g.element[0].parentNode || g.element[0].parentNode.nodeType === 11) {
            return
        }
        for (k = 0; k < l.length; k++) {
            if (g.options[l[k][0]]) {
                l[k][1].apply(g.element, h)
            }
        }
    }}, hasScroll: function (j, h) {
        if (b(j).css("overflow") === "hidden") {
            return false
        }
        var g = (h && h === "left") ? "scrollLeft" : "scrollTop", i = false;
        if (j[g] > 0) {
            return true
        }
        j[g] = 1;
        i = (j[g] > 0);
        j[g] = 0;
        return i
    }})
})(jQuery);
(function (b, e) {
    var a = 0, d = Array.prototype.slice, c = b.cleanData;
    b.cleanData = function (f) {
        for (var g = 0, h; (h = f[g]) != null; g++) {
            try {
                b(h).triggerHandler("remove")
            } catch (j) {
            }
        }
        c(f)
    };
    b.widget = function (f, g, n) {
        var k, l, i, m, h = {}, j = f.split(".")[0];
        f = f.split(".")[1];
        k = j + "-" + f;
        if (!n) {
            n = g;
            g = b.Widget
        }
        b.expr[":"][k.toLowerCase()] = function (o) {
            return !!b.data(o, k)
        };
        b[j] = b[j] || {};
        l = b[j][f];
        i = b[j][f] = function (o, p) {
            if (!this._createWidget) {
                return new i(o, p)
            }
            if (arguments.length) {
                this._createWidget(o, p)
            }
        };
        b.extend(i, l, {version: n.version, _proto: b.extend({}, n), _childConstructors: []});
        m = new g();
        m.options = b.widget.extend({}, m.options);
        b.each(n, function (p, o) {
            if (!b.isFunction(o)) {
                h[p] = o;
                return
            }
            h[p] = (function () {
                var q = function () {
                    return g.prototype[p].apply(this, arguments)
                }, r = function (s) {
                    return g.prototype[p].apply(this, s)
                };
                return function () {
                    var u = this._super, s = this._superApply, t;
                    this._super = q;
                    this._superApply = r;
                    t = o.apply(this, arguments);
                    this._super = u;
                    this._superApply = s;
                    return t
                }
            })()
        });
        i.prototype = b.widget.extend(m, {widgetEventPrefix: l ? m.widgetEventPrefix : f}, h, {constructor: i, namespace: j, widgetName: f, widgetFullName: k});
        if (l) {
            b.each(l._childConstructors, function (p, q) {
                var o = q.prototype;
                b.widget(o.namespace + "." + o.widgetName, i, q._proto)
            });
            delete l._childConstructors
        } else {
            g._childConstructors.push(i)
        }
        b.widget.bridge(f, i)
    };
    b.widget.extend = function (k) {
        var g = d.call(arguments, 1), j = 0, f = g.length, h, i;
        for (; j < f; j++) {
            for (h in g[j]) {
                i = g[j][h];
                if (g[j].hasOwnProperty(h) && i !== e) {
                    if (b.isPlainObject(i)) {
                        k[h] = b.isPlainObject(k[h]) ? b.widget.extend({}, k[h], i) : b.widget.extend({}, i)
                    } else {
                        k[h] = i
                    }
                }
            }
        }
        return k
    };
    b.widget.bridge = function (g, f) {
        var h = f.prototype.widgetFullName || g;
        b.fn[g] = function (k) {
            var i = typeof k === "string", j = d.call(arguments, 1), l = this;
            k = !i && j.length ? b.widget.extend.apply(null, [k].concat(j)) : k;
            if (i) {
                this.each(function () {
                    var n, m = b.data(this, h);
                    if (!m) {
                        return b.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + k + "'")
                    }
                    if (!b.isFunction(m[k]) || k.charAt(0) === "_") {
                        return b.error("no such method '" + k + "' for " + g + " widget instance")
                    }
                    n = m[k].apply(m, j);
                    if (n !== m && n !== e) {
                        l = n && n.jquery ? l.pushStack(n.get()) : n;
                        return false
                    }
                })
            } else {
                this.each(function () {
                    var m = b.data(this, h);
                    if (m) {
                        m.option(k || {})._init()
                    } else {
                        b.data(this, h, new f(k, this))
                    }
                })
            }
            return l
        }
    };
    b.Widget = function () {
    };
    b.Widget._childConstructors = [];
    b.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: false, create: null}, _createWidget: function (f, g) {
        g = b(g || this.defaultElement || this)[0];
        this.element = b(g);
        this.uuid = a++;
        this.eventNamespace = "." + this.widgetName + this.uuid;
        this.options = b.widget.extend({}, this.options, this._getCreateOptions(), f);
        this.bindings = b();
        this.hoverable = b();
        this.focusable = b();
        if (g !== this) {
            b.data(g, this.widgetFullName, this);
            this._on(true, this.element, {remove: function (h) {
                if (h.target === g) {
                    this.destroy()
                }
            }});
            this.document = b(g.style ? g.ownerDocument : g.document || g);
            this.window = b(this.document[0].defaultView || this.document[0].parentWindow)
        }
        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init()
    }, _getCreateOptions: b.noop, _getCreateEventData: b.noop, _create: b.noop, _init: b.noop, destroy: function () {
        this._destroy();
        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus")
    }, _destroy: b.noop, widget: function () {
        return this.element
    }, option: function (j, k) {
        var f = j, l, h, g;
        if (arguments.length === 0) {
            return b.widget.extend({}, this.options)
        }
        if (typeof j === "string") {
            f = {};
            l = j.split(".");
            j = l.shift();
            if (l.length) {
                h = f[j] = b.widget.extend({}, this.options[j]);
                for (g = 0; g < l.length - 1; g++) {
                    h[l[g]] = h[l[g]] || {};
                    h = h[l[g]]
                }
                j = l.pop();
                if (k === e) {
                    return h[j] === e ? null : h[j]
                }
                h[j] = k
            } else {
                if (k === e) {
                    return this.options[j] === e ? null : this.options[j]
                }
                f[j] = k
            }
        }
        this._setOptions(f);
        return this
    }, _setOptions: function (f) {
        var g;
        for (g in f) {
            this._setOption(g, f[g])
        }
        return this
    }, _setOption: function (f, g) {
        this.options[f] = g;
        if (f === "disabled") {
            this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        }
        return this
    }, enable: function () {
        return this._setOption("disabled", false)
    }, disable: function () {
        return this._setOption("disabled", true)
    }, _on: function (i, h, g) {
        var j, f = this;
        if (typeof i !== "boolean") {
            g = h;
            h = i;
            i = false
        }
        if (!g) {
            g = h;
            h = this.element;
            j = this.widget()
        } else {
            h = j = b(h);
            this.bindings = this.bindings.add(h)
        }
        b.each(g, function (p, o) {
            function m() {
                if (!i && (f.options.disabled === true || b(this).hasClass("ui-state-disabled"))) {
                    return
                }
                return(typeof o === "string" ? f[o] : o).apply(f, arguments)
            }

            if (typeof o !== "string") {
                m.guid = o.guid = o.guid || m.guid || b.guid++
            }
            var n = p.match(/^(\w+)\s*(.*)$/), l = n[1] + f.eventNamespace, k = n[2];
            if (k) {
                j.delegate(k, l, m)
            } else {
                h.bind(l, m)
            }
        })
    }, _off: function (g, f) {
        f = (f || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
        g.unbind(f).undelegate(f)
    }, _delay: function (i, h) {
        function g() {
            return(typeof i === "string" ? f[i] : i).apply(f, arguments)
        }

        var f = this;
        return setTimeout(g, h || 0)
    }, _hoverable: function (f) {
        this.hoverable = this.hoverable.add(f);
        this._on(f, {mouseenter: function (g) {
            b(g.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (g) {
            b(g.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (f) {
        this.focusable = this.focusable.add(f);
        this._on(f, {focusin: function (g) {
            b(g.currentTarget).addClass("ui-state-focus")
        }, focusout: function (g) {
            b(g.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (f, g, h) {
        var k, j, i = this.options[f];
        h = h || {};
        g = b.Event(g);
        g.type = (f === this.widgetEventPrefix ? f : this.widgetEventPrefix + f).toLowerCase();
        g.target = this.element[0];
        j = g.originalEvent;
        if (j) {
            for (k in j) {
                if (!(k in g)) {
                    g[k] = j[k]
                }
            }
        }
        this.element.trigger(g, h);
        return !(b.isFunction(i) && i.apply(this.element[0], [g].concat(h)) === false || g.isDefaultPrevented())
    }};
    b.each({show: "fadeIn", hide: "fadeOut"}, function (g, f) {
        b.Widget.prototype["_" + g] = function (j, i, l) {
            if (typeof i === "string") {
                i = {effect: i}
            }
            var k, h = !i ? g : i === true || typeof i === "number" ? f : i.effect || f;
            i = i || {};
            if (typeof i === "number") {
                i = {duration: i}
            }
            k = !b.isEmptyObject(i);
            i.complete = l;
            if (i.delay) {
                j.delay(i.delay)
            }
            if (k && b.effects && b.effects.effect[h]) {
                j[g](i)
            } else {
                if (h !== g && j[h]) {
                    j[h](i.duration, i.easing, l)
                } else {
                    j.queue(function (m) {
                        b(this)[g]();
                        if (l) {
                            l.call(j[0])
                        }
                        m()
                    })
                }
            }
        }
    })
})(jQuery);
(function (b, c) {
    var a = false;
    b(document).mouseup(function () {
        a = false
    });
    b.widget("ui.mouse", {version: "1.10.3", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
        var d = this;
        this.element.bind("mousedown." + this.widgetName,function (e) {
            return d._mouseDown(e)
        }).bind("click." + this.widgetName, function (e) {
            if (true === b.data(e.target, d.widgetName + ".preventClickEvent")) {
                b.removeData(e.target, d.widgetName + ".preventClickEvent");
                e.stopImmediatePropagation();
                return false
            }
        });
        this.started = false
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName);
        if (this._mouseMoveDelegate) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        }
    }, _mouseDown: function (f) {
        if (a) {
            return
        }
        (this._mouseStarted && this._mouseUp(f));
        this._mouseDownEvent = f;
        var e = this, g = (f.which === 1), d = (typeof this.options.cancel === "string" && f.target.nodeName ? b(f.target).closest(this.options.cancel).length : false);
        if (!g || d || !this._mouseCapture(f)) {
            return true
        }
        this.mouseDelayMet = !this.options.delay;
        if (!this.mouseDelayMet) {
            this._mouseDelayTimer = setTimeout(function () {
                e.mouseDelayMet = true
            }, this.options.delay)
        }
        if (this._mouseDistanceMet(f) && this._mouseDelayMet(f)) {
            this._mouseStarted = (this._mouseStart(f) !== false);
            if (!this._mouseStarted) {
                f.preventDefault();
                return true
            }
        }
        if (true === b.data(f.target, this.widgetName + ".preventClickEvent")) {
            b.removeData(f.target, this.widgetName + ".preventClickEvent")
        }
        this._mouseMoveDelegate = function (h) {
            return e._mouseMove(h)
        };
        this._mouseUpDelegate = function (h) {
            return e._mouseUp(h)
        };
        b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
        f.preventDefault();
        a = true;
        return true
    }, _mouseMove: function (d) {
        if (b.ui.ie && (!document.documentMode || document.documentMode < 9) && !d.button) {
            return this._mouseUp(d)
        }
        if (this._mouseStarted) {
            this._mouseDrag(d);
            return d.preventDefault()
        }
        if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
            this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
            (this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d))
        }
        return !this._mouseStarted
    }, _mouseUp: function (d) {
        b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        if (this._mouseStarted) {
            this._mouseStarted = false;
            if (d.target === this._mouseDownEvent.target) {
                b.data(d.target, this.widgetName + ".preventClickEvent", true)
            }
            this._mouseStop(d)
        }
        return false
    }, _mouseDistanceMet: function (d) {
        return(Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance)
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return true
    }})
})(jQuery);
(function (e, c) {
    e.ui = e.ui || {};
    var j, k = Math.max, o = Math.abs, m = Math.round, d = /left|center|right/, h = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, b = /%$/, g = e.fn.position;

    function n(r, q, p) {
        return[parseFloat(r[0]) * (b.test(r[0]) ? q / 100 : 1), parseFloat(r[1]) * (b.test(r[1]) ? p / 100 : 1)]
    }

    function i(p, q) {
        return parseInt(e.css(p, q), 10) || 0
    }

    function f(q) {
        var p = q[0];
        if (p.nodeType === 9) {
            return{width: q.width(), height: q.height(), offset: {top: 0, left: 0}}
        }
        if (e.isWindow(p)) {
            return{width: q.width(), height: q.height(), offset: {top: q.scrollTop(), left: q.scrollLeft()}}
        }
        if (p.preventDefault) {
            return{width: 0, height: 0, offset: {top: p.pageY, left: p.pageX}}
        }
        return{width: q.outerWidth(), height: q.outerHeight(), offset: q.offset()}
    }

    e.position = {scrollbarWidth: function () {
        if (j !== c) {
            return j
        }
        var q, p, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = s.children()[0];
        e("body").append(s);
        q = r.offsetWidth;
        s.css("overflow", "scroll");
        p = r.offsetWidth;
        if (q === p) {
            p = s[0].clientWidth
        }
        s.remove();
        return(j = q - p)
    }, getScrollInfo: function (t) {
        var s = t.isWindow ? "" : t.element.css("overflow-x"), r = t.isWindow ? "" : t.element.css("overflow-y"), q = s === "scroll" || (s === "auto" && t.width < t.element[0].scrollWidth), p = r === "scroll" || (r === "auto" && t.height < t.element[0].scrollHeight);
        return{width: p ? e.position.scrollbarWidth() : 0, height: q ? e.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (q) {
        var r = e(q || window), p = e.isWindow(r[0]);
        return{element: r, isWindow: p, offset: r.offset() || {left: 0, top: 0}, scrollLeft: r.scrollLeft(), scrollTop: r.scrollTop(), width: p ? r.width() : r.outerWidth(), height: p ? r.height() : r.outerHeight()}
    }};
    e.fn.position = function (z) {
        if (!z || !z.of) {
            return g.apply(this, arguments)
        }
        z = e.extend({}, z);
        var A, w, u, y, t, p, v = e(z.of), s = e.position.getWithinInfo(z.within), q = e.position.getScrollInfo(s), x = (z.collision || "flip").split(" "), r = {};
        p = f(v);
        if (v[0].preventDefault) {
            z.at = "left top"
        }
        w = p.width;
        u = p.height;
        y = p.offset;
        t = e.extend({}, y);
        e.each(["my", "at"], function () {
            var D = (z[this] || "").split(" "), C, B;
            if (D.length === 1) {
                D = d.test(D[0]) ? D.concat(["center"]) : h.test(D[0]) ? ["center"].concat(D) : ["center", "center"]
            }
            D[0] = d.test(D[0]) ? D[0] : "center";
            D[1] = h.test(D[1]) ? D[1] : "center";
            C = a.exec(D[0]);
            B = a.exec(D[1]);
            r[this] = [C ? C[0] : 0, B ? B[0] : 0];
            z[this] = [l.exec(D[0])[0], l.exec(D[1])[0]]
        });
        if (x.length === 1) {
            x[1] = x[0]
        }
        if (z.at[0] === "right") {
            t.left += w
        } else {
            if (z.at[0] === "center") {
                t.left += w / 2
            }
        }
        if (z.at[1] === "bottom") {
            t.top += u
        } else {
            if (z.at[1] === "center") {
                t.top += u / 2
            }
        }
        A = n(r.at, w, u);
        t.left += A[0];
        t.top += A[1];
        return this.each(function () {
            var C, L, E = e(this), G = E.outerWidth(), D = E.outerHeight(), F = i(this, "marginLeft"), B = i(this, "marginTop"), K = G + F + i(this, "marginRight") + q.width, J = D + B + i(this, "marginBottom") + q.height, H = e.extend({}, t), I = n(r.my, E.outerWidth(), E.outerHeight());
            if (z.my[0] === "right") {
                H.left -= G
            } else {
                if (z.my[0] === "center") {
                    H.left -= G / 2
                }
            }
            if (z.my[1] === "bottom") {
                H.top -= D
            } else {
                if (z.my[1] === "center") {
                    H.top -= D / 2
                }
            }
            H.left += I[0];
            H.top += I[1];
            if (!e.support.offsetFractions) {
                H.left = m(H.left);
                H.top = m(H.top)
            }
            C = {marginLeft: F, marginTop: B};
            e.each(["left", "top"], function (N, M) {
                if (e.ui.position[x[N]]) {
                    e.ui.position[x[N]][M](H, {targetWidth: w, targetHeight: u, elemWidth: G, elemHeight: D, collisionPosition: C, collisionWidth: K, collisionHeight: J, offset: [A[0] + I[0], A[1] + I[1]], my: z.my, at: z.at, within: s, elem: E})
                }
            });
            if (z.using) {
                L = function (P) {
                    var R = y.left - H.left, O = R + w - G, Q = y.top - H.top, N = Q + u - D, M = {target: {element: v, left: y.left, top: y.top, width: w, height: u}, element: {element: E, left: H.left, top: H.top, width: G, height: D}, horizontal: O < 0 ? "left" : R > 0 ? "right" : "center", vertical: N < 0 ? "top" : Q > 0 ? "bottom" : "middle"};
                    if (w < G && o(R + O) < w) {
                        M.horizontal = "center"
                    }
                    if (u < D && o(Q + N) < u) {
                        M.vertical = "middle"
                    }
                    if (k(o(R), o(O)) > k(o(Q), o(N))) {
                        M.important = "horizontal"
                    } else {
                        M.important = "vertical"
                    }
                    z.using.call(this, P, M)
                }
            }
            E.offset(e.extend(H, {using: L}))
        })
    };
    e.ui.position = {fit: {left: function (t, s) {
        var r = s.within, v = r.isWindow ? r.scrollLeft : r.offset.left, x = r.width, u = t.left - s.collisionPosition.marginLeft, w = v - u, q = u + s.collisionWidth - x - v, p;
        if (s.collisionWidth > x) {
            if (w > 0 && q <= 0) {
                p = t.left + w + s.collisionWidth - x - v;
                t.left += w - p
            } else {
                if (q > 0 && w <= 0) {
                    t.left = v
                } else {
                    if (w > q) {
                        t.left = v + x - s.collisionWidth
                    } else {
                        t.left = v
                    }
                }
            }
        } else {
            if (w > 0) {
                t.left += w
            } else {
                if (q > 0) {
                    t.left -= q
                } else {
                    t.left = k(t.left - u, t.left)
                }
            }
        }
    }, top: function (s, r) {
        var q = r.within, w = q.isWindow ? q.scrollTop : q.offset.top, x = r.within.height, u = s.top - r.collisionPosition.marginTop, v = w - u, t = u + r.collisionHeight - x - w, p;
        if (r.collisionHeight > x) {
            if (v > 0 && t <= 0) {
                p = s.top + v + r.collisionHeight - x - w;
                s.top += v - p
            } else {
                if (t > 0 && v <= 0) {
                    s.top = w
                } else {
                    if (v > t) {
                        s.top = w + x - r.collisionHeight
                    } else {
                        s.top = w
                    }
                }
            }
        } else {
            if (v > 0) {
                s.top += v
            } else {
                if (t > 0) {
                    s.top -= t
                } else {
                    s.top = k(s.top - u, s.top)
                }
            }
        }
    }}, flip: {left: function (v, u) {
        var t = u.within, z = t.offset.left + t.scrollLeft, C = t.width, r = t.isWindow ? t.scrollLeft : t.offset.left, w = v.left - u.collisionPosition.marginLeft, A = w - r, q = w + u.collisionWidth - C - r, y = u.my[0] === "left" ? -u.elemWidth : u.my[0] === "right" ? u.elemWidth : 0, B = u.at[0] === "left" ? u.targetWidth : u.at[0] === "right" ? -u.targetWidth : 0, s = -2 * u.offset[0], p, x;
        if (A < 0) {
            p = v.left + y + B + s + u.collisionWidth - C - z;
            if (p < 0 || p < o(A)) {
                v.left += y + B + s
            }
        } else {
            if (q > 0) {
                x = v.left - u.collisionPosition.marginLeft + y + B + s - r;
                if (x > 0 || o(x) < q) {
                    v.left += y + B + s
                }
            }
        }
    }, top: function (u, t) {
        var s = t.within, B = s.offset.top + s.scrollTop, C = s.height, p = s.isWindow ? s.scrollTop : s.offset.top, w = u.top - t.collisionPosition.marginTop, y = w - p, v = w + t.collisionHeight - C - p, z = t.my[1] === "top", x = z ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, D = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0, r = -2 * t.offset[1], A, q;
        if (y < 0) {
            q = u.top + x + D + r + t.collisionHeight - C - B;
            if ((u.top + x + D + r) > y && (q < 0 || q < o(y))) {
                u.top += x + D + r
            }
        } else {
            if (v > 0) {
                A = u.top - t.collisionPosition.marginTop + x + D + r - p;
                if ((u.top + x + D + r) > v && (A > 0 || o(A) < v)) {
                    u.top += x + D + r
                }
            }
        }
    }}, flipfit: {left: function () {
        e.ui.position.flip.left.apply(this, arguments);
        e.ui.position.fit.left.apply(this, arguments)
    }, top: function () {
        e.ui.position.flip.top.apply(this, arguments);
        e.ui.position.fit.top.apply(this, arguments)
    }}};
    (function () {
        var t, v, q, s, r, p = document.getElementsByTagName("body")[0], u = document.createElement("div");
        t = document.createElement(p ? "div" : "body");
        q = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
        if (p) {
            e.extend(q, {position: "absolute", left: "-1000px", top: "-1000px"})
        }
        for (r in q) {
            t.style[r] = q[r]
        }
        t.appendChild(u);
        v = p || document.documentElement;
        v.insertBefore(t, v.firstChild);
        u.style.cssText = "position: absolute; left: 10.7432222px;";
        s = e(u).offset().left;
        e.support.offsetFractions = s > 10 && s < 11;
        t.innerHTML = "";
        v.removeChild(t)
    })()
}(jQuery));
(function (a, b) {
    a.widget("ui.draggable", a.ui.mouse, {version: "1.10.3", widgetEventPrefix: "drag", options: {addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false, drag: null, start: null, stop: null}, _create: function () {
        if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
            this.element[0].style.position = "relative"
        }
        if (this.options.addClasses) {
            this.element.addClass("ui-draggable")
        }
        if (this.options.disabled) {
            this.element.addClass("ui-draggable-disabled")
        }
        this._mouseInit()
    }, _destroy: function () {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
        this._mouseDestroy()
    }, _mouseCapture: function (c) {
        var d = this.options;
        if (this.helper || d.disabled || a(c.target).closest(".ui-resizable-handle").length > 0) {
            return false
        }
        this.handle = this._getHandle(c);
        if (!this.handle) {
            return false
        }
        a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function () {
            a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1000}).css(a(this).offset()).appendTo("body")
        });
        return true
    }, _mouseStart: function (c) {
        var d = this.options;
        this.helper = this._createHelper(c);
        this.helper.addClass("ui-draggable-dragging");
        this._cacheHelperProportions();
        if (a.ui.ddmanager) {
            a.ui.ddmanager.current = this
        }
        this._cacheMargins();
        this.cssPosition = this.helper.css("position");
        this.scrollParent = this.helper.scrollParent();
        this.offsetParent = this.helper.offsetParent();
        this.offsetParentCssPosition = this.offsetParent.css("position");
        this.offset = this.positionAbs = this.element.offset();
        this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
        this.offset.scroll = false;
        a.extend(this.offset, {click: {left: c.pageX - this.offset.left, top: c.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()});
        this.originalPosition = this.position = this._generatePosition(c);
        this.originalPageX = c.pageX;
        this.originalPageY = c.pageY;
        (d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt));
        this._setContainment();
        if (this._trigger("start", c) === false) {
            this._clear();
            return false
        }
        this._cacheHelperProportions();
        if (a.ui.ddmanager && !d.dropBehaviour) {
            a.ui.ddmanager.prepareOffsets(this, c)
        }
        this._mouseDrag(c, true);
        if (a.ui.ddmanager) {
            a.ui.ddmanager.dragStart(this, c)
        }
        return true
    }, _mouseDrag: function (c, e) {
        if (this.offsetParentCssPosition === "fixed") {
            this.offset.parent = this._getParentOffset()
        }
        this.position = this._generatePosition(c);
        this.positionAbs = this._convertPositionTo("absolute");
        if (!e) {
            var d = this._uiHash();
            if (this._trigger("drag", c, d) === false) {
                this._mouseUp({});
                return false
            }
            this.position = d.position
        }
        if (!this.options.axis || this.options.axis !== "y") {
            this.helper[0].style.left = this.position.left + "px"
        }
        if (!this.options.axis || this.options.axis !== "x") {
            this.helper[0].style.top = this.position.top + "px"
        }
        if (a.ui.ddmanager) {
            a.ui.ddmanager.drag(this, c)
        }
        return false
    }, _mouseStop: function (d) {
        var c = this, e = false;
        if (a.ui.ddmanager && !this.options.dropBehaviour) {
            e = a.ui.ddmanager.drop(this, d)
        }
        if (this.dropped) {
            e = this.dropped;
            this.dropped = false
        }
        if (this.options.helper === "original" && !a.contains(this.element[0].ownerDocument, this.element[0])) {
            return false
        }
        if ((this.options.revert === "invalid" && !e) || (this.options.revert === "valid" && e) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, e))) {
            a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                if (c._trigger("stop", d) !== false) {
                    c._clear()
                }
            })
        } else {
            if (this._trigger("stop", d) !== false) {
                this._clear()
            }
        }
        return false
    }, _mouseUp: function (c) {
        a("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        });
        if (a.ui.ddmanager) {
            a.ui.ddmanager.dragStop(this, c)
        }
        return a.ui.mouse.prototype._mouseUp.call(this, c)
    }, cancel: function () {
        if (this.helper.is(".ui-draggable-dragging")) {
            this._mouseUp({})
        } else {
            this._clear()
        }
        return this
    }, _getHandle: function (c) {
        return this.options.handle ? !!a(c.target).closest(this.element.find(this.options.handle)).length : true
    }, _createHelper: function (d) {
        var e = this.options, c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d])) : (e.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
        if (!c.parents("body").length) {
            c.appendTo((e.appendTo === "parent" ? this.element[0].parentNode : e.appendTo))
        }
        if (c[0] !== this.element[0] && !(/(fixed|absolute)/).test(c.css("position"))) {
            c.css("position", "absolute")
        }
        return c
    }, _adjustOffsetFromHelper: function (c) {
        if (typeof c === "string") {
            c = c.split(" ")
        }
        if (a.isArray(c)) {
            c = {left: +c[0], top: +c[1] || 0}
        }
        if ("left" in c) {
            this.offset.click.left = c.left + this.margins.left
        }
        if ("right" in c) {
            this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
        }
        if ("top" in c) {
            this.offset.click.top = c.top + this.margins.top
        }
        if ("bottom" in c) {
            this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
        }
    }, _getParentOffset: function () {
        var c = this.offsetParent.offset();
        if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
            c.left += this.scrollParent.scrollLeft();
            c.top += this.scrollParent.scrollTop()
        }
        if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
            c = {top: 0, left: 0}
        }
        return{top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if (this.cssPosition === "relative") {
            var c = this.element.position();
            return{top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        } else {
            return{top: 0, left: 0}
        }
    }, _cacheMargins: function () {
        this.margins = {left: (parseInt(this.element.css("marginLeft"), 10) || 0), top: (parseInt(this.element.css("marginTop"), 10) || 0), right: (parseInt(this.element.css("marginRight"), 10) || 0), bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var e, g, d, f = this.options;
        if (!f.containment) {
            this.containment = null;
            return
        }
        if (f.containment === "window") {
            this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            return
        }
        if (f.containment === "document") {
            this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            return
        }
        if (f.containment.constructor === Array) {
            this.containment = f.containment;
            return
        }
        if (f.containment === "parent") {
            f.containment = this.helper[0].parentNode
        }
        g = a(f.containment);
        d = g[0];
        if (!d) {
            return
        }
        e = g.css("overflow") !== "hidden";
        this.containment = [(parseInt(g.css("borderLeftWidth"), 10) || 0) + (parseInt(g.css("paddingLeft"), 10) || 0), (parseInt(g.css("borderTopWidth"), 10) || 0) + (parseInt(g.css("paddingTop"), 10) || 0), (e ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(g.css("borderRightWidth"), 10) || 0) - (parseInt(g.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(g.css("borderBottomWidth"), 10) || 0) - (parseInt(g.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
        this.relative_container = g
    }, _convertPositionTo: function (f, g) {
        if (!g) {
            g = this.position
        }
        var e = f === "absolute" ? 1 : -1, c = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
        if (!this.offset.scroll) {
            this.offset.scroll = {top: c.scrollTop(), left: c.scrollLeft()}
        }
        return{top: (g.top + this.offset.relative.top * e + this.offset.parent.top * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * e)), left: (g.left + this.offset.relative.left * e + this.offset.parent.left * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * e))}
    }, _generatePosition: function (d) {
        var c, i, j, f, e = this.options, k = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = d.pageX, g = d.pageY;
        if (!this.offset.scroll) {
            this.offset.scroll = {top: k.scrollTop(), left: k.scrollLeft()}
        }
        if (this.originalPosition) {
            if (this.containment) {
                if (this.relative_container) {
                    i = this.relative_container.offset();
                    c = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
                } else {
                    c = this.containment
                }
                if (d.pageX - this.offset.click.left < c[0]) {
                    h = c[0] + this.offset.click.left
                }
                if (d.pageY - this.offset.click.top < c[1]) {
                    g = c[1] + this.offset.click.top
                }
                if (d.pageX - this.offset.click.left > c[2]) {
                    h = c[2] + this.offset.click.left
                }
                if (d.pageY - this.offset.click.top > c[3]) {
                    g = c[3] + this.offset.click.top
                }
            }
            if (e.grid) {
                j = e.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
                g = c ? ((j - this.offset.click.top >= c[1] || j - this.offset.click.top > c[3]) ? j : ((j - this.offset.click.top >= c[1]) ? j - e.grid[1] : j + e.grid[1])) : j;
                f = e.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
                h = c ? ((f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2]) ? f : ((f - this.offset.click.left >= c[0]) ? f - e.grid[0] : f + e.grid[0])) : f
            }
        }
        return{top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top)), left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left))}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging");
        if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
            this.helper.remove()
        }
        this.helper = null;
        this.cancelHelperRemoval = false
    }, _trigger: function (c, d, e) {
        e = e || this._uiHash();
        a.ui.plugin.call(this, c, [d, e]);
        if (c === "drag") {
            this.positionAbs = this._convertPositionTo("absolute")
        }
        return a.Widget.prototype._trigger.call(this, c, d, e)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }});
    a.ui.plugin.add("draggable", "connectToSortable", {start: function (d, f) {
        var e = a(this).data("ui-draggable"), g = e.options, c = a.extend({}, f, {item: e.element});
        e.sortables = [];
        a(g.connectToSortable).each(function () {
            var h = a.data(this, "ui-sortable");
            if (h && !h.options.disabled) {
                e.sortables.push({instance: h, shouldRevert: h.options.revert});
                h.refreshPositions();
                h._trigger("activate", d, c)
            }
        })
    }, stop: function (d, f) {
        var e = a(this).data("ui-draggable"), c = a.extend({}, f, {item: e.element});
        a.each(e.sortables, function () {
            if (this.instance.isOver) {
                this.instance.isOver = 0;
                e.cancelHelperRemoval = true;
                this.instance.cancelHelperRemoval = false;
                if (this.shouldRevert) {
                    this.instance.options.revert = this.shouldRevert
                }
                this.instance._mouseStop(d);
                this.instance.options.helper = this.instance.options._helper;
                if (e.options.helper === "original") {
                    this.instance.currentItem.css({top: "auto", left: "auto"})
                }
            } else {
                this.instance.cancelHelperRemoval = false;
                this.instance._trigger("deactivate", d, c)
            }
        })
    }, drag: function (d, f) {
        var e = a(this).data("ui-draggable"), c = this;
        a.each(e.sortables, function () {
            var g = false, h = this;
            this.instance.positionAbs = e.positionAbs;
            this.instance.helperProportions = e.helperProportions;
            this.instance.offset.click = e.offset.click;
            if (this.instance._intersectsWith(this.instance.containerCache)) {
                g = true;
                a.each(e.sortables, function () {
                    this.instance.positionAbs = e.positionAbs;
                    this.instance.helperProportions = e.helperProportions;
                    this.instance.offset.click = e.offset.click;
                    if (this !== h && this.instance._intersectsWith(this.instance.containerCache) && a.contains(h.instance.element[0], this.instance.element[0])) {
                        g = false
                    }
                    return g
                })
            }
            if (g) {
                if (!this.instance.isOver) {
                    this.instance.isOver = 1;
                    this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
                    this.instance.options._helper = this.instance.options.helper;
                    this.instance.options.helper = function () {
                        return f.helper[0]
                    };
                    d.target = this.instance.currentItem[0];
                    this.instance._mouseCapture(d, true);
                    this.instance._mouseStart(d, true, true);
                    this.instance.offset.click.top = e.offset.click.top;
                    this.instance.offset.click.left = e.offset.click.left;
                    this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left;
                    this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top;
                    e._trigger("toSortable", d);
                    e.dropped = this.instance.element;
                    e.currentItem = e.element;
                    this.instance.fromOutside = e
                }
                if (this.instance.currentItem) {
                    this.instance._mouseDrag(d)
                }
            } else {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    this.instance.cancelHelperRemoval = true;
                    this.instance.options.revert = false;
                    this.instance._trigger("out", d, this.instance._uiHash(this.instance));
                    this.instance._mouseStop(d, true);
                    this.instance.options.helper = this.instance.options._helper;
                    this.instance.currentItem.remove();
                    if (this.instance.placeholder) {
                        this.instance.placeholder.remove()
                    }
                    e._trigger("fromSortable", d);
                    e.dropped = false
                }
            }
        })
    }});
    a.ui.plugin.add("draggable", "cursor", {start: function () {
        var c = a("body"), d = a(this).data("ui-draggable").options;
        if (c.css("cursor")) {
            d._cursor = c.css("cursor")
        }
        c.css("cursor", d.cursor)
    }, stop: function () {
        var c = a(this).data("ui-draggable").options;
        if (c._cursor) {
            a("body").css("cursor", c._cursor)
        }
    }});
    a.ui.plugin.add("draggable", "opacity", {start: function (d, e) {
        var c = a(e.helper), f = a(this).data("ui-draggable").options;
        if (c.css("opacity")) {
            f._opacity = c.css("opacity")
        }
        c.css("opacity", f.opacity)
    }, stop: function (c, d) {
        var e = a(this).data("ui-draggable").options;
        if (e._opacity) {
            a(d.helper).css("opacity", e._opacity)
        }
    }});
    a.ui.plugin.add("draggable", "scroll", {start: function () {
        var c = a(this).data("ui-draggable");
        if (c.scrollParent[0] !== document && c.scrollParent[0].tagName !== "HTML") {
            c.overflowOffset = c.scrollParent.offset()
        }
    }, drag: function (e) {
        var d = a(this).data("ui-draggable"), f = d.options, c = false;
        if (d.scrollParent[0] !== document && d.scrollParent[0].tagName !== "HTML") {
            if (!f.axis || f.axis !== "x") {
                if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - e.pageY < f.scrollSensitivity) {
                    d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + f.scrollSpeed
                } else {
                    if (e.pageY - d.overflowOffset.top < f.scrollSensitivity) {
                        d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - f.scrollSpeed
                    }
                }
            }
            if (!f.axis || f.axis !== "y") {
                if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - e.pageX < f.scrollSensitivity) {
                    d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + f.scrollSpeed
                } else {
                    if (e.pageX - d.overflowOffset.left < f.scrollSensitivity) {
                        d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - f.scrollSpeed
                    }
                }
            }
        } else {
            if (!f.axis || f.axis !== "x") {
                if (e.pageY - a(document).scrollTop() < f.scrollSensitivity) {
                    c = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed)
                } else {
                    if (a(window).height() - (e.pageY - a(document).scrollTop()) < f.scrollSensitivity) {
                        c = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed)
                    }
                }
            }
            if (!f.axis || f.axis !== "y") {
                if (e.pageX - a(document).scrollLeft() < f.scrollSensitivity) {
                    c = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed)
                } else {
                    if (a(window).width() - (e.pageX - a(document).scrollLeft()) < f.scrollSensitivity) {
                        c = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)
                    }
                }
            }
        }
        if (c !== false && a.ui.ddmanager && !f.dropBehaviour) {
            a.ui.ddmanager.prepareOffsets(d, e)
        }
    }});
    a.ui.plugin.add("draggable", "snap", {start: function () {
        var c = a(this).data("ui-draggable"), d = c.options;
        c.snapElements = [];
        a(d.snap.constructor !== String ? (d.snap.items || ":data(ui-draggable)") : d.snap).each(function () {
            var f = a(this), e = f.offset();
            if (this !== c.element[0]) {
                c.snapElements.push({item: this, width: f.outerWidth(), height: f.outerHeight(), top: e.top, left: e.left})
            }
        })
    }, drag: function (u, p) {
        var c, z, j, k, s, n, m, A, v, h, g = a(this).data("ui-draggable"), q = g.options, y = q.snapTolerance, x = p.offset.left, w = x + g.helperProportions.width, f = p.offset.top, e = f + g.helperProportions.height;
        for (v = g.snapElements.length - 1; v >= 0; v--) {
            s = g.snapElements[v].left;
            n = s + g.snapElements[v].width;
            m = g.snapElements[v].top;
            A = m + g.snapElements[v].height;
            if (w < s - y || x > n + y || e < m - y || f > A + y || !a.contains(g.snapElements[v].item.ownerDocument, g.snapElements[v].item)) {
                if (g.snapElements[v].snapping) {
                    (g.options.snap.release && g.options.snap.release.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
                }
                g.snapElements[v].snapping = false;
                continue
            }
            if (q.snapMode !== "inner") {
                c = Math.abs(m - e) <= y;
                z = Math.abs(A - f) <= y;
                j = Math.abs(s - w) <= y;
                k = Math.abs(n - x) <= y;
                if (c) {
                    p.position.top = g._convertPositionTo("relative", {top: m - g.helperProportions.height, left: 0}).top - g.margins.top
                }
                if (z) {
                    p.position.top = g._convertPositionTo("relative", {top: A, left: 0}).top - g.margins.top
                }
                if (j) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: s - g.helperProportions.width}).left - g.margins.left
                }
                if (k) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: n}).left - g.margins.left
                }
            }
            h = (c || z || j || k);
            if (q.snapMode !== "outer") {
                c = Math.abs(m - f) <= y;
                z = Math.abs(A - e) <= y;
                j = Math.abs(s - x) <= y;
                k = Math.abs(n - w) <= y;
                if (c) {
                    p.position.top = g._convertPositionTo("relative", {top: m, left: 0}).top - g.margins.top
                }
                if (z) {
                    p.position.top = g._convertPositionTo("relative", {top: A - g.helperProportions.height, left: 0}).top - g.margins.top
                }
                if (j) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: s}).left - g.margins.left
                }
                if (k) {
                    p.position.left = g._convertPositionTo("relative", {top: 0, left: n - g.helperProportions.width}).left - g.margins.left
                }
            }
            if (!g.snapElements[v].snapping && (c || z || j || k || h)) {
                (g.options.snap.snap && g.options.snap.snap.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
            }
            g.snapElements[v].snapping = (c || z || j || k || h)
        }
    }});
    a.ui.plugin.add("draggable", "stack", {start: function () {
        var c, e = this.data("ui-draggable").options, d = a.makeArray(a(e.stack)).sort(function (g, f) {
            return(parseInt(a(g).css("zIndex"), 10) || 0) - (parseInt(a(f).css("zIndex"), 10) || 0)
        });
        if (!d.length) {
            return
        }
        c = parseInt(a(d[0]).css("zIndex"), 10) || 0;
        a(d).each(function (f) {
            a(this).css("zIndex", c + f)
        });
        this.css("zIndex", (c + d.length))
    }});
    a.ui.plugin.add("draggable", "zIndex", {start: function (d, e) {
        var c = a(e.helper), f = a(this).data("ui-draggable").options;
        if (c.css("zIndex")) {
            f._zIndex = c.css("zIndex")
        }
        c.css("zIndex", f.zIndex)
    }, stop: function (c, d) {
        var e = a(this).data("ui-draggable").options;
        if (e._zIndex) {
            a(d.helper).css("zIndex", e._zIndex)
        }
    }})
})(jQuery);
(function (b, d) {
    function a(f, e, g) {
        return(f > e) && (f < (e + g))
    }

    function c(e) {
        return(/left|right/).test(e.css("float")) || (/inline|table-cell/).test(e.css("display"))
    }

    b.widget("ui.sortable", b.ui.mouse, {version: "1.10.3", widgetEventPrefix: "sort", ready: false, options: {appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1000, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null}, _create: function () {
        var e = this.options;
        this.containerCache = {};
        this.element.addClass("ui-sortable");
        this.refresh();
        this.floating = this.items.length ? e.axis === "x" || c(this.items[0].item) : false;
        this.offset = this.element.offset();
        this._mouseInit();
        this.ready = true
    }, _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled");
        this._mouseDestroy();
        for (var e = this.items.length - 1; e >= 0; e--) {
            this.items[e].item.removeData(this.widgetName + "-item")
        }
        return this
    }, _setOption: function (e, f) {
        if (e === "disabled") {
            this.options[e] = f;
            this.widget().toggleClass("ui-sortable-disabled", !!f)
        } else {
            b.Widget.prototype._setOption.apply(this, arguments)
        }
    }, _mouseCapture: function (g, h) {
        var e = null, i = false, f = this;
        if (this.reverting) {
            return false
        }
        if (this.options.disabled || this.options.type === "static") {
            return false
        }
        this._refreshItems(g);
        b(g.target).parents().each(function () {
            if (b.data(this, f.widgetName + "-item") === f) {
                e = b(this);
                return false
            }
        });
        if (b.data(g.target, f.widgetName + "-item") === f) {
            e = b(g.target)
        }
        if (!e) {
            return false
        }
        if (this.options.handle && !h) {
            b(this.options.handle, e).find("*").addBack().each(function () {
                if (this === g.target) {
                    i = true
                }
            });
            if (!i) {
                return false
            }
        }
        this.currentItem = e;
        this._removeCurrentsFromItems();
        return true
    }, _mouseStart: function (h, j, f) {
        var g, e, k = this.options;
        this.currentContainer = this;
        this.refreshPositions();
        this.helper = this._createHelper(h);
        this._cacheHelperProportions();
        this._cacheMargins();
        this.scrollParent = this.helper.scrollParent();
        this.offset = this.currentItem.offset();
        this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
        b.extend(this.offset, {click: {left: h.pageX - this.offset.left, top: h.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()});
        this.helper.css("position", "absolute");
        this.cssPosition = this.helper.css("position");
        this.originalPosition = this._generatePosition(h);
        this.originalPageX = h.pageX;
        this.originalPageY = h.pageY;
        (k.cursorAt && this._adjustOffsetFromHelper(k.cursorAt));
        this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]};
        if (this.helper[0] !== this.currentItem[0]) {
            this.currentItem.hide()
        }
        this._createPlaceholder();
        if (k.containment) {
            this._setContainment()
        }
        if (k.cursor && k.cursor !== "auto") {
            e = this.document.find("body");
            this.storedCursor = e.css("cursor");
            e.css("cursor", k.cursor);
            this.storedStylesheet = b("<style>*{ cursor: " + k.cursor + " !important; }</style>").appendTo(e)
        }
        if (k.opacity) {
            if (this.helper.css("opacity")) {
                this._storedOpacity = this.helper.css("opacity")
            }
            this.helper.css("opacity", k.opacity)
        }
        if (k.zIndex) {
            if (this.helper.css("zIndex")) {
                this._storedZIndex = this.helper.css("zIndex")
            }
            this.helper.css("zIndex", k.zIndex)
        }
        if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
            this.overflowOffset = this.scrollParent.offset()
        }
        this._trigger("start", h, this._uiHash());
        if (!this._preserveHelperProportions) {
            this._cacheHelperProportions()
        }
        if (!f) {
            for (g = this.containers.length - 1; g >= 0; g--) {
                this.containers[g]._trigger("activate", h, this._uiHash(this))
            }
        }
        if (b.ui.ddmanager) {
            b.ui.ddmanager.current = this
        }
        if (b.ui.ddmanager && !k.dropBehaviour) {
            b.ui.ddmanager.prepareOffsets(this, h)
        }
        this.dragging = true;
        this.helper.addClass("ui-sortable-helper");
        this._mouseDrag(h);
        return true
    }, _mouseDrag: function (j) {
        var g, h, f, l, k = this.options, e = false;
        this.position = this._generatePosition(j);
        this.positionAbs = this._convertPositionTo("absolute");
        if (!this.lastPositionAbs) {
            this.lastPositionAbs = this.positionAbs
        }
        if (this.options.scroll) {
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - j.pageY < k.scrollSensitivity) {
                    this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop + k.scrollSpeed
                } else {
                    if (j.pageY - this.overflowOffset.top < k.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop - k.scrollSpeed
                    }
                }
                if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - j.pageX < k.scrollSensitivity) {
                    this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft + k.scrollSpeed
                } else {
                    if (j.pageX - this.overflowOffset.left < k.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft - k.scrollSpeed
                    }
                }
            } else {
                if (j.pageY - b(document).scrollTop() < k.scrollSensitivity) {
                    e = b(document).scrollTop(b(document).scrollTop() - k.scrollSpeed)
                } else {
                    if (b(window).height() - (j.pageY - b(document).scrollTop()) < k.scrollSensitivity) {
                        e = b(document).scrollTop(b(document).scrollTop() + k.scrollSpeed)
                    }
                }
                if (j.pageX - b(document).scrollLeft() < k.scrollSensitivity) {
                    e = b(document).scrollLeft(b(document).scrollLeft() - k.scrollSpeed)
                } else {
                    if (b(window).width() - (j.pageX - b(document).scrollLeft()) < k.scrollSensitivity) {
                        e = b(document).scrollLeft(b(document).scrollLeft() + k.scrollSpeed)
                    }
                }
            }
            if (e !== false && b.ui.ddmanager && !k.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(this, j)
            }
        }
        this.positionAbs = this._convertPositionTo("absolute");
        if (!this.options.axis || this.options.axis !== "y") {
            this.helper[0].style.left = this.position.left + "px"
        }
        if (!this.options.axis || this.options.axis !== "x") {
            this.helper[0].style.top = this.position.top + "px"
        }
        for (g = this.items.length - 1; g >= 0; g--) {
            h = this.items[g];
            f = h.item[0];
            l = this._intersectsWithPointer(h);
            if (!l) {
                continue
            }
            if (h.instance !== this.currentContainer) {
                continue
            }
            if (f !== this.currentItem[0] && this.placeholder[l === 1 ? "next" : "prev"]()[0] !== f && !b.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !b.contains(this.element[0], f) : true)) {
                this.direction = l === 1 ? "down" : "up";
                if (this.options.tolerance === "pointer" || this._intersectsWithSides(h)) {
                    this._rearrange(j, h)
                } else {
                    break
                }
                this._trigger("change", j, this._uiHash());
                break
            }
        }
        this._contactContainers(j);
        if (b.ui.ddmanager) {
            b.ui.ddmanager.drag(this, j)
        }
        this._trigger("sort", j, this._uiHash());
        this.lastPositionAbs = this.positionAbs;
        return false
    }, _mouseStop: function (g, i) {
        if (!g) {
            return
        }
        if (b.ui.ddmanager && !this.options.dropBehaviour) {
            b.ui.ddmanager.drop(this, g)
        }
        if (this.options.revert) {
            var f = this, j = this.placeholder.offset(), e = this.options.axis, h = {};
            if (!e || e === "x") {
                h.left = j.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
            }
            if (!e || e === "y") {
                h.top = j.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
            }
            this.reverting = true;
            b(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function () {
                f._clear(g)
            })
        } else {
            this._clear(g, i)
        }
        return false
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({target: null});
            if (this.options.helper === "original") {
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            for (var e = this.containers.length - 1; e >= 0; e--) {
                this.containers[e]._trigger("deactivate", null, this._uiHash(this));
                if (this.containers[e].containerCache.over) {
                    this.containers[e]._trigger("out", null, this._uiHash(this));
                    this.containers[e].containerCache.over = 0
                }
            }
        }
        if (this.placeholder) {
            if (this.placeholder[0].parentNode) {
                this.placeholder[0].parentNode.removeChild(this.placeholder[0])
            }
            if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                this.helper.remove()
            }
            b.extend(this, {helper: null, dragging: false, reverting: false, _noFinalSort: null});
            if (this.domPosition.prev) {
                b(this.domPosition.prev).after(this.currentItem)
            } else {
                b(this.domPosition.parent).prepend(this.currentItem)
            }
        }
        return this
    }, serialize: function (g) {
        var e = this._getItemsAsjQuery(g && g.connected), f = [];
        g = g || {};
        b(e).each(function () {
            var h = (b(g.item || this).attr(g.attribute || "id") || "").match(g.expression || (/(.+)[\-=_](.+)/));
            if (h) {
                f.push((g.key || h[1] + "[]") + "=" + (g.key && g.expression ? h[1] : h[2]))
            }
        });
        if (!f.length && g.key) {
            f.push(g.key + "=")
        }
        return f.join("&")
    }, toArray: function (g) {
        var e = this._getItemsAsjQuery(g && g.connected), f = [];
        g = g || {};
        e.each(function () {
            f.push(b(g.item || this).attr(g.attribute || "id") || "")
        });
        return f
    }, _intersectsWith: function (q) {
        var g = this.positionAbs.left, f = g + this.helperProportions.width, o = this.positionAbs.top, n = o + this.helperProportions.height, h = q.left, e = h + q.width, s = q.top, m = s + q.height, u = this.offset.click.top, k = this.offset.click.left, j = (this.options.axis === "x") || ((o + u) > s && (o + u) < m), p = (this.options.axis === "y") || ((g + k) > h && (g + k) < e), i = j && p;
        if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > q[this.floating ? "width" : "height"])) {
            return i
        } else {
            return(h < g + (this.helperProportions.width / 2) && f - (this.helperProportions.width / 2) < e && s < o + (this.helperProportions.height / 2) && n - (this.helperProportions.height / 2) < m)
        }
    }, _intersectsWithPointer: function (g) {
        var h = (this.options.axis === "x") || a(this.positionAbs.top + this.offset.click.top, g.top, g.height), f = (this.options.axis === "y") || a(this.positionAbs.left + this.offset.click.left, g.left, g.width), j = h && f, e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
        if (!j) {
            return false
        }
        return this.floating ? (((i && i === "right") || e === "down") ? 2 : 1) : (e && (e === "down" ? 2 : 1))
    }, _intersectsWithSides: function (h) {
        var f = a(this.positionAbs.top + this.offset.click.top, h.top + (h.height / 2), h.height), g = a(this.positionAbs.left + this.offset.click.left, h.left + (h.width / 2), h.width), e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
        if (this.floating && i) {
            return((i === "right" && g) || (i === "left" && !g))
        } else {
            return e && ((e === "down" && f) || (e === "up" && !f))
        }
    }, _getDragVerticalDirection: function () {
        var e = this.positionAbs.top - this.lastPositionAbs.top;
        return e !== 0 && (e > 0 ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var e = this.positionAbs.left - this.lastPositionAbs.left;
        return e !== 0 && (e > 0 ? "right" : "left")
    }, refresh: function (e) {
        this._refreshItems(e);
        this.refreshPositions();
        return this
    }, _connectWith: function () {
        var e = this.options;
        return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
    }, _getItemsAsjQuery: function (l) {
        var h, g, n, m, e = [], f = [], k = this._connectWith();
        if (k && l) {
            for (h = k.length - 1; h >= 0; h--) {
                n = b(k[h]);
                for (g = n.length - 1; g >= 0; g--) {
                    m = b.data(n[g], this.widgetFullName);
                    if (m && m !== this && !m.options.disabled) {
                        f.push([b.isFunction(m.options.items) ? m.options.items.call(m.element) : b(m.options.items, m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), m])
                    }
                }
            }
        }
        f.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
        for (h = f.length - 1; h >= 0; h--) {
            f[h][0].each(function () {
                e.push(this)
            })
        }
        return b(e)
    }, _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = b.grep(this.items, function (g) {
            for (var f = 0; f < e.length; f++) {
                if (e[f] === g.item[0]) {
                    return false
                }
            }
            return true
        })
    }, _refreshItems: function (e) {
        this.items = [];
        this.containers = [this];
        var k, g, p, l, o, f, r, q, m = this.items, h = [
            [b.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : b(this.options.items, this.element), this]
        ], n = this._connectWith();
        if (n && this.ready) {
            for (k = n.length - 1; k >= 0; k--) {
                p = b(n[k]);
                for (g = p.length - 1; g >= 0; g--) {
                    l = b.data(p[g], this.widgetFullName);
                    if (l && l !== this && !l.options.disabled) {
                        h.push([b.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {item: this.currentItem}) : b(l.options.items, l.element), l]);
                        this.containers.push(l)
                    }
                }
            }
        }
        for (k = h.length - 1; k >= 0; k--) {
            o = h[k][1];
            f = h[k][0];
            for (g = 0, q = f.length; g < q; g++) {
                r = b(f[g]);
                r.data(this.widgetName + "-item", o);
                m.push({item: r, instance: o, width: 0, height: 0, left: 0, top: 0})
            }
        }
    }, refreshPositions: function (e) {
        if (this.offsetParent && this.helper) {
            this.offset.parent = this._getParentOffset()
        }
        var g, h, f, j;
        for (g = this.items.length - 1; g >= 0; g--) {
            h = this.items[g];
            if (h.instance !== this.currentContainer && this.currentContainer && h.item[0] !== this.currentItem[0]) {
                continue
            }
            f = this.options.toleranceElement ? b(this.options.toleranceElement, h.item) : h.item;
            if (!e) {
                h.width = f.outerWidth();
                h.height = f.outerHeight()
            }
            j = f.offset();
            h.left = j.left;
            h.top = j.top
        }
        if (this.options.custom && this.options.custom.refreshContainers) {
            this.options.custom.refreshContainers.call(this)
        } else {
            for (g = this.containers.length - 1; g >= 0; g--) {
                j = this.containers[g].element.offset();
                this.containers[g].containerCache.left = j.left;
                this.containers[g].containerCache.top = j.top;
                this.containers[g].containerCache.width = this.containers[g].element.outerWidth();
                this.containers[g].containerCache.height = this.containers[g].element.outerHeight()
            }
        }
        return this
    }, _createPlaceholder: function (f) {
        f = f || this;
        var e, g = f.options;
        if (!g.placeholder || g.placeholder.constructor === String) {
            e = g.placeholder;
            g.placeholder = {element: function () {
                var i = f.currentItem[0].nodeName.toLowerCase(), h = b("<" + i + ">", f.document[0]).addClass(e || f.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                if (i === "tr") {
                    f.currentItem.children().each(function () {
                        b("<td>&#160;</td>", f.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(h)
                    })
                } else {
                    if (i === "img") {
                        h.attr("src", f.currentItem.attr("src"))
                    }
                }
                if (!e) {
                    h.css("visibility", "hidden")
                }
                return h
            }, update: function (h, i) {
                if (e && !g.forcePlaceholderSize) {
                    return
                }
                if (!i.height()) {
                    i.height(f.currentItem.innerHeight() - parseInt(f.currentItem.css("paddingTop") || 0, 10) - parseInt(f.currentItem.css("paddingBottom") || 0, 10))
                }
                if (!i.width()) {
                    i.width(f.currentItem.innerWidth() - parseInt(f.currentItem.css("paddingLeft") || 0, 10) - parseInt(f.currentItem.css("paddingRight") || 0, 10))
                }
            }}
        }
        f.placeholder = b(g.placeholder.element.call(f.element, f.currentItem));
        f.currentItem.after(f.placeholder);
        g.placeholder.update(f, f.placeholder)
    }, _contactContainers: function (e) {
        var l, h, p, m, n, r, f, s, k, o, g = null, q = null;
        for (l = this.containers.length - 1; l >= 0; l--) {
            if (b.contains(this.currentItem[0], this.containers[l].element[0])) {
                continue
            }
            if (this._intersectsWith(this.containers[l].containerCache)) {
                if (g && b.contains(this.containers[l].element[0], g.element[0])) {
                    continue
                }
                g = this.containers[l];
                q = l
            } else {
                if (this.containers[l].containerCache.over) {
                    this.containers[l]._trigger("out", e, this._uiHash(this));
                    this.containers[l].containerCache.over = 0
                }
            }
        }
        if (!g) {
            return
        }
        if (this.containers.length === 1) {
            if (!this.containers[q].containerCache.over) {
                this.containers[q]._trigger("over", e, this._uiHash(this));
                this.containers[q].containerCache.over = 1
            }
        } else {
            p = 10000;
            m = null;
            o = g.floating || c(this.currentItem);
            n = o ? "left" : "top";
            r = o ? "width" : "height";
            f = this.positionAbs[n] + this.offset.click[n];
            for (h = this.items.length - 1; h >= 0; h--) {
                if (!b.contains(this.containers[q].element[0], this.items[h].item[0])) {
                    continue
                }
                if (this.items[h].item[0] === this.currentItem[0]) {
                    continue
                }
                if (o && !a(this.positionAbs.top + this.offset.click.top, this.items[h].top, this.items[h].height)) {
                    continue
                }
                s = this.items[h].item.offset()[n];
                k = false;
                if (Math.abs(s - f) > Math.abs(s + this.items[h][r] - f)) {
                    k = true;
                    s += this.items[h][r]
                }
                if (Math.abs(s - f) < p) {
                    p = Math.abs(s - f);
                    m = this.items[h];
                    this.direction = k ? "up" : "down"
                }
            }
            if (!m && !this.options.dropOnEmpty) {
                return
            }
            if (this.currentContainer === this.containers[q]) {
                return
            }
            m ? this._rearrange(e, m, null, true) : this._rearrange(e, null, this.containers[q].element, true);
            this._trigger("change", e, this._uiHash());
            this.containers[q]._trigger("change", e, this._uiHash(this));
            this.currentContainer = this.containers[q];
            this.options.placeholder.update(this.currentContainer, this.placeholder);
            this.containers[q]._trigger("over", e, this._uiHash(this));
            this.containers[q].containerCache.over = 1
        }
    }, _createHelper: function (f) {
        var g = this.options, e = b.isFunction(g.helper) ? b(g.helper.apply(this.element[0], [f, this.currentItem])) : (g.helper === "clone" ? this.currentItem.clone() : this.currentItem);
        if (!e.parents("body").length) {
            b(g.appendTo !== "parent" ? g.appendTo : this.currentItem[0].parentNode)[0].appendChild(e[0])
        }
        if (e[0] === this.currentItem[0]) {
            this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}
        }
        if (!e[0].style.width || g.forceHelperSize) {
            e.width(this.currentItem.width())
        }
        if (!e[0].style.height || g.forceHelperSize) {
            e.height(this.currentItem.height())
        }
        return e
    }, _adjustOffsetFromHelper: function (e) {
        if (typeof e === "string") {
            e = e.split(" ")
        }
        if (b.isArray(e)) {
            e = {left: +e[0], top: +e[1] || 0}
        }
        if ("left" in e) {
            this.offset.click.left = e.left + this.margins.left
        }
        if ("right" in e) {
            this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
        }
        if ("top" in e) {
            this.offset.click.top = e.top + this.margins.top
        }
        if ("bottom" in e) {
            this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
        }
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
            e.left += this.scrollParent.scrollLeft();
            e.top += this.scrollParent.scrollTop()
        }
        if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && b.ui.ie)) {
            e = {top: 0, left: 0}
        }
        return{top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if (this.cssPosition === "relative") {
            var e = this.currentItem.position();
            return{top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        } else {
            return{top: 0, left: 0}
        }
    }, _cacheMargins: function () {
        this.margins = {left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0), top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var f, h, e, g = this.options;
        if (g.containment === "parent") {
            g.containment = this.helper[0].parentNode
        }
        if (g.containment === "document" || g.containment === "window") {
            this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(g.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(g.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
        }
        if (!(/^(document|window|parent)$/).test(g.containment)) {
            f = b(g.containment)[0];
            h = b(g.containment).offset();
            e = (b(f).css("overflow") !== "hidden");
            this.containment = [h.left + (parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0) - this.margins.left, h.top + (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0) - this.margins.top, h.left + (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, h.top + (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
        }
    }, _convertPositionTo: function (g, i) {
        if (!i) {
            i = this.position
        }
        var f = g === "absolute" ? 1 : -1, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = (/(html|body)/i).test(e[0].tagName);
        return{top: (i.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : e.scrollTop())) * f)), left: (i.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft()) * f))}
    }, _generatePosition: function (h) {
        var j, i, k = this.options, g = h.pageX, f = h.pageY, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, l = (/(html|body)/i).test(e[0].tagName);
        if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
            this.offset.relative = this._getRelativeOffset()
        }
        if (this.originalPosition) {
            if (this.containment) {
                if (h.pageX - this.offset.click.left < this.containment[0]) {
                    g = this.containment[0] + this.offset.click.left
                }
                if (h.pageY - this.offset.click.top < this.containment[1]) {
                    f = this.containment[1] + this.offset.click.top
                }
                if (h.pageX - this.offset.click.left > this.containment[2]) {
                    g = this.containment[2] + this.offset.click.left
                }
                if (h.pageY - this.offset.click.top > this.containment[3]) {
                    f = this.containment[3] + this.offset.click.top
                }
            }
            if (k.grid) {
                j = this.originalPageY + Math.round((f - this.originalPageY) / k.grid[1]) * k.grid[1];
                f = this.containment ? ((j - this.offset.click.top >= this.containment[1] && j - this.offset.click.top <= this.containment[3]) ? j : ((j - this.offset.click.top >= this.containment[1]) ? j - k.grid[1] : j + k.grid[1])) : j;
                i = this.originalPageX + Math.round((g - this.originalPageX) / k.grid[0]) * k.grid[0];
                g = this.containment ? ((i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2]) ? i : ((i - this.offset.click.left >= this.containment[0]) ? i - k.grid[0] : i + k.grid[0])) : i
            }
        }
        return{top: (f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (l ? 0 : e.scrollTop())))), left: (g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : l ? 0 : e.scrollLeft())))}
    }, _rearrange: function (j, h, f, g) {
        f ? f[0].appendChild(this.placeholder[0]) : h.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? h.item[0] : h.item[0].nextSibling));
        this.counter = this.counter ? ++this.counter : 1;
        var e = this.counter;
        this._delay(function () {
            if (e === this.counter) {
                this.refreshPositions(!g)
            }
        })
    }, _clear: function (f, g) {
        this.reverting = false;
        var e, h = [];
        if (!this._noFinalSort && this.currentItem.parent().length) {
            this.placeholder.before(this.currentItem)
        }
        this._noFinalSort = null;
        if (this.helper[0] === this.currentItem[0]) {
            for (e in this._storedCSS) {
                if (this._storedCSS[e] === "auto" || this._storedCSS[e] === "static") {
                    this._storedCSS[e] = ""
                }
            }
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else {
            this.currentItem.show()
        }
        if (this.fromOutside && !g) {
            h.push(function (i) {
                this._trigger("receive", i, this._uiHash(this.fromOutside))
            })
        }
        if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !g) {
            h.push(function (i) {
                this._trigger("update", i, this._uiHash())
            })
        }
        if (this !== this.currentContainer) {
            if (!g) {
                h.push(function (i) {
                    this._trigger("remove", i, this._uiHash())
                });
                h.push((function (i) {
                    return function (j) {
                        i._trigger("receive", j, this._uiHash(this))
                    }
                }).call(this, this.currentContainer));
                h.push((function (i) {
                    return function (j) {
                        i._trigger("update", j, this._uiHash(this))
                    }
                }).call(this, this.currentContainer))
            }
        }
        for (e = this.containers.length - 1; e >= 0; e--) {
            if (!g) {
                h.push((function (i) {
                    return function (j) {
                        i._trigger("deactivate", j, this._uiHash(this))
                    }
                }).call(this, this.containers[e]))
            }
            if (this.containers[e].containerCache.over) {
                h.push((function (i) {
                    return function (j) {
                        i._trigger("out", j, this._uiHash(this))
                    }
                }).call(this, this.containers[e]));
                this.containers[e].containerCache.over = 0
            }
        }
        if (this.storedCursor) {
            this.document.find("body").css("cursor", this.storedCursor);
            this.storedStylesheet.remove()
        }
        if (this._storedOpacity) {
            this.helper.css("opacity", this._storedOpacity)
        }
        if (this._storedZIndex) {
            this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
        }
        this.dragging = false;
        if (this.cancelHelperRemoval) {
            if (!g) {
                this._trigger("beforeStop", f, this._uiHash());
                for (e = 0; e < h.length; e++) {
                    h[e].call(this, f)
                }
                this._trigger("stop", f, this._uiHash())
            }
            this.fromOutside = false;
            return false
        }
        if (!g) {
            this._trigger("beforeStop", f, this._uiHash())
        }
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
        if (this.helper[0] !== this.currentItem[0]) {
            this.helper.remove()
        }
        this.helper = null;
        if (!g) {
            for (e = 0; e < h.length; e++) {
                h[e].call(this, f)
            }
            this._trigger("stop", f, this._uiHash())
        }
        this.fromOutside = false;
        return true
    }, _trigger: function () {
        if (b.Widget.prototype._trigger.apply(this, arguments) === false) {
            this.cancel()
        }
    }, _uiHash: function (e) {
        var f = e || this;
        return{helper: f.helper, placeholder: f.placeholder || b([]), position: f.position, originalPosition: f.originalPosition, offset: f.positionAbs, item: f.currentItem, sender: e ? e.element : null}
    }})
})(jQuery);
;
/*! version:2010-12-08 11:01:62 */
(function (a) {
    a.tb = a.tb || {};
    a.debug = false;
    a.extend({error: function (b) {
        a.log(b)
    }, log: function (d, c) {
        if (a.debug === false) {
            return
        }
        var b = {info: "info", error: "error", warning: "warning", dir: "dir"};
        c = b[c] || b.info;
        if (a.browser.mozilla && window.console !== undefined) {
            c = (c == "error" ? "error" : "info");
            console[c](d)
        } else {
            a().ready(function () {
                if (!a.tb_debug_wrapper) {
                    a.tb_debug_wrapper = a.tieba_debug_wrapper || a('<div class="tbdebug"><ul>&nbsp;</ul></div>').find("UL")[0];
                    var e = a("body")[0];
                    e.insertBefore(a.tb_debug_wrapper, e.firstChild)
                }
                if (c == "dir") {
                    var h = "<ul>";
                    a.each(d, function (j) {
                        h += "<li>" + j + " : " + this + "</li>"
                    });
                    h += "</ul>";
                    d = h
                }
                var f = new Date();
                var g = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + ":" + f.getMilliseconds();
                a.tb_debug_wrapper.innerHTML += '<li class="tb_debug_' + c + '"><span class="tb_debug_time">[' + g + "]</span> " + d + "</li>"
            })
        }
    }});
    a.console = (function (d) {
        var b = function () {
        };
        if (a.debug) {
            try {
                return console
            } catch (c) {
                return{log: b, debug: b, error: b, info: b, warn: b}
            }
        } else {
            return{log: b, debug: b, error: b, info: b, warn: b}
        }
    })();
    a.tb.ajax = function (b) {
        var d = jQuery.extend({}, {cache: false}, b), c = b && b.context || d;
        if (d.dataType === "jsonp" || d.dataType === "json") {
            a.ajax(b);
            return
        }
        var g = /^(\w+:)?\/\/([^\/?#]+)/.exec(d.url), f = g && (g[1] && g[1] !== location.protocol || g[2] !== location.host);
        if (f) {
            a.log("Sorry, but cross domain request is not allowed, maybe you need to check you url replacment! ^-^<br/>the remote url is: " + g[1] + "//" + g[2], "error");
            return
        }
        var e = d.success || a.noop;
        d.success = function (i) {
            json = typeof i === "string" ? a.parseJSON(i) : i;
            if (!json || json.no === undefined || json.data === undefined || json.error === undefined) {
                e.call(c, {no: -1, data: i, msg: "not json data format"});
                return
            }
            var h = {"4": "\u7528\u6237\u672a\u767b\u5f55!", "5": "\u63d0\u4ea4\u53c2\u6570\u6821\u9a8c\u5931\u8d25\uff01", "6": "\u5bf9\u4e0d\u8d77\uff0c\u60a8\u65e0\u6743\u9650\u8fdb\u884c\u6b64\u64cd\u4f5c!", "7": "\u8bf7\u4f7f\u7528post\u65b9\u5f0f\u63d0\u4ea4\u6570\u636e!", "8": "\u60a8\u7684IP\u88ab\u5c01\u7981!", "10": "\u60a8\u8bf4\u7684\u592a\u5feb\u4e86\uff0c\u8bf7\u505c\u4e0b\u6765\u5148\u559d\u676f\u8336\u5427!", "9000": "\u9700\u8981\u8bbe\u7f6e\u7528\u6237\u540d\u3002"};
            if (h[json.no]) {
                if (json.no == 4) {
                    TbUtil.login ? TbUtil.login() : a.log("TbUtil.login function is not exists", "warning")
                } else {
                    if (json.no === 9000) {
                        TbCom.process("User", "buildUnameFrame")
                    } else {
                        a.dialog.open('<div style="font-size:12px;color:red;text-align:center;padding:10px;">' + h[json.no] + "</div>", {title: "\u9519\u8bef\u63d0\u793a", width: 310})
                    }
                }
            } else {
                e.call(c, json)
            }
        };
        a.ajax(d)
    };
    a.tb.get = function (b, d, e, c) {
        if (jQuery.isFunction(d)) {
            c = c || e;
            e = d;
            d = null
        }
        return a.tb.ajax({type: "GET", url: b, data: d, success: e, dataType: c})
    };
    a.tb.post = function (b, e, f, c) {
        if (jQuery.isFunction(e)) {
            c = c || f;
            f = e;
            e = {}
        }
        var d = "utf-8";
        if (typeof e == "string") {
            if (e.indexOf("ie") < 0) {
                e += "&ie=" + d
            }
        } else {
            if (a.isPlainObject(e)) {
                e = a.extend({ie: d}, e)
            } else {
                if (a.isArray(e)) {
                    e.push({name: "ie", value: d})
                }
            }
        }
        return a.tb.ajax({type: "POST", url: b, data: e, success: f, dataType: c})
    }
})(jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function (d) {
    var b = ["DOMMouseScroll", "mousewheel"];
    if (d.event.fixHooks) {
        for (var a = b.length; a;) {
            d.event.fixHooks[b[--a]] = d.event.mouseHooks
        }
    }
    d.event.special.mousewheel = {setup: function () {
        if (this.addEventListener) {
            for (var e = b.length; e;) {
                this.addEventListener(b[--e], c, false)
            }
        } else {
            this.onmousewheel = c
        }
    }, teardown: function () {
        if (this.removeEventListener) {
            for (var e = b.length; e;) {
                this.removeEventListener(b[--e], c, false)
            }
        } else {
            this.onmousewheel = null
        }
    }};
    d.fn.extend({mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
    }, unmousewheel: function (e) {
        return this.unbind("mousewheel", e)
    }});
    function c(j) {
        var h = j || window.event, g = [].slice.call(arguments, 1), k = 0, i = true, f = 0, e = 0;
        j = d.event.fix(h);
        j.type = "mousewheel";
        if (h.wheelDelta) {
            k = h.wheelDelta / 120
        }
        if (h.detail) {
            k = -h.detail / 3
        }
        e = k;
        if (h.axis !== undefined && h.axis === h.HORIZONTAL_AXIS) {
            e = 0;
            f = -1 * k
        }
        if (h.wheelDeltaY !== undefined) {
            e = h.wheelDeltaY / 120
        }
        if (h.wheelDeltaX !== undefined) {
            f = -1 * h.wheelDeltaX / 120
        }
        g.unshift(j, k, f, e);
        return(d.event.dispatch || d.event.handle).apply(this, g)
    }
})(jQuery);
(function (b, c) {
    b.draggable = function a(n) {
        if (!n.handle) {
            return
        }
        var m = b.extend({}, n);
        var f = b(m.handle);
        var g = m.target && b(m.target);
        var i = null;
        var h = (m.type || "").toString().toUpperCase();
        f[0].onselectstart = function () {
            return false
        };
        f.attr("unselectable", "on").css("MozUserSelect", "none");
        var j = null, l = null;
        var k = function (p) {
            var o = p.pageX - l[0], r = p.pageY - l[1];
            if (g) {
                var q = {};
                if (h !== "Y") {
                    q.left = i.left + o
                }
                if (h !== "X") {
                    q.top = i.top + r
                }
                if (!b.isEmptyObject(q)) {
                    g.css(q)
                }
            }
            if (b.isFunction(m.onMove)) {
                m.onMove(p, o, r)
            }
        };
        var e = function (o) {
            b(document).unbind("mousemove", k).unbind("mouseup", e);
            j = false;
            if (b.isFunction(m.onUp)) {
                m.onUp(o)
            }
        };
        var d = function (o) {
            if (j) {
                e()
            }
            if (b.isFunction(m.onDown)) {
                m.onDown(o)
            }
            if (g) {
                i = {left: g[0].offsetLeft, top: g[0].offsetTop}
            }
            l = [o.pageX, o.pageY];
            b(document).bind("mousemove", k).bind("mouseup", e)
        };
        m.handle.bind("mousedown", d);
        this.remove = function () {
            b(document).unbind("mousemove", k);
            b(document).unbind("mousemove", e);
            b(document).unbind("mousedown", d)
        };
        this.destroy = function () {
            f.unbind("mousedown", d)
        }
    }
})(jQuery);
(function (b, c) {
    var a = function (e) {
        var d = this;
        this.cfg = b.extend({}, {className: "dialogJmodal", resizeable: true}, e);
        this.element = b('<div class="' + this.cfg.className + '"/>').appendTo(document.body).css({display: "none", zIndex: b.getzIndex(), width: this.width(), height: this.height()});
        if (this.cfg.show) {
            this.show()
        }
        this.resizeFunc = function () {
            d.css("width", d.width());
            d.css("height", d.height());
            d.triggerHandler("resize")
        };
        if (this.cfg.resizeable) {
            b(window).bind("resize", this.resizeFunc)
        }
    };
    a.prototype = {constructor: a, show: function () {
        this.element.show.apply(this.element, arguments);
        this._processTages(1)
    }, hide: function () {
        this.element.hide.apply(this.element, arguments);
        this._processTages(0)
    }, width: function () {
        return b(window).width()
    }, height: function () {
        return Math.max(b("body").height(), b("html").height())
    }, css: function () {
        this.element.css.apply(this.element, arguments)
    }, triggerHandler: function () {
        this.element.triggerHandler.apply(this.element, arguments)
    }, bind: function () {
        this.element.bind.apply(this.element, arguments)
    }, remove: function () {
        this._processTages(0);
        this.element && this.element.remove();
        b(window).unbind("resize", this.resizeFunc);
        for (var d in this) {
            delete this[d]
        }
    }, _processTages: function (g) {
        var e = this;
        if (!b.browser.msie) {
            return
        }
        e.special = e.special || [];
        if (g) {
            if (e.special.length > 0) {
                return
            }
            var h = b("SELECT,OBJECT,EMBED");
            if (this.cfg.safety) {
                h = h.filter(function (i) {
                    return e.cfg.safety.find(this).length == 0
                })
            }
            h.each(function () {
                var i = b(this);
                e.special.push({dom: this, css: i.css("visibility")});
                i.css("visibility", "hidden")
            })
        } else {
            for (var f = 0, d = e.special.length; f < d; f++) {
                b(e.special[f].dom).css("visibility", e.special[f].css || "");
                e.special[f].dom = null
            }
        }
    }};
    b.modal = a;
    b.getzIndex = function () {
        b.zIndex = (b.zIndex || 50000);
        return b.zIndex++
    }
})(jQuery);
(function (a, b) {
    a.getcurzIndex = function () {
        a.curzIndex = (a.curzIndex || 10005);
        return a.curzIndex++
    }
})(jQuery);
(function (c, d) {
    var e = c.browser.msie && c.browser.version < 7;
    var b = function (i) {
        b.INST.push(this);
        this.cfg = c.extend({}, b.setting, i);
        if (!this.cfg.showTitle) {
            this.cfg.draggable = false
        }
        if (this.cfg.top != null || this.cfg.left != null) {
            this.cfg.autoCenter = false
        }
        var h = "dialogJ";
        if (this.cfg.holderClassName) {
            h += " " + this.cfg.holderClassName
        }
        if (!e && this.cfg.fixed) {
            h += " dialogJfix"
        }
        if (this.cfg.showShadow) {
            h += " dialogJshadow"
        }
        var g = this;
        if (this.cfg.modal) {
            var f = {};
            if (this.cfg.modalClassName) {
                f.className = this.cfg.modalClassName
            }
            this.modal = new c.modal(f)
        }
        this.element = c('<div class="' + h + '"></div>').css({zIndex: c.getzIndex(), display: "none"}).appendTo(document.body);
        this.elementWrapper = c('<div class="uiDialogWrapper"></div>').appendTo(this.element);
        this._setupTitleBar();
        this.setTitle(this.cfg.title);
        if (this.cfg.contentType === "iframe") {
            this.cfg.html = c("<iframe></iframe>").css({width: "100%", height: "100%", border: "none"}).attr({src: this.cfg.html, frameBorder: 0})
        }
        this._setupContent();
        this.setContent(this.cfg.html);
        this.width(this.cfg.width);
        this.height(this.cfg.height);
        this.setPosition(this.cfg.left, this.cfg.top);
        this.cfg.show && this.show();
        this.cfg.autoCenter && c(window).bind("resize", j);
        this._setScroll();
        c.each(a, function (k, l) {
            if (g.cfg[l]) {
                g.bind(l, g.cfg[l])
            }
        });
        this.cfg.escable && this._setupEscKey();
        function j() {
            if (g.dragged) {
                return
            }
            g.element.triggerHandler("onresize");
            if (g.sizeTimer) {
                clearTimeout(g.sizeTimer)
            }
            g.sizeTimer = setTimeout(function () {
                g.setPosition()
            }, 5)
        }

        this.close = function () {
            if (g.element.triggerHandler("onclose") === false) {
                return false
            }
            c(window).unbind("resize", j);
            g.modal && g.modal.remove();
            g.dragobj && g.dragobj.remove();
            g._setScroll(true);
            g.element.remove();
            for (var l = 0, k = b.INST.length; l < k; l++) {
                if (b.INST[l] == g) {
                    b.INST.splice(l, 1);
                    break
                }
            }
        }
    };
    var a = ["onaccept", "oncancel", "onclose", "onresize", "onhide"];
    c.extend(b, {open: function (f, g) {
        return new b(c.extend({}, g, {html: f}))
    }, ask: function (g, j, k, h) {
        var i = new b(c.extend({modal: true}, h || {}, {html: g || "", show: false}));
        if (c.isArray(j) && j.length > 0) {
            var f = c('<div class="dialogJanswers"></div>').appendTo(i.elementWrapper).html(c.map(j,function (l) {
                return'<input type="button" class="dialogJbtn" value="' + l + '" />'
            }).join(" "));
            i.buttons = c("input[type=button]", f).each(function (m, l) {
                c(this).bind("click", function () {
                    if (k.call(this, m, i) !== false) {
                        i.close()
                    }
                })
            })
        }
        i.setPosition();
        if (!h || !h.show) {
            i.show()
        }
        return i
    }, alert: function (h, g) {
        var f = c.extend({}, g || {});
        return b.ask(h, [f.acceptValue || "\u786e\u5b9a"], function (j, k) {
            return k.element.triggerHandler(a[j], this)
        }, f)
    }, confirm: function (h, g) {
        var f = c.extend({}, g || {});
        return b.ask(h, [f.acceptValue || "\u786e\u5b9a", f.cancelValue || "\u53d6\u6d88"], function (j, k) {
            return k.element.triggerHandler(a[j], this)
        }, f)
    }, assert: function (h, j, g) {
        var f = c.extend({button: true}, g || {});
        if (arguments.length == 2) {
            f = j;
            j = c.noop
        }
        var i = b.ask(h, (f.button ? [f.acceptValue || "\u786e\u5b9a"] : []), function (k, l) {
            return l.element.triggerHandler(a[k], this)
        }, f);
        setTimeout(function () {
            if (i && i.close) {
                i.close()
            }
            j && j()
        }, parseInt(f.time) || 2000);
        return i
    }, load: function (g, f) {
        f = f || {};
        var h = {url: g, type: "GET", dataType: "html", cache: false, success: function (j) {
            if (f.filter) {
                j = c(f.filter, j)
            }
            i.setContent(j)
        }};
        c.each(["type", "cache"], function () {
            if (this in f) {
                h[this] = f[this];
                delete f[this]
            }
        });
        c.ajax(h);
        var i = new b(f || {});
        return i
    }, close: function () {
        for (var g = 0; g < this.INST.length; g++) {
            var f = this.INST[g].close();
            if (f !== false) {
                g--
            }
        }
    }, setting: {modal: true, showShadow: true, showTitle: true, width: 300, height: null, fixed: true, left: null, top: null, show: true, closeable: true, hideOnclose: false, draggable: true, contentType: null, resizeable: false, closeTips: null, escable: true, scrollable: true, modalClassName: null, autoCenter: true, html: null, minWidth: 200, minHeight: 100, maxWidth: null, maxHeight: null}});
    b.prototype = {constructor: b, setTitle: function (f) {
        this.element.find(".dialogJtitle>span.dialogJtxt").html(f || "")
    }, setContent: function (f) {
        if (f) {
            this.element.find(".dialogJbody").html(f)
        }
    }, width: function (f) {
        return this.element.css("width", f)
    }, height: function (f) {
        return c(".dialogJbody", this.element).css("height", f)
    }, setPosition: function (i, h) {
        if ((i !== 0 & !i) && (h !== 0 && !h)) {
            var g = c(document);
            var f = c(window);
            var j = this.cfg.fixed && !e ? [0, 0] : [g.scrollLeft(), g.scrollTop()];
            i = j[0] + (f.width() - this.element.outerWidth()) / 2;
            h = j[1] + (f.height() - this.element.outerHeight()) / 2;
            h = (h >= 0) ? h : 0
        }
        this.element.css({left: i, top: h});
        this.triggerHandler("resize")
    }, getTitle: function () {
        return this.element.find(".dialogJtitle>span").html()
    }, getContent: function () {
        return c(".dialogJbody", this.element).html()
    }, show: function () {
        this.element.show.apply(this.element, arguments);
        if (this.modal) {
            this.modal.cfg.safety = this.element;
            this.modal.show.apply(this.modal, arguments)
        }
    }, hide: function () {
        if (this.element.triggerHandler("onhide") === false) {
            return false
        }
        this.element.hide.apply(this.element, arguments);
        if (this.modal) {
            this.modal.hide.apply(this.modal, arguments)
        }
    }, getElement: function () {
        return this.element[0]
    }, bind: function () {
        this.element.bind.apply(this.element, arguments);
        return this
    }, triggerHandler: function () {
        this.element.triggerHandler.apply(this.element, arguments)
    }, getButtons: function () {
        return this.buttons
    }, _setupTitleBar: function () {
        if (!this.cfg.showTitle) {
            return
        }
        var f = this;
        var g = f.titleBar = c('<div class="dialogJtitle"><span class="dialogJtxt"></span></div>').appendTo(this.elementWrapper);
        if (this.cfg.closeable) {
            c('<a href="#" class="dialogJclose" title="' + (this.cfg.closeTips || "\u5173\u95ed\u672c\u7a97\u53e3") + '">&nbsp;</a>').appendTo(g).bind("mousedown",function (i) {
                i.stopPropagation()
            }).click(function (i) {
                if (f.cfg.hideOnclose) {
                    f.hide()
                } else {
                    f.close()
                }
                return false
            })
        }
        if (this.cfg.draggable) {
            g[0].style.cssText = "-moz-user-select: none;cursor:move";
            var h = null;
            this.dragobj = new c.draggable({handle: g, target: f.element, onDown: function () {
                f._setupHackDiv(1)
            }, onUp: function () {
                f.dragged = true;
                f._setupHackDiv(0)
            }})
        }
    }, _setupHackDiv: function (h) {
        var g = this;
        if (h) {
            if (c("IFRAME", g.element).length > 0) {
                var f = c(".dialogJcontent", g.element);
                g.hack_div = (g.hack_div || c("<div></div>").appendTo(f).css({position: "absolute", left: 0, top: 0, cursor: "move"})).css({display: "block", width: g.element.outerWidth(), height: g.element.outerHeight()})
            }
        } else {
            if (g.hack_div) {
                g.hack_div.css("display", "none")
            }
        }
    }, _setupEscKey: function () {
        var f = this;
        var g = function (h) {
            if (h.which == 27) {
                if (f.showTitle) {
                    c(".dialogJclose", f.titleBar).triggerHandler("click")
                } else {
                    f.close()
                }
            }
        };
        c(document).bind("keydown", g);
        c(f.element).bind("onclose", function () {
            c(document).unbind("keydown", g)
        })
    }, _setupContent: function () {
        var h = c('<div class="dialogJcontent"><div class="dialogJbody"id="dialogJbody"></div></div>'), g = this;
        this.elementWrapper.append(h);
        if (this.cfg.resizeable) {
            var f = c(".dialogJcontent", g.element);
            this.cfg.minWidth = this.cfg.minWidth || 0;
            this.cfg.minHeight = this.cfg.minHeight || 0;
            c.each(["es"], function (j, i) {
                var m = c('<div class="resizable-' + i + '"><div></div></div>');
                m[0].style.cssText = "-moz-user-select:none;" + (j == 3 ? ("z-index:" + c.getzIndex()) : "");
                g.elementWrapper.append(m);
                var n = null, l = null;
                new c.draggable({handle: m, onDown: function (k) {
                    g._setupHackDiv(1);
                    n = parseInt(g.element.width());
                    l = parseInt(f.height())
                }, onMove: function (s, o, t) {
                    var r = n + o;
                    var k = l + t;
                    if (!((g.cfg.minWidth && r < g.cfg.minWidth && o < 0) || (g.cfg.maxWidth && (r > g.cfg.maxWidth) && o > 0))) {
                        g.element.width(r)
                    }
                    if (!((g.cfg.minHeight && (k < g.cfg.minHeight) && t < 0) || ((g.cfg.maxHeight) && (k > g.cfg.maxHeight) && t > 0))) {
                        f.height(k)
                    }
                    var p = g.element.outerWidth(), q = g.element.outerHeight();
                    if (g.hack_div) {
                        g.hack_div.css({width: p, height: q})
                    }
                    if (g.onResize) {
                        g.onResize.call(g, p, q)
                    }
                }, onUp: function (k) {
                    g._setupHackDiv(0)
                }})
            })
        }
    }, _setScroll: function (g) {
        if (!this.cfg.modal || this.cfg.scrollable) {
            return
        }
        var f = c("html");
        if (!f.length) {
            return
        }
        var h = f[0].scrollTop;
        if (g) {
            f.css({overflow: this.element.data("htmlof") || "", "padding-right": "0px"})
        } else {
            if (f[0].style.overFlow) {
                this.element.data("htmlof", f[0].style.overFlow)
            }
            f.css({overflow: "hidden", "padding-right": "17px"})
        }
        f[0].scrollTop = h
    }, setUnDraggable: function () {
        if (this.cfg.draggable) {
            this.dragobj.destroy()
        }
        return this
    }};
    c.each(a, function (f, g) {
        b.prototype[g] = function (h) {
            this.bind(g, h)
        }
    });
    b.INST = [];
    c.dialog = b
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
}, easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a
}, easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a
}, easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f + a
    }
    return -h / 2 * ((--f) * (f - 2) - 1) + a
}, easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a
}, easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a
}, easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f + 2) + a
}, easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a
}, easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a
}, easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f * f + a
    }
    return -h / 2 * ((f -= 2) * f * f * f - 2) + a
}, easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a
}, easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a
}, easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
}, easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
}, easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin(f / g * (Math.PI / 2)) + a
}, easeInOutSine: function (e, f, a, h, g) {
    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
}, easeInExpo: function (e, f, a, h, g) {
    return(f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
}, easeOutExpo: function (e, f, a, h, g) {
    return(f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
}, easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
        return a
    }
    if (f == g) {
        return a + h
    }
    if ((f /= g / 2) < 1) {
        return h / 2 * Math.pow(2, 10 * (f - 1)) + a
    }
    return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
}, easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
}, easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
}, easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
        return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
    }
    return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
}, easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
        return e
    }
    if ((h /= k) == 1) {
        return e + l
    }
    if (!j) {
        j = k * 0.3
    }
    if (g < Math.abs(l)) {
        g = l;
        var i = j / 4
    } else {
        var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
}, easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
        return e
    }
    if ((h /= k) == 1) {
        return e + l
    }
    if (!j) {
        j = k * 0.3
    }
    if (g < Math.abs(l)) {
        g = l;
        var i = j / 4
    } else {
        var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
}, easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
        return e
    }
    if ((h /= k / 2) == 2) {
        return e + l
    }
    if (!j) {
        j = k * (0.3 * 1.5)
    }
    if (g < Math.abs(l)) {
        g = l;
        var i = j / 4
    } else {
        var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    if (h < 1) {
        return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    }
    return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
}, easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
        g = 1.70158
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a
}, easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
        g = 1.70158
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
}, easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
        g = 1.70158
    }
    if ((f /= h / 2) < 1) {
        return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
    }
    return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
}, easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
}, easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < (1 / 2.75)) {
        return h * (7.5625 * f * f) + a
    } else {
        if (f < (2 / 2.75)) {
            return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
        } else {
            if (f < (2.5 / 2.75)) {
                return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
            } else {
                return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
            }
        }
    }
}, easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
        return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
    }
    return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
}});
$.disableInput = function (g, h, c) {
    var j, f, d;
    var a = [8, 9, 16, 17, 18, 20, 13, 27, 37, 38, 39, 40, 33, 34, 35, 36, 45, 46, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145];
    var i = function () {
        j = g;
        if (h && typeof h == "function") {
            f = h || null
        }
        if (c && typeof c == "function") {
            d = c || null
        }
        b()
    };
    var b = function () {
        j.bind("keydown", function (k) {
            return e(k)
        })
    };
    var e = function (k) {
        var l = k;
        if ($.inArray(l.keyCode, a) >= 0) {
            return true
        }
        if (l.ctrlKey || l.altKey) {
            return true
        }
        if (d && !d(l.keyCode)) {
            l.preventDefault();
            return false
        }
        if (f && !f(j.val().toString().trim())) {
            l.preventDefault();
            return false
        }
    };
    i()
};
$.subInput = function (b, c) {
    $.disableInput(b, function (e) {
        if (e.toString().getByteLength() >= c) {
            return false
        } else {
            return true
        }
    });
    var a = function () {
        var e = b.val().toString();
        if (e.getByteLength() > c) {
            b.val(e.subByte(c, ""))
        }
    };
    b.bind("propertychange", a);
    try {
        b.bind("input", a)
    } catch (d) {
    }
    b.bind("keyup", a)
};
(function (b, a, c) {
    b.json = b.json || {};
    b.json.encode = (function () {
        var e = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};

        function d(i) {
            if (/["\\\x00-\x1f]/.test(i)) {
                i = i.replace(/["\\\x00-\x1f]/g, function (j) {
                    var k = e[j];
                    if (k) {
                        return k
                    }
                    k = j.charCodeAt();
                    return"\\u00" + Math.floor(k / 16).toString(16) + (k % 16).toString(16)
                })
            }
            return'"' + i + '"'
        }

        function g(p) {
            var k = ["["], m = p.length, j, n, o;
            for (n = 0; n < m; n++) {
                o = p[n];
                switch (typeof o) {
                    case"undefined":
                    case"function":
                    case"unknown":
                        break;
                    default:
                        if (j) {
                            k.push(",")
                        }
                        k.push(b.json.encode(o));
                        j = 1
                }
            }
            k.push("]");
            return k.join("")
        }

        function f(i) {
            return i < 10 ? "0" + i : i
        }

        function h(i) {
            return'"' + i.getFullYear() + "-" + f(i.getMonth() + 1) + "-" + f(i.getDate()) + "T" + f(i.getHours()) + ":" + f(i.getMinutes()) + ":" + f(i.getSeconds()) + '"'
        }

        return function (m) {
            switch (typeof m) {
                case"undefined":
                    return"undefined";
                case"number":
                    return isFinite(m) ? String(m) : "null";
                case"string":
                    return d(m);
                case"boolean":
                    return String(m);
                default:
                    if (m === null) {
                        return"null"
                    } else {
                        if (m instanceof Array) {
                            return g(m)
                        } else {
                            if (m instanceof Date) {
                                return h(m)
                            } else {
                                var j = ["{"], l = b.json.encode, i, k;
                                for (key in m) {
                                    if (m.hasOwnProperty(key)) {
                                        k = m[key];
                                        switch (typeof k) {
                                            case"undefined":
                                            case"unknown":
                                            case"function":
                                                break;
                                            default:
                                                if (i) {
                                                    j.push(",")
                                                }
                                                i = 1;
                                                j.push(l(key) + ":" + l(k))
                                        }
                                    }
                                }
                                j.push("}");
                                return j.join("")
                            }
                        }
                    }
            }
        }
    })();
    b.json.parseJSON = (function () {
        var g, e, d = {'"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t"}, p, n = function (r) {
            throw {name: "SyntaxError", message: r, at: g, text: p}
        }, j = function (r) {
            if (r && r !== e) {
                n("Expected '" + r + "' instead of '" + e + "'")
            }
            e = p.charAt(g);
            g += 1;
            return e
        }, i = function () {
            var s, r = "";
            if (e === "-") {
                r = "-";
                j("-")
            }
            while (e >= "0" && e <= "9") {
                r += e;
                j()
            }
            if (e === ".") {
                r += ".";
                while (j() && e >= "0" && e <= "9") {
                    r += e
                }
            }
            if (e === "e" || e === "E") {
                r += e;
                j();
                if (e === "-" || e === "+") {
                    r += e;
                    j()
                }
                while (e >= "0" && e <= "9") {
                    r += e;
                    j()
                }
            }
            s = +r;
            if (!isFinite(s)) {
                n("Bad number")
            } else {
                return s
            }
        }, k = function () {
            var u, t, s = "", r, v;
            if (e === '"' || e === "'") {
                v = e;
                while (j()) {
                    if (e === v) {
                        j();
                        return s
                    }
                    if (e === "\\") {
                        j();
                        if (e === "u") {
                            r = 0;
                            for (t = 0; t < 4; t += 1) {
                                u = parseInt(j(), 16);
                                if (!isFinite(u)) {
                                    break
                                }
                                r = r * 16 + u
                            }
                            s += String.fromCharCode(r)
                        } else {
                            if (typeof d[e] === "string") {
                                s += d[e]
                            } else {
                                break
                            }
                        }
                    } else {
                        s += e
                    }
                }
            }
            n("Bad string")
        }, m = function () {
            while (e && e <= " ") {
                j()
            }
        }, f = function () {
            switch (e) {
                case"t":
                    j("t");
                    j("r");
                    j("u");
                    j("e");
                    return true;
                case"f":
                    j("f");
                    j("a");
                    j("l");
                    j("s");
                    j("e");
                    return false;
                case"n":
                    j("n");
                    j("u");
                    j("l");
                    j("l");
                    return null
            }
            n("Unexpected '" + e + "'")
        }, o, l = function () {
            var r = [];
            if (e === "[") {
                j("[");
                m();
                if (e === "]") {
                    j("]");
                    return r
                }
                while (e) {
                    r.push(o());
                    m();
                    if (e === "]") {
                        j("]");
                        return r
                    }
                    j(",");
                    m()
                }
            }
            n("Bad array")
        }, q = function () {
            if (e === '"' || e === "'") {
                return k()
            } else {
                var r = "";
                while (e) {
                    if (e === ":" || e <= " ") {
                        break
                    }
                    r += e;
                    j()
                }
                if (r === "") {
                    n("Bad key")
                }
                return r
            }
        }, h = function () {
            var s, r = {};
            if (e === "{") {
                j("{");
                m();
                if (e === "}") {
                    j("}");
                    return r
                }
                while (e) {
                    s = q();
                    m();
                    j(":");
                    if (Object.hasOwnProperty.call(r, s)) {
                        n('Duplicate key "' + s + '"')
                    }
                    r[s] = o();
                    m();
                    if (e === "}") {
                        j("}");
                        return r
                    }
                    j(",");
                    m()
                }
            }
            n("Bad object")
        };
        o = function () {
            m();
            switch (e) {
                case"{":
                    return h();
                case"[":
                    return l();
                case'"':
                case"'":
                    return k();
                case"-":
                    return i();
                default:
                    return e >= "0" && e <= "9" ? i() : f()
            }
        };
        return function (u, s) {
            var r;
            p = u;
            g = 0;
            e = " ";
            r = o();
            m();
            if (e) {
                n("Syntax error")
            }
            return typeof s === "function" ? (function t(z, y) {
                var x, w, A = z[y];
                if (A && typeof A === "object") {
                    for (x in A) {
                        if (Object.prototype.hasOwnProperty.call(A, x)) {
                            w = t(A, x);
                            if (w !== c) {
                                A[x] = w
                            } else {
                                delete A[x]
                            }
                        }
                    }
                }
                return s.call(z, y, A)
            }({"": r}, "")) : r
        }
    }());
    b.json.decode = function (d, g) {
        if (typeof(d) != "string" || !d.length) {
            return null
        }
        if (g && !(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(d.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"/g, ""))) {
            return null
        }
        try {
            return b.json.parseJSON(d)
        } catch (f) {
            return{}
        }
    }
})(jQuery, window);
$.stats = {statsParams: {}, onElementClick: function (f) {
    var f = window.event || f;
    var d = f.target || f.srcElement;
    if (d.tagName != "A" && d.tagName != "INPUT" && d.tagName != "IMG") {
        return
    }
    var b = this.id;
    var h = d;
    var c = "";
    var a = "";
    var g = "";
    while (true) {
        c = h.getAttribute("st_type") || h.getAttribute("cId");
        if (c) {
            g = "area=" + c;
            if (c in $.stats.statsParams) {
                a = h.getAttribute("st_value");
                g = $.stats.statsParams[c] + (a == null ? "" : ("&st_value=" + a))
            }
            $.stats.sendRequest(g);
            break
        }
        if (h.id == b || h.tagName == "BODY") {
            break
        } else {
            h = h.parentNode
        }
    }
}, init: function (a, d) {
    var c = document.getElementById(a);
    if (c) {
        if (typeof d == "object") {
            for (var b in d) {
                $.stats.statsParams[b] = d[b]
            }
        }
        c.onclick = $.stats.onElementClick
    }
}, sendRequest: function (b) {
    if (document.images) {
        var a = new Image();
        window["bd_pv_" + (new Date().getTime())] = a;
        a.src = "http://static.tieba.baidu.com/tb/img/pv.gif?" + b + "&t=" + new Date().getTime();
        a = null
    }
}, hive: function (j, e) {
    var d = /^\w*$/;
    for (var f = 0, h = arguments.length; f < h; f++) {
        if (!d.test(arguments[f])) {
            return false
        }
    }
    if (document.images) {
        var g = new Image();
        window["bd_pv_" + (new Date().getTime())] = g;
        var c = "http://static.tieba.baidu.com/tb/img/hive.gif?";
        var b = (window.ALog && ALog.sid) || (+new Date).toString(36) + (+Math.random().toFixed(8).substr(2)).toString(36);
        var a = ["location=" + (j || ""), "cmd=" + (e || "click"), "url=" + encodeURIComponent(document.location.href), "refer=" + encodeURIComponent(document.referrer), "sid=" + b];
        if (PageData) {
            a.push("tb_mid=" + (PageData.product || ""));
            if (PageData.forum) {
                a.push("tb_fid=" + (PageData.forum.id || ""));
                a.push("tb_fname=" + encodeURIComponent(PageData.forum.name || ""))
            }
            if (PageData.user) {
                a.push("uname=" + encodeURIComponent(PageData.user.name || ""));
                a.push("tb_is_new_user=" + (PageData.user.is_new_user || ""))
            }
            if (PageData.thread) {
                a.push("tb_tid=" + ((PageData.thread && PageData.thread.id) || ""))
            }
        }
        if (arguments[2]) {
            a.push("tb_trump=" + arguments[2])
        }
        c += "&" + a.join("&");
        g.src = c;
        g = null
    }
}, track: function (e, b, f, d) {
    if (document.images) {
        var a = new Image();
        window["bd_pv_" + (new Date().getTime())] = a;
        var c = "http://static.tieba.baidu.com/tb/img/track.gif?";
        var g = ["client_type=pc_web", "task=" + (b && encodeURIComponent(b) || ""), "locate=" + (e || ""), "type=" + (d || "click"), "url=" + encodeURIComponent(document.location.href), "refer=" + encodeURIComponent(document.referrer)];
        if (PageData) {
            g.push("page=" + (f || PageData.product || ""));
            if (PageData.forum) {
                g.push("fid=" + (PageData.forum.id || ""));
                g.push("fname=" + encodeURIComponent(PageData.forum.name || ""))
            }
            if (PageData.user) {
                g.push("uname=" + encodeURIComponent(PageData.user.name || ""));
                g.push("is_new_user=" + (PageData.user.is_new_user || ""))
            }
            if (PageData.thread) {
                g.push("tid=" + ((PageData.thread && PageData.thread.id) || ""))
            }
        }
        c += g.join("&");
        a.src = c + "&t=" + new Date().getTime();
        a = null
    }
}, getUrl: function (d, f) {
    var b = "";
    b = d.href;
    var e = b;
    var c = "";
    var a = b.indexOf("#");
    if (a >= 0) {
        e = b.slice(0, a);
        c = b.slice(a)
    }
    e += (e.indexOf("?") == -1 ? "?" : "&");
    b = e + f + c;
    return b
}, addParams: function (b, c) {
    var a = $.stats.getUrl(b, c);
    _html = b.innerHTML;
    b.href = a;
    b.innerHTML = _html
}, scanPage: function (c) {
    var b = c ? c : $("body");
    var d = "stats-data";
    var a = b.find("*[" + d + "]");
    if (!a.length) {
        return
    }
    $.each(a, function (e, f) {
        $.stats.processTag($(f))
    })
}, processTag: function (a) {
    var b = "stats-event";
    _dataAttrName = "stats-data", _typeAttrName = "stats-datatype", _data = a.attr(_dataAttrName), _event = a.attr(b), _datatype = a.attr(_typeAttrName);
    if (!_data || _data == "") {
        return
    }
    if (!_datatype || _datatype == "") {
        _datatype = "query"
    }
    if (_datatype == "json") {
        _data = $.param($.json.decode(_data))
    }
    _event = (_event && _event != "") ? _event : "click";
    a.attr(_dataAttrName, _data);
    a.bind(_event, function () {
        $.stats.sendRequest($(this).attr(_dataAttrName))
    })
}};
var Stats = $.stats, Statistics = $.stats;
$.SimplePopupMsg = {delayTime: 3000, show: function (b, g, f) {
    var d = '<div class="simple_popup_msg"' + (g ? (' id="' + g + '" ') : "") + '> <div class="rc_top"><b></b><i></i></div> <div class="rc_content"><div class="cnt">' + b + ' </div></div> <div class="rc_bottom"><b></b><i></i></div></div>';
    var c = this.getPopupElem();
    var a = $("body");
    c.css({top: Math.max((parseInt(window.screen.availHeight / 2) + a.scrollTop() - 40), 0), left: Math.max((parseInt(window.screen.availWidth / 2) + a.scrollLeft() - 100), 0), "z-index": 30000, opacity: 0, display: ""});
    c.html(d);
    var e = this;
    e._slowShow(c, 1, 10);
    setTimeout(function () {
        e.hide()
    }, f || $.SimplePopupMsg.delayTime)
}, _slowShow: function (d, a, b) {
    var c = this;
    if (a <= 10) {
        d.css({opacity: (a * 0.1)});
        setTimeout(function () {
            c._slowShow(d, (a + 1), b)
        }, b)
    }
}, getPopupElem: function () {
    var a;
    if (!document.getElementById("simplePopupMsg_wrap")) {
        a = $('<div id="simplePopupMsg_wrap"></div>');
        a.css("position", "absolute");
        $("body").prepend(a)
    } else {
        a = $("#simplePopupMsg_wrap")
    }
    return a
}, hide: function () {
    this.getPopupElem().css("display", "none")
}};
$.getBrowser = function () {
    var c = navigator.userAgent;
    var d = {};
    var a = "", b = "";
    if (c.indexOf("AppleWebKit") >= 0) {
        a = "webkit"
    } else {
        if (c.indexOf("Gecko") >= 0) {
            a = "gecko"
        } else {
            if (c.indexOf("MSIE") >= 0) {
                a = "ie"
            }
        }
    }
    if (c.indexOf("Firefox") >= 0) {
        b = "firefox"
    } else {
        if (c.indexOf("360SE") >= 0) {
            b = "360se"
        } else {
            if (c.indexOf("SE") >= 0) {
                b = "sougou"
            } else {
                if (c.indexOf("Maxthon") >= 0) {
                    b = "maxthon"
                } else {
                    if (c.indexOf("MSIE") >= 0) {
                        b = "ie"
                    } else {
                        if (c.indexOf("Chrome") >= 0) {
                            b = "chrome"
                        } else {
                            if (c.indexOf("Safari") >= 0) {
                                b = "safari"
                            }
                        }
                    }
                }
            }
        }
    }
    return{core: a, name: b}
};
$.resizePic = function (d, a, k, f) {
    var j = a || 120;
    var g = k || 120;
    var c = false;
    var h = d;
    if (h.width() == 0) {
        var i = this;
        var m = arguments;
        var e;
        e = setTimeout(function () {
            clearTimeout(e);
            e = null;
            m.callee.apply(i, m)
        }, 100);
        return false
    }
    function l(n, q, o, s) {
        var p = 0, r = n, t = q;
        if (n > o) {
            p += 1
        }
        if (q > s) {
            p += 2
        }
        switch (p) {
            case 1:
                r = o;
                r = q * o / n;
            case 2:
                t = s;
                r = n * s / q;
            case 3:
                t = (q / s > n / o) ? s : q * o / n;
                r = (q / s > n / o) ? n * s / q : o
        }
        if (p != 0) {
            c = true
        }
        return[r, t]
    }

    var b = l(h.width(), h.height(), j, g);
    d.css("width", b[0]);
    d.css("height", b[1]);
    d.css("visibility", "visible");
    if (f == true) {
        d.css("margin-top", (k - parseInt(b[1])) / 2)
    }
    return c
};
$.dateFormat = function (a, f) {
    if ("string" != typeof f) {
        return a.toString()
    }
    function d(l, k) {
        f = f.replace(l, k)
    }

    var b = function (k) {
        return String(k).length > 1 ? String(k) : "0" + k
    }, g = a.getFullYear(), e = a.getMonth() + 1, j = a.getDate(), h = a.getHours(), c = a.getMinutes(), i = a.getSeconds();
    d(/yyyy/g, String(g));
    d(/yy/g, b(g.toString().slice(2), 2));
    d(/MM/g, b(e, 2));
    d(/M/g, e);
    d(/dd/g, b(j, 2));
    d(/d/g, j);
    d(/HH/g, b(h, 2));
    d(/H/g, h);
    d(/hh/g, b(h % 12, 2));
    d(/h/g, h % 12);
    d(/mm/g, b(c, 2));
    d(/m/g, c);
    d(/ss/g, b(i, 2));
    d(/s/g, i);
    return f
};
(function (a, b) {
    a.extend(String.prototype, {escapeHTML: function () {
        return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;").replace(/"/g, "&quot;")
    }, unescapeHTML: function () {
        return this.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&quot;/g, '"')
    }, format: function (g) {
        if (typeof g === "undefined") {
            return this
        }
        var f = /([.*+?^=!:${}()|[\]\/\\])/g, d = "{".replace(f, "\\$1"), i = "}".replace(f, "\\$1");
        var e = (new RegExp("#" + d + "([^" + d + i + "]+)" + i, "g")), c = (new RegExp("#" + d + "(\\d+)" + i, "g"));
        if (typeof(g) == "object") {
            return this.replace(e, function (k, m) {
                var l = g[m];
                if (typeof l == "function") {
                    l = l(m)
                }
                return typeof(l) == "undefined" ? "" : l
            })
        } else {
            if (typeof(g) != "undefined") {
                var j = Array.prototype.slice.call(arguments, 0);
                var h = j.length;
                return this.replace(c, function (k, l) {
                    l = parseInt(l, 10);
                    return(l >= h) ? k : j[l]
                })
            }
        }
    }, tempFormat: function (g) {
        if (typeof g === "undefined") {
            return
        }
        var f = /([.*+?^=!:${}()|[\]\/\\])/g, d = "{".replace(f, "\\$1"), i = "}".replace(f, "\\$1");
        var e = (new RegExp("#" + d + "([^" + d + i + "]+)" + i, "g")), c = (new RegExp("#" + d + "(\\d+)" + i, "g"));
        if (typeof(g) == "object") {
            return this.replace(e, function (k, m) {
                var l = g[m];
                if (typeof l == "function") {
                    l = l(m)
                }
                return typeof(l) == "undefined" ? "" : l
            })
        } else {
            if (typeof(g) != "undefined") {
                var j = Array.prototype.slice.call(arguments, 0);
                var h = j.length;
                return this.replace(c, function (k, l) {
                    l = parseInt(l, 10);
                    return(l >= h) ? k : j[l]
                })
            }
        }
    }, getByteLength: function () {
        return this.replace(/[^\x00-\xff]/g, "mm").length
    }, subByte: function (g, f) {
        if (a.tb.getByteLength(this) <= g) {
            return this
        }
        f = f === b ? "..." : String(f);
        g -= a.tb.getByteLength(f);
        for (var d = Math.floor(g / 2), c = a.tb.getByteLength(this); d < c; d++) {
            var e = this.substring(0, d);
            if (a.tb.getByteLength(e) >= g) {
                return e + f
            }
        }
        return this
    }, escapeUTF8: function () {
        return escape(this).replace(/%u(\w{4})/g, function (c, d) {
            return encodeURIComponent(String.fromCharCode("0x" + d)).replace(/%/g, "%25")
        })
    }})
})(jQuery);
(function (c, d) {
    function e(k, l, f) {
        function h() {
        }

        h.prototype = l.prototype;
        var j = new h();
        j.constructor = k;
        k.superclass = l;
        for (var g in f) {
            if (f.hasOwnProperty(g)) {
                j[g] = f[g]
            }
        }
        k.prototype = j
    }

    c.tb.extend = e;
    function b() {
        this._events = {}
    }

    b.prototype = {on: function (h, i, g, f) {
        g = g || this;
        this._events[h] = this._events[h] || [];
        this._events[h].push({listener: i, scope: g, args: f})
    }, fireEvent: function (m, l, g) {
        var n, k, f, h = this._events[m];
        if (!h) {
            return false
        } else {
            for (k = 0, f = h.length; k < f; k++) {
                n = h[k];
                l = l || n.scope || this;
                g = g || n.args || [];
                n.listener.apply(l, g)
            }
        }
    }, remove: function (k, l) {
        if (!this._events[k]) {
            return false
        }
        var h = this._events[k], g, f;
        if (typeof l !== "function") {
            delete this._events[k];
            return
        }
        for (g = 0, f = h.length; g < f; g++) {
            if (h[g].listener === l) {
                h.splice(g, 1);
                break
            }
        }
        if (h.length === 0) {
            delete this._events[k]
        }
    }};
    c.tb.EventDispatcher = b;
    function a(i, h, f, g) {
        this.init(i, h, f, g)
    }

    a.prototype = {end: null, value: null, started: false, paused: false, fx: {liner: function (f) {
        return f
    }, swing: function (f) {
        return((-Math.cos(f * Math.PI) / 2) + 0.5)
    }}, init: function (i, h, f, g) {
        this.from = i;
        this.to = h;
        this.diff = h - i;
        this.duration = f;
        if (typeof g === "function") {
            this.easing = g
        } else {
            this.easing = this.fx[g || "swing"]
        }
    }, get: function () {
        if (!this.started) {
            return this.from
        }
        if (this.paused) {
            return this.value
        }
        var f = new Date().getTime();
        if (f >= this.end) {
            return this.to
        }
        this.value = this.from + this.diff * this.easing((f - this.startTime) / this.duration);
        return this.value
    }, start: function () {
        this.startTime = new Date().getTime();
        this.end = this.startTime + this.duration;
        this.started = true
    }, startWith: function (i, h, f, g) {
        this.init(i, h, f, g);
        this.start()
    }, pause: function () {
        this.currentValue = this.get();
        this.paused = true
    }, reset: function () {
        this.started = false;
        this.paused = false;
        this.startTime = null;
        this.end = null;
        this.value = null
    }, running: function () {
        return this.end === null ? false : new Date().getTime() <= this.end
    }};
    c.tb.Transfer = a
})(jQuery);
(function (b, c) {
    var a = function (d) {
        a.superclass.call(this);
        this.config = b.extend({}, this.defaultConfig, d);
        this.init()
    };
    b.tb.extend(a, b.tb.EventDispatcher, {defaultConfig: {container: null, holderClassName: "tb-dbox-holder", multiple: false, content: [
        {type: "item", value: "v1", htmlText: "key 1", checked: true},
        {type: "separator"},
        {type: "item", value: "v2", htmlText: "key 2", checked: true}
    ]}, show: function () {
        this.$holder.css("display", "block")
    }, hide: function () {
        this.$holder.css("display", "none")
    }, setMultiple: function (d) {
        this.config.multiple = !!d
    }, getLength: function () {
        return this.$ul.find(">li").length
    }, getSelectedIndex: function () {
        var d = this.$ul.find(">li").map(function (e) {
            if (b(this).hasClass("checked")) {
                return e
            }
        }).toArray();
        return this.config.multiple ? d : d[0]
    }, getValue: function () {
        var d = this.$ul.find(">li.checked").map(function (e, f) {
            return f.getAttribute("data-value")
        }).toArray();
        return this.config.multiple ? d : d[0]
    }, select: function (d) {
        if (!this.config.multiple) {
            this.$ul.find(">li.checked").removeClass("checked")
        }
        this.$ul.find(">li").eq(d).addClass("checked")
    }, deselect: function (d) {
        this.$ul.find(">li").eq(d).removeClass("checked")
    }, add: function (d) {
        if (d.type === "item") {
            this.addItem(d)
        } else {
            if (d.type === "separator") {
                this.addSeparator()
            }
        }
    }, $holder: null, $ul: null, init: function () {
        var e = this.config, d = this;
        this.$container = b(e.container);
        if (this.$container.length === 0) {
            this.$container = b("body")
        }
        this.$holder = b("<div>").attr("class", e.holderClassName).append("<ul>").appendTo(this.$container);
        this.$ul = this.$holder.find("ul");
        this.initContent()
    }, initContent: function () {
        var f = this.config.content;
        if (!b.isArray(f)) {
            return
        }
        for (var e = 0, d = f.length; e < d; e++) {
            this.add(f[e])
        }
    }, addItem: function (f) {
        var e = this.getLength(), d = this;
        b("<li>").html(f.htmlText).attr("data-value", f.value).hover(function () {
            b(this).addClass("hover")
        },function () {
            b(this).removeClass("hover")
        }).appendTo(this.$ul).each(function () {
            if (f.checked) {
                d.select(e)
            }
        }).click(function (g) {
            d.clickItem(b(this), e)
        })
    }, addSeparator: function () {
        b("<span>").addClass("separator").appendTo(this.$ul)
    }, clickItem: function (e, f) {
        var g = false, d = e.hasClass("checked");
        if (this.config.multiple) {
            if (d) {
                this.deselect(f)
            } else {
                this.select(f)
            }
            g = true
        } else {
            if (!d) {
                this.select(f);
                g = true
            }
        }
        if (g) {
            this.fireEvent("change", null, [f])
        }
    }});
    b.tb.DBox = a
})(jQuery);
(function (a, c) {
    function b(e, d) {
        this.$el = a(e);
        this.config = a.extend({}, this.defaultConfig, d);
        this.init()
    }

    b.prototype = {defaultConfig: {enterDelay: 1000, leaveDelay: 1000, mouseenter: null, mouseleave: null}, config: null, type: null, timer: null, entered: false, init: function () {
        var e = this.$el, d = this;
        e.bind("mouseenter.delayhover", function (g) {
            var f = this;
            d.hoverMouseenter(g, f)
        });
        e.bind("mouseleave.delayhover", function (g) {
            var f = this;
            d.hoverMouseleave(g, f)
        })
    }, hoverMouseenter: function (h, g) {
        var d = this, f = this.config;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            if (typeof f.mouseenter === "function") {
                f.mouseenter.call(g, h)
            }
            d.entered = true
        }, f.enterDelay)
    }, hoverMouseleave: function (h, g) {
        var d = this, f = this.config;
        clearTimeout(this.timer);
        if (!this.entered) {
            return
        }
        this.timer = setTimeout(function () {
            if (typeof f.mouseleave === "function") {
                f.mouseleave.call(g, h)
            }
            d.entered = false
        }, f.leaveDelay)
    }, clearHoverTimer: function () {
        clearTimeout(this.timer);
        this.entered = false
    }, destroy: function () {
        this.$el.unbind(".delayhover");
        clearTimeout(this.timer);
        if (this.entered && typeof this.config.mouseleave === "function") {
            this.config.mouseleave.call(this)
        }
    }};
    a.fn.delayhover = function (d) {
        if (this.data("tb-delayhover")) {
            throw new Error("$.delayhover: \u4e0d\u80fd\u7ed1\u5b9a\u4e24\u6b21")
        }
        this.data("tb-delayhover", new b(this, d));
        return this
    };
    a.fn.removeDelayhover = function () {
        if (this.data("tb-delayhover")) {
            this.data("tb-delayhover").destroy();
            this.removeData("tb-delayhover")
        }
        return this
    };
    a.fn.clearDelayHoverTimer = function () {
        if (this.data("tb-delayhover")) {
            this.data("tb-delayhover").clearHoverTimer()
        }
        return this
    };
    a.tb.Delayhover = b
})(jQuery);
(function (b, c) {
    function a(e, d) {
        this.$el = b(e);
        this.config = b.extend({}, this.defaultConfig, d);
        this.init()
    }

    a.prototype = {defaultConfig: {handler: null, maxX: Number.MAX_VALUE, maxY: Number.MAX_VALUE, minX: -Number.MAX_VALUE, minY: -Number.MAX_VALUE, dragStart: null, dragging: null, dragEnd: null}, init: function () {
        this.$handler = this.config.handler === null ? this.$el : b(this.config.handler);
        var d = this;
        this.$handler.bind("mousedown.tb-draggable", function (f) {
            d.onMousedown(f)
        })
    }, onMousedown: function (k) {
        k.preventDefault();
        var f = this.$handler, j = f[0], g = this.config, h = this.$el, i = h[0], d = this;
        this.mx = k.clientX, this.my = k.clientY;
        this.ex = h.offset().left;
        this.ey = h.offset().top;
        if (j.setCapture) {
            j.setCapture();
            f.bind("losecapture.tb-draggable", function () {
                d.onMouseup(k)
            })
        }
        b(document).bind("mousemove.tb-draggable", function (l) {
            d.onMousemove(l)
        });
        b(document).bind("mouseup.tb-draggable", function (l) {
            d.onMouseup(l)
        });
        if (typeof g.dragStart === "function") {
            setTimeout(function () {
                g.dragStart.call(i, k)
            }, 0)
        }
    }, onMousemove: function (j) {
        var g = j.clientX - this.mx, f = j.clientY - this.my, h = this.config, i = this.$el[0];
        this.mx += g;
        this.my += f;
        var d = this.ex + g, k = this.ey + f;
        d = Math.max(h.minX, Math.min(d, h.maxX));
        k = Math.max(h.minY, Math.min(k, h.maxY));
        i.style.left = d + "px";
        i.style.top = k + "px";
        this.ex = d;
        this.ey = k;
        if (typeof h.dragging === "function") {
            setTimeout(function () {
                h.dragging.call(i, j)
            }, 0)
        }
    }, onMouseup: function (j) {
        var g = this.$el, i = g[0], d = this.$handler, f = this.config, h = d[0];
        b(document).unbind("mouseup.tb-draggable mousemove.tb-draggable");
        if (h.releaseCapture) {
            d.unbind("losecapture.tb-draggable");
            h.releaseCapture()
        }
        if (typeof f.dragEnd === "function") {
            setTimeout(function () {
                f.dragEnd.call(i, j)
            }, 0)
        }
    }, destroy: function () {
        this.$handler.unbind(".tb-draggable");
        b(document).unbind(".tb-draggable")
    }};
    b.tb.Draggable = a;
    b.fn.makeDraggable = function (d) {
        if (!this.data("tb-draggable")) {
            this.data("tb-draggable", new a(this, d))
        }
    };
    b.fn.clearDraggable = function () {
        if (this.data("tb-draggable")) {
            this.data("tb-draggable").destroy()
        }
    }
})(jQuery);
(function (b, d) {
    function c(e) {
        this.config = b.extend({}, this.defaultConfig, e);
        this.init()
    }

    c.prototype = {defaultConfig: {holderClassName: "tb-ui-pop-holder", contentClassName: "tb-ui-pop-content", html: "Empty!"}, holcer: null, content: null, init: function () {
        var e = this.config;
        this.holder = document.createElement("div");
        this.holder.className = e.holderClassName;
        this.holder.style.position = "absolute";
        this.holder.style.display = "none";
        this.content = document.createElement("div");
        this.content.className = e.contentClassName;
        this.content.style.position = "relative";
        this.holder.appendChild(this.content);
        this.setContent(e.html);
        document.body.appendChild(this.holder)
    }, setContent: function (e) {
        b(this.content).html(e)
    }, show: function (e, f) {
        this.holder.style.left = e + "px";
        this.holder.style.top = f + "px";
        this.holder.style.display = "block"
    }, close: function () {
        this.holder.style.display = "none"
    }};
    function a(f, e) {
        this.$target = b(f);
        a.superclass.call(this, e)
    }

    b.tb.extend(a, c, {defaultConfig: {holderClassName: "tb-ui-poptip-holder", contentClassName: "tb-ui-poptip-content", html: "Empty!", direction: "below", arrowClassName: "tb-ui-poptip-narrow", autoShow: true, needArrow: true, arrowOffset: null, offsetX: 10, offsetY: 0, onBeforeShow: null, onClose: null}, init: function () {
        a.superclass.prototype.init.call(this);
        this.$holder = b(this.holder);
        var e = this.config;
        if (e.needArrow) {
            this.setUpArrow()
        }
        if (e.autoShow) {
            this.show()
        }
    }, show: function () {
        if (typeof this.config.onBeforeShow === "function") {
            if (this.config.onBeforeShow.call(this) === false) {
                return
            }
        }
        var e = this.setPosition(this.$holder, this.$target, this.config.direction, this.config.needArrow);
        a.superclass.prototype.show.call(this, e.x, e.y)
    }, close: function () {
        if (typeof this.config.onClose === "function") {
            this.config.onClose.call(this)
        }
        a.superclass.prototype.close.call(this)
    }, setPosition: function (g, f, h, j) {
        var e = f.offset().left, i = f.offset().top;
        switch (h) {
            case"left":
                e -= g.outerWidth();
                i += (f.outerHeight() - g.outerHeight()) / 2;
                break;
            case"right":
                e += f.outerWidth();
                i += (f.outerHeight() - g.outerHeight()) / 2;
                break;
            case"above":
                i -= g.outerHeight();
                e += (f.outerWidth() - g.outerWidth()) / 2;
                break;
            case"below":
                i += f.outerHeight();
                e += (f.outerWidth() - g.outerWidth()) / 2;
                break;
            default:
                i += f.outerHeight();
                e += (f.outerWidth() - g.outerWidth()) / 2
        }
        return{x: e + this.config.offsetX, y: i + this.config.offsetY}
    }, setUpArrow: function () {
        var h = this.config, k = document.createElement("div"), j = b(k);
        k.style.position = "absolute";
        k.className = h.arrowClassName;
        var f = j.outerWidth(), g = j.outerHeight(), i = this.$holder.outerWidth(), e = this.$holder.outerHeight();
        switch (h.direction) {
            case"left":
                k.style.right = -f + "px";
                k.style.top = (h.arrowOffset === null ? (e / 2 - g / 2) : h.arrowOffset) + "px";
                h.offsetX -= f;
                j.addClass(h.arrowClassName + "-left");
                break;
            case"right":
                k.style.left = -f + "px";
                k.style.top = (h.arrowOffset === null ? (e / 2 - g / 2) : h.arrowOffset) + "px";
                h.offsetX += f;
                j.addClass(h.arrowClassName + "-right");
                break;
            case"above":
                k.style.bottom = -g + "px";
                k.style.left = (h.arrowOffset === null ? (i / 2 - f / 2) : h.arrowOffset) + "px";
                h.offsetY -= g;
                j.addClass(h.arrowClassName + "-above");
                break;
            default:
                k.style.top = -g + "px";
                k.style.left = (h.arrowOffset === null ? (i / 2 - f / 2) : h.arrowOffset) + "px";
                h.offsetY += g;
                j.addClass(h.arrowClassName + "-below")
        }
        this.holder.appendChild(k)
    }});
    b.tb.Poptip = a
})(jQuery);
(function (a, b) {
    a.tb.goTop = {defaultConfig: {className: "goTop", positionCSS: "bottom:20px; margin-left:489px; left:50%; position: fixed", scrollDelay: 400}, init: function (c) {
        c = a.extend({}, this.defaultConfig, c);
        this.$holder = a("<a>").attr({"class": c.className, href: "#"}).css("display", "none").bind("click.tb-gotop", this.goTop).appendTo("body");
        this.setPosition(c.positionCSS);
        this.bindScrollEvent(c.scrollDelay)
    }, setPosition: function (d) {
        var c = this.css2obj(d);
        if (c.position === "fixed" && a.browser.msie && a.browser.version < 7) {
            var e;
            c.position = "absolute";
            if (c.bottom && !isNaN(parseInt(c.bottom))) {
                e = "documentElement.scrollTop+documentElement.clientHeight - this.offsetHeight - " + parseInt(c.bottom)
            } else {
                e = "documentElement.scrollTop + " + (isNaN(parseInt(c.top)) ? "documentElement.scrollTop+documentElement.clientHeight - this.offsetHeight" : parseInt(c.top))
            }
            c.bottom = "auto";
            delete c.top;
            this.$holder[0].style.setExpression("top", e);
            a("html").css("background", "url(about:blank) fixed")
        }
        this.$holder.css(c)
    }, rPositionName: /^(?:left|right|bottom|top|position|margin(?:-left|right|bottom|top)?)$/, css2obj: function (k) {
        var c = this.rPositionName, d = k.toLowerCase().split(";"), e = {}, m, l;
        for (var h = 0, f = d.length; h < f; h++) {
            var g = d[h];
            if ((g = a.trim(g)) === "") {
                continue
            }
            m = a.trim(g.substring(0, g.indexOf(":")));
            l = a.trim(g.substring(g.indexOf(":") + 1));
            if (m === "" || l === "" || !c.test(m)) {
                continue
            }
            e[m] = l
        }
        return e
    }, isShow: false, bindScrollEvent: function (c) {
        var e, d = this;
        a(window).bind("scroll.tb-gotop", function () {
            clearTimeout(e);
            e = setTimeout(function () {
                if (a(window).scrollTop() > 0) {
                    if (!d.isShow) {
                        d.$holder.fadeIn();
                        d.isShow = true
                    }
                } else {
                    if (d.isShow) {
                        d.$holder.fadeOut();
                        d.isShow = false
                    }
                }
            }, c)
        })
    }, goTop: function () {
        var f;
        var e = a(window).scrollTop(), d = a(window).scrollLeft();
        if (a.browser.msie) {
            window.scrollTo(d, 0)
        } else {
            function c() {
                e = Math.floor(e / 2);
                window.scrollTo(d, e);
                if (e > 2) {
                    scrollTimer = setTimeout(c, 40)
                } else {
                    window.scrollTo(d, 0);
                    clearTimeout(scrollTimer)
                }
            }

            c()
        }
        return false
    }}
})(jQuery);
(function ($, undefined) {
    var Class = function (properties) {
        if (!properties.hasOwnProperty("initial") || !$.isFunction(properties.initial)) {
            return
        }
        var _class = function () {
            this.initial.apply(this, arguments)
        };
        _class.extend = function (prop) {
            var _prototype = _class.prototype, _newClass = Class(_prototype);
            $.extend(_newClass.prototype, prop, {parent: _prototype, superclass: _prototype.initial});
            return _newClass
        };
        $.extend(_class.prototype, properties);
        return _class
    };
    $.tb.Class = Class;
    $.tb.escapeHTML = function (s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;").replace(/'/g, "&#039;").replace(/"/g, "&quot;")
    };
    $.tb.unescapeHTML = function (s) {
        return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#039;/g, "'").replace(/&quot;/g, '"')
    };
    $.tb.format = function (s, json) {
        if (typeof json === "undefined") {
            return
        }
        var k = /([.*+?^=!:${}()|[\]\/\\])/g, l = "{".replace(k, "\\$1"), r = "}".replace(k, "\\$1");
        var r1 = (new RegExp("#" + l + "([^" + l + r + "]+)" + r, "g")), r2 = (new RegExp("#" + l + "(\\d+)" + r, "g"));
        if (typeof(json) == "object") {
            return s.replace(r1, function (a, key) {
                var v = json[key];
                if (typeof v == "function") {
                    v = v(key)
                }
                return typeof(v) == "undefined" ? "" : v
            })
        } else {
            if (typeof(json) != "undefined") {
                var vs = Array.prototype.slice.call(arguments, 0);
                var vl = vs.length;
                return s.replace(r2, function (a, index) {
                    index = parseInt(index, 10);
                    return(index >= vl) ? a : vs[index]
                })
            }
        }
    };
    $.tb.getByteLength = function (s) {
        return(s + "").replace(/[^\x00-\xff]/g, "mm").length
    };
    $.tb.subByte = function (s, n, text) {
        if ($.tb.getByteLength(s) <= n) {
            return s
        }
        text = text === undefined ? "..." : String(text);
        n -= $.tb.getByteLength(text);
        for (var i = Math.floor(n / 2), l = $.tb.getByteLength(s); i < l; i++) {
            var sub = s.substring(0, i), len = $.tb.getByteLength(sub);
            if (len == n) {
                return sub + text
            } else {
                if (len > n) {
                    return s.substring(0, i - 1) + text
                }
            }
        }
        return s
    };
    $.tb.escapeUTF8 = function (s) {
        return escape(s).replace(/%u(\w{4})/g, function (all, word) {
            return encodeURIComponent(String.fromCharCode("0x" + word)).replace(/%/g, "%25")
        })
    };
    $.tb.resizePic = function (o, mw, mh, need_margin, by) {
        var w = o.width, h = o.height, width = w, height = h;
        if (w === 0 || h === 0) {
            return
        }
        if (typeof need_margin === "string") {
            by = need_margin;
            need_margin = false
        }
        if (by === "width" || (by !== "height" && w / h >= mw / mh)) {
            if (w > mw) {
                width = mw;
                height = Math.round((mw * h) / w)
            }
        } else {
            if (h > mh) {
                height = mh;
                width = Math.round((mh * w) / h)
            }
        }
        if (need_margin) {
            if (width < mw) {
                o.style.marginLeft = Math.floor((mw - width) / 2) + "px"
            }
            if (height < mh) {
                o.style.marginTop = Math.floor((mh - height) / 2) + "px"
            }
        }
        o.width = width;
        o.height = height
    };
    $.tb.Storage = (function () {
        var _guid = "tieba", _status = {SUCCESS: 0, FAILURE: 1, OVERFLOW: 2};

        function _getKey(key) {
            return key.replace(/[_\s]/g, function (matcher) {
                return matcher == "_" ? "__" : "_s"
            })
        }

        function _getElement() {
            return document.getElementById(_guid + "-storage")
        }

        function isDate(o) {
            return{}.toString.call(o) === "[object Date]" && o.toString() !== "Invalid Date" && !isNaN(o)
        }

        function _getInstance() {
            var _storage;
            if (window.localStorage) {
                _storage = _createLocalStorage()
            } else {
                if (window.ActiveXObject) {
                    _storage = _createUserData()
                }
            }
            return _storage
        }

        function _createUserData() {
            var holder = document.createElement("div");
            holder.style.display = "none";
            holder.id = _guid + "-storage";
            document.body.appendChild(holder);
            _getElement().addBehavior("#default#userData");
            return{set: function (key, value, expires) {
                var status = _status.SUCCESS, ele = _getElement(), newKey = _getKey(key), time = expires ? expires : new Date().getTime() + 365 * 24 * 60 * 60 * 1000;
                isDate(time) && (time = time.getTime());
                ele.expires = new Date(time).toUTCString();
                try {
                    ele.setAttribute(newKey, value);
                    ele.save(newKey)
                } catch (e) {
                    status = _status.OVERFLOW
                }
                ele = null;
                return status
            }, get: function (key) {
                var ele = _getElement(), newKey = _getKey(key), val = null;
                try {
                    ele.load(newKey);
                    val = ele.getAttribute(newKey);
                    return val
                } catch (e) {
                    throw e.message
                }
            }, del: function (key) {
                var ele = _getElement(), newKey = _getKey(key), val;
                try {
                    ele.load(newKey);
                    val = ele.getAttribute(newKey);
                    if (val) {
                        ele.removeAttribute(newKey);
                        ele.expires = new Date(315532799000).toUTCString();
                        ele.save(newKey);
                        return true
                    } else {
                        return false
                    }
                } catch (e) {
                    return false
                }
            }}
        }

        function _createLocalStorage() {
            return{set: function (key, value, expires) {
                var status = _status.SUCCESS, storage = window.localStorage, newKey = _getKey(key), time = expires ? expires : new Date().getTime() + 365 * 24 * 60 * 60 * 1000;
                isDate(time) && (time = time.getTime());
                try {
                    storage.setItem(newKey, time + "|" + value)
                } catch (e) {
                    status = _status.OVERFLOW
                }
                return status
            }, get: function (key) {
                var storage = window.localStorage, newKey = _getKey(key), val = null, index, time;
                try {
                    val = storage.getItem(newKey)
                } catch (e) {
                    return null
                }
                if (val) {
                    index = val.indexOf("|");
                    time = parseInt(val.substring(0, index), 10);
                    if (new Date(time).getTime() > new Date().getTime() || time == 0) {
                        val = val.substring(index + 1, val.length);
                        return val
                    } else {
                        val = null;
                        this.del(key);
                        return null
                    }
                } else {
                    return null
                }
            }, del: function (key) {
                var storage = window.localStorage, newKey = _getKey(key), val = null;
                try {
                    val = storage.getItem(newKey)
                } catch (e) {
                    return false
                }
                if (val) {
                    val = val.substring(val.indexOf("|") + 1, val.length);
                    val && storage.removeItem(newKey);
                    return true
                } else {
                    return false
                }
            }}
        }

        return{set: function (key, value, expires) {
            var me = this;
            !me._storage && (me._storage = _getInstance());
            return me._storage.set.apply(me._storage, arguments)
        }, get: function (key) {
            var me = this;
            !me._storage && (me._storage = _getInstance());
            return me._storage.get.apply(me._storage, arguments)
        }, remove: function (key) {
            var me = this;
            !me._storage && (me._storage = _getInstance());
            return me._storage.del.apply(me._storage, arguments)
        }, isSupport: function () {
            return !!(window.localStorage || window.ActiveXObject)
        }}
    })();
    $.tb.Stats = {defaultConfig: {elms: ["A", "INPUT", "BUTTON"], url: "http://static.tieba.baidu.com/tb/img/pv.gif", need_st_type: false, path_body: true, path: "tagName", event_type: "click"}, defaultParams: {fr: "tb0_itieba", st_mod: "frs", st_type: "tb-stats"}, bind: function (el, params, config) {
        var config = $.extend({}, this.defaultConfig, config), params = $.extend({}, this.defaultParams, params), $el = $(el), el = $el[0], that = this;
        $el.bind(config.event_type + ".tb-stats", function (e) {
            var target = e.target;
            if ($.inArray(target.tagName, config.elms) < 0) {
                return
            }
            var st_type;
            while (target !== el) {
                st_type = target.getAttribute("st_type");
                if (st_type !== null) {
                    params.st_type = st_type;
                    break
                }
                target = target.parentNode
            }
            params.st_value = that.getPath(e.target, config.path, config.path_body ? document.body : el);
            if (config.need_st_type && !st_type) {
                return
            }
            that.sendRequest(config.url, params)
        })
    }, unbind: function (el) {
        $(el).unbind(".tb-stats")
    }, sendRequest: function (url, params) {
        var url = url + "?";
        if (typeof params === "object") {
            for (var i in params) {
                if (typeof params[i] === "function") {
                    params[i] = params[i]()
                }
                url += i + "=" + params[i] + "&"
            }
        }
        window["tb-stats-img"] = new Image();
        window["tb-stats-img"].src = url + "t=" + new Date().getTime()
    }, getPath: function (el, pro, top) {
        var path = el[pro] ? [el[pro]] : [];
        while (el !== top) {
            el = el.parentNode;
            if (el[pro]) {
                path.push(el[pro])
            }
        }
        return path.reverse().join("-")
    }};
    $.cookie = function (name, value, options) {
        if (typeof value != "undefined") {
            options = options || {};
            if (value === null) {
                value = "";
                options.expires = -1
            }
            var expires = "";
            if (options.expires && (typeof options.expires == "number" || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == "number") {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
                } else {
                    date = options.expires
                }
                expires = "; expires=" + date.toUTCString()
            }
            var path = options.path ? "; path=" + (options.path) : "";
            var domain = options.domain ? "; domain=" + (options.domain) : "";
            var secure = options.secure ? "; secure" : "";
            document.cookie = [name, "=", encodeURIComponent(value), expires, path, domain, secure].join("")
        } else {
            var cookieValue = null;
            if (document.cookie && document.cookie != "") {
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) == (name + "=")) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break
                    }
                }
            }
            return cookieValue
        }
    };
    var $$ = function (path, s) {
        this.instance = "jswf_" + (new Date).getTime();
        var options = this.options = $.extend({}, $$.options, s);
        var id = this.id = options.id || this.instance;
        var container = $(options.container || "<div></div>");
        $$.CallBacks[this.instance] = {};
        var params = options.params, vars = options.vars, callBacks = options.callBacks;
        var properties = $.extend({}, {height: options.height, width: options.width}, options.properties);
        var self = this;
        for (var callBack in callBacks) {
            $$.CallBacks[this.instance][callBack] = (function (option) {
                return function () {
                    return option.apply(self.object, arguments)
                }
            })(callBacks[callBack]);
            vars[callBack] = "$.swf.CallBacks." + this.instance + "." + callBack
        }
        params.flashVars = $.param(vars);
        if ($.browser.msie) {
            properties.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
            properties.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
            params.movie = path
        } else {
            properties.type = "application/x-shockwave-flash";
            properties.data = path
        }
        var build = ['<object id="', id, '"'];
        for (var property in properties) {
            build.push(" ", property, '="', properties[property], '"')
        }
        build.push(">");
        for (var param in params) {
            if (params[param] !== undefined) {
                build.push('<param name="', param, '" value="', params[param], '" />')
            }
        }
        build.push("</object>");
        $.each(container, function (i, v) {
            v.innerHTML = build.join("")
        });
        this.getObject()
    };
    $.extend($$, {options: {id: null, height: 1, width: 1, container: null, properties: {align: "middle"}, params: {quality: "high", allowScriptAccess: "always", wMode: "transparent", swLiveConnect: true, menu: false}, callBacks: {}, vars: {}}, CallBacks: {}, remote: function (obj, fn) {
        var rs = obj.CallFunction('<invoke name="' + fn + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + "</invoke>");
        return eval(rs)
    }});
    $.extend($$.prototype, {toElement: function () {
        return this.object
    }, getObject: function () {
        var self = this;
        this.object = document[this.id] || window[this.id];
        if (!this.object) {
            setTimeout(function () {
                self.getObject()
            }, 1)
        }
    }, remote: function () {
        var par = [this.toElement()];
        for (var i = 0, len = arguments.length; i < len; i++) {
            par.push(arguments[i])
        }
        return $$.remote.apply($$, par)
    }});
    $$.getVersion = function () {
        var n = navigator;
        if (n.plugins && n.mimeTypes.length) {
            var plugin = n.plugins["Shockwave Flash"];
            if (plugin && plugin.description) {
                return plugin.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
            }
        } else {
            if (window.ActiveXObject && !window.opera) {
                for (var i = 10; i >= 2; i--) {
                    try {
                        var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                        if (c) {
                            var version = c.GetVariable("$version");
                            return version.replace(/WIN/g, "").replace(/,/g, ".")
                        }
                    } catch (e) {
                    }
                }
            }
        }
    };
    $$.getFlash = function (name) {
        if (navigator.appName.indexOf("Microsoft") != -1) {
            return window[name]
        } else {
            return document[name]
        }
    };
    $.swf = $$;
    $.JsLoadManager = $.JLM = {use: function (url, complete, is_serial, charset) {
        if (typeof url === "string") {
            if (typeof complete !== "function") {
                charset = complete;
                complete = undefined
            } else {
                charset = is_serial
            }
            this.loadUrl(url, complete, charset);
            return
        } else {
            if (!this.isArray(url)) {
                throw new Error("JsLoadManager.use: Arguments Illegal!")
            }
        }
        if (is_serial) {
            this.loadSerial(url, complete, charset)
        } else {
            this.loadParallel(url, complete, charset)
        }
    }, loaded: {}, loading: {}, loadSerial: function (url, complete, charset) {
        var pointer = 0, that = this;
        this.loadUrl(url[pointer], onComplete, charset);
        function onComplete(loaded_url, is_success) {
            if (url[++pointer]) {
                that.loadUrl(url[pointer], onComplete, charset)
            } else {
                if (typeof complete === "function") {
                    complete()
                }
            }
        }
    }, loadParallel: function (url, complete, charset) {
        var that = this, flag = false;
        for (var i = 0, j = url.length; i < j; i++) {
            this.loadUrl(url[i], function (loaded_url, is_success) {
                if (that.checkLoaded(url)) {
                    if (typeof complete === "function") {
                        complete()
                    }
                    flag = true
                }
            }, charset);
            if (flag) {
                break
            }
        }
    }, checkLoaded: function (url) {
        if (typeof url === "string") {
            return !!this.loaded[url]
        }
        for (var i = 0, j = url.length; i < j; i++) {
            if (!this.loaded[url[i]]) {
                return false
            }
        }
        return true
    }, isArray: function (o) {
        return typeof o === "object" && o.constructor === Array
    }, loadUrl: function (url, callback, charset) {
        var that = this;
        if (this.loaded[url] !== undefined) {
            if (typeof callback === "function") {
                callback(url, this.loaded[url])
            }
        } else {
            if (this.loading[url] !== undefined) {
                if (typeof callback === "function") {
                    this.loading[url].push(callback)
                }
            } else {
                this.loading[url] = [];
                if (typeof callback === "function") {
                    this.loading[url].push(callback)
                }
                this.createScriptTag(url, function (url, is_success) {
                    that.loaded[url] = is_success;
                    for (var i = 0, j = that.loading[url].length; i < j; i++) {
                        that.loading[url][i](url, is_success)
                    }
                    delete that.loading[url]
                }, charset)
            }
        }
    }, createScriptTag: function (url, callback, charset) {
        var scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "text/javascript");
        scriptTag.setAttribute("src", url);
        if (charset) {
            scriptTag.setAttribute("charset", charset)
        }
        scriptTag.onload = scriptTag.onreadystatechange = function () {
            if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                scriptTag.onload = scriptTag.onreadystatechange = null;
                if (typeof callback === "function") {
                    callback(url, true)
                }
            }
        };
        scriptTag.onerror = function (e) {
            if (typeof callback === "function") {
                callback(url, false)
            }
        };
        document.getElementsByTagName("head")[0].appendChild(scriptTag)
    }};
    (function (jQuery, undefined) {
        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "), rplusequals = /^([\-+])=\s*(\d+\.?\d*)/, stringParsers = [
            {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function (execResult) {
                return[execResult[1], execResult[2], execResult[3], execResult[4]]
            }},
            {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function (execResult) {
                return[2.55 * execResult[1], 2.55 * execResult[2], 2.55 * execResult[3], execResult[4]]
            }},
            {re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse: function (execResult) {
                return[parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)]
            }},
            {re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/, parse: function (execResult) {
                return[parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)]
            }},
            {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (execResult) {
                return[execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]]
            }}
        ], color = jQuery.Color = function (color, green, blue, alpha) {
            return new jQuery.Color.fn.parse(color, green, blue, alpha)
        }, spaces = {rgba: {cache: "_rgba", props: {red: {idx: 0, type: "byte", empty: true}, green: {idx: 1, type: "byte", empty: true}, blue: {idx: 2, type: "byte", empty: true}, alpha: {idx: 3, type: "percent", def: 1}}}, hsla: {cache: "_hsla", props: {hue: {idx: 0, type: "degrees", empty: true}, saturation: {idx: 1, type: "percent", empty: true}, lightness: {idx: 2, type: "percent", empty: true}}}}, propTypes = {"byte": {floor: true, min: 0, max: 255}, percent: {min: 0, max: 1}, degrees: {mod: 360, floor: true}}, rgbaspace = spaces.rgba.props, support = color.support = {}, colors, each = jQuery.each;
        spaces.hsla.props.alpha = rgbaspace.alpha;
        function clamp(value, prop, alwaysAllowEmpty) {
            var type = propTypes[prop.type] || {}, allowEmpty = prop.empty || alwaysAllowEmpty;
            if (allowEmpty && value == null) {
                return null
            }
            if (prop.def && value == null) {
                return prop.def
            }
            if (type.floor) {
                value = ~~value
            } else {
                value = parseFloat(value)
            }
            if (value == null || isNaN(value)) {
                return prop.def
            }
            if (type.mod) {
                value = value % type.mod;
                return value < 0 ? type.mod + value : value
            }
            return type.min > value ? type.min : type.max < value ? type.max : value
        }

        function stringParse(string) {
            var inst = color(), rgba = inst._rgba = [];
            string = string.toLowerCase();
            each(stringParsers, function (i, parser) {
                var match = parser.re.exec(string), values = match && parser.parse(match), parsed, spaceName = parser.space || "rgba", cache = spaces[spaceName].cache;
                if (values) {
                    parsed = inst[spaceName](values);
                    inst[cache] = parsed[cache];
                    rgba = inst._rgba = parsed._rgba;
                    return false
                }
            });
            if (rgba.length !== 0) {
                if (Math.max.apply(Math, rgba) === 0) {
                    jQuery.extend(rgba, colors.transparent)
                }
                return inst
            }
            if (string = colors[string]) {
                return string
            }
        }

        color.fn = color.prototype = {constructor: color, parse: function (red, green, blue, alpha) {
            if (red === undefined) {
                this._rgba = [null, null, null, null];
                return this
            }
            if (red instanceof jQuery || red.nodeType) {
                red = red instanceof jQuery ? red.css(green) : jQuery(red).css(green);
                green = undefined
            }
            var inst = this, type = jQuery.type(red), rgba = this._rgba = [], source;
            if (green !== undefined) {
                red = [red, green, blue, alpha];
                type = "array"
            }
            if (type === "string") {
                return this.parse(stringParse(red) || colors._default)
            }
            if (type === "array") {
                each(rgbaspace, function (key, prop) {
                    rgba[prop.idx] = clamp(red[prop.idx], prop)
                });
                return this
            }
            if (type === "object") {
                if (red instanceof color) {
                    each(spaces, function (spaceName, space) {
                        if (red[space.cache]) {
                            inst[space.cache] = red[space.cache].slice()
                        }
                    })
                } else {
                    each(spaces, function (spaceName, space) {
                        each(space.props, function (key, prop) {
                            var cache = space.cache;
                            if (!inst[cache] && space.to) {
                                if (red[key] == null || key === "alpha") {
                                    return
                                }
                                inst[cache] = space.to(inst._rgba)
                            }
                            inst[cache][prop.idx] = clamp(red[key], prop, true)
                        })
                    })
                }
                return this
            }
        }, is: function (compare) {
            var is = color(compare), same = true, myself = this;
            each(spaces, function (_, space) {
                var isCache = is[space.cache], localCache;
                if (isCache) {
                    localCache = myself[space.cache] || space.to && space.to(myself._rgba) || [];
                    each(space.props, function (_, prop) {
                        if (isCache[prop.idx] != null) {
                            same = (isCache[prop.idx] == localCache[prop.idx]);
                            return same
                        }
                    })
                }
                return same
            });
            return same
        }, _space: function () {
            var used = [], inst = this;
            each(spaces, function (spaceName, space) {
                if (inst[space.cache]) {
                    used.push(spaceName)
                }
            });
            return used.pop()
        }, transition: function (other, distance) {
            var end = color(other), spaceName = end._space(), space = spaces[spaceName], start = this[space.cache] || space.to(this._rgba), result = start.slice();
            end = end[space.cache];
            each(space.props, function (key, prop) {
                var index = prop.idx, startValue = start[index], endValue = end[index], type = propTypes[prop.type] || {};
                if (endValue === null) {
                    return
                }
                if (startValue === null) {
                    result[index] = endValue
                } else {
                    if (type.mod) {
                        if (endValue - startValue > type.mod / 2) {
                            startValue += type.mod
                        } else {
                            if (startValue - endValue > type.mod / 2) {
                                startValue -= type.mod
                            }
                        }
                    }
                    result[prop.idx] = clamp((endValue - startValue) * distance + startValue, prop)
                }
            });
            return this[spaceName](result)
        }, blend: function (opaque) {
            if (this._rgba[3] === 1) {
                return this
            }
            var rgb = this._rgba.slice(), a = rgb.pop(), blend = color(opaque)._rgba;
            return color(jQuery.map(rgb, function (v, i) {
                return(1 - a) * blend[i] + a * v
            }))
        }, toRgbaString: function () {
            var prefix = "rgba(", rgba = jQuery.map(this._rgba, function (v, i) {
                return v == null ? (i > 2 ? 1 : 0) : v
            });
            if (rgba[3] === 1) {
                rgba.pop();
                prefix = "rgb("
            }
            return prefix + rgba.join(",") + ")"
        }, toHslaString: function () {
            var prefix = "hsla(", hsla = jQuery.map(this.hsla(), function (v, i) {
                if (v == null) {
                    v = i > 2 ? 1 : 0
                }
                if (i && i < 3) {
                    v = Math.round(v * 100) + "%"
                }
                return v
            });
            if (hsla[3] == 1) {
                hsla.pop();
                prefix = "hsl("
            }
            return prefix + hsla.join(",") + ")"
        }, toHexString: function (includeAlpha) {
            var rgba = this._rgba.slice(), alpha = rgba.pop();
            if (includeAlpha) {
                rgba.push(~~(alpha * 255))
            }
            return"#" + jQuery.map(rgba,function (v, i) {
                v = (v || 0).toString(16);
                return v.length == 1 ? "0" + v : v
            }).join("")
        }, toString: function () {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }};
        color.fn.parse.prototype = color.fn;
        function hue2rgb(p, q, h) {
            h = (h + 1) % 1;
            if (h * 6 < 1) {
                return p + (q - p) * 6 * h
            }
            if (h * 2 < 1) {
                return q
            }
            if (h * 3 < 2) {
                return p + (q - p) * ((2 / 3) - h) * 6
            }
            return p
        }

        spaces.hsla.to = function (rgba) {
            if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
                return[null, null, null, rgba[3]]
            }
            var r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3], max = Math.max(r, g, b), min = Math.min(r, g, b), diff = max - min, add = max + min, l = add * 0.5, h, s;
            if (min === max) {
                h = 0
            } else {
                if (r === max) {
                    h = (60 * (g - b) / diff) + 360
                } else {
                    if (g === max) {
                        h = (60 * (b - r) / diff) + 120
                    } else {
                        h = (60 * (r - g) / diff) + 240
                    }
                }
            }
            if (l === 0 || l === 1) {
                s = l
            } else {
                if (l <= 0.5) {
                    s = diff / add
                } else {
                    s = diff / (2 - add)
                }
            }
            return[Math.round(h) % 360, s, l, a == null ? 1 : a]
        };
        spaces.hsla.from = function (hsla) {
            if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
                return[null, null, null, hsla[3]]
            }
            var h = hsla[0] / 360, s = hsla[1], l = hsla[2], a = hsla[3], q = l <= 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q, r, g, b;
            return[Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a]
        };
        each(spaces, function (spaceName, space) {
            var props = space.props, cache = space.cache, to = space.to, from = space.from;
            color.fn[spaceName] = function (value) {
                if (to && !this[cache]) {
                    this[cache] = to(this._rgba)
                }
                if (value === undefined) {
                    return this[cache].slice()
                }
                var type = jQuery.type(value), arr = (type === "array" || type === "object") ? value : arguments, local = this[cache].slice(), ret;
                each(props, function (key, prop) {
                    var val = arr[type === "object" ? key : prop.idx];
                    if (val == null) {
                        val = local[prop.idx]
                    }
                    local[prop.idx] = clamp(val, prop)
                });
                if (from) {
                    ret = color(from(local));
                    ret[cache] = local;
                    return ret
                } else {
                    return color(local)
                }
            };
            each(props, function (key, prop) {
                if (color.fn[key]) {
                    return
                }
                color.fn[key] = function (value) {
                    var vtype = jQuery.type(value), fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName), local = this[fn](), cur = local[prop.idx], match;
                    if (vtype === "undefined") {
                        return cur
                    }
                    if (vtype === "function") {
                        value = value.call(this, cur);
                        vtype = jQuery.type(value)
                    }
                    if (value == null && prop.empty) {
                        return this
                    }
                    if (vtype === "string") {
                        match = rplusequals.exec(value);
                        if (match) {
                            value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1)
                        }
                    }
                    local[prop.idx] = value;
                    return this[fn](local)
                }
            })
        });
        each(stepHooks, function (i, hook) {
            jQuery.cssHooks[hook] = {set: function (elem, value) {
                var parsed;
                if (jQuery.type(value) !== "string" || (parsed = stringParse(value))) {
                    value = color(parsed || value);
                    if (!support.rgba && value._rgba[3] !== 1) {
                        var backgroundColor, curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                        do {
                            backgroundColor = jQuery.curCSS(curElem, "backgroundColor")
                        } while ((backgroundColor === "" || backgroundColor === "transparent") && (curElem = curElem.parentNode) && curElem.style);
                        value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default")
                    }
                    value = value.toRgbaString()
                }
                elem.style[hook] = value
            }};
            jQuery.fx.step[hook] = function (fx) {
                if (!fx.colorInit) {
                    fx.start = color(fx.elem, hook);
                    fx.end = color(fx.end);
                    fx.colorInit = true
                }
                jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos))
            }
        });
        jQuery(function () {
            var div = document.createElement("div"), div_style = div.style;
            div_style.cssText = "background-color:rgba(1,1,1,.5)";
            support.rgba = div_style.backgroundColor.indexOf("rgba") > -1
        });
        colors = jQuery.Color.names = {aqua: "#00ffff", azure: "#f0ffff", beige: "#f5f5dc", black: "#000000", blue: "#0000ff", brown: "#a52a2a", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgrey: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkviolet: "#9400d3", fuchsia: "#ff00ff", gold: "#ffd700", green: "#008000", indigo: "#4b0082", khaki: "#f0e68c", lightblue: "#add8e6", lightcyan: "#e0ffff", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightyellow: "#ffffe0", lime: "#00ff00", magenta: "#ff00ff", maroon: "#800000", navy: "#000080", olive: "#808000", orange: "#ffa500", pink: "#ffc0cb", purple: "#800080", violet: "#800080", red: "#ff0000", silver: "#c0c0c0", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
    })(jQuery);
    $.fn.tb_html = function (value) {
        if (typeof value === "string") {
            for (var i = 0, l = this.length; i < l; i++) {
                if (this[i].nodeType === 1) {
                    jQuery.cleanData(this[i].getElementsByTagName("*"));
                    this[i].innerHTML = value
                }
            }
            return this
        }
        return this.html(value)
    };
    $.tb.location = {getHref: function () {
        return this._escape(location.href)
    }, setHref: function (href) {
        location.href = href
    }, getSearch: function () {
        return this._escape(location.search)
    }, getHash: function () {
        return this._escape(location.hash)
    }, setHash: function (hash) {
        location.hash = hash
    }, getHost: function () {
        return location.host
    }, getHostname: function () {
        return location.hostname
    }, getPort: function () {
        return location.port
    }, getProtocol: function () {
        return location.protocol
    }, getPathname: function () {
        return this._escape(location.pathname)
    }, reload: function () {
        location.reload()
    }, getOrigin: function () {
        return this._escape(location.origin)
    }, _escape: function (s) {
        return s.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&nbsp;").replace(/"/g, "&quot;")
    }, _getSearchValue: function (name) {
        var s = location.search.replace(/^\?/, ""), o = {};
        if (!s) {
            return name === undefined ? o : undefined
        }
        s = s.split("&");
        var index;
        for (var i = 0, j = s.length; i < j; i++) {
            index = s[i].indexOf("=");
            if (index > 0) {
                o[s[i].substring(0, index)] = s[i].substring(index + 1)
            } else {
                o[s[i]] = ""
            }
        }
        return name === undefined ? o : o[name]
    }, getSearchValue: function (name) {
        if (name) {
            var v = $.tb.getSearch(name);
            if (v != null) {
                return $.tb.escapeHTML(_decode(v))
            } else {
                return null
            }
        } else {
            var params = $.tb.getSearch();
            for (var p in params) {
                params[p] = $.tb.escapeHTML(_decode(params[p]))
            }
            return params
        }
        function _decode(value) {
            try {
                return decodeURIComponent(value)
            } catch (e) {
                return value
            }
        }
    }};
    $.tb.getSearch = function (name) {
        return $.tb.location._getSearchValue(name)
    };
    $.tb.getDecodedSearch = function (name) {
        return $.tb.location.getSearchValue(name)
    };
    $.tb.throttle = function (method, timeout) {
        return function () {
            timeout = timeout || 100;
            var that = this, args = arguments;
            clearTimeout(method.tId);
            method.tId = setTimeout(function () {
                method.apply(that, args)
            }, timeout)
        }
    };
    $.tb.alert = function (options) {
        options = $.extend({show: false, width: 410}, options || {});
        var root = ['<div class="tb_alert_wrapper">', options.iconSrc || options.heading ? '<p class="tb_alert_title">' : "", options.iconSrc ? '<img src="#{iconSrc}" class="tb_alert_title_icon#{iconClass}" />' : "", options.heading ? "<strong>#{heading}</strong>" : "", options.iconSrc || options.heading ? "</p>" : "", '<p class="tb_alert_message">#{message}</p>', '<div class="tb_alert_btn_group"></div>', "</div>"].join("");
        var button = '<a href="#" class="ui_btn ui_btn_m j_btn #{class}" data-value="#{text}"><span><em>#{text}</em></span></a>';
        $root = $($.tb.format(root, options));
        options.html = $root;
        var dialog = new $.dialog(options);
        options.buttons = options.buttons ? ($.isArray(options.buttons) ? options.buttons : [options.buttons]) : [];
        $btn_group = $root.find(".tb_alert_btn_group");
        $.each(options.buttons, function (index, value) {
            var $button = $($.tb.format(button, value));
            $button.bind("click", function (e) {
                e.preventDefault();
                if (!value.callback || (value.callback && value.callback.call(this, index, dialog) !== false)) {
                    dialog.close()
                }
            });
            $btn_group.append($button)
        });
        dialog.setPosition();
        if (!options || !options.show) {
            dialog.show()
        }
        dialog.buttons = $.find(".j_btn");
        return dialog
    }
})(jQuery);
(function (a, b) {
    a("body").bind("mousedown", function (f) {
        var c = f.target, g;
        while (c.tagName != "BODY") {
            if (g = a(c).attr("location")) {
                a.stats.hive(g);
                break
            } else {
                if (g = a(c).attr("locate")) {
                    var d = g.split("#") || [];
                    a.stats.track(d[0] || "", d[1] || "", d[2] || "");
                    break
                }
            }
            c = c.parentNode
        }
    })
})(jQuery);
(function (a) {
    a.fn.extend({bindData: function (c, d) {
        if (d == null) {
            d = "data-field"
        }
        var b = a.json.encode(c);
        this.attr(d, b);
        return this
    }, getData: function (c) {
        if (c == null) {
            c = "data-field"
        }
        var b = this.attr(c);
        if (b == null) {
            return null
        }
        return a.json.parseJSON(b)
    }});
    a.tb.dataField = function (c, d) {
        if (d == null) {
            d = "data-field"
        }
        var b = a.json.encode(c);
        b = a.tb.escapeHTML(b);
        return" " + d + '="' + b + '" '
    }
})(jQuery);
window.tbFormat = function (b, c) {
    if (c == "none" || c == null) {
        return tempalte
    }
    for (var a in c) {
        c[a] = $.tb.escapeHTML(String(c[a]))
    }
    return $.tb.format(b, c)
};
(function (d) {
    var b = {tbattr: d.fn.attr, tbprop: d.fn.prop};
    var a = {};
    for (var c in b) {
        (function (e) {
            var f = b[e];
            a[e] = function (h) {
                var g = f.apply(this, arguments);
                if (typeof(g) == "string") {
                    g = d.tb.escapeHTML(g)
                }
                return g
            }
        })(c)
    }
    d.fn.extend(a)
})(jQuery);
;
var PageLink = {_debug: -1, init: function (b, e, h, g, d) {
    var f = this;
    var a = g || document.body;
    $(a).mousedown(function (i) {
        if (i.target.nodeName === "A") {
            f._onclick(i, b, e, d)
        }
    });
    $(a).click(function (i) {
        if (i.target.nodeName !== "A") {
            f._onclick(i, b, e, d)
        }
    });
    if (h && h.length) {
        for (var c = 0; c < h.length; c++) {
            f.bindCustomElem(h[c])
        }
    }
    if (window.location.href.indexOf("page_link_debug=true") > 0) {
        f._debug = 0;
        $(a).mouseover(function (i) {
            if (i.target.nodeName === "A") {
                f._onclick(i, b, e, d)
            }
        })
    }
}, bindCustomElem: function (a) {
    $(a).attr("page_link_custom_elem_flag", "true")
}, _onclick: function (k, j, a, m) {
    var l = this;
    var o = k.target;
    if (o && o.nodeName == "BODY") {
        return
    }
    var n = "";
    if (m && o) {
        n = m(o);
        if (n == "exit") {
            return
        }
    }
    if (l._is_need_send_msg(o)) {
        var b = "fr=" + j + "&st_type=page_link&st_mod=" + a;
        var f = $.trim(o.className);
        var d = o.id;
        var i = o.nodeName;
        var c = $.trim(o.className);
        var p = 0;
        while (o && o.parentNode && (o != document.body) && (o.parentNode != document.body)) {
            o = o.parentNode;
            i = o.nodeName + i;
            if (o.className && p < 4) {
                p++;
                c = (c ? ($.trim(o.className) + "-" + c) : $.trim(o.className))
            }
        }
        b += "&st_value=" + i;
        var h = $(k.target).prevAll().length;
        if (h > 0) {
            b += "&dom_i=" + h
        } else {
            b += "&dom_i=0"
        }
        if (f) {
            b += "&class_name=" + f
        }
        if (d) {
            b += "&id_name=" + d
        }
        if (c) {
            b += "&class_path=" + c
        }
        b = b.replace(/\ /g, "-");
        if (n != "") {
            b += "&" + n
        }
        if (l._debug > -1) {
            l._debug++;
            $(document.body).append("<div>[" + l._debug + "] " + b + "<div>");
            $(k.target).attr("title", "[" + l._debug + "] " + b);
            if (console) {
                console.log("[" + l._debug + "] " + b)
            }
        }
        var g = new Image();
        window["bd_pv_" + (new Date().getTime())] = g;
        g.src = "http://static.tieba.baidu.com/tb/img/pv.gif?" + b + "&t=" + new Date().getTime();
        g = null
    }
}, _is_need_send_msg: function (c) {
    var b = c.nodeName;
    var a = $(c).attr("type");
    if (b == "A" || (b == "INPUT" && (a == "submit" || a == "button")) || b == "BUTTON") {
        return true
    }
    if ($(c).attr("page_link_custom_elem_flag")) {
        return true
    }
    return false
}};
;
(function () {
    var v = this;
    var j = v._;
    var D = {};
    var C = Array.prototype, f = Object.prototype, q = Function.prototype;
    var m = C.slice, z = C.unshift, c = f.toString, h = f.hasOwnProperty;
    var L = C.forEach, o = C.map, E = C.reduce, b = C.reduceRight, a = C.filter, A = C.every, n = C.some, l = C.indexOf, k = C.lastIndexOf, s = Array.isArray, e = Object.keys, F = q.bind;
    var M = function (p) {
        return new t(p)
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = M
        }
        exports._ = M
    } else {
        v._ = M
    }
    M.VERSION = "1.3.3";
    var I = M.each = M.forEach = function (R, Q, P) {
        if (R == null) {
            return
        }
        if (L && R.forEach === L) {
            R.forEach(Q, P)
        } else {
            if (R.length === +R.length) {
                for (var O = 0, p = R.length; O < p; O++) {
                    if (O in R && Q.call(P, R[O], O, R) === D) {
                        return
                    }
                }
            } else {
                for (var N in R) {
                    if (M.has(R, N)) {
                        if (Q.call(P, R[N], N, R) === D) {
                            return
                        }
                    }
                }
            }
        }
    };
    M.map = M.collect = function (P, O, N) {
        var p = [];
        if (P == null) {
            return p
        }
        if (o && P.map === o) {
            return P.map(O, N)
        }
        I(P, function (S, Q, R) {
            p[p.length] = O.call(N, S, Q, R)
        });
        if (P.length === +P.length) {
            p.length = P.length
        }
        return p
    };
    M.reduce = M.foldl = M.inject = function (Q, P, p, O) {
        var N = arguments.length > 2;
        if (Q == null) {
            Q = []
        }
        if (E && Q.reduce === E) {
            if (O) {
                P = M.bind(P, O)
            }
            return N ? Q.reduce(P, p) : Q.reduce(P)
        }
        I(Q, function (T, R, S) {
            if (!N) {
                p = T;
                N = true
            } else {
                p = P.call(O, p, T, R, S)
            }
        });
        if (!N) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        return p
    };
    M.reduceRight = M.foldr = function (Q, P, p, O) {
        var N = arguments.length > 2;
        if (Q == null) {
            Q = []
        }
        if (b && Q.reduceRight === b) {
            if (O) {
                P = M.bind(P, O)
            }
            return N ? Q.reduceRight(P, p) : Q.reduceRight(P)
        }
        var R = M.toArray(Q).reverse();
        if (O && !N) {
            P = M.bind(P, O)
        }
        return N ? M.reduce(R, P, p, O) : M.reduce(R, P)
    };
    M.find = M.detect = function (P, O, N) {
        var p;
        y(P, function (S, Q, R) {
            if (O.call(N, S, Q, R)) {
                p = S;
                return true
            }
        });
        return p
    };
    M.filter = M.select = function (P, O, N) {
        var p = [];
        if (P == null) {
            return p
        }
        if (a && P.filter === a) {
            return P.filter(O, N)
        }
        I(P, function (S, Q, R) {
            if (O.call(N, S, Q, R)) {
                p[p.length] = S
            }
        });
        return p
    };
    M.reject = function (P, O, N) {
        var p = [];
        if (P == null) {
            return p
        }
        I(P, function (S, Q, R) {
            if (!O.call(N, S, Q, R)) {
                p[p.length] = S
            }
        });
        return p
    };
    M.every = M.all = function (P, O, N) {
        var p = true;
        if (P == null) {
            return p
        }
        if (A && P.every === A) {
            return P.every(O, N)
        }
        I(P, function (S, Q, R) {
            if (!(p = p && O.call(N, S, Q, R))) {
                return D
            }
        });
        return !!p
    };
    var y = M.some = M.any = function (P, O, N) {
        O || (O = M.identity);
        var p = false;
        if (P == null) {
            return p
        }
        if (n && P.some === n) {
            return P.some(O, N)
        }
        I(P, function (S, Q, R) {
            if (p || (p = O.call(N, S, Q, R))) {
                return D
            }
        });
        return !!p
    };
    M.include = M.contains = function (O, N) {
        var p = false;
        if (O == null) {
            return p
        }
        if (l && O.indexOf === l) {
            return O.indexOf(N) != -1
        }
        p = y(O, function (P) {
            return P === N
        });
        return p
    };
    M.invoke = function (N, O) {
        var p = m.call(arguments, 2);
        return M.map(N, function (P) {
            return(M.isFunction(O) ? O || P : P[O]).apply(P, p)
        })
    };
    M.pluck = function (N, p) {
        return M.map(N, function (O) {
            return O[p]
        })
    };
    M.max = function (P, O, N) {
        if (!O && M.isArray(P) && P[0] === +P[0]) {
            return Math.max.apply(Math, P)
        }
        if (!O && M.isEmpty(P)) {
            return -Infinity
        }
        var p = {computed: -Infinity};
        I(P, function (T, Q, S) {
            var R = O ? O.call(N, T, Q, S) : T;
            R >= p.computed && (p = {value: T, computed: R})
        });
        return p.value
    };
    M.min = function (P, O, N) {
        if (!O && M.isArray(P) && P[0] === +P[0]) {
            return Math.min.apply(Math, P)
        }
        if (!O && M.isEmpty(P)) {
            return Infinity
        }
        var p = {computed: Infinity};
        I(P, function (T, Q, S) {
            var R = O ? O.call(N, T, Q, S) : T;
            R < p.computed && (p = {value: T, computed: R})
        });
        return p.value
    };
    M.shuffle = function (O) {
        var p = [], N;
        I(O, function (R, P, Q) {
            N = Math.floor(Math.random() * (P + 1));
            p[P] = p[N];
            p[N] = R
        });
        return p
    };
    M.sortBy = function (O, P, p) {
        var N = M.isFunction(P) ? P : function (Q) {
            return Q[P]
        };
        return M.pluck(M.map(O,function (S, Q, R) {
            return{value: S, criteria: N.call(p, S, Q, R)}
        }).sort(function (T, S) {
            var R = T.criteria, Q = S.criteria;
            if (R === void 0) {
                return 1
            }
            if (Q === void 0) {
                return -1
            }
            return R < Q ? -1 : R > Q ? 1 : 0
        }), "value")
    };
    M.groupBy = function (O, P) {
        var p = {};
        var N = M.isFunction(P) ? P : function (Q) {
            return Q[P]
        };
        I(O, function (S, Q) {
            var R = N(S, Q);
            (p[R] || (p[R] = [])).push(S)
        });
        return p
    };
    M.sortedIndex = function (R, Q, O) {
        O || (O = M.identity);
        var p = 0, P = R.length;
        while (p < P) {
            var N = (p + P) >> 1;
            O(R[N]) < O(Q) ? p = N + 1 : P = N
        }
        return p
    };
    M.toArray = function (p) {
        if (!p) {
            return[]
        }
        if (M.isArray(p)) {
            return m.call(p)
        }
        if (M.isArguments(p)) {
            return m.call(p)
        }
        if (p.toArray && M.isFunction(p.toArray)) {
            return p.toArray()
        }
        return M.values(p)
    };
    M.size = function (p) {
        return M.isArray(p) ? p.length : M.keys(p).length
    };
    M.first = M.head = M.take = function (O, N, p) {
        return(N != null) && !p ? m.call(O, 0, N) : O[0]
    };
    M.initial = function (O, N, p) {
        return m.call(O, 0, O.length - ((N == null) || p ? 1 : N))
    };
    M.last = function (O, N, p) {
        if ((N != null) && !p) {
            return m.call(O, Math.max(O.length - N, 0))
        } else {
            return O[O.length - 1]
        }
    };
    M.rest = M.tail = function (O, p, N) {
        return m.call(O, (p == null) || N ? 1 : p)
    };
    M.compact = function (p) {
        return M.filter(p, function (N) {
            return !!N
        })
    };
    M.flatten = function (N, p) {
        return M.reduce(N, function (O, P) {
            if (M.isArray(P)) {
                return O.concat(p ? P : M.flatten(P))
            }
            O[O.length] = P;
            return O
        }, [])
    };
    M.without = function (p) {
        return M.difference(p, m.call(arguments, 1))
    };
    M.uniq = M.unique = function (Q, P, O) {
        var p = O ? M.map(Q, O) : Q;
        var N = [];
        if (Q.length < 3) {
            P = true
        }
        M.reduce(p, function (R, T, S) {
            if (P ? M.last(R) !== T || !R.length : !M.include(R, T)) {
                R.push(T);
                N.push(Q[S])
            }
            return R
        }, []);
        return N
    };
    M.union = function () {
        return M.uniq(M.flatten(arguments, true))
    };
    M.intersection = M.intersect = function (N) {
        var p = m.call(arguments, 1);
        return M.filter(M.uniq(N), function (O) {
            return M.every(p, function (P) {
                return M.indexOf(P, O) >= 0
            })
        })
    };
    M.difference = function (N) {
        var p = M.flatten(m.call(arguments, 1), true);
        return M.filter(N, function (O) {
            return !M.include(p, O)
        })
    };
    M.zip = function () {
        var p = m.call(arguments);
        var P = M.max(M.pluck(p, "length"));
        var O = new Array(P);
        for (var N = 0; N < P; N++) {
            O[N] = M.pluck(p, "" + N)
        }
        return O
    };
    M.indexOf = function (Q, O, P) {
        if (Q == null) {
            return -1
        }
        var N, p;
        if (P) {
            N = M.sortedIndex(Q, O);
            return Q[N] === O ? N : -1
        }
        if (l && Q.indexOf === l) {
            return Q.indexOf(O)
        }
        for (N = 0, p = Q.length; N < p; N++) {
            if (N in Q && Q[N] === O) {
                return N
            }
        }
        return -1
    };
    M.lastIndexOf = function (O, N) {
        if (O == null) {
            return -1
        }
        if (k && O.lastIndexOf === k) {
            return O.lastIndexOf(N)
        }
        var p = O.length;
        while (p--) {
            if (p in O && O[p] === N) {
                return p
            }
        }
        return -1
    };
    M.range = function (R, P, Q) {
        if (arguments.length <= 1) {
            P = R || 0;
            R = 0
        }
        Q = arguments[2] || 1;
        var N = Math.max(Math.ceil((P - R) / Q), 0);
        var p = 0;
        var O = new Array(N);
        while (p < N) {
            O[p++] = R;
            R += Q
        }
        return O
    };
    var G = function () {
    };
    M.bind = function d(P, N) {
        var O, p;
        if (P.bind === F && F) {
            return F.apply(P, m.call(arguments, 1))
        }
        if (!M.isFunction(P)) {
            throw new TypeError
        }
        p = m.call(arguments, 2);
        return O = function () {
            if (!(this instanceof O)) {
                return P.apply(N, p.concat(m.call(arguments)))
            }
            G.prototype = P.prototype;
            var R = new G;
            var Q = P.apply(R, p.concat(m.call(arguments)));
            if (Object(Q) === Q) {
                return Q
            }
            return R
        }
    };
    M.bindAll = function (N) {
        var p = m.call(arguments, 1);
        if (p.length == 0) {
            p = M.functions(N)
        }
        I(p, function (O) {
            N[O] = M.bind(N[O], N)
        });
        return N
    };
    M.memoize = function (O, N) {
        var p = {};
        N || (N = M.identity);
        return function () {
            var P = N.apply(this, arguments);
            return M.has(p, P) ? p[P] : (p[P] = O.apply(this, arguments))
        }
    };
    M.delay = function (N, O) {
        var p = m.call(arguments, 2);
        return setTimeout(function () {
            return N.apply(null, p)
        }, O)
    };
    M.defer = function (p) {
        return M.delay.apply(M, [p, 1].concat(m.call(arguments, 1)))
    };
    M.throttle = function (O, P) {
        var N, R, S, T, Q, U;
        var p = M.debounce(function () {
            Q = T = false
        }, P);
        return function () {
            N = this;
            R = arguments;
            var V = function () {
                S = null;
                if (Q) {
                    O.apply(N, R)
                }
                p()
            };
            if (!S) {
                S = setTimeout(V, P)
            }
            if (T) {
                Q = true
            } else {
                U = O.apply(N, R)
            }
            p();
            T = true;
            return U
        }
    };
    M.debounce = function (N, P, p) {
        var O;
        return function () {
            var S = this, R = arguments;
            var Q = function () {
                O = null;
                if (!p) {
                    N.apply(S, R)
                }
            };
            if (p && !O) {
                N.apply(S, R)
            }
            clearTimeout(O);
            O = setTimeout(Q, P)
        }
    };
    M.once = function (O) {
        var p = false, N;
        return function () {
            if (p) {
                return N
            }
            p = true;
            return N = O.apply(this, arguments)
        }
    };
    M.wrap = function (p, N) {
        return function () {
            var O = [p].concat(m.call(arguments, 0));
            return N.apply(this, O)
        }
    };
    M.compose = function () {
        var p = arguments;
        return function () {
            var N = arguments;
            for (var O = p.length - 1; O >= 0; O--) {
                N = [p[O].apply(this, N)]
            }
            return N[0]
        }
    };
    M.after = function (N, p) {
        if (N <= 0) {
            return p()
        }
        return function () {
            if (--N < 1) {
                return p.apply(this, arguments)
            }
        }
    };
    M.keys = e || function (O) {
        if (O !== Object(O)) {
            throw new TypeError("Invalid object")
        }
        var N = [];
        for (var p in O) {
            if (M.has(O, p)) {
                N[N.length] = p
            }
        }
        return N
    };
    M.values = function (p) {
        return M.map(p, M.identity)
    };
    M.functions = M.methods = function (O) {
        var N = [];
        for (var p in O) {
            if (M.isFunction(O[p])) {
                N.push(p)
            }
        }
        return N.sort()
    };
    M.extend = function (p) {
        I(m.call(arguments, 1), function (N) {
            for (var O in N) {
                p[O] = N[O]
            }
        });
        return p
    };
    M.pick = function (N) {
        var p = {};
        I(M.flatten(m.call(arguments, 1)), function (O) {
            if (O in N) {
                p[O] = N[O]
            }
        });
        return p
    };
    M.defaults = function (p) {
        I(m.call(arguments, 1), function (N) {
            for (var O in N) {
                if (p[O] == null) {
                    p[O] = N[O]
                }
            }
        });
        return p
    };
    M.clone = function (p) {
        if (!M.isObject(p)) {
            return p
        }
        return M.isArray(p) ? p.slice() : M.extend({}, p)
    };
    M.tap = function (N, p) {
        p(N);
        return N
    };
    function J(P, O, N) {
        if (P === O) {
            return P !== 0 || 1 / P == 1 / O
        }
        if (P == null || O == null) {
            return P === O
        }
        if (P._chain) {
            P = P._wrapped
        }
        if (O._chain) {
            O = O._wrapped
        }
        if (P.isEqual && M.isFunction(P.isEqual)) {
            return P.isEqual(O)
        }
        if (O.isEqual && M.isFunction(O.isEqual)) {
            return O.isEqual(P)
        }
        var S = c.call(P);
        if (S != c.call(O)) {
            return false
        }
        switch (S) {
            case"[object String]":
                return P == String(O);
            case"[object Number]":
                return P != +P ? O != +O : (P == 0 ? 1 / P == 1 / O : P == +O);
            case"[object Date]":
            case"[object Boolean]":
                return +P == +O;
            case"[object RegExp]":
                return P.source == O.source && P.global == O.global && P.multiline == O.multiline && P.ignoreCase == O.ignoreCase
        }
        if (typeof P != "object" || typeof O != "object") {
            return false
        }
        var T = N.length;
        while (T--) {
            if (N[T] == P) {
                return true
            }
        }
        N.push(P);
        var R = 0, p = true;
        if (S == "[object Array]") {
            R = P.length;
            p = R == O.length;
            if (p) {
                while (R--) {
                    if (!(p = R in P == R in O && J(P[R], O[R], N))) {
                        break
                    }
                }
            }
        } else {
            if ("constructor" in P != "constructor" in O || P.constructor != O.constructor) {
                return false
            }
            for (var Q in P) {
                if (M.has(P, Q)) {
                    R++;
                    if (!(p = M.has(O, Q) && J(P[Q], O[Q], N))) {
                        break
                    }
                }
            }
            if (p) {
                for (Q in O) {
                    if (M.has(O, Q) && !(R--)) {
                        break
                    }
                }
                p = !R
            }
        }
        N.pop();
        return p
    }

    M.isEqual = function (N, p) {
        return J(N, p, [])
    };
    M.isEmpty = function (N) {
        if (N == null) {
            return true
        }
        if (M.isArray(N) || M.isString(N)) {
            return N.length === 0
        }
        for (var p in N) {
            if (M.has(N, p)) {
                return false
            }
        }
        return true
    };
    M.isElement = function (p) {
        return !!(p && p.nodeType == 1)
    };
    M.isArray = s || function (p) {
        return c.call(p) == "[object Array]"
    };
    M.isObject = function (p) {
        return p === Object(p)
    };
    M.isArguments = function (p) {
        return c.call(p) == "[object Arguments]"
    };
    if (!M.isArguments(arguments)) {
        M.isArguments = function (p) {
            return !!(p && M.has(p, "callee"))
        }
    }
    M.isFunction = function (p) {
        return c.call(p) == "[object Function]"
    };
    M.isString = function (p) {
        return c.call(p) == "[object String]"
    };
    M.isNumber = function (p) {
        return c.call(p) == "[object Number]"
    };
    M.isFinite = function (p) {
        return M.isNumber(p) && isFinite(p)
    };
    M.isNaN = function (p) {
        return p !== p
    };
    M.isBoolean = function (p) {
        return p === true || p === false || c.call(p) == "[object Boolean]"
    };
    M.isDate = function (p) {
        return c.call(p) == "[object Date]"
    };
    M.isRegExp = function (p) {
        return c.call(p) == "[object RegExp]"
    };
    M.isNull = function (p) {
        return p === null
    };
    M.isUndefined = function (p) {
        return p === void 0
    };
    M.has = function (N, p) {
        return h.call(N, p)
    };
    M.noConflict = function () {
        v._ = j;
        return this
    };
    M.identity = function (p) {
        return p
    };
    M.times = function (P, O, N) {
        for (var p = 0; p < P; p++) {
            O.call(N, p)
        }
    };
    M.escape = function (p) {
        return("" + p).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    M.result = function (p, O) {
        if (p == null) {
            return null
        }
        var N = p[O];
        return M.isFunction(N) ? N.call(p) : N
    };
    M.mixin = function (p) {
        I(M.functions(p), function (N) {
            w(N, M[N] = p[N])
        })
    };
    var x = 0;
    M.uniqueId = function (p) {
        var N = x++;
        return p ? p + N : N
    };
    M.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var u = /.^/;
    var g = {"\\": "\\", "'": "'", r: "\r", n: "\n", t: "\t", u2028: "\u2028", u2029: "\u2029"};
    for (var H in g) {
        g[g[H]] = H
    }
    var i = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    var B = /\\(\\|'|r|n|t|u2028|u2029)/g;
    var K = function (p) {
        return p.replace(B, function (N, O) {
            return g[O]
        })
    };
    M.template = function (R, Q, O) {
        O = M.defaults(O || {}, M.templateSettings);
        var P = "__p+='" + R.replace(i,function (S) {
            return"\\" + g[S]
        }).replace(O.escape || u,function (S, T) {
            return"'+\n_.escape(" + K(T) + ")+\n'"
        }).replace(O.interpolate || u,function (S, T) {
            return"'+\n(" + K(T) + ")+\n'"
        }).replace(O.evaluate || u, function (S, T) {
            return"';\n" + K(T) + "\n;__p+='"
        }) + "';\n";
        if (!O.variable) {
            P = "with(obj||{}){\n" + P + "}\n"
        }
        P = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + P + "return __p;\n";
        var N = new Function(O.variable || "obj", "_", P);
        if (Q) {
            return N(Q, M)
        }
        var p = function (S) {
            return N.call(this, S, M)
        };
        p.source = "function(" + (O.variable || "obj") + "){\n" + P + "}";
        return p
    };
    M.chain = function (p) {
        return M(p).chain()
    };
    var t = function (p) {
        this._wrapped = p
    };
    M.prototype = t.prototype;
    var r = function (N, p) {
        return p ? M(N).chain() : N
    };
    var w = function (p, N) {
        t.prototype[p] = function () {
            var O = m.call(arguments);
            z.call(O, this._wrapped);
            return r(N.apply(M, O), this._chain)
        }
    };
    M.mixin(M);
    I(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (p) {
        var N = C[p];
        t.prototype[p] = function () {
            var O = this._wrapped;
            N.apply(O, arguments);
            var P = O.length;
            if ((p == "shift" || p == "splice") && P === 0) {
                delete O[0]
            }
            return r(O, this._chain)
        }
    });
    I(["concat", "join", "slice"], function (p) {
        var N = C[p];
        t.prototype[p] = function () {
            return r(N.apply(this._wrapped, arguments), this._chain)
        }
    });
    t.prototype.chain = function () {
        this._chain = true;
        return this
    };
    t.prototype.value = function () {
        return this._wrapped
    }
}).call(this);
;
(function (d, c) {
    function e(j, h) {
        if (j instanceof Array) {
            for (var g = 0, f = j.length; g < f; g++) {
                if (h.call(j[g], j[g], g) === false) {
                    return
                }
            }
        } else {
            for (var g in j) {
                if (j.hasOwnProperty(g)) {
                    if (h.call(j[g], j[g], g) === false) {
                        return
                    }
                }
            }
        }
    }

    function b(g, f) {
        this.name = f;
        this.path = g;
        this.fn = null;
        this.exports = {};
        this._loaded = false;
        this._requiredStack = [];
        this._readyStack = [];
        b.cache[this.name] = this
    }

    b.loadedPaths = {};
    b.loadingPaths = {};
    b.cache = {};
    b.paths = {};
    b.moduleFileMap = {};
    b.requiredPaths = {};
    b.lazyLoadPaths = {};
    b.isPathsLoaded = function (g) {
        var f = true;
        e(g, function (h) {
            if (!(h in b.loadedPaths)) {
                return f = false
            }
        });
        return f
    };
    b.require = function (f) {
        var g = b.get(f);
        g.init();
        return g.exports
    };
    if (c && c.charAt(c.length - 1) == "/") {
        c = c.substr(0, c.length - 1)
    }
    b.getJsPath = function (f) {
        return c || "" + f
    };
    b.get = function (f) {
        var h = f.indexOf(":") > -1 ? f : b.getJsPath(f);
        if (f.indexOf("?") > -1) {
            var g = f.split("?");
            f = g[0];
            h = f.replace(/\.js$/, "_" + g[1] + ".js")
        }
        if (b.cache[f]) {
            return b.cache[f]
        }
        return new b(h, f)
    };
    b.prototype = {init: function () {
        if (!this._inited) {
            this._inited = true;
            if (!this.fn) {
                throw new Error('Module "' + this.name + '" not found!')
            }
            var f;
            if (f = this.fn.call(null, b.require, this.exports)) {
                this.exports = f
            }
        }
    }, load: function () {
        b.loadingPaths[this.path] = true;
        var f = b.moduleFileMap[this.name] || this.path;
        a.create({src: f})
    }, lazyLoad: function () {
        var f = this.name, g = this.path;
        if (b.lazyLoadPaths[f]) {
            this.define();
            delete b.lazyLoadPaths[f]
        } else {
            if (b.loadedPaths[g]) {
                this.triggerStack()
            } else {
                if (!b.loadingPaths[g]) {
                    b.requiredPaths[this.name] = true;
                    this.load()
                }
            }
        }
    }, ready: function (g, h) {
        var f = h ? this._requiredStack : this._readyStack;
        if (g) {
            if (this._loaded) {
                this.init();
                g()
            } else {
                f.push(g)
            }
        } else {
            this._loaded = true;
            b.loadedPaths[this.path] = true;
            delete b.loadingPaths[this.path];
            this.triggerStack()
        }
    }, triggerStack: function () {
        if (this._readyStack.length > 0) {
            this.init();
            e(this._readyStack, function (f) {
                if (!f.doing) {
                    f.doing = true;
                    f()
                }
            });
            this._readyStack = []
        }
        if (this._requiredStack.length > 0) {
            e(this._requiredStack, function (f) {
                if (!f.doing) {
                    f.doing = true;
                    f()
                }
            });
            this._requiredStack = []
        }
    }, define: function () {
        var h = this, f = this.deps, g = [];
        if (!f) {
            f = this.getDependents()
        }
        if (f.length) {
            e(f, function (j) {
                var i = b.get(j);
                g.push(i.path)
            });
            e(f, function (j) {
                var i = b.get(j);
                i.ready(function () {
                    if (b.isPathsLoaded(g)) {
                        h.ready()
                    }
                }, true);
                i.lazyLoad()
            })
        } else {
            this.ready()
        }
    }, getDependents: function () {
        var h = this;
        var g = this.fn.toString();
        var f = g.match(/require\(\s*('|")([a-zA-Z0-9_\/.]+)('|")\s*\)/g);
        if (f) {
            e(f, function (k, j) {
                f[j] = k.replace(/\s+/g, "").substr(9).slice(0, -2)
            });
            return f
        }
        return[]
    }};
    var a = {create: function (h) {
        var i = h.src;
        if (i in this._paths) {
            return
        }
        this._paths[i] = true;
        e(this._rules, function (j) {
            i = j.call(null, i)
        });
        var g = document.getElementsByTagName("head")[0];
        var f = document.createElement("script");
        f.type = h.type || "text/javascript";
        f.src = i;
        f.onload = f.onreadystatechange = function () {
            if ((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                h.loaded && h.loaded();
                f.onload = f.onerror = f.onreadystatechange = null
            }
        };
        g.insertBefore(f, g.firstChild)
    }, _paths: {}, _rules: [], addPathRule: function (f) {
        this._rules.push(f)
    }};
    d.version = "1.0";
    d.use = function (i, h) {
        if (typeof i === "string") {
            i = [i]
        }
        var g = [];
        var f = [];
        e(i, function (j, k) {
            f[k] = false
        });
        e(i, function (j, l) {
            var k = b.get(j);
            k.ready(function () {
                g[l] = k.exports;
                f[l] = true;
                var m = true;
                e(f, function (n) {
                    if (n === false) {
                        return m = false
                    }
                });
                if (h && m) {
                    h.apply(null, g)
                }
            });
            k.lazyLoad()
        })
    };
    d.module = function (f, h, i) {
        var g = b.get(f);
        g.fn = h;
        g.deps = i;
        if (b.requiredPaths[f]) {
            g.define()
        } else {
            b.lazyLoadPaths[f] = true
        }
    };
    d.pathRule = function (f) {
        a.addPathRule(f)
    };
    d._fileMap = function (g, f) {
        if (typeof g === "object") {
            e(g, function (h, i) {
                d._fileMap(i, h)
            })
        } else {
            if (typeof f === "string") {
                f = [f]
            }
            e(f, function (h) {
                b.moduleFileMap[h] = g
            })
        }
    }
})((function () {
    return window.F = {}
})());
;
var _ = _ || {};
$.extend(_, (function (j) {
    var b = {debug: false, eventPool: $({}), observe: function () {
        this.eventPool.bind.apply(this.eventPool, arguments)
    }, fire: function () {
        this.eventPool.trigger.apply(this.eventPool, arguments)
    }, stopObserving: function () {
        this.eventPool.unbind.apply(this.eventPool, arguments)
    }};
    var a = function (l) {
        if (!l.hasOwnProperty("initial") || !$.isFunction(l.initial)) {
            l.initial = new Function()
        }
        var m = function (p) {
            var n = {noMethod: {}, method: {}};
            for (var o in p) {
                if (o == "prototype") {
                    continue
                }
                if ($.isFunction(p[o])) {
                    n.method[o] = p[o]
                } else {
                    if ($.isArray(p[o])) {
                        n.noMethod[o] = Array.prototype.slice.call(p[o], 0)
                    } else {
                        if ($.isPlainObject(p[o])) {
                            n.noMethod[o] = $.extend({}, p[o])
                        } else {
                            n.noMethod[o] = p[o]
                        }
                    }
                }
            }
            return n
        };
        var k = function () {
            var n = m(l);
            $.extend(this, n.noMethod);
            if (k.prototype.initial && $.isFunction(k.prototype.initial)) {
                k.prototype.initial.apply(this, arguments)
            }
        };
        k.extend = function (q) {
            var o = k.prototype;
            var n = {};
            $.extend(n, o, q);
            var p = a(n);
            $.extend(p.prototype, {__parent__: function (s) {
                var r = this;
                if (!o.hasOwnProperty(s)) {
                    return
                }
                return($.isFunction(o[s])) ? function () {
                    o[s].apply(r, arguments)
                } : o[s]
            }, __super__: function () {
                return this.__parent__("initial").apply(this, arguments)
            }});
            return p
        };
        $.extend(k.prototype, l, {prototype: k.prototype});
        return k
    };
    var h = a({type: "", target: null, initial: function (k, l) {
        this.type = k;
        this.target = l
    }});
    var i = a({_eventStack: {}, initial: function () {
    }, bind: function (m, l, k) {
        if (!this._eventStack.hasOwnProperty(m)) {
            this._eventStack[m] = []
        }
        this._eventStack[m].push({handler: l, context: k})
    }, unbind: function (n, m) {
        if (!this._eventStack.hasOwnProperty(n)) {
            return
        }
        if (!m || !$.isFunction(m)) {
            delete this._eventStack[n];
            return
        }
        var o = this._eventStack[n];
        for (var l = 0, k = o.length; l < k; l++) {
            if (o[l]["handler"] == m) {
                o.splice(l, 1);
                break
            }
        }
    }, trigger: function (l) {
        if (!this._eventStack.hasOwnProperty(l) || !this._eventStack[l].length) {
            return
        }
        var k = new h(l, this);
        var n = Array.prototype.slice.call(arguments, 0), m = [];
        n.shift();
        n = [k].concat(n);
        if (this._eventStack[l]) {
            m = Array.prototype.slice.call(this._eventStack[l])
        }
        for (var p = 0, s = m, q = m.length; p < q; p++) {
            if (!s || !s[p]) {
                continue
            }
            var o = s[p], r = o.handler, t = o.context || null;
            if (r && $.isFunction(r)) {
                r.apply(t, n)
            }
        }
    }, observe: function () {
        b.observe.apply(b, arguments)
    }, stopObserving: function () {
        b.stopObserving.apply(b, arguments)
    }, fire: function () {
        b.fire.apply(b, arguments)
    }});
    var c = {component: ["component"], widget: [], controller: []};
    var e = {component: ["component"], widget: ["component"], controller: ["component", "Widget"]};
    var g = function (k) {
        var l = function (m) {
            return k.apply(this, m)
        };
        l.prototype = k.prototype;
        return function () {
            return new l(arguments)
        }
    };
    var f = {define: function (k) {
        if (!k || !k.hasOwnProperty("path") || !k.hasOwnProperty("sub")) {
            return
        }
        var r = this, s = k.path, l = [], t = k.requires, m = k.extend || null;
        f._checkDeps(s, k);
        var o = d.getModuleAttr(s);
        if (t && $.isArray(t) && t.length > 0) {
            for (var p = 0, q = t.length; p < q; p++) {
                l.push(d.getJsPath(t[p], o))
            }
        }
        if (m && m != "") {
            m = d.getJsPath(m);
            l.push(m)
        }
        var n = d.getJsPath(s);
        F.module(n, function (v, u) {
            var x = $.extend({}, k.sub);
            x.__require = v;
            x.__attr = o;
            if (m) {
                var w = v(m);
                if (w && w.hasOwnProperty("cls")) {
                    u.cls = w.cls.extend(x)
                } else {
                    throw new Error("@ModuleFactroy : Superclass is not defined!")
                }
            } else {
                u.cls = d.extend(x)
            }
        }, l)
    }, use: function (m, o, k, l) {
        var n = d.getModuleAttr(m);
        F.use(n.path, function (s) {
            var p, r, q;
            r = (s.cls && g(s.cls)) || null;
            q = ($.isArray(o)) ? o : [o];
            if (r) {
                p = r.apply(null, q)
            } else {
                throw new Error("class is undefined! - " + n.path)
            }
            if (n.type == "widget" && (typeof l == "undefined" || l !== false)) {
                window[n.scope] = window[n.scope] || {};
                window[n.scope][n.module] = p
            }
            if (k && $.isFunction(k)) {
                k.call(null, p)
            }
        })
    }, getInstance: function (n, l) {
        var o = d.getModuleAttr(n), m = o.modulePath;
        var k = f._checkGlobalInstance(n);
        if (k && typeof k == "object") {
            if (l && $.isFunction(l)) {
                l.call(null, k)
            }
        } else {
            f.use(n, null, function (p) {
                if (!p || typeof p != "object") {
                    return
                }
                f._addGlobalInstance(n, p);
                if (l && $.isFunction(l)) {
                    l.call(null, p)
                }
            })
        }
    }, aop: function (n, m, l) {
        var k = j + "/static-common/lib/__aop.js";
        $.JsLoadManager.use(k, function () {
            if (!$.aop || !$.aop.hasOwnProperty(n)) {
                return
            }
            var o = m.target;
            if (!o || o == "") {
                return
            }
            var p = d.getModuleAttr(o);
            F.use(p.path, function (t) {
                var q, s, r;
                s = t.cls || null;
                if (!s) {
                    throw new Error("class is undefined! - " + p.path)
                }
                $.aop[n]({target: s, method: (m.method || "")}, l)
            })
        })
    }, _checkGlobalInstance: function (m) {
        var n = d.getModuleAttr(m), l = n.modulePath;
        if (!window.__moduleInstances__) {
            window.__moduleInstances__ = {}
        }
        var k = window.__moduleInstances__[l];
        if (k) {
            return k
        } else {
            return null
        }
    }, _addGlobalInstance: function (n, k) {
        var l = f._checkGlobalInstance(n);
        if (l) {
            return false
        }
        var o = d.getModuleAttr(n), m = o.modulePath;
        window.__moduleInstances__[m] = k;
        return true
    }, _checkDeps: function (n, p) {
        var o = d.getModuleAttr(n);
        if (!c.hasOwnProperty(o.type)) {
            throw new Error("@ModuleFactroy._checkDeps : module type error! - " + n)
        }
        if (p.extend && p.extend != "" && $.inArray(d.getModuleAttr(p.extend)["type"], c[o.type]) < 0) {
            throw new Error("@ModuleFactroy._checkDeps : Can not extends module! - " + n)
        }
        if (p.hasOwnProperty("requires") && $.isArray(p.requires)) {
            for (var m = 0, k = p.requires.length; m < k; m++) {
                var l = d.getModuleAttr(p.requires[m], o);
                if (l.module != o.module && $.inArray(l.type, e[o.type]) < 0) {
                    throw new Error("@ModuleFactroy._checkDeps : can not require module!")
                }
            }
        }
    }};
    var d = i.extend({__attr: {}, initial: function () {
    }, use: function (q, o) {
        this.__checkUse(q);
        if (!this.__require || !$.isFunction(this.__require)) {
            throw new Error("@Module : this._require is not defined!")
        }
        var r = d.getModuleAttr(q, this.__attr);
        var n = r.path;
        var k = this.__require(n);
        var p = g(k.cls);
        var m = Array.prototype.slice.call(arguments, 1);
        var l = p.apply(null, m);
        return l
    }, getInstance: function (l) {
        this.__checkUse(l);
        if (!this.__require || !$.isFunction(this.__require)) {
            throw new Error("@Module : this._require is not defined!")
        }
        var m = d.getModuleAttr(l, this.__attr);
        var k = f._checkGlobalInstance(l);
        if (k && typeof k == "object") {
            return k
        } else {
            k = this.use(l);
            f._addGlobalInstance(l, k);
            return k
        }
    }, asynUse: function (n, l, m) {
        this.__checkUse(n);
        var k = d.getJsPath(n, this.__attr);
        var o = Array.prototype.slice.call(arguments, 1);
        o.unshift(k);
        f.use.apply(null, o)
    }, __checkUse: function (l) {
        if (l.indexOf("/") > 0) {
            var k = d.getModuleAttr(l);
            if ((k.scope != this.__attr.scope || k.type != this.__attr.type || k.module != this.__attr.module) && $.inArray(k.type, e[this.__attr.type]) < 0) {
                throw new Error("@Module : Can not use this Module!")
            }
        }
    }});
    d.getModuleAttr = function (t, r) {
        var s = t.replace(/\/$/, "").split("/"), n, k, u, o, p, q = s.length, m, l = "/";
        if (q == 1 && r) {
            u = t;
            o = r.module;
            n = r.type;
            k = r.scope
        } else {
            if (q >= 3) {
                n = s[1].toLowerCase();
                o = s[2];
                k = s[0];
                u = (q > 3) ? s[3] : s[2]
            } else {
                return false
            }
        }
        u = d.nameToFile(u);
        p = (j + l + "static-" + k + l + n + l + d.nameToFile(o) + l + u + ".js").toString();
        m = (k + l + n + l + o + l + u).toString();
        return{scope: k, module: o, file: u, type: n, path: p, modulePath: m}
    };
    d.nameToFile = function (k) {
        return k.replace(/([a-z])([A-Z])/g,function () {
            return arguments[1] + "_" + arguments[2]
        }).toLowerCase()
    };
    d.getJsPath = function (k, m) {
        var l = d.getModuleAttr(k, m);
        return l.path
    };
    F.pathRule(function (m) {
        var l, k;
        if (typeof _JSSTAMP === "object" && (l = m.match(/(static\-[\w-]+\/[\w-]+\/[\w-]+\/)[\w-]+\.js$/i))) {
            if (k = _JSSTAMP[l[0].replace("static-", "")]) {
                if (k.indexOf("/tb/_") === 0) {
                    return"http://tb1.bdstatic.com/".replace(/\/$/, "") + k
                }
                return j.replace("http://static.tieba.baidu.com/", "http://tb1.bdstatic.com/") + "/" + l[1] + k
            }
        }
        return m
    });
    return{Module: {use: f.use, define: f.define, getInstance: f.getInstance, aop: f.aop}, Class: a, Dispatcher: i, MessageManager: b}
})("http://static.tieba.baidu.com/tb"));
;
(function (c) {
    var b = typeof module === "undefined" ? (c.baidu = c.baidu || {}) : module.exports;
    b.template = function (g, f) {
        var e = (function () {
            if (!c.document) {
                return a._compile(g)
            }
            var i = document.getElementById(g);
            if (i) {
                if (a.cache[g]) {
                    return a.cache[g]
                }
                var h = /^(textarea|input)$/i.test(i.nodeName) ? i.value : i.innerHTML;
                return a._compile(h)
            } else {
                return a._compile(g)
            }
        })();
        var d = a._isObject(f) ? e(f) : e;
        e = null;
        return d
    };
    var a = b.template;
    a.versions = a.versions || [];
    a.versions.push("1.0.6");
    a.cache = {};
    a.LEFT_DELIMITER = a.LEFT_DELIMITER || "<%";
    a.RIGHT_DELIMITER = a.RIGHT_DELIMITER || "%>";
    a.ESCAPE = true;
    a._encodeHTML = function (d) {
        return String(d).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    };
    a._encodeReg = function (d) {
        return String(d).replace(/([.*+?^=!:${}()|[\]/\\])/
        g, "\\$1"
        )
    };
    a._encodeEventHTML = function (d) {
        return String(d).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
    };
    a._compile = function (e) {
        var d = "var _template_fun_array=[];\nvar fn=(function(data){\nvar _template_varName='';\nfor(name in data){\n_template_varName+=('var '+name+'=data[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('" + a._analysisStr(e) + "');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object", d)
    };
    a._isObject = function (d) {
        return"function" === typeof d || !!(d && "object" === typeof d)
    };
    a._analysisStr = function (f) {
        var d = a.LEFT_DELIMITER;
        var h = a.RIGHT_DELIMITER;
        var e = a._encodeReg(d);
        var g = a._encodeReg(h);
        f = String(f).replace(new RegExp("(" + e + "[^" + g + "]*)//.*\n", "g"), "$1").replace(new RegExp("<!--.*?-->", "g"), "").replace(new RegExp(e + "\\*.*?\\*" + g, "g"), "").replace(new RegExp("[\\r\\t\\n]", "g"), "").replace(new RegExp(e + "(?:(?!" + g + ")[\\s\\S])*" + g + "|((?:(?!" + e + ")[\\s\\S])+)", "g"), function (j, i) {
            var k = "";
            if (i) {
                k = i.replace(/\\/g, "&#92;").replace(/'/g, "&#39;");
                while (/<[^<]*?&#39;[^<]*?>/g.test(k)) {
                    k = k.replace(/(<[^<]*?)&#39;([^<]*?>)/g, "$1\r$2")
                }
            } else {
                k = j
            }
            return k
        });
        f = f.replace(new RegExp("(" + e + "[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?" + g, "g"), "$1;" + h).replace(new RegExp("(" + e + ":?[hvu]?[\\s]*?=[\\s]*?[^;|" + g + "]*?);[\\s]*?" + g, "g"), "$1" + h).split(d).join("\t");
        if (a.ESCAPE) {
            f = f.replace(new RegExp("\\t=(.*?)" + g, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'")
        } else {
            f = f.replace(new RegExp("\\t=(.*?)" + g, "g"), "',typeof($1) === 'undefined'?'':$1,'")
        }
        f = f.replace(new RegExp("\\t:h=(.*?)" + g, "g"), "',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)" + g, "g"), "',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)" + g, "g"), "',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)" + g, "g"), "',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'").split("\t").join("');").split(h).join("_template_fun_array.push('").split("\r").join("\\'");
        return f
    }
})(window);
;
function showInfo(a) {
    $("#output").html(a)
}
(function () {
    var d = {type: "swipe", distance: {x: 0, y: 0}, direction: {x: "", y: ""}};
    var c = {};
    var b = {};
    var a = false;
    $(window).bind("touchstart", function (h) {
        var f = h.originalEvent;
        if (f.changedTouches.length > 0) {
            var g = f.changedTouches[0];
            f.stopPropagation();
            c.x = g.clientX;
            c.y = g.clientY;
            c.instance = g;
            a = true
        } else {
        }
    });
    $(window).bind("touchend touchcanel", function (h) {
        var f = h.originalEvent;
        if (a && f.changedTouches.length > 0) {
            var g = f.changedTouches[0];
            b.x = g.clientX;
            b.y = g.clientY;
            var i = {x: (b.x - c.x), y: (b.y - c.y)};
            if (i.x > 0) {
                d.direction.x = "left"
            } else {
                if (i.x < 0) {
                    d.direction.x = "right"
                } else {
                    d.direction.x = "none"
                }
            }
            d.distance.x = Math.abs(i.x);
            if (i.y > 0) {
                d.direction.y = "down"
            } else {
                if (i.y < 0) {
                    d.direction.y = "up"
                } else {
                    d.direction.y = "none"
                }
            }
            d.distance.y = Math.abs(i.y);
            $(c.instance.target).trigger(d);
            a = false
        } else {
        }
    });
    innerTools = {hasEvent: function (h, g) {
        var e = false;
        var f = $._data(h, "events");
        if (f && f[g]) {
            e = true
        }
        return e
    }}
})();
$("#touchable").bind("swipe", function (a) {
    var b = ["X dist:", a.distance.x, ",dire:", a.direction.x, "|Y dist:", a.distance.y, ",dire:", a.direction.y];
    showInfo(b.join(""))
});
;
window.PageUnit = window.PageUnit || {load: function (c, b) {
    var a = "";
    if (typeof(PageUnitData) == "object" && PageUnitData[c] != null) {
        a = PageUnitData[c];
        if (b != null && a.indexOf("<") == 0) {
            a = $(a).attr(b).get(0).outerHTML
        }
    }
    return a
}};
;
window.CommonUiDecorator = function () {
    this._priorityConfig = {"default": 0, hover: 1, active: 1, focus: 2, error: 10}
};
window.CommonUiDecorator.prototype = {processEffect: function (c, e, b, d) {
    var a = new RegExp("(^|\\s)" + e + "\\S+", "g");
    if (c.getAttribute("effect_pri") <= this._priorityConfig[b]) {
        c.className = c.className.replace(a, "") + " " + e + d;
        c.setAttribute("effect_pri", this._priorityConfig[d])
    }
}, clearEffect: function (a, b) {
    this.forceEffect(a, b, "default")
}, forceEffect: function (c, d, b) {
    var a = new RegExp("(^|\\s)" + d + "\\S+", "g");
    c.className = c.className.replace(a, "") + " " + d + b;
    c.setAttribute("effect_pri", this._priorityConfig[b])
}, addEffects: function (f, g, e) {
    var d, h;
    var b = this;
    if (f.size() > 0) {
        if (e == null) {
            e = []
        }
        for (var c = 0, a = e.length; c < a; c++) {
            switch (e[c]) {
                case"hover":
                    f.hover(function () {
                        b.processEffect(this, g, "hover", "hover")
                    }, function () {
                        b.processEffect(this, g, "hover", "default")
                    });
                    break;
                case"active":
                    f.mousedown(function () {
                        b.processEffect(this, g, "active", "active")
                    }).mouseup(function () {
                        b.processEffect(this, g, "active", "default")
                    });
                    break;
                case"focus":
                    f.focus(function () {
                        b.processEffect(this, g, "focus", "focus")
                    }).blur(function () {
                        b.processEffect(this, g, "focus", "default")
                    });
                    break
            }
        }
    }
}};
var TbMsgSys;
(function () {
    var a = {};
    a.Type = function (c, e) {
        var b = this;
        this.name = {};
        this.body = {};
        var d = function () {
            b.name = c;
            for (var f in e) {
                b.body[f] = true
            }
        };
        d()
    };
    a.TypeManager = new (function () {
        var b = {};
        this.addType = function (c, d) {
            if (b[c]) {
                return false
            }
            b[c] = new a.Type(c, d);
            return true
        };
        this.removeType = function (c) {
            if (b.hasOwnProperty(c)) {
                b[c] = null;
                delete b[c]
            }
        };
        this.getType = function (c) {
            if (b[c]) {
                return b[c]
            } else {
                return null
            }
        }
    })();
    a.CheckBox = function () {
        var b = a.TypeManager;
        this.checkMsg = function (f) {
            var d = true;
            if (!f || !f.hasOwnProperty("head") || !f.hasOwnProperty("body") || !f.head.type) {
                alert("��Ϣ������");
                return false
            }
            var e = b.getType(f.head.type);
            if (!e) {
                alert("��Ϣ���Ͳ����ڣ�");
                return false
            }
            for (var c in e.body) {
                if (!f.body.hasOwnProperty(c)) {
                    alert("��Ϣ��ṹ������");
                    d = false;
                    break
                }
            }
            return d
        }
    };
    a.Setup = function () {
        var b = this;
        var c = new a.CheckBox();
        this.setType = function (e, d) {
            e.head.type = d;
            return e
        };
        this.setTo = function (e, f) {
            var d = $.extend({}, e);
            d.head.to = f;
            return d
        };
        this.setFrom = function (e, f) {
            var d = $.extend({}, e);
            d.head.from = f;
            return d
        };
        this.setBody = function (f, e) {
            var d = $.extend({}, f);
            d.body = e;
            if (c.checkMsg(d)) {
                return d
            } else {
                return false
            }
        };
        this.set = function (f, e, i, h, d) {
            var g = b.setType(f, e);
            g = b.setFrom(f, i);
            g = b.setTo(f, h);
            g = b.setBody(f, d);
            return g
        }
    };
    a.Assembly = new (function () {
        var c = a.TypeManager;
        var b = new a.CheckBox();
        var d = new a.Setup();
        this.typeManager = function () {
            return c
        }, this.checkBox = function () {
            return b
        }, this.setup = function () {
            return d
        }
    })();
    a.Message = function () {
        var b = this;
        this.head = {type: "default", from: "", to: ""}, this.body = {};
        this.getType = function () {
            return b.head.type
        };
        this.getFrom = function () {
            return b.head.from
        };
        this.getTo = function () {
            return b.head.to
        }
    };
    a.Generator = function () {
        var b = a.Assembly;
        this.getNewMessage = function (d, g, f, c) {
            var e = new a.Message();
            return b.setup().set(e, d, g, f, c)
        }
    };
    a.MsgQue = function (h, e) {
        var c, f, d = 0, b = this;
        var g = function () {
            f = new Array();
            d = e;
            c = h
        };
        this.add = function (i) {
            if (!b.isFull()) {
                f.push(i)
            }
        };
        this.get = function () {
            if (!b.isEmpty()) {
                return f.shift()
            } else {
                return null
            }
        };
        this.isEmpty = function () {
            return !(f.length > 0)
        };
        this.isFull = function () {
            return !!(d > 0 && f.length >= d)
        };
        this.getSize = function () {
            return f.length
        };
        this.pop = function () {
            f.pop()
        };
        this.getId = function () {
            return c
        };
        this.clear = function () {
            f = new Array()
        };
        g()
    };
    a.processor = function () {
        var b = false, d = null, c = {};
        this.process = function (i) {
            d = i;
            b = true;
            var h = i.getType(), f = i.getTo(), e = i.getFrom();
            if (c.hasOwnProperty(h) && typeof c[h] == "function") {
                var g = c[h].call(i, h, f, e, i.body);
                d = null;
                b = false;
                return g
            }
            d = null;
            b = false;
            return false
        };
        this.setProcess = function (f, e) {
            c[f] = e
        };
        this.getCurrentMsg = function () {
            return d
        }
    };
    a.Server = function (f) {
        var c = f, b = a.Assembly, e = {}, d = new a.processor();
        this.recieve = function (g) {
            return d.process(g)
        };
        this.sendToQueue = function (h) {
            var g = h.getTo();
            if (!e.hasOwnProperty(g) || !e[g]) {
                e[g] = new a.MsgQue(g)
            }
            e[g].add(h)
        };
        this.getMsgQueues = function () {
            return e
        };
        this.setProcessor = function (h, g) {
            d.setProcess(h, g)
        }
    };
    a.Servers = new (function () {
        var b = {}, c = a.Assembly;
        this.addServer = function (d) {
            if (!b.hasOwnProperty(d) || !b[d]) {
                b[d] = new a.Server(d)
            }
        }, this.getServer = function (d) {
            return(b[d] || null)
        };
        this.getAllServer = function () {
            return b
        };
        this.removeServer = function (d) {
            delete b[d]
        }
    })();
    a.Distributor = new (function () {
        var c = a.Servers, b = a.Assembly;
        this.distribute = function (f) {
            if (!b.checkBox().checkMsg(f)) {
                return false
            }
            var e = c.getServer(f.getTo()), d = c.getServer(f.getFrom());
            if (!e) {
                d.sendToQueue(f);
                return false
            } else {
                return this.recieve(f)
            }
        };
        this.recieve = function (e) {
            var d = c.getServer(e.getTo());
            if (d) {
                return d.recieve(e)
            } else {
                return false
            }
        }
    })();
    a.MsgManager = new (function () {
        var d = a.Assembly, e = new a.Generator(), b = a.Servers, h = a.Distributor, i = this;
        var j = {system: {state: true, msg: true}};
        var g = function () {
            for (var k in j) {
                i.addMsgType(k, j[k])
            }
        };
        var f = function (l, q, o, p) {
            if (l == "system" && p.state == "init") {
                var k = b.getServer(q), r = k.getMsgQueues();
                for (var m in r) {
                    var n = r[m];
                    if (!n || n.isEmpty()) {
                        continue
                    }
                    c(n)
                }
            }
        };
        var c = function (k) {
            if (!k.isEmpty()) {
                var l = k.get();
                h.distribute(l);
                setTimeout(function () {
                    c(k)
                }, 50)
            }
        };
        this.addMsgType = function (k, l) {
            d.typeManager().addType(k, l)
        };
        this.removeMsgType = function (k) {
            d.typeManager().removeType(k)
        };
        this.checkMsg = function (k) {
            return d.checkBox().checkMsg(k)
        };
        this.sendMsg = function (k, o, n, l) {
            var m = e.getNewMessage(k, o, n, l);
            if (m) {
                return h.distribute(m)
            } else {
                return false
            }
        };
        this.sendMsgToAll = function (k, p, n) {
            var l = b.getAllServer();
            for (var m in l) {
                if (m == p) {
                    continue
                }
                var o = e.getNewMessage(k, p, m, n);
                if (o) {
                    h.distribute(o)
                }
            }
        };
        this.setProcessor = function (l, n, m) {
            var k = b.getServer(l);
            if (!k) {
                return false
            }
            k.setProcessor(n, m);
            return true
        };
        this.registerServer = function (k) {
            b.addServer(k);
            this.setProcessor(k, "system", f)
        };
        this.initedServer = function (k) {
            this.sendMsgToAll("system", k, {state: "init", msg: true})
        };
        g()
    })();
    TbMsgSys = a.MsgManager
})();
var TbCom;
var TbComMsName = "ComManager";
var MsgSystem = MsgSystem || {need_start: true};
(function () {
    var b = null;
    var f = typeof _VERSION === "undefined" ? {} : _VERSION;
    var a = {staticVersion: 9.17, comlist: {PassportFillName: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/passport/PassportFillName.js"] || "component/commonLogic/common/passport/PassportFillName.js")}, PassportSign: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/passport/PassportLogin.js"] || "component/commonLogic/common/passport/PassportLogin.js")}, PassportRegister: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/passport/PassportRegister.js"] || "component/commonLogic/common/passport/PassportRegister.js")}, User: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/user/User.js"] || "component/commonLogic/common/user/User.js")}, UserBar: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/user/UserBar.js"] || "component/commonLogic/common/user/UserBar.js")}, Suggestion: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/suggestion/Suggestion.js"] || "component/commonLogic/common/suggestion/Suggestion.js")}, Poptip: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/poptip/Poptip.js"] || "component/commonLogic/common/poptip/Poptip.js")}, WealthSystem: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/wealth/WealthSystem.js"] || "component/commonLogic/common/wealth/WealthSystem.js")}, Search: {inited: false, loaded: true, url: "/tb/static-common/" + (f["component/commonLogic/common/search/Search.js"] || "component/commonLogic/common/search/Search.js")}, MsgSystem: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/crosspage_msg_system/MsgSystem.js"] || "component/commonLogic/common/crosspage_msg_system/MsgSystem.js")}, UserMessage: {inited: false, loaded: false, url: "/tb/static-common/" + (f["component/commonLogic/common/user_message/UserMessage.js"] || "component/commonLogic/common/user_message/UserMessage.js")}}, defualtMerger: ["User", "UserBar", "Suggestion", "Poptip", "WealthSystem"], defaultMergerURL: "/tb/static-common/" + (f["component/commonLogic/common/common_default_merger.js"] || "component/commonLogic/common/common_default_merger.js"), error: {SUCCESS: 0, COM_NOT_FOUND: 1, METHOD_NOT_FOUND: 2, PROCESS_ERROR: 3}};
    var g = function (i, h) {
        var k = i;
        var j = h;
        this.error = function () {
            return k
        };
        this.result = function () {
            return j
        }
    };
    var e = function () {
        var h = arguments[0];
        this.createPars = function (k) {
            var j = [];
            for (var l = k; l < h.length; l++) {
                j.push(h[l])
            }
            return j
        }
    };
    var d = new (function () {
        this.process = function () {
            if (arguments.length < 2) {
                return new g(a.error.PROCESS_ERROR)
            }
            var k = arguments[0], i = arguments[1];
            if (!k || !a.comlist[k]["inited"]) {
                return new g(a.error.COM_NOT_FOUND)
            }
            if (!k.hasOwnProperty(i) || typeof k[i] != "function") {
                return new g(a.error.METHOD_NOT_FOUND)
            }
            var h = new e(arguments).createPars(2);
            var j = TbMsgSys.sendMsg("process", TbComMsName, k, {method: arguments[1], params: h});
            return new g(a.error.SUCCESS, j)
        }
    })();
    var c = new (function () {
        var p = a, h = {};
        var q = {User: true, UserBar: true, Suggestion: true, Poptip: true, MsgSystem: true, UserMessage: true};
        var n = function () {
            var u = {process: {method: true, params: true}, loadCom: {com: true}, needCom: {coms: true}};
            TbMsgSys.registerServer(TbComMsName);
            for (var t in u) {
                TbMsgSys.addMsgType(t, u[t])
            }
            TbMsgSys.setProcessor(TbComMsName, "loadCom", m);
            TbMsgSys.setProcessor(TbComMsName, "needCom", k);
            TbMsgSys.initedServer(TbComMsName);
            $.console.debug("ģ�飺" + TbComMsName + " ���");
            $.console.debug("ģ�飺" + TbComMsName + " ���׼����ʼ����Ĭ�Ϻϲ���̬�ļ�!");
            $(s)
        };
        var s = function () {
            var v = p.comlist;
            var w = p.defualtMerger;
            var t = p.defaultMergerURL;
            $.JsLoadManager.use(t + "?v=" + a.staticVersion);
            for (var u = 0; u < w.length; u++) {
                v[w[u]]["loaded"] = true
            }
        };
        var k = function (t, y, v, w) {
            var x = w.coms;
            if (x && (x.length > 0 || !r(x))) {
                h[v] = x;
                for (var u = 0; u < x.length; u++) {
                    l(x[u])
                }
            } else {
                i(v)
            }
        };
        var i = function (t) {
            p.comlist[t]["inited"] = true;
            TbMsgSys.initedServer(t);
            $.console.debug("ģ�飺" + t + " ���");
            d.process(t, "init");
            delete h[t]
        };
        var m = function (x, t, w, u, v) {
            l(v.com)
        };
        var o = function (t) {
            j(t)
        };
        var j = function (t) {
            for (var u in h) {
                if ($.inArray(t, h[u]) >= 0 && r(h[u])) {
                    i(u);
                    arguments.callee(u)
                }
            }
        };
        var r = function (v) {
            var t = true;
            for (var u = 0; u < v.length; u++) {
                if (!p.comlist.hasOwnProperty(v[u])) {
                    return false
                }
                if (!p.comlist[v[u]]["inited"]) {
                    t = false;
                    break
                }
            }
            return t
        };
        var l = function (t) {
            if (!p.comlist.hasOwnProperty(t) || !p.comlist[t]["url"]) {
                $.console.error("�������Ҳ���ģ�� : " + t);
                return
            }
            if ($.inArray(t, p.defualtMerger) >= 0) {
                $.console.log("��ģ����Ĭ�Ϻϲ��ļ��У������������� : " + t);
                return
            }
            if (p.comlist[t]["loaded"]) {
                return
            }
            $.JsLoadManager.use(p.comlist[t]["url"] + "?v=" + a.staticVersion, function () {
                o(t)
            });
            p.comlist[t]["loaded"] = true
        };
        this.process = function (u, w, v) {
            l(u);
            var t = new e(arguments).createPars(2);
            return TbMsgSys.sendMsg("process", TbComMsName, u, {method: w, params: t})
        };
        this.addEvent = function (t, u, v) {
            return this.process(t, "addEvent", u, v)
        };
        this.removeEvent = function (t, u, v) {
            return this.process(t, "removeEvent", u, v)
        };
        this.setNeedStartConfig = function (t) {
            if (t && typeof t == "object") {
                $.extend(q, t)
            }
        };
        this.defaultLogicInit = function (w, y, x, u, t) {
            var v = u || null;
            if (typeof t != "undefined") {
                a.staticVersion = t
            }
            this.setNeedStartConfig(x);
            if (q.User) {
                this.process("User", "init", w, y);
                if (q.UserBar) {
                    this.process("UserBar", "init", v)
                }
            }
            if (q.Suggestion) {
                this.process("Suggestion", "createMainSearchSuggestion")
            }
            if (w.is_login && !w.no_un && q.MsgSystem && (!MsgSystem || !MsgSystem.hasOwnProperty("need_start") || MsgSystem.need_start === true)) {
                this.process("MsgSystem", "init");
                if (q.UserMessage) {
                    this.process("UserMessage", "init", y, v)
                }
            }
        };
        n()
    })();
    TbCom = c
})();
var TbICom = function () {
    var d = false, c, b = this;
    var a = [];
    var e;
    this.processMsgHandler = function (f, k, i, j) {
        var g = j.params, h = j.method;
        if (!e[h] || typeof e[h] != "function") {
            $.console.error("�Ҳ�������: " + h);
            return false
        }
        return e[h].apply(b, g)
    };
    this.initSys = function (h, g, f) {
        if (d) {
            return
        }
        c = h;
        $.extend(e, f);
        a = g;
        TbMsgSys.registerServer(c);
        TbMsgSys.setProcessor(c, "process", this.processMsgHandler);
        TbMsgSys.sendMsg("needCom", c, "ComManager", {coms: a});
        d = true;
        $.console.debug("ģ��: " + h + " initSys��������" + g)
    };
    this.init = function () {
    };
    this.getRelationship = function () {
        return a
    };
    this.getId = function () {
        return c
    };
    this.getInited = function () {
        return d
    };
    this.addEvent = function (f, g) {
        $(b).bind(f, g)
    };
    this.removeEvent = function (f, g) {
        $(b).unbind(f, g)
    };
    this.dispatchEvent = function () {
        $(b).trigger.apply($(b), arguments)
    };
    e = {init: this.init, addEvent: this.addEvent, removeEvent: this.removeEvent, dispatchEvent: this.dispatchEvent, getId: this.getId, getRelationship: this.getRelationship, getInited: this.getInited}
};
var TbUtil = {addStamp: function (a) {
    return a + (a.indexOf("?") == -1 ? "?" : "&t=") + new Date().getTime().toString(32)
}, toQueryString: function (b) {
    var c = [];
    for (var a in b) {
        c.push(encodeURIComponent(a) + "=" + encodeURIComponent(b[a]))
    }
    return c.join("&")
}, selectAll: function (g, e, f) {
    var d = document.getElementById(g);
    if (d) {
        var b = d.getElementsByTagName("input");
        for (var c = 0, a = b.length; c < a; c++) {
            if (b[c].getAttribute("name") == e) {
                b[c].checked = f.checked
            }
        }
        b = null
    }
}, getCheckedValue: function (a, g, e) {
    var h = [];
    e = e || ",";
    var j;
    var c = document.getElementById(a);
    if (c) {
        var f = c.getElementsByTagName("input");
        for (var d = 0, b = f.length; d < b; d++) {
            j = f[d];
            if (j.checked) {
                h.push(j.value)
            }
        }
        f = null
    }
    return h.join(e)
}, G: function (a) {
    return document.getElementById(a)
}};
TbUtil.trim = function (a) {
    return a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
};
TbUtil.DBC2SBC = function (c) {
    var b;
    var a = "";
    for (b = 0; b < c.length; b++) {
        str1 = c.charCodeAt(b);
        if (str1 < 65296) {
            a += String.fromCharCode(c.charCodeAt(b));
            continue
        }
        if (str1 < 125 && !flag) {
            a += String.fromCharCode(c.charCodeAt(b))
        } else {
            a += String.fromCharCode(c.charCodeAt(b) - 65248)
        }
    }
    return a
};
TbUtil.getByteLength = function (a) {
    return a.replace(/[^\x00-\xff]/g, "mm").length
};
TbUtil.escapeHTML = function (a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
};
TbUtil.escapeUTF8 = function (a) {
    return escape(String(a)).replace(/%u(\w{4})/g, function (b, c) {
        return encodeURIComponent(String.fromCharCode("0x" + c)).replace(/%/g, "%25")
    })
};
TbUtil.resizePic = function (d, a, j, e) {
    var i = a || 120;
    var f = j || 120;
    var c = false;
    var g = d;
    if (g.width == 0) {
        var h = this;
        var l = arguments;
        setTimeout(function () {
            l.callee.apply(h, l)
        }, 100);
        return false
    }
    function k(m, p, n, r) {
        var o = 0, q = m, s = p;
        if (m > n) {
            o += 1
        }
        if (p > r) {
            o += 2
        }
        switch (o) {
            case 1:
                q = n;
                q = p * n / m;
            case 2:
                s = r;
                q = m * r / p;
            case 3:
                s = (p / r > m / n) ? r : p * n / m;
                q = (p / r > m / n) ? m * r / p : n
        }
        if (o != 0) {
            c = true
        }
        return[q, s]
    }

    var b = k(g.width, g.height, i, f);
    d.style.width = b[0] + "px";
    d.style.height = b[1] + "px";
    d.style.visibility = "visible";
    if (e == true) {
        d.style.marginTop = (j - parseInt(b[1])) / 2 + "px"
    }
    return c
};
TbUtil.json = {};
TbUtil.json.encode = (function () {
    var b = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};

    function a(f) {
        if (/["\\\x00-\x1f]/.test(f)) {
            f = f.replace(/["\\\x00-\x1f]/g, function (g) {
                var h = b[g];
                if (h) {
                    return h
                }
                h = g.charCodeAt();
                return"\\u00" + Math.floor(h / 16).toString(16) + (h % 16).toString(16)
            })
        }
        return'"' + f + '"'
    }

    function d(m) {
        var g = ["["], h = m.length, f, j, k;
        for (j = 0; j < h; j++) {
            k = m[j];
            switch (typeof k) {
                case"undefined":
                case"function":
                case"unknown":
                    break;
                default:
                    if (f) {
                        g.push(",")
                    }
                    g.push(TbUtil.json.encode(k));
                    f = 1
            }
        }
        g.push("]");
        return g.join("")
    }

    function c(f) {
        return f < 10 ? "0" + f : f
    }

    function e(f) {
        return'"' + f.getFullYear() + "-" + c(f.getMonth() + 1) + "-" + c(f.getDate()) + "T" + c(f.getHours()) + ":" + c(f.getMinutes()) + ":" + c(f.getSeconds()) + '"'
    }

    return function (j) {
        switch (typeof j) {
            case"undefined":
                return"undefined";
            case"number":
                return isFinite(j) ? String(j) : "null";
            case"string":
                return a(j);
            case"boolean":
                return String(j);
            default:
                if (j === null) {
                    return"null"
                } else {
                    if (j instanceof Array) {
                        return d(j)
                    } else {
                        if (j instanceof Date) {
                            return e(j)
                        } else {
                            var g = ["{"], i = TbUtil.json.encode, f, h;
                            for (key in j) {
                                if (j.hasOwnProperty(key)) {
                                    h = j[key];
                                    switch (typeof h) {
                                        case"undefined":
                                        case"unknown":
                                        case"function":
                                            break;
                                        default:
                                            if (f) {
                                                g.push(",")
                                            }
                                            f = 1;
                                            g.push(i(key) + ":" + i(h))
                                    }
                                }
                            }
                            g.push("}");
                            return g.join("")
                        }
                    }
                }
        }
    }
})();
TbUtil.json.decode = function (string, secure) {
    if (typeof(string) != "string" || !string.length) {
        return null
    }
    if (secure && !(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(string.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"/g, ""))) {
        return null
    }
    try {
        return eval("(" + string + ")")
    } catch (e) {
        return{}
    }
};
TbUtil.showErrorTip = function (e, d, f, a) {
    var c = '<div style="padding:20px 20px; text-align:' + f + '; line-height:20px;font-size:13px;">' + d.replace(/\r?\n/gi, "<br>") + "</div>";
    var b = a || false;
    if (b) {
        Fe.Dialog.open(c, {title: "", width: 200});
        setTimeout(function () {
            Fe.Dialog.close()
        }, 500)
    } else {
        Fe.Dialog.alert(c, {title: e, width: 380})
    }
};
TbUtil.hiPopHandler = function (a) {
    if (a == 0) {
        TbUtil.login()
    } else {
        if (a == 1 || a == 3) {
            Fe.Dialog.alertMessageFace("���û�������", json._info.replace(/\r?\n/gi, "<br>"), {title: "������ʾ", width: 350})
        }
    }
};
TbUtil.browser = function () {
    var c = navigator.userAgent;
    var d = {};
    var a = "", b = "";
    if (c.indexOf("AppleWebKit") >= 0) {
        a = "webkit"
    } else {
        if (c.indexOf("Gecko") >= 0) {
            a = "gecko"
        } else {
            if (c.indexOf("MSIE") >= 0) {
                a = "ie"
            }
        }
    }
    if (c.indexOf("Firefox") >= 0) {
        b = "firefox"
    } else {
        if (c.indexOf("360SE") >= 0) {
            b = "360se"
        } else {
            if (c.indexOf("SE") >= 0) {
                b = "sougou"
            } else {
                if (c.indexOf("Maxthon") >= 0) {
                    b = "maxthon"
                } else {
                    if (c.indexOf("MSIE") >= 0) {
                        b = "ie"
                    } else {
                        if (c.indexOf("Chrome") >= 0) {
                            b = "chrome"
                        } else {
                            if (c.indexOf("Safari") >= 0) {
                                b = "safari"
                            }
                        }
                    }
                }
            }
        }
    }
    return{core: a, name: b}
};
TbUtil.handleError = function (d, e, f, c, a) {
    d.no = d.no || d.error_no;
    _autoHide = a || false;
    if (d.no == 4) {
        Fe.showLoginLayer(true)
    } else {
        var b = e || "����ʧ��";
        var f = f || "left";
        var c = c || d.error || FORUM_ERROR_INFO[d.no] || "����ʧ��";
        TbUtil.showErrorTip(b, c, f, _autoHide)
    }
};
var PageData = PageData || {};
PageData.tbs_loaded = true;
TbUtil.requestTbs = function (asyn) {
    if (typeof asyn == "undefined") {
        asyn = true
    }
    if (PageData.tbs_loaded) {
        return
    }
    var url = FORUM_POST_URL.get_tbs + "?t=" + Math.random();
    var parmas = "";
    Fe.Ajax.request(url, function (xml) {
        var json = eval("(" + xml.responseText + ")");
        if (json.tbs) {
            PageData.tbs = json.tbs;
            PageData.tbs_loaded = true
        } else {
            PageData.tbs = ""
        }
    }, {async: asyn})
};
String.prototype.trim = function () {
    var a = this;
    var b = a.replace(/^\s*|\s*$/g, "");
    return b
};
String.prototype.clear = function () {
    var a = this;
    var b = a.replace(/\<br[^\>^\<]*\/?\>/gi, "");
    b = b.replace(/\<p[^\>^\<]*\>(\&nbsp\;)?\<\/p\>|\<p\/?\>/gi, "");
    return b.trim()
};
String.prototype.wordLen = function () {
    var a = this.replace(/[^\x00-\xff]/g, "**");
    return a.length
};
String.prototype.wordCut = function (e, b) {
    if (typeof e != "number" || e < 0) {
        return
    }
    var c = e, h = b || "";
    var g = this, a = new Array();
    var f = g.replace(/[^\x00-\xff]/g, function (i) {
        a.push(i);
        return"*)"
    });
    if (f[c - 1] && f[c - 1] == "*" && f[c] == ")") {
        c++
    }
    if (c >= f.length) {
        return g
    }
    f = f.substr(0, c);
    var d = 0;
    f = f.replace(/(\*\))/g, function (j) {
        var i = a[d];
        d++;
        return i
    });
    return f + h
};
String.prototype.subByte = function (c) {
    if (this.wordLen() <= c) {
        return this
    }
    for (var b = Math.floor((c = c - 2) / 2), a = this.length; b < a; b++) {
        if (this.substr(0, b).wordLen() >= c) {
            return this.substr(0, b) + "\u2026"
        }
    }
    return this
};
String.prototype.subByte2 = function (c) {
    if (this.wordLen() <= c) {
        return this
    }
    for (var b = Math.floor((c = c - 2) / 2), a = this.length; b < a; b++) {
        if (this.substr(0, b).wordLen() > c) {
            return this.substr(0, b)
        }
    }
    return this
};
String.prototype.subByteFix = function (d, c) {
    if (this.wordLen() <= d) {
        return this
    }
    for (var b = Math.floor((d - 2) / 2), a = this.length; b < a; b++) {
        if (this.substr(0, b).wordLen() >= d) {
            return this.substr(0, b) + (c ? c : "")
        }
    }
    return this
};
new (function () {
    TbICom.call(this);
    var a = this;
    var e = {_keyValues: [
        ["���Ͷ��", "http://tieba.baidu.com/tousu/new"],
        ["���Ͷ��", "http://tieba.baidu.com/tousu/new"],
        ["tiebatousu", "http://tieba.baidu.com/tousu/new"],
        ["���Ͷ�߰�", "http://tieba.baidu.com/tousu/new"],
        ["���Ͷ������", "http://tieba.baidu.com/tousu/new"],
        ["Ͷ������", "http://tieba.baidu.com/tousu/new"],
        ["Ͷ��", "http://tieba.baidu.com/tousu/new"],
        ["��ɾٱ�", "http://tieba.baidu.com/tousu/new"],
        ["֪��Ͷ��", "http://tousu.baidu.com/zhidao"],
        ["�ռ�Ͷ��", "http://tousu.baidu.com/hi"],
        ["�ٿ�Ͷ��", "http://tousu.baidu.com/baike"],
        ["zhidaotousu", "http://tousu.baidu.com/zhidao"],
        ["kongjiantousu", "http://tousu.baidu.com/hi"],
        ["baiketousu", "http://tousu.baidu.com/baike"]
    ], go: function (k) {
        var f = this._keyValues;
        var g = k.toLowerCase();
        for (var h = 0; h < f.length; h++) {
            if (g == f[h][0]) {
                window.location.href = f[h][1];
                return true
            }
        }
        var j = TbUtil.DBC2SBC(k);
        if (/^\d{7,10}$/.test(j)) {
            window.location.href = "/club/" + j;
            return true
        }
        return false
    }};
    var d = function (g) {
        var f = document.getElementById(g);
        return f && f.checked
    };
    var b = function (f) {
        return f.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    };
    var c = {escapeUTF8: function (f) {
        return escape(String(f)).replace(/%u(\w{4})/g, function (g, h) {
            return encodeURIComponent(String.fromCharCode("0x" + h)).replace(/%/g, "%25")
        })
    }, countPV: function (g) {
        var f = new Image();
        window["bd_pv_" + (new Date().getTime())] = f;
        f.src = "http://static.tieba.baidu.com/tb/img/pv.gif?t=" + new Date().getTime() + "&" + g
    }, setWord: function (k, j) {
        var h = b(document.f1.kw.value);
        if (h == "" || c.isIndexPage()) {
            var i = k.href.toString().match(/^(\w+:\/\/[^\/]+)/i);
            k.href = i && i[1] + (h == "" ? "" : "/?t=50&q=" + encodeURIComponent(h))
        } else {
            if (j != "") {
                if (k.href.indexOf("www.baidu.com") >= 0) {
                    var f = "fr=tb01000&";
                    if (window.location.href.match("ftype=guide")) {
                        f = "fr=tb01se0&"
                    }
                    var g = k.href.indexOf("fr=");
                    if (g > -1) {
                        k.href = k.href.substring(0, g) + f
                    } else {
                        k.href = k.href + f
                    }
                }
                h = h.replace(/\%/gi, "%25").replace(/&/gi, "%26").replace(/\+/gi, "%2B").replace(/[\ \u3000]/gi, "%20").replace(/\//gi, "%2F").replace(/\#/gi, "%23").replace(/\=/gi, "%3D");
                var g = k.href.indexOf(j + "=");
                if (g > -1) {
                    k.href = k.href.substring(0, g) + j + "=" + h
                } else {
                    k.href = k.href + j + "=" + h
                }
            }
        }
        a.dispatchEvent("setWord", j)
    }, isIndexPage: function () {
        return/^\w+:\/\/[^\/]+\/(index\.html?)|(i\/\d+)/.test(window.location.href)
    }, setVal: function (f, g) {
        f.kw.value = g.kw
    }, DBC2SBC: function (f) {
        return TbUtil.DBC2SBC(f)
    }, search: function (i, f) {
        a.dispatchEvent("search", i);
        if (!f) {
            f = ""
        }
        if (b(i.kw.value) == "") {
            window.location.href = "http://tieba.baidu.com";
            return false
        }
        var g = "/f";
        if (d("jointb" + f)) {
            var h = c.searchTieba(i.kw.value);
            if (h === false) {
                return h
            }
        }
        if (d("authortb" + f)) {
            return c.searchItieba(i.kw.value)
        }
        if (d("searchtb" + f)) {
            return c.searchWord(i.kw.value)
        }
        if (d("nametb" + f)) {
            window.location.href = "/f?ct=536870912&tn=searchPostListByName&rn=30&cm=1104rs2=3&ie=utf-8&kw=" + encodeURIComponent(i.kw.value);
            return false
        }
        if (d("nowtb" + f)) {
            window.location.href = "/f/search/res?ie=utf-8&kw=" + encodeURIComponent(PageData.present_forum.unescapeHTML()) + "&qw=" + encodeURIComponent(i.kw.value);
            return false
        }
        i.action = g;
        return true
    }, searchItieba: function (f) {
        window.location.href = "/i/sys/enter?ie=utf-8&kw=" + encodeURIComponent(f);
        return false
    }, searchTieba: function (f) {
        var g = b(f);
        if (e.go(g)) {
            return false
        }
    }, searchWord: function (f) {
        $.tb.post("/data/searchhistory?method=add_word&ie=UTF-8", {word: f}, function () {
        });
        setTimeout(function () {
            window.location.href = "/f/search/res?ie=utf-8&qw=" + encodeURIComponent(f)
        }, 100);
        return false
    }};
    this.initSys("Search", [], {headSetWord: c.setWord, headSetVal: c.setVal, headSearch: c.search, headSearchTieba: c.searchTieba, headSearchITieba: c.searchItieba, headSearchWord: c.searchWord})
})();
var NsLogLinker = {_pid: 0, stat: function (d, b) {
    var f = "nslog__" + (new Date()).getTime();
    var e = window[f] = new Image();
    var a = b || this._pid;
    e.onload = (e.onerror = function () {
        window[f] = null
    });
    e.src = "http://nsclick.baidu.com/v.gif?pid=" + a + "&url=" + encodeURIComponent(d) + "&t=" + (new Date()).getTime() + "&type=0";
    e = null
}, _checkEvent: function (c) {
    c = c || event;
    var b = c.srcElement || c.target;
    if (b.nodeType != 1) {
        b = b.parentNode
    }
    while (b && b.tagName && b.tagName.toUpperCase() != "A") {
        b = b.parentNode
    }
    if (b && b.tagName && b.tagName.toUpperCase() == "A") {
        if (!/^([\w-]+\.)*?baidu\.com/i.test(b.host)) {
            var a = b.href;
            setTimeout(function () {
                NsLogLinker.stat(a)
            }, 1)
        }
    }
    b = null
}, isOutLink: function (a) {
    return(!/([\w-]+\.)*?baidu\.com/i.test(a))
}, bind: function (a) {
    this._pid = a;
    if (document.attachEvent) {
        document.attachEvent("onmousedown", this._checkEvent);
        window.attachEvent("onunload", function () {
            document.detachEvent("onmousedown", NsLogLinker._checkEvent)
        })
    } else {
        document.addEventListener("mousedown", this._checkEvent, false);
        window.addEventListener("unload", function () {
            document.removeEventListener("mousedown", NsLogLinker._checkEvent, false)
        }, false)
    }
}};
window.baidu = window.baidu || {version: "1-0-0", emptyFn: function () {
}};
baidu.swf = baidu.swf || {};
baidu.isString = function (a) {
    return(typeof a == "object" && a && a.constructor == String) || typeof a == "string"
};
baidu.swf.getVersion = function () {
    var h = navigator;
    if (h.plugins && h.mimeTypes.length) {
        var b = h.plugins["Shockwave Flash"];
        if (b && b.description) {
            return b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
        }
    } else {
        if (window.ActiveXObject && !window.opera) {
            for (var d = 10; d >= 2; d--) {
                try {
                    var g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + d);
                    if (g) {
                        return d + ".0.0";
                        break
                    }
                } catch (f) {
                }
            }
        }
    }
};
baidu.swf.createHTML = function (r) {
    r = r || {};
    var h = baidu.swf.getVersion(), q = 1;
    var f = r.ver || "6.0.0", e, c;
    if (h) {
        h = h.split(".");
        f = f.split(".");
        for (var d = 0; d < 3; d++) {
            e = parseInt(h[d], 10);
            c = parseInt(f[d], 10);
            if (c < e) {
                break
            } else {
                if (c > e) {
                    q = 0;
                    break
                }
            }
        }
    } else {
        q = 0
    }
    if (!q) {
        return""
    }
    var l = r.vars;
    var d, b, g, p;
    var j = ["classid", "codebase", "id", "width", "height", "align"];
    r.align = r.align || "middle";
    r.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
    r.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
    r.movie = r.url || "";
    delete r.vars;
    delete r.url;
    if (baidu.isString(l)) {
        r.flashvars = l
    } else {
        var n = [];
        for (b in l) {
            p = l[b];
            if (p) {
                n.push(b + "=" + encodeURIComponent(p))
            }
        }
        r.flashvars = n.join("&")
    }
    var m = ["<object "];
    for (d = 0, g = j.length; d < g; d++) {
        p = j[d];
        m.push(" ", p, '="', r[p], '"')
    }
    m.push(">");
    var a = {wmode: 1, scale: 1, quality: 1, play: 1, loop: 1, menu: 1, salign: 1, bgcolor: 1, base: 1, allowscriptaccess: 1, allownetworking: 1, allowfullscreen: 1, seamlesstabbing: 1, devicefont: 1, swliveconnect: 1, flashvars: 1, movie: 1};
    for (b in r) {
        p = r[b];
        if (a[b] && p) {
            m.push('<param name="' + b + '" value="' + p + '" />')
        }
    }
    r.src = r.movie;
    r.name = r.id;
    delete r.id;
    delete r.movie;
    delete r.classid;
    delete r.codebase;
    r.type = "application/x-shockwave-flash";
    r.pluginspage = "http://www.macromedia.com/go/getflashplayer";
    m.push("<embed");
    var o;
    for (b in r) {
        p = r[b];
        if (p) {
            if ((new RegExp("^salign\x24", "i")).test(b)) {
                o = p;
                continue
            }
            m.push(" ", b, '="', p, '"')
        }
    }
    if (o) {
        m.push(' salign="', o, '"')
    }
    m.push("></embed></object>");
    return m.join("")
};
baidu.swf.create = function (a, d) {
    a = a || {};
    var b = baidu.swf.createHTML(a);
    var c = true;
    if (d && baidu.isString(d)) {
        d = document.getElementById(d)
    }
    if (b.length <= 0) {
        b = a.errorMessage || "";
        c = false
    }
    if (d) {
        d.innerHTML = b
    }
    return c
};
baidu.swf.getMovie = function (a) {
    return document[a] || window[a]
};
var CaptchaCom = function (b, a) {
    this.init(b, a)
};
CaptchaCom.DEFAULT_OPTIONS = {imgUrl: "/cgi-bin/genimg?", audioUrl: "/cgi-bin/genaudio?", inputFocusClass: "c_captcha_focus", onInputFocus: null, onInputBlur: null, beforeImgInit: null, afterImgInit: null, template: '<div class="clearfix"><div class="c_captcha_input_con j_input_con"><input style="ime-mode:disabled " autocomplete="off" size="10" maxlength="10" class="c_captcha_input_normal j_captcha_input" ></div><div class="c_captcha_sub_wrap j_captcha_content clearfix" style="display:none;"><div class="c_captcha_img j_captcha_img_wrapper"></div><div class="c_captcha_a"><a class="j_captcha_img_change"  >������?</a>&nbsp;<a class="c_captcha_a_audio j_captcha_audio_switch" >������֤��</a></div><div class="c_captcha_audio"><img class="j_captcha_audio_icon c_captcha_audio_img" src="http://tieba.baidu.com/tb/img/audio.gif" /><span class="j_captcha_audio_wrapper"></span></div></div></div><div class="c_captcha_tip j_captcha_tip">������������֤��</div><div class="c_captcha_error j_captcha_err"></div>'};
CaptchaCom.prototype = {init: function (c, a) {
    this.captchaReq = c;
    this.options = $.extend({}, CaptchaCom.DEFAULT_OPTIONS, a);
    this.initialized = false;
    this.needUpdate = true;
    this.j_container = $(a.container);
    var b = $(this.options.template);
    this.j_container.html(b);
    this.j_content = this.j_container.find(".j_captcha_content");
    this.j_input = this.j_container.find(".j_captcha_input");
    this.j_tip = this.j_container.find(".j_captcha_tip");
    this.j_error = this.j_container.find(".j_captcha_err");
    this.j_imgWrapper = this.j_container.find(".j_captcha_img_wrapper");
    this.j_imgChangeBtn = this.j_container.find(".j_captcha_img_change");
    this.j_switchAudioBtn = this.j_container.find(".j_captcha_audio_switch");
    this.j_audioIcon = this.j_container.find(".j_captcha_audio_icon");
    this.j_audioWrapper = this.j_container.find(".j_captcha_audio_wrapper");
    this._initEvents()
}, _initEvents: function () {
    var a = this;
    this.j_imgChangeBtn.click(function () {
        a.reload();
        return false
    });
    this.j_switchAudioBtn.click(function () {
        a.getAudio();
        return false
    });
    this.j_input.blur(function (b) {
        $(this).removeClass(a.options.inputFocusClass);
        if (a.options.onInputBlur) {
            a.options.onInputBlur.call(this, b, a)
        }
        a.reset()
    });
    this.j_input.focus(function (b) {
        $(this).addClass(a.options.inputFocusClass);
        if (a.options.onInputFocus) {
            a.options.onInputFocus.call(this, b, a)
        }
        if (a.initialized === false) {
            if (a.options.beforeImgInit) {
                a.options.beforeImgInit.call(a)
            }
            a.updateCaptchaImg();
            a.initialized = true;
            if (a.options.afterImgInit) {
                a.options.afterImgInit.call(a)
            }
        }
    })
}, changeContent: function (a) {
    if (a == "loginUser") {
        if (this.captchaReq.answer.showShenshou == 1 && this.captchaReq.answer.open_by_spam != 1) {
            this.j_tip.text("Ϊ������ڷأ��������ñ���" + this.captchaReq.answer.shenshou_lv + "�������û���ʱ��Ҫ����������֤��")
        } else {
            this.j_tip.text("������������֤��")
        }
    } else {
        if (this.captchaReq.answer.showShenshou == 1 && this.captchaReq.answer.open_by_spam != 1) {
            this.j_tip.text("Ϊ������ڷأ��������ñ���" + this.captchaReq.answer.shenshou_lv + "�������û���ʱ��Ҫ����������֤��")
        } else {
            this.j_tip.text("������������֤�룬��������Ҫ������֤��")
        }
    }
}, getAudio: function () {
    this.needUpdate = false;
    this.j_audioIcon.show();
    var a = this.options.audioUrl + this.signStr + "&t=" + Math.random();
    if (!document.all) {
        this.j_audioWrapper.html('<embed src="' + a + '" name="MediaPlayer" type="video/x-ms-wmv" autostart="1" showcontrols="1" allowscan="1" playcount="1" enablecontextmenu="0" height="0" width="0"></object>')
    } else {
        this.j_audioWrapper.html('<object height=0 width=0 classid=CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6><param name="AutoStart" value="1"><param NAME="url" value="' + a + '"><param name="PlayCount" value="1">')
    }
    this.j_input.focus()
}, _getData: function () {
    this.captchaReq.antiProcess();
    var b = this.captchaReq.getVcodeUrl() + "&t=" + Math.random();
    var a = this;
    $.ajax({url: b, dataType: "json", success: function (d) {
        var c = d.data;
        a.signStr = c.vcodestr
    }, async: false})
}, validCaptcha: function () {
    var a = this.j_input.val();
    this.captchaReq.antiProcess();
    if (this.captchaReq.needCaptcha) {
        if (a == null || a.length == 0) {
            this.j_error.text("��֤�벻��Ϊ�գ���������֤��").show();
            this.j_input.focus();
            return false
        }
    }
    return true
}, getInputValue: function () {
    return this.j_input.val().replace(/\s/g, "")
}, changeYImg: function (a) {
    a.src = "http://static.tieba.baidu.com/tb/img/errorYimg.jpg"
}, updateCaptchaImg: function () {
    if (!this.needUpdate) {
        return
    }
    var a = this;
    this.needUpdate = false;
    this._getData();
    var c = this.j_img;
    var b = this.options.imgUrl + this.signStr + "&t=" + Math.random();
    if (!c) {
        this.j_imgWrapper.html('<img src="' + b + '" style="cursor: pointer;">');
        this.j_img = this.j_imgWrapper.find("img").click(function () {
            a.reload()
        })
    } else {
        c.attr("src", b)
    }
    this.j_content.show()
}, reload: function () {
    this.reset();
    this.updateCaptchaImg()
}, updateImage: function () {
    this.needUpdate = false;
    this.j_input.val("").focus();
    var a = this.imgUrl + this.signStr + "&t=" + Math.random();
    this.j_img.attr("src", a)
}, show: function () {
    if (this.captchaReq.answer.showShenshou == 1) {
        if (this.captchaReq.answer.open_by_spam == 1) {
            this.j_tip.text("������������֤��")
        } else {
            this.j_tip.text("Ϊ������ڷأ��������ñ���" + this.captchaReq.answer.shenshou_lv + "�������û���ʱ��Ҫ����������֤��")
        }
        this.j_input.css("imeMode", "active");
        this.j_switchAudioBtn.hide()
    }
    this.j_container.show()
}, hide: function () {
    this.j_container.hide();
    this.j_input.val("");
    this.j_error.html("")
}, focus: function () {
    this.j_input.focus()
}, clear: function () {
    this.j_input.val("")
}, reset: function () {
    this.needUpdate = true
}, showErrorTip: function (a) {
    this.j_error.text(a).show()
}, hideErrorTip: function () {
    this.j_error.hide().html("")
}};
var CaptchaReqCom = function (b, a) {
    this.needCaptcha = false;
    this.isPosting = false;
    this.isAnonymous = false;
    this.answer = {antiNeedVerify: null, antiNeedVerifyAnonymous: null};
    this.postType = "thread";
    this.url = a || "/f/user/json_needvcode";
    this.forumName = b.forumName;
    this.forumId = b.forumId;
    if (b.postType == "reply") {
        this.postType = "reply";
        if (b.tid) {
            this.tid = b.tid
        }
    }
    this.async = true;
    if (b.async === false) {
        this.async = false
    }
    delete b.forumName;
    delete b.forumId;
    delete b.postType;
    delete b.tid;
    delete b.async;
    this.params = b
};
CaptchaReqCom.prototype = {_ifHasKnowAnti: function () {
    if (this.isAnonymous) {
        return !(this.answer.antiNeedVerifyAnonymous == null)
    } else {
        return !(this.answer.antiNeedVerify == null)
    }
}, setVcodeUrl: function (a) {
    if (this.isAnonymous) {
        this.answer.vcodeUrlAnonymous = a
    } else {
        this.answer.vcodeUrl = a
    }
}, getVcodeUrl: function () {
    if (this.isAnonymous) {
        return this.answer.vcodeUrlAnonymous
    } else {
        return this.answer.vcodeUrl
    }
}, _getAntiAnswer: function (c) {
    var a = this;
    var b = {rs1: this.isAnonymous ? "1" : "0", rs10: this.postType == "thread" ? "1" : "0", lm: this.forumId, word: this.forumName, t: Math.random()};
    if (this.tid) {
        b.tid = this.tid
    }
    this.isPosting = true;
    $.ajax({url: a.url, data: b, async: a.async, dataType: "json", success: function (d) {
        a.handleAnswer(d.data);
        c();
        a.isPosting = false
    }})
}, handleAnswer: function (a) {
    if (this.isAnonymous) {
        this.answer.antiNeedVerifyAnonymous = a.need
    } else {
        this.answer.antiNeedVerify = a.need
    }
    this.answer.showShenshou = a.open_shenshou;
    if (a.open_shenshou == 1) {
        this.answer.shenshou_lv = a.shenshou_lv;
        this.answer.open_by_spam = a.open_by_spam
    }
    if (this.tid) {
        a.vcodeUrl += "&tid=" + this.tid
    }
    this.setVcodeUrl(a.vcodeUrl)
}, setData: function (a, b) {
    this.params[a] = b
}, antiProcess: function (d) {
    if (!this.isPosting) {
        var b = this;
        var c = "";
        var a = function () {
            if (b.isAnonymous) {
                c = b.answer.antiNeedVerifyAnonymous
            } else {
                c = b.answer.antiNeedVerify
            }
            b.needCaptcha = c == "1";
            if (d) {
                d(b.needCaptcha)
            }
        };
        if (this._ifHasKnowAnti()) {
            a()
        } else {
            this._getAntiAnswer(a)
        }
    }
}, reload: function () {
    this.answer.antiNeedVerifyAnonymous = null;
    this.answer.antiNeedVerify = null
}, getCaptchaInstance: function (a) {
    return new CaptchaCom(this, a)
}};