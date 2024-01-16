"use client"

import Button from "@modules/common/components/button"
import Link from "next/link"
import Slider from "react-slick"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi"
import Image from "next/image"
const YearProduct = () => {
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
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="pt-16">
      <div>
        <h2 className="mx-auto text-2xl text-white bg-[#AA2010] text-center py-2 px-6 rounded-full duration-200  uppercase font-semibold w-fit mb-6">
          Modiweek
        </h2>
        <Slider {...settings}>
          <div>
            <Image
              src="/list/frame1.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
          <div>
            <Image
              src="/list/frame2.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
          <div>
            <Image
              src="/list/frame3.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
          <div>
            <Image
              src="/list/frame4.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
          <div>
            <Image
              src="/list/frame5.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
          <div>
            <Image
              src="/list/frame6.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
          <div>
            <Image
              src="/list/frame7.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
          <div>
            <Image
              src="/list/frame8.png"
              alt="bannerone"
              width={2000}
              height={2000}
              className="w-full relative"
              priority
            />
          </div>
        </Slider>
      </div>
      {/* <div className="relative bg-[url(/productOfTheYear.webp)] bg-cover w-full h-80 object-cover">
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Product of the Year has a globally expanding footprint that stands
            in more than 45 countries.
          </p>
          <Link href="/store">
            <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default YearProduct
