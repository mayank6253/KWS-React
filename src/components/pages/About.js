import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import Bottom from '../Bottom'
import Footer from '../Footer'

function About() {
  return (
    <>
      <div className="about-container">
        <div className="container-content">
          <img className='img' src="images/favicon.png" alt="bird-logo" />
          <h1 className="wda">Web-design Agency</h1>
          <div className="display">
            <p className="para-c">
              Kesavi Web Solutions specializes in building need-specific, CMS
              (WordPress, Joomla, Drupal, Shopify, Woocommerce, Magento, Ghost,
              JAMStack) based websites, and customized web apps. All our
              websites adhere to the modern standards of speed, rich user
              experience (UI/UX), and Google ranking potential matrix. <br />
              <br /> We are the most affordable web design agency based in South
              Delhi, New Delhi India. We aim to provide you with the perfect
              digital platform at tailor-made costs to take your business online
              and reach maximum potential customers.
            </p>

            <nav>
              <div className="nav-links">
                <div className="nav-link-item">
                  <ul className="li">
                    <li className="nav-item">
                      <Link to="/" className="nav-links">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link to="/blog" className="nav-links">
                        BLOG
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link to="/contact" className="nav-links">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div id="text1">
          <div className="txt-abs m-auto w-20 h-20">
            <h2>Our Team</h2>
          </div>
          <p>few words about our team</p>
        </div>

        <div className="team-container-content">
         <div className="paragraph">
         Owing to the dominance of CMS based websites, almost every website
          looks similar. Kesavi Web Solutions provide <span className="class"> custom UI/UX designing
          services to build a unique and unforgettable user experience for
          websites.</span>Our team is a bunch of spirited individuals, experts in their
          own domain, synergizing to produce results that satisfy the needs of
          our clients. We as a team have delivered a good number of projects to
          be proud of – go through our portfolio to experience it. We are always
          ready for new challenges and would love to hear your idea. If you are
          interested in highly productive collaboration and a long-lasting
          professional relationship, get in touch to discuss your project.
         </div>
        </div>
        <div className="button-class">
          <button className="gfq">Get Free Quote</button>
        </div>
      </div>
      <Bottom />
      <Footer />
    </>
  )
}

export default About
