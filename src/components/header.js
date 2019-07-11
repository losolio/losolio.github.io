import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const Header = ({ props, siteTitle }) => (
  <div>
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{siteTitle}</NavbarBrand>
    <Button outline color="secondary">Menu</Button>{' '}
    <Collapse navbar>
    </Collapse>
  </Navbar>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
