
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TaskForm } from "./task-form";
import { TaskListProps, TaskFormProps } from "@/types";
import { useState } from "react";

export const TaskModal = ({
  button,
  data,
  onSuccess, 
  onCancel, 
}: {
  button: React.ReactNode;
  data?: TaskListProps;
  onSuccess?: TaskFormProps['onSuccess'];
  onCancel?: TaskFormProps['onCancel']; 
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSuccessAndClose = () => {
    setIsOpen(false);
    if (onSuccess) {
      onSuccess(); 
    }
  };

  const handleCancelAndClose = () => {
    setIsOpen(false);
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <TaskForm
          initialData={data}
          onSuccess={handleSuccessAndClose}
          onCancel={handleCancelAndClose}
        />
      </DialogContent>
    </Dialog>
  );
};