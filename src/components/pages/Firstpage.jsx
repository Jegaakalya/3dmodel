import React from 'react'
import person2 from "../../assets/person2.png"
const Firstpage = () => {
  return (
    <div className='h-full'>
        <main className='h-full w-full bg-secondary page-shadow'>
           <div className='px-5 space-y-4'>
            <div className='flex justify-start'>
                    <img src={person2} alt="" className='w-[200px] mx-auto  '/>
                </div>
                <div>
                    <p className='uppercase'>Hello</p>
                    <p className='text-4xl md:text-2xl font-bold text-black/80'>I'm Jegathish</p>
                    <p className='text-black/75'>Full Stack Developer</p>
                    <p className='text-black/75'>
                    We're ready to start now. We can go ahead with your acceptance of this sample project. We put our best version to deliver the best project for your firm.
                    </p>
                    <a className='inline-block primary-btn' href='mailto:jegathishwaran@gmail.com'>CONTACT AS</a>
                </div>
           </div>
        </main>
      
    </div>
  )
}

export default Firstpage
