import { Metadata } from "next"
import { search } from "../actions"
import SearchResultsTemplate from "@modules/search/templates/search-results-template"
import { ProductCollection } from "@medusajs/medusa"

export const metadata: Metadata = {
  title: "Search",
  description: "Explore all of our products.",
}

export default async function StorePage({
  params,
  collection,
}: {
  params: { query: string }
} & { collection: ProductCollection }) {
  const { query } = params
  const hits = await search(query)

  return (
    <SearchResultsTemplate collection={collection} query={query} hits={hits} />
  )
}
