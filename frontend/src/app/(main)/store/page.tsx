import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"
import { ProductCollection } from "@medusajs/medusa"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function StorePage({
  collection,
}: {
  collection: ProductCollection
}) {
  return <StoreTemplate collection={collection} />
}
