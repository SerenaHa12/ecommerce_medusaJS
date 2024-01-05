import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"
import ContactUS from "@modules/contact-us"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function ContactPage() {
  return (
    <>
      {" "}
      <ContactUS />
    </>
  )
}
