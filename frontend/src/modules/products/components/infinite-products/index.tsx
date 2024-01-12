import { getProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useEffect, useMemo, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { Input } from "@medusajs/ui"
import { CiSearch } from "react-icons/ci"

export type InfiniteProductsType = {
  params: StoreGetProductsParams
  sortBy?: SortOptions
}

const InfiniteProducts = ({ params, sortBy }: InfiniteProductsType) => {
  const { cart } = useCart()
  const { ref, inView } = useInView()
  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    if (cart?.region?.currency_code) {
      p.currency_code = cart.region.currency_code
    }

    p.is_giftcard = false

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, cart?.region, params])
  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-store`, queryParams, cart],
      ({ pageParam }) => getProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )
  const [searchValue, setSearchValue] = useState("")

  const previews = usePreviews({
    pages: data?.pages,
    region: cart?.region,
    sortBy,
    searchValue, // Truyền giá trị tìm kiếm vào ProductPreview
  } as any)
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage])
  const filteredPreviews = previews.filter((p) =>
    p.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <div className="flex-1 max-w-[1440px] px-10">
        <div className="mb-10  w-80 max-md:relative -top-[500px] max-md:mx-auto">
          <Input
            type="text"
            name="search"
            placeholder="Search product..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="placeholder:text-sm flex-1 outline-none"
            // onClick={handleSearch}
          />
        </div>
        <ul className="grid grid-cols-2 max-md:grid-cols-1 max-md:w-full small:grid-cols-2 medium:grid-cols-2 gap-x-6 gap-y-8 flex-1">
          {filteredPreviews.length > 0 ? (
            filteredPreviews.map((p) => (
              <li key={p.id}>
                <ProductPreview {...p} searchValue={searchValue} />
              </li>
            ))
          ) : (
            <div>
              <p>Không có sản phẩm nào được tìm thấy.</p>
            </div>
          )}
          {isLoading &&
            !previews.length &&
            repeat(8).map((index) => (
              <li key={index}>
                <SkeletonProductPreview />
              </li>
            ))}
          {isFetchingNextPage &&
            repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
              <li key={index}>
                <SkeletonProductPreview />
              </li>
            ))}
        </ul>
        <div
          className="py-16 flex justify-center items-center text-small-regular text-gray-700"
          ref={ref}
        >
          <span ref={ref}></span>
        </div>
        <div className="w-40 mx-auto text-center py-2 border-2 border-[#5A6D57] hidden">
          <button className=""> Load more</button>
        </div>
      </div>
    </>
  )
}

export default InfiniteProducts
function fetchDataForSearch(searchValue: string) {
  throw new Error("Function not implemented.")
}
