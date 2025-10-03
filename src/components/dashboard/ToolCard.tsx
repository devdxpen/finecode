import * as React from "react";
import type { ToolCardData } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ToolCardProps {   
  data: ToolCardData;
}

export default function ToolCard({ data }: ToolCardProps) {
  const { icon: Icon, title, description, iconColor } = data;

  return (
    <Card className="flex h-full transform flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <Icon className={cn("h-6 w-6", iconColor)} />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <div>
          <CardTitle className="mb-1 text-base">{title}</CardTitle>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}