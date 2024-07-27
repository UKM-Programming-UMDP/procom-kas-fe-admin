import { ActionButton } from "@components/Button";
import Popover from "@components/Popover";
import clsx from "clsx";

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
