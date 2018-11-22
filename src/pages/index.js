import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import cover from "../img/cover0.jpg"
import Carousel from "../components/Carousel"
const NewsElement = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 15px;
  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
`
const Image = styled.img`
  @media (max-width: 700px) {
    height: 100px;
  }
`

const FullImage = styled.div`
  box-shadow: 0px 15px 15px #fff inset, 0px -15px 15px #fff inset;
  width: 100%;
  background-image: url(${props => props.src});
  background-position-x: 50%;
  background-size: 100%;
`
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Carousel />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Friss híreink</h1>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                key={post.id}
              >
                <NewsElement>
                  <Image src={post.frontmatter.image} />
                  <div>
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Folytatás →
                      </Link>
                    </p>
                  </div>
                </NewsElement>
              </div>
            ))}
          </div>
        </section>
        <FullImage src={cover}>
          <img src={cover} style={{ visibility: "hidden" }} />
        </FullImage>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            templateKey
            date(formatString: "YYYY. MMMM DD.", locale: "hu")
          }
        }
      }
    }
  }
`
