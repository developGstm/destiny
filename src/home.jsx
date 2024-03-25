import React from 'react'
import Menu from './components/menu'
import Fondo from './assets/taylor.webp'
import Slider from "react-slick";
import Footer from './components/footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
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
        <div className='w-full absolute bottom-0 left z-0 bg-gradient-to-t from-[#121212] from-10% min-h-full'></div>
        <div className="w-full absolute z-10 -bottom-20 left text-white">
          <div className="mx-auto max-w-7xl p-6">
            <h1 className="font-extrabold text-5xl lg:text-3xl mb-5">
              Proximos Eventos
            </h1>
            <div className="events">
              <Slider {...settings}>
                <div className="bg-gray-500 rounded">
                  <img src="https://e.rpp-noticias.io/xlarge/2024/03/20/434043_1555451.webp" alt="" />
                </div>
                <div className="bg-gray-500 rounded">
                  <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/S5VBI4BY6FDSVD3YS65LXXWTIE.jpg" alt="" />
                </div>
                <div className="bg-gray-500 rounded">
                  <img src="https://static.euronews.com/articles/stories/08/05/70/80/1440x810_cmsv2_c25643a5-bebb-515c-860d-6d6824cccebb-8057080.jpg" alt="" />
                </div>
                <div className="bg-gray-500 rounded">
                  <img src="https://i.ytimg.com/vi/1-2ECytiPtk/maxresdefault.jpg" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-24'>
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          <h1 className="font-extrabold text-5xl lg:text-3xl mb-5 text-white">
            Las vegas Concerts
          </h1>
          <div className="gallery-tickets">
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 w-full h-full">
              {tickets.map(item => 
                <div className="border p-1 flex">
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
            <div className='flex items-end justify-end text-[#2d8ae8] mt-2'>
              <button>Ver mas</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home