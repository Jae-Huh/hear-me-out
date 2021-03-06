import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

import Display from './Display'

const Home = () => {
  return (
    <div className="home">
      <Display message={'Home'} />
      <div className="home-menu-container">
        <Link to='/boards/default' className="home-links top-link"><div className="home-options">Default Board</div></Link>
        <Link to='/customised-boards' className="home-links"><div className="home-options">Customised Boards</div></Link>
        <Link to='/add-board' className="home-links"><div className="home-options">Create a Board</div></Link>
        <Link to='/text-field' className="home-links"><div className="home-options">Text to Voice</div></Link>
      </div>
      <div className="additional-info">
        <Link to='/about' className="additional-info-link"><p>About</p></Link>
        <Link to='/credits' className="additional-info-link"><p>Credits</p></Link>
      </div>
    </div>
  )
}

export default Home
