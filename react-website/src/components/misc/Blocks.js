import React from 'react'
import './Blocks.css'
import waves from '../../images/wavy-lines-icon.svg';
import heart from '../../images/sunshine-heart-icon.svg';
import alarm from '../../images/sunrise-alarm.svg';

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <ul className="blocks">
                    <li className="grey">
                        <img style={{paddingTop: '15px'}} src={waves} alt="waves"/>
                        <p style={{paddingTop: '20px'}}>Text</p>
                    </li>
                </ul>
                </div>

                <div className="columns">
                <ul className="blocks">
                    <li className="grey">
                        <img src={heart} alt="heart"/>
                        <p>Text</p>
                    </li>
                </ul>
                </div>

                <div className="columns">
                <ul className="blocks">
                    <li className="grey">
                        <img src={alarm} alt="alarm"/>
                        <p>Text</p>
                    </li>
                </ul>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home;