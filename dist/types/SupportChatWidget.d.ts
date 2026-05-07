import { type ReactNode } from "react";
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
    onEmailSubmit?: (email: string) => void;
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
export declare const SupportChatWidget: ({ user, messages, isTyping, onEmailSubmit, onTyping, onSendMessage, theme, classNames, labels, icons, }: SupportChatWidgetProps) => import("react/jsx-runtime").JSX.Element;
