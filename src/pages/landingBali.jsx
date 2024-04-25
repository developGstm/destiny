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
    img:'https://almacenamientocms.nyc3.digitaloceanspaces.com/uploads/b70d6ae18b4e12c77dd79ff24e3afd18.jpg',
  },
  {
    nombre:'Ariadna Rufrancos',
    nickname:'yosoyviajera',
    instagram:'https://www.instagram.com/yosoyviajera/',
    img:'https://almacenamientocms.nyc3.digitaloceanspaces.com/uploads/4b197ecf11f9e9f4fe6d3e143cf4086f.jpg',
  },
  {
    nombre:'Mariel de Viaje',
    nickname:'marieldeviaje',
    instagram:'https://www.instagram.com/marieldeviaje/',
    img:'https://almacenamientocms.nyc3.digitaloceanspaces.com/uploads/91d5a9402e4aca7e8efbde0fb8e4f2fc.jpeg',
  },
  {
    nombre:'Luz Carreiro',
    nickname:'bee.traveler',
    instagram:'https://www.instagram.com/bee.traveler/',
    img:'https://almacenamientocms.nyc3.digitaloceanspaces.com/uploads/546330b4263b04044ed7cbdf7fcd007b.jpeg',
  },  
  {
    nombre:'Beto Pasillas',
    nickname:'betopasillas',
    instagram:'https://www.instagram.com/betopasillas/',
    img:'https://almacenamientocms.nyc3.digitaloceanspaces.com/uploads/f3e3b377bda19d7b42c396ff306eb35d.jpg',
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