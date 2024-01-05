import { MdOutlineChat } from "react-icons/md"
import { IoCallSharp } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
const ContactUS = () => {
  return (
    <>
      <div className="content-container mb-20">
        <div className="flex gap-5 text-typograpy">
          <div className="text-[#748C70]">Home</div>
          <div>/</div>
          <div>Contact Us</div>
        </div>
        <div className="text-h3">Contact Us</div>
        <div className="bg-[#F0F2EF] flex flex-col gap-y-4 p-3">
          <p>
            We always love hearing from our customers! Please do not hesitate to
            contact us should you have any questions regarding our products and
            sizing recommendations or inquiries about your current order.
          </p>
          <p>
            Contact our Customer Care team through the contact form below, email
            us at hello@modimal.com or live chat with us via our chat widget on
            the bottom right hand corner of this page.
          </p>
          <p>We will aim to respond to you within 1-2 business days.</p>
        </div>
        <div>
          <div className="flex flex-col gap-y-10 mt-10 max-w-[1020px] mx-auto relative">
            <div className="text-h4">Write Us</div>
            <div className="text-h5">Your information</div>
            <div className=" ">
              <input
                type="text"
                name="name"
                id="name"
                className=" w-full border-b border-[#606060]  text-[#606060]  pl-2 pr-7"
                placeholder="Full Name"
              />
            </div>
            <div className=" ">
              <input
                type="text"
                name="email"
                id="email"
                className=" w-full border-b border-[#606060]  text-[#606060]  pl-2 pr-7"
                placeholder="Email"
              />
            </div>
            <div className="   flex items-center">
              <select
                id="currency"
                name="currency"
                defaultValue="Subject"
                className="h-full w-full border-b border-[#606060]   pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option value="Subject" disabled hidden>
                  Subject
                </option>
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div>
            <div className=" ">
              <input
                type="text"
                name="order"
                id="order"
                className=" w-full border-b border-[#606060]  text-[#606060]  pl-2 pr-7"
                placeholder="Order Number"
              />
            </div>
            <div className=" ">
              <input
                type="text"
                name="message"
                id="message"
                className=" w-full border-b border-[#606060]  text-[#606060]  pl-2 pr-7"
                placeholder="Message"
              />
            </div>
            <div className="flex items-center">
              <input
                id=""
                name=""
                value="purple"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor=""
                className="ml-3 mt-4 text-[#0C0C0C] text-base font-medium"
              >
                I HAVE READ AND UNDERSTOOD THE CONTACT US PRIVACY AND POLICY.
              </label>
            </div>
            <div className="absolute bottom-0 right-0">
              <button className="h-10 my-auto max bg-[#5A6D57]">Send</button>
            </div>
          </div>
          <div className="flex gap-8 max-md:flex-col mx-auto">
            {" "}
            <div className="text-center items-center mx-auto w-full bg-[#F0F2EF] px-4 py-8 flex flex-col gap-6 ">
              <div className="flex justify-center">
                <MdOutlineChat style={{ width: "24px", height: "24px" }} />
              </div>
              <div className="text-[#0C0C0C] text-lg font-bold">
                Chat with us
              </div>
              <div className="text-[#0C0C0C]">
                We are here and ready to chat
              </div>
              <button className="w-full border border-[#5A6D57] h-10">
                Start chat
              </button>
            </div>
            <div className="text-center items-center mx-auto w-full bg-[#F0F2EF] px-4 py-8 flex flex-col gap-6 ">
              <div className="flex justify-center">
                <IoCallSharp style={{ width: "24px", height: "24px" }} />
              </div>
              <div className="text-[#0C0C0C] text-lg font-bold">Call us</div>
              <div className="text-[#0C0C0C]">Were here to Talk to You</div>
              <button className="w-full border border-[#5A6D57] h-10">
                +1(929)460-3208
              </button>
            </div>
            <div className="text-center items-center mx-auto w-full bg-[#F0F2EF] px-4 py-8 flex flex-col gap-6 ">
              <div className="flex justify-center">
                <MdOutlineEmail style={{ width: "24px", height: "24px" }} />
              </div>
              <div className="text-[#0C0C0C] text-lg font-bold">Email Us</div>
              <div className="text-[#0C0C0C]">
                You are welcome to send us an email
              </div>
              <button className="w-full border border-[#5A6D57] h-10">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactUS
