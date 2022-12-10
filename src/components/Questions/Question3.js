import React from 'react';
import './Questions.css';    
function Question3({ans3,setAns3,setFlag}) {
    let options=['50%','75%','80%','125%'];
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFlag(true);
    }
  return (
    <div className='container'>
        <form>
            <div className="mb-3">
            <label htmlFor="qnA3" className="form-label qnA fs-4 mt-3"> Q3.A shopkeper purchases 15 mangoes for Rs 10 and sells them at 10 mangoes for Rs 15. Thus, he earns profit of </label></div>
            <div className='inputcontainer container'>
                {
                    options.map((option)=>{
                        return(
                            <div className="form-check  mt-4 p-1 fs-5" key={options.indexOf(option)} onChange={(e)=>setAns3(e.target.value)}>
                                {
                                    option===ans3 ?
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
                <button type='submit' className='btn btn-success mt-1 response_btn' onClick={(e)=>handleSubmit(e)}>Submit Response</button>     
            </div>  
        </form>
        
    </div>
  )
}

export default Question3;