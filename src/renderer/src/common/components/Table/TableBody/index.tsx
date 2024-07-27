import clsx from "clsx";
import TableRow from "../TableRow";
import Skeleton from "react-loading-skeleton";
import TableEmptyRow from "../TableEmptyRow";

interface Props {
  header: TableHeader[];
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  dataLength?: number;
  noDataText?: string;
  disableAction?: boolean;
}
function TableBody(props: Props) {
  const {
    header,
    className,
    children,
    isLoading,
    dataLength,
    noDataText = "No Data",
    disableAction
  } = props;

  return (
    <div className="overflow-y-auto h-[75vh]">
      <table className="w-full table-fixed">
        <thead className="text-left border-b">
          <tr>
            {header.map((header, index) => (
              <th
                key={index}
                className={clsx(
                  "uppercase text-xs py-4 text-gray-300/80",
                  header.width
                )}
              >
                {header.label}
              </th>
            ))}
            {disableAction ? null : <th className="w-[5rem]" />}
          </tr>
        </thead>
        <tbody className={clsx("text-left", className)}>
          {isLoading ? (
            [...Array(7)].map((_, index) => (
              <TableRow disableTdFiller key={index}>
                <td colSpan={header.length + 1} className="py-2">
                  <Skeleton height={40} width="100%" />
                </td>
              </TableRow>
            ))
          ) : dataLength === 0 ? (
            <TableEmptyRow text={noDataText} />
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
}

type TableHeader = {
  label: string;
  width?: string;
};

export type { TableHeader };
export default TableBody;
