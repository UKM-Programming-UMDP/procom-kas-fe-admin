import { APIResponse as GlobalAPIResponse } from "types/api";
import { APIFieldError as GlobalAPIFieldError } from "types/api";

export type AppType = "dashboard" | "balance history" | "financial request";

export type AppList = {
  displayName: string;
  icon: JSX.Element;
  appName: AppType;
};

export type APIResponse<T> = GlobalAPIResponse<T>;
export type APIFieldError = GlobalAPIFieldError;

export type FetchCallback<T> = {
  onSuccess: (data: T) => void;
  onError: (errMessage: string) => void;
  onFullfilled?: () => void;
};
