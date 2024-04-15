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
import { logout } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

function Menu() {

  const dispatch = useDispatch();
  const isUserActive = useSelector(state => state.auth.activeLogin);
  const user = useSelector(state => state.auth.usuario);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginOut = () => {
    dispatch(logout());
    navigate('/');
  }
  return (
    <header className="w-full absolute top left z-50 bg-gradient-to-b from-[#121212] ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="w-48" src={ logo } alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            Inicio
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            Viajes
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            Conciertos
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            Eventos
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            Hoteles
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            Tour
          </a>
          { isUserActive && <a href='/sesion' className="text-sm font-semibold leading-6 text-white cursor-pointer"><i class="fa-solid fa-user text-white"></i><span className='ml-2'>{ user.user.nombre }</span></a> }
          { isUserActive ? <a className="text-sm font-semibold leading-6 text-white cursor-pointer" onClick={handleLoginOut} > Cerrar Sesion</a> : <a href="/login" className="text-sm font-semibold leading-6 text-white cursor-pointer"> Iniciar Sesión / Registrate </a> }

        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="w-16"
                src={ logo }
                alt=""
              />
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
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">                
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                   Inicio
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                   Viajes
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Conciertos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Eventos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hoteles
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Tour
                </a>

              </div>
              <div className="py-6">

                { isUserActive && <a href='/sesion' className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"><i class="fa-solid fa-user text-gray-900"></i><span className='ml-2'>{ user.user.nombre }</span></a> }
                { isUserActive ? <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={handleLoginOut} > Cerrar Sesion</a> : <a href="/login" className="text-sm font-semibold leading-6 text-white cursor-pointer"> Iniciar Sesión / Registrate </a> }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Menu
