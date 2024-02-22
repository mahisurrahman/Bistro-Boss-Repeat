/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const HomeLayout = () => {
    
    return (
        <div className="font-avent-pro max-w-screen-xl mx-auto bg-zinc-950 text-zinc-100">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;