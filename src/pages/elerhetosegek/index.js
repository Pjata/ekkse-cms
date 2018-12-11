import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

export const Elerhetoseg = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1 columns">
            <div className="column is-2">Telefonszámok:</div>
            <div className="column is-10">
              <div>Sanyi: 10</div>
              <div>Sanyi: 10</div>
              <div>Sanyi: 10</div>
              <div>Sanyi: 10</div>
              <div>Sanyi: 10</div>
              <div>Sanyi: 10</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1 columns">
            <div className="column is-2">Email:</div>
            <div className="column is-10">
              <div>F1: Sanyi@hu.hu</div>
              <div>Sanyi@hu.hu</div>
              <div>Sanyi@hu.hu</div>
              <div>Sanyi@hu.hu</div>
              <div>Sanyi@hu.hu</div>
              <div>Sanyi@hu.hu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Elerhetoseg
