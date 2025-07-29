/** @format */

import { RequestsType } from "@/types";
import {
  postRequest,
  getRequest,
  patchRequest,
  deleteRequest,
} from "./api-clients";

// Instantiate the request functions
const getTodo = getRequest();
const postTodo = postRequest();
const patchTodo = patchRequest();
const deleteTodo = deleteRequest();

export const Requests: RequestsType = {
  getTodo,
  postTodo,
  patchTodo,
  deleteTodo,
};
