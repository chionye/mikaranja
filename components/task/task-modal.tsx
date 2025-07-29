/** @format */

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TaskForm } from "./task-form";

export const TaskModal = ({ button }: { button: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <TaskForm />
      </DialogContent>
    </Dialog>
  );
};
