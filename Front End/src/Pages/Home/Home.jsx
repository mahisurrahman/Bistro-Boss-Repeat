import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import OrderOnline from "../../Components/OrderOnline/OrderOnline";
import PopularMenus from "../../Components/PopularMenus/PopularMenus";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div className="">
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <BannerTwo></BannerTwo>
        <PopularMenus></PopularMenus>
      </div>
    </>
  );
};

export default Home;
