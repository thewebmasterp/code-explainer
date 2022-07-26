import React from 'react'
import './Button.scss'
import {Link} from 'react-router-dom'

const Button = props => {
  const btn = (
    <button
      id={props.id}
      className={`Button ${props.className || ''}`}
      onClick={props.click}
    >
      {props.children}
    </button>
  )

  return props.to ? (
    <Link style={{textDecoration: 'none'}} to={props.to}>
      {btn}
    </Link>
  ) : (
    btn
  )
}

export default Button
