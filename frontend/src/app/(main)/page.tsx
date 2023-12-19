import { getCollectionsList } from "@lib/data"
import BestSellers from "@modules/home/components/bestseller"
import Collection from "@modules/home/components/collection"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Modiweek from "@modules/home/components/modiweek"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      <Hero />
      <div className="container mx-auto mb-16">
        <BestSellers />
        <Collection />
      </div>
      <Modiweek />
      {/* <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense> */}
    </>
  )
}
