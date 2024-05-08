"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Message } from "@/types";
import { Forward } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client, over } from "stompjs";

export default function Chat() {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [client, setClient] = useState<Client>();

  useEffect(() => {
    const s = new SockJS("http://localhost:8080/ws");
    const client = over(s);

    setClient(client);

    client.connect({}, () => {
      client.subscribe("/chatroom/public");
    });
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        content: message.trim(),
        timestamp: new Date().toISOString(),
        user: "Client",
      };
    }

    client?.send(
      "/app/message",
      {},
      JSON.stringify({
        content: message,
        sender: "client",
        date: new Date().toISOString(),
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
    <div className="flex flex-col justify-between flex-1">
      <div className="flex flex-col gap-4 mt-8 mx-28">
        {/* <Button
          onClick={() =>
            client?.send(
              "/app/message",
              {},
              JSON.stringify({
                content: "Hello",
                sender: "client",
                date: new Date().toISOString(),
              })
            )
          }
        >
          Send
        </Button> */}
      </div>
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
