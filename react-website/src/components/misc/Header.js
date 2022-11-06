import React from 'react'
import './Header.css'
import Button from './Button'


const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Rise & Shine</h1>
                    <h2>Coffee cortado, qui beans galão froth to go. Blue mountain et single origin aged flavour variety affogato.</h2>
                    <Button />
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;