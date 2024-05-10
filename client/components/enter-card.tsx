"use client";

import { useUserStore } from "@/store/store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

export function EnterCard() {
  const setUser = useUserStore((state) => state.setUser);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnter = () => {
    setUser(inputRef.current?.value || "User");
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Enter your name</CardTitle>
        <CardDescription>Please enter a name.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Name</Label>
          <Input
            ref={inputRef}
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/room">
          <Button onClick={handleEnter} className="w-full">
            Enter
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
