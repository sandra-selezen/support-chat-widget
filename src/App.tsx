import { SupportChatWidget } from "./SupportChatWidget";
import "./support-chat-widget.css";

function App() {
  return (
    <div>
      <h1>Support Chat Demo</h1>

      <SupportChatWidget
        user={null}
        theme={{
          position: "bottom-right",
          colors: {
            primary: "#6F0F17",
            primaryText: "#ffffff",
            background: "#ffffff",
            surface: "#ffffff",
            text: "#101828",
            mutedText: "#667085",
            border: "#eaecf0",
            userBubble: "#3F1009",
            supportBubble: "#f2f4f7",
            launcherBackground: "#6F0F17",
            focusRing: "rgba(111, 15, 23, 0.2)",
          },
        }}
        classNames={{
          header: "shadow-md",
          launcher: "hover:scale-105 transition",
          messageUser: "rounded-none",
          window: "shadow-2xl",
        }}
        labels={{
          title: "Need help?",
          subtitle: "We reply super fast ⚡",
          emailPlaceholder: "Enter your email",
          messagePlaceholder: "Type a message...",
          sendButton: "Send",
        }}
        icons={{
          open: "💬",
          close: "✕",
          send: "➤",
        }}
        onEmailSubmit={(email) => {
          console.log("Guest email:", email);
        }}
        onSendMessage={async ({ message, email }) => {
          console.log("Sending message...", message, email);

          // fake API
          await new Promise((resolve) => setTimeout(resolve, 500));

          console.log("Message sent");
        }}
      />
    </div>
  );
}

export default App;
