import { Helmet } from "react-helmet-async";
import MenuPageBanner from "../../Components/MenuPageBanner/MenuPageBanner";
import UseCategory from "../../Utils/UseCategory";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const ShopPage = () => {
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
          <Tabs>
            <TabList className='flex justify-center'>
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
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {dessertCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {beverageCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {burgerCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {entreeCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {pastaCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {pizzaCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {seaFoodCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {soupCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {sushiCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-3 gap-10 my-10">
                {tacosCategory.map((item) => (
                  <div
                    key={item.name}
                    className="card w-96 bg-orange-600 shadow-xl"
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt="Shoes"
                        className="w-full h-[250px] object-cover"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
