import React from 'react'
import Card from './Card'

function Tours({tours,removetour}) {
   
  return (
    <div className='tour-com'>
        {
        tours.map((tour)=>{
         return <Card {...tour} key={tour.id} removetour={removetour} className="card"></Card>
        })
      }
    </div>
  )
}

export default Tours
