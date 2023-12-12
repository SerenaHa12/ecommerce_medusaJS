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
const SortProducts = ({ sortBy, setSortBy }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e.target.value)
  }
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState(null)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleSortSelect = (sortOption: any) => {
    setSelectedSort(sortOption)
    // Bảng chỉ đóng khi nhấn "Sort By -"
    if (sortOption !== "sort_by_minus") {
      setDropdownOpen(false)
    }
  }

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
  return (
    <>
      {" "}
      <div className="flex  flex-col gap-4">
        {" "}
        <div className=" w-56">
          {isDropdownOpen ? (
            <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
              <div
                onClick={toggleDropdown}
                className="flex w-48 justify-between cursor-pointer text-[#748C70]"
              >
                <div>Sort By </div>
                <div className="text-xl">-</div>
              </div>
              {sortOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSortSelect(option.value)}
                  className=""
                >
                  <div
                    className="flex"
                    onClick={() => handleSortSelect("sort_by_minus")}
                  >
                    {" "}
                    <div className="px-2 py-1 cursor-pointer flex ">
                      {selectedSort === option.value ? (
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
              onClick={toggleDropdown}
              className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
            >
              <div>Sort By </div>
              <div className="text-xl">+</div>
            </div>
          )}
        </div>
        <div className=" w-56">
          {isDropdownOpen ? (
            <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
              <div
                onClick={toggleDropdown}
                className="flex w-48 justify-between cursor-pointer text-[#748C70]"
              >
                <div>Size </div>
                <div className="text-xl">-</div>
              </div>
              {sortOptions1.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSortSelect(option.value)}
                  className=""
                >
                  <div
                    className="flex"
                    onClick={() => handleSortSelect("sort_by_minus")}
                  >
                    {" "}
                    <div className="px-2 py-1 cursor-pointer flex ">
                      {selectedSort === option.value ? (
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
              onClick={toggleDropdown}
              className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
            >
              <div>Size </div>
              <div className="text-xl">+</div>
            </div>
          )}
        </div>
        <div className="w-56">
          {isDropdownOpen ? (
            <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
              <div
                onClick={toggleDropdown}
                className="flex w-48 justify-between cursor-pointer text-[#748C70]"
              >
                <div>Color</div>
                <div className="text-xl">-</div>
              </div>
              {sortOptions2.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSortSelect(option.value)}
                  className=""
                >
                  <div
                    className="flex"
                    onClick={() => handleSortSelect("sort_by_minus")}
                  >
                    {" "}
                    <div className="px-2 py-1 cursor-pointer flex ">
                      {selectedSort === option.value ? (
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
              onClick={toggleDropdown}
              className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
            >
              <div>Color </div>
              <div className="text-xl">+</div>
            </div>
          )}
        </div>
        <div className=" w-56 ">
          {isDropdownOpen ? (
            <div className=" top-full border borfer-[#748C70] left-0 pt-2 bg-white border rounded p-4">
              <div
                onClick={toggleDropdown}
                className="flex w-48 justify-between cursor-pointer text-[#748C70]"
              >
                <div>Collection </div>
                <div className="text-xl">-</div>
              </div>
              {sortOptions3.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSortSelect(option.value)}
                  className=""
                >
                  <div
                    className="flex"
                    onClick={() => handleSortSelect("sort_by_minus")}
                  >
                    {" "}
                    <div className="px-2 py-1 cursor-pointer flex ">
                      {selectedSort === option.value ? (
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
              onClick={toggleDropdown}
              className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
            >
              <div>Collection </div>
              <div className="text-xl">+</div>
            </div>
          )}
        </div>
        <div className=" w-56">
          {isDropdownOpen ? (
            <div className=" top-full left-0 mt-2 bg-white border rounded p-4">
              <div
                onClick={toggleDropdown}
                className="flex w-48 justify-between cursor-pointer text-[#748C70]"
              >
                <div>Fabric </div>
                <div className="text-xl">-</div>
              </div>
              {sortOptions4.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSortSelect(option.value)}
                  className=""
                >
                  <div
                    className="flex"
                    onClick={() => handleSortSelect("sort_by_minus")}
                  >
                    {" "}
                    <div className="px-2 py-1 cursor-pointer flex ">
                      {selectedSort === option.value ? (
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
              onClick={toggleDropdown}
              className="flex  justify-between p-3 bg-[#748C70] cursor-pointer"
            >
              <div>Fabric </div>
              <div className="text-xl">+</div>
            </div>
          )}
        </div>
      </div>
      <FilterRadioGroup
        title="Sort by"
        items={sortOptions}
        value={sortBy}
        handleChange={handleChange}
      />
    </>
  )
}

export default SortProducts
