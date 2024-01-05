"use client"

import { useAccount } from "@lib/context/account-context"
import Register from "@modules/account/components/register"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Login from "../components/login"
import Image from "next/image"

const LoginTemplate = () => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])

  return (
    <>
      <div>
        {" "}
        <div className="relative ">
          {" "}
          <div className=" ">
            {" "}
            <Image
              src="/login.jpg"
              alt="login"
              className="w-full h-full relative"
              width={2000}
              height={2000}
            />
          </div>
          <div className="w-full flex justify-center px-8 py-12 absolute z-10 top-0">
            {currentView === "sign-in" ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginTemplate
