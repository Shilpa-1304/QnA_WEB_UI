import React, { useState,useEffect } from 'react';
import ResponseDisplay from './ResponseDisplay';
import QuestionDisplay from './QuestionDisplay';
import Result from './Result';
function LandingPage() {
    const[ans1,setAns1]=useState('');
    const[ans2,setAns2]=useState('');
    const[ans3,setAns3]=useState('');
    const[data,setData]=useState([ans1,ans2,ans3]);
    const[flag,setFlag]=useState(false);
    const [time,setTime]=useState(0);
    let val=[...data];
    
    let total=0;
    const answers=['Transversal','20%','125%'];
    const evaluateScore=()=>{
        
          for(let x=0;x<3;x++){
            if(answers[x]===val[x]){
            total+=1;
          }
        }
    }
    evaluateScore();
    
    useEffect(() => {
      setData([ans1,ans2,ans3]);
    }, [ans1,ans2,ans3])
     
  return (
    <div className='container main_container d-sm-flex flex-row '>
        
        {flag===true ?<Result correctAns={total}/>:<>
        <QuestionDisplay ans1={ans1} setAns1={setAns1} ans2={ans2} setAns2={setAns2} ans3={ans3} setAns3={setAns3} setFlag={setFlag} time={time} setTime={setTime}/>
        <ResponseDisplay data={data}  />
        </>}
    </div>
  )
}

export default LandingPage