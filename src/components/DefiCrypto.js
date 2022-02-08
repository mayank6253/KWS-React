import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { AiFillReconciliation } from "react-icons/ai";
import "./DefiCrypto.css";

function DefiCrypto() {
  return (
    <>
      <div className="deficrypto-container">
        <div className="heading">
          <h1 className="deficrypto">
            Cryptocurrency Wallet Development Company: Transferring Currency Was
            Never So Easy
          </h1>
          <p className="para-ficrypto">
            We will help you with secure and reliable Multi-Cryptocurrency
            wallet application development services as per your custom needs and
            requirements.
          </p>
          <p className="joc">JOIN OUR COMMUNITY</p>
          <BsTelegram /> <FaFacebook /> <FaInstagramSquare /> <AiFillLinkedin />
        </div>
      </div>

      <div className="crypto-container">
        <div className="cc">
          <h2 className="currrency">Cryptocurrency Development Company</h2>
          <p className="developement">
            <u>
              At ICO Crypto, you will be served with the best cryptocurrency
              wallet development services to help you with the processing of
              your virtual exchange.
            </u>{" "}
            We have a team of experienced and talented cryptocurrency
            development experts specializing in providing your own
            cryptocurrency wallet. With us, you will always be assisted with a
            scalable and highly-secure wallet to keep you in the game. With our
            advanced and innovative cryptocurrency development techniques, you
            will be getting a secure and powerful wallet which allows you to
            store private transaction keys and get your transactions processed
            with complete protection.
          </p>
          <button className="c-t">TELEGRAM</button>
        </div>
      </div>

      <div className="benefits-container">
        <h1 className="benefits">Benefits of Cryptocurrency Wallet</h1>
        <div className="col">
        <h2 className="benefits"> Multi Fiat Integration</h2>
          <p className="benefits-currency">
            There are more than hundreds of cryptocurrencies into existence.
            Each has a different ecosystem, infrastructure, and objective. To
            use different currencies you can always consider going for the
            multi-currency wallet.
          </p>
          <h2 className="benefits">Automatic Session Logout</h2>
          <p className="benefits-currency">
            Every session gets logged out automatically as it helps in enhancing
            the primary security procedure. So, this new login helps in keeping
            the fund and account completely protected after getting logged after
            a specific period of time.
          </p>
          <h2 className="benefits">Detect Duplicate Payments</h2>
          <p className="benefits-currency">
            Cryptocurrency systems do not accept chargebacks because for fund
            suppliers it becomes a risk to get more out of nothing or a
            fraudulent act. With the 2-factor authorization process, you will
            have secured private wallet keys.
          </p>
          <h2 className="benefits">KYC Module</h2>
          <p className="benefits-currency">
            Each and every cryptocurrency contains its hits and surpasses value.
            As the amount of virtual currency will not exceed after a particular
            value, the cryptocurrency can exclusively stay off the inflation
            grid with KYC module.
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

export default DefiCrypto;
