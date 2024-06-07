import Dashboard from "@pages/Dashboard";
import { DashboardProvider } from "@pages/Dashboard/context";

const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default DashboardLayout;
