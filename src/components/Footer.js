import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { FaMapSigns } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { AiFillReconciliation } from 'react-icons/ai'

function Footer() {
  return (
    <>
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

export default Footer
