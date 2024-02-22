

const TitleAndSubTitle = ({title, subTitle}) => {
   return (
      <div className="w-4/12 mx-auto text-center">
         <p className="font-light tracking-widest"> -- {subTitle} -- </p>
         <div className="divider divider-warning my-2"></div>
         <h1 className="text-5xl tracking-wider uppercase">{title}</h1>
         <div className="divider divider-warning my-2"></div>
      </div>
   );
};

export default TitleAndSubTitle;