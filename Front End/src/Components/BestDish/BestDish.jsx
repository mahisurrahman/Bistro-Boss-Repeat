import TitleAndSubTitle from "../TitleAndSubtitle/TitleAndSubTitle";
import "./BestDish.css";

const BestDish = () => {
  return (
    <div className="my-20 backgroundImageofBestDish w-10/12 mx-auto">
      <div className="z-10 bg-opacity-50 backdrop-blur-sm bg-black py-10">
        <TitleAndSubTitle
          title={"Best Dish Here"}
          subTitle={"Must Try"}
        ></TitleAndSubTitle>
        <div className="grid grid-cols-2 gap-10 items-center justify-center px-20 py-10">
            <div>
               <img src='https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
            </div>
            <div>
               <h1 className="text-2xl font-bold">March 26, 2018</h1>
               <p className="text-5xl mb-2 font-extrabold">Mediterranean Platter</p>
               <p className="text-lg tracking-widest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci necessitatibus nostrum deleniti a officiis sed, sapiente excepturi non illo iusto facere incidunt nobis debitis cum est quia accusamus sequi. Odio sint alias deserunt, maiores adipisci harum nihil reiciendis? Obcaecati, blanditiis.</p>
               <button className="mt-5 duration-700 px-4 py-2 border-2 rounded-lg border-zinc-950 text-zinc-100 tracking-widest font-bold hover:bg-yellow-600 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">See Details</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BestDish;
