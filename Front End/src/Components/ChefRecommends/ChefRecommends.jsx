import TitleAndSubTitle from "../TitleAndSubtitle/TitleAndSubTitle";

const ChefRecommends = () => {
  return (
    <div className="my-10 py-10">
      <TitleAndSubTitle
        title={"Chefs Recommends"}
        subTitle={"You Should Try"}
      ></TitleAndSubTitle>
      <div className="w-10/12 pt-10 mx-auto grid grid-cols-3 gap-10">
        <div className="card w-80 bg-base-100 shadow-xl text-zinc-950">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1502307837336-d59cca9408a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Key Lime Pie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Key Lime Pie</h2>
            <p>Tangy key lime filling in a graham cracker crust, topped with whipped cream and lime zest.</p>
            <div className="card-actions justify-center">
              <button className="duration-700 px-4 py-2 border-2 rounded-lg border-yellow-600 font-bold text-yellow-600 hover:bg-yellow-600 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl text-zinc-950">
          <figure>
            <img
              src="https://plus.unsplash.com/premium_photo-1695030934293-e8c889c3bbd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mushroom Risotto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mushroom Risotto</h2>
            <p>Creamy risotto cooked with mushrooms, onions, garlic, white wine, and Parmesan cheese.</p>
            <div className="card-actions justify-center">
            <button className="duration-700 px-4 py-2 border-2 rounded-lg border-yellow-600 font-bold text-yellow-600 hover:bg-yellow-600 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">View Details</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl text-zinc-950">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1631709497146-a239ef373cf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pho"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pho</h2>
            <p>Vietnamese noodle soup with beef or chicken, rice noodles, bean sprouts, basil, and lime.</p>
            <div className="card-actions justify-center">
            <button className="duration-700 px-4 py-2 border-2 rounded-lg border-yellow-600 font-bold text-yellow-600 hover:bg-yellow-600 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
