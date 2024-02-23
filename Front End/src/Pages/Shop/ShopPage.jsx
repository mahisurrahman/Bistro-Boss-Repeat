import { Helmet } from "react-helmet-async";
import MenuPageBanner from "../../Components/MenuPageBanner/MenuPageBanner";
import UseCategory from "../../Utils/UseCategory";

const ShopPage = () => {
    const  [appetizerCategory, dessertCategory, beverageCategory, burgerCategory, entreeCategory, pastaCategory, pizzaCategory, seaFoodCategory, soupCategory, sushiCategory, tacosCategory] = UseCategory();
    
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <div>
        <MenuPageBanner
          title={"Our Shop"}
          subTitle={"Get Your Desired Dish From Us"}
        ></MenuPageBanner>
        <div className="w-10/12 mx-auto py-20">

        </div>
      </div>
    </div>
  );
};

export default ShopPage;
