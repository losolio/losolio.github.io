import React from 'react'
import Link from 'gatsby-link'

const Sidebar = () => (
  
  <div>
    <header>Navigation</header>
    <ul>
      <li><Link to="/docker">Docker</Link></li>
    </ul>
    <header>About</header>
    <ul>
      <li><Link to="/tools">Toolbox</Link></li>
    </ul>
    </div>
)
export default Sidebar