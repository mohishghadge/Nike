import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex items-center max-lg:flex-col-reverse gap-10 max-container '>

      <div className='flex-1 '>
        <img src={offer} width={733} height={687} className='object-contain w-full' alt="offerImg" />
      </div>

      <div className="flex flex-col flex-1">
    <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
     
      <span className='text-coral-red mr-3'>
        Special 
      </span>
     Offer
     
    </h2>
    <p className="mt-4 info-text lg:max-w-lg">
        Embark on a shopping journey that redefines your experience with unbeatable deals,
        From premium selections to increidible savings,we offer unparalleled value that sets us apart.
    </p>
    
    <p className="mt-4 info-text lg:max-w-lg" >Navigate a realm of possiblilities designed to fulfill your unique desires,surpassing the loftiest expectations.
      Your journey with us is nothing short of exceptional.
    </p>
    <div className="mt-11 flex flex-1 flex-wrap gap-4 ">
    <Button label='Shop Now' iconURL={arrowRight} />
    {/* <Button label='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray" textColor ="text-slate-gray"/> */}

        <button className='flex justify-center items-center px-7  hover:text-white py-4 border font-montserrat text-lg leading-none
                hover:bg-slate-gray rounded-full bg-white text-coral-red border-slate-500' >Learn more</button>
   </div>
</div>
    </section>
  )
}

export default SpecialOffer