"use client"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { ProductCollection } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"

import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const ProductRail = ({ collection }: { collection: ProductCollection }) => {
  const { data } = useFeaturedProductsQuery(collection.id)

  return (
    <div>
      <div className="container mx-auto">
        {/* <div className="flex justify-between mb-8">
          <Text className="txt-xlarge">{collection.title}</Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            View all
          </InteractiveLink>
        </div> */}
        <ul className="grid grid-cols-2 max-md:grid-cols-2 small:grid-cols-4 gap-x-8 gap-y-8">
          {data &&
            data.map((product) => (
              <li key={product.id}>
                <div className="mx-auto">
                  <ProductPreview
                    searchValue={""}
                    isFeatured
                    collection={collection}
                    {...product}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductRail
