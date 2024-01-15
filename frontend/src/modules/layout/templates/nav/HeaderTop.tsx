import React from "react"

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b bg-[#404040] border-gray-200 hidden sm:block px-8">
      <div className="container py-2 flex justify-center">
        <div></div>
        <div className="flex justify-start overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="text-zinc-50 text-subheading text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
              <b>BEST PLATFORM FOR ECOMMERCE</b>
            </div>

            <div className="text-zinc-50 text-subheading text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55{" "}
              <b>BEST PLATFORM FOR ECOMMERCE</b>
            </div>

            <div className="text-zinc-50 text-subheading text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55{" "}
              <b>BEST PLATFORM FOR ECOMMERCE</b>
            </div>

            <div className="text-zinc-50 text-subheading text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55{" "}
              <b>BEST PLATFORM FOR ECOMMERCE</b>
            </div>
            {/* <div className="hidden lg:flex gap-1">
              <div className="header_top__icon_wrapper">
                <BsFacebook />
              </div>
              <div className="header_top__icon_wrapper">
                <BsTwitter />
              </div>
              <div className="header_top__icon_wrapper">
                <BsInstagram />
              </div>
              <div className="header_top__icon_wrapper">
                <BsLinkedin />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
