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
import Gift from "@modules/common/icons/gift"
import { FaRegHeart } from "react-icons/fa"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <div className="bg-primary w-full p-2 text-center text-[10px] lg:text-sm 2xl:text-sm xl:text-sm text-white items-center my-auto">
        Enjoy Free Shipping On All Orders
      </div>
      <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center lg:hidden ">
            {/* menu */}
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>

            {/* search */}
            <div className="block small:hidden cursor-pointer focus:outline-none ml-2">
              <Search size={20} />
            </div>

            <div className="hidden small:hidden">
              <SideMenu searchModalOpen={searchModalOpen} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base"
            >
              <Image src="/Logo.svg" width={138} height={40} alt="logo" className="md:w-[184px] md:h-[46px] w-[138px] h-[40px]"/>
            </Link>
          </div>

          <div className="w-full mx-auto hidden lg:block">
            <div className="mx-auto flex gap-x-8 items-center w-fit justify-around">
              <Link href="/collection">
                <h3 className="text-large-regular">Collection</h3>
              </Link>
              <Link href="/newin">
                <h3 className="text-large-regular">New In</h3>
              </Link>
              <Link href="/modiweek">
                <h3 className="text-large-regular">Modiweek</h3>
              </Link>
              <Link href="/plussize">
                <h3 className="text-large-regular">Plus Size</h3>
              </Link>
              <Link href="/sustainability">
                <h3 className="text-large-regular">Sustainability</h3>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <DesktopSearchModal
                  state={searchModalState}
                  close={searchModalClose}
                  open={searchModalOpen}
                />
              )}
              <Link className="hover:text-ui-fg-base" href="/account">
                <User size={20}/>
              </Link>
            </div>
            <div className="block">
              <FaRegHeart size={20}/>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
