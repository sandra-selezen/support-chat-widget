import { useState as e } from "react";
//#region \0rolldown/runtime.js
var t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), n = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), r = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), i = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function r(e) {
			return "" + e;
		}
		function i(e) {
			try {
				r(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), r(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, r, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = n("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), a = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = r() : t.exports = i();
})))(), o = "support-chat-email", s = [{
	id: "welcome",
	text: "Hi! How can we help you today?",
	sender: "support"
}], c = (...e) => e.filter(Boolean).join(" "), l = ({ user: t = null, messages: n, isTyping: r = !1, onTyping: i, onSendMessage: l, theme: u, classNames: d, labels: f, icons: p }) => {
	let [m, h] = e(!1), [g, _] = e(() => typeof window > "u" ? null : localStorage.getItem(o)), [v, y] = e(""), [b, x] = e(""), [S, C] = e(s), [w, T] = e(!1), E = n !== void 0, D = n ?? S, O = !!t?.email || !!g, k = {
		title: f?.title ?? "Support chat",
		subtitle: f?.subtitle ?? "We usually reply in a few minutes",
		emailTitle: f?.emailTitle ?? "Before we start",
		emailDescription: f?.emailDescription ?? "Please leave your email so our support team can contact you.",
		emailPlaceholder: f?.emailPlaceholder ?? "Enter your email",
		emailButton: f?.emailButton ?? "Continue",
		messagePlaceholder: f?.messagePlaceholder ?? "Type your message...",
		sendButton: f?.sendButton ?? "Send"
	}, A = u?.position ?? "bottom-right", j = {
		"--sc-primary": u?.colors?.primary ?? "#006168",
		"--sc-primary-text": u?.colors?.primaryText ?? "#ffffff",
		"--sc-background": u?.colors?.background ?? "#ffffff",
		"--sc-surface": u?.colors?.surface ?? "#ffffff",
		"--sc-text": u?.colors?.text ?? "#101828",
		"--sc-muted": u?.colors?.mutedText ?? "#667085",
		"--sc-border": u?.colors?.border ?? "#eaecf0",
		"--sc-user-bubble": u?.colors?.userBubble ?? "#006168",
		"--sc-user-bubble-text": u?.colors?.userBubbleText ?? "#ffffff",
		"--sc-support-bubble": u?.colors?.supportBubble ?? "#f2f4f7",
		"--sc-support-bubble-text": u?.colors?.supportBubbleText ?? "#101828",
		"--sc-input-background": u?.colors?.inputBackground ?? "#ffffff",
		"--sc-input-text": u?.colors?.inputText ?? "#101828",
		"--sc-launcher": u?.colors?.launcherBackground ?? "#006168",
		"--sc-launcher-text": u?.colors?.launcherText ?? "#ffffff",
		"--sc-focus-ring": u?.colors?.focusRing ?? "rgba(0, 97, 104, 0.12)"
	}, M = () => {
		let e = v.trim();
		e && (localStorage.setItem(o, e), _(e), y(""));
	}, N = async () => {
		let e = b.trim();
		if (!e || w) return;
		let n = {
			id: crypto.randomUUID(),
			text: e,
			sender: "user"
		};
		E || C((e) => [...e, n]), x(""), T(!0);
		try {
			await l?.({
				message: e,
				email: t?.email ?? g ?? void 0,
				user: t
			});
		} finally {
			T(!1);
		}
	};
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: c("sc-widget", A === "bottom-left" ? "sc-widget--bottom-left" : "sc-widget--bottom-right", d?.root),
		style: j,
		children: [m && /* @__PURE__ */ (0, a.jsxs)("div", {
			className: c("sc-window", d?.window),
			children: [
				/* @__PURE__ */ (0, a.jsxs)("div", {
					className: c("sc-header", d?.header),
					children: [/* @__PURE__ */ (0, a.jsxs)("div", { children: [/* @__PURE__ */ (0, a.jsx)("h3", {
						className: "sc-title",
						children: k.title
					}), /* @__PURE__ */ (0, a.jsx)("p", {
						className: "sc-subtitle",
						children: k.subtitle
					})] }), /* @__PURE__ */ (0, a.jsx)("button", {
						type: "button",
						className: c("sc-header-close", d?.headerCloseButton),
						onClick: () => h(!1),
						"aria-label": "Close support chat",
						children: p?.close ?? "×"
					})]
				}),
				/* @__PURE__ */ (0, a.jsxs)("div", {
					className: c("sc-body", d?.body),
					children: [!O && /* @__PURE__ */ (0, a.jsxs)("div", {
						className: c("sc-email-card", d?.emailCard),
						children: [
							/* @__PURE__ */ (0, a.jsx)("p", {
								className: "sc-email-title",
								children: k.emailTitle
							}),
							/* @__PURE__ */ (0, a.jsx)("p", {
								className: "sc-email-description",
								children: k.emailDescription
							}),
							/* @__PURE__ */ (0, a.jsxs)("div", {
								className: "sc-email-form",
								children: [/* @__PURE__ */ (0, a.jsx)("input", {
									value: v,
									onChange: (e) => y(e.target.value),
									onKeyDown: (e) => {
										e.key === "Enter" && M();
									},
									className: c("sc-email-input", d?.emailInput),
									type: "email",
									placeholder: k.emailPlaceholder
								}), /* @__PURE__ */ (0, a.jsx)("button", {
									type: "button",
									className: c("sc-email-button", d?.emailButton),
									onClick: M,
									children: k.emailButton
								})]
							})
						]
					}), O && /* @__PURE__ */ (0, a.jsxs)("div", {
						className: c("sc-messages", d?.messages),
						children: [D.map((e) => /* @__PURE__ */ (0, a.jsx)("div", {
							className: c("sc-message", e.sender === "user" ? c("sc-message--user", d?.messageUser) : c("sc-message--support", d?.messageSupport)),
							children: e.text
						}, e.id)), r && /* @__PURE__ */ (0, a.jsx)("div", {
							className: c("sc-message", "sc-message--support", d?.messageSupport),
							children: /* @__PURE__ */ (0, a.jsxs)("div", {
								className: c("sc-typing", d?.typingIndicator),
								children: [
									/* @__PURE__ */ (0, a.jsx)("span", {}),
									/* @__PURE__ */ (0, a.jsx)("span", {}),
									/* @__PURE__ */ (0, a.jsx)("span", {})
								]
							})
						})]
					})]
				}),
				O && /* @__PURE__ */ (0, a.jsxs)("div", {
					className: c("sc-footer", d?.footer),
					children: [/* @__PURE__ */ (0, a.jsx)("textarea", {
						value: b,
						onChange: (e) => {
							x(e.target.value), i?.();
						},
						onKeyDown: (e) => {
							e.key === "Enter" && !e.shiftKey && (e.preventDefault(), N());
						},
						className: c("sc-message-input", d?.messageInput),
						placeholder: k.messagePlaceholder,
						rows: 1
					}), /* @__PURE__ */ (0, a.jsx)("button", {
						type: "button",
						className: c("sc-send-button", d?.sendButton),
						onClick: N,
						disabled: !b.trim() || w,
						"aria-label": "Send message",
						children: p?.send ?? k.sendButton
					})]
				})
			]
		}), /* @__PURE__ */ (0, a.jsx)("button", {
			type: "button",
			className: c("sc-launcher", d?.launcher),
			onClick: () => h((e) => !e),
			"aria-label": m ? "Close support chat" : "Open support chat",
			children: m ? p?.close ?? "×" : p?.open ?? "💬"
		})]
	});
};
//#endregion
export { l as SupportChatWidget };
