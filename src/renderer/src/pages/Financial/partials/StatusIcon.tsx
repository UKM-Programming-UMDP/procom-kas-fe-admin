import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function StatusIcon(status: string): JSX.Element {
  let icon;
  const commonIconStyle = {
    fontSize: "medium",
    opacity: 0.7
  };
  if (status === "Rejected") {
    icon = <ErrorOutlineIcon color="error" sx={commonIconStyle} />;
  } else if (status === "Pending") {
    icon = <WarningAmberIcon color="warning" sx={commonIconStyle} />;
  } else {
    icon = <CheckCircleOutlineIcon color="success" sx={commonIconStyle} />;
  }

  return (
    <div className="flex">
      <span className="flex-1">{status}</span>
      <span className="mr-3">{icon}</span>
    </div>
  );
}
