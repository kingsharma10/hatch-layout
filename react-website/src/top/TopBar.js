import React from 'react'
import alarm from '../images/sunrise-alarm.svg';
import './TopBar.css'

const TopBar = () => {
    return (
        <ul>
            <p className='logo'><img src={alarm} alt="alarm"/></p>
        </ul>
    )
}

export default TopBar;