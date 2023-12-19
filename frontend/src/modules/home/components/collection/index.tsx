import Image from "next/image"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"

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
          <div className="relative">
            <PlaceholderImage
              width={152}
              height={165}
              className="md:w-64 lg:w-80 xl:w-96 h-auto"
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Boluses
            </Button>
          </div>
          <div className="relative">
            <PlaceholderImage
              width={152}
              height={253}
              color="red"
              className="md:w-64 lg:w-80 xl:w-96 h-auto"
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Pants
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div className="relative">
            <PlaceholderImage
              width={152}
              height={253}
              color="red"
              className="md:w-64 lg:w-80 xl:w-96 h-auto"
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Dresses
            </Button>
          </div>
          <div className="relative">
            <PlaceholderImage
              width={152}
              height={165}
              className="md:w-64 lg:w-80 xl:w-96 h-auto"
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Outwears
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
