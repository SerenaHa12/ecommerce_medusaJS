// custom product card by Ha Chi

import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import { FaRegHeart } from "react-icons/fa"
import { IoStar, IoStarSharp } from "react-icons/io5"
const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
}: ProductPreviewType) => {
  console.log(thumbnail)

  return (
    <Link href={`/products/${handle}`} className="group  ">
      {" "}
      <div className="relative overflow-hidden border border-slate-300 rounded-lg">
        <div className=" absolute z-10 top-3  right-3 w-24 py-1.5   text-center   bg-white font-medium  text-xs  rounded-full group-hover:bg-orange-600 group-hover:text-white duration-200">
          New Arrival
        </div>
        <div className="  ">
          <div className="overflow-hidden">
            {" "}
            <Thumbnail
              thumbnail={thumbnail}
              size="small"
              isFeatured={isFeatured}
              className=" hover:scale-110 duration-200"
            />
          </div>

          <div className=" mx-2 my-4 flex flex-col gap-y-2">
            {" "}
            <div className="txt-compact-medium  ">
              <Text className="text-base-semi">{title}</Text>
            </div>
            <div className="flex justify-between">
              <div className="border border-orange-600 py-1 px-4 rounded-full text-xs">
                <p>20% off</p>
              </div>
              <div className="flex gap-2">
                <div className="text-slate-500 line-through text-sm my-auto">
                  $100.00
                </div>
                <div className="text-base text-darkText font-semibold">
                  {price ? (
                    <>
                      {price.price_type === "sale" && (
                        <Text className="line-through text-base-semi">
                          {price.original_price}
                        </Text>
                      )}
                      <Text
                        className={clsx("text-base-semi", {
                          "text-ui-fg-interactive": price.price_type === "sale",
                        })}
                      >
                        {price.calculated_price}
                      </Text>
                    </>
                  ) : (
                    <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5 w-full">
              {" "}
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <div className="w-6 h-6 rounded-full bg-[#909225]"></div>
                <div className="w-6 h-6 rounded-full bg-[#CA6D29]"></div>
              </div>
              <div className="flex gap-2 text-yellow-400 my-auto">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative z-10 left-16 top-8 ">
        <FaRegHeart />
      </div> */}
    </Link>
  )
}

export default ProductPreview
