"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { uppercaseFirstLetter } from "@/lib/utils";
import { useUserStore } from "@/store/store";

export function User() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex gap-2 items-center text-xs font-medium">
      <Avatar>
        <AvatarImage alt="Avatar" />
        <AvatarFallback>
          {user && uppercaseFirstLetter(user.split("")[0])}
        </AvatarFallback>
      </Avatar>
      <p className="text-ellipsis overflow-hidden w-12">{user}</p>
    </div>
  );
}
