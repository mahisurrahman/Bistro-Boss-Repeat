

const PopularItems = ({item}) => {
   return (
      <div className="flex gap-5 items-start justify-start">
         <div>
            <img className="w-28 h-20 rounded-lg object-cover" src={item.image} alt="" />
         </div>
         <div>
            <h1 className="text-2xl text-yellow-600">{item.name} ----------- </h1>
            <p className="text-md tracking-wider">{item.description}</p>
         </div>
         <div>
            <p className="text-yellow-600">${item.price}</p>
         </div>
      </div>
   );
};

export default PopularItems;