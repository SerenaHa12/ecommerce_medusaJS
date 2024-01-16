import Button from "@modules/common/components/button"
import Link from "next/link"

const YearProduct = () => {
  return (
    <div className="pt-16">
      <div className="relative bg-[url(/productOfTheYear.webp)] bg-cover w-full h-80 object-cover">
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Product of the Year has a globally expanding footprint that stands
            in more than 45 countries.
          </p>
          <Link href="/store">
            <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default YearProduct
