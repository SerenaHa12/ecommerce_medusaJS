import React, { ChangeEvent, useState } from "react"
import { FaSquareFull, FaRegSquare } from "react-icons/fa"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
}

const FilterRadioGroup: React.FC<FilterRadioGroupProps> = ({
  title,
  items,
  value,
  handleChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="flex flex-col gap-y-3">
      <div className="">
        <button
          onClick={toggleDropdown}
          className="border-ui-border-base bg-ui-bg-subtle border text-base font-bold h-10  p-2 flex-1 flex items-center justify-between w-full"
        >
          {title ? title : `Select ${value}`}{" "}
          {isDropdownOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </button>
        {isDropdownOpen && (
          <div className=" top-full left-0 bg-white  border rounded">
            {items.map((item) => (
              <div
                key={item.value}
                onClick={(e) => {
                  handleChange(
                    e as unknown as ChangeEvent<HTMLButtonElement>,
                    item.value
                  )
                  setIsDropdownOpen(false)
                }}
                className="p-2 cursor-pointer flex gap-2"
              >
                <div className="my-auto">
                  {" "}
                  {value === item.value ? (
                    <FaSquareFull className="text-[#748C70] w-4 h-4" />
                  ) : (
                    <FaRegSquare className="w-4 h-4" />
                  )}
                </div>
                <div className=""> {item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterRadioGroup
