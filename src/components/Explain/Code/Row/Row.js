import React from 'react'
import './Row.scss'

const Row = props => {
  let syntax = props.children

  const onClickHandler = () => {
    props.onClick(props.id)
  }

  return (
    <div
      // style={{backgroundColor: `${props.active ? (props.row ? 'orange' : 'crimson') : (props.row ? 'gray' : 'gainsboro') }` }}
      className={`Row code ${props.active ? 'active' : 'inactive'} ${
        props.row ? 'content' : 'num'
      }`}
      id={props.id}
      onClick={onClickHandler}
    >
      {syntax}
    </div>
  )
}

export default Row
