import React from 'react'
import { useState } from 'react'

const Input = ({
    data, setData, handleSubmit,
    handlebtb, handledf
}) => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
        <div className="row">
            <div className="col-lg-4 div1" >
              <textarea name="input1" className="form-control" rows="3" placeholder="Write the machine code here" onChange={(e) => {
                setInputText(e.target.value);
                setData(e.target.value);
              }} value={inputText}></textarea>
            </div>
            <div className='col-lg-4 div2'>
              <button type="submit" className="btn btn-primary scs-btn" name="singleCycle" onClick={(e) => handleSubmit(e.target.name)}>Single Cycle RUN</button>
              <button type="submit" className="btn btn-primary ps-btn" name="pipeline" onClick={(e) => handleSubmit(e.target.name)}>Pipeline RUN</button>
              <button type="reset" className="btn btn-primary reset-btn" name="reset" onClick={() => setInputText("")}>Reset</button>
            </div>  
            <div className="col-lg-4 div1 form-check form-switch" >
              <input type="checkbox" id="btb" className='form-check-input' name="btb" onClick={handlebtb}/> 
              <label for="btb" className='form-check-label btb-label'>Branch target buffer</label>
              <input type="checkbox" id="df" className='form-check-input' name="df" onClick={handledf}/> 
              <label for="df" className='form-check-label df-label'>Data Forwarding</label>
            </div>
        </div>
    </div>
  )
}

export default Input
