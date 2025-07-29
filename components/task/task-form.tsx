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
import { Input } from "@/components/ui/input";
import { formSchema } from "@/utils/schema";
import { Textarea } from "../ui/textarea";
import { DatePickerComponent } from "../elements/date-picker";

export function TaskForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: undefined,
      priority: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <div className='border-b border-[#e6e6e6] py-2'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='text-xl font-semibold placeholder:text-xl border-0 shadow-none focus-visible:ring-0 px-0'
                    placeholder='Give us a cool title'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className='border-0 shadow-none font-semibold focus-visible:ring-ring/0 px-0'
                    placeholder='Type your description here.'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col lg:flex-row items-stretch justify-between gap-4'>
          <div className='flex flex-col sm:flex-row gap-2 w-full lg:w-3/5'>
            <div className='w-full sm:w-2/3'>
              <FormField
                control={form.control}
                name='dueDate'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <DatePickerComponent label={"due date"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='w-full lg:w-1/5'>
            <Button className='w-full h-full' type='submit'>
              Create task
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
