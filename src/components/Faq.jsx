import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 space-y-5 bg-faqColor mt-6">
      <button className="border border-customBlue py-2 px-5 rounded-full  bg-white text-customBlue  object-top">
        Faq
      </button>

      <p className="font-bold text-4xl text-customBlue ">
        Frequntly Asked Question
      </p>
      <div className=" w-full mx-auto gap-8 ">
        {/* <!-- Question 1 --> */}
        <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

        <div className="w-full md:px-6 bg-faqColor p-4">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div>
              <p className="flex justify-center items-center text-textColor text-xl leading-6 md:leading-4">
                What are your office hours?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen(!open)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal bg-white p-4">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>

        {/* <!-- Question 2 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center text-textColor text-xl leading-6 lg:leading-4 ">
                How can I schedule an appointment?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen2(!open2)}
            >
              <svg
                className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              Remember you can query the status of your orders any time in My
              orders in the My account section. if you are not resigered at
              Mango.com, you can access dierectly in the Orders section. In this
              cause, you will have enter your e-mail address and order number.
            </p>
          </div>
        </div>

        {/* <!-- Question 3 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center text-textColor text-xl leading-6 lg:leading-4 ">
                Do you accept insurance?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen3(!open3)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              Remember you can query the status of your orders any time in My
              orders in the My account section. if you are not resigered at
              Mango.com, you can access dierectly in the Orders section. In this
              cause, you will have enter your e-mail address and order number.
            </p>
          </div>
        </div>

        {/* <!-- Question 4 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6  ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center text-textColor text-xl leading-6 lg:leading-4 ">
                What should I bring to my appointment?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen4(!open4)}
            >
              <svg
                className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open4 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              Remember you can query the status of your orders any time in My
              orders in the My account section. if you are not resigered at
              Mango.com, you can access dierectly in the Orders section. In this
              cause, you will have enter your e-mail address and order number.
            </p>
          </div>
        </div>

        {/* <!-- Question 5 --> */}

        <hr className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center text-textColor text-xl leading-6 lg:leading-4 ">
                Do you offer telemedicine appointments?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen5(!open5)}
            >
              <svg
                className={"transform " + (open5 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open5 ? "block" : "hidden")}
          >
            <p className="text-base leading-6 text-gray-600 font-normal">
              Remember you can query the status of your orders any time in My
              orders in the My account section. if you are not resigered at
              Mango.com, you can access dierectly in the Orders section. In this
              cause, you will have enter your e-mail address and order number.
            </p>
          </div>
        </div>

        <hr className=" w-full lg:mt-10 my-8" />
      </div>
    </div>
  );
};

export default Faq;
