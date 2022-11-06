
import React from 'react'
import TopBar from '../top/TopBar';

import './Layout.css'

const Layout = (props) => {
  return(
    <React.Fragment>
      <TopBar />
      

      <main className="main-content">
        {props.children}
      </main>

    </React.Fragment>
  );
}

export default Layout;