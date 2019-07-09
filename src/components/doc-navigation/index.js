import React from 'react'
import Link from 'gatsby-link'

const DocNavigation = () => (
  
  <div>
    <header>Navigation</header>
    <ul>
      <li><Link to="/docker">Docker</Link></li>
    </ul>
    <header>About</header>
    <ul>
      <li><Link to="/toolbox">Toolbox</Link></li>
    </ul>
    </div>
)
export default DocNavigation