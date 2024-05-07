"use client";

import { BackButton } from "@/components/back-button";
import { User } from "@/components/user";
import { usePathname } from "next/navigation";

export function Topbar() {
  const path = usePathname();
  return (
    <div className="flex h-14 bg-black border items-center ">
      <div className="flex mx-8 items-center justify-between w-full">
        <BackButton />
        <h1 className="text-lg font-medium text-white">
          {path === "/" ? "Select a room" : "Room"}
        </h1>
        <User />
      </div>
    </div>
  );
}
