import React from 'react'
import './Questions.css';    
function Question2({ans2,setAns2}) {
    let options=['20%','30%','40%','50%'];
    
  return (
    <div className='container'>
        <form>
            <div className="mb-3">
            <label htmlFor="qnA2" className="form-label qnA fs-4 mt-3"> Q2. If certain sum of money can become five times of its principal in 10 years, then the rate of intrest is?</label></div>
            <div className='inputcontainer container'>
                {
                    options.map((option)=>{
                        return(
                            <div className="form-check  mt-4 p-1 fs-5" key={options.indexOf(option)} onChange={(e)=>setAns2(e.target.value)}>
                                {
                                    option===ans2 ?
                                    (<input className="form-check-input" type="radio" checked value={option} name="flexRadioDefault" id="flexRadioDefault1" />):
                                    (<input className="form-check-input" type="radio" value={option} name="flexRadioDefault" id="flexRadioDefault1" />)
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

export default Question2