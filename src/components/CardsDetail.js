import {React, useState} from "react";
import Axios from "axios";
import { render } from "@testing-library/react";

function CardsDetail() {

  const recipeInfo = [
      {uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3da1169eb633a5e4607890ebf7dee89f"}
  ]
  const [cards, setCards] = useState([]);

  const YOUR_APP_ID = "95512bc1";
  const YOUR_APP_KEY = "f525c8afc4f12b304ff167bf74e5c361";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  async function getCards() {
    const result = await Axios.get(url);
    console.log(result.data.hits);
    setCards(result.data.hits);
  }

  const renderRecipe = (recipeInfo, label) => {
    <div id="uri">{renderRecipe.uri}</div>
  }

  return (
    <>
      <div className="cards-container">
        <div className="cards-detail">
          <h1 onClick={getCards}>hello</h1>
          <p>{cards}</p>
        </div>
      </div>
    </>
  );
}

export default CardsDetail;
