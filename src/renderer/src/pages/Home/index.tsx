import { HomeProvider } from "@pages/Home/context";
import HomeLayout from "./layout";

const Home = () => {
  return (
    <HomeProvider>
      <HomeLayout />
    </HomeProvider>
  );
};

export default Home;
