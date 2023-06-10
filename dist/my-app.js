function z() {
}
function ue(e) {
  return e();
}
function we() {
  return /* @__PURE__ */ Object.create(null);
}
function nt(e) {
  e.forEach(ue);
}
function Pt(e) {
  return typeof e == "function";
}
function Nt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function un(e) {
  return Object.keys(e).length === 0;
}
const dn = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in dn;
function v(e, t) {
  e.appendChild(t);
}
function q(e, t, n) {
  e.insertBefore(t, n || null);
}
function tt(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function F(e) {
  return document.createElement(e);
}
function de(e) {
  return document.createTextNode(e);
}
function W() {
  return de(" ");
}
function fn() {
  return de("");
}
function zt(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function pn(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function y(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function mn(e) {
  return Array.from(e.childNodes);
}
function hn(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function jt(e, t) {
  e.value = t ?? "";
}
function qt(e) {
  const t = {};
  for (const n of e)
    t[n.name] = n.value;
  return t;
}
let kt;
function yt(e) {
  kt = e;
}
function gn() {
  if (!kt)
    throw new Error("Function called outside component initialization");
  return kt;
}
function Je(e) {
  gn().$$.on_mount.push(e);
}
const at = [], Ee = [];
let ft = [];
const ke = [], bn = /* @__PURE__ */ Promise.resolve();
let se = !1;
function $n() {
  se || (se = !0, bn.then(ht));
}
function le(e) {
  ft.push(e);
}
const ne = /* @__PURE__ */ new Set();
let it = 0;
function ht() {
  if (it !== 0)
    return;
  const e = kt;
  do {
    try {
      for (; it < at.length; ) {
        const t = at[it];
        it++, yt(t), xn(t.$$);
      }
    } catch (t) {
      throw at.length = 0, it = 0, t;
    }
    for (yt(null), at.length = 0, it = 0; Ee.length; )
      Ee.pop()();
    for (let t = 0; t < ft.length; t += 1) {
      const n = ft[t];
      ne.has(n) || (ne.add(n), n());
    }
    ft.length = 0;
  } while (at.length);
  for (; ke.length; )
    ke.pop()();
  se = !1, ne.clear(), yt(e);
}
function xn(e) {
  if (e.fragment !== null) {
    e.update(), nt(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(le);
  }
}
function _n(e) {
  const t = [], n = [];
  ft.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), ft = t;
}
const It = /* @__PURE__ */ new Set();
let Y;
function Ge() {
  Y = {
    r: 0,
    c: [],
    p: Y
    // parent group
  };
}
function Ue() {
  Y.r || nt(Y.c), Y = Y.p;
}
function U(e, t) {
  e && e.i && (It.delete(e), e.i(t));
}
function et(e, t, n, r) {
  if (e && e.o) {
    if (It.has(e))
      return;
    It.add(e), Y.c.push(() => {
      It.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
const vn = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...vn];
function fe(e) {
  e && e.c();
}
function Jt(e, t, n, r) {
  const { fragment: i, after_update: a } = e.$$;
  i && i.m(t, n), r || le(() => {
    const o = e.$$.on_mount.map(ue).filter(Pt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : nt(o), e.$$.on_mount = [];
  }), a.forEach(le);
}
function Gt(e, t) {
  const n = e.$$;
  n.fragment !== null && (_n(n.after_update), nt(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function yn(e, t) {
  e.$$.dirty[0] === -1 && (at.push(e), $n(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ut(e, t, n, r, i, a, o, s = [-1]) {
  const c = kt;
  yt(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: z,
    not_equal: i,
    bound: we(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: we(),
    dirty: s,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  o && o(l.root);
  let d = !1;
  if (l.ctx = n ? n(e, t.props || {}, (u, p, ...m) => {
    const h = m.length ? m[0] : p;
    return l.ctx && i(l.ctx[u], l.ctx[u] = h) && (!l.skip_bound && l.bound[u] && l.bound[u](h), d && yn(e, u)), p;
  }) : [], l.update(), d = !0, nt(l.before_update), l.fragment = r ? r(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = mn(t.target);
      l.fragment && l.fragment.l(u), u.forEach(tt);
    } else
      l.fragment && l.fragment.c();
    t.intro && U(e.$$.fragment), Jt(e, t.target, t.anchor, t.customElement), ht();
  }
  yt(c);
}
let St;
typeof HTMLElement == "function" && (St = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(ue).filter(Pt);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, n) {
    this[e] = n;
  }
  disconnectedCallback() {
    nt(this.$$.on_disconnect);
  }
  $destroy() {
    Gt(this, 1), this.$destroy = z;
  }
  $on(e, t) {
    if (!Pt(t))
      return z;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !un(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
function wn(e) {
  let t, n, r, i, a, o, s, c, l, d;
  return {
    c() {
      t = F("nav"), n = F("div"), r = F("span"), r.textContent = "NAGP Svelte Assignment", i = W(), a = F("form"), o = F("button"), o.textContent = "Logout", s = W(), c = F("style"), c.textContent = `.header {
      background-color: #13294b;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
        inset 0 -1px 0 rgba(255, 255, 255, 0.15);
    }

    .logout-btn .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .logout-btn .btn-outline-primary {
      color: #fff;
      border-color: #fff;
    }`, this.c = z, y(r, "class", "navbar-text text-white"), y(o, "class", "btn btn-outline-primary my-2 my-sm-0"), y(o, "type", "submit"), y(a, "class", "form-inline logout-btn"), y(n, "class", "container"), y(t, "class", "navbar navbar-light justify-content-between header");
    },
    m(u, p) {
      q(u, t, p), v(t, n), v(n, r), v(n, i), v(n, a), v(a, o), v(t, s), v(t, c), l || (d = zt(o, "click", function() {
        Pt(
          /*logout*/
          e[0]
        ) && e[0].apply(this, arguments);
      }), l = !0);
    },
    p(u, [p]) {
      e = u;
    },
    i: z,
    o: z,
    d(u) {
      u && tt(t), l = !1, d();
    }
  };
}
function En(e, t, n) {
  let { logout: r } = t;
  return e.$$set = (i) => {
    "logout" in i && n(0, r = i.logout);
  }, [r];
}
class Ve extends St {
  constructor(t) {
    super(), Ut(
      this,
      {
        target: this.shadowRoot,
        props: qt(this.attributes),
        customElement: !0
      },
      En,
      wn,
      Nt,
      { logout: 0 },
      null
    ), t && (t.target && q(t.target, this, t.anchor), t.props && (this.$set(t.props), ht()));
  }
  static get observedAttributes() {
    return ["logout"];
  }
  get logout() {
    return this.$$.ctx[0];
  }
  set logout(t) {
    this.$$set({ logout: t }), ht();
  }
}
customElements.define("my-navbar", Ve);
const st = [];
function kn(e, t = z) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(s) {
    if (Nt(e, s) && (e = s, n)) {
      const c = !st.length;
      for (const l of r)
        l[1](), st.push(l, e);
      if (c) {
        for (let l = 0; l < st.length; l += 2)
          st[l][0](st[l + 1]);
        st.length = 0;
      }
    }
  }
  function a(s) {
    i(s(e));
  }
  function o(s, c = z) {
    const l = [s, c];
    return r.add(l), r.size === 1 && (n = t(i) || z), s(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
const ce = kn(!1);
function Cn(e) {
  let t, n;
  return {
    c() {
      t = F("div"), n = de(
        /*message*/
        e[0]
      ), this.c = z, y(t, "class", "alert alert-danger"), y(t, "role", "alert");
    },
    m(r, i) {
      q(r, t, i), v(t, n);
    },
    p(r, [i]) {
      i & /*message*/
      1 && hn(
        n,
        /*message*/
        r[0]
      );
    },
    i: z,
    o: z,
    d(r) {
      r && tt(t);
    }
  };
}
function Fn(e, t, n) {
  let { message: r = "" } = t;
  return e.$$set = (i) => {
    "message" in i && n(0, r = i.message);
  }, [r];
}
class Ke extends St {
  constructor(t) {
    super(), Ut(
      this,
      {
        target: this.shadowRoot,
        props: qt(this.attributes),
        customElement: !0
      },
      Fn,
      Cn,
      Nt,
      { message: 0 },
      null
    ), t && (t.target && q(t.target, this, t.anchor), t.props && (this.$set(t.props), ht()));
  }
  static get observedAttributes() {
    return ["message"];
  }
  get message() {
    return this.$$.ctx[0];
  }
  set message(t) {
    this.$$set({ message: t }), ht();
  }
}
customElements.define("new-alert-component", Ke);
function Ce(e) {
  let t, n;
  return t = new Ke({
    props: { message: "Invalid email or password." }
  }), {
    c() {
      fe(t.$$.fragment);
    },
    m(r, i) {
      Jt(t, r, i), n = !0;
    },
    i(r) {
      n || (U(t.$$.fragment, r), n = !0);
    },
    o(r) {
      et(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Gt(t, r);
    }
  };
}
function Ln(e) {
  let t, n, r, i, a, o, s, c, l, d, u, p, m, h, $, x, _, R, C, A, k, M, D, w = (
    /*showError*/
    e[2] && Ce()
  );
  return {
    c() {
      t = F("div"), n = F("div"), r = F("div"), i = F("h4"), i.textContent = "Sign in", a = W(), o = F("form"), s = F("div"), c = F("input"), l = W(), d = F("label"), d.textContent = "Email address", u = W(), p = F("div"), m = F("input"), h = W(), $ = F("label"), $.textContent = "Password", x = W(), w && w.c(), _ = W(), R = F("div"), R.innerHTML = '<button type="submit" class="btn btn-primary">Login</button>', C = W(), A = F("style"), A.textContent = `.login-container {
      display: flex;
      align-items: center;
      height: 100vh;
    }
    .card {
      width: 400px;
      margin: 0 auto;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
    }

    .card-title {
      color: #47d7ac;
      font-weight: 500;
    }

    .login-btn .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .login-btn .btn-primary {
      margin-top: 30px;
      background-color: #13294b;
      border-color: #13294b;
    }`, this.c = z, y(i, "class", "card-title text-center mb-4"), y(c, "type", "email"), y(c, "class", "form-control"), y(c, "id", "email"), y(c, "placeholder", "Enter email"), c.required = !0, y(d, "for", "email"), y(d, "class", "form-label"), y(s, "class", "form-floating mb-3"), y(m, "type", "password"), y(m, "class", "form-control"), y(m, "id", "password"), y(m, "placeholder", "Enter password"), m.required = !0, y($, "for", "password"), y($, "class", "form-label"), y(p, "class", "form-floating mb-3"), y(R, "class", "d-grid login-btn"), y(r, "class", "card-body"), y(n, "class", "card"), y(t, "class", "login-container");
    },
    m(T, H) {
      q(T, t, H), v(t, n), v(n, r), v(r, i), v(r, a), v(r, o), v(o, s), v(s, c), jt(
        c,
        /*email*/
        e[0]
      ), v(s, l), v(s, d), v(o, u), v(o, p), v(p, m), jt(
        m,
        /*password*/
        e[1]
      ), v(p, h), v(p, $), v(o, x), w && w.m(o, null), v(o, _), v(o, R), v(t, C), v(t, A), k = !0, M || (D = [
        zt(
          c,
          "input",
          /*input0_input_handler*/
          e[4]
        ),
        zt(
          m,
          "input",
          /*input1_input_handler*/
          e[5]
        ),
        zt(o, "submit", pn(
          /*handleLogin*/
          e[3]
        ))
      ], M = !0);
    },
    p(T, [H]) {
      H & /*email*/
      1 && c.value !== /*email*/
      T[0] && jt(
        c,
        /*email*/
        T[0]
      ), H & /*password*/
      2 && m.value !== /*password*/
      T[1] && jt(
        m,
        /*password*/
        T[1]
      ), /*showError*/
      T[2] ? w ? H & /*showError*/
      4 && U(w, 1) : (w = Ce(), w.c(), U(w, 1), w.m(o, _)) : w && (Ge(), et(w, 1, 1, () => {
        w = null;
      }), Ue());
    },
    i(T) {
      k || (U(w), k = !0);
    },
    o(T) {
      et(w), k = !1;
    },
    d(T) {
      T && tt(t), w && w.d(), M = !1, nt(D);
    }
  };
}
function Nn(e, t, n) {
  let r = "", i = "", a = !1, o = !1;
  const s = () => {
    r === "surajsachan@gmail.com" && i === "password" ? (o = !0, localStorage.setItem("isLoggedIn", "true"), n(2, a = !1), ce.set(o)) : n(2, a = !0);
  };
  Je(() => {
    ce.subscribe((d) => {
      o = d;
    });
  });
  function c() {
    r = this.value, n(0, r);
  }
  function l() {
    i = this.value, n(1, i);
  }
  return [
    r,
    i,
    a,
    s,
    c,
    l
  ];
}
class Qe extends St {
  constructor(t) {
    super(), Ut(
      this,
      {
        target: this.shadowRoot,
        props: qt(this.attributes),
        customElement: !0
      },
      Nn,
      Ln,
      Nt,
      {},
      null
    ), t && t.target && q(t.target, this, t.anchor);
  }
}
customElements.define("my-login", Qe);
function N() {
}
const Sn = (e) => e;
function pe(e) {
  return e();
}
function Fe() {
  return /* @__PURE__ */ Object.create(null);
}
function Q(e) {
  e.forEach(pe);
}
function Ht(e) {
  return typeof e == "function";
}
function gt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Ot;
function Vt(e, t) {
  return Ot || (Ot = document.createElement("a")), Ot.href = t, e === Ot.href;
}
function Rn(e) {
  return Object.keys(e).length === 0;
}
function An(e, ...t) {
  if (e == null)
    return N;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Xe(e, t, n) {
  e.$$.on_destroy.push(An(t, n));
}
function Mn(e, t, n) {
  return e.set(n), t;
}
const Ye = typeof window < "u";
let jn = Ye ? () => window.performance.now() : () => Date.now(), me = Ye ? (e) => requestAnimationFrame(e) : N;
const pt = /* @__PURE__ */ new Set();
function Ze(e) {
  pt.forEach((t) => {
    t.c(e) || (pt.delete(t), t.f());
  }), pt.size !== 0 && me(Ze);
}
function On(e) {
  let t;
  return pt.size === 0 && me(Ze), {
    promise: new Promise((n) => {
      pt.add(t = { c: e, f: n });
    }),
    abort() {
      pt.delete(t);
    }
  };
}
function f(e, t) {
  e.appendChild(t);
}
function tn(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument;
}
function zn(e) {
  const t = g("style");
  return In(tn(e), t), t.sheet;
}
function In(e, t) {
  return f(e.head || e, t), t.sheet;
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function S(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function he(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function g(e) {
  return document.createElement(e);
}
function rt(e) {
  return document.createTextNode(e);
}
function E() {
  return rt(" ");
}
function Tn() {
  return rt("");
}
function V(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function b(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Pn(e) {
  return Array.from(e.childNodes);
}
function Kt(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function Le(e, t) {
  e.value = t ?? "";
}
function dt(e, t, n) {
  for (let r = 0; r < e.options.length; r += 1) {
    const i = e.options[r];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function re(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
function Hn(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, r, t), i;
}
function Rt(e) {
  const t = {};
  for (const n of e)
    t[n.name] = n.value;
  return t;
}
const Bt = /* @__PURE__ */ new Map();
let Dt = 0;
function Bn(e) {
  let t = 5381, n = e.length;
  for (; n--; )
    t = (t << 5) - t ^ e.charCodeAt(n);
  return t >>> 0;
}
function Dn(e, t) {
  const n = { stylesheet: zn(t), rules: {} };
  return Bt.set(e, n), n;
}
function Ne(e, t, n, r, i, a, o, s = 0) {
  const c = 16.666 / r;
  let l = `{
`;
  for (let x = 0; x <= 1; x += c) {
    const _ = t + (n - t) * a(x);
    l += x * 100 + `%{${o(_, 1 - _)}}
`;
  }
  const d = l + `100% {${o(n, 1 - n)}}
}`, u = `__svelte_${Bn(d)}_${s}`, p = tn(e), { stylesheet: m, rules: h } = Bt.get(p) || Dn(p, e);
  h[u] || (h[u] = !0, m.insertRule(`@keyframes ${u} ${d}`, m.cssRules.length));
  const $ = e.style.animation || "";
  return e.style.animation = `${$ ? `${$}, ` : ""}${u} ${r}ms linear ${i}ms 1 both`, Dt += 1, u;
}
function Wn(e, t) {
  const n = (e.style.animation || "").split(", "), r = n.filter(
    t ? (a) => a.indexOf(t) < 0 : (a) => a.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = n.length - r.length;
  i && (e.style.animation = r.join(", "), Dt -= i, Dt || qn());
}
function qn() {
  me(() => {
    Dt || (Bt.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && S(t);
    }), Bt.clear());
  });
}
let Ct;
function wt(e) {
  Ct = e;
}
function ge() {
  if (!Ct)
    throw new Error("Function called outside component initialization");
  return Ct;
}
function en(e) {
  ge().$$.on_mount.push(e);
}
function Jn(e, t) {
  return ge().$$.context.set(e, t), t;
}
function Gn(e) {
  return ge().$$.context.get(e);
}
const ut = [], Se = [];
let mt = [];
const Re = [], Un = /* @__PURE__ */ Promise.resolve();
let ae = !1;
function Vn() {
  ae || (ae = !0, Un.then(Z));
}
function K(e) {
  mt.push(e);
}
const oe = /* @__PURE__ */ new Set();
let lt = 0;
function Z() {
  if (lt !== 0)
    return;
  const e = Ct;
  do {
    try {
      for (; lt < ut.length; ) {
        const t = ut[lt];
        lt++, wt(t), Kn(t.$$);
      }
    } catch (t) {
      throw ut.length = 0, lt = 0, t;
    }
    for (wt(null), ut.length = 0, lt = 0; Se.length; )
      Se.pop()();
    for (let t = 0; t < mt.length; t += 1) {
      const n = mt[t];
      oe.has(n) || (oe.add(n), n());
    }
    mt.length = 0;
  } while (ut.length);
  for (; Re.length; )
    Re.pop()();
  ae = !1, oe.clear(), wt(e);
}
function Kn(e) {
  if (e.fragment !== null) {
    e.update(), Q(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(K);
  }
}
function Qn(e) {
  const t = [], n = [];
  mt.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), mt = t;
}
let vt;
function Xn() {
  return vt || (vt = Promise.resolve(), vt.then(() => {
    vt = null;
  })), vt;
}
function ie(e, t, n) {
  e.dispatchEvent(Hn(`${t ? "intro" : "outro"}${n}`));
}
const Tt = /* @__PURE__ */ new Set();
let G;
function Qt() {
  G = {
    r: 0,
    c: [],
    p: G
    // parent group
  };
}
function Xt() {
  G.r || Q(G.c), G = G.p;
}
function I(e, t) {
  e && e.i && (Tt.delete(e), e.i(t));
}
function B(e, t, n, r) {
  if (e && e.o) {
    if (Tt.has(e))
      return;
    Tt.add(e), G.c.push(() => {
      Tt.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
const Yn = { duration: 0 };
function Ae(e, t, n, r) {
  const i = { direction: "both" };
  let a = t(e, n, i), o = r ? 0 : 1, s = null, c = null, l = null;
  function d() {
    l && Wn(e, l);
  }
  function u(m, h) {
    const $ = m.b - o;
    return h *= Math.abs($), {
      a: o,
      b: m.b,
      d: $,
      duration: h,
      start: m.start,
      end: m.start + h,
      group: m.group
    };
  }
  function p(m) {
    const { delay: h = 0, duration: $ = 300, easing: x = Sn, tick: _ = N, css: R } = a || Yn, C = {
      start: jn() + h,
      b: m
    };
    m || (C.group = G, G.r += 1), s || c ? c = C : (R && (d(), l = Ne(e, o, m, $, h, x, R)), m && _(0, 1), s = u(C, $), K(() => ie(e, m, "start")), On((A) => {
      if (c && A > c.start && (s = u(c, $), c = null, ie(e, s.b, "start"), R && (d(), l = Ne(e, o, s.b, s.duration, 0, x, a.css))), s) {
        if (A >= s.end)
          _(o = s.b, 1 - o), ie(e, s.b, "end"), c || (s.b ? d() : --s.group.r || Q(s.group.c)), s = null;
        else if (A >= s.start) {
          const k = A - s.start;
          o = s.a + s.d * x(k / s.duration), _(o, 1 - o);
        }
      }
      return !!(s || c);
    }));
  }
  return {
    run(m) {
      Ht(a) ? Xn().then(() => {
        a = a(i), p(m);
      }) : p(m);
    },
    end() {
      d(), s = c = null;
    }
  };
}
function Wt(e) {
  e && e.c();
}
function Ft(e, t, n, r) {
  const { fragment: i, after_update: a } = e.$$;
  i && i.m(t, n), r || K(() => {
    const o = e.$$.on_mount.map(pe).filter(Ht);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Q(o), e.$$.on_mount = [];
  }), a.forEach(K);
}
function Lt(e, t) {
  const n = e.$$;
  n.fragment !== null && (Qn(n.after_update), Q(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Zn(e, t) {
  e.$$.dirty[0] === -1 && (ut.push(e), Vn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function At(e, t, n, r, i, a, o, s = [-1]) {
  const c = Ct;
  wt(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: N,
    not_equal: i,
    bound: Fe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Fe(),
    dirty: s,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  o && o(l.root);
  let d = !1;
  if (l.ctx = n ? n(e, t.props || {}, (u, p, ...m) => {
    const h = m.length ? m[0] : p;
    return l.ctx && i(l.ctx[u], l.ctx[u] = h) && (!l.skip_bound && l.bound[u] && l.bound[u](h), d && Zn(e, u)), p;
  }) : [], l.update(), d = !0, Q(l.before_update), l.fragment = r ? r(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = Pn(t.target);
      l.fragment && l.fragment.l(u), u.forEach(S);
    } else
      l.fragment && l.fragment.c();
    t.intro && I(e.$$.fragment), Ft(e, t.target, t.anchor, t.customElement), Z();
  }
  wt(c);
}
let bt;
typeof HTMLElement == "function" && (bt = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(pe).filter(Ht);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, n) {
    this[e] = n;
  }
  disconnectedCallback() {
    Q(this.$$.on_disconnect);
  }
  $destroy() {
    Lt(this, 1), this.$destroy = N;
  }
  $on(e, t) {
    if (!Ht(t))
      return N;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Rn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
const ct = [];
function nn(e, t = N) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(s) {
    if (gt(e, s) && (e = s, n)) {
      const c = !ct.length;
      for (const l of r)
        l[1](), ct.push(l, e);
      if (c) {
        for (let l = 0; l < ct.length; l += 2)
          ct[l][0](ct[l + 1]);
        ct.length = 0;
      }
    }
  }
  function a(s) {
    i(s(e));
  }
  function o(s, c = N) {
    const l = [s, c];
    return r.add(l), r.size === 1 && (n = t(i) || N), s(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
const Et = nn([]);
function tr(e) {
  let t, n;
  return {
    c() {
      t = g("div"), n = rt(
        /*message*/
        e[0]
      ), this.c = N, b(t, "class", "alert alert-danger"), b(t, "role", "alert");
    },
    m(r, i) {
      L(r, t, i), f(t, n);
    },
    p(r, [i]) {
      i & /*message*/
      1 && Kt(
        n,
        /*message*/
        r[0]
      );
    },
    i: N,
    o: N,
    d(r) {
      r && S(t);
    }
  };
}
function er(e, t, n) {
  let { message: r = "" } = t;
  return e.$$set = (i) => {
    "message" in i && n(0, r = i.message);
  }, [r];
}
class rn extends bt {
  constructor(t) {
    super(), At(
      this,
      {
        target: this.shadowRoot,
        props: Rt(this.attributes),
        customElement: !0
      },
      er,
      tr,
      gt,
      { message: 0 },
      null
    ), t && (t.target && L(t.target, this, t.anchor), t.props && (this.$set(t.props), Z()));
  }
  static get observedAttributes() {
    return ["message"];
  }
  get message() {
    return this.$$.ctx[0];
  }
  set message(t) {
    this.$$set({ message: t }), Z();
  }
}
customElements.define("alert-component", rn);
function Me(e, t, n) {
  const r = e.slice();
  return r[18] = t[n], r;
}
function je(e) {
  let t, n;
  return t = new rn({
    props: {
      message: "File/Folder with this name already exists."
    }
  }), {
    c() {
      Wt(t.$$.fragment);
    },
    m(r, i) {
      Ft(t, r, i), n = !0;
    },
    i(r) {
      n || (I(t.$$.fragment, r), n = !0);
    },
    o(r) {
      B(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Lt(t, r);
    }
  };
}
function Oe(e) {
  let t, n, r, i, a, o, s = (
    /*filterList*/
    e[6]
  ), c = [];
  for (let l = 0; l < s.length; l += 1)
    c[l] = ze(Me(e, s, l));
  return {
    c() {
      t = g("div"), n = g("select");
      for (let l = 0; l < c.length; l += 1)
        c[l].c();
      r = E(), i = g("label"), i.textContent = "Folder", b(n, "class", "form-select"), b(n, "id", "folder"), n.disabled = /*canCreateChild*/
      e[5], /*selectedFolder*/
      e[4] === void 0 && K(() => (
        /*select_change_handler*/
        e[13].call(n)
      )), b(i, "for", "folder"), b(t, "class", "form-floating mb-3");
    },
    m(l, d) {
      L(l, t, d), f(t, n);
      for (let u = 0; u < c.length; u += 1)
        c[u] && c[u].m(n, null);
      dt(
        n,
        /*selectedFolder*/
        e[4],
        !0
      ), f(t, r), f(t, i), a || (o = V(
        n,
        "change",
        /*select_change_handler*/
        e[13]
      ), a = !0);
    },
    p(l, d) {
      if (d & /*filterList*/
      64) {
        s = /*filterList*/
        l[6];
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = Me(l, s, u);
          c[u] ? c[u].p(p, d) : (c[u] = ze(p), c[u].c(), c[u].m(n, null));
        }
        for (; u < c.length; u += 1)
          c[u].d(1);
        c.length = s.length;
      }
      d & /*canCreateChild*/
      32 && (n.disabled = /*canCreateChild*/
      l[5]), d & /*selectedFolder, filterList*/
      80 && dt(
        n,
        /*selectedFolder*/
        l[4]
      );
    },
    d(l) {
      l && S(t), he(c, l), a = !1, o();
    }
  };
}
function ze(e) {
  let t, n = (
    /*folder*/
    e[18].name + ""
  ), r, i;
  return {
    c() {
      t = g("option"), r = rt(n), t.__value = i = /*folder*/
      e[18].name, t.value = t.__value;
    },
    m(a, o) {
      L(a, t, o), f(t, r);
    },
    p(a, o) {
      o & /*filterList*/
      64 && n !== (n = /*folder*/
      a[18].name + "") && Kt(r, n), o & /*filterList*/
      64 && i !== (i = /*folder*/
      a[18].name) && (t.__value = i, t.value = t.__value);
    },
    d(a) {
      a && S(t);
    }
  };
}
function nr(e) {
  let t, n, r, i, a, o, s, c, l, d, u, p, m, h, $, x, _, R, C, A, k, M, D, w, T, H, Yt, $t, be, xt, _t, $e, X, xe, Mt, _e, Zt, ve, te, ot, ee, ye, j = (
    /*isDuplicate*/
    e[3] && je()
  ), P = (
    /*selectLevel*/
    e[2] === "child" && Oe(e)
  );
  return {
    c() {
      t = g("div"), n = g("div"), r = g("div"), r.innerHTML = "<h3>Create Files or Folders</h3>", i = E(), j && j.c(), a = E(), o = g("div"), s = g("input"), c = E(), l = g("label"), l.textContent = "Name", d = E(), u = g("div"), p = g("select"), m = g("option"), m.textContent = "File", h = g("option"), h.textContent = "Folder", $ = E(), x = g("label"), x.textContent = "Type", _ = E(), R = g("div"), C = g("select"), A = g("option"), A.textContent = "Root", k = g("option"), k.textContent = "Child", M = E(), D = g("label"), D.textContent = "Select Level", w = E(), P && P.c(), T = E(), H = g("div"), Yt = g("div"), $t = g("button"), $t.textContent = "Reset", be = E(), xt = g("div"), _t = g("button"), _t.textContent = "Cancel", $e = E(), X = g("button"), xe = rt("Save"), _e = E(), Zt = g("div"), ve = E(), te = g("style"), te.textContent = `.left-tab {
      padding-right: 1.5rem !important;
    }
    .form-container {
      width: 80%;
    }

    .form-heading {
      margin-bottom: 40px;
    }

    .form-heading h3 {
      color: #47d7ac;
    }

    .action-btns {
      margin-top: 40px;
    }

    .action-btns .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .action-btns .btn-primary {
      background-color: #13294b;
      border-color: #13294b;
    }

    .action-btns .btn-outline-primary {
      border-color: #13294b;
      color: #13294b;
    }

    .action-btns .btn-primary.disabled,
    .action-btns .btn-primary:disabled {
      background-color: #13294b;
    }

    @media only screen and (max-width: 1050px) {
      .form-container {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      .form-container {
        margin-bottom: 20px;
      }

      .left-tab {
        padding-right: 0;
      }
    }`, this.c = N, b(r, "class", "form-heading"), b(s, "type", "text"), b(s, "class", "form-control"), b(s, "id", "name"), b(s, "placeholder", "Enter file or Folder name"), b(l, "for", "name"), b(o, "class", "form-floating mb-3"), m.__value = "file", m.value = m.__value, h.__value = "folder", h.value = h.__value, b(p, "class", "form-select"), b(p, "id", "type"), /*type*/
      e[1] === void 0 && K(() => (
        /*select0_change_handler*/
        e[11].call(p)
      )), b(x, "for", "type"), b(u, "class", "form-floating mb-3"), A.__value = "root", A.value = A.__value, k.__value = "child", k.value = k.__value, b(C, "class", "form-select"), b(C, "id", "level"), C.disabled = /*canCreateChild*/
      e[5], /*selectLevel*/
      e[2] === void 0 && K(() => (
        /*select1_change_handler*/
        e[12].call(C)
      )), b(D, "for", "level"), b(R, "class", "form-floating mb-3"), b($t, "class", "btn btn-outline-primary ms-1"), b(_t, "class", "btn btn-outline-primary me-1"), X.disabled = Mt = !/*name*/
      e[0], b(X, "class", "btn btn-primary ms-1"), b(H, "class", "d-flex justify-content-between action-btns"), b(Zt, "class", "d-flex justify-content-center mt-1"), b(n, "class", "form-container"), b(t, "class", "col-md-7 left-tab");
    },
    m(O, J) {
      L(O, t, J), f(t, n), f(n, r), f(n, i), j && j.m(n, null), f(n, a), f(n, o), f(o, s), Le(
        s,
        /*name*/
        e[0]
      ), f(o, c), f(o, l), f(n, d), f(n, u), f(u, p), f(p, m), f(p, h), dt(
        p,
        /*type*/
        e[1],
        !0
      ), f(u, $), f(u, x), f(n, _), f(n, R), f(R, C), f(C, A), f(C, k), dt(
        C,
        /*selectLevel*/
        e[2],
        !0
      ), f(R, M), f(R, D), f(n, w), P && P.m(n, null), f(n, T), f(n, H), f(H, Yt), f(Yt, $t), f(H, be), f(H, xt), f(xt, _t), f(xt, $e), f(xt, X), f(X, xe), f(n, _e), f(n, Zt), f(t, ve), f(t, te), ot = !0, ee || (ye = [
        V(
          s,
          "input",
          /*input_input_handler*/
          e[10]
        ),
        V(
          p,
          "change",
          /*select0_change_handler*/
          e[11]
        ),
        V(
          C,
          "change",
          /*select1_change_handler*/
          e[12]
        ),
        V(
          $t,
          "click",
          /*resetStore*/
          e[9]
        ),
        V(
          _t,
          "click",
          /*handleCancel*/
          e[8]
        ),
        V(
          X,
          "click",
          /*handleSave*/
          e[7]
        )
      ], ee = !0);
    },
    p(O, [J]) {
      O[3] ? j ? J & /*isDuplicate*/
      8 && I(j, 1) : (j = je(), j.c(), I(j, 1), j.m(n, a)) : j && (Qt(), B(j, 1, 1, () => {
        j = null;
      }), Xt()), J & /*name*/
      1 && s.value !== /*name*/
      O[0] && Le(
        s,
        /*name*/
        O[0]
      ), J & /*type*/
      2 && dt(
        p,
        /*type*/
        O[1]
      ), (!ot || J & /*canCreateChild*/
      32) && (C.disabled = /*canCreateChild*/
      O[5]), J & /*selectLevel*/
      4 && dt(
        C,
        /*selectLevel*/
        O[2]
      ), /*selectLevel*/
      O[2] === "child" ? P ? P.p(O, J) : (P = Oe(O), P.c(), P.m(n, T)) : P && (P.d(1), P = null), (!ot || J & /*name*/
      1 && Mt !== (Mt = !/*name*/
      O[0])) && (X.disabled = Mt);
    },
    i(O) {
      ot || (I(j), ot = !0);
    },
    o(O) {
      B(j), ot = !1;
    },
    d(O) {
      O && S(t), j && j.d(), P && P.d(), ee = !1, Q(ye);
    }
  };
}
function rr(e, t, n) {
  let r = "", i = "file", a = "root", o = !1, s = "", c = [], l = !0, d = [];
  function u() {
    const k = c.filter((M) => M.type === "folder").length;
    n(5, l = k === 0);
  }
  function p(k) {
    return k.some((M) => M.name === r);
  }
  function m() {
    const k = { name: r, type: i, children: [] }, M = s ? c.find(({ name: D }) => D === s) : null;
    if (p(M ? M.children : c))
      return n(3, o = !0), !1;
    n(3, o = !1), M ? M.children.push(k) : c.push(k), Et.update((D) => {
      const w = [...D];
      return localStorage.setItem("store", JSON.stringify(w)), w;
    }), u(), $();
  }
  const h = () => {
    n(3, o = !1), $();
  }, $ = () => {
    n(0, r = ""), n(1, i = "file"), n(2, a = "root"), n(4, s = "");
  }, x = () => {
    localStorage.removeItem("store"), Et.set([]);
  };
  en(() => {
    Et.subscribe((k) => {
      c = k, n(6, d = c.filter((M) => M.type === "folder")), u();
    });
  });
  function _() {
    r = this.value, n(0, r);
  }
  function R() {
    i = re(this), n(1, i);
  }
  function C() {
    a = re(this), n(2, a);
  }
  function A() {
    s = re(this), n(4, s), n(6, d);
  }
  return [
    r,
    i,
    a,
    o,
    s,
    l,
    d,
    m,
    h,
    x,
    _,
    R,
    C,
    A
  ];
}
class on extends bt {
  constructor(t) {
    super(), At(
      this,
      {
        target: this.shadowRoot,
        props: Rt(this.attributes),
        customElement: !0
      },
      rr,
      nr,
      gt,
      {},
      null
    ), t && t.target && L(t.target, this, t.anchor);
  }
}
customElements.define("form-component", on);
function or(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Ie(e) {
  return e /= 0.5, e < 1 ? 0.5 * e * e : (e--, -0.5 * (e * (e - 2) - 1));
}
function Te(e, { delay: t = 0, duration: n = 400, easing: r = or, axis: i = "y" } = {}) {
  const a = getComputedStyle(e), o = +a.opacity, s = i === "y" ? "height" : "width", c = parseFloat(a[s]), l = i === "y" ? ["top", "bottom"] : ["left", "right"], d = l.map((_) => `${_[0].toUpperCase()}${_.slice(1)}`), u = parseFloat(a[`padding${d[0]}`]), p = parseFloat(a[`padding${d[1]}`]), m = parseFloat(a[`margin${d[0]}`]), h = parseFloat(a[`margin${d[1]}`]), $ = parseFloat(a[`border${d[0]}Width`]), x = parseFloat(a[`border${d[1]}Width`]);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * o};${s}: ${_ * c}px;padding-${l[0]}: ${_ * u}px;padding-${l[1]}: ${_ * p}px;margin-${l[0]}: ${_ * m}px;margin-${l[1]}: ${_ * h}px;border-${l[0]}-width: ${_ * $}px;border-${l[1]}-width: ${_ * x}px;`
  };
}
function Pe(e, t, n) {
  const r = e.slice();
  return r[7] = t[n], r;
}
function He(e) {
  let t, n, r, i, a, o = (
    /*folder*/
    e[1].name + ""
  ), s, c, l, d;
  function u(h, $) {
    return (
      /*folder*/
      h[1].type == "folder" ? sr : ir
    );
  }
  let p = u(e), m = p(e);
  return {
    c() {
      t = g("div"), n = g("div"), r = g("h3"), m.c(), i = E(), a = g("span"), s = rt(o), b(n, "class", c = "text " + /*folder*/
      (e[1].type == "folder" ? (
        /*folderClass*/
        e[2]
      ) : "")), b(t, "class", "header");
    },
    m(h, $) {
      L(h, t, $), f(t, n), f(n, r), m.m(r, null), f(r, i), f(r, a), f(a, s), l || (d = V(
        t,
        "click",
        /*handleClick*/
        e[4]
      ), l = !0);
    },
    p(h, $) {
      p !== (p = u(h)) && (m.d(1), m = p(h), m && (m.c(), m.m(r, i))), $ & /*folder*/
      2 && o !== (o = /*folder*/
      h[1].name + "") && Kt(s, o), $ & /*folder, folderClass*/
      6 && c !== (c = "text " + /*folder*/
      (h[1].type == "folder" ? (
        /*folderClass*/
        h[2]
      ) : "")) && b(n, "class", c);
    },
    d(h) {
      h && S(t), m.d(), l = !1, d();
    }
  };
}
function ir(e) {
  let t, n;
  return {
    c() {
      t = g("img"), Vt(t.src, n = "./assets/file.svg") || b(t, "src", n), b(t, "alt", "file");
    },
    m(r, i) {
      L(r, t, i);
    },
    d(r) {
      r && S(t);
    }
  };
}
function sr(e) {
  let t, n;
  return {
    c() {
      t = g("img"), Vt(t.src, n = "./assets/folder.svg") || b(t, "src", n), b(t, "alt", "folder");
    },
    m(r, i) {
      L(r, t, i);
    },
    d(r) {
      r && S(t);
    }
  };
}
function Be(e) {
  let t, n, r, i, a = (
    /*folder*/
    e[1].children
  ), o = [];
  for (let s = 0; s < a.length; s += 1)
    o[s] = De(Pe(e, a, s));
  return {
    c() {
      t = g("div"), n = g("ul");
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      b(t, "class", "details");
    },
    m(s, c) {
      L(s, t, c), f(t, n);
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(n, null);
      i = !0;
    },
    p(s, c) {
      if (e = s, c & /*folder*/
      2) {
        a = /*folder*/
        e[1].children;
        let l;
        for (l = 0; l < a.length; l += 1) {
          const d = Pe(e, a, l);
          o[l] ? o[l].p(d, c) : (o[l] = De(d), o[l].c(), o[l].m(n, null));
        }
        for (; l < o.length; l += 1)
          o[l].d(1);
        o.length = a.length;
      }
    },
    i(s) {
      i || (K(() => {
        i && (r || (r = Ae(t, Te, { duration: 150, easing: Ie }, !0)), r.run(1));
      }), i = !0);
    },
    o(s) {
      r || (r = Ae(t, Te, { duration: 150, easing: Ie }, !1)), r.run(0), i = !1;
    },
    d(s) {
      s && S(t), he(o, s), s && r && r.end();
    }
  };
}
function lr(e) {
  let t, n;
  return {
    c() {
      t = g("img"), Vt(t.src, n = "./assets/file.svg") || b(t, "src", n), b(t, "alt", "file");
    },
    m(r, i) {
      L(r, t, i);
    },
    d(r) {
      r && S(t);
    }
  };
}
function cr(e) {
  let t, n;
  return {
    c() {
      t = g("img"), Vt(t.src, n = "./assets/folder.svg") || b(t, "src", n), b(t, "alt", "folder");
    },
    m(r, i) {
      L(r, t, i);
    },
    d(r) {
      r && S(t);
    }
  };
}
function De(e) {
  let t, n, r, i, a = (
    /*child*/
    e[7].name + ""
  ), o, s, c;
  function l(p, m) {
    return (
      /*child*/
      p[7].type == "folder" ? cr : lr
    );
  }
  let d = l(e), u = d(e);
  return {
    c() {
      t = g("li"), n = g("div"), u.c(), r = E(), i = g("h3"), o = rt(a), c = E(), b(n, "class", s = "text " + /*child*/
      (e[7].type == "folder" ? "accordion-button collapsed" : ""));
    },
    m(p, m) {
      L(p, t, m), f(t, n), u.m(n, null), f(n, r), f(n, i), f(i, o), f(t, c);
    },
    p(p, m) {
      d !== (d = l(p)) && (u.d(1), u = d(p), u && (u.c(), u.m(n, r))), m & /*folder*/
      2 && a !== (a = /*child*/
      p[7].name + "") && Kt(o, a), m & /*folder*/
      2 && s !== (s = "text " + /*child*/
      (p[7].type == "folder" ? "accordion-button collapsed" : "")) && b(n, "class", s);
    },
    d(p) {
      p && S(t), u.d();
    }
  };
}
function ar(e) {
  let t, n, r, i, a, o = (
    /*folder*/
    e[1] && /*folder*/
    e[1].name && He(e)
  ), s = (
    /*open*/
    e[0] && /*folder*/
    e[1].children && /*folder*/
    e[1].children.length && Be(e)
  );
  return {
    c() {
      t = g("div"), o && o.c(), n = E(), s && s.c(), r = E(), i = g("style"), i.textContent = `div.header {\r
      display: flex;\r
      width: 100%;\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
      color: #fff;\r
      cursor: pointer;\r
    }\r
\r
    .result-container .accordion-button {\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
    }\r
\r
    .result-container .accordion-button:not(.collapsed) {\r
      background-color: #47d7ac;\r
      border-bottom-left-radius: 0;\r
      border-bottom-right-radius: 0;\r
    }\r
\r
    div.header .text {\r
      flex: 1;\r
      padding: 12px 20px;\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }\r
\r
    div.header:hover h3 {\r
      color: #fff;\r
    }\r
\r
    div.details {\r
      background-color: #47d7ac;\r
      padding: 1rem;\r
    }\r
\r
    div.details ul {\r
      list-style-type: none;\r
    }\r
\r
    .accordion {\r
      margin-bottom: 5px;\r
    }\r
\r
    .accordion h3 {\r
      font-size: 16px;\r
      margin-bottom: 0;\r
      color: #13294b;\r
      display: flex;\r
      align-items: center;\r
      font-weight: 400;\r
    }\r
\r
    div.details .text.accordion-button {\r
      padding: 0;\r
    }\r
\r
    .accordion h3 img,\r
    div.details .text img {\r
      width: 24px;\r
      height: 24px;\r
      margin-right: 10px;\r
    }\r
\r
    div.details .text {\r
      text-align: left;\r
      cursor: pointer;\r
      display: flex;\r
      align-items: center;\r
    }\r
\r
    h4,\r
    h2 {\r
      cursor: pointer;\r
    }\r
\r
    .text span {\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }`, this.c = N, b(t, "class", "accordion");
    },
    m(c, l) {
      L(c, t, l), o && o.m(t, null), f(t, n), s && s.m(t, null), f(t, r), f(t, i), a = !0;
    },
    p(c, [l]) {
      c[1] && /*folder*/
      c[1].name ? o ? o.p(c, l) : (o = He(c), o.c(), o.m(t, n)) : o && (o.d(1), o = null), /*open*/
      c[0] && /*folder*/
      c[1].children && /*folder*/
      c[1].children.length ? s ? (s.p(c, l), l & /*open, folder*/
      3 && I(s, 1)) : (s = Be(c), s.c(), I(s, 1), s.m(t, r)) : s && (Qt(), B(s, 1, 1, () => {
        s = null;
      }), Xt());
    },
    i(c) {
      a || (I(s), a = !0);
    },
    o(c) {
      B(s), a = !1;
    },
    d(c) {
      c && S(t), o && o.d(), s && s.d();
    }
  };
}
const sn = {}, ur = () => Gn(sn), ln = () => {
  const e = { current: nn(null) };
  return Jn(sn, e), e;
};
function dr(e, t, n) {
  let r, i, { open: a = !1 } = t, { folder: o } = t;
  const { current: s } = ur();
  Xe(e, s, (d) => n(5, i = d));
  const c = {};
  ln();
  function l() {
    o.type !== "file" && (n(0, a = !a), a && Mn(s, i = c, i));
  }
  return e.$$set = (d) => {
    "open" in d && n(0, a = d.open), "folder" in d && n(1, o = d.folder);
  }, e.$$.update = () => {
    e.$$.dirty & /*$current*/
    32 && i !== c && n(0, a = !1), e.$$.dirty & /*open, folder*/
    3 && n(2, r = a && o.children && o.children.length ? "accordion-button" : "accordion-button collapsed");
  }, [a, o, r, s, l, i];
}
class cn extends bt {
  constructor(t) {
    super(), At(
      this,
      {
        target: this.shadowRoot,
        props: Rt(this.attributes),
        customElement: !0
      },
      dr,
      ar,
      gt,
      { open: 0, folder: 1 },
      null
    ), t && (t.target && L(t.target, this, t.anchor), t.props && (this.$set(t.props), Z()));
  }
  static get observedAttributes() {
    return ["open", "folder"];
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(t) {
    this.$$set({ open: t }), Z();
  }
  get folder() {
    return this.$$.ctx[1];
  }
  set folder(t) {
    this.$$set({ folder: t }), Z();
  }
}
customElements.define("item-component", cn);
function We(e, t, n) {
  const r = e.slice();
  return r[1] = t[n], r;
}
function fr(e) {
  let t;
  return {
    c() {
      t = g("div"), t.textContent = "No files and folders are created!", b(t, "class", "alert alert-light"), b(t, "role", "alert");
    },
    m(n, r) {
      L(n, t, r);
    },
    p: N,
    i: N,
    o: N,
    d(n) {
      n && S(t);
    }
  };
}
function pr(e) {
  let t, n, r = (
    /*$folderStructure*/
    e[0]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = qe(We(e, r, o));
  const a = (o) => B(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = Tn();
    },
    m(o, s) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(o, s);
      L(o, t, s), n = !0;
    },
    p(o, s) {
      if (s & /*$folderStructure*/
      1) {
        r = /*$folderStructure*/
        o[0];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = We(o, r, c);
          i[c] ? (i[c].p(l, s), I(i[c], 1)) : (i[c] = qe(l), i[c].c(), I(i[c], 1), i[c].m(t.parentNode, t));
        }
        for (Qt(), c = r.length; c < i.length; c += 1)
          a(c);
        Xt();
      }
    },
    i(o) {
      if (!n) {
        for (let s = 0; s < r.length; s += 1)
          I(i[s]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        B(i[s]);
      n = !1;
    },
    d(o) {
      he(i, o), o && S(t);
    }
  };
}
function qe(e) {
  let t, n;
  return t = new cn({ props: { folder: (
    /*folder*/
    e[1]
  ) } }), {
    c() {
      Wt(t.$$.fragment);
    },
    m(r, i) {
      Ft(t, r, i), n = !0;
    },
    p(r, i) {
      const a = {};
      i & /*$folderStructure*/
      1 && (a.folder = /*folder*/
      r[1]), t.$set(a);
    },
    i(r) {
      n || (I(t.$$.fragment, r), n = !0);
    },
    o(r) {
      B(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Lt(t, r);
    }
  };
}
function mr(e) {
  let t, n, r, i, a, o, s, c, l, d;
  const u = [pr, fr], p = [];
  function m(h, $) {
    var x;
    return (
      /*$folderStructure*/
      (x = h[0]) != null && x.length ? 0 : 1
    );
  }
  return o = m(e), s = p[o] = u[o](e), {
    c() {
      t = g("div"), n = g("div"), r = g("h4"), r.textContent = "File & Folder Structure", i = E(), a = g("div"), s.c(), c = E(), l = g("style"), l.textContent = `.right-tab {
      padding-left: 1.5rem;
    }
    .result-container {
      padding: 20px;
      background-color: #13294b;
      color: #fff;
      border-radius: 10px;
      max-height: 500px;
      display: flex;
      flex-direction: column;
    }
    .result-container h4 {
      font-weight: 300;
      margin-bottom: 20px;
    }
    .accordian-container {
      overflow: auto;
    }

    @media only screen and (max-width: 768px) {
      .ps-4 {
        padding-left: 0 !important;
      }
    }`, this.c = N, b(a, "class", "accordian-container"), b(n, "class", "result-container"), b(t, "class", "col-md-5 right-tab");
    },
    m(h, $) {
      L(h, t, $), f(t, n), f(n, r), f(n, i), f(n, a), p[o].m(a, null), f(t, c), f(t, l), d = !0;
    },
    p(h, [$]) {
      let x = o;
      o = m(h), o === x ? p[o].p(h, $) : (Qt(), B(p[x], 1, 1, () => {
        p[x] = null;
      }), Xt(), s = p[o], s ? s.p(h, $) : (s = p[o] = u[o](h), s.c()), I(s, 1), s.m(a, null));
    },
    i(h) {
      d || (I(s), d = !0);
    },
    o(h) {
      B(s), d = !1;
    },
    d(h) {
      h && S(t), p[o].d();
    }
  };
}
function hr(e, t, n) {
  let r;
  return Xe(e, Et, (i) => n(0, r = i)), ln(), [r];
}
class an extends bt {
  constructor(t) {
    super(), At(
      this,
      {
        target: this.shadowRoot,
        props: Rt(this.attributes),
        customElement: !0
      },
      hr,
      mr,
      gt,
      {},
      null
    ), t && t.target && L(t.target, this, t.anchor);
  }
}
customElements.define("result-component", an);
function gr(e) {
  let t, n, r, i, a, o, s, c;
  return r = new on({}), a = new an({}), {
    c() {
      t = g("div"), n = g("div"), Wt(r.$$.fragment), i = E(), Wt(a.$$.fragment), o = E(), s = g("style"), s.textContent = `@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    body {
      background-color: #000;
    }

    .svelte-component-wrapper {
      font-family: "Roboto", sans-serif;
      background-color: #fff;
      border-radius: 10px;
      margin-top: 70px;
      padding: 30px 30px 30px 50px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      min-width: 420px;
    }`, this.c = N, b(n, "class", "row"), b(t, "class", "container svelte-component-wrapper");
    },
    m(l, d) {
      L(l, t, d), f(t, n), Ft(r, n, null), f(n, i), Ft(a, n, null), f(t, o), f(t, s), c = !0;
    },
    p: N,
    i(l) {
      c || (I(r.$$.fragment, l), I(a.$$.fragment, l), c = !0);
    },
    o(l) {
      B(r.$$.fragment, l), B(a.$$.fragment, l), c = !1;
    },
    d(l) {
      l && S(t), Lt(r), Lt(a);
    }
  };
}
function br(e) {
  return en(() => {
    const t = localStorage.getItem("store");
    if (t) {
      const n = JSON.parse(t);
      Et.set(n);
    }
  }), [];
}
class $r extends bt {
  constructor(t) {
    super(), At(
      this,
      {
        target: this.shadowRoot,
        props: Rt(this.attributes),
        customElement: !0
      },
      br,
      gr,
      gt,
      {},
      null
    ), t && t.target && L(t.target, this, t.anchor);
  }
}
customElements.define("file-folder-component", $r);
function xr(e) {
  let t, n;
  return t = new Qe({}), {
    c() {
      fe(t.$$.fragment);
    },
    m(r, i) {
      Jt(t, r, i), n = !0;
    },
    p: z,
    i(r) {
      n || (U(t.$$.fragment, r), n = !0);
    },
    o(r) {
      et(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Gt(t, r);
    }
  };
}
function _r(e) {
  let t, n, r, i;
  return t = new Ve({
    props: { logout: (
      /*handleLogout*/
      e[1]
    ) }
  }), {
    c() {
      fe(t.$$.fragment), n = W(), r = F("file-folder-component");
    },
    m(a, o) {
      Jt(t, a, o), q(a, n, o), q(a, r, o), i = !0;
    },
    p: z,
    i(a) {
      i || (U(t.$$.fragment, a), i = !0);
    },
    o(a) {
      et(t.$$.fragment, a), i = !1;
    },
    d(a) {
      Gt(t, a), a && tt(n), a && tt(r);
    }
  };
}
function vr(e) {
  let t, n, r, i;
  const a = [_r, xr], o = [];
  function s(c, l) {
    return (
      /*isLoggedIn*/
      c[0] ? 0 : 1
    );
  }
  return t = s(e), n = o[t] = a[t](e), {
    c() {
      n.c(), r = fn(), this.c = z;
    },
    m(c, l) {
      o[t].m(c, l), q(c, r, l), i = !0;
    },
    p(c, [l]) {
      let d = t;
      t = s(c), t === d ? o[t].p(c, l) : (Ge(), et(o[d], 1, 1, () => {
        o[d] = null;
      }), Ue(), n = o[t], n ? n.p(c, l) : (n = o[t] = a[t](c), n.c()), U(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      i || (U(n), i = !0);
    },
    o(c) {
      et(n), i = !1;
    },
    d(c) {
      o[t].d(c), c && tt(r);
    }
  };
}
function yr(e, t, n) {
  let r = !1;
  const i = () => {
    n(0, r = !1), localStorage.clear();
  };
  return Je(() => {
    ce.subscribe((a) => {
      n(0, r = a);
    }), n(0, r = localStorage.getItem("isLoggedIn") === "true");
  }), [r, i];
}
class wr extends St {
  constructor(t) {
    super();
    const n = document.createElement("style");
    n.textContent = '@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");', this.shadowRoot.appendChild(n), Ut(
      this,
      {
        target: this.shadowRoot,
        props: qt(this.attributes),
        customElement: !0
      },
      yr,
      vr,
      Nt,
      {},
      null
    ), t && t.target && q(t.target, this, t.anchor);
  }
}
customElements.define("my-app", wr);
