import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useStore } from "@lib/context/store-context"
import useCountryOptions from "@lib/hooks/use-country-options"
import ChevronDown from "@modules/common/icons/chevron-down"
import { MagnifyingGlassMini, XMark as X } from "@medusajs/icons"
import { useCollections, useMeCustomer } from "medusa-react"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { Heading } from "@medusajs/ui"
import Image from "next/image"
import Nav from "@modules/layout/templates/nav"
import Search from "@modules/common/icons/search"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import { FaRegHeart } from "react-icons/fa"
import { CiUser } from "react-icons/ci"

const MainMenu = () => {
  const { collections } = useCollections()
  const { customer } = useMeCustomer()
  const { countryCode } = useStore()

  const countries = useCountryOptions()

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenCountry = () => setScreen("country")
  const setScreenSearch = () => setScreen("search")

  return (
    <div className="flex flex-col flex-1">
      <div>
        <div className="bg-primary w-full p-2 text-center text-[10px] lg:text-sm 2xl:text-sm xl:text-sm text-white items-center my-auto">
          Enjoy Free Shipping On All Orders
        </div>
        <div className="flex items-center justify-between w-full border-b border-gray-200 px-8 h-16">
          <div className="flex-1 basis-0 flex justify-start gap-x-2">
            <button onClick={close}>
              <X fontSize={24} />
            </button>

            {/* search */}
            <div className="block small:hidden cursor-pointer focus:outline-none ml-2">
              <button onClick={setScreenSearch}>
                <Search size={20} />
              </button>
            </div>
          </div>

          <Heading className="txt-compact-xlarge-plus text-ui-fg-subtle uppercase">
            <Image
              src="/Logo.svg"
              width={138}
              height={40}
              alt="logo"
              className="md:w-[184px] md:h-[46px] w-[138px] h-[40px]"
            />
          </Heading>

          <div className="flex-1 basis-0 flex justify-end gap-x-2">
            <div className="block">
              <FaRegHeart size={20} />
            </div>
            <CartDropdown />
          </div>
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">
        {/* {process.env.FEATURE_SEARCH_ENABLED && (
          <button
            className="bg-gray-50 flex items-center px-4 py-2 gap-x-2 text-ui-fg-muted rounded-rounded"
            onClick={setScreenSearch}
          >
            <MagnifyingGlassMini />
            <span placeholder="Search products" className="text-base-regular">
              Search products
            </span>
          </button>
        )} */}

        <div className="flex flex-col text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            <li className="bg-gray-50 p-4 rounded-rounded flex justify-between items-center">
              <Link href="/store">
                <h3 className="text-large-regular">Collection</h3>
              </Link>
              <ChevronDown className="-rotate-90" />
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded flex justify-between items-center">
              <Link href="/store">
                <h3 className="text-large-regular">New In</h3>
              </Link>
              <ChevronDown className="-rotate-90" />
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded flex justify-between items-center">
              <Link href="/store">
                <h3 className="text-large-regular">Modiweek</h3>
              </Link>
              <ChevronDown className="-rotate-90" />
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded flex justify-between items-center">
              <Link href="/store">
                <h3 className="text-large-regular">Plus Size</h3>
              </Link>
              <ChevronDown className="-rotate-90" />
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded flex justify-between items-center">
              <Link href="/store">
                <h3 className="text-large-regular">Sustainability</h3>
              </Link>
              <ChevronDown className="-rotate-90" />
            </li>
          </ul>
        </div>

        <div className="flex justify-between text-base-regular text-primary items-center">
          <Link
            href="/account/login"
            className="flex gap-x-4 px-8 py-2 border-2 border-primary"
          >
            <CiUser size={24} className="text-black" />
            Login
          </Link>
          <Link
            href="/account/login"
            className="flex px-6 py-2 border-2 border-primary"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
