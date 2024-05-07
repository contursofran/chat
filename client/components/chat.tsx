"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Forward } from "lucide-react";
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client, over } from "stompjs";

export default function Chat() {
  const [client, setClient] = useState<Client>();

  const onReceiveMessage = (message: any) => {
    console.log(message);
  };

  useEffect(() => {
    const s = new SockJS("http://localhost:8080/ws");
    const client = over(s);

    setClient(client);

    client.connect({}, () => {
      console.log("connected");

      client.subscribe("/chatroom/public", onReceiveMessage);
    });
  }, []);

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
          className="w-full rounded-full pl-4 pr-10 h-full placeholder-neutral-800 overflow-hidden resize-none"
          placeholder="Send a message..."
        />
        <Forward className="absolute  right-3 h-5" />
      </div>
    </div>
  );
}
