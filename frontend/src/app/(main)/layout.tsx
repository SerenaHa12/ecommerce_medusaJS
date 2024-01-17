"use client"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { Pathname } from "enum"
import { usePathname } from "next/navigation"
export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <>
      <Nav />
      {children}
      {pathname !== Pathname.accountLogin && <Footer />}
    </>
  )
}
