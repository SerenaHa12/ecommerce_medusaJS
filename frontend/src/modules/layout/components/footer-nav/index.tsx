"use client"

import Container from "@modules/home/components/hero/Container"
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"
const FooterNav = () => {
  return (
    <div className="w-full bg-[#212121]  text-slate-100 px-8 py-2">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4 pl-16">
          <Link href="/">
            <h3 className="text-xl-semi text-zinc-50 hover:text-[#AA2010] cursor-pointer">
              ECM
            </h3>
          </Link>
          <p className="text-gray-500 text-sm">
            We have customer to find the best product near them, not time spent
            searching for best one.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsYoutube />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
          </div>
        </div>
        <div className="pl-16">
          <p className="text-lg font-semibold text-gray-500">Product</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-3">
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                New
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Upcoming
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Spring Collection
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                On Sale
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Live Demo
              </span>
            </li>
          </ul>
        </div>
        <div className="pl-16">
          <p className="text-lg font-semibold text-gray-500">Resources</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-3">
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Instagram Post
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Blog
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Live Demo
              </span>
            </li>
          </ul>
        </div>
        <div className="pl-16">
          <p className="text-lg font-semibold text-gray-500">Contact Us</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-3">
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Live Chat
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate font-bold cursor-pointer duration-200">
                Main Us
              </span>
            </li>
          </ul>
        </div>
        {/* <div>
          <p className="text-lg mb-2">Pay us with your trusted services</p>
          <Image
            src="/payment.png"
            alt="payment banner image"
            className="w-full h-10 object-cover"
            width={2000}
            height={200}
          />
        </div> */}
      </Container>
    </div>
  )
}

export default FooterNav
