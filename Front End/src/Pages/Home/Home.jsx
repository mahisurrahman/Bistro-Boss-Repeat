import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import OrderOnline from "../../Components/OrderOnline/OrderOnline";
import PopularMenus from "../../Components/PopularMenus/PopularMenus";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import CallNumber from "../../Components/CallNumber/CallNumber";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import BestDish from "../../Components/BestDish/BestDish";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <BannerTwo></BannerTwo>
        <PopularMenus></PopularMenus>
        <CallNumber></CallNumber>
        <ChefRecommends></ChefRecommends>
        <BestDish></BestDish>
        <Testimonials></Testimonials>
      </div>
    </>
  );
};

export default Home;
