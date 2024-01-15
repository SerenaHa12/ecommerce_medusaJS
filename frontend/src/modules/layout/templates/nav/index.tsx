"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"
import Search from "@modules/common/icons/search"
import User from "@modules/common/icons/user"
import Image from "next/image"
import Input from "@modules/common/components/input"
import { useAccount } from "@lib/context/account-context"
import HeaderTop from "./HeaderTop"
import { usePathname } from "next/navigation"
import DropdownAccount from "@modules/layout/components/account-dropdown"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()
  const setScreenSearch = () => setScreen("search")

  // path name store -> show search
  const pathname = usePathname()
  const isStorePage = pathname === "/store"
  console.log(isStorePage)

  return (
    <>
      <HeaderTop />
      <div className="sticky top-0 inset-x-0 z-50 group h-20 mx-auto">
        <header className="relative z-50 h-full duration-200 bg-white mx-auto px-16">
          <nav className="flex gap-x-5 items-center justify-between w-full h-full text-small-regular bg-white">
            <div className="flex items-center h-full ">
              <Link
                href="/"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base"
              >
                {/* <Image
                src="/Logo.svg"
                width={138}
                height={40}
                alt="logo"
                className="md:w-[184px] md:h-[46px] w-[138px] h-[40px]"
              /> */}
                <h3 className="text-xl-semi text-zinc-950 hover:text-orange-500">
                  smart.
                </h3>
              </Link>
            </div>

            {/* <div className="flex w-80">
              <div
                className={`w-full ${
                  isStorePage ? "bg-white" : "hidden md:flex"
                } items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group`}
              >
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <DesktopSearchModal
                    state={searchModalState}
                    close={searchModalClose}
                    open={searchModalOpen}
                  />
                )}
                <Input
                  type="text"
                  label=""
                  name="search"
                  className="placeholder:text-sm flex-1 outline-none"
                />
              </div>
            </div> */}

            <div className="flex items-center gap-x-6 h-full justify-end">
              <DropdownAccount />

              <CartDropdown />
            </div>
          </nav>
          <MobileMenu />
        </header>
      </div>
    </>
  )
}

export default Nav
