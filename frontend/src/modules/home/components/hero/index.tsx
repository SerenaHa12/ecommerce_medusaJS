import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Image from "next/image"
import { MEDUSA_BACKEND_URL } from "@lib/config"
const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="bg-hero w-full h-[551px] bg-no-repeat bg-cover absolute top-0 left-0">
          <div className="absolute bottom-20 left-2 text-black text-xl italic font-normal capitalize">
            Elegance In Simplicity,<br /> Earth’s Harmony
          </div>
          <button className="absolute bottom-2 left-2 p-4 bg-white text-center text-sm">New In</button>
      </div>
    </div>
  )
}

export default Hero
