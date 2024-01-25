import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { Button, Tooltip } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import { Spinner, InformationCircleSolid } from "@medusajs/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { emailRegex, nameRegex, pwRegex } from "@lib/util/regex"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="bg-slate-100 p-10 rounded-lg">
      <div className="max-w-sm flex flex-col items-center">
        {isSubmitting && (
          <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        <div>
          <div className="text-3xl uppercase my-2 font-bold text-center">
            <h1 className="hover:text-[#AA1020]">SIGN UP</h1>
          </div>
          <div className="mb-3">
            <button
              className="font-bold text-slate-400 hover:text-[#AA1020]"
              onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
            >
              LOG IN
            </button>
            <span className="p-2 text-light text-slate-300">|</span>
            <span className="font-bold underline">REGISTER</span>
          </div>
          <form className="w-full flex flex-col" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="First name"
                {...register("first_name", {
                  required: "First name is required",
                  pattern: {
                    value: nameRegex,
                    message: "Please enter a valid name",
                  },
                })}
                autoComplete="given-name"
                errors={errors}
              />
              <span className="text-red-500 flex justify-center text-small-regular">
                {errors.first_name?.message}
              </span>
              <Input
                label="Last name"
                {...register("last_name", {
                  required: "Last name is required",
                  pattern: {
                    value: nameRegex,
                    message: "Please enter a valid name",
                  },
                })}
                autoComplete="family-name"
                errors={errors}
              />
              <span className="text-red-500 flex justify-center text-small-regular">
                {errors.last_name?.message}
              </span>
              <Input
                label="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailRegex,
                    message: "Please enter a valid email",
                  },
                })}
                autoComplete="email"
                errors={errors}
              />
              <span className="text-red-500 flex justify-center text-small-regular">
                {errors.email?.message}
              </span>
              <Input
                label="Phone"
                {...register("phone")}
                autoComplete="tel"
                errors={errors}
              />
              <Input
                label="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: pwRegex,
                    message: "Please enter a valid password",
                  },
                })}
                type="password"
                autoComplete="new-password"
                errors={errors}
              />
              <span className="text-red-500 flex justify-center text-small-regular">
                {errors.password?.message}
              </span>
            </div>
            {authError && (
              <div>
                <span className="text-rose-500 w-full text-small-regular">
                  This email address is already used.
                </span>
              </div>
            )}
            <span className="text-center text-gray-700 text-small-regular mt-6">
              By creating an account, you agree to Medusa Store&apos;s{" "}
              <Link href="/content/privacy-policy" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/content/terms-of-use" className="underline">
                Terms of Use
              </Link>
              .
            </span>
            <Button className="mt-6 w-full" size="xlarge">
              Join
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
