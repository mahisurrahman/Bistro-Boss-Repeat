const IndividualItem = ({item}) => {

   const handleIndividualItem = (id) =>{
      console.log(id);
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
              handleIndividualItem(item._id);
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
