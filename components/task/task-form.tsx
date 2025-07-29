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

    try {
      let response;
      if (isEditMode && initialData?.id) {
        console.log(
          "TaskForm: Sending PATCH request to update todo:",
          initialData.id
        );
        response = await Requests.patchTodo(
          ApiRoutes.UpdateTodo(initialData.id),
          {
            data: {
              todo: values.todo,
              completed: initialData.completed,
            },
          }
        );
      } else {
        console.log("TaskForm: Sending POST request to add new todo.");
        response = await Requests.postTodo(ApiRoutes.CreateTodo, {
          data: { todo: values.todo, completed: false, userId: user.id },
        });
      }

      if (response.status === 200 || response.status === 201) {
        form.reset();
        console.log("TaskForm: API operation successful. Data from API:", response.data);
        addOrUpdateTask(response.data as TaskListProps);

        if (onSuccess) {
          console.log("TaskForm: Calling onSuccess callback.");
          onSuccess();
        }
      } else {
        setSubmitError(
          `Failed to ${
            isEditMode ? "update" : "add"
          } task: Unexpected response status ${response.status}`
        );
        console.error(
          "TaskForm: Unexpected API response status:",
          response.status,
          response.data
        );
      }
    } catch (error: any) {
      console.error(
        `TaskForm: Error during API call for ${isEditMode ? "update" : "add"}:`,
        error
      );

      if (!isEditMode && user?.id) {
        const fallbackTask: TaskListProps = {
          id: Math.floor(Math.random() * 1000000) + 20000,
          todo: values.todo,
          completed: false,
          userId: user.id,
        };
        console.warn("TaskForm: Saving task locally due to API failure:", fallbackTask);
        addOrUpdateTask(fallbackTask);
        if (onSuccess) {
          onSuccess();
        }
      }

      setSubmitError(
        error?.response?.data?.message ||
          `Failed to ${isEditMode ? "update" : "add"} task. Please try again.`
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