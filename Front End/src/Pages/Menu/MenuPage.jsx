import { Helmet } from "react-helmet-async";
import MenuPageBanner from "../../Components/MenuPageBanner/MenuPageBanner";
import TitleAndSubTitle from "../../Components/TitleAndSubtitle/TitleAndSubTitle";
import UseMenu from "../../Utils/UseMenu";
import PopularItems from "../../Components/PopularItems/PopularItems";

const MenuPage = () => {
  const [menu] = UseMenu();

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div>
        <MenuPageBanner title={'Our Menu'} subTitle={'Would You Like to Try A Dish?'}></MenuPageBanner>
        <div className="my-20">
          <TitleAndSubTitle
            title={`Today's Offer`}
            subTitle={`Don't Miss`}
          ></TitleAndSubTitle>
          <div className="mb-10 mt-20 w-10/12 mx-auto grid grid-cols-2 gap-10">
            {
              menu.map(item => <PopularItems key={item.name} item={item} ></PopularItems>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
