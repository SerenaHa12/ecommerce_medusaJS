import { motion } from "framer-motion"
import Container from "./Container"
import Link from "next/link"
interface Props {
  title: string
}

const BannerText = ({ title }: Props) => {
  return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <Container className="flex h-full flex-col gap-y-6 justify-center px-[100px]">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-slate-100"
        >
          Stock up on sportswear and limited edition collections on our <br />
          awesome mid-season sale.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-4 mt-2"
        >
          <Link href="/store">
            <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold cusor-pointer">
              Find out more
            </button>
          </Link>
          <Link href="/store">
            <button className="py-3 px-6 rounded-full text-slate-200 bg-transparent border-2 border-slate-200 hover:text-white duration-200 text-sm uppercase font-semibold">
              Shop Now
            </button>
          </Link>
        </motion.div>
      </Container>
    </div>
  )
}

export default BannerText
