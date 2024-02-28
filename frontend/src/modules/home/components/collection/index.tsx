import Image from "next/image"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import { Image as MedusaImage } from "@medusajs/medusa"

type CollectionProps = {
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
}

const Collection: React.FC<CollectionProps> = ({ images, size }) => {
  return (
    <div>
      <h1 className="text-xl-semi">Collection</h1>
      <div className="grid grid-cols-2 mx-auto">
        <div className="flex flex-col gap-y-3">
          <div>
            <Image
              src="/landing/follow.png"
              alt="landing"
              width={152}
              height={165}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Boluses</button>
          </div>
          <div>
            <Image
              src="/landing/follow.png"
              alt="landing"
              width={152}
              height={253}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Pants</button>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div>
            <Image
              src="/landing/follow.png"
              alt="landing"
              width={152}
              height={253}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Dresses</button>
          </div>
          <div>
            <Image
              src="/landing/follow1.png"
              alt="landing"
              width={152}
              height={165}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Outwears</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
