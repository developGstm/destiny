import React,{useState} from 'react'
import Input from './input'


const FormRegister = ({ img,imgPerfil,codigo }) => {
    const [dataUser, setdataUser] = useState({})
    const handleInput = (name,value) => {
      setdataUser({...dataUser, [name]: value})
    }
  return (
    <div className={ `${ img ? 'md:w-1/2': ' md:w-1/4 '}border rounded text-white flex lg:flex-row` }>
    <div className={`w-full p-5 relative ${ img && 'md:w-1/2'}`}>
     <span className='flex flex-col mb-5'>
        <h1 className='text-3xl font-bold'>Registrate</h1>
        <span className='text-sm font-semibold'>Descubre una nueva manera de viajar</span>
    </span>
    { imgPerfil ? <div className=' absolute bg-red-500 rounded-full top-1 right-1 overflow-hidden lg:-top-6 -right-6'><img className=' h-20 w-20 object-cover rounded-full' src={ imgPerfil } alt="" /></div> : '' }
      <form onSubmit='' className='flex flex-col gap-5'>
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
        valor={dataUser?.password} 
        requerido={true} 
        placeHolder='Password' 
        type='password'
        />
        <Input 
        nombre='codigo_descuento' 
        funcion={handleInput} 
        valor={ codigo ? codigo : dataUser?.descuento} 
        requerido={true} 
        placeHolder='Codigo de descuento' 
        type='text'
        />
        <button className='bg-[#2d8ae8] rounded p-3'>Registrarse</button>
      </form>
      <div className='flex flex-col mt-5 gap-3'>
        <span className='text-withe text-sm'>Registrate con</span>
        <div className="flex gap-3">
          <button className='border rounded p-1 w-1/2'>Facebook</button>
          <button className='border rounded p-1 w-1/2'>Google</button>
        </div>
      </div>
    </div>
   {img ? <img src={ img } className='hidden md:flex md:w-1/2 object-cover' alt="" /> : '' } 
  </div>
  )
}

export default FormRegister