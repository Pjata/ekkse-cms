import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const TelephelyekPageTemplate = ({ telephelyek }) => (
  <section className="section section--gradient">
    <div className="container">
      {telephelyek.map(({ image, title, heading, description }) => (
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div
                  className="full-width-image-container margin-top-0"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                      boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                      backgroundColor: "#f40",
                      color: "white",
                      padding: "1rem"
                    }}
                  >
                    {title}
                  </h2>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

TelephelyekPageTemplate.propTypes = {
  telephelyek: PropTypes.array
}

const TelephelyekPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TelephelyekPageTemplate telephelyek={frontmatter.telephelyek} />
    </Layout>
  )
}

TelephelyekPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default TelephelyekPage

export const telephelyekPage = graphql`
  query TelephelyekPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        telephelyek {
          title
          image
          heading
          description
        }
      }
    }
  }
`
