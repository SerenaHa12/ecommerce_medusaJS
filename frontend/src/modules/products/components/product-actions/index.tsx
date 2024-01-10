import {
  ProductProvider,
  useProductActions,
} from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import React, { useMemo, useState } from "react"
import { BsTruck } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
type ProductActionsProps = {
  product: PricedProduct
}

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  // const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  // const selectedPrice = useMemo(() => {
  //   const { variantPrice, cheapestPrice } = price

  //   return variantPrice || cheapestPrice || null
  // }, [pri
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="flex flex-col gap-8 mb-32  max-md:text-center max-md:items-center">
        <div className="text-[32px] font-semibold">Wrap Top</div>
        <div>
          Versatile And Universally Flattering, Our Wrap Blouse Can Be Tied,
          Draped, Snapped And Wrapped Multiple Ways.
        </div>
      </div>
      <div>
        {product.variants.length > 1 && (
          <div className="flex flex-col gap-y-4">
            {(product.options || []).map((option) => {
              return (
                <div key={option.id}>
                  <OptionSelect
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                  />
                </div>
              )
            })}
            <Divider />
          </div>
        )}
      </div>

      {/* {selectedPrice ? (
        <div className="flex flex-col text-ui-fg-base">
          <span
            className={clsx("text-xl-semi", {
              "text-ui-fg-interactive": selectedPrice.price_type === "sale",
            })}
          >
            {selectedPrice.calculated_price}
          </span>
          {selectedPrice.price_type === "sale" && (
            <>
              <p>
                <span className="text-ui-fg-subtle">Original: </span>
                <span className="line-through">
                  {selectedPrice.original_price}
                </span>
              </p>
              <span className="text-ui-fg-interactive">
                -{selectedPrice.percentage_diff}%
              </span>
            </>
          )}
        </div>
      ) : (
        <div></div>
      )} */}

      <Button
        onClick={addToCart}
        disabled={!inStock || !variant}
        variant="primary"
        className="w-full h-10 bg-[#748C70]"
      >
        {!inStock
          ? "Out of stock"
          : !variant
          ? "Select variant"
          : "Add to cart"}
      </Button>
      <div className="flex justify-between text-[#868686] px-4 py-8">
        <div className="flex items-center gap-2">
          <div>
            <BsTruck className="w-5 h-5" />
          </div>
          <div>Easy Return</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <CiHeart className="w-5 h-5" />
          </div>
          <div>Add To Wish List</div>
        </div>
      </div>
      <div className="border-2 border-[#ADADAD] px-4 py-8 bg-[#F0F2EF] flex flex-col gap-8">
        <div className="pb-4 text-xl font-normal leading-9 border-b border-[#ADADAD]">
          Silk
        </div>
        <div className="text-lg leading-8 font-normal">
          This Material Is Our Signature High-Stretch Fabric That Drapes Like
          Silk And Is Soft To The Touch. Silk Is OEKO-TEX® Certified And Made In
          Italy In A Mill 100% Powered By Renewable Energy (Solar And Biomass)
        </div>
        <div className="flex gap-4 text-sm font-normal leading-7 mt-5">
          <div className="py-3 px-4 my-auto bg-white cursor-pointer">
            Quick Dry
          </div>
          <div className="max-w-[190px] w-full text-center my-auto py-3 bg-white cursor-pointer">
            Chemical Free
          </div>
          <div className="max-w-[183px] w-full text-center my-auto py-3 bg-white cursor-pointer">
            Machine Washable
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} />
  </ProductProvider>
)

export default ProductActions
