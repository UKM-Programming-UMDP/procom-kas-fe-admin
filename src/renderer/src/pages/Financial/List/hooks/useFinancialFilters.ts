import CommonService from "@api/common/service";
import { useFinancialContext } from "@pages/Financial/context";
import useFinancial from "@pages/Financial/hooks/useFinancial";
import { CommonOptions, FilterType } from "@types";
import { snackbar } from "@utils/snackbar";
import { useEffect, useState } from "react";
import { filterMapper } from "../utils/filterMapper";
import FinancialService from "@api/financial/service";
import useFinancialDetails from "@pages/Financial/Details/hooks/useFinancialDetails";

interface HookReturn {
  filters: FilterType[];
  fetchFilterOptions: () => void;
  handleChangeFilters: (key: string, newValue: CommonOptions["value"]) => void;
  handleChangePage: (page: number) => void;
  handleChangeSearch: (value: string) => void;
  handleChangeSortBy: (key: string) => void;
  handleClearSortBy: () => void;
  getFilterLabel: string;
  getFilterSortBy: FilterType | undefined;
  handleFilterLabel: (newLabel: string) => void;
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

  const [filterLabel, setFilterLabel] = useState("");

  const handleChangeSortBy = (key: string) => {
    const filter = filters.find((filter) => filter.key === key);
    if (!filter) {
      return;
    }
    let optionValues = filter?.options.map((option) => option.value);
    if (key === "status") {
      optionValues = [...optionValues, ""];
    }
    setState((prevState) => {
      const previousValues = prevState.filters[key];
      let newValueIndex = optionValues.indexOf(previousValues) + 1;
      if (newValueIndex >= optionValues.length) {
        newValueIndex = 0;
      }
      const updatedFilters = {
        ...prevState.filters,
        [key]: optionValues[newValueIndex]
      };
      fetchFinancial(
        filterMapper(Object.assign(prevState.pagination, updatedFilters))
      );

      if (key === "sort") {
        handleFilterLabel(String(optionValues[newValueIndex]));
      }

      return {
        ...prevState,
        filters: updatedFilters
      };
    });
  };

  function handleFilterLabel(newLabel: string): void {
    const currentOption = filters[0].options.find(
      (option) => option.value === newLabel
    );
    const currentLabel = currentOption ? currentOption.label : "";
    setFilterLabel(currentLabel);
  }
  const getFilterLabel = filterLabel;

  const handleClearSortBy = () => {
    const resetFilters = {
      order_by: "asc",
      sort: "created_at",
      status: ""
    };
    setState((prevState) => {
      const newState = {
        ...prevState,
        filters: resetFilters
      };
      fetchFinancial(
        filterMapper(Object.assign(prevState.pagination, resetFilters))
      );
      return newState;
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

  const { handleClickRow } = useFinancialDetails();
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
        handleClickRow(data.request_id);
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

  const getFilterSortBy = filters.find((filter) => filter.key === "sort");

  return {
    filters,
    handleChangeFilters,
    fetchFilterOptions,
    handleChangePage,
    handleChangeSearch,
    handleChangeSortBy,
    handleClearSortBy,
    getFilterLabel,
    getFilterSortBy,
    handleFilterLabel
  };
};

export default useFinancialFilters;
