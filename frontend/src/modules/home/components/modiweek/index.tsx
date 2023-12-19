import Image from "next/image"
const Modiweek = () => {
  return (
    <div>
      <div className="container mx-auto my-8">
        <h1 className="text-xl-semi">Modiweek</h1>
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
        <div className="flex">
          <Image
            src="/landing/follow1.png"
            alt="follow"
            width={320}
            height={388}
            className="hidden lg:block 2xl:block xl:block"
          />
          <Image
            src="/landing/follow.png"
            alt="follow"
            width={320}
            height={388}
          />
        </div>
      </div>
    </div>
  )
}

export default Modiweek
