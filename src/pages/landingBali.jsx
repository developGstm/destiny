import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import FormRegister from '../components/formRegister'
import Footer from '../components/footer'

const LandingBali = () => {

  return (
    <div>
        <Menu/>
        <Header 
        titulo='Viaje a Bali' 
        subtitulo='Sumérgete en el Paraíso'
        fechas="March 24 & 25, 2023" 
        boton='Registrate' 
        background='https://viajeronomada.com/wp-content/uploads/2022/06/dondealojarseenbali.jpg'
        eventos={false}
        />
        <section className='w-100 flex flex-col justify-center items-center text-white mb-40'>
          <FormRegister img=" https://scontent.cdninstagram.com/v/t39.30808-6/434850379_18427568971057744_1294687736692967237_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=jGVSJ_uKXjQAb67vemY&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzNjgxMDkwNTc5NjU2NjY2NA%3D%3D.2-ccb7-5&oh=00_AfC-31bISabUUCR9G_bPBYTx2LMspt_9WF-v-IVKzLOqcw&oe=661E6C45&_nc_sid=10d13b " />
        </section>
        <Footer/>
    </div>
  )
}

export default LandingBali