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
import './Bridge.css'

function BridgeSmart() {
  return (
    <>
      <div className="about-container">
        <div className="container-content">
          <h1 className="deficrypto">
            Cross-chain Bridge Smart Contract Development Services
          </h1>
          <p className="tm-para">
            Send your tokens across multiple blockchains and launch a
            cross-chain DeFi project with our bridge smart contract development
            services.
          </p>
          <p className="joc">JOIN OUR COMMUNITY</p>
          <BsTelegram /> <FaFacebook /> <FaInstagramSquare /> <AiFillLinkedin />
        </div>
      </div>
      <div className="team-container">
        <h4 className="cf-software">
          {' '}
          Why do you need a Bridge Platform for your token?
        </h4>

        <div className="team-container-content">
          <div className="paragraph">
            The future is cross-chain and our bridge smart contract development
            services allow you to send your tokens across blockchains. But why?
            If you want to create any platform that caters to a wide range of
            users, you need to go cross-chain. Bridge smart contract development
            allows you to create robust decentralized applications that any user
            can use especially on chains with lower gas costs.
          </div>
          <button className="ct">CONTACT TELEGRAM</button>

          <h4 className="bitcoin">
            What are the advantages of Multichain/Crosschain token project?
          </h4>
          <p className="bitcoin-para">
            Creating a project with our bridge smart contract development
            services allows you to send your tokens between blockchains. This
            means that you can allow your users to use your token on the
            blockchain that they prefer. Whether it is the highly secure
            Ethereum blockchain or the highly affordable Binance Smart Chain,
            our bridge platform is the perfect solution for you.
          </p>
          <h4 className="bitcoin">Bridge blockchain networks we work on</h4>
          <p className="bitcoin-para">
            Bsc to ethereum bridge Allow your users to send tokens from BSC to
            the Ethereum network with our BSC to Ethereum bridge smart contract
            development. Ethereum to Bsc bridge Allow users to enjoy low
            transaction costs of the BSC network with our robust bridge smart
            contract development services.Polkadot bridge to ethereum Leverage
            the power of multichain and build a Polkadot bridge to Ethereum with
            our bridge smart contract development services.Cosmos to ethereum
            bridge Create a cross-chain project with Cosmos - Ethereum bridge
            and explore the innovative world of the Cosmos blockchain.
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

export default BridgeSmart
