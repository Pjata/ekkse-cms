import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Select from "react-select"
class AvaiblesSelector extends PureComponent {
  render() {
    const { avaibles } = this.props
    console.log(avaibles)
    const keys = Object.keys(avaibles)
    const optionsForKeys = keys.reduce((acc, curr) => {
      const values = Array.from(Array(avaibles[curr] + 1).keys())
      console.log(acc)
      console.log(curr)
      acc[curr] = values.map(value => ({
        value,
        label: value
      }))
      return acc
    }, {})
    console.log(optionsForKeys)
    return (
      <div>
        {keys.map(item => (
          <div>
            {item}:{" "}
            <Select key={item} value={0} options={optionsForKeys[item]} />
          </div>
        ))}
      </div>
    )
  }
}

AvaiblesSelector.propTypes = {}

export default AvaiblesSelector
