"use client"

import Medusa from "@medusajs/medusa-js"
import { MEDUSA_BACKEND_URL } from "@lib/config"
import { Controller, useForm } from "react-hook-form"
import { Avatar, Button, Input, Label, Text } from "@medusajs/ui"
import loginImg from "../../../../../styles/assets/loginImg.png"
import Apple from "../../../../../styles/assets/Apple.png"
import Facebook from "../../../../../styles/assets/Facebook.png"
import Google from "../../../../../styles/assets/Google.png"
import Image from "next/image"
import { useMeCustomer, useCreateCustomer } from "medusa-react"
import { useState } from "react"

// export const metadata: Metadata = {
//   title: "Sign in",
//   description: "Sign in to your Medusa Store account.",
// }

const Login = () => {
  const {
    customer,
    isLoading: retrievingCustomer,
    refetch,
    remove,
  } = useMeCustomer({ onError: () => {} })

  const [isLogin, setIsLogin] = useState(0)

  // const { toast } = useToast()

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
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
        console.log(customer)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // medusa.auth.getToken({
  //   email: '',
  //   password: ''
  // })
  // .then(({ access_token }) => {
  //   console.log(access_token);
  // })

  const handleCreate = (data: any) => {
    const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
    medusa.customers
      .create({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      })
      .then(({ customer }) => {
        console.log(customer)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <section className="grid md:grid-cols-2 md:items-center p-4">
      <div className="grid-element">
        <Image
          src={loginImg}
          alt="Picture of the author"
          width={520}
          height={757}
          objectFit="center"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {isLogin === 0 && (
        <div className="w-96 m-auto">
          <h3 className="font-semibold montserrat text-center mb-7 text-2xl ">
            Log In
          </h3>
          <div>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  message: "Vui lòng nhập Email",
                  value: true,
                },
                validate: (value) => {
                  return (
                    [/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/].every(
                      (pattern) => pattern.test(value)
                    ) || "Bạn Cần Nhập Đúng Kiểu Dữ Liệu Email"
                  )
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-zinc-600 rounded-none bg-inherit"
                  onChange={onChange}
                  value={value}
                  placeholder="Email"
                />
              )}
            />
            <span className="text-red-500 flex justify-center">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  message: "Vui lòng nhập mật khẩu",
                  value: true,
                },
                minLength: {
                  value: 6,
                  message: "Mật khẩu tối thiểu 6 kí tự",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-zinc-600 rounded-none bg-inherit mt-3"
                  type="password"
                  onChange={onChange}
                  value={value}
                  placeholder="Password"
                />
              )}
            />
            <span className="text-red-500 flex justify-center">
              {errors.password?.message}
            </span>
          </div>

          <p className="text-xs font-normal montserrat capitalize leading-7 pointer-events-none focus:pointer-events-auto text-emerald-500 mt-1 text-center">
            Forgot Your Password?
          </p>
          <div>
            <Button
              className="w-full p-2 text-center text-white text-sm font-normal montserrat bg-[#45A14B] rounded-none mt-3"
              onClick={handleSubmit(handleLogin)}
            >
              Log in
            </Button>
          </div>
          <p className="text-center text-base font-normal montserrat leading-7 mt-2">
            Or
          </p>
          <div className="flex flex-row my-6 justify-center">
            <Avatar src={Apple.src} fallback="apple" />
            <Avatar className="mx-4" src={Google.src} fallback="google" />
            <Avatar src={Facebook.src} fallback="facebook" />
          </div>
          <div className="text-center text-base font-normal montserrat capitalize leading-7 mt-2">
            New To Modimal?{" "}
            <span
              className="text-emerald-500 cursor-pointer"
              onClick={() => {
                setIsLogin(1)
              }}
            >
              Create An Account{" "}
            </span>
          </div>
        </div>
      )}
      {isLogin === 1 && (
        <div className="w-96 m-auto">
          <h3 className="font-semibold montserrat text-center mb-7 text-2xl ">
            Create Account
          </h3>
          <div>
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: {
                  message: "Vui lòng nhập tên",
                  value: true,
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-zinc-600 rounded-none bg-inherit"
                  onChange={onChange}
                  value={value}
                  placeholder="First Name"
                />
              )}
            />
            <span className="text-red-500 flex justify-center">
              {errors.firstName?.message}
            </span>
          </div>
          <div>
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: {
                  message: "Vui lòng nhập tên",
                  value: true,
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-zinc-600 rounded-none bg-inherit mt-3"
                  onChange={onChange}
                  value={value}
                  placeholder="Last Name"
                />
              )}
            />
            <span className="text-red-500 flex justify-center">
              {errors.lastName?.message}
            </span>
          </div>
          <div>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  message: "Vui lòng nhập Email",
                  value: true,
                },
                validate: (value) => {
                  return (
                    [/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/].every(
                      (pattern) => pattern.test(value)
                    ) || "Bạn Cần Nhập Đúng Kiểu Dữ Liệu Email"
                  )
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-zinc-600 rounded-none bg-inherit mt-3"
                  onChange={onChange}
                  value={value}
                  placeholder="Email"
                />
              )}
            />
            <span className="text-red-500 flex justify-center">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  message: "Vui lòng nhập mật khẩu",
                  value: true,
                },
                minLength: {
                  value: 6,
                  message: "Mật khẩu tối thiểu 6 kí tự",
                },
                validate: (value) => {
                  return (
                    [
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,12}$/,
                    ].every((pattern) => pattern.test(value)) ||
                    "Mật khẩu cần nhập tối thiểu 1 kí tự thường, 1 kí tự hoa, 1 kí tự đặc biệt, 1 số"
                  )
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  className="border border-zinc-600 rounded-none bg-inherit mt-3"
                  type="password"
                  onChange={onChange}
                  value={value}
                  placeholder="Password"
                />
              )}
            />
            <span className="text-red-500 flex justify-center">
              {errors.password?.message}
            </span>
          </div>

          <div>
            <Button
              className="w-full p-2 text-center text-white text-sm font-normal montserrat bg-[#45A14B] rounded-none mt-3"
              onClick={handleSubmit(handleCreate)}
            >
              Register
            </Button>
          </div>

          <div className="text-center text-base font-normal montserrat capitalize leading-7 mt-2">
            Already have account?{" "}
            <span
              className="text-emerald-500 cursor-pointer"
              onClick={() => {
                setIsLogin(0)
              }}
            >
              Login{" "}
            </span>
          </div>

          <p className="text-center text-base font-normal montserrat leading-7 mt-2">
            Or
          </p>

          <div className="flex flex-row my-6 justify-center">
            <Avatar src={Apple.src} fallback="apple" />
            <Avatar className="mx-4" src={Google.src} fallback="google" />
            <Avatar src={Facebook.src} fallback="facebook" />
          </div>

          <div className="text-center text-xs font-normal montserrat capitalize leading-7 mt-2">
            by clicking register now you agree to terms& conditions and privacy
            policy.
          </div>
        </div>
      )}
    </section>
  )
}

export default Login
