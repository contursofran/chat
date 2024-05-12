"use client";

import { ChatMessage } from "@/components/chat-message";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useUserStore } from "@/store/store";
import { Message } from "@/types";
import { Forward } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client, over } from "stompjs";

export default function Chat() {
  const currentUser = useUserStore((state) => state.user);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [client, setClient] = useState<Client>();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const s = new SockJS("http://localhost:8080/ws");
    const client = over(s);

    setClient(client);

    client.connect({}, () => {
      client.subscribe("/chatroom/public", (IncommingMessage) => {
        handleSubscription(JSON.parse(IncommingMessage.body));
      });
    });
  }, []);

  const handleSubscription = (IncommingMessage: Message) => {
    setMessages((prev) => [...prev, IncommingMessage]);
  };

  const handleSend = () => {
    client?.send(
      "/app/message",
      {},
      JSON.stringify({
        content: message.trim(),
        date: new Date().toISOString(),
        sender: currentUser,
      })
    );

    setMessage("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };

  return (
    <div className="flex flex-col justify-end flex-1 w-full max-w-screen-sm">
      <ScrollArea className="w-full h-[calc(100vh-2.5rem-3.5rem-4rem)] px-5">
        <div className="mb-9 flex flex-col gap-6">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
              side={currentUser === message.sender ? "right" : "left"}
            />
          ))}
        </div>
      </ScrollArea>
      <div className="w-full gap-3 bg-black relative flex items-center rounded-full h-10">
        <Textarea
          value={message}
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
          name="message"
          className="w-full rounded-full pl-4 pr-10 h-full placeholder-neutral-800 overflow-hidden resize-none"
          placeholder="Send a message..."
        />
        <Forward className="absolute  right-3 h-5" />
      </div>
    </div>
  );
}
