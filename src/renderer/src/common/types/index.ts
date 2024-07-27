import { APIResponse as GlobalAPIResponse } from "types/api";
import { APIFieldError as GlobalAPIFieldError } from "types/api";
import { FetchParams as GlobalFetchParams } from "types/api";
import { Pagination as GlobalPagination } from "types/api";

export type APIResponse<T> = GlobalAPIResponse<T>;
export type APIFieldError = GlobalAPIFieldError;
export type Pagination = GlobalPagination;
export type FilterParams = GlobalFetchParams;

export type AppType = "dashboard" | "balance history" | "financial request";

export type AppList = {
  displayName: string;
  icon: JSX.Element;
  appName: AppType;
};

export type FetchCallback<T> = {
  onSuccess: (data: T) => void;
  onError: (errMessage: string) => void;
  onFullfilled?: () => void;
};

export type CommonOptions = {
  value: number | string;
  label: string;
};

export type FilterType = {
  key: string;
  label: string;
  options: CommonOptions[];
};

export type DataWithPagination<T> = {
  data: T;
  pagination: Pagination;
};
