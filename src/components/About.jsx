import about from "../assets/images/About.png";

const About = () => {
  return (
    <div className="container h-[456px] mx-auto flex items-center justify-between bg-slate-100 rounded-lg relative">
      <div className="w-1/2 space-y-5">
        <button className="border text-lg border-customBlue py-2 px-5 rounded-full  bg-white object-top absolute top-0 text-customBlue">
          Who we are
        </button>
        <div className="space-y-10">
          <h1 className="font-semibold text-5xl text-customBlue">
            We help to get <br /> Solutions
          </h1>
          <p className="text-lg text-textColor">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>
          <div className="">
            <button className=" flex items-center justify-center gap-3 bg-yellow-500 py-4 px-9 rounded-lg font-semibold text-lg">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <img src={about} alt="" className=" object-right-top top-0" />
      </div>

      <div className="absolute bottom-0 right-[150px] transform -translate-x-1/2 bg-cardBgColor shadow-lg  p-8 w-96 rounded-2xl space-y-3">
        <h2 className="font-semibold text-3xl mb-2 text-gray-100">
          Our mission is simple
        </h2>
        <p className="text-gray-300 ">
          To provide high-quality healthcare services that are accessible,
          personalized, and patient-centered.
        </p>
      </div>
    </div>
  );
};

export default About;
