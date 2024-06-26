import SkeletonProductPreview from "../skeleton-product-preview"

const SkeletonHomepageProducts: React.FC<{
  count: number
}> = ({ count = 1 }) => {
  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonProductPreview key={i} />
      ))}
    </div>
  )
}

export default SkeletonHomepageProducts
