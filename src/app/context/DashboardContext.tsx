"use client";

import type {
  ChatMessage,
  DashboardContextType,
  ToolCardData,
  WorkflowCardData,
} from "@/types";
import {
  AreaChart,
  ClipboardList,
  Mail,
  MessageSquare,
  Search,
  ShieldAlert,
} from "lucide-react";
import * as React from "react";

const mockWorkflows: WorkflowCardData[] = [
  {
    icon: AreaChart,
    title: "Flux Summary",
    description: "5 major variances detected vs Gl",
    stats: "",
    iconBgColor: "bg-orange-400",
  },
  {
    icon: Search,
    title: "Variance Explorer",
    description: "Top 3 flagged accounts with % or",
    stats: "",
    iconBgColor: "bg-blue-500",
  },
  {
    icon: ShieldAlert,
    title: "Anomaly Analysis",
    description: "2 unusual transaction patterns",
    stats: "",
    iconBgColor: "bg-red-500",
  },
  {
    icon: ClipboardList,
    title: "Workflow Tracker",
    description: "3/7 variances reviewed",
    stats: "",
    iconBgColor: "bg-purple-500",
  },
  {
    icon: MessageSquare,
    title: "Collaboration Notes",
    description: "Last 2 unresolved comments",
    stats: "",
    iconBgColor: "bg-gray-400",
  },
];

const mockTools: ToolCardData[] = [
  {
    icon: Mail,
    title: "Email Draft",
    description: "Last 2 unresolved comments",
    iconColor: "text-red-500",
  },
  {
    icon: MessageSquare,
    title: "Slack Draft",
    description: "Last 2 unresolved comments",
    iconColor: "text-green-500",
  },
];

const mockChatMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "user",
    text: "Hello, I'd like to understand our financial performance this month. Can you help me?",
  },
  {
    id: 2,
    sender: "ai",
    text: "Hello! I'm your AI Co-Worker. I can help you explore financial data, explain trends, and answer questions about your reports. What would you like to know?",
  },
  {
    id: 3,
    sender: "user",
    text: "What are the main drivers of revenue growth this month?",
  },
];

const DashboardContext = React.createContext<DashboardContextType | undefined>(
  undefined
);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [workflows] = React.useState<WorkflowCardData[]>(mockWorkflows);
  const [tools] = React.useState<ToolCardData[]>(mockTools);
  const [chatMessages] = React.useState<ChatMessage[]>(mockChatMessages);

  const value = { workflows, tools, chatMessages };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = React.useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}