import { ReactNode } from "react";
import { Tooltip } from "@mui/material";
import clsx from "clsx";

interface AppCardProps {
  displayName: string;
  icon: ReactNode;
  onClick: () => void;
  className?: string;
  isActive: boolean;
}
const AppCard = (props: AppCardProps) => {
  const { displayName, icon, onClick, className, isActive } = props;

  const activeClass = isActive ? "bg-gray-600/30" : "hover:bg-gray-600/30";

  return (
    <div
      className={clsx(
        "flex duration-200 transition-all hover:scale-105 hover:drop-shadow-sm rounded-md",
        activeClass,
        className
      )}
    >
      <Tooltip arrow title={displayName} placement="top">
        <button onClick={onClick} className="cursor-pointer mx-auto h-fit">
          <div className="w-fit mx-auto p-1.5 px-2">
            <div>{icon}</div>
          </div>
        </button>
      </Tooltip>
    </div>
  );
};

export default AppCard;
