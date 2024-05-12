"use client";

import { BackButton } from "@/components/back-button";
import { User } from "@/components/user";
import { usePathname } from "next/navigation";

export function Topbar() {
  const path = usePathname();

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
            Room {path.split("/")[2]}
          </div>
        ) : null}
        <User />
      </div>
    </div>
  );
}
