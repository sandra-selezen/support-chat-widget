import { type CSSProperties, type ReactNode, useState } from "react";
import "./support-chat-widget.css";

export type User = {
  id?: string;
  name?: string;
  email?: string;
};

export type Message = {
  id: string;
  text: string;
  sender: "user" | "support";
};

export type SupportChatWidgetTheme = {
  colors?: {
    primary?: string;
    primaryText?: string;
    background?: string;
    surface?: string;
    text?: string;
    mutedText?: string;
    border?: string;
    userBubble?: string;
    userBubbleText?: string;
    supportBubble?: string;
    supportBubbleText?: string;
    inputBackground?: string;
    inputText?: string;
    launcherBackground?: string;
    launcherText?: string;
    focusRing?: string;
  };
  position?: "bottom-right" | "bottom-left";
};

export type SupportChatWidgetClassNames = {
  root?: string;
  window?: string;
  header?: string;
  headerCloseButton?: string;
  body?: string;
  footer?: string;
  launcher?: string;
  emailCard?: string;
  emailInput?: string;
  emailButton?: string;
  messages?: string;
  messageUser?: string;
  messageSupport?: string;
  messageInput?: string;
  sendButton?: string;
  typingIndicator?: string;
};

export type SupportChatWidgetLabels = {
  title?: string;
  subtitle?: string;
  emailTitle?: string;
  emailDescription?: string;
  emailPlaceholder?: string;
  emailButton?: string;
  messagePlaceholder?: string;
  sendButton?: string;
};

export type SupportChatWidgetIcons = {
  open?: ReactNode;
  close?: ReactNode;
  send?: ReactNode;
};

export type SupportChatWidgetProps = {
  user?: User | null;
  messages?: Message[];
  isTyping?: boolean;
  onTyping?: () => void;
  onSendMessage?: (params: {
    message: string;
    email?: string;
    user?: User | null;
  }) => void | Promise<void>;
  theme?: SupportChatWidgetTheme;
  classNames?: SupportChatWidgetClassNames;
  labels?: SupportChatWidgetLabels;
  icons?: SupportChatWidgetIcons;
};

const STORAGE_KEY = "support-chat-email";

const defaultMessages: Message[] = [
  {
    id: "welcome",
    text: "Hi! How can we help you today?",
    sender: "support",
  },
];

const cn = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

