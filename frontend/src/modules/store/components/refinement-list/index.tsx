import { StoreGetProductsParams } from "@medusajs/medusa"
import SortProducts, { SortOptions } from "./sort-products"
import CollectionFilter from "./collection-filter"
import { Input } from "@medusajs/ui"
import { useEffect, useState } from "react"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
  sortBy: SortOptions
  setSortBy: (...args: any[]) => void
  search: boolean // Thêm thuộc tính search vào props
  setSearchValue: (value: string) => void // Thêm setSearchValue vào props
  searchValue: string
}

const RefinementList = ({
  refinementList,
  setRefinementList,
  sortBy,
  setSortBy,
  search = false,
  setSearchValue,
  searchValue,
}: RefinementListProps) => {
  const [clearFiltersActive, setClearFiltersActive] = useState(false)
  const [appliedFiltersActive, setAppliedFiltersActive] = useState(false)
  useEffect(() => {
    if (
      typeof !refinementList === "undefined" ||
      typeof refinementList.collection_id === "undefined" ||
      refinementList.collection_id.length === 0 ||
      refinementList.collection_id[0] === null
    )
      if (sortBy) {
        setClearFiltersActive(false) // Đặt màu clearFilters thành false khi đã chọn sortBy
        setAppliedFiltersActive(true)
      } else {
        setClearFiltersActive(true)
        setAppliedFiltersActive(false)
      }
  }, [sortBy, refinementList.collection_id])
  const handleClearFiltersClick = () => {
    setClearFiltersActive(true)
    setAppliedFiltersActive(false)
    setSortBy(false)
    setRefinementList({
      ...refinementList,
      collection_id: [], // Đặt giá trị collection_id về rỗng khi nhấn Clear All Filters
    })
  }

  const handleAppliedFiltersClick = () => {
    setAppliedFiltersActive(true)
    setClearFiltersActive(false)
    // Check if setSortBy is selected
    if (typeof setSortBy === "function") {
      setSortBy(true)
    }
  }

  return (
    <>
      <div className="flex flex-col md:24  gap-12 px-8  mb-8 small:pr-0 small:pl-8 small:min-w-[350px] small:ml-[1.675rem]">
        <div className="w-full max-w-[320px] mx-auto">
          <Input
            type="text"
            name="search"
            placeholder="Search product..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        <SortProducts sortBy={sortBy} setSortBy={setSortBy} />

        {!search && (
          <CollectionFilter
            refinementList={refinementList}
            setRefinementList={setRefinementList}
            onCollectionSelect={() => setAppliedFiltersActive(true)}
          />
        )}
        <div className="flex gap-5 w-full justify-between">
          <div
            className={`cursor-pointer px-4 py-2 ${
              clearFiltersActive ? "bg-[#AA2010] text-white" : ""
            }`}
            onClick={handleClearFiltersClick}
          >
            Clear All Filters
          </div>
          <div
            className={`cursor-pointer px-4 py-2 ${
              appliedFiltersActive ? "bg-[#AA2010] text-white" : ""
            }`}
            // onClick={handleAppliedFiltersClick}
          >
            Applied filters
          </div>
        </div>
      </div>
    </>
  )
}
export default RefinementList
