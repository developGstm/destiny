import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import modelServices from '../models/servicesModel'

function SectionType({type, title}) {
  const [tickets, settickets] = useState([])
  useEffect(() => {
    Axios.get(`https://cms.gstmtravel.com/api/filterService/${type}`)
    .then(response => {
      const tickets = new modelServices(response?.data)
      settickets(tickets)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  if (tickets?.servicios?.length > 0) {
    return (
      <section>
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
          <h1 className="font-extrabold text-5xl mb-5 text-white lg:text-6xl" dangerouslySetInnerHTML={{__html: title}}>
          </h1>
          <div className="gallery-tickets">
            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 w-full h-full">
              {tickets?.servicios?.map(item => 
                <div className="border p-1 flex rounded">
                  <img 
                    src={ item?.portada }
                    alt="" 
                    className='w-2/3 h-52 object-cover p-2 overflow-hidden'
                    />
                  <div className='p-2 border-l text-white flex flex-col justify-center w-1/3'>
                    <h1 className='text-xl font-extrabold'>{ item?.titulo }</h1>
                    <span className='font-bold text-xs flex gap-1 justify-center items-center'><i className="fa-sharp fa-light fa-location-dot"></i><p>{ item?.ubicacion?.description }</p></span>
                    <a className='bg-[#2d8ae8] my-3 rounded p-3 text-center' href={`${window.location.href}${item?.type?.type}/${item?.url}`}>
                      Reserva Ahora
                    </a>
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
    )
  }
}


export default SectionType
