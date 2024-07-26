import { Upload } from "@mui/icons-material";
import clsx from "clsx";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onUpload: (file: File[]) => void;
  error?: boolean;
  helperText?: string;
}
const Dropzone = (props: Props) => {
  const { error, helperText, onUpload } = props;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUpload(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true
  });

  return (
    <div className="relative">
      <div
        {...getRootProps({
          className: "flex items-center justify-center"
        })}
      >
        <input {...getInputProps()} />
        <div
          className={clsx(
            "p-3 w-full flex gap-2 items-center justify-center border border-dashed cursor-pointer text-sm",
            error ? "border-red-500" : "border-gray-400"
          )}
          onClick={open}
        >
          <Upload fontSize="small" color={error ? "error" : "inherit"} />
          <span className={error ? "text-red-500" : "text-gray-400"}>
            Upload transfered evidence
          </span>
        </div>
      </div>
      {helperText ? (
        <span className="text-xs text-red-500">{helperText}</span>
      ) : null}
      {isDragActive && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 pointer-events-none">
          <span className="text-white text-2xl">
            Drop anywhere to upload...
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
