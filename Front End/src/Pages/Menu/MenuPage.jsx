import { Helmet } from "react-helmet-async";
import MenuPageBanner from "../../Components/MenuPageBanner/MenuPageBanner";
import TitleAndSubTitle from "../../Components/TitleAndSubtitle/TitleAndSubTitle";

const MenuPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div>
        <MenuPageBanner></MenuPageBanner>
        <div className="my-20">
          <TitleAndSubTitle
            title={`Today's Offer`}
            subTitle={`Don't Miss`}
          ></TitleAndSubTitle>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
