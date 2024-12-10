import React from 'react'
import Navbar from './Navbar'

const Listings = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const closeModal = () => {
        setIsOpen(false);
    }

  return (
    
    <div>
      <Navbar />
      <div className='flex flex-wrap p-8 mt-16 gap-8 justify-between'>
      <a href='/PhotographerCards'>
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px] h-[150px]">
            <p className='font-bold'>Photographer</p>
        </div>
        </a>
        
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px]">
            <p className='font-bold'>Cleaning</p>
            
        
        </div>
        <div className=" flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px]">
            <p className='font-bold'>Men's Salon and Massage</p>
           
           
        </div>
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px] h-[150px]">
            <p className='font-bold'>AC and Appliance Repair</p>
          
        </div>
        
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px]">
            <p className='font-bold'>Women's Salon and Massage</p>
            
           
        
        </div>
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px]">
            <p className='font-bold'>Electrician,Plumber and Carpenter</p>
           
        </div>
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px] h-[150px]">
            <p className='font-bold'>Full Home Painting</p>
           
        </div>
        
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px]">
            <p className='font-bold'>Native Water Purifier</p>
         
        </div>
        <div className="flex justify-center align-center items-center bg-orange-500 rounded-xl p-6 text-md border border-neutral-800 font-thin w-[400px]">
            <p className='font-bold'>Native Smart Locks</p>
           
        </div>
      </div>
    </div>
  )
}

export default Listings
