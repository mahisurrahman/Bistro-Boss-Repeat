import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-orange-200 text-black">
        <aside>
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww"
            alt=""
          />
          <p className="text-lg font-semibold tracking-widest">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="text-4xl font-extrabold">Socials</h6>
          <div className="grid grid-flow-col gap-4 text-5xl">
            <FaFacebook className="duration-700 hover:duration-700 hover:cursor-pointer hover:text-orange-600"></FaFacebook>
            <FaInstagram className="duration-700 hover:duration-700 hover:cursor-pointer hover:text-orange-600"></FaInstagram>
            <FaTwitter className="duration-700 hover:duration-700 hover:cursor-pointer hover:text-orange-600"></FaTwitter>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-black text-white font-semibold tracking-widest">
        <aside>
          <p>Copyright © 2024 - All right reserved by Mahisur Rahaman Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
