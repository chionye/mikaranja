/** @format */

export default class ApiRoutes {
  static BASE_URL_DEV: string = "https://dummyjson.com";

  // Api route to login
  static Login: string = "/auth/login";

  // Api route to fetch todo list
  static FetchTodo: (limit: string, skip: string) => string = (
    limit: string,
    skip: string
  ) => `/todos?limit=${limit}&skip=${skip}`;

  // Api route to fetch todo by id
  static FetchTodoByUserID: (id: string) => string = (id: string) =>
    `/todos/user/${id}`;

  // Api route to create a new todo item
  static CreateTodo: string = "/todos/add";

  // Api route to update or delete todo by ID
  static UpdateTodo: (id: string) => string = (id: string) => `/todos/${id}`;
}
