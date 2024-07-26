import CommonService from "@api/common/service";
import { useFinancialContext } from "@pages/Financial/context";
import useFinancial from "@pages/Financial/hooks/useFinancial";
import { CommonOptions, FilterType } from "@types";
import { snackbar } from "@utils/snackbar";
import { useEffect, useState } from "react";
import { filterMapper } from "../utils/filterMapper";
import FinancialService from "@api/financial/service";

interface HookReturn {
  filters: FilterType[];
  fetchFilterOptions: () => void;
  handleChangeFilters: (key: string, newValue: CommonOptions["value"]) => void;
  handleChangePage: (page: number) => void;
  handleChangeSearch: (value: string) => void;
}
const useFinancialFilters = (): HookReturn => {
  const { setState } = useFinancialContext();
  const { fetchFinancial } = useFinancial();
  const financialService = new FinancialService();
  const commonService = new CommonService();

  const [filters, setFilters] = useState<FilterType[]>([
    {
      key: "sort",
      label: "Sort By",
      options: [
        { label: "Created", value: "created_at" },
        { label: "Updated", value: "updated_at" }
      ]
    },
    {
      key: "order_by",
      label: "Order By",
      options: [
        { label: "Newest", value: "asc" },
        { label: "Oldest", value: "desc" }
      ]
    }
  ]);

  useEffect(() => {
    if (!filters.find((filter) => filter.key === "status")) {
      fetchFilterOptions();
    }
  }, []);

  const fetchFilterOptions = () => {
    commonService.fetchPaymentStatus({
      onSuccess: (data) => {
        setFilters((prevState) => [
          ...prevState,
          {
            key: "status",
            label: "Payment Status",
            options: data
          }
        ]);
      },
      onError: (errMessage) => {
        snackbar.error(errMessage);
      }
    });
  };

  const handleChangeFilters = (
    key: string,
    newValue: CommonOptions["value"]
  ) => {
    setState((prevState) => {
      const previousValues = prevState.filters[key];
      const updatedFilters = {
        ...prevState.filters,
        [key]: previousValues === newValue ? "" : newValue
      };

      fetchFinancial(
        filterMapper(Object.assign(prevState.pagination, updatedFilters))
      );
      return Object.assign(prevState, {
        filters: updatedFilters
      });
    });
  };

  const handleChangePage = (page: number) => {
    setState((prevState) => {
      const updatedPagination = {
        ...prevState.pagination,
        page
      };
      fetchFinancial(
        filterMapper(Object.assign(prevState.filters, updatedPagination))
      );
      return Object.assign(prevState, {
        pagination: updatedPagination
      });
    });
  };

  const handleChangeSearch = (value: string) => {
    if (value === "") {
      fetchFinancial();
      return;
    }
    if (value.length !== 5) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      financialRequestLoading: true
    }));

    financialService.fetchFinancialRequestById(value, {
      onSuccess: (data) => {
        setState((prevState) => ({
          ...prevState,
          financialRequest: [data],
          financialRequestLoading: false
        }));
      },
      onError: (errMessage) => {
        snackbar.error(errMessage);
        setState((prevState) => ({
          ...prevState,
          financialRequestLoading: false
        }));
      }
    });
  };

  return {
    filters,
    handleChangeFilters,
    fetchFilterOptions,
    handleChangePage,
    handleChangeSearch
  };
};

export default useFinancialFilters;
