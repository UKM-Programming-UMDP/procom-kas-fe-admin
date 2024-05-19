/* eslint-disable @typescript-eslint/no-explicit-any */
import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import { APIInstanceInterface } from "../../types/api";

const api: APIInstanceInterface = {
  GET: (path: string) => ipcRenderer.invoke("api-get", path),
  POST: (path: string, data: any) => ipcRenderer.invoke("api-post", path, data),
  PUT: (path: string, data: any) => ipcRenderer.invoke("api-put", path, data),
  DELETE: (path: string) => ipcRenderer.invoke("api-delete", path)
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
