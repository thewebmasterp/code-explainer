import React from 'react'
import './Footer.scss'
import SocialMedias from '../SocialMedias/SocialMedias'

const Footer = props => {
  return (
    <footer id="Footer">
      <div id="copyright">
        <p>
          Copyright 2020 Zdravko Dimov (<a href="https://thewebmasterp.com">
            thewebmasterp
          </a>). This project is{' '}
          <a href="https://github.com/thewebmasterp/code-explainer">
            open sourced
          </a>.
        </p>
      </div>
      <SocialMedias />
    </footer>
  )
}

export default Footer
