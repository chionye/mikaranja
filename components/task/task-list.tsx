/** @format */

import React from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import {
  LucideCalendar1,
  LucideClock1,
  LucideFlag,
  LucidePenSquare,
  LucideTrash,
  LucideTrash2,
} from "lucide-react";
import { TaskListProps } from "@/types";
import { TaskModal } from "./task-modal";

const TaskList = (list: TaskListProps) => {
  return (
    <div
      className='flex items-start justify-between border-b border-[#e6e6e6] py-2'
      key={list.id}>
      <div className='flex gap-2'>
        <div>
          <Checkbox id='terms-2' defaultChecked className='mt-1' />
        </div>
        <div className='grid'>
          <Label htmlFor='terms-2'>{list.title}</Label>
          <p className='text-muted-foreground text-sm'>{list.description}</p>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1 text-muted-foreground '>
              <LucideCalendar1 size={14} />
              <p className='text-sm'>{list.dueDate}</p>
            </div>
            <div className='flex items-center gap-1 text-muted-foreground '>
              <LucideFlag size={14} />
              <p className='text-sm'>{list.priority}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <TaskModal
          button={
            <Button variant={"ghost"} className='cursor-pointer'>
              <LucidePenSquare />
            </Button>
          }
        />
        <Button variant={"ghost"} className='cursor-pointer'>
          <LucideTrash2 />
        </Button>
      </div>
    </div>
  );
};

export default TaskList;
