import React from 'react'
import Menu from '../components/menu';
import Footer from '../components/footer'
import fondo from '../assets/canelo.jpg';

const Landing = () => {
  
  return (
    <div>
      <Menu/>
      <section className='w-full h-screen bg-no-repeat bg-cover relative'>
        <div className="hero w-full">
          <div className="w-full absolute top left z-10 h-full">
            <div className="mx-auto max-w-7xl p-6 lg:px-8 h-full">
              <div className="w-100 md:w-1/2 h-full text-white flex justify-center flex-col">
                <h1 className="font-extrabold text-5xl">
                  <span className='text-base block text-[#40caf4]'>Sabado 4 de Mayo 2024 | T-MOBILE ARENA</span>
                  <strong className="lg:block font-extrabold">Canelo vs Munguía</strong>
                  <span className=' text-center text-4xl'>¡Duelo de Mexicanos!</span>
                </h1>
              </div>
            </div>
          </div>
          <img className='w-full h-screen object-cover' src={fondo} alt="" />
        </div>
        <div className='w-full absolute bottom-0 left z-0 bg-gradient-to-t from-[#010417] from-10% min-h-full'></div>
      </section>
      <section className=' text-white pt-10 pb-10'>
        <div className=' lg:flex lg:flex-row-reverse justify-center items-center container mx-auto pt-5 pb-5 lg:px-36'>
          <div className=' lg:w-1/2 p-5'>
            <div className=' rounded border p-3'>
              <div className=' flex items-center gap-2 p-1 border-b-2'>
                <div className=' text-center w-1/6'>
                  <h6>MAY</h6>
                  <span>04</span>
                </div>
                <div className='w-3/4'>
                  <p>Me interesa Paquete Boleto/Avión/Hotel</p>
                </div>
                <div className='w-full flex justify-end'>
                  <button className='bg-[#ffd603]  my-3 rounded p-3 w-3/4 text-white flex justify-center font-bold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                    <span className=' ml-2'>Comprar Paquete</span>
                  </button>
                </div>
              </div>

              <div className=' flex items-center gap-2 p-1 border-b-2'>
                <div className=' text-center w-1/6'>
                  <h6>MAY</h6>
                  <span>04</span>
                </div>
                <div className='w-3/4'>
                  <p>Me interesa solo el boleto de evento</p> 
                </div>
                <div className='w-full flex justify-end'>
                  <button className='bg-[#2d8ae8]   my-3 rounded p-3 w-3/4 text-white flex justify-center font-bold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" /></svg>
                  <span className=' ml-2'>Buscar Boletos</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=' lg:w-1/2 p-5'>
            <h3 className='mb-3'><strong>Descripcion Paquete:</strong></h3>
            <p>Prepárate para una batalla épica el 4 de mayo de 2024 en la T-Mobile Arena de Las Vegas, Nevada. Dos de los mejores boxeadores de México se enfrentarán en un duelo que promete ser histórico.</p>

            <p>Únete a la acción el 4 de mayo en la T-Mobile Arena de Las Vegas, Nevada. Desde $1,500 USD por persona, te ofrecemos una experiencia inolvidable que incluye todo lo que necesitas para disfrutar al máximo.</p>
            <h4 className=' mt-3'>Tu paquete incluye:</h4>
            <ul className='list-disc px-8'>
              <li>Estadía de hotel por 3 noches en uno de nuestros selectos hoteles de Las Vegas.</li>
              <li>Tickets para la pelea en la sección 200, asegurando una vista privilegiada del ring.</li>
              <li>Transporte privado desde y hacia el aeropuerto para una llegada y salida sin preocupaciones.</li>
              <li>Cuponera de descuentos con más de $2,000 USD en compras en outlets, para que aproveches al máximo tu estancia en Las Vegas.</li>
            </ul>
            <p className=' mt-3'>
            Elige entre una variedad de hoteles de renombre, como Treasure Island, Wynn Las Vegas, Planet Hollywood y más, con precios desde $780 USD hasta $2,000 USD.Reserva ahora y asegura tu lugar en esta emocionante pelea. ¡No te pierdas esta oportunidad única!
            </p>
            <div id="terms" className=''>
           
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Landing