export const SupportChatWidget = ({
  user = null,
  messages,
  isTyping = false,
  onTyping,
  onSendMessage,
  theme,
  classNames,
  labels,
  icons,
}: SupportChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(STORAGE_KEY);
  });

  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [internalMessages, setInternalMessages] =
    useState<Message[]>(defaultMessages);
  const [isSending, setIsSending] = useState(false);

  const isControlled = messages !== undefined;
  const finalMessages = messages ?? internalMessages;

  const hasUserEmail = Boolean(user?.email);
  const hasGuestEmail = Boolean(email);
  const canChat = hasUserEmail || hasGuestEmail;

  const mergedLabels = {
    title: labels?.title ?? "Support chat",
    subtitle: labels?.subtitle ?? "We usually reply in a few minutes",
    emailTitle: labels?.emailTitle ?? "Before we start",
    emailDescription:
      labels?.emailDescription ??
      "Please leave your email so our support team can contact you.",
    emailPlaceholder: labels?.emailPlaceholder ?? "Enter your email",
    emailButton: labels?.emailButton ?? "Continue",
    messagePlaceholder: labels?.messagePlaceholder ?? "Type your message...",
    sendButton: labels?.sendButton ?? "Send",
  };

  const position = theme?.position ?? "bottom-right";

  const rootStyle = {
    "--sc-primary": theme?.colors?.primary ?? "#006168",
    "--sc-primary-text": theme?.colors?.primaryText ?? "#ffffff",
    "--sc-background": theme?.colors?.background ?? "#ffffff",
    "--sc-surface": theme?.colors?.surface ?? "#ffffff",
    "--sc-text": theme?.colors?.text ?? "#101828",
    "--sc-muted": theme?.colors?.mutedText ?? "#667085",
    "--sc-border": theme?.colors?.border ?? "#eaecf0",
    "--sc-user-bubble": theme?.colors?.userBubble ?? "#006168",
    "--sc-user-bubble-text": theme?.colors?.userBubbleText ?? "#ffffff",
    "--sc-support-bubble": theme?.colors?.supportBubble ?? "#f2f4f7",
    "--sc-support-bubble-text":
      theme?.colors?.supportBubbleText ?? "#101828",
    "--sc-input-background": theme?.colors?.inputBackground ?? "#ffffff",
    "--sc-input-text": theme?.colors?.inputText ?? "#101828",
    "--sc-launcher": theme?.colors?.launcherBackground ?? "#006168",
    "--sc-launcher-text": theme?.colors?.launcherText ?? "#ffffff",
    "--sc-focus-ring": theme?.colors?.focusRing ?? "rgba(0, 97, 104, 0.12)",
  } as CSSProperties;

  const handleSaveEmail = () => {
    const trimmedEmail = emailValue.trim();

    if (!trimmedEmail) return;

    localStorage.setItem(STORAGE_KEY, trimmedEmail);
    setEmail(trimmedEmail);
    setEmailValue("");
  };

  const handleSendMessage = async () => {
    const trimmedMessage = messageValue.trim();

    if (!trimmedMessage || isSending) return;

    const newMessage: Message = {
      id: crypto.randomUUID(),
      text: trimmedMessage,
      sender: "user",
    };

    if (!isControlled) {
      setInternalMessages((prev) => [...prev, newMessage]);
    }

    setMessageValue("");
    setIsSending(true);

    try {
      await onSendMessage?.({
        message: trimmedMessage,
        email: user?.email ?? email ?? undefined,
        user,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className={cn(
        "sc-widget",
        position === "bottom-left"
          ? "sc-widget--bottom-left"
          : "sc-widget--bottom-right",
        classNames?.root,
      )}
      style={rootStyle}
    >
      {isOpen && (
        <div className={cn("sc-window", classNames?.window)}>
          <div className={cn("sc-header", classNames?.header)}>
            <div>
              <h3 className="sc-title">{mergedLabels.title}</h3>
              <p className="sc-subtitle">{mergedLabels.subtitle}</p>
            </div>

            <button
              type="button"
              className={cn(
                "sc-header-close",
                classNames?.headerCloseButton,
              )}
              onClick={() => setIsOpen(false)}
              aria-label="Close support chat"
            >
              {icons?.close ?? "×"}
            </button>
          </div>

          <div className={cn("sc-body", classNames?.body)}>
            {!canChat && (
              <div className={cn("sc-email-card", classNames?.emailCard)}>
                <p className="sc-email-title">{mergedLabels.emailTitle}</p>
                <p className="sc-email-description">
                  {mergedLabels.emailDescription}
                </p>

                <div className="sc-email-form">
                  <input
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") handleSaveEmail();
                    }}
                    className={cn("sc-email-input", classNames?.emailInput)}
                    type="email"
                    placeholder={mergedLabels.emailPlaceholder}
                  />

                  <button
                    type="button"
                    className={cn("sc-email-button", classNames?.emailButton)}
                    onClick={handleSaveEmail}
                  >
                    {mergedLabels.emailButton}
                  </button>
                </div>
              </div>
            )}

            {canChat && (
              <div className={cn("sc-messages", classNames?.messages)}>
                {finalMessages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "sc-message",
                      message.sender === "user"
                        ? cn("sc-message--user", classNames?.messageUser)
                        : cn(
                            "sc-message--support",
                            classNames?.messageSupport,
                          ),
                    )}
                  >
                    {message.text}
                  </div>
                ))}

                {isTyping && (
                  <div
                    className={cn(
                      "sc-message",
                      "sc-message--support",
                      classNames?.messageSupport,
                    )}
                  >
                    <div
                      className={cn(
                        "sc-typing",
                        classNames?.typingIndicator,
                      )}
                    >
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {canChat && (
            <div className={cn("sc-footer", classNames?.footer)}>
              <textarea
                value={messageValue}
                onChange={(event) => {
                  setMessageValue(event.target.value);
                  onTyping?.();
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleSendMessage();
                  }
                }}
                className={cn("sc-message-input", classNames?.messageInput)}
                placeholder={mergedLabels.messagePlaceholder}
                rows={1}
              />

              <button
                type="button"
                className={cn("sc-send-button", classNames?.sendButton)}
                onClick={handleSendMessage}
                disabled={!messageValue.trim() || isSending}
                aria-label="Send message"
              >
                {icons?.send ?? mergedLabels.sendButton}
              </button>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className={cn("sc-launcher", classNames?.launcher)}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close support chat" : "Open support chat"}
      >
        {isOpen ? icons?.close ?? "×" : icons?.open ?? "💬"}
      </button>
    </div>
  );
};
