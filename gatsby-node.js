const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for page
  const page = path.resolve('./src/templates/page.js')

  const result = await graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const pages = result.data.allContentfulPage.edges

  // Create pages
  if (pages.length > 0) {
    pages.forEach((edge, index) => {
      const isHome = edge.node.slug === 'home'

      createPage({
        path: isHome ? `/` : `/${edge.node.slug}/`,
        component: page,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  }
}
