// // Possible Request States
// type Loading = "loading";
// type Idle = "idle";
// type Error = "error";
// type Success = "success";

// export type QueryKeyPrimitive = string;

// export type QueryKey = QueryKeyPrimitive;

// export type HermesQuery<TResult, TError> {
//   queryKey: QueryKey

// }

// export type QueryStatus = Loading | Idle | Error | Success;

// // Base type for the Query Result
// export interface QueryResult<TResult, TError = Error> {
//   status: QueryStatus;
//   error: null | TError;
//   isLoading: boolean;
//   isSuccess: boolean;
//   isError: boolean;
//   isFetching: boolean;
//   isStale: boolean;
//   failureCount: number;
//   query: object;
// }

export interface HermesInitConfig<TResult, TError> {
  queryKey: string;
  queryHash: string;
  config: any;
  notifyGlobalListeners: (query: any) => void;
}
