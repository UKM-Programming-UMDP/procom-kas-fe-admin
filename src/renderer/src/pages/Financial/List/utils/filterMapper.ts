import { StateType } from "@pages/Financial/context";
import { FilterParams } from "@types";

export const filterMapper = (
  filters: StateType["filters"] & StateType["pagination"]
): FilterParams => {
  return {
    params: {
      sort: filters.sort,
      order_by: filters.order_by,
      status: filters.status,
      page: filters.page,
      limit: filters.limit
    }
  };
};
