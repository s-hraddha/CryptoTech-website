import React from 'react'
import './section.css'
import BB from '../../assets/BB.png'
import Cnn from '../../assets/Cnn.png'
import CD from '../../assets/CD.png'
import FOR from '../../assets/FOR.png'


const Section = () => {
    return (
        <div className='section'>
            <div className="header">
                <h1>CryptoMarket in the media</h1>
                <p>We've made an appearance in:</p>
            </div>
            <div className='present'>
                <ul>
                    <li><img className='BB'src={BB} alt=''style={{ width: "50%" }}/></li>
                    <li><img className='cnn'src={Cnn} alt=''/></li>
                    <li><img className='cd'src={CD} alt=''style={{ width: "50%" }}/></li>
                    <li><img className='for'src={FOR} alt=''/></li>
                </ul>
            </div>
        </div>
    )
}

export default Section
