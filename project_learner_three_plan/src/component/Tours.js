import React from 'react'
import Card from './Card'
const Tours = ({tours , removeTours}) => {
  return (
    <div>
        <h2 className=''>Plan with Love</h2>
        <div>
            {tours.map((tour) =>{
                // ...tour passes a copy of tour object to the card component as prop
                return <Card {...tour} removeTours={removeTours} />
            })}
        </div>
    </div>
  )
}

export default Tours