/*
 * @license
 * Pipeline Theme (c) Groupthought Themes
 *
 * The contents of this file should not be modified.
 * add any minor changes to assets/custom.js
 *
 */
! function(t, e, i, s, o, r, n, a, l, c, h, d) {
    "use strict";

    function u(t) {
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function(i) {
            if ("default" !== i) {
                var s = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(e, i, s.get ? s : {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                })
            }
        })), e.default = t, Object.freeze(e)
    }
    var p = u(n);

    function m(t) {
        const e = t.querySelectorAll("[data-modal]"),
            i = document.querySelector("[data-modal-container]");
        e.forEach((t => {
            i.querySelector(`[id="${t.id}"]`) || i.appendChild(t)
        }))
    }
    window.theme = window.theme || {}, window.theme.sizes = {
        small: 480,
        medium: 768,
        large: 990,
        widescreen: 1400
    }, window.theme.keyboardKeys = {
        TAB: 9,
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        LEFTARROW: 37,
        RIGHTARROW: 39
    };
    const y = ["neighbor--white", "neighbor--light", "neighbor--dark", "neighbor--black"];

    function f(t) {
        t.querySelectorAll("shopify-section").forEach((t => {
            t.classList.remove(y)
        })), t.querySelectorAll(".bg--neutral").forEach((t => {
            t.parentElement.classList.add("neighbor--white")
        })), t.querySelectorAll(".bg--accent").forEach((t => {
            t.parentElement.classList.add("neighbor--light")
        })), t.querySelectorAll(".bg--invert").forEach((t => {
            t.parentElement.classList.add("neighbor--dark")
        })), t.querySelectorAll(".bg--invert--accent").forEach((t => {
            t.parentElement.classList.add("neighbor--black")
        }))
    }

    function g(t) {
        t.querySelectorAll(".float__wrapper").forEach((t => {
            const e = t.querySelector("label"),
                i = t.querySelector("input, textarea");
            e && i.addEventListener("keyup", (t => {
                "" !== t.target.value ? e.classList.add("label--float") : e.classList.remove("label--float")
            })), i && i.value && i.value.length && e.classList.add("label--float")
        }))
    }

    function w(t) {
        t.querySelectorAll(".errors").forEach((t => {
            t.setAttribute("tabindex", "0"), t.setAttribute("aria-live", "assertive"), t.setAttribute("role", "alert")
        }))
    }

    function b(t) {
        document.addEventListener("theme:resize", v.bind(null, t)), v(t)
    }

    function v(t) {
        window.innerWidth > window.theme.sizes.small && setTimeout((() => {
            t.querySelectorAll(".lazypostload-desktop").forEach((t => {
                t.style.visibility = "visible"
            }))
        }), 2e3)
    }

    function S() {
        const t = {};
        return t.windowHeight = window.innerHeight, t.announcementHeight = T("#shopify-section-announcement"), t.footerHeight = T('[data-section-type*="footer"]'), t.menuHeight = T("[data-header-height]"), t.headerHeight = t.menuHeight + t.announcementHeight, t.logoHeight = function() {
            const t = T("[data-footer-logo]");
            return t > 0 ? t + 20 : 0
        }(), t
    }

    function E() {
        document.addEventListener("theme:resize", L),
            function() {
                const {
                    windowHeight: t,
                    announcementHeight: e,
                    headerHeight: i,
                    logoHeight: s,
                    menuHeight: o,
                    footerHeight: r
                } = S();
                document.documentElement.style.setProperty("--footer-logo", `${s}px`), document.documentElement.style.setProperty("--full-screen", `${t}px`), document.documentElement.style.setProperty("--three-quarters", .75 * t + "px"), document.documentElement.style.setProperty("--two-thirds", .66 * t + "px"), document.documentElement.style.setProperty("--one-half", .5 * t + "px"), document.documentElement.style.setProperty("--one-third", .33 * t + "px"), document.documentElement.style.setProperty("--one-fifth", .2 * t + "px"), document.documentElement.style.setProperty("--menu-height", `${o}px`), document.documentElement.style.setProperty("--announcement-height", `${e}px`), document.documentElement.style.setProperty("--header-height", `${i}px`), document.documentElement.style.setProperty("--footer-height", `${r}px`), document.documentElement.style.setProperty("--content-full", t - i - s / 2 + "px"), document.documentElement.style.setProperty("--content-min", t - i - r + "px"), document.documentElement.style.setProperty("--scrollbar-width", window.innerWidth - document.documentElement.clientWidth + "px")
            }()
    }

    function L() {
        const {
            windowHeight: t,
            announcementHeight: e,
            headerHeight: i,
            logoHeight: s,
            menuHeight: o,
            footerHeight: r
        } = S();
        document.documentElement.style.setProperty("--menu-height", `${o}px`), document.documentElement.style.setProperty("--announcement-height", `${e}px`), document.documentElement.style.setProperty("--header-height", `${i}px`), document.documentElement.style.setProperty("--footer-height", `${r}px`), document.documentElement.style.setProperty("--content-full", t - i - s / 2 + "px"), document.documentElement.style.setProperty("--content-min", t - i - r + "px")
    }

    function T(t) {
        const e = document.querySelector(t);
        return e ? e.clientHeight : 0
    }

    function k(t, e) {
        let i = 64,
            s = 0;
        e.forEach((t => {
            if (t.offsetHeight > s) {
                const e = parseInt(window.getComputedStyle(t).marginTop) + parseInt(window.getComputedStyle(t).marginBottom);
                e > i && (i = e), s = t.offsetHeight
            }
        }));
        const o = t.querySelectorAll("[data-overflow-background]");
        [t, ...o].forEach((t => {
            t.style.setProperty("min-height", `calc(${s+i}px + var(--menu-height))`)
        }))
    }

    function A(t) {
        let e = document.querySelector("[data-footer-logo]") ? document.querySelector("[data-footer-logo]").clientHeight + 20 : 0;
        const i = document.querySelector("#MainContent .shopify-section:last-child [data-section-id]"),
            s = i ? i.getAttribute("data-section-id") : null;
        if ((null !== s && t.getAttribute("data-section-id") !== s || !i) && (e = 0), window.innerWidth < window.theme.sizes.medium) {
            return void t.querySelectorAll("[data-overflow-frame]").forEach((t => {
                const e = t.querySelectorAll("[data-overflow-content]");
                k(t, e)
            }))
        }
        const o = 2 * parseInt(getComputedStyle(t).getPropertyValue("--outer"));
        let r = 0;
        const n = t.querySelectorAll("[data-overflow-frame]");
        t.querySelectorAll("[data-overflow-content]").forEach((t => {
            t.offsetHeight > r && (r = t.offsetHeight)
        }));
        [...n, ...t.querySelectorAll("[data-overflow-background]")].forEach((t => {
            t.style.setProperty("min-height", `${r+o}px`)
        })), t.style.setProperty("min-height", `${r+o+2+e}px`)
    }

    function q(e) {
        const i = e.querySelectorAll(".js-overflow-container");
        if (i) {
            i.forEach((t => {
                const e = t.querySelectorAll(".js-overflow-content");
                k(t, e), document.addEventListener("theme:resize", (() => {
                    k(t, e)
                }))
            }));
            const s = e.querySelectorAll("[data-slideshow-wrapper]");
            s.length && s.forEach((e => {
                void 0 !== t.data(e) && e.dispatchEvent(new CustomEvent("theme:slideshow:reload", {
                    bubbles: !0
                }))
            }))
        }
        const s = e.querySelectorAll("[data-overflow-wrapper]");
        s && s.forEach((t => {
            A(t), document.addEventListener("theme:resize", (() => {
                A(t)
            }))
        }))
    }

    function x(t, e) {
        let i;
        return (...s) => {
            clearTimeout(i), i = setTimeout((() => t.apply(this, s)), e)
        }
    }
    let C = window.innerWidth,
        P = window.innerHeight;
    let _ = window.pageYOffset,
        $ = null,
        M = null,
        H = null,
        D = null,
        I = 0;

    function B(t) {
        let i = t.target;
        t.detail && t.detail instanceof Element && (i = t.detail), e.disableBodyScroll(i), document.documentElement.setAttribute("data-scroll-locked", "")
    }

    function F() {
        if (I = setTimeout((() => {
                document.body.removeAttribute("data-drawer-closing")
            }), 20), document.body.hasAttribute("data-drawer-closing")) return document.body.removeAttribute("data-drawer-closing"), void(I && clearTimeout(I));
        document.body.setAttribute("data-drawer-closing", ""), document.documentElement.removeAttribute("data-scroll-locked"), e.clearAllBodyScrollLocks()
    }
    window.addEventListener("resize", x((function() {
            document.dispatchEvent(new CustomEvent("theme:resize", {
                bubbles: !0
            })), C !== window.innerWidth && (document.dispatchEvent(new CustomEvent("theme:resize:width", {
                bubbles: !0
            })), C = window.innerWidth), P !== window.innerHeight && (document.dispatchEvent(new CustomEvent("theme:resize:height", {
                bubbles: !0
            })), P = window.innerHeight)
        }), 50)),
        function() {
            let t;
            window.addEventListener("scroll", (function() {
                t && window.cancelAnimationFrame(t), t = window.requestAnimationFrame((function() {
                    ! function() {
                        const t = window.pageYOffset;
                        t > _ ? (M = !0, $ = !1) : t < _ ? (M = !1, $ = !0) : ($ = null, M = null), _ = t, document.dispatchEvent(new CustomEvent("theme:scroll", {
                            detail: {
                                up: $,
                                down: M,
                                position: t
                            },
                            bubbles: !1
                        })), $ && !H && document.dispatchEvent(new CustomEvent("theme:scroll:up", {
                            detail: {
                                position: t
                            },
                            bubbles: !1
                        })), M && !D && document.dispatchEvent(new CustomEvent("theme:scroll:down", {
                            detail: {
                                position: t
                            },
                            bubbles: !1
                        })), D = M, H = $
                    }()
                }))
            }), {
                passive: !0
            }), window.addEventListener("theme:scroll:lock", B), window.addEventListener("theme:scroll:unlock", F)
        }(), window.addEventListener("load", (() => {
            E(), g(document), w(document), f(document), m(document), q(document), b(document)
        })), document.addEventListener("shopify:section:load", (t => {
            const e = t.target;
            g(e), w(e), m(e), f(e), q(e), b(e)
        })), document.addEventListener("shopify:section:reorder", (() => {
            document.dispatchEvent(new CustomEvent("header:check", {
                bubbles: !1
            }))
        }));
    const W = (t, e = !1, i = "block") => {
        t && (e ? t.style.removeProperty("display") : t.style.display = i)
    };

    function O(t) {
        this.status = t.status || null, this.headers = t.headers || null, this.json = t.json || null, this.body = t.body || null
    }
    O.prototype = Error.prototype;
    const j = {
            scrollbar: "data-scrollbar-slider",
            scrollbarArrowPrev: "[data-scrollbar-arrow-prev]",
            scrollbarArrowNext: "[data-scrollbar-arrow-next]"
        },
        N = {
            hide: "is-hidden",
            siblingLinks: "siblings__link "
        },
        V = {
            delay: 200
        };
    class R {
        constructor(t) {
            this.scrollbar = t, this.arrowNext = this.scrollbar.parentNode.querySelector(j.scrollbarArrowNext), this.arrowPrev = this.scrollbar.parentNode.querySelector(j.scrollbarArrowPrev), this.init(), this.resize(), this.scrollbar.hasAttribute(j.scrollbar) && this.scrollToVisibleElement()
        }
        init() {
            this.arrowNext && this.arrowPrev && (window.isRTL ? this.togglePrevArrow() : this.toggleNextArrow(), this.events())
        }
        resize() {
            document.addEventListener("theme:resize", (() => {
                window.isRTL ? this.togglePrevArrow() : this.toggleNextArrow()
            }))
        }
        events() {
            this.arrowNext.addEventListener("click", (t => {
                t.preventDefault(), this.goToNext()
            })), this.arrowPrev.addEventListener("click", (t => {
                t.preventDefault(), this.goToPrev()
            })), this.scrollbar.addEventListener("scroll", (() => {
                this.togglePrevArrow(), this.toggleNextArrow()
            }))
        }
        goToNext() {
            const t = this.scrollbar.getBoundingClientRect().width / 2 + this.scrollbar.scrollLeft;
            this.move(t), this.arrowPrev.classList.remove(N.hide), this.toggleNextArrow()
        }
        goToPrev() {
            const t = this.scrollbar.scrollLeft - this.scrollbar.getBoundingClientRect().width / 2;
            this.move(t), this.arrowNext.classList.remove(N.hide), this.togglePrevArrow()
        }
        toggleNextArrow() {
            setTimeout((() => {
                window.isRTL ? this.arrowNext.classList.toggle(N.hide, 0 === this.scrollbar.scrollLeft) : this.arrowNext.classList.toggle(N.hide, Math.round(this.scrollbar.scrollLeft + this.scrollbar.getBoundingClientRect().width + 1) >= this.scrollbar.scrollWidth)
            }), V.delay)
        }
        togglePrevArrow() {
            setTimeout((() => {
                window.isRTL ? this.arrowPrev.classList.toggle(N.hide, Math.abs(this.scrollbar.scrollLeft) + this.scrollbar.getBoundingClientRect().width + 1 >= this.scrollbar.scrollWidth) : this.arrowPrev.classList.toggle(N.hide, this.scrollbar.scrollLeft <= 0)
            }), V.delay)
        }
        scrollToVisibleElement() {
            [].forEach.call(this.scrollbar.children, (t => {
                t.addEventListener("click", (e => {
                    e.target.classList.contains(N.siblingLinks) || e.target.closest(`.${N.siblingLinks}`) || e.preventDefault(), this.move(t.offsetLeft - t.clientWidth)
                }))
            }))
        }
        move(t) {
            this.scrollbar.scrollTo({
                top: 0,
                left: t,
                behavior: "smooth"
            })
        }
    }
    const z = "[data-sibling-inner]";
    class U {
        constructor(t) {
            this.siblings = t.querySelectorAll(z), this.init()
        }
        init() {
            this.siblings.forEach((t => {
                new R(t)
            }))
        }
    }
    const J = {
            onLoad() {
                new U(this.container)
            }
        },
        K = {
            expires: 7,
            path: "/",
            domain: window.location.hostname
        };
    class X {
        constructor(t = {}) {
            this.options = {
                ...K,
                ...t
            }
        }
        write(t) {
            document.cookie = `${this.options.name}=${t}; expires=${this.options.expires}; path=${this.options.path}; domain=${this.options.domain}`
        }
        read() {
            let t = [];
            const e = document.cookie.split("; ").find((t => t.startsWith(this.options.name)));
            if (-1 !== document.cookie.indexOf("; ") && e) {
                const e = document.cookie.split("; ").find((t => t.startsWith(this.options.name))).split("=")[1];
                null !== e && (t = e.split(","))
            }
            return t
        }
        destroy() {
            document.cookie = `${this.options.name}=null; expires=${this.options.expires}; path=${this.options.path}; domain=${this.options.domain}`
        }
        remove(t) {
            const e = this.read(),
                i = e.indexOf(t); - 1 !== i && (e.splice(i, 1), this.write(e))
        }
    }
    const Y = 4,
        Q = 10,
        G = "[data-recently-viewed-products]",
        Z = "data-limit",
        tt = "[data-recent-link-tab]",
        et = "[data-recent-wrapper]",
        it = "[data-recently-viewed-tab]",
        st = "[data-tabs-holder-scroll]",
        ot = "[data-api-content]",
        rt = "data-minimum",
        nt = {
            expires: 90,
            name: "shopify_recently_viewed"
        },
        at = [],
        lt = [];
    class ct {
        constructor(t) {
            this.container = t.container, this.cookie = new X(nt), this.wrapper = this.container.querySelector(G), null !== this.wrapper && (this.howManyToShow = parseInt(this.container.querySelector(et).getAttribute(Z)) || Y, this.minimum = parseInt(this.container.querySelector(et).getAttribute(rt)), this.recentViewedTab = this.container.querySelector(it), this.recentViewedLink = this.container.querySelector(tt), this.tabsHolderScroll = this.container.querySelector(st), this.renderProducts())
        }
        renderProducts() {
            const t = this.cookie.read(),
                e = [];
            let i = 0;
            if (t.length > 0) {
                for (let s = 0; s < t.length; s++) {
                    const o = t[s];
                    if (lt.includes(o)) continue;
                    const r = `${window.theme.routes.root_url}products/${o}?section_id=api-product-grid-item`;
                    if (e.push(r), i++, i === this.howManyToShow || i === t.length - 1) break
                }
                if (e.length > 0 && e.length >= this.minimum) {
                    this.container.classList.remove("hide"), this.recentViewedLink && this.recentViewedLink.previousElementSibling && this.tabsHolderScroll.classList.remove("hide");
                    const t = e.map((t => fetch(t, {
                            mode: "no-cors"
                        }).then(this.handleErrors))),
                        i = [];
                    Promise.allSettled(t).then((t => Promise.all(t.map((async t => {
                        "fulfilled" === t.status && i.push(await t.value.text())
                    }))))).then((() => {
                        i.forEach((t => {
                            const e = document.createElement("div"),
                                i = document.createElement("div");
                            e.innerHTML = t, i.classList.add("product-grid-slide"), i.innerHTML = e.querySelector(ot).innerHTML, this.wrapper.appendChild(i)
                        })), new U(this.container)
                    })).then((() => {
                        W(this.wrapper, !0), this.container.dispatchEvent(new CustomEvent("recent-products:added", {
                            bubbles: !0
                        }))
                    }))
                } else if (this.recentViewedTab) {
                    const t = Array.prototype.filter.call(this.recentViewedTab.parentNode.children, (t => t !== this.recentViewedTab)).length > 1;
                    this.recentViewedLink && this.recentViewedLink.previousElementSibling && this.tabsHolderScroll.classList.add("hide"), t || this.container.classList.add("hide")
                } else this.container.classList.add("hide")
            }
        }
        handleErrors(t) {
            return t.ok ? t : t.text().then((function(e) {
                throw new O({
                    status: t.statusText,
                    headers: t.headers,
                    text: e
                })
            }))
        }
    }
    class ht {
        constructor(t) {
            this.handle = t, this.cookie = new X(nt), void 0 !== this.handle && (lt.push(this.handle), this.updateCookie())
        }
        updateCookie() {
            let t = this.cookie.read();
            const e = t.indexOf(this.handle); - 1 === e ? (t.unshift(this.handle), t = t.splice(0, Q)) : (t.splice(e, 1), t.unshift(this.handle)), this.cookie.write(t)
        }
    }
    const dt = {
            onLoad() {
                at[this.id] = new ct(this)
            }
        },
        ut = "[data-address-wrapper]",
        pt = "[data-new-address-form]",
        mt = "[new-address-form-inner]",
        yt = ".address-new-toggle",
        ft = ".address-edit-toggle",
        gt = ".address-delete",
        wt = "hide",
        bt = "data-form-id",
        vt = "data-confirm-message",
        St = "Are you sure you wish to delete this address?",
        Et = "#EditAddress",
        Lt = "AddressCountryNew",
        Tt = "AddressProvinceNew",
        kt = "AddressProvinceContainerNew",
        At = ".address-country-option",
        qt = "AddressCountry",
        xt = "AddressProvince",
        Ct = "AddressProvinceContainer";
    class Pt {
        constructor(t) {
            this.section = t, this.addressNewForm = this.section.querySelector(pt), this.init()
        }
        init() {
            if (this.addressNewForm) {
                const t = this.section,
                    e = this.addressNewForm.querySelector(mt);
                this.customerAddresses();
                const i = t.querySelectorAll(yt);
                i.length && i.forEach((t => {
                    t.addEventListener("click", (function() {
                        e.classList.toggle(wt)
                    }))
                }));
                const s = t.querySelectorAll(ft);
                s.length && s.forEach((e => {
                    e.addEventListener("click", (function() {
                        const e = this.getAttribute(bt);
                        t.querySelector(`${Et}_${e}`).classList.toggle(wt)
                    }))
                }));
                const o = t.querySelectorAll(gt);
                o.length && o.forEach((t => {
                    t.addEventListener("click", (function() {
                        const t = this.getAttribute(bt),
                            e = this.getAttribute(vt);
                        confirm(e || St) && Shopify.postLink(window.theme.routes.account_addresses_url + "/" + t, {
                            parameters: {
                                _method: "delete"
                            }
                        })
                    }))
                }))
            }
        }
        customerAddresses() {
            Shopify.CountryProvinceSelector && new Shopify.CountryProvinceSelector(Lt, Tt, {
                hideElement: kt
            });
            this.section.querySelectorAll(At).forEach((t => {
                const e = t.getAttribute(bt),
                    i = `${qt}_${e}`,
                    s = `${xt}_${e}`,
                    o = `${Ct}_${e}`;
                new Shopify.CountryProvinceSelector(i, s, {
                    hideElement: o
                })
            }))
        }
    }
    const _t = document.querySelector(ut);
    _t && new Pt(_t), document.querySelector("#RecoverPassword") && function() {
        var t = {
            recoverPasswordForm: "#RecoverPassword",
            hideRecoverPasswordLink: "#HideRecoverPasswordLink"
        };

        function e(t) {
            t.preventDefault(), s()
        }

        function i() {
            "#recover" === window.location.hash && s()
        }

        function s() {
            var t = document.querySelector("#CustomerEmail").value;
            document.querySelector("#RecoverEmail").value = t, document.querySelector("#RecoverPasswordForm").classList.toggle("display-none"), document.querySelector("#CustomerLoginForm").classList.toggle("display-none")
        }

        function o() {
            document.querySelector(".reset-password-success") && document.querySelector("#ResetSuccess").classList.remove("display-none")
        }
        i(), o(), document.querySelector(t.recoverPasswordForm).addEventListener("click", e), document.querySelector(t.hideRecoverPasswordLink).addEventListener("click", e)
    }(), window.Shopify = window.Shopify || {}, window.Shopify.theme = window.Shopify.theme || {}, window.Shopify.theme.sections = window.Shopify.theme.sections || {}, window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {}, window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];
    const $t = window.Shopify.theme.sections.registered,
        Mt = window.Shopify.theme.sections.instances,
        Ht = "data-section-id",
        Dt = "data-section-type";
    class It {
        constructor(t = null, e = []) {
            this.type = t, this.components = function(t) {
                if (void 0 !== t && "object" != typeof t || null === t) throw new TypeError("Theme Sections: The components object provided is not a valid");
                return t
            }(e), this.callStack = {
                onLoad: [],
                onUnload: [],
                onSelect: [],
                onDeselect: [],
                onBlockSelect: [],
                onBlockDeselect: [],
                onReorder: []
            }, e.forEach((t => {
                for (const [e, i] of Object.entries(t)) {
                    const t = this.callStack[e];
                    Array.isArray(t) && "function" == typeof i ? t.push(i) : (console.warn(`Unregisted function: '${e}' in component: '${this.type}'`), console.warn(i))
                }
            }))
        }
        getStack() {
            return this.callStack
        }
    }
    class Bt {
        constructor(t, e) {
            this.container = function(t) {
                if (!(t instanceof Element)) throw new TypeError("Theme Sections: Attempted to load section. The section container provided is not a DOM element.");
                if (null === t.getAttribute(Ht)) throw new Error("Theme Sections: The section container provided does not have an id assigned to the " + Ht + " attribute.");
                return t
            }(t), this.id = t.getAttribute(Ht), this.type = e.type, this.callStack = e.getStack();
            try {
                this.onLoad()
            } catch (t) {
                console.warn(`Error in section: ${this.id}`), console.warn(this), console.warn(t)
            }
        }
        callFunctions(t, e = null) {
            this.callStack[t].forEach((t => {
                const i = {
                    id: this.id,
                    type: this.type,
                    container: this.container
                };
                e ? t.call(i, e) : t.call(i)
            }))
        }
        onLoad() {
            this.callFunctions("onLoad")
        }
        onUnload() {
            this.callFunctions("onUnload")
        }
        onSelect(t) {
            this.callFunctions("onSelect", t)
        }
        onDeselect(t) {
            this.callFunctions("onDeselect", t)
        }
        onBlockSelect(t) {
            this.callFunctions("onBlockSelect", t)
        }
        onBlockDeselect(t) {
            this.callFunctions("onBlockDeselect", t)
        }
        onReorder(t) {
            this.callFunctions("onReorder", t)
        }
    }

    function Ft(t, e) {
        if ("string" != typeof t) throw new TypeError("Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered");
        if (void 0 !== $t[t]) throw new Error('Theme Sections: A section of type "' + t + '" has already been registered. You cannot register the same section type twice');
        Array.isArray(e) || (e = [e]);
        const i = new It(t, e);
        return $t[t] = i, $t
    }

    function Wt(t, e) {
        t = Nt(t), void 0 === e && (e = document.querySelectorAll("[" + Dt + "]")), e = Vt(e), t.forEach((function(t) {
            const i = $t[t];
            void 0 !== i && (e = e.filter((function(e) {
                return !(Ot(e).length > 0) && (null !== e.getAttribute(Dt) && (e.getAttribute(Dt) !== t || (Mt.push(new Bt(e, i)), !1)))
            })))
        }))
    }

    function Ot(t) {
        var e = [];
        if (NodeList.prototype.isPrototypeOf(t) || Array.isArray(t)) var i = t[0];
        if (t instanceof Element || i instanceof Element) Vt(t).forEach((function(t) {
            e = e.concat(Mt.filter((function(e) {
                return e.container === t
            })))
        }));
        else if ("string" == typeof t || "string" == typeof i) {
            Nt(t).forEach((function(t) {
                e = e.concat(Mt.filter((function(e) {
                    return e.type === t
                })))
            }))
        }
        return e
    }

    function jt(t) {
        for (var e, i = 0; i < Mt.length; i++)
            if (Mt[i].id === t) {
                e = Mt[i];
                break
            } return e
    }

    function Nt(t) {
        return "*" === t ? t = Object.keys($t) : "string" == typeof t ? t = [t] : t.constructor === Bt ? t = [t.prototype.type] : Array.isArray(t) && t[0].constructor === Bt && (t = t.map((function(t) {
            return t.type
        }))), t = t.map((function(t) {
            return t.toLowerCase()
        }))
    }

    function Vt(t) {
        return NodeList.prototype.isPrototypeOf(t) && t.length > 0 ? t = Array.prototype.slice.call(t) : NodeList.prototype.isPrototypeOf(t) && 0 === t.length || null === t ? t = [] : !Array.isArray(t) && t instanceof Element && (t = [t]), t
    }

    function Rt(t, e) {
        e = e || {}, t.focus(), void 0 !== e.className && t.classList.add(e.className), t.addEventListener("blur", (function i(s) {
            s.target.removeEventListener(s.type, i), void 0 !== e.className && t.classList.remove(e.className)
        }))
    }

    function zt(t) {
        return t = t || {}, Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).filter((function(e) {
            if ("#" === e.hash || "" === e.hash) return !1;
            if (t.ignore && e.matches(t.ignore)) return !1;
            if (i = e.hash.substr(1), null === document.getElementById(i)) return !1;
            var i, s = document.querySelector(e.hash);
            return !!s && (e.addEventListener("click", (function() {
                Rt(s, t)
            })), !0)
        }))
    }
    window.Shopify.designMode && (document.addEventListener("shopify:section:load", (function(t) {
        var e = t.detail.sectionId,
            i = t.target.querySelector("[" + Ht + '="' + e + '"]');
        null !== i && Wt(i.getAttribute(Dt), i)
    })), document.addEventListener("shopify:section:reorder", (function(t) {
        var e = t.detail.sectionId,
            i = t.target.querySelector("[" + Ht + '="' + e + '"]');
        "object" == typeof Ot(i)[0] && Ot(i).forEach((function(t) {
            t.onReorder()
        }))
    })), document.addEventListener("shopify:section:unload", (function(t) {
        var e = t.detail.sectionId,
            i = t.target.querySelector("[" + Ht + '="' + e + '"]');
        "object" == typeof Ot(i)[0] && Ot(i).forEach((function(t) {
            var e = Mt.map((function(t) {
                return t.id
            })).indexOf(t.id);
            Mt.splice(e, 1), t.onUnload()
        }))
    })), document.addEventListener("shopify:section:select", (function(t) {
        var e = jt(t.detail.sectionId);
        "object" == typeof e && e.onSelect(t)
    })), document.addEventListener("shopify:section:deselect", (function(t) {
        var e = jt(t.detail.sectionId);
        "object" == typeof e && e.onDeselect(t)
    })), document.addEventListener("shopify:block:select", (function(t) {
        var e = jt(t.detail.sectionId);
        "object" == typeof e && e.onBlockSelect(t)
    })), document.addEventListener("shopify:block:deselect", (function(t) {
        var e = jt(t.detail.sectionId);
        "object" == typeof e && e.onBlockDeselect(t)
    })));
    var Ut = {};

    function Jt(t, e) {
        e = e || {};
        var i = function(t) {
                return Array.prototype.slice.call(t.querySelectorAll("[tabindex],[draggable],a[href],area,button:enabled,input:not([type=hidden]):enabled,object,select:enabled,textarea:enabled[data-focus-element]")).filter((function(t) {
                    return Boolean(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                }))
            }(t),
            s = e.elementToFocus || t,
            o = i[0],
            r = i[i.length - 1];
        Kt(), Ut.focusin = function(e) {
            t !== e.target && !t.contains(e.target) && o && o === e.target && o.focus(), e.target !== t && e.target !== r && e.target !== o || document.addEventListener("keydown", Ut.keydown)
        }, Ut.focusout = function() {
            document.removeEventListener("keydown", Ut.keydown)
        }, Ut.keydown = function(e) {
            9 === e.keyCode && (e.target !== r || e.shiftKey || (e.preventDefault(), o.focus()), e.target !== t && e.target !== o || !e.shiftKey || (e.preventDefault(), r.focus()))
        }, document.addEventListener("focusout", Ut.focusout), document.addEventListener("focusin", Ut.focusin), Rt(s, e)
    }

    function Kt() {
        document.removeEventListener("focusin", Ut.focusin), document.removeEventListener("focusout", Ut.focusout), document.removeEventListener("keydown", Ut.keydown)
    }
    const Xt = 'button, [href], select, textarea, [tabindex]:not([tabindex="-1"])';

    function Yt(t) {
        const e = `data-popup-${t}`;
        i.init({
            openTrigger: e,
            disableScroll: !0,
            onShow: (t, e, i) => {
                i.preventDefault();
                const s = t.querySelector(Xt);
                Jt(t, {
                    elementToFocus: s
                })
            },
            onClose: (t, e, i) => {
                i.preventDefault(), Kt(), e.focus()
            }
        })
    }
    const Qt = "[data-toggle-password-modal]",
        Gt = ".storefront-password-form .errors",
        Zt = {};
    class te {
        constructor(t) {
            this.container = t.container, this.trigger = this.container.querySelector(Qt), this.errors = this.container.querySelector(Gt), this.init()
        }
        init() {
            Yt("password"), this.errors && this.trigger.click()
        }
    }
    Ft("password", {
            onLoad() {
                Zt[this.id] = new te(this)
            }
        }),
        function() {
            var t = "#QrCode",
                e = ".giftcard__code";
            const i = document.querySelector(t);
            if (i) {
                function t() {
                    const t = i.getAttribute("data-identifier");
                    new QRCode(i, {
                        text: t,
                        width: 120,
                        height: 120
                    })
                }
                window.addEventListener("load", t)
            }
            const s = document.querySelector(e);
            if (s) {
                function t() {
                    var t = document.querySelector("#GiftCardDigits"),
                        e = "";
                    if (document.body.createTextRange)(e = document.body.createTextRange()).moveToElementText(t), e.select();
                    else if (window.getSelection) {
                        var i = window.getSelection();
                        (e = document.createRange()).selectNodeContents(t), i.removeAllRanges(), i.addRange(e)
                    }
                }
                s.addEventListener("click", t())
            }
        }();
    var ee = {};
    const ie = {
        onLoad() {
            ee[this.id] = [];
            this.container.querySelectorAll("[data-parallax-wrapper]").forEach((t => {
                const e = t.querySelector("[data-parallax-img]");
                ee[this.id].push(new s(e, {
                    center: !0,
                    round: !0,
                    frame: t
                }))
            }))
        },
        onUnload: function() {
            ee[this.id].forEach((t => {
                "function" == typeof t.destroy && t.destroy()
            }))
        }
    };
    Ft("article", ie);
    const se = "[data-ticker-scale]",
        oe = "[data-ticker-text]",
        re = "data-clone",
        ne = "ticker--animated",
        ae = "ticker--unloaded",
        le = "ticker__comparitor",
        ce = 1.63,
        he = 100;
    class de {
        constructor(t, e = !1) {
            this.frame = t, this.stopClone = e, this.scale = this.frame.querySelector(se), this.text = this.frame.querySelector(oe), this.comparitor = this.text.cloneNode(!0), this.comparitor.classList.add(le), this.frame.appendChild(this.comparitor), this.scale.classList.remove(ae), this.resizeEvent = x((() => this.checkWidth()), 300), this.listen()
        }
        unload() {
            document.removeEventListener("theme:resize", this.resizeEvent)
        }
        listen() {
            document.addEventListener("theme:resize", this.resizeEvent), this.checkWidth()
        }
        checkWidth() {
            const t = 2 * window.getComputedStyle(this.frame).paddingLeft.replace("px", "");
            if (this.frame.clientWidth - t < this.comparitor.clientWidth || this.stopClone) {
                if (this.text.classList.add(ne), 1 === this.scale.childElementCount && (this.clone = this.text.cloneNode(!0), this.clone.setAttribute("aria-hidden", !0), this.clone.setAttribute(re, ""), this.scale.appendChild(this.clone), this.stopClone))
                    for (let t = 0; t < 10; t++) {
                        const t = this.text.cloneNode(!0);
                        t.setAttribute("aria-hidden", !0), t.setAttribute(re, ""), this.scale.appendChild(t)
                    }
                const t = this.text.clientWidth / he * ce;
                this.scale.style.setProperty("--animation-time", `${t}s`)
            } else {
                this.text.classList.add(ne);
                let t = this.scale.querySelector(`[${re}]`);
                t && this.scale.removeChild(t), this.text.classList.remove(ne)
            }
        }
    }
    const ue = "data-slider-speed",
        pe = "data-slide",
        me = "data-slide-index";
    class ye {
        constructor(t, e) {
            this.container = t, this.slideshow = e;
            const i = this.slideshow.getAttribute(ue);
            this.speed = !!i && parseInt(i), this.slideshow && (this.flkty = null, this.init())
        }
        init() {
            const t = {
                initialIndex: 0,
                autoPlay: this.speed,
                contain: !0,
                pageDots: !1,
                adaptiveHeight: !0,
                wrapAround: !0,
                groupCells: !1,
                cellAlign: "left",
                freeScroll: !1,
                prevNextButtons: !0,
                draggable: !0,
                rightToLeft: window.isRTL,
                on: {
                    ready: () => {
                        setTimeout((() => {
                            this.slideshow.dispatchEvent(new CustomEvent("theme:announcement:loaded", {
                                bubbles: !0,
                                detail: {
                                    slider: this
                                }
                            }))
                        }), 50)
                    }
                }
            };
            this.flkty = new o(this.slideshow, t), document.addEventListener("theme:resize", (() => {
                this.flkty.resize()
            }))
        }
        onUnload() {
            this.slideshow && this.flkty && (this.flkty.options.watchCSS = !1, this.flkty.destroy())
        }
        onBlockSelect(t) {
            if (!this.slideshow) return;
            const e = this.slideshow.querySelector(`[${pe}="${t.detail.blockId}"]`);
            if (!e) return;
            const i = parseInt(e.getAttribute(me));
            this.flkty.selectCell(i), this.flkty.stopPlayer()
        }
        onBlockDeselect() {
            this.flkty.playPlayer()
        }
    }
    const fe = "[data-cart-message]",
        ge = "data-cart-message",
        we = "[data-left-to-spend]",
        be = "[data-cart-progress]",
        ve = "is-hidden",
        Se = "is-success";
    class Ee {
        constructor(t) {
            this.container = t, this.cartMessage = this.container.querySelectorAll(fe), this.cartMessage.length > 0 && this.init()
        }
        init() {
            this.cartFreeLimitShipping = 100 * Number(this.cartMessage[0].getAttribute("data-limit")), this.shippingAmount = 0, this.circumference = 28 * Math.PI, this.cartBarProgress(), this.listen()
        }
        listen() {
            document.addEventListener("theme:cart:change", function(t) {
                this.cart = t.detail.cart, this.render()
            }.bind(this))
        }
        render() {
            if (this.cart && this.cart.total_price) {
                const t = this.cart.total_price;
                this.freeShippingMessageHandle(t), this.cartMessage.length > 0 && (this.shippingAmount = t, this.updateProgress())
            }
        }
        freeShippingMessageHandle(t) {
            this.cartMessage.length > 0 && this.container.querySelectorAll(fe).forEach((e => {
                const i = e.hasAttribute(ge) && "true" === e.getAttribute(ge) && 0 !== t ? Se : ve;
                e.classList.toggle(i, t >= this.cartFreeLimitShipping)
            }))
        }
        cartBarProgress(t = null) {
            this.container.querySelectorAll(be).forEach((e => {
                this.setProgress(e, null === t ? e.getAttribute("data-percent") : t)
            }))
        }
        setProgress(t, e) {
            const i = this.circumference - e / 100 * this.circumference / 2;
            t.style.strokeDashoffset = i
            document.getElementById("cutom_progress_percent").value = e;
        }
        updateProgress() {
            const t = this.shippingAmount / this.cartFreeLimitShipping * 100,
                e = r.formatMoney(this.cartFreeLimitShipping - this.shippingAmount, theme.moneyFormat);
            this.container.querySelectorAll(we).forEach((t => {
                t.innerHTML = e.replace(".00", "")
            })), this.cartBarProgress(t > 100 ? 100 : t)
        }
    }
    const Le = "[data-bar]",
        Te = "[data-slide]",
        ke = "[data-ticker-frame]",
        Ae = "[data-announcement-slider]",
        qe = "data-slide",
        xe = "[data-ticker-scale]",
        Ce = "[data-ticker-text]",
        Pe = "data-target-referrer",
        _e = "data-slide",
        $e = "mobile",
        Me = "desktop",
        He = {};
    class De {
        constructor(t) {
            this.container = t.container, this.barHolder = this.container.querySelector(Le), this.locationPath = location.href, this.slides = this.barHolder.querySelectorAll(Te), this.slider = this.barHolder.querySelector(Ae), this.hasDeviceClass = "", new Ee(this.container), this.init()
        }
        init() {
            this.removeAnnouncement(), this.slider ? this.slider && this.slides && this.slides.length > 1 ? this.initSliders() : this.initTickers() : this.initTickers(!0)
        }
        removeAnnouncement() {
            for (let t = 0; t < this.slides.length; t++) {
                const e = this.slides[t];
                e.hasAttribute(Pe) && (-1 !== this.locationPath.indexOf(e.getAttribute(Pe)) || window.Shopify.designMode || e.parentNode.removeChild(e))
            }
        }
        initSliders() {
            this.slider = new ye(this.container, this.slider), this.slider.flkty.reposition(), this.barHolder.addEventListener("theme:announcement:loaded", (() => {
                this.initTickers()
            }))
        }
        initTickers(t = !1) {
            const e = this.barHolder.querySelector(ke);
            e && new de(e, t)
        }
        toggleTicker(t, e) {
            const i = document.querySelector(xe),
                s = document.querySelector(`[${qe}="${t.detail.blockId}"]`);
            e && s && (i.setAttribute("data-stop", ""), i.querySelectorAll(Ce).forEach((t => {
                t.classList.remove("ticker--animated"), t.style.transform = `translate3d(${-(s.offsetLeft-s.clientWidth)}px, 0, 0)`
            }))), !e && s && (i.querySelectorAll(Ce).forEach((t => {
                t.classList.add("ticker--animated"), t.removeAttribute("style")
            })), i.removeAttribute("data-stop"))
        }
        onBlockSelect(t) {
            if (this.slider && "function" == typeof this.slider.onBlockSelect) this.slider.onBlockSelect(t);
            else {
                document.querySelectorAll(`[${_e}="${t.detail.blockId}"]`).forEach((t => {
                    t.classList.contains($e) && (this.hasDeviceClass = $e), t.classList.contains(Me) && (this.hasDeviceClass = Me), "" !== this.hasDeviceClass && t.classList.remove(this.hasDeviceClass)
                })), this.toggleTicker(t, !0)
            }
        }
        onBlockDeselect(t) {
            if (this.slider && "function" == typeof this.slider.onBlockDeselect) this.slider.onBlockDeselect(t);
            else {
                if ("" !== this.hasDeviceClass) {
                    document.querySelectorAll(`[${_e}="${t.detail.blockId}"]`).forEach((t => {
                        t.classList.add(this.hasDeviceClass)
                    }))
                }
                this.toggleTicker(t, !1)
            }
        }
    }
    Ft("announcement", [{
        onLoad() {
            He[this.id] = [], He[this.id].push(new De(this))
        },
        onBlockSelect(t) {
            He[this.id].forEach((e => {
                "function" == typeof e.onBlockSelect && e.onBlockSelect(t)
            }))
        },
        onBlockDeselect(t) {
            He[this.id].forEach((e => {
                "function" == typeof e.onBlockSelect && e.onBlockDeselect(t)
            }))
        }
    }]), Ft("blog", ie);
    var Ie = "[data-drawer]",
        Be = "[data-drawer-scrolls]",
        Fe = "[data-drawer-underlay]",
        We = "[data-stagger-animation]",
        Oe = "data-drawer-toggle",
        je = 'button, [href], select, textarea, [tabindex]:not([tabindex="-1"])',
        Ne = "drawer--visible",
        Ve = "display-none",
        Re = {};
    class ze {
        constructor(t) {
            this.drawer = t, this.drawerScrolls = this.drawer.querySelector(Be), this.underlay = this.drawer.querySelector(Fe), this.key = this.drawer.dataset.drawer;
            const e = `[${Oe}='${this.key}']`;
            this.buttons = document.querySelectorAll(e), this.staggers = this.drawer.querySelectorAll(We), this.connectToggle(), this.connectDrawer(), this.closers(), this.staggerChildAnimations()
        }
        unload() {}
        connectToggle() {
            this.buttons.forEach((t => {
                t.addEventListener("click", function(t) {
                    t.preventDefault(), this.drawer.dispatchEvent(new CustomEvent("theme:drawer:toggle", {
                        bubbles: !1
                    }))
                }.bind(this))
            }))
        }
        connectDrawer() {
            this.drawer.addEventListener("theme:drawer:toggle", function() {
                this.drawer.classList.contains(Ne) ? this.drawer.dispatchEvent(new CustomEvent("theme:drawer:close", {
                    bubbles: !1
                })) : this.drawer.dispatchEvent(new CustomEvent("theme:drawer:open", {
                    bubbles: !1
                }))
            }.bind(this)), this.drawer.addEventListener("theme:drawer:close", this.hideDrawer.bind(this)), this.drawer.addEventListener("theme:drawer:open", this.showDrawer.bind(this))
        }
        staggerChildAnimations() {
            this.staggers.forEach((t => {
                t.querySelectorAll(":scope > * > [data-animates]").forEach(((t, e) => {
                    t.style.transitionDelay = 50 * e + 10 + "ms"
                }))
            }))
        }
        closers() {
            this.drawer.addEventListener("keyup", function(t) {
                t.which === window.theme.keyboardKeys.ESCAPE && (this.hideDrawer(), this.buttons[0].focus())
            }.bind(this)), this.underlay.addEventListener("click", function() {
                this.hideDrawer()
            }.bind(this))
        }
        showDrawer() {
            this.drawer.classList.remove(Ve), setTimeout((() => {
                this.buttons.forEach((t => t.setAttribute("aria-expanded", !0))), this.drawer.classList.add(Ne), this.drawerScrolls.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                    bubbles: !0
                }));
                const t = this.drawer.querySelector(je);
                Jt(this.drawer, {
                    elementToFocus: t
                })
            }), 1)
        }
        hideDrawer() {
            this.buttons.forEach((t => t.setAttribute("aria-expanded", !0))), this.drawer.classList.remove(Ne), this.drawerScrolls.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            })), document.dispatchEvent(new CustomEvent("theme:sliderule:close", {
                bubbles: !1
            })), Kt(), setTimeout((() => {
                this.drawer.classList.contains(Ne) || this.drawer.classList.add(Ve)
            }), 800)
        }
    }
    const Ue = {
            onLoad() {
                Re[this.id] = [];
                this.container.querySelectorAll(Ie).forEach((t => {
                    Re[this.id].push(new ze(t))
                }))
            },
            onUnload: function() {
                Re[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            }
        },
        Je = "#shopify-section-announcement",
        Ke = "data-header-transparent",
        Xe = "[data-header-wrapper] header",
        Ye = "js__header__stuck",
        Qe = "js__header__stuck--animated",
        Ge = "js__header__stuck--trigger-animation",
        Ze = "js__header__stuck__backdrop";
    let ti = {};
    class ei {
        constructor(t) {
            this.wrapper = t, this.type = this.wrapper.dataset.headerSticky, this.transparent = this.wrapper.dataset.headerTransparent, this.sticks = "sticky" === this.type, this.animated = "directional" === this.type, this.currentlyStuck = !1, this.cls = this.wrapper.classList;
            const e = document.querySelector(Je),
                i = e ? e.clientHeight : 0,
                s = document.querySelector(Xe).clientHeight;
            this.blur = s + i, this.stickDown = s + i, this.stickUp = i, "false" !== this.wrapper.getAttribute(Ke) && (this.blur = i), this.sticks && (this.stickDown = i, this.scrollDownInit()), this.listen()
        }
        unload() {
            document.removeEventListener("theme:scroll", this.listen), document.removeEventListener("theme:scroll:up", this.scrollUpDirectional), document.removeEventListener("theme:scroll:down", this.scrollDownDirectional)
        }
        listen() {
            (this.sticks || this.animated) && document.addEventListener("theme:scroll", (t => {
                t.detail.down ? (!this.currentlyStuck && t.detail.position > this.stickDown && this.stickSimple(), !this.currentlyBlurred && t.detail.position > this.blur && this.addBlur()) : (t.detail.position <= this.stickUp && this.unstickSimple(), t.detail.position <= this.blur && this.removeBlur())
            })), this.animated && (document.addEventListener("theme:scroll:up", this.scrollUpDirectional.bind(this)), document.addEventListener("theme:scroll:down", this.scrollDownDirectional.bind(this)))
        }
        stickSimple() {
            this.animated && this.cls.add(Qe), this.cls.add(Ye), this.wrapper.setAttribute(Ke, !1), this.currentlyStuck = !0
        }
        unstickSimple() {
            this.cls.remove(Ye), this.wrapper.setAttribute(Ke, this.transparent), this.animated && this.cls.remove(Qe), this.currentlyStuck = !1
        }
        scrollDownInit() {
            window.scrollY > this.stickDown && this.stickSimple(), window.scrollY > this.blur && this.addBlur()
        }
        stickDirectional() {
            this.cls.add(Ge)
        }
        unstickDirectional() {
            this.cls.remove(Ge)
        }
        scrollDownDirectional() {
            this.unstickDirectional()
        }
        scrollUpDirectional() {
            window.scrollY <= this.stickDown ? this.unstickDirectional() : this.stickDirectional()
        }
        addBlur() {
            this.cls.add(Ze), this.currentlyBlurred = !0
        }
        removeBlur() {
            this.cls.remove(Ze), this.currentlyBlurred = !1
        }
    }
    const ii = {
            onLoad() {
                ti = new ei(this.container)
            },
            onUnload: function() {
                "function" == typeof ti.unload && ti.unload()
            }
        },
        si = "data-hover-disclosure-toggle",
        oi = "[data-hover-disclosure]",
        ri = "[data-top-link]",
        ni = "[data-header-wrapper]",
        ai = "[data-stagger]",
        li = "[data-stagger-first]",
        ci = "[data-stagger-second]",
        hi = "[data-grid-item], [data-header-image]",
        di = "is-visible",
        ui = "meganav--visible";
    let pi = {},
        mi = {};
    class yi {
        constructor(t) {
            this.disclosure = t, this.wrapper = t.closest(ni), this.key = this.disclosure.id;
            const e = `[${si}='${this.key}']`;
            this.trigger = document.querySelector(e), this.link = this.trigger.querySelector(ri), this.grandparent = this.trigger.classList.contains("grandparent"), this.trigger.setAttribute("aria-haspopup", !0), this.trigger.setAttribute("aria-expanded", !1), this.trigger.setAttribute("aria-controls", this.key), this.connectHoverToggle(), this.handleTablets(), this.staggerChildAnimations()
        }
        onBlockSelect(t) {
            this.disclosure.contains(t.target) && this.showDisclosure()
        }
        onBlockDeselect(t) {
            this.disclosure.contains(t.target) && this.hideDisclosure()
        }
        showDisclosure() {
            this.grandparent ? this.wrapper.classList.add(ui) : this.wrapper.classList.remove(ui), this.trigger.setAttribute("aria-expanded", !0), this.trigger.classList.add(di), this.disclosure.classList.add(di)
        }
        hideDisclosure() {
            this.disclosure.classList.remove(di), this.trigger.classList.remove(di), this.trigger.setAttribute("aria-expanded", !1), this.wrapper.classList.remove(ui)
        }
        staggerChildAnimations() {
            this.disclosure.querySelectorAll(ai).forEach(((t, e) => {
                t.style.transitionDelay = 50 * e + 10 + "ms"
            }));
            this.disclosure.querySelectorAll(li).forEach(((t, e) => {
                const i = 150 * e;
                t.style.transitionDelay = `${i}ms`, t.parentElement.querySelectorAll(ci).forEach(((t, e) => {
                    const s = 20 * (e + 1);
                    t.style.transitionDelay = `${i+s}ms`
                }))
            }));
            this.disclosure.querySelectorAll(hi).forEach(((t, e) => {
                t.style.transitionDelay = 80 * (e + 1) + "ms"
            }))
        }
        handleTablets() {
            this.trigger.addEventListener("touchstart", function(t) {
                this.disclosure.classList.contains(di) || (t.preventDefault(), this.showDisclosure())
            }.bind(this), {
                passive: !0
            })
        }
        connectHoverToggle() {
            this.trigger.addEventListener("mouseenter", this.showDisclosure.bind(this)), this.link.addEventListener("focus", this.showDisclosure.bind(this)), this.trigger.addEventListener("mouseleave", this.hideDisclosure.bind(this)), this.trigger.addEventListener("focusout", function(t) {
                this.trigger.contains(t.relatedTarget) || this.hideDisclosure()
            }.bind(this)), this.disclosure.addEventListener("keyup", function(t) {
                t.which === window.theme.keyboardKeys.ESCAPE && this.hideDisclosure()
            }.bind(this))
        }
    }
    const fi = {
            onLoad() {
                pi[this.id] = [], mi = this.container.querySelectorAll(oi), mi.forEach((t => {
                    pi[this.id].push(new yi(t))
                }))
            },
            onBlockSelect(t) {
                pi[this.id].forEach((e => {
                    "function" == typeof e.onBlockSelect && e.onBlockSelect(t)
                }))
            },
            onBlockDeselect(t) {
                pi[this.id].forEach((e => {
                    "function" == typeof e.onBlockDeselect && e.onBlockDeselect(t)
                }))
            },
            onUnload: function() {
                pi[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            }
        },
        gi = "[data-main-menu-text-item]",
        wi = "[data-text-items-wrapper]",
        bi = ".navtext",
        vi = "data-menu-active",
        Si = "[data-header-wrapper]",
        Ei = "data-underline-current",
        Li = ".menu__item.main-menu--active .navtext, .header__desktop__button.main-menu--active .navtext";
    let Ti = {},
        ki = null;
    class Ai {
        constructor(t) {
            this.wrapper = t, this.itemList = this.wrapper.querySelectorAll(gi), this.sectionOuter = document.querySelector(Si), this.underlineCurrent = "true" === this.sectionOuter.getAttribute(Ei), this.defaultItem = null, this.underlineCurrent && (this.defaultItem = this.wrapper.querySelector(Li)), this.setDefault(), document.fonts.ready.then((() => {
                this.init()
            }))
        }
        init() {
            if (this.itemList.length) {
                if (this.listen(), this.listenResize(), this.textBottom = null, this.setHeight(), ki) {
                    if (this.defaultItem) {
                        const t = this.defaultItem.offsetLeft || 0;
                        this.sectionOuter.style.setProperty("--bar-left", `${t}px`)
                    }
                    this.reset()
                } else {
                    const t = this.sectionOuter.querySelector(gi).offsetLeft;
                    this.sectionOuter.style.setProperty("--bar-left", `${t}px`), this.sectionOuter.style.setProperty("--bar-width", "0px")
                }
                this.sectionOuter.style.setProperty("--bar-opacity", "1")
            }
        }
        unload() {
            document.removeEventListener("theme:resize", this.reset), ki = null
        }
        listenResize() {
            document.addEventListener("theme:resize", this.reset.bind(this))
        }
        setDefault() {
            this.defaultItem && (ki = {
                left: this.defaultItem.offsetLeft || null,
                width: this.defaultItem.clientWidth || null
            })
        }
        setHeight() {
            const t = this.wrapper.clientHeight,
                e = this.itemList[0].querySelector(bi).clientHeight,
                i = Math.floor(t / 2 - e / 2) - 4;
            this.textBottom !== i && (this.sectionOuter.style.setProperty("--bar-text", `${e}px`), this.sectionOuter.style.setProperty("--bar-bottom", `${i}px`), this.textBottom = i)
        }
        listen() {
            this.itemList.forEach((t => {
                t.addEventListener("mouseenter", (t => {
                    const e = t.target.querySelector(bi);
                    this.startBar(e)
                }))
            })), this.wrapper.addEventListener("mouseleave", this.clearBar.bind(this))
        }
        startBar(t) {
            this.setHeight();
            let e = "false" !== this.sectionOuter.getAttribute(vi),
                i = t.offsetLeft,
                s = t.clientWidth;
            e ? this.render(s, i) : (this.sectionOuter.setAttribute(vi, !0), this.render(0, i), setTimeout((() => {
                this.render(s, i)
            }), 10))
        }
        render(t, e) {
            this.sectionOuter.style.setProperty("--bar-left", `${e}px`), this.sectionOuter.style.setProperty("--bar-width", `${t}px`)
        }
        reset() {
            this.setDefault(), ki && ki.left && ki.width ? (this.sectionOuter.style.setProperty("--bar-left", `${ki.left}px`), this.sectionOuter.style.setProperty("--bar-width", `${ki.width}px`)) : this.sectionOuter.style.setProperty("--bar-width", "0px")
        }
        clearBar() {
            this.sectionOuter.setAttribute(vi, !1), setTimeout((() => {
                "false" !== this.sectionOuter.getAttribute(vi) || this.reset()
            }), 150)
        }
    }
    const qi = {
            onLoad() {
                Ti[this.id] = [];
                this.container.querySelectorAll(wi).forEach((t => {
                    Ti[this.id].push(new Ai(t))
                }))
            },
            onUnload: function() {
                Ti[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                })), delete Ti[this.id]
            }
        },
        xi = "data-header-cart-price",
        Ci = "data-header-cart-count",
        Pi = "data-header-cart-full";
    class _i {
        constructor(t) {
            this.section = t, this.counts = this.section.querySelectorAll(`[${Ci}]`), this.prices = this.section.querySelectorAll(`[${xi}]`), this.dots = this.section.querySelectorAll(`[${Pi}]`), this.cart = null, this.listen()
        }
        listen() {
            document.addEventListener("theme:cart:change", function(t) {
                this.cart = t.detail.cart, this.update()
            }.bind(this))
        }
        update() {
          console.log('cartUpdate');
            this.cart && (this.prices.forEach((t => {
                t.setAttribute(xi, this.cart.total_price);
                const e = r.formatMoney(this.cart.total_price, theme.moneyFormat);
              console.log('const e' + e);
             
                t.innerHTML = e;
            })), this.counts.forEach((t => {
                t.setAttribute(Ci, this.cart.item_count), t.innerHTML = `(${this.cart.item_count})`;
                document.getElementById("custom-cart-item").innerHTML = t.innerHTML;
                console.log(document.getElementById("custom-cart-item").innerHTML)
            })), this.dots.forEach((t => {
                const e = this.cart.item_count > 0;
                t.setAttribute(Pi, e);
            })))
          jQuery(".reloadCartMessage").load(" .reloadCartMessage > *");
        } 
    }
    const $i = {
            onLoad() {
                new _i(this.container)
            }
        },
        Mi = "[data-search-popdown-wrap]",
        Hi = "data-popdown-toggle",
        Di = "[data-close-popdown]",
        Ii = "[data-predictive-search-input]",
        Bi = "[data-search-underlay]",
        Fi = "underlay--visible",
        Wi = "is-visible";
    let Oi = {};
    class ji {
        constructor(t) {
            this.trigger = t, this.key = this.trigger.getAttribute(Hi);
            const e = `[id='${this.key}']`;
            this.popdown = document.querySelector(e), this.input = this.popdown.querySelector(Ii), this.close = this.popdown.querySelector(Di), this.wrapper = this.popdown.closest(Mi), this.underlay = this.wrapper.querySelector(Bi), this.initTriggerEvents(), this.initPopdownEvents()
        }
        initTriggerEvents() {
            this.trigger.setAttribute("aria-haspopup", !0), this.trigger.setAttribute("aria-expanded", !1), this.trigger.setAttribute("aria-controls", this.key), this.trigger.addEventListener("click", function(t) {
                t.preventDefault(), this.showPopdown()
            }.bind(this)), this.trigger.addEventListener("keyup", function(t) {
                t.which === window.theme.keyboardKeys.SPACE && this.showPopdown()
            }.bind(this))
        }
        initPopdownEvents() {
            this.popdown.addEventListener("keyup", function(t) {
                t.which === window.theme.keyboardKeys.ESCAPE && this.hidePopdown()
            }.bind(this)), this.close.addEventListener("click", function() {
                this.hidePopdown()
            }.bind(this)), this.underlay.addEventListener("click", function() {
                this.hidePopdown()
            }.bind(this))
        }
        hidePopdown() {
            this.popdown.classList.remove(Wi), this.underlay.classList.remove(Fi), this.trigger.focus(), this.input.value = "", Kt(), this.input.dispatchEvent(new CustomEvent("clear", {
                bubbles: !1
            })), this.popdown.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            }))
        }
        showPopdown() {
            this.input.value = "", this.popdown.classList.add(Wi), this.underlay.classList.add(Fi), Jt(this.popdown, {
                elementToFocus: this.input
            }), this.popdown.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0
            }))
        }
    }
    const Ni = {
        onLoad() {
            Oi[this.id] = {};
            const t = this.container.querySelector(`[${Hi}]`);
            t && (Oi[this.id] = new ji(t))
        },
        onUnload: function() {
            "function" == typeof Oi[this.id].unload && Oi[this.id].unload()
        }
    };

    function Vi(t, e) {
        if (null === e) return t;
        if (null == t && (t = window.theme.assets.noImage), "master" === e) return Ri(t);
        const i = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (i) {
            const s = t.split(i[0]),
                o = i[0];
            return Ri(`${s[0]}_${e}${o}`)
        }
        return null
    }

    function Ri(t) {
        return t.replace(/http(s)?:/, "")
    }

    function zi() {
        this.entries = []
    }

    function Ui(t, e) {
        Ji(t);
        var i = function(t, e) {
            Ji(t),
                function(t) {
                    if (!Array.isArray(t)) throw new TypeError(t + " is not an array.");
                    if (0 === t.length) throw new Error(t + " is empty.");
                    if (!t[0].hasOwnProperty("name")) throw new Error(t[0] + "does not contain name key.");
                    if ("string" != typeof t[0].name) throw new TypeError("Invalid value type passed for name of option " + t[0].name + ". Value should be string.")
                }(e);
            var i = [];
            return e.forEach((function(e) {
                for (var s = 0; s < t.options.length; s++) {
                    if ((t.options[s].name || t.options[s]).toLowerCase() === e.name.toLowerCase()) {
                        i[s] = e.value;
                        break
                    }
                }
            })), i
        }(t, e);
        return function(t, e) {
            return Ji(t),
                function(t) {
                    if (Array.isArray(t) && "object" == typeof t[0]) throw new Error(t + "is not a valid array of options.")
                }(e), t.variants.filter((function(t) {
                    return e.every((function(e, i) {
                        return t.options[i] === e
                    }))
                }))[0] || null
        }(t, i)
    }

    function Ji(t) {
        if ("object" != typeof t) throw new TypeError(t + " is not an object.");
        if (0 === Object.keys(t).length && t.constructor === Object) throw new Error(t + " is empty.")
    }
    zi.prototype.add = function(t, e, i) {
        this.entries.push({
            element: t,
            event: e,
            fn: i
        }), t.addEventListener(e, i)
    }, zi.prototype.removeAll = function() {
        this.entries = this.entries.filter((function(t) {
            return t.element.removeEventListener(t.event, t.fn), !1
        }))
    };
    var Ki = '[name="id"]',
        Xi = '[name="selling_plan"]',
        Yi = '[name^="options"]',
        Qi = '[name="quantity"]',
        Gi = '[name^="properties"]';
    class Zi {
        constructor(t, e, i) {
            this.element = t, this.form = "FORM" == this.element.tagName ? this.element : this.element.querySelector("form"), this.product = this._validateProductObject(e), this.variantElement = this.element.querySelector(Ki), i = i || {}, this.clickedElement = null, this._listeners = new zi, this._listeners.add(this.element, "submit", this._onSubmit.bind(this, i)), this.optionInputs = this._initInputs(Yi, i.onOptionChange), this.planInputs = this._initInputs(Xi, i.onPlanChange), this.quantityInputs = this._initInputs(Qi, i.onQuantityChange), this.propertyInputs = this._initInputs(Gi, i.onPropertyChange)
        }
        destroy() {
            this._listeners.removeAll()
        }
        options() {
            return this._serializeInputValues(this.optionInputs, (function(t) {
                return t.name = /(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2], t
            }))
        }
        variant() {
            const t = this.options();
            return t.length ? Ui(this.product, t) : this.product.variants[0]
        }
        plan(t) {
            let e = {
                allocation: null,
                group: null,
                detail: null
            };
            const i = new FormData(this.form).get("selling_plan");
            return i && t && (e.allocation = t.selling_plan_allocations.find((function(t) {
                return t.selling_plan_id.toString() === i.toString()
            }))), e.allocation && (e.group = this.product.selling_plan_groups.find((function(t) {
                return t.id.toString() === e.allocation.selling_plan_group_id.toString()
            }))), e.group && (e.detail = e.group.selling_plans.find((function(t) {
                return t.id.toString() === i.toString()
            }))), e && e.allocation && e.detail && e.allocation ? e : null
        }
        properties() {
            return this._serializeInputValues(this.propertyInputs, (function(t) {
                return t.name = /(?:^(properties\[))(.*?)(?:\])/.exec(t.name)[2], t
            }))
        }
        quantity() {
            return this.quantityInputs[0] ? Number.parseInt(this.quantityInputs[0].value, 10) : 1
        }
        getFormState() {
            const t = this.variant();
            return {
                options: this.options(),
                variant: t,
                properties: this.properties(),
                quantity: this.quantity(),
                plan: this.plan(t)
            }
        }
        _setIdInputValue(t) {
            t && t.id ? this.variantElement.value = t.id.toString() : this.variantElement.value = "", this.variantElement.dispatchEvent(new Event("change"))
        }
        _onSubmit(t, e) {
            e.dataset = this.getFormState(), t.onFormSubmit && t.onFormSubmit(e)
        }
        _onOptionChange(t) {
            this._setIdInputValue(t.dataset.variant)
        }
        _onFormEvent(t) {
            return void 0 === t ? Function.prototype : function(e) {
                e.dataset = this.getFormState(), this._setIdInputValue(e.dataset.variant), t(e)
            }.bind(this)
        }
        _initInputs(t, e) {
            return Array.prototype.slice.call(this.element.querySelectorAll(t)).map(function(t) {
                return this._listeners.add(t, "change", this._onFormEvent(e)), t
            }.bind(this))
        }
        _serializeInputValues(t, e) {
            return t.reduce((function(t, i) {
                return (i.checked || "radio" !== i.type && "checkbox" !== i.type) && t.push(e({
                    name: i.name,
                    value: i.value
                })), t
            }), [])
        }
        _validateProductObject(t) {
            if ("object" != typeof t) throw new TypeError(t + " is not an object.");
            if (void 0 === t.variants[0].options) throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");
            return t
        }
    }
    const ts = {};

    function es(t = {}) {
        if (t.type || (t.type = "json"), t.url) return ts[t.url] ? ts[t.url] : function(t, e) {
            const i = new Promise(((i, s) => {
                "text" === e ? fetch(t).then((t => t.text())).then((t => {
                    i(t)
                })).catch((t => {
                    s(t)
                })) : function(t, e, i) {
                    let s = document.getElementsByTagName("head")[0],
                        o = !1,
                        r = document.createElement("script");
                    r.src = t, r.onload = r.onreadystatechange = function() {
                        o || this.readyState && "loaded" != this.readyState && "complete" != this.readyState ? i() : (o = !0, e())
                    }, s.appendChild(r)
                }(t, (function() {
                    i()
                }), (function() {
                    s()
                }))
            }));
            return ts[t] = i, i
        }(t.url, t.type);
        if (t.json) return ts[t.json] ? Promise.resolve(ts[t.json]) : window.fetch(t.json).then((t => t.json())).then((e => (ts[t.json] = e, e)));
        if (t.name) {
            const e = "".concat(t.name, t.version);
            return ts[e] ? ts[e] : function(t) {
                const e = "".concat(t.name, t.version),
                    i = new Promise(((e, i) => {
                        try {
                            window.Shopify.loadFeatures([{
                                name: t.name,
                                version: t.version,
                                onLoad: t => {
                                    ! function(t, e, i) {
                                        i ? e(i) : t()
                                    }(e, i, t)
                                }
                            }])
                        } catch (t) {
                            i(t)
                        }
                    }));
                return ts[e] = i, i
            }(t)
        }
        return Promise.reject()
    }
    const is = "[data-swapper-wrapper]",
        ss = "[data-swapper-target]",
        os = "data-swapper-hover";
    let rs = {};
    class ns {
        constructor(t) {
            this.container = t, this.target = this.container.querySelector(ss), this.hovers = this.container.querySelectorAll(`[${os}]`), this.target && this.hovers.length && (this.deafaultContent = this.target.innerHTML, this.init())
        }
        init() {
            this.hovers.forEach((t => {
                t.addEventListener("mouseenter", function() {
                    const e = t.getAttribute(os);
                    this.target.innerHTML = `${e}`
                }.bind(this))
            })), this.hovers.forEach((t => {
                t.addEventListener("mouseleave", function() {
                    this.target.innerHTML = this.deafaultContent
                }.bind(this))
            })), this.hovers.forEach((t => {
                t.addEventListener("click", function() {
                    const e = t.getAttribute(os);
                    this.deafaultContent = `${e}`
                }.bind(this))
            }))
        }
    }

    function as(t) {
        rs[t.id] = [];
        t.container.querySelectorAll(is).forEach((e => {
            rs[t.id].push(new ns(e))
        }))
    }
    const ls = {
            onLoad() {
                as(this)
            }
        },
        cs = {
            color: "ash"
        },
        hs = "data-swatch",
        ds = "[data-grid-item]",
        us = "[data-grid-slide]",
        ps = "data-swatch-image",
        ms = "data-swatch-variant",
        ys = "[data-swatch-button]",
        fs = "[data-grid-link]",
        gs = "[data-grid-swatches]",
        ws = "[data-swatch-template]",
        bs = "data-swatch-handle",
        vs = "data-swatch-label";
    class Ss {
        constructor(t = {}) {
            this.settings = {
                ...cs,
                ...t
            }, this.match = this.init()
        }
        getColor() {
            return this.match
        }
        init() {
            return es({
                json: window.theme.assets.swatches
            }).then((t => this.matchColors(t, this.settings.color))).catch((t => {
                console.log("failed to load swatch colors script"), console.log(t)
            }))
        }
        matchColors(t, e) {
            let i = "#E5E5E5",
                s = null;
            const o = window.theme.assets.base || "/",
                r = e.toLowerCase().replace(/\s/g, ""),
                n = t.colors;
            if (n) {
                const t = t => Object.keys(t).toString().toLowerCase().replace(/\s/g, "") === r,
                    e = n.findIndex(t);
                if (e > -1) {
                    const t = Object.values(n[e])[0],
                        r = t.toLowerCase();
                    r.includes(".jpg") || r.includes(".jpeg") || r.includes(".png") || r.includes(".svg") ? (s = `${o}${t}`, i = "#888888") : i = t
                }
            }
            return {
                color: this.settings.color,
                path: s,
                hex: i
            }
        }
    }
    class Es extends HTMLElement {
        constructor() {
            super(), this.element = this.querySelector(`[${hs}]`), this.colorString = this.element.getAttribute(hs), this.image = this.element.getAttribute(ps), this.variant = this.element.getAttribute(ms), this.outer = this.element.closest(ds);
            new Ss({
                color: this.colorString
            }).getColor().then((t => {
                this.colorMatch = t, this.init()
            }))
        }
        init() {
            this.setStyles(), this.variant && this.outer && this.handleClicks()
        }
        setStyles() {
            this.colorMatch.hex && this.element.style.setProperty("--swatch", `${this.colorMatch.hex}`), this.colorMatch.path && (this.element.style.setProperty("background-image", `url(${this.colorMatch.path})`), this.element.style.setProperty("background-size", "cover"))
        }
        handleClicks() {
            var t, e;
            this.slide = this.outer.querySelector(us), this.linkElement = this.outer.querySelector(fs), this.linkDestination = (t = this.linkElement.getAttribute("href"), e = this.variant, /variant=/.test(t) ? t.replace(/(variant=)[^&]+/, "$1" + e) : /\?/.test(t) ? t.concat("&variant=").concat(e) : t.concat("?variant=").concat(e)), this.button = this.element.closest(ys), this.button.addEventListener("click", function() {
                if (this.linkElement.setAttribute("href", this.linkDestination), this.slide.setAttribute("src", this.linkDestination), this.image) {
                    let t = window.devicePixelRatio || 1,
                        e = this.slide.offsetWidth * t,
                        i = 180 * Math.ceil(e / 180),
                        s = Vi(this.image, `${i}x`);
                    window.fetch(s).then((t => t.blob())).then((t => {
                        var e = URL.createObjectURL(t);
                        this.slide.style.setProperty("background-color", "#fff"), this.slide.style.setProperty("background-image", `url("${e}")`)
                    })).catch((t => {
                        console.log(`Error: ${t}`)
                    }))
                }
            }.bind(this))
        }
    }
    class Ls {
        constructor(t) {
            this.template = document.querySelector(ws).innerHTML, this.wrap = t, this.handle = t.getAttribute(bs);
            const e = t.getAttribute(vs).trim().toLowerCase();
            (function(t) {
                const e = `${window.theme.routes.root_url}products/${t}.js`;
                return window.fetch(e).then((t => t.json())).catch((t => {
                    console.error(t)
                }))
            })(this.handle).then((t => {
                this.product = t, this.colorOption = t.options.find((function(t) {
                    return t.name.toLowerCase() === e || null
                })), this.colorOption && (this.swatches = this.colorOption.values, this.init())
            }))
        }
        init() {
            this.wrap.innerHTML = "", this.swatches.forEach((t => {
                let e = this.product.variants.find((e => e.options.includes(t)));
                const i = e.featured_media ? e.featured_media.preview_image.src : "",
                    s = Math.floor(9999 * Math.random());
                this.wrap.innerHTML += p.render(this.template, {
                    color: t,
                    uniq: `${this.product.id}-${e.id}-${s}`,
                    variant: e.id,
                    image: i
                })
            })), new R(this.wrap)
        }
    }

    function Ts(t) {
        t.querySelectorAll(gs).forEach((t => {
            new Ls(t)
        }))
    }
    const ks = {
            onLoad() {
                Ts(this.container), as(this)
            }
        },
        As = "[data-popout]",
        qs = "[data-popout-list]",
        xs = "data-popout-toggle",
        Cs = "[data-popout-input]",
        Ps = "[data-popout-option]",
        _s = "data-popout-prevent",
        $s = "data-quantity-field",
        Ms = "data-value",
        Hs = "aria-expanded",
        Ds = "aria-current",
        Is = "popout-list--visible",
        Bs = "--current";
    class Fs extends HTMLElement {
        constructor() {
            super(), this.container = this.querySelector(As), this.popoutList = this.container.querySelector(qs), this.popoutToggle = this.container.querySelector(`[${xs}]`), this.outsidePopupToggle = document.querySelector(`[${xs}="${this.popoutList.id}"]`), this.popoutInput = this.container.querySelector(Cs), this.popoutOptions = this.container.querySelectorAll(Ps), this.popoutPrevent = "true" === this.container.getAttribute(_s), this._connectOptions(), this._connectToggle(), this._onFocusOut(), this.popupListMaxWidth(), this.popoutInput && this.popoutInput.hasAttribute($s) && document.addEventListener("popout:updateValue", this.updatePopout.bind(this)), document.addEventListener("theme:resize", (() => {
                this.popupListMaxWidth()
            }))
        }
        unload() {
            this.popoutOptions.length && this.popoutOptions.forEach((t => {
                t.removeEventListener("clickDetails", this.popupOptionsClick.bind(this)), t.removeEventListener("click", this._connectOptionsDispatch.bind(this))
            })), this.popoutToggle.removeEventListener("click", this.popupToggleClick.bind(this)), this.popoutToggle.removeEventListener("focusout", this.popupToggleFocusout.bind(this)), this.popoutList.removeEventListener("focusout", this.popupListFocusout.bind(this)), this.container.removeEventListener("keyup", this.containerKeyup.bind(this)), this.outsidePopupToggle && (this.outsidePopupToggle.removeEventListener("click", this.popupToggleClick.bind(this)), this.outsidePopupToggle.removeEventListener("focusout", this.popupToggleFocusout.bind(this)))
        }
        popupToggleClick(t) {
            const e = "true" === t.currentTarget.getAttribute(Hs);
            t.currentTarget.setAttribute(Hs, !e), this.popoutList.classList.toggle(Is), this.popupListMaxWidth()
        }
        popupToggleFocusout(t) {
            this.container.contains(t.relatedTarget) || this._hideList()
        }
        popupListFocusout(t) {
            const e = t.currentTarget.contains(t.relatedTarget);
            this.popoutList.classList.contains(Is) && !e && this._hideList()
        }
        popupListMaxWidth() {
            this.popoutList.style.maxWidth = `${parseInt(document.body.clientWidth-this.popoutList.getBoundingClientRect().left)}px`
        }
        popupOptionsClick(t) {
            if ("#" === t.target.closest(Ps).attributes.href.value) {
                t.preventDefault();
                let e = "";
                if (t.currentTarget.getAttribute(Ms) && (e = t.currentTarget.getAttribute(Ms)), this.popoutInput.value = e, this.popoutPrevent) {
                    this.popoutInput.dispatchEvent(new Event("change")), !t.detail.preventTrigger && this.popoutInput.hasAttribute($s) && this.popoutInput.dispatchEvent(new Event("input"));
                    const i = this.popoutList.querySelector(`[class*="${Bs}"]`);
                    let s = Bs;
                    if (i && i.classList.length)
                        for (const t of i.classList)
                            if (t.includes(Bs)) {
                                s = t;
                                break
                            } const o = this.popoutList.querySelector(`.${s}`);
                    o && (o.classList.remove(`${s}`), t.currentTarget.parentElement.classList.add(`${s}`));
                    const r = this.popoutList.querySelector(`[${Ds}]`);
                    r && r.hasAttribute(`${Ds}`) && (r.removeAttribute(`${Ds}`), t.currentTarget.setAttribute(`${Ds}`, "true")), "" !== e && (this.popoutToggle.textContent = e, this.outsidePopupToggle && (this.outsidePopupToggle.textContent = e)), this.popupToggleFocusout(t), this.popupListFocusout(t)
                } else this._submitForm(e)
            }
        }
        updatePopout(t) {
            const e = this.popoutList.querySelector(`[${Ms}="${this.popoutInput.value}"]`);
            e && e.dispatchEvent(new CustomEvent("clickDetails", {
                cancelable: !0,
                bubbles: !0,
                detail: {
                    preventTrigger: !0
                }
            }))
        }
        containerKeyup(t) {
            t.which === window.theme.keyboardKeys.ESCAPE && (this._hideList(), this.popoutToggle.focus())
        }
        bodyClick(t) {
            const e = this.container.contains(t.target),
                i = this.popoutList.classList.contains(Is);
            this.outsidePopupToggle, t.target, i && !e && this._hideList()
        }
        _connectToggle() {
            this.popoutToggle.addEventListener("click", this.popupToggleClick.bind(this)), this.outsidePopupToggle && this.outsidePopupToggle.addEventListener("click", this.popupToggleClick.bind(this))
        }
        _connectOptions() {
            this.popoutOptions.length && this.popoutOptions.forEach((t => {
                t.addEventListener("clickDetails", this.popupOptionsClick.bind(this)), t.addEventListener("click", this._connectOptionsDispatch.bind(this))
            }))
        }
        _connectOptionsDispatch(t) {
            const e = new CustomEvent("clickDetails", {
                cancelable: !0,
                bubbles: !0,
                detail: {
                    preventTrigger: !1
                }
            });
            t.target.dispatchEvent(e) || t.preventDefault()
        }
        _onFocusOut() {
            this.popoutToggle.addEventListener("focusout", this.popupToggleFocusout.bind(this)), this.outsidePopupToggle && this.outsidePopupToggle.addEventListener("focusout", this.popupToggleFocusout.bind(this)), this.popoutList.addEventListener("focusout", this.popupListFocusout.bind(this)), this.container.addEventListener("keyup", this.containerKeyup.bind(this)), document.body.addEventListener("click", this.bodyClick.bind(this))
        }
        _submitForm(t) {
            const e = this.container.closest("form");
            e && e.submit()
        }
        _hideList() {
            this.popoutList.classList.remove(Is), this.popoutToggle.setAttribute(Hs, !1), this.outsidePopupToggle && this.outsidePopupToggle.setAttribute(Hs, !1)
        }
    }
    const Ws = (t, e = 500, i = !0) => {
            let s = window.getComputedStyle(t).display;
            if (i && "none" !== s) return;
            t.style.removeProperty("display"), "none" === s && (s = "block"), t.style.display = s;
            let o = t.offsetHeight;
            t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, t.offsetHeight, t.style.boxSizing = "border-box", t.style.transitionTimingFunction = "cubic-bezier(0.215, 0.61, 0.355, 1)", t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = e + "ms", t.style.height = o + "px", t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), window.setTimeout((() => {
                t.style.removeProperty("height"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property"), t.style.removeProperty("transition-timing-function")
            }), e)
        },
        Os = (t, e = 500) => {
            t.style.transitionProperty = "height, margin, padding", t.style.transitionTimingFunction = "cubic-bezier(0.215, 0.61, 0.355, 1)", t.style.transitionDuration = e + "ms", t.style.boxSizing = "border-box", t.style.height = t.offsetHeight + "px", t.offsetHeight, t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, window.setTimeout((() => {
                t.style.display = "none", t.style.removeProperty("height"), t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property"), t.style.removeProperty("transition-timing-function")
            }), e)
        };
    let js = {};
    const Ns = "[data-add-action-wrapper]",
        Vs = "[data-add-to-cart]",
        Rs = "[data-add-action-errors]",
        zs = "data-add-to-cart-variant",
        Us = "[data-product-add-popdown-wrapper]",
        Js = '[data-ajax-disable="true"]',
        Ks = "[data-upsell-modal]",
        Xs = "loading",
        Ys = "has-success";
    class Qs {
        constructor(t, e) {
            if (this.wrapper = t, this.isCartItem = e || !1, this.button = t.querySelector(Vs), this.errors = t.querySelector(Rs), this.popdown = document.querySelector(Us), this.disabledAjax = document.querySelector(Js), this.button) {
                this.button.hasAttribute(zs) ? this.initDetached() : this.initWithForm()
            }
        }
        initWithForm() {
            this.button.addEventListener("click", function(t) {
                const e = t.target.closest("form");
                if (e.querySelector('[type="file"]')) return;
                this.disabledAjax || t.preventDefault(), this.button.setAttribute("disabled", !0), this.button.classList.add(Xs);
                const i = new FormData(e),
                    s = new URLSearchParams(i).toString();
                this.addToCartAction(s)
            }.bind(this))
        }
        initDetached() {
            this.button.addEventListener("click", function(t) {
                this.disabledAjax || t.preventDefault(), this.button.setAttribute("disabled", !0), this.button.classList.add(Xs);
                const e = `form_type=product&id=${this.button.getAttribute(zs)}`;
                this.addToCartAction(e)
            }.bind(this))
        }
        addToCartAction(t) {
            const e = `${window.theme.routes.cart}/add.js`,
                i = this;
            a.post(e, t, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((function(t) {
                i.onSuccess(t.data)
            })).catch((function(t) {
                console.warn(t), i.onError(t.data)
            }))
        }
        onSuccess(t) {
            this.updateHeaderTotal(), this.button.classList.remove(Xs), this.button.classList.add(Ys), setTimeout((() => {
                this.button.classList.remove(Ys), this.button.removeAttribute("disabled")
            }), 3500), this.button.closest(Ks) && this.button.closest(Ks).dispatchEvent(new CustomEvent("theme:upsell:close")), this.isCartItem ? document.dispatchEvent(new CustomEvent("theme:cart:reload", {
                bubbles: !0
            })) : this.popdown.dispatchEvent(new CustomEvent("theme:cart:popdown", {
                detail: {
                    variant: t
                },
                bubbles: !0
            })), this.disabledAjax && window.location.reload()
        }
        onError(t) {
            let e = "Network error: please try again";
            t && t.description && (e = t.description);
            const i = `<div class="errors">${e}</div>`;
            this.button.classList.remove(Xs), this.button.removeAttribute("disabled"), this.errors.innerHTML = i, Ws(this.errors), setTimeout((() => {
                Os(this.errors)
            }), 5e3)
        }
        updateHeaderTotal() {
            a.get(`${window.theme.routes.cart}.js`).then((t => {
                document.dispatchEvent(new CustomEvent("theme:cart:change", {
                    detail: {
                        cart: t.data
                    },
                    bubbles: !0
                }))
            })).catch((t => {
                console.error(t)
            }))
        }
    }
    const Gs = {
            onLoad() {
                js[this.id] = [];
                this.container.querySelectorAll(Ns).forEach((t => {
                    js[this.id].push(new Qs(t))
                }))
            },
            onUnload: function() {
                js[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            }
        },
        Zs = "data-upsell-holder",
        to = "[data-add-action-wrapper]",
        eo = "[data-product-upsell-ajax]",
        io = "[data-upsell-modal]",
        so = "[data-upsell-modal-template]",
        oo = "[data-media-slide]",
        ro = "[data-line-items]",
        no = 'button, [href], select, textarea, [tabindex]:not([tabindex="-1"])';
    class ao extends HTMLElement {
        constructor() {
            if (super(), this.upsellHolder = this.querySelector(`[${Zs}]`), this.modalCloseEvent = () => this.modalClose(), this.upsellHolder) {
                if (this.isCartItem = Boolean(this.upsellHolder.closest(ro)), this.modalTemplate = this.upsellHolder.querySelector(so), this.modal = document.querySelector(io), this.modalID = this.upsellHolder.getAttribute(Zs), this.modalContent = null, this.triggerButton = document.querySelector(`[data-popup-${this.modalID}]`), this.handle = this.triggerButton ? this.triggerButton.getAttribute(`data-popup-${this.modalID}`) : null, this.modalTemplate && !this.modal) {
                    const t = this.modalTemplate.innerHTML,
                        e = document.createElement("div");
                    e.innerHTML = t, this.modalHtml = e.querySelector(io), document.body.appendChild(this.modalHtml), this.modal = document.querySelector(io)
                }
                this.init()
            }
        }
        init() {
            this.modalTemplate && this.triggerButton && this.triggerButton.addEventListener("click", (t => {
                t.preventDefault(), this.modal && this.modalID && (this.modal.id = this.modalID), this.getUpsellHTML()
            })), this.isCartItem && new Qs(this.upsellHolder, this.isCartItem)
        }
        getUpsellHTML() {
            window.fetch(`${window.theme.routes.root_url}products/${this.handle}?section_id=api-product-upsell`).then(this.handleErrors).then((t => t.text())).then((t => {
                const e = document.createElement("div");
                e.innerHTML = t, this.modalContent = document.querySelector(eo), this.modalContent.innerHTML = e.querySelector("[data-api-content]").innerHTML, this.modalCreate()
            }))
        }
        modalCreate() {
            i.show(this.modalID, {
                onShow: (t, e, i) => {
                    const s = t.querySelector(to);
                    new Qs(s, this.isCartItem);
                    const o = t.querySelector(no);
                    Jt(t, {
                        elementToFocus: o
                    }), this.modal.addEventListener("theme:upsell:close", this.modalCloseEvent), this.modalContent.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                        bubbles: !0
                    }))
                },
                onClose: (t, e, i) => {
                    t.querySelectorAll(oo).forEach((t => {
                        t.dispatchEvent(new CustomEvent("pause"))
                    })), Kt(), e.focus(), this.modal.removeEventListener("theme:upsell:close", this.modalCloseEvent)
                }
            })
        }
        modalClose() {
            i.close(this.modalID)
        }
        handleErrors(t) {
            return t.ok ? t : t.json().then((function(e) {
                throw new O({
                    status: t.statusText,
                    headers: t.headers,
                    json: e
                })
            }))
        }
    }
    class lo {
        constructor(t) {
            this.inputs = t.querySelectorAll("[data-cart-note]"), this.initInputs()
        }
        initInputs() {
            this.inputs.forEach((t => {
                t.addEventListener("change", function(t) {
                    const e = t.target.value.toString() || "";
                    this.saveNotes(e)
                }.bind(this))
            }))
        }
        saveNotes(t) {
            window.fetch(`${window.theme.routes.cart}/update.js`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    note: t
                })
            }).catch((t => {
                console.error(t)
            }))
        }
    }
    const co = (t, e = [], i = !1) => {
            const s = Object.keys(t).map((s => {
                let o = t[s];
                if ("[object Object]" === Object.prototype.toString.call(o) || Array.isArray(o)) return Array.isArray(t) ? e.push("") : e.push(s), co(o, e, Array.isArray(o)); {
                    let t = s;
                    if (e.length > 0) {
                        t = (i ? e : [...e, s]).reduce(((t, e) => "" === t ? e : `${t}[${e}]`), "")
                    }
                    return i ? `${t}[]=${o}` : `${t}=${o}`
                }
            })).join("&");
            return e.pop(), s
        },
        ho = "[data-submit-shipping]",
        uo = "[data-shipping-estimate-form]",
        po = "[data-response-template]",
        mo = "#estimate_address_country",
        yo = "#estimate_address_province",
        fo = "#estimate_address_zip",
        go = "[data-response-wrapper]",
        wo = "data-default-fullname",
        bo = "shipping--success",
        vo = "errors";
    class So {
        constructor(t) {
            this.button = t.container.querySelector(ho), this.template = t.container.querySelector(po).innerHTML, this.ratesWrapper = t.container.querySelector(go), this.form = t.container.querySelector(uo), this.country = t.container.querySelector(mo), this.province = t.container.querySelector(yo), this.zip = t.container.querySelector(fo), this.init()
        }
        enableButtons() {
            this.button.removeAttribute("disabled"), this.button.classList.remove("disabled")
        }
        disableButtons() {
            this.button.setAttribute("disabled", "disabled"), this.button.classList.add("disabled")
        }
        render(t) {
            if (this.template && this.ratesWrapper) {
                const e = p.render(this.template, t);
                this.ratesWrapper.innerHTML = e
            }
            this.enableButtons(), this.ratesWrapper.style.removeProperty("display")
        }
        estimate(t) {
            const e = encodeURI(co({
                    shipping_address: t
                })),
                i = `${window.theme.routes.cart}/shipping_rates.json?${e}`,
                s = this;
            a.get(i).then((function(t) {
                const e = s.sanitize(t);
                s.render(e), s.enableButtons(), s.ratesWrapper.style.removeProperty("display")
            })).catch((function(t) {
                const e = s.sanitizeErrors(t);
                s.render(e)
            }))
        }
        sanitize(t) {
            const e = {};
            if (e.class = bo, e.items = [], t.data.shipping_rates && t.data.shipping_rates.length > 0) {
                t.data.shipping_rates.forEach((t => {
                    let i = {};
                    i.title = t.presentment_name, i.value = r.formatMoney(t.price, theme.moneyFormat), e.items.push(i)
                }))
            } else e.items[0] = {
                value: theme.strings.noShippingAvailable
            };
            return e
        }
        sanitizeErrors(t) {
            const e = {};
            if (e.class = vo, e.items = [], "object" == typeof t.data)
                for (const [i, s] of Object.entries(t.data)) {
                    let t = {};
                    t.title = i.toString(), t.value = s.toString(), e.items.push(t)
                } else e.items[0] = {
                    value: theme.strings.noShippingAvailable
                };
            return e
        }
        init() {
            const t = document.querySelector("html");
            let e = "en";
            t.hasAttribute("lang") && "" !== t.getAttribute("lang") && (e = t.getAttribute("lang")), this.form && l.AddressForm(this.form, e, {
                shippingCountriesOnly: !0
            }), this.country && this.country.hasAttribute("data-default") && this.province && this.province.hasAttribute("data-default") && this.country.addEventListener("change", (function() {
                this.country.removeAttribute("data-default"), this.province.removeAttribute("data-default")
            })), this.button && this.button.addEventListener("click", function(t) {
                for (t.preventDefault(), this.disableButtons(); this.ratesWrapper.firstChild;) this.ratesWrapper.removeChild(this.ratesWrapper.firstChild);
                this.ratesWrapper.style.display = "none";
                const e = {};
                let i = this.country.value,
                    s = this.province.value;
                const o = this.country.getAttribute(wo);
                "" === i && o && "" !== o && (i = o);
                const r = this.province.getAttribute(wo);
                "" === s && r && "" !== r && (s = r), e.zip = this.zip.value || "", e.country = i || "", e.province = s || "", this.estimate(e)
            }.bind(this))
        }
    }
    const Eo = "[data-quantity-selector]",
        Lo = "[data-increase-quantity]",
        To = "[data-decrease-quantity]",
        ko = "[data-quantity-input]";
    class Ao {
        constructor(t) {
            this.wrapper = t, this.increase = this.wrapper.querySelector(Lo), this.decrease = this.wrapper.querySelector(To), this.input = this.wrapper.querySelector(ko), this.min = parseInt(this.input.getAttribute("min"), 10), this.initButtons()
        }
        initButtons() {
            this.increase.addEventListener("click", function(t) {
                t.preventDefault();
                let e = parseInt(this.input.value, 10);
                e = isNaN(e) ? 0 : e, e++, this.input.value = e, this.input.dispatchEvent(new Event("change"))
            }.bind(this)), this.decrease.addEventListener("click", function(t) {
                t.preventDefault();
                let e = parseInt(this.input.value, 10);
                e = isNaN(e) ? 0 : e, e--, e = Math.max(this.min, e), this.input.value = e, this.input.dispatchEvent(new Event("change"))
            }.bind(this))
        }
    }

    function qo(t) {
        t.querySelectorAll(Eo).forEach((t => {
            new Ao(t)
        }))
    }
    const xo = '[data-drawer="drawer-cart"]',
        Co = "[data-shipping-estimate-form]",
        Po = "[data-cart-loading]",
        _o = "[data-cart-form]",
        $o = "[data-cart-empty]",
        Mo = "[data-cart-progress]",
        Ho = "[data-line-items]",
        Do = "[data-cart-subtotal]",
        Io = "[data-cart-bottom]",
        Bo = "[data-form-errors]",
        Fo = "[data-cart-item]",
        Wo = "[data-cart-final]",
        Oo = "data-update-cart",
        jo = "data-remove-key",
        No = "[data-upsell-holder]",
        Vo = '[data-section-type="cart"]',
        Ro = "[data-cart-bar]",
        zo = "[data-cart-message]",
        Uo = "cart--hidden",
        Jo = "cart--loading";
    class Ko {
        constructor(t) {
            this.section = t, this.container = t.container, this.bar = this.container.querySelector(Ro), this.ship = this.container.querySelector(zo), this.drawer = this.container.querySelector(xo), this.form = this.container.querySelector(_o), this.loader = this.container.querySelector(Po), this.bottom = this.container.querySelector(Io), this.items = this.container.querySelector(Ho), this.subtotal = this.container.querySelector(Do), this.errors = this.container.querySelector(Bo), this.finalPrice = this.container.querySelector(Wo), this.emptystate = this.container.querySelector($o), this.progress = this.container.querySelector(Mo), this.latestClick = null, this.cart = null, this.stale = !0, this.cartPage = document.querySelector(Vo), this.listen()
        }
        listen() {
            document.addEventListener("theme:cart:change", function(t) {
                this.cart = t.detail.cart, this.stale = !0
            }.bind(this)), document.addEventListener("theme:cart:init", function() {
                this.init()
            }.bind(this)), document.addEventListener("theme:cart:reload", function() {
                this.stale = !0, this.cart ? this.loadHTML() : this.init().then((() => this.loadHTML()))
            }.bind(this)), this.drawer && this.drawer.addEventListener("theme:drawer:open", function() {
                this.cart ? this.loadHTML() : this.init().then((() => this.loadHTML()))
            }.bind(this)), new lo(this.container), new Ee(this.container)
        }
        init() {
            return window.fetch(`${window.theme.routes.cart}.js`).then(this.handleErrors).then((t => t.json())).then((t => (this.cart = t, this.fireChange(t), t))).catch((t => {
                console.error(t)
            }))
        }
        loadHTML() {
            this.stale && (this.cart && this.cart.item_count > 0 ? this.loadForm() : this.showEmpty()), this.stale = !1
        }
        initInputs() {
            this.inputs = this.container.querySelectorAll(`[${Oo}]`), this.inputs.forEach((t => {
                const e = t.getAttribute(Oo);
                t.addEventListener("change", function(t) {
                    const i = parseInt(t.target.value, 10);
                    this.latestClick = t.target.closest(Fo), this.lockState(), this.updateCart(e, i)
                }.bind(this));
            }))
        }
        initRemove() {
            this.removers = this.container.querySelectorAll(`[${jo}]`), this.removers.forEach((t => {
                const e = t.getAttribute(jo);
                t.addEventListener("click", function(t) {
                    t.preventDefault(), this.latestClick = t.target.closest(Fo), this.lockState(), this.updateCart(e, 0)
                }.bind(this))
            }))
        }
        lockState() {
            this.latestClick.querySelector(".item--loadbar").style.display = "block", this.loader.classList.add(Jo)
        }
        updateCart(t, e) {
            let i = null,
                s = null,
                o = null;
            window.fetch(`${window.theme.routes.cart}.js`).then(this.handleErrors).then((t => t.json())).then((s => {
                const r = s.items.findIndex((e => e.key === t));
                i = s.item_count, o = s.items[r].title;
                const n = {
                    line: `${r+1}`,
                    quantity: e
                };
                return window.fetch(`${window.theme.routes.cart}/change.js`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(n)
                })
            })).then(this.handleErrors).then((t => t.json())).then((t => {
                this.cart = t, s = t.item_count, i === s ? (this.stockoutError(o), this.stale = !0) : (Os(this.errors), this.fireChange(t), this.stale = !0), this.loadHTML()
            })).catch((t => {
                console.error(t);
                let e = "";
                void 0 !== t.status && (e = `<p>${t.status}</p>`);
                let i = t.json.description || "";
                this.showError(`${e+i}`), this.loadHTML()
            }))
        }
        fireChange(t) {
            document.dispatchEvent(new CustomEvent("theme:cart:change", {
                detail: {
                    cart: t
                },
                bubbles: !0
            }))
        }
        updateTotal() {
            if (this.cart && this.cart.total_price) {
                const t = r.formatMoney(this.cart.total_price, theme.moneyFormat);
                this.finalPrice.innerHTML = t
            }
            this.subtotal && this.cart && window.fetch(`${window.theme.routes.root_url}?section_id=api-cart-subtotal`).then(this.handleErrors).then((t => t.text())).then((t => {
                const e = document.createElement("div");
                e.innerHTML = t, this.subtotal.innerHTML = e.querySelector("[data-api-content]").innerHTML
            }))
        }
        showError(t) {
            Os(this.errors), this.errors.innerHTML = t, window.setTimeout((() => {
                Ws(this.errors)
            }), 600)
        }
        stockoutError(t) {
            let e = `<p><strong>${window.theme.strings.stockout}</strong></p>`,
                i = `<p>${t}</p>`;
            this.showError(`${e+i}`)
        }
        loadForm() {
            window.fetch(`${window.theme.routes.root_url}?section_id=api-cart-items`).then(this.handleErrors).then((t => t.text())).then((t => {
                const e = document.createElement("div");
                e.innerHTML = t, this.items.innerHTML = e.querySelector("[data-api-content]").innerHTML, this.showForm(), this.initQuantity(), this.initUpsell(), this.updateTotal()
            }))
        }
        initUpsell() {
            const t = this.items.querySelector(No),
                e = this.bottom.querySelector(No);
            e && e.remove(), this.cartPage && t && this.bottom.insertBefore(t, this.bottom.firstChild)
        }
        initQuantity() {
            qo(this.container), this.initInputs(), this.initRemove()
        }
        showForm() {
            this.bar && this.bar.classList.remove(Uo), this.ship && this.ship.classList.remove(Uo), this.progress && this.progress.classList.remove(Uo), this.form.classList.remove(Uo), this.bottom.classList.remove(Uo), this.loader.classList.remove(Jo), this.emptystate.classList.add(Uo)
        }
        showEmpty() {
            this.bar && this.bar.classList.add(Uo), this.ship && this.ship.classList.add(Uo), this.progress && this.progress.classList.add(Uo), this.emptystate.classList.remove(Uo), this.loader.classList.remove(Jo), this.form.classList.add(Uo), this.bottom.classList.add(Uo)
        }
        handleErrors(t) {
            return t.ok ? t : t.json().then((function(e) {
                throw new O({
                    status: t.statusText,
                    headers: t.headers,
                    json: e
                })
            }))
        }
    }
    const Xo = {
            onLoad() {
                this.container.querySelector(xo) && (this.cart = new Ko(this));
                this.container.querySelector(Co) && new So(this)
            },
            onUnload: function() {
                this.cart && "function" == typeof this.cart.unload && this.cart.unload()
            }
        },
        Yo = "[data-accordion-group]",
        Qo = "data-accordion-trigger",
        Go = "[data-accordion-body]",
        Zo = "data-accordion-body-mobile",
        tr = "data-range-holder",
        er = "[data-section-id]",
        ir = "accordion-is-open";
    let sr = {};
    class or {
        constructor(t) {
            this.body = t, this.key = this.body.id;
            const e = `[${Qo}='${this.key}']`;
            this.trigger = document.querySelector(e), this.toggleEvent = t => this.clickEvents(t), this.keyboardEvent = t => this.keyboardEvents(t), this.hideEvent = () => this.hideEvents(), this.syncBodies = this.getSiblings(), this.body.hasAttribute(Zo) ? this.mobileAccordions() : this.init()
        }
        mobileAccordions() {
            window.innerWidth < window.theme.sizes.medium ? (this.init(), this.setDefaultState()) : (this.resetMobileAccordions(), this.body.removeAttribute("style")), document.addEventListener("theme:resize", (() => {
                window.innerWidth < window.theme.sizes.medium ? (this.init(), this.setDefaultState()) : (this.resetMobileAccordions(), this.body.removeAttribute("style"))
            }))
        }
        init() {
            this.trigger.setAttribute("aria-haspopup", !0), this.trigger.setAttribute("aria-expanded", !1), this.trigger.setAttribute("aria-controls", this.key), this.setDefaultState(), this.trigger.addEventListener("click", this.toggleEvent), this.body.addEventListener("keyup", this.keyboardEvent), this.body.addEventListener("theme:accordion:close", this.hideEvent)
        }
        hideEvents() {
            this.hideAccordion()
        }
        clickEvents(t) {
            t.preventDefault(), this.toggleState()
        }
        keyboardEvents(t) {
            t.which === window.theme.keyboardKeys.ESCAPE && (this.hideAccordion(), this.trigger.focus())
        }
        resetMobileAccordions() {
            this.trigger.removeEventListener("click", this.toggleEvent), this.body.removeEventListener("keyup", this.keyboardEvent), this.body.removeEventListener("theme:accordion:close", this.hideEvent)
        }
        setDefaultState() {
            this.trigger.classList.contains(ir) ? W(this.body) : this.hideAccordion()
        }
        getSiblings() {
            const t = [...this.body.closest(er).querySelectorAll(Yo)].filter((t => t.contains(this.body))).shift();
            if (t) {
                return [...t.querySelectorAll(Go)].filter((t => !t.contains(this.body)))
            }
            return []
        }
        closeSiblings() {
            this.syncBodies.forEach((t => {
                t.dispatchEvent(new CustomEvent("theme:accordion:close", {
                    bubbles: !1
                }))
            }))
        }
        toggleState() {
            this.trigger.classList.contains(ir) ? this.hideAccordion() : (this.showAccordion(), this.closeSiblings(), this.body.hasAttribute(tr) && setTimeout((() => {
                document.dispatchEvent(new CustomEvent("theme:reset-price-range", {
                    bubbles: !1
                }))
            }), 400))
        }
        hideAccordion() {
            this.trigger.classList.remove(ir), Os(this.body)
        }
        showAccordion() {
            this.trigger.classList.add(ir), Ws(this.body), setTimeout((() => {
                this.checkInViewportAndScrollTo()
            }), 600)
        }
        checkInViewportAndScrollTo() {
            const t = this.trigger.getBoundingClientRect(),
                e = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
            t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth) || window.scrollTo({
                top: e + t.top,
                left: 0,
                behavior: "smooth"
            })
        }
        onBlockSelect(t) {
            this.body.contains(t.target) && this.showAccordion()
        }
        onBlockDeselect(t) {
            this.body.contains(t.target) && this.hideAccordion()
        }
    }
    const rr = {
            onLoad() {
                sr[this.id] = [];
                this.container.querySelectorAll(Go).forEach((t => {
                    sr[this.id].push(new or(t))
                }))
            },
            onUnload: function() {
                sr[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            },
            onSelect: function() {
                "accordion-single" === this.type && this.container.querySelector(`[${Qo}]`).click()
            },
            onDeselect: function() {
                "accordion-single" === this.type && this.container.querySelector(`[${Qo}]`).click()
            },
            onBlockSelect(t) {
                sr[this.id].forEach((e => {
                    "function" == typeof e.onBlockSelect && e.onBlockSelect(t)
                }))
            },
            onBlockDeselect(t) {
                sr[this.id].forEach((e => {
                    "function" == typeof e.onBlockSelect && e.onBlockDeselect(t)
                }))
            }
        },
        nr = "on-sale",
        ar = "sold-out";
    const lr = "[data-search-popdown-wrap]",
        cr = "[data-predictive-search-results]",
        hr = "[data-predictive-search-input]",
        dr = "[data-search-product-template]",
        ur = "[data-search-other-template]",
        pr = "[data-predictive-search-title-template]",
        mr = "[data-predictive-search-aria-template]",
        yr = "[data-product-title-wrap]",
        fr = "[data-product-wrap]",
        gr = "[data-collection-wrap]",
        wr = "[data-article-wrap]",
        br = "[data-page-wrap]",
        vr = "[data-predictive-search-aria]",
        Sr = "[data-popdown-outer]",
        Er = "[data-loading-indicator]",
        Lr = "dirty",
        Tr = "search--empty";
    let kr = {};
    p.filters.define("animationDelay", (function(t) {
        return 90 * t + 10
    }));
    class Ar {
        constructor(t) {
            this.wrapper = t, this.input = this.wrapper.querySelector(hr), this.loader = this.wrapper.querySelector(Er), this.results = this.wrapper.querySelector(cr), this.outer = this.input.closest(Sr), this.productTemplate = this.wrapper.querySelector(dr).innerHTML, this.otherTemplate = this.wrapper.querySelector(ur).innerHTML, this.titleTemplate = this.wrapper.querySelector(pr).innerHTML, this.ariaTemplate = this.wrapper.querySelector(mr).innerHTML, this.productTitleWrapper = this.results.querySelector(yr), this.productWrapper = this.results.querySelector(fr), this.collectionWrapper = this.results.querySelector(gr), this.articleWrapper = this.results.querySelector(wr), this.pageWrapper = this.results.querySelector(br), this.ariaWrapper = this.results.querySelector(vr), this.initSearch()
        }
        initSearch() {
            this.input.addEventListener("input", x(function(t) {
                const e = t.target.value;
                e && e.length > 1 ? (this.loader.style.display = "block", this.render(e)) : (this.resetTemplates(), this.outer.classList.remove(Lr))
            }.bind(this), 300)), this.input.addEventListener("clear", this.reset.bind(this))
        }
        render(t) {
            let e = "";
            e += window.theme.settings.search_products ? "product," : "", e += window.theme.settings.search_collections ? "collection," : "", e += window.theme.settings.search_articles ? "article," : "", e += window.theme.settings.search_pages ? "page," : "", e = e.slice(0, -1);
            fetch(`/search/suggest.json?q=${t}&resources[type]=${e}&resources[options][unavailable_products]=last`).then(this.handleErrors).then((t => t.json())).then((e => {
                this.resetTemplates(), this.outer.classList.add(Lr);
                const i = e.resources.results,
                    s = [];
                for (const t in i)({}).hasOwnProperty.call(i, t) && s.push(...i[t]);
                s.length ? (this.outer.classList.remove(Tr), this.injectOther(i), this.injectProduct(i.products)) : this.noResults(t), this.injectAria(t, s), Jt(this.outer, {
                    elementToFocus: this.input
                })
            })).catch((t => {
                console.error(t)
            })).finally((() => {
                this.loader.style.display = "none"
            }))
        }
        injectAria(t, e) {
            let i = window.theme.strings.noResultsFor,
                s = null;
            e.length && (s = e.length, i = window.theme.strings.resultsFor), this.ariaWrapper.innerHTML = p.render(this.ariaTemplate, {
                count: s,
                title: i,
                query: t
            })
        }
        noResults() {
            this.resetTemplates(), this.outer.classList.add(Lr), this.outer.classList.add(Tr)
        }
        resetTemplates() {
            this.productTitleWrapper.innerHTML = "", this.collectionWrapper.innerHTML = "", this.articleWrapper.innerHTML = "", this.productWrapper.innerHTML = "", this.pageWrapper.innerHTML = "", this.ariaWrapper.innerHTML = ""
        }
        reset() {
            this.resetTemplates(), this.outer.classList.remove(Lr), this.outer.classList.remove(Tr), this.input.val = ""
        }
        injectOther(t) {
            this.productTitleWrapper.innerHTML += p.render(this.titleTemplate, {
                title: window.theme.strings.products,
                count: t.products.length
            }), t.collections && t.collections.length && (this.collectionWrapper.innerHTML += p.render(this.titleTemplate, {
                title: window.theme.strings.collections,
                count: t.collections.length
            }), this.collectionWrapper.innerHTML += p.render(this.otherTemplate, t.collections)), t.pages && t.pages.length && (this.pageWrapper.innerHTML += p.render(this.titleTemplate, {
                title: window.theme.strings.pages,
                count: t.pages.length
            }), this.pageWrapper.innerHTML += p.render(this.otherTemplate, t.pages)), t.articles && t.articles.length && (this.articleWrapper.innerHTML += p.render(this.titleTemplate, {
                title: window.theme.strings.articles,
                count: t.articles.length
            }), this.articleWrapper.innerHTML += p.render(this.otherTemplate, t.articles))
        }
        injectProduct(t) {
            let e = [];
            t.forEach((t => {
                let i = t;
                i = function(t) {
                    const e = t.price < t.compare_at_price_min;
                    let i = e ? nr : "";
                    if (i += t.available ? "" : ar, t.price = r.formatMoney(t.price, theme.moneyFormat), t.prive_varies) {
                        let e = r.formatMoney(t.price_min, theme.moneyFormat);
                        t.price = `${window.theme.strings.from} ${e}`
                    }
                    return {
                        ...t,
                        classes: i,
                        on_sale: e,
                        sold_out: !t.available,
                        sold_out_translation: window.theme.strings.soldOut,
                        compare_at_price: r.formatMoney(t.compare_at_price_min, theme.moneyFormat),
                        compare_at_price_max: r.formatMoney(t.compare_at_price_max, theme.moneyFormat),
                        compare_at_price_min: r.formatMoney(t.compare_at_price_min, theme.moneyFormat),
                        price_max: r.formatMoney(t.price_max, theme.moneyFormat),
                        price_min: r.formatMoney(t.price_min, theme.moneyFormat)
                    }
                }(i), i.image = null, i.featured_image && (i.thumb = Vi(i.featured_image.url, "360x360")), e.push(i)
            }));
            const i = p.render(this.productTemplate, e);
            this.productWrapper.innerHTML += i
        }
        handleErrors(t) {
            return t.ok ? t : t.json().then((function(e) {
                throw new O({
                    status: t.statusText,
                    headers: t.headers,
                    json: e
                })
            }))
        }
    }
    const qr = {
            onLoad() {
                kr[this.id] = [];
                document.querySelectorAll(lr).forEach((t => {
                    kr[this.id].push(new Ar(t))
                }))
            },
            onUnload: function() {
                kr[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            }
        },
        xr = "[data-drawer-search]",
        Cr = "[data-search-popdown-wrap]",
        Pr = "[data-predictive-search-input]",
        _r = "[data-clear-input]";
    class $r {
        constructor(t) {
            this.outer = t.container.querySelector(xr), this.outer && (this.wrapper = this.outer.querySelector(Cr), this.input = this.outer.querySelector(Pr), this.clear = this.outer.querySelector(_r), this.init())
        }
        init() {
            this.clear.addEventListener("click", function(t) {
                t.preventDefault(), this.clearInput()
            }.bind(this))
        }
        clearInput() {
            this.input.value = "", this.input.dispatchEvent(new CustomEvent("clear", {
                bubbles: !1
            })), this.input.focus()
        }
    }
    const Mr = {
            onLoad() {
                this.searchDrawer = new $r(this)
            },
            onUnload: function() {
                this.searchDrawer && "function" == typeof this.searchDrawer.unload && this.searchDrawer.unload()
            }
        },
        Hr = {
            slideruleOpen: "data-sliderule-open",
            slideruleClose: "data-sliderule-close",
            sliderulePane: "data-sliderule-pane",
            slideruleWrappper: "[data-sliderule]",
            focusable: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            dataAnimates: "data-animates",
            children: ":scope > [data-animates], \n             :scope > * > [data-animates], \n             :scope > * > * >[data-animates],\n             :scope .sliderule-grid  > *"
        },
        Dr = "is-visible",
        Ir = "is-hiding",
        Br = "is-hidden";
    let Fr = {};
    class Wr {
        constructor(t) {
            this.sliderule = t, this.wrapper = t.closest(Hr.wrapper), this.key = this.sliderule.id;
            const e = `[${Hr.slideruleOpen}='${this.key}']`,
                i = `[${Hr.slideruleClose}='${this.key}']`;
            this.trigger = document.querySelector(e), this.exit = document.querySelectorAll(i), this.pane = document.querySelector(`[${Hr.sliderulePane}]`), this.children = this.sliderule.querySelectorAll(Hr.children), this.trigger.setAttribute("aria-haspopup", !0), this.trigger.setAttribute("aria-expanded", !1), this.trigger.setAttribute("aria-controls", this.key), this.clickEvents(), this.staggerChildAnimations(), document.addEventListener("theme:sliderule:close", this.closeSliderule.bind(this))
        }
        clickEvents() {
            this.trigger.addEventListener("click", function() {
                this.showSliderule()
            }.bind(this)), this.exit.forEach((t => {
                t.addEventListener("click", function() {
                    this.hideSliderule()
                }.bind(this))
            }))
        }
        keyboardEvents() {
            this.trigger.addEventListener("keyup", function(t) {
                t.which === window.theme.keyboardKeys.SPACE && this.showSliderule()
            }.bind(this)), this.sliderule.addEventListener("keyup", function(t) {
                t.which === window.theme.keyboardKeys.ESCAPE && (this.hideSliderule(), this.buttons[0].focus())
            }.bind(this))
        }
        staggerChildAnimations(t = !1) {
            (t ? Array.prototype.slice.call(this.children).slice().reverse() : this.children).forEach(((t, e) => {
                t.style.transitionDelay = 50 * e + 10 + "ms"
            }))
        }
        hideSliderule(t = !1) {
            const e = window.getComputedStyle(this.pane),
                i = 1e3 * parseFloat(e.getPropertyValue("transition-duration")),
                s = t ? this.pane.querySelectorAll(`.${Dr}`) : this.children;
            this.pane.style.setProperty("--sliderule-height", "auto"), this.staggerChildAnimations(!0), this.pane.classList.add(Ir), this.sliderule.classList.add(Ir), this.sliderule.classList.remove(Dr), s.forEach((t => {
                t.classList.remove(Dr)
            }));
            const o = parseInt(this.pane.dataset.sliderulePane, 10) - 1;
            this.pane.setAttribute(Hr.sliderulePane, o);
            const r = t ? `[${Hr.dataAnimates}].${Br}` : `[${Hr.dataAnimates}="${o}"].${Br}`,
                n = this.pane.querySelectorAll(r);
            n.length && n.forEach((t => {
                t.classList.remove(Br)
            })), setTimeout((() => {
                this.pane.classList.remove(Ir), this.sliderule.classList.remove(Ir), this.staggerChildAnimations()
            }), i)
        }
        showSliderule() {
            this.pane.style.setProperty("--sliderule-height", "auto"), this.sliderule.classList.add(Dr), this.children.forEach((t => {
                t.classList.add(Dr)
            }));
            const t = parseInt(this.pane.dataset.sliderulePane, 10),
                e = t + 1;
            this.pane.setAttribute(Hr.sliderulePane, e);
            const i = this.pane.querySelectorAll(`[${Hr.dataAnimates}="${t}"]`);
            if (i.length) {
                const t = 1e3 * parseFloat(window.getComputedStyle(i[0]).getPropertyValue("transition-duration"));
                setTimeout((() => {
                    i.forEach((t => {
                        t.classList.add(Br)
                    }))
                }), t)
            }
            const s = parseInt(this.trigger.nextElementSibling.offsetHeight);
            this.pane.style.setProperty("--sliderule-height", `${s}px`)
        }
        closeSliderule() {
            this.pane && this.pane.hasAttribute(Hr.sliderulePane) && parseInt(this.pane.getAttribute(Hr.sliderulePane)) > 0 && (this.hideSliderule(!0), parseInt(this.pane.getAttribute(Hr.sliderulePane)) > 0 && this.pane.setAttribute(Hr.sliderulePane, 0))
        }
    }
    const Or = {
            onLoad() {
                Fr[this.id] = [];
                this.container.querySelectorAll(Hr.slideruleWrappper).forEach((t => {
                    Fr[this.id].push(new Wr(t))
                }))
            }
        },
        jr = "[data-product-add-popdown-wrapper]",
        Nr = "[data-close-popdown]",
        Vr = '[data-ajax-disable="false"]',
        Rr = '[data-ajax-disable="true"]';
    var zr;
    class Ur {
        constructor() {
            this.drawer = document.querySelector(jr), this.cartSectionAjax = document.querySelector(Vr), this.ajaxDisabled = document.querySelector(Rr), document.addEventListener("theme:cart:popdown", (t => {
                this.cartSectionAjax ? this.cartSectionAjax.dispatchEvent(new CustomEvent("theme:cart:reload", {
                    bubbles: !0
                })) : this.ajaxDisabled ? window.location.reload() : this.renderPopdown(t)
            }))
        }
        renderPopdown(t) {
            const e = t.detail.variant,
                i = `${window.theme.routes.root_url}variants/${e.id}/?section_id=api-product-popdown`,
                s = this;
            a.get(i).then((function(t) {
                const e = document.createElement("div");
                e.innerHTML = t.data, s.drawer.innerHTML = e.querySelector("[data-api-content]").innerHTML, s.connectCartButton(), s.connectCloseButton()
            })).catch((function(t) {
                console.warn(t)
            }))
        }
        connectCloseButton() {
            this.drawer.classList.add("is-visible");
            this.drawer.querySelector(Nr).addEventListener("click", function(t) {
                t.preventDefault(), this.drawer.classList.remove("is-visible")
            }.bind(this)), this.popdownTimer()
        }
        connectCartButton() {
            const t = this.drawer.querySelector('[data-drawer-toggle="drawer-cart"]'),
                e = document.querySelector('[data-drawer="drawer-cart"]');
            e && t.addEventListener("click", function(t) {
                t.preventDefault(), this.drawer.classList.remove("is-visible"), e.dispatchEvent(new CustomEvent("theme:drawer:open", {
                    bubbles: !1
                }))
            }.bind(this))
        }
        popdownTimer() {
            clearTimeout(zr), zr = setTimeout((() => {
                this.drawer.classList.remove("is-visible")
            }), 5e3)
        }
    }
    const Jr = {
            onLoad() {
                new Ur(this)
            }
        },
        Kr = "[data-takes-space]",
        Xr = "[data-header-desktop]",
        Yr = "js__header__clone",
        Qr = "js__show__mobile",
        Gr = "[data-header-backfill]",
        Zr = "data-header-transparent",
        tn = "header-override-border",
        en = ".main-content > .shopify-section:first-child [data-overlay-header]",
        sn = ".main-content > .shopify-section:first-child [data-prevent-transparent-header]",
        on = '.navlink[href="#"]';
    let rn = {};
    class nn {
        constructor(t) {
            this.wrapper = t, this.style = this.wrapper.dataset.style, this.desktop = this.wrapper.querySelector(Xr), this.transparent = "false" !== this.wrapper.getAttribute(Zr), this.overlayedImages = document.querySelectorAll(en), this.deadLinks = document.querySelectorAll(on), this.killDeadLinks(), "drawer" !== this.style && this.desktop && (this.minWidth = this.getMinWidth(), this.listenWidth()), this.checkForImage(), window.dispatchEvent(new Event("resize")), document.addEventListener("header:check", this.checkForImage.bind(this))
        }
        unload() {
            document.removeEventListener("theme:resize", this.checkWidth)
        }
        checkForImage() {
            this.overlayedImages = document.querySelectorAll(en);
            let t = document.querySelectorAll(sn).length;
            this.overlayedImages.length && !t && this.transparent ? (document.querySelector(Gr).style.display = "none", this.listenOverlay()) : this.wrapper.setAttribute(Zr, !1), !this.overlayedImages.length || t || this.transparent || (this.wrapper.classList.add(tn), this.subtractHeaderHeight())
        }
        listenOverlay() {
            document.addEventListener("theme:resize", this.checkWidth.bind(this)), this.subtractAnnouncementHeight()
        }
        listenWidth() {
            document.addEventListener("theme:resize", this.checkWidth.bind(this)), this.checkWidth()
        }
        killDeadLinks() {
            this.deadLinks.forEach((t => {
                t.onclick = t => {
                    t.preventDefault()
                }
            }))
        }
        subtractAnnouncementHeight() {
            const {
                windowHeight: t,
                announcementHeight: e
            } = S();
            this.overlayedImages.forEach((i => {
                i.style.setProperty("--full-screen", t - e + "px"), i.classList.add("has-overlay")
            }))
        }
        subtractHeaderHeight() {
            const {
                windowHeight: t,
                headerHeight: e
            } = S();
            this.overlayedImages.forEach((i => {
                i.style.setProperty("--full-screen", t - e + "px")
            }))
        }
        checkWidth() {
            document.body.clientWidth < this.minWidth ? this.wrapper.classList.add(Qr) : this.wrapper.classList.remove(Qr)
        }
        getMinWidth() {
            const t = this.wrapper.cloneNode(!0);
            t.classList.add(Yr), document.body.appendChild(t);
            const e = t.querySelectorAll(Kr);
            let i = 0;
            return i = 3 === e.length ? function(t) {
                let e = [];
                t.forEach((t => {
                    e.push(t.clientWidth)
                })), e[0] > e[2] ? e[2] = e[0] : e[0] = e[2];
                return e.reduce(((t, e) => t + e))
            }(e) : function(t) {
                let e = 0;
                return t.forEach((t => {
                    e += t.clientWidth
                })), e
            }(e), document.body.removeChild(t), i + 20 * e.length
        }
    }
    Ft("header", [{
        onLoad() {
            rn = new nn(this.container)
        },
        onUnload: function() {
            "function" == typeof rn.unload && rn.unload()
        }
    }, Ue, Or, ii, fi, qi, $i, Ni, qr, Mr, ks, Xo, Jr, rr]), customElements.get("popout-select") || customElements.define("popout-select", Fs), customElements.get("upsell-product") || customElements.define("upsell-product", ao), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es);

    function an() {
        const t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        return document.documentElement.classList.toggle("supports-touch", t), t
    }
    Ft("footer", [{
        onLoad() {
            var t = document.querySelector("[data-powered-link] a");
            t && t.setAttribute("rel", "noopener")
        }
    }, rr]), customElements.get("popout-select") || customElements.define("popout-select", Fs), an();
    const ln = {
        cc_load_policy: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        controls: 1,
        showinfo: 0,
        ecver: 2,
        fs: 1,
        rel: 0
    };

    function cn(t, e) {
        const i = {
                ...ln,
                ...e
            },
            s = document.querySelector(`[data-player="${t}"]`),
            o = s.querySelector("iframe, [data-replace]"),
            r = s.querySelector("[data-video-id]").getAttribute("data-video-id");
        es({
            url: "https://www.youtube.com/iframe_api"
        });
        return window.youtubeLoaderPromise.then((function() {
            let t = new window.YT.Player(o, {
                videoId: r,
                playerVars: {
                    ...i
                }
            });
            return s.addEventListener("pause", (function() {
                try {
                    t.pauseVideo && t.pauseVideo()
                } catch (t) {
                    console.warn(t)
                }
            })), s.addEventListener("play-desktop", (function() {
                an() || s.dispatchEvent(new Event("play"))
            })), s.addEventListener("play", (function() {
                try {
                    t.playVideo ? t.playVideo() : t.addEventListener("onReady", (function(t) {
                        t.target.playVideo()
                    }))
                } catch (t) {
                    console.warn(t)
                }
            })), s.addEventListener("destroy", (function() {
                try {
                    t.destroy && t.destroy()
                } catch (t) {
                    console.warn(t)
                }
            })), t
        })).catch((function(t) {
            console.error(t)
        }))
    }
    window.youtubeLoaderPromise = new Promise((t => {
        window.onYouTubeIframeAPIReady = function() {
            t()
        }
    }));
    const hn = {
        autoplay: !0,
        loop: !0,
        controls: !0,
        muted: !1,
        playsinline: !0
    };
    const dn = "[data-video-popup]",
        un = "[data-video-autoplay]",
        pn = "data-unique",
        mn = "data-video-id",
        yn = "data-video-type",
        fn = "data-player";
    class gn {
        constructor(t) {
            this.container = t.container, this.triggers = this.container.querySelectorAll(dn), this.backgroundVideo = this.container.querySelector(un), this.init()
        }
        init() {
            this.triggers.forEach((t => {
                const e = t.getAttribute(pn),
                    s = t.getAttribute(mn),
                    o = t.getAttribute(yn),
                    r = `${s}-${e}`,
                    n = document.querySelector(`[${fn}="${r}"]`);
                i.init({
                    onShow: () => {
                        this.backgroundVideo && "function" == typeof this.backgroundVideo.pause && this.backgroundVideo.pause();
                        let t = {};
                        "youtube" === o ? t = cn(r) : "vimeo" === o && (t = function(t, e) {
                            const i = {
                                    ...hn,
                                    ...e
                                },
                                s = document.querySelector(`[data-player="${t}"]`),
                                o = s.querySelector("iframe, [data-replace]"),
                                r = s.querySelector("[data-video-id]").getAttribute("data-video-id"),
                                n = es({
                                    url: "https://player.vimeo.com/api/player.js"
                                }),
                                a = `select-${t}`;
                            return o.setAttribute("id", a), n.then((function() {
                                const t = new window.Vimeo.Player(a, {
                                    ...i,
                                    id: r
                                });
                                return s.addEventListener("pause", (function() {
                                    try {
                                        t.pause && t.pause()
                                    } catch (t) {
                                        console.warn(t)
                                    }
                                })), s.addEventListener("play-desktop", (function() {
                                    an() || s.dispatchEvent(new Event("play"))
                                })), s.addEventListener("play", (function() {
                                    t.play && t.play()
                                })), s.addEventListener("destroy", (function() {
                                    try {
                                        t.destroy && t.destroy()
                                    } catch (t) {
                                        console.log(t)
                                    }
                                })), t
                            })).catch((function(t) {
                                console.error(t)
                            }))
                        }(r)), t.then((() => {
                            n.dispatchEvent(new CustomEvent("play"))
                        }))
                    },
                    onClose: (t, e, i) => {
                        i.preventDefault(), n.dispatchEvent(new CustomEvent("destroy")), this.backgroundVideo && "function" == typeof this.backgroundVideo.play && this.backgroundVideo.play()
                    },
                    openTrigger: `data-trigger-${s}-${e}`
                })
            }))
        }
    }
    const wn = {
            onLoad() {
                new gn(this)
            }
        },
        bn = "[data-scroll-down]";
    class vn {
        constructor(t) {
            this.wrapper = t, this.init()
        }
        init() {
            const t = this.wrapper.querySelectorAll(bn);
            t && t.forEach((t => {
                t.addEventListener("click", this.scroll.bind(this))
            }))
        }
        scroll() {
            const t = this.wrapper.offsetTop + this.wrapper.clientHeight;
            window.scroll({
                top: t,
                left: 0,
                behavior: "smooth"
            })
        }
    }
    const Sn = {
        onLoad() {
            this.scrollButton = new vn(this.container)
        },
        onUnload: function() {
            delete this.scrollButton
        }
    };
    Ft("video", [ie, Sn, wn]), Ft("page-faq", rr), Ft("hero", [ie, Sn]);
    const En = "[data-slider]",
        Ln = "[data-grid-slide]",
        Tn = "data-show-dots",
        kn = {};
    class An {
        constructor(t, e) {
            this.container = t, this.slideshow = e, this.pageDots = "true" === this.slideshow.getAttribute(Tn), this.firstPhoto = this.container.querySelector(Ln);
            const i = this.firstPhoto.offsetHeight / 2;
            this.slideshow.style.setProperty("--buttons-top", `${i}px`), this.slideshow && (this.flkty = null, this.init())
        }
        init() {
            const t = this,
                e = {
                    initialIndex: 0,
                    accessibility: !0,
                    autoPlay: !1,
                    contain: !0,
                    pageDots: this.pageDots,
                    adaptiveHeight: !1,
                    wrapAround: !1,
                    groupCells: !0,
                    cellAlign: "left",
                    freeScroll: !0,
                    prevNextButtons: !0,
                    draggable: !0,
                    rightToLeft: window.isRTL,
                    arrowShape: {
                        x0: 10,
                        x1: 60,
                        y1: 50,
                        x2: 65,
                        y2: 45,
                        x3: 20
                    },
                    on: {
                        ready: function() {
                            t.removeIncorrectAria()
                        }
                    }
                };
            this.flkty = new o(this.slideshow, e), this.container.addEventListener("theme:tab:change", (() => {
                this.flkty.resize()
            }))
        }
        removeIncorrectAria() {
            this.slideshow.querySelectorAll('[aria-hidden="true"]').forEach((t => t.removeAttribute("aria-hidden")))
        }
        onUnload() {
            this.slideshow && this.flkty && (this.flkty.options.watchCSS = !1, this.flkty.destroy())
        }
    }
    const qn = {
        onLoad() {
            kn[this.id] = [];
            this.container.querySelectorAll(En).forEach((t => {
                kn[this.id].push(new An(this.container, t))
            }))
        },
        onUnload(t) {
            kn[this.id].forEach((e => {
                "function" == typeof e.onUnload && e.onUnload(t)
            }))
        }
    };
    Ft("custom-content", [ie, wn, ks, qn]), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es);
    const xn = [],
        Cn = "[data-slideshow-wrapper]",
        Pn = "data-slideshow-speed",
        _n = "data-slideshow-autoplay",
        $n = "data-slideshow-slides",
        Mn = "[data-slide-custom-prev]",
        Hn = "[data-slide-custom-next]",
        Dn = "flickity-enabled";
    class In {
        constructor(t) {
            this.container = t.container, this.wrapper = t.container.querySelector(Cn), this.speed = this.wrapper.getAttribute(Pn), this.autoplay = "true" === this.wrapper.getAttribute(_n), this.slideCount = parseInt(this.wrapper.getAttribute($n), 10), this.prevButtons = this.wrapper.querySelectorAll(Mn), this.nextButtons = this.wrapper.querySelectorAll(Hn), this.flkty = null, this.init()
        }
        init() {
            const e = {
                autoPlay: !(!this.autoplay || !this.speed) && parseInt(this.speed),
                contain: !1,
                pageDots: !0,
                adaptiveHeight: !0,
                accessibility: !0,
                wrapAround: this.slideCount > 1,
                prevNextButtons: !1,
                draggable: !0,
                fade: !0,
                rightToLeft: window.isRTL
            };
            this.flkty = new t(this.wrapper, e), this.prevButtons.length && this.prevButtons.forEach((t => {
                t.onclick = () => {
                    this.flkty.previous(!0, !1)
                }
            })), this.nextButtons.length && this.nextButtons.forEach((t => {
                t.onclick = () => {
                    this.flkty.next(!0, !1)
                }
            })), this.reload()
        }
        unload() {
            this.flkty && this.wrapper && this.wrapper.classList.contains(Dn) && this.flkty.destroy()
        }
        onBlockSelect(t) {
            const e = t.target.closest("[data-slideshow-index]").getAttribute("data-slideshow-index"),
                i = parseInt(e);
            this.flkty.selectCell(i), this.flkty.stopPlayer()
        }
        onBlockDeselect() {
            this.autoplay && this.flkty.playPlayer()
        }
        reload() {
            this.wrapper.addEventListener("theme:slideshow:reload", (() => {
                this.unload(), this.init()
            }))
        }
    }
    Ft("slideshow", [{
        onLoad() {
            xn[this.id] = new In(this)
        },
        onSelect(t) {
            q(t.target)
        },
        onUnload() {
            "function" == typeof xn[this.id].unload && xn[this.id].unload()
        },
        onBlockSelect(t) {
            "function" == typeof xn[this.id].onBlockSelect && xn[this.id].onBlockSelect(t)
        },
        onBlockDeselect(t) {
            "function" == typeof xn[this.id].onBlockSelect && xn[this.id].onBlockDeselect(t)
        }
    }, ie, Sn]);
    const Bn = "[data-range-slider]",
        Fn = "[data-range-left]",
        Wn = "[data-range-right]",
        On = "[data-range-line]",
        jn = "[data-range-holder]",
        Nn = "data-se-min",
        Vn = "data-se-max",
        Rn = "data-se-min-value",
        zn = "data-se-max-value",
        Un = "data-se-step",
        Jn = "data-range-filter-update",
        Kn = "[data-field-price-min]",
        Xn = "[data-field-price-max]",
        Yn = "is-initialized";
    class Qn {
        constructor(t) {
            this.container = t.container, this.slider = t.querySelector(Bn), this.slider && (this.onMoveEvent = t => this.onMove(t), this.onStopEvent = t => this.onStop(t), this.onStartEvent = t => this.onStart(t), this.startX = 0, this.x = 0, this.touchLeft = this.slider.querySelector(Fn), this.touchRight = this.slider.querySelector(Wn), this.lineSpan = this.slider.querySelector(On), this.min = parseFloat(this.slider.getAttribute(Nn)), this.max = parseFloat(this.slider.getAttribute(Vn)), this.step = 0, this.normalizeFact = 26, this.init(), document.addEventListener("theme:reset-price-range", (() => {
                this.setDefaultValues()
            })))
        }
        init() {
            this.setDefaultValues(), this.touchLeft.addEventListener("mousedown", this.onStartEvent), this.touchRight.addEventListener("mousedown", this.onStartEvent), this.touchLeft.addEventListener("touchstart", this.onStartEvent), this.touchRight.addEventListener("touchstart", this.onStartEvent), this.slider.classList.add(Yn)
        }
        setDefaultValues() {
            let t = this.min;
            this.slider.hasAttribute(Rn) && (t = parseFloat(this.slider.getAttribute(Rn)));
            let e = this.max;
            this.slider.hasAttribute(zn) && (e = parseFloat(this.slider.getAttribute(zn))), t < this.min && (t = this.min), e > this.max && (e = this.max), t > e && (t = e), this.slider.getAttribute(Un) && (this.step = Math.abs(parseFloat(this.slider.getAttribute(Un)))), this.reset(), this.maxX = this.slider.offsetWidth - this.touchRight.offsetWidth, this.selectedTouch = null, this.initialValue = this.lineSpan.offsetWidth - this.normalizeFact, this.setMinValue(t), this.setMaxValue(e)
        }
        reset() {
            this.touchLeft.style.left = "0px", this.touchRight.style.left = this.slider.offsetWidth - this.touchLeft.offsetWidth + "px", this.lineSpan.style.marginLeft = "0px", this.lineSpan.style.width = this.slider.offsetWidth - this.touchLeft.offsetWidth + "px", this.startX = 0, this.x = 0
        }
        setMinValue(t) {
            const e = (t - this.min) / (this.max - this.min);
            this.touchLeft.style.left = Math.ceil(e * (this.slider.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact))) + "px", this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.slider.setAttribute(Rn, t)
        }
        setMaxValue(t) {
            const e = (t - this.min) / (this.max - this.min);
            this.touchRight.style.left = Math.ceil(e * (this.slider.offsetWidth - (this.touchLeft.offsetWidth + this.normalizeFact)) + this.normalizeFact) + "px", this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.slider.setAttribute(zn, t)
        }
        onStart(t) {
            t.preventDefault();
            let e = t;
            t.touches && (e = t.touches[0]), t.currentTarget === this.touchLeft ? this.x = this.touchLeft.offsetLeft : this.x = this.touchRight.offsetLeft, this.startX = e.pageX - this.x, this.selectedTouch = t.currentTarget, this.slider.addEventListener("mousemove", this.onMoveEvent), this.slider.addEventListener("mouseup", this.onStopEvent), this.slider.addEventListener("touchmove", this.onMoveEvent), this.slider.addEventListener("touchend", this.onStopEvent)
        }
        onMove(t) {
            let e = t;
            if (t.touches && (e = t.touches[0]), this.x = e.pageX - this.startX, this.selectedTouch === this.touchLeft ? (this.x > this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10 ? this.x = this.touchRight.offsetLeft - this.selectedTouch.offsetWidth + 10 : this.x < 0 && (this.x = 0), this.selectedTouch.style.left = this.x + "px") : this.selectedTouch === this.touchRight && (this.x < this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10 ? this.x = this.touchLeft.offsetLeft + this.touchLeft.offsetWidth - 10 : this.x > this.maxX && (this.x = this.maxX), this.selectedTouch.style.left = this.x + "px"), this.lineSpan.style.marginLeft = this.touchLeft.offsetLeft + "px", this.lineSpan.style.width = this.touchRight.offsetLeft - this.touchLeft.offsetLeft + "px", this.calculateValue(), this.slider.getAttribute("on-change")) {
                new Function("min, max", this.slider.getAttribute("on-change"))(this.slider.getAttribute(Rn), this.slider.getAttribute(zn))
            }
            this.onChange(this.slider.getAttribute(Rn), this.slider.getAttribute(zn))
        }
        onStop(t) {
            this.slider.removeEventListener("mousemove", this.onMoveEvent), this.slider.removeEventListener("mouseup", this.onStopEvent), this.slider.removeEventListener("touchmove", this.onMoveEvent), this.slider.removeEventListener("touchend", this.onStopEvent), this.selectedTouch = null, this.calculateValue(), this.onChanged(this.slider.getAttribute(Rn), this.slider.getAttribute(zn))
        }
        onChange(t, e) {
            const i = this.slider.closest(jn);
            if (i) {
                const s = i.querySelector(Kn),
                    o = i.querySelector(Xn);
                s && o && (s.value = t, o.value = e)
            }
        }
        onChanged(t, e) {
            this.slider.hasAttribute(Jn) && this.slider.dispatchEvent(new CustomEvent("range:filter:update", {
                bubbles: !0
            }))
        }
        calculateValue() {
            const t = (this.lineSpan.offsetWidth - this.normalizeFact) / this.initialValue;
            let e = this.lineSpan.offsetLeft / this.initialValue,
                i = e + t;
            if (e = e * (this.max - this.min) + this.min, i = i * (this.max - this.min) + this.min, 0 !== this.step) {
                let t = Math.floor(e / this.step);
                e = this.step * t, t = Math.floor(i / this.step), i = this.step * t
            }
            this.selectedTouch === this.touchLeft && this.slider.setAttribute(Rn, e), this.selectedTouch === this.touchRight && this.slider.setAttribute(zn, i)
        }
    }
    const Gn = "[data-filters]",
        Zn = "data-filters",
        ta = "[data-filters-underlay]",
        ea = "data-default-hide",
        ia = "data-filters-toggle",
        sa = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        oa = "data-group-heading",
        ra = "data-show-more",
        na = "drawer--visible",
        aa = "filters--default-visible",
        la = "hidden",
        ca = "is-hidden",
        ha = {};
    class da {
        constructor(t) {
            this.container = t, this.underlay = this.container.querySelector(ta), this.groupHeadings = this.container.querySelectorAll(`[${oa}]`), this.showMoreButtons = this.container.querySelectorAll(`[${ra}]`);
            const e = this.container.getAttribute(Zn),
                i = `[${ia}='${e}']`;
            this.filtersToggleButtons = document.querySelectorAll(i), this.connectToggleMemory = t => this.connectToggleFunction(t), this.connectShowHiddenOptions = t => this.showHiddenOptions(t), this.connectToggle(), this.onFocusOut(), this.expandingEvents(), this.getShowOnLoad() ? this.showFilters() : this.hideFilters()
        }
        unload() {
            this.filtersToggleButtons.length && this.filtersToggleButtons.forEach((t => {
                t.removeEventListener("click", this.connectToggleMemory)
            })), this.showMoreButtons.length && this.showMoreButtons.forEach((t => {
                t.removeEventListener("click", this.connectShowHiddenOptions)
            }))
        }
        expandingEvents() {
            this.showMoreButtons.length && this.showMoreButtons.forEach((t => {
                t.addEventListener("click", ((t, e) => {
                    let i, s;
                    return function o(...r) {
                        const n = Date.now();
                        s = clearTimeout(s), !i || n - i >= e ? (t.apply(null, r), i = n) : s = setTimeout(o.bind(null, ...r), e - (n - i))
                    }
                })(this.connectShowHiddenOptions, 500))
            }))
        }
        showHiddenOptions(t) {
            const e = t.target.hasAttribute(ra) ? t.target : t.target.closest(`[${ra}]`);
            e.classList.add(ca), e.previousElementSibling.querySelectorAll(`.${ca}`).forEach((t => {
                t.classList.remove(ca)
            }))
        }
        connectToggle() {
            this.filtersToggleButtons.forEach((t => {
                t.addEventListener("click", this.connectToggleMemory.bind(this))
            }))
        }
        connectToggleFunction(t) {
            "true" === t.currentTarget.getAttribute("aria-expanded") ? this.hideFilters() : this.showFilters()
        }
        onFocusOut() {
            this.container.addEventListener("focusout", function(t) {
                if (window.innerWidth >= window.theme.sizes.medium) return;
                const e = t.currentTarget.contains(t.relatedTarget),
                    i = this.container.classList.contains(na);
                document.body.classList.contains("focus-enabled") && i && !e && this.hideFilters()
            }.bind(this)), this.container.addEventListener("keyup", function(t) {
                t.which === window.theme.keyboardKeys.ESCAPE && (this.hideFilters(), this.filtersToggleButtons[0].focus())
            }.bind(this)), this.underlay.addEventListener("click", function() {
                this.hideFilters()
            }.bind(this))
        }
        getShowOnLoad() {
            const t = `[${ea}='false']`,
                e = document.querySelector(t),
                i = window.innerWidth >= window.theme.sizes.medium;
            return !(!e || !i)
        }
        showFilters() {
            this.container.classList.remove(la), setTimeout((() => {
                this.filtersToggleButtons.forEach((t => t.setAttribute("aria-expanded", !0))), this.filtersToggleButtons.forEach((t => t.classList.add(na))), this.container.classList.add(na), this.container.querySelector(sa).focus()
            }), 1)
        }
        hideFilters() {
            this.filtersToggleButtons.forEach((t => t.setAttribute("aria-expanded", !1))), this.container.classList.remove(na), this.container.classList.remove(aa), this.filtersToggleButtons.forEach((t => t.classList.remove(na))), this.filtersToggleButtons.forEach((t => t.classList.remove(aa))), setTimeout((() => {
                this.container.classList.contains(na) || this.container.classList.add(la)
            }), 800)
        }
    }
    const ua = {
            onLoad() {
                ha[this.id] = [];
                this.container.querySelectorAll(Gn).forEach((t => {
                    ha[this.id].push(new da(t))
                }))
            },
            onUnload: function() {
                ha[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            }
        },
        pa = {
            collectionSidebar: "[data-collection-sidebar]",
            form: "[data-sidebar-filter-form]",
            inputs: "input, select, label, textarea",
            priceMin: "[data-field-price-min]",
            priceMax: "[data-field-price-max]",
            priceMinValue: "data-field-price-min",
            priceMaxValue: "data-field-price-max",
            rangeMin: "[data-se-min-value]",
            rangeMax: "[data-se-max-value]",
            rangeMinValue: "data-se-min-value",
            rangeMaxValue: "data-se-max-value",
            productsContainer: "[data-products-grid]",
            filterUpdateUrlButton: "[data-filter-update-url]",
            activeFiltersHolder: "[data-active-filters]",
            activeFiltersCount: "[data-active-filters-count]",
            dataSort: "data-sort-enabled",
            collectionTools: "[data-collection-tools]",
            swatch: "[data-swatch]",
            filtersWrappper: "[data-filters]",
            headerSticky: '[data-header-sticky="sticky"]',
            headerHeight: "[data-header-height]",
            gridLarge: "data-grid-large",
            gridSmall: "data-grid-small",
            showMore: "[data-show-more]",
            accordionBody: "[data-accordion-body]",
            checkedOption: "input:checked",
            siblingsInnerHolder: "[data-sibling-inner]"
        },
        ma = "is-hidden",
        ya = "is-loading",
        fa = 1e3,
        ga = 1e3;
    class wa {
        constructor(t) {
            this.section = t, this.container = this.section.container, this.sidebar = this.container.querySelector(pa.collectionSidebar), this.form = t.container.querySelector(pa.form), this.sort = this.container.querySelector(`[${pa.dataSort}]`), this.productsContainer = this.container.querySelector(pa.productsContainer), this.activeFiltersHolder = this.container.querySelector(pa.activeFiltersHolder), this.activeFiltersCount = this.container.querySelector(pa.activeFiltersCount), this.headerIsSticky = null !== document.querySelector(pa.headerSticky), this.layoutLarge = this.container.querySelector(`[${pa.gridLarge}]`), this.layoutSmall = this.container.querySelector(`[${pa.gridSmall}]`), this.productsContainer && this.sidebar && this.init(), this.sort && this.container.addEventListener("theme:filter:form", (t => this.filtering(t))), (this.sidebar || this.sort) && window.addEventListener("popstate", (t => this.filtering(t)))
        }
        init() {
            this.showAllOptions(), this.form && (new Qn(this.form), this.sidebar.addEventListener("input", x((t => {
                const e = t.type,
                    i = t.target;
                if (!pa.inputs.includes(e) || !this.form || "function" != typeof this.form.submit) return;
                const s = this.form.querySelector(pa.priceMin),
                    o = this.form.querySelector(pa.priceMax);
                s && o && (i.hasAttribute(pa.priceMinValue) && !o.value && (o.value = o.placeholder), i.hasAttribute(pa.priceMaxValue) && !s.value && (s.value = s.placeholder)), this.filtering(t)
            }), 1500)), this.form.addEventListener("range:filter:update", (t => this.updateRange(t)))), this.sidebar && this.sidebar.addEventListener("click", (t => this.updateFilterFromUrl(t))), this.activeFiltersHolder && this.activeFiltersHolder.addEventListener("click", (t => this.updateFilterFromUrl(t))), this.productsContainer && this.productsContainer.addEventListener("click", (t => this.updateFilterFromUrl(t))), new ns(this.sidebar)
        }
        updateRange(t) {
            if (this.form && "function" == typeof this.form.submit) {
                const e = this.form.querySelector(pa.rangeMin),
                    i = this.form.querySelector(pa.rangeMax),
                    s = this.form.querySelector(pa.priceMin),
                    o = this.form.querySelector(pa.priceMax);
                if (e && i && s && o && e.hasAttribute(pa.rangeMinValue) && i.hasAttribute(pa.rangeMaxValue)) {
                    const r = parseInt(s.placeholder),
                        n = parseInt(o.placeholder),
                        a = parseInt(e.getAttribute(pa.rangeMinValue)),
                        l = parseInt(i.getAttribute(pa.rangeMaxValue));
                    r === a && n === l || (s.value = a, o.value = l, this.filtering(t))
                }
            }
        }
        updateFilterFromUrl(t) {
            const e = t.target;
            if (e.matches(pa.filterUpdateUrlButton) || e.closest(pa.filterUpdateUrlButton) && e) {
                t.preventDefault();
                const i = e.matches(pa.filterUpdateUrlButton) ? e : e.closest(pa.filterUpdateUrlButton);
                this.filtering(t, i.getAttribute("href"))
            }
        }
        addToHistory(t, e = "") {
            const i = this.sort ? this.sort.getAttribute(pa.dataSort) : "";
            if (!t || t && "popstate" !== t.type) {
                if ("" === e) {
                    const e = new window.URL(window.location.href).searchParams,
                        s = Object.fromEntries(e),
                        o = e.toString();
                    if (o.includes("filter.") || o.includes("sort_by") || o.includes("page"))
                        for (const t in s)(t.includes("filter.") || t.includes("sort_by") || t.includes("page")) && e.delete(t);
                    if (this.form) {
                        const t = new URLSearchParams(new FormData(this.form));
                        for (let [i, s] of t.entries()) i.includes("filter.") && s && e.append(i, s)
                    }
                    if (i || t && t.detail && t.detail.href) {
                        const s = i || t.detail.params;
                        e.set("sort_by", s)
                    }
                    const r = e.toString(),
                        n = r ? `?${r}` : location.pathname;
                    return void window.history.pushState(null, "", n)
                }
                window.history.pushState(null, "", e)
            }
        }
        getFilterResult() {
            this.productsContainer.classList.add(ya), this.getGridValues(), fetch(`${window.location.pathname}${window.location.search}`).then((t => t.text())).then((t => {
                const e = document.createElement("div");
                e.innerHTML = t, this.sidebar && (this.sidebar.innerHTML = e.querySelector(pa.collectionSidebar).innerHTML), this.activeFiltersCount && (this.activeFiltersCount.innerHTML = e.querySelector(pa.activeFiltersCount).innerHTML), this.productsContainer.innerHTML = e.querySelector(pa.productsContainer).innerHTML, this.activeFiltersHolder.innerHTML = e.querySelector(pa.activeFiltersHolder).innerHTML, this.activeFiltersHolder.classList.toggle(ma, "" === this.activeFiltersHolder.innerHTML), this.setGridValues(), this.refreshFunctionalities(), setTimeout((() => {
                    this.productsContainer.classList.remove(ya)
                }), fa)
            }))
        }
        refreshFunctionalities() {
            this.form = this.container.querySelector(pa.form), this.form && (new Qn(this.form), this.form.addEventListener("range:filter:update", (t => this.updateRange(t))));
            this.container.querySelectorAll(pa.filtersWrappper).forEach((t => {
                new da(t)
            }));
            this.container.querySelectorAll(pa.accordionBody).forEach((t => {
                new or(t)
            })), new U(this.container), this.sidebar && new ns(this.sidebar), Ts(this.container), this.showAllOptions()
        }
        getGridValues() {
            this.layoutLarge && (this.layoutLargeValue = this.layoutLarge.getAttribute(pa.gridLarge)), this.layoutSmall && (this.layoutSmallValue = this.layoutSmall.getAttribute(pa.gridSmall))
        }
        setGridValues() {
            this.layoutLarge && (this.layoutLarge = this.container.querySelector(`[${pa.gridLarge}]`), this.layoutLarge.setAttribute(pa.gridLarge, this.layoutLargeValue)), this.layoutSmall && (this.layoutSmall = this.container.querySelector(`[${pa.gridSmall}]`), this.layoutSmall.setAttribute(pa.gridSmall, this.layoutSmallValue))
        }
        showAllOptions() {
            this.container.querySelectorAll(pa.checkedOption).forEach((t => {
                if (t.parentNode.classList.contains(ma)) {
                    const e = t.closest(pa.accordionBody).nextElementSibling;
                    e.classList.contains(pa.classHidden) || e.dispatchEvent(new CustomEvent("click"))
                }
            }))
        }
        filtering(t, e = "") {
            const i = window.scrollY || window.pageYOffset,
                s = this.headerIsSticky ? document.querySelector(pa.headerHeight).getBoundingClientRect().height : 0,
                o = this.container.querySelector(pa.collectionTools),
                r = o.offsetTop - s,
                n = o.offsetTop + o.getBoundingClientRect().height < i - s;
            n && window.scrollTo({
                top: r,
                left: 0,
                behavior: "smooth"
            }), setTimeout((() => {
                this.addToHistory(t, e), this.getFilterResult()
            }), n ? ga : 10)
        }
    }
    const ba = {
        onLoad() {
            this.filterForm = new wa(this)
        },
        onUnload() {
            this.filterForm && "function" == typeof this.filterForm.unload && this.filterForm.unload()
        }
    };
    Ft("search-page", [ua, ba, ks, rr]), customElements.get("popout-select") || customElements.define("popout-select", Fs), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es);
    const va = "[data-image-zoom]",
        Sa = "data-unique";
    class Ea {
        constructor(t) {
            this.triggers = t.querySelectorAll(va), this.init()
        }
        init() {
            this.triggers.forEach((t => {
                const e = t.getAttribute(Sa);
                i.init({
                    disableScroll: !0,
                    openTrigger: `data-popup-${e}`,
                    onShow: t => {
                        t.querySelectorAll("[data-src]", t).forEach((t => {
                            if (null === t.getAttribute("src")) {
                                const e = t.getAttribute("data-src");
                                t.setAttribute("src", e)
                            }
                        }))
                    },
                    onClose: (t, e, i) => {
                        i.preventDefault()
                    }
                })
            }))
        }
    }
    Ft("gallery", [{
        onLoad() {
            new Ea(this.container)
        }
    }, wn]);
    var La = {},
        Ta = {},
        ka = {};
    const Aa = "[data-product-slideshow]",
        qa = "[data-shopify-xr]",
        xa = "data-media-id",
        Ca = "data-model-id",
        Pa = "model-viewer",
        _a = "data-shopify-model3d-id",
        $a = "#ModelJson-";

    function Ma(t) {
        if (t) console.warn(t);
        else if (window.ShopifyXR) {
            for (const t in La)
                if (La.hasOwnProperty(t)) {
                    const e = La[t];
                    if (e.loaded) continue;
                    const i = document.querySelector(`${$a}${t}`);
                    i && (window.ShopifyXR.addModels(JSON.parse(i.innerHTML)), e.loaded = !0)
                } window.ShopifyXR.setupXRElements()
        } else document.addEventListener("shopify_xr_initialized", (function() {
            Ma()
        }))
    }

    function Ha(t) {
        if (t) console.warn(t);
        else
            for (const t in Ta)
                if (Ta.hasOwnProperty(t)) {
                    const e = Ta[t];
                    e.modelViewerUi || (e.modelViewerUi = new Shopify.ModelViewerUI(e.$element)), Da(e)
                }
    }

    function Da(t) {
        const e = ka[t.sectionId];
        t.$container.addEventListener("pause", (function() {
            t.modelViewerUi.pause && t.modelViewerUi.pause()
        })), t.$container.addEventListener("play-desktop", (function() {
            t.modelViewerUi.play && !an() && t.modelViewerUi.play(), e && e.$element && t && t.modelId && _a && e.$element.setAttribute(_a, t.modelId)
        })), t.$container.addEventListener("play", (function() {
            t.modelViewerUi.play && t.modelViewerUi.play()
        }))
    }
    async function Ia(t) {
        const e = document.querySelector(`[data-player="${t}"]`),
            i = e.querySelector("video");
        await es({
            name: "video-ui",
            version: "1.0"
        });
        const s = new window.Shopify.Plyr(i);
        return e.addEventListener("pause", (function() {
            s.pause && s.pause()
        })), e.addEventListener("play-desktop", (function() {
            s.play && !an() && e.dispatchEvent(new CustomEvent("play"))
        })), e.addEventListener("play", (function() {
            try {
                s.play ? s.play() : s.addEventListener("onReady", (function(t) {
                    t.target.play()
                }))
            } catch (t) {
                console.warn(t)
            }
        })), e.addEventListener("destroy", (function() {
            try {
                s.destroy && s.destroy()
            } catch (t) {
                console.warn(t)
            }
        })), s
    }
    const Ba = "[data-custom-scrollbar-items]",
        Fa = "[data-custom-scrollbar]",
        Wa = "[data-custom-scrollbar-track]",
        Oa = "hide";
    class ja {
        constructor(t) {
            this.holderItems = t.querySelector(Ba), this.scrollbar = t.querySelector(Fa), this.scrollbarTrack = t.querySelector(Wa), this.trackWidth = 0, this.scrollWidth = 0, this.scrollbar && this.holderItems && (this.events(), this.calculateTrackWidth())
        }
        events() {
            this.holderItems.addEventListener("scroll", this.calculatePosition.bind(this)), document.addEventListener("theme:resize:width", this.calculateTrackWidth.bind(this)), document.addEventListener("theme:resize:width", this.calculatePosition.bind(this))
        }
        calculateTrackWidth() {
            this.scrollbarWidth = 0 === this.scrollbar.clientWidth ? this.scrollbar.parentNode.getBoundingClientRect().width : this.scrollbar.clientWidth, setTimeout((() => {
                this.scrollWidth = this.holderItems.children.length * (this.holderItems.children[0].clientWidth + Number(getComputedStyle(this.holderItems.children[0]).marginRight.replace("px", "")) + Number(getComputedStyle(this.holderItems.children[0]).marginLeft.replace("px", ""))), this.trackWidth = this.scrollbarWidth / this.scrollWidth * 100, this.trackWidth = this.trackWidth < 5 ? 5 : this.trackWidth, this.scrollbar.style.setProperty("--track-width", `${this.trackWidth}%`);
                const t = this.trackWidth >= 100;
                this.scrollbar.classList.toggle(Oa, t)
            }), 100)
        }
        calculatePosition() {
            let t = this.holderItems.scrollLeft / (this.holderItems.scrollWidth - this.holderItems.clientWidth);
            t *= this.scrollbar.clientWidth - this.scrollbarTrack.clientWidth, t = t < 0 ? 0 : t, t = isNaN(t) ? 0 : t, this.scrollbar.style.setProperty("--position", `${Math.round(t)}px`), document.dispatchEvent(new CustomEvent("theme:scrollbar:scroll", {
                bubbles: !0,
                detail: {
                    holder: this.holderItems
                }
            }))
        }
    }
    const Na = {
            productSlideshow: "[data-product-slideshow]",
            productThumbs: "[data-product-thumbs]",
            thumbImage: "[data-slideshow-thumbnail]",
            productImage: "[data-product-image]",
            mediaSlide: "[data-media-slide]",
            dataMediaId: "data-media-id",
            dataMediaSelect: "data-media-select",
            mediaType: "data-type",
            videoPlayerExternal: '[data-type="external_video"]',
            videoPlayerNative: '[data-type="video"]',
            modelViewer: '[data-type="model"]',
            allPlayers: "[data-player]",
            xrButton: "[data-shopify-xr]",
            xrButtonId: "data-shopify-model3d-id",
            loopVideo: "data-enable-video-looping",
            flickitylockHeight: "flickity-lock-height",
            alignment: "data-thumbs-align"
        },
        Va = "flickity-disabled-mobile",
        Ra = "flickity-enabled",
        za = "is-activated";
    class Ua {
        constructor(t) {
            this.section = t, this.container = t.container, this.slideshow = this.container.querySelector(Na.productSlideshow), this.thumbWrapper = this.container.querySelector(Na.productThumbs), this.thumbImages = this.container.querySelectorAll(Na.thumbImage), this.loopVideo = "true" === this.container.getAttribute(Na.loopVideo), this.centerAlign = "center" === this.container.getAttribute(Na.alignment), this.flkty = null, this.flktyThumbs = null, this.currentSlide = null, this.enableScrollbar = !1, this.init()
        }
        init() {
            this.createSlider(), this.detectVideo(), this.detectYouTube(), this.detect3d(), this.stopSliderThumbs(), document.addEventListener("theme:resize", (() => {
                this.stopSliderThumbs()
            }))
        }
        createSlider() {
            if (!this.slideshow) return;
            const e = this;
            let i = {
                autoPlay: !1,
                prevNextButtons: !1,
                contain: !0,
                pageDots: !1,
                adaptiveHeight: !0,
                accessibility: !0,
                wrapAround: !0,
                fade: !0,
                rightToLeft: window.isRTL,
                on: {
                    ready: function() {
                        e.sliderThumbs()
                    }
                }
            };
            this.flkty = new t(this.slideshow, i), this.flkty.resize(), this.currentSlide = this.slideshow.querySelectorAll(Na.mediaSlide)[0], this.setDraggable(), this.flkty.on("change", function(t) {
                if (this.currentSlide.dispatchEvent(new CustomEvent("pause")), this.currentSlide = this.flkty.cells[t].element, this.slideshow.classList.remove(Na.flickitylockHeight), null !== this.flktyThumbs && this.thumbWrapper.classList.contains(Ra)) this.flktyThumbs.select(t);
                else {
                    const t = this.currentSlide.getAttribute(Na.dataMediaId),
                        e = this.thumbWrapper.querySelector(`[${Na.dataMediaSelect}="${t}"]`);
                    this.thumbWrapper.querySelector(`.${za}`).classList.remove(za), e.classList.add(za)
                }
            }.bind(this)), this.flkty.on("settle", function(t) {
                this.currentSlide = this.flkty.cells[t].element, this.setDraggable(), this.currentSlide.dispatchEvent(new CustomEvent("play-desktop"));
                document.body.classList.contains(Na.focusEnabled) && this.currentSlide.dispatchEvent(new Event("focus")), this.confirmSync()
            }.bind(this)), this.eventListeners()
        }
        eventListeners() {
            this.slideshow.addEventListener("theme:image:change", function(t) {
                var e = t.detail.id;
                const i = `[${Na.dataMediaId}="${e}"]`,
                    s = this.flkty.cells.findIndex((t => t.element.matches(i)));
                this.flkty.select(s)
            }.bind(this)), this.thumbImages.forEach((t => {
                t.addEventListener("click", function(t) {
                    const e = t.currentTarget,
                        i = e.getAttribute(Na.dataMediaSelect),
                        s = e.parentNode.querySelector(`.${za}`);
                    s && s.classList.remove(za), e.classList.add(za), this.slideshow.dispatchEvent(new CustomEvent("theme:image:change", {
                        detail: {
                            id: i
                        }
                    }))
                }.bind(this))
            }))
        }
        sliderThumbs() {
            let t = {
                freeScroll: !0,
                draggable: !0,
                contain: !0,
                prevNextButtons: !1,
                pageDots: !1,
                accessibility: !0,
                cellAlign: this.centerAlign ? "center" : "left",
                watchCSS: !0
            };
            this.flktyThumbs = new h(this.thumbWrapper, t)
        }
        confirmSync() {
            this.flkty.selectedIndex !== this.flktyThumbs.selectedIndex && this.flkty.resize()
        }
        setDraggable() {
            if (this.currentSlide) {
                const t = this.currentSlide.getAttribute(Na.mediaType);
                "model" === t || "video" === t || "external_video" === t ? (this.flkty.options.draggable = !1, this.flkty.updateDraggable()) : (this.flkty.options.draggable = !0, this.flkty.updateDraggable())
            }
        }
        detect3d() {
            const t = this.container.querySelectorAll(Na.modelViewer);
            t && (t.forEach((t => {
                ! function(t, e) {
                    La[e] = {
                        loaded: !1
                    };
                    const i = t.getAttribute(xa),
                        s = t.querySelector(Pa),
                        o = s.getAttribute(Ca),
                        r = t.closest(Aa).parentElement.querySelector(qa);
                    ka[e] = {
                        $element: r,
                        defaultId: o
                    }, Ta[i] = {
                        modelId: o,
                        mediaId: i,
                        sectionId: e,
                        $container: t,
                        $element: s
                    }, window.Shopify.loadFeatures([{
                        name: "shopify-xr",
                        version: "1.0",
                        onLoad: Ma
                    }, {
                        name: "model-viewer-ui",
                        version: "1.0",
                        onLoad: Ha
                    }])
                }(t, this.section.id)
            })), document.addEventListener("shopify_xr_launch", function() {
                this.container.querySelectorAll(Na.allPlayers).forEach((t => {
                    t.dispatchEvent(new CustomEvent("pause"))
                }))
            }.bind(this)))
        }
        detectVideo() {
            const t = this.section.container.querySelectorAll(Na.videoPlayerNative);
            for (var e of t) {
                const t = Ia(e.dataset.player);
                !0 === this.loopVideo && t.then((t => (t.loop = !0, t))).catch((t => {
                    console.error(t)
                }))
            }
        }
        detectYouTube() {
            const t = this.section.container.querySelectorAll(Na.videoPlayerExternal);
            for (var e of t) {
                const t = cn(e.dataset.player);
                !0 === this.loopVideo && t.then((t => Ja(t))).catch((t => {
                    console.error(t)
                }))
            }
        }
        stopSliderThumbs() {
            window.innerWidth < window.theme.sizes.medium && this.thumbWrapper?.classList.contains(Va) && !this.enableScrollbar ? (new ja(this.container), this.enableScrollbar = !0) : this.enableScrollbar = !1
        }
        pauseAllMedia() {
            this.container.querySelector("[data-media-slide]").dispatchEvent(new CustomEvent("pause"))
        }
        pauseOtherMedia(t) {
            this.container.querySelector(`[data-media-slide]:not([data-player="${t}"])`).dispatchEvent(new CustomEvent("pause"))
        }
        destroy() {
            this.container.querySelectorAll(Na.allPlayers).forEach((t => {
                t.dispatchEvent(new CustomEvent("destroy"))
            }))
        }
    }

    function Ja(t) {
        return t.addEventListener("onStateChange", (function(t) {
            0 === t.data && t.target.playVideo()
        })), t
    }
    const Ka = "data-store-availability-container",
        Xa = "[data-api-content]",
        Ya = "[data-pickup-drawer]",
        Qa = "[data-pickup-drawer-open]",
        Ga = "[data-pickup-drawer-close]",
        Za = "[data-pickup-body]",
        tl = "drawer--visible",
        el = "hide";
    let il = {};
    class sl {
        constructor(t) {
            this.container = t.container, this.drawer = null, this.buttonDrawerOpen = null, this.buttonDrawerClose = null, this.drawerBody = null, this.fetchPickupAvailability(), this.container.addEventListener("theme:variant:change", (t => this.fetchPickupAvailability(t)))
        }
        fetchPickupAvailability(t) {
            const e = this.container.querySelector(`[${Ka}]`);
            if (!e) return;
            const i = t && t.detail.variant ? t.detail.variant.id : e.getAttribute(Ka);
            !t || t.detail.variant ? i && fetch(`${window.theme.routes.root_url}variants/${i}/?section_id=api-pickup-availability`).then(this.handleErrors).then((t => t.text())).then((t => {
                const i = (new DOMParser).parseFromString(t, "text/html").querySelector(Xa).innerHTML;
                e.innerHTML = i, e.classList.remove(el), this.drawer = this.container.querySelector(Ya), this.buttonDrawerOpen = this.container.querySelector(Qa), this.buttonDrawerClose = this.container.querySelectorAll(Ga), this.drawerBody = this.container.querySelector(Za), this.buttonDrawerOpen && this.buttonDrawerOpen.addEventListener("click", (() => this.openDrawer())), this.buttonDrawerClose.length && this.buttonDrawerClose.forEach((t => {
                    t.addEventListener("click", (() => this.closeDrawer()))
                }))
            })).catch((t => {
                console.error(t)
            })) : e.classList.add(el)
        }
        openDrawer() {
            this.drawer && (this.drawer.classList.add(tl), this.drawer.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0
            })), this.drawerBody.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                bubbles: !0
            })))
        }
        closeDrawer() {
            this.drawer && (this.drawer.classList.remove(tl), this.drawer.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            })), this.drawerBody.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            })))
        }
        handleErrors(t) {
            return t.ok ? t : t.json().then((function(e) {
                throw new O({
                    status: t.statusText,
                    headers: t.headers,
                    json: e
                })
            }))
        }
    }
    const ol = {
            onLoad() {
                il[this.id] = new sl(this)
            }
        },
        rl = t => {
            t && (t.style.display = "none")
        },
        nl = "[data-product-form]",
        al = "data-option-position",
        ll = '[name^="options"], [data-popout-option]',
        cl = "data-value",
        hl = "sold-out",
        dl = "unavailable";
    class ul {
        constructor(t, e) {
            this.container = t, this.productJSON = e, this.form = this.container.querySelector(nl), this.formData = new FormData(this.form), this.optionElements = this.container.querySelectorAll(ll), this.productJSON && this.form && this.init()
        }
        init() {
            this.update()
        }
        update() {
            this.getCurrentState(), this.optionElements.forEach((t => {
                const e = t.value || t.getAttribute(cl),
                    i = t.closest(`[${al}]`).getAttribute(al),
                    s = parseInt(i, 10) - 1;
                let o = [...this.selections];
                o[s] = e;
                const r = this.productJSON.variants.find((t => {
                    let e = !0;
                    for (let i = 0; i < o.length; i++) t.options[i] !== o[i] && (e = !1);
                    return e
                }));
                t.classList.remove(hl, dl), void 0 === r ? t.classList.add(dl) : r && !1 === r.available && t.classList.add(hl)
            }))
        }
        getCurrentState() {
            for (var t of (this.formData = new FormData(this.form), this.selections = [], this.formData.entries())) t[0].includes("options[") && this.selections.push(t[1])
        }
    }
    const pl = "[data-section-id]",
        ml = "[data-product-form]",
        yl = "[data-product-slideshow]",
        fl = "[data-add-to-cart]",
        gl = "[data-add-to-cart-text]",
        wl = "[data-compare-price]",
        bl = "[data-compare-text]",
        vl = "[data-buttons-wrapper]",
        Sl = "[data-product-select]",
        El = "[data-price-wrapper]",
        Ll = "[data-button-price]",
        Tl = "[data-product-json]",
        kl = "[data-product-price]",
        Al = "[data-product-unit-price]",
        ql = "[data-product-base]",
        xl = "[data-product-unit]",
        Cl = "data-enable-history-state",
        Pl = "data-option-position",
        _l = "[data-option-value]",
        $l = "[data-subscription-watch-price]",
        Ml = "[data-subscription-selectors]",
        Hl = "[data-price-off]",
        Dl = "[data-price-off-type]",
        Il = "[data-price-off-amount]",
        Bl = "[data-toggles-group]",
        Fl = "data-group-toggle",
        Wl = "[data-plan-description]",
        Ol = "[data-remaining-count]",
        jl = "[data-remaining-max]",
        Nl = "data-remaining-max",
        Vl = "[data-remaining-wrapper]",
        Rl = "[data-product-remaining-json]",
        zl = "_preorder",
        Ul = "[data-upsell-modal]",
        Jl = "hide",
        Kl = "variant--soldout",
        Xl = "variant--unavailable",
        Yl = "product__price--sale",
        Ql = "count-is-low",
        Gl = "count-is-in",
        Zl = "count-is-out",
        tc = "count-is-unavailable";
    class ec extends HTMLElement {
        constructor() {
            super(), this.container = this, this.outerSection = this.container.closest(pl), this.upsell = this.container.closest(Ul), this.outerWrapper = this.upsell ? this.upsell : this.outerSection || this.container, this.productForm = this.container.querySelector(ml), this.slideshow = this.outerWrapper.querySelector(yl), this.enableHistoryState = !(!this.outerSection || !this.outerSection.hasAttribute(Cl)) && "true" === this.outerSection.getAttribute(Cl), this.hasUnitPricing = this.outerWrapper.querySelector(xl), this.subSelectors = this.container.querySelector(Ml), this.subPrices = this.container.querySelector($l), this.priceOffWrap = this.outerWrapper.querySelector(Hl), this.priceOffAmount = this.outerWrapper.querySelector(Il), this.priceOffType = this.outerWrapper.querySelector(Dl), this.planDecription = this.container.querySelector(Wl), this.remainingWrapper = this.container.querySelector(Vl);
            const t = this.container.querySelector(jl);
            this.sellout = null, this.remainingWrapper && t && (this.remainingMaxInt = parseInt(t.getAttribute(Nl), 10), this.remainingCount = this.container.querySelector(Ol), this.remainingJSONWrapper = this.container.querySelector(Rl), this.remainingJSON = null, this.remainingJSONWrapper && "" !== this.remainingJSONWrapper.innerHTML ? this.remainingJSON = JSON.parse(this.remainingJSONWrapper.innerHTML) : console.warn("Missing product quantity JSON")), qo(this.container), this.init()
        }
        init() {
            let t = null;
            this.productJSON = null;
            const e = this.container.querySelector(Tl);
            e && (t = e.innerHTML), t && this.productForm ? (this.productJSON = JSON.parse(t), this.sellout = new ul(this.container, this.productJSON), this.linkForm()) : console.warn("Missing product form or product JSON"), this.productJSON && new ht(this.productJSON.handle)
        }
        destroy() {
            this.productForm.destroy()
        }
        linkForm() {
            this.productForm = new Zi(this.productForm, this.productJSON, {
                onOptionChange: this.onOptionChange.bind(this),
                onPlanChange: this.onPlanChange.bind(this),
                onQuantityChange: this.onQuantityChange.bind(this)
            }), this.pushState(this.productForm.getFormState()), this.subsToggleListeners()
        }
        onOptionChange(t) {
            this.pushState(t.dataset)
        }
        onPlanChange(t) {
            this.subPrices && this.pushState(t.dataset)
        }
        onQuantityChange(t) {
            const e = t.dataset;
            this.productState = this.setProductState(e), this.updateButtonPrices(e)
        }
        pushState(t) {
            this.productState = this.setProductState(t), this.updateProductImage(t), this.updateAddToCartState(t), this.updateProductPrices(t), this.updateSaleText(t), this.updateSubscriptionText(t), this.updateLegend(t), this.updateRemaining(t), this.fireHookEvent(t), this.sellout && this.sellout.update(t), this.enableHistoryState && this.updateHistoryState(t)
        }
        updateAddToCartState(t) {
            const e = t.variant;
            let i = theme.strings.addToCart;
            const s = this.outerWrapper.querySelectorAll(El),
                o = this.container.querySelector(vl),
                r = o.querySelectorAll(fl),
                n = o.querySelectorAll(gl);
            if (this.productJSON.tags.includes(zl) && (i = theme.strings.preOrder), s.length && e && s.forEach((t => {
                    t.classList.remove(Jl)
                })), r.length && r.forEach((t => {
                    e && e.available ? t.disabled = !1 : t.disabled = !0
                })), n.length && n.forEach((t => {
                    e ? e.available ? t.innerHTML = i : t.innerHTML = theme.strings.soldOut : t.innerHTML = theme.strings.unavailable
                })), o)
                if (e) {
                    e.available ? o.classList.remove(Kl, Xl) : (o.classList.add(Kl), o.classList.remove(Xl));
                    const t = o.querySelector(Sl);
                    t && (t.value = e.id)
                } else o.classList.add(Xl), o.classList.remove(Kl)
        }
        updateLegend(t) {
            const e = t.variant;
            if (e) {
                this.container.querySelectorAll(_l).forEach((t => {
                    const i = t.closest(`[${Pl}]`);
                    if (i) {
                        const s = i.getAttribute(Pl),
                            o = parseInt(s, 10) - 1;
                        this.newValue = e.options[o], t.innerHTML = this.newValue
                    }
                }))
            }
        }
        updateHistoryState(t) {
            const e = t.variant,
                i = t.plan,
                s = window.location.href;
            if (e && s.includes("/product")) {
                const t = new window.URL(s),
                    o = t.searchParams;
                o.set("variant", e.id), i && i.detail && i.detail.id && this.productState.hasPlan ? o.set("selling_plan", i.detail.id) : o.delete("selling_plan"), t.search = o.toString();
                const r = t.toString();
                window.history.replaceState({
                    path: r
                }, "", r)
            }
        }
        updateRemaining(t) {
            const e = t.variant;
            if (e && this.remainingWrapper && this.remainingJSON && this.remainingCount) {
                const t = this.remainingJSON[e.id];
                t && t <= this.remainingMaxInt && t > 0 ? (this.remainingWrapper.classList.remove(Gl, Zl, tc), this.remainingWrapper.classList.add(Ql), this.remainingCount.innerHTML = t) : this.productState.soldOut ? (this.remainingWrapper.classList.remove(Ql, Gl, tc), this.remainingWrapper.classList.add(Zl)) : this.productState.available && (this.remainingWrapper.classList.remove(Ql, Zl, tc), this.remainingWrapper.classList.add(Gl))
            } else this.remainingWrapper && (this.remainingWrapper.classList.remove(Gl, Zl, Ql), this.remainingWrapper.classList.add(tc))
        }
        getBaseUnit(t) {
            return 1 === t.unit_price_measurement.reference_value ? t.unit_price_measurement.reference_unit : t.unit_price_measurement.reference_value + t.unit_price_measurement.reference_unit
        }
        subsToggleListeners() {
            this.container.querySelectorAll(Bl).forEach((t => {
                t.addEventListener("change", function(t) {
                    const e = t.target.value.toString(),
                        i = this.container.querySelector(`[${Fl}="${e}"]`),
                        s = this.container.querySelectorAll(`[${Fl}]`);
                    if (i) {
                        i.classList.remove(Jl);
                        const t = i.querySelector('[name="selling_plan"]');
                        t.checked = !0, t.dispatchEvent(new Event("change"))
                    }
                    s.forEach((t => {
                        if (t !== i) {
                            t.classList.add(Jl);
                            t.querySelectorAll('[name="selling_plan"]').forEach((t => {
                                t.checked = !1, t.dispatchEvent(new Event("change"))
                            }))
                        }
                    }))
                }.bind(this))
            }))
        }
        updateSaleText(t) {
            this.productState.planSale ? this.updateSaleTextSubscription(t) : this.productState.onSale ? this.updateSaleTextStandard(t) : this.priceOffWrap && this.priceOffWrap.classList.add(Jl)
        }
        updateSaleTextStandard(t) {
            if (!this.priceOffType) return;
            this.priceOffType.innerHTML = window.theme.strings.sale || "sale";
            const e = t.variant;
            if (window.theme.settings.badge_sale_type && "percentage" === window.theme.settings.badge_sale_type) {
                const t = (e.compare_at_price - e.price) / e.compare_at_price,
                    i = Math.floor(100 * t);
                this.priceOffAmount.innerHTML = `${i}%`
            } else {
                const t = e.compare_at_price - e.price;
                this.priceOffAmount.innerHTML = r.formatMoney(t, theme.moneyFormat)
            }
            this.priceOffWrap.classList.remove(Jl)
        }
        updateSaleTextSubscription(t) {
            this.priceOffType.innerHTML = window.theme.strings.subscription || "subscripton";
            const e = t.variant,
                i = t.plan.detail.price_adjustments[0],
                s = i.value;
            i && "percentage" === i.value_type ? this.priceOffAmount.innerHTML = `${s}%` : i && "price" === i.value_type ? this.priceOffAmount.innerHTML = r.formatMoney(e.price - i.value, theme.moneyFormat) : this.priceOffAmount.innerHTML = r.formatMoney(s, theme.moneyFormat), this.priceOffWrap.classList.remove(Jl)
        }
        updateSubscriptionText(t) {
            t.plan && this.planDecription && null !== t.plan.detail.description ? (this.planDecription.innerHTML = t.plan.detail.description, this.planDecription.classList.remove(Jl)) : this.planDecription && this.planDecription.classList.add(Jl)
        }
        getPrices(t) {
            const e = t.variant,
                i = t.plan;
            let s = "",
                o = "";
            return this.productState.available && (s = e.compare_at_price, o = e.price), this.productState.hasPlan && (o = i.allocation.price), this.productState.planSale && (s = i.allocation.compare_at_price, o = i.allocation.price), {
                price: o,
                comparePrice: s
            }
        }
        updateButtonPrices(t) {
            const e = this.container.querySelectorAll(Ll),
                {
                    price: i
                } = this.getPrices(t);
            e.length && e.forEach((e => {
                const s = t.quantity * i;
                e.innerHTML = r.formatMoney(s, theme.moneyFormat)
            }))
        }
        updateProductPrices(t) {
            const e = t.variant,
                i = this.outerWrapper.querySelectorAll(El),
                s = this.container.querySelectorAll(Ll),
                {
                    price: o,
                    comparePrice: n
                } = this.getPrices(t);
            i.forEach((t => {
                const i = t.querySelector(wl),
                    s = t.querySelector(kl),
                    a = t.querySelector(bl);
                i && (this.productState.onSale || this.productState.planSale ? (i.classList.remove(Jl), a.classList.remove(Jl), s.classList.add(Yl)) : (i.classList.add(Jl), a.classList.add(Jl), s.classList.remove(Yl)), i.innerHTML = r.formatMoney(n, theme.moneyFormat)), s && (s.innerHTML = e ? r.formatMoney(o, theme.moneyFormat) : "&nbsp;")
            })), s.length && s.forEach((e => {
                const i = t.quantity * o;
                e.innerHTML = r.formatMoney(i, theme.moneyFormat)
            })), this.hasUnitPricing && this.updateProductUnits(t)
        }
        updateProductUnits(t) {
            const e = t.variant,
                i = t.plan;
            let s = null;
            if (e && e.unit_price && (s = e.unit_price), i && i.allocation && i.allocation.unit_price && (s = i.allocation.unit_price), s) {
                const t = this.getBaseUnit(e),
                    i = r.formatMoney(s, theme.moneyFormat);
                this.outerWrapper.querySelector(Al).innerHTML = i, this.outerWrapper.querySelector(ql).innerHTML = t, W(this.outerWrapper.querySelector(xl))
            } else rl(this.outerWrapper.querySelector(xl))
        }
        fireHookEvent(t) {
            const e = t.variant;
            this.container.dispatchEvent(new CustomEvent("theme:variant:change", {
                detail: {
                    variant: e
                },
                bubbles: !0
            }))
        }
        setProductState(t) {
            const e = t.variant,
                i = t.plan,
                s = {
                    available: !0,
                    soldOut: !1,
                    onSale: !1,
                    showUnitPrice: !1,
                    requiresPlan: !1,
                    hasPlan: !1,
                    planPerDelivery: !1,
                    planSale: !1
                };
            return !e || e.requires_selling_plan && !i ? s.available = !1 : (e.available || (s.soldOut = !0), e.compare_at_price > e.price && (s.onSale = !0), e.unit_price && (s.showUnitPrice = !0), this.productJSON && this.productJSON.requires_selling_plan && (s.requiresPlan = !0), i && this.subPrices && (s.hasPlan = !0, i.allocation.per_delivery_price !== i.allocation.price && (s.planPerDelivery = !0), e.price > i.allocation.price && (s.planSale = !0))), s
        }
        updateProductImage(t) {
            const e = t.variant;
            this.slideshow && e && e.featured_media && e.featured_media.id && this.slideshow.dispatchEvent(new CustomEvent("theme:image:change", {
                detail: {
                    id: e.featured_media.id
                }
            }))
        }
    }
    const ic = "[data-product-slideshow]",
        sc = "[data-product-image]",
        oc = "[data-zoom-button]",
        rc = "[data-zoom-wrapper]",
        nc = "[data-media-id]",
        ac = "data-media-id";
    const lc = "body",
        cc = "[data-related-section]",
        hc = "[data-tabs-holder]",
        dc = "data-tab",
        uc = "data-tab-index",
        pc = "data-block-id",
        mc = ".tabs > button",
        yc = ".tab-link",
        fc = ".tab-link__recent",
        gc = ".tab-content",
        wc = "[data-scrollbar]",
        bc = "current",
        vc = "hide",
        Sc = "alt",
        Ec = {};
    class Lc {
        constructor(t) {
            this.container = t, this.body = document.querySelector(lc), this.accessibility = window.accessibility, this.container && (this.scrollbarHolder = this.container.querySelectorAll(wc), this.init(), this.initNativeScrollbar())
        }
        init() {
            const t = this.container,
                e = t.querySelectorAll(mc),
                i = t.querySelector(`${yc}-0`),
                s = t.querySelector(`${gc}-0`);
            s && s.classList.add(bc), i && i.classList.add(bc), this.checkVisibleTabLinks(), this.container.addEventListener("tabs:checkRecentTab", (() => this.checkRecentTab())), this.container.addEventListener("tabs:hideRelatedTab", (() => this.hideRelatedTab())), e.length && e.forEach((e => {
                const i = parseInt(e.getAttribute(dc)),
                    s = t.querySelector(`${gc}-${i}`);
                e.addEventListener("click", (() => {
                    this.tabChange(e, s)
                })), e.addEventListener("keyup", (t => {
                    t.which !== window.theme.keyboardKeys.SPACE && t.which !== window.theme.keyboardKeys.ENTER || !this.body.classList.contains("is-focused") || (this.tabChange(e, s), s.querySelector("a, input") && (this.accessibility.lastFocused = e, this.accessibility.a11y.trapFocus(s, {
                        elementToFocus: s.querySelector("a:first-child, input:first-child")
                    })))
                }))
            }))
        }
        tabChange(t, e) {
            this.container.querySelector(`${mc}.${bc}`).classList.remove(bc), this.container.querySelector(`${gc}.${bc}`).classList.remove(bc), t.classList.add(bc), e.classList.add(bc), t.classList.contains(vc) && e.classList.add(vc), this.checkVisibleTabLinks(), this.container.dispatchEvent(new CustomEvent("theme:tab:change"))
        }
        initNativeScrollbar() {
            this.scrollbarHolder.length && this.scrollbarHolder.forEach((t => {
                new R(t)
            }))
        }
        checkVisibleTabLinks() {
            const t = this.container.querySelectorAll(mc),
                e = this.container.querySelectorAll(`${yc}.${vc}`);
            t.length - e.length < 2 ? this.container.classList.add(Sc) : this.container.classList.remove(Sc)
        }
        checkRecentTab() {
            const t = this.container.querySelector(fc);
            if (t) {
                t.classList.remove(vc);
                const e = parseInt(t.getAttribute(dc)),
                    i = this.container.querySelector(`${gc}[${uc}="${e}"]`);
                i && i.classList.remove(vc), this.checkVisibleTabLinks(), this.initNativeScrollbar()
            }
        }
        hideRelatedTab() {
            const t = this.container.querySelector(cc);
            if (!t) return;
            const e = t.closest(`${gc}.${bc}`);
            if (!e) return;
            const i = parseInt(e.getAttribute(uc)),
                s = this.container.querySelectorAll(mc);
            if (s.length > i) {
                const t = s[i].nextSibling;
                t && (s[i].classList.add(vc), t.dispatchEvent(new Event("click")), this.initNativeScrollbar())
            }
        }
        onBlockSelect(t) {
            const e = this.container.querySelector(`${yc}[${pc}="${t.detail.blockId}"]`);
            e && (e.dispatchEvent(new Event("click")), e.parentNode.scrollTo({
                top: 0,
                left: e.offsetLeft - e.clientWidth,
                behavior: "smooth"
            }))
        }
    }
    const Tc = {
            onLoad() {
                Ec[this.id] = [];
                this.container.querySelectorAll(hc).forEach((t => {
                    Ec[this.id].push(new Lc(t))
                }))
            },
            onBlockSelect(t) {
                Ec[this.id].forEach((e => {
                    "function" == typeof e.onBlockSelect && e.onBlockSelect(t)
                }))
            }
        },
        kc = "[data-product-form]",
        Ac = "[data-product-json]",
        qc = "[data-zoom-button]",
        xc = "[data-truncated-holder]",
        Cc = "[data-truncated-button]",
        Pc = "[data-truncated-content]",
        _c = "data-truncated-content",
        $c = "is-expanded",
        Mc = "is-visible",
        Hc = [];
    class Dc {
        constructor(t) {
            this.section = t, this.id = t.id, this.container = t.container, this.settings = t.settings, this.productFormElement = this.container.querySelector(kc), Yt(this.id), this.media = new Ua(t);
            const e = this.container.querySelector(Ac);
            e && "" !== e.innerHTML ? (this.product = JSON.parse(e.innerHTML), this.truncateElementHolder = this.container.querySelector(xc), this.truncateElement = this.container.querySelector(Pc), this.resizeEventTruncate = () => this.truncateText(), this.init()) : console.error("Missing product JSON")
        }
        init() {
            this.zoomEnabled = null !== this.container.querySelector(qc), this.zoomEnabled && function(t, e) {
                const i = es({
                    url: window.theme.assets.photoswipe
                }).then((() => {
                    const i = window.themePhotoswipe.PhotoSwipe.default,
                        s = window.themePhotoswipe.PhotoSwipeUI.default;
                    t.querySelectorAll(oc).forEach((o => {
                        o.addEventListener("click", (o => {
                            const r = t.querySelector(rc),
                                n = o.target.closest(nc).getAttribute(ac).toString(),
                                a = [];
                            for (let t = 0; t < e.media.length; t++) "image" === e.media[t].media_type && (a[a.length] = {
                                src: e.media[t].src,
                                w: e.media[t].width,
                                h: e.media[t].height,
                                id: e.media[t].id
                            });
                            const l = {
                                index: a.findIndex((t => t.id.toString() === n)),
                                showHideOpacity: !0,
                                showAnimationDuration: 150,
                                hideAnimationDuration: 250,
                                bgOpacity: 1,
                                spacing: 0,
                                allowPanToNext: !1,
                                maxSpreadZoom: 3,
                                history: !1,
                                loop: !0,
                                pinchToClose: !1,
                                modal: !1,
                                closeOnScroll: !1,
                                closeOnVerticalDrag: !0,
                                getDoubleTapZoom: function(t, e) {
                                    return t ? 1.67 : e.initialZoomLevel < .7 ? 1 : 1.3
                                },
                                getThumbBoundsFn: function() {
                                    let e = t.querySelector(ic);
                                    e || (e = t.querySelector(sc));
                                    const i = window.pageYOffset || document.documentElement.scrollTop,
                                        s = e.getBoundingClientRect();
                                    return {
                                        x: s.left,
                                        y: s.top + i,
                                        w: s.width
                                    }
                                }
                            };
                            r.dispatchEvent(new CustomEvent("theme:scroll:lock", {
                                bubbles: !0
                            }));
                            const c = new i(r, s, a, l);
                            c.init(), c.listen("close", (function() {
                                document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                                    bubbles: !0
                                }))
                            }))
                        }))
                    }))
                })).catch((t => console.error(t)))
            }(this.container, this.product), this.truncateElementHolder && this.truncateElement && (setTimeout(this.resizeEventTruncate, 50), document.addEventListener("theme:resize", this.resizeEventTruncate))
        }
        truncateText() {
            if (this.truncateElementHolder.classList.contains(Mc)) return;
            const t = this.truncateElement.cloneNode(!0),
                e = this.truncateElement.getAttribute(_c),
                i = this.truncateElement.nextElementSibling;
            i && i.remove(), this.truncateElement.parentElement.append(t);
            const s = this.truncateElement.nextElementSibling;
            s.classList.add(e), s.removeAttribute(_c), W(s), c.ellipsis(s, 5, {
                replaceStr: ""
            }), rl(s), this.truncateElement.innerHTML !== s.innerHTML ? this.truncateElementHolder.classList.add($c) : (s.remove(), this.truncateElementHolder.classList.remove($c)), this.toggleTruncatedContent(this.truncateElementHolder)
        }
        toggleTruncatedContent(t) {
            const e = t.querySelector(Cc);
            e && e.addEventListener("click", (e => {
                e.preventDefault(), t.classList.remove($c), t.classList.add(Mc)
            }))
        }
        onBlockSelect(t) {
            const e = this.container.querySelector(`[data-block-id="${t.detail.blockId}"]`);
            e && e.dispatchEvent(new Event("click"))
        }
        onBlockDeselect(t) {
            const e = this.container.querySelector(`[data-block-id="${t.detail.blockId}"]`);
            e && e.dispatchEvent(new Event("click"))
        }
        onUnload() {
            this.media.destroy(), this.truncateElementHolder && this.truncateElement && document.removeEventListener("theme:resize", this.resizeEventTruncate)
        }
    }
    Ft("product", [{
        onLoad() {
            Hc[this.id] = new Dc(this)
        },
        onUnload() {
            "function" == typeof Hc[this.id].unload && Hc[this.id].unload()
        },
        onBlockSelect(t) {
            "function" == typeof Hc[this.id].onBlockSelect && Hc[this.id].onBlockSelect(t)
        },
        onBlockDeselect(t) {
            "function" == typeof Hc[this.id].onBlockDeselect && Hc[this.id].onBlockDeselect(t)
        }
    }, ol, Gs, rr, Tc, ls]), customElements.get("product-form") || customElements.define("product-form", ec), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es), customElements.get("popout-select") || customElements.define("popout-select", Fs), customElements.get("upsell-product") || customElements.define("upsell-product", ao);
    const Ic = "data-toggle-grid",
        Bc = "data-grid-large",
        Fc = "data-grid-small",
        Wc = window.theme.sizes.small;
    var Oc = {};
    class jc {
        constructor(t) {
            this.toggle = t, this.value = this.toggle.getAttribute(Ic), this.toggleClickFunction = t => this.toggleClick(t), this.init()
        }
        init() {
            this.toggle.addEventListener("click", this.toggleClickFunction)
        }
        unload() {
            this.toggle.removeEventListener("click", this.toggleClickFunction)
        }
        toggleClick() {
            const t = window.innerWidth >= Wc ? Bc : Fc;
            document.querySelector(`[${t}]`).setAttribute(t, this.value), window.lazySizes && window.lazySizes.autoSizer.checkElems()
        }
    }
    const Nc = {
            onLoad() {
                Oc[this.id] = [];
                this.container.querySelectorAll(`[${Ic}]`).forEach((t => {
                    Oc[this.id].push(new jc(t))
                }))
            },
            onUnload: function() {
                Oc[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            }
        },
        Vc = "data-sort-enabled",
        Rc = "[data-sort-link]",
        zc = "[data-sort-button-text]",
        Uc = "data-value",
        Jc = "popout-list__item--current";
    class Kc {
        constructor(t) {
            this.container = t.container, this.sort = this.container.querySelector(`[${Vc}]`), this.sortLinks = this.container.querySelectorAll(Rc), this.sortButtonText = this.container.querySelector(zc), this.sort && this.init()
        }
        init() {
            this.sortLinks.forEach((t => {
                t.addEventListener("click", (t => {
                    t.preventDefault(), this.sortingResults(t)
                }))
            }))
        }
        sortingResults(t) {
            const e = t.currentTarget,
                i = e.getAttribute(Uc),
                s = e.innerText;
            this.sortButtonText.innerText = s, this.sortButtonText.parentNode.dispatchEvent(new Event("click")), this.sort.querySelector(`.${Jc}`).classList.remove(Jc), e.parentNode.classList.add(Jc), this.sort.setAttribute(Vc, i), this.container.dispatchEvent(new CustomEvent("theme:filter:form", {
                bubbles: !0,
                detail: {
                    params: i
                }
            }))
        }
    }
    var Xc = "[data-tag-group]",
        Yc = ".link--add",
        Qc = ".link--remove",
        Gc = "data-swatch";
    class Zc {
        constructor(t) {
            this.section = t, this.container = this.section.container, this.swatches = this.container.querySelectorAll(`[${Gc}]`), this.init()
        }
        init() {
            new Kc(this.section), this.removeUnusableFilters()
        }
        removeUnusableFilters() {
            const t = this.container.querySelectorAll(Xc);
            t.length > 0 && t.forEach((t => {
                const e = t.querySelector(Yc),
                    i = t.querySelector(Qc);
                e || i || rl(t)
            }))
        }
    }
    Ft("collection", [{
        onLoad() {
            this.collection = new Zc(this)
        }
    }, ua, ba, Nc, ks, rr, J]), customElements.get("popout-select") || customElements.define("popout-select", Fs), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es), Ft("collection-row", [ks, J]), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es), Ft("collection-tabs", [Tc, qn, ks]), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es);
    var th = {};

    function eh(t) {
        return th[t]
    }
    th.basic = [], th.light = [{
        featureType: "administrative",
        elementType: "labels",
        stylers: [{
            visibility: "on"
        }, {
            lightness: "64"
        }, {
            hue: "#ff0000"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#bdbdbd"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
            color: "#f0f0f0"
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "landscape.natural.landcover",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape.natural.terrain",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [{
            lightness: "100"
        }]
    }, {
        featureType: "poi.park",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            saturation: "-41"
        }, {
            color: "#e8ede7"
        }]
    }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
            saturation: "-100"
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            lightness: "25"
        }, {
            gamma: "1.06"
        }, {
            saturation: "-100"
        }]
    }, {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            gamma: "10.00"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{
            gamma: "10.00"
        }, {
            lightness: "100"
        }, {
            weight: "0.4"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{
            visibility: "simplified"
        }, {
            weight: "0.01"
        }, {
            lightness: "39"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: "0.50"
        }, {
            gamma: "10.00"
        }, {
            lightness: "100"
        }]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            color: "#cfe5ee"
        }, {
            visibility: "on"
        }]
    }], th.light_blank = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }, {
            lightness: "64"
        }, {
            hue: "#ff0000"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#bdbdbd"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
            color: "#f0f0f0"
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "landscape.natural.landcover",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape.natural.terrain",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [{
            lightness: "100"
        }]
    }, {
        featureType: "poi.park",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            saturation: "-41"
        }, {
            color: "#e8ede7"
        }]
    }, {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
            saturation: "-100"
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            lightness: "25"
        }, {
            gamma: "1.06"
        }, {
            saturation: "-100"
        }, {
            visibility: "off"
        }]
    }, {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            gamma: "10.00"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{
            gamma: "10.00"
        }, {
            lightness: "100"
        }, {
            weight: "0.4"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }, {
            weight: "0.01"
        }, {
            lightness: "39"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: "0.50"
        }, {
            gamma: "10.00"
        }, {
            lightness: "100"
        }]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            color: "#cfe5ee"
        }, {
            visibility: "on"
        }]
    }], th.white_blank = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#444444"
        }]
    }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
            color: "#f2f2f2"
        }]
    }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
            saturation: -100
        }, {
            lightness: 45
        }]
    }, {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            color: "#e4e4e4"
        }, {
            visibility: "on"
        }]
    }], th.white_label = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels",
        stylers: [{
            gamma: "3.86"
        }, {
            lightness: "100"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#cccccc"
        }]
    }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
            color: "#f2f2f2"
        }]
    }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
            saturation: -100
        }, {
            lightness: 45
        }]
    }, {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels.text",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            color: "#e4e4e4"
        }, {
            visibility: "on"
        }]
    }], th.dark_blank = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
            saturation: 36
        }, {
            color: "#000000"
        }, {
            lightness: 40
        }]
    }, {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#000000"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }, {
            weight: 1.2
        }]
    }, {
        featureType: "administrative",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 21
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }, {
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 29
        }, {
            weight: "0.01"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 18
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 19
        }]
    }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }]
    }], th.dark_label = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
            saturation: 36
        }, {
            color: "#000000"
        }, {
            lightness: 40
        }]
    }, {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#000000"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }, {
            weight: 1.2
        }]
    }, {
        featureType: "administrative",
        elementType: "labels",
        stylers: [{
            visibility: "simplified"
        }, {
            lightness: "-82"
        }]
    }, {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [{
            invert_lightness: !0
        }, {
            weight: "7.15"
        }]
    }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 21
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            visibility: "simplified"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }, {
            weight: "0.8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 29
        }, {
            weight: "0.01"
        }]
    }, {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 18
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{
            weight: "0.01"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 19
        }]
    }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#000000"
        }, {
            lightness: 17
        }]
    }], window.theme.allMaps = window.theme.allMaps || {};
    let ih = window.theme.allMaps;
    class sh {
        constructor(t) {
            this.container = t.container, this.mapWrap = this.container.querySelector("[data-map-container]"), this.styleString = this.container.getAttribute("data-style") || "", this.key = this.container.getAttribute("data-api-key"), this.zoomString = this.container.getAttribute("data-zoom") || 14, this.address = this.container.getAttribute("data-address"), this.enableCorrection = this.container.getAttribute("data-latlong-correction"), this.lat = this.container.getAttribute("data-lat"), this.long = this.container.getAttribute("data-long"), this.key && this.initMaps()
        }
        initMaps() {
            es({
                url: `https://maps.googleapis.com/maps/api/js?key=${this.key}`
            }).then((() => {
                return "true" === this.enableCorrection && "" !== this.lat && "" !== this.long ? new window.google.maps.LatLng(this.lat, this.long) : (t = this.address, new Promise(((e, i) => {
                    (new window.google.maps.Geocoder).geocode({
                        address: t
                    }, (function(t, s) {
                        if ("OK" == s) {
                            var o = {
                                lat: t[0].geometry.location.lat(),
                                lng: t[0].geometry.location.lng()
                            };
                            e(o)
                        } else i(s)
                    }))
                })));
                var t
            })).then((t => {
                var e = {
                    zoom: parseInt(this.zoomString, 10),
                    styles: eh(this.styleString),
                    center: t,
                    draggable: !0,
                    clickableIcons: !1,
                    scrollwheel: !1,
                    zoomControl: !1,
                    disableDefaultUI: !0
                };
                const i = function(t, e) {
                    var i = new window.google.maps.Map(t, e),
                        s = i.getCenter();
                    return new window.google.maps.Marker({
                        map: i,
                        position: s
                    }), window.google.maps.event.addDomListener(window, "resize", (function() {
                        window.google.maps.event.trigger(i, "resize"), i.setCenter(s)
                    })), i
                }(this.mapWrap, e);
                return i
            })).then((t => {
                this.map = t, ih[this.id] = t
            })).catch((t => {
                console.log("Failed to load Google Map"), console.log(t)
            }))
        }
        onUnload() {
            void 0 !== window.google && window.google.maps.event.clearListeners(this.map, "resize")
        }
    }
    Ft("section-map", {
        onLoad() {
            ih[this.id] = new sh(this)
        },
        onUnload() {
            "function" == typeof ih[this.id].unload && ih[this.id].unload()
        }
    }), Ft("section-columns", wn);
    const oh = "[data-related-section]",
        rh = "[data-grid-item]",
        nh = "data-minimum",
        ah = "[data-recent-wrapper]",
        lh = "[data-recently-viewed-wrapper]",
        ch = "[data-slider]",
        hh = "data-grid-large",
        dh = "data-layout";
    class uh {
        constructor(t) {
            this.section = t, this.container = t.container, this.init(), this.container.addEventListener("recent-products:added", (() => {
                this.recent()
            }))
        }
        init() {
            const t = this.container.querySelector(oh);
            if (!t) return;
            const e = t.getAttribute(dh),
                i = t.getAttribute("data-product-id"),
                s = t.getAttribute("data-limit"),
                o = `${window.theme.routes.product_recommendations_url||"/recommendations/products/"}?section_id=related&limit=${s}&product_id=${i}`;
            a.get(o).then((i => {
                const s = document.createElement("div");
                s.innerHTML = i.data;
                const o = s.querySelector(oh);
                if (o.querySelector(rh)) {
                    const i = o.innerHTML;
                    rl(t), t.innerHTML = i, Ws(t), Ts(t.parentElement), t.querySelector(ch) && (t.querySelector(ch).setAttribute(hh, e), new An(t, t.querySelector(ch)))
                } else t.dispatchEvent(new CustomEvent("tabs:hideRelatedTab", {
                    bubbles: !0
                }))
            })).catch((function(t) {
                console.warn(t)
            }))
        }
        recent() {
            const t = this.container.querySelector(ah),
                e = this.container.querySelector(lh),
                i = this.container.querySelectorAll(rh),
                s = t.hasAttribute(nh) ? parseInt(t.getAttribute(nh)) : 4,
                o = !e && i.length > 0,
                r = e && i.length >= s;
            (o || r) && (t.dispatchEvent(new CustomEvent("tabs:checkRecentTab", {
                bubbles: !0
            })), Ts(this.container), t.querySelector(ch) && new An(t, t.querySelector(ch)))
        }
    }
    Ft("related", [{
        onLoad() {
            this.section = new uh(this)
        }
    }, Tc, dt]), customElements.get("radio-swatch") || customElements.define("radio-swatch", Es);
    const ph = {
            ajaxDisable: "data-ajax-disable",
            shipping: "[data-shipping-estimate-form]",
            input: "[data-update-cart]",
            update: "[data-update-button]",
            bottom: "[data-cart-bottom]",
            upsellProduct: "[data-upsell-holder]",
            upsellButton: "[data-add-action-wrapper]"
        },
        mh = {
            onLoad() {
                if (this.container.querySelector(ph.shipping) && new So(this), this.disabled = "true" == this.container.getAttribute(ph.ajaxDisable), this.disabled) return void(this.cart = new yh(this));
                this.cart = new Ko(this);
                this.cart.init().then((() => {
                    this.cart.loadHTML()
                }))
            }
        };
    class yh {
        constructor(t) {
            this.section = t, this.container = t.container, this.inputs = this.container.querySelectorAll(ph.input), this.quantityWrappers = this.container.querySelectorAll(ph.qty), this.updateBtn = this.container.querySelector(ph.update), this.upsellProduct = this.container.querySelector(ph.upsellProduct), this.initQuantity(), this.initInputs(), this.upsellProduct && this.moveUpsell()
        }
        initQuantity() {
            qo(this.container)
        }
        moveUpsell() {
            const t = this.container.querySelector(ph.bottom);
            t.insertBefore(this.upsellProduct, t.firstChild)
        }
        initInputs() {
            this.inputs.forEach((t => {
                t.addEventListener("change", function() {
                    this.updateBtn.classList.add("cart--dirty"), this.updateBtn.classList.add("heartBeat"), setTimeout(function() {
                        this.updateBtn.classList.remove("heartBeat")
                    }.bind(this), 1300)
                }.bind(this))
            }))
        }
    }
    Ft("cart", [mh, rr]), customElements.get("upsell-product") || customElements.define("upsell-product", ao), Ft("accordion-single", rr);
    const fh = (t, e, i = null) => {
            t.style.opacity = 0, t.style.display = e || "block",
                function e() {
                    let s = parseFloat(t.style.opacity);
                    (s += .1) > 1 || (t.style.opacity = s, requestAnimationFrame(e)), 1 === s && "function" == typeof i && i()
                }()
        },
        gh = (t, e = null) => {
            t.style.opacity = 1,
                function i() {
                    (t.style.opacity -= .1) < 0 ? t.style.display = "none" : requestAnimationFrame(i), 0 === parseFloat(t.style.opacity) && "function" == typeof e && e()
                }()
        },
        wh = "[data-newsletter-form]",
        bh = "has-success",
        vh = "has-error",
        Sh = {};
    class Eh {
        constructor(t) {
            this.sessionStorage = window.sessionStorage, this.newsletter = t, this.stopSubmit = !0, this.isChallengePage = !1, this.formID = null, this.checkForChallengePage(), this.newsletterSubmit = t => this.newsletterSubmitEvent(t), this.isChallengePage || this.init()
        }
        init() {
            this.newsletter.addEventListener("submit", this.newsletterSubmit), this.showMessage()
        }
        newsletterSubmitEvent(t) {
            this.stopSubmit && (t.preventDefault(), this.removeStorage(), this.writeStorage(), this.stopSubmit = !1, this.newsletter.submit())
        }
        checkForChallengePage() {
            this.isChallengePage = "/challenge" === window.location.pathname
        }
        writeStorage() {
            void 0 !== this.sessionStorage && this.sessionStorage.setItem("newsletter_form_id", this.newsletter.id)
        }
        readStorage() {
            this.formID = this.sessionStorage.getItem("newsletter_form_id")
        }
        removeStorage() {
            this.sessionStorage.removeItem("newsletter_form_id")
        }
        showMessage() {
            if (this.readStorage(), this.newsletter.id === this.formID) {
                const t = document.getElementById(this.formID); - 1 !== window.location.search.indexOf("?customer_posted=true") ? (t.classList.remove(vh), t.classList.add(bh)) : -1 !== window.location.search.indexOf("accepts_marketing") && (t.classList.remove(bh), t.classList.add(vh)), this.scrollToForm(t)
            }
        }
        scrollToForm(t) {
            const e = t.getBoundingClientRect();
            e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth) || setTimeout((() => {
                window.scroll({
                    top: e.top,
                    left: 0,
                    behavior: "smooth"
                })
            }), 400)
        }
        unload() {
            this.newsletter.removeEventListener("submit", this.newsletterSubmit)
        }
    }
    const Lh = {
            onLoad() {
                Sh[this.id] = [];
                this.container.querySelectorAll(wh).forEach((t => {
                    Sh[this.id].push(new Eh(t))
                }))
            },
            onUnload() {
                Sh[this.id].forEach((t => {
                    "function" == typeof t.unload && t.unload()
                }))
            }
        },
        Th = "[data-tracking-consent]",
        kh = "[data-confirm-cookies]",
        Ah = "[data-close-modal]",
        qh = "[data-popup-inner]",
        xh = "[data-newsletter]",
        Ch = "[data-newsletter-holder]",
        Ph = "[data-newsletter-field]",
        _h = "[data-newsletter-form]",
        $h = "[data-promo-text]",
        Mh = "data-popup-delay",
        Hh = "data-cookie-name",
        Dh = "data-target-referrer",
        Ih = "has-value",
        Bh = "has-success",
        Fh = "desktop",
        Wh = "mobile";
    let Oh = {};
    class jh {
        constructor(t, e) {
            this.configuration = {
                expires: null,
                path: "/",
                domain: window.location.hostname
            }, this.name = t, this.value = e
        }
        write() {
            (-1 !== document.cookie.indexOf("; ") && !document.cookie.split("; ").find((t => t.startsWith(this.name))) || -1 === document.cookie.indexOf("; ")) && (document.cookie = `${this.name}=${this.value}; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`)
        }
        read() {
            if (-1 !== document.cookie.indexOf("; ") && document.cookie.split("; ").find((t => t.startsWith(this.name)))) {
                return document.cookie.split("; ").find((t => t.startsWith(this.name))).split("=")[1]
            }
            return !1
        }
        destroy() {
            document.cookie.split("; ").find((t => t.startsWith(this.name))) && (document.cookie = `${this.name}=null; expires=${this.configuration.expires}; path=${this.configuration.path}; domain=${this.configuration.domain}`)
        }
    }
    class Nh {
        constructor(t, e) {
            this.element = e, this.delay = t.getAttribute(Mh), "always" === this.delay && this.always(), "delayed" === this.delay && this.delayed(), "bottom" === this.delay && this.bottom(), "idle" === this.delay && this.idle()
        }
        always() {
            fh(this.element)
        }
        delayed() {
            setTimeout((() => {
                fh(this.element)
            }), 1e4)
        }
        bottom() {
            window.addEventListener("scroll", (() => {
                window.scrollY + window.innerHeight >= document.body.clientHeight && fh(this.element)
            }))
        }
        idle() {
            let t = 0;
            const e = ["mousemove", "mousedown", "click", "touchmove", "touchstart", "touchend", "keydown", "keypress"],
                i = ["load", "resize", "scroll"],
                s = () => {
                    t = setTimeout((() => {
                        t = 0, fh(this.element)
                    }), 6e4), e.forEach((t => {
                        document.addEventListener(t, o)
                    })), i.forEach((t => {
                        window.addEventListener(t, o)
                    }))
                },
                o = () => {
                    t && clearTimeout(t), e.forEach((t => {
                        document.removeEventListener(t, o)
                    })), i.forEach((t => {
                        window.removeEventListener(t, o)
                    })), s()
                };
            s()
        }
    }
    class Vh {
        constructor(t) {
            this.el = t, this.locationPath = location.href, this.el.hasAttribute(Dh) && this.init()
        }
        init() {
            -1 !== this.locationPath.indexOf(this.el.getAttribute(Dh)) || window.Shopify.designMode || this.el.parentNode.removeChild(this.el)
        }
    }
    class Rh {
        constructor(t) {
            this.popup = t, this.modal = document.querySelector(Th), this.modalInner = this.popup.querySelector(qh), this.close = this.modal.querySelector(Ah), this.acceptButton = this.modal.querySelector(kh), this.enable = "true" === this.modal.getAttribute("data-enable"), this.showPopup = !1, window.Shopify.loadFeatures([{
                name: "consent-tracking-api",
                version: "0.1"
            }], (t => {
                if (t) throw t;
                const e = window.Shopify.customerPrivacy.userCanBeTracked(),
                    i = window.Shopify.customerPrivacy.getTrackingConsent();
                this.showPopup = !e && "no_interaction" === i && this.enable, window.Shopify.designMode && (this.showPopup = !0), this.init()
            }))
        }
        init() {
            this.showPopup && fh(this.modalInner), this.clickEvents()
        }
        clickEvents() {
            this.close.addEventListener("click", (t => {
                t.preventDefault(), window.Shopify.customerPrivacy.setTrackingConsent(!1, (() => gh(this.modalInner)))
            })), this.acceptButton.addEventListener("click", (t => {
                t.preventDefault(), window.Shopify.customerPrivacy.setTrackingConsent(!0, (() => gh(this.modalInner)))
            })), document.addEventListener("trackingConsentAccepted", (function() {
                console.log("trackingConsentAccepted event fired")
            }))
        }
        onBlockSelect(t) {
            this.popup.contains(t.target) && this.showPopup && fh(this.modalInner)
        }
        onBlockDeselect(t) {
            this.popup.contains(t.target) && gh(this.modalInner)
        }
    }
    class zh {
        constructor(t) {
            this.popup = t, this.popupInner = this.popup.querySelector(qh), this.close = this.popup.querySelector(Ah), this.cookie = new jh(this.popup.getAttribute(Hh), "user_has_closed"), this.isTargeted = new Vh(this.popup), this.hasDeviceClass = "", this.init()
        }
        init() {
            !1 !== this.cookie.read() && !window.Shopify.designMode || (window.Shopify.designMode ? fh(this.popupInner) : new Nh(this.popup, this.popupInner), this.clickEvents())
        }
        clickEvents() {
            this.close.addEventListener("click", (t => {
                t.preventDefault(), gh(this.popupInner), this.cookie.write()
            }))
        }
        onBlockSelect(t) {
            this.popup.classList.contains(Wh) && (this.hasDeviceClass = Wh), this.popup.classList.contains(Fh) && (this.hasDeviceClass = Fh), "" !== this.hasDeviceClass && this.popup.classList.remove(this.hasDeviceClass), this.popup.contains(t.target) && fh(this.popupInner)
        }
        onBlockDeselect(t) {
            this.popup.contains(t.target) && gh(this.popupInner), "" !== this.hasDeviceClass && this.popup.classList.add(this.hasDeviceClass)
        }
    }
    class Uh {
        constructor(t) {
            this.popup = t, this.popupInner = this.popup.querySelector(qh), this.holder = this.popup.querySelector(Ch), this.close = this.popup.querySelector(Ah), this.newsletterField = this.popup.querySelector(Ph), this.cookie = new jh(this.popup.getAttribute(Hh), "newsletter_is_closed"), this.form = this.popup.querySelector(_h), this.isTargeted = new Vh(this.popup), this.init()
        }
        init() {
            !1 !== this.cookie.read() && !window.Shopify.designMode || (this.show(), this.form.classList.contains(Bh) && this.checkForSuccess())
        }
        show() {
            window.Shopify.designMode ? fh(this.popupInner) : new Nh(this.popup, this.popupInner), this.inputField(), this.closePopup()
        }
        checkForSuccess() {
            fh(this.popupInner), this.cookie.write()
        }
        closePopup() {
            this.close.addEventListener("click", (t => {
                t.preventDefault(), gh(this.popupInner), this.cookie.write()
            }))
        }
        inputField() {
            this.newsletterField.addEventListener("input", (() => {
                "" !== this.newsletterField.value && this.holder.classList.add(Ih, "" !== this.newsletterField.value)
            })), this.newsletterField.addEventListener("focus", (() => {
                "" !== this.newsletterField.value && this.holder.classList.add(Ih, "" !== this.newsletterField.value)
            })), this.newsletterField.addEventListener("focusout", (() => {
                setTimeout((() => {
                    this.holder.classList.remove(Ih)
                }), 2e3)
            }))
        }
        onBlockSelect(t) {
            this.popup.contains(t.target) && fh(this.popupInner)
        }
        onBlockDeselect(t) {
            this.popup.contains(t.target) && gh(this.popupInner)
        }
    }
    Ft("popups", [{
        onLoad() {
            Oh[this.id] = [];
            this.container.querySelectorAll(Th).forEach((t => {
                Oh[this.id].push(new Rh(t))
            }));
            this.container.querySelectorAll(xh).forEach((t => {
                Oh[this.id].push(new Uh(t))
            }));
            this.container.querySelectorAll($h).forEach((t => {
                Oh[this.id].push(new zh(t))
            }))
        },
        onBlockSelect(t) {
            Oh[this.id].forEach((e => {
                "function" == typeof e.onBlockSelect && e.onBlockSelect(t)
            }))
        },
        onBlockDeselect(t) {
            Oh[this.id].forEach((e => {
                "function" == typeof e.onBlockDeselect && e.onBlockDeselect(t)
            }))
        }
    }, Lh]), Ft("tabs", Tc);
    const Jh = (t, e = "", i) => ((i = i || document.createElement("div")).classList.add(e), t.parentNode.insertBefore(i, t), i.appendChild(t));
    document.addEventListener("DOMContentLoaded", (function() {
        window.isRTL = "rtl" === document.documentElement.getAttribute("dir"), Wt("*"), window.theme.settings.animate_scroll && (d.init({
            once: !0
        }), document.body.classList.add("aos-initialized"), document.body.classList.add("theme-animate-scroll")), window.theme.settings.animate_hover && document.body.classList.add("theme-animate-hover"), document.addEventListener("lazyloaded", (function(t) {
            const e = t.target.parentNode;
            e.classList.contains("lazy-image") && (e.style.backgroundImage = "none")
        }));
        document.querySelectorAll(".rte table").forEach((t => {
            Jh(t, "rte__table-wrapper")
        }));
        document.querySelectorAll('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"], .rte iframe#admin_bar_iframe').forEach((t => {
                Jh(t, "rte__video-wrapper")
            })), document.addEventListener("mousedown", (() => {
                document.body.classList.remove("focus-enabled")
            })), document.addEventListener("keyup", (t => {
                9 === t.keyCode && document.body.classList.add("focus-enabled")
            })), window.navigator.cookieEnabled && (document.documentElement.className = document.documentElement.className.replace("supports-no-cookies", "supports-cookies")),
            function(t) {
                t = t || {};
                var e = window.location.hash,
                    i = document.getElementById(e.slice(1));
                if (i && t.ignore && i.matches(t.ignore)) return !1;
                e && i && Rt(i, t)
            }(), zt(), "scrollBehavior" in document.documentElement.style || es({
                url: window.theme.assets.smoothscroll
            })
    }))
}(themeVendor.FlickityFade, themeVendor.BodyScrollLock, themeVendor.MicroModal, themeVendor.Rellax, themeVendor.Flickity, themeVendor.themeCurrency, themeVendor.Sqrl, themeVendor.axios, themeVendor.themeAddresses, themeVendor.ellipsis, themeVendor.FlickitySync, themeVendor.AOS);
//# sourceMappingURL=theme.js.map