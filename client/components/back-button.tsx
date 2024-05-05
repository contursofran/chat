import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton() {
  return (
    <div className="z-20 flex h-fit w-24 shrink-0 -mt-4">
      <Link
        className="flex h-fit items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
        href={"/"}
      >
        <Button size="sm" variant="outline">
          <ChevronLeft className="mr-1 flex h-4 w-4" />
          <div className="text-sm font-medium">Back</div>
        </Button>
      </Link>
    </div>
  );
}
