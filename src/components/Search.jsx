import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import FooterDark from './FooterDark';
import Loading from './Loading';
import Item from './Item';
import Noitems from './Noitems';

const Search = () => {

    const APP_KEY = "41db98da37556b1adfb6ecf778956292";
    const APP_ID = "1db8b322";

    const [headin, sethead] = useState("");
    const [resultApi, setResult] = useState([]);
    const[load,setLoad] = useState(false);
    const [firstSearch, setFirstSearch] = useState(0)
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
          // Call your function here
          handleCLick();
        }
      };

    const handleChange = (event) => {
        return sethead(event.target.value);
    };

    const handleCLick = () => {
        async function fetchData() {
            try {
                setLoad(true);
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${headin}&app_id=${APP_ID}&app_key=${APP_KEY}`);
                const result = (response.data.hits);
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
    };

    return (
        <div>
            <Header />
            <div className="search-page">
                <div className="search-banner-box">
                    <input type="text" name="headin" value={headin} onChange={handleChange} onKeyDown={handleEnterKey} placeholder='Search Recipes..' id="search-item-name"/>
                    <button onClick={handleCLick} className='search-item-btn'><i className="fa-brands fa-searchengin searchicon"></i></button>
                </div>
                <div className="items-area">
                    {load? (<Loading /> 
                    ) : (
                        (firstSearch!==0 && resultApi.length === 0 ? 
                            <Noitems />
                             :  resultApi.map( (item) => {
                                return <Item title={item.recipe.label} imageUrl={item.recipe.image} dishType={item.recipe.dishType} url={item.recipe.uri} api={item}/>
                                }) 
                    ))}
                </div>
            </div>
            <FooterDark />
        </div>
    )
}

export default Search
