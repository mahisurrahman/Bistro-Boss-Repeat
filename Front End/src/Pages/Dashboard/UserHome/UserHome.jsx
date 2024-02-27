import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
   logOut()
   .then(()=>{
      Swal.fire('Successfully Logged Out');
      navigate('/');
   })
   .catch(err=> console.log(err))
  }

  return (
    <div className="font-poppins">
      <div className="flex justify-between items-center">
        <h1 className="text-xl uppercase font-light tracking-widest">
          Hey Dear,{" "}
          <span className="font-extrabold">{`${user.displayName}`}</span> !!!
        </h1>
        <button onClick={handleLogout} className="px-4 py-1 border-2 duration-700 font-bold rounded-lg mb-2 hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:border-zinc-100 hover:duration-700">Log Out</button>
      </div>
      <hr />
      <div className="mt-4 border px-4 py-4 rounded-lg ">
         <h1 className="my-4 text-2xl tracking-widest text-orange-600">Email: <span className="tracking-normal text-zinc-100">{`${user?.email}`}</span></h1>
         <h1 className="my-4 text-2xl tracking-widest text-orange-600">Account Created: <span className="tracking-normal text-zinc-100">{`${user?.metadata?.creationTime}`}</span></h1>
         <img className="my-4 w-4/12 object-cover" src={user?.photoURL}/>
      </div>
    </div>
  );
};

export default UserHome;
