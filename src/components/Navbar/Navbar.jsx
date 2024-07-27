import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { setCurrency } = useContext(CoinContext)

    //currencyHandler function that will change the currency
    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" });
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
        }
    }
    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img className='logo' src={logo} alt="" />
            </Link>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EURO</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar