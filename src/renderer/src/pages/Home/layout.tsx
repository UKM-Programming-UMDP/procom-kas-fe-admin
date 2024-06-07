import Home from "@pages/Home";
import { HomeProvider } from "@pages/Home/context";

const HomeLayout = () => {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
};

export default HomeLayout;
