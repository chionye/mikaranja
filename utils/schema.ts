/** @format */

import z from "zod";

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Task Title must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "Task is required.",
  }),
  dueDate: z.date().optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
});

export const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  expiresInMins: z.number(),
});
