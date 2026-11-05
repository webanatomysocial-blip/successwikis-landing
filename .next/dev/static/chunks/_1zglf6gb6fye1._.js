(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Animations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Animations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Animations() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Animations.useGSAP": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduced) return;
            const desktop = window.innerWidth > 900;
            if (desktop) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-kicker", {
                    y: -80,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-title", {
                    scale: 1.22,
                    opacity: 0,
                    duration: 1.3,
                    ease: "power3.out"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero .cta", {
                    y: 70,
                    opacity: 0,
                    duration: 1,
                    delay: .25,
                    ease: "power3.out"
                });
            }
            const heroScroll = {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".hero-bg", {
                scale: 1.18,
                ease: "none",
                scrollTrigger: heroScroll
            });
            if (document.querySelector(".hero") && desktop) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".floating-nav", {
                autoAlpha: 0,
                y: 18
            }, {
                autoAlpha: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "12% top",
                    end: "28% top",
                    scrub: true
                }
            });
            else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".floating-nav", {
                autoAlpha: 1,
                y: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray("[data-reveal]").forEach({
                "Animations.useGSAP": (el)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(el, {
                        y: 55,
                        opacity: 0,
                        duration: .9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%"
                        }
                    })
            }["Animations.useGSAP"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray("[data-parallax]").forEach({
                "Animations.useGSAP": (el)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                        yPercent: 10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    })
            }["Animations.useGSAP"]);
            const words = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".manifesto span");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(words, {
                color: "#fff",
                stagger: .12,
                scrollTrigger: {
                    trigger: ".manifesto",
                    start: "top 78%",
                    end: "bottom 42%",
                    scrub: true
                }
            });
        }
    }["Animations.useGSAP"], []);
    return null;
}
_s(Animations, "VFzjMmoc5axVjyj8E2Q2cQd9phs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Animations;
var _c;
__turbopack_context__.k.register(_c, "Animations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCountdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCountdown.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Countdown({ large = false, deadline = false }) {
    _s();
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Countdown.useMemo[target]": ()=>deadline ? new Date("2026-11-10T23:59:59+05:30") : new Date("2026-11-14T09:00:00+05:30")
    }["Countdown.useMemo[target]"], [
        deadline
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCountdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountdown"])(target);
    const values = [
        [
            t.days,
            "Days"
        ],
        [
            t.hours,
            "Hours"
        ],
        [
            t.minutes,
            "Minutes"
        ],
        [
            t.seconds,
            "Seconds"
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `countdown ${large ? "countdown--large" : ""}`,
        children: values.map(([value, label], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "countdown-unit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: String(value).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/components/Countdown.tsx",
                                lineNumber: 7,
                                columnNumber: 154
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/Countdown.tsx",
                                lineNumber: 7,
                                columnNumber: 202
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Countdown.tsx",
                        lineNumber: 7,
                        columnNumber: 149
                    }, this),
                    i < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/components/Countdown.tsx",
                        lineNumber: 7,
                        columnNumber: 234
                    }, this)
                ]
            }, label, true, {
                fileName: "[project]/components/Countdown.tsx",
                lineNumber: 7,
                columnNumber: 105
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Countdown.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_s(Countdown, "7exe/9H7y0+wDBY0VVUMuK+Op80=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCountdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountdown"]
    ];
});
_c = Countdown;
var _c;
__turbopack_context__.k.register(_c, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/contact/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ContactForm() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const submit = (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            form.reportValidity();
            setState("error");
            return;
        }
        setState("loading");
        window.setTimeout(()=>setState("success"), 650);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "contact-form",
        className: "contact-form-card",
        "data-reveal": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Claim Your Pass"
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 4,
                columnNumber: 391
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Tell us a little about you and pick a pass. We’ll confirm your seat and send an invoice within one working day."
            }, void 0, false, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 4,
                columnNumber: 415
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submit,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "NAME",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "name",
                                required: true,
                                placeholder: "Your full name"
                            }, void 0, false, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 4,
                                columnNumber: 579
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 568
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "WORK EMAIL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                required: true,
                                placeholder: "yourcompany@email.com"
                            }, void 0, false, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 4,
                                columnNumber: 662
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 645
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "PHONE NUMBER",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                name: "phone",
                                required: true,
                                pattern: "[+0-9 ()-]{8,}",
                                placeholder: "+91 9121675082"
                            }, void 0, false, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 4,
                                columnNumber: 768
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 749
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "TOPIC",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "topic",
                                defaultValue: "Tickets",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Tickets"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 4,
                                        columnNumber: 927
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Tier-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 4,
                                        columnNumber: 951
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Tier-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/ContactForm.tsx",
                                        lineNumber: 4,
                                        columnNumber: 974
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 4,
                                columnNumber: 883
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 871
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-disclaimer",
                        children: "BY SUBMITTING, YOU AGREE THAT SUCCESSWIKIS MAY USE YOUR DETAILS TO RESPOND TO THIS ENQUIRY."
                    }, void 0, false, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 1014
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: state === "loading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "↦"
                            }, void 0, false, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 4,
                                columnNumber: 1191
                            }, this),
                            state === "loading" ? "SENDING…" : "SEND INQUIRY"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 1140
                    }, this),
                    state === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
                        className: "form-message error",
                        children: "Please complete all required fields."
                    }, void 0, false, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 1277
                    }, this),
                    state === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
                        className: "form-message success",
                        children: "Thanks — your enquiry is ready for the SuccessWikis team."
                    }, void 0, false, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 1382
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/components/contact/ContactForm.tsx",
                                lineNumber: 4,
                                columnNumber: 1497
                            }, this),
                            "Typical response: 1–2 business days."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/ContactForm.tsx",
                        lineNumber: 4,
                        columnNumber: 1490
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact/ContactForm.tsx",
                lineNumber: 4,
                columnNumber: 533
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/contact/ContactForm.tsx",
        lineNumber: 4,
        columnNumber: 326
    }, this);
}
_s(ContactForm, "iSytSPIYycYxNHdgzVeGLI1nLiI=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useCountdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountdown",
    ()=>useCountdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const empty = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};
function useCountdown(target) {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(empty);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountdown.useEffect": ()=>{
            const tick = {
                "useCountdown.useEffect.tick": ()=>{
                    const d = Math.max(0, target.getTime() - Date.now());
                    setTime({
                        days: Math.floor(d / 86400000),
                        hours: Math.floor(d / 3600000) % 24,
                        minutes: Math.floor(d / 60000) % 60,
                        seconds: Math.floor(d / 1000) % 60
                    });
                }
            }["useCountdown.useEffect.tick"];
            tick();
            const timer = window.setInterval(tick, 1000);
            return ({
                "useCountdown.useEffect": ()=>window.clearInterval(timer)
            })["useCountdown.useEffect"];
        }
    }["useCountdown.useEffect"], [
        target
    ]);
    return time;
}
_s(useCountdown, "J5xxDnJPq3VZtDoE0eEUiRjEyN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1zglf6gb6fye1._.js.map