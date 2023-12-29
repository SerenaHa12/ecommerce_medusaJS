import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import { MEDUSA_BACKEND_URL } from "@lib/config"
import BestSellers from "../bestseller"
import Collection from "../collection"
import Link from "next/link"
const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative">
      <div className="bg-hero w-full h-[600px] xl:h-[700px] bg-no-repeat bg-cover absolute top-0 left-0 bg-center">
        <div className="absolute bottom-20 xl:bottom-40 left-6 text-black text-xl italic font-normal capitalize">
          Elegance In Simplicity,
          <br /> Earth’s Harmony
        </div>
        <Link href="/store">
          <Button
            variant="secondary"
            size="large"
            className="absolute rounded-none bottom-4 left-6 bg-white text-center text-sm lg:px-10 xl:bottom-20"
          >
            New In
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
