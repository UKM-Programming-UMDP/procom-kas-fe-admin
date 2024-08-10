import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}
function TableFooter(props: Props) {
  const { className, children } = props;

  return (
    <div
      className={clsx(
        "w-full pt-2 text-xs font-semibold border-t relative flex",
        className
      )}
    >
      {children}
    </div>
  );
}

export default TableFooter;
