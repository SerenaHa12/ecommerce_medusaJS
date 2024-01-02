import { getProductsList } from "@lib/data"
import Collection from "@modules/home/components/collection"
import Hero from "@modules/home/components/hero"
import Modiweek from "@modules/home/components/modiweek"
import { Metadata } from "next"
import BestSellers from "@modules/home/components/bestseller"
import medusaRequest from "@lib/medusa-fetch"
import { getCollectionsList } from "@lib/data"
import { Suspense } from "react"
import FeaturedProducts from "@modules/home/components/featured-products"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import Link from "next/link"
import CollectionSection from "@modules/home/components/collection"
export const metadata: Metadata = {
  title: "Shopping",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 1)
  return (
    <div className="flex flex-col gap-y-8">
      <Hero />
      <div className="container mx-auto px-8 mb-8">
        <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
          <FeaturedProducts collections={collections} />
        </Suspense>
      </div>
    </div>
  )
}
