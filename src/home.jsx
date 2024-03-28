import React from 'react'
import Menu from './components/menu'
import Fondo from './assets/taylor.webp'
import Slider from "react-slick";
import Footer from './components/footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import traveler from './assets/traveler.jpg'
import lasvegas from './assets/lasvegas.jpg'
import hawaii from './assets/hawaii.webp'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const Home = () => {  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  const tickets = [
    {
      imagen: 'https://s.yimg.com/ny/api/res/1.2/.qpcyHvHVa_9jqx3wsbxNg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTM-/https://media.zenfs.com/en/people_218/6dc6bc2e8c845b730de01021eb4f6f8e',
      title: 'Christina Aguilera',
      ubication: 'Voltaire At the Venetian, Las Vegas'
    },
    {
      imagen: 'https://i.scdn.co/image/ab6761610000e5eb207b21f3ed0ee96adce3166a',
      title: 'The killers',
      ubication: 'The Colosseum At Caesars Palace, Las Vegas, NV'
    },
    {
      imagen: 'https://www.billboard.com/wp-content/uploads/2024/01/Justin-Timberlake-cr-Charlotte-Rutherford-billboard-1548.jpg',
      title: 'Justin Timberlake',
      ubication: 'T-Mobile Arena, Las Vegas, NV'
    },
    {
      imagen: 'https://stylecaster.com/wp-content/uploads/2024/02/adele-postpone.jpg',
      title: 'Adele',
      ubication: 'The Colosseum At Caesars Palace, Las Vegas, NV'
    },
  ]

  const destinos = [
    {
      imagen:'https://viajeronomada.com/wp-content/uploads/2022/06/dondealojarseenbali.jpg',
      title:'Verano en Bali',
      descripcion:'Exprimenta la magia de Bali con nuestro exclusivo itinerario de 10 dias desde templos ancestrales, playas de ensueño',
      precio:'$750',
      ubicacion: 'Indonesia'
    },
    {
      imagen:'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg',
      title:'Conociendo Hawaii',
      descripcion:'Exprimenta la magia de Bali con nuestro exclusivo itinerario de 10 dias desde templos ancestrales, playas de ensueño',
      precio:'$750',
      ubicacion: 'USA'
    },
    {
      imagen:'https://www.omintassistance.com.ar/blog/wp-content/uploads/2018/01/Grecia.jpg',
      title:'Grecia en 10 dias',
      descripcion:'Exprimenta la magia de Bali con nuestro exclusivo itinerario de 10 dias desde templos ancestrales, playas de ensueño',
      precio:'$2,066',
      ubicacion: 'Grecia'
    },
    {
      imagen:'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ships/oasis/oasis-of-the-seas-labadee-haiti-aft.jpg?$1440x600$',
      title:'Crucero CocoCay',
      descripcion:'Exprimenta la magia de Bali con nuestro exclusivo itinerario de 10 dias desde templos ancestrales, playas de ensueño',
      precio:'$2,066',
      ubicacion: 'Las Bahamas'
    }
  ]

  const cordenadas = [
    { lon:-88.35041848015022, lat: 20.019650322154078 },
    { lon:-103.83997413656888, lat: 20.416780187979665 },
    { lon:-96.74165799946856, lat: 17.079535594783813 },
    { lon:-99.14919654495668, lat: 19.39432286933631 },
    { lon:-99.071329702146, lat: 19.43092650300747 },
    { lon:-111.9580443234437, lat: 25.884397818312166 },
    { lon:-115.33872207643668, lat: 31.464038419794303 },
    { lon:-89.03511613003819, lat: 21.082542094907307 },
    { lon:-117.28297097097357, lat: 39.25578946896848 },
    { lon:-81.3243030963075, lat: 28.309701988542866 },
    { lon:-94.92571859994054, lat: 39.80432765403459 },
    { lon:-73.97151421177622, lat: 40.753219651308896 },
    { lon:-99.91142904155241, lat: 31.93152446965594 },
    { lon:-119.94092151807098, lat: 38.10837325843462 },
    { lon:-121.56524334847411, lat: 44.570878358915785 },
    { lon:-121.08431631906585, lat: 47.68192444333631 },
    { lon:-3.70256, lat:40.4165 },
    { lat:41.38879, lon: 2.15899 },
    { lat: 37.38283, lon: -5.97317 },
    { lat: -23.5475, lon: -46.63611 },
    { lat: -22.90642, lon: -43.18223 },
    { lat: 21.31992, lon: 110.5723 },
    { lat: 4.60971, lon: -74.08175 },
    { lat: 6.25184, lon: -75.56359 },
    { lat: 3.43722, lon: -76.5225 },
    { lat: 48.85341, lon: 2.3488 },
    { lat: 43.29695, lon: 5.38107 }
  ]

  return (
    <div>
      <Menu/>
      <section className='w-full h-screen bg-no-repeat bg-cover relative'>
        <div className="hero w-full">
          <div className="w-full absolute top left z-10 h-full">
            <div className="mx-auto max-w-7xl p-6 lg:px-8 h-full">
              <div className="w-100 md:w-1/2 h-full text-white flex justify-center flex-col">
                <h1 className="font-extrabold text-5xl">
                  <span className='text-base block text-[#40caf4]'>March 24 & 25, 2023 | Allegiant Stadium</span>
                  TAYLOR SWIFT
                  <strong className="lg:block font-extrabold"> THE ERAS TOUR</strong>
                </h1>
                <button className='bg-[#2d8ae8] lg:w-1/2 my-3 rounded p-3'>
                  Reserva Ahora
                </button>
              </div>
            </div>
          </div>
          <img className='w-full h-screen object-cover' src={Fondo} alt="" />
        </div>
        <div className='w-full absolute bottom-0 left z-0 bg-gradient-to-t from-[#010417] from-10% min-h-full'></div>
        <div className="w-full absolute z-10 -bottom-20 left text-white">
          <div className="mx-auto max-w-7xl p-6">
            <h1 className="font-extrabold text-5xl lg:text-3xl mb-5">
              Proximos Eventos
            </h1>
            <div className="events">
              <Slider {...settings}>
                <div className="relative rounded-lg">
                  <div className="absolute bg-[#2d8ae8] right-0 bottom-2 p-1 rounded">
                    <span className='text-sm font-bold'>+ Paquete</span>
                  </div>
                  <img src="https://e.rpp-noticias.io/xlarge/2024/03/20/434043_1555451.webp" className='rounded-lg' alt="" />
                </div>
                <div className="rounded-lg relative">
                  <div className="absolute bg-[#2d8ae8] right-0 bottom-2 p-1 rounded">
                    <span className='text-sm font-bold'>+ Paquete</span>
                  </div>
                  <img className='rounded-lg' src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/S5VBI4BY6FDSVD3YS65LXXWTIE.jpg" alt="" />
                </div>
                <div className="rounded-lg relative">
                  <div className="absolute bg-[#2d8ae8] right-0 bottom-2 p-1 rounded">
                    <span className='text-sm font-bold'>+ Paquete</span>
                  </div>
                  <img className='rounded-lg' src="https://static.euronews.com/articles/stories/08/05/70/80/1440x810_cmsv2_c25643a5-bebb-515c-860d-6d6824cccebb-8057080.jpg" alt="" />
                </div>
                <div className="rounded-lg relative">
                < div className="absolute bg-[#2d8ae8] right-0 bottom-2 p-1 rounded">
                    <span className='text-sm font-bold'>+ Paquete</span>
                  </div>
                  <img className='rounded-lg' src="https://i.ytimg.com/vi/1-2ECytiPtk/maxresdefault.jpg" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-24'>
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          <h1 className="font-extrabold text-5xl mb-5 text-white lg:text-6xl">
            Tu Próximo<span className='block'><span className='text-[#ffd603]'>Viaje</span> Inicia Aquí</span> 
          </h1>
          <div className="gallery-destinations">
            <div className="mt-8 grid grid-cols-1 gap-2 w-full h-full md:grid-cols-2 lg:grid-cols-4">
              {destinos.map(item => <div className="group relative overflow-hidden rounded-xl h-80 bg-red-50">
                <img 
                  src={ item.imagen }
                  alt="" 
                  className='object-cover h-full w-full'
                />
                <div className="bottom-0 left-0 absolute w-full h-2/3 bg-gradient-to-t from-[#010417] from-0%"></div>
                <div className='p-2 text-white flex flex-col justify-end bottom-0 left-0 absolute h-full w-full'>
                  <h1 className='text-2xl font-bold'>{ item.title }</h1>
                  <div className='w-full flex justify-between text-sm'>
                    <span className='flex gap-1 items-center'>
                      <i className="fa-sharp fa-light fa-location-dot text-[#ffd603]"></i>
                      {item.ubicacion}
                    </span>
                    <span className='flex gap-1'>
                      from<p className='font-bold'>{item.precio}</p>
                    </span>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
          <div className='flex items-end justify-end text-[#ffd603] mt-5'>
              <button>Ver mas</button>
            </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          <h1 className="font-extrabold text-5xl mb-5 text-white lg:text-6xl">
            Las vegas <span className="block text-[#ffd603]">Concerts</span>
          </h1>
          <div className="gallery-tickets">
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 w-full h-full">
              {tickets.map(item => 
                <div className="border p-1 flex rounded">
                  <img 
                    src={ item.imagen }
                    alt="" 
                    className='w-2/3 h-52 object-cover p-2 overflow-hidden'
                    />
                  <div className='p-2 border-l text-white flex flex-col justify-center w-1/3'>
                    <h1 className='text-xl font-extrabold'>{ item.title }</h1>
                    <span className='font-bold text-xs flex gap-1 justify-center items-center'><i className="fa-sharp fa-light fa-location-dot"></i><p>{ item.ubication }</p></span>
                    <button className='bg-[#2d8ae8] my-3 rounded p-3'>
                      Reserva Ahora
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className='flex items-end justify-end text-[#ffd603] mt-2'>
              <button>Ver mas</button>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-10'>
        <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col relative">
          <div className='relative flex items-center justify-center'>
            <div className='w-full h-96 lg:w-64 lg:h-96'>
              <img src={ traveler } alt="" className='object-cover h-full w-full rounded-3xl' />
            </div>
            <h1 className="z-10 text-center font-extrabold text-5xl mb-5 text-white lg:text-6xl md:-ml-10 absolute lg:relative">
              Explora el <span className='text-[#ffd603]'>Mundo</span><span className='block'>A tu propio <span className='text-[#ffd603]'>Ritmo</span></span>
            </h1>
            <div className='hidden lg:flex -ml-10 -z-10'>
              <img src={ lasvegas } className='w-36 h-48 object-cover rounded-xl -rotate-12 z-10' alt="" />
              <img src={ hawaii } className='w-36 h-48 object-cover rounded-xl rotate-12 mt-20' alt="" />
            </div>
            <div className="absolute bg-black w-full h-full opacity-30 lg:hidden"></div>
          </div>
          <div  className='grid grid-cols-1 gap-10 lg:gap-2 lg:grid-cols-3 w-full mt-10 text-white'>
            <div className='flex flex-col gap-5'>
              <div className='flex gap-2 items-center text-4xl font-bold'><i className="fa-light fa-clipboard-list-check text-[#ffd603]"></i><h1>Viajes a tu <span className='block'>Medida</span></h1></div>
              <span className='text-sm'>Desde la selección de destinos hasta los detalles del itinerario, trabajamos contigo para crear el viaje de tus sueños que se adapte perfectamente a tus preferencias y necesidades</span>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex gap-2 items-center text-4xl font-bold'>
                <i className="fa-solid fa-headset text-[#ffd603]"></i><h1>Atención de<span className='block'>Primera Clase </span></h1>
                </div>
              <span className='text-sm'>
                Nuestro equipo altamente capacitado está aquí para brindarte un servicio excepcional en cada etapa de tu viaje. Ya sea que necesites asesoramiento para planificar tus vacaciones o asistencia durante tu estancia, estamos disponibles para garantizar que tu experiencia sea perfecta en todo momento.
              </span>
            </div>
            <div className='flex flex-col gap-5 '>
              <div className='flex gap-2 items-center text-4xl font-bold'>
                <i className="fa-light fa-globe-stand text-[#ffd603]"></i>
                <h1>
                  Explora Destinos <span className='block'>Únicos</span>
                </h1>
              </div>
              <span className='text-sm'>
                Nos enorgullece ofrecerte acceso a destinos exclusivos y auténticos que te permitirán descubrir el mundo de una manera completamente nueva.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='relative mb-20'>
        <div className="absolute w-full h-full z-10">
          <div className="mx-auto max-w-7xl p-6 lg:px-8 flex items-center h-full">
            <div className="grid grid-cols-1 gap-10 lg:gap-2 lg:grid-cols-3 w-full lg:w-1/2 text-white">
              <div className='flex flex-col text-center gap-3'>
                <h1 className='text-5xl font-bold'>12+</h1>
                <span className='text-sm font-medium'>Años de Experiencia</span>
              </div>
              <div className='flex flex-col text-center gap-3'>
                <h1 className='text-5xl font-bold'>10M+</h1>
                <span className='text-sm font-medium'>Viajeros Felices</span>
              </div>
              <div className='flex flex-col text-center gap-3'>
                <h1 className='text-5xl font-bold'>100+</h1>
                <span className='text-sm font-medium'>Destinos Unicos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className='section-map w-full lg:w-1/2 relative'>
            <ComposableMap>
              <Geographies geography="/features.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              {cordenadas.map(item=> {
                return (
                  <Marker coordinates={[item.lon, item.lat]}>
                    <circle r={2} fill="#ffd603" />
                  </Marker>
                )
              })}
            </ComposableMap>
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[#010417] from-10%"></div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home