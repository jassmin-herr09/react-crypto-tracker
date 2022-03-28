import React from 'react'
import './Coin.css'

const Coin = ({name,image,symbol,volume,price,marketcap,priceChange}) => {
 return(
     <div className='coin-container'>
         <div className="coin-rows">
             <div className="coin">
                 <img src={image} alt="crypto"/>
                  <h2>{name}</h2>
                  <p className="coin-symb">{symbol}</p>
             </div>
             <div className="coin-data">
                 <p className="coin-price">${price.toLocaleString()}</p>
          
                 <p className="coin-volume">${volume.toLocaleString()
                 }</p>
                
                {priceChange < 0 ? (
                    <p className='coin-percent red'>{priceChange.
                        toFixed(2)}%</p>
                ) : (
                    <p className='coin-percent green'>{priceChange.
                        toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>
                    MC ${marketcap.toLocaleString()}
                </p>

             </div>
         </div>

     </div>
 );

};

export default Coin;
