/** @format */

import { ReactNode } from "react";
import { AxiosResponse } from "axios";
import {
  postRequest,
  getRequest,
  patchRequest,
  deleteRequest,
} from "./api-clients";

export type MenuItem = {
  id?: string;
  label: string;
  icon: ReactNode;
  endIcon?: ReactNode;
  url?: string;
  items: MenuItem[];
};

export type TaskListProps = {
  id: string | ZodUUID;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
};

export type RequestOptions = {
  data?: any;
  tokenOrHeaders?: string | Record<string, string>;
};

export type MakeRequestFunction<D = any, R = any> = (
  url: string,
  options?: RequestOptions
) => Promise<AxiosResponse<R>>;

export type GetFn = ReturnType<typeof getRequest>;
export type PostFn = ReturnType<typeof postRequest>;
export type PatchFn = ReturnType<typeof patchRequest>;
export type DeleteFn = ReturnType<typeof deleteRequest>;

export interface RequestsType {
  getTodo: GetFn;
  postTodo: PostFn;
  patchTodo: PatchFn;
  deleteTodo: DeleteFn;
}

export type LoginResult = { success: boolean; error: string | null };

export type RequestMethodKey = keyof RequestsType;
export interface BaseMutationInput {
  url: string;
  tokenOrHeaders?: string | Record<string, string>;
}

export interface DataMutationInput extends BaseMutationInput {
  requestType: "postTodo" | "patchTodo";
  data?: any;
}

export interface NoDataMutationInput extends BaseMutationInput {
  requestType: "getTodo" | "deleteTodo";
}

export type MutationPayload = DataMutationInput | NoDataMutationInput;

export type MutationResponse = AxiosResponse<any>;
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface QueryParam {
  id: string | number;
  url: string;
  token: string | undefined;
}

export type QueryProps = QueryParam[];
export interface ClientData {
  clientId: string;
  name: string;
}

export interface SkillData {
  skillId: string;
  title: string;
}

export interface BehaviorData {
  behaviorId: string;
  title: string;
}

export interface UserInfo {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthContextType {
  user: UserInfo | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error: string | null }>;
  logout: () => Promise<void>;
}