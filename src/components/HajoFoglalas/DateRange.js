import React, { PureComponent } from "react"

import moment from "moment"
import "react-day-picker/lib/style.css"
import DayPickerInput from "react-day-picker/DayPickerInput"
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment"
import "moment/locale/hu"
import Helmet from "react-helmet"

class DateRange extends PureComponent {
  constructor(props) {
    super(props)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.state = {
      from: undefined,
      to: undefined
    }
  }
  showFromMonth = () => {
    const { from, to } = this.props
    if (!from) {
      return
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.props.setRange({ from })
  }
  handleToChange(to) {
    this.props.setRange({ to }, this.showFromMonth)
  }
  render() {
    const { from, to } = this.props
    const modifiers = { start: from, end: to }
    return (
      <div>
        <div className="InputFromTo">
          <DayPickerInput
            value={from}
            placeholder="Bérlés kezdete"
            format="YYYY.MM.DD"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 2,
              onDayClick: () => this.to.getInput().focus(),
              locale: "hu",
              localeUtils: MomentLocaleUtils
            }}
            onDayChange={this.handleFromChange}
          />{" "}
          —>{" "}
          <span className="InputFromTo-to">
            <DayPickerInput
              ref={el => (this.to = el)}
              value={to}
              placeholder="Bérlés vége"
              format="YYYY.MM.DD"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: from },
                modifiers,
                month: from,
                fromMonth: from,
                numberOfMonths: 2,
                locale: "hu",
                localeUtils: MomentLocaleUtils
              }}
              onDayChange={this.handleToChange}
            />
          </span>
        </div>
        <Helmet>
          <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 600px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
  @media only screen and (max-width: 600px) {
    .InputFromTo .DayPickerInput-Overlay {
      width: 320px;
    }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left:0px;
  }
  }
`}</style>
        </Helmet>
      </div>
    )
  }
}

export default DateRange
