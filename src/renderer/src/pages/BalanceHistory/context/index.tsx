import { BalanceHistoryModel } from "@api/balance/model";
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
  balanceHistory: BalanceHistoryModel[];
  balanceHistoryLoading: boolean;
};

export const initialState: StateType = {
  balanceHistory: [],
  balanceHistoryLoading: false
};

type ContextType = {
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
};

const BalanceHistoryContext = createContext<ContextType | null>(null);

const useBalanceHistoryContext = (): ContextType => {
  const context = useContext(BalanceHistoryContext);
  if (!context) {
    throw new Error(
      "useBalanceHistoryContext must be used within a BalanceHistoryProvider"
    );
  }
  return context;
};

const BalanceHistoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  return (
    <BalanceHistoryContext.Provider value={{ state, setState }}>
      {children}
    </BalanceHistoryContext.Provider>
  );
};

export { BalanceHistoryProvider, useBalanceHistoryContext };
export type { StateType };
