import { FinancialProvider } from "./context";
import FinancialLayout from "./layout";

const Financial = () => {
  return (
    <FinancialProvider>
      <FinancialLayout />
    </FinancialProvider>
  );
};

export default Financial;
