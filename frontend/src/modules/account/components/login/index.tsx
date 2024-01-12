import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import { Spinner } from "@medusajs/icons"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or password")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="bg-gray-100 p-10 rounded-lg">
      <div className="max-w-sm flex flex-col items-center">
        {isSubmitting && (
          <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        <div>
          <div className="text-3xl uppercase my-2 font-bold text-center">
            <h1>MY ACCOUNT</h1>
          </div>
          <div className="mb-3">
            <span className="font-bold underline">LOG IN</span>
            <span className="p-2 text-light text-slate-300">|</span>
            <button
              className="font-bold text-slate-400 hover:text-green-600"
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
            >
              REGISTER
            </button>
          </div>
          <form className="w-96 flex flex-col" onSubmit={onSubmit}>
            <div className="flex text-2xl font-bold flex-col w-full gap-y-2">
              <Input
                label="Email"
                {...register("email", { required: "Email is required" })}
                autoComplete="email"
                errors={errors}
              />
              <Input
                label="Password"
                {...register("password", { required: "Password is required" })}
                type="password"
                autoComplete="current-password"
                errors={errors}
              />
            </div>
            {authError && (
              <div>
                <span className="text-rose-500 w-full text-small-regular">
                  Bạn đã nhập sai Email hoặc Mật khẩu
                </span>
              </div>
            )}
            <Button className="mt-6 w-full" size="large">
              Enter
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
