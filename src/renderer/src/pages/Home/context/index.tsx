import { AppType } from "@types";
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
  app: AppType;
  isServerUp: boolean;
  isServerUpLoading: boolean;
};

export const initialState: StateType = {
  app: "dashboard",
  isServerUp: false,
  isServerUpLoading: false
};

type ContextType = {
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
};

const HomeContext = createContext<ContextType | null>(null);

const useHomeContext = (): ContextType => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
};

const HomeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  return (
    <HomeContext.Provider value={{ state, setState }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeProvider, useHomeContext };
export type { StateType };
