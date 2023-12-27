"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"
import Input from "@modules/common/components/input"
import CheckboxWithLabel from "@modules/common/components/checkbox"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { IoChatboxEllipsesOutline } from "react-icons/io5"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="border-t border-ui-border-base  bg-[#404040] text-white px-8">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col lg:flex-row gap-3 items-start justify-between py-10">
          <div className="flex flex-col gap-y-3">
            <div>Join Our Club, Get 15% Off For Your Birthday</div>
            <div className="w-full border-white bg-transparent flex flex-col gap-y-2">
              <Input
                label="Enter your Email Address"
                type="email"
                name="email"
                className="pt-4 pb-1 block w-full h-11 px-4 mt-0 bg-transparent border rounded-0 appearance-none focus:bg-transparent focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-transparent"
              />
              <div className="flex gap-x-2 text-sm pb-6">
                <CheckboxWithLabel
                  checked={false}
                  // onChange={}
                  label="By Submitting Your Email, you agree to receive advertising emails
                from Modimal."
                />
              </div>
            </div>
          </div>

          <div className="text-base-semi grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-6">
            {product_categories && (
              <div className="flex flex-col gap-y-1">
                <span className="text-base-semi">About Modimal</span>
                <ul className="grid grid-cols-1">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-base-regular"
                        key={c.id}
                      >
                        <Link
                          className={clsx(
                            "hover:text-base-regular",
                            children && "text-base-regular"
                          )}
                          href={`/${c.handle}`}
                        >
                          {c.name}
                        </Link>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    className="hover:text-base-regular"
                                    href={`/${child.handle}`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* help and support */}
            {collections && (
              <div className="flex flex-col gap-y-1">
                <span className="text-base-semi">Collections</span>
                <ul
                  className={clsx("grid grid-cols-1 text-base-regular", {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  })}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-base-regular"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* join up */}
            <div className="flex flex-col">
              <span className="text-base-semi">Join Up</span>
              <ul className="grid grid-cols-1 text-base-regular">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-base-regular"
                  >
                    Modimal Club
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-base-regular"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-base-regular"
                  >
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* social */}
        <div className="flex justify-between pb-6 items-center pr-4">
          <div className="flex gap-x-4">
            <Link href="/">
              <FaInstagram size={24} />
            </Link>
            <Link href="/">
              <FaFacebook size={24} />
            </Link>
            <Link href="/">
              <FaPinterest size={24} />
            </Link>
            <Link href="/">
              <FaTiktok size={24} />
            </Link>
          </div>
          <div className="px-4 py-3 bg-primary border-2 border-solid border-slate-50">
            <Link href="/">
              <IoChatboxEllipsesOutline size={20} />
            </Link>
          </div>
        </div>

        <div className="flex w-full mb-16 justify-between">
          <Text className="text-xsmall-regular capitalize">
            © {new Date().getFullYear()} Modimal. All Rights Reserved.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
