import { DashboardProvider } from "@pages/Dashboard/context";
import DashboardLayout from "./layout";

const Dashboard = () => {
  return (
    <DashboardProvider>
      <DashboardLayout />
    </DashboardProvider>
  );
};

export default Dashboard;
