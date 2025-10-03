"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Bell,
    Calendar as CalendarIcon,
    ChevronDown,
    MoreVertical,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-4 md:px-6">
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
   

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-4 md:flex">
          <Select defaultValue="jul-2025">
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Select month" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jul-2025">Jul 2025</SelectItem>
              <SelectItem value="aug-2025">Aug 2025</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="entity-1">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select entity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entity-1">Entity</SelectItem>
              <SelectItem value="entity-2">Entity 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}