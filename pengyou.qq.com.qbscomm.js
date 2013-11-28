QBSCOMM = {};
QBSCOMM.emptyFn = function () {
};
QBSCOMM.userAgent = (function () {
    var t, vie, vff, vopera, vsf, vawk, vair, vchrome, winver, wintype, mactype, isBeta, isIPad, isIPhone, discerned, _ua = navigator.userAgent, _nv = navigator.appVersion, vffRE = /(?:Firefox|GranParadiso|Iceweasel|Minefield).(\d+\.\d+)/i, vwebkitRE = /AppleWebKit.(\d+\.\d+)/i, vchromeRE = /Chrome.(\d+\.\d+)/i, vsafariRE = /Version.(\d+\.\d+)/i, vwinRE = /Windows.+?(\d+\.\d+)/, vie = vff = vopera = vsf = vawk = vair = vchrome = winver = NaN;
    wintype = mactype = isBeta = isIPad = discerned = false;
    if (window.ActiveXObject) {
        vie = 9 - ((_nv.indexOf("Trident\/5.0") > -1) ? 0 : 1) - (window.XDomainRequest ? 0 : 1) - (window.XMLHttpRequest ? 0 : 1);
        (_nv.indexOf("Trident\/6.0") > -1) && (vie = 10);
        t = navigator.appMinorVersion;
        if (vie > 7 && t && t.toLowerCase().indexOf("beta") > -1) {
            isBeta = true;
        }
    } else if (document.getBoxObjectFor || typeof(window.mozInnerScreenX) != "undefined") {
        t = _ua.match(vffRE);
        vff = parseFloat((t && t[1]) || "3.3", 10);
    } else if (!navigator.taintEnabled) {
        t = _ua.match(vwebkitRE);
        vawk = (t && t.length > 1) ? parseFloat(t[1], 10) : (!!document.evaluate ? (!!document.querySelector ? 525 : 420) : 419);
        if ((t = _nv.match(vchromeRE)) || window.chrome) {
            if (!t) {
                t = _ua.match(vchromeRE);
            }
            vchrome = parseFloat((t && t[1]) || "2.0", 10);
        }
        if ((t = _nv.match(vsafariRE)) && !window.chrome) {
            if (!t) {
                t = _ua.match(vsafariRE);
            }
            vsf = parseFloat((t && t[1]) || "3.3", 10);
        }
        if (_ua.indexOf("AdobeAIR") > -1) {
            vair = 1;
        }
        if (_ua.indexOf("iPad") > -1) {
            isIPad = true;
        }
        if (_ua.indexOf("iPhone") > -1) {
            isIPhone = true;
        }
    } else if (window.opera) {
        vopera = parseFloat(_nv, 10);
    } else {
        vie = 6;
    }
    if (_ua.indexOf("Windows") > -1) {
        wintype = true;
        t = _ua.match(vwinRE);
        winver = parseFloat((t && t[1]) || "5.1", 10);
    } else if (_ua.indexOf("Mac OS X") > -1) {
        mactype = true;
    } else {
        wintype = true;
    }
    return{beta: isBeta, firefox: vff, ie: vie, opera: vopera, air: vair, safari: vsf, safariV: vsf, webkit: vawk, chrome: vchrome, windows: winver || wintype, isiPad: isIPad, isiPhone: isIPhone, macs: mactype};
})();
QBSCOMM.object = {getType: function (obj) {
    return obj === null ? 'null' : (obj === undefined ? 'undefined' : Object.prototype.toString.call(obj).slice(8, -1).toLowerCase());
}};
QBSCOMM.lang = {isHashMap: function (o) {
    return QBSCOMM.object.getType(o) == "object";
}}
QBSCOMM.string = {RegExps: {escHTML: {re_amp: /&/g, re_lt: /</g, re_gt: />/g, re_apos: /\x27/g, re_quot: /\x22/g}, escString: {bsls: /\\/g, nl: /\n/g, rt: /\r/g, tab: /\t/g}, cut: /[\x00-\xFF]/, getRealLen: {r0: /[^\x00-\xFF]/g, r1: /[\x00-\xFF]/g}}, escString: function (str) {
    var t = QBSCOMM.string.RegExps.escString, h = QBSCOMM.string.RegExps.escHTML;
    return QBSCOMM.string.listReplace((str + ""), {'\\\\': t.bsls, '\\n': t.nl, '': t.rt, '\\t': t.tab, '\\\'': h.re_apos, '\\"': h.re_quot});
}, escHTML: function (str) {
    var t = QBSCOMM.string.RegExps.escHTML;
    return QBSCOMM.string.listReplace((str + ""), {'&amp;': t.re_amp, '&lt;': t.re_lt, '&gt;': t.re_gt, '&#039;': t.re_apos, '&quot;': t.re_quot});
}, restHTML: function (str) {
    if (!QBSCOMM.string.restHTML.__utilDiv) {
        QBSCOMM.string.restHTML.__utilDiv = document.createElement("div");
    }
    var t = QBSCOMM.string.restHTML.__utilDiv;
    t.innerHTML = (str + "");
    if (typeof(t.innerText) != 'undefined') {
        return t.innerText;
    } else if (typeof(t.textContent) != 'undefined') {
        return t.textContent;
    } else if (typeof(t.text) != 'undefined') {
        return t.text;
    } else {
        return'';
    }
}, listReplace: function (s, l) {
    if (QBSCOMM.lang.isHashMap(l)) {
        for (var i in l) {
            s = QBSCOMM.string.commonReplace(s, l[i], i);
        }
        return s;
    } else {
        return s + '';
    }
}, commonReplace: function (s, p, r) {
    return s.replace(p, r);
}, cut: function (str, bitLen, tails) {
    str += '';
    bitLen -= 0;
    tails = tails || '';
    if (isNaN(bitLen)) {
        return str;
    }
    var len = str.length, i = Math.min(Math.floor(bitLen / 2), len), cnt = QBSCOMM.string.getRealLen(str.slice(0, i));
    for (; i < len && cnt < bitLen; i++) {
        cnt += 1 + !QBSCOMM.string.RegExps.cut.test(str.charAt(i));
    }
    return str.slice(0, cnt > bitLen ? i - 1 : i) + (i < len ? tails : '');
}, getRealLen: function (s, isUTF8) {
    if (typeof(s) != 'string') {
        return 0;
    }
    if (!isUTF8) {
        return s.replace(QBSCOMM.string.RegExps.getRealLen.r0, "**").length;
    } else {
        var cc = s.replace(QBSCOMM.string.RegExps.getRealLen.r1, "");
        return(s.length - cc.length) + (encodeURI(cc).length / 3);
    }
}};
QBSCOMM.dom = {getById: function (id) {
    return document.getElementById(id);
}, getElementsByClassName: function (className, tag, elm) {
    var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
    var tag = tag || "*";
    var elm = elm || document;
    var elements = (tag == "*" && elm.all) ? elm.all : elm.getElementsByTagName(tag);
    var returnElements = [];
    var current;
    var length = elements.length;
    for (var i = 0; i < length; i++) {
        current = elements[i];
        if (testClass.test(current.className)) {
            returnElements.push(current);
        }
    }
    return returnElements;
}, get: function (e) {
    return(typeof(e) == "string") ? document.getElementById(e) : e;
}, getStyle: function (el, property) {
    el = QBSCOMM.dom.get(el);
    if (!el || el.nodeType == 9) {
        return null;
    }
    var w3cMode = document.defaultView && document.defaultView.getComputedStyle, computed = !w3cMode ? null : document.defaultView.getComputedStyle(el, ''), value = "";
    switch (property) {
        case"float":
            property = w3cMode ? "cssFloat" : "styleFloat";
            break;
        case"opacity":
            if (!w3cMode) {
                var val = 100;
                try {
                    val = el.filters['DXImageTransform.Microsoft.Alpha'].opacity;
                } catch (e) {
                    try {
                        val = el.filters('alpha').opacity;
                    } catch (e) {
                    }
                }
                return val / 100;
            } else {
                return parseFloat((computed || el.style)[property]);
            }
            break;
        case"backgroundPositionX":
            if (w3cMode) {
                property = "backgroundPosition";
                return((computed || el.style)[property]).split(" ")[0];
            }
            break;
        case"backgroundPositionY":
            if (w3cMode) {
                property = "backgroundPosition";
                return((computed || el.style)[property]).split(" ")[1];
            }
            break;
    }
    if (w3cMode) {
        return(computed || el.style)[property];
    } else {
        return(el.currentStyle[property] || el.style[property]);
    }
}, setStyle: function (el, properties, value) {
    if (!(el = QBSCOMM.dom.get(el)) || el.nodeType != 1) {
        return false;
    }
    var tmp, bRtn = true, w3cMode = (tmp = document.defaultView) && tmp.getComputedStyle, rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i;
    if (typeof(properties) == 'string') {
        tmp = properties;
        properties = {};
        properties[tmp] = value;
    }
    for (var prop in properties) {
        value = properties[prop];
        if (prop == 'float') {
            prop = w3cMode ? "cssFloat" : "styleFloat";
        } else if (prop == 'opacity') {
            if (!w3cMode) {
                prop = 'filter';
                value = value >= 1 ? '' : ('alpha(opacity=' + Math.round(value * 100) + ')');
            }
        } else if (prop == 'backgroundPositionX' || prop == 'backgroundPositionY') {
            tmp = prop.slice(-1) == 'X' ? 'Y' : 'X';
            if (w3cMode) {
                var v = QBSCOMM.dom.getStyle(el, "backgroundPosition" + tmp);
                prop = 'backgroundPosition';
                typeof(value) == 'number' && (value = value + 'px');
                value = tmp == 'Y' ? (value + " " + (v || "top")) : ((v || 'left') + " " + value);
            }
        }
        if (typeof el.style[prop] != "undefined") {
            el.style[prop] = value + (typeof value === "number" && !rexclude.test(prop) ? 'px' : '');
            bRtn = bRtn && true;
        } else {
            bRtn = bRtn && false;
        }
    }
    return bRtn;
}, removeElement: function (el) {
    if (typeof(el) == "string") {
        el = document.getElementById(el);
    }
    if (!el) {
        return;
    }
    if (el.removeNode) {
        el.removeNode(true);
    } else {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    el = null;
    return null;
}, getPosition: function (el) {
    var xy = QBSCOMM.dom.getXY(el), size = QBSCOMM.dom.getSize(el);
    return{"top": xy[1], "left": xy[0], "width": size[0], "height": size[1]};
}, getScrollTop: function (doc) {
    var _doc = doc || document;
    return Math.max(_doc.documentElement.scrollTop, _doc.body.scrollTop);
}, getScrollLeft: function (doc) {
    var _doc = doc || document;
    return Math.max(_doc.documentElement.scrollLeft, _doc.body.scrollLeft);
}, getXY: function (el, doc) {
    var _t = 0, _l = 0, _doc = doc || document;
    if (el) {
        if (_doc.documentElement.getBoundingClientRect && el.getBoundingClientRect) {
            var box = el.getBoundingClientRect(), oDoc = el.ownerDocument, _fix = QBSCOMM.userAgent.ie ? 2 : 0;
            _t = box.top - _fix + QBSCOMM.dom.getScrollTop(oDoc);
            _l = box.left - _fix + QBSCOMM.dom.getScrollLeft(oDoc);
        } else {
            while (el.offsetParent) {
                _t += el.offsetTop;
                _l += el.offsetLeft;
                el = el.offsetParent;
            }
        }
    }
    return[_l, _t];
}, getSize: function (el) {
    var _fix = [0, 0], i, len, arr;
    if (el) {
        arr = ["Left", "Right", "Top", "Bottom"];
        for (i = 0, len = arr.length; i < len; i++) {
            var v = arr[i];
            _fix[v == "Left" || v == "Right" ? 0 : 1] += (parseInt(QBSCOMM.dom.getStyle(el, "border" + v + "Width"), 10) || 0) + (parseInt(QBSCOMM.dom.getStyle(el, "padding" + v), 10) || 0);
        }
        var _w = el.offsetWidth - _fix[0], _h = el.offsetHeight - _fix[1];
        return[_w, _h];
    }
    return[-1, -1];
}};
QBSCOMM.css = {insertCSSLink: function (url, id) {
    var doc = document, cssLink = (cssLink = doc.getElementById(id)) && cssLink.nodeName == 'LINK' ? cssLink : null, head = doc.getElementsByTagName("head")[0];
    if (!cssLink) {
        cssLink = doc.createElement("link");
        id && (cssLink.id = id);
        cssLink.rel = "stylesheet";
        cssLink.rev = "stylesheet";
        cssLink.type = "text/css";
        cssLink.media = "screen";
        head.appendChild(cssLink);
    }
    url && (cssLink.href = url);
    return cssLink.sheet || cssLink;
}};
QBSCOMM.config = {defaultDataCharacterSet: 'GB2312'}
QBSCOMM.JSONGetter = function (actionURL, cname, data, charset, junctionMode) {
    if (QBSCOMM.object.getType(cname) != "string") {
        cname = "_jsonInstence_" + (QBSCOMM.JSONGetter.counter + 1);
    }
    var prot = QBSCOMM.JSONGetter.instance[cname];
    if (prot instanceof QBSCOMM.JSONGetter) {
    } else {
        QBSCOMM.JSONGetter.instance[cname] = prot = this;
        QBSCOMM.JSONGetter.counter++;
        prot._name = cname;
        prot._sender = null;
        prot._timer = null;
        this.onSuccess = QBSCOMM.emptyFn;
        this.onError = QBSCOMM.emptyFn;
        this.onTimeout = QBSCOMM.emptyFn;
        this.timeout = 5000;
        this.clear = QBSCOMM.emptyFn;
        this._baseClear = function () {
            this._waiting = false;
            this._squeue = [];
            this._equeue = [];
            this.onSuccess = this.onError = QBSCOMM.emptyFn;
            this.clear = null;
        };
    }
    prot._uri = actionURL;
    prot._data = (data && (QBSCOMM.object.getType(data) == "object" || QBSCOMM.object.getType(data) == "string")) ? data : null;
    prot._charset = (QBSCOMM.object.getType(charset) != 'string') ? QBSCOMM.config.defaultDataCharacterSet : charset;
    prot._jMode = !!junctionMode;
    return prot;
};
QBSCOMM.JSONGetter.instance = {};
QBSCOMM.JSONGetter.counter = 0;
QBSCOMM.JSONGetter._errCodeMap = {999: {msg: 'Connection or Server error.'}, 998: {msg: 'Connection to Server timeout.'}};
QBSCOMM.JSONGetter.genHttpParamString = function (o) {
    var r = [];
    for (var i in o) {
        r.push(i + "=" + encodeURIComponent(o[i]));
    }
    return r.join("&");
};
QBSCOMM.JSONGetter.prototype.addOnSuccess = function (f) {
    if (typeof(f) == "function") {
        if (this._squeue && this._squeue.push) {
        } else {
            this._squeue = [];
        }
        this._squeue.push(f);
    }
};
QBSCOMM.JSONGetter._runFnQueue = function (q, resultArgs, th) {
    var f;
    if (q && q.length) {
        while (q.length > 0) {
            f = q.shift();
            if (typeof(f) == "function") {
                f.apply(th ? th : null, resultArgs);
            }
        }
    }
    th.resultArgs = resultArgs;
};
QBSCOMM.JSONGetter.prototype.addOnError = function (f) {
    if (typeof(f) == "function") {
        if (this._equeue && this._equeue.push) {
        } else {
            this._equeue = [];
        }
        this._equeue.push(f);
    }
};
QBSCOMM.JSONGetter.pluginsPool = {"srcStringHandler": [], "onErrorHandler": []};
QBSCOMM.JSONGetter._pluginsRunner = function (pType, data) {
    var _s = QBSCOMM.JSONGetter, l = _s.pluginsPool[pType], t = data, len;
    if (l && (len = l.length)) {
        for (var i = 0; i < len; ++i) {
            if (typeof(l[i]) == "function") {
                t = l[i](t);
            }
        }
    }
    return t;
};
QBSCOMM.JSONGetter.prototype.send = function (callbackFnName) {
    if (this._waiting) {
        return;
    }
    var cfn = (QBSCOMM.object.getType(callbackFnName) != 'string') ? "callback" : callbackFnName, clear, da = this._uri;
    if (this._data) {
        da += (da.indexOf("?") < 0 ? "?" : "&") + ((typeof(this._data) == "object") ? QBSCOMM.JSONGetter.genHttpParamString(this._data) : this._data);
    }
    da = QBSCOMM.JSONGetter._pluginsRunner("srcStringHandler", da);
    this._timer = setTimeout((function (th) {
        return function () {
            th._waiting = false;
            th.onTimeout();
        };
    })(this), this.timeout);
    if (QBSCOMM.userAgent.ie && (QBSCOMM.userAgent.ie < 10) && !(QBSCOMM.userAgent.beta && navigator.appVersion.indexOf("Trident\/4.0") > -1)) {
        var df = document.createDocumentFragment(), sender = (QBSCOMM.userAgent.ie > 8 ? document : df).createElement("script");
        sender.charset = this._charset;
        this._senderDoc = df;
        this._sender = sender;
        this.clear = clear = function (o) {
            clearTimeout(o._timer);
            if (o._sender) {
                o._sender.onreadystatechange = null;
            }
            df['callback'] = df['_Callback'] = df[cfn] = null;
            df = o._senderDoc = o._sender = null;
            o._baseClear();
        };
        df['callback'] = df['_Callback'] = df[cfn] = (function (th) {
            return(function () {
                th._waiting = false;
                th.onSuccess.apply(th, arguments);
                QBSCOMM.JSONGetter._runFnQueue(th._squeue, arguments, th);
                clear(th);
            });
        })(this);
        if (QBSCOMM.userAgent.ie < 9) {
            sender.onreadystatechange = (function (th) {
                return(function () {
                    if (th._sender && th._sender.readyState == "loaded") {
                        try {
                            th._onError();
                        }
                        catch (ignore) {
                        }
                    }
                });
            })(this);
        } else {
            sender.onerror = (function (th) {
                return(function () {
                    try {
                        th._onError();
                    }
                    catch (ignore) {
                    }
                });
            })(this);
        }
        this._waiting = true;
        df.appendChild(sender);
        this._sender.src = da;
    } else {
        this.clear = clear = function (o) {
            clearTimeout(o._timer);
            o._baseClear();
        };
        window[cfn] = function () {
            QBSCOMM.JSONGetter.args = arguments;
        };
        var callback = (function (th) {
            return function () {
                th.onSuccess.apply(th, QBSCOMM.JSONGetter.args);
                QBSCOMM.JSONGetter._runFnQueue(th._squeue, QBSCOMM.JSONGetter.args, th);
                QBSCOMM.JSONGetter.args = [];
                clear(th);
            }
        })(this);
        var _ecb = (function (th) {
            return(function () {
                th._waiting = false;
                var _eo = QBSCOMM.JSONGetter._errCodeMap[999];
                th.onError(_eo);
                QBSCOMM.JSONGetter._runFnQueue(th._equeue, [_eo], th);
                clear(th);
            });
        })(this);
        var h = document.getElementsByTagName('head'), node;
        h = h && h[0] || document.body;
        if (!h)
            return;
        var baseElement = h.getElementsByTagName('base')[0];
        node = document.createElement('script');
        node.charset = this._charset || 'utf-8';
        node.onload = node.onreadystatechange = function () {
            if (!node.readyState || node.readyState == 'complete' || node.readyState == 'loaded') {
                node.onload = node.onreadystatechange = null;
                if (node.parentNode) {
                    h.removeChild(node);
                }
                callback();
                node = void(0);
            }
        };
        node.onerror = function () {
            this.onerror = null;
            _ecb();
        }
        node.src = da;
        baseElement ? h.insertBefore(node, baseElement) : h.appendChild(node);
    }
};
QBSCOMM.JSONGetter.prototype._onError = function () {
    this._waiting = false;
    var _eo = QBSCOMM.JSONGetter._errCodeMap[999];
    this.msg = _eo.msg;
    this.onError(_eo);
    QBSCOMM.JSONGetter._runFnQueue(this._equeue, [_eo], this);
    QBSCOMM.JSONGetter._pluginsRunner("onErrorHandler", this);
    this.clear(this);
};
QBSCOMM.JSONGetter.prototype.destroy = QBSCOMM.emptyFn;
QBSCOMM.TCISD = (function () {
    var a = {};
    a.valueStat = function (statId, resultType, returnValue, opts) {
        setTimeout(function () {
            a.valueStat.send(statId, resultType, returnValue, opts);
        }, 0);
    };
    a.valueStat.send = function (statId, resultType, returnValue, opts) {
        var _s = a.valueStat, _c = _s.config, t = _c.defaultParams, p, url = [];
        statId = statId || t.statId;
        resultType = resultType || t.resultType;
        returnValue = returnValue || t.returnValue;
        opts = opts || t;
        if (typeof(opts.reportRate) != "number") {
            opts.reportRate = 1;
        }
        opts.reportRate = Math.round(Math.max(opts.reportRate, 1));
        if (opts.reportRate > 1 && (Math.random() * opts.reportRate) > 1) {
            return;
        }
        url.push((opts.reportURL || _c.webServerInterfaceURL), "?");
        url.push("flag1=", statId, "&", "flag2=", resultType, "&", "flag3=", returnValue, "&", "1=", opts.reportRate, "&", "2=", opts.duration, "&");
        url.push("sds=", Math.random());
        a.pingSender(url.join(""));
    };
    a.setPingSender = function (sender) {
        a.pingSender = sender;
    };
    a.valueStat.config = {webServerInterfaceURL: "http://isdspeed.qq.com/cgi-bin/v.cgi", defaultParams: {statId: 1, resultType: 1, returnValue: 11, reportRate: 1, duration: 1000}};
    return a;
})();
__qbs_load_comm = true;
/*  |xGv00|1875718fc54c8d83d82ea5522c681275 */