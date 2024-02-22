import OrderOnlineCarousel from "../OrderOnlineCarousel/OrderOnlineCarousel";
import TitleAndSubTitle from "../TitleAndSubtitle/TitleAndSubTitle";


const OrderOnline = () => {
   return (
      <div className="my-10 py-10">
         <TitleAndSubTitle title={'Order Online'} subTitle={'from 11:00am to 10:00pm'}></TitleAndSubTitle>
         <OrderOnlineCarousel></OrderOnlineCarousel>
      </div>
   );
};

export default OrderOnline;