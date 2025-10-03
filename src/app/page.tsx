"use client";

import { useDashboard } from "@/app/context/DashboardContext";
import ToolCard from "@/components/dashboard/ToolCard";
import WorkflowCard from "@/components/dashboard/WorkflowCard";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardPage() {
  const { workflows, tools } = useDashboard();

  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full flex-col bg-white rounded-xl">
            
            <ScrollArea className="flex-1">
              <main className="p-6 md:p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Workflows
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                      {workflows.map((item) => (
                        <WorkflowCard key={item.title} data={item} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Tools
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                      {tools.map((item) => (
                        <ToolCard key={item.title} data={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </ScrollArea>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}