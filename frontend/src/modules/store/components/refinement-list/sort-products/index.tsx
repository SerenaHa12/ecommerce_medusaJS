import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import React, { ChangeEvent, useState } from "react"
import { FaRegSquare, FaSquareFull } from "react-icons/fa"
export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setSortBy: (value: string) => void
}

// const sortOptions = [
//   {
//     value: "created_at",
//     label: "Latest Arrivals",
//   },
//   {
//     value: "price_asc",
//     label: "Price: Low -> High",
//   },
//   {
//     value: "price_desc",
//     label: "Price: High -> Low",
//   },
// ]
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Best Seller", value: "best_seller" },
  { label: "Price: Low to High", value: "low_to_high" },
  { label: "Price: High to Low", value: "high_to_low" },
]
const sortOptions1 = [
  { label: "XS / US (0-4)", value: "xs" },
  { label: "S / US (4-6)", value: "s" },
  { label: "M / US (6-10)", value: "m" },
  { label: "L / US (10-14)", value: "l" },
  { label: "XL / US (12-16)", value: "xl" },
]
const sortOptions2 = [
  { label: "Black", value: "black", color: "#0C0C0C" },
  { label: "Red", value: "red", color: "#CA2929" },
  { label: "Green", value: "green", color: "#748C70" },
  { label: "Yellow", value: "yellow", color: "#909225" },
  { label: "Dark Blue", value: "blue", color: "#19418E" },
  { label: "Purple", value: "purple", color: "#D0A5EA" },
  { label: "Pink", value: "ping", color: "#CA2980" },
  { label: "Light Blue", value: "m", color: "#7DC3EB" },
  { label: "Orange", value: "orange", color: "#CA6D29" },
  { label: "White", value: "white", color: "#FFFFFF" },
]
const sortOptions3 = [
  { label: "In stock ", value: "in_stock" },
  { label: "Out of stock", value: "out_of_stock" },
]
const sortOptions4 = [
  { label: "Cotton ", value: "cotton" },
  { label: "Line", value: "line" },
  { label: "Wool ", value: "wool" },
  { label: "Silk", value: "silk" },
  { label: "Cashmere", value: "cashmere" },
]
const SortProducts = ({ sortBy, setSortBy }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e.target.value)
  }
  const [isDropdownOpen1, setDropdownOpen1] = useState(false)
  const [isDropdownOpen2, setDropdownOpen2] = useState(false)
  const [isDropdownOpen3, setDropdownOpen3] = useState(false)
  const [isDropdownOpen4, setDropdownOpen4] = useState(false)
  const [isDropdownOpen5, setDropdownOpen5] = useState(false)

  const [selectedSort1, setSelectedSort1] = useState(null)
  const [selectedSort2, setSelectedSort2] = useState(null)
  const [selectedSort3, setSelectedSort3] = useState(null)
  const [selectedSort4, setSelectedSort4] = useState(null)
  const [selectedSort5, setSelectedSort5] = useState(null)

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1)
  }
  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2)
  }
  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3)
  }
  const toggleDropdown4 = () => {
    setDropdownOpen4(!isDropdownOpen4)
  }
  const toggleDropdown5 = () => {
    setDropdownOpen5(!isDropdownOpen5)
  }

  const handleSortSelect1 = (sortOption: any) => {
    setSelectedSort1(sortOption)
  }
  const handleSortSelect2 = (sortOption: any) => {
    setSelectedSort2(sortOption)
  }
  const handleSortSelect3 = (sortOption: any) => {
    setSelectedSort3(sortOption)
  }
  const handleSortSelect4 = (sortOption: any) => {
    setSelectedSort4(sortOption)
  }
  const handleSortSelect5 = (sortOption: any) => {
    setSelectedSort5(sortOption)
  }
  const [clearFiltersActive, setClearFiltersActive] = useState(false)
  const [appliedFiltersActive, setAppliedFiltersActive] = useState(false)

  const handleClearFiltersClick = () => {
    setClearFiltersActive(true)
    setAppliedFiltersActive(false)
    // Thêm logic xử lý khi nhấn nút Clear All Filters
  }

  const handleAppliedFiltersClick = () => {
    setAppliedFiltersActive(true)
    setClearFiltersActive(false)
    // Thêm logic xử lý khi nhấn nút Applied filters
  }
  return (
    <>
      {" "}
      <div className="md:ml-10 mx-auto mt-16">
        <div className="flex w-[392px] flex-col gap-4 mx-auto ">
          {" "}
          <div className=" ">
            {isDropdownOpen1 ? (
              <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
                <div
                  onClick={toggleDropdown1}
                  className="flex w-full justify-between cursor-pointer text-[#748C70]"
                >
                  <div>Sort By </div>
                  <div className="text-xl">-</div>
                </div>
                {sortOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSortSelect1(option.value)}
                    className=""
                  >
                    <div
                      className="flex"
                      onClick={() => handleSortSelect1("sort_by_minus")}
                    >
                      {" "}
                      <div className="px-2 py-1 cursor-pointer flex ">
                        {selectedSort1 === option.value ? (
                          <FaSquareFull className="text-[#748C70] w-4 h-4" />
                        ) : (
                          <FaRegSquare className="w-4 h-4" />
                        )}
                      </div>
                      <div> {option.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                onClick={toggleDropdown1}
                className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
              >
                <div>Sort By </div>
                <div className="text-xl">+</div>
              </div>
            )}
          </div>
          <div className=" ">
            {isDropdownOpen2 ? (
              <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
                <div
                  onClick={toggleDropdown2}
                  className="flex w-full justify-between cursor-pointer text-[#748C70]"
                >
                  <div>Size </div>
                  <div className="text-xl">-</div>
                </div>
                {sortOptions1.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSortSelect2(option.value)}
                    className=""
                  >
                    <div
                      className="flex"
                      onClick={() => handleSortSelect2("sort_by_minus")}
                    >
                      {" "}
                      <div className="px-2 py-1 cursor-pointer flex ">
                        {selectedSort2 === option.value ? (
                          <FaSquareFull className="text-[#748C70] w-4 h-4" />
                        ) : (
                          <FaRegSquare className="w-4 h-4" />
                        )}
                      </div>
                      <div> {option.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                onClick={toggleDropdown2}
                className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
              >
                <div>Size </div>
                <div className="text-xl">+</div>
              </div>
            )}
          </div>
          <div className="">
            {isDropdownOpen3 ? (
              <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
                <div
                  onClick={toggleDropdown3}
                  className="flex w-full justify-between cursor-pointer text-[#748C70]"
                >
                  <div>Color</div>
                  <div className="text-xl">-</div>
                </div>
                {sortOptions2.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSortSelect3(option.value)}
                    className=""
                  >
                    <div
                      className="flex"
                      onClick={() => handleSortSelect3("sort_by_minus")}
                    >
                      {" "}
                      <div className="px-2 py-1 cursor-pointer flex ">
                        {selectedSort3 === option.value ? (
                          <FaSquareFull className="text-[#748C70] w-4 h-4" />
                        ) : (
                          <FaRegSquare className="w-4 h-4" />
                        )}
                      </div>
                      <div
                        className="w-4 h-4 rounded-full mr-2 mt-1"
                        style={{ backgroundColor: option.color }}
                      />
                      <div> {option.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                onClick={toggleDropdown3}
                className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
              >
                <div>Color </div>
                <div className="text-xl">+</div>
              </div>
            )}
          </div>
          <div className="  ">
            {isDropdownOpen4 ? (
              <div className=" top-full  borfer-[#748C70] left-0 pt-2 bg-white border rounded p-4">
                <div
                  onClick={toggleDropdown4}
                  className="flex w-full justify-between cursor-pointer text-[#748C70]"
                >
                  <div>Collection </div>
                  <div className="text-xl">-</div>
                </div>
                {sortOptions3.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSortSelect4(option.value)}
                    className=""
                  >
                    <div
                      className="flex"
                      onClick={() => handleSortSelect4("sort_by_minus")}
                    >
                      {" "}
                      <div className="px-2 py-1 cursor-pointer flex ">
                        {selectedSort4 === option.value ? (
                          <FaSquareFull className="text-[#748C70] w-4 h-4" />
                        ) : (
                          <FaRegSquare className="w-4 h-4" />
                        )}
                      </div>
                      <div> {option.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                onClick={toggleDropdown4}
                className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
              >
                <div>Collection </div>
                <div className="text-xl">+</div>
              </div>
            )}
          </div>
          <div className=" ">
            {isDropdownOpen5 ? (
              <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
                <div
                  onClick={toggleDropdown5}
                  className="flex w-full justify-between cursor-pointer text-[#748C70]"
                >
                  <div>Fabric </div>
                  <div className="text-xl">-</div>
                </div>
                {sortOptions4.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleSortSelect5(option.value)}
                    className=""
                  >
                    <div
                      className="flex"
                      onClick={() => handleSortSelect5("sort_by_minus")}
                    >
                      {" "}
                      <div className="px-2 py-1 cursor-pointer flex ">
                        {selectedSort5 === option.value ? (
                          <FaSquareFull className="text-[#748C70]" />
                        ) : (
                          <FaRegSquare />
                        )}
                      </div>
                      <div> {option.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                onClick={toggleDropdown5}
                className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
              >
                <div>Fabric </div>
                <div className="text-xl">+</div>
              </div>
            )}
          </div>
          <div className="flex gap-5 w-full justify-between">
            <div
              className={`cursor-pointer px-4 py-2 ${
                clearFiltersActive ? "bg-[#5A6D57]" : ""
              }`}
              onClick={handleClearFiltersClick}
            >
              Clear All Filters
            </div>
            <div
              className={`cursor-pointer px-4 py-2 ${
                appliedFiltersActive ? "bg-[#5A6D57]" : ""
              }`}
              onClick={handleAppliedFiltersClick}
            >
              Applied filters
            </div>
          </div>
        </div>
      </div>
      {/* <FilterRadioGroup
        title="Sort by"
        items={sortOptions}
        value={sortBy}
        handleChange={handleChange}
      /> */}
    </>
  )
}

export default SortProducts
