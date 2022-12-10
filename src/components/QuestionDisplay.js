import React,{useState,useEffect} from 'react'
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Timer from './Timer';
import './QuestionDisplay.css';
import qmark from './Media/question-mark.gif';
function QuestionDisplay({ans1,setAns1,ans2,setAns2,ans3,setAns3,setFlag,time,setTime}) {
  const [question,setQuestion]=useState(1);
  
  
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  
    return () => {
      clearInterval(interval);
    }
  }, )
  
  const handlePage=(action)=>{
    
    if(action==='increment') {
      if(question!==3){
        let val =question+1;
        setQuestion(val);
      }
    }
    else{
      if(question!==1){
        let val =question-1;
        setQuestion(val);
      }
    }
  }
  
  return (
    
    <div className='container  border border-success justify-content-between mx-3 my-2' >
        <div className='my-2 fs-5'><img src={qmark} alt='Load error'></img></div>
        <h4 className='fs-2 mt-2 heading text-primary'>Attempt Question Here</h4>
        <div className='fs-5 mt-2 heading d-flex flex-row bd-highlight justify-content-between'>
        <p>Page: {question}/3</p>
        <div>Time: <Timer time={time} /> </div>
        </div>
        <div className='d-flex flex-row bd-highlight justify-content-between'>
        {
          question===1 ?( <>
            <button type='submit' className='btn btn-danger' disabled onClick={()=>{handlePage('decrement')}}>Back</button>
            <button type='submit' className='btn btn-danger'   onClick={()=>{handlePage('increment')}}>Next</button>
              </>) : question===3 ?( <>
        <button type='submit' className='btn btn-danger'  onClick={()=>{handlePage('decrement')}}>Back</button>
        <button type='submit' className='btn btn-danger' disabled  onClick={()=>{handlePage('increment')}}>Next</button>
          </>) :( <>
        <button type='submit' className='btn btn-danger'  onClick={()=>{handlePage('decrement')}}>Back</button>
        <button type='submit' className='btn btn-danger'  onClick={()=>{handlePage('increment')}}>Next</button>
          </>)
        }  
        
        

        </div>
        <div className=' qContainer'>
        {
          question===1 ? <Question1 ans1={ans1} setAns1={setAns1}/> : question===2 ? <Question2 ans2={ans2} setAns2={setAns2}/> :<Question3 ans3={ans3} setAns3={setAns3} setFlag={setFlag}/>
        }
        </div>      
    </div>

  )
}

export default QuestionDisplay