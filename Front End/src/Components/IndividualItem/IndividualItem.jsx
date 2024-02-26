import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
// import axios from "axios";
import { axiosSecure } from "../../Utils/UseAxiosSecure";

const IndividualItem = ({item}) => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

   const handleIndividualItem = (foodItem) =>{
      if(user && user.email){
        const cartItem = {
          menuId: foodItem._id,
          email: user.email,
          menuName: foodItem.name,
          menudescription: foodItem.description,
          menuImage: foodItem.image,
          menuCategory: foodItem.category,
          menuPrice: foodItem.price, 
        }
       axiosSecure.post('/carts', cartItem)
       .then(res=>{
        if(res.data.insertedId){
          Swal.fire('Successfully Added to the Cart');
        }
       }) 
       .catch(err=> console.log(err))

      }else{
        navigate('/login', {state: {from: location}});
      }
   }

  return (
    <div className="card w-96 bg-orange-600 shadow-xl">
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
          <button
            onClick={() => {
              handleIndividualItem(item);
            }}
            className="btn btn-warning"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualItem;
