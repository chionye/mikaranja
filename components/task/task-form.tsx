/** @format */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/utils/schema";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { Requests } from "@/services/api";
import ApiRoutes from "@/services/api/api-routes";
import { useAuth } from "@/contexts/AuthContext";
import { TaskFormProps, TaskListProps } from "@/types";
import { useTaskContext } from "@/contexts/TaskContext";

export function TaskForm({ initialData, onSuccess, onCancel }: TaskFormProps) {
  const { user } = useAuth();
  const { addOrUpdateTask } = useTaskContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isEditMode = !!initialData?.id;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: initialData?.todo || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitError(null);

    if (!user?.id) {
      setSubmitError("User not authenticated. Please log in again.");
      setIsSubmitting(false);
      return;
    }

    let taskToUpdateLocally: TaskListProps; 

    try {
      if (isEditMode && initialData?.id) {
        console.log("TaskForm: Handling edit for task ID:", initialData.id);
        taskToUpdateLocally = {
          ...initialData,
          todo: values.todo,
        };

        try {
          const response = await Requests.patchTodo(
            ApiRoutes.UpdateTodo(initialData.id),
            {
              data: {
                todo: values.todo,
                completed: initialData.completed,
              },
            }
          );

          if (response.status === 200) {
            console.log(
              "TaskForm: API update successful. Data:",
              response.data
            );
            taskToUpdateLocally = response.data as TaskListProps;
          } else {
            console.warn(
              "TaskForm: API update failed with status",
              response.status,
              ". Updating locally."
            );
          }
        } catch (apiError) {
          console.error(
            "TaskForm: Error during API PATCH:",
            apiError,
            ". Updating locally."
          );
          setSubmitError("Failed to update task on server. Updated locally.");
        }
      } else {
        taskToUpdateLocally = {
          id: Date.now() + Math.floor(Math.random() * 10000),
          todo: values.todo,
          completed: false,
          userId: user.id,
        };

        try {
          const response = await Requests.postTodo(ApiRoutes.CreateTodo, {
            data: { todo: values.todo, completed: false, userId: user.id },
          });

          if (response.status === 201) {
            console.log("TaskForm: API add successful. Data:", response.data);
            taskToUpdateLocally = response.data as TaskListProps; 
          } else {
            console.warn(
              "TaskForm: API add failed with status",
              response.status,
              ". Saving locally."
            );
            setSubmitError("Failed to add task to server. Saved locally.");
          }
        } catch (apiError) {
          console.error(
            "TaskForm: Error during API POST:",
            apiError,
            ". Saving locally."
          );
          setSubmitError("Failed to add task to server. Saved locally.");
        }
      }

      addOrUpdateTask(taskToUpdateLocally);
      form.reset(); 
      if (onSuccess) {
        onSuccess();
      }
    } catch (finalError: any) {
      console.error("TaskForm: Unexpected error in onSubmit:", finalError);
      setSubmitError(
        finalError?.response?.data?.message ||
          `An unexpected error occurred. Please try again.`
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        {submitError && (
          <p className='text-red-500 text-sm text-center'>{submitError}</p>
        )}
        <div className='border-b border-[#e6e6e6] py-2'>
          <FormField
            control={form.control}
            name='todo'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className='border-0 shadow-none font-semibold focus-visible:ring-ring/0 px-0'
                    placeholder="What's on your todo list today?"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex justify-end space-x-2'>
          {isEditMode && onCancel && (
            <Button
              type='button'
              variant='outline'
              onClick={onCancel}
              disabled={isSubmitting}>
              Cancel
            </Button>
          )}
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting
              ? "Saving..."
              : isEditMode
              ? "Save Changes"
              : "Add Task"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
