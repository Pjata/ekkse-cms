import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styeld from "styled-components"
import Content, { HTMLContent } from "../components/Content"

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div
                className="full-width-image-container-rolunk margin-top-0"
                style={{
                  backgroundImage: `url(/img/ekkse1.jpg)`,
                  backgroundPosition: "top"
                }}
              />
              <h3 className="content has-text-weight-semibold is-size-2">
                Rólunk
              </h3>
              <div className="content has-text-justified">
                <p>
                  Az EKKSE 2008-ban alakult meg lelkes támogatók segítségével.
                  Célunk,hogy az esztergomi fiatalok akár hobbi szinten,akár
                  versenyszerűen űzhessék ezt a gyönyörű vízisportot. Büszkék
                  vagyunk rá, hogy alapítótagjaink között van Storcz Botond
                  háromszoros olimpiai bajnok, aki 2008-ban egyesületünk
                  színeiben indult országos és nemzetközi versenyeken.
                  Tagságáról a Magyar Kajak-Kenu Szövetség felnőtt válogatott
                  kapitányának való megválasztása után mondott le, de a mai
                  napig visszajár Esztergomba, és figyelemmel kíséri az itt
                  folyó munkát. 2010-ben új, tágas telephelyet biztosított
                  számunkra a Esztergomi Temesvári Pelbárt Ferences Gimnázium,
                  amely veztőségének ezúton is köszönjük az önzetlen segítséget.
                  2011-től Egyesületünk CEPEI EKKSE néven folytatja
                  tevékenységét, ezzel is megköszönve a CEPEI Kft. aktív
                  támogatását. Közreműködésük jelentős szerepet játszik az
                  Egyesület életében. Nekik köszönhetjük, hogy Kökény Roland a
                  2010-2011. évben az EKKSE színeiben versenyezhet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query RolunkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
