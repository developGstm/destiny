import React, { useState, useEffect } from 'react'
import { Navigate , useParams  } from "react-router-dom";
import Menu from '../components/menu'
import Input from '../components/input'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../components/checkoutform'
import Axios from 'axios'
import modelService from '../models/serviceModel'

const stripePromise = loadStripe("pk_test_51MgUlTFyBKymnnM6dGT3LSsU9XWYyuza2ZnZKyDekBKQDPyy0BRAcSAoFxFkd7fb43Ni73wQZplHOBVVF9xntvyP00CcnuijYK", {
  locale: 'es'
})

const Checkout = (props) => {
  const [showInfoUser, setshowInfoUser] = useState(true)
  const [FormasPago, setFormasPago] = useState(false)
  const [typePayment, settypePayment] = useState(1)
  const [dataUser, setdataUser] = useState({})
  const { url, tarifa, fecha } = useParams();
  const [clientSecret, setClientSecret] = useState(undefined);
  const [data, setdata] = useState({})
  const [tarifaSelect, setTarifaSelect] = useState(undefined)
  const [currencyTotal, setcurrencyTotal] = useState(undefined)

  useEffect(() => {
    Axios.get(`https://cms.gstmtravel.com/api/filterServiceSearch/${url}`)
    .then(response => {
      const dataModel = new modelService(response?.data?.data[0])
      setTarifaSelect(dataModel?.tarifas?.find(tarifaItem => tarifaItem.id === parseInt(tarifa)))
      setdata(dataModel)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const handleSave = (e) => { 
    e.preventDefault()
    let tarifaSend = tarifaSelect.titulo
    if (clientSecret === undefined) {
      fetch("https://cms.gstmtravel.com/api/paymentIntent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...dataUser, fecha: tarifaSelect.fecha ,paquete: {...data, total: tarifaSelect.precio,tarifaId: tarifaSelect.id ,tarifa: tarifaSend.concat(' $', tarifaSelect.precio, data?.moneda), estatus_pago: 'completo', plataforma_pago: 'strapi'}}),
      })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)

        setFormasPago(true)
        setshowInfoUser(false)
      });
    } else {
      setFormasPago(true)
      setshowInfoUser(false)
    }
  }
  
  const handleInput = (name,value) => {
    setdataUser({...dataUser, [name]: value})
  }

  const appearance = {
    theme: 'stripe',
    variables: {
      colorBackground: '#010417',
      colorText: '#ffff',
    }
  };
  const options = {
    clientSecret,
    appearance,
  };
  
  const handleInfo = () => {
    setshowInfoUser(true)
    setFormasPago(false)
  }
  
  if (url) {
    return (
      <div>
        <Menu/>
        <section className='pt-20'>
          <div></div>
          <div className='mx-auto max-w-7xl p-6 lg:px-8 flex flex-col relative'>
            <div className="header flex w-full justify-center">
              <h1 className='text-white text-center text-2xl'>Reserva</h1>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-5 mt-10">
              <div className="md:w-2/3">
                <div className='w-full h-full relative'>
                  <div className="w-full absolute bottom-0 left-0 z-20 flex flex-col gap-1 text-white">
                    <span className='font-bold text-[#ffd603]'>Tu proximo viaje:</span>
                    <h1 className='text-lg font-semibold'>{data?.titulo}</h1>
                    <div className="w-full flex justify-between text-sm font-bold">
                      <span>{tarifaSelect && tarifaSelect.titulo} | {fecha && fecha}</span>
                      <span>${currencyTotal ? currencyTotal && `${new Intl.NumberFormat('en-IN').format(currencyTotal.total)} ${currencyTotal?.moneda}` : tarifaSelect &&`${new Intl.NumberFormat('en-IN').format(tarifaSelect.precio)} ${data?.moneda}`}</span>
                    </div>
                  </div>
                  <img src={data?.portada} alt={data?.url} className='w-full h-full object-cover rounded-lg' />
                  <div className='w-full absolute bottom-0 left z-0 bg-gradient-to-t from-[#010417] from-10% min-h-full'></div>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col">
                <div className="flex flex-col border-b py-4">
                  <div className='flex justify-between'><h1 className='text-white text-xl'>Información del viajero</h1> {!showInfoUser && <button className='rounded-lg border p-2 text-white' onClick={() => handleInfo(true)}>Editar</button>}</div>
                  {showInfoUser &&<form onSubmit={(e)=>handleSave(e)}>
                    <div className='grid grid-cols-1 mt-5 gap-5'>
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
                        placeHolder='Apellidos' 
                        type='text'
                      />
                      <Input 
                        nombre='correo' 
                        funcion={handleInput} 
                        valor={dataUser?.correo} 
                        requerido={true} 
                        placeHolder='Email' 
                        type='email'
                      />
                      <Input 
                        nombre='telefono' 
                        funcion={handleInput} 
                        valor={dataUser?.telefono} 
                        requerido={true} 
                        placeHolder='Telefono' 
                        type='phone'
                      />
                    </div>
                    <div className="w-full flex justify-end mt-5 text-white">
                      <button type='submit' className='rounded-lg border p-2 w-full lg:w-2/3'>Guardar y Continuar</button>
                    </div>
                  </form>}
                  {!showInfoUser && <div className='flex flex-col gap-1 text-white'>
                    <span><strong>Nombre:</strong> {dataUser?.nombre} {dataUser?.apellido}</span>
                    <span><strong>Email:</strong> {dataUser?.email}</span>
                    <span><strong>Telefono:</strong> {dataUser?.telefono}</span>
                  </div>}
                </div>
                <div className="flex flex-col border-b py-4">
                  <h1 className='text-white text-xl'>Formas de pago</h1>
                  {FormasPago && <div>
                    <div className='grid grid-cols-1 mt-5 gap-5'>
                      <div  className={`${typePayment === 1 ? 'border-[3px]' : 'border'} ease-out duration-400 rounded-lg text-white text-left flex flex-col`} >
                        <button className='w-full p-4 text-left' onClick={() => settypePayment(1)}><i className="fa-light fa-credit-card"></i> Tarjeta de crédito o débito</button>
                        {typePayment === 1 && <div className='w-full flex items-center justify-center pb-4 px-2'>
                          {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                              <CheckoutForm />
                            </Elements>
                          )}
                        </div>}
                      </div>
                      <button className={`${typePayment === 3 ? 'border-[3px]' : 'border'} rounded-lg p-4 text-white text-left flex gap-2 items-center`} onClick={() => settypePayment(3)}><img src={`${window.location.protocol}//${window.location.host}/assets/icon-oxxo.webp`} alt='icon-oxxo-destiny' className='w-16'/></button>
                      <button className={`${typePayment === 4 ? 'border-[3px]' : 'border'} rounded-lg p-4 text-white text-leftflex gap-2 items-center`} onClick={() => settypePayment(4)}><img src={`${window.location.protocol}//${window.location.host}/assets/icon-paypal.png`} alt='icon-paypal-destiny' className='w-16'/></button>
                      <button className={`${typePayment === 5 ? 'border-[3px]' : 'border'} rounded-lg p-4 text-white text-left flex gap-2 items-center`} onClick={() => settypePayment(5)}><img src={`${window.location.protocol}//${window.location.host}/assets/icon-destiny.png`} alt='icon-destiny' className='w-16'/> Plan de pagos</button>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return <Navigate replace to="/" />
  }

}

export default Checkout
