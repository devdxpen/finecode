"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function MainHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 bg-background px-6">
     <div className="flex items-center gap-3">
        <Select defaultValue="jul-2025" >
        <SelectTrigger variant="dark-pill">
          <div className="flex items-center gap-2">
            <SelectValue placeholder="Select month" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="jul-2025">Jul 2025</SelectItem>
          <SelectItem value="aug-2025">Aug 2025</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="entity-1">
        <SelectTrigger variant="dark-pill">
          <SelectValue placeholder="Select entity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="entity-1">Entity</SelectItem>
          <SelectItem value="entity-2">Entity 2</SelectItem>
        </SelectContent>
      </Select>
     </div>
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="white10"
          size="iconlg"
         className=" rounded-full"
        >
        <div className="bg-white/10 rounded-full p-2">
            <MoreVertical className="h-5 w-5" />
        </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </header>
  );
}