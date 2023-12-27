import Image from "next/image"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { ProductCollection } from "@medusajs/product"
import medusaRequest from "@lib/medusa-fetch"
import { getCollectionsList } from "@lib/data"

const Collection = async () => {
  const res = await getCollectionsList(4, 96)
  console.log(res)

  return (
    <div>
      <h1 className="text-xl-semi">Collection</h1>
      <div className="grid grid-cols-2 mx-auto gap-3">
        <div className="flex flex-col">
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

        <div className="flex flex-col">
          <div className="relative">
            <Image
              fill
              alt="landing"
              src="/collection/collection03.png"
              // className="md:w-96 h-auto lg:w-96 xl:w-96 "
            />
            <Button
              variant="transparent"
              className="px-4 py-2 xl:absolute xl:bottom-4 xl:right-4"
            >
              Dresses
            </Button>
          </div>
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

export default Collection
