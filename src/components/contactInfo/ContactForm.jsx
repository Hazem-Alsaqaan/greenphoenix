import React from "react";

function ContactForm() {
  return (
    <div className={`bg-white p-16 rounded-2xl shadow-2xl max-md:px-6`}>
      <h1 className=" font-PoppinsBlack text-mainColor py-4 text-2xl max-sm:text-xl">
        Get in touch with us!
      </h1>
      <div>
        <form
          action="https://formsubmit.co/info@greenphoenixeg.com"
          method="POST"
          className="flex flex-col"
        >
          <label htmlFor="customerEmail" className="pt-4 pl-4">
            Enter your email
          </label>
          <input
            id="customerEmail"
            type="email"
            name="email"
            placeholder="email"
            required
            className="px-4 py-1 bg-stone-50 outline-none rounded-2xl border-[1.5px] border-solid border-stone-200  focus:border-mainColor"
          />
          <label htmlFor="customerMessage" className="pt-4 pl-4">
            Enter your message
          </label>
          <textarea
            id="customerMessage"
            name="message"
            placeholder="message..."
            required
            className="p-4 min-h-32 bg-stone-50 outline-none rounded-2xl border-[1.5px] border-solid border-stone-200  focus:border-mainColor"
          ></textarea>
          <button
            type="submit"
            className="mt-8 p-2 min-w-32 bg-mainColor text-white font-PoppinsRegular text-2xl cursor-pointer hover:bg-lime-500 duration-150  max-sm:text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
