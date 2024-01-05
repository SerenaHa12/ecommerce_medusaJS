import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"
import React, { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import { FaSquareFull, FaRegSquare } from "react-icons/fa"
type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionSelect = (value: string) => {
    updateOption({ [option.id]: value })
    setIsDropdownOpen(false) // Đóng dropdown khi chọn một tùy chọn
  }

  return (
    <div className="flex flex-col gap-y-3">
      <div className="">
        <button
          onClick={toggleDropdown}
          className="border-ui-border-base bg-ui-bg-subtle border text-base font-bold h-10  p-2 flex-1 flex items-center justify-between w-full"
        >
          {current ? current : `Select ${title}`}{" "}
          {isDropdownOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </button>
        {isDropdownOpen && (
          <div className=" top-full left-0 bg-white border rounded">
            {filteredOptions.map((v) => (
              <div
                key={v}
                onClick={() => handleOptionSelect(v)}
                className="p-2 cursor-pointer flex gap-2"
              >
                <div className="my-auto">
                  {" "}
                  {current === v ? (
                    <FaSquareFull className="text-[#748C70] w-4 h-4" />
                  ) : (
                    <FaRegSquare className="w-4 h-4" />
                  )}
                </div>
                <div className=""> {v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OptionSelect
