import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { FaMapSigns } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { AiFillReconciliation } from 'react-icons/ai'

function Supply() {
  return (
    <>
      <div className="about-container">
        <div className="container-content">
          <h1 className="deficrypto">Blockchain in Supply Chain</h1>
        </div>
      </div>
      <div className="team-container">
        <h4 className="cf-software">What is supply chain management?</h4>

        <div className="team-container-content">
          <div className="paragraph">
            A supply chain, in easier words, is called a distribution system.
            Supply chain management deals with planning the transit of the
            [product until it reaches the final customer, it includes processing
            of material, packaging, warehousing, delivery, wholesalers, and
            retailers too. This management of the flow of goods require
            resources in the form of human labour, raw materials, machinery,
            organisations, entities as well as technology. In other words, it is
            a full-fledged system that starts from building a commodity and
            making it reach its final customer.
          </div>
          <br /> <br />
          <h4 className="cf-software">
            What are the current problems faced in the current system of
            management?
          </h4>
          <p className="bitcoin-para">
            If we look on a global scale, the demand is rising on a greater
            level and hence, a product has to be made readily available. The
            demand for high speed, more volume and cheap consumption is
            increasing day by day. This fast consumer pattern has been
            compromised with the value of an ethical supply chain. The current
            system of flow of goods, information and financial capital include
            both uses of manual and online data which is prone to:
          </p>
          <p className="bitcoin-para">
            While entering the data manually there could be a lot of mistakes
            like writing down of wrong digits or codes, not including a product
            in the cart, inability to check each and every product and inability
            to check the quality of raw materials etc.
          </p>
          <p className="bitcoin-para">
            As today’s products use a lot of ingredients and components, it is
            really too hard to track that what component has an error. For
            example, if we take a smartphone, there are parts as small as a
            microchip fitted inside of it. If there is a component that is
            defective and fitted in it, it is nearly impossible to know which
            part has a defect and since these parts are made by different
            producers, it becomes more difficult to track the exact part that is
            causing errors.
          </p>
          <p className="bitcoin-para">
            PThe major problem in running a complex supply chain is that the
            vendors of every stage must be trusted. Differently, any
            organisation must trust that the supplier of raw material is
            delivering the right product, the delivery department is maintaining
            the safety standards and there are 100% dedicated and hardworking
            participants in the chain. However, humans are not too much
            trustworthy and the system is prone to corruption. Some basic cases
            may include, mixing up of different materials while collecting raw
            materials, hoarding, black marketing, supplier acting like a
            monopolist, exploitation of resources and window dressing of
            accounts etc.
          </p>
        </div>
      </div>
      <div className="advantages container">
        <h3 className="advantage">
          How will blockchain improve suppy chain management?
        </h3>
        <div className="hyper">
          <p className="lending">
            We can say that blockchain is a perfect solution to disrupt the
            current system of supply chain management.
          </p>

          <p className="lending">
            Every time the commodity will change hands, there will be a
            permanent record that will be stored in the blocks, this will create
            detailed information of the product right from the procurement of
            product till its point of sale. This will reduce the time consumed,
            human errors, and added costs.
          </p>

          <p className="lending">
            Summing Up Blockchain technology is the key to all the problems
            present in this system. However, it will take time to develop and
            overcome problems like currency volatility, spreading the knowledge
            on its technical know-how and people’s resistance to change. But the
            usage of blockchain opens up the doors for innovation and better
            use, we can hope that this system will be established as a norm in
            the management in this era of globalisation.
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

export default Supply
