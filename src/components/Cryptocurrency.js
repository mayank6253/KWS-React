import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { AiFillReconciliation } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { AiOutlinePieChart } from "react-icons/ai";
import { SiBitcoincash } from "react-icons/si";
import { SiDogecoin } from "react-icons/si";
import { SiDash } from "react-icons/si";
import { SiRipple } from "react-icons/si";
import "./Cryptocurrency.css";

function Cryptocurrency() {
  return (
    <>
      <div className="deficrypto-container">
        <div className="heading">
          <h1 className="deficrypto">
            Enterprise Cryptocurrency Development Services Provider and Company
          </h1>
          <p className="para-ficrypto">
            We set you up with powerful cryptocurrency solutions ranging from
            ICOs to Wallets to Exchange Solutions with the assistance of
            seasoned crypto experts.
          </p>
          <p className="joc">JOIN OUR COMMUNITY</p>
          <BsTelegram /> <FaFacebook /> <FaInstagramSquare /> <AiFillLinkedin />
        </div>
      </div>

      <div className="crypto-container">
        <div className="cc">
          <h2 className="currrency">Cryptocurrency Development Company</h2>
          <p className="developement">
            Cryptocurrency, a product of Blockchain, is a digital asset built to
            function as an efficient medium for money exchange.The inception of
            the first-ever cryptocurrency, Bitcoin, in 2009 was heavily
            overlooked and disregarded as a redundant addition to the
            technological world; little did they know of its thriving
            potential.Proving the sceptical minds wrong, and showcasing its
            immutability, transparency, and reliability, the technology has
            forced us to join the wave to rise as the best cryptocurrency
            development company providing the best cryptocurrency development
            services.
          </p>
          <button className="c-t">TELEGRAM</button>
        </div>
      </div>
      <div className="cds">
        <h3 className="cds-text">Our Cryptocurrency development Services</h3>
        <div className="cds">
          <div className="cards-left">
            <div className="cards-wrapper">
              <div className="card-items">
                <p className="ci">Coin development</p>
                <p className="ci">Crypto consulting</p>
                <p className="ci">Exchange development</p>
                <p className="ci">Wallet development</p>
                <p className="ci">Virtual coin development</p>
                <p className="ci">Crypto mining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cds">
        <div className="crypto-paltform">
          <h5 className="cp">Crypto mining</h5>
          <p className="cp-para">
            With us, you can setup your very own cryptocurrency Block explorer
            With us
          </p>
          <div className="coins-right">
            <FaBitcoin className="cria" />
            <p className="cr">Bitcoin</p>
            <SiLitecoin className="crib" />
            <p className="cr">Litecoin</p>
            <SiBitcoincash className="cric" />
            <p className="cr">Bitcoin cash</p>
            <SiDogecoin className="crid" />
            <p className="cr">Dogecoin</p>
            <img
              src="images/Feather coin.png"
              alt="feather img"
              className="feather coin"
            />
            <p className="cr">Feather coin</p>
            <img
              src="images/Megacoin.webp"
              alt="coin img "
              className="megacoin"
            />
            <p className="cr">Megacoin</p>
            <SiDash className="crie" />
            <p className="cr">Dash</p>
            <SiRipple className="crif" />
            <p className="cr">Ripple</p>
          </div>
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

export default Cryptocurrency;
