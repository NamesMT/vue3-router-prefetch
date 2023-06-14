import { defineComponent as h, reactive as P, inject as _, ref as c, watchEffect as b, onMounted as R, openBlock as C, createBlock as w, unref as L, normalizeProps as m, guardReactiveProps as p, withCtx as g, renderSlot as B } from "vue";
import { useLink as T, RouterLink as k } from "vue-router";
function x(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
const d = Symbol(
  "vue3-router-prefetch"
), S = {
  name: "PrefetchLink"
}, q = /* @__PURE__ */ h({
  ...S,
  props: {
    custom: { type: Boolean },
    activeClass: null,
    exactActiveClass: null,
    ariaCurrentValue: null,
    to: null,
    replace: { type: Boolean },
    type: null,
    timeout: null,
    forcedPull: { type: Boolean }
  },
  setup(t) {
    const o = t, i = P(T(o)), e = _(d), f = c("view"), n = c(0), u = c(!1);
    b(() => {
      o.type ? f.value = o.type : f.value = (e == null ? void 0 : e.type) || "view", typeof o.timeout == "number" ? n.value = o.timeout : typeof (e == null ? void 0 : e.timeout) == "number" && (n.value = e == null ? void 0 : e.timeout), typeof o.forcedPull == "boolean" ? u.value = o.forcedPull : typeof (e == null ? void 0 : e.forcedPull) == "boolean" && (u.value = e == null ? void 0 : e.forcedPull);
    });
    const v = () => {
      const { to: l } = o;
      if (!l)
        return;
      const { matched: a } = i.route;
      for (const r of a) {
        if (!r.components && !r.children.length)
          return;
        for (const y in r.components) {
          const s = r.components[y];
          x(s) || (u.value ? setTimeout(() => {
            s();
          }, n.value) : window.requestIdleCallback(() => {
            setTimeout(() => {
              s();
            }, n.value);
          }));
        }
      }
    };
    return R(() => setTimeout(v, 500)), (l, a) => (C(), w(L(k), m(p(o)), {
      default: g((r) => [
        B(l.$slots, "default", m(p(r)))
      ]),
      _: 3
    }, 16));
  }
}), E = {
  install: (t, o) => {
    t.component("RouterLink") || t.component("router-link") || console.error(
      "[vue3-router-prefetch] You need to call app.use(VueRouter) before this plugin!"
    ), t.component((o == null ? void 0 : o.name) || "RouterLink", q), t.provide(d, o);
  }
};
export {
  E as default
};
