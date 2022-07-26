import React from 'react'
import './C.scss'
import reactStringReplace from 'react-string-replace'

const words_to_bold = ['body', 'condition']

const C = (props) => {

    if (!props.children) return <span>ERR_from_C</span>

    let children = props.children

    words_to_bold.forEach(word => {
        //old not working in practice
        // children = children.replace(word, (w) => {
        //     return <strong>${w}</strong>
        // })

        //new
        children = reactStringReplace(children, word, (match, i) => {
            return (<strong key={`${match}-${i}-${Math.random()}`} >{match}</strong>)
        } )
    })

    return (<span className="C">{children}</span>)
}

export default C