import Image from 'next/image'
import React from 'react'
import img from '@/assests/img/image1.jpg'
import img2 from '@/assests/img/excited.gif'


const page = () => {
  return (
    <div className='flex items-center mt-10 ml-5 gap-5'>
    <div className='w-[50vw] h-[50vh]'><Image  src={img}  alt='img'/></div>
    <div className='flex flex-col justify-center '><div className='text-8xl'>Lets's Begin !</div>
    <div className='pt-10'><Image src={img2} alt='img2'/></div>
    </div>
    </div>
  )
}

export default page