import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'
const Quiz = (props) => {
    let userinfo=JSON.stringify(props.user);
    let userdata=JSON.parse(userinfo);
    let [index, setindex] = useState(0);
    const [question, setquestion] = useState(data[index]);
    const [lock, setlock] = useState(false);
    const [score, setscore] = useState(0);
    const [result, setresult] = useState(false);
    let option1=useRef(null);
    let option2=useRef(null);
    let option3=useRef(null);
    let option4=useRef(null);
    let optionArray=[option1,option2,option3,option4];
    const checkans=(e,ans)=>{
        if(lock === false){
            if(question.ans===ans){
                e.target.classList.add("correct");
                setlock(true);
                setscore(prev=>prev+1);
            }
            else{
                e.target.classList.add("wrong");
                setlock(true);
                optionArray[question.ans-1].current.classList.add("correct");
            }
        }
    }
    const next=()=>{
        if(index === data.length-1){
            setresult(true);
            return 0;
        }
        if(lock==true){
            setindex(++index);
            setquestion(data[index]);
            setlock(false);
            optionArray.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }

    }
    const reset=()=>{
        setindex(0);
        setquestion(data[0]);
        setlock(false);
        setscore(0);
        setresult(false);
    }

  return (
    <>

    <div className="container">
        <h1>Quiz App</h1>
        <hr />
        {(result)?<>
        <h3>You Scored {score} out of {data.length}</h3>
        <button type="button" onClick={reset}>Reset</button>
        </>:<>
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li  ref={option1}  onClick={(e)=>{checkans(e,1)}}>{question.option1}</li>
            <li  ref={option2} onClick={(e)=>{checkans(e,2)}}>{question.option2}</li>
            <li  ref={option3} onClick={(e)=>{checkans(e,3)}}>{question.option3}</li>
            <li  ref={option4} onClick={(e)=>{checkans(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next} type="button">Next</button>
        <div className="score">{index+1} of {data.length} Questions</div>
        </>}
        
    </div>
    </>
  )
}

export default Quiz