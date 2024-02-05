import Image from "next/image";
import outdoorFirepitImg from "../../../public/image/house/outdoor-firepit-lights.jpg";

const Description = () => {
  return (
    <section className="bg-white mb-20 md:mb-52 xl:mb-72">
      <div className="flex container max-w-screen-xl mx-auto px-4">
        <Image
          src={outdoorFirepitImg}
          alt="outdoor firepit"
          className="flex-auto w-24"
        />
        {/* make this a custom image for each bullet or a checkmark */}
        <ul className="flex-auto w-32 pl-10 list-disc">
          <li>4 Minute walk to beach entrance an Jenkinsons Boardwalk</li>
          <li>Sleeps 8 - 4 Bedrooms</li>
          <li>2 Bathrooms, 1 Outdoor Shower</li>
        </ul>
      </div>
    </section>
  );
};

export default Description;
