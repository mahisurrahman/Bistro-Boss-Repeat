
import TitleAndSubTitle from "../TitleAndSubtitle/TitleAndSubTitle";
import PopularItems from "../PopularItems/PopularItems";
import { Link } from "react-router-dom";
import UseMenu from "../../Utils/UseMenu";

const PopularMenus = () => {
  const [menu] = UseMenu();
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <div className="my-10 py-10">
      <TitleAndSubTitle
        title={"From Our Menu"}
        subTitle={"Check It Out"}
      ></TitleAndSubTitle>
      <div className="mb-10 mt-20 w-10/12 mx-auto grid grid-cols-2 gap-10">
        {popular.map((item) => (
          <PopularItems key={item.name} item={item}></PopularItems>
        ))}
      </div>
      <div className="text-center">
        <Link to="/menus">
          <button className="duration-700 text-xl tracking-wider border-b-2 border-yellow-600 rounded-lg px-4 py-4 hover:bg-yellow-600 hover:text-black hover:font-bold hover:cursor-pointer hover:duration-700">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenus;
