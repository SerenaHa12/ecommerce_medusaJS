import React from "react"
import Image from "next/image"
const ProductCard = () => {
  const products = [
    {
      _id: "6551a7297f15f9c0a42d1e6c",
      name: "Tailored Stretch",
      category: "Pants",
      price: 180,
      quantity: 2583997,
      image: "/landing/bestseller01.png",
      description: "Turn It Up Pants",
      updatedAt: "2023-11-13T04:37:50.977Z",
    },
    {
      _id: "6551a7297f15f9c0a42d1e6d",
      name: "Technical Silk",
      category: "Dress",
      price: 120,
      quantity: 2583997,
      image: "/landing/bestseller01.png",
      description: "Make A Splash",
      updatedAt: "2023-11-13T04:37:50.977Z",
    },
  ]

  return (
    <div className="flex justify-normal sm:justify-between md:justify-between gap-4">
      {products &&
        products.length > 0 &&
        products.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item.image} width={152} height={213} alt={item.name} />
              <h3 className="text-base-semi">{item.name}</h3>
              <p className="text-base-regular">{item.description}</p>
              <p className="float-right text-base-semi">${item.price}</p>
              <div className="pt-[40px] flex gap-1">
                <div className="rounded-[50%] w-4 h-4 bg-black"></div>
                <div className="rounded-[50%] w-4 h-4 bg-orange-600"></div>
                <div className="rounded-[50%] w-4 h-4 bg-yellow-400"></div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ProductCard
