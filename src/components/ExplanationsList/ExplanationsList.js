import React, {useEffect} from 'react'
import './ExplanationsList.scss'

import ExplanationBullet from './ExplanationBullet/ExplanationBullet'

const expl = [
  {
    title: 'Type Of',
    description: 'typeof challenge explained',
    link: '/TypeOf',
  },
  {
    title: 'Con Game',
    description: 'Con game challenge explained',
    link: '/ConGame',
  },
  {title: 'Bird Box', description: 'The bird box challenge', link: '/BirdBox'},
  {title: 'Sapper', description: 'The sapper challenge', link: '/Sapper'},
  {
    title: 'Bubble Sort',
    description: 'Understand the simplest sorting algorithm.',
    link: '/BubbleSort',
  },
  // {title: 'code3', description: 'desc33' },
  // {title: 'code4', description: 'desc44' },
  // {title: 'code5', description: 'desc55' },
  // {title: 'code6', descripiton: 'desc66' },qqq
  // {title: 'code6', descripiton: 'desc64' },
  // {title: 'code6', descripiton: 'desc68' },
  // {title: 'code6', descripiton: 'desc61' },
]

const ExplanationsList = props => {
  useEffect(() => {
    window.localStorage.setItem('homePageVisited', true)
  }, [])

  return (
    <div id="ExplanationsList">
      <div id="callToAction1">Choose the one you find most interesting 😊</div>
      <div id="list">
        {expl.map((el, i) => (
          <ExplanationBullet
            key={i}
            title={el.title}
            to={el.link}
            description={el.description}
          />
        ))}
      </div>
    </div>
  )
}

export default ExplanationsList
