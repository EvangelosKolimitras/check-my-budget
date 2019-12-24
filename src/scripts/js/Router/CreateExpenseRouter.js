import React from "react"
import ExpenseForm from "../Components/ExpenseForm"
import { connect } from "react-redux"
import { ADD_EXPENSE } from "../redux/actions/expenses"

export class Add extends React.Component {
    onSubmit = expense => {
        this.props.onSubmit(expense)
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <h1>Add an expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} history={this.history} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: expense => dispatch(ADD_EXPENSE(expense))
})
export default connect(undefined, mapDispatchToProps)(Add)
