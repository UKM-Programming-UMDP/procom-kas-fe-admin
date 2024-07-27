import { FetchCallback } from "@types";
import APIInstance from "..";
import { UploadedFile } from "./model";

export default class FileService {
  private api: APIInstance = new APIInstance();
  private basePath: string = "/v1/file";

  // TODO: Fix bug can't upload images
  // No problem with the backend,
  // The backend recieve no file.
  // I have tested with react web app and have no problem.
  // The problem maybe because it's electron, using node.
  // I have tried also with POST and POSTFORM method, and still no luck.
  // My Suggestion: deep dive to the electron and node documentation
  // about how to upload formdata using axios.
  async uploadImages(files: File[], callback: FetchCallback<UploadedFile[]>) {
    const uploadPromises = files.map((image) => {
      return this.api.POSTFORM<UploadedFile>(this.basePath + "/images", image);
    });

    const results = await Promise.all(uploadPromises);

    const failedUploads = results.filter((res) => !res?.status);
    if (failedUploads.length > 0) {
      callback.onError(failedUploads.map((res) => res.message).join(", "));
      return;
    }

    const successfulUploads = results
      .filter((res) => res?.status)
      .map((res) => res.data) as UploadedFile[];

    callback.onSuccess(successfulUploads);
    callback.onFullfilled && callback.onFullfilled();
  }
}
