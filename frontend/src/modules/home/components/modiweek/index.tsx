import PlaceholderImage from "@modules/common/icons/placeholder-image"
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"
const Modiweek = () => {
  return (
    <div>
      <div className="container mx-auto my-8">
        <h1 className="text-xl-semi">Modiweek</h1>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="relative">
            <PlaceholderImage width={152} height={243} />
            <p className="text-base-semi">Sunday</p>
            <div className="absolute top-2 right-2">
              <FaRegHeart size={20} />
            </div>
          </div>
          <div className="relative">
            <PlaceholderImage width={152} height={243} />
            <p className="text-base-semi">Sunday</p>
            <div className="absolute top-2 right-2">
              <FaRegHeart size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sustain bg-cover bg-no-repeat w-full h-[526px] relative">
        <div className="absolute bottom-20 left-[15%] capitalize text-center text-sm text-[#272F25]">
          Stylish sustainability in clothing promotes <br /> eco-friendly
          choices for a greater future
        </div>
        <button className="absolute bottom-4 px-4 py-2 bg-white right-4">
          Sustainability
        </button>
      </div>

      {/* follow us */}
      <div className="container mx-auto my-8">
        <h1 className="text-xl-semi">Follow us @modimal</h1>
        <div className="grid grid-cols-2">
          <div className="bg-landing_follow w-full h-100 bg-cover hidden md:block"></div>
          <div className="bg-landing_follow01 w-full h-100 bg-cover"></div>
        </div>
      </div>
    </div>
  )
}

export default Modiweek
