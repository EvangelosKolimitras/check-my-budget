import React from "react"
import { connect } from "react-redux"
import ExpenseForm from "../Components/ExpenseForm"
import { EDIT_EXPENSE, REMOVE_EXPENSE } from "../redux/actions/expenses"

export class Edit extends React.Component {
    onSubmit = expense => {
        this.props.editExp(this.props.expense.id, expense)
        this.props.history.push("/dashboard")
    }

    onRemove = () => {
        this.props.removeExp({ id: this.props.expense.id })
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onRemove={this.onRemove}> Remove Item </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExp: (id, expense) => dispatch(EDIT_EXPENSE(id, expense)),
        removeExp: props => dispatch(REMOVE_EXPENSE(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
