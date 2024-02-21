import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;