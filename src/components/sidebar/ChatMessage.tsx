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
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image
                   src="/company-logo.png"
                   alt="Company Logo"
                   width={28}
                   height={28}
                   className="rounded-sm"
                 />
          <div className="font-semibold">Fincore</div>
        </div>
        <div className="text-sm text-neutral-300">
          <p className="mb-1 text-xs text-neutral-400">
            Thought for 13 seconds
          </p>
          {text}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl p-3 text-sm",
        "bg-[#262D37] text-neutral-200"
      )}
    >
      <p>{text}</p>
    </div>
  );
}