"use client";

import { Button } from "@/components/ui/button";
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
    <div className="m-8 h-full flex-1">
      <div className="flex flex-col gap-4 mt-8 mx-28">
        <input type="text" className="border border-gray-300 p-2" />
        <Button
          onClick={() =>
            client?.send("/app/message", {}, JSON.stringify("test"))
          }
        >
          Send
        </Button>
      </div>
    </div>
  );
}
