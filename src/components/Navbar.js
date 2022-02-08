import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
      <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="images/KWS-Logo-03.png" alt="logo img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/icodashboard">
                      ICO/STO Dashboard Script
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/defisoftware">
                      DeFi Landing Software
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/deficrypto">
                      DeFi Crypto Wallet Software
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/otcsoftware">
                      OTC Exchnage Software
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/crowdfunding">
                      Crowd Funding Software
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cryptopenny">
                      Crypto Penny Auction Software
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/coldwalletintegration">
                      Cold Wallet Integration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/uniswapclone">
                      Uniswap Clone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tokenmigration">
                      Token Migration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/bridgesmartcontract">
                      Bridge Smart Contract
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Crypto Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/crytpocurrencydevelopment">
                      Cryptocurrency Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/icocoindevelopment">
                      ICO Coin Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/stocoindevelopment">
                      STO Coin Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/stomarketing">
                      ICO/STO Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/erc20development">
                      ERC20 Token Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cryptoexchangedvelopment">
                      Crypto Exchange Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/bep20development">
                      BEP20 Token Development
                    </a>
                  </li>
                <li>
                    <a className="dropdown-item" href="/nftdevelopment">
                      NFT Token Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/trc20development">
                      TRC20 Token Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cordablockchaindevelpoment">
                      Corda Blockchain Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cardano ada blockchain development">
                    Cardano ada blockchain development
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Enterprise
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/hyperledgerdevelopment">
                      Hyperledger Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/smartcontractdevelopment">
                      Smart Contract Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/dappsdevelopment">
                      DAPPS Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/soliditydevelopment">
                      Solidity Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ipfsdevelopment">
                      IPFS Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/hashgraphdevelopment">
                      Hashgraph Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/defidevelopment">
                      DeFi Development
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/healthcare">
                      Health Care
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/finance">
                      Finance/Investment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/insurance">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/rental">
                      Rental
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/supplychain">
                      Supply Chain
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/gamesdevelopment">
                      Games Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/agriculture">
                      Agriculture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/retail">
                      Retail
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NFT
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/nfttokendevelopment">
                      NFT Token Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/nftmarketplace">
                      NFT Market Place
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/about"
                  role="button"
                  aria-expanded="false"
                >
                  About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/blog"
                  role="button"
                  aria-expanded="false"
                >
                  BLOG
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONTACT
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/termsandcondition">
                      Terms And Conditions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/privacypolicy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar;
