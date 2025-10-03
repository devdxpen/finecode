import * as React from "react";
import type { WorkflowCardData } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WorkflowCardProps {
  data: WorkflowCardData;
}

export default function WorkflowCard({ data }: WorkflowCardProps) {
  const { icon: Icon, title, description, stats, iconBgColor } = data;

  return (
    <Card className="flex h-full transform flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg",
              iconBgColor
            )}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <div>
          <CardTitle className="mb-1 text-base">{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{stats}</p>
      </CardContent>
    </Card>
  );
}