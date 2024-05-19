/* eslint-disable @typescript-eslint/no-explicit-any */
export interface APIInstanceInterface {
  GET<T>(path: string): Promise<APIResponse<T>>;
  POST<T>(path: string, data: any): Promise<APIResponse<T>>;
  PUT<T>(path: string, data: any): Promise<APIResponse<T>>;
  DELETE<T>(path: string): Promise<APIResponse<T>>;
}

export type APIResponse<T = void> = {
  status: boolean;
  status_code: number;
  message: string;
  errors: APIFieldError[];
  data: T;
} | null;

export type APIFieldError = {
  field: string;
  message: string;
};
