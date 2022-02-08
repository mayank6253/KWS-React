import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { FaMapSigns } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { AiFillReconciliation } from 'react-icons/ai'

function Rental() {
  return (
    <>
      <div className="about-container">
        <div className="container-content">
          <h1 className="deficrypto">Blockchain Technology in Rental Sector</h1>
        </div>
      </div>
      <div className="team-container">
        <h4 className="cf-software">Overview</h4>

        <div className="team-container-content">
          <div className="paragraph">
            The property rental sector is much of ‘a pen and paper’ sector,
            where almost everything is done via a long chain of intermediaries
            and a lot of paperwork. The process of rentals is time-consuming and
            tiring but nothing has been done in the sector. This sector often
            relies on archaic methods for doing business and keeping records.
            Technology has now begun to reshape the process of globalisation.
            Everyday IT sector is developing new technology faster and more
            reliable than the previous one. One such technology is the
            blockchain technology. Many sectors have discovered a sheer amount
            of positive utility of blockchain in their space. This technology is
            being evolved for various other sectors including the rental sector.
            For this sector especially, it can prove to be a revolutionary and
            solve many of its existing problems.
          </div>
          <br /> <br />
          <h4 className="cf-software">How Blockchain can help in rentals</h4>
          <p className="bitcoin-para">
            A blockchain, in simple words, is a time-stamped series of immutable
            data, stored in a decentralised ledger system that is accessible to
            all involved parties. The blockchain can bring many changes to the
            rental sector but the chief utilities are smart contracts and
            tokenization.
          </p>
          <p className="bitcoin-para">
            Smart contracts are self-executing contracts. These automated
            contracts have a special system, where there are specific
            instructions written in their codes, that are executed only when
            certain conditions are met. These contracts will cut off the
            middlemen and their share making the process cheaper. This will also
            help in bringing transparency as they cannot be tampered or altered.
            It will also reduce the time consumed by paperwork in the whole
            process.
          </p>
          <p className="bitcoin-para">
            A token is a digital representation of asset, value or a function
            present in the real world. Blockchain technology will help in
            creating real-world tokens of the rental. Tokenization not only
            increases the liquidity of the asset but also helps in trading these
            assets without involving any third-party. This will facilitate
            fractional ownership of property and save costs by excluding
            middlemen.
          </p>
          <p className="bitcoin-para">
            Physical paperwork and a manual verification process can involve the
            providers and are more likely to welcome errors in the process.
            Digitization of the process will make it cheaper, more secure and
            more efficient and will fasten the due diligence process.
          </p>
        </div>
      </div>
      <div className="advantages container">
        <h3 className="advantage">Problems of Rental</h3>
        <div className="hyper">
          <p className="lending">
            Investments in real estate require a good amount of capital, not
            everyone can afford the same. This sector has always had too many
            barriers like citizenship, credit score, high interests, and
            financing etc
          </p>

          <p className="lending">
            This sector severely lacks transparency, there are depths of
            corruption and dishonesty in this business. A high degree of
            transparency is required to combat fraud cases, tax evasion and
            money laundering.
          </p>

          <p className="lending">
            A lot of intermediaries are involved in this sector therefore at
            each level there’s a cost involved making it super expensive. Fees
            like broker fees, transfer fees, attorney fees, investment fees and
            taxes etc.
          </p>
          <p className="lending">
            Investors should have a heavy capital upfront to invest in rentals.
            At times, they have to opt for expensive financing options to retain
            the deal.
          </p>
          <p className="lending">
            The transaction speed of real estate may be simple to sound that is
            transferring of one property to the name for other. But it actually
            consumes a lot of time, one can expect that they will find a
            suitable property in six months but they definitely do require
            another six to complete the paperwork and payment procedures. Such
            delayed process also results in a high fee structure.
          </p>
          <p className="lending">
            Liquidity can be defined as to how quickly can an asset be turned to
            cash. Real estate are fixed and long term investments, no one buys
            it with the sole purpose of selling it in the near future. They are
            very difficult to liquidate primarily due to ups and downs in the
            market and there can be high chances that when a person is willing
            to sell their property might not even be a buyer.
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

export default Rental
