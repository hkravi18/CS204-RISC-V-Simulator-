import React from 'react'
import { useState, useEffect } from 'react'
import ListItem from './ListItem';
import ShowFull from './ShowFull';

const Output = ({
    outputData,
    fullData
}) => {
    
    const [text, setText]= useState(outputData[0]);
    const [count, setCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(false);
    const [instComplete, setInstComplete] = useState(false);
    const [runActivate, setRunActivate] = useState(false);

    const handleInc = () => {
        if (count<outputData.length-1) {
            setInstComplete(false);  
            setCount(count+1);
            setText(outputData[count+1]);
            setWrongCount(false);
        } else if (count < outputData.length) {
            setInstComplete(true);  
        } else setWrongCount(true);
    }

    const handleDec = () => {
        if (count>0) {
            setInstComplete(false);  
            setCount(count-1);
            setText(outputData[count-1]);
            setWrongCount(false);
        }    
        else setWrongCount(true);
    }

    const showFullData = () => {
        setRunActivate(true);
    }

    // useEffect(() => {
    //     if (count>=0 && count<outputData.length) setText(outputData[count]); 
    // }, [count]);  

    return (
    <div>
        {!instComplete && wrongCount && <h4 style={{ color : "red", textAlign : "center"}}>
            Oops!, Out of range
        </h4>}
        {instComplete && !wrongCount && <h4 style={{ color : "blue", textAlign : "center"}}>
            Instructions Complete
        </h4>}
        <button onClick={handleInc} className='btn btn-primary Inc_button'>
            Next
        </button>
        <button onClick={handleDec} className='btn btn-primary Dec_button'>
            Previous
        </button>
        { fullData && <button onClick={showFullData} className='btn btn-primary' style={{width:"100px"}}>
            Run
        </button>}
        {!runActivate && <ListItem
            text={text}
        />}
        {runActivate && <ShowFull 
            fullData={fullData}
            lastInst={outputData[outputData.length - 1]}
        />}
        
        {/* <h3>{count}</h3> */}
    </div>
  )
}

export default Output