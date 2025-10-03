"use client";
import ToolCard from "@/components/dashboard/ToolCard";
import WorkflowCard from "@/components/dashboard/WorkflowCard";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useDashboard } from "./context/DashboardContext";

export default function DashboardPage() {
  const { workflows, tools } = useDashboard();

  return (
     <div className="flex h-screen w-full flex-col bg-neutral-50">
      <Header />
      <div className="flex-1 overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={25} minSize={20} maxSize={35}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <main className="h-full overflow-y-auto p-6 md:p-8">
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
        </ResizablePanel>
      </ResizablePanelGroup>
      </div>
    </div>
  );
}