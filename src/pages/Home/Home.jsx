import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import {Link} from 'react-router-dom'

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault();  //to prevent from loading of page
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])

  return (
    <div className='home'>
      <div className="head">
        <h1>Digital Currency Marketplace <br />updates, market values, and more</h1>
        <h2><i>“If you like gold, there are many reasons you should like bitcoin.”</i></h2>
        <p>Welcom to CryptoTech!</p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coinList' value={input} type='text' placeholder='search crypto..' required />
          <datalist id='coinList'>
            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-frame">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (  //get multiple data but we want to display 10 data
            <Link to={`/coin/${item.id}`}className="table-frame" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt='' />
                <p>{item.name + "-" + item.symbol}</p>
              </div>
              <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
