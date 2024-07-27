import { DataWithPagination, FetchCallback, FilterParams } from "@types";
import APIInstance from "..";
import { FinancialUpdateModel, FinancialModel } from "./model";

export default class FinancialService {
  private api: APIInstance = new APIInstance();
  private basePath: string = "/v1/financial-requests";

  async fetchFinancialRequest(
    params: FilterParams,
    callback: FetchCallback<DataWithPagination<FinancialModel[]>>
  ) {
    const res = await this.api.GET<FinancialModel[]>(this.basePath, params);
    if (!res?.status) {
      callback.onError(res.message);
    } else {
      if (res.data)
        callback.onSuccess({
          data: res.data,
          pagination: res.pagination
        });
    }
    callback.onFullfilled && callback.onFullfilled();
  }

  async fetchFinancialRequestById(
    id: string,
    callback: FetchCallback<FinancialModel>
  ) {
    const res = await this.api.GET<FinancialModel>(this.basePath + "/" + id);
    if (!res?.status) {
      callback.onError(res.message);
    } else {
      if (res.data) callback.onSuccess(res.data);
    }
    callback.onFullfilled && callback.onFullfilled();
  }

  async updateFinancialRequest(
    id: string,
    data: FinancialUpdateModel,
    callback: FetchCallback<FinancialUpdateModel>
  ) {
    const res = await this.api.PUT<FinancialUpdateModel>(
      this.basePath + "/" + id,
      data
    );
    if (!res?.status) {
      callback.onError(res.message);
    } else {
      if (res.data) callback.onSuccess(res.data);
    }
    callback.onFullfilled && callback.onFullfilled();
  }
}
