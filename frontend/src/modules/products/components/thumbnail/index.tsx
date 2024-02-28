import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import clsx from "clsx"
import Image from "next/image"
import React from "react"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
}) => {
  function updateThumbnail(thumbnail: any) {
    if (thumbnail.includes("http://localhost:9000")) {
      return thumbnail.replace(
        "http://localhost:9000",
        "https://api-ecm.5labs.io"
      )
    }
    return thumbnail
  }
  const newThumbnail = updateThumbnail(thumbnail)

  const initialImage = thumbnail || images?.[0]?.url
  console.log("check", initialImage)

  return (
    <Container
      className={clsx(
        "relative w-full overflow-hidden p-4 bg-ui-bg-subtle   ",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[9/12]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
<<<<<<< Updated upstream
          "w-full": size === "small",
=======
          // "w-[180px]": size === "small",
          "w-fitcontent": size === "small",
>>>>>>> Stashed changes
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          // "w-full": size === "full",
        }
      )}
    >
      <ImageOrPlaceholder image={newThumbnail} size={size} />
    </Container>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, "size"> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className="absolute inset-0 object-cover object-center"
      draggable={false}
      quality={50}
      // sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      width={152}
      height={213}
      
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
