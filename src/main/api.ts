/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  isAxiosError
} from "axios";
import { APIResponse } from "../../types/api";

type Headers = {
  Accept: string;
  "Content-type": string;
};

export default class APIInstance {
  headers: Headers = {
    Accept: "application/json",
    "Content-type": "application/json"
  };
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.MAIN_VITE_BACKEND_URL + "/api",
      headers: this.headers as unknown as AxiosHeaders
    } as AxiosRequestConfig);
  }

  async GET<T>(path: string): Promise<APIResponse<T>> {
    try {
      const res = await this.api.get(path);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return err?.response?.data;
      } else {
        return err;
      }
    }
  }

  async POST<T>(path: string, data: any): Promise<APIResponse<T>> {
    try {
      const res = await this.api.post(path, data);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return err?.response?.data;
      } else {
        return err;
      }
    }
  }

  async PUT<T>(path: string, data: any): Promise<APIResponse<T>> {
    try {
      const res = await this.api.put(path, data);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return err?.response?.data;
      } else {
        return err;
      }
    }
  }

  async DELETE<T>(path: string): Promise<APIResponse<T>> {
    try {
      const res = await this.api.delete(path);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return err?.response?.data;
      } else {
        return err;
      }
    }
  }
}
