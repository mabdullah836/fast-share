import React from 'react'
import "../TextArea/style.scss"

const Button = ({name,disabled,onClick }) => {
  return (
    <button  className='save-btn' style={{borderColor : disabled && '#a1a3a1' }} disabled={disabled} onClick={onClick}>{name}</button>
  )
}

export default Button