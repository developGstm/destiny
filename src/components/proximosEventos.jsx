import React from 'react'
import Slider from "react-slick";

const ProximosEventos = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };

  return (
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
  )
}

export default ProximosEventos