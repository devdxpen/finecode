import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface WorkflowCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  iconBgColor: string;
}

export interface ToolCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: "ai" | "user";
}

export interface DashboardContextType {
  workflows: WorkflowCardData[];
  tools: ToolCardData[];
  chatMessages: ChatMessage[];
}