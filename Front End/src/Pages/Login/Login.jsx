import { Link, useNavigate } from "react-router-dom";
import { FaBurger } from "react-icons/fa6";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password).then((result) => {
      console.log(result);
      Swal.fire("Successfully Logged In");
      navigate("/");
    });
  };

  const handleGoogle = () => {
    googleSignIn().then((result) => {
      Swal.fire(`Successfully Created`, result);
      navigate("/");
    });
  };

  return (
    <div className="bg-orange-500 w-full h-screen flex items-center font-avent-pro">
      <div className="w-10/12 mx-auto grid grid-cols-2 items-center justify-center gap-10">
        <div className="loginImage h-[500px] rounded-2xl border-2 border-zinc-950 px-10 py-10">
          <div className="bg-black z-10 bg-opacity-80 h-full text-zinc-100 flex flex-col items-center justify-center text-center rounded-2xl px-10">
            <FaBurger className="text-8xl text-red-500 mb-5"></FaBurger>
            <h1 className="text-5xl font-extrabold">Hello Homie !</h1>
            <p className="text-5xl font-normal mt-2">
              Welcome Back to Bistro Boss !!!
            </p>
            <p className="text-2xl font-bold mt-10 uppercase tracking-widest text-yellow-500">
              Sign In and Get Your Desired Dish Right Away
            </p>
          </div>
        </div>
        <div className="h-[500px]">
          <form
            onSubmit={handleLogin}
            className="border-4 px-10 py-10 rounded-2xl border-zinc-100 h-[500px]"
          >
            <h1 className="text-4xl text-center text-zinc-100 font-extrabold uppercase underline">
              Login with Details
            </h1>
            <input
              className="text-xl font-bold mt-8 w-full py-3 rounded-lg px-5 outline-none"
              type="email"
              name="email"
              placeholder="email"
            />
            <br />
            <input
              className="text-xl font-bold mt-8 w-full py-3 rounded-lg px-5 outline-none"
              type="password"
              name="password"
              placeholder="password"
            />
            <br />
            <div className="w-full flex items-center justify-center">
              <input
                className="duration-700 text-2xl font-extrabold text-zinc-100 px-10 py-2 border-2 rounded-lg mt-10 hover:bg-zinc-950 hover:border-zinc-953 hover:cursor-pointer hover:duration-700"
                type="submit"
                value="Login"
              />
            </div>
            <div className="mt-5 flex justify-between items-center">
              <h1 className="underline text-lg font-bold text-zinc-100 uppercase tracking-widest">
                New to Bistro Boss?
              </h1>
              <Link to="/signup">
                <button className="duration-700 text-xl px-6 py-1 font-extrabold bg-zinc-100 text-orange-500 border-2 rounded-lg uppercase hover:border-zinc-950 hover:bg-zinc-950 hover:cursor-pointer hover:duration-700">
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="mt-5 flex justify-center items-center">
              <button
                onClick={handleGoogle}
                className="duration-700 text-xl px-6 py-1 font-extrabold bg-zinc-100 text-orange-500 border-2 rounded-lg uppercase hover:border-zinc-950 hover:bg-zinc-950 hover:cursor-pointer hover:duration-700"
              >
                Login With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
