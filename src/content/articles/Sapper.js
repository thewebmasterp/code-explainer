import React from 'react'

import Magic from '../ccomponents/Magic/Magic'
import P from '../ccomponents/P/P'
import C from '../ccomponents/C/C'
import * as varss from '../vars/vars'
const vars = varss.default

vars.cable = (<><C>cable</C> is the <P expl={vars.parameter}>parameter</P> of the sapper <P expl={vars.func}>function</P></>);
vars.sapper = (<><C>sapper</C> is a <P expl={vars.func}>function</P> defined in the <P expl={vars.global_scope}>global scope</P>. It expects a <P expl={vars.parameter}>parameter</P> <P expl={vars.cable}>cable</P> with <P href={vars._default_parameters}>default value</P> of <C>1</C></>);
vars.cable = (<><C>cable</C> is the <P expl={vars.parameter}>parameter</P> of the <P expl={vars.sapper}>sapper</P> <P expl={vars.func}>function</P></>);
vars.burst = (<>A <P expl={vars.variable}>variable</P> that holds the value of <C>false</C>, in the current situation.</>)


const article = [
    {
        lines: [
            ['const sapper = (cable = 1) => {', true],
            ['  const burst = false', true],
            ['  if (cable) {', true],
            ['    const burst = true', true],         
            ['  }', true],
            ['  return burst', true],
            ['}', true],
            ['console.log(sapper())', false],
        ],
        content: (<Magic>
            This is a <P expl={vars.func}>function</P> called sappedr, defined in the <P expl={vars.global_scope}>global scope</P>. It expects a <P expl={vars.parameter}>parameter</P> <P expl={vars.cable}>cable</P> with <P href={vars._default_parameters}>default value</P> of <C>1</C>.
        </Magic>)

    },  {
        lines: [
            ['const sapper = (cable = 1) => {', false],
            ['  const burst = false', true],
            ['  if (cable) {', false],
            ['    const burst = true', false],
            ['  }', false],
            ['  return burst', false],
            ['}', false],
            ['console.log(sapper())', false],
            
        ],
        content: (<Magic>
            Inside <P expl={ vars.sapper }>sapper</P>'s <P expl={ vars.local_scope } >local scope</P>, we define a <P expl={ vars.constant_variable }>constant variable</P> <C>burst</C> that holds the <P expl={vars.boolean}>boolean</P> value of <C>false</C>.
        </Magic>)

    },  {
        lines: [
            ['const sapper = (cable = 1) => {', false],
            ['  const burst = false', false],
            ['  if (cable) {', true],
            ['    const burst = true', true],
            ['  }', true],
            ['  return burst', false],
            ['}', false],
            ['console.log(sapper())', false],
            
        ],
        content: (<Magic>
            {/* Then, we check if the variable cable has truthful value. If it has, in the  */}
            Then we have an <P expl={vars.if_statement}>if statement</P> that defines a new <P expl={vars.local_scope}>local scope</P> if the condition is met.
        </Magic>)

    },  {
        lines: [
            ['const sapper = (cable = 1) => {', false],
            ['  const burst = false', false],
            ['  if (cable) {', false],
            ['    const burst = true', true],
            ['  }', false],
            ['  return burst', false],
            ['}', false],
            ['console.log(sapper())', false],
            
        ],
        content: (<Magic>
            In the established <P expl={vars.local_scope}>local scope</P>, initialize a new constant variable <C>burst</C> with the <P expl={vars.boolean}>boolean</P> value of <C>true</C>.
        </Magic>)

    },{
        lines: [
            ['const sapper = (cable = 1) => {', false],
            ['  const burst = false', false],
            ['  if (cable) {', false],
            ['    const burst = true', false],
            ['  }', false],
            ['  return burst', true],
            ['}', false],
            ['console.log(sapper())', false],
            
        ],
        content: (<Magic>
            Then, back in the <P expl={ vars.sapper }>sapper</P>'s <P expl={vars.local_scope}>local scope</P> <P expl={vars.returnn}>return</P> the value of the <P expl={vars.burst}>burst variable</P>, defined in the same scope. 
        </Magic>)

    },  {
        lines: [
            ['const sapper = (cable = 1) => {', false],
            ['  const burst = false', false],
            ['  if (cable) {', false],
            ['    const burst = true', false],
            ['  }', false],
            ['  return burst', false],
            ['}', false],
            ['console.log(sapper())', true],
            
        ],
        content: (<Magic>
            Then, back in the <P expl={vars.global_scope}>global scope</P>, <P expl={vars.log}>log</P> the value <P expl={vars.returnn} >returned</P> from <P expl={ vars.call }>calling</P> <P expl={vars.sapper}>sapper</P> <P expl={vars.func}>function</P> with no <P expl={vars.argument}> argumets</P>.
            {/* In global scope, call the method log of the console object, passing it the value returned from calling the sapper function with no parameters. Boolean false is printed to the console. */}
        </Magic>)

    },
         
]

export default article

