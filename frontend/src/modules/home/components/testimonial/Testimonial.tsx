import Image from "next/image"
import React from "react"
import Link from "next/link"

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="mx-auto text-2xl bg-tranparent border-2 border-[#AA2010] text-[#AA2010] text-center py-2 px-6 rounded-full duration-200  uppercase font-semibold w-fit mb-6">
          Testimonials
        </h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border-2 bg-tranparent border-gray-300 rounded-lg grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src="/user.jpg"
                width={80}
                height={80}
                alt="dp"
              />
              <h2 className="text-gray-500 font-black text-[20px]">
                Mary Jane
              </h2>
              <p>CEO & Founder Invision</p>

              <p className="max-w-[200px] text-gray-500 text-sm">
                I recently had the pleasure of purchasing from Smart and wanted
                to share my positive experience.
              </p>
            </div>
          </div>

          <div className="bg-red-600 bg-[url(/tes.jpg)] bg-cover h-[500px] rounded-lg grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-lg py-8 sm:px-8 px-2 grid place-items-center gap-3">
              {/* <button className="bg-blackish text-black p-2 rounded-md">
                25% DISCOUNT
              </button> */}
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Spring Collection
              </h2>
              <p className="text-white text-[20px]">
                <Link href="/store">
                  <button className="py-3 px-6 bg-[#AA2010] rounded-full bg-tranparent hover:text-white duration-200 text-sm uppercase font-semibold cu">
                    Shop Now
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
