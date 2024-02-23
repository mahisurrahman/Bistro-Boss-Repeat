import { useEffect, useState } from "react";


const UseMenu = () => {
   const [menu, setMenu] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
      fetch('http://localhost:7000/menu')
      .then(res=> res.json())
      .then(data=> {
         setMenu(data);
         setLoading(false); });
   },[])

   return [menu, setMenu, loading, setLoading];
};

export default UseMenu;