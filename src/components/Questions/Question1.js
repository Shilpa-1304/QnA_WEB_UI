import React from 'react'
import './Questions.css';    
function Question1({ans1,setAns1}) {
    let options=['Tangent','Chord','Transversal','Intersector'];
    console.log(ans1);
  return (
    <div className='container'>
        <form className=''>
            <div className="mb-3 ">
            <label htmlFor="qnA1" className="form-label qnA fs-4 mt-3"> Q1.  A line which cuts a pair of parllel line.</label></div>
            <div className='inputcontainer  container'>
                {
                    options.map((option)=>{
                        return(
                            <div className="form-check  mt-4 p-1 fs-5" key={options.indexOf(option)} value={option} onChange={(e)=>setAns1(e.target.value)}>
                                {
                                    (option===ans1)?
                                    (<input className="form-check-input" type="radio" checked value={option} name="flexRadioDefault" id="flexRadioDefault1" />)
                                    :(<input className="form-check-input" type="radio" value={option} name="flexRadioDefault" id="flexRadioDefault1" />)
                                }
                                
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    {option}
                                </label>
                                
                            </div>
                        )
                    })
                }
                 
            </div>  
           
        </form>

    </div>
  )
}

export default Question1