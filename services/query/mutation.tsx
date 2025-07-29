/** @format */

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { Requests } from "../api"; // Assuming correct path
import { MutationPayload, MutationResponse, RequestsType } from "@/types";

const Mutation = () => {
  const request: RequestsType = Requests;

  const mutation: UseMutationResult<MutationResponse, Error, MutationPayload> =
    useMutation({
      mutationFn: async (payload: MutationPayload) => {
        switch (payload.requestType) {
          case "getTodo":
            return request.getTodo(payload.url, {
              tokenOrHeaders: payload.tokenOrHeaders,
            });
          case "deleteTodo":
            return request.deleteTodo(payload.url, {
              tokenOrHeaders: payload.tokenOrHeaders,
            });
          case "postTodo":
            return request.postTodo(payload.url, {
              data: payload.data,
              tokenOrHeaders: payload.tokenOrHeaders,
            });
          case "patchTodo":
            return request.patchTodo(payload.url, {
              data: payload.data,
              tokenOrHeaders: payload.tokenOrHeaders,
            });

          default:
            throw new Error(
              `Unhandled request type: ${(payload as any).requestType}`
            );
        }
      },
      onError: (error) => {
        console.error("Mutation Error:", error);
      },
      onSuccess: (data) => {
        console.log("Mutation Success:", data);
      },
    });

  return { mutation };
};

export default Mutation;
