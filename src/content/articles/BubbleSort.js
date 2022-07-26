import React from 'react'

import Magic from '../ccomponents/Magic/Magic'
import P from '../ccomponents/P/P'
import * as varss from '../vars/vars'
const vars = varss.default


vars.inputArr = (<>inputArr is the <P expl={vars.parameter}>parameter</P> of the bubbleSort <P expl={vars.func}>function</P></>);
vars.bubbleSort = (<>bubbleSort holds the value of <P expl={vars.func}>function</P> that accepts a <P expl={vars.parameter}>parameter</P> called <P expl={vars.inputArr}>inputArr</P></>);
vars.inputArr = (<>inputArr is the <P expl={vars.parameter}>parameter</P> of the <P expl={vars.bubbleSort}>bubbleSort</P> <P expl={vars.func}>function</P></>);
vars.len = (<>len is variable holding a reference to the <P expl={vars.length}>length</P> <P expl={vars.property}>property</P> of the <P expl={vars.inputArr}>inputArr</P> <P expl={vars.variable}>variable</P></>);


const article = [
    {
        lines: [
            ['const bubbleSort = (inputArr) => {', true],
            ['  let len = inputArr.length;', true],
            ['  for (let i = 0; i < len; i++) {', true],
            ['      for (let j = 0; j < len; j++) {', true],
            ['          if (inputArr[j] > inputArr[j + 1]) {', true],
            ['              let tmp = inputArr[j];', true],
            ['              inputArr[j] = inputArr[j + 1];', true],
            ['              inputArr[j + 1] = tmp;', true],
            ['          }', true],
            ['      }', true],
            ['  }', true],
            ['  return inputArr;', true],
            ['};', true],
        ],
        content: (<Magic>
            This is a <P expl={vars.variable}>variable</P> <P expl={vars.bubbleSort}>bubbleSort</P> holding the value of <P expl={vars.func}>function</P> that accepts a <P expl={vars.parameter}>parameter</P> called <P expl={vars.inputArr}>inputArr</P>.
        </Magic>)

    }, {
        lines: [
            ['const bubbleSort = (inputArr) => {', false],
            ['  let len = inputArr.length;', true],
            ['  for (let i = 0; i < len; i++) {', false],
            ['      for (let j = 0; j < len; j++) {', false],
            ['          if (inputArr[j] > inputArr[j + 1]) {', false],
            ['              let tmp = inputArr[j];', false],
            ['              inputArr[j] = inputArr[j + 1];', false],
            ['              inputArr[j + 1] = tmp;', false],
            ['          }', false],
            ['      }', false],
            ['  }', false],
            ['  return inputArr;', false],
            ['};', false],
        ],
        content: (<Magic>
            Inside is defined a <P expl={vars.variable}>variable</P> called <P expl={vars.len}>len</P> with a value referring to the <P expl={vars.length}>length</P> <P expl={vars.property}>property</P> of the <P expl={vars.inputArr}>inputArr</P> <P expl={vars.variable}>variable</P>.            
        </Magic>)

    }, {
        lines: [
            ['const bubbleSort = (inputArr) => {', false],
            ['  let len = inputArr.length;', false],
            ['  for (let i = 0; i < len; i++) {', true],
            ['      for (let j = 0; j < len; j++) {', true],
            ['          if (inputArr[j] > inputArr[j + 1]) {', true],
            ['              let tmp = inputArr[j];', true],
            ['              inputArr[j] = inputArr[j + 1];', true],
            ['              inputArr[j + 1] = tmp;', true],
            ['          }', true],
            ['      }', true],
            ['  }', true],
            ['  return inputArr;', false],
            ['};', false],
        ],
        content: (<Magic>
            Then you can see a <P href={vars._forLoop}>for loop</P> that iterates <P expl={vars.len}>len</P> times and on each iteration increments the counter i with 1.
        </Magic>)
    }, {
        lines: [
            ['const bubbleSort = (inputArr) => {', false],
            ['  let len = inputArr.length;', false],
            ['  for (let i = 0; i < len; i++) {', false],
            ['      for (let j = 0; j < len; j++) {', true],
            ['          if (inputArr[j] > inputArr[j + 1]) {', true],
            ['              let tmp = inputArr[j];', true],
            ['              inputArr[j] = inputArr[j + 1];', true],
            ['              inputArr[j + 1] = tmp;', true],
            ['          }', true],
            ['      }', true],
            ['  }', false],
            ['  return inputArr;', false],
            ['};', false],
        ],
        content: (<Magic>
            For each iteration of <P expl={vars.motherLoop}>the mother loop</P> run this <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">for loop</a>. It iterates <P expl={vars.len}>len</P> times and on each iteration increments the counter j with 1.
        </Magic>)
    }, {
        lines: [
            ['const bubbleSort = (inputArr) => {', false],
            ['  let len = inputArr.length;', false],
            ['  for (let i = 0; i < len; i++) {', false],
            ['      for (let j = 0; j < len; j++) {', false],
            ['          if (inputArr[j] > inputArr[j + 1]) {', true],
            ['              let tmp = inputArr[j];', true],
            ['              inputArr[j] = inputArr[j + 1];', true],
            ['              inputArr[j + 1] = tmp;', true],
            ['          }', true],
            ['      }', false],
            ['  }', false],
            ['  return inputArr;', false],
            ['};', false],
        ],
        content: (<Magic>
            For each iteration of <P expl={vars.motherLoop}>the mother loop</P>, run this <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if statement</a>. It checks if the element of <P expl={vars.inputArr}>inputArr</P> on index i has greater value
            than the element on the next index of the <P expl={vars.inputArr}>same array</P> and if so, perform the following action ➡️
        </Magic>)
    }, {
        lines: [
            ['const bubbleSort = (inputArr) => {', false],
            ['  let len = inputArr.length;', false],
            ['  for (let i = 0; i < len; i++) {', false],
            ['      for (let j = 0; j < len; j++) {', false],
            ['          if (inputArr[j] > inputArr[j + 1]) {', false],
            ['              let tmp = inputArr[j];', true],
            ['              inputArr[j] = inputArr[j + 1];', true],
            ['              inputArr[j + 1] = tmp;', true],
            ['          }', false],
            ['      }', false],
            ['  }', false],
            ['  return inputArr;', false],
            ['};', false],
        ],
        content: (<Magic>
            Swap the value of index i of <P expl={vars.inputArr}>InputArr</P> with the value of the
            next index of the <P expl={vars.inputArr}>same array</P>.
        </Magic>)
    }, {
        lines: [
            ['const bubbleSort = (inputArr) => {', false],
            ['  let len = inputArr.length;', false],
            ['  for (let i = 0; i < len; i++) {', false],
            ['      for (let j = 0; j < len; j++) {', false],
            ['          if (inputArr[j] > inputArr[j + 1]) {', false],
            ['              let tmp = inputArr[j];', false],
            ['              inputArr[j] = inputArr[j + 1];', false],
            ['              inputArr[j + 1] = tmp;', false],
            ['          }', false],
            ['      }', false],
            ['  }', false],
            ['  return inputArr;', true],
            ['};', false],
        ],
        content: (<Magic>
            Return the value of <P expl={vars.inputArr}>inputArr</P> <P expl={vars.variable}>variable</P> and exit the <P expl={vars.bubbleSort}>bubbleSort</P> <P expl={vars.func}>function</P>.
        </Magic>)
    }, 
]

export default article

