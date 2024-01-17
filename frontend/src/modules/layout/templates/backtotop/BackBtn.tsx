// BackBtn.tsx
"use client"

import React from "react"
import { FaArrowAltCircleUp } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"

const BackBtn: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    })
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="px-2 py-2 cursor-pointer bg-white text-[#B02E20] font-semibold flex items-center justify-center p-1.5 rounded-full hover:bg-white border-2 border-gray-200 hover:border-[#B02E20] duration-200 scroll-to-top-btn"
        onClick={scrollToTop}
      >
        <FaArrowAltCircleUp size={30} />
      </button>
    </div>
  )
}

export default BackBtn
