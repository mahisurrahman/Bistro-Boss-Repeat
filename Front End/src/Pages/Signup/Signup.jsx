import { FaPizzaSlice } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="bg-lime-500 w-full h-screen flex items-center font-avent-pro">
      <div className="w-10/12 mx-auto grid grid-cols-2 items-center justify-center gap-10">
        <div className="h-[500px]">
          <form onSubmit={handleSubmit()} className="border-4 px-10 py-5 rounded-2xl border-zinc-950 h-[500px]">
            <h1 className="text-3xl text-center text-zinc-950 font-extrabold uppercase underline">
              Sign Up with Details
            </h1>
            <input
              className="text-md font-bold mt-4 w-full py-2 rounded-lg px-5 outline-none"
              type="text"
              name="photo"
              id=""
              placeholder="Photo URL"
              {...register('photo', {required: true})} 
            />
            <br />
            {errors.photo && <p>Photo is required.</p>}
            <input
              className="text-md font-bold mt-4 w-full py-2 rounded-lg px-5 outline-none"
              type="text"
              name="name"
              id=""
              placeholder="name"
              {...register('name', {required: true})} 
            />
            <br />
            {errors.name && <p>Name is required.</p>}
            <input
              className="text-md font-bold mt-4 w-full py-2 rounded-lg px-5 outline-none"
              type="email"
              name="email"
              id=""
              placeholder="email"
              {...register('email', {required: true})} 
            />
            <br />
            {errors.email && <p>Email is required.</p>}
            <input
              className="text-md font-bold mt-4 w-full py-2 rounded-lg px-5 outline-none"
              type="password"
              name="password"
              id=""
              placeholder="password"
              {...register('password', {required: true})} 
            />
            <br />
            {errors.password && <p>Password is required.</p>}
            <div className="w-full flex items-center justify-center">
              <input
                className="duration-700 text-xl font-extrabold text-zinc-950 px-10 py-1 border-2 border-zinc-950 rounded-lg mt-5 hover:bg-zinc-950 hover:border-zinc-953 hover:text-zinc-100 hover:cursor-pointer hover:duration-700"
                type="submit"
                value="SignUp"
              />
            </div>
            <div className="mt-5 flex justify-between items-center">
              <h1 className="underline text-lg font-extrabold text-zinc-950 uppercase tracking-widest">
                Old to Bistro Boss?
              </h1>
              <Link to="/login">
                <button className="duration-700 text-xl px-6 py-1 font-extrabold bg-zinc-950 text-orange-500 border-2 border-zinc-950 rounded-lg uppercase hover:border-zinc-100 hover:bg-zinc-100 hover:cursor-pointer hover:duration-700">
                  Login
                </button>
              </Link>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button className="duration-700 text-xl px-6 py-1 font-extrabold bg-zinc-950 text-orange-500 border-2 border-zinc-950 rounded-lg uppercase hover:border-zinc-100 hover:bg-zinc-100 hover:cursor-pointer hover:duration-700">
                Sign Up With Google
              </button>
            </div>
          </form>
        </div>
        <div className="signUpImage h-[500px] rounded-2xl border-2 border-zinc-950 px-10 py-10">
          <div className="bg-black z-10 bg-opacity-80 h-full text-zinc-100 flex flex-col items-center justify-center text-center rounded-2xl px-14">
            <FaPizzaSlice className="text-8xl text-yellow-600 mb-5"></FaPizzaSlice>
            <h1 className="text-5xl font-extrabold">Well Well Well !!!</h1>
            <p className="text-5xl font-normal mt-2">
              Look, Who Just Showed Up !!!
            </p>
            <p className="text-2xl font-bold mt-10 uppercase tracking-widest text-yellow-500">
              {`
              Aren't You Hungry Yet? I Bet You Are !!! `}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
