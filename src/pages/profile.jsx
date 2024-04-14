import React from 'react';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Header from '../components/header';

const Profile = () => {
  return (
    <div>
      <div className='px-5 mt-10 lg:flex lg:items-center lg:flex-col max-w-screen-2xl'>
        <div className='lg:flex justify-evenly items-center'>
          <div className='mt-50 text-white mb-10 lg:w-1/3'>
            <h4>Hola <span className='text-[#ffd603]'> Noe Aviles </span></h4>
            <p> ¡Bienvenido a tu panel de control personalizado! Aquí encontrarás toda la información relevante sobre tus viajes. Desde esta plataforma, podrás acceder y dar seguimiento a tus itinerarios, fechas importantes y costos asociados. Todo lo que necesitas para planificar y organizar tus viajes está al alcance de tu mano en este panel de control. ¡Empieza a explorar y gestiona tus aventuras de manera fácil y conveniente!</p>
          </div>
          <div className='border rounded-sm text-white mb-10 lg:w-1/3'>
            <div className='border  p-2'>
              <h5 className='font-bold text-2xl'>Informacion de perfil</h5>
            </div>
            <div className='p-2 flex text-white items-center'>
              <img className='h-20 w-20 object-cover rounded-full' src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1712966400&semt=sph" alt="" />
              <div className='ml-5 text-2xl'><span>Noe Aviles</span></div>
            </div>
            <div className='p-4'>
              <p>Correo: <span className='text-[#ffd603]'> noe.aviles@gmail.com </span></p>
              <p>Teléfono: <span className='text-[#ffd603]'> 322-193-99-83 </span></p>
            </div>
            <div className='p-2'>
              <div className=' bg-blue-600 w-30 text-center rounded h-10 flex justify-center items-center cursor-pointer'> Editar </div>
            </div>
          </div>
        </div>
        <div className='lg:w-4/5 lg:px-3'>
          <div className='border rounded-sm text-white'>
            <div className='border  p-2'>
              <h5 className='font-bold text-2xl'>Tus Viajes</h5>
            </div>
           <div className='lg:flex lg:items-center'>
            <div className='lg:w-1/3'>
              <div className='border overflow-hidden'>
                <img src="https://lumiere-a.akamaihd.net/v1/images/disney_100_en_disneyland_resort_1_d1e37e03.jpeg?region=36,0,1067,599" alt="" />
              </div>
            </div>
            <div className='p-4 lg:w-2/3'>
                <h4 className='font-bold'>DISNEYLAND PAQUETE FAMILIAR</h4>
                <p className='px-2 mb-1'>Este paquete unico te incluye los vuelos redondos saliendo desde CDMX, Guadalaja o Monterrey con aerolineas seleccionadas</p>
                <p className='mb-1 font-bold'>Incluye:</p>
                <ul>
                  <li className='mb-2 lg:flex justify-between'>
                    <div className='lg:w-1/6'><i className='fa-light fa-circle-check'></i> <span className='text-[#ffd603]'>Hotel</span></div>
                    <div className='px-3 lg:px-1 lg:w-5/6'>4 noches, 5 dias Habitacion renovada 1 o 2 camas</div>
                  </li>

                  <li className='mb-2 lg:flex justify-between'>
                    <div className='lg:w-1/6'><i className='fa-light fa-circle-check'></i> <span className='text-[#ffd603]'>Vuelos</span></div>
                    <div className='px-3 lg:px-1 lg:w-5/6'>Vuelos redondo por persona saliendo desde CDMX, Guadalaja o Monterrey. Tarifa basica  no incluye maleta documentada solo de mano, sin seleccion de asiento. </div>
                  </li>

                  <li className='mb-2 lg:flex justify-between'>
                    <div className='lg:w-1/6'><i className='fa-light fa-circle-check'></i> <span className='text-[#ffd603]'>Parques</span></div>
                    <div className='px-3 lg:px-1 lg:w-5/6'>Acceso a parques 2 dias 1 parque por dia, el acceso basico no incluye park hopper, ni Genie+ o cualquier servicio de cargo adicional.</div>
                  </li>
                  <li className='mb-2 lg:flex justify-between'>
                    <div className='lg:w-1/6'><i className='fa-light fa-circle-check'></i> <span className='text-[#ffd603]'>Transportación</span></div>
                    <div className='px-3 lg:px-1 lg:w-5/6'>Transportacion redonda Aeropuerto/Hotel/Aeropuerto</div>
                  </li>
                </ul>
                <p className='mb-1 font-bold'>Fechas: <span> 10/Nov/2024 </span></p>
                <div className='flex justify-end'>
                  <p className='font-bold'> Costo: <span className='text-[#ffd603] text-2xl'> $45,000 </span>MXN/Familia</p>
                </div>
            </div>
           </div>
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Profile