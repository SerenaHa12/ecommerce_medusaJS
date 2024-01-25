"use client"

import { ProductCollection, StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import { SortOptions } from "../components/refinement-list/sort-products"

const StoreTemplate = ({ collection }: { collection: ProductCollection }) => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const [sortBy, setSortBy] = useState<SortOptions>("created_at")
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="flex flex-col mt-10 small:flex-row small:items-start py-6">
      <RefinementList
        refinementList={params}
        setRefinementList={setParams}
        sortBy={sortBy}
        setSortBy={setSortBy}
        search={false}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />{" "}
      <InfiniteProducts
        params={params}
        sortBy={sortBy}
        searchValue={searchValue}
        collection={collection}
      />
    </div>
  )
}

export default StoreTemplate
