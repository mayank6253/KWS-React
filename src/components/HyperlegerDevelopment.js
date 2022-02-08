import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { AiFillReconciliation } from "react-icons/ai";
import "./Hyperleger.css";

function HyperlegerDevelopment() {
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
        <h4 className="cf-software">
          {" "}
          What is Hyperledger Blockchain Development?
        </h4>

        <div className="team-container-content">
          <div className="paragraph">
            Hyperledger development is the technology that has emerged to
            incubate transparent ledger and accountable applications just like
            blockchain is acknowledged as blockchain technology. There are more
            than 70 per cent of blockchain applications built on hyperledger
            framework to get the effective implementation of decentralized and
            distributed blockchain application development service.
          </div>
          <br /> <br />
          <h4 className="bitcoin"> Our Hyperledger Technology Services</h4>
          <p className="bitcoin-para">
            Consulting Our unit of consultants will assess which Hyperledger
            Project which will perfectly match your business solution.
          </p>
          <p className="bitcoin-para">
            User Experience and Technical Design We help you with a technical
            design which will help you with defining technical components,
            system blueprint, and database design.
          </p>
          <p className="bitcoin-para">
            Enterprise dApp Development and Deployment The Hyperledger
            development experts have experience of building dApps for multiple
            industries with Hyperledger Frameworks.
          </p>
          <p className="bitcoin-para">
            Maintenance & Support Our experts are available to help you with
            immediate support services to get your doubts cleared in the
            quickest time possible.
          </p>
        </div>
      </div>
      <div className="advantages container">
        <h3 className="advantage">Hyperledger Blockchain Development Tools</h3>
        <div className="hyper">
          <p className="lending">Hyperledger calliper</p>

          <p className="lending">Hyperledger CELLO</p>

          <p className="lending">Hyperledger COMPOSER</p>
          <p className="lending">Hyperledger EXPLORER</p>
          <p className="lending">Hyperledger QUILT</p>
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
                {" "}
                <i className="fas fa-map-marker-alt fa-2x"></i> Badarpur, New
                Delhi,
                <br /> India 110044
              </h6>
              <h6>
                {" "}
                <i className="fas fa-phone fa-2x"></i> (+) 91 - 9717453904
              </h6>
              <h6>
                {" "}
                <FaEnvelopeOpenText size={30} className="fa" />{" "}
                info@kesaviweb.com
              </h6>
            </div>

            <div className="footer-text-item-2">
              <h4>FOR ROBOTS</h4>
              <h6>
                {" "}
                <FaWpforms size={30} className="fas" /> Privacy Policy
              </h6>
              <h6>
                {" "}
                <AiFillReconciliation size={30} className="ai" /> Terms &
                Conditions
              </h6>
              <h6>
                {" "}
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
  );
}

export default HyperlegerDevelopment;
