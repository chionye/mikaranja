
"use client";

import { TaskContextType, TaskListProps } from "@/types";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Requests } from "@/services/api";
import ApiRoutes from "@/services/api/api-routes";

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TaskListProps[]>([]);

  // Load from localStorage on initial mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("tasks");
      if (stored) {
        const parsedTodos: TaskListProps[] = JSON.parse(stored);
        setTodos(parsedTodos);
        console.log("TaskContext: Loaded tasks from localStorage.");
      }
    } catch (error) {
      console.error(
        "TaskContext: Failed to parse tasks from localStorage",
        error
      );
      localStorage.removeItem("tasks");
    }
  }, []);

  const addOrUpdateTask = useCallback((task: TaskListProps) => {
    setTodos((prev) => {
      const exists = prev.find((t) => t.id === task.id);
      let updatedTodos;
      if (exists) {
        updatedTodos = prev.map((t) => (t.id === task.id ? task : t));
        console.log("TaskContext: Task updated, localStorage updated.");
      } else {
        updatedTodos = [task, ...prev];
      }
      localStorage.setItem("tasks", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const syncTodos = useCallback((apiTodos: TaskListProps[]) => {
    setTodos((prevLocalTodos) => {
      const updatedTodosMap = new Map<number, TaskListProps>();

      prevLocalTodos.forEach((todo) => updatedTodosMap.set(todo.id, todo));
      apiTodos.forEach((apiTodo) => updatedTodosMap.set(apiTodo.id, apiTodo));

      const mergedTodos = Array.from(updatedTodosMap.values()).sort(
        (a, b) => a.id - b.id
      );

      localStorage.setItem("tasks", JSON.stringify(mergedTodos));
      console.log("TaskContext: Synced with API data, localStorage updated.");
      return mergedTodos;
    });
  }, []);

  // deleteTask function
  const deleteTask = useCallback(async (id: number) => {
    console.log(
      `TaskContext: Optimistically deleting task ID: ${id} from local state and localStorage.`
    );
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(filteredTodos));
      return filteredTodos;
    });

    const isPotentiallyApiTask = id <= 200;

    if (!isPotentiallyApiTask) {
      console.log(
        `TaskContext: Task ID: ${id} is a local-only task. Skipping API delete.`
      );
      return;
    }

    try {
      console.log(`TaskContext: Attempting to delete task ID: ${id} from API.`);
      const response = await Requests.deleteTodo(ApiRoutes.UpdateTodo(id));

      if (response.status === 200) {
        console.log(
          `TaskContext: Task ID: ${id} successfully deleted from API.`
        );
      } else {
        console.error(
          `TaskContext: API delete failed for task ID: ${id}. Status: ${response.status}`,
          response.data
        );
      }
    } catch (error: any) {
      console.error(
        `TaskContext: Error during API delete request for task ID: ${id}.`,
        error
      );
    }
  }, []);

  const contextValue = {
    todos,
    setTodos,
    addOrUpdateTask,
    syncTodos,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
