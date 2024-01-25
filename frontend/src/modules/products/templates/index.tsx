"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ImageGallery from "@modules/products/components/image-gallery"
import MobileActions from "@modules/products/components/mobile-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "../components/product-actions"
import { ProductCollection } from "@medusajs/medusa"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = (
  { product },
  { collection }: { collection: ProductCollection }
) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const infoRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(infoRef, "0px")
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isDropdownOpen1, setDropdownOpen1] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }
  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1)
  }
  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <ProductProvider product={product}>
      <div className="content-container  md:grid grid-cols-2 small:flex-row small:items-start py-6">
        {/* <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div> */}
        <div className="col-span-1">
          {" "}
          <div className="flex">
            <div className=" max-h-[512px] overflow-y-auto  flex flex-col gap-5">
              <ImageGallery images={product?.images || []} />
            </div>
            <div className=" w-full ">
              <ImageGallery images={product?.images || []} />
            </div>
          </div>
          <div className=" max-md:mx-auto border-2 border-[#ADADAD] md:mr-10 mt-10">
            <div
              onClick={toggleDropdown}
              className={`flex w-full justify-between   py-6 px-5 text-[#0C0C0C] text-xl font-bold cursor-pointer ${
                isDropdownOpen ? "" : ""
              }`}
            >
              <div>Fitting</div>
              <div className="text-xl">+</div>
            </div>
            <div
              className={` pb-6 bg-white  rounded ${
                isDropdownOpen ? "" : "hidden"
              }`}
            >
              <div className="w-full border-b-2 border-[#ADADAD]"></div>
              <div
                onClick={toggleDropdown}
                className={`flex w-full px-5 justify-between py-6 text-[#748C70] text-xl font-bold cursor-pointer ${
                  isDropdownOpen ? "" : "hidden"
                }`}
              >
                <div>Fabric & Care </div>
                <div className="text-xl">-</div>
              </div>
              <div className="text-base leading-7 px-5 font-normal">
                {" "}
                Fabric : <br /> Tailored Stretch,
                <br /> Made In Italy62% Nylon, 38% Elastane, 100% Vegan
                Materials <br /> Care: <br /> Cold Machine Wash, Line Dry <br />{" "}
                Do Not Tumble Dry Or Dry Clean, Do Not Use Bleach Or Fabric
                Softener
              </div>
            </div>
          </div>
          <div className="max-md:mx-auto border-2 border-[#ADADAD] md:mr-10 mt-1">
            <div
              onClick={toggleDropdown1}
              className={`flex w-full justify-between   py-6 px-5 text-[#0C0C0C] text-xl font-bold cursor-pointer ${
                isDropdownOpen1 ? "" : ""
              }`}
            >
              <div>Product Detail</div>
              <div className="text-xl">+</div>
            </div>
            <div
              className={` pb-6 bg-white  rounded ${
                isDropdownOpen1 ? "" : "hidden"
              }`}
            >
              <div className="w-full border-b-2 border-[#ADADAD]"></div>
              <div
                onClick={toggleDropdown1}
                className={`flex w-full px-5 justify-between py-6 text-[#748C70] text-xl font-bold cursor-pointer ${
                  isDropdownOpen1 ? "" : "hidden"
                }`}
              >
                <div>Shipping And Return </div>
                <div className="text-xl">-</div>
              </div>
              <div className="text-base leading-7 px-5 font-normal">
                {" "}
                Shipping: <br /> Is Free On US , Canada Orders Are $175 <br />{" "}
                Returns: <br />
                Unwashed, Unworn Items Are Eligible For Returns Or Exchanges
                Within 30 Days Of Purchase. Final Sale Items Are Not Eligible
                For Returns Or Exchanges.
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-span-1 small:sticky  small:py-0  w-full py-8 gap-y-12"
          ref={infoRef}
        >
          {isOnboarding && <ProductOnboardingCta />}
          <ProductActions product={product} />
        </div>
      </div>
      <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} collection={collection} />
      </div>
      <MobileActions product={product} show={!inView} />
    </ProductProvider>
  )
}

export default ProductTemplate
