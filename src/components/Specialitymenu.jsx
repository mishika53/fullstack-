import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'


function Specialitymenu() {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' id='speciality'>
        <h1 className='text-3xl font-medium'>Find By Speciality</h1>
        <p className='sm:w-1/ text-center text-sm'>
            Simply browse through our extensive list of doctors, 
            select your preferred date and time, and book your appointment with ease. 
            Our user-friendly platform ensures a hassle-free experience from start to finish.
        </p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt=''></img>
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Specialitymenu