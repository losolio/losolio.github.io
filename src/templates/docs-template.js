import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import DocNavigation from '../components/doc-navigation';
import { Container, Row, Col } from "reactstrap";
import "../styles/main.scss";


class Template extends Component {

  render() {
    const { data } = this.props;
    const { markdownRemark: page } = data;
    return (
        <div className="page">
          <Header siteTitle="Learning to code" />
          <Container fluid>
            <Row>
            <Col md="2" tag="aside" className="sidebar-navigation">
              <DocNavigation />
            </Col>
            <Col className="pt-5">
            <div dangerouslySetInnerHTML={{ __html: page.html }} />     
            </Col>
            </Row>
          </Container>

        </div>
    );
  }
}

export default Template

export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
;