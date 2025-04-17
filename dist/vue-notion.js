import { resolveComponent as c, openBlock as n, createBlock as d, resolveDynamicComponent as P, mergeProps as a, withCtx as b, createTextVNode as A, toDisplayString as C, createElementBlock as r, createVNode as u, normalizeClass as T, Fragment as I, renderList as B, createElementVNode as m, createCommentVNode as $, normalizeProps as f, guardReactiveProps as w, renderSlot as _, normalizeStyle as L, getCurrentInstance as fe } from "vue";
const ke = (e) => e.reduce((t, s) => t + s[0], ""), ge = (e) => {
  const t = [];
  let s, l = -1;
  return Object.keys(e).forEach((p) => {
    var o;
    (o = e[p].value.content) == null || o.forEach((i) => {
      var y, R;
      const g = (R = (y = e[i]) == null ? void 0 : y.value) == null ? void 0 : R.type;
      g && g !== s && (l++, s = g, t[l] = []), t[l].push(i);
    }), s = void 0;
  }), t;
}, D = (e, t) => {
  const l = ge(t).find((p) => p.includes(e));
  if (l)
    return l.indexOf(e) + 1;
}, _e = (e = "", t) => {
  const s = new URL(
    `https://www.notion.so${e.startsWith("/image") ? e : `/image/${encodeURIComponent(e)}`}`
  );
  if (t && !e.includes("/images/page-cover/")) {
    const l = t.value.parent_table === "space" ? "block" : t.value.parent_table;
    s.searchParams.set("table", l), s.searchParams.set("id", t.value.id), s.searchParams.set("cache", "v2");
  }
  return s.toString();
}, ye = (e = "") => (e = e.replace(/-/g, ""), `/${e}`), O = {
  blockMap: { type: Object, required: !0 },
  blockOverrides: { type: Object, default: () => ({}) },
  contentId: { type: String, required: !1 },
  contentIndex: { type: Number, default: 0 },
  embedAllow: { type: String, default: "fullscreen" },
  fullPage: { type: Boolean, default: !1 },
  hideList: { type: Array, default: () => [] },
  imageOptions: Object,
  katex: { type: Boolean, default: !1 },
  level: { type: Number, default: 0 },
  mapImageUrl: Function,
  mapPageUrl: Function,
  pageLinkOptions: Object,
  pageLinkTarget: { type: String, default: "_self" },
  prism: { type: Boolean, default: !1 },
  textLinkTarget: { type: String, default: "_blank" },
  todo: { type: Boolean, default: !1 }
}, v = {
  pass() {
    return {
      blockMap: this.blockMap,
      blockOverrides: this.blockOverrides,
      contentId: this.contentId,
      contentIndex: this.contentIndex,
      embedAllow: this.embedAllow,
      fullPage: this.fullPage,
      hideList: this.hideList,
      imageOptions: this.imageOptions,
      katex: this.katex,
      level: this.level,
      mapImageUrl: this.mapImageUrl,
      mapPageUrl: this.mapPageUrl,
      pageLinkOptions: this.pageLinkOptions,
      prism: this.prism,
      todo: this.todo
    };
  },
  alt() {
    var e;
    return (e = this.caption) == null ? void 0 : e[0][0];
  },
  block() {
    const e = this.contentId || Object.keys(this.blockMap)[0];
    return this.blockMap[e];
  },
  value() {
    var e;
    return (e = this.block) == null ? void 0 : e.value;
  },
  format() {
    var e;
    return (e = this.value) == null ? void 0 : e.format;
  },
  f() {
    var e, t, s, l, p, o, i;
    return {
      block_aspect_ratio: (e = this.format) == null ? void 0 : e.block_aspect_ratio,
      block_height: ((t = this.format) == null ? void 0 : t.block_height) || 1,
      block_width: ((s = this.format) == null ? void 0 : s.block_width) || 1,
      block_color: (l = this.format) == null ? void 0 : l.block_color,
      bookmark_icon: (p = this.format) == null ? void 0 : p.bookmark_icon,
      bookmark_cover: (o = this.format) == null ? void 0 : o.bookmark_cover,
      display_source: (i = this.format) == null ? void 0 : i.display_source
    };
  },
  icon() {
    var e;
    return ((e = this.format) == null ? void 0 : e.page_icon) || "";
  },
  width() {
    var e;
    return (e = this.format) == null ? void 0 : e.block_width;
  },
  properties() {
    var e;
    return (e = this.value) == null ? void 0 : e.properties;
  },
  caption() {
    var e;
    return (e = this.properties) == null ? void 0 : e.caption;
  },
  description() {
    var e;
    return (e = this.properties) == null ? void 0 : e.description;
  },
  src() {
    var e;
    return this.mapImageUrl((e = this.properties) == null ? void 0 : e.source[0][0], this.block);
  },
  title() {
    var e;
    return (e = this.properties) == null ? void 0 : e.title;
  },
  type() {
    var e;
    return (e = this.value) == null ? void 0 : e.type;
  },
  visible() {
    return !this.hideList.includes(this.type);
  },
  hasPageLinkOptions() {
    var e, t;
    return ((e = this.pageLinkOptions) == null ? void 0 : e.component) && ((t = this.pageLinkOptions) == null ? void 0 : t.href);
  },
  parent() {
    var e;
    return this.blockMap[(e = this.value) == null ? void 0 : e.parent_id];
  }
}, k = {
  props: O,
  computed: v,
  methods: {
    getTextContent: ke,
    isType(e) {
      return Array.isArray(e) ? this.visible && e.includes(this.type) : this.visible && this.type === e;
    },
    blockColorClass(e = "") {
      var s;
      const t = (s = this.format) == null ? void 0 : s.block_color;
      return t ? `notion-${t}${e}` : void 0;
    },
    pageLinkProps(e) {
      var t;
      return {
        [((t = this.pageLinkOptions) == null ? void 0 : t.href) || "href"]: this.mapPageUrl(e)
      };
    }
  }
}, h = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, p] of t)
    s[l] = p;
  return s;
}, $e = {
  extends: k,
  name: "NotionDecorator",
  props: { ...O, content: Array },
  computed: {
    text() {
      var e;
      return (e = this.content) == null ? void 0 : e[0];
    },
    decorators() {
      var e;
      return ((e = this.content) == null ? void 0 : e[1]) || [];
    },
    decoratorKey() {
      var e, t;
      return (t = (e = this.decorators) == null ? void 0 : e[0]) == null ? void 0 : t[0];
    },
    decoratorValue() {
      var e, t;
      return (t = (e = this.decorators) == null ? void 0 : e[0]) == null ? void 0 : t[1];
    },
    unappliedDecorators() {
      const e = JSON.parse(
        JSON.stringify(this.decorators || [])
      );
      return e.shift(), e;
    },
    nextContent() {
      return [this.text, this.unappliedDecorators];
    },
    isPageLink() {
      return this.text === "‣";
    },
    isInlinePageLink() {
      return this.decoratorValue && this.decoratorValue[0] === "/";
    },
    pageLinkTitle() {
      var e, t, s, l, p, o;
      return ((o = (p = (l = (s = (t = (e = this.blockMap) == null ? void 0 : e[this.decoratorValue]) == null ? void 0 : t.value) == null ? void 0 : s.properties) == null ? void 0 : l.title) == null ? void 0 : p[0]) == null ? void 0 : o[0]) || "link";
    },
    target() {
      return this.type === "page" ? this.pageLinkTarget : this.textLinkTarget;
    }
  }
}, be = ["target", "href"], Ne = ["target", "href"], ve = ["target", "href"], Te = { key: 5 }, Pe = {
  key: 7,
  class: "notion-inline-code"
}, Ce = { key: 8 }, Le = { key: 9 }, Re = { key: 10 }, Oe = {
  key: 12,
  class: "notion-inline-code"
};
function we(e, t, s, l, p, o) {
  const i = c("NotionDecorator");
  return o.isPageLink && e.hasPageLinkOptions ? (n(), d(P(e.pageLinkOptions.component), a({
    key: 0,
    class: "notion-link"
  }, e.pageLinkProps(o.decoratorValue)), {
    default: b(() => [
      A(C(o.pageLinkTitle), 1)
    ]),
    _: 1
  }, 16)) : o.isPageLink ? (n(), r("a", {
    key: 1,
    class: "notion-link",
    target: e.pageLinkTarget,
    href: e.mapPageUrl(o.decoratorValue)
  }, C(o.pageLinkTitle), 9, be)) : o.decoratorKey === "a" && e.hasPageLinkOptions && o.isInlinePageLink ? (n(), d(P(e.pageLinkOptions.component), a({
    key: 2,
    class: "notion-link"
  }, e.pageLinkProps(o.decoratorValue.slice(1))), {
    default: b(() => [
      u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
    ]),
    _: 1
  }, 16)) : o.decoratorKey === "a" && o.isInlinePageLink ? (n(), r("a", {
    key: 3,
    class: "notion-link",
    target: o.target,
    href: e.mapPageUrl(o.decoratorValue.slice(1))
  }, [
    u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
  ], 8, Ne)) : o.decoratorKey === "a" ? (n(), r("a", {
    key: 4,
    class: "notion-link",
    target: o.target,
    href: o.decoratorValue
  }, [
    u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
  ], 8, ve)) : o.decorators.length === 0 ? (n(), r("span", Te, C(o.text), 1)) : o.decoratorKey === "h" ? (n(), r("span", {
    key: 6,
    class: T("notion-" + o.decoratorValue)
  }, [
    u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
  ], 2)) : o.decoratorKey === "c" ? (n(), r("code", Pe, [
    u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
  ])) : o.decoratorKey === "b" ? (n(), r("b", Ce, [
    u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
  ])) : o.decoratorKey === "i" ? (n(), r("em", Le, [
    u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
  ])) : o.decoratorKey === "s" ? (n(), r("s", Re, [
    u(i, a({ content: o.nextContent }, e.pass), null, 16, ["content"])
  ])) : o.decoratorKey === "e" && e.katex ? (n(), d(P("katex-element"), {
    key: 11,
    expression: o.decoratorValue
  }, null, 8, ["expression"])) : o.decoratorKey === "e" ? (n(), r("code", Oe, C(o.decoratorValue), 1)) : (n(), d(i, a({
    key: 13,
    content: o.nextContent
  }, e.pass), null, 16, ["content"]));
}
const j = /* @__PURE__ */ h($e, [["render", we]]), Ie = {
  extends: k,
  name: "NotionTextRenderer",
  props: { ...O, text: Array },
  components: {
    NotionDecorator: j
  }
};
function Se(e, t, s, l, p, o) {
  const i = c("NotionDecorator");
  return n(), r("span", null, [
    (n(!0), r(I, null, B(s.text, (g, y) => (n(), d(i, a({
      key: y,
      content: g
    }, e.pass), null, 16, ["content"]))), 128))
  ]);
}
const N = /* @__PURE__ */ h(Ie, [["render", Se]]), Be = {
  extends: k,
  name: "NotionBookmark",
  components: { NotionTextRenderer: N }
}, je = { class: "notion-row" }, Ue = ["href"], Me = { class: "notion-bookmark-title" }, Ve = {
  key: 0,
  class: "notion-bookmark-description"
}, Ae = { class: "notion-bookmark-link" }, De = ["alt", "src"], qe = {
  key: 0,
  class: "notion-bookmark-image"
}, Fe = ["alt", "src"];
function He(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer");
  return n(), r("div", je, [
    m("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      class: T(["notion-bookmark", e.f.block_color && `notion-${e.f.block_color}`]),
      href: e.properties.link
    }, [
      m("div", null, [
        m("div", Me, [
          u(i, a({
            text: e.title || e.properties.link
          }, e.pass), null, 16, ["text"])
        ]),
        e.description ? (n(), r("div", Ve, [
          u(i, a({ text: e.description }, e.pass), null, 16, ["text"])
        ])) : $("", !0),
        m("div", Ae, [
          e.f.bookmark_icon ? (n(), r("img", {
            key: 0,
            alt: e.getTextContent(e.title || e.properties.link),
            src: e.f.bookmark_icon
          }, null, 8, De)) : $("", !0),
          m("div", null, [
            u(i, a({
              text: e.properties.link
            }, e.pass), null, 16, ["text"])
          ])
        ])
      ]),
      e.f.bookmark_cover ? (n(), r("div", qe, [
        m("img", {
          alt: e.getTextContent(e.title || e.properties.link),
          src: e.f.bookmark_cover
        }, null, 8, Fe)
      ])) : $("", !0)
    ], 10, Ue)
  ]);
}
const q = /* @__PURE__ */ h(Be, [["render", He]]), Ke = {
  extends: k,
  name: "NotionPageIcon",
  props: { ...O, big: Boolean }
}, Ee = ["src", "alt"], We = ["aria-label"];
function ze(e, t, s, l, p, o) {
  return e.icon.includes("http") ? (n(), r("img", {
    key: 0,
    class: T([
      e.format.page_cover && "notion-page-icon-offset",
      s.big ? "notion-page-icon-cover" : "notion-page-icon"
    ]),
    src: e.mapImageUrl(e.icon, e.block),
    alt: e.title ? e.getTextContent(e.title) : "Icon"
  }, null, 10, Ee)) : e.icon ? (n(), r("span", {
    key: 1,
    role: "img",
    "aria-label": e.icon,
    class: T([
      "notion-emoji",
      e.format.page_cover && "notion-page-icon-offset",
      s.big ? "notion-page-icon-cover" : "notion-page-icon"
    ])
  }, C(e.icon), 11, We)) : $("", !0);
}
const U = /* @__PURE__ */ h(Ke, [["render", ze]]), Qe = {
  extends: k,
  name: "NotionCallout",
  components: {
    NotionPageIcon: U,
    NotionTextRenderer: N
  }
}, Je = { class: "notion-callout-text" };
function Ge(e, t, s, l, p, o) {
  const i = c("NotionPageIcon"), g = c("NotionTextRenderer");
  return n(), r("div", {
    class: T(["notion-callout", e.blockColorClass(), e.blockColorClass("_co")])
  }, [
    m("div", null, [
      u(i, f(w(e.pass)), null, 16)
    ]),
    m("div", Je, [
      u(g, a({ text: e.title }, e.pass), null, 16, ["text"]),
      _(e.$slots, "default")
    ])
  ], 2);
}
const F = /* @__PURE__ */ h(Qe, [["render", Ge]]), Xe = {
  extends: k,
  name: "NotionCode",
  props: { ...O, overrideLang: String, overrideLangClass: String },
  computed: {
    ...v,
    lang() {
      var e, t, s, l;
      return this.overrideLang || ((l = (s = (t = (e = this.properties) == null ? void 0 : e.language) == null ? void 0 : t[0]) == null ? void 0 : s[0]) == null ? void 0 : l.toLowerCase());
    },
    langClass() {
      return this.overrideLangClass || `language-${this.lang}`;
    }
  }
};
function Ye(e, t, s, l, p, o) {
  return n(), r("pre", {
    class: T(["notion-code", o.langClass])
  }, [
    m("code", {
      class: T(o.langClass)
    }, C(e.properties.title[0][0]), 3)
  ], 2);
}
const M = /* @__PURE__ */ h(Xe, [["render", Ye]]), V = 46, Ze = {
  name: "NotionColumn",
  props: ["format"],
  computed: {
    columnStyle() {
      return {
        width: `calc((100% - ${(Number((1 / this.format.column_ratio).toFixed(0)) - 1) * V}px) * ${this.format.column_ratio})`
      };
    },
    spacerStyle() {
      return { width: `${V}px` };
    }
  }
};
function xe(e, t, s, l, p, o) {
  return n(), r(I, null, [
    m("div", {
      class: "notion-column",
      style: L(o.columnStyle)
    }, [
      _(e.$slots, "default")
    ], 4),
    m("div", {
      class: "notion-spacer",
      style: L(o.spacerStyle)
    }, null, 4)
  ], 64);
}
const H = /* @__PURE__ */ h(Ze, [["render", xe]]), et = {
  extends: k,
  name: "NotionEquation",
  components: { NotionCode: M },
  computed: {
    ...v,
    equation() {
      var e, t, s;
      return (s = (t = (e = this.properties) == null ? void 0 : e.title) == null ? void 0 : t[0]) == null ? void 0 : s[0];
    }
  }
}, tt = { key: 0 };
function ot(e, t, s, l, p, o) {
  const i = c("NotionCode");
  return e.katex ? (n(), r("div", tt, [
    (n(), d(P("katex-element"), { expression: o.equation }, null, 8, ["expression"]))
  ])) : (n(), d(i, a({ key: 1 }, e.pass, {
    overrideLang: "latex",
    overrideLangClass: "language-latex"
  }), null, 16));
}
const S = /* @__PURE__ */ h(et, [["render", ot]]), nt = {
  extends: k,
  name: "NotionAsset",
  computed: {
    ...v,
    src() {
      return this.type === "figma" ? this.properties.source[0][0] : this.f.display_source;
    },
    style() {
      return {
        paddingBottom: `${(this.f.block_aspect_ratio || this.f.block_height / this.f.block_width) * 100}%`,
        position: "relative"
      };
    }
  }
}, st = ["src", "allow"];
function at(e, t, s, l, p, o) {
  return n(), r("div", {
    style: L(o.style)
  }, [
    m("iframe", {
      class: "notion-image-inset",
      src: o.src,
      allow: e.embedAllow
    }, null, 8, st)
  ], 4);
}
const K = /* @__PURE__ */ h(nt, [["render", at]]), rt = {
  extends: k,
  name: "NotionImage",
  computed: {
    ...v,
    hasImageComponent() {
      var e;
      return !!((e = this.imageOptions) != null && e.component);
    },
    imageProps() {
      var s;
      const { component: e, ...t } = this.imageOptions || {};
      return {
        ...t,
        [((s = this.imageOptions) == null ? void 0 : s.src) || "src"]: this.src
      };
    },
    style() {
      return {
        paddingBottom: `${(this.f.block_aspect_ratio || this.f.block_height / this.f.block_width) * 100}%`,
        position: "relative"
      };
    }
  }
}, it = ["alt"], lt = ["alt"];
function ct(e, t, s, l, p, o) {
  return e.f.block_aspect_ratio ? (n(), r("div", {
    key: 0,
    style: L(o.style)
  }, [
    o.hasImageComponent ? (n(), d(P(e.imageOptions.component), a({
      key: 0,
      class: "notion-image-inset",
      alt: e.alt || "Notion image"
    }, o.imageProps), null, 16, ["alt"])) : (n(), r("img", a({
      key: 1,
      class: "notion-image-inset",
      alt: e.alt || "Notion image"
    }, o.imageProps), null, 16, it))
  ], 4)) : o.hasImageComponent ? (n(), d(P(e.imageOptions.component), a({
    key: 1,
    alt: e.alt || "Notion image"
  }, o.imageProps), null, 16, ["alt"])) : (n(), r("img", a({
    key: 2,
    alt: e.alt
  }, o.imageProps), null, 16, lt));
}
const E = /* @__PURE__ */ h(rt, [["render", ct]]), pt = {
  extends: k,
  name: "NotionFigure",
  components: {
    NotionAsset: K,
    NotionImage: E,
    NotionTextRenderer: N
  }
}, dt = {
  key: 2,
  class: "notion-image-caption"
};
function ut(e, t, s, l, p, o) {
  const i = c("NotionImage"), g = c("NotionAsset"), y = c("NotionTextRenderer");
  return n(), r("figure", {
    class: "notion-asset-wrapper",
    style: L(e.width)
  }, [
    e.isType("image") ? (n(), d(i, f(a({ key: 0 }, e.pass)), null, 16)) : e.isType(["embed", "video", "figma"]) ? (n(), d(g, f(a({ key: 1 }, e.pass)), null, 16)) : $("", !0),
    e.caption ? (n(), r("figcaption", dt, [
      u(y, a({ text: e.caption }, e.pass), null, 16, ["text"])
    ])) : $("", !0)
  ], 4);
}
const W = /* @__PURE__ */ h(pt, [["render", ut]]), mt = {
  extends: k,
  name: "NotionHeader",
  components: { NotionTextRenderer: N }
}, ht = {
  key: 0,
  class: "notion-h1"
}, ft = {
  key: 1,
  class: "notion-h2"
}, kt = {
  key: 2,
  class: "notion-h3"
};
function gt(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer");
  return e.type === "header" ? (n(), r("h1", ht, [
    u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
  ])) : e.type === "sub_header" ? (n(), r("h2", ft, [
    u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
  ])) : e.type === "sub_sub_header" ? (n(), r("h3", kt, [
    u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
  ])) : $("", !0);
}
const z = /* @__PURE__ */ h(mt, [["render", gt]]), _t = {
  extends: k,
  name: "NotionNestedList",
  computed: {
    ...v,
    start() {
      var e;
      return D((e = this.value) == null ? void 0 : e.id, this.blockMap);
    }
  }
}, yt = {
  key: 0,
  class: "notion-list notion-list-disc"
}, $t = {
  key: 1,
  class: "notion-list notion-list-numbered"
};
function bt(e, t, s, l, p, o) {
  return e.type === "bulleted_list" ? (n(), r("ul", yt, [
    _(e.$slots, "default")
  ])) : (n(), r("ol", $t, [
    _(e.$slots, "default")
  ]));
}
const Q = /* @__PURE__ */ h(_t, [["render", bt]]), Nt = {
  extends: k,
  name: "NotionList",
  components: { NotionNestedList: Q, NotionTextRenderer: N },
  computed: {
    ...v,
    start() {
      var e;
      return D((e = this.value) == null ? void 0 : e.id, this.blockMap);
    },
    isTopLevel() {
      var e, t, s;
      return this.type !== ((s = (t = this.blockMap[(e = this.value) == null ? void 0 : e.parent_id]) == null ? void 0 : t.value) == null ? void 0 : s.type);
    }
  }
}, vt = {
  key: 0,
  class: "notion-list notion-list-disc"
}, Tt = ["start"], Pt = { key: 2 };
function Ct(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer"), g = c("NotionNestedList");
  return o.isTopLevel && e.type === "bulleted_list" ? (n(), r("ul", vt, [
    m("li", null, [
      u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
    ]),
    e.value.content ? (n(), d(g, f(a({ key: 0 }, e.pass)), {
      default: b(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 16)) : $("", !0)
  ])) : o.isTopLevel && e.type === "numbered_list" ? (n(), r("ol", {
    key: 1,
    class: "notion-list notion-list-numbered",
    start: o.start
  }, [
    m("li", null, [
      u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
    ]),
    e.value.content ? (n(), d(g, f(a({ key: 0 }, e.pass)), {
      default: b(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 16)) : $("", !0)
  ], 8, Tt)) : (n(), r("span", Pt, [
    m("li", null, [
      u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
    ]),
    e.value.content ? (n(), d(g, f(a({ key: 0 }, e.pass)), {
      default: b(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 16)) : $("", !0)
  ]));
}
const J = /* @__PURE__ */ h(Nt, [["render", Ct]]), Lt = {
  extends: k,
  name: "NotionPageHeader",
  components: { Decorator: j }
}, Rt = { class: "notion-page-header" }, Ot = /* @__PURE__ */ m("div", { class: "notion-nav-breadcrumbs" }, null, -1), wt = [
  Ot
];
function It(e, t, s, l, p, o) {
  return n(), r("header", Rt, wt);
}
const G = /* @__PURE__ */ h(Lt, [["render", It]]), St = {
  extends: k,
  name: "NotionPage",
  components: { NotionPageHeader: G, NotionPageIcon: U, NotionTextRenderer: N },
  computed: {
    ...v,
    coverStyle() {
      return { objectPosition: `center ${(1 - (this.format.page_cover_position || 0.5)) * 100}%` };
    }
  }
}, Bt = {
  key: 0,
  class: "notion"
}, jt = ["alt", "src"], Ut = { class: "notion-title" }, Mt = {
  key: 1,
  class: "notion"
}, Vt = { class: "notion-page-icon" }, At = { class: "notion-page-text" }, Dt = ["target", "href"], qt = { class: "notion-page-icon" }, Ft = { class: "notion-page-text" };
function Ht(e, t, s, l, p, o) {
  const i = c("NotionPageIcon"), g = c("NotionTextRenderer");
  return e.level === 0 && e.fullPage ? (n(), r("div", Bt, [
    e.format && e.format.page_cover ? (n(), r("img", {
      key: 0,
      class: "notion-page-cover",
      style: L(o.coverStyle),
      alt: e.getTextContent(e.title),
      src: e.mapImageUrl(e.format.page_cover, e.block)
    }, null, 12, jt)) : $("", !0),
    m("main", {
      class: T([
        "notion-page",
        e.format && !e.format.page_cover && "notion-page-offset",
        e.format && e.format.page_full_width && "notion-full-width",
        e.format && e.format.page_small_text && "notion-small-text"
      ])
    }, [
      u(i, a(e.pass, { big: "" }), null, 16),
      m("div", Ut, [
        u(g, a({ text: e.title }, e.pass), null, 16, ["text"])
      ]),
      _(e.$slots, "default")
    ], 2)
  ])) : e.level === 0 ? (n(), r("main", Mt, [
    _(e.$slots, "default")
  ])) : e.hasPageLinkOptions ? (n(), d(P(e.pageLinkOptions.component), a({
    key: 2,
    class: "notion-page-link"
  }, e.pageLinkProps(e.value.id)), {
    default: b(() => [
      m("div", Vt, [
        u(i, f(w(e.pass)), null, 16)
      ]),
      m("div", At, [
        u(g, a({ text: e.title }, e.pass), null, 16, ["text"])
      ])
    ]),
    _: 1
  }, 16)) : (n(), r("a", {
    key: 3,
    class: "notion-page-link",
    target: e.pageLinkTarget,
    href: e.mapPageUrl(e.value.id)
  }, [
    m("div", qt, [
      u(i, f(w(e.pass)), null, 16)
    ]),
    m("div", Ft, [
      u(g, a({ text: e.title }, e.pass), null, 16, ["text"])
    ])
  ], 8, Dt));
}
const X = /* @__PURE__ */ h(St, [["render", Ht]]), Kt = {
  extends: k,
  name: "NotionQuote",
  components: { NotionTextRenderer: N }
}, Et = {
  key: 0,
  class: "notion-quote"
};
function Wt(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer");
  return e.properties ? (n(), r("blockquote", Et, [
    u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
  ])) : $("", !0);
}
const Y = /* @__PURE__ */ h(Kt, [["render", Wt]]), zt = {
  extends: k,
  name: "NotionSyncPointer",
  computed: {
    ...v,
    referencePointerId() {
      var e, t;
      return (t = (e = this.format) == null ? void 0 : e.transclusion_reference_pointer) == null ? void 0 : t.id;
    }
  }
};
function Qt(e, t, s, l, p, o) {
  const i = c("NotionRenderer");
  return n(), d(i, a(e.pass, {
    blockMap: e.blockMap,
    contentId: o.referencePointerId
  }), null, 16, ["blockMap", "contentId"]);
}
const Jt = /* @__PURE__ */ h(zt, [["render", Qt]]), Gt = {
  extends: k,
  name: "NotionTable"
}, Xt = { class: "notion-simple-table-wrapper" }, Yt = { class: "notion-simple-table" };
function Zt(e, t, s, l, p, o) {
  return n(), r("div", Xt, [
    m("table", Yt, [
      m("tbody", null, [
        _(e.$slots, "default")
      ])
    ])
  ]);
}
const Z = /* @__PURE__ */ h(Gt, [["render", Zt]]), xt = {
  extends: k,
  name: "NotionTableRow",
  components: {
    NotionTextRenderer: N
  },
  computed: {
    ...v,
    hasHeaderColumn() {
      var e, t, s;
      return (s = (t = (e = this.parent) == null ? void 0 : e.value) == null ? void 0 : t.format) == null ? void 0 : s.table_block_column_header;
    },
    hasHeaderRow() {
      var e, t, s;
      return (s = (t = (e = this.parent) == null ? void 0 : e.value) == null ? void 0 : t.format) == null ? void 0 : s.table_block_row_header;
    },
    columns() {
      var e, t, s;
      return (s = (t = (e = this.parent) == null ? void 0 : e.value) == null ? void 0 : t.format) == null ? void 0 : s.table_block_column_order;
    }
  },
  methods: {
    cell(e) {
      var t;
      return ((t = this == null ? void 0 : this.properties) == null ? void 0 : t[e]) ?? [[" ", !1]];
    },
    isHeader(e) {
      return this.hasHeaderColumn && this.contentIndex == 0 || this.hasHeaderRow && e == 0;
    }
  }
}, eo = { class: "notion-simple-table-row" }, to = { class: "notion-simple-table-cell-text" };
function oo(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer");
  return n(), r("tr", eo, [
    (n(!0), r(I, null, B(o.columns, (g, y) => (n(), r("td", {
      key: y,
      class: "notion-simple-table-data"
    }, [
      m("div", {
        class: T({ "notion-simple-table-header": o.isHeader(y) })
      }, [
        m("div", to, [
          u(i, a({
            text: o.cell(g)
          }, e.pass), null, 16, ["text"])
        ])
      ], 2)
    ]))), 128))
  ]);
}
const x = /* @__PURE__ */ h(xt, [["render", oo]]), no = {
  extends: k,
  name: "NotionText",
  components: { NotionTextRenderer: N }
}, so = {
  key: 1,
  class: "notion-blank"
};
function ao(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer");
  return e.properties ? (n(), r("p", {
    key: 0,
    class: T(["notion-text", e.blockColorClass()])
  }, [
    u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
  ], 2)) : (n(), r("div", so, " "));
}
const ee = /* @__PURE__ */ h(no, [["render", ao]]), ro = {
  extends: k,
  name: "NotionTodo",
  components: {
    NotionTextRenderer: N
  }
}, io = ["value", "checked"];
function lo(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer");
  return n(), r("div", null, [
    m("input", {
      type: "checkbox",
      value: e.title,
      checked: e.properties.checked,
      disabled: "disabled"
    }, null, 8, io),
    m("label", null, [
      u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
    ])
  ]);
}
const te = /* @__PURE__ */ h(ro, [["render", lo]]), co = {
  extends: k,
  name: "NotionToggle",
  components: { NotionTextRenderer: N }
}, po = { class: "notion-toggle" };
function uo(e, t, s, l, p, o) {
  const i = c("NotionTextRenderer");
  return n(), r("details", po, [
    m("summary", null, [
      u(i, a({ text: e.title }, e.pass), null, 16, ["text"])
    ]),
    m("div", null, [
      _(e.$slots, "default")
    ])
  ]);
}
const oe = /* @__PURE__ */ h(co, [["render", uo]]), mo = {
  extends: k,
  name: "NotionBlock",
  components: {
    NotionBookmark: q,
    NotionCallout: F,
    NotionCode: M,
    NotionColumn: H,
    NotionEquation: S,
    NotionEquation: S,
    NotionFigure: W,
    NotionHeader: z,
    NotionList: J,
    NotionPage: X,
    NotionQuote: Y,
    NotionSyncPointer: Jt,
    NotionTable: Z,
    NotionTableRow: x,
    NotionText: ee,
    NotionTodo: te,
    NotionToggle: oe
  },
  computed: {
    ...v,
    isRendererRegistered() {
      return "NotionRenderer" in fe().appContext.components;
    }
  }
}, ho = { key: 1 }, fo = {
  key: 11,
  class: "notion-row"
}, ko = {
  key: 17,
  class: "notion-sync-block"
}, go = {
  key: 19,
  class: "notion-hr"
}, _o = { key: 20 };
function yo(e, t, s, l, p, o) {
  const i = c("NotionPage"), g = c("NotionHeader"), y = c("NotionBookmark"), R = c("NotionCallout"), ne = c("NotionCode"), se = c("NotionEquation"), ae = c("NotionText"), re = c("NotionQuote"), ie = c("NotionTodo"), le = c("NotionToggle"), ce = c("NotionColumn"), pe = c("NotionList"), de = c("NotionFigure"), ue = c("NotionTable"), me = c("NotionSyncPointer"), he = c("NotionTableRow");
  return e.blockOverrides.hasOwnProperty(e.type) ? (n(), d(P(e.blockOverrides[e.type]), f(a({ key: 0 }, e.pass)), null, 16)) : e.isType("page") ? (n(), r("div", ho, [
    u(i, f(w(e.pass)), {
      default: b(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 16)
  ])) : e.isType(["header", "sub_header", "sub_sub_header"]) ? (n(), d(g, f(a({ key: 2 }, e.pass)), null, 16)) : e.isType("bookmark") ? (n(), d(y, f(a({ key: 3 }, e.pass)), null, 16)) : e.isType("callout") ? (n(), d(R, f(a({ key: 4 }, e.pass)), {
    default: b(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16)) : e.isType("code") ? (n(), d(ne, f(a({ key: 5 }, e.pass)), null, 16)) : e.isType("equation") ? (n(), d(se, f(a({ key: 6 }, e.pass)), null, 16)) : e.isType("text") ? (n(), d(ae, f(a({ key: 7 }, e.pass)), null, 16)) : e.isType("quote") ? (n(), d(re, f(a({ key: 8 }, e.pass)), null, 16)) : e.isType("to_do") ? (n(), d(ie, f(a({ key: 9 }, e.pass)), null, 16)) : e.isType("toggle") ? (n(), d(le, f(a({ key: 10 }, e.pass)), {
    default: b(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16)) : e.isType("column_list") ? (n(), r("div", fo, [
    _(e.$slots, "default")
  ])) : e.isType("column") ? (n(), d(ce, {
    key: 12,
    format: e.format
  }, {
    default: b(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["format"])) : e.isType(["bulleted_list", "numbered_list"]) ? (n(), d(pe, f(a({ key: 13 }, e.pass)), {
    default: b(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16)) : e.isType(["image", "embed", "figma", "video", "audio"]) ? (n(), d(de, f(a({ key: 14 }, e.pass)), null, 16)) : e.isType("table") ? (n(), d(ue, f(a({ key: 15 }, e.pass)), {
    default: b(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 16)) : o.isRendererRegistered && e.isType("transclusion_reference") ? (n(), d(me, f(a({ key: 16 }, e.pass)), null, 16)) : o.isRendererRegistered && e.isType("transclusion_container") ? (n(), r("div", ko, [
    _(e.$slots, "default")
  ])) : e.isType("table_row") ? (n(), d(he, f(a({ key: 18 }, e.pass)), null, 16)) : e.isType("divider") ? (n(), r("hr", go)) : e.todo && e.visible ? (n(), r("div", _o, [
    A(" todo: " + C(e.type) + " ", 1),
    _(e.$slots, "default")
  ])) : $("", !0);
}
const $o = /* @__PURE__ */ h(mo, [["render", yo]]), bo = {
  extends: k,
  name: "NotionRenderer",
  components: {
    NotionBlock: $o
  },
  props: {
    blockMap: [Object],
    contentId: String,
    contentIndex: { type: Number, default: 0 },
    fullPage: { type: Boolean, default: !1 },
    hideList: { type: Array, default: () => [] },
    level: { type: Number, default: 0 },
    mapImageUrl: { type: Function, default: _e },
    mapPageUrl: { type: Function, default: ye },
    pageLinkOptions: Object,
    imageOptions: Object,
    prism: { type: Boolean, default: !1 },
    todo: { type: Boolean, default: !1 }
  }
};
function No(e, t, s, l, p, o) {
  const i = c("NotionRenderer", !0), g = c("NotionBlock");
  return s.blockMap && e.value ? (n(), d(g, f(a({ key: 0 }, e.pass)), {
    default: b(() => [
      (n(!0), r(I, null, B(e.value.content, (y, R) => (n(), d(i, a(e.pass, {
        key: y,
        level: s.level + 1,
        "content-id": y,
        "content-index": R
      }), null, 16, ["level", "content-id", "content-index"]))), 128))
    ]),
    _: 1
  }, 16)) : $("", !0);
}
const vo = /* @__PURE__ */ h(bo, [["render", No]]), To = 46, Po = {
  name: "NotionColumnSpacer",
  computed: {
    spacerStyle() {
      return { width: `${To}px` };
    }
  }
};
function Co(e, t, s, l, p, o) {
  return n(), r("div", {
    class: "notion-spacer",
    style: L(o.spacerStyle)
  }, null, 4);
}
const Lo = /* @__PURE__ */ h(Po, [["render", Co]]), Ro = {
  functional: !0,
  render: (e, t) => t.children
}, Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NotionAsset: K,
  NotionBookmark: q,
  NotionCallout: F,
  NotionCode: M,
  NotionColumn: H,
  NotionColumnSpacer: Lo,
  NotionDecorator: j,
  NotionEquation: S,
  NotionFigure: W,
  NotionFragment: Ro,
  NotionHeader: z,
  NotionImage: E,
  NotionList: J,
  NotionNestedList: Q,
  NotionPage: X,
  NotionPageHeader: G,
  NotionPageIcon: U,
  NotionQuote: Y,
  NotionRenderer: vo,
  NotionTable: Z,
  NotionTableRow: x,
  NotionText: ee,
  NotionTextRenderer: N,
  NotionTodo: te,
  NotionToggle: oe
}, Symbol.toStringTag, { value: "Module" })), Io = async (e, t = "https://notion-cloudflare-worker.hyepago.workers.dev/v1") => await fetch(`${t}/table/${e}`).then((s) => s.json()), So = async (e, t = "https://notion-cloudflare-worker.hyepago.workers.dev/v1") => await fetch(`${t}/page/${e}`).then((s) => s.json()), Bo = {
  install: (e) => {
    Object.entries(Oo).forEach(([t, s]) => {
      e.component(t, s);
    });
  }
};
export {
  k as Blockable,
  K as NotionAsset,
  q as NotionBookmark,
  F as NotionCallout,
  M as NotionCode,
  H as NotionColumn,
  Lo as NotionColumnSpacer,
  j as NotionDecorator,
  S as NotionEquation,
  W as NotionFigure,
  Ro as NotionFragment,
  z as NotionHeader,
  E as NotionImage,
  J as NotionList,
  Q as NotionNestedList,
  X as NotionPage,
  G as NotionPageHeader,
  U as NotionPageIcon,
  Y as NotionQuote,
  vo as NotionRenderer,
  Z as NotionTable,
  x as NotionTableRow,
  ee as NotionText,
  N as NotionTextRenderer,
  te as NotionTodo,
  oe as NotionToggle,
  v as blockComputed,
  O as blockProps,
  Bo as default,
  _e as defaultMapImageUrl,
  ye as defaultMapPageUrl,
  D as getListNumber,
  So as getPageBlocks,
  Io as getPageTable,
  ke as getTextContent
};
