"use client";

import { Button } from "@/components/ui/button";
import SockJS from "sockjs-client";
import { over } from "stompjs";

export default function Chat() {
  const handleConnect = async () => {
    const s = new SockJS("http://localhost:8080/ws");
    const client = over(s);

    client.connect({}, () => {
      console.log("connected");
    });
  };

  return (
    <div className="m-8 h-full flex-1">
      <Button onClick={() => handleConnect()}>Connect</Button>
      <div className="flex flex-col gap-4 mt-8 mx-28">
        <input type="text" className="border border-gray-300 p-2" />
        <Button>Send</Button>
      </div>
    </div>
  );
}
