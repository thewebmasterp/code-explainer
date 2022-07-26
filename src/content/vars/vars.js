import React from 'react'
import P from '../ccomponents/P/P'
import C from '../ccomponents/C/C'

//assign a variable to a value

//links
let _javaScript = "https://en.wikipedia.org/wiki/JavaScript"
let _forLoop = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for"
let _let = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"
let _const = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
let _object = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" 
let _array = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
let _boolean = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"
let _scope = "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
let _data_types = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
let _conditional_statements = "https://www.instagram.com/p/BsWbBxuh94R/"
let _default_parameters = "https://www.instagram.com/p/B3cSajYA5AR/"
let _web_console = "https://developer.mozilla.org/en-US/docs/Tools/Web_Console"
let _freeze = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"
let _iffy = "https://www.instagram.com/p/CAvZbgTABjR/"
let _hoisting = "https://www.instagram.com/p/B6GkQHrgOxj/"
let _tdz = "https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/";
let _typeof = "https://www.instagram.com/p/CPpNfQgj8-u/" 

//TODO: make it so that no matter if user enters href or expl it always renders correctly, just throws an exception in the console.

//local explanations
let js = (<><P href={_javaScript}>JavaScript</P> of course :)</>); 
let execution = (<>To execute code means to run it.</>)
let variable = (<>A variable is used to store information to be referenced and manipulated in a computer program. In <P expl={js}>JS</P> we have two recommended ways of defining variables - <a href={_let}>let</a> and <a href={_const} >const</a></>);
let func = (<>Function is a block of organized, reusable code that is used to perform a single, related action.</>);

let statement = (<>Statements in your code are like sentences in human languages. Statements are formed of expressions.</>)
let expression = (<>Expressions in your code are like words in human languages. Multiple expressions form a <P expl={statement}>statement</P>.</>)
    statement = (<>Statements in your code are what sentences are in human languages. Statements are formed of <P expl={expression}>expressions</P>.</>)

let call = (<>To call a <P expl={func}>function</P> means to tell it to run directly, like <C>func()</C>.</>)
let invoke = (<>To invoke a <P expl={func}>function</P> means to let something else to <P expl={call}>call</P> it. Like <C>const invoker = () => func()</C></>)
    call = (<>To call a <P expl={func}>function</P> means to tell it to run directly, like <C>func()</C>. See <P expl={invoke}>invoke</P></>)

    let parameter = (<>Parameter is a special kind of <P expl={variable}>variable</P> used in <P expl={func}>function</P> declarations to refer to one of the pieces of data provided as input when calling the function.</>)
//let parameter = (<>Parameter is a value that is passed into a <P expl={func}>function</P></>); this is more for argument ;)
let argument = (<>Argument is a value that is passed to a <P expl={func}>function</P> when you call it. It's then accessed in the <P expl={func}>function</P>'s body through <P expl={ parameter }>parameters</P>.</>)
// let inputArr = (<>inputArr is the <P expl={parameter}>parameter</P> of the bubbleSort <P expl={func}>function</P></>);
// let bubbleSort = (<>bubbleSort holds the value of <P expl={func}>function</P> that accepts a <P expl={parameter}>parameter</P> called <P expl={inputArr}>inputArr</P></>);
      // inputArr = (<>inputArr is the <P expl={parameter}>parameter</P> of the <P expl={bubbleSort}>bubbleSort</P> <P expl={func}>function</P></>);
let property = (<>An <a href={_object} >object</a> is a collection of properties, and a property is an association between a name (or key) and a value.</>);
let length = (<>Length <P expl={property}>property</P> on <a href={ _array }>arrays</a> mostly refers to their number of contained elements.</>);
// let len = (<>len is variable holding a reference to the <P expl={length}>length</P> <P expl={property}>property</P> of the <P expl={inputArr}>inputArr</P> <P expl={variable}>variable</P></>);
let motherLoop = (<>The loop surrounding this statement</>);
let boolean = (<>Boolean is one of 6 primitive <P href={  _data_types }>data types</P>. It has either one of two possible values - true or false (positive / negative). <P href={_boolean}>Learn more</P></>)
let string = (<>String is one of 6 primitive <P href={  _data_types }>data types</P>.</>)
let number = (<>Number is one of 6 primitive <P href={  _data_types }>data types</P>.</>)
let nulll = (<>Null is one of 6 primitive <P href={  _data_types }>data types</P>.</>)
let undefinedd = (<>Undefined is one of 6 primitive <P href={  _data_types }>data types</P>.</>)
let symbol = (<>Symbol is one of 6 primitive <P href={  _data_types }>data types</P>.</>)
let constant_variable = (<>A constant <P expl={ variable } >variable</P> is one that cannot change overtime. <P href={_const}>Learn more</P></>)
let scope = (<>Determines the accessibility (visibility) of <P expl={ variable } >variables</P>. We have global and local scopes. <P href={_scope}>Learn more</P>.</>)
let global_scope = (<>Global Scope is the <P expl={scope}>scope</P> that contains, and is visible in, all other scopes.</>)
let local_scope = (<>Local scope is a <P expl={scope}>scope</P> that is not <P expl={global_scope}>global scope</P>. A <P expl={variable}>variable</P> defined in such a <P href={_scope}>scope</P> cannot be accessed from the <P expl={global_scope}>global scope</P>.</>)
    scope = (<>Determines the accessibility (visibility) of <P expl={ variable } >variables</P>. We have <P expl={global_scope}>global</P> and <P expl={local_scope}>local</P> scopes. <P href={_scope}>Learn more</P>.</>)
let if_statement = (<>If statement is one of the <P expl={js}>JS</P> <P href={_conditional_statements}>conditional statements</P>. Syntax looks like <C>{'if (condition) {body}'}</C>, if condition is met, body is executed.</>)
let returnn = (<>The return <P expl={statement}>statement</P> ends <P expl={func}>function</P> <P expl={execution} >execution</P> and specifies a value to be returned to the function caller</>)
let log = (<>Log or print in the <P href={_web_console}>web console</P>.</>)
let freeze = (<>The <C>Object.freeze()</C> method freezes an <P href={_object}>object</P> so that you cannot mutate (change) it in any way. <P href={_freeze}>Learn more</P></>)
let push = (<>The <C>push()</C> method adds one or more elements to the end of an <P href={_array}>array</P> and <P expl={returnn}>returns</P> the new <P expl={length}>length</P> of the <P href={_array}>array</P>.</>)
let hoisting = (<>Hoisting is <P expl={js}>JS</P>'s default behavior of defining all the declarations at the top of the <P expl={scope}>scope</P> before code execution. <P href={_hoisting}>Learn more</P>.</>)
let TDZ = (<>A term used to describe the state where variables are un-reachable. They are in <P expl={scope}>scope</P>, but they aren't declared. <P href={_tdz}>Learn more</P>.</>)

// export default {variable, func, parameter,/* inputArr, */ bubbleSort, property ,length, len, motherLoop}
export default    {variable, func, _array, parameter, property, length, motherLoop, _forLoop, 
                  constant_variable, boolean, string, nulll, number, undefinedd, symbol, global_scope, local_scope, 
                  if_statement, _default_parameters, returnn, statement, expression, execution, argument, log, call, 
                  invoke, freeze, push, _iffy, TDZ, hoisting, _typeof}