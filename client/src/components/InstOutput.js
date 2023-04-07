import React from 'react'

const InstOutput = ({
    item
}) => {
  return (
    <textarea className='output-textarea' value={item[0]}>
    </textarea>
  )
}

export default InstOutput