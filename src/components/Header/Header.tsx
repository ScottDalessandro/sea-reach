import Image from "next/image";
import navbarLogo from "../../../public/image/navbar-logo.png";
import outdoorFirepitImg from "../../../public/image/house/outdoor-firepit-lights.jpg";
import livingRoomImg from "../../../public/image/house/living-room-wide.jpg";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <section className="bg-white mb-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <Image
          src={livingRoomImg}
          objectFit="cover"
          quality={25}
          alt="living room"
        />
        <div className="flex items-center justify-center xl:justify-start ">
          <div className="mt-28 text-center xl:text-left">
            <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">
              Unpack, unplug, and unwind. <br />
            </h1>
            <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12">
              Welcome to Sea Reach, your beach home-away-from-home
            </p>
            <button className="px-6 py-4 bg-green-700 text-white font-semibold text-lg rounded-xl hover:bg-green-900">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
