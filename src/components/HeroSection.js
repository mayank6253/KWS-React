import React from 'react'
import './HeroSection.css';
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <>
      <div className="header-container">
        <div className="header-text">
          <img className='bird ' src="images/favicon.png" alt="bird-img" />
          <h5 className="dw">Digital Wings</h5>
          <h5 className="fyb">For Your Business</h5>
          <div className="para-text">
            <p>
              We are the most affordable web design agency based in South Delhi,
              NewDelhi India. We aim to provide you with the perfect digital
              platform at tailor-made costs to take your business online and
              reach maximum potential customers.
            </p>

            <p>
              Kesavi Web Solutions specializes in building need-specific, CMS
              (WordPress, Joomla, Drupal, Shopify, Woocommerce, Magento, Ghost,
              JAMStack) based websites, and customized web apps. All our
              websites adhere to the modern standards of speed, rich user
              experience (UI/UX), and Google ranking potential matrix.
            </p>
          </div>

          <div className="btn-cont">
            <button className="wallet">
              {' '}
              <i className="fas fa-wallet"></i> Get a Quote
            </button>{' '}
            <br />
            <button className="ball">
              {' '}
              <i className="fas fa-basketball-ball"></i> Portfolio
            </button>
          </div>
        </div>
        <div className="header-right">
          <ul className="header-content">
            <li className="nav-item">
              <Link to="/about" className="nav-links">
               About
              </Link>
            </li>

            <li className="nav-item dropdown">
            <Link to="/blog" className="nav-links">
                Blog
              </Link>
            </li>

            <li className="nav-item dropdown">
            <Link to="/contact" className="nav-links">
               Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
            <Link to="/cardsdetail" className="nav-links">
               Card
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      
    </>
  )
}

export default HeroSection
