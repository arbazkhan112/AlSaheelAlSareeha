import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import logo from "../../Assets/Images/Logo.jpg"
import { FaPhoneAlt } from "react-icons/fa";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, NavLink } from 'react-router-dom'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5"><Link to="/">
            <span className="sr-only">Your Company</span>
            <img className="h-20 w-auto" src={logo} alt="Company Logo" />
          </Link>
          </a>
        </div>

        {/* Hamburger icon for mobile screens */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation items */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">


          {/* Other navigation items */}

          <NavLink to="/" className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#F58E22] transition-colors">Home</NavLink>
          <NavLink to="/AboutUs" className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#F58E22] transition-colors">About Us</NavLink>
          <NavLink to="/Services" className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#F58E22] transition-colors">Services</NavLink>
          <NavLink to="/FAQs" className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#F58E22] transition-colors">FAQs</NavLink>





          {/* Log in section for desktop */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center justify-center gap-3">
          <FaPhoneAlt />
          <NavLink to="/ContactUs" className="text-lg font-semibold leading-6 text-gray-900 hover:text-[#F58E22] transition-colors">Contact Us</NavLink>
        </div>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />

        {/* Mobile menu panel */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Close button and logo */}
          <div className="flex items-center justify-between">
            <a className="flex items-center justify-between"><Link to="/">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="Company Logo" />
            </Link>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <NavLink to="/" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Home</NavLink>
                <NavLink to="/AboutUs" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>About Us</NavLink>
                <NavLink to="/Services" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Services</NavLink>

              </div>
              <div className="py-6 items-center flex gap-3">
                <FaPhoneAlt />
                <NavLink to="/ContactUs" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Contact Us</NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
