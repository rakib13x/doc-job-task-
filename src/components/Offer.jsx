import OfferImage from "../assets/images/Offer.png";

const Offer = () => {
  return (
    <div className="container h-auto mx-auto relative flex items-center mt-3 justify-between bg-slate-100 rounded-lg mb-8">
      <img
        src={OfferImage}
        alt=""
        className="w-full rounded-2xl object-contain"
      />
      <div className="absolute top-0 h-full w-full bg-customBlue opacity-80 rounded-2xl space-y-4 flex items-center">
        <div className="space-y-4">
          <p className="text-white text-5xl font-semibold ml-14">Get Your</p>
          <p className="text-white text-5xl font-semibold ml-14">
            First Appointment
          </p>
          <p className="text-white text-5xl font-semibold ml-14">at 50% Off!</p>
        </div>
        <div className="absolute bottom-20 flex gap-5 ml-14">
          <button className=" flex items-center justify-center gap-4 font-bold bg-yellow-500 py-4 px-5 rounded-2xl text-black">
            Appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
          <button className=" flex items-center justify-center gap-4 font-bold py-4 px-5 rounded-2xl text-white border border-white">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-4 "
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
  );
};

export default Offer;
