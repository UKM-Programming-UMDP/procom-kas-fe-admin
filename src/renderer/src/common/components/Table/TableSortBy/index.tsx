import SwapVertIcon from "@mui/icons-material/SwapVert";
import useFinancialFilters from "@pages/Financial/List/hooks/useFinancialFilters";

export function sortBy(index: number) {
  const { handleChangeSortBy, filters } = useFinancialFilters();
  const firstFilter = filters[index];
  function handleSortItem() {
    handleChangeSortBy(firstFilter.key);
  }

  return (
    <SwapVertIcon
      role="button"
      sx={{
        fontSize: "medium"
      }}
      onClick={handleSortItem}
    />
  );
}