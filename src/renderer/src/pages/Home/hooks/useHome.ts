import CommonService from "@api/common/service";
import { useHomeContext } from "../context";
import { AppType } from "@types";

interface HookReturn {
  checkServerStatus: () => void;
  handleChangeApp: (app: AppType) => void;
}
const useHome = (): HookReturn => {
  const { setState } = useHomeContext();
  const commonService = new CommonService();

  const checkServerStatus = async () => {
    setState((prev) => ({ ...prev, isServerUpLoading: true }));
    commonService.healthCheck({
      onSuccess: () => {
        setState((prev) => ({
          ...prev,
          isServerUp: true,
          isServerUpLoading: false
        }));
      },
      onError: () => {
        setState((prev) => ({ ...prev, isServerUpLoading: false }));
      }
    });
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
