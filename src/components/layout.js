/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
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
  const [isSidebarExpanded, setSideBarExpanded] = useState(true);
  const toggleSidebar = () => setSideBarExpanded(!isSidebarExpanded);

  return (
    <>
      <Header siteTitle="Learning to code" />
      <Container fluid>
        <p>{isSidebarExpanded.toString()}</p>
        <Row>
          { isSidebarExpanded &&
            <Col md="2" tag="nav" className="sidebar-navigation">
              <DocNavigation 
                toggleSidebar={toggleSidebar}
                isExpanded={isSidebarExpanded} />
            </Col>
          }
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
