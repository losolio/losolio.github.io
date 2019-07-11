/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Navbar from "./navbar";
import DocNavigation from "./doc-navigation";
import { Container, Row, Col } from "reactstrap";
import "../styles/main.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col md="2" tag="nav" className="sidebar-navigation">
            <DocNavigation />
          </Col>
          <Col className="pt-5">
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
