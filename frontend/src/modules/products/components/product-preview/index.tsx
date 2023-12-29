// custom product card by Ha Chi

import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import { FaRegHeart } from "react-icons/fa"
const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
}: ProductPreviewType) => {
  console.log(thumbnail)

  return (
    <Link href={`/products/${handle}`} className="group">
      {" "}
      {/* <div className="relative z-10  left-8 top-20 w-20 px-6 py-1.5 bg-white">
    New
  </div> */}
      <div className="relative z-50 left-16 top-8 ">
        <FaRegHeart />
      </div>
      <div className="">
        <Thumbnail thumbnail={thumbnail} size="small" isFeatured={isFeatured} />

        <div className="txt-compact-medium mt-4 justify-between">
          <Text className="text-base-semi">{title}</Text>

          <div className="flex items-center gap-x-2 text-base-semi float-right">
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
        <div className="flex gap-2 mt-4">
          <div className="w-6 h-6 rounded-full bg-black"></div>
          <div className="w-6 h-6 rounded-full bg-[#909225]"></div>
          <div className="w-6 h-6 rounded-full bg-[#CA6D29]"></div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
