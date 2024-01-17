import { ProductCollection } from "@medusajs/medusa"
import ProductRail from "./product-rail"

const FeaturedProducts = ({
  collections,
}: {
  collections: ProductCollection[]
}) => {
  return (
    <div className="py-2 mx-auto">
      <ul className="flex flex-col gap-x-6 gap-y-8">
        {collections.map((collection) => (
          <li key={collection.id} className="flex justify-between">
            <div className="mx-auto">
              <ProductRail collection={collection} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedProducts
