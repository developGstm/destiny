import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import FormRegister from '../components/formRegister'
import Footer from '../components/footer'

const LandingBali = () => {
const influncers = [
  {
    nombre:'Odemaris Ruiz',
    nickname:'ode_ruiz',
    instagram:'https://www.instagram.com/ode_ruiz/',
    img:'https://scontent.cdninstagram.com/v/t39.30808-6/436142451_18404171938068725_9161691104885404748_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=HtDSFvMDTwAAb6kRDwB&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM0NDI3NDYyNDEzOTQ5MzMyNA%3D%3D.2-ccb7-5&oh=00_AfC8WfwwVvB-9JArOMuwHPFFEbzMvc2IE8qJ-AUJTy0sSw&oe=66279BCB&_nc_sid=10d13b',
  },
  {
    nombre:'Ariadna Rufrancos',
    nickname:'yosoyviajera',
    instagram:'https://www.instagram.com/yosoyviajera/',
    img:'https://scontent.cdninstagram.com/v/t39.30808-6/432950443_18425760811010651_2114288693858053110_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=dg_u1YgsTtAAb4WFSSo&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNTk3Mjk2MDQ3MTc2OTM4Mw%3D%3D.2-ccb7-5&oh=00_AfCJoNGW9A_Eh0yKi_UXLOy9RF602quX_BF8Tm_DNk_v_Q&oe=6627B80E&_nc_sid=10d13b',
  },
  {
    nombre:'Mariel de Viaje',
    nickname:'marieldeviaje',
    instagram:'https://www.instagram.com/marieldeviaje/',
    img:'https://scontent.fpvr1-1.fna.fbcdn.net/v/t39.30808-6/295012046_607204307434014_7617254220252734331_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mXvLKh_QtwMAb42cI7E&_nc_ht=scontent.fpvr1-1.fna&oh=00_AfD_RQzShxIETXlNDdnERI2KFgqz8zXLVgk2jRmWuVpvBg&oe=6629D2CE',
  },
  {
    nombre:'Luz Carreiro',
    nickname:'bee.traveler',
    instagram:'https://www.instagram.com/bee.traveler/',
    img:'https://scontent.cdninstagram.com/v/t39.30808-6/434493880_18427568998057744_6954476508262226274_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=n5E-IaXveUwAb6qWZsQ&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNjgxMDkwNTcyOTM3OTI0OQ%3D%3D.2-ccb7-5&oh=00_AfC__sU_mhWRBwKo1QJNrs3dg2rm59ZTt5jJxMJ0ZF8ArQ&oe=6629ED79&_nc_sid=10d13b',
  },  
  {
    nombre:'Beto Pasillas',
    nickname:'betopasillas',
    instagram:'https://www.instagram.com/betopasillas/',
    img:'https://scontent.fpvr1-1.fna.fbcdn.net/v/t1.6435-9/74624118_2492859680812937_6316662278296961024_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2cx_1Rfp_I0Ab5Em1Ot&_nc_oc=Adi27SvluQbk_EJ6ckjZ_0eNV0o8f8jsPWGMQsv2sgfv01UBqpti2THnbosvPMmxemU&_nc_ht=scontent.fpvr1-1.fna&oh=00_AfCsIK_43PC-m6lvlDarJQY_eVeRLAEyhk4Dhfn97XAeEA&oe=664B7A87',
  }
]
  return (
    <div>
        <Menu/>
        <Header 
        titulo='Gana un viaje a Bali' 
        fechas='#ViveLaExperienciaDestiny'
        subtitulo='Sumérgete en el Paraíso' 
        background='https://viajeronomada.com/wp-content/uploads/2022/06/dondealojarseenbali.jpg'
        eventos={false}
        />
        <section className='w-100 px-4 lg:px-52 flex flex-col justify-center items-center text-white mb-40'>
          <div className='mb-10 text-center'>
            <h1 className="font-extrabold text-5xl text-center mb-5">
              <span>Vive La Experiencia Destiny en <span className='text-[#ffd603]'>Bali</span></span>      
            </h1>
            <p className=' text-2xl lg:text-xl text-center'>¿Estás listo para vivir la aventura de tu vida con Destiny Travel? Únete a nuestra emocionante dinámica y gana la oportunidad de explorar el paraíso de Bali en compañia de tu Influencer favorito.</p>
            <p className=' text-2xl text-center mt-4'> ¡Tu destino de ensueño te espera!</p>
          </div>
          <div className='my-20 lg:mb-5'>
            <h2 className='text-3xl font-semibold'>Acompaña a tus influencers:</h2>
            <div className='py-5 flex flex-col items-center lg:flex-row'>
              <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5 w-full '>
              {
                influncers?.map( item => (
                  <a href={ item.instagram }>
                    <div className='group relative overflow-hidden rounded-xl h-100 my-8'>
                      <img className='object-cover h-full w-full' src={ item.img } alt={ item.nombre } />
                      <div className='bottom-0 left-0 absolute w-full h-2/3 bg-gradient-to-t from-[#010417] from-0%'></div>
                      <div className='p-2 text-white flex flex-col justify-end bottom-0 left-0 absolute h-full w-full'>
                        <a target=' blank' href={ item.instagram }>
                          <p className='text-[#ffd603]'>{ item.nombre }</p>
                          <p> { item.nickname } <i class="fa-brands fa-instagram"></i></p>
                        </a>
                      </div>
                    </div>
                  </a>
                ) )
              }
              </div>
            </div>
          </div>
          <div className='mb-10'>
             <p className='text-2xl text-[#ffd603] font-semibold'> Sumérgete en la etapa 1 siguiendo estos simples pasos: </p> 
             <ul className='px-5 mt-5'>
              <li className='mb-4'>1.Sigue a @experience.destiny en todas sus redes: <a href="https://www.facebook.com/experience.destiny" className='text-[#ffd603]'>Facebook</a>, <a className='text-[#ffd603]' href="https://www.instagram.com/experience.destiny/">Instagram</a> y <a className='text-[#ffd603]' href="https://www.tiktok.com/@experience.destiny"> TikTok</a>. </li> 
              <li className='mb-4'>2.Dale like al video destacado de la dinámica en <a href="https://www.instagram.com/p/C5y45jMxx_Q/" className='text-[#ffd603]'>Instagram</a>.</li>
              <li className='mb-4'>3.Deja un comentario en el video explicando "¿Por qué quiero ir a Bali?" utilizando el hashtag #ViveLaExperienciaDestiny y etiquetando al creador de contenido.</li>
              <li className='mb-4'>4.Encuentra las palabras ocultas en los próximos videos en las redes de Destiny Travel para armar la frase ganadora.</li>
             </ul>
          </div>
          <div>
             <p className='text-2xl text-[#ffd603] font-semibold'> Etapa 2 sera apartir del 9 de mayo de 2024:</p> 
             <ul className='px-5 mt-5'>
              <li className='mb-4'>1.Los finalistas grabarán un video de un minuto respondiendo a la pregunta "¿Cómo viviré mi experiencia Destiny en Bali?" y lo enviarán del 10 al 13 de mayo. </li> 
              <li className='mb-4'>2.Se enviará un itinerario a los ganadores para ayudarles a planificar su respuesta.</li>
              <li className='mb-4' class="text-[#ffd603]"></li>
             </ul>
          </div>
          <p className='text-2xl text-[#ffd603] mt-10 text-center font-semibold'>¡Anuncio de ganadores: 15 de mayo de 2024!</p> 
        </section>
        <Footer/>
    </div>
  )
}

export default LandingBali