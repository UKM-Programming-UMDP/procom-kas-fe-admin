import { ActionButton } from "@components/Button";
import Popover from "@components/Popover";
import clsx from "clsx";
import useFinancialFilters from "@pages/Financial/List/hooks/useFinancialFilters";

interface Props {
  children: React.ReactNode;
  className?: string;
}
function TableFilter(props: Props) {
  const { children, className } = props;

  return (
    <Popover
      position="topLeft"
      transform="bottomLeft"
      buttonComponent={
        <div className="absolute">
          <ActionButton
            variant="contained"
            label="Filter"
            className="absolute"
          />
        </div>
      }
    >
      <div className={clsx("p-3 pt-2 w-fit flex flex-col gap-2", className)}>
        {children}
      </div>
    </Popover>
  );
}

export default TableFilter;

export function ClearFilter() {
  const { handleClearSortBy } = useFinancialFilters();
  return (
    <div className="absolute right-0">
      <ActionButton
        onClick={handleClearSortBy}
        variant="contained"
        label="Clear Filter"
      />
    </div>
  );
}
