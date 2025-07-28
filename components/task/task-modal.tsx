import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { LucidePlus } from "lucide-react"
import { TaskForm } from "./task-form"

  export const TaskModal = () => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button size={'sm'}>
                    <LucidePlus /> Add Task
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>New Task</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
                <TaskForm />
            </DialogContent>
        </Dialog>
    )
  }