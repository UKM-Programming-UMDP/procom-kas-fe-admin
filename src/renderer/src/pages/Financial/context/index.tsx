import { FinancialModel } from "@api/financial/model";
import useDialog, { UseDialogReturn } from "@hooks/useDialog";
import { CommonOptions } from "@types";

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
  financialRequest: FinancialModel[];
  financialRequestLoading: boolean;
  isEditFinreqDetails: boolean;
  finreqDetails: FinancialModel;
  finreqDetailsLoading: boolean;
  updateFinreqLoading: boolean;
  paymentStatus: {
    loading: boolean;
    options: CommonOptions[];
  };
  paymentType: {
    loading: boolean;
    options: CommonOptions[];
  };
  filters: {
    sort: string;
    order_by: string;
    status: string;
  };
  pagination: {
    page: number;
    limit: number;
    total_pages: number;
    total_items: number;
  };
};

export const initialState: StateType = {
  financialRequest: [],
  financialRequestLoading: false,

  isEditFinreqDetails: false,
  finreqDetails: {} as FinancialModel,
  finreqDetailsLoading: false,
  updateFinreqLoading: false,

  paymentStatus: {
    loading: false,
    options: []
  },
  paymentType: {
    loading: false,
    options: []
  },

  filters: {
    order_by: "asc",
    sort: "created_at",
    status: ""
  },
  pagination: {
    page: 1,
    limit: 8,
    total_pages: 1,
    total_items: 0
  }
};

type ContextType = {
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
  dialog: {
    finreqDetails: UseDialogReturn;
  };
};

const FinancialContext = createContext<ContextType | null>(null);

const useFinancialContext = (): ContextType => {
  const context = useContext(FinancialContext);
  if (!context) {
    throw new Error(
      "useFinancialContext must be used within a FinancialProvider"
    );
  }
  return context;
};

const FinancialProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  const dialog = {
    finreqDetails: useDialog()
  };

  return (
    <FinancialContext.Provider value={{ state, setState, dialog }}>
      {children}
    </FinancialContext.Provider>
  );
};

export { FinancialProvider, useFinancialContext };
export type { StateType };
