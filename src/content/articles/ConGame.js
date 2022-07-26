import React from 'react'

import Magic from '../ccomponents/Magic/Magic'
import P from '../ccomponents/P/P'
import C from '../ccomponents/C/C'
import * as varss from '../vars/vars'
const vars = varss.default

// (() => {

//     //1
//     console.log( playerVAR )

//     //2
//     console.log( playerLET )

//     var playerVAR = 111
//     let playerLET = 482
// })()

//define vs declare

vars.err = (
  <C>
    Uncaught ReferenceError: Cannot access 'playerLET' before initialization
  </C>
)

const article = [
  {
    lines: [
      ['(() => {', true],
      ['  //1', true],
      ['  console.log( playerVAR )‏‎', true],
      ['  ', true],
      ['  //2', true],
      ['  console.log( playerLET )', true],
      ['‎‎  ', true],
      ['  var playerVAR = 111', true],
      ['  let playerLET = 482', true],
      ['})()', true],
    ],
    content: (
      <Magic>
        This is called IIFE (Immediately Invoked Function Expression). It is
        simply a <P expl={vars.func}>function</P> that runs as soon as it is
        defined. <P href={vars._iffy}>Learn more</P>.
      </Magic>
    ),
  },
  {
    lines: [
      ['(() => {', false],
      ['  //1', false],
      ['  console.log( playerVAR )‏‎', true],
      ['  ', false],
      ['  //2', false],
      ['  console.log( playerLET )', false],
      ['‎‎  ', false],
      ['  var playerVAR = 111', true],
      ['  let playerLET = 482', false],
      ['})()', false],
    ],
    content: (
      <Magic>
        The playerVAR <P expl={vars.variable}>variable</P> is{' '}
        <P expl={vars.hoisting}>hoisted</P> to the top. That's why, when we{' '}
        <P expl={vars.log}>log</P> it, (under <C>//1</C> ) we get a value of{' '}
        <C>undefined</C>.
      </Magic>
    ),
  },
  {
    lines: [
      ['(() => {', false],
      ['  //1', false],
      ['  console.log( playerVAR )‏‎', false],
      ['  ', false],
      ['  //2', false],
      ['  console.log( playerLET )', true],
      ['‎‎  ', false],
      ['  var playerVAR = 111', false],
      ['  let playerLET = 482', true],
      ['})()', false],
    ],
    content: (
      <Magic>
        The playerLET is <P expl={vars.hoisting}>hoisted</P> to the top as well
        but it is in the <P expl={vars.TDZ}>temporal dead zone</P>. That's why
        when we try <P expl={vars.log}>logging</P> it, we get an{' '}
        <P expl={vars.err}>error</P>.
      </Magic>
    ),
  },
]

export default article
