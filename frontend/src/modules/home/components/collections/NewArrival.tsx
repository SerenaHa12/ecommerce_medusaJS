import { getCollectionsList } from "@lib/data"
import { Suspense } from "react"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import FeaturedProducts from "../featured-products"

const NewArrival = async () => {
  const { collections, count } = await getCollectionsList(0, 1)
  console.log("🚀 ~ Home ~ collections:", collections)
  return (
    <div>
      {" "}
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <div className="mx-auto">
          <FeaturedProducts collections={collections} />
        </div>
      </Suspense>
    </div>
  )
}

export default NewArrival
