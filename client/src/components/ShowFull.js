import React, { useEffect, useState } from 'react'
import TableItem from './TableItem';

const ShowFull = ({
    fullData, 
    lastInst
}) => {
   
  const [fullDataRF, setFullDataRF] = useState([]);
  useEffect(() => {
    setFullDataRF(lastInst.split('%'));
  }, []);   

  return (
    <div className='row'>
        <div className='column'>
            <textarea className='output-textarea' value={fullData}></textarea>
        </div>
        <div className='column'>
            <table className='register-file'>
                <thead>
                    <tr>  
                        <th>Register</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {fullDataRF.map((it, index) => {
                        if (index !== 0) {
                            return <TableItem key={index} it={it}/>
                        }
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ShowFull