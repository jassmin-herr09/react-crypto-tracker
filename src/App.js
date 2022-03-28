import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Fetch from 'react-fetch';
import './App.css';
import Coin from './Coin';

/* https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false */



function App() {
 const [coins, setCoins ] = useState([]);
 const [search,setSearch ] = useState('')
 useEffect(() => {
 
 axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   .then(res => {
     setCoins(res.data);
     console.log(res.data);
   })
   .catch(error => console.log('there is an error'));
  }, []);

const handleChng = e => {
  setSearch(e.target.value)
}

const filteringCoins = coins.filter(coin =>
   coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="coins-app">
      <div className="coin-search">
        <h2 className="coin-text">Search for a crypto</h2>
        <form>
          <input type="text" placeholder='Search'
            className="coin-input" onChange={handleChng}/>
        </form>
      </div>
       {filteringCoins.map(coin => {
         return(
           <Coin 
           key={coin.id}
           name={coin.name}
           image={coin.image}  
           symbol={coin.symbol}
           volume={coin.total_volume}
           marketcap={coin.market_cap}
           price={coin.current_price}
           priceChange={coin.price_change_percentage_24h}
           

           
               />
         )
       })}
    </div>
  );
}

export default App;


/*  

how or where would i use setCoins in the code below..'


useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
  
      // Work with JSON data here
      })
  
    .catch((err) => {
      console.log(err,'theres an error')
    })

  },[]); */
