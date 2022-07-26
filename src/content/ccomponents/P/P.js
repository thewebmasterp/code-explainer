import React from 'react'
import './P.scss'
import {useState, useEffect} from 'react'
import $ from 'jquery'
import {BsX} from 'react-icons/bs'
import Draggable from 'react-draggable'

function isURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return pattern.test(str)
}

let once = 0

const Popup = props => {
  let [expl, href] = [props.expl, props.href]

  const [vis, chvis] = useState(false)

  const onClickHandler = e => {
    const parent = e.target.parentNode.className
    const scrolladd = $('#Window').scrollLeft()
    // console.log(parent)
    if (parent === 'Magic') {
      chvis({
        x: scrolladd + e.pageX - $('#Window').offset().left,
        y: e.pageY - $('#Window').offset().top,
      })
    } else if (parent === 'content') {
      if (once === 0) {
        chvis({
          x: 100,
          y: 100,
        })
        once++
      } else if (once === 1) {
        chvis({
          x: -100,
          y: -100,
        })
        once++
      } else if (once === 2) {
        chvis({
          x: -100,
          y: -100,
        })
        once = 0
      }
    }
    // console.log(e.pageX)
  }

  useEffect(() => {
    // $('.pop').each((i, el) => dragElement(el))
    // $('.pop').each((i, el) => console.log(el))
    $('.pop').on('touchstart', e => {
      // e.preventDefault()
      // e.stopPropagation()
      // $(this).trigger('focus')
    })
  })

  const [drag, chdrag] = useState(false)

  const onDrop = event => {
    // your code
    // console.log('drop');
  }

  const onClick = event => {
    const el = event.target
    const triy = el?.click?.()
    // console.log(triy)
    if (!triy) {
      event?.path?.forEach(path => {
        path?.click?.()
      })
    }
  }

  const onDrag = () => {
    chdrag(true)
  }

  const onStop = (...args) => {
    chdrag(false)
    if (drag) {
      onDrop(...args)
    } else {
      onClick(...args)
    }
  }

  if (expl && isURL(expl)) {
    href = expl
    expl = null
    console.warn('Warning! expl used where href needed!', props.expl)
  }

  if (href && !isURL(href)) {
    expl = href
    href = null
    console.warn('Warning! href is used where expl needed!', props.href)
  }

  const nodeRef = React.useRef(null)

  return expl ? (
    <>
      <span className="Popup" onClick={onClickHandler}>
        {props.children}
      </span>
      <Draggable nodeRef={nodeRef} onDrag={onDrag} onStop={onStop}>
        <div
          ref={nodeRef}
          className="pop"
          tabIndex="0"
          style={{
            display: vis ? 'grid' : 'none',
            left: vis ? `${vis.x}px` : '0px',
            top: vis ? `${vis.y}px` : '0px',
          }}
        >
          <div className="popheader">
            <div
              ref={nodeRef}
              className="btn"
              onClick={() => {
                chvis(false)
              }}
            >
              <BsX
                onClick={() => {
                  chvis(false)
                }}
                className="close"
              />
            </div>
          </div>
          <span className="content">{expl}</span>
        </div>
      </Draggable>
    </>
  ) : href ? (
    <a href={href}>{props.children}</a>
  ) : (
    <span>{' ERR! '}</span>
  )
}

export default Popup
