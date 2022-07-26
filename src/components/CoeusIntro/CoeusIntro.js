import React from 'react'
import './CoeusIntro.scss'

const CoeusIntro = (props) => {
    return (<div id="CoeusIntro">
        <p id="helloWorld">
            {props.intro}
        </p>
    </div>)
}

export default CoeusIntro