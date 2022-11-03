"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CubeIcon,
  DatabaseIcon,
  DocumentIcon,
  DocumentTextIcon,
  FlagIcon,
  FolderIcon,
  MenuAlt2Icon,
  MenuIcon,
  PaperAirplaneIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  SearchIcon,
  TemplateIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
const Navigation = () => {
  const router = useRouter();
  const user = {
    name: "Tom Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    {
      id: 1,
      name: "Gestion",
      href: "#",
      current: true,
      icon: "",
      dropdown: [
        {
          id: 1,
          name: "Contenants",
          href: "#",
          current: true,
          icon: (
            <CubeIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 2,
          name: "Véhicules",
          href: "/vehicules",
          current: true,
          icon: (
            <TruckIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 3,
          name: "Matières collectées",
          href: "/matieres",
          current: true,
          icon: (
            <PresentationChartLineIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
      ],
    },
    {
      id: 2,
      name: "Partenaires",
      href: "#",
      current: false,
      icon: "",
      dropdown: [
        {
          id: 1,
          name: "Liste des partenaires",
          href: "#",
          current: true,
          icon: (
            <FlagIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 2,
          name: "Gestion des contacts",
          href: "/partenaires/contacts",
          current: true,
          icon: (
            <UserIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 3,
          name: "Données et export",
          href: "#",
          current: true,
          icon: (
            <DatabaseIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 4,
          name: "Facturation",
          href: "#",
          current: true,
          icon: (
            <DocumentIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 5,
          name: "Types de partenaires",
          href: "#",
          current: true,
          icon: (
            <DocumentTextIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 6,
          name: "Extranet",
          href: "#",
          current: true,
          icon: (
            <FolderIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
          dropdown: [
            {
              id: 1,
              name: "Connexions à l`'extranet",
              href: "#",
              current: true,
              icon: "",
            },
            {
              id: 2,
              name: "Documents extranet",
              href: "#",
              current: true,
              icon: "",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Tournées",
      href: "#",
      current: false,
      icon: "",
      dropdown: [
        {
          id: 1,
          name: "Calendrier hebdomadaire",
          href: "#",
          current: true,
          icon: (
            <CalendarIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 2,
          name: "Planification journalière",
          href: "#",
          current: true,
          icon: (
            <TemplateIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 3,
          name: "Suivi de tournée",
          href: "#",
          current: true,
          icon: (
            <PaperAirplaneIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
        {
          id: 4,
          name: "Pesée",
          href: "#",
          current: true,
          icon: (
            <ScaleIcon
              className="mr-2 h-5 w-5 text-current"
              aria-hidden="true"
            />
          ),
        },
      ],
    },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <Disclosure as="div" className="relative">
        <div className="fixed top-0 w-full">
          <div className="flex items-center justify-between py-4 sm:px-4 md:justify-start md:space-x-10">
            <div className="hidden justify-start px-4 md:px-32 lg:w-0 lg:flex-1">
              <a onClick={() => router.push("/")}>
                <svg
                  className="h-8 w-auto sm:h-10"
                  fill="currentColor"
                  viewBox="0 0 173.35 111.2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96.16,6.73c-.72-1.82-1.72-4.24-4-4.34-2.68-.12-4.33,2.16-5.11,3.68a21.72,21.72,0,0,0-2,12c.46,2.79,3.71,3.39,4.29,5.08s.07,7-.21,8.3c0,0,1.53-2.31,3.86-1.94,0-2.28-.75-4.47-.19-6.74.41-1.65,2.57-2.57,3.62-4.41,1.88-3.31.82-8.68-.34-11.62M92.72,20.54c1.52-2.06,3.94-4.23,3-7.82,0-.25.16-.3.16-.5l.5-.08c.69,3.73-.71,7.07-3.61,8.4"></path>
                  <path d="M68.21,0c-2.94.42-3.74,9.22-4.1,13.92A113.32,113.32,0,0,0,64,29.79c.14,1.79,1.66,5.17,1.8,6.08,0,0,.65-1.67,3.81-2,.25-2.48.13-18.63.12-26.93,0-2.24.77-7.29-1.49-7m-.12,31.69c-.79.06.35-.54.33-.85.11-1.3-.22-2.95.16-4,.57.92,1.07,4.32-.49,4.88"></path>
                  <path d="M43.5,18c-.12-1.41-.19-3-.34-4.26s-.07-3-1-3.53a83.68,83.68,0,0,0-.32,9.33c0,.88.4,2.19-.49,2.8-.64-3.49.16-8.61-.84-11.71-1.15,3.49.08,8.91-1,12.47-.79-3.49.12-8.9-.84-12.18-1,1.43-.35,3.62-.49,5.67,0,.48-.14,1-.16,1.47-.07,1.71.47,3.63-.49,4.87-.39-3.72-.13-8.18-.51-11.91-1.08,1-.86,2.56-1,3.83s-.22,2.88-.33,4.37c-.2,2.83-1,6.8-.15,9,.43,1.14,2.21,1.54,2.48,2.49.6,2.15-.7,6.53-.16,8.54l3.46-.54c-.12-2.37-.23-6.39-.18-9C44.75,27.84,43.89,23,43.5,18m-3,10.7c.76-1.08,2-1.76,2-3.5.26-.09.28.1.49.08a3.12,3.12,0,0,1-2.46,3.42"></path>
                  <path d="M68.51,109.66c-1.15-9.74-3.71-28.84-2.72-40.15,0,.17,3.49-.07,4.24-2.65-.69,3-2.78,4.2-2.56,13,.23,9.22.74,20.31,1,29.76"></path>
                  <path d="M60.91,102.78c.65-3.28,1.68-6.1,4.69-6.5.32.38.27,1.31.78,1.42,0,3.84-2.77,6-5.47,5.08m4.4-5c-.53,1.18-3,2.32-2.33,3.49.53-1.19,3-2.33,2.33-3.49"></path>
                  <path d="M73.34,94c.14-2.28-3.74-3-4.55-5.57,3.42-1.16,6.32,2.46,6.78,7.4-4,.38-6.71-1.31-7.09-6.42,1.44,1.8,3.47,2.73,4.86,4.59"></path>
                  <path d="M60.87,94.58c2-1.18,3-3.63,5.14-4.59-.31,4.61-2.59,6.8-6.83,6.6.15-4.68,3.09-9.67,6.43-7.54-1.45,2-3.59,3.16-4.74,5.53"></path>
                  <path d="M75.11,86.18c-1.61-3.1-4.84-3.77-6.4-6.94,4.71-1.84,7.43,3.65,8.63,8.76-4.36,1.41-8.67-1.38-9.27-7.28,2.79,1.16,4.38,4.1,7,5.46"></path>
                  <path d="M58.7,86.48c2.17.23,4.85-5.23,6.52-5.62.46,6.34-4,8.91-8.19,8.11.38-5.65,3-10.78,7.76-9.54-1.65,2.81-4,4.8-6.09,7"></path>
                  <path d="M71.86,100.33c.43-1.19-2-2.49-3-3.24,2.15-2.41,5.23,1.48,5.6,5-1.9,1.16-5.53-.45-5.93-4.54a7.82,7.82,0,0,1,3.34,2.74"></path>
                  <path d="M70.62,76c-2.23-.11-4-.71-4.32-3,1.14,2.25,1.94-3.88,4.32,3"></path>
                  <path d="M65.1,104.7c.28.88,1.55-.71,1.67-1.49.9,1.71-.88,3.9-3,3.43.3-2.14.75-4.09,2.94-3.9-.2,1.08-1,1.45-1.64,2"></path>
                  <path d="M62.52,76.07c.83-1.44,1.27-3.2,4.18-3,.8,2.63-2.52,3.77-4.18,3"></path>
                  <path d="M72.45,105.75c-1.48,1.36-4.08.09-3.62-3.11,2.38-.73,2.58,1.82,3.62,3.11"></path>
                  <path d="M93.26,62.48a13.12,13.12,0,0,0-.92,4.29c0,1.35,1.86,3.32,2.9,5.3,6,11.31-3,25.2-4.57,35.93-.58-11.56-10.31-24.48-4.26-35.93,1.33-2.52,3.22-1.78,2.8-7.54C90.56,64.45,92,64.56,93.26,62.48Zm-3.2,9.59c-8.71,6.17-1.17,22.41.61,31.49,2.64-8,10-25.95.92-31.49-.13,4.76,2.21,5.93,3,9.31-1.2-1.06-1.85-2.93-3-4C91,82.65,93.17,84,94,87.15c-1.18-.79-1.19-3.29-2.74-3.55a12.11,12.11,0,0,0,.91,6.21c-.43-.11-.51-.73-.91-.89a35.12,35.12,0,0,1-.61,8c-.08-3.38-.08-4.16,0-7.54-.2-1.51-1,1.95-1.22.44,1.26-1.23,1.34-3.89.61-6.21-.52.88-1.6,3.25-2.13,2.66,1.18-2,3.3-4.94,2.13-8.87-.83,1.31-2.21,4.16-3,4,1.07-3.08,3.68-5.08,3-9.31"></path>
                  <path d="M38.16,111.14c.08.59,1.77-3.58.71-6.44a3,3,0,0,0-1.43,3.22c-.41-.07-.3-.84-.35-1.38A1.48,1.48,0,0,1,36,107a15.26,15.26,0,0,1,2.85-3.22V98.26c-2.28.14-.67,1.87-1.78,1.38-.59-.26-2.28,1.67-3.93,3.22.46-3.7,6.2-4.58,5.35-11.5A7.45,7.45,0,0,0,35,96c-.53-.2.14-.59,0-1.38-1.44.45-2.19,1.79-3.21,2.76.21-1.72,2.87-4.26,4.28-6-.24-1.37-.77.44-1.43,0,1-1.21,2.58-1.58,3.57-2.76V84.92c-2.08,2.84-6.29,2.93-6.78,7.82-.29-2.37-1.3-1.46-2.14,0C28.41,91,36.73,85.93,31,86.3c2-.5,6.14-2.2,7.14-5.52a46.23,46.23,0,0,1-.36-7.36l3.83-.57a70,70,0,0,0-.43,8.57c2.11,2,2.34,5.61,6.23,5.34,1.16.53-1,.52-1.42.46.93,2.17,2.61,3.38,3.92,5.06-.65.81-2-1.43-2.85-1.84-.45.12-.36.92,0,.92-1.16-1.43-3.82-4.89-6.43-6a4.27,4.27,0,0,0,4.29,6c-3.06,1,.84,3.7,1.78,5.06-.58,1.18-3-3.59-3.21-1.38a41.94,41.94,0,0,0-2.86-3.68c-2,5.54,3.84,8,5.71,11.5-.18,1.3-2.14-2.73-1.78.46-.56-1.58-1.2-3-2.5-3.68-.53.2.14.59,0,1.38-1-.57-1-2.35-1.78-3.22-1.55,3.86-.09,7.33,2.14,8.74-.28,1.06-1.25-.79-1.79-.92,0,.54.08.82.36.92-.51,1.36-.75-1.43-1.07-1.84-.53,1-.81,5.63.36,6,0,.81-1.69-.73-2.14.46"></path>
                  <path d="M0,26.89H0A1.17,1.17,0,0,1,1.38,28l0,7.28,2.24-.38v.56a1,1,0,0,1-.88,1L0,37Z"></path>
                  <path d="M6.18,30.11,8,29.8v1.44l-1.87.32v2.95l2.34-.39v1.44l-3.71.62,0-10.1,3.7-.62v.08a1.61,1.61,0,0,1-1.35,1.59l-1,.17Z"></path>
                  <path d="M11.82,24.8c1.32-.22,2,.59,2,2.21a1.68,1.68,0,0,1-.3.74,2,2,0,0,1-1,.45V27.12c0-.72-.25-1-.68-.88s-.68.38-.68,1.11c0,2.07,2.65,2,2.64,4.91,0,1.61-.69,2.65-2,2.87s-2-.58-2-2.2h0a1.27,1.27,0,0,1,.73-1.15l.56-.28v1.32c0,.72.27.93.7.86s.7-.38.7-1.1c0-2.07-2.65-2-2.64-4.91C9.81,26.06,10.49,25,11.82,24.8Z"></path>
                  <path d="M2.93,47.24l6.32-1.05c4-.67,5.94,1.59,5.93,6.34l0,15c0,4.74-2,7.66-6,8.32L2.87,76.91Zm4,3.57L6.87,72l2.25-.37c1.27-.21,2-1.1,2-3.22l0-15.43c0-2.12-.76-2.75-2-2.54Z"></path>
                  <path d="M23.51,56.3,29,55.38v4.24l-5.48.92v8.69l6.89-1.16v4.24L19.49,74.13l.06-29.66,10.88-1.82v.49a4.42,4.42,0,0,1-3.7,4.36l-3.2.54ZM29.25,35,27,38.18a6.1,6.1,0,0,1-4,2.52l-.17,0,2.48-5.12Z"></path>
                  <path d="M35.07,42l12-2.29v2a2.78,2.78,0,0,1-2.22,2.72L41.7,45l-.05,25.43-4,.66.05-25.43L32,46.71V45.56A3.66,3.66,0,0,1,35.07,42Z"></path>
                  <path d="M57.72,67.74a10,10,0,0,1-.35-3.58V59.49c0-2.75-.79-3.63-2.61-3.33l-1.38.23,0,12.08-4,.67L49.44,41a1.76,1.76,0,0,1,1.48-1.75l4.54-.76c4.14-.69,5.91,1.26,5.9,5.84v2.33c0,3-.85,5.18-2.63,6.45,2,.64,2.64,2.78,2.64,5.87v4.58a9.27,9.27,0,0,0,.43,3.53ZM53.42,43l0,9.11L55,51.89c1.49-.25,2.4-1.16,2.4-3.54V45.43c0-2.12-.61-3-2-2.71Z"></path>
                  <path d="M68.6,36.27l1.23-.21-.06,26.5a3.74,3.74,0,0,1-3.13,3.69l-.87.14.06-26.86A3.3,3.3,0,0,1,68.6,36.27Z"></path>
                  <path d="M73.38,35.47,85.72,33.4v4.24l-4.17.7-.06,25.43-4,.66L77.54,39l-4.17.69Z"></path>
                  <path d="M92.2,32.32l1.06-.18-.05,26.22a4.1,4.1,0,0,1-3.42,4l-.58.1.05-26.7A3.52,3.52,0,0,1,92.2,32.32Z"></path>
                  <path d="M104,54.55l2.69-21.44a4.43,4.43,0,0,1,3.66-3.82l.41-.07-4,30.33-6,1-3.86-29,.3-.05a3.64,3.64,0,0,1,4.21,3.12Z"></path>
                  <path d="M114.61,35.79c0-4.75,2.16-7.82,6.08-8.48s6,1.7,6,6.45l0,15.43c0,4.74-2.16,7.81-6.08,8.47s-6.05-1.7-6-6.45Zm4,15.05c0,2.12.79,2.79,2.06,2.58s2.07-1.15,2.08-3.27l0-16c0-2.12-.79-2.79-2.06-2.58s-2.07,1.15-2.08,3.27Z"></path>
                  <path d="M138.84,54.18a9.92,9.92,0,0,1-.36-3.58V45.93c0-2.75-.79-3.64-2.6-3.33l-1.38.23,0,12.08-4,.66.06-29.66,6-1c4.13-.69,5.9,1.26,5.89,5.83v2.34c0,3-.84,5.18-2.62,6.45,2,.64,2.64,2.78,2.63,5.87V50a9.5,9.5,0,0,0,.43,3.53Zm-4.31-24.7v9.11l1.56-.26c1.48-.25,2.39-1.16,2.4-3.54V31.87c0-2.12-.61-2.95-2-2.71Z"></path>
                  <path d="M150.91,35l5.48-.91v4.23l-5.47.92,0,8.69,6.89-1.16V51l-10.88,1.82L147,23.17l10.88-1.82v.35A4.58,4.58,0,0,1,154,26.22l-3.06.52Z"></path>
                  <path d="M167.48,19.39c3.89-.65,5.87,1.73,5.86,6.48h0a2.83,2.83,0,0,1-1.85,2.65l-1.92.7v-3c0-2.11-.72-2.8-2-2.59s-2,1.14-2,3.26c0,6.1,7.79,5.94,7.77,14.42,0,4.75-2,7.8-6,8.46s-5.94-1.72-5.93-6.47h0a3.66,3.66,0,0,1,2.27-3.38l1.51-.62V43c0,2.12.79,2.75,2.06,2.53s2.07-1.11,2.08-3.23c0-6.1-7.79-5.94-7.77-14.41C161.6,23.09,163.6,20,167.48,19.39Z"></path>
                  <path d="M117.34,31.44c-.94,3.77,1.37,7.86,7.28,6.89"></path>
                  <path d="M3.52,47.15,0,47.74s-.13,4.15,6,3.12"></path>
                  <path d="M132.17,25.67l-3.52.59s-.12,4.16,6,3.13"></path>
                  <polygon points="0 40.85 0 39.43 20.3 36.13 19.39 37.69 0 40.85"></polygon>
                  <path d="M102.1,68.69l-.19-1.48,66.17-10.94v.22a1.6,1.6,0,0,1-1.36,1.58Z"></path>
                </svg>
              </a>
            </div>
            <div className="hidden items-center justify-end px-32 md:flex md:flex-1 lg:w-0">
              <div className="flex items-center justify-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-normal leading-none text-black">
                    {user.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuAlt2Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <div className="hidden w-full bg-red-800 py-3 md:block">
            <div className="flex items-center justify-between px-32">
              <div className="hidden md:block">
                <div className="items-baseline space-x-4">
                  <div className="inline-flex w-56 space-x-3 text-right">
                    {navigation.map((item) => {
                      return (
                        <Menu
                          as="div"
                          key={item.id}
                          className="relative inline-block text-left"
                        >
                          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-6 py-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {item.name}
                            <ChevronDownIcon
                              className="ml-2 -mr-1 h-5 w-5 text-red-200 hover:text-red-100"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="px-1 py-1">
                                {item.dropdown.map((item) => {
                                  return (
                                    <Menu.Item key={item.id}>
                                      {({ active }) => (
                                        <a
                                          onClick={() => router.push(item.href)}
                                          className={`${
                                            active
                                              ? "bg-red-500 text-white"
                                              : "text-gray-900"
                                          } group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                          {active ? item.icon : item.icon}
                                          {item.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  );
                                })}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-gray-300 pr-10 focus:outline-none focus:ring-transparent sm:text-sm"
                  placeholder="Rechercher"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <SearchIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="flex w-full flex-col space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <div className="relative mt-1 rounded-md pb-1 shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-gray-300 pr-10 focus:outline-none focus:ring-transparent sm:text-sm"
                placeholder="Rechercher"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <SearchIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            {navigation.map((item) => {
              return (
                <Menu
                  as="div"
                  key={item.id}
                  className="relative inline-block text-left"
                >
                  <div>
                    <Menu.Button className="inline-flex w-full rounded-md bg-red-800 px-2 py-4 text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <div className="flex items-end justify-end px-5 text-right">
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className="ml-2 -mr-1 h-5 w-5 text-red-200 hover:text-red-100"
                          aria-hidden="true"
                        />
                      </div>
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
                    <Menu.Items className="absolute left-10 z-50 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {item.dropdown.map((item) => {
                          return (
                            <Menu.Item key={item.id}>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-red-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? item.icon : item.icon}
                                  {item.name}
                                </button>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              );
            })}
          </div>
          <div className="bg-red-800 pt-4 pb-3">
            <div className="hidden items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  {user.name}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-red-800 hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </>
  );
};
export default Navigation;
