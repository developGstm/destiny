import React from 'react'
import logo from '../assets/logo-01.png'

function footer(props) {
  return (
    <section className='mb-5'>
      <div className="mx-auto max-w-7xl p-6 lg:px-8 bg-[#00020e] text-white rounded-xl flex items-center justify-center">
        <div className='grid grid-cols-1 gap-2 md:grid-cols-4 w-full h-full'>
          <div className='flex flex-col gap-8'>
            <img className='w-44' src={ logo } alt="" />
            <div className='text-sm'>
              En Destiny Travel, nos enorgullece ofrecerte acceso a destinos exclusivos y auténticos, permitiéndote descubrir el mundo de una manera completamente nueva. Ya sea que necesites asesoramiento para planificar tus vacaciones o asistencia durante tu estancia, estamos disponibles para garantizar que tu experiencia sea perfecta en todo momento.
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <span className='text-xl font-bold'>Reserva</span>
            <div className='flex flex-col gap-1'>
              <span>Viajes</span>
              <span>Concierto</span>
              <span>Deportes</span>
              <span>Comedia</span>
              <span>Magia</span>
            </div>
          </div>
          <div className='flex flex-col gap-4 text-sm'>
            <h1 className='text-xl font-bold'>Contáctanos</h1>
            <span className='flex items-center gap-2'>
              <i className="fa-light fa-location-dot"></i>
              <p>871 Coronado Center Drive Suite 200
              Henserson, NV 89052</p>
            </span>
            <span className='flex items-center gap-2'>
              <i className="fa-light fa-location-dot"></i><p>
                Campo Real 1501
                2do piso local A
                Plaza Ambar
                El Refugio, Queretaro
                76146
              </p>
            </span>
            <span className='flex items-center gap-2'>
              <a href="mailto:hola@destinytravel.ai"><i className="fa-light fa-envelope"></i> hola@destinytravel.ai</a>
            </span>
            <a href="tel:+17256662418" className='flex items-center gap-2'>
              <i className="fa-light fa-phone"></i><p>+1 725 666 2418</p>
            </a>
            <a href="tel:+524423885119" className='flex items-center gap-2'>
              <i className="fa-light fa-phone"></i><p>+52 442 38 85 119</p>
            </a>
          </div>
          <div>
            <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Conectemos</h1>
            <div className='flex gap-7 text-2xl'>
              <a href="https://www.facebook.com/experience.destiny"><i className="fa-brands fa-square-facebook"></i></a>
              <a href="https://www.instagram.com/experience.destiny"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@experience.destiny"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default footer
