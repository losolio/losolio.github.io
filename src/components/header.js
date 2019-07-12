import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';


export default function Header ({ siteTitle }) {
  const [isSidebarExpanded, setSideBarExpanded] = useState(true);
  const toggleSidebar = () => setSideBarExpanded(!isSidebarExpanded);

  const propTypes = { siteTitle: PropTypes.string };
  const defaultProps = { siteTitle: ''};
  
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">{siteTitle}</NavbarBrand>
        <Button outline color="secondary" onClick={() => toggleSidebar()}>Menu {isSidebarExpanded.toString()}</Button>
        <Collapse navbar>
        </Collapse>
      </Navbar>
    </div>
  );
}
