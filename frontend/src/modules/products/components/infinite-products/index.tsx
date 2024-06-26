import { getProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { ProductCollection, StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { Text } from "@medusajs/ui"
export type InfiniteProductsType = {
  params: StoreGetProductsParams
  sortBy?: SortOptions
  searchValue: string // Thêm thuộc tính searchValue vào props
}

const InfiniteProducts = ({
  params,
  sortBy,
  searchValue,
  collection,
}: InfiniteProductsType & {
  collection: ProductCollection
}) => {
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

  const previews = usePreviews({
    pages: data?.pages,
    region: cart?.region,
    sortBy,
    searchValue,
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
    <div className=" content-container">
      <ul className="grid grid-cols-2 small:grid-cols-2 medium:grid-cols-2 large:grid-cols-3 gap-x-3 gap-y-8 flex-1">
        {previews.map((p) => (
          <li key={p.id}>
            <ProductPreview
              {...p}
              searchValue={searchValue}
              isFeatured
              collection={collection}
            />
          </li>
        ))}
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
  )
}

export default InfiniteProducts
