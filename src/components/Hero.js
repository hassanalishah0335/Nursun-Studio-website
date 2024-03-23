import React from 'react'

const Hero = (props) => {
  
  const srcArray = props.src.split('/');
  return (
    <div className='relative h-600 '>
      {srcArray[2] === 'videos' ? (
        <video className='w-[100%] h-[90%] object-cover' src={props.src} alt='' autoPlay loop muted />
      ) : (
        <img className='w-[100%] object-cover' src={props.src} alt='' />
      )}
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-gray-100 text-4xl md:text-5xl lg:text-6xl xl:text-8xl'>{props.text}</h1>
      </div>
    </div>
  )
}

export default Hero
