import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TestPage = () => (
  <Layout>
    <SEO title="Test one two" />
    <h1>Hi from the sectestond page</h1>
    <p>Welcome to test page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TestPage
