"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export function BackButton() {
  const path = usePathname();

  if (path === "/") {
    return <div className="w-16" />;
  }

  return (
    <div className="flex h-fit w-16 shrink-0 ">
      <Link
        className="flex h-fit items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
        href={"/room"}
      >
        <div className="flex items-center text-gray-200">
          <ChevronLeft className="mr-1 flex h-4 w-4" />
          <div className="text-sm font-medium">Back</div>
        </div>
      </Link>
    </div>
  );
}
