import Image from "next/image"

const Collection = () => {
  return (
    <div>
      <h1 className="text-xl-semi">Collection</h1>
      <div className="flex flex-2 gap-2">
        <div className="flex flex-col">
          <div>
            <Image
              src="/landing/landing01.png"
              alt="landing"
              width={152}
              height={165}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Boluses</button>
          </div>
          <div>
            <Image
              src="/landing/landing01.png"
              alt="landing"
              width={152}
              height={253}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Pants</button>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <Image
              src="/landing/landing01.png"
              alt="landing"
              width={152}
              height={253}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Dresses</button>
          </div>
          <div>
            <Image
              src="/landing/landing01.png"
              alt="landing"
              width={152}
              height={165}
              className="md:w-64 lg:w-80 xl:w-96"
            />
            <button className="px-4 py-2">Outwears</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
