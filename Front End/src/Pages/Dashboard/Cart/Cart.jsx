import Swal from "sweetalert2";
import UseCart from "../../../Utils/UseCart";
import { TiDelete } from "react-icons/ti";
import UseAxiosSecure from "../../../Utils/UseAxiosSecure";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.menuPrice, 0).toFixed(2);
  const axiosSecure = UseAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
        //
      }
    });
  };

  return (
    <div className="font-poppins">
      <div className="flex justify-between items-center">
        <h1 className="text-xl uppercase font-light tracking-widest">
          Cart Details ....
        </h1>
      </div>
      <hr />
      <div className="mt-5 flex justify-between items-center">
        <h1 className="flex item-center gap-2 font-light text-xl">
          Total Orders:{" "}
          <span className="text-orange-600 tracking-normal font-bold">{`${cart.length}`}</span>
        </h1>
        <h1 className="flex item-center gap-2 font-light text-xl">
          Total Price:
          <span className="text-orange-600 tracking-normal font-bold">
            {" "}
            {`${totalPrice} $`}
          </span>
        </h1>
        <button className="duration-700 px-6 py-1 uppercase bg-orange-600 text-zinc-100 border border-orange-600 rounded-lg font-extrabold hover:text-orange-600 hover:bg-transparent hover:cursor-pointer hover:duration-700">
          Pay
        </button>
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-zinc-100">
                <th>Index</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            className="object-cover"
                            src={item.menuImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{item.menuName}</h1>
                  </td>
                  <td>$ {item.menuPrice}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 text-4xl duration-700 hover:text-orange-600 hover:cursor-pointer hover:duration-700"
                    >
                      <TiDelete></TiDelete>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
