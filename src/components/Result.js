import React from 'react'
import correct from './Media/check-correct.gif';
function Result({correctAns}) {
    
    const score=parseFloat((correctAns*100)/3);

    return (
         <div className='container border border-primary'>
            <div className='my-2 fs-5'><img src={correct} alt='Load error'></img></div>
            <div className='fs-1 my-4'>You have successfully submitted the Assessment.</div>
            <div className=' fs-3 my-2'><span> -Question Asked: </span>3</div>
            <div className=' fs-3 my-2'><span> -Question Correct: </span>{correctAns}</div>
            <div className=' fs-3 my-2'><span> -Your Score: </span>{score}</div>
         </div>
  )
}

export default Result