import advanced from "../assets/images/service-1.png";
import online from "../assets/images/service-2.png";
import consultancy from "../assets/images/service-3.png";

const Service = () => {
  return (
    <div className="container h-auto mx-auto flex items-center justify-between bg-faqColor rounded-lg mt-24">
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="space-y-6 p-8">
          <button className="border border-customBlue py-2 px-5 rounded-full  bg-white font-semibold text-lg text-customBlue">
            Service
          </button>
          <p className="text-5xl font-semibold text-customBlue">
            Empowering Health,
          </p>
          <p className="text-5xl font-semibold text-customBlue">
            Enriching Lives
          </p>
          <p className="text-lg text-textColor">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className=" flex items-center justify-center gap-3 bg-yellow-500 py-4 px-9 rounded-lg font-semibold text-lg">
            Appointment
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
        <div className="relative p-8">
          <img
            className="object-cover object-center h-[394px] w-full rounded-lg"
            src={advanced}
            alt="advanced-technology"
          />
          <div className="absolute bottom-20 left-20 w-[321px] h-[144px] space-y-4 bg-customBlue opacity-80 rounded-lg">
            <p className="text-xl ml-4 pt-2 text-gray-100">
              Advanced Technology
            </p>
            <div className="relative">
              <p className="text-sm ml-4 text-gray-100">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <div className="absolute right-3 bottom-1 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-6 text-center"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative p-8">
          <img
            className="object-cover object-center h-[394px] w-full rounded-lg"
            src={online}
            alt="online"
          />
          <div className="absolute bottom-20 left-20 w-[321px] h-[144px] space-y-4 bg-customBlue opacity-80 rounded-lg">
            <p className="text-xl ml-4 pt-2 text-gray-100">
              Online Doctor Meet
            </p>
            <div className="relative">
              <p className="text-sm ml-4 text-gray-100">
                Our surgeons are trained in the latest <br />
                robotic surgical techniques, which <br /> allow for greater
                precision.
              </p>
              <div className="absolute right-3 bottom-1 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-6 text-center"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-8">
          <img
            className="object-cover object-center h-[394px] w-full rounded-lg"
            src={consultancy}
            alt=""
          />
          <div className="absolute bottom-20 left-20 w-[321px] h-[144px] space-y-4 bg-customBlue opacity-80 rounded-lg">
            <p className="text-xl ml-4 pt-2 text-gray-100">
              Consultancy your health
            </p>
            <div className="relative">
              <p className="text-sm ml-4 text-gray-100">
                Our surgeons are trained in the latest <br />
                robotic surgical techniques, which <br /> allow for greater
                precision.
              </p>
              <div className="absolute right-3 bottom-1 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-6 text-center"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
