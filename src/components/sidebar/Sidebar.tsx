"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useDashboard } from "@/context/DashboardContext";
import { cn } from "@/lib/utils";
import { SendHorizonal } from "lucide-react";
import * as React from "react";
import ChatMessage from "./ChatMessage";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  const { chatMessages, addChatMessage } = useDashboard();
  const [message, setMessage] = React.useState("");
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isScrollable, setIsScrollable] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    addChatMessage(message);
    setMessage("");
  };

  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const hasScrollbar = textarea.scrollHeight > textarea.clientHeight;
      setIsScrollable(hasScrollbar);
    }
  }, [message]);

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector("div");
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [chatMessages]);

  return (
    <div className="flex h-full flex-col bg-background text-white">
      <SidebarHeader />
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
          <div className="flex flex-col gap-6">
            {chatMessages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="p-4">
       <form
    onSubmit={handleSubmit}
    className={cn(
      "relative",
      isScrollable &&
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-12 after:bg-gradient-to-t after:from-[#161616] after:to-transparent after:pointer-events-none after:rounded-b-[26px] border border-white/10 rounded-[26px]",
    )}
  >
    <Textarea
      ref={textareaRef}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Ask your AI co-worker..."
      className="w-full resize-none rounded-[26px] bg-transparent py-3.5 pl-4 pr-12 text-sm text-white placeholder:text-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[52px] max-h-[332px] overflow-y-auto"
    />
    <Button
      type="submit"
      size="iconxl"
      className="absolute right-1 bottom-1 z-10 rounded-full bg-link hover:bg-blue-600"
    >
      <SendHorizonal className="h-4 w-4 -rotate-45" />
    </Button>
  </form>
      </div>
    </div>
  );
}