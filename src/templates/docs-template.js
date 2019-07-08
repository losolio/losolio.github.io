import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Template extends Component {

  render() {
    const { data } = this.props;
    const { markdownRemark: page } = data;
    return (
        <div className="page">
            <h1>{page.frontmatter.title}</h1>
            <span>asdf</span>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
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