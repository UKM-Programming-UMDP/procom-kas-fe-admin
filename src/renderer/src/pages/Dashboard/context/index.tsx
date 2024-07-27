import { BalanceModel } from "@api/balance/model";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from "react";

type StateType = {
  balance: BalanceModel;
  balanceLoading: boolean;
};

export const initialState: StateType = {
  balance: {} as BalanceModel,
  balanceLoading: false
};

type ContextType = {
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
};

const DashboardContext = createContext<ContextType | null>(null);

const useDashboardContext = (): ContextType => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
};

const DashboardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  return (
    <DashboardContext.Provider value={{ state, setState }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider, useDashboardContext };
export type { StateType };
