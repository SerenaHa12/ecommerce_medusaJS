"use client"

import { useAccount } from "@lib/context/account-context"
import UnderlineLink from "@modules/common/components/interactive-link"
import Spinner from "@modules/common/icons/spinner"
import React, { useEffect } from "react"
import AccountNav from "../components/account-nav"
import Link from "next/link"

const AccountLayout: React.FC = ({ children }) => {
  const { customer, retrievingCustomer, checkSession } = useAccount()

  useEffect(() => {
    checkSession()
  }, [checkSession])

  if (retrievingCustomer || !customer) {
    return (
      <div className="flex items-center justify-center w-full min-h-[640px] h-full text-gray-900">
        <Spinner size={36} />
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="relative bg-[url(/account/account.png)] bg-cover w-full h-64 bg-center"></div>
      <div className="flex-1 h-full max-w-screen-xl mx-auto bg-white flex flex-col py-16">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-8">
          <div>
            <AccountNav />
          </div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-x-8">
          <div>
            <h3 className="text-xl-semi mb-4">Got questions?</h3>
            <span className="text-small-regular">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          {/* <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
