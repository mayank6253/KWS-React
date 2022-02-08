import React from 'react'
import { BsTelegram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlinePieChart } from 'react-icons/ai'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { FaMapSigns } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { AiFillReconciliation } from 'react-icons/ai'

function Dapps() {
  return (
    <>
      <div className="about-container">
        <div className="container-content">
          <h1 className="deficrypto">
            Hyperledger Blockchain Development Services
          </h1>
          <p className="tm-para">
            Experts to help you with enterprise blockchain app development using
            Hyperledger Frameworks
          </p>
          <p className="joc">JOIN OUR COMMUNITY</p>
          <BsTelegram /> <FaFacebook /> <FaInstagramSquare /> <AiFillLinkedin />
        </div>
      </div>
      <div className="team-container">
        <h4 className="cf-software"> What is DAPPS?</h4>

        <div className="team-container-content">
          <div className="paragraph">
            DAPPS is a special kind of a decentralized application which runs on
            a P2P network. The interface of a decentralized application does not
            vary much from that of a mobile app or a website. The day isn't far
            away when your car will move on its own while you are in office.
            This is what DAPPS is to the world of technology. Bitcoin is the
            first cryptocurrency which made us think about the future of the
            world of technology. DAPPS runs on the technology of blockchain. The
            main theme behind the technology is that the data does not
            accumulate in a centralized place. It is not even maintained by an
            individual.
          </div>
          <br /> <br />
          <h4 className="bitcoin">Blockchainx Dapps Development Services</h4>
          <p className="bitcoin-para">
            Upgradation of dApp services The functioning of business operations
            smoothly is the main of the app. The app must be upgraded on a
            timely basis. We assist our clients for the transfer and
            up-gradation of their application so that they do not suffer any
            kind of loss. Launching of smart contracts for the dApps can also be
            done by our experts.
          </p>
          <p className="bitcoin-para">
            dApp movement Our team of professionals are apt enough to provide
            your business with the transfer of dApp application on a wide array
            of the operating system. dApp development is done by moving a
            running application to any other blockchain platform for the smooth
            functioning of the busines
          </p>
          <p className="bitcoin-para">
            Smart Contracts Smart Contract services are provided only after
            development, trialling, and then launching it on different kinds of
            a platform like Ethereum, Neo and many others. We provide total
            assistance to our customers by guiding them about their business
            necessity.
          </p>
          <p className="bitcoin-para">
            User Interface Our team and company are known for the development of
            business like user-interface procedures. From the year 2007, we have
            a record of maintaining smooth running applications for our clients.
            100 such applications have been developed since 2007.
          </p>
        </div>
      </div>
      <div className="advantages container">
        <h3 className="advantage">Ethereum DApps Development</h3>
        <div className="hyper">
          <p className="lending">
            Immutability of Data No third party can meddle with the database of
            the clients.
          </p>

          <p className="lending">
            Secured The database remains protected from malware of all kinds
            because of the fact that it is decentralized in nature.
          </p>

          <p className="lending">
            Zero downtime Running applications cannot be stopped for the smooth
            functioning of the business.
          </p>
        </div>
      </div>

      <div className="container-bottom">
        <div className="bottom-left">
          <h6 className="www">Why work with us !</h6>
          <br />
          <h3 className="dnw">Does your bussiness need a website ?</h3>
          <br />
          <h2 className="left-text">We're available</h2>
          <br />
          <p className="left-para">
            If you want to expand your business in the digital domain and need
            an affordable solution, we are here to help you by building a
            cost-effective yet professional website design for a near-perfect
            start of the digital journey for your products and services. Get in
            touch with us, we’d love to hear your idea and give your business
            “DIGITAL WINGS”.
          </p>
          <br />
          <button className="wa">
            <i className="fab fa-telegram"></i> Telegram
          </button>
        </div>

        <div className="bottom-right">
          <h5 className="right-text-1">
            <AiOutlinePieChart size={30} /> Affordable Pricing
          </h5>
          <br />
          <p className="right-para-1">
            Kesavi Web Solutions is the most affordable WordPress website
            designing agency based in South Delhi, India. We offer the most
            cost-effective services depending on the specific requirements of
            each project and budget. Our services fit well in small pockets.
          </p>
          <h5 className="right-text 2">
            <i className="fas fa-thumbs-up"></i> Professional Design
          </h5>
          <br />
          <p className="right-para-2">
            Every project we work upon is a new challenge for us to create a new
            masterpiece. It is also an opportunity to know about the client’s
            ideas, values, and mission, audience, brand values, competition.
            This helps us shape the UI/UX accordingly and create a rich user
            experience with a professional design. <br />
            Kesavi Web Solutions strives to create a personalized website design
            that is in harmony with the ideas of the business.
          </p>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-text-wrappers">
          <div className="footer-text-items">
            <div className="footer text item-1">
              <h4>REGD.OFFICE</h4>
              <h6 className="bnd">
                {' '}
                <i className="fas fa-map-marker-alt fa-2x"></i> Badarpur, New
                Delhi,
                <br /> India 110044
              </h6>
              <h6>
                {' '}
                <i className="fas fa-phone fa-2x"></i> (+) 91 - 9717453904
              </h6>
              <h6>
                {' '}
                <FaEnvelopeOpenText size={30} className="fa" />{' '}
                info@kesaviweb.com
              </h6>
            </div>

            <div className="footer-text-item-2">
              <h4>FOR ROBOTS</h4>
              <h6>
                {' '}
                <FaWpforms size={30} className="fas" /> Privacy Policy
              </h6>
              <h6>
                {' '}
                <AiFillReconciliation size={30} className="ai" /> Terms &
                Conditions
              </h6>
              <h6>
                {' '}
                <FaMapSigns size={30} className="fa" /> Site Map
              </h6>
            </div>

            <div className="footer-text-item-3">
              <h4>FOR HUMANS</h4>
              <h6>Home</h6>
              <h6>Portfolio</h6>
              <h6>Free Online Quote</h6>
              <h6>Website Cost Estimation</h6>
            </div>

            <div className="footer-text-item-4">
              <img className="src " src="images/KWS_6693.png" alt="logo img" />
              <h6 className="ncr">
                Most Affordable Website Designing Company based in South Delhi,
                NCR, India.
              </h6>

              <h6 className="company">
                Built with ❤ <b>By K.W.S</b>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dapps
