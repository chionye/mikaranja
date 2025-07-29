/** @format */

import { useQueries } from "@tanstack/react-query";
import { Requests } from "../api";
import { QueryProps, QueryParam } from "@/types";
import { AxiosResponse } from "axios";

// Instantiate the getTodo function once
const getTodo = Requests.getTodo;
type QueryResultData = AxiosResponse<any>;

const Query = (queryParamsArray: QueryProps) => {
  const queries = useQueries({
    queries: queryParamsArray.map((queryParam: QueryParam) => {
      return {
        queryKey: [queryParam.id, queryParam.url, queryParam.token],
        queryFn: async (): Promise<QueryResultData> => {
          const response = await getTodo(queryParam.url, {
            tokenOrHeaders: queryParam.token,
          });
          return response;
        },
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
        onError: (error: any) => {
          console.error(`Query ${queryParam.id} failed:`, error);
        },
      };
    }),
  });

  const handleDataUpdate = (index: number = 0) => {
    if (queries[index]) {
      queries[index].refetch();
    } else {
      console.warn(`No query found at index ${index} for refetch.`);
    }
  };

  return { queries, handleDataUpdate };
};

export default Query;
