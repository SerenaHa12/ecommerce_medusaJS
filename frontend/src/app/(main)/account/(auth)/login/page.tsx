"use client"

import Medusa from "@medusajs/medusa-js"
import { MEDUSA_BACKEND_URL } from "@lib/config"
import { Controller, useForm } from "react-hook-form"
import { Avatar, Button, Input, Label } from "@medusajs/ui"
import loginImg from "../../../../../../public/files/loginImg.png"
import apple from "../../../../../../public/files/apple.png"
import facebook from "../../../../../../public/files/facebook.png"
import google from "../../../../../../public/files/google.png"

// export const metadata: Metadata = {
//   title: "Sign in",
//   description: "Sign in to your Medusa Store account.",
// }

const Login = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const handleLogin = (data: any) => {
    const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
    medusa.auth
      .authenticate({
        email: data.email,
        password: data.password,
      })
      .then(({ customer }) => {
        console.log(customer.id)
      })
      .catch((error) => {
        console.log(error)
        alert("LỖI NÀY")
      })
    // console.log(data)
  }

  return (
    <section className="grid gap-4 md:grid-cols-2 md:items-center sm:max-xl:p-8">
      <div>
        <img className="w-full" src={loginImg.src} alt="login-image" />
      </div>
      <div>
        <h3 className="font-semibold montserrat text-center mb-7 text-2xl">
          Log In
        </h3>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              message: "Content is required",
              value: true,
            },
          }}
          render={({ field: { onChange, value } }) => (
            <div className="w-96 m-auto">
              <Input
                className="border border-zinc-600 rounded-none bg-inherit"
                onChange={onChange}
                value={value}
                placeholder="Email"
              />
            </div>
          )}
        />
        <span className="text-red-500 flex justify-center">
          {errors.email?.message}
        </span>

        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: "Content is required",
              value: true,
            },
          }}
          render={({ field: { onChange, value } }) => (
            <div className="w-96 m-auto">
              <Input
                className="border border-zinc-600 rounded-none bg-inherit mt-3"
                type="password"
                onChange={onChange}
                value={value}
                placeholder="Password"
              />
            </div>
          )}
        />
        <span className="text-red-500 flex justify-center">
          {errors.password?.message}
        </span>

        <p className="text-xs font-normal montserrat capitalize leading-7 pointer-events-none focus:pointer-events-auto text-emerald-500 mt-1 text-center">
          Forgot Your Password?
        </p>
        <div className="w-96 m-auto">
          <Button
            className="w-96 p-2 text-center text-white text-sm font-normal montserrat bg-[#45A14B] rounded-none mt-2"
            onClick={handleSubmit(handleLogin)}
          >
            Log in
          </Button>
        </div>

        <p className="text-center text-base font-normal montserrat leading-7 mt-2">
          Or
        </p>

        <div className="flex flex-row my-6 justify-center">
          <Avatar src={apple.src} fallback="apple" />
          <Avatar className="mx-4" src={google.src} fallback="google" />
          <Avatar src={facebook.src} fallback="facebook" />
        </div>

        <p className="text-center text-base font-normal montserrat capitalize leading-7 mt-2">
          New To Modimal?{" "}
          <span className="pointer-events-none focus:pointer-events-auto text-emerald-500">
            Create An Account
          </span>
        </p>
      </div>
    </section>
  )
}

export default Login
