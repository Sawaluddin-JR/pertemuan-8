/* eslint-disable no-unused-vars */
import React from 'react'
import './card.css'

// eslint-disable-next-line react/prop-types
const Card = ({children}) => {
  return (
    <div className='card'>{children}</div>
  )
}

export default Card