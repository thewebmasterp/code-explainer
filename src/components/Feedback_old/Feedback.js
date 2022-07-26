import React from 'react'
import './Feedback.scss'
import CoeusIntro from '../CoeusIntro/CoeusIntro'

const Feedback = () => {
    const homePageVisited = window.localStorage.getItem('homePageVisited');
    console.log(homePageVisited)
    const greeting1 = 'Coeus is back! Now, please tell me if I am an idea worth webmaster_project\'s time!!!'
    const greeting2 = 'Yoo, man! Fill this up.'
    const greeting = homePageVisited ? greeting1 : greeting2
    return (<div id="Feedback">
                <CoeusIntro intro={greeting} />
                <div id="FormWrapper">
                    <div id="Form">
                    </div>
                </div>        
        </div>)
}

export default Feedback