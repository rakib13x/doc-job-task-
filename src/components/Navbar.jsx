import { useState } from "react";
import logoImg from "../assets/images/logo-dark.png";

const Navbar = () => {
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="text-black">
      <div>
        <div className="relative">
          <div className=" bg-gray-50 px-6 py-9 text-black">
            <div className="container mx-auto flex items-center justify-between">
              <h1
                className="md:w-2/12 cursor-pointer text-blue-900 "
                aria-label="the Crib."
              >
                <img src={logoImg} alt="" />
              </h1>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" text-base text-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" text-base text-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" text-base text-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" text-base text-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    About us
                  </a>
                </li>
              </ul>
              <div className="md:w-2/12 justify-center flex items-center space-x-4 xl:space-x-8 ">
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 ">
                  <button
                    aria-label="view favourites"
                    className="flex items-center justify-center gap-1 font-semibold text-lg border border-blue-900  text-blue-900 py-3 px-6 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Appointment
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 font-semibold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black  dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-black  dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3"></div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <svg
                  className="fill-stroke text-white"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" flex items-center justify-between hover:underline text-base text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Home
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" flex items-center justify-between hover:underline text-base text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Service
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" flex items-center justify-between hover:underline text-base text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Blog
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className=" flex items-center justify-between hover:underline text-base text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    About us
                    <div>
                      <svg
                        className="fill-stroke text-black "
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-full flex items-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
