import { ReactNode } from "react";
import { Tooltip } from "@mui/material";

interface AppCardProps {
  displayName: string;
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}
const AppCard = (props: AppCardProps) => {
  const { displayName, icon, onClick, className } = props;

  return (
    <div
      className={`flex hover:scale-105 transition-all hover:drop-shadow-sm duration-200 ${className}`}
    >
      <Tooltip arrow title={displayName} placement="top">
        <button onClick={onClick} className="cursor-pointer mx-auto h-fit">
          <div className="w-fit mx-auto p-1.5 px-2 rounded-md hover:bg-gray-600/30">
            <div>{icon}</div>
          </div>
        </button>
      </Tooltip>
    </div>
  );
};

export default AppCard;
