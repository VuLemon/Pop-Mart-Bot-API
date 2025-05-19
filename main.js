// MODULE LOADER DEFINITION - DO NOT TOUCH
var e, c, f, a, d, t, b, n, r, o, u, i, s = {}, l = {};
function moduleLoader(e) {
    var c = l[e];
    if (void 0 !== c)
        return c.exports;
    var f = l[e] = {
        id: e,
        loaded: !1,
        exports: {}
    }
        , a = !0;
    try {
        s[e].call(f.exports, f, f.exports, moduleLoader),
        a = !1
    } finally {
        a && delete l[e]
    }
    return f.loaded = !0,
    f.exports
}
moduleLoader.m = s,
e = [],
moduleLoader.O = function(c, f, a, d) {
    if (f) {
        d = d || 0;
        for (var t = e.length; t > 0 && e[t - 1][2] > d; t--)
            e[t] = e[t - 1];
        e[t] = [f, a, d];
        return
    }
    for (var b = 1 / 0, t = 0; t < e.length; t++) {
        for (var f = e[t][0], a = e[t][1], d = e[t][2], n = !0, r = 0; r < f.length; r++)
            b >= d && Object.keys(moduleLoader.O).every(function(e) {
                return moduleLoader.O[e](f[r])
            }) ? f.splice(r--, 1) : (n = !1,
            d < b && (b = d));
        if (n) {
            e.splice(t--, 1);
            var o = a();
            void 0 !== o && (c = o)
        }
    }
    return c
}
,
moduleLoader.n = function(e) {
    var c = e && e.__esModule ? function() {
        return e.default
    }
    : function() {
        return e
    }
    ;
    return moduleLoader.d(c, {
        a: c
    }),
    c
}
,
f = Object.getPrototypeOf ? function(e) {
    return Object.getPrototypeOf(e)
}
: function(e) {
    return e.__proto__
}
,
moduleLoader.t = function(e, a) {
    if (1 & a && (e = this(e)),
    8 & a || "object" == typeof e && e && (4 & a && e.__esModule || 16 & a && "function" == typeof e.then))
        return e;
    var d = Object.create(null);
    moduleLoader.r(d);
    var t = {};
    c = c || [null, f({}), f([]), f(f)];
    for (var b = 2 & a && e; "object" == typeof b && !~c.indexOf(b); b = f(b))
        Object.getOwnPropertyNames(b).forEach(function(c) {
            t[c] = function() {
                return e[c]
            }
        });
    return t.default = function() {
        return e
    }
    ,
    moduleLoader.d(d, t),
    d
}
,
moduleLoader.d = function(e, c) {
    for (var f in c)
        moduleLoader.o(c, f) && !moduleLoader.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: c[f]
        })
}
,
moduleLoader.f = {},
moduleLoader.e = function(e) {
    return Promise.all(Object.keys(moduleLoader.f).reduce(function(c, f) {
        return moduleLoader.f[f](e, c),
        c
    }, []))
}
,
moduleLoader.u = function(e) {
    return 2809 === e ? "static/chunks/2809-19402f2ea8001ded.js" : 8801 === e ? "static/chunks/8801-fccd12439887328b.js" : 550 === e ? "static/chunks/550-40658d3f5a98051f.js" : 4622 === e ? "static/chunks/4622-22713cb80c3ca758.js" : 734 === e ? "static/chunks/chunk-markdown-5aeb9072d3a7dc04.js" : 9688 === e ? "static/chunks/9688-dbf379e1f7c4fbd0.js" : 9929 === e ? "static/chunks/9929-f84dc8ebd961cfef.js" : "static/chunks/" + (({
        8836: "chunk-commons",
        9365: "chunk-video"
    })[e] || e) + "." + ({
        669: "6609af93de3a60b1",
        719: "727e27a59aa0257a",
        988: "601c8045129e4173",
        1137: "7cdbb9cc20e93d93",
        1176: "f3cb17c9ab6d4bec",
        1294: "e55200adf68150dd",
        1306: "dff98ec7a5792f46",
        1509: "0c413b65576dad0d",
        1537: "7ad1cc57a5c8a0fe",
        1572: "1c55793952f1bd7c",
        1742: "0526391b5f5a61ec",
        1913: "2bd09fc382a7b2d4",
        1986: "4eb28680be1ab627",
        2083: "6be948f70d4b977b",
        2143: "d1fe4f11ee002f1f",
        2163: "4e51afad5bd0b9a0",
        2530: "ac8dbb2e6c89f7bb",
        2610: "116c9d5fabbf2fe5",
        2880: "9c62b5e441531388",
        2894: "68bd1f2326de2cd9",
        3131: "1fa37325fad983e0",
        3273: "8b1d462b88bb6991",
        3298: "b4268ba0237728b8",
        3389: "65c83712806ed48e",
        3570: "17e1a4af9337103c",
        3715: "1925b1453831e3d5",
        3722: "d9b809ec39636394",
        3881: "0335aa145fb500b0",
        3886: "5d7dc5e1f70747a7",
        3936: "c4cb79469390fe58",
        3996: "460d0da36697d0f1",
        4038: "183df3849aa52a8a",
        4415: "e4f4f82d371575ec",
        4426: "96d7b9c5dbdf240f",
        4437: "a9f4921a92dacc5f",
        4550: "5ae1803e060d7c5c",
        4575: "74721765075e7eda",
        4713: "ee1d5476cdb2f340",
        4832: "58b89502647ba229",
        4860: "230bcf05fac9867f",
        5117: "d498758c3668e1bb",
        5394: "ef8efcc803667ebf",
        5395: "e12df59c77ae2cd6",
        5550: "377a21da733edd26",
        5941: "893cff5c006518d7",
        6142: "9258e03616a7ee52",
        6260: "432e45bf0f32ba89",
        6293: "6539a60746135248",
        6580: "9f0ff9fda693f81e",
        6946: "1a42819c94bd9ee1",
        7006: "d6baea4704a48fc2",
        7140: "c16289e9cfe82746",
        7146: "6be7da1b6e8a9063",
        7258: "84719a851a963f40",
        7375: "43ac04f91e4fea66",
        7376: "8c9debd500309cb3",
        7410: "166dbf0403709eec",
        7518: "b64b039e24d06179",
        7650: "6566267b792ba445",
        7795: "a3b784ebb47a99ba",
        7826: "0cc6d5141f15cf73",
        8002: "f940073c5e514da0",
        8133: "36d68a7549129b16",
        8149: "f0c0a4aa190c9e88",
        8150: "b73077cf9a9e7689",
        8164: "69985819ee7f8b32",
        8444: "c52cd51efb9b260c",
        8454: "0eedee9a8e309a8a",
        8803: "506f1485e1163304",
        8836: "b2e8fabc2a6befe4",
        8977: "727504b591d28907",
        9014: "4ae50e2678c34c74",
        9065: "d5a25b16994ff0f2",
        9189: "d507982966e34caf",
        9365: "f7f23a17f813bf23",
        9400: "4e0473fcb4915cb9",
        9583: "54e9f1f4d30125e0",
        9644: "2477eca82f63e854",
        9733: "d976dc0914520b8d"
    })[e] + ".js"
}
,
moduleLoader.miniCssF = function(e) {
    return "static/css/" + ({
        120: "aebf9e83da15efbc",
        154: "85d34a89631d2fdc",
        349: "675ee5e4b40c82e3",
        386: "d48df5e047994ff7",
        452: "446d0bf4cef06c77",
        660: "b79a9f1071fd34c4",
        669: "8626334aa07c0114",
        772: "dd54b82155a92eb1",
        988: "662c20f1fb8603e4",
        989: "8182dbcbbbbca5ba",
        1008: "23764f4d4cfce886",
        1029: "695e4d37c8dc9f37",
        1137: "7bd677ee987f57c2",
        1200: "10c32f6ec2ca6dce",
        1227: "e44cb093fd7b5447",
        1383: "b38e057ca542a645",
        1477: "37cd5b39331de492",
        1509: "ad3d8fb1559e589a",
        1537: "515eedf7cab88e51",
        1742: "244b8cf56e54581d",
        1925: "34940e97d8dec2d8",
        1986: "3963438f6edf1503",
        2222: "27e015ee79d922ed",
        2232: "3b4f0bc5ef268f8b",
        2251: "984d5a4ba6b77e0b",
        2398: "f1ad8df5b34b4e6d",
        2433: "2d3ffcc386859fbf",
        2530: "aae5edb68bd4529a",
        2610: "d55c7de99075eb06",
        2657: "93dcc9361c85acf1",
        2743: "ef46db3751d8e999",
        2745: "5f670850a2190982",
        2750: "fa17a50936c2fdbe",
        2809: "0ee1f0de93082888",
        2888: "1c0d16fdd9544dec",
        2894: "51f4b969f9e46f94",
        2896: "e69e6932a77d4f73",
        2926: "7e385fae45d0e251",
        3e3: "b42ffc0ab572d5aa",
        3131: "e7796f29222ce329",
        3270: "0fced77706c7deb4",
        3273: "930fb64985354bfb",
        3395: "c52145dfd57c3b33",
        3410: "4e9ca265a20d8e72",
        3442: "51000913aa899a8e",
        3455: "35440ace57a74f1b",
        3502: "f9ecfedc84162ff6",
        3515: "ab30826a495bff74",
        3554: "3b166b16efb2eb21",
        3578: "a7f630ec2205be0a",
        3595: "d1082dbcda81a2b7",
        3607: "8569a2734e90db75",
        3715: "fdaa733e05badc73",
        3754: "75499ce3bf31d120",
        3850: "23fc2e474e415a10",
        3860: "4d0f03e036286ced",
        3883: "a533e1c0f638fe06",
        3886: "40f4f21a97b776f1",
        3936: "47bc4fc42381dd9d",
        3996: "8ce7af8083cdadf8",
        4007: "f705b299eb1ae38c",
        4393: "84f23f44c4fc8b32",
        4550: "82d98cf24281de83",
        4552: "3913bf6b71f71986",
        4575: "827f102f71b4e0af",
        4696: "ce530214ec545b72",
        4699: "23764f4d4cfce886",
        4941: "13c7af4d46a43226",
        4978: "23764f4d4cfce886",
        4982: "8053296e5777e4f0",
        5008: "a41a578ccd457e26",
        5065: "2e6d77422ab36eb7",
        5117: "20317dcc3c82bc7e",
        5128: "71e5fe0ec04f9520",
        5144: "8c23e2f7df4479d6",
        5186: "06b32a958a736574",
        5211: "05735fcd27c78761",
        5273: "03f042eabfe7e3fd",
        5395: "cda508a61966c0bf",
        5405: "6e06a24d9c3b6549",
        5550: "7f239a107a7b7d96",
        5610: "a6cb114bb95c6be4",
        5719: "77c3e4f9edf33803",
        5781: "7306176d5342bfad",
        5806: "2c1c719122c3ae09",
        5879: "a6d1d1933c5891ca",
        6134: "2db9b334a5ff069b",
        6142: "9491be5b3e029784",
        6260: "12a5ac36c1414ff2",
        6274: "96193dba10c66820",
        6293: "fa5033f5b4bd81ab",
        6516: "5c2af71ec8663fb0",
        6580: "8af2a294eeffe0c1",
        6597: "4697ea23a62072bb",
        6620: "7b838e53c5eefb87",
        6667: "52dd372f4d528850",
        6668: "1797ec3fb6a93a20",
        6946: "2417d98877fede0a",
        6985: "487d50107b23b7a8",
        7140: "7fad5590aa2cbc1b",
        7156: "115f698197f7563d",
        7258: "5d2a0b1cccd44f4f",
        7375: "9d4d461f25b0d901",
        7376: "db48887bc2a23601",
        7396: "84297ad3db1e92f8",
        7410: "10d35cd11aa48172",
        7518: "623d7114395831d0",
        7687: "1175a5449eae0e43",
        7769: "92b8ef3b20082e99",
        7795: "6f99e19f28fd43ab",
        7851: "954424b6402e27ed",
        7867: "8c23e2f7df4479d6",
        7966: "ab53749332a2d886",
        8041: "9eb8b13ae0f1141a",
        8064: "11c3afb6217e7534",
        8133: "46b7abc5c599e10c",
        8149: "5796349803eaacf8",
        8164: "e88d9c5d3e54efae",
        8206: "23764f4d4cfce886",
        8248: "0450dc07231a53e1",
        8311: "2341b123aeaaf548",
        8443: "23fc2e474e415a10",
        8444: "6319933a2553aafc",
        8455: "24036bee40f182dc",
        8695: "efc144c2b1ef95f3",
        8836: "6576123095c8e8dc",
        8937: "2ffc97b05b311b72",
        8956: "a1defbd612f4c682",
        8959: "bdaeed577e4edc2e",
        8998: "a41a578ccd457e26",
        9014: "2f19b7823ed57afc",
        9065: "42e56aebcbda9f5a",
        9145: "d7fef1f2a7639b93",
        9154: "1628b69925191894",
        9189: "08d5e5f06d1c4098",
        9190: "5023f5749949722a",
        9195: "d510899794b58503",
        9365: "04d7f1e9fff99a9c",
        9400: "248a1a0065a44702",
        9540: "a9685585d07aaf59",
        9583: "3175fa34842505d3",
        9644: "d1e2096e6550c522",
        9688: "292ae204b0b4868b",
        9691: "6acfb1544fd06fc6",
        9742: "ef46db3751d8e999",
        9884: "4f2f1fc2ecd62499",
        9901: "1cf45e0025b64630"
    })[e] + ".css"
}
,
moduleLoader.g = function() {
    if ("object" == typeof globalThis)
        return globalThis;
    try {
        return this || Function("return this")()
    } catch (e) {
        if ("object" == typeof window)
            return window
    }
}(),
moduleLoader.o = function(e, c) {
    return Object.prototype.hasOwnProperty.call(e, c)
}
,
a = {},
d = "_N_E:",
moduleLoader.l = function(e, c, f, t) {
    if (a[e]) {
        a[e].push(c);
        return
    }
    if (void 0 !== f)
        for (var b, n, r = document.getElementsByTagName("script"), o = 0; o < r.length; o++) {
            var u = r[o];
            if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == d + f) {
                b = u;
                break
            }
        }
    b || (n = !0,
    (b = document.createElement("script")).charset = "utf-8",
    b.timeout = 120,
    moduleLoader.nc && b.setAttribute("nonce", moduleLoader.nc),
    b.setAttribute("data-webpack", d + f),
    b.src = moduleLoader.tu(e)),
    a[e] = [c];
    var i = function(c, f) {
        b.onerror = b.onload = null,
        clearTimeout(s);
        var d = a[e];
        if (delete a[e],
        b.parentNode && b.parentNode.removeChild(b),
        d && d.forEach(function(e) {
            return e(f)
        }),
        c)
            return c(f)
    }
        , s = setTimeout(i.bind(null, void 0, {
        type: "timeout",
        target: b
    }), 12e4);
    b.onerror = i.bind(null, b.onerror),
    b.onload = i.bind(null, b.onload),
    n && document.head.appendChild(b)
}
,
moduleLoader.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }),
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
,
moduleLoader.nmd = function(e) {
    return e.paths = [],
    e.children || (e.children = []),
    e
}
,
moduleLoader.tt = function() {
    return void 0 === t && (t = {
        createScriptURL: function(e) {
            return e
        }
    },
    "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (t = trustedTypes.createPolicy("nextjs#bundler", t))),
    t
}
,
moduleLoader.tu = function(e) {
    return moduleLoader.tt().createScriptURL(e)
}
,
moduleLoader.p = "https://cdn-global-naus.popmart.com/global-web/naus-prod/20250506120204/_next/",
b = function(e, c, f, a) {
    var d = document.createElement("link");
    return d.rel = "stylesheet",
    d.type = "text/css",
    d.onerror = d.onload = function(t) {
        if (d.onerror = d.onload = null,
        "load" === t.type)
            f();
        else {
            var b = t && ("load" === t.type ? "missing" : t.type)
                , n = t && t.target && t.target.href || c
                , r = Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
            r.code = "CSS_CHUNK_LOAD_FAILED",
            r.type = b,
            r.request = n,
            d.parentNode.removeChild(d),
            a(r)
        }
    }
    ,
    d.href = c,
    document.head.appendChild(d),
    d
}
,
n = function(e, c) {
    for (var f = document.getElementsByTagName("link"), a = 0; a < f.length; a++) {
        var d = f[a]
            , t = d.getAttribute("data-href") || d.getAttribute("href");
        if ("stylesheet" === d.rel && (t === e || t === c))
            return d
    }
    for (var b = document.getElementsByTagName("style"), a = 0; a < b.length; a++) {
        var d = b[a]
            , t = d.getAttribute("data-href");
        if (t === e || t === c)
            return d
    }
}
,
r = {
    1303: 0
},
moduleLoader.f.miniCss = function(e, c) {
    r[e] ? c.push(r[e]) : 0 !== r[e] && ({
        669: 1,
        988: 1,
        1137: 1,
        1509: 1,
        1537: 1,
        1742: 1,
        1986: 1,
        2530: 1,
        2610: 1,
        2809: 1,
        2894: 1,
        3131: 1,
        3273: 1,
        3715: 1,
        3886: 1,
        3936: 1,
        3996: 1,
        4550: 1,
        4575: 1,
        5117: 1,
        5395: 1,
        5550: 1,
        6142: 1,
        6260: 1,
        6293: 1,
        6580: 1,
        6946: 1,
        7140: 1,
        7258: 1,
        7375: 1,
        7376: 1,
        7410: 1,
        7518: 1,
        7795: 1,
        8133: 1,
        8149: 1,
        8164: 1,
        8444: 1,
        8836: 1,
        9014: 1,
        9065: 1,
        9189: 1,
        9365: 1,
        9400: 1,
        9583: 1,
        9644: 1,
        9688: 1
    })[e] && c.push(r[e] = new Promise(function(c, f) {
        var a = moduleLoader.miniCssF(e)
            , d = moduleLoader.p + a;
        if (n(a, d))
            return c();
        b(e, d, c, f)
    }
    ).then(function() {
        r[e] = 0
    }, function(c) {
        throw delete r[e],
        c
    }))
}
,
o = {
    1303: 0,
    989: 0,
    9742: 0,
    1383: 0,
    2743: 0,
    3595: 0
},
moduleLoader.f.j = function(e, c) {
    var f = moduleLoader.o(o, e) ? o[e] : void 0;
    if (0 !== f) {
        if (f)
            c.push(f[2]);
        else if (/^(13[08]3|2743|3595|6946|9742|989)$/.test(e))
            o[e] = 0;
        else {
            var a = new Promise(function(c, a) {
                f = o[e] = [c, a]
            }
            );
            c.push(f[2] = a);
            var d = moduleLoader.p + moduleLoader.u(e)
                , t = Error();
            moduleLoader.l(d, function(c) {
                if (moduleLoader.o(o, e) && (0 !== (f = o[e]) && (o[e] = void 0),
                f)) {
                    var a = c && ("load" === c.type ? "missing" : c.type)
                        , d = c && c.target && c.target.src;
                    t.message = "Loading chunk " + e + " failed.\n(" + a + ": " + d + ")",
                    t.name = "ChunkLoadError",
                    t.type = a,
                    t.request = d,
                    f[1](t)
                }
            }, "chunk-" + e, e)
        }
    }
}
,
moduleLoader.O.j = function(e) {
    return 0 === o[e]
}
,
u = function(e, c) {
    var f, a, d = c[0], t = c[1], b = c[2], n = 0;
    if (d.some(function(e) {
        return 0 !== o[e]
    })) {
        for (f in t)
            moduleLoader.o(t, f) && (moduleLoader.m[f] = t[f]);
        if (b)
            var r = b(moduleLoader)
    }
    for (e && e(c); n < d.length; n++)
        a = d[n],
        moduleLoader.o(o, a) && o[a] && o[a][0](),
        o[a] = 0;
    return moduleLoader.O(r)
}
,
(i = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(u.bind(null, 0)),
i.push = u.bind(null, i.push.bind(i)),
moduleLoader.nc = void 0
// END OF MODULE LOADER DEFINITION - DO NOT TOUCH



const PopmartSet = {
    LEAGUE_ARCANE: 209,
    COCA_COLA: 171,
    BIG_INTO_ENERGY: 195,
    EXCITING_MACARON: 40,
    HUG_YOU: 220
    //Add the ID of set you want here. Can be found in the URL when picking a blindbox

}

const STATUS = {
    SUCCESS: 0,
    BOUGHT: 1,
    RESERVED: 2

}

set = PopmartSet.LEAGUE_ARCANE //Determines the set to find

const JITTER = 200


async function sleep(ms) { //Avoid bot detection by jittering the API calls
    return new Promise((resolve) => setTimeout(resolve,delay(ms, JITTER)))
}

function delay(rate, jitter) {
    return rate + Math.random() * jitter * 2
}

class BubuClient {
    constructor() {
        this.client = moduleLoader(55874) //Hard-coded value. Do not change this
    }

    async getBoxSet() {
        try {
            const boxes = await this.client.getBigBoxExtract({
                spu_ext_id: set
            })
            if (!this.#checkEmptySet(boxes)) {
                return this.#availableBoxes(boxes)
            } else {
                console.log("Blind box set empty. Looking for another set...")
            }
        } catch (e) {
            console.log("Error getting a box set. Retrying...")
            console.log(e)
        }
            
    }

    #availableBoxes(boxes) {
        return boxes.box_list.filter((box) => box.state === STATUS.SUCCESS && box.box_no !== '')
    }
    
    #checkEmptySet(boxes) {
        return boxes.set_no === ''
    }

    async grabOneBox(boxSelection) {
        for (const box of boxSelection) {
            await sleep(1000)
            const box_choice = box.box_no
            console.log(`Choosing this box: ${box_choice}`)
            try {
                const box_reservation = await this.client.getSmallBoxDetail({
                    next_box_no: box_choice,
                    load_type: "load"
                })
                if (box_reservation.code === "OK"){
                    console.log(`https://www.popmart.com/us/pop-now/box/${set}?boxNo=${encodeURIComponent(box_choice)}`)
                    return
                } else {
                    console.log("Box is reserved. Trying another box...")
                }
                
            } catch (e) {
                console.log("Error getting a single box from available boxes. Retrying...")
                console.log(e)
            }
            await sleep(1000)
        }
        console.log("No box available in set")
    
    }

}
await sleep(1000)
const client = new BubuClient()

var cycle = 0;
while (true) {
    console.log(`cycle ${cycle}`)
    const boxes = await client.getBoxSet()
    if (boxes.length !== 0) {
        client.grabOneBox(boxes)
        break
    } else {
        console.log("All boxes reserved/bought. Trying another...")
    }
    ++cycle
    await sleep(1000)
}
