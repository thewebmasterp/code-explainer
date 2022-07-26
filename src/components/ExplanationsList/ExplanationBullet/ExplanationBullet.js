import {React} from 'react'
import './ExplanationBullet.scss'

import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'

const images = require.context('../../../content/articles', true)

const loadImage = imageName => {
  return images(`./${imageName}.png`)
}

const ExplanationBullet = props => {
  return (
    <div className="ExplanationBullet">
      <div className="EBWrapper">
        <Link to={`${props.to}`}>
          <div
            className="thumb"
            style={{
              backgroundImage: `url(${loadImage(
                String(props.to).substring(1) || 'err'
              )})`,
            }}
          />
        </Link>

        <h1>
          <Link style={{textDecoration: 'none'}} to={`${props.to}`}>
            {props.title}
          </Link>
        </h1>
        <p>{props.description}</p>
        <div
          className="btnBox"
          style={{display: 'flex', flexDirection: 'row-reverse'}}
        >
          <Button className="callToAction1 dark" to={`${props.to}`}>
            explain it
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ExplanationBullet
