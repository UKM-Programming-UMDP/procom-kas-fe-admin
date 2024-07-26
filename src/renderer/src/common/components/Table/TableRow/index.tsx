import { Delete, Edit } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  disableTdFiller?: boolean;
}
function TableRow(props: Props) {
  const { className, children, onClick, onEdit, onDelete, disableTdFiller } =
    props;

  return (
    <tr
      className={clsx(
        "font-semibold text-[0.9rem]",
        onClick
          ? "cursor-pointer hover:bg-zinc-600/30 hover:duration-50 hover:ease-linear"
          : "",
        className
      )}
      onClick={onClick}
    >
      {children}
      {onEdit || onDelete ? (
        <td className="flex gap-4 justify-end pe-3 text-gray-300/80 py-4">
          {onEdit ? (
            <Tooltip arrow title="Edit" placement="bottom">
              <Edit
                style={{
                  fontSize: "1rem"
                }}
                onClick={onEdit}
                className="cursor-pointer hover:text-yellow-300/80 duration-100"
              />
            </Tooltip>
          ) : null}
          {onDelete ? (
            <Tooltip arrow title="Delete" placement="bottom">
              <Delete
                style={{
                  fontSize: "1rem"
                }}
                onClick={onDelete}
                className="cursor-pointer hover:text-red-400/90 duration-100"
              />
            </Tooltip>
          ) : null}
        </td>
      ) : disableTdFiller ? null : (
        <td />
      )}
    </tr>
  );
}

export default TableRow;
