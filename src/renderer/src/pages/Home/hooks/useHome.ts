import CommonServices from "@services/common";
import { useHomeContext } from "../context";
import { AppType } from "@types";

interface HookReturn {
  checkServerStatus: () => void;
  handleChangeApp: (app: AppType) => void;
}
const useHome = (): HookReturn => {
  const { setState } = useHomeContext();
  const commonServices = new CommonServices();

  const checkServerStatus = async () => {
    setState((prev) => ({ ...prev, isServerUpLoading: true }));
    const res = await commonServices.healthCheck();
    if (!res || !res.status) {
      setState((prev) => ({ ...prev, isServerUpLoading: false }));
      // handle error
      return;
    }
    setState((prev) => ({
      ...prev,
      isServerUp: true,
      isServerUpLoading: false
    }));
  };

  const handleChangeApp = (app: AppType) => {
    setState((prevState) => ({ ...prevState, app }));
  };

  return {
    checkServerStatus,
    handleChangeApp
  };
};

export default useHome;
