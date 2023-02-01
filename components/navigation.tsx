"use client";

import { useRouter } from "next/router";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { classNames } from "../utils/classNames";
const Navigation = () => {
  const router = useRouter();
  const items = [
    {
      name: "Home",
      path: "/",
    },
  ];
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-neutral-900 px-6 py-4">
        <div className="inline-flex items-center space-x-2">
          <div className="pr-3">
            <button onClick={() => router?.push("/")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white transition-all duration-200 ease-linear hover:text-[#FD4556]"
                fill="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          {items.map((item) => (
            <div key={item.name} className="group relative">
              <a
                onClick={() => router?.push(item.path)}
                className={`text-neutral-100 ${
                  router?.asPath === item.path
                    ? "bg-neutral-50/10"
                    : "hover:bg-neutral-50/10"
                } text-md cursor-pointer rounded-md px-4 py-2 font-semibold uppercase group-hover:transition`}
              >
                {item.name}
              </a>

              <div
                className={`h-1 w-full ${
                  router?.asPath === item.path
                    ? "bg-[#FD4556]"
                    : "group-hover:bg-[#FD4556]"
                } absolute mt-4 rounded-lg group-hover:transition`}
              />
            </div>
          ))}

          <Menu as="div" className="relative inline-block hidden text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-semibold uppercase text-white focus:outline-none">
                Weapons
                <ChevronDownIcon
                  className={`-mr-1 ml-2 h-5 w-5`}
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md border-4 border-t-red-500 border-l-transparent border-r-transparent border-b-transparent bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => router?.push("/bundles")}
                        className={classNames(
                          active
                            ? "rounded-lg bg-neutral-50/10 px-1 py-2 text-white transition-all ease-in-out"
                            : "text-white transition-all ease-in-out",
                          "relative block cursor-pointer px-4 py-2 text-sm"
                        )}
                      >
                        Package Bundles
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => router?.push("/weapons")}
                        className={classNames(
                          active
                            ? "rounded-lg bg-neutral-50/10 px-1 py-2 text-white transition-all ease-in-out"
                            : "text-white transition-all ease-in-out",
                          "relative block cursor-pointer px-4 py-2 text-sm"
                        )}
                      >
                        Weapons
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
