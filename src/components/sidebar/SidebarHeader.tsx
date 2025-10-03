"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="flex h-16 items-center justify-between border-b border-neutral-700 px-4">
      <div className="flex items-center gap-2">
        <Image
          src="/images/fincore.png"
          alt="Company Logo"
          width={42}
          height={42}
          className="rounded-sm size-[42px] object-cover"
        />
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="lg"
              className="text-sm !p-0 gap-1 font-semibold text-white bg-transparent focus:outline-none focus:ring-0 active:outline-none active:ring-0 hover:outline-none hover:ring-0"
            >
              Company Name <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Company A</DropdownMenuItem>
            <DropdownMenuItem>Company B</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="iconlg"
          className="relative rounded-full text-neutral-400 hover:bg-neutral-700 hover:text-white p-0"
        >
          <Bell size={20} className="h-5 w-5" />
          <span className="absolute right-2 top-2 flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
          </span>
        </Button>
        <Avatar className="size-[42px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}