import {
  BaseTable,
  TableBody,
  TableFooter,
  TablePagination,
  TableRow
} from "@components/Table";
import { useFinancialContext } from "../context";
import { parseDateFromNow } from "@utils/dateParser";
import { rupiahFormatter } from "@utils/stringParser";
import useFinancialList from "./hooks/useFinancialList";
import useFinancialFilters from "./hooks/useFinancialFilters";
import { SearchBar } from "@components/Input";
import useFinancialDetails from "../Details/hooks/useFinancialDetails";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ActionButton } from "@components/Button";
import StatusIcon from "../partials/StatusIcon";
import { useRef } from "react";

const FinancialTable = () => {
  const { state } = useFinancialContext();
  const { tableData, tableHeader } = useFinancialList();
  const {
    handleChangeSortBy,
    handleChangePage,
    handleChangeSearch,
    getFilterLabel,
    getFilterSortBy,
    handleFilterLabel
  } = useFinancialFilters();
  const { handleClickRow } = useFinancialDetails();
  const { handleClearSortBy } = useFinancialFilters();
  const childRef = useRef<{ onClear: () => void }>(null);
  const handleClearButton = () => {
    childRef.current?.onClear();
    handleClearSortBy();
    handleFilterLabel("created_at");
  };

  return (
    <BaseTable>
      <TableBody
        header={tableHeader}
        isLoading={state.financialRequestLoading}
        dataLength={tableData.length}
        disableAction
      >
        {tableData.map((row) => (
          <TableRow
            key={row.requestID}
            onClick={() => handleClickRow(row.requestID)}
          >
            <td className="ps-1">{row.requestID}</td>
            <td>{row.username}</td>
            <td>{rupiahFormatter(row.amount)}</td>
            <td>{StatusIcon(row.paymentStatus)}</td>
            <td>{row.note}</td>
            <td className="text-xs">{parseDateFromNow(row.createdAt)}</td>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <div className="absolute flex gap-2">
          <div>
            <SearchBar
              ref={childRef}
              placeholder="Search Request ID"
              onChange={handleChangeSearch}
            />
          </div>
          <div>
            {getFilterSortBy ? (
              <div className="">
                <div className="opacity-55 ml-1">Sort By: </div>
                <button onClick={() => handleChangeSortBy(getFilterSortBy.key)}>
                  <FilterAltIcon sx={{ fontSize: "medium" }} />
                  <span>{getFilterLabel ? getFilterLabel : "Created"}</span>
                </button>
              </div>
            ) : (
              <p />
            )}
          </div>
        </div>
        <TablePagination
          currentPage={state.pagination.page}
          totalPage={state.pagination.total_pages}
          onChange={handleChangePage}
        />
        <div className="absolute right-0">
          <ActionButton
            onClick={handleClearButton}
            variant="outlined"
            label="Clear Filter"
          />
        </div>
      </TableFooter>
    </BaseTable>
  );
};

export default FinancialTable;
