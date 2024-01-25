import Hero from "@modules/home/components/hero"
import { Metadata } from "next"
import { getCollectionsList } from "@lib/data"
import { Suspense } from "react"
import FeaturedProducts from "@modules/home/components/featured-products"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import Link from "next/link"
import Testimonial from "@modules/home/components/testimonial/Testimonial"
import YearProduct from "@modules/home/components/yearproduct/YearProduct"

export const metadata: Metadata = {
  title: "ECM",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and ECM.",
}

export default async function Home() {
  // get collection 1
  const { collections, count } = await getCollectionsList(0, 1)
  // console.log("🚀 ~ Home ~ collections:", collections)

  // get collection 2
  const { collections: bestseller, count: countBestseller } =
    await getCollectionsList(1, 1)
  // console.log("🚀 ~ Home ~ bestseller:", bestseller)
  return (
    <div className="flex flex-col gap-y-12">
      <main>
        <Hero />

        {/* NEW ARRIVALS */}
        <div className="container mx-auto mb-8 pt-16 max-w-screen-xl flex flex-col items-center">
          <h2 className="mx-auto text-2xl text-white bg-[#AA2010] text-center py-2 px-6 rounded-full duration-200  uppercase font-semibold w-fit mb-3">
            New Arrivals
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Find a bright ideal to suit your taste with our great selection of
            suspension floar and tables lights.
          </p>
        </div>
        <div className="newarrive mx-6">
          <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
            <div className="mx-auto">
              <FeaturedProducts collections={collections} />
            </div>
          </Suspense>
        </div>

        <div className="relative bg-[url(/banner/banner5.png)] bg-cover w-full h-96 object-cover">
          <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
            <h1 className="text-3xl font-semibold text-primeColor hidden xl:block">
              Check out our new arrivals
            </h1>
            <p className="text-base font-normal text-[#AA2010] max-w-[600px] mr-4 hidden xl:block">
              Online shoppers love the latest trends, products, and new
              launches. As an ecommerce store owner, you can benefit from this
              love for ‘all things new’ by sending a new arrivals email every
              time you launch a new product or collection.
            </p>
            <Link href="/store">
              <button className="py-3 px-6 rounded-full bg-white border-2 border-[#AA2010] hover:bg-transparent duration-200 text-sm uppercase font-semibold hidden xl:block">
                FIND OUT NOW
              </button>
            </Link>
          </div>
        </div>
        {/* END NEW ARRIVAL */}

        {/* BEST SELLER */}
        <div className="container mx-auto mb-8 pt-16 max-w-screen-xl">
          <h2 className="mx-auto text-2xl text-white bg-[#AA2010] text-center py-2 px-6 rounded-full duration-200  uppercase font-semibold w-fit mb-3">
            Our Bestsellers
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Find a bright ideal to suit your taste with our great selection of
            suspension floar and tables lights.
          </p>
        </div>
        <div className="bestsell mx-6">
          <Suspense
            fallback={<SkeletonHomepageProducts count={countBestseller} />}
          >
            <div className="mx-auto">
              <FeaturedProducts collections={bestseller} />
            </div>
          </Suspense>
        </div>
        <div className="relative bg-[url(/banner/banner6.png)] bg-cover w-full h-64 object-cover"></div>
        {/* END BEST SELLER */}

        {/* YEAR PRODUCT */}
        <YearProduct />
        {/* END YAER PRODUCT */}

        <div className="container mx-auto mb-8 max-w-screen-xl">
          <Testimonial />
        </div>
      </main>
    </div>
  )
}
