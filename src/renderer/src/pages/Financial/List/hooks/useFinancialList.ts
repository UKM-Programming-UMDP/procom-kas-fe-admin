import { useFinancialContext } from "@pages/Financial/context";
import { listTableMapper, MappedTable } from "../utils/listTableMapper";
import { TableHeader } from "@components/Table/TableBody";

interface HookReturn {
  handleEditFinreqDetails: () => void;
  tableData: MappedTable[];
  tableHeader: TableHeader[];
}
const useFinancialList = (): HookReturn => {
  const { state, setState } = useFinancialContext();

  const tableData = listTableMapper(state.financialRequest);
  const tableHeader: TableHeader[] = [
    { label: "id", width: "w-20" },
    { label: "username", width: "w-44" },
    { label: "amount", width: "w-32" },
    { label: "status", width: "w-28" },
    { label: "note", width: "w-52" },
    { label: "date", width: "w-24" }
  ];

  const handleEditFinreqDetails = () => {
    setState((prevState) => ({
      ...prevState,
      isEditFinreqDetails: true
    }));
  };

  return {
    handleEditFinreqDetails,
    tableData,
    tableHeader
  };
};

export default useFinancialList;
