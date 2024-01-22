import { StoreGetProductsParams } from "@medusajs/medusa"
import SortProducts, { SortOptions } from "./sort-products"
import CollectionFilter from "./collection-filter"
import { Input } from "@medusajs/ui"
import InfiniteProducts from "@modules/products/components/infinite-products"

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
          />
        )}
      </div>
    </>
  )
}

export default RefinementList
