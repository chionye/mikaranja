/** @format */

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucidePlus, LucideSearch } from "lucide-react";

import Link from "next/link";
import { Header, SideMenu } from "@/components/layout";
import { Input } from "@/components/ui/input";
import TaskList from "@/components/task/task-list";
import { TaskListProps } from "@/types"; // Make sure TaskListProps is defined correctly
import { useState, useEffect } from "react";
import { Requests } from "@/services/api/api-clients"; // Import Requests from api-clients
import ApiRoutes from "@/services/api/api-routes"; // Import ApiRoutes
import { useAuth } from "@/contexts/AuthContext"; // Import useAuth to check if authenticated

// Define the type for a todo item from DummyJSON
interface DummyJsonTodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

// Define the response structure for fetching multiple todos
interface DummyJsonTodosResponse {
  todos: DummyJsonTodo[];
  total: number;
  skip: number;
  limit: number;
}

export default function TasksPage() {
  const { user, isLoading: authLoading } = useAuth(); // Get user and auth loading state
  const [todos, setTodos] = useState<TaskListProps[]>([]); // State to store mapped todos
  const [loadingTodos, setLoadingTodos] = useState<boolean>(true); // Loading state for todos
  const [errorTodos, setErrorTodos] = useState<string | null>(null); // Error state for todos

  // This `tasks` array is hardcoded and can be removed once fetching works
  // const tasks = [
  //   {
  //     id: uuidv4(), // uuidv4 needs to be imported or handled, usually not directly from zod
  //     title: "Task 1",
  //     description: "Description",
  //     dueDate: "31/07/2025",
  //     priority: "low",
  //   },
  // ];

  useEffect(() => {
    // Only fetch if auth is not loading and user is authenticated
    if (!authLoading && !user) {
      // Optionally redirect to login if not authenticated
      // router.push("/login");
      setLoadingTodos(false); // No user, so no todos to load
      return;
    }

    if (user) {
      // Only fetch if user is authenticated
      const fetchTodos = async () => {
        setLoadingTodos(true);
        setErrorTodos(null); // Clear previous errors
        try {
          const response = await Requests.getTodo(ApiRoutes.FetchTodo); // Fetch all todos

          if (
            response.status === 200 &&
            response.data &&
            Array.isArray(response.data.todos)
          ) {
            const fetchedTodos: DummyJsonTodo[] = response.data.todos;

            const mappedTodos: TaskListProps[] = fetchedTodos.map((todo) => ({
              id: todo.id, // Use the todo's actual ID
              title: todo.todo, // 'todo' field from DummyJSON maps to 'title'
              description: `User ${todo.userId} - ${
                todo.completed ? "Completed" : "Pending"
              }`, // Example description
              dueDate: "N/A", // DummyJSON doesn't provide due dates, so set a default or 'N/A'
              priority: todo.completed ? "completed" : "pending", // Example priority based on completion
            }));
            setTodos(mappedTodos);
          } else {
            setErrorTodos(
              "Failed to fetch todos: Unexpected response structure."
            );
          }
        } catch (error: any) {
          console.error("Error fetching todos:", error);
          setErrorTodos(
            error?.response?.data?.message || "Failed to fetch tasks."
          );
        } finally {
          setLoadingTodos(false);
        }
      };

      fetchTodos();
    }
  }, [user, authLoading]);

  return (
    <div className='bg-blue-50 min-h-screen relative'>
      <Header />
      <SideMenu />
      <main className='mt-16 px-5 py-5'>
        <div className='bg-white flex items-center px-3 border border-black'>
          <LucideSearch />
          <Input
            className='border-0 focus-visible:ring-ring/0'
            placeholder='Type your search term here...'
          />
        </div>
        <div className='my-5'>
          {loadingTodos ? (
            <p className='text-center text-gray-600'>Loading tasks...</p>
          ) : errorTodos ? (
            <p className='text-center text-red-500'>{errorTodos}</p>
          ) : todos.length === 0 ? (
            <p className='text-center text-gray-600'>No tasks found.</p>
          ) : (
            todos.map(
              (
                item
              ) => <TaskList key={item.id} {...item} />
            )
          )}
        </div>
      </main>
    </div>
  );
}
