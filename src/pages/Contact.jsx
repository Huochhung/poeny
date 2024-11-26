import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const Contact = () => {
  return (
    <div>
        
      <div className='text-center text-2x1 pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-x1 text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Peony Store </p> <br /> street 36 home 162c
          <p className='text-gray-500'>Phone: +1 234 567 890</p>
          <p className='text-gray-500'>Email: 0JbB0@example.com</p>
        </div>
      </div>
      <NewsletterBox />

    </div>
  )
}

export default Contact