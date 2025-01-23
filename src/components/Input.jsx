import React from 'react'

const Input = ({type,placeholder,value,func }) => {

    
  return (
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => {
      func(Number(e.target.value));
    }}
  />
  )
}

export default Input