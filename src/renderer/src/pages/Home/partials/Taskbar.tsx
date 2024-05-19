import AppCard from "@components/Card/AppCard";
import { CurrencyExchange, Home } from "@mui/icons-material";
import { AppList } from "@types";
import { appDisplayName } from "@utils/consts";
import useHome from "../hooks/useHome";
import AppearFadeIn from "@components/Animation/AppearFadeIn";

const Taskbar = () => {
  const { handleChangeApp } = useHome();

  const appList: AppList[] = [
    {
      displayName: appDisplayName["dashboard"],
      icon: <Home fontSize="small" />,
      appName: "dashboard"
    },
    {
      displayName: appDisplayName["balance history"],
      icon: <CurrencyExchange fontSize="small" />,
      appName: "balance history"
    }
  ];

  return (
    <div className="m-auto flex gap-2">
      {appList.map((app, index) => (
        <AppearFadeIn key={index} direction="bottom" delay={(index + 1) * 0.3}>
          <AppCard
            displayName={app.displayName}
            icon={app.icon}
            onClick={() => handleChangeApp(app.appName)}
          />
        </AppearFadeIn>
      ))}
    </div>
  );
};

export default Taskbar;
