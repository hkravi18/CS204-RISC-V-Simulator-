import React from 'react'
import TableItem from './TableItem'

const RegisterFile = ({
    item
}) => {

  return (
    <table className='register-file'>
      <thead>
        <tr>  
          <th>Register</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {item.map((it, index) => {
            if (index !== 0) {
               return <TableItem key={index} it={it}/>
            }
        })}
      </tbody>
    </table>
  )
}

export default RegisterFile;