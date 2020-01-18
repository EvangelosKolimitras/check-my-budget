import React from "react"
import { connect } from "react-redux"
import numeral from "numeral"
import selectExpenses from "../redux/selectors/expenses"
import Totals from "../Components/Totals"

export const ExpenseSum = ({ expensesCount, total }) => {
    const formatTotal = numeral(total / 100).format("0,0.00") + "€"
    return (
        <div>
            <h1>
                Total {expensesCount}: {formatTotal}
            </h1>
        </div>
    )
}

const mapStateToProps = state => {
    const visExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visExpenses.length,
        total: Totals(visExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSum)
