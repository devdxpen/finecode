import { cn } from "@/lib/utils";
import { ChatMessage as ChatMessageType } from "@/types";
import Image from "next/image";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const { sender, text } = message;

  if (sender === "ai") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-black">
            <Image
              src="/images/fincore.png"
              alt="Company Logo"
              width={20}
              height={20}
            />
          </div>
          <div className="font-semibold text-white">Fincore</div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-neutral-300">
          <p className="text-xs text-neutral-400">Thought for 13 seconds</p>
          <p>{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("rounded-xl bg-[#374151] p-3 text-sm text-neutral-200")}>
      <p>{text}</p>
    </div>
  );
}