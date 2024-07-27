import { CommonOptions } from "@types";
import clsx from "clsx";

interface Props {
  className?: string;
  label: string;
  options: CommonOptions[];
  value: string;
  onChange: (value: CommonOptions["value"]) => void;
}
function TableFilterItem(props: Props) {
  const { className, label, options, value, onChange } = props;

  return (
    <div className={className}>
      <span>{label}</span>
      <div className="flex gap-2 mt-1">
        {options.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "border px-2 py-0.5 rounded bg-zinc-500/50 capitalize",
              item.value === value ? "border-gray-200/70" : "border-gray-500/30"
            )}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TableFilterItem;
