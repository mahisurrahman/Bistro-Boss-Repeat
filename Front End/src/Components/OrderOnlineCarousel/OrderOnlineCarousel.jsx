import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./OrderOnlineCarousel.css";
import { Pagination } from "swiper/modules";

const OrderOnlineCarousel = () => {
  return (
    <div className="w-10/12 mx-auto my-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className="h-[300px] w-full">
            <img className="object-fit" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-10">Caramel Deserts</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="h-[300px] w-full">
            <img className="object-fit" src="https://images.unsplash.com/photo-1547558840-8ad6c8e662a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-10">BBQ PIZZA</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="h-[300px] w-full">
            <img className="object-fit" src="https://images.unsplash.com/photo-1611712142269-12b7433e28e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-10">Turkish Dish</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="h-[300px] w-full">
            <img className="object-fit" src="https://images.unsplash.com/photo-1611712141499-e1921675b032?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-10">Bengali Dish</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="h-[300px] w-full">
            <img className="object-fit" src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-10">Cheese Paneer</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="h-[300px] w-full">
            <img className="object-fit" src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-10">Italiano Ramen</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="h-[300px] w-full">
            <img className="object-fit" src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="text-3xl font-semibold text-center text-white -mt-10">Mutton Bhuna</h1>
         </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default OrderOnlineCarousel;
