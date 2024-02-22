import './BannerTwo.css';

const BannerTwo = () => {
   return (
      <div className="my-10 w-10/12 mx-auto h-[350px] backGroundImage flex items-center justify-center">
         <div className='h-[250px] w-10/12 px-20 border-2 bg-zinc-100 text-black flex flex-col text-center items-center justify-center'>
               <h1 className='text-5xl font-extrabold'> -- Bistro Boss -- </h1>
               <p className='mt-5 text-xl tracking-wider font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque a eaque quaerat eius laborum tenetur. Exercitationem quidem ipsam ullam ducimus quibusdam doloremque, perferendis numquam voluptate fugit, totam unde eveniet velit.</p>
         </div>
      </div>
   );
};

export default BannerTwo;