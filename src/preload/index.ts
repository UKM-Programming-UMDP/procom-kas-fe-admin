/* eslint-disable @typescript-eslint/no-explicit-any */
import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { APIInstanceInterface, FetchParams } from "../../types/api";

const api: APIInstanceInterface = {
  GET: (path: string, params: FetchParams) =>
    ipcRenderer.invoke("api-get", path, params),
  POST: <T>(path: string, data: T) =>
    ipcRenderer.invoke("api-post", path, data),
  PUT: <T>(path: string, data: T) => ipcRenderer.invoke("api-put", path, data),
  DELETE: (path: string) => ipcRenderer.invoke("api-delete", path),
  POSTFORM: (path: string, data: File) =>
    ipcRenderer.invoke("api-postform", path, data)
};

declare global {
  interface Window {
    electron: typeof electronAPI;
    api: typeof api;
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
