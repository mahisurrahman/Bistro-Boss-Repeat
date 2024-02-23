import './MenuPageBanner.css';

const MenuPageBanner = () => {
   return (
      <div className="menuBannerImage">
         <div className='h-[500px] z-10 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-10/12 h-[300px] z-10 bg-black bg-opacity-70 flex flex-col justify-center items-center'>
               <h1 className='text-zinc-100 text-7xl font-extrabold tracking-widest uppercase'>Our Menu</h1>
               <p className='text-xl font-semibold tracking-widest mt-2'>Would You Like to Try A Dish?</p>
            </div>
         </div>
      </div>
   );
};

export default MenuPageBanner;