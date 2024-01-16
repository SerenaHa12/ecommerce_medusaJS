"use client"

import Slider from "react-slick"
import BannerText from "./BannerText"
import Image from "next/image"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi"

const Hero = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    )
  }

  const PrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    )
  }

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    adaptiveHeight: true,
  }
  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        <div className="w-full relative">
          <Image
            src="/banner/banner1.png"
            alt="bannerone"
            width={2000}
            height={2000}
            className="w-full relative"
            priority
          />
          <BannerText title="Lunar NewYear" />
        </div>
        <div className="w-full relative">
          <Image
            src="/banner/banner2.png"
            alt="bannertwo"
            className="w-full relative"
            width={2000}
            height={2000}
          />
          <BannerText title="Seasonal Offers" />
        </div>
        <div className="w-full relative">
          <Image
            src="/banner/banner3.png"
            alt="bannerthree"
            className="w-full relative"
            width={2000}
            height={2000}
          />
          <BannerText title="Best for woman" />
        </div>
        <div className="w-full relative">
          <Image
            src="/banner/banner4.png"
            alt="bannerfour"
            className="w-full relative"
            width={2000}
            height={2000}
          />
          <BannerText title="Spring Collections" />
        </div>
      </Slider>
    </div>
  )
}

export default Hero
