import React from 'react'
import './App.scss'
import {Switch, Route} from 'react-router-dom'

import CoeusIntro from './components/CoeusIntro/CoeusIntro'
import ExplanationsList from './components/ExplanationsList/ExplanationsList'
import Explain from './components/Explain/Explain'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="App" id="App_ref">
        <Switch>
          <Route exact path="/">
            <CoeusIntro
              intro={`Hi👋! I am Coeus 🤖. \n I will try to explain you the following codes \n and you can tell me if I am a good teacher 🎓! \n Let's go!`}
            />
            <ExplanationsList />
          </Route>
          <Route path="/:article" component={Explain} />
        </Switch>
      </div>
      <Route exact path="/">
        <Footer />
      </Route>
    </>
  )
}

export default App
