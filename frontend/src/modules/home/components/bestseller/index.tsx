"use client"

import React from "react"
import { useState } from "react"
import { StoreGetProductsParams } from "@medusajs/medusa"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import ProductItem from "./ProductCard"
import InfiniteProducts from "@modules/products/components/infinite-products"

const BestSellers = () => {
  return (
    <div>
      <h1 className="text-xl-semi">Best Sellers</h1>
      {/*  */}
      {/* <InfiniteProducts params={params} /> */}
      {/* <ProductItem /> */}
    </div>
  )
}

export default BestSellers
