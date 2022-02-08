import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import IcoDashboard from "./components/IcoDashboard";
import DeFi from "./components/DeFi";
import DefiCrypto from "./components/DefiCrypto";
import OtcExchange from "./components/OtcExchange";
import CrowdFunding from "./components/CrowdFunding";
import CryptoPenny from "./components/CryptoPenny";
import Cold from "./components/Cold";
import UniSwap from "./components/UniSwap";
import TokenMigration from "./components/TokenMigration";
import BridgeSmart from "./components/BridgeSmart";
import Cryptocurrency from "./components/Cryptocurrency";
import IcoCoin from "./components/IcoCoin";
import StoDevelopment from "./components/StoDevelopment";
import StoMarketing from "./StoMarketing";
import Erc20Token from "./components/Erc20Token";
import CryptoDevelpoment from "./components/CryptoDevelpoment";
import Bep20 from "./components/Bep20";
import NftToken from "./components/NftToken";
import Trc20Development from "./components/Trc20Development";
import Corda from "./components/Corda";
import CardoAda from "./components/CardoAda";
import HyperlegerDevelopment from "./components/HyperlegerDevelopment";
import SmartContract from "./components/SmartContract";
import Dapps from "./components/Dapps";
import Solidity from "./components/Solidity";
import Ipfs from "./components/Ipfs";
import HashDevelopment from "./components/HashDevelopment";
import DefiDevelopment from "./components/DefiDevelopment";
import HealthCare from "./components/HealthCare";
import NftMarket from "./components/NftMarket";
import Nft from "./components/Nft";
import Retail from "./components/Retail";
import Agriculture from "./components/Agriculture";
import Games from "./components/Games";
import Supply from "./components/Supply";
import Rental from "./components/Rental";
import Insurance from "./components/Insurance";
import Finance from "./components/Finance";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import CardsDetail from "./components/CardsDetail";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/icodashboard" component={IcoDashboard}></Route>
          <Route exact path="/defisoftware" component={DeFi}></Route>
          <Route exact path="/deficrypto" component={DefiCrypto}></Route>
          <Route exact path="/otcsoftware" component={OtcExchange}></Route>
          <Route exact path="/crowdfunding" component={CrowdFunding}></Route>
          <Route exact path="/cryptopenny" component={CryptoPenny}></Route>
          <Route exact path="/coldwalletintegration" component={Cold}></Route>
          <Route exact path="/uniswapclone" component={UniSwap}></Route>
          <Route exact path="/cardsdetail" component={CardsDetail}></Route>
          
          <Route
            exact
            path="/tokenmigration"
            component={TokenMigration}
          ></Route>
          <Route
            exact
            path="/bridgesmartcontract"
            component={BridgeSmart}
          ></Route>
          <Route
            exact
            path="/crytpocurrencydevelopment"
            component={Cryptocurrency}
          ></Route>
          <Route exact path="/icocoindevelopment" component={IcoCoin}></Route>
          <Route
            exact
            path="/stocoindevelopment"
            component={StoDevelopment}
          ></Route>
          <Route exact path="/stomarketing" component={StoMarketing}></Route>
          <Route exact path="/erc20development" component={Erc20Token}></Route>
          <Route
            exact
            path="/cryptoexchangedvelopment"
            component={CryptoDevelpoment}
          ></Route>
          <Route exact path="/bep20development" component={Bep20}></Route>
          <Route exact path="/nftdevelopment" component={NftToken}></Route>
          <Route
            exact
            path="/trc20development"
            component={Trc20Development}
          ></Route>
          <Route
            exact
            path="/cordablockchaindevelpoment"
            component={Corda}
          ></Route>
          <Route
            exact
            path="/cardano ada blockchain development"
            component={CardoAda}
          ></Route>
          <Route
            exact
            path="/hyperledgerdevelopment"
            component={HyperlegerDevelopment}
          ></Route>
          <Route
            exact
            path="/smartcontractdevelopment"
            component={SmartContract}
          ></Route>
          <Route exact path="/dappsdevelopment" component={Dapps}></Route>
          <Route exact path="/soliditydevelopment" component={Solidity}></Route>
          <Route exact path="/ipfsdevelopment" component={Ipfs}></Route>
          <Route
            exact
            path="/hashgraphdevelopment"
            component={HashDevelopment}
          ></Route>
          <Route
            exact
            path="/defidevelopment"
            component={DefiDevelopment}
          ></Route>
          <Route exact path="/healthcare" component={HealthCare}></Route>
          <Route exact path="/finance" component={Finance}></Route>
          <Route exact path="/insurance" component={Insurance}></Route>
          <Route exact path="/rental" component={Rental}></Route>
          <Route exact path="/supplychain" component={Supply}></Route>
          <Route exact path="/gamesdevelopment" component={Games}></Route>
          <Route exact path="/agriculture" component={Agriculture}></Route>
          <Route exact path="/retail" component={Retail}></Route>
          <Route exact path="/nfttokendevelopment" component={Nft}></Route>
          <Route exact path="/nftmarketplace" component={NftMarket}></Route>
          <Route exact path="/termsandcondition" component={Terms}></Route>
          <Route exact path="/privacypolicy" component={Privacy}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
