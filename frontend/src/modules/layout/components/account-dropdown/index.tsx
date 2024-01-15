import User from "@modules/common/icons/user"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import {
  CheckMini,
  ArrowRightOnRectangle,
  PencilSquare,
  InformationCircle,
} from "@medusajs/icons"
import { DropdownMenu, IconButton } from "@medusajs/ui"
import { useAccount } from "@lib/context/account-context"
import Medusa from "@medusajs/medusa-js"
import { MEDUSA_BACKEND_URL } from "@lib/config"
import { useMeCustomer } from "medusa-react"
import { usePathname } from "next/navigation"
import { any } from "cypress/types/bluebird"
import { error } from "console"
const DropdownAccount = () => {
  const route = usePathname()
  const { handleLogout } = useAccount()

  const [isDropdown, setIsDropdown] = useState(0)

  useEffect(() => {
    const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
    medusa.customers
      .retrieve()
      .then(({ customer }) => {
        console.log(customer)
        setIsDropdown(1)
      })
      .catch((e) => {
        setIsDropdown(0)
      })
  }, [handleLogout])

  return (
    <div className="z-50 flex items-center border-[1px] border-lightText/50 rounded-full bg-slate-100">
      <DropdownMenu>
        <div>
          {isDropdown === 0 && (
            <>
              <DropdownMenu.Trigger asChild>
                <Link href="/account/login">
                  <button className="px-6 py-2 cursor-pointer bg-white text-orange-500 font-semibold flex items-center justify-center p-1.5 rounded-full hover:bg-white border-2 border-gray-200 hover:border-orange-500 duration-200">
                    {/* <User size={20} /> */}
                    LOGIN
                  </button>
                </Link>
              </DropdownMenu.Trigger>
            </>
          )}
          {isDropdown === 1 && (
            <>
              <DropdownMenu.Trigger asChild>
                <IconButton>
                  <User size={20} />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="mt-5">
                <Link href="/account">
                  <DropdownMenu.Item className="gap-x-2">
                    <PencilSquare className="text-ui-fg-subtle" />
                    Information
                  </DropdownMenu.Item>
                </Link>
                <DropdownMenu.Separator />
                <DropdownMenu.Item className="gap-x-2" onClick={handleLogout}>
                  <ArrowRightOnRectangle className="text-ui-fg-subtle" />
                  Log out
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </>
          )}
        </div>
      </DropdownMenu>
    </div>
  )
}

export default DropdownAccount
