/** @format */

import z from "zod";

export const formSchema = z.object({
  todo: z.string().min(1, {
    message: "You must enter a todo item.",
  }),
  completed: z.boolean().default(false).optional(),
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
