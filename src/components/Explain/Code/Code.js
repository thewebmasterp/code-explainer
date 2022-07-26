import React from 'react'
import './Code.scss'
import Row from './Row/Row.js'

const Code = props => {
  const rowClickHandler = i => {
    props.want(+i.split('-')[1])
  }

  return (
    <div id="Wrap123">
      <div id="rownum">
        {props.lines.map((line, i) => (
          <Row
            onClick={rowClickHandler}
            row={false}
            id={`num-${i}`}
            key={i}
            active={line[1]}
          >
            {i}
          </Row>
        ))}
      </div>
      <div id="Code">
        {props.lines.map((line, i) => (
          <Row
            onClick={rowClickHandler}
            row={true}
            id={`code-${i}`}
            key={i}
            active={line[1]}
          >
            {line[0]}
          </Row>
        ))}
      </div>
    </div>
  )
}

export default Code
