import React, { useState } from 'react'

function Card({id,image,info,price,name,removetour,className}) {
  const [readmore,setreadmore]=useState(false);
  const description=readmore?info:info.substring(0,200)+`...`;
  
  function readhaldel(){
    setreadmore(!readmore);
  }

 

  return (
    <div className={className}>
         <img src={image} alt="" className="image" />
         <div className="tour-info">

         <div className="tourdetail">
          <h4 className='price'>₹ {price}</h4>
          <h3 className='tourcity'>{name}</h3>
         </div>
         <div className="description">{description}
         <span className="read" onClick={readhaldel} >{readmore?`Read Less`:`Read More`}</span>
         </div>
         </div>
         <button className='botton' onClick={()=>removetour(id)}>No Interested</button>
    </div>
  )
}

export default Card
