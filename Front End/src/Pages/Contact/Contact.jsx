import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-zinc-950 text-zinc-100 py-28 w-10/12 mx-auto">
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-zinc-100 mb-8">
          Get in Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Location</h2>
            <p className="text-gray-800 tracking-widest">
              359no. Saha Suja Road
              <br />
              Narayanganj, 1400
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Opening Hours
            </h2>
            <p className="text-gray-800 tracking-widest">
              Monday - Friday: 10:00 AM - 10:00 PM
              <br />
              Saturday - Sunday: 9:00 AM - 11:00 PM
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Reservation
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-800">
              Phone: (+880) 1621754583
              <br />
              Email: mahisur.rahman.001@gmail.com
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <div className="grid grid-flow-col gap-4 text-5xl">
                <FaFacebook className="text-red-400 duration-700 hover:duration-700 hover:cursor-pointer hover:text-orange-600"></FaFacebook>
                <FaInstagram className="text-red-400 duration-700 hover:duration-700 hover:cursor-pointer hover:text-orange-600"></FaInstagram>
                <FaTwitter className="text-red-400 duration-700 hover:duration-700 hover:cursor-pointer hover:text-orange-600"></FaTwitter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
