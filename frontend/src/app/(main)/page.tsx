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
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 1)
  return (
    <div className="flex flex-col gap-y-8">
      <Hero />
      <div className="container mx-auto mb-16 my-8 px-8">
        <div className="flex justify-between">
          <h1 className="text-xl-semi pt-8">Best Sellers</h1>
          <Link href="/store" className="text-base-regular cursor-pointer pt-8">
            View All
          </Link>
        </div>
        <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
          <FeaturedProducts collections={collections} />
        </Suspense>
        <CollectionSection />
      </div>
      <Modiweek />
    </div>
  )
}
