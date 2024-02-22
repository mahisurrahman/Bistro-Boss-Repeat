import TitleAndSubTitle from "../TitleAndSubtitle/TitleAndSubTitle";
import { RiSlashCommands } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className="my-10">
      <TitleAndSubTitle
        title={"Testimonials"}
        subTitle={"What Our Client Say"}
      ></TitleAndSubTitle>
      <div className="py-5 w-10/12 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-red-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-green-400"
            />
          </div>
          <div className="pt-5">
            <RiSlashCommands className="text-9xl"></RiSlashCommands>
          </div>
          <div className="pt-4">
            <p className="text-center text-xl tracking-wider">{`" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias mollitia nobis provident possimus, voluptatem sed quod temporibus nam! Possimus officiis voluptatum cum maxime expedita eum nesciunt! Ipsum incidunt quasi necessitatibus dolorem perspiciatis, error exercitationem totam, atque molestias sit perferendis? "`}</p>
          </div>
          <div className="pt-4">
            <h1 className="text-center text-4xl font-bold text-yellow-600">Jhon DOE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
