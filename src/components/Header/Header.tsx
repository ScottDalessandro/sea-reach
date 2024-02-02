import Image from "next/image";
import navbarLogo from "../../../public/navbar-logo.png";
import livingRoom from "../../../public/outdoor-firepit-lights.jpg";
import homeImg from "../../../public/home-img.png";

const Header = () => {
  return (
    <section className="bg-white mb-20 md:mb-52 xl:mb-72">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav
          className="flex-wrap lg:flex items-center py-14 xl:relative z-10"
          x-data="{navbarOpen:false}"
        >
          <div className="flex items-center justify-between mb-10 lg:mb-0">
            <Image
              src={navbarLogo}
              alt="Logo img"
              className="w-52 md:w-80 lg:w-full"
            />

            <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md">
              <i data-feather="menu"></i>
            </button>
          </div>

          <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16">
            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Landing</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Pages</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Contact</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">About</a>
            </li>
          </ul>

          <button className="px-5 py-3 lg:block border-2 border-green-700 rounded-lg font-semibold text-green-700 text-lg hover:bg-green-700 hover:text-white transition ease-linear duration-500">
            Request quote
          </button>
        </nav>

        <div className="flex items-center justify-center xl:justify-start">
          <div className="mt-28 text-center xl:text-left">
            <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">
              Get your dream <br /> house now
            </h1>

            <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12">
              Having a sweet home is everyone&apos;s dream. Have you <br />{" "}
              owned your dream house?
            </p>

            <button className="px-6 py-4 bg-green-700 text-white font-semibold text-lg rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
              Contact us
            </button>
          </div>

          <div className="hidden xl:block xl:absolute z-0 top-0 right-0">
            {/* <Image
              src={homeImg}
              alt="Home img"
              className="w-52 md:w-80 lg:w-full"
            /> */}

            <Image
              src={livingRoom}
              alt="Home img"
              className="w-24 md:w-32 lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;