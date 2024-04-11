import React, {useState} from 'react'
import Menu from '../components/menu'
import Input from '../components/input'


function Register(props) {
  const [dataUser, setdataUser] = useState({})
  const handleInput = (name,value) => {
    setdataUser({...dataUser, [name]: value})
  }

  return (
    <div>
      <Menu/>
      <section className='w-full min-h-screen flex justify-center items-center p-6 lg:px-8'>
        <div className="md:w-1/2 border rounded text-white flex lg:flex-row mt-20">
          <div className='w-full p-5 md:w-1/2'>
            <form onSubmit='' className='flex flex-col gap-5'>
              <span className='flex flex-col'>
                <h1 className='text-3xl font-bold'>Registrate</h1>
                <span className='text-sm font-semibold'>Descubre una nueva manera de viajar</span>
              </span>
              <Input 
              nombre='nombre' 
              funcion={handleInput} 
              valor={dataUser?.nombre} 
              requerido={true} 
              placeHolder='Nombre' 
              type='text'
              />
              <Input 
              nombre='apellido' 
              funcion={handleInput} 
              valor={dataUser?.apellido} 
              requerido={true} 
              placeHolder='Apellido' 
              type='text'
              />
              <Input 
              nombre='telefono' 
              funcion={handleInput} 
              valor={dataUser?.telefono} 
              requerido={true} 
              placeHolder='Telefono' 
              type='text'
              />
              <Input 
              nombre='email' 
              funcion={handleInput} 
              valor={dataUser?.email} 
              requerido={true} 
              placeHolder='Email' 
              type='email'
              />
              <Input 
              nombre='password' 
              funcion={handleInput} 
              valor={dataUser?.email} 
              requerido={true} 
              placeHolder='Password' 
              type='password'
              />
              <button className='bg-[#2d8ae8] rounded p-3'>Registrarse</button>
            </form>
            <div className='flex flex-col mt-5 gap-3'>
              <span className='text-blue-900 text-sm'>Registrate con</span>
              <div className="flex gap-3">
                <button className='border rounded p-1 w-1/2'>Facebook</button>
                <button className='border rounded p-1 w-1/2'>Google</button>
              </div>
            </div>
          </div>
          <img src="../assets/traveler-register.png" className='hidden md:flex md:w-1/2 object-cover' alt="" />
        </div>
      </section>
    </div>
  )
}

export default Register
