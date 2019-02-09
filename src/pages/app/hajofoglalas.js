import React, { PureComponent } from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import DayPickerInput from "react-day-picker/DayPickerInput"
import MomentLocaleUtils from "react-day-picker/moment"
import "moment/locale/hu"
import moment from "moment"
import "react-day-picker/lib/style.css"
import Steps, { Step } from "rc-steps"
//import ApolloClient from "apollo-boost"
//import gql from "graphql-tag"
//import AvaiblesSelector from "../../components/HajoFoglalas/AvaiblesSelector"

/*
const client = new ApolloClient({
  uri: "http://localhost:4000"
})
*/

const DateSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const InputContainer = styled.div`
  margin: 10px;
`

class HajoFoglalas extends PureComponent {
  state = {
    from: undefined,
    to: undefined,
    avaibles: []
  } /*
  getAvaible = () => {
    const { from, to } = this.state
    if (from && to) {
      client
        .query({
          query: gql`
            query {
              reservationAvaible(
                reservation: {
                  name: "asdas"
                  from: "2018-11-29T14:35:30.843Z"
                  to: "2018-11-30T14:35:30.843Z"
                  reserved: [
                    { personCount: 1 }
                    { personCount: 1 }
                    { personCount: 2 }
                  ]
                }
              ) {
                avaibles
              }
            }
          `
        })
        .then(({ data: { reservationAvaible } }) =>
          this.setState({
            avaibles: reservationAvaible.avaibles
          })
        )
    }
  }
  setRange = (data, callback) => {
    this.setState(data, () => {
      this.getAvaible()
      callback && callback()
    })
  }
  /*
  getFirstStep() {
    const { from, to, avaibles } = this.state
    return (
      <div>
        <DateRange from={from} to={to} setRange={this.setRange} />
        <AvaiblesSelector avaibles={avaibles} />
      </div>
    )
  }
  */

  /*getContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.getFirstStep()
    }
  }*/
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <DateSelectContainer>
                <InputContainer>
                  <DayPickerInput
                    placeholder={"Mikortól..."}
                    formatDate={date => moment(date).format("YYYY.MM.DD")}
                  />
                </InputContainer>
                <InputContainer>
                  <DayPickerInput
                    placeholder={"Meddig..."}
                    formatDate={date => moment(date).format("YYYY.MM.DD")}
                  />
                </InputContainer>
              </DateSelectContainer>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

HajoFoglalas.propTypes = {}

export default HajoFoglalas
