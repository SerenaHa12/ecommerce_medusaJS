import Image from "next/image"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { ProductCollection } from "@medusajs/product"
import medusaRequest from "@lib/medusa-fetch"
import { getCollectionsList } from "@lib/data"

const CollectionSection = () => {
  return (
    <div className="py-8">
      <h1 className="text-xl-semi">Collection</h1>
      <div className="grid grid-cols-2 mx-auto gap-3">
        <div className="flex flex-col">
          {/* image 1 */}
          <div className="relative">
            <Image
              src="/collection/collection01.png"
              alt="landing"
              width={152}
              height={165}
              className="md:w-96 h-auto lg:w-96 xl:w-96 "
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Boluses
            </Button>
          </div>

          {/* image 2 */}
          <div className="relative">
            <Image
              alt="landing"
              src="/collection/collection02.png"
              width={152}
              height={253}
              className="md:w-96 h-auto lg:w-96 xl:w-96 "
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Pants
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {/* image 3 */}
          <div className="relative">
            <Image
              alt="landing"
              src="/collection/collection03.png"
              width={152}
              height={253}
              className="md:w-96 h-auto lg:w-96 xl:w-96 "
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Dresses
            </Button>
          </div>

          {/* image 4 */}
          <div className="relative">
            <Image
              src="/collection/collection04.jpg"
              alt="landing"
              width={152}
              height={165}
              className="md:w-96 h-auto lg:w-96 xl:w-96 "
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

export default CollectionSection
