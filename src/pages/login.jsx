import React, {useState} from 'react'
import Menu from '../components/menu'
import Input from '../components/input'

function Login(props) {
  const [dataUser, setdataUser] = useState({})
  const handleInput = (name,value) => {
    setdataUser({...dataUser, [name]: value})
  }

  return (
    <div>
      <Menu/>
      <section className='w-full h-screen flex justify-center items-center p-6 lg:px-8'>
        <div className="md:w-1/2 border rounded text-white flex lg:flex-row mt-10">
          <div className='w-full p-5 md:w-1/2'>
            <form onSubmit='' className='flex flex-col gap-5'>
              <span className='flex flex-col'>
                <h1 className='text-3xl font-bold'>Iniciar sesion</h1>
                <span className='text-sm font-semibold'>Accede a un sinfín de opciones de viaje con una sola cuenta</span>
              </span>
              <Input 
              nombre='nombre' 
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
              <div>
                <a href="" className='text-blue-500'>Olvidaste tu contraseña?</a>
              </div>
              <button className='bg-[#2d8ae8] rounded p-3'>Iniciar sesion</button>
            </form>
            <div className='flex flex-col mt-5 gap-3'>
              <span className='text-blue-900 text-sm'>Inicia sesion con</span>
              <div className="flex gap-3">
                <button className='border rounded p-1 w-1/2'>Facebook</button>
                <button className='border rounded p-1 w-1/2'>Google</button>
              </div>
            </div>
            <div className='flex mt-5 items-center gap-2'>
              <span className='text-blue-900 text-sm'>¿Aun no tienes cuenta?</span>
              <a href="/register" className='font-bold'>Registrate</a>
            </div>
          </div>
          <img src="../assets/traveler-login.png" className='hidden md:flex md:w-1/2 object-cover' alt="" />
        </div>
      </section>
    </div>
  )
}

export default Login
