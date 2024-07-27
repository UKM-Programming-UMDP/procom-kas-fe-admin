import { Pagination } from "@mui/material";

interface Props {
  currentPage: number;
  totalPage: number;
  onChange: (page: number) => void;
}
function TablePagination(props: Props) {
  const { currentPage, totalPage, onChange } = props;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-root": {
          color: "#fff",
          fontSize: "0.7rem"
        },
        "& .Mui-selected": {
          backgroundColor: "#25252585"
        },
        display: "absolute",
        bottom: 0,
        width: "fit-content",
        marginX: "auto"
      }}
      count={totalPage}
      page={currentPage}
      onChange={handleChange}
    />
  );
}

export default TablePagination;
