/** @format */

"use client";

import {
  LucideChevronRight,
  LucideSearch,
  LucidePlus,
  LucideEdit,
  LucideTrash2,
} from "lucide-react";
import { Header, SideMenu } from "@/components/layout";
import { Input } from "@/components/ui/input";
import TaskList from "@/components/task/task-list";
import { DummyJsonTodosResponse, TaskListProps } from "@/types";
import { useState, useEffect, useCallback, useMemo } from "react";
import ApiRoutes from "@/services/api/api-routes";
import { useAuth } from "@/contexts/AuthContext";
import { Requests } from "@/services/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTaskContext } from "@/contexts/TaskContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TaskForm } from "@/components/task/task-form";

export default function Page() {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const { todos, syncTodos, deleteTask } = useTaskContext();

  const [loadingTodos, setLoadingTodos] = useState<boolean>(true);
  const [errorTodos, setErrorTodos] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalApiItems, setTotalApiItems] = useState<number>(0);
  const ITEMS_PER_PAGE = 10;

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<TaskListProps | undefined>(
    undefined
  );

  const fetchTodos = useCallback(async () => {
    if (!user) {
      setLoadingTodos(false);
      return;
    }

    setLoadingTodos(true);
    setErrorTodos(null);
    try {
      const skip = (currentPage - 1) * ITEMS_PER_PAGE;
      const url = ApiRoutes.FetchTodo(ITEMS_PER_PAGE, skip);

      console.log(
        `TasksPage: Fetching todos from API for page ${currentPage}.`
      );
      const response = await Requests.getTodo<DummyJsonTodosResponse>(url);

      if (
        response.status === 200 &&
        response.data &&
        Array.isArray(response.data.todos)
      ) {
        const fetchedApiTodos: TaskListProps[] = response.data.todos;
        syncTodos(fetchedApiTodos);
        setTotalApiItems(response.data.total);
        console.log("TasksPage: Todos fetched and synced successfully.");
      } else {
        setErrorTodos("Failed to fetch todos: Unexpected response structure.");
        console.error(
          "TasksPage: Unexpected API response structure:",
          response
        );
      }
    } catch (error: any) {
      console.error("TasksPage: Error fetching todos:", error);
      setErrorTodos(error?.response?.data?.message || "Failed to fetch tasks.");
    } finally {
      setLoadingTodos(false);
    }
  }, [user, currentPage, ITEMS_PER_PAGE, syncTodos]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
      return;
    }

    if (user) {
      fetchTodos();
    }
  }, [user, authLoading, currentPage, fetchTodos, router]);

  const filteredTodos = useMemo(() => {
    if (!searchTerm) {
      return todos;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return todos.filter((todo) =>
      todo.todo.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [todos, searchTerm]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalApiItems / ITEMS_PER_PAGE);
  }, [totalApiItems, ITEMS_PER_PAGE]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setSearchTerm("");
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setSearchTerm("");
    }
  };

  const handleAddTaskClick = () => {
    setTaskToEdit(undefined);
    setIsFormModalOpen(true);
  };

  const handleEditTaskClick = (task: TaskListProps) => {
    setTaskToEdit(task);
    setIsFormModalOpen(true);
  };

  const handleFormSubmitSuccess = useCallback(() => {
    setIsFormModalOpen(false);
    setTaskToEdit(undefined);
  }, []);

  const handleDeleteClick = (todo: TaskListProps) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(todo.id);
    }
  };

  return (
    <div className='bg-blue-50 min-h-screen relative'>
      <Header />
      <SideMenu />
      <main className='mt-16 px-5 py-5'>
        <div className='text-lg font-semibold text-center py-2'>
          Hi{" "}
          {user?.firstName && user?.lastName
            ? `${user.firstName} ${user.lastName}`
            : user?.username || "Guest"}
        </div>
        <div className='bg-white flex items-center px-3 border border-black mb-4'>
          <LucideSearch />
          <Input
            className='border-0 focus-visible:ring-ring/0'
            placeholder='Type your search term here...'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>

        <div className='flex justify-end mb-4'>
          <Button
            onClick={handleAddTaskClick}
            variant={"ghost"}
            className='cursor-pointer'>
            <span className='bg-black p-1 rounded-full text-white'>
              <LucidePlus />
            </span>{" "}
            <span className='capitalize text-[16px]'>Add Task</span>
          </Button>
        </div>

        <div className='my-5'>
          {loadingTodos ? (
            <p className='text-center text-gray-600'>Loading tasks...</p>
          ) : errorTodos ? (
            <p className='text-center text-red-500'>{errorTodos}</p>
          ) : filteredTodos.length === 0 && !loadingTodos ? (
            <p className='text-center text-gray-600'>
              {searchTerm
                ? `No matching tasks found for "${searchTerm}".`
                : "No tasks found on this page."}
            </p>
          ) : (
            filteredTodos.map((item) => (
              <div key={item.id} className='flex justify-between'>
                <div className='w-[80%]'>
                  <TaskList {...item} />
                </div>

                <div>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => handleEditTaskClick(item)}>
                    <LucideEdit className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => handleDeleteClick(item)}>
                    <LucideTrash2 className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className='flex justify-center items-center space-x-2 mt-8'>
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1 || loadingTodos}>
              <LucideChevronRight className='rotate-180' />
            </Button>
            <span className='text-gray-700'>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages || loadingTodos}>
              <LucideChevronRight />
            </Button>
          </div>
        )}
      </main>

      <Dialog open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <TaskForm
            initialData={taskToEdit}
            onSuccess={handleFormSubmitSuccess}
            onCancel={() => setIsFormModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
