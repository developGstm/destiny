import React, { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '../assets/logo-01.png'

const products = [
  { name: 'Deportes', description: 'Los mejores eventos deportivos del mundo', href: '#', icon: ChartPieIcon },
  { name: 'Conciertos', description: 'Tus cantates favoritos', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Cruceros', description: 'Una nueva manera de explorar el mundo', href: '#', icon: FingerPrintIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Menu(props) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="w-full absolute top left z-50 bg-gradient-to-b from-[#121212] ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="w-48" src={ logo } alt="" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Menu
