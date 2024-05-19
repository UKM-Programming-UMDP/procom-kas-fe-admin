export type AppType = "dashboard" | "balance history" | "financial request";

export type AppList = {
  displayName: string;
  icon: JSX.Element;
  appName: AppType;
};
