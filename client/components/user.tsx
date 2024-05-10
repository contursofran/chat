"use client";

import { useUserStore } from "@/store/store";

export function User() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="flex gap-2 items-center text-xs font-medium">
      <div className="rounded-full text-pretty bg-neutral-700 w-7 h-7" />
      <p className="text-ellipsis overflow-hidden w-12">{user}</p>
    </div>
  );
}
