if (!("gdprAppliesGlobally" in window)) {
    window.gdprAppliesGlobally = true;
}
if (!("cmp_id" in window) || window.cmp_id < 1) {
    window.cmp_id = 0;
}
if (!("cmp_cdid" in window)) {
    window.cmp_cdid = "77831444b513";
}
if (!("cmp_params" in window)) {
    window.cmp_params = "";
}
if (!("cmp_host" in window)) {
    window.cmp_host = "c.delivery.consentmanager.net";
}
if (!("cmp_cdn" in window)) {
    window.cmp_cdn = "cdn.consentmanager.net";
}
if (!("cmp_proto" in window)) {
    window.cmp_proto = "https:";
}
if (!("cmp_codesrc" in window)) {
    window.cmp_codesrc = "1";
}
window.cmp_getsupportedLangs = function () {
    var b = [
        "DE",
        "EN",
        "FR",
        "IT",
        "NO",
        "DA",
        "FI",
        "ES",
        "PT",
        "RO",
        "BG",
        "ET",
        "EL",
        "GA",
        "HR",
        "LV",
        "LT",
        "MT",
        "NL",
        "PL",
        "SV",
        "SK",
        "SL",
        "CS",
        "HU",
        "RU",
        "SR",
        "ZH",
        "TR",
        "UK",
        "AR",
        "BS",
    ];
    if ("cmp_customlanguages" in window) {
        for (var a = 0; a < window.cmp_customlanguages.length; a++) {
            b.push(window.cmp_customlanguages[a].l.toUpperCase());
        }
    }
    return b;
};
window.cmp_getRTLLangs = function () {
    var a = ["AR"];
    if ("cmp_customlanguages" in window) {
        for (var b = 0; b < window.cmp_customlanguages.length; b++) {
            if ("r" in window.cmp_customlanguages[b] && window.cmp_customlanguages[b].r) {
                a.push(window.cmp_customlanguages[b].l);
            }
        }
    }
    return a;
};
window.cmp_getlang = function (a) {
    if (typeof a != "boolean") {
        a = true;
    }
    if (a && typeof cmp_getlang.usedlang == "string" && cmp_getlang.usedlang !== "") {
        return cmp_getlang.usedlang;
    }
    return window.cmp_getlangs()[0];
};
window.cmp_extractlang = function (a) {
    if (a.indexOf("cmplang=") != -1) {
        a = a.substr(a.indexOf("cmplang=") + 8, 2).toUpperCase();
        if (a.indexOf("&") != -1) {
            a = a.substr(0, a.indexOf("&"));
        }
    } else {
        a = "";
    }
    return a;
};
window.cmp_getlangs = function () {
    var g = window.cmp_getsupportedLangs();
    var c = [];
    var f = location.hash;
    var e = location.search;
    var j = "cmp_params" in window ? window.cmp_params : "";
    var a = "languages" in navigator ? navigator.languages : [];
    if (cmp_extractlang(f) != "") {
        c.push(cmp_extractlang(f));
    } else {
        if (cmp_extractlang(e) != "") {
            c.push(cmp_extractlang(e));
        } else {
            if (cmp_extractlang(j) != "") {
                c.push(cmp_extractlang(j));
            } else {
                if ("cmp_setlang" in window && window.cmp_setlang != "") {
                    c.push(window.cmp_setlang.toUpperCase());
                } else {
                    if ("cmp_langdetect" in window && window.cmp_langdetect == 1) {
                        c.push(window.cmp_getPageLang());
                    } else {
                        if (a.length > 0) {
                            for (var d = 0; d < a.length; d++) {
                                c.push(a[d]);
                            }
                        }
                        if ("language" in navigator) {
                            c.push(navigator.language);
                        }
                        if ("userLanguage" in navigator) {
                            c.push(navigator.userLanguage);
                        }
                    }
                }
            }
        }
    }
    var h = [];
    for (var d = 0; d < c.length; d++) {
        var b = c[d].toUpperCase();
        if (b.length < 2) {
            continue;
        }
        if (g.indexOf(b) != -1) {
            h.push(b);
        } else {
            if (b.indexOf("-") != -1) {
                b = b.substr(0, 2);
            }
            if (g.indexOf(b) != -1) {
                h.push(b);
            }
        }
    }
    if (
        h.length == 0 &&
        typeof cmp_getlang.defaultlang == "string" &&
        cmp_getlang.defaultlang !== ""
    ) {
        return [cmp_getlang.defaultlang.toUpperCase()];
    } else {
        return h.length > 0 ? h : ["EN"];
    }
};
window.cmp_getPageLangs = function () {
    var a = window.cmp_getXMLLang();
    if (a != "") {
        a = [a.toUpperCase()];
    } else {
        a = [];
    }
    a = a.concat(window.cmp_getLangsFromURL());
    return a.length > 0 ? a : ["EN"];
};
window.cmp_getPageLang = function () {
    var a = window.cmp_getPageLangs();
    return a.length > 0 ? a[0] : "";
};
window.cmp_getLangsFromURL = function () {
    var c = window.cmp_getsupportedLangs();
    var b = location;
    var m = "toUpperCase";
    var g = b.hostname[m]() + ".";
    var a = b.pathname[m]() + "/";
    var f = [];
    for (var e = 0; e < c.length; e++) {
        var j = a.substring(0, c[e].length + 1);
        if (g.substring(0, c[e].length + 1) == c[e] + ".") {
            f.push(c[e][m]());
        } else {
            if (c[e].length == 5) {
                var k = c[e].substring(3, 5) + "-" + c[e].substring(0, 2);
                if (g.substring(0, k.length + 1) == k + ".") {
                    f.push(c[e][m]());
                }
            } else {
                if (j == c[e] + "/" || j == "/" + c[e]) {
                    f.push(c[e][m]());
                } else {
                    if (j == c[e].replace("-", "/") + "/" || j == "/" + c[e].replace("-", "/")) {
                        f.push(c[e][m]());
                    } else {
                        if (c[e].length == 5) {
                            var k = c[e].substring(3, 5) + "-" + c[e].substring(0, 2);
                            var h = a.substring(0, k.length + 1);
                            if (h == k + "/" || h == k.replace("-", "/") + "/") {
                                f.push(c[e][m]());
                            }
                        }
                    }
                }
            }
        }
    }
    return f;
};
window.cmp_getXMLLang = function () {
    var c = document.getElementsByTagName("html");
    if (c.length > 0) {
        var c = c[0];
    } else {
        c = document.documentElement;
    }
    if (c && c.getAttribute) {
        var a = c.getAttribute("xml:lang");
        if (typeof a != "string" || a == "") {
            a = c.getAttribute("lang");
        }
        if (typeof a == "string" && a != "") {
            var b = window.cmp_getsupportedLangs();
            return b.indexOf(a.toUpperCase()) != -1 ? a : "";
        } else {
            return "";
        }
    }
};
(function () {
    var B = document;
    var C = B.getElementsByTagName;
    var o = window;
    var t = "";
    var h = "";
    var k = "";
    var D = function (e) {
        var i = "cmp_" + e;
        e = "cmp" + e + "=";
        var d = "";
        var l = e.length;
        var G = location;
        var H = G.hash;
        var w = G.search;
        var u = H.indexOf(e);
        var F = w.indexOf(e);
        if (u != -1) {
            d = H.substring(u + l, 9999);
        } else {
            if (F != -1) {
                d = w.substring(F + l, 9999);
            } else {
                return i in o && typeof o[i] !== "function" ? o[i] : "";
            }
        }
        var E = d.indexOf("&");
        if (E != -1) {
            d = d.substring(0, E);
        }
        return d;
    };
    var j = D("lang");
    if (j != "") {
        t = j;
        k = t;
    } else {
        if ("cmp_getlang" in o) {
            t = o.cmp_getlang().toLowerCase();
            h = o.cmp_getlangs().slice(0, 3).join("_");
            k = o.cmp_getPageLangs().slice(0, 3).join("_");
            if ("cmp_customlanguages" in o) {
                var m = o.cmp_customlanguages;
                for (var x = 0; x < m.length; x++) {
                    var a = m[x].l.toLowerCase();
                    if (a == t) {
                        t = "en";
                    }
                }
            }
        }
    }
    var q = "cmp_proto" in o ? o.cmp_proto : "https:";
    if (q != "http:" && q != "https:") {
        q = "https:";
    }
    var n = "cmp_ref" in o ? o.cmp_ref : location.href;
    if (n.length > 300) {
        n = n.substring(0, 300);
    }
    var z = function (d) {
        var I = B.createElement("script");
        I.setAttribute("data-cmp-ab", "1");
        I.type = "text/javascript";
        I.async = true;
        I.src = d;
        var H = ["body", "div", "span", "script", "head"];
        var w = "currentScript";
        var F = "parentElement";
        var l = "appendChild";
        var G = "body";
        if (B[w] && B[w][F]) {
            B[w][F][l](I);
        } else {
            if (B[G]) {
                B[G][l](I);
            } else {
                for (var u = 0; u < H.length; u++) {
                    var E = C(H[u]);
                    if (E.length > 0) {
                        E[0][l](I);
                        break;
                    }
                }
            }
        }
    };
    var b = D("design");
    var c = D("regulationkey");
    var y = D("gppkey");
    var s = D("att");
    var f = o.encodeURIComponent;
    var g = false;
    try {
        g = B.cookie.length > 0;
    } catch (A) {
        g = false;
    }
    var p = q + "//" + o.cmp_host + "/delivery/cmp.php?";
    p +=
        ("cmp_id" in o && o.cmp_id > 0 ? "id=" + o.cmp_id : "") +
        ("cmp_cdid" in o ? "&cdid=" + o.cmp_cdid : "") +
        "&h=" +
        f(n);
    p +=
        (b != "" ? "&cmpdesign=" + f(b) : "") +
        (c != "" ? "&cmpregulationkey=" + f(c) : "") +
        (y != "" ? "&cmpgppkey=" + f(y) : "");
    p +=
        (s != "" ? "&cmpatt=" + f(s) : "") +
        ("cmp_params" in o ? "&" + o.cmp_params : "") +
        (g ? "&__cmpfcc=1" : "");
    z(p + "&l=" + f(t) + "&ls=" + f(h) + "&lp=" + f(k) + "&o=" + new Date().getTime());
    var r = "js";
    var v = D("debugunminimized") != "" ? "" : ".min";
    if (D("debugcoverage") == "1") {
        r = "instrumented";
        v = "";
    }
    if (D("debugtest") == "1") {
        r = "jstests";
        v = "";
    }
    z(q + "//" + o.cmp_cdn + "/delivery/" + r + "/cmp_final" + v + ".js");
})();
window.cmp_addFrame = function (b) {
    if (!window.frames[b]) {
        if (document.body) {
            var a = document.createElement("iframe");
            a.style.cssText = "display:none";
            if (
                "cmp_cdn" in window &&
                "cmp_ultrablocking" in window &&
                window.cmp_ultrablocking > 0
            ) {
                a.src = "//" + window.cmp_cdn + "/delivery/empty.html";
            }
            a.name = b;
            a.setAttribute("title", "Intentionally hidden, please ignore");
            a.setAttribute("role", "none");
            a.setAttribute("tabindex", "-1");
            document.body.appendChild(a);
        } else {
            window.setTimeout(window.cmp_addFrame, 10, b);
        }
    }
};
window.cmp_rc = function (c, b) {
    var l = "";
    try {
        l = document.cookie;
    } catch (h) {
        l = "";
    }
    var j = "";
    var f = 0;
    var g = false;
    while (l != "" && f < 100) {
        f++;
        while (l.substr(0, 1) == " ") {
            l = l.substr(1, l.length);
        }
        var k = l.substring(0, l.indexOf("="));
        if (l.indexOf(";") != -1) {
            var m = l.substring(l.indexOf("=") + 1, l.indexOf(";"));
        } else {
            var m = l.substr(l.indexOf("=") + 1, l.length);
        }
        if (c == k) {
            j = m;
            g = true;
        }
        var d = l.indexOf(";") + 1;
        if (d == 0) {
            d = l.length;
        }
        l = l.substring(d, l.length);
    }
    if (!g && typeof b == "string") {
        j = b;
    }
    return j;
};
window.cmp_stub = function () {
    var a = arguments;
    __cmp.a = __cmp.a || [];
    if (!a.length) {
        return __cmp.a;
    } else {
        if (a[0] === "ping") {
            if (a[1] === 2) {
                a[2](
                    {
                        gdprApplies: gdprAppliesGlobally,
                        cmpLoaded: false,
                        cmpStatus: "stub",
                        displayStatus: "hidden",
                        apiVersion: "2.2",
                        cmpId: 31,
                    },
                    true
                );
            } else {
                a[2](false, true);
            }
        } else {
            if (a[0] === "getUSPData") {
                a[2]({ version: 1, uspString: window.cmp_rc("__cmpccpausps", "1---") }, true);
            } else {
                if (a[0] === "getTCData") {
                    __cmp.a.push([].slice.apply(a));
                } else {
                    if (a[0] === "addEventListener" || a[0] === "removeEventListener") {
                        __cmp.a.push([].slice.apply(a));
                    } else {
                        if (a.length == 4 && a[3] === false) {
                            a[2]({}, false);
                        } else {
                            __cmp.a.push([].slice.apply(a));
                        }
                    }
                }
            }
        }
    }
};
window.cmp_gpp_ping = function () {
    return {
        gppVersion: "1.1",
        cmpStatus: "stub",
        cmpDisplayStatus: "hidden",
        signalStatus: "not ready",
        supportedAPIs: [
            "2:tcfeuv2",
            "5:tcfcav1",
            "7:usnat",
            "8:usca",
            "9:usva",
            "10:usco",
            "11:usut",
            "12:usct",
        ],
        cmpId: 31,
        sectionList: [],
        applicableSections: [0],
        gppString: "",
        parsedSections: {},
    };
};
window.cmp_gppstub = function () {
    var c = arguments;
    __gpp.q = __gpp.q || [];
    if (!c.length) {
        return __gpp.q;
    }
    var h = c[0];
    var g = c.length > 1 ? c[1] : null;
    var f = c.length > 2 ? c[2] : null;
    var a = null;
    var j = false;
    if (h === "ping") {
        a = window.cmp_gpp_ping();
        j = true;
    } else {
        if (h === "addEventListener") {
            __gpp.e = __gpp.e || [];
            if (!("lastId" in __gpp)) {
                __gpp.lastId = 0;
            }
            __gpp.lastId++;
            var d = __gpp.lastId;
            __gpp.e.push({ id: d, callback: g });
            a = {
                eventName: "listenerRegistered",
                listenerId: d,
                data: true,
                pingData: window.cmp_gpp_ping(),
            };
            j = true;
        } else {
            if (h === "removeEventListener") {
                __gpp.e = __gpp.e || [];
                a = false;
                for (var e = 0; e < __gpp.e.length; e++) {
                    if (__gpp.e[e].id == f) {
                        __gpp.e[e].splice(e, 1);
                        a = true;
                        break;
                    }
                }
                j = true;
            } else {
                __gpp.q.push([].slice.apply(c));
            }
        }
    }
    if (a !== null && typeof g === "function") {
        g(a, j);
    }
};
window.cmp_msghandler = function (d) {
    var a = typeof d.data === "string";
    try {
        var c = a ? JSON.parse(d.data) : d.data;
    } catch (f) {
        var c = null;
    }
    if (typeof c === "object" && c !== null && "__cmpCall" in c) {
        var b = c.__cmpCall;
        window.__cmp(b.command, b.parameter, function (h, g) {
            var e = { __cmpReturn: { returnValue: h, success: g, callId: b.callId } };
            d.source.postMessage(a ? JSON.stringify(e) : e, "*");
        });
    }
    if (typeof c === "object" && c !== null && "__uspapiCall" in c) {
        var b = c.__uspapiCall;
        window.__uspapi(b.command, b.version, function (h, g) {
            var e = { __uspapiReturn: { returnValue: h, success: g, callId: b.callId } };
            d.source.postMessage(a ? JSON.stringify(e) : e, "*");
        });
    }
    if (typeof c === "object" && c !== null && "__tcfapiCall" in c) {
        var b = c.__tcfapiCall;
        window.__tcfapi(
            b.command,
            b.version,
            function (h, g) {
                var e = { __tcfapiReturn: { returnValue: h, success: g, callId: b.callId } };
                d.source.postMessage(a ? JSON.stringify(e) : e, "*");
            },
            b.parameter
        );
    }
    if (typeof c === "object" && c !== null && "__gppCall" in c) {
        var b = c.__gppCall;
        window.__gpp(
            b.command,
            function (h, g) {
                var e = { __gppReturn: { returnValue: h, success: g, callId: b.callId } };
                d.source.postMessage(a ? JSON.stringify(e) : e, "*");
            },
            "parameter" in b ? b.parameter : null,
            "version" in b ? b.version : 1
        );
    }
};
window.cmp_setStub = function (a) {
    if (
        !(a in window) ||
        (typeof window[a] !== "function" &&
            typeof window[a] !== "object" &&
            (typeof window[a] === "undefined" || window[a] !== null))
    ) {
        window[a] = window.cmp_stub;
        window[a].msgHandler = window.cmp_msghandler;
        window.addEventListener("message", window.cmp_msghandler, false);
    }
};
window.cmp_setGppStub = function (a) {
    if (
        !(a in window) ||
        (typeof window[a] !== "function" &&
            typeof window[a] !== "object" &&
            (typeof window[a] === "undefined" || window[a] !== null))
    ) {
        window[a] = window.cmp_gppstub;
        window[a].msgHandler = window.cmp_msghandler;
        window.addEventListener("message", window.cmp_msghandler, false);
    }
};
if (!("cmp_noiframepixel" in window)) {
    window.cmp_addFrame("__cmpLocator");
}
if ((!("cmp_disableusp" in window) || !window.cmp_disableusp) && !("cmp_noiframepixel" in window)) {
    window.cmp_addFrame("__uspapiLocator");
}
if ((!("cmp_disabletcf" in window) || !window.cmp_disabletcf) && !("cmp_noiframepixel" in window)) {
    window.cmp_addFrame("__tcfapiLocator");
}
if ((!("cmp_disablegpp" in window) || !window.cmp_disablegpp) && !("cmp_noiframepixel" in window)) {
    window.cmp_addFrame("__gppLocator");
}
window.cmp_setStub("__cmp");
if (!("cmp_disabletcf" in window) || !window.cmp_disabletcf) {
    window.cmp_setStub("__tcfapi");
}
if (!("cmp_disableusp" in window) || !window.cmp_disableusp) {
    window.cmp_setStub("__uspapi");
}
if (!("cmp_disablegpp" in window) || !window.cmp_disablegpp) {
    window.cmp_setGppStub("__gpp");
}
