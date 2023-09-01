import React, { useState } from 'react'
import Tours from './Tour'
import data from './data'
function App() {
  const [tourdata,settourdata]=useState(data);
  if(tourdata.length===0){
   return(
     <div className="refresh">
       <h1>No Tours Left</h1>
       <button onClick={()=>{settourdata(data)}}  className='ref-btn' >Refresh</button>
     </div>
   )
  }
     function removetour(id){
     const newdata= tourdata.filter(tour=> id!==tour.id);
     settourdata(newdata);
     }

  return (
    <div className='app'>
         <h2 className='title'>Tour Planner</h2>
         <Tours tours={tourdata} removetour={removetour} className="tours"></Tours>
    </div>
  )
}

export default App

