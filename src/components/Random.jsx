import React, { useState } from 'react'
import axios from 'axios'
import randomrecipe from '../randomrecipe.js'
import Item from './Item.jsx'
import Header from './Header';
import Loading from './Loading.jsx';
import FooterDark from './FooterDark';

const Random = () => {

  const APP_KEY = "41db98da37556b1adfb6ecf778956292";
  const APP_ID = "1db8b322";

  const randomIndex = Math.floor(Math.random() * randomrecipe.length);
  const randomReciepe = randomrecipe[randomIndex]
  const [firstSearch, setFirstSearch] = useState(0)

  const [resultApi, setResult] = useState([]);

  const [btnTxtChnage, setBtnTxtChange] = useState(0);
  const [load, setLoad] = useState(false);


  const handleCLick = () => {

    async function fetchData() {
      try {
        setLoad(true);
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${randomReciepe}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const result = response.data.hits;
        setLoad(false);
        setFirstSearch(1);
        return setResult(result);
      } catch (error) {
        // Handle errors, if any
        setLoad(false);
        throw error; // You can re-throw the error or handle it here
      }

    }
    fetchData();
    setBtnTxtChange(1);
  };

  return (
    <div>
      <Header />
      <div className="Random-page">
        <button onClick={handleCLick} className='random-page-btn'>
          {btnTxtChnage === 0 ? "Cook Up Something Unexpected" : "Explore Another Delight"}
        </button>
        <div className="items-area">
          {load ? (
            <Loading />
          ) : (
            resultApi.length > 0 ? (
              resultApi.map((item) => (
                <Item title={item.recipe.label} imageUrl={item.recipe.image} url={item.recipe.uri} dishType={item.recipe.dishType} api={item} />
              ))
            ) : null
          )}
        </div>

      </div>
      <FooterDark />
    </div>
  )
}

export default Random
