import clsx from "clsx";

interface Props {
  className?: string;
  text?: string;
}
function TableEmptyRow(props: Props) {
  const { className, text = "No Data Available" } = props;

  return (
    <tr className={clsx("border-b", className)}>
      <td colSpan={3} className="py-5 text-left text-gray-300/40">
        {text}
      </td>
    </tr>
  );
}

export default TableEmptyRow;
