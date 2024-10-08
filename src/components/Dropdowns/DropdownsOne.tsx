import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";

const DropdownsOne: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-dark dark:text-white">
          Dropdowns Style 1
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="relative mb-50 inline-block">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-2.5 rounded-[7px] bg-primary px-5.5 py-[13px] font-medium text-white hover:bg-opacity-95"
          >
            Dropdown Button
            <svg
              className={`fill-current duration-200 ease-linear ${
                dropdownOpen && "rotate-180"
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.69344 7.09327C3.91808 6.83119 4.31265 6.80084 4.57472 7.02548L10.0013 11.6768L15.4279 7.02548C15.69 6.80084 16.0845 6.83119 16.3092 7.09327C16.5338 7.35535 16.5035 7.74991 16.2414 7.97455L10.4081 12.9745C10.174 13.1752 9.82862 13.1752 9.59457 12.9745L3.76124 7.97455C3.49916 7.74991 3.46881 7.35535 3.69344 7.09327Z"
                fill=""
              />
            </svg>
          </button>
          <ClickOutside onClick={() => setDropdownOpen(false)}>
            {dropdownOpen && (
              <div
                className={`absolute left-0 top-full z-40 mt-2 w-full rounded-[7px] border border-stroke bg-white py-3 shadow-card-4 dark:border-dark-3 dark:bg-dark-2`}
              >
                <ul className="flex flex-col">
                  <li>
                    <Link
                      href="#"
                      className="flex px-5 py-[7px] font-medium hover:bg-gray-2 hover:text-primary dark:hover:bg-dark-4 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex px-5 py-[7px] font-medium hover:bg-gray-2 hover:text-primary dark:hover:bg-dark-4 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex px-5 py-[7px] font-medium hover:bg-gray-2 hover:text-primary dark:hover:bg-dark-4 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex px-5 py-[7px] font-medium hover:bg-gray-2 hover:text-primary dark:hover:bg-dark-4 dark:hover:text-white"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </ClickOutside>
        </div>
      </div>
    </div>
  );
};

export default DropdownsOne;
