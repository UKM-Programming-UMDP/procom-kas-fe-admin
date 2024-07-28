import {
  BaseTable,
  TableBody,
  TableFilter,
  TableFilterItem,
  TableFooter,
  TablePagination,
  TableRow
} from "@components/Table";
import { StatusIcon, useFinancialContext } from "../context";
import { parseDateFromNow } from "@utils/dateParser";
import { rupiahFormatter } from "@utils/stringParser";
import useFinancialList from "./hooks/useFinancialList";
import useFinancialFilters from "./hooks/useFinancialFilters";
import { SearchBar } from "@components/Input";
import useFinancialDetails from "../Details/hooks/useFinancialDetails";

const FinancialTable = () => {
  const { state } = useFinancialContext();
  const { tableData, tableHeader } = useFinancialList();
  const { filters, handleChangeFilters, handleChangePage, handleChangeSearch } =
    useFinancialFilters();
  const { handleClickRow } = useFinancialDetails();

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
        <TableFilter>
          {filters.map((item, index) => (
            <TableFilterItem
              key={index}
              label={item.label}
              options={item.options}
              value={state.filters[item.key]}
              onChange={(value) => handleChangeFilters(item.key, value)}
            />
          ))}
          <div>
            <span>Search by Request ID</span>
            <div className="flex gap-2 mt-1">
              <SearchBar
                placeholder="Request ID"
                onChange={handleChangeSearch}
              />
            </div>
          </div>
        </TableFilter>
        <TablePagination
          currentPage={state.pagination.page}
          totalPage={state.pagination.total_pages}
          onChange={handleChangePage}
        />
      </TableFooter>
    </BaseTable>
  );
};

export default FinancialTable;
