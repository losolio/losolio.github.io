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
          <Header siteTitle="Nice docs.." />
          <Container>
            <Row>
            <Col md="2" tag="aside">
              <DocNavigation />
            </Col>
            <Col>
            <h1>{page.frontmatter.title}</h1>
            <span>asdf</span>
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