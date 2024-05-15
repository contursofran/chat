"use client";

import { BackButton } from "@/components/back-button";
import { User } from "@/components/user";
import { useSubscriptionStore } from "@/store/store";
import { usePathname } from "next/navigation";

export function Topbar() {
  const path = usePathname();
  const subscriptions = useSubscriptionStore((state) => state.subscriptions);
  const room = path.split("/")[2];
  const roomSubscription = subscriptions.find((sub) => sub.room === room);

  if (path === "/") {
    return null;
  }

  const matchRegexRoom = /room\/\d+/;

  return (
    <div className="flex h-14 bg-black border items-center ">
      <div className="flex mx-8 items-center justify-between w-full">
        <BackButton />
        {matchRegexRoom.test(path) ? (
          <div className="text-white text-lg font-bold">
            Room {room} ({roomSubscription?.subscribers} users)
          </div>
        ) : null}
        <User />
      </div>
    </div>
  );
}
