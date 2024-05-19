/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElectronAPI } from "@electron-toolkit/preload";
import { APIInstanceInterface } from "../../types/api";

declare global {
  interface Window {
    electron: typeof ElectronAPI;
    api: APIInstanceInterface;
  }
}
