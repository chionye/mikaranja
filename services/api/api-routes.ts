/** @format */

export default class ApiRoutes {
  static BASE_URL_DEV: string = "https://dummyjson.com";

  // Api route to login
  static Login: string = "/auth/login";

  // Api route to fetch todo list
  static FetchTodo: (limit: number, skip: number) => string = (
    limit: number,
    skip: number
  ) => `/todos?limit=${limit}&skip=${skip}`;

  // Api route to fetch todo by id
  static FetchTodoByUserID: (id: string) => string = (id: string) =>
    `/todos/user/${id}`;

  // Api route to create a new todo item
  static CreateTodo: string = "/todos/add";

  // Api route to update or delete todo by ID
  static UpdateTodo: (id: number) => string = (id: number) => `/todos/${id}`;
}
