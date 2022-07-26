import React from 'react'
import Code from './Code/Code'
import {useState, useEffect, useRef} from 'react'
import './Explain.scss'
import $ from 'jquery'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import Card from './Card/Card'

import Feedback from '../Feedback/Feedback'

let oldScrollPos = 0

const Btn = props => {
  return (
    <div
      className={`Btn ${props.className || ''}`}
      onClick={props.click}
      data-enabled={props.enabled}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

const Explain = props => {
  //match from the parameter in the url (look at App.js - react router passes this value)
  const articleName = props.match.params.article
  const article = require(`../../content/articles/${articleName}.js`).default

  const wanted = n => {
    const figureWhichExplanationOut = () => {
      for (let i = article.length - 1; i >= 0; i--) {
        let currLines = article[i].lines
        for (let j = 0; j < currLines.length; j++) {
          let line = currLines[j]
          if (line[1] && j === n) {
            //currLines
            return i
          }
        }
      }
      return null
    }

    move(null, figureWhichExplanationOut())
  }

  // console.log(article)

  const [lines, chlines] = useState(article[0].lines)
  const [expl, chexpl] = useState(0)

  const FeedbackRef = useRef(null)

  useEffect(() => {
    const last = {...article[article.length - 1]}
    last.content = <Feedback innerRef={FeedbackRef} style={{}} />
    article.push(last)
  }, [])

  const move = (ahead, to) => {
    //super dirty function. Tried refactoring, quit. Decided to go to the other extreme - make it even dirtier!
    if (ahead !== null) {
      if (
        (ahead && $('.Btn.right')[0].dataset.enabled === 'false') ||
        (!ahead && $('.Btn.left')[0].dataset.enabled === 'false')
      ) {
        console.log('rejected!')
        return
      }

      const step = $('.Card').width() //$(window).width()//-$('#Expl .Btn').width()*2
      const current = step * expl //$('#Window').scrollLeft()
      const doit = ahead ? (n, step = 1) => n + step : (n, step = 1) => n - step

      let currScrollPos = $('#Window')
        .scrollLeft(doit(current, step))
        .scrollLeft()
      if (currScrollPos !== oldScrollPos) {
        chexpl(curr => {
          const ans = doit(curr)
          if (article[ans]?.lines) {
            chlines(article[ans].lines)
          }
          return ans
        })
      }

      oldScrollPos = currScrollPos

      const feedbackPageEl = FeedbackRef.current
      const curr1 = doit(expl)
      const edge = article.length - 2

      if (
        curr1 === edge + 1 ||
        curr1 === edge + 2 ||
        (curr1 === edge + 3 && feedbackPageEl)
      ) {
        feedbackPageEl.style.display = 'flex'

        $('#App_ref')[0].scrollTop = $('#App_ref')[0].scrollHeight

        //disable moving right
        $('.Btn.right')[0].dataset.enabled = 'false'
        $('html, #root').css({overflowY: 'none !important'})
      } else if (feedbackPageEl) {
        feedbackPageEl.style.display = 'none'
        $('.Btn.right')[0].dataset.enabled = 'true'
        $('html, #root').css({overflowY: 'auto !important'})
      }

      if (curr1 === 0 || curr1 === -1) {
        $('.Btn.left')[0].dataset.enabled = 'false'
      } else {
        $('.Btn.left')[0].dataset.enabled = 'true'
      }
    } else if (to || to === 0) {
      const step = $('.Card').width()
      let currScrollPos = $('#Window')
        .scrollLeft(step * to)
        .scrollLeft()

      chexpl(curr => {
        const ans = to
        if (article[ans]?.lines) {
          chlines(article[ans].lines)
        }
        return ans
      })
      oldScrollPos = currScrollPos

      const feedbackPageEl = FeedbackRef.current
      const curr1 = to
      const edge = article.length - 2

      if (
        curr1 === edge + 1 ||
        curr1 === edge + 2 ||
        (curr1 === edge + 3 && feedbackPageEl)
      ) {
        if (feedbackPageEl) {
          feedbackPageEl.style.display = 'flex'
        } else {
        }

        $('#App_ref')[0].scrollTop = $('#App_ref')[0].scrollHeight

        //disable moving right
        $('.Btn.right')[0].dataset.enabled = 'false'
        $('html, #root').css({overflowY: 'none !important'})
      } else if (feedbackPageEl) {
        feedbackPageEl.style.display = 'none'
        $('.Btn.right')[0].dataset.enabled = 'true'
        $('html, #root').css({overflowY: 'auto !important'})
      }

      if (curr1 === 0 || curr1 === -1) {
        $('.Btn.left')[0].dataset.enabled = 'false'
      } else {
        $('.Btn.left')[0].dataset.enabled = 'true'
      }
    }

    // console.log(curr1)
  }

  return (
    <div id="Explain">
      <Code want={wanted} lines={lines} />
      <div id="Expl">
        <Btn click={() => move(false)} className="left" enabled={false}>
          <BsChevronCompactLeft />
        </Btn>
        <div id="Window">
          {article.map((expl, i) => <Card key={i}>{expl.content}</Card>)}
        </div>
        <Btn click={() => move(true)} className="right" enabled={true}>
          <BsChevronCompactRight />
        </Btn>
      </div>
    </div>
  )
}

export default Explain
