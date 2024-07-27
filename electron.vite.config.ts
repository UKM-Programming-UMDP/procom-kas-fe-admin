import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@components": resolve(__dirname, "src/renderer/src/common/components"),
        "@hooks": resolve(__dirname, "src/renderer/src/common/hooks"),
        "@utils": resolve(__dirname, "src/renderer/src/common/utils"),
        "@types": resolve(__dirname, "src/renderer/src/common/types/index.ts"),
        "@pages": resolve(__dirname, "src/renderer/src/pages"),
        "@layouts": resolve(__dirname, "src/renderer/src/layouts"),
        "@assets": resolve(__dirname, "src/renderer/src/assets"),
        "@api": resolve(__dirname, "src/renderer/src/api")
      }
    },
    plugins: [react()]
  }
});
