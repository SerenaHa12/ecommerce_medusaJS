import React from "react"

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block px-8">
      <div className="container py-4 flex justify-center">
        <div></div>
        <div>
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
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
