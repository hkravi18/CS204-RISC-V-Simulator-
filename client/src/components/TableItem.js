import { useState, useEffect } from 'react'
import Loading from './Loading';

const TableItem = ({
    it
}) => {
    
    const [register, setRegister] =  useState([]);
    const [registerError, setRegisterError] = useState(null);
    const [loadingRegister, setLoadingRegister] = useState(true);

    useEffect(() => {
        try {
            const compute = async() => {
                const divide =  async() => {
                    const res = await it.split(':');
                    return res;
                } 
                const res = await divide();
                setRegister(res);
            }
            compute();
            setRegisterError(null);
        } catch (err) {
            setRegisterError(err.message);
        } finally {
            setLoadingRegister(false);
        }
        //console.log("register", register);   
    },[it]);
  return (
    <>
    {!registerError && loadingRegister && <Loading />}
    {!registerError && !loadingRegister && 
        <tr>
            <td>{register[0]}</td>
            <td>{register[1]}</td>
        </tr>
    }
    {registerError && !loadingRegister && <p style={{color: "red"}}>
          {`Error : ${registerError}`}
    </p>}
    </>
  )
}

export default TableItem