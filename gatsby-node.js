// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
var path = require('path');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const docsTemplate = path.resolve(`src/templates/docs-template.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  html, 
                  id,
                  frontmatter {
                    path,
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: docsTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
            },
          })
        })
      })
    )
  })
}