import React from 'react'
import { useState, useEffect } from 'react'
import Loading from './Loading';
import InstOutput from './InstOutput';
import RegisterFile from './RegisterFile';

const ListItem = ({
    text
}) => {

  const [loading, setLoading] = useState(true);
  const [item, setItem] =  useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
        const compute = async() => {
            const divide =  async() => {
                const res = await text.split('%');
                return res;
            } 
            const res = await divide();
            res.pop();
            setItem(res);
        }
        compute();
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }   
  },[text]);

  return (
    <>
        {loading && <Loading />}
        {!loading && 
            <>
            <h2 className='clk'>{item[33]}</h2>
            <div className='row'>
               <div className='column'>
                    <InstOutput 
                        item = {item}
                    />
                </div>
                <div className='column'>
                    <RegisterFile 
                        item = {item}
                    />  
                </div>
            </div>
            </>
        }
        {error && <p style={{color: "red"}}>
          {`Error : ${error}`}
        </p>}
    </>
  )
}

export default ListItem