"use client"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { ProductCollection } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
const ProductRail = ({ collection }: { collection: ProductCollection }) => {
  const { data } = useFeaturedProductsQuery(collection.id)

  return (
    <div>
      <div className="container">
        <ul className="grid grid-cols-2 max-md:grid-cols-1 small:grid-cols-4 gap-x-6 gap-y-8 mx-20">
          {data &&
            data.map((product) => (
              <li key={product.id}>
                <ProductPreview searchValue={""} isFeatured {...product} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductRail
