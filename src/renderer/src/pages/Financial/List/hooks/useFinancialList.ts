import { useFinancialContext } from "@pages/Financial/context";
import { listTableMapper, MappedTable } from "../utils/listTableMapper";
import { TableHeader } from "@components/Table/TableBody";
import { sortBy } from "@components/Table/TableSortBy";

interface HookReturn {
  handleEditFinreqDetails: () => void;
  tableData: MappedTable[];
  tableHeader: TableHeader[];
}
const useFinancialList = (): HookReturn => {
  const { state, setState } = useFinancialContext();

  const tableData = listTableMapper(state.financialRequest);
  const tableHeader: TableHeader[] = [
    { label: "id", width: "w-20", sortBy: "" },
    { label: "username", width: "w-44", sortBy: "" },
    { label: "amount", width: "w-32", sortBy: "" },
    { label: "status", width: "w-28", sortBy: sortBy(2) },
    { label: "note", width: "w-52", sortBy: "" },
    { label: "date", width: "w-24", sortBy: sortBy(1) }
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
