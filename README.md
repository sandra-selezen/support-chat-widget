# 📦 Support Chat Widget

A customizable support chat widget for React applications.

- ⚡ Easy to integrate
- 🎨 Fully customizable (theme + Tailwind support)
- 🧩 Framework-agnostic styling
- 💬 Supports guest users (email via localStorage)

---

## 🚀 Installation

### From GitHub

```
npm install github:sandra-selezen/support-chat-widget
```

## 🧩 Usage

```
import { SupportChatWidget } from "support-chat-widget";
import "support-chat-widget/dist/support-chat-widget.css";

function App() {
  return (
    <SupportChatWidget
      user={null}
      onSendMessage={({ message, email }) => {
        console.log(message, email);
      }}
    />
  );
}
```

## 👤 User Handling
- If user.email exists → chat is available immediately
- If not → user is asked to enter email
- Email is stored in localStorage

## 🎨 Customization

### Theme (colors)

```
<SupportChatWidget
  theme={{
    colors: {
      primary: "#6F0F17",
      background: "#ffffff",
      text: "#101828",
      userBubble: "#3F1009",
      supportBubble: "#f2f4f7",
      launcherBackground: "#6F0F17",
    },
  }}
/>
```

### Available theme tokens

```
colors: {
  primary
  primaryText
  background
  surface
  text
  mutedText
  border
  userBubble
  userBubbleText
  supportBubble
  supportBubbleText
  inputBackground
  inputText
  launcherBackground
  launcherText
  focusRing
}
```

### Tailwind / Custom Classes

```
<SupportChatWidget
  classNames={{
    header: "bg-red-500",
    launcher: "bg-blue-600 hover:bg-blue-700",
    messageUser: "rounded-none",
    window: "shadow-2xl",
  }}
/>
```

### Labels

```
<SupportChatWidget
  labels={{
    title: "Need help?",
    subtitle: "We reply fast ⚡",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Write a message...",
    sendButton: "Send",
  }}
/>
```

### Icons

```
<SupportChatWidget
  icons={{
    open: "💬",
    close: "✕",
    send: "➤",
  }}
/>
```

## 🧠 Design Principles

- theme → for colors (framework-agnostic)
- classNames → for Tailwind / custom styling
- onSendMessage → for API integration

## 📱 Features
- Floating chat widget
- Chat window with scroll
- Email capture for guests
- LocalStorage persistence
- Customizable UI
