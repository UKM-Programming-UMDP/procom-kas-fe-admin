/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError
} from "axios";
import { APIResponse, FetchParams } from "../../types/api";

type BaseHeaders = {
  Accept: string;
  "Content-Type": string;
};

export default class APIInstance {
  headers: BaseHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.MAIN_VITE_BACKEND_URL,
      headers: this.headers as unknown as AxiosHeaders
    } as AxiosRequestConfig);

    this.api.interceptors.request.use(
      (config) => {
        console.log("Request:", {
          url: config.url,
          method: config.method,
          headers: config.headers,
          data: config.data
        });
        return config;
      },
      (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log("Response:", {
          url: response.config.url,
          method: response.config.method,
          requestHeaders: response.config.headers,
          responseHeaders: response.headers,
          data: response.data
        });
        return response;
      },
      (error) => {
        if (error.response) {
          console.error("Response error:", {
            url: error.response.config.url,
            method: error.response.config.method,
            requestHeaders: error.response.config.headers,
            responseHeaders: error.response.headers,
            data: error.response.data
          });
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error in setting up request:", error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  async GET<T>(path: string, params: FetchParams): Promise<APIResponse<T>> {
    try {
      const res = await this.api.get(path, params);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null
        } as unknown as APIResponse<T>;
      } else {
        return {
          status: false,
          message: "Internal Server Error"
        } as APIResponse<T>;
      }
    }
  }

  async POST<T, U = T>(path: string, data: T): Promise<APIResponse<U>> {
    try {
      const res = await this.api.post(path, data);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          message: "Internal Server Error"
        } as APIResponse<U>;
      }
    }
  }

  async PUT<T, U = T>(path: string, data: T): Promise<APIResponse<U>> {
    try {
      const res = await this.api.put(path, data);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          message: "Internal Server Error"
        } as APIResponse<U>;
      }
    }
  }

  async DELETE<T, U = T>(path: string): Promise<APIResponse<U>> {
    try {
      const res = await this.api.delete(path);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null
        } as unknown as APIResponse<U>;
      } else {
        return {
          status: false,
          message: "Internal Server Error"
        } as APIResponse<U>;
      }
    }
  }

  async POSTFORM<T>(path: string, data: File): Promise<APIResponse<T>> {
    try {
      const res = await this.api.postForm(
        path,
        {
          file: data
        },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null
        } as APIResponse<T>;
      } else {
        return {
          status: false,
          message: "Internal Server Error"
        } as APIResponse<T>;
      }
    }
  }
}
