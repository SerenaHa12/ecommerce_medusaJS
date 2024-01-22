import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import React, { ChangeEvent, useState } from "react"
export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setSortBy: (value: string) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Latest Arrivals",
  },
  {
    value: "price_asc",
    label: "Price: Low -> High",
  },
  {
    value: "price_desc",
    label: "Price: High -> Low",
  },
]

const SortProducts = ({ sortBy, setSortBy }: SortProductsProps) => {
  const handleSortChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setSortBy(id)
  }

  return (
    <>
      {" "}
      <FilterRadioGroup
        title="Sort by"
        items={sortOptions}
        value={sortBy}
        handleChange={handleSortChange}
      />
    </>
  )
}

export default SortProducts
