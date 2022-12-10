import React from 'react'
import './ResponseDisplay.css';
import Review from './Media/review.png';
import './Media/Media.css'
function ResponseDisplay(data) {
  
  let index=0;
  let val=[...data.data];
  
  return (
    <div className='container border border-primary  mx-3 my-2 responseBox'>
      <div className='my-2 fs-5'><img className='responseImg' src={Review} alt='Load error'></img></div>
      <h4 className='mt-4 res_box_heading text-primary'> Review Answer Here</h4>
      {
        val.map((ele)=>{
          return(
            <div className='fs-4 mt-5 ' key={index++}>{ele}</div>
            
          );
        })
      } 
      
    </div>
  )
}

export default ResponseDisplay;