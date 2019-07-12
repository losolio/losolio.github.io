import React from "react";
import Link from "gatsby-link";
import { Nav, NavItem, NavLink } from "reactstrap";

const DocNavigation = props => {
  return (
    <div class="pt-5 pl-3">
      <header>Docker</header>
      <Nav vertical>
        <NavItem>
          <NavLink href="/docker">Docker</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/docker/mssql">MS SQL</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/toolbox">Toolbox</NavLink>
        </NavItem>
      </Nav>

      <header class="pt-5">Web</header>
      <Nav vertical>
        <NavItem>
          <NavLink href="/web/accessibility">Accessibility</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/web/flexbox">Flexbox</NavLink>
        </NavItem>
      </Nav>
    </div>
  ) 
}

export default DocNavigation