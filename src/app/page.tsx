"use client";

import ToolCard from "@/components/dashboard/ToolCard";
import WorkflowCard from "@/components/dashboard/WorkflowCard";
import MainHeader from "@/components/layout/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useDashboard } from "@/context/DashboardContext";

export default function DashboardPage() {
  const { workflows, tools } = useDashboard();

  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full mx-auto">
        <ResizablePanel defaultSize={25} minSize={20} maxSize={35}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle={false} />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full flex-col">
            <MainHeader />
             <main className="p-6 md:p-8 bg-white rounded-xl h-full flex flex-col">
                <div className="space-y-8 flex-1">
                  <div>
                    <p className="font-medium uppercase text-primary-text">
                      Workflows
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                      {workflows.map((item) => (
                        <WorkflowCard key={item.title} data={item} />
                      ))}
                    </div>
                  </div>
                  <div>
                     <p className="font-medium uppercase text-primary-text">
                      Tools
                     </p>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                      {tools.map((item) => (
                        <ToolCard key={item.title} data={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}