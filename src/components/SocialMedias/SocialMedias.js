import React from 'react'
import './SocialMedias.scss'
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillMail,
} from 'react-icons/ai'

const SocialMedias = props => {
  return (
    <div className={`${props.className || ''} SocialMedias`}>
      <a href="https://www.instagram.com/webmaster_project">
        <AiFillInstagram className="insta" size="1.8em" />
      </a>
      <a href="https://twitter.com/thewebmasterp">
        <AiFillTwitterSquare className="twitter" size="1.8em" />
      </a>
      <a href="https://github.com/thewebmasterp">
        <AiFillGithub className="github" size="1.8em" />
      </a>
      <a href="mailto:thewebmasterp@gmail.com">
        <AiFillMail className="mail" size="1.8em" />
      </a>
    </div>
  )
}

export default SocialMedias
