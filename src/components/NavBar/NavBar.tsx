import Image from "next/image";

const NavBar = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <nav
        className="flex-wrap lg:flex items-center py-14 xl:relative z-10"
        x-data="{navbarOpen:false}"
      >
        <div className="flex items-center justify-between mb-10 lg:mb-0">
          <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md">
            <i data-feather="menu">TEST</i>
          </button>
        </div>

        <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16">
          <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="#">House Info</a>
          </li>
          <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="#">Gallery</a>
          </li>
          {/* <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="#">Landing</a>
          </li> */}
          <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="#">Location</a>
          </li>

          <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="#">Amenities</a>
          </li>

          <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="#">Who we are</a>
          </li>
        </ul>

        {/* <button className="px-5 py-3 lg:block border-2 border-green-700 rounded-lg font-semibold text-green-700 text-lg hover:bg-green-700 hover:text-white transition ease-linear duration-500">
          Request quote
        </button> */}
      </nav>
    </div>
  );
};

export default NavBar;
