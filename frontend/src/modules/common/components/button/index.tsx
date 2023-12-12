import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "fillMedium" | "fillLarge"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50",
        {
          "text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900  disabled:hover:text-white":
            variant === "primary",
          "text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100":
            variant === "secondary",
          "text-white bg-primary border-none p-4 justify-center items-center shadow-[0px 4px 4px 0px rgba(0,0,0,0.25)] text-buttonsm hover:bg-primary-700 ":
            variant === "fillMedium",
          "text-white bg-primary border-none p-4 justify-center items-center shadow-[0px 4px 4px 0px rgba(0,0,0,0.25)] text-buttonlg hover:bg-gray-100 ":
            variant === "fillLarge",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
