import Link from "next/link";
import React from "react";

const Sidebar = ({ show, setShow }) => {
  console.log(show);
  return (
    <>
      <div
        className={` h-screen fixed w-[250px] ${
          !show ? "lg:flex flex-col" : "hidden "
        }      justify-between border-e bg-white`}
      >
        <div className="px-4 py-6">
          <div className="flex justify-between gap-2 items-center">
            <Link href="/">
              <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                Logo
              </span>
            </Link>
            <div onClick={() => setShow((prev) => !prev)}>X</div>
          </div>
          <ul className="mt-6 space-y-1">
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <Link href="/dashboard/galleries">
                    <span className="text-sm font-medium create">
                      Galleries{" "}
                    </span>
                  </Link>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="/dashboard/galleries/galleries-categories"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                    >
                      Galleries Categories
                    </a>
                  </li>

                  <li>
                    <a
                      href="/dashboard/galleries/galleries-access"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                    >
                      Galleries Access
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="/dashboard/events"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
              >
                Events
              </a>
            </li>
            {/* <li>
                <a
                  href="/dashboard/billing"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                >
                  Newsletters
                </a>
              </li> */}
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium create">
                    {" "}
                    Newsletters{" "}
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                    >
                      Newsletters Subcribers
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium create"> Listings </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                    >
                      Book Listings
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                    >
                      Catalogs Listings
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                    >
                      Articles Listings
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                    >
                      Requests
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="/dashboard/spotlight"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
              >
                spotlight
              </a>
            </li>
            <li>
              <a
                href="/dashboard/contact-us"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
              >
                contact us
              </a>
            </li>
            {/* <li>
                <a
                  href="/dashboard/billing"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
                >
                  Contact Us
                </a>
              </li> */}

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 capitalize hover:bg-gray-100 hover:text-gray-700"
              >
                Uitility
              </a>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
