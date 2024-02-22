import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div className="">
        <Banner></Banner>
      </div>
    </>
  );
};

export default Home;
