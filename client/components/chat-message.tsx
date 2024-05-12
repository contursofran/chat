import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { formatTime, uppercaseFirstLetter } from "@/lib/utils";
import { Message } from "@/types";

interface ChatMessageProps {
  message: Message;
  side: "left" | "right";
}

export function ChatMessage({ message, side }: ChatMessageProps) {
  if (message.sender === undefined) return null;

  return side === "right" ? (
    <div className={"flex space-x-3 justify-end"}>
      <div className="flex flex-col gap-2 items-end">
        <div className="relative w-fit max-w-[290px] break-words gap-[0.15rem] flex flex-col rounded-lg border  bg-white p-3 shadow-sm dark:bg-black">
          <p className="text-sm text-neutral-400">
            {uppercaseFirstLetter(message.sender)}
          </p>
          <p className="text-gray-900 dark:text-gray-50">{message.content}</p>
        </div>
        <span className="text-xs px-2 text-neutral-400">
          {formatTime(message.date)}
        </span>
      </div>
      <Avatar>
        <AvatarImage alt="Avatar" />
        <AvatarFallback>
          {uppercaseFirstLetter(message.sender.split("")[0])}
        </AvatarFallback>
      </Avatar>
    </div>
  ) : (
    <div className={"flex space-x-3 "}>
      <Avatar>
        <AvatarImage alt="Avatar" />
        <AvatarFallback>
          {uppercaseFirstLetter(message.sender.split("")[0])}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="relative w-fit max-w-[290px] break-words gap-[0.15rem] flex flex-col rounded-lg border  bg-white p-3 shadow-sm dark:bg-black">
          <p className="text-sm text-neutral-400">
            {uppercaseFirstLetter(message.sender)}
          </p>
          <p className="text-gray-900 dark:text-gray-50">{message.content}</p>
        </div>
        <span className="text-xs px-2 text-neutral-400">
          {formatTime(message.date)}
        </span>
      </div>
    </div>
  );
}
