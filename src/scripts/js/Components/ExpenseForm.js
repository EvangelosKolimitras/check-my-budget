import React from "react"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import moment from "moment"

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            note: props.expense ? props.expense.note : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ""
        }
    }

    HandlerChangeDescription = e => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    HandlerChangeNote = e => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    HandlerChangeAmount = e => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(() => ({ amount }))
    }
    onDateChange = createdAt => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onCalenderFocusedChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onSubmitHandler = e => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: "Please provide a description and amount."
            }))
            console.log(this.state.error)
        } else {
            this.setState(() => ({
                error: ""
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            console.log("Submitted")
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <h1>Form</h1>
                <form data-test='form' onSubmit={this.onSubmitHandler}>
                    <input type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.HandlerChangeDescription} />

                    <input type='text' placeholder={this.state.amount} value={this.state.amount} onChange={this.HandlerChangeAmount} />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onCalenderFocusedChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea placeholder='Enter your note here.' value={this.state.note} onChange={this.HandlerChangeNote}></textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
