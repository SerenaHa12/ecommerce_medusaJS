"use client"

import React from "react"
import Slider from "react-slick"
import BannerText from "./BannerText"
import Image from "next/image"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi"

const Hero = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2 absolute"
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
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2 absolute"
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    adaptiveHeight: true,
  }
  return (
    <div className="relative overflow-hidden slider-container">
      <Slider {...settings}>
        {/* image 1 */}
        <div>
          <Image
            src="/banner/banner1.png"
            alt="bannerone"
            width={1600}
            height={1600}
            className="w-full"
            priority
          />
          {/* <BannerText title="Lunar NewYear" /> */}
        </div>

        {/* image 2 */}
        <div>
          <Image
            src="/banner/banner2.png"
            alt="bannertwo"
            className="w-full"
            width={1600}
            height={1600}
          />
          {/* <BannerText title="Seasonal Offers" /> */}
        </div>

        {/* image 3 */}
        <div>
          <Image
            src="/banner/banner3.png"
            alt="bannerthree"
            className="w-full"
            width={1600}
            height={1600}
          />
          {/* <BannerText title="Best for woman" /> */}
        </div>

        {/* image 4 */}
        <div>
          <Image
            src="/banner/banner4.png"
            alt="bannerfour"
            className="w-full"
            width={1600}
            height={1600}
          />
          {/* <BannerText title="Spring Collections" /> */}
        </div>
      </Slider>
    </div>
  )
}

export default Hero
