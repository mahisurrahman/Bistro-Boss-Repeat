import { Helmet } from "react-helmet-async";
import MenuPageBanner from "../../Components/MenuPageBanner/MenuPageBanner";
import UseCategory from "../../Utils/UseCategory";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import IndividualItem from "../../Components/IndividualItem/IndividualItem";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loading from "../../Components/Loading/Loading";

const ShopPage = () => {
  const { loading } = useContext(AuthContext);
  const [
    appetizerCategory,
    dessertCategory,
    beverageCategory,
    burgerCategory,
    entreeCategory,
    pastaCategory,
    pizzaCategory,
    seaFoodCategory,
    soupCategory,
    sushiCategory,
    tacosCategory,
  ] = UseCategory();
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
        <div className="w-11/12 mx-auto py-20">
          {
            loading ? <div className="w-full flex justify-center items-center"><Loading></Loading></div>
            : 
            <Tabs>
            <TabList className="flex justify-center">
              <Tab>Appetizer</Tab>
              <Tab>Dessert</Tab>
              <Tab>Beverage</Tab>
              <Tab>Burger</Tab>
              <Tab>Entree</Tab>
              <Tab>Pasta</Tab>
              <Tab>Pizza</Tab>
              <Tab>Sea Food</Tab>
              <Tab>Soup</Tab>
              <Tab>Sushi</Tab>
              <Tab>Tacos</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {appetizerCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {dessertCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {beverageCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {burgerCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {entreeCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {pastaCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {pizzaCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {seaFoodCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {soupCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {sushiCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {tacosCategory.map((item) => (
                  <IndividualItem key={item._id} item={item}></IndividualItem>
                ))}
              </div>
            </TabPanel>
          </Tabs>
          }
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
