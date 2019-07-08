import React, { Component } from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Template extends Component {
  render() {
    const { markdownRemark: page } = this.props.data
    return (
      <Layout>
        <SEO title={page.frontmatter.title} />

        <div>
          <div className="page">
            <header>
              <h1>{page.frontmatter.title}</h1>
              <span>{page.frontmatter.baseline}</span>
            </header>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
        </div>
      </Layout>
    )
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
