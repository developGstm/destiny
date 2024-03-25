import React from 'react'
import logo from '../assets/logo-01.png'

function footer(props) {
  return (
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8 border-t text-white">
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 w-full h-full'>
          <div className='flex flex-col gap-8'>
            <img className='w-44' src={ logo } alt="" />
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Conectemos</h1>
                <div className='flex gap-7 text-lg'>
                  <i className="fa-brands fa-square-facebook"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-tiktok"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <span className='text-xl font-bold'>Out Network</span>
            <span>Concierto</span>
            <span>Deportes</span>
            <span>Comedia</span>
            <span>Magia</span>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Contáctanos</h1>
            <div className='flex flex-col'>
              <h1 className='text-base font-bold'>Ubicación</h1>
              <div className="flex flex-col gap-3">
                <span>
                  871 Coronado Center Drive Suite 200
                  Henserson, NV 89052
                </span>
                <span>
                  Campo Real 1501
                  2do piso local A
                  Plaza Ambar
                  El Refugio, Queretaro
                  76146
                </span>
              </div>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-base font-bold'>Comunicate con nosotros</h1>
              <div className="flex flex-col gap-1">
                <span>hola@destiny travel.ai</span>
                <span>+1 725 666 2418</span>
                <span>+524423885119</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default footer
