import certificateImg from "../assets/images/certificate.png";
import heroImg from "../assets/images/Hero.png";
import moneyImg from "../assets/images/money.png";
import pieImg from "../assets/images/pie.png";
import reviewImg from "../assets/images/reviewer.png";
import videoImg from "../assets/images/video.png";

const Hero = () => {
  return (
    <div className="container h-auto mx-auto relative bg-gray-100 rounded-lg mb-8">
      <div className="w-full">
        <img src={heroImg} alt="" className="w-full h-auto rounded-lg" />
      </div>

      <div className="w-full mt-4">
        <div className="flex">
          <div className="w-1/5">
            <div className="w-[216px] bg-white h-[312px] rounded-3xl pt-4 space-y-3 ">
              <p className="text-4xl font-bold ml-4 text-customBlue">90%</p>
              <p className="ml-4 text-blue-900">
                Patient satisfaction <br />
                rate, reflecting our <br /> commitment.
              </p>
              <div className="flex justify-center items-center">
                <img src={pieImg} alt="pie" />
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <p className="flex justify-center text-5xl font-semibold text-customBlue">
              Comprehensive Care <br />
            </p>
            <p className="flex justify-center text-5xl font-semibold text-customBlue">
              for Every Patient <br />
            </p>
            <div className="absolute bottom-0 flex gap-10 ">
              <div className=" w-[270px] h-[190px] bg-faqColor rounded-3xl space-y-3 pt-1">
                <p className="ml-4 text-4xl font-bold text-customBlue">500+</p>
                <p className="ml-4 text-blue-900">
                  Board-certified <br /> doctors
                </p>
                <div className="flex justify-end mr-4">
                  <img src={certificateImg} alt="" />
                </div>
              </div>
              <div className=" w-[270px] mt-[20px] h-[170px] bg-white rounded-3xl  space-y-3">
                <div className="flex gap-2 pt-5">
                  <p className="text-4xl font-bold ml-4 text-customBlue">4.8</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="yellow"
                      className="size-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-4 text-blue-900">Over 20,000 patient</p>
                <img src={reviewImg} alt="" className="ml-4" />
              </div>
              <div className="  w-[270px] h-[190px] bg-faqColor rounded-3xl pt-3 space-y-2">
                <p className="ml-4 text-4xl font-bold text-customBlue">$5000</p>
                <p className="ml-4 text-blue-900">
                  Money spend <br /> for poor patient
                </p>
                <div className="flex justify-end mr-5">
                  <img src={moneyImg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5">
            <div className="w-[216px] bg-white h-[312px] rounded-3xl pt-4 space-y-5 absolute right-0 ">
              <p className="text-4xl font-bold ml-4 text-customBlue">50+</p>
              <p className="ml-4 text-blue-900">
                Free lession video <br />
                for patient.
              </p>
              <div className="flex justify-center items-center pt-6">
                <img src={videoImg} alt="video" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
