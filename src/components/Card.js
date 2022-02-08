import { React, useState, useEffect } from "react";
import Axios from "axios";
import "./Card.css";
function Card() {
  const [cards, setCards] = useState([]);

  const YOUR_APP_ID = "95512bc1";
  const YOUR_APP_KEY = "f525c8afc4f12b304ff167bf74e5c361";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  async function getCards() {
    const result = await Axios.get(url);
    console.log(result.data.hits);
  }


  return (
    <>
      <div className="card-container">
        <div id="text1">
          <div className="txt-abs m-auto w-20 h-20">
            <h2>Coustom</h2>
          </div>
          <p>Website & interface design</p>
        </div>
        <br />
        <div className="para-content">
          <p className="content">
            Owing to the dominance of CMS based websites, almost every website
            looks similar. Kesavi Web Solutions provide custom UI/UX designing
            services to build a unique and unforgettable user experience for
            websites.
          </p>
        </div>
        <div className="card-wrappers">
          <div className="card-contents justify-center">
            <div className="content-left">
              <h3 className="cwd"> Custom Website Design</h3>
              <p className="para-1">
                Your content goes here. Edit or remove this text inline or in
                the module Content settings. You can also style every aspect of
                this content in the module Design settings and even apply custom
                CSS to this text in the module Advanced settings.
              </p>
              <div className="vertically-center">
                <button className="learn-btn" onClick={getCards}>
                  {" "}
                  Learn More
                </button>
                <div></div>
              </div>
            </div>

            <div className="content-center">
              <h3 className="ui-ux">UI/UX Design</h3>
              <p className="para-2">
                Your content goes here. Edit or remove this text inline or in
                the module Content settings. You can also style every aspect of
                this content in the module Design settings and even apply custom
                CSS to this text in the module Advanced settings.
              </p>
              <div className="vertically-center">
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

            <div className="content-right">
              <h3 className="ww">WordPress Website</h3>
              <p className="para-3">
                Your content goes here. Edit or remove this text inline or in
                the module Content settings. You can also style every aspect of
                this content in the module Design settings and even apply custom
                CSS to this text in the module Advanced settings.
              </p>
              <div className="vertically-center">
                <button className="learn-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default Card;
