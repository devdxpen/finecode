"use client";

import { mockChatMessages, mockTools, mockWorkflows } from "@/constants/data";
import { ChatMessage, DashboardContextType, ToolCardData, WorkflowCardData } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [workflows, setWorkflows] =
    useState<WorkflowCardData[]>(mockWorkflows);
  const [tools, setTools] = useState<ToolCardData[]>(mockTools);
  const [chatMessages, setChatMessages] =
    useState<ChatMessage[]>(mockChatMessages);

  const addChatMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text,
      sender: "user",
    };
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <DashboardContext.Provider
      value={{ workflows, tools, chatMessages, addChatMessage }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}