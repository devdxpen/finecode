"use client";

import * as React from "react";
import { SendHorizonal } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDashboard } from "@/app/context/DashboardContext";
import ChatMessage from "../sidebar/ChatMessage";

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
      const scrollableView = scrollAreaRef.current.querySelector('div');
      if (scrollableView) {
        scrollableView.scrollTop = scrollableView.scrollHeight;
      }
    }
  }, [chatMessages]);

  return (
    <div className="flex h-full flex-col bg-[#111111] text-white">
      <div className="flex-1 overflow-y-auto">
        <ScrollArea className="h-full px-4 pt-6" ref={scrollAreaRef}>
          <div className="space-y-6">
            {chatMessages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="border-t border-neutral-700 px-4 pb-4 pt-2">
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
            className="w-full resize-none overflow-y-auto rounded-lg bg-[#1e1e1e] py-3 pl-4 pr-12 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-neutral-600"
            disabled={!message.trim()}
          >
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}