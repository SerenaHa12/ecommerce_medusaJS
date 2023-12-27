import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Suspense } from "react"
import FeaturedProducts from "@modules/home/components/featured-products"
import { StoreGetProductsParams } from "@medusajs/medusa"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
// import ProductItem from './ProductCard'
// import InfiniteProducts from '@modules/products/components/infinite-products'
import { getCollectionsList } from "@lib/data"

const BestSellers = () => {
  // const { collections, count } = await getCollectionsList(0, 3)

  return (
    <div className="pt-8">
      <h1 className="text-xl-semi">Best Sellers</h1>
      {/* <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense> */}
    </div>
  )
}

export default BestSellers
