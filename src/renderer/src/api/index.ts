import { APIResponse, FilterParams } from "@types";

export default class APIInstance {
  private api = window.api;

  async GET<T>(path: string, params?: FilterParams): Promise<APIResponse<T>> {
    return await this.api.GET(path, params);
  }

  async POST<T, U = T>(path: string, data: T): Promise<APIResponse<U>> {
    return await this.api.POST(path, data);
  }

  async PUT<T, U = T>(path: string, data: T): Promise<APIResponse<U>> {
    return await this.api.PUT(path, data);
  }

  async DELETE<T, U = T>(path: string): Promise<APIResponse<U>> {
    return await this.api.DELETE(path);
  }

  async POSTFORM<T>(path: string, data: File): Promise<APIResponse<T>> {
    return await this.api.POSTFORM(path, data);
  }
}
