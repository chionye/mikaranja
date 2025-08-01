
import React from "react";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "../ui/checkbox";
import { LucideFlag } from "lucide-react";
import { TaskListProps } from "@/types";
import { useTaskContext } from "@/contexts/TaskContext";
import { Requests } from "@/services/api";
import ApiRoutes from "@/services/api/api-routes";

const TaskList = (todo: TaskListProps) => {
  const { addOrUpdateTask } = useTaskContext();

  const handleCheckboxChange = async (newCompletedStatus: boolean) => {
    const updatedTaskLocally: TaskListProps = {
      ...todo,
      completed: newCompletedStatus,
    };

    addOrUpdateTask(updatedTaskLocally);
    const isPotentiallyApiTask = todo.id <= 200;

    if (!isPotentiallyApiTask) {
      console.log(
        "TaskList: Task has a local ID. Skipping API update for checkbox."
      );
      return;
    }

    try {
      const response = await Requests.patchTodo(ApiRoutes.UpdateTodo(todo.id), {
        data: {
          completed: newCompletedStatus,
        },
      });

      if (response.status === 200) {
        console.log(
          "TaskList: Task updated successfully on API:",
          response.data
        );
        addOrUpdateTask(response.data);
      } else {
        console.error(
          `TaskList: API update failed for task ID ${todo.id}. Status: ${response.status}`,
          response.data
        );
      }
    } catch (error) {
      console.error(
        `TaskList: Error during API patch for task ID ${todo.id}:`,
        error
      );
    }
  };

  return (
    <div
      className='flex items-start justify-between border-b border-[#e6e6e6] py-2 w-full'
      key={todo.id}>
      <div className='flex gap-2'>
        <div>
          <Checkbox
            id={`checkbox-${todo.id}`}
            checked={todo.completed}
            onCheckedChange={handleCheckboxChange}
            className='mt-1'
          />
        </div>
        <div className='grid'>
          <Label
            htmlFor={`checkbox-${todo.id}`}
            className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.todo}
          </Label>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1 text-muted-foreground '>
              <LucideFlag size={14} />
              <p className='text-sm'>
                {todo.completed ? "Completed" : "Pending"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
