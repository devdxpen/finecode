"use client";

import { useDashboard } from "@/app/context/DashboardContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendHorizonal } from "lucide-react";
import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";
import ChatMessage from "./ChatMessage";

export default function Sidebar() {
  const { chatMessages, addChatMessage } = useDashboard();
  const [message, setMessage] = React.useState("");
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    addChatMessage(message);
    setMessage("");
  };

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector("div");
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [chatMessages]);

  return (
    <div className="flex h-full flex-col bg-[#1D2839] text-white">
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
          <div className="flex flex-col gap-6">
            {chatMessages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="border-t border-neutral-700 bg-[#111827] p-4">
        <form onSubmit={handleSubmit} className="relative">
          <TextareaAutosize
            minRows={1}
            maxRows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Ask your AI co-worker..."
            className="w-full resize-none rounded-lg bg-[#262D37] py-3 pl-4 pr-12 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute bottom-1.5 right-1.5 h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-neutral-600"
            disabled={!message.trim()}
          >
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}