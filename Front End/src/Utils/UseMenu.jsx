import { useState } from "react";
import UseAxiosSecure from "./UseAxiosSecure";



const UseMenu = () => {
   const [menu, setMenu] = useState([]);
   const [loading, setLoading] = useState(true);
   const axiosSecure = UseAxiosSecure();

   // useEffect(()=>{
   //    fetch('http://localhost:7000/menu')
   //    .then(res=> res.json())
   //    .then(data=> {
   //       setMenu(data);
   //       setLoading(false); });
   // },[])

   axiosSecure.get('/menu')
   .then(res=>{
      setMenu(res.data);
      setLoading(false);
   })

   return [menu, setMenu, loading, setLoading];
};

export default UseMenu;