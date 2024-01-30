// custom product card by Ha Chi

import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { ProductCollection } from "@medusajs/medusa"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
  searchValue,
  collection,
}: ProductPreviewType & {
  searchValue: string
  collection: ProductCollection
}) => {
  const isMatch = searchValue
    ? title.toLowerCase().includes(searchValue.toLowerCase())
    : true

  // Nếu không trùng khớp, ẩn sản phẩm
  if (!isMatch) {
    return null
  }

  function updateThumbnail(thumbnail: any) {
    if (thumbnail.includes("http://localhost:9000")) {
      return thumbnail.replace(
        "http://localhost:9000",
        "https://api-ecm.5labs.io"
      )
    }
    return thumbnail
  }
  // console.log("thumbnail", thumbnail)
  const newThumbnail = updateThumbnail(thumbnail)

  return (
    <Link href={`/products/${handle}`} className="group  ">
      {" "}
      <div className="relative overflow-hidden">
        <div className=" absolute z-10 top-3  right-3 w-24 py-1.5   text-center   bg-white font-medium  text-xs  rounded-full group-hover:bg-[#AA2010] group-hover:text-white duration-200">
          {collection?.title}
        </div>
        <div className="">
          <div className="overflow-hidden">
            {" "}
            <Thumbnail
              thumbnail={newThumbnail}
              size="small"
              isFeatured={isFeatured}
              className=" hover:scale-110 duration-200"
            />
          </div>

          <div className=" mx-2 my-4 flex flex-col gap-y-2">
            {" "}
            <div className="txt-compact-medium flex justify-between">
              <Text className="text-base text-bold text-[#AA2010]">
                {title}
              </Text>
              <div>
                <div className="border bg-[#AA2010] py-1 px-2 rounded-full text-xs text-white">
                  <p>20% off</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="text-gray-500 line-through text-sm my-auto">
                  $100.00
                </div>
                <div className="text-lg text-darkText font-semibold">
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
              <div className="flex gap-2 group-hover:text-[#AA2010]">
                <div className="my-auto">
                  <AiOutlineShoppingCart size={30} />
                </div>
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
