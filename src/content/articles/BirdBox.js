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

const article = [
    {
        lines: [
            ["let birdbox = []", true],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            Define a <P expl={vars.variable}>variable</P> <P expl={<>The birdbox <P expl={vars.variable}>variable</P> currently has <C>undefined</C> value</>}>birdbox</P> and and assign it an initial value of empty <a href={ vars._array }>array</a>.
        </Magic>)
    },      {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", true],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            Define a <P expl={vars.constant_variable}>constant variable</P> <P expl={<>The iAmConst <P expl={vars.variable}>variable</P> currently has <C>undefined</C> value</>} >iAmConst</P> and and assign it an initial value of an <a href={ vars._array }>array</a> containing the <P expl={vars.string}>strings</P> <C>'a', 'b', 'c'</C>.
        </Magic>)
    },    {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", true],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            {/*line3*/}<>Push the element on <P expl={vars.atIndex('iAmConst', "'a'")} >index 0 of the iAmConst array</P> to the <P expl={vars.birdbox("'a'")}>birdbox array</P>.</>
        </Magic>)
    },    {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", true],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            At <P expl={vars.atIndex('iAmConst', "'a'")}>index 0 of the iAmConst array</P> assign value of a <P expl={vars.string}>string</P> <C>'z'</C>.
        </Magic>)
    },    {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", true],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            {/*line3*/}<><P expl={vars.push}>Push</P> the element on <P expl={vars.atIndex('iAmConst', "'z'")} >index 0 of the iAmConst array</P> to the <P expl={vars.birdbox("'a'")} >birdbox array</P>.</>
        </Magic>)
    },    {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", true],
            ["‏‏‎‏‏‎ ‎‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            <P expl={vars.freeze}>Freeze</P> the <P expl={vars.iAmConst("'z', 'b', 'c'")}>iAmConst array</P>.
        </Magic>)
    },    {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", true],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            At <P expl={vars.atIndex('iAmConst', "'z'")}>index 0 of the iAmConst array</P> assign value of a <P expl={vars.string}>string</P> <C>'a'</C>.
        </Magic>)
    },    {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", true],
            ["console.log(birdbox)", false],
        ],
        content: (<Magic>
            {/*line3*/}<P expl={vars.push}>Push</P> the element on <P expl={vars.atIndex('iAmConst', "'z'")} >index 0 of the iAmConst array</P> to the <P expl={vars.birdbox("'a', 'z'")}>birdbox array</P>.
        </Magic>)
    },    {
        lines: [
            ["let birdbox = []", false],
            ["const iAmConst = ['a','b','c']", false],
            ["birdbox.push(iAmConst[0])", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'z'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["Object.freeze(iAmConst)", false],
            ["‏‏‎ ‎", false],
            ["iAmConst[0] = 'a'", false],
            ["birdbox.push(iAmConst[0])", false],
            ["console.log(birdbox)", true],
        ],
        content: (<Magic>
            <P expl={vars.log}>Log</P> the value of <P expl={vars.birdbox("'a', 'z', 'z'")}>birdbox</P>.
        </Magic>)
    },
         
]

export default article

