import React from 'react'

import Blocks from '../misc/Blocks'
import Header from '../misc/Header'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <h1 style={{textAlign: 'center'}}>Your heading here</h1>
            <Blocks />
        </React.Fragment>
    )
}

export default Home;
