/** @format */

"use client"; 

import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LucideEye, LucideEyeClosed } from "lucide-react";

const LoginPage = () => {
  const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      expiresInMins: 30,
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoginError(null);
    console.log("Form values submitted:", values);

    const result = await login(values.username, values.password);

    if (result.success) {
      router.push("/tasks");
    } else {
      setLoginError(result.error);
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-white'>
      <div className='border-[0.5] shadow border-black px-5 py-10 lg:w-1/3 sm:w-full'>
        <p className='text-center my-2 text-lg font-semibold'>Welcome Back</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            {loginError && (
              <p className='text-red-500 text-center text-sm mb-2'>
                {loginError}
              </p>
            )}
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Enter username'
                      type='text'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='relative w-full'>
                      <Input
                        placeholder='Enter password'
                        type={toggleShowPassword ? "text" : "password"}
                        className='pr-10'
                        {...field}
                      />
                      <Button
                        variant='ghost'
                        type='button'
                        className='absolute right-0 top-0 h-full px-3'
                        onClick={() => setToggleShowPassword((prev) => !prev)}>
                        {toggleShowPassword ? (
                          <LucideEyeClosed />
                        ) : (
                          <LucideEye />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-center'>
              <Button
                type='submit'
                className='cursor-pointer'
                disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}{" "}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
