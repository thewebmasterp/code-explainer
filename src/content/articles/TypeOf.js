import React from 'react'

import Magic from '../ccomponents/Magic/Magic'
import P from '../ccomponents/P/P'
import C from '../ccomponents/C/C'
import * as varss from '../vars/vars'
const vars = varss.default


// let birdbox = []
// const iAmConst = ['a','b','c']
// birdbox.push(iAmConst[0])

// iAmConst[0] = 'z'
// birdbox.push(iAmConst[0])
// Object.freeze(iAmConst)

// iAmConst[0] = 'a'
// birdbox.push(iAmConst[0])
// console.log(birdbox)

// vars.birdbox = 
vars.index0 = (<>The first element of the <P expl={vars._array}>array</P></>)



vars.birdbox = (val) => {
    return (<>Birdbox is an <P href={vars._array}>array</P> currently holding the elements <C>{val}</C></>)
}

vars.iAmConst = (val) => {
    return (<>iAmConst is an <P href={vars._array}>array</P> currently holding the elements <C>{val}</C></>)
}

vars.atIndex = (arrayName, value) => {
    return (<><P expl={vars.index0}>Index 0</P> of the {arrayName} <P expl={vars._array}>array</P> holds value <C>{value}</C></>)
}

// const line3 = (<>Push the element on <P expl={vars.index0} >index 0</P> of the iAmConst array to the birdbox array.</>)

//<P expl={vars.array}>

vars.num = (<>A variable holding value <C>5</C></>)
vars.typeofnum = (<><P href={vars._typeof}>typeof</P> <P expl={vars.num}>num</P> is equal to <C>"number"</C></>)
vars.numtype = (<><C>numtype</C> is a <P expl={vars.variable}>variable</P> holding <P expl={vars.typeofnum}>typeof num</P></>)

//typeof numtype
vars.typeofnumtype = (<><P href={vars._typeof}>typeof</P> <P expl={vars.numtype}>numtype</P> is equal to <C>"string"</C></>)
vars.metatype = (<><C>metatype</C> is a <P expl={vars.variable}>variable</P> holding <P expl={vars.typeofnumtype}>typeof numtype</P></>)

const article = [
    {
        lines: [
            ['let num = 5', true],
            ['let numtype = typeof num', false],
            ['let metatype = typeof numtype', false],
            [' ', false],
            ['console.log(metatype)', false],
        ],
        content: (<Magic>
            Initialize a <P expl={vars.variable}>variable</P> <P expl={vars.num}>num</P> with value of <C>5</C>
        </Magic>)
    },    {
        lines: [
            ['let num = 5', false],
            ['let numtype = typeof num', true],
            ['let metatype = typeof numtype', false],
            [' ', false],
            ['console.log(metatype)', false],
        ],
        content: (<Magic>
            
            {/* Get the <P expl={vars.typeofnum}>typeof num</P> and assign it the newly initialized <C expl={vars.numtype}>numtype</C> <P expl={vars.variable}>variable</P>. */}
            Initialize a new <P expl={vars.variable}>variable</P> <P expl={vars.numtype}>numtype</P> and assign it to <P expl={vars.typeofnum}>typeof num</P>.
        </Magic>)
    },    {
        lines: [
            ['let num = 5', false],
            ['let numtype = typeof num', false],
            ['let metatype = typeof numtype', true],
            [' ', false],
            ['console.log(metatype)', false],
        ],
        content: (<Magic>
            {/* Get the <P expl={vars.typeofnumtype}>typeof numtype</P> and assign it to the newly initialized <P expl={vars.metatype}>metatype</P> <P expl={vars.variable}>variable</P>. */}
            Initialize a new <P expl={vars.variable}>variable</P> <P expl={vars.metatype}>metatype</P> and assign it to <P expl={vars.typeofnumtype}>typeof numtype</P>.
        </Magic>)
    },    {
        lines: [
            ['let num = 5', false],
            ['let numtype = typeof num', false],
            ['let metatype = typeof numtype', false],
            [' ', false],
            ['console.log(metatype)', true],
        ],
        content: (<Magic>
            <P expl={vars.log}>Log</P> the value of the <P expl={vars.metatype}>metatype</P> <P expl={vars.variable}>variable</P>.
        </Magic>)
    },    
         
]

export default article

