import { useEffect as e, useRef as t, useState as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/SupportChatWidget.tsx
var a = "support-chat-email", o = [{
	id: "welcome",
	text: "Hi! How can we help you today?",
	sender: "support"
}], s = (...e) => e.filter(Boolean).join(" "), c = ({ user: c = null, messages: l, isTyping: u = !1, onEmailSubmit: d, onTyping: f, onSendMessage: p, theme: m, classNames: h, labels: g, icons: _ }) => {
	let [v, y] = n(!1), [b, x] = n(() => typeof window > "u" ? null : localStorage.getItem(a)), [S, C] = n(""), [w, T] = n(null), [E, D] = n(""), [O, k] = n(o), [A, j] = n(!1), M = t(null), N = l !== void 0, P = l ?? O, F = !!c?.email, I = !!b, L = F || I, R = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), z = {
		title: g?.title ?? "Support chat",
		subtitle: g?.subtitle ?? "We usually reply in a few minutes",
		emailTitle: g?.emailTitle ?? "Before we start",
		emailDescription: g?.emailDescription ?? "Please leave your email so our support team can contact you.",
		emailPlaceholder: g?.emailPlaceholder ?? "Enter your email",
		emailButton: g?.emailButton ?? "Continue",
		messagePlaceholder: g?.messagePlaceholder ?? "Type your message...",
		sendButton: g?.sendButton ?? "Send"
	}, B = m?.position ?? "bottom-right", V = {
		"--sc-primary": m?.colors?.primary ?? "#006168",
		"--sc-primary-text": m?.colors?.primaryText ?? "#ffffff",
		"--sc-background": m?.colors?.background ?? "#ffffff",
		"--sc-surface": m?.colors?.surface ?? "#ffffff",
		"--sc-text": m?.colors?.text ?? "#101828",
		"--sc-muted": m?.colors?.mutedText ?? "#667085",
		"--sc-border": m?.colors?.border ?? "#eaecf0",
		"--sc-user-bubble": m?.colors?.userBubble ?? "#006168",
		"--sc-user-bubble-text": m?.colors?.userBubbleText ?? "#ffffff",
		"--sc-support-bubble": m?.colors?.supportBubble ?? "#f2f4f7",
		"--sc-support-bubble-text": m?.colors?.supportBubbleText ?? "#101828",
		"--sc-input-background": m?.colors?.inputBackground ?? "#ffffff",
		"--sc-input-text": m?.colors?.inputText ?? "#101828",
		"--sc-launcher": m?.colors?.launcherBackground ?? "#006168",
		"--sc-launcher-text": m?.colors?.launcherText ?? "#ffffff",
		"--sc-focus-ring": m?.colors?.focusRing ?? "rgba(0, 97, 104, 0.12)"
	};
	e(() => {
		!v || !L || M.current?.scrollIntoView({
			behavior: "smooth",
			block: "end"
		});
	}, [
		P,
		u,
		v,
		L
	]);
	let H = () => {
		let e = S.trim();
		if (e) {
			if (!R(e)) {
				T("Please enter a valid email address");
				return;
			}
			localStorage.setItem(a, e), x(e), C(""), T(null), d?.(e);
		}
	}, U = () => {
		localStorage.removeItem(a), x(null), C(""), k(o);
	}, W = async () => {
		let e = E.trim();
		if (!e || A) return;
		let t = {
			id: crypto.randomUUID(),
			text: e,
			sender: "user"
		};
		N || k((e) => [...e, t]), D(""), j(!0);
		try {
			await p?.({
				message: e,
				email: c?.email ?? b ?? void 0,
				user: c
			});
		} finally {
			j(!1);
		}
	};
	return /* @__PURE__ */ i("div", {
		className: s("sc-widget", B === "bottom-left" ? "sc-widget--bottom-left" : "sc-widget--bottom-right", h?.root),
		style: V,
		children: [v && /* @__PURE__ */ i("div", {
			className: s("sc-window", h?.window),
			children: [
				/* @__PURE__ */ i("div", {
					className: s("sc-header", h?.header),
					children: [/* @__PURE__ */ i("div", { children: [
						/* @__PURE__ */ r("h3", {
							className: "sc-title",
							children: z.title
						}),
						/* @__PURE__ */ r("p", {
							className: "sc-subtitle",
							children: z.subtitle
						}),
						I && /* @__PURE__ */ r("button", {
							type: "button",
							className: "sc-change-email",
							onClick: U,
							children: "Change email"
						})
					] }), /* @__PURE__ */ r("button", {
						type: "button",
						className: s("sc-header-close", h?.headerCloseButton),
						onClick: () => y(!1),
						"aria-label": "Close support chat",
						children: _?.close ?? "x"
					})]
				}),
				/* @__PURE__ */ i("div", {
					className: s("sc-body", h?.body),
					children: [!L && /* @__PURE__ */ i("div", {
						className: s("sc-email-card", h?.emailCard),
						children: [
							/* @__PURE__ */ r("p", {
								className: "sc-email-title",
								children: z.emailTitle
							}),
							/* @__PURE__ */ r("p", {
								className: "sc-email-description",
								children: z.emailDescription
							}),
							/* @__PURE__ */ i("div", {
								className: "sc-email-form",
								children: [
									/* @__PURE__ */ r("input", {
										value: S,
										onChange: (e) => C(e.target.value),
										onKeyDown: (e) => {
											e.key === "Enter" && H();
										},
										className: s("sc-email-input", h?.emailInput),
										type: "email",
										placeholder: z.emailPlaceholder
									}),
									w && /* @__PURE__ */ r("p", {
										className: "sc-email-error",
										children: w
									}),
									/* @__PURE__ */ r("button", {
										type: "button",
										className: s("sc-email-button", h?.emailButton),
										onClick: H,
										children: z.emailButton
									})
								]
							})
						]
					}), L && /* @__PURE__ */ i("div", {
						className: s("sc-messages", h?.messages),
						children: [
							P.map((e) => /* @__PURE__ */ r("div", {
								className: s("sc-message", e.sender === "user" ? s("sc-message--user", h?.messageUser) : s("sc-message--support", h?.messageSupport)),
								children: e.text
							}, e.id)),
							u && /* @__PURE__ */ r("div", {
								className: s("sc-message", "sc-message--support", h?.messageSupport),
								children: /* @__PURE__ */ i("div", {
									className: s("sc-typing", h?.typingIndicator),
									children: [
										/* @__PURE__ */ r("span", {}),
										/* @__PURE__ */ r("span", {}),
										/* @__PURE__ */ r("span", {})
									]
								})
							}),
							/* @__PURE__ */ r("div", { ref: M })
						]
					})]
				}),
				L && /* @__PURE__ */ i("div", {
					className: s("sc-footer", h?.footer),
					children: [/* @__PURE__ */ r("textarea", {
						value: E,
						onChange: (e) => {
							D(e.target.value), f?.();
						},
						onKeyDown: (e) => {
							e.key === "Enter" && !e.shiftKey && (e.preventDefault(), W());
						},
						className: s("sc-message-input", h?.messageInput),
						placeholder: z.messagePlaceholder,
						rows: 1
					}), /* @__PURE__ */ r("button", {
						type: "button",
						className: s("sc-send-button", h?.sendButton),
						onClick: W,
						disabled: !E.trim() || A,
						"aria-label": A ? "Sending message" : "Send message",
						children: A ? /* @__PURE__ */ r("span", {
							className: "sc-send-spinner",
							"aria-hidden": "true"
						}) : _?.send ?? z.sendButton
					})]
				})
			]
		}), !v && /* @__PURE__ */ r("button", {
			type: "button",
			className: s("sc-launcher", h?.launcher),
			onClick: () => y(!0),
			"aria-label": "Open support chat",
			children: _?.open ?? "💬"
		})]
	});
};
//#endregion
export { c as SupportChatWidget };
