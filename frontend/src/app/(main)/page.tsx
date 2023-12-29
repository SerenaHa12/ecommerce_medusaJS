import { getProductsList } from "@lib/data"
import Collection from "@modules/home/components/collection"
import Hero from "@modules/home/components/hero"
import Modiweek from "@modules/home/components/modiweek"
import { Metadata } from "next"
import BestSellers from "@modules/home/components/bestseller"
import medusaRequest from "@lib/medusa-fetch"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <Hero />
      <div className="container mx-auto mb-16 my-8 px-8">
        <BestSellers />
        {/* <Collection /> */}
      </div>
      <Modiweek />
    </div>
  )
}
