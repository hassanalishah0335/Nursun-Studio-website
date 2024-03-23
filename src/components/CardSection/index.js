import React from 'react'
import Card from '../card'
import { myCards } from './data'


const CardSection = () => {
  return (
    <div className='bg-blue-50 grid lg:grid-cols-3 sm:grid-cols-2 pl-[10%] pr-[3%]'>
      
      {
        myCards.map(item =>{
          return(
            <Card 
              src = {item.src}
              title = {item.title}
              text= {item.text} 
            />
          )
        })
      }

    </div>
  )
}

export default CardSection
